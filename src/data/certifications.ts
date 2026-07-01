export type Certification = {
  name: string;
  issuer: string;
  focus: string;
};

export const certifications: Certification[] = [
  {
    name: 'Algorithms Specialization',
    issuer: 'Stanford University, 2026',
    focus: 'Algorithmic thinking, complexity analysis, graph algorithms, and problem-solving foundations.',
  },
  {
    name: 'Oracle Next Education F2 T7 Back-end',
    issuer: 'Oracle / Alura Latam, 2025',
    focus: 'Backend development, Java foundations, APIs, databases, and delivery practices.',
  },
  {
    name: 'Data Science Specialization',
    issuer: 'Universidad de los Andes, 2024',
    focus: 'Data analysis, statistical foundations, and applied data workflows.',
  },
  {
    name: 'The Complete 2024 Web Development Bootcamp',
    issuer: 'Udemy, 2024',
    focus: 'Full stack web foundations, application structure, and modern web development.',
  },
];
