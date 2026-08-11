import { useParams, Navigate, Link } from "react-router-dom";
import AppShell from "../components/AppShell.jsx";
import Footer from "../components/Footer.jsx";
import Contact from "../sections/Contact.jsx";
import Icon from "../components/Icon.jsx";
import { projects } from "../data/projects.js";
import { listings } from "../data/site.js";
import { TECH } from "../data/tech.js";
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

  if (!project) return <Navigate to="/" replace />;

  const prev = idx > 0 ? projects[idx - 1] : null;
  const next = idx < projects.length - 1 ? projects[idx + 1] : null;
  const store = listings[project.slug];

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

          {/* Curated stack and domain, not the scraped keyword list. Those tags
              were inaccurate — candidate_assessment_system carried "flutter,
              umbrella, challenge" copied from another page — so showing them
              here misdescribed the work to the one reader who checks. */}
          <div className="case-tags">
            {(TECH[project.slug]?.stack ?? project.tags).map((t) => (
              <span className="chip stack" key={t}>{t}</span>
            ))}
            {TECH[project.slug]?.domain.map((t) => (
              <span className="chip" key={t}>{t}</span>
            ))}
          </div>

          {/* Store buttons for the apps that are actually published. Rendered per
              verified URL, so a listing whose link has not been supplied yet
              simply shows nothing rather than a guessed or dead link. */}
          {store && (store.apple || store.google) && (
            <div className="case-stores">
              {store.apple && (
                <a className="btn btn-sm" href={store.apple} target="_blank" rel="noopener">
                  <Icon name="mobile" size={14} />
                  App Store
                  <Icon name="external" size={12} />
                </a>
              )}
              {store.google && (
                <a className="btn btn-sm" href={store.google} target="_blank" rel="noopener">
                  <Icon name="mobile" size={14} />
                  Google Play
                  <Icon name="external" size={12} />
                </a>
              )}
            </div>
          )}

          {project.cover && (
            <figure className="case-cover">
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
