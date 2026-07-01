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
            {item.summary ? <p>{item.summary}</p> : null}
            <ul className="check-list">
              {item.achievements.map((achievement) => (
                <li key={achievement}>{achievement}</li>
              ))}
            </ul>
          </div>
        </article>
      ))}
    </div>
  );
}
