import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

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

// Live Seoul time, ticks every second
function useKstTime() {
  const [now, setNow] = useState<Date>(() => new Date());
  useEffect(() => {
    const id = window.setInterval(() => setNow(new Date()), 1000);
    return () => window.clearInterval(id);
  }, []);
  const fmt = new Intl.DateTimeFormat('en-GB', {
    timeZone: 'Asia/Seoul',
    hour12: false,
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
  });
  return fmt.format(now);
}

export function Hero({
  onPrimary,
  onSecondary,
  onTertiary,
}: {
  onPrimary: () => void;
  onSecondary: () => void;
  onTertiary: () => void;
}) {
  const time = useKstTime();

  return (
    <section
      id="home"
      className="relative isolate overflow-hidden pt-24 md:pt-28"
    >
      <div className="grain" />

      {/* Floating asterisk decoration */}
      <motion.span
        aria-hidden
        initial={{ opacity: 0, rotate: 0 }}
        animate={{ opacity: 0.55, rotate: 360 }}
        transition={{
          opacity: { duration: 1.2, delay: 1.2, ease },
          rotate: { duration: 28, repeat: Infinity, ease: 'linear' },
        }}
        className="pointer-events-none absolute right-[8%] top-[18%] hidden text-rust md:block"
        style={{ fontSize: 56 }}
      >
        ✳
      </motion.span>

      {/* Sophisticated top bar */}
      <div className="relative">
        <div className="mx-auto max-w-page px-6 md:px-10">
          <div className="flex items-center gap-3 py-3.5 md:gap-5 md:py-4">
            {/* left animated line */}
            <motion.span
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 1.2, ease, delay: 0.1 }}
              className="hidden h-px flex-1 origin-left bg-ink/15 md:block"
            />

            {/* live time */}
            <motion.div
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease, delay: 0.4 }}
              className="flex items-center gap-2"
            >
              <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-mute">
                KST
              </span>
              <span className="font-mono tabular-nums text-[12px] tracking-tight text-ink md:text-[13px]">
                {time}
              </span>
            </motion.div>

            <span className="h-3 w-px bg-ink/15" />

            {/* status pulse */}
            <motion.div
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease, delay: 0.5 }}
              className="flex items-center gap-2"
            >
              <span className="relative flex h-1.5 w-1.5">
                <span className="absolute inset-0 animate-ping rounded-full bg-rust opacity-70" />
                <span className="relative h-1.5 w-1.5 rounded-full bg-rust" />
              </span>
              <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-ink-soft">
                Open for collaboration
              </span>
            </motion.div>

            <span className="hidden h-3 w-px bg-ink/15 sm:block" />

            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="hidden font-mono text-[10px] uppercase tracking-[0.22em] text-mute sm:inline"
            >
              Seoul · 37.55°N · 126.97°E
            </motion.span>

            {/* right animated line */}
            <motion.span
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 1.2, ease, delay: 0.1 }}
              className="hidden h-px flex-1 origin-right bg-ink/15 md:block"
            />
          </div>
        </div>
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1.4, ease, delay: 0.2 }}
          className="mx-auto h-px max-w-page origin-center bg-ink/10"
        />
      </div>

      <div className="relative mx-auto max-w-page px-6 md:px-10">
        {/* Top meta bar */}
        <motion.div
          {...fadeUp(0.18)}
          className="mt-10 flex flex-wrap items-center justify-between gap-4 md:mt-14"
        >
          <div className="flex items-center gap-3">
            <span className="label-eyebrow">Yubin Kim</span>
            <span className="h-px w-8 bg-ink/20" />
            <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-ink-soft">
              Studio Archive · 2020 — 2026
            </span>
          </div>
          <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-mute">
            Independent · Available
          </span>
        </motion.div>

        {/* Headline with line-by-line clip reveal */}
        <h1 className="display-1 mt-14 text-[14vw] leading-[0.86] md:mt-20 md:text-[128px] lg:text-[168px]">
          <RevealLine delay={0.28}>
            <span className="block">Systems from</span>
          </RevealLine>
          <RevealLine delay={0.42}>
            <span className="relative inline-block">
              <span className="editorial text-rust">Real Problems</span>
              <motion.span
                aria-hidden
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 1.4, ease, delay: 1.5 }}
                className="absolute -bottom-2 left-0 h-[3px] w-full origin-left bg-rust md:-bottom-3 md:h-[4px]"
              />
            </span>
            <span>.</span>
          </RevealLine>
        </h1>

        {/* Korean subhead — emphasized headline */}
        <motion.p
          {...fadeUp(0.7)}
          className="mt-12 max-w-3xl text-[26px] font-semibold leading-[1.25] tracking-[-0.02em] text-ink md:text-[36px] lg:text-[44px]"
        >
          아이디어를 시장까지 밀어붙인 기록.
        </motion.p>

        {/* Smaller body paragraph */}
        <motion.div
          {...fadeUp(0.78)}
          className="mt-6 max-w-2xl space-y-1.5 text-[14px] leading-relaxed text-ink-soft md:text-[15px]"
        >
          <p>문제를 발견하고, 구조를 설계하고, 팀을 움직이고, 고객을 만났습니다.</p>
          <p>제품 기획부터 PoC, 제안, 영업, 계약까지.</p>
          <p>서로 다른 도메인에서 실행과 검증으로 남긴 작업들입니다.</p>
        </motion.div>

        {/* Emphasized method line */}
        <motion.p
          {...fadeUp(0.86)}
          className="mt-12 max-w-3xl font-medium text-[24px] leading-[1.25] tracking-[-0.02em] text-ink md:text-[34px] lg:text-[42px]"
        >
          <span className="editorial text-rust">See, structure, build, sell, verify.</span>
        </motion.p>

        <motion.p
          {...fadeUp(0.92)}
          className="mt-5 max-w-2xl text-[16px] leading-relaxed text-ink-soft md:text-[18px]"
        >
          A studio of one, working across civic data, care, startup
          infrastructure, and applied AI.
        </motion.p>

        {/* CTAs */}
        <motion.div {...fadeUp(1.0)} className="mt-14 flex flex-wrap items-center gap-3">
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
          {...fadeUp(1.1)}
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
          {...fadeUp(1.2)}
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

// Wraps a single block of text and reveals it with a clip-style slide.
function RevealLine({
  children,
  delay = 0,
}: {
  children: React.ReactNode;
  delay?: number;
}) {
  return (
    <span className="relative block overflow-hidden pb-1">
      <motion.span
        className="block"
        initial={{ y: '105%' }}
        animate={{ y: '0%' }}
        transition={{ duration: 1.0, ease, delay }}
      >
        {children}
      </motion.span>
    </span>
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
