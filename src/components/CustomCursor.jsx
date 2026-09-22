import { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

/**
 * Additive cursor ring — native cursor stays visible (a11y safe).
 * Grows over interactive elements; shows "VIEW" over project cards.
 */
const CustomCursor = () => {
  const [enabled, setEnabled] = useState(false);
  const [active, setActive] = useState(false);
  const [view, setView] = useState(false);

  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const rx = useSpring(x, { stiffness: 320, damping: 28, mass: 0.6 });
  const ry = useSpring(y, { stiffness: 320, damping: 28, mass: 0.6 });

  useEffect(() => {
    const fine = window.matchMedia('(pointer: fine)').matches;
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (!fine || reduce) return undefined;
    setEnabled(true);

    const move = (e) => {
      x.set(e.clientX);
      y.set(e.clientY);
      const t = e.target;
      const interactive = t.closest?.('a, button, [data-cursor]');
      setActive(Boolean(interactive));
      setView(Boolean(t.closest?.('[data-cursor="view"]')));
    };
    window.addEventListener('mousemove', move, { passive: true });
    return () => window.removeEventListener('mousemove', move);
  }, [x, y]);

  if (!enabled) return null;

  return (
    <motion.div
      className="fixed top-0 left-0 z-[9500] pointer-events-none"
      style={{ x: rx, y: ry }}
      aria-hidden="true"
    >
      <motion.div
        className="flex items-center justify-center rounded-full border border-cyan/70 -translate-x-1/2 -translate-y-1/2"
        animate={{
          width: view ? 64 : active ? 44 : 20,
          height: view ? 64 : active ? 44 : 20,
          backgroundColor: view ? 'rgba(76,215,246,0.12)' : 'rgba(76,215,246,0)',
        }}
        transition={{ type: 'spring', stiffness: 300, damping: 22 }}
      >
        {view && (
          <span className="font-mono text-[9px] tracking-[0.2em] text-cyan">VIEW</span>
        )}
      </motion.div>
    </motion.div>
  );
};

export default CustomCursor;
