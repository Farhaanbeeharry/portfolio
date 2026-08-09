import { codingSkills, otherSkills, chips } from "../data/site.js";
import { Reveal } from "../components/Reveal.jsx";

// Categorical proficiency from the source weighting (no fake-precise %):
// 80+ core, 65+ proficient, else working. Ordered strongest-first.
function rank(w) {
  if (w >= 80) return ["Core", "rk core"];
  if (w >= 65) return ["Proficient", "rk"];
  return ["Working", "rk"];
}
const ordered = (list) => [...list].sort((a, b) => b[1] - a[1]);

function SkillList({ items }) {
  return (
    <ul className="skill-list">
      {ordered(items).map(([name, w]) => {
        const [label, cls] = rank(w);
        return (
          <li key={name}>
            <span className="nm">{name}</span>
            <span className="lead-dot" aria-hidden="true"></span>
            <span className={cls}>{label}</span>
          </li>
        );
      })}
    </ul>
  );
}

export default function Skills() {
  return (
    <section className="section" id="skills">
      <div className="container">
        <Reveal className="sec-head">
          <span className="sec-index" aria-hidden="true">02</span>
          <span className="sec-kicker">Capability</span>
          <h2 className="sec-title">
            Tools I use to <span className="em">ship</span>
          </h2>
          <p className="sec-lead">
            A blend of coding fluency, design sensibility and hands-on hardware
            experience.
          </p>
        </Reveal>

        <div className="skills-grid">
          <Reveal>
            <h3 className="tl-sub"><i className="fa-solid fa-code"></i> Coding Skills</h3>
            <SkillList items={codingSkills} />
          </Reveal>

          <Reveal delay={0.08}>
            <h3 className="tl-sub"><i className="fa-solid fa-sliders"></i> Other Skills</h3>
            <SkillList items={otherSkills} />

            <h3 className="tl-sub" style={{ marginTop: "38px" }}>
              <i className="fa-solid fa-lightbulb"></i> Knowledges &amp; Unrated Skills
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
          </Reveal>
        </div>
      </div>
    </section>
  );
}
