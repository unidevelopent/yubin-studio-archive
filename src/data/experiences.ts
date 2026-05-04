export interface Experience {
  company: string;
  period: string;
  role: string;
  keywords: string[];
}

export const experiences: Experience[] = [
  {
    company: 'Addeep',
    period: '2025.09 — 현재',
    role: 'CAIBSO',
    keywords: [
      'GPR',
      'Human-State AI',
      'ACT',
      'Agentic Commerce',
      'Research Planning',
      'AI Business Strategy',
    ],
  },
  {
    company: 'Future Work Lab',
    period: '2024.12 — 2025.09',
    role: 'CPO',
    keywords: [
      'Ontology AI',
      'Graph RAG',
      'AI Agent',
      'B2B SaaS',
      'PoC Sales',
      'Team Operation',
    ],
  },
  {
    company: 'Witi / KNOWHOW',
    period: '2024.07 — 2024.11',
    role: 'Business Lead',
    keywords: [
      'Startup Infrastructure',
      'B2B SaaS',
      'Public Sector Sales',
      'Investment SaaS',
      'Community',
    ],
  },
  {
    company: 'Kivel',
    period: '2023.05 — 2024.06',
    role: 'Product Manager',
    keywords: [
      'Care Tech',
      'Developmental Disability',
      'Healthcare Platform',
      'Community',
      'Education Content',
    ],
  },
  {
    company: 'Thinkle',
    period: '2021.09 — 2023.02',
    role: 'Founder · CEO',
    keywords: [
      'Civic Tech',
      'Metaverse',
      'Political Participation',
      'Community',
      'Social Impact',
    ],
  },
];

export const education = {
  school: '강원대학교',
  major: '정치외교학과 · 데이터사이언스학과',
  gpa: '4.01',
  period: '2020.03 — 2024.08',
};

export const certifications = [
  {
    name: 'ADsP',
    issuer: '한국데이터산업진흥원',
    year: '2024',
  },
];
