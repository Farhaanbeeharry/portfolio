import { Reveal } from "../components/Reveal.jsx";

const capabilities = [
  {
    no: "01",
    title: "Web Application Development",
    body: "Web applications are foundational to the success of any organization. Building captivating tools with simplified user experiences facilitates a direct digital engagement with end users that is not possible via traditional means.",
  },
  {
    no: "02",
    title: "UI and UX Design",
    body: "You have the vision; it's my job to turn it into a reality. I'll sit down with your team, listen to your ideas, and turn those ideas into a workable concept for a mobile/web application. Then I will work together with you to give your concept life.",
  },
  {
    no: "03",
    title: "Mobile Application Development",
    body: "With the proliferation of smartphone technology, it is more important than ever for brands to engage with their customers through effective and memorable mobile applications. I develop for both iOS and Android.",
  },
];

const facts = [
  { icon: "fa-solid fa-star", num: "42", label: "Projects completed" },
  { icon: "fa-solid fa-keyboard", num: "80+ WPM", label: "Fast typing speed" },
  { icon: "fa-solid fa-mug-hot", num: "3", label: "Cups of coffee daily" },
];

export default function About() {
  return (
    <section className="section" id="about">
      <div className="container">
        <Reveal className="sec-head">
          <span className="sec-index" aria-hidden="true">01</span>
          <span className="sec-kicker">Profile</span>
          <h2 className="sec-title">
            Turning ideas into <span className="em">real products</span>
          </h2>
          <p className="sec-lead">
            A responsible professional who loves clean code, thoughtful design
            and delivering high-quality work on time.
          </p>
        </Reveal>

        <div className="about-grid">
          <Reveal className="about-text">
            <p>
              Experienced Software Engineer with nearly 5+ years in software
              development, including 4+ years in commercial application
              development. Proven ability to improve and develop software
              functionalities with a creative approach and strong problem-solving
              skills.
            </p>
            <p>
              A responsible professional, seeking to utilize skills and make a
              meaningful impact in an organization. Strong in communication and
              team-working, with excellent attention to detail and a commitment
              to producing high-quality work. Able to work independently and in a
              team, consistently delivering projects on time and to a high
              standard.
            </p>
          </Reveal>

          <Reveal delay={0.08}>
            <ul className="info-card">
              <li><span className="k">Age</span><span className="v">28</span></li>
              <li><span className="k">Residence</span><span className="v">Mauritius</span></li>
              <li><span className="k">Address</span><span className="v">Port-Louis</span></li>
              <li><span className="k">e-mail</span><span className="v"><a href="mailto:contact@farhaan.info">contact@farhaan.info</a></span></li>
              <li><span className="k">Phone</span><span className="v"><a href="tel:+23057076881">+230 5707 6881</a></span></li>
            </ul>
          </Reveal>
        </div>

        <div className="caps">
          {capabilities.map((c, i) => (
            <Reveal className="cap" key={c.no} delay={i * 0.06}>
              <span className="no">{c.no}</span>
              <div className="cap-body">
                <h3>{c.title}</h3>
                <p>{c.body}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="facts">
          {facts.map((f, i) => (
            <Reveal className="fact" key={f.label} delay={i * 0.06}>
              <i className={f.icon} aria-hidden="true"></i>
              <div className="num">{f.num}</div>
              <div className="lbl">{f.label}</div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
