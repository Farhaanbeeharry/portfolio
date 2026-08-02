import { useParams, Navigate, Link } from "react-router-dom";
import Nav from "../components/Nav.jsx";
import Footer from "../components/Footer.jsx";
import { projects } from "../data/projects.js";
import { useReveal } from "../hooks/useReveal.js";
import { usePageMeta } from "../hooks/usePageMeta.js";

export default function ProjectPage() {
  const { slug } = useParams();
  const idx = projects.findIndex((p) => p.slug === slug);
  const project = projects[idx];

  usePageMeta(
    project ? `${project.title} — Farhaan Beeharry` : undefined,
    project ? project.desc : undefined
  );
  useReveal();

  if (!project) return <Navigate to="/" replace />;

  const prev = idx > 0 ? projects[idx - 1] : null;
  const next = idx < projects.length - 1 ? projects[idx + 1] : null;

  return (
    <>
      <Nav variant="project" />
      <main className="pp-main">
        <section className="pp-hero">
          <div className="container">
            <Link className="pp-back reveal" to="/#work">
              <i className="fa-solid fa-arrow-left"></i> Back to work
            </Link>

            <div className="pp-cat reveal">
              <i className="fa-solid fa-layer-group"></i> {project.category}
            </div>

            <h1 className="pp-title reveal">
              <span className="g">{project.disp}</span>
            </h1>

            <div className="pp-meta reveal">
              <span><i className="fa-regular fa-calendar"></i> {project.date}</span>
              <span><i className="fa-solid fa-user"></i> Farhaan Beeharry</span>
            </div>

            <div className="pp-tags reveal">
              {project.tags.map((t) => (
                <span key={t}>{t}</span>
              ))}
            </div>

            {project.cover && (
              <figure className="pp-cover reveal">
                <img src={project.cover} alt={project.coverAlt} />
              </figure>
            )}
          </div>
        </section>

        <article
          className="pp-article"
          dangerouslySetInnerHTML={{ __html: project.body }}
        />

        {(prev || next) && (
          <section className="pp-more">
            <div className="container">
              <div className="pp-more-grid">
                {prev && (
                  <Link className="pp-more-card reveal" to={`/portfolio/${prev.slug}`}>
                    <i className="fa-solid fa-arrow-left"></i>
                    <span>
                      <span className="dir">Previous</span>
                      <div className="nm">{prev.disp}</div>
                    </span>
                  </Link>
                )}
                {next && (
                  <Link className="pp-more-card next reveal" to={`/portfolio/${next.slug}`}>
                    <span>
                      <span className="dir">Next</span>
                      <div className="nm">{next.disp}</div>
                    </span>
                    <i className="fa-solid fa-arrow-right"></i>
                  </Link>
                )}
              </div>
            </div>
          </section>
        )}
      </main>
      <Footer withContact={false} />
    </>
  );
}
