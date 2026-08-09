import { Link } from "react-router-dom";
import Nav from "../components/Nav.jsx";
import Footer from "../components/Footer.jsx";
import { Reveal, TextReveal } from "../components/Reveal.jsx";
import { Magnetic } from "../components/Magnetic.jsx";

export default function NotFound() {
  return (
    <>
      <Nav variant="project" />
      <main className="pp-main">
        <section className="nf">
          <div className="nf-ghost" aria-hidden="true">404</div>
          <div className="container">
            <div className="nf-inner">
              <Reveal className="pp-cat" y={0}>
                <i className="fa-solid fa-compass"></i> Off the map
              </Reveal>
              <TextReveal
                as="h1"
                className="nf-title"
                text="This page took a *wrong turn.*"
                delay={0.06}
                stagger={0.05}
              />
              <Reveal className="nf-lead" delay={0.18}>
                The page you're looking for doesn't exist, or may have moved.
                Let's get you back to solid ground.
              </Reveal>
              <Reveal className="nf-actions" delay={0.26}>
                <Magnetic>
                  <Link className="btn btn-primary" to="/">
                    <i className="fa-solid fa-house"></i> Back home
                  </Link>
                </Magnetic>
                <Link className="btn btn-ghost" to="/#work">
                  <i className="fa-solid fa-arrow-right"></i> See my work
                </Link>
              </Reveal>
            </div>
          </div>
        </section>
      </main>
      <Footer withContact={false} />
    </>
  );
}
