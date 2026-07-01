import { projects } from '../data/projects';

export function FeaturedProjects() {
  return (
    <div className="project-grid">
      {projects.map((project) => (
        <article className="project-card" key={project.name}>
          <div className="project-card__rail" aria-hidden="true" />
          <div className="project-card__header">
            <p>{project.status}</p>
            <h3>{project.name}</h3>
          </div>
          <p className="project-card__description">{project.description}</p>
          <dl className="project-card__details">
            <div>
              <dt>Backend design</dt>
              <dd>{project.backendDesign}</dd>
            </div>
            <div>
              <dt>Data and consistency</dt>
              <dd>{project.dataConsistency}</dd>
            </div>
            <div>
              <dt>Testing and operations</dt>
              <dd>{project.testing}</dd>
            </div>
          </dl>
          <ul className="check-list">
            {project.highlights.map((highlight) => (
              <li key={highlight}>{highlight}</li>
            ))}
          </ul>
          <div className="tag-list" aria-label={`${project.name} technology stack`}>
            {project.stack.map((item) => (
              <span key={item}>{item}</span>
            ))}
          </div>
          <div className="project-card__links">
            {project.links.map((link) => (
              <a key={link.label} href={link.href} target="_blank" rel="noreferrer">
                {link.label}
              </a>
            ))}
          </div>
        </article>
      ))}
    </div>
  );
}
