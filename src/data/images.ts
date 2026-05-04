// One representative image per project — kept consistent for the gallery.

export interface ProjectImage {
  src: string;
  alt: string;
  ratio?: 'wide' | 'tall' | 'square' | 'mobile';
}

export const projectImages: Record<string, ProjectImage> = {
  'english-robot': {
    src: '/products/elo/03-cover.png',
    alt: 'ELO — robot-paired English education',
    ratio: 'wide',
  },
  'manufacturing-pivot': {
    src: '/products/factoflow/01-cover.png',
    alt: 'FactoFlow — ontology manufacturing agent',
    ratio: 'wide',
  },
  'manufacturing-agent': {
    src: '/products/factoflow/02-detail.png',
    alt: 'Manufacturing AI Agent — MES integration',
    ratio: 'wide',
  },
  'medical-tourism': {
    src: '/products/hellu/01-web.png',
    alt: 'Hellu — medical tourism service',
    ratio: 'wide',
  },
  'knowhow-kpi': {
    src: '/products/knowhow/01-cover.png',
    alt: 'KNOWHOW — startup support agency SaaS',
    ratio: 'wide',
  },
  'investment-saas': {
    src: '/products/knowhow/03-dashboard.png',
    alt: 'Investment SaaS — portfolio management',
    ratio: 'wide',
  },
  linkbrain: {
    src: '/products/linkbrain/01-landing.png',
    alt: 'LinkBrain — ontology knowledge platform',
    ratio: 'wide',
  },
  odyssey: {
    src: '/products/odyssey/01-cover.png',
    alt: 'Odyssey — long-term goal compass',
    ratio: 'wide',
  },
  'doctor-kong': {
    src: '/products/doctorkong/02-flow.jpg',
    alt: 'Doctor Kong — early childhood development app',
    ratio: 'wide',
  },
  kivel: {
    src: '/products/kivel/01-thumb.png',
    alt: 'Kivel — developmental care platform',
    ratio: 'wide',
  },
};

// Featured projects (with images), in display order.
export const featuredProjectIds = [
  'kivel',
  'linkbrain',
  'knowhow-kpi',
  'english-robot',
  'doctor-kong',
  'manufacturing-pivot',
  'odyssey',
  'medical-tourism',
] as const;

// Used by the photo marquee at the bottom of the page.
export const allImages: { src: string; alt: string }[] = Object.values(
  projectImages,
).map((i) => ({ src: i.src, alt: i.alt }));

export const getCover = (id: string): string | undefined =>
  projectImages[id]?.src;
