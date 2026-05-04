import { motion } from 'framer-motion';
import { education, certifications } from '../data/experiences';

const ease = [0.22, 1, 0.36, 1] as const;

export function Experience() {
  return (
    <section className="relative py-32 md:py-40">
      <div className="mx-auto max-w-page px-6 md:px-10">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7, ease }}
            className="surface-card rounded-3xl p-8 md:p-10"
          >
            <span className="label-eyebrow">Education</span>
            <div className="mt-8 flex items-baseline justify-between gap-4">
              <h3 className="text-[24px] font-medium text-ink">{education.school}</h3>
              <span className="font-mono text-[11px] text-mute">{education.period}</span>
            </div>
            <p className="mt-3 text-[14px] text-ink-soft">{education.major}</p>
            <div className="mt-8 flex items-baseline gap-3 border-t border-ink/10 pt-6">
              <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-mute">GPA</span>
              <span className="text-[20px] font-medium text-ink">{education.gpa}</span>
              <span className="text-[12px] text-mute">/ 4.5</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7, ease, delay: 0.08 }}
            className="surface-card rounded-3xl p-8 md:p-10"
          >
            <span className="label-eyebrow">Certifications</span>
            <div className="mt-8 space-y-6">
              {certifications.map((c) => (
                <div key={c.name} className="flex items-baseline justify-between gap-4">
                  <div>
                    <h3 className="text-[20px] font-medium text-ink">{c.name}</h3>
                    <p className="mt-1 text-[13px] text-ink-soft">{c.issuer}</p>
                  </div>
                  <span className="font-mono text-[11px] text-mute">{c.year}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
