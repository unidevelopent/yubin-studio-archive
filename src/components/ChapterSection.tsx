import { motion } from 'framer-motion';
import { chapters } from '../data/chapters';
import { projects } from '../data/projects';

const ease = [0.22, 1, 0.36, 1] as const;

export function ChapterSection({
  onJumpToLibrary,
}: {
  onJumpToLibrary: (chapterId: string) => void;
}) {
  return (
    <section id="chapters" className="relative py-32 md:py-40">
      <div className="mx-auto max-w-page px-6 md:px-10">
        <div className="flex flex-col items-start gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <span className="label-eyebrow">Six Chapters</span>
            <h2 className="display-2 mt-6 text-4xl text-ink md:text-6xl">
              The archive,
              <br />
              by way of <span className="editorial text-rust">working</span>.
            </h2>
          </div>
          <p className="max-w-sm text-[14px] leading-relaxed text-ink-soft">
            회사별 나열 대신 작업의 성격으로 묶었습니다. 카드를 누르면 해당 챕터로
            필터링된 라이브러리로 이동합니다.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-3">
          {chapters.map((c, i) => {
            const count = projects.filter((p) => p.chapter === c.id).length;
            return (
              <motion.button
                key={c.id}
                onClick={() => onJumpToLibrary(c.id)}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.7, ease, delay: i * 0.05 }}
                whileHover={{ y: -4 }}
                className="surface-card group relative flex flex-col items-start overflow-hidden rounded-3xl p-7 text-left"
              >
                <div className="flex w-full items-center justify-between">
                  <span className="font-mono text-[10px] tracking-[0.2em] text-rust">
                    {c.number}
                  </span>
                  <span className="font-mono text-[11px] text-mute">
                    {String(count).padStart(2, '0')} works
                  </span>
                </div>

                <h3 className="display-2 mt-6 text-[28px] leading-[1.0] text-ink md:text-[32px]">
                  {c.name}
                </h3>

                <p className="mt-3 text-[13px] leading-relaxed text-ink">
                  {c.copy}
                </p>

                <p className="mt-3 line-clamp-3 text-[12px] leading-relaxed text-mute">
                  {c.description}
                </p>

                <div className="mt-5 flex flex-wrap gap-1">
                  {c.capabilities.slice(0, 4).map((cap) => (
                    <span
                      key={cap}
                      className="rounded-md bg-ink/[0.04] px-1.5 py-0.5 text-[10px] text-ink-soft"
                    >
                      {cap}
                    </span>
                  ))}
                </div>

                <span className="mt-6 inline-flex items-center gap-1 text-[12px] text-mute transition-colors group-hover:text-ink">
                  Browse {c.name.toLowerCase()}
                  <span className="transition-transform group-hover:translate-x-0.5">→</span>
                </span>
              </motion.button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
