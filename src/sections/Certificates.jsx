import { certificates } from "../data/site.js";

const delay = ["", " d1", " d2"];

export default function Certificates() {
  return (
    <section className="section" id="certificates">
      <div className="container">
        <div className="section-head reveal">
          <span className="eyebrow">Certificates</span>
          <h2 className="section-title">
            Awards &amp; <span className="g">achievements</span>
          </h2>
          <p className="section-lead">
            Recognitions, competitions and training earned along the way.
          </p>
        </div>

        <div className="cert-grid">
          {certificates.map((c, i) => (
            <div className={`cert reveal${delay[i % 3]}`} key={i}>
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
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
