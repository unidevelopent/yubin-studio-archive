import { AnimatePresence, motion } from 'framer-motion';
import { useEffect } from 'react';
import type { Project } from '../data/projects';
import { getChapter } from '../data/chapters';
import { projectImages } from '../data/images';

const ease = [0.22, 1, 0.36, 1] as const;

export function ProjectModal({
  project,
  onClose,
}: {
  project: Project | null;
  onClose: () => void;
}) {
  useEffect(() => {
    if (project) {
      const onKey = (e: KeyboardEvent) => {
        if (e.key === 'Escape') onClose();
      };
      window.addEventListener('keydown', onKey);
      document.body.style.overflow = 'hidden';
      return () => {
        window.removeEventListener('keydown', onKey);
        document.body.style.overflow = '';
      };
    }
  }, [project, onClose]);

  return (
    <AnimatePresence>
      {project && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-[120] flex items-stretch justify-center bg-ink/70 backdrop-blur-md md:items-center md:p-6"
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0, y: 24, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.98 }}
            transition={{ duration: 0.4, ease }}
            onClick={(e) => e.stopPropagation()}
            className="relative h-full w-full overflow-y-auto border border-ink/10 bg-ivory md:h-auto md:max-h-[88vh] md:max-w-3xl md:rounded-3xl"
          >
            <div className="sticky top-0 z-10 flex items-center justify-between border-b border-ink/10 bg-ivory/95 px-6 py-4 backdrop-blur-xl md:px-10">
              <span className="font-mono text-[10px] tracking-[0.2em] text-rust">
                {getChapter(project.chapter).number} ·{' '}
                {getChapter(project.chapter).name}
              </span>
              <button
                onClick={onClose}
                className="flex h-8 w-8 items-center justify-center rounded-full border border-ink/15 text-ink-soft transition-colors hover:border-ink/30 hover:text-ink"
                aria-label="Close"
              >
                ×
              </button>
            </div>

            <div className="px-6 py-10 md:px-10 md:py-14">
              <div className="flex flex-wrap items-center gap-2">
                {project.isConfidential && (
                  <span className="inline-flex items-center gap-1.5 rounded-full border border-ink/15 bg-white/50 px-3 py-1 text-[11px] text-ink-soft">
                    <span className="h-1.5 w-1.5 rounded-full bg-mute" />
                    Client Project · Name withheld
                  </span>
                )}
                <span className="pill">{project.period}</span>
              </div>

              <h2 className="display-2 mt-6 text-3xl text-ink md:text-5xl">
                {project.title}
              </h2>
              <p className="mt-4 text-[14px] text-mute">{project.role}</p>

              {projectImages[project.id] && (
                <div className="mt-8 flex items-center justify-center overflow-hidden rounded-2xl border border-ink/10 bg-ivory-soft p-6 md:p-8">
                  <img
                    src={projectImages[project.id]!.src}
                    alt={projectImages[project.id]!.alt}
                    className="mx-auto h-auto max-h-[420px] w-auto max-w-full object-contain"
                    loading="lazy"
                  />
                </div>
              )}

              <p className="mt-8 max-w-2xl text-[16px] leading-relaxed text-ink-soft">
                {project.summary}
              </p>

              {project.problem && project.problem.length > 0 && (
                <Section label="Problem">
                  <ul className="space-y-3">
                    {project.problem.map((p, i) => (
                      <li
                        key={i}
                        className="flex gap-3 text-[14px] leading-relaxed text-ink-soft"
                      >
                        <span className="mt-2 h-px w-4 shrink-0 bg-mute" />
                        <span>{p}</span>
                      </li>
                    ))}
                  </ul>
                </Section>
              )}

              <Section label="What I built">
                <ul className="space-y-3">
                  {project.work.map((w, i) => (
                    <li
                      key={i}
                      className="flex gap-3 text-[14px] leading-relaxed text-ink"
                    >
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-rust" />
                      <span>{w}</span>
                    </li>
                  ))}
                </ul>
              </Section>

              {project.proof && project.proof.length > 0 && (
                <Section label="Proof">
                  <div className="rounded-2xl border border-moss/30 bg-moss/[0.06] p-5">
                    <ul className="space-y-3">
                      {project.proof.map((p, i) => (
                        <li
                          key={i}
                          className="flex gap-3 text-[14px] leading-relaxed text-ink"
                        >
                          <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-moss" />
                          <span>{p}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </Section>
              )}

              <Section label="Tags">
                <div className="flex flex-wrap gap-1.5">
                  {project.tags.map((t) => (
                    <span key={t} className="pill">
                      {t}
                    </span>
                  ))}
                </div>
              </Section>

              {project.link && (
                <div className="mt-10 border-t border-ink/10 pt-6">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="ink-link inline-flex items-center gap-2 text-[13px] text-ink"
                  >
                    {project.link}
                    <span>↗</span>
                  </a>
                </div>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

function Section({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div className="mt-10">
      <div className="mb-5 flex items-center gap-3">
        <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-mute">
          {label}
        </span>
        <span className="h-px flex-1 bg-ink/10" />
      </div>
      {children}
    </div>
  );
}
