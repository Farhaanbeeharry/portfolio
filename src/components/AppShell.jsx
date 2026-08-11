import { useCallback, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Icon from "./Icon.jsx";
import CommandPalette from "./CommandPalette.jsx";
import StatusBar from "./StatusBar.jsx";
import { ROUTES, TABS } from "../data/routes.js";
import { socials, contact } from "../data/site.js";

/**
 * The application chrome.
 *
 * Desktop wears desktop-app chrome — a persistent rail with badged counts and a
 * status bar reporting real telemetry. Below 900px it wears mobile-app chrome
 * instead: a bottom tab bar. A mobile engineer's site adapting its own chrome to
 * the platform it is running on is the thesis stated in the interface rather
 * than in a paragraph.
 *
 * Route links are real anchors (or Links from a case page), so every route is
 * addressable, middle-clickable and keyboard-reachable. Only the palette needs
 * scripted navigation.
 */
export default function AppShell({ children, activeId = "overview", home = true, routeLabel }) {
  const [paletteOpen, setPaletteOpen] = useState(false);
  const [mac, setMac] = useState(false);

  useEffect(() => {
    setMac(/Mac|iPod|iPhone|iPad/.test(navigator.platform || navigator.userAgent));
  }, []);

  useEffect(() => {
    const onKey = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setPaletteOpen((o) => !o);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  // Used by the palette only; the visible navigators are plain links.
  const goToRoute = useCallback(
    (id) => {
      if (!home) {
        window.location.href = `/#${id}`;
        return;
      }
      const el = document.getElementById(id);
      if (!el) return;
      history.replaceState(null, "", `#${id}`);
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    },
    [home]
  );

  const RouteLink = ({ id, className, children: kids, ...rest }) =>
    home ? (
      <a href={`#${id}`} className={className} {...rest}>{kids}</a>
    ) : (
      <Link to={`/#${id}`} className={className} {...rest}>{kids}</Link>
    );

  const active = ROUTES.find((r) => r.id === activeId);

  return (
    <>
      <header className="topbar">
        {home ? (
          <a href="#overview" className="brand" aria-label="Farhaan Beeharry — top">
            <span className="brand-mark" aria-hidden="true">FB</span>
            <span className="brand-name">Farhaan Beeharry</span>
          </a>
        ) : (
          <Link to="/#overview" className="brand" aria-label="Farhaan Beeharry — home">
            <span className="brand-mark" aria-hidden="true">FB</span>
            <span className="brand-name">Farhaan Beeharry</span>
          </Link>
        )}

        <span className="brand-sep" aria-hidden="true">/</span>
        <span className="brand-route">{routeLabel || active?.label || "Overview"}</span>

        <button
          className="omni"
          onClick={() => setPaletteOpen(true)}
          aria-label="Open command palette"
          aria-keyshortcuts="Meta+K Control+K"
        >
          <Icon name="search" size={15} />
          <span className="txt">Jump to…</span>
          <span className="keys" aria-hidden="true">
            <span className="kbd">{mac ? "⌘" : "Ctrl"}</span>
            <span className="kbd">K</span>
          </span>
        </button>

        <a
          className="btn btn-primary btn-sm topbar-cta"
          href="/assets/Farhaan Beeharry CV.pdf"
          target="_blank"
          rel="noopener"
        >
          <Icon name="download" size={14} />
          CV
        </a>
      </header>

      <nav className="rail" aria-label="Primary">
        <div className="rail-group">
          <span className="label">Routes</span>
          {ROUTES.map((r) => (
            <RouteLink
              key={r.id}
              id={r.id}
              className={`route${activeId === r.id ? " active" : ""}`}
              aria-current={activeId === r.id ? "true" : undefined}
            >
              <Icon name={r.icon} size={16} />
              {r.label}
              {r.count != null && <span className="count">{r.count}</span>}
            </RouteLink>
          ))}
        </div>

        <div className="rail-foot">
          <span className="label">Elsewhere</span>
          <div className="socials">
            {socials.map((s) => (
              <a key={s.icon} href={s.href} target="_blank" rel="noopener" aria-label={s.label} title={s.label}>
                <Icon name={s.icon} size={16} />
              </a>
            ))}
          </div>
        </div>
      </nav>

      {children}

      <StatusBar activeId={activeId} />

      <nav className="tabbar" aria-label="Primary">
        {TABS.map((r) => (
          <RouteLink
            key={r.id}
            id={r.id}
            className={`tab${activeId === r.id ? " active" : ""}`}
            aria-current={activeId === r.id ? "true" : undefined}
          >
            <Icon name={r.icon} size={19} />
            {r.short}
          </RouteLink>
        ))}
      </nav>

      <CommandPalette
        open={paletteOpen}
        onClose={() => setPaletteOpen(false)}
        onRoute={goToRoute}
      />
    </>
  );
}
