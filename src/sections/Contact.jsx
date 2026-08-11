import Icon from "../components/Icon.jsx";
import { CVS } from "../components/CvMenu.jsx";
import { contact } from "../data/site.js";

export default function Contact({ compact = false }) {
  return (
    <section className="view" id={compact ? undefined : "contact"}>
      <div className="view-head">
        <h2 className="view-title">Contact</h2>
        <span className="mono meta" style={{ color: "var(--fg-3)", display: "flex", alignItems: "center", gap: "8px" }}>
          <span className="live" aria-hidden="true" />
          open to work
        </span>
      </div>

      <div className="contact-grid">
        <div>
          <p className="view-lead" style={{ marginBottom: 0 }}>
            {compact
              ? "Seen something here you'd like built? The inbox is open."
              : "Whether you're hiring or you have something you need built — the inbox is open, and I answer it myself."}
          </p>

          <div className="contact-lines">
            <a href={`mailto:${contact.email}`} className="btn btn-primary">
              <Icon name="mail" size={15} />
              {contact.email}
            </a>
            <a href={contact.whatsapp} target="_blank" rel="noopener" className="btn">
              <Icon name="whatsapp" size={15} />
              {contact.phone}
            </a>
          </div>

          {!compact && (
            <div className="contact-lines">
              {/* Both editions are one click away here rather than behind a
                  menu — on the route whose whole job is contact, listing them
                  costs nothing and saves an interaction. */}
              {CVS.map((cv) => (
                <a
                  key={cv.code}
                  href={cv.href}
                  target="_blank"
                  rel="noopener"
                  className="btn btn-ghost btn-sm"
                >
                  <Icon name="download" size={13} />
                  CV — {cv.label}
                </a>
              ))}
              <a
                href="https://www.linkedin.com/in/farhaan-bms/"
                target="_blank"
                rel="noopener"
                className="btn btn-ghost btn-sm"
              >
                <Icon name="linkedin" size={13} />
                LinkedIn
              </a>
            </div>
          )}
        </div>

        {!compact && (
          /* Only what is not already stated elsewhere on the page — location and
             languages live in the Overview and the log, and restating them here
             to fill space is the padding this rebuild is trying to remove. */
          <dl className="contact-spec">
            <div>
              <dt>Delivered to clients in</dt>
              <dd>Mauritius · UAE · Europe</dd>
            </div>
            <div>
              <dt>Open to</dt>
              <dd>Full-time · Freelance</dd>
            </div>
            <div>
              {/* A verifiable fact. "Usual reply: same day" was here and is a
                  responsiveness claim nobody can check — not mine to invent. */}
              <dt>Timezone</dt>
              <dd>GMT+4 · {contact.location.split(",")[0]}</dd>
            </div>
          </dl>
        )}
      </div>
    </section>
  );
}
