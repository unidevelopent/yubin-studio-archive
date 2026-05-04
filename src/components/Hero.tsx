import { motion } from 'framer-motion';
import { Marquee } from './Marquee';
import { projectImages } from '../data/images';

const ease = [0.22, 1, 0.36, 1] as const;

const heroTags = [
  'Civic Data',
  'Care Access',
  'Startup Infrastructure',
  'Ontology AI',
  'AI Agent',
  'Human-State AI',
  'Agentic Commerce',
  'Future Education',
];

const marqueeProjects = [
  'Kivel',
  'LinkBrain',
  'KNOWHOW',
  'Doctor Kong',
  'ELO',
  'FactoFlow',
  'Hellu',
  'Odyssey',
  'ZEST',
  'SRC',
  'UX Insights',
];

const fadeUp = (delay = 0) => ({
  initial: { y: 28, opacity: 0 },
  animate: { y: 0, opacity: 1 },
  transition: { duration: 0.9, ease, delay },
});

export function Hero({
  onPrimary,
  onSecondary,
  onTertiary,
}: {
  onPrimary: () => void;
  onSecondary: () => void;
  onTertiary: () => void;
}) {
  return (
    <section
      id="home"
      className="relative isolate overflow-hidden pt-28 md:pt-32"
    >
      <div className="grain" />

      {/* Top marquee */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2, delay: 0.4 }}
        className="border-y border-ink/10 bg-ivory/40 py-3"
      >
        <Marquee speed={48}>
          {marqueeProjects.map((p, i) => (
            <span key={`${p}-${i}`} className="flex items-center gap-8 px-4">
              <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-ink-soft">
                {String(i + 1).padStart(2, '0')} — {p}
              </span>
              <span className="h-1 w-1 rounded-full bg-rust/60" />
            </span>
          ))}
        </Marquee>
      </motion.div>

      <div className="relative mx-auto max-w-page px-6 md:px-10">
        {/* Top meta bar */}
        <motion.div
          {...fadeUp(0.1)}
          className="mt-12 flex flex-wrap items-center justify-between gap-4 md:mt-16"
        >
          <div className="flex items-center gap-3">
            <span className="label-eyebrow">Yubin Kim</span>
            <span className="h-px w-8 bg-ink/20" />
            <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-ink-soft">
              Studio Archive · 2020 — 2026
            </span>
          </div>
          <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-mute">
            Seoul, Korea · Available
          </span>
        </motion.div>

        {/* Headline grid */}
        <div className="mt-14 grid grid-cols-1 gap-12 lg:mt-20 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-8">
            <motion.h1
              {...fadeUp(0.18)}
              className="display-1 text-[14vw] leading-[0.88] md:text-[120px] lg:text-[156px]"
            >
              <span className="block">A working</span>
              <span className="block">
                <span className="editorial pr-3 text-rust">archive</span>
                <span>of</span>
              </span>
              <span className="block">proof —</span>
              <span className="block">
                not<span className="editorial px-3">promises</span>.
              </span>
            </motion.h1>

            <motion.p
              {...fadeUp(0.32)}
              className="mt-12 max-w-xl text-[17px] leading-relaxed text-ink-soft md:text-[19px]"
            >
              문제의 신호를 읽고, 제품과 사업으로 검증한 작업들. 정책 데이터, 정치
              참여, 발달장애 교육, 창업 생태계, 온톨로지 AI, Agentic Commerce까지 —
              관심사는 달라졌지만 작업 방식은 같았습니다.
            </motion.p>

            <motion.p
              {...fadeUp(0.4)}
              className="mt-5 max-w-xl text-[14px] leading-relaxed text-mute"
            >
              <span className="editorial text-ink">See, structure, build, sell, verify.</span>{' '}
              A studio of one, working across civic data, care, startup
              infrastructure, and applied AI.
            </motion.p>

            <motion.div {...fadeUp(0.5)} className="mt-14 flex flex-wrap items-center gap-3">
              <button
                onClick={onPrimary}
                className="group inline-flex items-center gap-2 rounded-full bg-ink px-5 py-3 text-[13px] font-medium text-ivory transition-transform hover:scale-[1.02]"
              >
                Selected work
                <span className="transition-transform group-hover:translate-x-0.5">→</span>
              </button>
              <button
                onClick={onSecondary}
                className="inline-flex items-center gap-2 rounded-full border border-ink/15 bg-white/30 px-5 py-3 text-[13px] text-ink transition-colors hover:border-ink/30 hover:bg-white/60"
              >
                Browse archive
              </button>
              <button
                onClick={onTertiary}
                className="ink-link inline-flex items-center gap-2 px-2 py-3 text-[13px] text-ink"
              >
                Work together
                <span>↗</span>
              </button>
            </motion.div>
          </div>

          {/* Right photo column */}
          <div className="lg:col-span-4">
            <HeroPhotoStack />
          </div>
        </div>

        {/* Tag rail + meta */}
        <motion.div
          {...fadeUp(0.6)}
          className="mt-20 flex flex-col gap-6 border-t border-ink/10 pt-8 md:flex-row md:items-center md:justify-between"
        >
          <div className="flex flex-wrap gap-1.5">
            {heroTags.map((tag) => (
              <span key={tag} className="pill">
                {tag}
              </span>
            ))}
          </div>

          <div className="flex items-center gap-6">
            <Stat n="30+" l="Projects" />
            <Stat n="5" l="Awards" />
            <Stat n="6" l="Domains" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function Stat({ n, l }: { n: string; l: string }) {
  return (
    <div className="flex items-baseline gap-2">
      <span className="display-2 text-[22px] text-ink">{n}</span>
      <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-mute">
        {l}
      </span>
    </div>
  );
}

const stack: { id: string; label: string; tilt: string }[] = [
  { id: 'kivel', label: 'Kivel', tilt: '-3deg' },
  { id: 'linkbrain', label: 'LinkBrain', tilt: '4deg' },
  { id: 'knowhow-kpi', label: 'KNOWHOW', tilt: '-2deg' },
];

function HeroPhotoStack() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 32 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.0, ease, delay: 0.6 }}
      className="relative aspect-[4/5] w-full"
    >
      {stack.map((s, i) => {
        const img = projectImages[s.id];
        if (!img) return null;
        const pos = [
          'left-0 top-0 z-30',
          'right-0 top-[18%] z-20',
          'left-[8%] bottom-0 z-10',
        ][i];
        return (
          <motion.div
            key={s.id}
            className={`absolute ${pos} w-[68%] origin-center`}
            style={{ rotate: s.tilt }}
            initial={{ opacity: 0, scale: 0.94, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 1, ease, delay: 0.7 + i * 0.12 }}
            whileHover={{ rotate: 0, scale: 1.03, zIndex: 40 }}
          >
            <div className="relative overflow-hidden rounded-2xl border border-ink/10 bg-ivory shadow-[0_30px_60px_-25px_rgba(19,18,17,0.30)]">
              <img
                src={img.src}
                alt={img.alt}
                loading="eager"
                className="aspect-[4/3] h-full w-full object-cover"
              />
              <div className="absolute inset-x-0 bottom-0 flex items-center justify-between bg-gradient-to-t from-ink/85 to-transparent px-3 py-2">
                <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-ivory">
                  {s.label}
                </span>
                <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-ivory/70">
                  0{i + 1}
                </span>
              </div>
            </div>
          </motion.div>
        );
      })}
    </motion.div>
  );
}
