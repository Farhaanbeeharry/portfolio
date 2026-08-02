/** Site footer / contact section. Rendered as <footer id="contact"> on the
 *  homepage (so the Contact nav link + scroll-spy target it) and as a plain
 *  footer on project pages. */
export default function Footer({ withContact = true }) {
  return (
    <footer className="footer" id={withContact ? "contact" : undefined}>
      <div className="container">
        {withContact ? (
          <div className="footer-cta reveal">
            <span className="eyebrow" style={{ justifyContent: "center" }}>
              Contact
            </span>
            <h2>
              Let's build something <span className="gradient-text">great</span>{" "}
              together.
            </h2>
            <p>
              Have a project in mind, or just want to say hi? My inbox is always
              open.
            </p>
            <div>
              <a href="mailto:contact@farhaan.info" className="btn btn-primary">
                <i className="fa-solid fa-envelope"></i> contact@farhaan.info
              </a>
              <a
                href="https://wa.me/23057076881/"
                target="_blank"
                rel="noopener"
                className="btn btn-ghost"
              >
                <i className="fab fa-whatsapp"></i> +230 5707 6881
              </a>
            </div>
            <div style={{ marginTop: "28px" }}>
              <a
                href="/assets/Farhaan Beeharry CV.pdf"
                target="_blank"
                rel="noopener"
                className="btn btn-ghost"
              >
                <i className="fa-solid fa-download"></i> Download CV
              </a>
              <a
                href="/assets/Farhaan Beeharry CV_FRENCH.pdf"
                target="_blank"
                rel="noopener"
                className="btn btn-ghost"
              >
                <i className="fa-solid fa-download"></i> Télécharger la version
                française
              </a>
            </div>
          </div>
        ) : (
          <div className="footer-cta">
            <h2 className="reveal">Have a project in mind?</h2>
            <p className="reveal">
              I'm always open to interesting work — let's build something great
              together.
            </p>
            <a
              href="mailto:contact@farhaan.info"
              className="btn btn-primary reveal"
            >
              <i className="fa-solid fa-envelope"></i> Contact me
            </a>
          </div>
        )}

        <div className="footer-bar">
          <div className="copy">
            © 2026 All rights reserved. · Farhaan Beeharry
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
      </div>
    </footer>
  );
}
