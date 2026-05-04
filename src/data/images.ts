// Images are reserved for the small Cases showcase only.
// Project cards in the chapter / library views stay text-only by design.

export interface ProjectImage {
  src: string;
  alt: string;
}

export const projectImages: Record<string, ProjectImage> = {
  linkbrain: {
    src: '/products/linkbrain/thumbnail.png',
    alt: 'LinkBrain — ontology knowledge platform',
  },
  'english-robot': {
    src: '/products/elo/03-cover.png',
    alt: 'ELO — robot-paired English education',
  },
  kivel: {
    src: '/products/kivel/01-thumb.png',
    alt: 'Kivel — developmental care platform',
  },
  'doctor-kong': {
    src: '/products/doctorkong/02-flow.jpg',
    alt: 'Doctor Kong — early childhood development app',
  },
  odyssey: {
    src: '/products/odyssey/01-cover.png',
    alt: 'Odyssey — long-term goal compass',
  },
  thinkle: {
    // Placeholder. Drop the real photo to /public/products/thinkle/cover.png and change `.svg` → `.png`.
    src: '/products/thinkle/cover.svg',
    alt: 'Thinkle — character-room civic SNS',
  },
};

// Featured projects (with images), in display order.
export const featuredProjectIds = [
  'linkbrain',
  'english-robot',
  'kivel',
  'doctor-kong',
  'odyssey',
  'thinkle',
] as const;

export const getCover = (id: string): string | undefined =>
  projectImages[id]?.src;
