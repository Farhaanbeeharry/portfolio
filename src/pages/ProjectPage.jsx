import { useParams, Navigate, Link } from "react-router-dom";
import Nav from "../components/Nav.jsx";
import Footer from "../components/Footer.jsx";
import { Reveal } from "../components/Reveal.jsx";
import { ScrollProgress } from "../components/ScrollProgress.jsx";
import { ParallaxCover } from "../components/ParallaxCover.jsx";
import { projects } from "../data/projects.js";
import { usePageMeta } from "../hooks/usePageMeta.js";

export default function ProjectPage() {
  const { slug } = useParams();
  const idx = projects.findIndex((p) => p.slug === slug);
  const project = projects[idx];

  usePageMeta(
    project ? `${project.title} · Farhaan Beeharry` : undefined,
    project ? project.desc : undefined
  );

  if (!project) return <Navigate to="/" replace />;

  const prev = idx > 0 ? projects[idx - 1] : null;
  const next = idx < projects.length - 1 ? projects[idx + 1] : null;

  return (
    <>
      <ScrollProgress />
      <Nav variant="project" />
      <main className="pp-main">
        <section className="pp-hero">
          <div className="container">
            <Reveal as="div" y={0}>
              <Link className="pp-back" to="/#work">
                <i className="fa-solid fa-arrow-left"></i> Back to work
              </Link>
            </Reveal>

            <Reveal className="pp-cat" delay={0.04}>
              <i className="fa-solid fa-layer-group"></i> {project.category}
            </Reveal>

            <Reveal as="h1" className="pp-title" delay={0.08}>
              {project.disp}
            </Reveal>

            <Reveal className="pp-meta" delay={0.12}>
              <span><i className="fa-regular fa-calendar"></i> {project.date}</span>
              <span><i className="fa-solid fa-user"></i> Farhaan Beeharry</span>
            </Reveal>

            <Reveal className="pp-tags" delay={0.16}>
              {project.tags.map((t) => (
                <span key={t}>{t}</span>
              ))}
            </Reveal>

            {project.cover && (
              <ParallaxCover src={project.cover} alt={project.coverAlt} />
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
                  <Reveal>
                    <Link className="pp-more-card" to={`/portfolio/${prev.slug}`}>
                      <i className="fa-solid fa-arrow-left"></i>
                      <span>
                        <span className="dir">Previous</span>
                        <div className="nm">{prev.disp}</div>
                      </span>
                    </Link>
                  </Reveal>
                )}
                {next && (
                  <Reveal delay={0.06}>
                    <Link className="pp-more-card next" to={`/portfolio/${next.slug}`}>
                      <span>
                        <span className="dir">Next</span>
                        <div className="nm">{next.disp}</div>
                      </span>
                      <i className="fa-solid fa-arrow-right"></i>
                    </Link>
                  </Reveal>
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
