import { Link } from "react-router-dom";
import type { Project } from "../data/content";
import { SafeImage } from "./SafeImage";

function ArrowUpRightIcon() {
  return (
    <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M7 17 17 7" />
      <path d="M7 7h10v10" />
    </svg>
  );
}

export function ProjectTile({ project, variant = "standard" }: { project: Project; variant?: "feature" | "standard" | "compact" }) {
  const isLogo = project.kind === "Professional";
  return (
    <article className={`project-tile project-${variant} ${isLogo ? "project-client" : ""}`} style={{ "--project-accent": project.accent } as React.CSSProperties}>
      <Link to={`/work/${project.slug}`} className="project-hit" aria-label={`View ${project.title} project`}>
        <div className="project-visual">
          <SafeImage
            src={project.image}
            alt={project.alt}
            className={isLogo ? "project-logo-image" : "project-cover-image"}
            loading={variant === "feature" ? "eager" : "lazy"}
            fetchPriority={variant === "feature" ? "high" : "auto"}
          />
          <span className="project-open" aria-hidden="true"><ArrowUpRightIcon /></span>
        </div>
        <div className="project-copy">
          <div className="project-meta"><span>{project.category}</span><span>{project.kind}</span></div>
          <div className="project-title-line">
            <h3>{project.title}</h3><span className="project-arrow" aria-hidden="true"><ArrowUpRightIcon /></span>
          </div>
          {(variant !== "compact" || isLogo) && <p>{project.description}</p>}
        </div>
      </Link>
    </article>
  );
}
