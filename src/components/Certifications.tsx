import { certifications } from '../data/certifications';

export function Certifications() {
  return (
    <div className="cert-grid">
      {certifications.map((certification) => (
        <article className="cert-card" key={certification.name}>
          <p>{certification.issuer}</p>
          <h3>{certification.name}</h3>
          <span>{certification.focus}</span>
        </article>
      ))}
    </div>
  );
}
