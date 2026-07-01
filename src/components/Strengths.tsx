import { strengths } from '../data/skills';

export function Strengths() {
  return (
    <div className="strength-grid">
      {strengths.map((strength) => (
        <article className="strength-card" key={strength.title}>
          <h3>{strength.title}</h3>
          <p>{strength.description}</p>
        </article>
      ))}
    </div>
  );
}
