import Icon from "../components/Icon.jsx";
import { testimonials } from "../data/site.js";
import { experience, education, positionCount } from "../data/record.jsx";

/**
 * An entry is either a single role, or one employer holding several positions —
 * a promotion. In the grouped case the employer is the heading and the positions
 * nest beneath it, so progression at one company does not read as two unrelated
 * jobs.
 */
function Entry({ e, dlLabel }) {
  const grouped = Array.isArray(e.positions);
  const heading = grouped ? e.org : e.title;

  return (
    <article className={`entry${e.current ? " current" : ""}`}>
      <span className="when">{e.period}</span>
      <h4>
        {heading}
        {e.dl && (
          <a
            className="dl"
            href={`/${e.dl}`}
            target="_blank"
            rel="noopener"
            aria-label={`${dlLabel} for ${heading}`}
            title={dlLabel}
          >
            <Icon name="download" size={12} />
          </a>
        )}
      </h4>

      {grouped ? (
        <ol className="positions">
          {e.positions.map((p) => (
            <li key={p.period + p.title}>
              <div className="pos-head">
                <span className="pos-title">{p.title}</span>
                <span className="pos-when">{p.period}</span>
              </div>
              {p.body && <p>{p.body}</p>}
            </li>
          ))}
        </ol>
      ) : (
        <>
          {e.org && <div className="org">{e.org}</div>}
          {e.body && <p>{e.body}</p>}
        </>
      )}
    </article>
  );
}

export default function Log() {
  return (
    <section className="view" id="service-log">
      <div className="view-head">
        <h2 className="view-title">Service log</h2>
        <span className="mono meta" style={{ color: "var(--fg-3)" }}>
          2019 — present · {positionCount} positions
        </span>
      </div>

      <div className="log-cols">
        <div >
          <div className="sub-head">
            <Icon name="log" size={15} />
            <h3>Experience</h3>
          </div>
          <div className="log">
            {experience.map((e) => (
              <Entry e={e} dlLabel="Download reference" key={e.period + e.title} />
            ))}
          </div>
        </div>

        <div >
          <div className="sub-head">
            <Icon name="cap" size={15} />
            <h3>Education</h3>
          </div>
          <div className="log">
            {education.map((e) => (
              <Entry e={e} dlLabel="Download certificate" key={e.period + e.title} />
            ))}
          </div>

          <div className="sub-head" style={{ marginTop: "30px" }}>
            <Icon name="check" size={15} />
            <h3>References</h3>
          </div>
          <div className="quotes">
            {testimonials.map((t) => (
              <figure className="quote" key={t.name}>
                <blockquote>{t.quote}</blockquote>
                <figcaption className="by">
                  <img src={t.img} alt="" loading="lazy" />
                  <div>
                    <div className="an">{t.name}</div>
                    <div className="ac">{t.role}</div>
                  </div>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
