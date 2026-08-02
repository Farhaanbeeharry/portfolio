import { useState } from "react";
import { Link } from "react-router-dom";
import { filters, work } from "../data/site.js";

const delay = ["", " d1", " d2"];

export default function Work() {
  const [active, setActive] = useState("all");

  const visible = work.filter(
    (w) => active === "all" || w.dataCat.includes(active)
  );

  return (
    <section className="section" id="work">
      <div className="container">
        <div className="section-head reveal">
          <span className="eyebrow">Portfolio</span>
          <h2 className="section-title">
            Selected <span className="g">work</span>
          </h2>
          <p className="section-lead">
            A selection of products across web, mobile, desktop, hardware and
            design.
          </p>
        </div>

        <div className="filters reveal">
          {filters.map(([key, label]) => (
            <button
              key={key}
              className={`filter${active === key ? " active" : ""}`}
              data-filter={key}
              onClick={() => setActive(key)}
            >
              {label}
            </button>
          ))}
        </div>

        <div className="work-grid">
          {visible.map((w, i) => (
            <Link
              key={w.slug}
              className={`work reveal${delay[i % 3]}`}
              data-cat={w.dataCat}
              to={`/portfolio/${w.slug}`}
            >
              <div className="work-media">
                <img src={w.thumb} alt={w.title} />
                <div className="work-open">
                  <span><i className="fa-solid fa-arrow-right"></i></span>
                </div>
              </div>
              <div className="work-info">
                <h4>{w.title}</h4>
                <div className="cat">{w.cat}</div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
