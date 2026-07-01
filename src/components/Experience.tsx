import { experience } from '../data/experience';

export function Experience() {
  return (
    <div className="timeline">
      {experience.map((item) => (
        <article className="timeline__item" key={`${item.company}-${item.role}`}>
          <div className="timeline__marker" aria-hidden="true" />
          <div className="timeline__content">
            <p className="timeline__period">{item.date}</p>
            <h3>{item.role}</h3>
            <p className="timeline__company">{item.company}</p>
            <p className="timeline__location">{item.location}</p>
            <p>{item.summary}</p>
          </div>
        </article>
      ))}
    </div>
  );
}
