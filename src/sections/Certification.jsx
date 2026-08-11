import { useState } from "react";
import Icon from "../components/Icon.jsx";
import { certificates } from "../data/site.js";

/* Sixteen at once buries the four that matter. The competition placements and the
   most recent training show first; the rest are one control away. */
const FIRST = 6;

export default function Certification() {
  const [all, setAll] = useState(false);
  const shown = all ? certificates : certificates.slice(0, FIRST);

  return (
    <section className="view" id="certification">
      <div className="view-head">
        <h2 className="view-title">Certification</h2>
        <span className="mono meta" style={{ color: "var(--fg-3)" }}>
          {certificates.length} on file
        </span>
      </div>

      <p className="view-lead">
        Four competition placements and twelve training and academic
        certificates. Every one has its document attached.
      </p>

      <div className="certs">
        {shown.map((c, i) => (
          <article
            className={`cert${c.metaBadge ? " won" : ""}`}
            style={{ "--i": Math.min(i, 8) }}
            key={`${c.title}-${c.date}`}
          >
            <span className="logo">
              <img src={c.logo} alt={c.alt} loading="lazy" />
            </span>
            <div>
              <h4>
                {c.titleHref ? (
                  <a href={c.titleHref} target="_blank" rel="noopener">{c.title}</a>
                ) : (
                  c.title
                )}
                {c.links.map((l) => (
                  <a
                    className="dl"
                    key={l.href}
                    href={l.href}
                    target="_blank"
                    rel="noopener"
                    aria-label={l.label}
                    title={l.label}
                  >
                    <Icon name={l.icon === "image" ? "image" : "download"} size={12} />
                  </a>
                ))}
              </h4>

              <div className="meta">
                {c.metaBadge ? (
                  <span className="award">
                    <Icon name="award" size={11} />
                    {c.meta}
                  </span>
                ) : (
                  c.meta
                )}
              </div>
              <div className="when">{c.date}</div>
            </div>
          </article>
        ))}
      </div>

      {certificates.length > FIRST && (
        <div className="certs-more">
          <button className="btn btn-ghost btn-sm" onClick={() => setAll((v) => !v)}>
            <Icon name={all ? "close" : "arrowDown"} size={13} />
            {all ? "Show fewer" : `Show all ${certificates.length}`}
          </button>
        </div>
      )}
    </section>
  );
}
