import { motion } from 'framer-motion';
import { awards } from '../data/awards';

const ease = [0.22, 1, 0.36, 1] as const;

export function Awards() {
  return (
    <section id="awards" className="relative py-32 md:py-40">
      <div className="mx-auto max-w-page px-6 md:px-10">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div>
            <span className="label-eyebrow">Recognition</span>
            <h2 className="display-2 mt-6 text-4xl text-ink md:text-6xl">
              <span className="editorial text-rust">Awards</span>.
            </h2>
          </div>
          <p className="max-w-sm text-[14px] leading-relaxed text-ink-soft">
            정부지원사업, 창업경진대회, 정책 제안 대회, 해커톤 — 작업의 결과물로 받은
            외부 평가들.
          </p>
        </div>

        <div className="mt-16 overflow-hidden rounded-3xl border border-ink/15 bg-white/30">
          {awards.map((a, i) => (
            <motion.div
              key={`${a.name}-${i}`}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.6, ease, delay: i * 0.05 }}
              className="group grid grid-cols-12 items-baseline border-b border-ink/10 px-6 py-7 transition-colors last:border-b-0 hover:bg-white/60 md:px-10"
            >
              <div className="col-span-2 md:col-span-1">
                <span className="font-mono text-[11px] text-mute">
                  {String(i + 1).padStart(2, '0')}
                </span>
              </div>
              <div className="col-span-10 md:col-span-3">
                <span className="inline-flex items-center gap-2 rounded-full border border-rust/30 bg-rust-soft px-3 py-1 text-[11px] font-medium text-rust">
                  {a.prize}
                </span>
              </div>
              <div className="col-span-10 col-start-3 mt-3 md:col-span-7 md:col-start-auto md:mt-0">
                <span className="text-[16px] text-ink">{a.name}</span>
              </div>
              <div className="col-span-12 mt-2 text-right md:col-span-1 md:mt-0">
                <span className="font-mono text-[12px] text-mute">{a.year}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
