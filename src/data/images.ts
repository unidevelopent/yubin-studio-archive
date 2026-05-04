// Per-project media. Cover is shown on the FeaturedWork card.
// Gallery is rendered inside the project modal as a stacked image strip.

export interface ProjectImage {
  src: string;
  alt: string;
}

export interface ProjectMedia {
  cover: ProjectImage;
  gallery?: ProjectImage[];
}

export const projectImages: Record<string, ProjectMedia> = {
  linkbrain: {
    cover: {
      src: '/products/linkbrain/thumbnail.png',
      alt: 'LinkBrain — ontology knowledge platform',
    },
    gallery: [
      { src: '/products/linkbrain/03-detail.png', alt: 'LinkBrain detail view' },
      { src: '/products/linkbrain/04-filtering.png', alt: 'LinkBrain filtering UI' },
      { src: '/products/linkbrain/05-doc.png', alt: 'LinkBrain document detail' },
      { src: '/products/linkbrain/07-export.png', alt: 'LinkBrain export 1' },
      { src: '/products/linkbrain/08-export.png', alt: 'LinkBrain export 2' },
      { src: '/products/linkbrain/09-export.png', alt: 'LinkBrain export 3' },
      { src: '/products/linkbrain/10-export.png', alt: 'LinkBrain export 4' },
    ],
  },
  'english-robot': {
    cover: {
      src: '/products/elo/03-cover.png',
      alt: 'ELO — robot-paired English education',
    },
    gallery: [
      { src: '/products/elo/06-tablet.png', alt: 'ELO tablet view' },
      { src: '/products/elo/01-mobile.png', alt: 'ELO mobile screen' },
      { src: '/products/elo/02-mobile.png', alt: 'ELO mobile screen' },
      { src: '/products/elo/04-select.png', alt: 'ELO selection screen' },
      { src: '/products/elo/05-select.png', alt: 'ELO selection screen' },
      { src: '/products/elo/07-robot.jpg', alt: 'ELO humanoid robot' },
      { src: '/products/elo/08-robot.png', alt: 'ELO humanoid robot' },
    ],
  },
  kivel: {
    cover: {
      src: '/products/kivel/01-thumb.png',
      alt: 'Kivel — developmental care platform',
    },
    gallery: [
      { src: '/products/kivel/04-screen.png', alt: 'Kivel screen' },
      { src: '/products/kivel/05-screen.png', alt: 'Kivel screen' },
      { src: '/products/kivel/06-screen.png', alt: 'Kivel screen' },
      { src: '/products/kivel/02-screen.png', alt: 'Kivel screen' },
      { src: '/products/kivel/03-screen.png', alt: 'Kivel screen' },
    ],
  },
  'doctor-kong': {
    cover: {
      src: '/products/doctorkong/thumbnail.png',
      alt: 'Doctor Kong — early-childhood development app',
    },
    gallery: [
      { src: '/products/doctorkong/02-flow.jpg', alt: 'Doctor Kong flow' },
      { src: '/products/doctorkong/01-walk.png', alt: 'Doctor Kong walkthrough' },
      { src: '/products/doctorkong/03-screen.png', alt: 'Doctor Kong screen' },
      { src: '/products/doctorkong/04-screen.png', alt: 'Doctor Kong screen' },
      { src: '/products/doctorkong/05-screen.png', alt: 'Doctor Kong screen' },
      { src: '/products/doctorkong/06-screen.png', alt: 'Doctor Kong screen' },
    ],
  },
  odyssey: {
    cover: {
      src: '/products/odyssey/01-cover.png',
      alt: 'Odyssey — long-term goal compass',
    },
    gallery: [
      { src: '/products/odyssey/02-page.jpg', alt: 'Odyssey page' },
      { src: '/products/odyssey/03-page.jpg', alt: 'Odyssey page' },
      { src: '/products/odyssey/04-page.jpg', alt: 'Odyssey page' },
      { src: '/products/odyssey/05-page.jpg', alt: 'Odyssey page' },
      { src: '/products/odyssey/06-page.jpg', alt: 'Odyssey page' },
      { src: '/products/odyssey/07-page.jpg', alt: 'Odyssey page' },
      { src: '/products/odyssey/08-page.jpg', alt: 'Odyssey page' },
    ],
  },
  thinkle: {
    cover: {
      src: '/products/thinkle/thumbnail.jpeg',
      alt: 'Thinkle — character-room civic SNS',
    },
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
  projectImages[id]?.cover.src;
