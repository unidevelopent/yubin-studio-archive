import { motion } from 'framer-motion';

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

      {/* Sophisticated signature graphic — top right, decorative only */}
      <SignatureMark />

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

        {/* Headline */}
        <motion.h1
          {...fadeUp(0.18)}
          className="display-1 mt-16 text-[14vw] leading-[0.86] md:mt-20 md:text-[128px] lg:text-[168px]"
        >
          <span className="block">Systems from</span>
          <span className="block">
            <span className="editorial text-rust">Real Problems</span>
            <span>.</span>
          </span>
        </motion.h1>

        {/* Korean subhead — emphasized headline */}
        <motion.p
          {...fadeUp(0.28)}
          className="mt-10 max-w-3xl text-[26px] font-semibold leading-[1.25] tracking-[-0.02em] text-ink md:text-[36px] lg:text-[44px]"
        >
          아이디어를 시장까지 밀어붙인 기록.
        </motion.p>

        {/* Smaller body paragraph */}
        <motion.div
          {...fadeUp(0.34)}
          className="mt-6 max-w-2xl space-y-1.5 text-[14px] leading-relaxed text-ink-soft md:text-[15px]"
        >
          <p>문제를 발견하고, 구조를 설계하고, 팀을 움직이고, 고객을 만났습니다.</p>
          <p>제품 기획부터 PoC, 제안, 영업, 계약까지.</p>
          <p>서로 다른 도메인에서 실행과 검증으로 남긴 작업들입니다.</p>
        </motion.div>

        {/* Emphasized method line */}
        <motion.p
          {...fadeUp(0.36)}
          className="mt-12 max-w-3xl font-medium text-[24px] leading-[1.25] tracking-[-0.02em] text-ink md:text-[34px] lg:text-[42px]"
        >
          <span className="editorial text-rust">See, structure, build, sell, verify.</span>
        </motion.p>

        <motion.p
          {...fadeUp(0.42)}
          className="mt-5 max-w-2xl text-[16px] leading-relaxed text-ink-soft md:text-[18px]"
        >
          A studio of one, working across civic data, care, startup
          infrastructure, and applied AI.
        </motion.p>

        {/* CTAs */}
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

        {/* STATS PANEL — emphasized */}
        <motion.div
          {...fadeUp(0.6)}
          className="mt-20 overflow-hidden rounded-[32px] border border-ink/10 bg-white/40 backdrop-blur-sm"
        >
          <div className="grid grid-cols-3 divide-x divide-ink/10">
            <Stat n="30+" l="Projects" />
            <Stat n="5" l="Awards" />
            <Stat n="6" l="Domains" />
          </div>

          {/* ROLES strip — dark, dramatic */}
          <div className="relative overflow-hidden bg-ink text-ivory">
            <div
              className="pointer-events-none absolute -right-16 -top-16 h-[280px] w-[280px] rounded-full blur-3xl"
              style={{
                background:
                  'radial-gradient(closest-side, rgba(105,56,239,0.30), transparent)',
              }}
            />
            <div
              className="pointer-events-none absolute -left-20 -bottom-20 h-[220px] w-[220px] rounded-full blur-3xl"
              style={{
                background:
                  'radial-gradient(closest-side, rgba(105,56,239,0.18), transparent)',
              }}
            />
            <div className="relative flex flex-col gap-8 px-6 py-10 md:px-12 md:py-14">
              <div className="flex items-center justify-between gap-3">
                <span className="font-mono text-[10px] uppercase tracking-[0.28em] text-ivory/55">
                  Roles · 4
                </span>
                <span className="font-mono text-[10px] uppercase tracking-[0.28em] text-ivory/55">
                  2020 — 2026
                </span>
              </div>

              <div className="flex flex-col gap-3">
                <div className="flex flex-wrap items-baseline gap-x-4 gap-y-2">
                  <span className="display-1 text-[44px] leading-[0.95] text-ivory md:text-[72px] lg:text-[88px]">
                    CAIBSO
                  </span>
                  <span className="editorial text-[18px] leading-[1.1] text-rust md:text-[26px] lg:text-[32px]">
                    최고AI사업전략책임자
                  </span>
                </div>
                <div className="flex flex-wrap items-baseline gap-x-3 text-ivory/85">
                  <span className="display-2 text-[28px] leading-[1.0] md:text-[40px] lg:text-[48px]">
                    CPO
                  </span>
                  <span className="display-1 text-[22px] leading-[0.9] text-ivory/40 md:text-[32px]">
                    ·
                  </span>
                  <span className="display-2 text-[28px] leading-[1.0] md:text-[40px] lg:text-[48px]">
                    CEO
                  </span>
                  <span className="display-1 text-[22px] leading-[0.9] text-ivory/40 md:text-[32px]">
                    ·
                  </span>
                  <span className="display-2 text-[28px] leading-[1.0] md:text-[40px] lg:text-[48px]">
                    PM
                  </span>
                </div>
              </div>

              <div className="flex flex-wrap items-baseline justify-between gap-2 border-t border-ivory/10 pt-6">
                <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-ivory/55">
                  Founder · Operator · Builder
                </span>
                <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-ivory/55">
                  Seoul, KR
                </span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Tag rail */}
        <motion.div
          {...fadeUp(0.7)}
          className="mt-16 flex flex-wrap gap-1.5 border-t border-ink/10 pt-8"
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
    <div className="flex flex-col items-start gap-3 px-6 py-8 md:px-10 md:py-10">
      <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-mute">
        {l}
      </span>
      <span className="display-1 text-[60px] leading-[0.9] text-ink md:text-[88px] lg:text-[112px]">
        {n}
      </span>
    </div>
  );
}

// Editorial signature mark — concentric rings + crosshair + tick marks + curved label.
// Static composition; only a one-shot fade-in on mount.
function SignatureMark() {
  const ticks = Array.from({ length: 24 }, (_, i) => i * 15);
  return (
    <motion.div
      aria-hidden
      initial={{ opacity: 0, scale: 0.92 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1.4, ease, delay: 0.3 }}
      className="pointer-events-none absolute right-[3%] top-[140px] hidden lg:block xl:right-[6%]"
    >
      <svg
        viewBox="0 0 280 280"
        className="h-[260px] w-[260px] xl:h-[300px] xl:w-[300px]"
      >
        <defs>
          <path
            id="bottomArc"
            d="M 50 140 A 90 90 0 0 0 230 140"
            fill="none"
          />
          <path
            id="topArc"
            d="M 50 140 A 90 90 0 0 1 230 140"
            fill="none"
          />
        </defs>

        {/* faint dot grid background */}
        {Array.from({ length: 6 }).map((_, ri) =>
          Array.from({ length: 6 }).map((_, ci) => (
            <circle
              key={`${ri}-${ci}`}
              cx={60 + ci * 32}
              cy={60 + ri * 32}
              r="0.7"
              fill="rgba(19,18,17,0.10)"
            />
          )),
        )}

        {/* outer ring — violet */}
        <circle
          cx="140"
          cy="140"
          r="125"
          fill="none"
          stroke="rgba(105,56,239,0.40)"
          strokeWidth="1"
        />

        {/* inner ring */}
        <circle
          cx="140"
          cy="140"
          r="92"
          fill="none"
          stroke="rgba(19,18,17,0.18)"
          strokeWidth="1"
        />

        {/* tick marks around outer ring */}
        {ticks.map((angle) => {
          const major = angle % 90 === 0;
          const r1 = 125;
          const r2 = major ? 110 : 118;
          const rad = ((angle - 90) * Math.PI) / 180;
          const x1 = 140 + r1 * Math.cos(rad);
          const y1 = 140 + r1 * Math.sin(rad);
          const x2 = 140 + r2 * Math.cos(rad);
          const y2 = 140 + r2 * Math.sin(rad);
          return (
            <line
              key={angle}
              x1={x1}
              y1={y1}
              x2={x2}
              y2={y2}
              stroke={
                major ? 'rgba(19,18,17,0.55)' : 'rgba(19,18,17,0.20)'
              }
              strokeWidth={major ? '1.2' : '0.8'}
            />
          );
        })}

        {/* crosshair */}
        <line
          x1="140"
          y1="0"
          x2="140"
          y2="6"
          stroke="rgba(19,18,17,0.40)"
          strokeWidth="1"
        />
        <line
          x1="140"
          y1="274"
          x2="140"
          y2="280"
          stroke="rgba(19,18,17,0.40)"
          strokeWidth="1"
        />
        <line
          x1="0"
          y1="140"
          x2="6"
          y2="140"
          stroke="rgba(19,18,17,0.40)"
          strokeWidth="1"
        />
        <line
          x1="274"
          y1="140"
          x2="280"
          y2="140"
          stroke="rgba(19,18,17,0.40)"
          strokeWidth="1"
        />

        {/* center year */}
        <text
          x="140"
          y="158"
          textAnchor="middle"
          fontFamily="Inter, system-ui, sans-serif"
          fontSize="64"
          fontWeight="600"
          letterSpacing="-3"
          fill="#131211"
        >
          26
        </text>

        {/* mono label below year */}
        <text
          x="140"
          y="178"
          textAnchor="middle"
          fontFamily="JetBrains Mono, monospace"
          fontSize="8"
          letterSpacing="3.4"
          fill="rgba(19,18,17,0.45)"
        >
          STUDIO · YK
        </text>

        {/* central marker dot */}
        <circle cx="140" cy="50" r="2.4" fill="#6938EF" />

        {/* curved bottom label */}
        <text
          fontSize="8.5"
          letterSpacing="3.4"
          fontFamily="JetBrains Mono, monospace"
          fill="rgba(19,18,17,0.55)"
        >
          <textPath href="#bottomArc" startOffset="50%" textAnchor="middle">
            SYSTEMS · STRUCTURE · BUILD · VERIFY
          </textPath>
        </text>

        {/* curved top label */}
        <text
          fontSize="8"
          letterSpacing="3.6"
          fontFamily="JetBrains Mono, monospace"
          fill="rgba(105,56,239,0.65)"
        >
          <textPath href="#topArc" startOffset="50%" textAnchor="middle">
            YUBIN KIM — STUDIO ARCHIVE
          </textPath>
        </text>
      </svg>
    </motion.div>
  );
}
