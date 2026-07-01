export type SkillGroup = {
  title: string;
  items: string[];
};

export const skillGroups: SkillGroup[] = [
  {
    title: 'Backend',
    items: ['Java', 'Spring Boot', 'Spring Security', 'Spring Data JPA', 'Python', 'Django', 'DRF', 'REST APIs', 'JWT'],
  },
  {
    title: 'Databases',
    items: ['PostgreSQL', 'MongoDB', 'Redis'],
  },
  {
    title: 'Messaging / Async',
    items: ['Kafka', 'Celery', 'Transactional Outbox', 'Event-Driven Workflows'],
  },
  {
    title: 'DevOps',
    items: ['Docker', 'Docker Compose', 'GitHub Actions', 'GitLab CI/CD'],
  },
  {
    title: 'Testing',
    items: ['JUnit', 'MockMvc', 'Pytest', 'Postman'],
  },
  {
    title: 'Observability',
    items: ['Actuator', 'Micrometer', 'Prometheus', 'Grafana'],
  },
  {
    title: 'Frontend',
    items: ['React', 'Vue 3', 'Vuetify', 'Flutter'],
  },
  {
    title: 'Tools',
    items: ['Git', 'Swagger/OpenAPI', 'Flyway', 'Maven', 'Notion', 'Wiki.js', 'SQL'],
  },
];

export const strengths = [
  {
    title: 'Backend Architecture',
    description: 'Modular service design, clear boundaries, and maintainable backend structure.',
  },
  {
    title: 'REST API Design',
    description: 'Resource-oriented APIs with validation, predictable responses, and documentation.',
  },
  {
    title: 'Transactional Workflows',
    description: 'State-changing operations designed around consistency, reversals, and failure paths.',
  },
  {
    title: 'Authentication & Authorization',
    description: 'JWT authentication, account ownership checks, and secure access boundaries.',
  },
  {
    title: 'Event-Driven Systems',
    description: 'Kafka-based workflows, outbox patterns, idempotency, retries, and replay handling.',
  },
  {
    title: 'Testing & CI/CD',
    description: 'Automated validation through unit, integration, API, and pipeline checks.',
  },
  {
    title: 'Database Consistency',
    description: 'PostgreSQL-backed data models, migrations, constraints, and transactional behavior.',
  },
  {
    title: 'Observability',
    description: 'Metrics, dashboards, operational clarity, and debugging-friendly system design.',
  },
];
