export type ExperienceItem = {
  company: string;
  role: string;
  date: string;
  location: string;
  summary?: string;
  achievements: string[];
};

export const experience: ExperienceItem[] = [
  {
    company: 'Infometrika SAS',
    role: 'Full Stack Developer',
    date: 'Mar 2025 — Aug 2025',
    location: 'Bogotá, Colombia',
    achievements: [
      'Contributed to SISDH, a Human Rights Monitoring System for a public-sector client, across backend, frontend, tests, documentation, and stakeholder validation.',
      'Built backend functionality with Django, DRF, Celery, PostgreSQL, Redis, Docker, and GitLab CI/CD using layered architecture and service-oriented design practices.',
      'Contributed Vue 3 / Vuetify 3 features, wrote Pytest unit tests, and documented technical flows in Wiki.js.',
    ],
  },
  {
    company: 'Festy',
    role: 'Cofounder & Full Stack Developer',
    date: 'Jan 2024 — Dec 2024',
    location: 'Bogotá, Colombia',
    achievements: [
      'Built the MVP backend and mobile product flows for a mobile-first event platform using Flutter, Django, PostgreSQL, JWT authentication, REST APIs, and modular backend design.',
      'Reached MVP stage with 100+ downloads and supported early commercial partnerships with bars and venues in Bogotá.',
    ],
  },
  {
    company: 'Elevation Lounge Barber',
    role: 'Web Developer',
    date: 'Nov 2023 — Feb 2024',
    location: 'Bogotá, Colombia',
    achievements: [
      'Built a web booking platform using React/Next.js and Firebase to support appointment scheduling and customer interaction.',
      'Automated manual reservation coordination and improved operational visibility for a small service business.',
    ],
  },
];
