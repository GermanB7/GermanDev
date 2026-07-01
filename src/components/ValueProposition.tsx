export function ValueProposition() {
  return (
    <div className="value-grid">
      <article className="value-card value-card--wide">
        <h3>What I can be hired for</h3>
        <p>
          Java/Spring Boot REST API development, PostgreSQL-backed transactional workflows,
          Dockerized backend services with CI/CD, and authentication, authorization, and integration
          testing.
        </p>
      </article>
      <article className="value-card">
        <h3>Service-layer design</h3>
        <p>Business logic belongs in clear backend services with readable boundaries and testable behavior.</p>
      </article>
      <article className="value-card">
        <h3>Operational backend delivery</h3>
        <p>Docker, CI/CD, migrations, documentation, authentication, and observability shape the delivery.</p>
      </article>
    </div>
  );
}
