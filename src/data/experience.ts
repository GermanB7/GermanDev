export type ExperienceItem = {
  company: string;
  role: string;
  date: string;
  location: string;
  summary: string;
};

export const experience: ExperienceItem[] = [
  {
    company: 'Infometrika SAS',
    role: 'Full Stack Developer',
    date: 'Mar 2025 — Aug 2025',
    location: 'Bogotá, Colombia',
    summary:
      'Contributed to SISDH, a Human Rights Monitoring System developed as part of Project Argo for a public-sector client. Worked on backend functionality using Django, Django REST Framework, Celery, PostgreSQL, Redis, Docker, and GitLab CI/CD. Also contributed to frontend development using Vue 3 and Vuetify 3.',
  },
  {
    company: 'Festy',
    role: 'Cofounder & Full Stack Developer',
    date: 'Jan 2024 — Dec 2024',
    location: 'Bogotá, Colombia',
    summary:
      'Led technical development of a mobile-first event management platform using Flutter, Django, and PostgreSQL. Built core product flows, JWT authentication, REST APIs, modular backend structure, and helped reach MVP stage with 100+ downloads and early commercial partnerships.',
  },
  {
    company: 'Elevation Lounge Barber',
    role: 'Web Developer',
    date: 'Nov 2023 — Feb 2024',
    location: 'Bogotá, Colombia',
    summary:
      'Built a booking platform for appointment scheduling and customer interaction, improving reservation management and reducing manual coordination.',
  },
];
