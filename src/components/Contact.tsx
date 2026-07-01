import { profile } from '../data/profile';

export function Contact() {
  return (
    <div className="contact-panel">
      <div>
        <h3>Backend roles, API projects, and production-oriented engineering work</h3>
        <p>
          Based in {profile.location}. Focused on Java, Spring Boot, PostgreSQL, REST APIs,
          transactional workflows, authentication, event-driven systems, tests, Docker, and CI/CD.
        </p>
        <p className="contact-meta">{profile.email} | {profile.phone}</p>
      </div>
      <div className="contact-actions">
        <a className="button button--primary" href={`mailto:${profile.email}`}>
          Email Germán
        </a>
        <a className="button button--secondary" href={profile.github} target="_blank" rel="noreferrer">
          GitHub
        </a>
        <a className="button button--secondary" href={profile.linkedin} target="_blank" rel="noreferrer">
          LinkedIn
        </a>
      </div>
    </div>
  );
}
