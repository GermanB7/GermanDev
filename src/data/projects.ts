export type Project = {
  name: string;
  status: string;
  description: string;
  backendDesign: string;
  dataConsistency: string;
  testing: string;
  stack: string[];
  highlights: string[];
  links: {
    label: string;
    href: string;
  }[];
};

export const projects: Project[] = [
  {
    name: 'Neobank Backend',
    status: 'Public repository | Local Docker setup | CI-ready backend',
    description:
      'Finance-style backend focused on account ownership, transactional money movement, transfer lifecycle, ledger recording, reversals, reconciliation, auditability, and operational recovery.',
    backendDesign:
      'Modular monolith with Spring Boot, Spring Security, role/ownership authorization, service-layer transaction boundaries, and Kafka publication through an outbox flow.',
    dataConsistency:
      'Uses deterministic account locking, explicit ledger records, double-entry validation, reversals, reconciliation flows, and Flyway-managed PostgreSQL schema changes.',
    testing:
      'Includes backend validation for transfer behavior, ledger rules, authorization paths, CI checks, and operational visibility through Actuator, Micrometer, Prometheus, and Grafana.',
    stack: ['Java 21', 'Spring Boot', 'Spring Security', 'PostgreSQL', 'Redis', 'Kafka', 'Flyway', 'Docker', 'Prometheus/Grafana'],
    highlights: [
      'Transactional boundaries for money movement.',
      'Deterministic account locking.',
      'Double-entry ledger validation.',
      'Role and ownership authorization.',
      'Transactional outbox before Kafka publication.',
      'Metrics-oriented observability setup.',
    ],
    links: [{ label: 'Review code on GitHub', href: 'https://github.com/GermanB7/neobank-backend' }],
  },
  {
    name: 'RelaxOS — Personal Decision System',
    status: 'Public repository | Dockerized local environment | CI validation',
    description:
      'Decision-support system that evaluates move-out scenarios, expenses, meals, risk factors, and recommendations through backend-owned scoring rules.',
    backendDesign:
      'Modular monolith with Spring Boot services for scenarios, expenses, scoring snapshots, adaptive modes, meals, admin flows, dashboard aggregation, and backup/restore scripts.',
    dataConsistency:
      'Backend-owned deterministic rules cover scoring, risk analysis, scenario comparison, transport evaluation, recommendation lifecycle, JWT ownership checks, and Flyway migrations.',
    testing:
      'Uses Docker configuration, backend tests, frontend build checks, GitHub Actions validation, and operational documentation for local setup and recovery workflows.',
    stack: ['Java 21', 'Spring Boot', 'React', 'PostgreSQL', 'Docker', 'Flyway', 'JWT', 'GitHub Actions'],
    highlights: [
      'Rule-based recommendation engine in backend services.',
      'Deterministic scoring and risk logic.',
      'JWT authentication and ownership checks.',
      'Flyway-managed database migrations.',
      'Backup and restore workflows.',
      'CI validation and backend tests.',
    ],
    links: [{ label: 'Review code on GitHub', href: 'https://github.com/GermanB7/RelaxOs' }],
  },
  {
    name: 'Event-Driven Order Management System',
    status: 'Public repository | Event-driven workflow | Integration tests',
    description:
      'Order orchestration backend with modular boundaries for orders, inventory, payments, shipping, workflow, messaging, outbox, observability, and shared primitives.',
    backendDesign:
      'Spring Boot backend using saga-style orchestration, Kafka asynchronous delivery, compensation flows, retry/backoff behavior, dead-letter queues, and replay endpoints.',
    dataConsistency:
      'Uses a transactional outbox to persist events with state changes before asynchronous publication, plus idempotent consumers to reduce duplicate side effects.',
    testing:
      'Includes integration tests and architecture tests around workflow boundaries, messaging behavior, compensation paths, and shared primitives.',
    stack: ['Java 21', 'Spring Boot', 'PostgreSQL', 'Kafka', 'Flyway', 'Docker', 'Micrometer', 'Integration Testing'],
    highlights: [
      'Order, inventory, payment, shipping, and workflow modules.',
      'Transactional outbox with Kafka delivery.',
      'Idempotent consumers and compensation flows.',
      'Retry and dead-letter queue handling.',
      'Replay endpoint for operational recovery.',
      'Integration and architecture tests.',
    ],
    links: [{ label: 'Review code on GitHub', href: 'https://github.com/GermanB7/event-driven-order-management-system' }],
  },
];
