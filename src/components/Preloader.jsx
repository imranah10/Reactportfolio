import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

/**
 * Cinematic 1.4s intro — NON-BLOCKING: content renders behind it,
 * scroll is never locked, overlay lifts away on its own.
 */
const Preloader = () => {
  const [count, setCount] = useState(0);
  const [done, setDone] = useState(false);

  useEffect(() => {
    const start = performance.now();
    const DURATION = 1100;
    let rafId;
    const tick = (now) => {
      const p = Math.min(1, (now - start) / DURATION);
      // ease-out for satisfying deceleration
      setCount(Math.round((1 - Math.pow(1 - p, 3)) * 100));
      if (p < 1) rafId = requestAnimationFrame(tick);
      else setTimeout(() => setDone(true), 180);
    };
    rafId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafId);
  }, []);

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          className="fixed inset-0 z-[9999] bg-bg flex items-center justify-center pointer-events-none"
          exit={{ y: '-100%' }}
          transition={{ duration: 0.7, ease: [0.76, 0, 0.24, 1] }}
          aria-hidden="true"
        >
          <div className="grid-bg absolute inset-0 opacity-60" />
          <div className="relative flex flex-col items-center gap-5">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: 'easeOut' }}
              className="font-display font-extrabold text-3xl sm:text-4xl tracking-tight"
            >
              IMRAN <span className="grad-text">AHMAD</span>
            </motion.div>
            <div className="w-52 h-px bg-line overflow-hidden">
              <motion.div
                className="h-full bg-cyan"
                initial={{ width: '0%' }}
                animate={{ width: '100%' }}
                transition={{ duration: 1.05, ease: 'easeInOut' }}
              />
            </div>
            <div className="font-mono text-[11px] tracking-[0.35em] text-mute">
              {String(count).padStart(3, '0')}%
            </div>
          </div>
          {/* corner brackets */}
          <div className="absolute top-8 left-8 w-6 h-6 border-t-2 border-l-2 border-cyan/60" />
          <div className="absolute bottom-8 right-8 w-6 h-6 border-b-2 border-r-2 border-magenta/60" />
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Preloader;
