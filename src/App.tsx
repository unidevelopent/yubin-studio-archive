import { useState } from 'react';
import { Loader } from './components/Loader';
import { Cursor } from './components/Cursor';
import { Nav } from './components/Nav';
import { Hero } from './components/Hero';
import { FeaturedWork } from './components/FeaturedWork';
import { Metrics } from './components/Metrics';
import { Pattern } from './components/Pattern';
import { ChapterSection } from './components/ChapterSection';
import { ProjectLibrary } from './components/ProjectLibrary';
import { Timeline } from './components/Timeline';
import { Awards } from './components/Awards';
import { Collaboration } from './components/Collaboration';
import { Footer } from './components/Footer';
import { ProjectModal } from './components/ProjectModal';
import type { Project } from './data/projects';
import type { ChapterId } from './data/chapters';

type Filter = 'all' | ChapterId;

export default function App() {
  const [active, setActive] = useState<Project | null>(null);
  const [loaded, setLoaded] = useState(false);
  const [libraryFilter, setLibraryFilter] = useState<Filter>('all');

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (!el) return;
    const top = el.getBoundingClientRect().top + window.scrollY - 64;
    window.scrollTo({ top, behavior: 'smooth' });
  };

  const jumpToLibrary = (chapterId: string) => {
    setLibraryFilter(chapterId as Filter);
    setTimeout(() => scrollTo('projects'), 60);
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
        <Metrics />
        <Pattern />
        <ChapterSection onJumpToLibrary={jumpToLibrary} />
        <ProjectLibrary
          onOpen={setActive}
          filter={libraryFilter}
          onFilterChange={setLibraryFilter}
        />
        <Timeline />
        <Awards />
        <Collaboration />
        <Footer />
      </main>
      <ProjectModal project={active} onClose={() => setActive(null)} />
    </>
  );
}
