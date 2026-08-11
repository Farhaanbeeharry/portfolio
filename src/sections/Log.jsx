import Icon from "../components/Icon.jsx";
import { testimonials } from "../data/site.js";
import { experience, education } from "../data/record.jsx";

function Entry({ e, dlLabel }) {
  return (
    <article className={`entry${e.current ? " current" : ""}`}>
      <span className="when">{e.period}</span>
      <h4>
        {e.title}
        {e.dl && (
          <a
            className="dl"
            href={`/${e.dl}`}
            target="_blank"
            rel="noopener"
            aria-label={`${dlLabel} for ${e.title}`}
            title={dlLabel}
          >
            <Icon name="download" size={12} />
          </a>
        )}
      </h4>
      {e.org && <div className="org">{e.org}</div>}
      {e.body && <p>{e.body}</p>}
    </article>
  );
}

export default function Log() {
  return (
    <section className="view" id="service-log">
      <div className="view-head">
        <h2 className="view-title">Service log</h2>
        <span className="mono meta" style={{ color: "var(--fg-3)" }}>
          2019 — present · {experience.length} entries
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
