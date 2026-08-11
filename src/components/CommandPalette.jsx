import { useEffect, useMemo, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import Icon from "./Icon.jsx";
import { ROUTES } from "../data/routes.js";
import { certificates, contact, socials } from "../data/site.js";
import { projects } from "../data/projects.js";
import { experience, education } from "../data/record.jsx";

/**
 * ⌘K. The site's primary navigation for anyone who would rather type than
 * scroll, and the clearest single demonstration on the page that the person who
 * built it builds applications.
 *
 * Indexes every route, all 21 case files, every role and qualification in the
 * service record, all 16 certificates, and the real actions (CV, email,
 * WhatsApp, profiles) — 60+ targets, none of them invented.
 *
 * Matching is prefix > substring > subsequence, so "nxs" finds NexStock and
 * "flut" finds every Flutter build. Fully keyboard driven, focus is restored to
 * whatever opened it, and the list is a real ARIA listbox.
 */

const ACTIONS = [
  { id: "cv-en", title: "Download CV (English)", sub: "PDF", icon: "download", href: "/assets/Farhaan Beeharry CV.pdf", ext: true },
  { id: "cv-fr", title: "Télécharger le CV (Français)", sub: "PDF", icon: "download", href: "/assets/Farhaan Beeharry CV_FRENCH.pdf", ext: true },
  { id: "email", title: `Email ${contact.email}`, sub: "mailto", icon: "mail", href: `mailto:${contact.email}` },
  { id: "wa", title: `WhatsApp ${contact.phone}`, sub: "wa.me", icon: "whatsapp", href: contact.whatsapp, ext: true },
  ...socials.map((s) => ({
    id: `social-${s.icon}`,
    title: s.label,
    sub: new URL(s.href).hostname.replace(/^www\./, ""),
    icon: s.icon,
    href: s.href,
    ext: true,
  })),
];

/** prefix (3) > substring (2) > subsequence (1) > no match (0) */
function score(haystack, needle) {
  const h = haystack.toLowerCase();
  const n = needle.toLowerCase();
  if (!n) return 1;
  if (h.startsWith(n)) return 3;
  if (h.includes(n)) return 2;
  let i = 0;
  for (const ch of h) if (ch === n[i]) i++;
  return i === n.length ? 1 : 0;
}

export default function CommandPalette({ open, onClose, onRoute }) {
  const navigate = useNavigate();
  const [q, setQ] = useState("");
  const [cursor, setCursor] = useState(0);
  const inputRef = useRef(null);
  const listRef = useRef(null);
  const restoreRef = useRef(null);
  // the full placeholder is clipped mid-word at 390px
  const [mobile, setMobile] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia("(max-width: 620px)");
    const sync = () => setMobile(mq.matches);
    sync();
    mq.addEventListener("change", sync);
    return () => mq.removeEventListener("change", sync);
  }, []);

  // Everything the palette can reach, built once.
  const index = useMemo(() => {
    const items = [];
    ROUTES.forEach((r) =>
      items.push({ kind: "Route", id: `route-${r.id}`, title: r.label, sub: r.count != null ? `${r.count} entries` : "section", icon: r.icon, route: r.id })
    );
    // Indexed from `projects`, not the work list, because only this carries
    // `tags` — without them "flut" matched two roles and zero of the ten Flutter
    // builds, which is the single likeliest query a recruiter types.
    projects.forEach((p) =>
      items.push({
        kind: "Case file",
        id: `work-${p.slug}`,
        title: p.disp,
        sub: p.category,
        terms: p.tags.join(" "),
        icon: "grid",
        to: `/portfolio/${p.slug}`,
      })
    );
    experience.forEach((e, i) =>
      items.push({ kind: "Role", id: `role-${i}`, title: e.title, sub: [e.org, e.period].filter(Boolean).join(" · "), icon: "log", route: "service-log" })
    );
    education.forEach((e, i) =>
      items.push({ kind: "Education", id: `edu-${i}`, title: e.title, sub: `${e.org} · ${e.period}`, icon: "cap", route: "service-log" })
    );
    certificates.forEach((c, i) =>
      items.push({
        kind: "Certificate",
        id: `cert-${i}`,
        title: c.title,
        sub: `${c.meta} · ${c.date}`,
        icon: "award",
        href: c.links[0]?.href,
        ext: !!c.links[0],
        route: c.links[0] ? undefined : "certification",
      })
    );
    ACTIONS.forEach((a) => items.push({ ...a, kind: "Action" }));
    return items;
  }, []);

  const results = useMemo(() => {
    const needle = q.trim();
    const scored = index
      .map((it) => ({
        it,
        // Title wins, then the subtitle, then the tag terms. Tags are discounted
        // hardest so a tag hit never outranks a real title match.
        s: Math.max(
          score(it.title, needle),
          score(it.sub || "", needle) - 0.4,
          score(it.terms || "", needle) - 0.6
        ),
      }))
      .filter((r) => r.s > 0);
    scored.sort((a, b) => b.s - a.s);
    // With no query, show everything — slicing to 60 of 67 left the email,
    // WhatsApp and profile actions reachable only by typing.
    return needle ? scored.slice(0, 40).map((r) => r.it) : scored.map((r) => r.it);
  }, [q, index]);

  // group in a stable order for display
  const groups = useMemo(() => {
    const order = ["Route", "Case file", "Role", "Education", "Certificate", "Action"];
    const map = new Map();
    results.forEach((it) => {
      if (!map.has(it.kind)) map.set(it.kind, []);
      map.get(it.kind).push(it);
    });
    return order.filter((k) => map.has(k)).map((k) => [k, map.get(k)]);
  }, [results]);

  const flat = useMemo(() => groups.flatMap(([, items]) => items), [groups]);

  useEffect(() => setCursor(0), [q]);

  // open/close lifecycle: lock scroll, focus the input, restore focus after
  useEffect(() => {
    if (!open) return;
    restoreRef.current = document.activeElement;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const t = setTimeout(() => inputRef.current?.focus(), 20);
    return () => {
      clearTimeout(t);
      document.body.style.overflow = prev;
      const el = restoreRef.current;
      if (el && typeof el.focus === "function") el.focus();
    };
  }, [open]);

  useEffect(() => {
    if (!open) setQ("");
  }, [open]);

  // keep the cursor row in view
  useEffect(() => {
    if (!open) return;
    const el = listRef.current?.querySelector('[aria-selected="true"]');
    el?.scrollIntoView({ block: "nearest" });
  }, [cursor, open, groups]);

  const run = (it) => {
    onClose();
    if (it.route) {
      onRoute(it.route);
      return;
    }
    if (it.to) {
      navigate(it.to);
      window.scrollTo({ top: 0, behavior: "auto" });
      return;
    }
    if (it.href) {
      if (it.ext) window.open(it.href, "_blank", "noopener");
      else window.location.href = it.href;
    }
  };

  const onKeyDown = (e) => {
    if (e.key === "Escape") {
      e.preventDefault();
      onClose();
    } else if (e.key === "ArrowDown") {
      e.preventDefault();
      setCursor((c) => (flat.length ? (c + 1) % flat.length : 0));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setCursor((c) => (flat.length ? (c - 1 + flat.length) % flat.length : 0));
    } else if (e.key === "Home") {
      e.preventDefault();
      setCursor(0);
    } else if (e.key === "End") {
      e.preventDefault();
      setCursor(Math.max(0, flat.length - 1));
    } else if (e.key === "Enter") {
      e.preventDefault();
      if (flat[cursor]) run(flat[cursor]);
    } else if (e.key === "Tab") {
      // the palette is the whole interaction while it is open
      e.preventDefault();
    }
  };

  if (!open) return null;

  const activeId = flat[cursor]?.id;

  return (
    <>
      <div className="palette-scrim" onClick={onClose} />
      <div
        className="palette"
        role="dialog"
        aria-modal="true"
        aria-label="Command palette"
        onKeyDown={onKeyDown}
      >
        <div className="palette-input">
          <Icon name="search" size={17} />
          <input
            ref={inputRef}
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder={mobile ? "Search…" : "Search projects, roles, certificates, actions…"}
            role="combobox"
            aria-expanded="true"
            aria-controls="palette-list"
            aria-activedescendant={activeId}
            aria-autocomplete="list"
            autoComplete="off"
            spellCheck="false"
          />
          <span className="kbd">esc</span>
        </div>

        <div className="palette-list" id="palette-list" role="listbox" ref={listRef} aria-label="Results">
          {!flat.length && (
            <p className="palette-empty">
              Nothing matches “{q}”.
            </p>
          )}
          {groups.map(([kind, items]) => (
            <div className="palette-group" key={kind} role="group" aria-label={kind}>
              <span className="label">{kind}</span>
              {items.map((it) => {
                const i = flat.indexOf(it);
                return (
                  <button
                    key={it.id}
                    id={it.id}
                    type="button"
                    role="option"
                    aria-selected={i === cursor}
                    className="palette-item"
                    onMouseMove={() => i !== cursor && setCursor(i)}
                    onClick={() => run(it)}
                  >
                    <Icon name={it.icon} size={16} />
                    <span className="pi-main">
                      <span className="pi-title">{it.title}</span>
                      {it.sub && <span className="pi-sub">{it.sub}</span>}
                    </span>
                    <span className="pi-kind">{it.kind === "Case file" ? "open" : it.ext ? "external" : "go"}</span>
                  </button>
                );
              })}
            </div>
          ))}
        </div>

        <div className="palette-foot">
          <span className="hint"><Icon name="updown" size={12} /> navigate</span>
          <span className="hint"><Icon name="enter" size={12} /> select</span>
          <span className="hint" style={{ marginLeft: "auto" }}>
            {flat.length} of {index.length}
          </span>
        </div>
      </div>
    </>
  );
}
