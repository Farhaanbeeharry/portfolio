import { capabilities, counts } from "../data/capabilities.js";
import { chips } from "../data/site.js";

export default function Capability() {
  return (
    <section className="view" id="capability">
      <div className="view-head">
        <h2 className="view-title">Capability</h2>
        <span className="mono meta" style={{ color: "var(--fg-3)" }}>
          derived from {counts.caseFiles} case files
        </span>
      </div>

      <p className="view-lead">
        Counted, not self-scored. The build numbers come straight from the case
        files published here, and every named role is in the service log. A{" "}
        <b>filled marker</b> means there are shipped case files to open; a hollow
        one means the evidence is a role or a certificate rather than a build on
        this site.
      </p>

      <div className="stack-grid">
        {capabilities.map((c, i) => (
          <div className={`stack-row reveal${i % 3 ? ` d${i % 3}` : ""}`} key={c.name}>
            <span className={`dot${c.builds ? "" : " off"}`} aria-hidden="true" />
            <span className="txt">
              <span className="nm">{c.name}</span>
              <span className="ev">{c.evidence}</span>
            </span>
          </div>
        ))}
      </div>

      <div className="sub-head" style={{ marginTop: "34px" }}>
        <h3>Tools in regular use</h3>
      </div>
      <div className="also">
        {chips.map((c) =>
          c.href ? (
            <a href={c.href} key={c.label} target="_blank" rel="noopener" className="chip">
              {c.label}
            </a>
          ) : (
            <span className="chip" key={c.label}>{c.label}</span>
          )
        )}
      </div>
    </section>
  );
}
