import { skillGroups } from '../data/skills';

export function TechStack() {
  return (
    <div className="stack-grid">
      {skillGroups.map((group) => (
        <article className="stack-card" key={group.title}>
          <h3>{group.title}</h3>
          <div className="tag-list">
            {group.items.map((item) => (
              <span key={item}>{item}</span>
            ))}
          </div>
        </article>
      ))}
    </div>
  );
}
