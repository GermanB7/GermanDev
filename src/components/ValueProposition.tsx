export function ValueProposition() {
  return (
    <div className="value-grid">
      <article className="value-card value-card--wide">
        <h3>Backend systems where correctness and operational clarity matter</h3>
        <p>
          I focus on backend systems where correctness, maintainability, security, and operational
          clarity matter. My work emphasizes modular architecture, service-layer design, database
          consistency, authentication and authorization, event-driven workflows, tests,
          documentation, and CI/CD.
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
