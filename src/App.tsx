import { useState } from 'react';
import { Loader } from './components/Loader';
import { Cursor } from './components/Cursor';
import { Nav } from './components/Nav';
import { Hero } from './components/Hero';
import { FeaturedWork } from './components/FeaturedWork';
import { Pattern } from './components/Pattern';
import { Metrics } from './components/Metrics';
import { PhotoGallery } from './components/PhotoGallery';
import { ChapterSection } from './components/ChapterSection';
import { Timeline } from './components/Timeline';
import { ProjectLibrary } from './components/ProjectLibrary';
import { Experience } from './components/Experience';
import { Awards } from './components/Awards';
import { Collaboration } from './components/Collaboration';
import { Footer } from './components/Footer';
import { ProjectModal } from './components/ProjectModal';
import type { Project } from './data/projects';

export default function App() {
  const [active, setActive] = useState<Project | null>(null);
  const [loaded, setLoaded] = useState(false);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (!el) return;
    const top = el.getBoundingClientRect().top + window.scrollY - 64;
    window.scrollTo({ top, behavior: 'smooth' });
  };

  return (
    <>
      {!loaded && <Loader onDone={() => setLoaded(true)} />}
      <Cursor />
      <Nav />
      <main className="relative">
        <Hero
          onPrimary={() => scrollTo('work')}
          onSecondary={() => scrollTo('projects')}
          onTertiary={() => scrollTo('work-together')}
        />
        <FeaturedWork onOpen={setActive} />
        <Pattern />
        <Metrics />
        <PhotoGallery />
        <ChapterSection onOpen={setActive} />
        <ProjectLibrary onOpen={setActive} />
        <Timeline />
        <Experience />
        <Awards />
        <Collaboration />
        <Footer />
      </main>
      <ProjectModal project={active} onClose={() => setActive(null)} />
    </>
  );
}
