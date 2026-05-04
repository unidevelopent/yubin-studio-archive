import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
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
        <div className="mb-16 flex flex-col items-start justify-between gap-6 md:flex-row md:items-end md:mb-24">
          <div>
            <span className="label-eyebrow">Selected Work</span>
            <h2 className="display-2 mt-6 text-4xl text-ink md:text-6xl">
              Things made,
              <br />
              <span className="editorial text-rust">measured</span> in the field.
            </h2>
          </div>
          <p className="max-w-sm text-[14px] leading-relaxed text-ink-soft">
            8개의 대표 프로젝트. 각 프로젝트는 실제로 사용된 화면, 실제로 만난 고객,
            그리고 실제로 측정된 결과를 담고 있습니다.
          </p>
        </div>

        <div className="space-y-32 md:space-y-40">
          {items.map((p, i) => (
            <FeaturedRow
              key={p.id}
              project={p}
              index={i}
              onOpen={() => onOpen(p)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function FeaturedRow({
  project,
  index,
  onOpen,
}: {
  project: Project;
  index: number;
  onOpen: () => void;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });
  const y = useTransform(scrollYProgress, [0, 1], [40, -40]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [1.04, 1, 1.04]);

  const isReversed = index % 2 === 1;
  const img = projectImages[project.id];
  if (!img) return null;
  const chapter = getChapter(project.chapter);

  return (
    <motion.article
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.9, ease }}
      className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-12"
    >
      {/* Image */}
      <div
        className={`relative lg:col-span-8 ${isReversed ? 'lg:order-2' : ''}`}
      >
        <button
          onClick={onOpen}
          data-cursor="hover"
          className="group relative block w-full overflow-hidden rounded-3xl border border-ink/10 bg-ink/5 text-left"
        >
          <motion.div style={{ y, scale }} className="relative aspect-[16/10]">
            <img
              src={img.src}
              alt={img.alt}
              loading="lazy"
              className="absolute inset-0 h-full w-full object-cover"
            />
          </motion.div>

          {/* Top label strip */}
          <div className="absolute inset-x-6 top-6 flex items-center justify-between">
            <span className="inline-flex items-center gap-2 rounded-full border border-ivory/40 bg-ink/45 px-3 py-1 text-[10px] font-mono uppercase tracking-[0.2em] text-ivory backdrop-blur-md">
              <span className="h-1 w-1 rounded-full bg-rust" />
              {chapter.name}
            </span>
            <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-ivory/85 mix-blend-difference">
              {String(index + 1).padStart(2, '0')} / {String(8).padStart(2, '0')}
            </span>
          </div>

          {/* Bottom overlay */}
          <div className="absolute inset-x-6 bottom-6 flex items-end justify-between">
            <div className="rounded-2xl bg-ink/70 px-4 py-2 backdrop-blur-md">
              <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-ivory/70">
                {project.period}
              </p>
              <p className="mt-0.5 text-[12px] text-ivory">{project.role}</p>
            </div>
            <span className="flex h-12 w-12 items-center justify-center rounded-full bg-ivory text-ink transition-transform group-hover:scale-110 group-hover:rotate-12">
              ↗
            </span>
          </div>
        </button>
      </div>

      {/* Text */}
      <div
        className={`flex flex-col justify-center lg:col-span-4 ${
          isReversed ? 'lg:order-1 lg:items-end lg:text-right' : ''
        }`}
      >
        <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-rust">
          0{index + 1}
        </span>
        <h3 className="display-2 mt-3 text-[34px] leading-[1.0] text-ink md:text-[44px]">
          {project.title}
        </h3>
        <p className="mt-5 max-w-md text-[14px] leading-relaxed text-ink-soft">
          {project.summary}
        </p>

        {project.proof?.[0] && (
          <div
            className={`mt-6 inline-flex items-start gap-3 rounded-2xl border border-moss/20 bg-moss/[0.05] px-4 py-3 ${
              isReversed ? 'lg:self-end lg:flex-row-reverse lg:text-right' : ''
            }`}
          >
            <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-moss" />
            <span className="text-[12px] leading-relaxed text-moss">
              {project.proof[0]}
            </span>
          </div>
        )}

        <div className={`mt-6 flex flex-wrap gap-1.5 ${isReversed ? 'lg:justify-end' : ''}`}>
          {project.tags.slice(0, 4).map((t) => (
            <span key={t} className="pill">
              {t}
            </span>
          ))}
        </div>

        <button
          onClick={onOpen}
          className="ink-link mt-8 inline-flex items-center gap-2 self-start text-[13px] text-ink"
        >
          {isReversed ? '↗' : null} View case <span>{isReversed ? null : '↗'}</span>
        </button>
      </div>
    </motion.article>
  );
}
