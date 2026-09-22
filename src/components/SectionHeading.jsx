import { motion } from 'framer-motion';

const SectionHeading = ({ num, title, kicker }) => (
  <div className="relative mb-12 sm:mb-16">
    <span
      className="absolute -top-10 sm:-top-16 -left-2 font-display font-extrabold text-[clamp(5rem,14vw,11rem)] leading-none text-stroke select-none pointer-events-none"
      aria-hidden="true"
    >
      {num}
    </span>
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      className="relative"
    >
      {kicker && (
        <p className="font-mono text-[10px] tracking-[0.3em] text-cyan mb-3">{kicker}</p>
      )}
      <h2 className="font-display font-extrabold text-[clamp(2.2rem,6vw,4rem)] tracking-tight leading-none">
        {title}
      </h2>
    </motion.div>
  </div>
);

export default SectionHeading;
