import { useState } from "react";
import { Link } from "react-router-dom";
import { filters, work } from "../data/site.js";
import { Reveal } from "../components/Reveal.jsx";

export default function Work() {
  const [active, setActive] = useState("all");

  const visible = work.filter(
    (w) => active === "all" || w.dataCat.includes(active)
  );

  return (
    <section className="section" id="work">
      <div className="container">
        <Reveal className="sec-head">
          <span className="sec-ref">E · Index of work</span>
          <h2 className="sec-title">Selected work</h2>
          <p className="sec-lead">
            A selection of products across web, mobile, desktop, hardware and
            design.
          </p>
        </Reveal>

        <Reveal className="filters">
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
        </Reveal>

        <div className="work-grid">
          {visible.map((w, i) => (
            <Reveal key={w.slug} delay={(i % 3) * 0.06}>
              <Link className="work" data-cat={w.dataCat} to={`/portfolio/${w.slug}`}>
                <div className="work-media">
                  <img src={w.thumb} alt={w.title} loading="lazy" />
                  <div className="work-open">
                    <i className="fa-solid fa-arrow-right"></i>
                  </div>
                </div>
                <div className="work-info">
                  <h4>{w.title}</h4>
                  <div className="cat">{w.cat}</div>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
