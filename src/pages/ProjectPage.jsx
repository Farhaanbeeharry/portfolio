import { useParams, Navigate, Link } from "react-router-dom";
import AppShell from "../components/AppShell.jsx";
import Footer from "../components/Footer.jsx";
import Contact from "../sections/Contact.jsx";
import Icon from "../components/Icon.jsx";
import { projects } from "../data/projects.js";
import { useReveal } from "../hooks/useReveal.js";
import { usePageMeta } from "../hooks/usePageMeta.js";

/**
 * A case file, opened inside the same application shell. The write-ups are the
 * existing ones, unchanged — only the surface they sit on is new.
 */
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
    <AppShell activeId="work" home={false} routeLabel={project.disp}>
      <main className="main">
        <article className="view case">
          <Link className="btn btn-ghost btn-sm case-back" to="/#work">
            <Icon name="arrowLeft" size={14} />
            All work
          </Link>

          <div className="case-head">
            <h1 className="case-title">{project.disp}</h1>
            {/* Separated by the middot the rest of the site uses; the gap alone
                read as accidental double spacing. */}
            <div className="case-meta mono">
              <span>{project.category}</span>
              <span aria-hidden="true">·</span>
              <span>{project.date}</span>
              <span aria-hidden="true">·</span>
              <span>
                file {idx + 1} of {projects.length}
              </span>
            </div>
          </div>

          <div className="case-tags">
            {project.tags.map((t) => (
              <span className="chip" key={t}>{t}</span>
            ))}
          </div>

          {project.cover && (
            <figure className="case-cover reveal">
              <img src={project.cover} alt={project.coverAlt} />
            </figure>
          )}

          <div className="pp-article" dangerouslySetInnerHTML={{ __html: project.body }} />
        </article>

        {(prev || next) && (
          <nav className="view case-nav" aria-label="Adjacent case files">
            {prev && (
              <Link className="case-step" to={`/portfolio/${prev.slug}`}>
                <Icon name="arrowLeft" size={16} />
                <span>
                  <span className="dir">Previous</span>
                  <span className="nm">{prev.disp}</span>
                </span>
              </Link>
            )}
            {next && (
              <Link className="case-step next" to={`/portfolio/${next.slug}`}>
                <span>
                  <span className="dir">Next</span>
                  <span className="nm">{next.disp}</span>
                </span>
                <Icon name="arrowRight" size={16} />
              </Link>
            )}
          </nav>
        )}

        <Contact compact />
        <Footer />
      </main>
    </AppShell>
  );
}
