import React from 'react';
import { motion } from 'framer-motion';
import { FaArrowRight, FaShoppingBag } from 'react-icons/fa';
import { SiPinterest, SiGumroad } from 'react-icons/si';
import { sounds } from '../utils/sound';

const AurelianCanvas = () => {
  return (
    <div className="min-h-screen pt-32 pb-20 max-w-[1280px] mx-auto px-5 md:px-16 relative z-10">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="mb-16"
      >
        <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full border border-tertiary/40 bg-tertiary/10 font-mono text-tertiary mb-6">
          <span className="w-2 h-2 rounded-full bg-tertiary animate-pulse" />
          VENTURE // ACTIVE
        </div>
        <h1 className="text-4xl md:text-7xl font-black text-text-primary mb-4 tracking-tight">
          Aurelian <span className="amber-gradient-text">Canvas</span>
        </h1>
        <p className="text-lg text-on-surface-variant max-w-2xl">
          AI art brand — solo operation. Creating 16K digital artwork using AI prompt engineering,
          selling on Gumroad, marketing on Pinterest.
        </p>
      </motion.div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
        {[
          { label: "Resolution", value: "16K", desc: "Ultra-High Definition" },
          { label: "Methodology", value: "Prompt", desc: "Elite AI Architecture" },
          { label: "Current Value", value: "$22", desc: "Per Premium Piece" },
        ].map((stat, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.15 }}
            className="glass-panel p-8 rounded-xl relative overflow-hidden neon-glow-amber"
          >
            <div className="corner-bracket corner-tl" />
            <div className="corner-bracket corner-br" />
            <div className="font-mono text-tertiary/70 mb-2 uppercase text-sm">{stat.label}</div>
            <div className="text-4xl font-black text-tertiary">{stat.value}</div>
            <div className="text-sm text-on-surface-variant mt-2 font-mono">{stat.desc}</div>
          </motion.div>
        ))}
      </div>

      {/* Activities */}
      <div className="glass-panel p-8 rounded-2xl border-tertiary/30 mb-16">
        <h2 className="text-2xl font-bold amber-gradient-text mb-6">What I Do Here, Entirely Alone</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {[
            { icon: "🎨", text: "AI Prompt Engineering" },
            { icon: "🖼️", text: "16K Digital Art Creation" },
            { icon: "📐", text: "Frame Mockup Design" },
            { icon: "📈", text: "Pinterest SEO Strategy" },
            { icon: "🛒", text: "Gumroad Product Sales" },
            { icon: "🎬", text: "Video & Content Marketing" },
          ].map((item, i) => (
            <div key={i} className="flex items-center gap-3 p-3 rounded-lg bg-white/5">
              <span className="text-xl">{item.icon}</span>
              <span className="text-sm font-semibold text-text-primary">{item.text}</span>
            </div>
          ))}
        </div>
      </div>

      {/* CTAs */}
      <div className="flex flex-wrap justify-center gap-6">
        <a href="#" onClick={() => sounds.click()} onMouseEnter={() => sounds.hover()}
          className="glass-panel border-tertiary text-tertiary px-8 py-4 rounded-lg font-mono uppercase tracking-widest hover:bg-tertiary hover:text-on-tertiary transition-all neon-glow-amber flex items-center gap-3 text-sm">
          <FaShoppingBag size={14} /> Purchase on Gumroad
        </a>
        <a href="#" onClick={() => sounds.click()} onMouseEnter={() => sounds.hover()}
          className="glass-panel border-outline-variant text-text-primary px-8 py-4 rounded-lg font-mono uppercase tracking-widest hover:border-text-primary transition-all flex items-center gap-3 text-sm">
          <SiPinterest size={14} /> View on Pinterest
        </a>
      </div>
    </div>
  );
};

export default AurelianCanvas;
