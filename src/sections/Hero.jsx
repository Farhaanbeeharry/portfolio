import { Reveal, TextReveal } from "../components/Reveal.jsx";
import { TiltCard } from "../components/TiltCard.jsx";
import { Magnetic } from "../components/Magnetic.jsx";

export default function Hero() {
  return (
    <section className="hero" id="home">
      <div className="container">
        <div className="hero-grid">
          <div className="hero-copy">
            <Reveal className="hero-avail" delay={0}>
              <span className="pulse"><b></b></span>
              Available for freelance &amp; full-time
            </Reveal>

            <TextReveal
              as="h1"
              text="Hi, I'm Farhaan. I build *digital products.*"
              delay={0.08}
              stagger={0.05}
            />

            <Reveal className="hero-role" delay={0.42}>
              <span className="tag">Role</span> Software &amp; Mobile Engineer
            </Reveal>

            <Reveal as="p" className="hero-desc" delay={0.48}>
              Experienced software engineer with 5+ years crafting captivating
              web and mobile applications, from Flutter apps on the App Store to
              full-stack platforms, with a creative approach and strong
              problem-solving skills.
            </Reveal>

            <Reveal className="hero-actions" delay={0.54}>
              <Magnetic>
                <a href="#work" className="btn btn-primary">
                  <i className="fa-solid fa-layer-group"></i> View my work
                </a>
              </Magnetic>
              <Magnetic strength={0.22}>
                <a href="#contact" className="btn btn-ghost">
                  <i className="fa-solid fa-paper-plane"></i> Get in touch
                </a>
              </Magnetic>
            </Reveal>

            <Reveal className="socials" delay={0.6}>
              <a href="https://www.linkedin.com/in/farhaan-bms/" target="_blank" rel="noopener" aria-label="LinkedIn"><i className="fab fa-linkedin-in"></i></a>
              <a href="https://github.com/Farhaanbeeharry" target="_blank" rel="noopener" aria-label="GitHub"><i className="fab fa-github"></i></a>
              <a href="https://app.codesignal.com/profile/farhaan" target="_blank" rel="noopener" aria-label="CodeSignal"><i className="fa-solid fa-code"></i></a>
              <a href="https://www.behance.net/farhaanbeeharry" target="_blank" rel="noopener" aria-label="Behance"><i className="fab fa-behance"></i></a>
              <a href="https://www.instagram.com/farhaan_beeharry/" target="_blank" rel="noopener" aria-label="Instagram"><i className="fab fa-instagram"></i></a>
              <a href="https://wa.me/23057076881/" target="_blank" rel="noopener" aria-label="WhatsApp"><i className="fab fa-whatsapp"></i></a>
            </Reveal>
          </div>

          <Reveal className="hero-visual" delay={0.2} y={24}>
            <div className="portrait-stage">
              <TiltCard innerClassName="portrait" max={11} perspective={900}>
                <img src="/img/profile_picture.jpg" alt="Farhaan Beeharry, Software &amp; Mobile Engineer" />
                <div className="portrait-tag">
                  <div>
                    <div className="nm">Farhaan Beeharry</div>
                    <div className="rl">Software &amp; Mobile Engineer</div>
                  </div>
                  <div className="badge">Mauritius<br />GMT+4</div>
                </div>
              </TiltCard>

              <div className="pfloat tl">
                <div className="n"><span className="accent">5+</span> yrs</div>
                <div className="l">Engineering</div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
