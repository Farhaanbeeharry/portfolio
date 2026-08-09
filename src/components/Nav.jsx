import { useState } from "react";
import { Link } from "react-router-dom";
import { useNavScroll } from "../hooks/useNavScroll.js";
import { Magnetic } from "./Magnetic.jsx";

const LINKS = [
  ["home", "Home"],
  ["about", "About"],
  ["skills", "Skills"],
  ["resume", "Resume"],
  ["certificates", "Certificates"],
  ["work", "Work"],
  ["contact", "Contact"],
];

/**
 * Shared navbar. `variant="home"` uses in-page hash anchors and highlights the
 * scroll-spy section; `variant="project"` links back to the homepage sections
 * (/#hash). Ports the scrolled state and mobile menu from portfolio.js.
 */
export default function Nav({ variant = "home", activeId = "home" }) {
  const scrolled = useNavScroll();
  const [open, setOpen] = useState(false);
  const home = variant === "home";
  const href = (id) => (home ? `#${id}` : `/#${id}`);

  const close = () => setOpen(false);

  const cls = ["nav", scrolled ? "scrolled" : "", open ? "open" : ""]
    .filter(Boolean)
    .join(" ");

  return (
    <header className={cls} id="nav">
      <div className="nav-inner">
        {home ? (
          <a href="#home" className="brand" aria-label="Farhaan Beeharry, home" onClick={close}>
            <span className="brand-mark">FB</span>
            <span>
              Farhaan Beeharry
              <small>Software &amp; Mobile Engineer</small>
            </span>
          </a>
        ) : (
          <Link to="/#home" className="brand" aria-label="Farhaan Beeharry, home" onClick={close}>
            <span className="brand-mark">FB</span>
            <span>
              Farhaan Beeharry
              <small>Software &amp; Mobile Engineer</small>
            </span>
          </Link>
        )}

        <nav className="nav-links" aria-label="Primary">
          {LINKS.map(([id, label]) =>
            home ? (
              <a
                key={id}
                href={`#${id}`}
                className={activeId === id ? "active" : undefined}
                onClick={close}
              >
                {label}
              </a>
            ) : (
              <Link key={id} to={`/#${id}`} onClick={close}>
                {label}
              </Link>
            )
          )}
        </nav>

        <div className="nav-cta">
          <Magnetic strength={0.25}>
            <a
              href="/assets/Farhaan Beeharry CV.pdf"
              target="_blank"
              rel="noopener"
              className="btn btn-primary"
            >
              <i className="fa-solid fa-download"></i> Download CV
            </a>
          </Magnetic>
        </div>

        <button
          className="nav-toggle"
          id="navToggle"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((o) => !o)}
        >
          <i className={open ? "fa fa-times" : "fa fa-bars"}></i>
        </button>
      </div>
    </header>
  );
}
