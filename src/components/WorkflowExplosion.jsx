import React from 'react';
import { motion } from 'framer-motion';
import { sounds } from '../utils/sound';

const WorkflowExplosion = () => {
  return (
    <section className="py-24 md:py-32 relative border-t border-primary/10 text-center overflow-hidden max-w-[1280px] mx-auto px-5 md:px-16">
      {/* Background glow */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[radial-gradient(circle,rgba(76,215,246,0.05)_0%,transparent_70%)] rounded-full" />
      </div>

      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        onViewportEnter={() => sounds.reveal()}
        className="text-3xl md:text-6xl font-black text-primary mb-4 md:mb-6 relative z-10 tracking-tight px-4"
      >
        The Intersection
      </motion.h2>
      <p className="text-sm md:text-lg text-on-surface-variant mb-10 md:mb-20 max-w-2xl mx-auto relative z-10 px-4">
        Where 3D, AI, and Precision converge to create next-generation web experiences.
      </p>

      {/* Responsive Layout: works on ALL screen sizes */}
      <div className="relative z-10 flex flex-col items-center justify-center gap-4 md:gap-0">
        {/* Central CORE node */}
        <div className="relative w-28 h-28 md:w-48 md:h-48 rounded-full glass-panel border-2 border-primary shadow-[0_0_50px_rgba(76,215,246,0.3)] flex flex-col items-center justify-center node-pulse backdrop-blur-xl">
          <div className="corner-bracket corner-tl scale-75" />
          <div className="corner-bracket corner-tr scale-75" />
          <div className="corner-bracket corner-bl scale-75" />
          <div className="corner-bracket corner-br scale-75" />
          <span className="text-xl md:text-3xl font-black text-text-primary tracking-tighter">CORE</span>
          <span className="font-mono text-primary text-[10px] md:text-xs mt-1 md:mt-2">SYNERGY</span>
        </div>

        {/* 3 Nodes in a responsive grid below CORE */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-8 mt-8 md:mt-16 w-full max-w-3xl">
          {[
            { icon: '🎨', label: '3D / WebGL', color: 'tertiary', border: 'border-tertiary/70', shadow: 'shadow-[0_0_30px_rgba(255,185,95,0.2)]', text: 'text-tertiary' },
            { icon: '🧠', label: 'AI / LLM', color: 'neon-pink', border: 'border-neon-pink/70', shadow: 'shadow-[0_0_30px_rgba(236,72,153,0.2)]', text: 'text-neon-pink' },
            { icon: '⚙️', label: 'LOGIC', color: 'primary', border: 'border-primary/70', shadow: 'shadow-[0_0_30px_rgba(76,215,246,0.2)]', text: 'text-primary' },
          ].map((node, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              onMouseEnter={() => sounds.hover()}
              className={`w-24 h-24 md:w-32 md:h-32 mx-auto rounded-full glass-panel border-2 ${node.border} ${node.shadow} flex flex-col items-center justify-center cursor-pointer hover:scale-110 transition-transform`}
            >
              <span className="text-2xl md:text-3xl mb-1">{node.icon}</span>
              <span className={`font-mono text-xs md:text-sm ${node.text}`}>{node.label}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkflowExplosion;
