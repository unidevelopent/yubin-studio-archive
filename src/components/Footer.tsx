import { motion } from 'framer-motion';

const ease = [0.22, 1, 0.36, 1] as const;

const links = [
  {
    label: 'Email',
    value: 'uni12719@gmail.com',
    href: 'mailto:uni12719@gmail.com',
  },
  {
    label: 'LinkedIn',
    value: 'in/yubin-kim',
    href: 'https://www.linkedin.com/in/%EC%9C%A0%EB%B9%88-%EA%B9%80-8a7317268/',
  },
  {
    label: 'Instagram',
    value: '@uni_development',
    href: 'https://www.instagram.com/uni_development/',
  },
  {
    label: 'Portfolio',
    value: 'surfit · 커리어프로필',
    href: '#',
  },
];

export function Footer() {
  return (
    <footer id="contact" className="relative">
      <div className="mx-auto max-w-page px-6 md:px-10">
        <div className="divider-line" />

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease }}
          className="grid grid-cols-1 gap-12 py-20 md:py-28 lg:grid-cols-12"
        >
          <div className="lg:col-span-6">
            <span className="label-eyebrow">Contact</span>
            <p className="display-2 mt-6 text-[44px] leading-[1.05] text-ink md:text-[80px]">
              Let's make the
              <br />
              next <span className="editorial text-rust">proof</span>.
            </p>
            <p className="mt-8 max-w-md text-[14px] leading-relaxed text-ink-soft">
              협업 제안, 인터뷰, 강연, 자문, 채용 문의는 메일로 보내주세요. 보통 2~3
              영업일 이내에 답신드립니다.
            </p>
          </div>

          <div className="lg:col-span-6">
            <div className="grid grid-cols-2 gap-x-6 gap-y-8">
              {links.map((l) => (
                <a
                  key={l.label}
                  href={l.href}
                  target={l.href.startsWith('http') ? '_blank' : undefined}
                  rel="noopener noreferrer"
                  className="group block border-t border-ink/15 pt-5 transition-colors hover:border-ink/40"
                >
                  <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-mute">
                    {l.label}
                  </span>
                  <span className="mt-3 block text-[16px] text-ink transition-colors group-hover:text-rust">
                    {l.value}
                    {l.href.startsWith('http') && (
                      <span className="ml-2 text-mute group-hover:text-rust">↗</span>
                    )}
                  </span>
                </a>
              ))}
            </div>
          </div>
        </motion.div>

        <div className="divider-line" />

        <div className="flex flex-col items-start justify-between gap-6 py-10 md:flex-row md:items-center">
          <div className="flex items-center gap-3">
            <span className="font-mono text-[10px] tracking-[0.2em] text-mute">
              YK · YUBIN KIM
            </span>
            <span className="h-3 w-px bg-ink/15" />
            <span className="text-[12px] text-mute">
              © {new Date().getFullYear()} — Studio Archive
            </span>
          </div>
          <div className="flex items-center gap-3 text-[12px] text-mute">
            <span>Built with React · Tailwind · Framer Motion</span>
            <span className="h-1 w-1 rounded-full bg-mute" />
            <span>Deployed on Vercel</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
