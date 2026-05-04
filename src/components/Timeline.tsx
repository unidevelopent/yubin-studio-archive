import { motion } from 'framer-motion';
import { experiences } from '../data/experiences';

const ease = [0.22, 1, 0.36, 1] as const;

export function Timeline() {
  return (
    <section id="timeline" className="relative py-32 md:py-40">
      <div className="mx-auto max-w-page px-6 md:px-10">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <span className="label-eyebrow">Timeline</span>
            <h2 className="display-2 mt-6 text-4xl text-ink md:text-5xl">
              Five years
              <br />
              of <span className="editorial text-rust">building</span>
              <br />
              from zero.
            </h2>
            <p className="mt-8 max-w-sm text-[14px] leading-relaxed text-ink-soft">
              정치 스타트업 CEO에서 PM, 비즈니스 리드, CPO를 거쳐 지금은 원천기술 AI
              스타트업의 AI 사업전략을 담당하고 있습니다.
            </p>
          </div>

          <div className="relative lg:col-span-8">
            <div className="absolute left-3 top-1 bottom-1 w-px bg-gradient-to-b from-transparent via-ink/15 to-transparent md:left-4" />
            <div className="space-y-10">
              {experiences.map((exp, i) => (
                <motion.div
                  key={exp.company}
                  initial={{ opacity: 0, x: 12 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: '-80px' }}
                  transition={{ duration: 0.7, ease, delay: i * 0.06 }}
                  className="relative pl-10 md:pl-14"
                >
                  <div className="absolute left-0 top-2 flex h-6 w-6 items-center justify-center md:left-1">
                    <div className="absolute h-6 w-6 rounded-full bg-ivory" />
                    <div className="relative h-2.5 w-2.5 rounded-full bg-rust shadow-[0_0_0_4px_rgba(192,73,43,0.16)]" />
                  </div>
                  <div className="surface-card rounded-2xl p-6">
                    <div className="flex flex-wrap items-baseline justify-between gap-2">
                      <div className="flex items-baseline gap-3">
                        <h3 className="text-[20px] font-medium text-ink">
                          {exp.company}
                        </h3>
                        <span className="text-[12px] text-mute">{exp.role}</span>
                      </div>
                      <span className="font-mono text-[11px] text-mute">
                        {exp.period}
                      </span>
                    </div>
                    <div className="mt-5 flex flex-wrap gap-1.5">
                      {exp.keywords.map((k) => (
                        <span key={k} className="pill">
                          {k}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
