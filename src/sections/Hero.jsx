export default function Hero() {
  return (
    <section className="hero" id="home">
      <div className="container">
        <div className="hero-grid">
          <div className="hero-copy">
            <span className="hero-status">
              <span className="dot"></span> Available for freelance &amp;
              full-time opportunities
            </span>

            <h1>
              Hi, I'm Farhaan<br />
              <span className="gradient-text">I build digital products.</span>
            </h1>

            <div className="hero-role">
              <span className="tok">const</span> role{" "}
              <span className="tok">=</span>{" "}
              <span className="fn">"Software & Mobile Engineer"</span>;
            </div>

            <p className="hero-desc">
              Experienced software engineer with 5+ years crafting captivating
              web and mobile applications — from Flutter apps on the App Store to
              full-stack platforms — with a creative approach and strong
              problem-solving skills.
            </p>

            <div className="hero-actions">
              <a href="#work" className="btn btn-primary">
                <i className="fa-solid fa-layer-group"></i> View My Work
              </a>
              <a href="#contact" className="btn btn-ghost">
                <i className="fa-solid fa-paper-plane"></i> Get In Touch
              </a>
            </div>

            <div className="socials">
              <a href="https://www.linkedin.com/in/farhaan-bms/" target="_blank" rel="noopener" aria-label="LinkedIn"><i className="fab fa-linkedin-in"></i></a>
              <a href="https://github.com/Farhaanbeeharry" target="_blank" rel="noopener" aria-label="GitHub"><i className="fab fa-github"></i></a>
              <a href="https://app.codesignal.com/profile/farhaan" target="_blank" rel="noopener" aria-label="CodeSignal"><i className="fa-solid fa-code"></i></a>
              <a href="https://www.behance.net/farhaanbeeharry" target="_blank" rel="noopener" aria-label="Behance"><i className="fab fa-behance"></i></a>
              <a href="https://www.instagram.com/farhaan_beeharry/" target="_blank" rel="noopener" aria-label="Instagram"><i className="fab fa-instagram"></i></a>
              <a href="https://wa.me/23057076881/" target="_blank" rel="noopener" aria-label="WhatsApp"><i className="fab fa-whatsapp"></i></a>
            </div>
          </div>

          <div className="hero-visual">
            <div className="portrait">
              <img src="/img/profile_picture.jpg" alt="Farhaan Beeharry" />
            </div>
            <div className="hero-badge b1">
              <span className="bg-ico"><i className="fa-solid fa-mobile-screen"></i></span>
              <div><b>Flutter</b><span>Mobile Engineer</span></div>
            </div>
            <div className="hero-badge b2">
              <span className="bg-ico"><i className="fa-solid fa-award"></i></span>
              <div><b>1st Prize</b><span>InovApp Challenge</span></div>
            </div>
            <div className="hero-badge b3">
              <span className="bg-ico"><i className="fa-solid fa-graduation-cap"></i></span>
              <div><b>First Class</b><span>BSc Computer Science</span></div>
            </div>
          </div>
        </div>
      </div>

      <a href="#about" className="scroll-cue" aria-label="Scroll to about">
        Scroll <i className="fa-solid fa-chevron-down"></i>
      </a>
    </section>
  );
}
