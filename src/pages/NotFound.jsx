import { Link } from "react-router-dom";
import Nav from "../components/Nav.jsx";
import Footer from "../components/Footer.jsx";

export default function NotFound() {
  return (
    <>
      <Nav variant="project" />
      <main className="pp-main">
        <section className="pp-hero">
          <div className="container">
            <h1 className="pp-title">
              <span className="g">Page not found</span>
            </h1>
            <p className="section-lead" style={{ marginTop: "16px" }}>
              The page you're looking for doesn't exist.
            </p>
            <Link className="btn btn-primary" to="/" style={{ marginTop: "24px" }}>
              <i className="fa-solid fa-house"></i> Back home
            </Link>
          </div>
        </section>
      </main>
      <Footer withContact={false} />
    </>
  );
}
