import { motion } from 'framer-motion';
import { Marquee } from './Marquee';

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

        {/* Full-width headline */}
        <motion.h1
          {...fadeUp(0.18)}
          className="display-1 mt-16 text-[15vw] leading-[0.86] md:mt-20 md:text-[140px] lg:text-[180px]"
        >
          <span className="block">A working</span>
          <span className="block">
            <span className="editorial pr-3 text-rust">archive</span>
            <span>of proof —</span>
          </span>
          <span className="block">
            not<span className="editorial px-3">promises</span>.
          </span>
        </motion.h1>

        <div className="mt-14 grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-10">
          <motion.div {...fadeUp(0.32)} className="lg:col-span-7">
            <p className="text-[17px] leading-relaxed text-ink-soft md:text-[19px]">
              문제의 신호를 읽고, 제품과 사업으로 검증한 작업들. 정책 데이터, 정치
              참여, 발달장애 교육, 창업 생태계, 온톨로지 AI, Agentic Commerce까지 —
              관심사는 달라졌지만 작업 방식은 같았습니다.
            </p>
            <p className="mt-5 text-[14px] leading-relaxed text-mute">
              <span className="editorial text-ink">See, structure, build, sell, verify.</span>{' '}
              A studio of one, working across civic data, care, startup
              infrastructure, and applied AI.
            </p>
          </motion.div>

          <motion.aside
            {...fadeUp(0.42)}
            className="flex flex-col justify-end gap-3 border-t border-ink/10 pt-6 lg:col-span-5 lg:items-end lg:border-t-0 lg:pt-0"
          >
            <div className="flex items-baseline gap-6 lg:justify-end">
              <Stat n="30+" l="Projects" />
              <Stat n="5" l="Awards" />
              <Stat n="6" l="Domains" />
            </div>
            <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-mute lg:text-right">
              CAIBSO · CPO · Founder · PM
            </p>
          </motion.aside>
        </div>

        <motion.div {...fadeUp(0.52)} className="mt-14 flex flex-wrap items-center gap-3">
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

        <motion.div
          {...fadeUp(0.62)}
          className="mt-20 flex flex-wrap gap-1.5 border-t border-ink/10 pt-8"
        >
          {heroTags.map((tag) => (
            <span key={tag} className="pill">
              {tag}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function Stat({ n, l }: { n: string; l: string }) {
  return (
    <div className="flex items-baseline gap-2">
      <span className="display-2 text-[24px] text-ink">{n}</span>
      <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-mute">
        {l}
      </span>
    </div>
  );
}
