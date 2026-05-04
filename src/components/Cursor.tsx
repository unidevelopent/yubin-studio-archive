import { motion, useMotionValue, useSpring } from 'framer-motion';
import { useEffect, useState } from 'react';

export function Cursor() {
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const [hovering, setHovering] = useState(false);
  const [visible, setVisible] = useState(false);

  const springX = useSpring(x, { stiffness: 380, damping: 30, mass: 0.4 });
  const springY = useSpring(y, { stiffness: 380, damping: 30, mass: 0.4 });

  useEffect(() => {
    const isFinePointer = window.matchMedia(
      '(hover: hover) and (pointer: fine)',
    ).matches;
    if (!isFinePointer) return;

    const onMove = (e: MouseEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
      setVisible(true);
      const t = e.target as HTMLElement | null;
      const interactive = !!t?.closest(
        'a, button, [role="button"], input, textarea, select, [data-cursor="hover"]',
      );
      setHovering(interactive);
    };
    const onLeave = () => setVisible(false);

    window.addEventListener('mousemove', onMove);
    document.addEventListener('mouseleave', onLeave);
    return () => {
      window.removeEventListener('mousemove', onMove);
      document.addEventListener('mouseleave', onLeave);
    };
  }, [x, y]);

  return (
    <motion.div
      aria-hidden
      style={{ x: springX, y: springY }}
      className="pointer-events-none fixed left-0 top-0 z-[150] -translate-x-1/2 -translate-y-1/2 mix-blend-difference"
    >
      <motion.div
        animate={{
          scale: hovering ? 1.7 : 1,
          opacity: visible ? 1 : 0,
        }}
        transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
        className="relative h-4 w-4"
      >
        {/* horizontal stroke */}
        <span className="absolute left-0 top-1/2 h-px w-full -translate-y-1/2 bg-ivory" />
        {/* vertical stroke */}
        <span className="absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-ivory" />
        {/* center mark */}
        <span className="absolute left-1/2 top-1/2 h-[3px] w-[3px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-ivory" />
      </motion.div>
    </motion.div>
  );
}
