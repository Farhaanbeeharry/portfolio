import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import Icon from "../components/Icon.jsx";
import { work } from "../data/site.js";

/* Labels for the categories that actually occur in the data. The original filter
   bar advertised a "Desktop" switch that matched nothing; a control that can only
   ever return an empty result is a defect, so the set is derived. */
const LABELS = {
  web: "Web",
  mobile: "Mobile",
  ui_ux: "UI / UX",
  arduino: "Hardware",
  competition: "Competition",
};

export default function Work() {
  const [active, setActive] = useState("all");

  const filters = useMemo(() => {
    const present = new Set();
    work.forEach((w) => w.dataCat.split(/\s+/).forEach((c) => c && present.add(c)));
    return [["all", "All"], ...Object.entries(LABELS).filter(([k]) => present.has(k))];
  }, []);

  const visible = work.filter(
    (w) => active === "all" || w.dataCat.split(/\s+/).includes(active)
  );

  return (
    <section className="view" id="work">
      <div className="view-head">
        <h2 className="view-title">Work</h2>
        <span className="mono meta" style={{ color: "var(--fg-3)" }}>
          {visible.length}/{work.length} shown
        </span>
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

      <div className="deck" data-tilt>
        {visible.map((w, i) => (
          <Link
            key={w.slug}
            to={`/portfolio/${w.slug}`}
            className={`card reveal${i % 3 ? ` d${i % 3}` : ""}`}
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
          </Link>
        ))}

        {!visible.length && (
          <p className="deck-empty">No case files in this category.</p>
        )}
      </div>
    </section>
  );
}
