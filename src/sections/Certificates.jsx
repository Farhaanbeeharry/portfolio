import { certificates } from "../data/site.js";
import { Reveal } from "../components/Reveal.jsx";

export default function Certificates() {
  return (
    <section className="section" id="certificates">
      <div className="container">
        <Reveal className="sec-head">
          <span className="sec-index" aria-hidden="true">04</span>
          <span className="sec-kicker">Register</span>
          <h2 className="sec-title">
            Awards &amp; <span className="em">achievements</span>
          </h2>
          <p className="sec-lead">
            Recognitions, competitions and training earned along the way.
          </p>
        </Reveal>

        <div className="cert-grid">
          {certificates.map((c, i) => (
            <Reveal className="cert" key={i} delay={(i % 2) * 0.05}>
              <div className="cert-logo">
                <img src={c.logo} alt={c.alt} />
              </div>
              <div className="cert-body">
                <h4>
                  {c.titleHref ? (
                    <a href={c.titleHref} target="_blank" rel="noopener">
                      {c.title}
                    </a>
                  ) : (
                    c.title
                  )}
                  {c.links.map((l, j) => (
                    <a
                      className="dl"
                      key={j}
                      href={l.href}
                      target="_blank"
                      rel="noopener"
                      aria-label={l.label}
                    >
                      <i className={`fa-solid fa-${l.icon}`}></i>
                    </a>
                  ))}
                </h4>
                <div className={`meta${c.metaBadge ? " cert-badge" : ""}`}>
                  {c.meta}
                </div>
                <div className="date">{c.date}</div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
