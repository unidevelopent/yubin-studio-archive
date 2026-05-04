import { motion } from 'framer-motion';

const ease = [0.22, 1, 0.36, 1] as const;

const partners = [
  {
    label: 'Engineers',
    description:
      'AI Agent, 추천시스템, 생성형 AI를 실제 제품으로 만들고 싶은 엔지니어',
  },
  {
    label: 'Designers',
    description: '복잡한 문제를 명확한 UX로 바꾸는 디자이너',
  },
  {
    label: 'Researchers',
    description:
      '미래교육, 장애인 접근성, 돌봄, AI 신뢰 문제에 관심 있는 연구자',
  },
  {
    label: 'Builders',
    description:
      '초기 아이디어를 빠르게 실험하고 시장에서 검증할 수 있는 빌더',
  },
  {
    label: 'BD Partners',
    description: '공공, 기업, 글로벌 시장을 함께 열어갈 사업개발 파트너',
  },
];

const interests = [
  'AI',
  '교육',
  '돌봄',
  '커머스',
  '미래세대',
  '신뢰',
  '접근성',
  '거버넌스',
];

export function Collaboration() {
  return (
    <section id="work-together" className="relative py-32 md:py-40">
      <div className="mx-auto max-w-page px-6 md:px-10">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.8, ease }}
          className="relative isolate overflow-hidden rounded-[36px] border border-ink/10 bg-ink px-6 py-16 text-ivory md:px-16 md:py-24"
        >
          <div
            className="pointer-events-none absolute -right-20 -top-20 h-[480px] w-[480px] rounded-full blur-3xl"
            style={{
              background:
                'radial-gradient(closest-side, rgba(192,73,43,0.36), transparent)',
            }}
          />
          <div
            className="pointer-events-none absolute -left-32 bottom-0 h-[360px] w-[360px] rounded-full blur-3xl"
            style={{
              background:
                'radial-gradient(closest-side, rgba(74,93,58,0.30), transparent)',
            }}
          />

          <div className="relative grid grid-cols-1 gap-14 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-ivory/55">
                Work Together
              </span>
              <h2 className="display-2 mt-6 text-4xl text-ivory md:text-6xl">
                Build something
                <br />
                that <span className="editorial text-rust">proves itself</span>.
              </h2>
              <p className="mt-8 max-w-md text-[15px] leading-relaxed text-ivory/70">
                관심 있는 주제는 명확합니다. 필요한 것은 함께 실험할 사람들입니다.
              </p>

              <div className="mt-10 flex flex-wrap gap-1.5">
                {interests.map((t) => (
                  <span
                    key={t}
                    className="inline-flex items-center rounded-full border border-rust/40 bg-rust/15 px-3 py-1 text-[11px] font-medium text-rust"
                  >
                    {t}
                  </span>
                ))}
              </div>

              <div className="mt-12 flex flex-wrap gap-3">
                <a
                  href="mailto:uni12719@gmail.com"
                  className="group inline-flex items-center gap-2 rounded-full bg-ivory px-5 py-3 text-[13px] font-medium text-ink transition-transform hover:scale-[1.02]"
                >
                  Send Email
                  <span className="transition-transform group-hover:translate-x-0.5">→</span>
                </a>
                <a
                  href="https://www.linkedin.com/in/%EC%9C%A0%EB%B9%88-%EA%B9%80-8a7317268/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-ivory/20 bg-ivory/[0.04] px-5 py-3 text-[13px] text-ivory transition-colors hover:border-ivory/40 hover:bg-ivory/[0.10]"
                >
                  Connect on LinkedIn ↗
                </a>
              </div>
            </div>

            <div className="lg:col-span-7">
              <div className="space-y-2">
                {partners.map((p, i) => (
                  <motion.div
                    key={p.label}
                    initial={{ opacity: 0, x: 12 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: '-50px' }}
                    transition={{ duration: 0.6, ease, delay: i * 0.05 }}
                    className="group flex items-baseline gap-6 border-b border-ivory/10 py-5 last:border-b-0"
                  >
                    <span className="font-mono text-[10px] tracking-[0.2em] text-ivory/45">
                      0{i + 1}
                    </span>
                    <div className="flex-1">
                      <h3 className="text-[18px] font-medium text-ivory">{p.label}</h3>
                      <p className="mt-2 text-[13px] leading-relaxed text-ivory/65">
                        {p.description}
                      </p>
                    </div>
                    <span className="text-ivory/45 transition-transform group-hover:translate-x-1 group-hover:text-ivory">
                      →
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
