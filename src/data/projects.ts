export type Project = {
  name: string;
  status: string;
  description: string;
  impact: string;
  stack: string[];
  highlights: string[];
  links: {
    label: string;
    href: string;
  }[];
};

export const projects: Project[] = [
  {
    name: 'RelaxOS — Personal Decision System',
    status: 'Public backend project',
    description:
      'A modular monolith decision platform for independent-living scenarios, expenses, score snapshots, risk factors, recommendations, adaptive modes, meals, and dashboard aggregation.',
    impact:
      'Shows backend ownership of business rules, scoring logic, authentication, persistence, and operational workflows.',
    stack: ['Java', 'Spring Boot', 'React', 'PostgreSQL', 'Docker', 'Flyway', 'JWT', 'GitHub Actions'],
    highlights: [
      'Rule-based recommendation engine.',
      'Backend-owned scoring and risk logic.',
      'JWT authentication and ownership checks.',
      'Dockerized local environment.',
      'Database migrations with Flyway.',
      'Backup and restore workflows.',
      'CI validation and tests.',
    ],
    links: [{ label: 'Repository', href: 'https://github.com/GermanB7/RelaxOs' }],
  },
  {
    name: 'Neobank Backend',
    status: 'Fintech backend project',
    description:
      'A fintech-style backend focused on transactional correctness, account ownership, ledger operations, reversals, reconciliation, and event-driven workflows.',
    impact:
      'Demonstrates careful handling of money movement, consistency, auditability, and asynchronous backend processes.',
    stack: ['Java', 'Spring Boot', 'PostgreSQL', 'Redis', 'Kafka', 'Docker', 'Flyway', 'Spring Security', 'JWT'],
    highlights: [
      'Modular monolith architecture.',
      'Atomic money movement workflows.',
      'Double-entry ledger logic.',
      'Reversals and reconciliation.',
      'Transactional outbox pattern.',
      'Kafka-based asynchronous workflows.',
      'Observability with metrics and dashboards.',
    ],
    links: [{ label: 'Repository', href: 'https://github.com/GermanB7/neobank-backend' }],
  },
  {
    name: 'Event-Driven Order Management System',
    status: 'Event-driven backend project',
    description:
      'An event-driven backend system for order orchestration, inventory reservation, payment coordination, compensation flows, retries, idempotency, dead-letter queues, replay workflows, and observability.',
    impact:
      'Highlights distributed workflow thinking: idempotency, retries, replayability, event boundaries, and integration testing.',
    stack: ['Java', 'Spring Boot', 'Kafka', 'PostgreSQL', 'Docker', 'Outbox Pattern', 'Integration Testing'],
    highlights: [
      'Event-driven order orchestration.',
      'Transactional outbox.',
      'Idempotent consumers.',
      'Retry and dead-letter queue handling.',
      'Replay workflows.',
      'Integration and architecture tests.',
    ],
    links: [{ label: 'Repository', href: 'https://github.com/GermanB7/event-driven-order-management-system' }],
  },
];
