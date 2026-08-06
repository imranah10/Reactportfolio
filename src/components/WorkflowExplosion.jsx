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
        className="text-3xl md:text-6xl font-black text-primary mb-6 relative z-10 tracking-tight"
      >
        The Intersection
      </motion.h2>
      <p className="text-base md:text-lg text-on-surface-variant mb-16 max-w-2xl mx-auto relative z-10 px-4">
        Where 3D, AI, and Precision converge to create next-generation web experiences.
      </p>

      {/* Desktop: Node diagram */}
      <div className="hidden md:block relative max-w-4xl mx-auto h-[500px] flex items-center justify-center">
        {/* Central node */}
        <div className="absolute z-20 w-48 h-48 rounded-full glass-panel border-2 border-primary shadow-[0_0_50px_rgba(76,215,246,0.3)] flex flex-col items-center justify-center node-pulse backdrop-blur-xl">
          <div className="corner-bracket corner-tl scale-75" />
          <div className="corner-bracket corner-tr scale-75" />
          <div className="corner-bracket corner-bl scale-75" />
          <div className="corner-bracket corner-br scale-75" />
          <span className="text-3xl font-black text-text-primary tracking-tighter">CORE</span>
          <span className="font-mono text-primary text-xs mt-2">SYNERGY</span>
        </div>

        {/* Satellite nodes */}
        <div
          onMouseEnter={() => sounds.hover()}
          className="absolute z-10 w-32 h-32 rounded-full glass-panel border-2 border-tertiary/70 shadow-[0_0_30px_rgba(255,185,95,0.2)] flex flex-col items-center justify-center transform -translate-x-64 -translate-y-32 hover:scale-110 transition-transform cursor-pointer"
        >
          <span className="text-3xl text-tertiary mb-1">🎨</span>
          <span className="font-mono text-tertiary text-sm">3D / WebGL</span>
        </div>

        <div
          onMouseEnter={() => sounds.hover()}
          className="absolute z-10 w-32 h-32 rounded-full glass-panel border-2 border-neon-pink/70 shadow-[0_0_30px_rgba(236,72,153,0.2)] flex flex-col items-center justify-center transform translate-x-64 -translate-y-32 hover:scale-110 transition-transform cursor-pointer"
        >
          <span className="text-3xl text-neon-pink mb-1">🧠</span>
          <span className="font-mono text-neon-pink text-sm">AI / LLM</span>
        </div>

        <div
          onMouseEnter={() => sounds.hover()}
          className="absolute z-10 w-32 h-32 rounded-full glass-panel border-2 border-primary-container/70 shadow-[0_0_30px_rgba(6,182,212,0.2)] flex flex-col items-center justify-center transform translate-y-48 hover:scale-110 transition-transform cursor-pointer"
        >
          <span className="text-3xl text-primary-container mb-1">⚙️</span>
          <span className="font-mono text-primary-container text-sm">LOGIC</span>
        </div>

        {/* SVG connecting lines */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none z-0" viewBox="0 0 1000 600">
          <defs>
            <linearGradient id="grad1" x1="0%" x2="100%" y1="0%" y2="0%">
              <stop offset="0%" style={{ stopColor: '#ffb95f', stopOpacity: 0.8 }} />
              <stop offset="100%" style={{ stopColor: '#4cd7f6', stopOpacity: 0.8 }} />
            </linearGradient>
            <linearGradient id="grad2" x1="100%" x2="0%" y1="0%" y2="0%">
              <stop offset="0%" style={{ stopColor: '#ec4899', stopOpacity: 0.8 }} />
              <stop offset="100%" style={{ stopColor: '#4cd7f6', stopOpacity: 0.8 }} />
            </linearGradient>
            <linearGradient id="grad3" x1="50%" x2="50%" y1="100%" y2="0%">
              <stop offset="0%" style={{ stopColor: '#06b6d4', stopOpacity: 0.8 }} />
              <stop offset="100%" style={{ stopColor: '#4cd7f6', stopOpacity: 0.8 }} />
            </linearGradient>
          </defs>
          <path className="animate-[dash_3s_linear_infinite]" d="M 500 300 Q 370 230 244 172" fill="none" stroke="url(#grad1)" strokeDasharray="10,10" strokeWidth="3" />
          <path className="animate-[dash_3s_linear_infinite_reverse]" d="M 500 300 Q 630 230 756 172" fill="none" stroke="url(#grad2)" strokeDasharray="10,10" strokeWidth="3" />
          <path className="animate-[dash_3s_linear_infinite]" d="M 500 300 L 500 492" fill="none" stroke="url(#grad3)" strokeDasharray="10,10" strokeWidth="3" />
        </svg>
      </div>

      {/* Mobile/Tablet: Vertical stack */}
      <div className="md:hidden flex flex-col items-center gap-8 relative z-10 py-8">
        {/* Central node */}
        <div className="w-32 h-32 rounded-full glass-panel border-2 border-primary shadow-[0_0_30px_rgba(76,215,246,0.3)] flex flex-col items-center justify-center node-pulse backdrop-blur-xl relative">
          <div className="corner-bracket corner-tl scale-75" />
          <div className="corner-bracket corner-br scale-75" />
          <span className="text-xl font-black text-text-primary tracking-tighter">CORE</span>
          <span className="font-mono text-primary text-[10px] mt-1">SYNERGY</span>
        </div>

        {/* Vertical connecting line */}
        <div className="w-[2px] h-8 bg-gradient-to-b from-primary to-tertiary/50" />

        {/* 3D node */}
        <div
          onMouseEnter={() => sounds.hover()}
          className="w-28 h-28 rounded-full glass-panel border-2 border-tertiary/70 shadow-[0_0_20px_rgba(255,185,95,0.2)] flex flex-col items-center justify-center"
        >
          <span className="text-2xl text-tertiary mb-1">🎨</span>
          <span className="font-mono text-tertiary text-xs">3D / WebGL</span>
        </div>

        <div className="w-[2px] h-8 bg-gradient-to-b from-tertiary/50 to-neon-pink/50" />

        {/* AI node */}
        <div
          onMouseEnter={() => sounds.hover()}
          className="w-28 h-28 rounded-full glass-panel border-2 border-neon-pink/70 shadow-[0_0_20px_rgba(236,72,153,0.2)] flex flex-col items-center justify-center"
        >
          <span className="text-2xl text-neon-pink mb-1">🧠</span>
          <span className="font-mono text-neon-pink text-xs">AI / LLM</span>
        </div>

        <div className="w-[2px] h-8 bg-gradient-to-b from-neon-pink/50 to-primary-container/50" />

        {/* Logic node */}
        <div
          onMouseEnter={() => sounds.hover()}
          className="w-28 h-28 rounded-full glass-panel border-2 border-primary-container/70 shadow-[0_0_20px_rgba(6,182,212,0.2)] flex flex-col items-center justify-center"
        >
          <span className="text-2xl text-primary-container mb-1">⚙️</span>
          <span className="font-mono text-primary-container text-xs">LOGIC</span>
        </div>
      </div>
    </section>
  );
};

export default WorkflowExplosion;
