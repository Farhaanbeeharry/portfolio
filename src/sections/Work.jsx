import { useMemo, useRef, useState } from "react";
import { Link } from "react-router-dom";
import Icon from "../components/Icon.jsx";
import { work } from "../data/site.js";
import { TECH, searchTerms } from "../data/tech.js";

/* Labels for the categories that actually occur in the data. The original filter
   bar advertised a "Desktop" switch that matched nothing; a control that can only
   return an empty result is a defect, so the set is derived. */
const LABELS = {
  web: "Web",
  mobile: "Mobile",
  ui_ux: "UI / UX",
  arduino: "Hardware",
  competition: "Competition",
};

export default function Work() {
  const [active, setActive] = useState("all");
  const [q, setQ] = useState("");
  const inputRef = useRef(null);

  const filters = useMemo(() => {
    const present = new Set();
    work.forEach((w) => w.dataCat.split(/\s+/).forEach((c) => c && present.add(c)));
    return [["all", "All"], ...Object.entries(LABELS).filter(([k]) => present.has(k))];
  }, []);

  /* Search covers the title, the category label and the curated stack + domain,
     so "flutter", "supabase", "inventory" and "hotel" all find the right work. */
  const visible = useMemo(() => {
    const needle = q.trim().toLowerCase();
    return work.filter((w) => {
      if (active !== "all" && !w.dataCat.split(/\s+/).includes(active)) return false;
      if (!needle) return true;
      return (
        w.title.toLowerCase().includes(needle) ||
        w.cat.toLowerCase().includes(needle) ||
        searchTerms(w.slug).includes(needle)
      );
    });
  }, [active, q]);

  const filtered = active !== "all" || q.trim().length > 0;

  return (
    <section className="view" id="work">
      <div className="view-head">
        <h2 className="view-title">Work</h2>
        <span className="mono meta" style={{ color: "var(--fg-3)" }}>
          {visible.length}/{work.length} shown
        </span>
      </div>

      <div className="deck-tools">
        <div className="deck-search">
          <Icon name="search" size={15} />
          <input
            ref={inputRef}
            type="search"
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder="Search by name, stack or domain — flutter, supabase, inventory…"
            aria-label="Search the work"
            spellCheck="false"
            autoComplete="off"
          />
          {q && (
            <button className="clear" onClick={() => { setQ(""); inputRef.current?.focus(); }} aria-label="Clear search">
              <Icon name="close" size={13} />
            </button>
          )}
        </div>

        <div className="filters" role="group" aria-label="Filter work by category">
          {filters.map(([key, label]) => (
            <button
              key={key}
              className="filter"
              aria-pressed={active === key}
              onClick={() => setActive(key)}
            >
              {label}
            </button>
          ))}
        </div>
      </div>

      <div className="deck" data-tilt>
        {visible.map((w, i) => (
          <Link
            key={w.slug}
            to={`/portfolio/${w.slug}`}
            className="card"
            /* --i staggers the mount animation. The animation replays whenever a
               card mounts, which is what makes filtering work: the previous
               build used the scroll-reveal observer, and cards mounted after its
               single pass were never observed, so a filter change left the deck
               at opacity 0 — the blank space. */
            style={{ "--i": Math.min(i, 8) }}
          >
            <div className="card-media">
              <img src={w.thumb} alt="" loading="lazy" />
            </div>
            <div className="card-body">
              <span className="txt">
                <h3>{w.title}</h3>
                <span className="cat">{w.cat}</span>
              </span>
              <span className="go" aria-hidden="true">
                <Icon name="arrowRight" size={14} />
              </span>
            </div>
            {TECH[w.slug] && (
              <div className="card-stack">
                {TECH[w.slug].stack.slice(0, 3).map((s) => (
                  <span key={s}>{s}</span>
                ))}
              </div>
            )}
          </Link>
        ))}

        {!visible.length && (
          <div className="deck-empty">
            <p>
              Nothing matches{q.trim() ? ` “${q.trim()}”` : ""}
              {active !== "all" ? ` in ${LABELS[active]}` : ""}.
            </p>
            <button
              className="btn btn-ghost btn-sm"
              onClick={() => { setActive("all"); setQ(""); }}
            >
              <Icon name="close" size={13} />
              Clear filters
            </button>
          </div>
        )}
      </div>

      {filtered && visible.length > 0 && (
        <button
          className="btn btn-ghost btn-sm deck-reset"
          onClick={() => { setActive("all"); setQ(""); }}
        >
          <Icon name="close" size={13} />
          Show all {work.length}
        </button>
      )}
    </section>
  );
}
