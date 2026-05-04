import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const sections = [
  { id: 'home', label: 'Home' },
  { id: 'work', label: 'Work' },
  { id: 'pattern', label: 'Pattern' },
  { id: 'chapters', label: 'Chapters' },
  { id: 'projects', label: 'Projects' },
  { id: 'timeline', label: 'Timeline' },
  { id: 'awards', label: 'Awards' },
  { id: 'contact', label: 'Contact' },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState('home');
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 24);
      const offsets = sections.map((s) => {
        const el = document.getElementById(s.id);
        if (!el) return { id: s.id, top: Infinity };
        return { id: s.id, top: Math.abs(el.getBoundingClientRect().top - 100) };
      });
      offsets.sort((a, b) => a.top - b.top);
      if (offsets[0]) setActive(offsets[0].id);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleClick = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY - 64;
      window.scrollTo({ top, behavior: 'smooth' });
    }
    setOpen(false);
  };

  return (
    <motion.header
      initial={{ y: -16, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'border-b border-ink/10 bg-ivory/75 backdrop-blur-xl'
          : 'border-b border-transparent'
      }`}
    >
      <div className="mx-auto flex h-16 max-w-page items-center justify-between px-6 md:px-10">
        <button
          onClick={() => handleClick('home')}
          className="group flex items-center gap-3 text-[13px] tracking-tight"
        >
          <span className="relative flex h-7 w-7 items-center justify-center rounded-full border border-ink/20 bg-ivory">
            <span className="font-mono text-[10px] font-medium text-ink">YK</span>
            <span className="absolute -right-0.5 -top-0.5 h-1.5 w-1.5 rounded-full bg-rust" />
          </span>
          <span className="hidden flex-col items-start leading-tight md:flex">
            <span className="text-ink">Yubin Kim</span>
            <span className="font-mono text-[9px] uppercase tracking-[0.22em] text-mute">
              Studio Archive
            </span>
          </span>
        </button>

        <nav className="hidden items-center gap-1 md:flex">
          {sections.map((s) => (
            <button
              key={s.id}
              onClick={() => handleClick(s.id)}
              className={`relative rounded-full px-3 py-1.5 text-[12px] transition-colors ${
                active === s.id ? 'text-ink' : 'text-mute hover:text-ink'
              }`}
            >
              {active === s.id && (
                <motion.span
                  layoutId="nav-active"
                  className="absolute inset-0 rounded-full bg-ink/[0.08]"
                  transition={{ type: 'spring', stiffness: 380, damping: 32 }}
                />
              )}
              <span className="relative">{s.label}</span>
            </button>
          ))}
        </nav>

        <div className="hidden md:block">
          <a
            href="mailto:uni12719@gmail.com"
            className="group inline-flex items-center gap-2 rounded-full bg-ink px-4 py-2 text-[12px] font-medium text-ivory transition-transform hover:scale-[1.02]"
          >
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inset-0 animate-ping rounded-full bg-rust opacity-60" />
              <span className="relative h-1.5 w-1.5 rounded-full bg-rust" />
            </span>
            Available for work
          </a>
        </div>

        <button
          onClick={() => setOpen((v) => !v)}
          className="flex h-9 w-9 items-center justify-center rounded-full border border-ink/15 md:hidden"
          aria-label="Menu"
        >
          <span className="flex flex-col gap-1.5">
            <span
              className={`block h-px w-4 bg-ink transition-transform ${
                open ? 'translate-y-[3px] rotate-45' : ''
              }`}
            />
            <span
              className={`block h-px w-4 bg-ink transition-transform ${
                open ? '-translate-y-[3px] -rotate-45' : ''
              }`}
            />
          </span>
        </button>
      </div>

      {open && (
        <div className="border-t border-ink/10 bg-ivory/95 backdrop-blur-xl md:hidden">
          <div className="flex flex-col p-4">
            {sections.map((s) => (
              <button
                key={s.id}
                onClick={() => handleClick(s.id)}
                className="flex items-center justify-between rounded-xl px-3 py-3 text-left text-mute transition-colors hover:bg-ink/5 hover:text-ink"
              >
                <span>{s.label}</span>
                <span className="text-mute">→</span>
              </button>
            ))}
          </div>
        </div>
      )}
    </motion.header>
  );
}
