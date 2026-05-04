import { motion } from 'framer-motion';
import { metrics } from '../data/metrics';

const ease = [0.22, 1, 0.36, 1] as const;

export function Metrics() {
  return (
    <section className="relative py-32 md:py-40">
      <div className="mx-auto max-w-page px-6 md:px-10">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div>
            <span className="label-eyebrow">Selected Proof</span>
            <h2 className="display-2 mt-6 text-4xl text-ink md:text-6xl">
              Numbers that
              <br />
              <span className="editorial text-rust">came from</span> the work.
            </h2>
          </div>
          <p className="max-w-sm text-[14px] leading-relaxed text-ink-soft">
            계약, 도입률, 매출, 사용자, 데이터 — 발표를 위한 숫자가 아니라 직접 만들고
            기록한 결과들입니다.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {metrics.map((m, i) => (
            <motion.div
              key={m.label}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.7, ease, delay: (i % 3) * 0.05 }}
              className="surface-card relative overflow-hidden rounded-3xl p-7"
            >
              <div className="flex items-center justify-between">
                <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-mute">
                  {String(i + 1).padStart(2, '0')} / {String(metrics.length).padStart(2, '0')}
                </span>
                <span className="h-1.5 w-1.5 rounded-full bg-rust/60" />
              </div>
              <div className="display-2 mt-8 text-[40px] leading-none text-ink md:text-[44px]">
                {m.value}
              </div>
              <div className="mt-4 text-[14px] font-medium text-ink">
                {m.label}
              </div>
              <div className="mt-2 text-[12px] leading-relaxed text-mute">
                {m.detail}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
