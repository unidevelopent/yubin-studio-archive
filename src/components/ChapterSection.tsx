import { motion } from 'framer-motion';
import { chapters } from '../data/chapters';
import { projects } from '../data/projects';
import type { Project } from '../data/projects';
import { projectImages } from '../data/images';

const ease = [0.22, 1, 0.36, 1] as const;

export function ChapterSection({
  onOpen,
}: {
  onOpen: (p: Project) => void;
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
            회사별 나열 대신 작업의 성격으로 묶었습니다. 각 챕터는 같은 방식으로
            발견하고 검증한 프로젝트들입니다.
          </p>
        </div>

        <div className="mt-20 space-y-32">
          {chapters.map((c, ci) => {
            const list = projects.filter((p) => p.chapter === c.id);
            return (
              <div key={c.id} id={`chapter-${c.id}`} className="relative">
                <motion.div
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-100px' }}
                  transition={{ duration: 0.8, ease }}
                  className="grid grid-cols-1 gap-10 lg:grid-cols-12"
                >
                  <div className="lg:col-span-4">
                    <div className="sticky top-24">
                      <div className="flex items-center gap-3">
                        <span className="font-mono text-[10px] tracking-[0.2em] text-rust">
                          CHAPTER {c.number}
                        </span>
                        <span className="h-px w-10 bg-rust/40" />
                      </div>
                      <h3 className="display-2 mt-6 text-[40px] leading-[0.95] text-ink md:text-[56px]">
                        {c.name}
                      </h3>
                      <p className="mt-5 text-[15px] leading-relaxed text-ink">
                        {c.copy}
                      </p>
                      <p className="mt-4 text-[13px] leading-relaxed text-ink-soft">
                        {c.description}
                      </p>
                      <div className="mt-6 flex flex-wrap gap-1.5">
                        {c.capabilities.map((cap) => (
                          <span key={cap} className="pill">
                            {cap}
                          </span>
                        ))}
                      </div>
                      <div className="mt-6 font-mono text-[11px] text-mute">
                        {String(list.length).padStart(2, '0')} projects
                      </div>
                    </div>
                  </div>

                  <div className="lg:col-span-8">
                    <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
                      {list.map((p, i) => {
                        const cover = projectImages[p.id];
                        return (
                          <motion.button
                            key={p.id}
                            onClick={() => onOpen(p)}
                            initial={{ opacity: 0, y: 16 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: '-50px' }}
                            transition={{
                              duration: 0.6,
                              ease,
                              delay: 0.04 * i,
                            }}
                            whileHover={{ y: -4 }}
                            className="group surface-card relative overflow-hidden rounded-2xl text-left"
                          >
                            {cover && (
                              <div className="relative aspect-[16/9] w-full overflow-hidden bg-ink/5">
                                <img
                                  src={cover.src}
                                  alt={cover.alt}
                                  loading="lazy"
                                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                                />
                              </div>
                            )}
                            <div className="p-6">
                              <div className="flex items-start justify-between">
                                <span className="font-mono text-[10px] tracking-[0.18em] text-mute">
                                  {c.number}.{String(i + 1).padStart(2, '0')}
                                </span>
                                {p.isConfidential && (
                                  <span className="inline-flex items-center gap-1 rounded-full border border-ink/15 bg-white/40 px-2 py-0.5 text-[10px] text-mute">
                                    <span className="h-1 w-1 rounded-full bg-mute" />
                                    Name withheld
                                  </span>
                                )}
                              </div>
                              <h4 className="mt-4 text-[18px] font-medium leading-snug text-ink">
                                {p.title}
                              </h4>
                              <p className="mt-2 text-[12px] text-mute">
                                {p.period} · {p.role}
                              </p>
                              <p className="mt-4 line-clamp-3 text-[13px] leading-relaxed text-ink-soft">
                                {p.summary}
                              </p>
                              {p.proof && p.proof[0] && (
                                <div className="mt-5 flex items-start gap-2 border-t border-ink/10 pt-4 text-[12px] text-moss">
                                  <span className="mt-1 h-1 w-1 shrink-0 rounded-full bg-moss" />
                                  <span className="line-clamp-1">{p.proof[0]}</span>
                                </div>
                              )}
                              <div className="mt-5 inline-flex items-center gap-1 text-[12px] text-mute transition-colors group-hover:text-ink">
                                Open detail
                                <span className="transition-transform group-hover:translate-x-0.5">
                                  →
                                </span>
                              </div>
                            </div>
                          </motion.button>
                        );
                      })}
                    </div>
                  </div>
                </motion.div>

                {ci < chapters.length - 1 && (
                  <div className="divider-line mt-32" />
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
