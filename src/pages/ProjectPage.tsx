import { Link, useParams } from "react-router-dom";
import { projects } from "../data/content";
import { Reveal } from "../components/Reveal";
import { SafeImage } from "../components/SafeImage";

export function ProjectPage() {
  const { slug } = useParams();
  const index = projects.findIndex((project) => project.slug === slug);
  if (index < 0) return <NotFound />;

  const project = projects[index];
  const related = projects[(index + 1) % projects.length];
  const isProfessional = project.kind === "Professional";
  const showArchiveNote = ["startwise-ai", "gallivanter", "ai-operations-analytics", "surgi-tech"].includes(project.slug);

  return (
    <main id="main" className="project-page section-wrap" tabIndex={-1}>
      <div className="project-breadcrumb"><Link to="/#work">Selected work</Link><span aria-hidden="true">/</span><span>{project.title}</span></div>
      <section className="project-page-hero" aria-labelledby="project-page-title">
        <Reveal className="project-page-title-block">
          <span className="project-page-kind">{project.kind} work <i aria-hidden="true">·</i> {project.category}</span>
          <h1 id="project-page-title">{project.title}</h1>
          <p>{project.description}</p>
          {project.externalUrl && (
            <a className="button button-outline source-link" href={project.externalUrl} target="_blank" rel="noreferrer">
              {project.externalLabel ?? "Open project source"}<span aria-hidden="true">↗</span>
            </a>
          )}
        </Reveal>
        <Reveal className={`project-detail-image ${isProfessional ? "detail-logo" : ""}`} delay={100} style={{ "--project-accent": project.accent } as React.CSSProperties}>
          <SafeImage src={project.image} alt={project.alt} loading="eager" fetchPriority="high" />
          <span className="detail-image-caption">{isProfessional ? "PROJECT AREA" : "PROJECT VISUAL"}<span>{String(index + 1).padStart(2, "0")} / {String(projects.length).padStart(2, "0")}</span></span>
        </Reveal>
      </section>

      <section className="project-detail-body">
        <div className="project-detail-overview">
          <Reveal><span className="mini-kicker">Overview</span><h2>{isProfessional ? "Professional project" : "A project in focus"}</h2></Reveal>
          <Reveal delay={70}><p>{project.description}</p></Reveal>
        </div>
        {showArchiveNote && (
          <Reveal className="archive-note">
            <span className="archive-note-mark" aria-hidden="true">↳</span>
            <p>The source archive contains this overview and the project visual. It does not include further project detail such as research notes, design decisions, or measured outcomes.</p>
          </Reveal>
        )}
        {project.slug === "aava-2" && (
          <Reveal className="outcome-callout">
            <span>~40%</span><p>Reduction in manual task effort, reported in the source portfolio for simplified AI agents and workflow configuration.</p>
          </Reveal>
        )}
      </section>
      <nav className="project-pagination" aria-label="Project navigation">
        <Link className="project-back-link" to="/#work"><span aria-hidden="true">←</span> All selected work</Link>
        <Link className="next-project-link" to={`/work/${related.slug}`}><span>Next project</span><strong>{related.title} <i aria-hidden="true">↗</i></strong></Link>
      </nav>
    </main>
  );
}

function NotFound() {
  return (
    <main id="main" className="not-found section-wrap" tabIndex={-1}>
      <span className="mini-kicker">404 / no project here</span>
      <h1>This page has<br /><em>gone elsewhere.</em></h1>
      <Link to="/#work" className="button button-dark">Return to the work <span aria-hidden="true">↗</span></Link>
    </main>
  );
}
