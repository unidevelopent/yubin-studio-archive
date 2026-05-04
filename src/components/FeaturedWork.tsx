import { motion } from 'framer-motion';
import { featuredProjectIds, projectImages } from '../data/images';
import { projects } from '../data/projects';
import type { Project } from '../data/projects';
import { getChapter } from '../data/chapters';

const ease = [0.22, 1, 0.36, 1] as const;

export function FeaturedWork({ onOpen }: { onOpen: (p: Project) => void }) {
  const items = featuredProjectIds
    .map((id) => projects.find((p) => p.id === id))
    .filter((p): p is Project => Boolean(p));

  return (
    <section id="work" className="relative py-32 md:py-40">
      <div className="mx-auto max-w-page px-6 md:px-10">
        <div className="mb-16 md:mb-24">
          <span className="label-eyebrow">Selected Work</span>
          <h2 className="display-2 mt-6 text-4xl text-ink md:text-6xl">
            Six cases,
            <br />
            <span className="editorial text-rust">in the world</span>.
          </h2>
        </div>

        <div className="space-y-6 md:space-y-8">
          {items.map((p, i) => (
            <CaseRow
              key={p.id}
              project={p}
              index={i}
              total={items.length}
              onOpen={() => onOpen(p)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function CaseRow({
  project,
  index,
  total,
  onOpen,
}: {
  project: Project;
  index: number;
  total: number;
  onOpen: () => void;
}) {
  const isReversed = index % 2 === 1;
  const img = projectImages[project.id];
  const chapter = getChapter(project.chapter);

  return (
    <motion.button
      onClick={onOpen}
      data-cursor="hover"
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.8, ease }}
      whileHover={{ y: -4 }}
      className="group block w-full overflow-hidden rounded-3xl border border-ink/10 bg-white/40 text-left backdrop-blur-sm transition-all duration-500 hover:border-ink/25 hover:bg-white/70 hover:shadow-[0_30px_70px_-32px_rgba(19,18,17,0.22)]"
    >
      <div
        className={`grid grid-cols-1 gap-0 lg:grid-cols-12 ${
          isReversed ? 'lg:[&>*:first-child]:order-2' : ''
        }`}
      >
        {/* Image panel */}
        <div className="relative flex items-center justify-center bg-ivory-soft p-6 md:p-10 lg:col-span-7">
          <div className="absolute left-6 top-6 inline-flex items-center gap-2 rounded-full border border-ink/10 bg-ivory/80 px-3 py-1 text-[10px] font-mono uppercase tracking-[0.22em] text-ink-soft backdrop-blur-md">
            <span className="h-1 w-1 rounded-full bg-rust" />
            {chapter.name}
          </div>
          <span className="absolute right-6 top-6 font-mono text-[10px] uppercase tracking-[0.22em] text-mute">
            {String(index + 1).padStart(2, '0')} / {String(total).padStart(2, '0')}
          </span>

          {img ? (
            <div className="relative my-8 w-full">
              <img
                src={img.src}
                alt={img.alt}
                loading="lazy"
                className="mx-auto h-auto max-h-[420px] w-auto max-w-full rounded-xl object-contain shadow-[0_30px_60px_-30px_rgba(19,18,17,0.30)] transition-transform duration-700 group-hover:scale-[1.02]"
              />
            </div>
          ) : (
            <div className="aspect-[16/10] w-full" />
          )}

          <span className="absolute bottom-6 right-6 inline-flex h-10 w-10 items-center justify-center rounded-full border border-ink/15 bg-ivory text-ink transition-transform group-hover:rotate-12 group-hover:bg-ink group-hover:text-ivory">
            ↗
          </span>
        </div>

        {/* Text panel */}
        <div className="flex flex-col justify-center gap-5 p-8 md:p-12 lg:col-span-5">
          <div className="flex items-baseline gap-3">
            <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-rust">
              0{index + 1}
            </span>
            <span className="h-px w-8 bg-rust/40" />
            <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-mute">
              {project.period}
            </span>
          </div>

          <h3 className="display-2 text-[34px] leading-[0.95] text-ink md:text-[44px]">
            {project.title}
          </h3>

          <p className="text-[12px] uppercase tracking-[0.12em] text-mute">
            {project.role}
          </p>

          <p className="text-[14px] leading-relaxed text-ink-soft">
            {project.summary}
          </p>

          {project.proof?.[0] && (
            <div className="inline-flex items-start gap-3 rounded-2xl border border-moss/20 bg-moss/[0.06] px-4 py-3">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-moss" />
              <span className="text-[12px] leading-relaxed text-moss">
                {project.proof[0]}
              </span>
            </div>
          )}

          <div className="mt-2 flex flex-wrap gap-1.5">
            {project.tags.slice(0, 4).map((t) => (
              <span key={t} className="pill">
                {t}
              </span>
            ))}
          </div>

          <span className="mt-2 inline-flex items-center gap-2 text-[13px] text-ink">
            <span className="ink-link">Open case</span>
            <span className="transition-transform group-hover:translate-x-0.5">→</span>
          </span>
        </div>
      </div>
    </motion.button>
  );
}
