import { useState } from "react";
import { Link } from "react-router-dom";
import { filters, work } from "../data/site.js";
import { Reveal } from "../components/Reveal.jsx";
import { TiltCard } from "../components/TiltCard.jsx";

export default function Work() {
  const [active, setActive] = useState("all");

  const visible = work.filter(
    (w) => active === "all" || w.dataCat.includes(active)
  );

  return (
    <section className="section" id="work">
      <div className="container">
        <Reveal className="sec-head">
          <span className="sec-index" aria-hidden="true">05</span>
          <span className="sec-kicker">Index of work</span>
          <h2 className="sec-title">
            Selected <span className="em">work</span>
          </h2>
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
              <TiltCard
                className="work-cell"
                innerClassName="work"
                as={Link}
                max={8}
                to={`/portfolio/${w.slug}`}
                data-cat={w.dataCat}
              >
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
              </TiltCard>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
