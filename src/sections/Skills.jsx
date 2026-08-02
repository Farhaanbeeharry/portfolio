import { codingSkills, otherSkills, chips } from "../data/site.js";

export default function Skills() {
  return (
    <section className="section" id="skills">
      <div className="container">
        <div className="section-head reveal">
          <span className="eyebrow">Skills</span>
          <h2 className="section-title">
            Tools I use to <span className="g">ship</span>
          </h2>
          <p className="section-lead">
            A blend of coding fluency, design sensibility and hands-on hardware
            experience.
          </p>
        </div>

        <div className="skills-grid">
          <div className="reveal">
            <h3 className="tl-sub"><i className="fa-solid fa-code"></i> Coding Skills</h3>
            {codingSkills.map(([name, w]) => (
              <div className="skill" key={name}>
                <div className="skill-head">
                  <span className="name">{name}</span>
                  <span className="pct">{w}%</span>
                </div>
                <div className="bar"><i data-w={w}></i></div>
              </div>
            ))}
          </div>

          <div className="reveal d1">
            <h3 className="tl-sub"><i className="fa-solid fa-sliders"></i> Other Skills</h3>
            {otherSkills.map(([name, w]) => (
              <div className="skill" key={name}>
                <div className="skill-head">
                  <span className="name">{name}</span>
                  <span className="pct">{w}%</span>
                </div>
                <div className="bar"><i data-w={w}></i></div>
              </div>
            ))}

            <h3 className="tl-sub" style={{ marginTop: "34px" }}>
              <i className="fa-solid fa-lightbulb"></i> Knowledges &amp; Unrated
              Skills
            </h3>
            <div className="chips">
              {chips.map((c) =>
                c.href ? (
                  <a href={c.href} key={c.label} target="_blank" rel="noopener">
                    <span className="chip">{c.label}</span>
                  </a>
                ) : (
                  <span className="chip" key={c.label}>{c.label}</span>
                )
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
