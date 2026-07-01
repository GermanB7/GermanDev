import { profile } from '../data/profile';

const navigation = [
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Stack', href: '#stack' },
  { label: 'Contact', href: '#contact' },
];

export function Hero() {
  const socialLinks = [
    { label: 'GitHub', href: profile.github },
    { label: 'LinkedIn', href: profile.linkedin },
  ];

  return (
    <header className="hero">
      <div className="hero__network" aria-hidden="true">
        <span className="hero__node hero__node--one" />
        <span className="hero__node hero__node--two" />
        <span className="hero__node hero__node--three" />
        <span className="hero__node hero__node--four" />
      </div>
      <nav className="nav" aria-label="Primary navigation">
        <a className="nav__brand" href="#top" aria-label="Germán Camilo Bernal Ladino home">
          GCBL
        </a>
        <div className="nav__links">
          {navigation.map((item) => (
            <a key={item.href} href={item.href}>
              {item.label}
            </a>
          ))}
        </div>
      </nav>

      <div className="hero__content" id="top">
        <div className="hero__copy">
          <p className="availability">
            {profile.role} | {profile.location}
          </p>
          <h1>{profile.headline}</h1>
          <p className="hero__positioning">{profile.positioning}</p>
          <p className="hero__lead">{profile.summary}</p>
          <div className="hero__actions" aria-label="Primary actions">
            <a className="button button--primary" href="#projects">
              View Projects
            </a>
            <a className="button button--secondary" href={profile.cv} download>
              Download CV
            </a>
          </div>
          <div className="social-links" aria-label="Social links">
            <a href={`mailto:${profile.email}`}>{profile.email}</a>
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>

        <aside className="hero__panel" aria-label="Backend profile highlights">
          <div>
            <span className="metric__value">Java</span>
            <span className="metric__label">Primary backend language</span>
          </div>
          <div>
            <span className="metric__value">Spring Boot</span>
            <span className="metric__label">API and service architecture</span>
          </div>
          <div>
            <span className="metric__value">PostgreSQL</span>
            <span className="metric__label">Transactional data systems</span>
          </div>
          <div>
            <span className="metric__value">Kafka + CI/CD</span>
            <span className="metric__label">Event-driven and deployable workflows</span>
          </div>
        </aside>
      </div>
    </header>
  );
}
