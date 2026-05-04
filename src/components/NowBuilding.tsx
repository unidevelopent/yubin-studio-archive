import { motion } from 'framer-motion';

const ease = [0.22, 1, 0.36, 1] as const;

export function NowBuilding() {
  return (
    <section className="relative py-16 md:py-24">
      <div className="mx-auto max-w-page px-6 md:px-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.9, ease }}
          className="relative isolate overflow-hidden rounded-[28px] border border-ink/10 bg-ink text-ivory"
        >
          {/* violet glows */}
          <div
            className="pointer-events-none absolute -right-32 -top-32 h-[440px] w-[440px] rounded-full blur-3xl"
            style={{
              background:
                'radial-gradient(closest-side, rgba(105,56,239,0.38), transparent)',
            }}
          />
          <div
            className="pointer-events-none absolute -left-24 -bottom-24 h-[300px] w-[300px] rounded-full blur-3xl"
            style={{
              background:
                'radial-gradient(closest-side, rgba(105,56,239,0.18), transparent)',
            }}
          />

          {/* faint grid lines */}
          <div
            className="pointer-events-none absolute inset-0 opacity-[0.06]"
            style={{
              backgroundImage:
                'linear-gradient(to right, rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.5) 1px, transparent 1px)',
              backgroundSize: '64px 64px',
            }}
          />

          <div className="relative p-7 md:p-11">
            {/* top meta row */}
            <div className="flex flex-wrap items-center justify-between gap-3">
              <div className="inline-flex items-center gap-2 rounded-full border border-rust/40 bg-rust/15 px-3 py-1.5">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inset-0 animate-ping rounded-full bg-rust opacity-70" />
                  <span className="relative h-2 w-2 rounded-full bg-rust" />
                </span>
                <span className="font-mono text-[10px] uppercase tracking-[0.24em] text-rust">
                  Now Building · Live
                </span>
              </div>
            </div>

            {/* main */}
            <div className="mt-10 grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-8">
              <div className="lg:col-span-8">
                <h2 className="display-1 text-[14vw] leading-[0.92] md:text-[88px] lg:text-[112px]">
                  <span>Signal </span>
                  <span className="editorial text-rust">Forge</span>
                </h2>
                <p className="mt-6 max-w-xl text-[16px] leading-relaxed text-ivory/80 md:text-[19px]">
                  기술 이후의 사회를 다시 설계하는{' '}
                  <span className="editorial text-ivory">브랜드 하우스</span>.
                </p>
                <p className="mt-3 max-w-xl text-[12px] leading-relaxed text-ivory/55">
                  A brand house redrawing the social contract that comes after
                  technology.
                </p>
              </div>

              <div className="flex flex-col items-start justify-end gap-4 lg:col-span-4 lg:items-end">
                <a
                  href="https://signal-forge-fawn.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  data-cursor="hover"
                  className="group relative inline-flex items-center gap-2 rounded-full bg-ivory px-5 py-3.5 text-[13px] font-medium text-ink transition-all duration-500 hover:scale-[1.03] hover:shadow-[0_24px_60px_-20px_rgba(105,56,239,0.55)]"
                >
                  <span
                    className="absolute inset-0 -z-10 rounded-full opacity-0 blur-md transition-opacity duration-500 group-hover:opacity-60"
                    style={{ background: 'rgba(105,56,239,0.45)' }}
                  />
                  바로가기
                  <span className="ml-1 inline-flex h-5 w-5 items-center justify-center rounded-full bg-ink text-ivory transition-transform duration-500 group-hover:rotate-45">
                    ↗
                  </span>
                </a>
                <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-ivory/45 lg:text-right">
                  signal-forge-fawn.vercel.app
                </span>
              </div>
            </div>

            {/* meta row bottom */}
            <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-2 border-t border-ivory/10 pt-5">
              {[
                'Brand House',
                'Post-Tech Society',
                'Editorial',
                'Studio',
                'Active',
              ].map((tag) => (
                <span
                  key={tag}
                  className="font-mono text-[10px] uppercase tracking-[0.24em] text-ivory/55"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
