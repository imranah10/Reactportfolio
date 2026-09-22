import { motion, useScroll, useSpring } from 'framer-motion';

const ScrollProgress = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 24, mass: 0.4 });

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-[2px] z-[9000] origin-left bg-gradient-to-r from-cyan via-magenta to-cyan"
      style={{ scaleX }}
      aria-hidden="true"
    />
  );
};

export default ScrollProgress;
