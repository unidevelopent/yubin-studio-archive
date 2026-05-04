import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const ease = [0.7, 0, 0.2, 1] as const;

export function Loader({ onDone }: { onDone: () => void }) {
  const [count, setCount] = useState(0);
  const [phase, setPhase] = useState<'count' | 'reveal' | 'done'>('count');

  useEffect(() => {
    const start = performance.now();
    const duration = 1700;
    let raf = 0;
    const step = (t: number) => {
      const p = Math.min((t - start) / duration, 1);
      // ease-out
      const eased = 1 - Math.pow(1 - p, 3);
      setCount(Math.floor(eased * 100));
      if (p < 1) raf = requestAnimationFrame(step);
      else {
        setPhase('reveal');
        setTimeout(() => {
          setPhase('done');
          setTimeout(onDone, 60);
        }, 900);
      }
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [onDone]);

  return (
    <AnimatePresence>
      {phase !== 'done' && (
        <motion.div
          key="loader"
          className="fixed inset-0 z-[200] grid grid-cols-2 overflow-hidden"
          aria-hidden
        >
          {/* Two-panel shutter — meets in the middle, then peels apart */}
          <motion.div
            initial={{ x: 0 }}
            animate={{ x: phase === 'reveal' ? '-100%' : 0 }}
            transition={{ duration: 1.0, ease }}
            className="bg-ink"
          />
          <motion.div
            initial={{ x: 0 }}
            animate={{ x: phase === 'reveal' ? '100%' : 0 }}
            transition={{ duration: 1.0, ease }}
            className="bg-ink"
          />

          {/* Counter + name overlay */}
          <motion.div
            initial={{ opacity: 1 }}
            animate={{ opacity: phase === 'reveal' ? 0 : 1 }}
            transition={{ duration: 0.4 }}
            className="pointer-events-none absolute inset-0 flex flex-col items-center justify-center px-6 text-ivory"
          >
            <div className="flex w-full max-w-[760px] items-end justify-between border-b border-ivory/15 pb-4">
              <span className="font-mono text-[10px] uppercase tracking-[0.28em] text-ivory/55">
                Studio Archive · 2020 — 2026
              </span>
              <span className="font-mono text-[10px] uppercase tracking-[0.28em] text-ivory/55">
                Loading
              </span>
            </div>

            <div className="mt-8 flex w-full max-w-[760px] items-baseline justify-between">
              <motion.span
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease }}
                className="display-1 text-[18vw] leading-none md:text-[160px]"
              >
                Yubin Kim
              </motion.span>
              <span className="font-mono text-[18px] tabular-nums text-ivory/70 md:text-[28px]">
                {String(count).padStart(3, '0')}
              </span>
            </div>

            <div className="mt-6 flex w-full max-w-[760px] items-center gap-3">
              <div className="relative h-px flex-1 overflow-hidden bg-ivory/15">
                <motion.div
                  className="absolute inset-y-0 left-0 bg-rust"
                  initial={{ width: '0%' }}
                  animate={{ width: `${count}%` }}
                  transition={{ duration: 0.05, ease: 'linear' }}
                />
              </div>
              <span className="font-mono text-[10px] uppercase tracking-[0.28em] text-ivory/55">
                Proof of Work
              </span>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
