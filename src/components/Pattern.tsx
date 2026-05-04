import { motion } from 'framer-motion';
import { patternSteps } from '../data/metrics';

const ease = [0.22, 1, 0.36, 1] as const;

export function Pattern() {
  return (
    <section id="pattern" className="relative py-32 md:py-40">
      <div className="mx-auto max-w-page px-6 md:px-10">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <span className="label-eyebrow">The Pattern</span>
            <h2 className="display-2 mt-6 text-4xl text-ink md:text-6xl">
              How the work
              <br />
              <span className="editorial text-rust">gets done</span>.
            </h2>
            <p className="mt-8 max-w-md text-[15px] leading-relaxed text-ink-soft">
              문제를 먼저 봅니다. 필요한 데이터를 모읍니다. 사용자가 이해할 수 있는
              구조로 바꿉니다. 제품을 만들고, 고객을 만나고, 시장에서 반응을
              확인합니다.
            </p>
            <div className="mt-10 inline-flex items-center gap-2 rounded-full border border-ink/15 bg-white/40 px-4 py-2 text-[12px] text-ink-soft backdrop-blur-sm">
              <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-mute">
                Method
              </span>
              <span className="h-3 w-px bg-ink/20" />
              <span>5 steps · 6 domains · same hand</span>
            </div>
          </div>

          <div className="lg:col-span-7">
            <ol className="grid grid-cols-1 gap-3 sm:grid-cols-2">
              {patternSteps.map((s, i) => (
                <motion.li
                  key={s.name}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-80px' }}
                  transition={{ duration: 0.7, ease, delay: i * 0.06 }}
                  className="surface-card relative overflow-hidden rounded-2xl p-6"
                >
                  <div className="flex items-baseline justify-between">
                    <span className="font-mono text-[10px] tracking-[0.18em] text-mute">
                      {s.number}
                    </span>
                    <span className="h-px w-6 bg-ink/15" />
                  </div>
                  <h3 className="mt-6 text-[22px] font-medium tracking-tight text-ink">
                    {s.name}
                  </h3>
                  <p className="mt-3 text-[13px] leading-relaxed text-ink-soft">
                    {s.description}
                  </p>
                </motion.li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}
