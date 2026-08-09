import { Reveal, DrawRule } from "../components/Reveal.jsx";

export default function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-inner">
        <div className="hero-grid">
          <div className="hero-copy">
            <Reveal className="hero-ref" delay={0}>
              <span>Portfolio / Rev. 2026</span>
              <span className="live"><b></b> Available for freelance &amp; full-time</span>
            </Reveal>

            <Reveal as="h1" delay={0.06} y={22}>
              Hi, I'm Farhaan<br />
              <span className="draw">I build digital products.</span>
            </Reveal>

            <DrawRule delay={0.5}>
              <span className="tick a">Scope</span>
              <span className="tick b">Web · Mobile · Systems</span>
            </DrawRule>

            <Reveal className="hero-role" delay={0.14}>
              <span className="idx">ROLE</span> Software &amp; Mobile Engineer
            </Reveal>

            <Reveal as="p" className="hero-desc" delay={0.2}>
              Experienced software engineer with 5+ years crafting captivating
              web and mobile applications, from Flutter apps on the App Store to
              full-stack platforms, with a creative approach and strong
              problem-solving skills.
            </Reveal>

            <Reveal className="hero-actions" delay={0.26}>
              <a href="#work" className="btn btn-primary">
                <i className="fa-solid fa-layer-group"></i> View My Work
              </a>
              <a href="#contact" className="btn btn-ghost">
                <i className="fa-solid fa-paper-plane"></i> Get In Touch
              </a>
            </Reveal>

            <Reveal className="socials" delay={0.32}>
              <a href="https://www.linkedin.com/in/farhaan-bms/" target="_blank" rel="noopener" aria-label="LinkedIn"><i className="fab fa-linkedin-in"></i></a>
              <a href="https://github.com/Farhaanbeeharry" target="_blank" rel="noopener" aria-label="GitHub"><i className="fab fa-github"></i></a>
              <a href="https://app.codesignal.com/profile/farhaan" target="_blank" rel="noopener" aria-label="CodeSignal"><i className="fa-solid fa-code"></i></a>
              <a href="https://www.behance.net/farhaanbeeharry" target="_blank" rel="noopener" aria-label="Behance"><i className="fab fa-behance"></i></a>
              <a href="https://www.instagram.com/farhaan_beeharry/" target="_blank" rel="noopener" aria-label="Instagram"><i className="fab fa-instagram"></i></a>
              <a href="https://wa.me/23057076881/" target="_blank" rel="noopener" aria-label="WhatsApp"><i className="fab fa-whatsapp"></i></a>
            </Reveal>
          </div>

          <Reveal className="titleblock" delay={0.18} y={24}>
            <div className="tb-portrait">
              <img src="/img/profile_picture.jpg" alt="Farhaan Beeharry" />
            </div>
            <div className="tb-rows">
              <div className="tb-row">
                <span className="k">Discipline</span>
                <span className="v">Flutter <small>Mobile Engineer</small></span>
              </div>
              <div className="tb-row">
                <span className="k">Recognition</span>
                <span className="v">1st Prize <small>InovApp Challenge</small></span>
              </div>
              <div className="tb-row">
                <span className="k">Education</span>
                <span className="v">First Class <small>BSc Computer Science</small></span>
              </div>
              <div className="tb-row">
                <span className="k">Based</span>
                <span className="v">Mauritius <small>GMT+4 · Remote-ready</small></span>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
