// Images are reserved for the small Cases showcase only.
// Project cards in the chapter / library views stay text-only by design.

export interface ProjectImage {
  src: string;
  alt: string;
}

export const projectImages: Record<string, ProjectImage> = {
  linkbrain: {
    src: '/products/linkbrain/01-landing.png',
    alt: 'LinkBrain — ontology knowledge platform',
  },
  kivel: {
    src: '/products/kivel/01-thumb.png',
    alt: 'Kivel — developmental care platform',
  },
  'knowhow-kpi': {
    src: '/products/knowhow/01-cover.png',
    alt: 'KNOWHOW — startup support agency SaaS',
  },
  'english-robot': {
    src: '/products/elo/03-cover.png',
    alt: 'ELO — robot-paired English education',
  },
};

// Featured projects (with images), in display order — most attractive first.
export const featuredProjectIds = [
  'linkbrain',
  'kivel',
  'knowhow-kpi',
  'english-robot',
] as const;

export const getCover = (id: string): string | undefined =>
  projectImages[id]?.src;
