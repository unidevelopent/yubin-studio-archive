import { motion } from 'framer-motion';
import { Marquee } from './Marquee';
import { allImages } from '../data/images';

const ease = [0.22, 1, 0.36, 1] as const;

export function PhotoGallery() {
  const half = Math.ceil(allImages.length / 2);
  const top = allImages.slice(0, half);
  const bottom = allImages.slice(half);

  return (
    <section className="relative overflow-hidden py-32 md:py-40">
      <div className="mx-auto max-w-page px-6 md:px-10">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.8, ease }}
          className="mb-12 flex flex-col items-start justify-between gap-4 md:flex-row md:items-end md:mb-16"
        >
          <div>
            <span className="label-eyebrow">Visual Index</span>
            <h2 className="display-2 mt-6 text-4xl text-ink md:text-6xl">
              Things on screen,
              <br />
              <span className="editorial text-rust">things that shipped</span>.
            </h2>
          </div>
          <p className="max-w-sm text-[14px] leading-relaxed text-ink-soft">
            10개 프로덕트의 대표 화면. 헬스케어, 창업 인프라, 이커머스, 교육,
            제조까지 — 같은 손으로 만들어진 것들.
          </p>
        </motion.div>
      </div>

      <div className="space-y-6">
        <Marquee speed={62}>
          {top.map((img, i) => (
            <PhotoTile key={`t-${i}`} src={img.src} alt={img.alt} index={i} />
          ))}
        </Marquee>
        <Marquee speed={70} reverse>
          {bottom.map((img, i) => (
            <PhotoTile
              key={`b-${i}`}
              src={img.src}
              alt={img.alt}
              index={i + top.length}
            />
          ))}
        </Marquee>
      </div>
    </section>
  );
}

function PhotoTile({
  src,
  alt,
  index,
}: {
  src: string;
  alt: string;
  index: number;
}) {
  return (
    <div className="mx-3 inline-flex shrink-0 items-end gap-3">
      <div className="group relative h-[260px] w-[420px] overflow-hidden rounded-2xl border border-ink/10 bg-white/40">
        <img
          src={src}
          alt={alt}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute left-3 top-3 inline-flex items-center gap-1.5 rounded-full bg-ink/55 px-2.5 py-1 text-[9px] font-mono uppercase tracking-[0.22em] text-ivory backdrop-blur-md">
          <span className="h-1 w-1 rounded-full bg-rust" />
          {String(index + 1).padStart(3, '0')}
        </div>
      </div>
    </div>
  );
}
