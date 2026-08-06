import React from 'react';
import { motion } from 'framer-motion';
import { FaShoppingBag, FaRobot, FaPaintBrush, FaCode, FaChartLine } from 'react-icons/fa';
import { SiPinterest, SiGumroad } from 'react-icons/si';
import { sounds } from '../utils/sound';

const AurelianCanvas = () => {
  const ventureCards = [
    { icon: <FaRobot />, color: '#a78bfa', text: 'AI Prompt Engineering', desc: 'Crafting complex prompts for 16K artwork generation' },
    { icon: <FaPaintBrush />, color: '#ffb95f', text: '16K Digital Art Creation', desc: 'Ultra-high resolution artwork using AI generation' },
    { icon: <FaCode />, color: '#4cd7f6', text: 'Frame Mockup Design', desc: 'Custom frame mockups for premium presentation' },
    { icon: <FaChartLine />, color: '#ec4899', text: 'Pinterest SEO Strategy', desc: 'Optimizing pins for maximum reach and engagement' },
    { icon: <FaShoppingBag />, color: '#fb923c', text: 'Gumroad Product Sales', desc: 'Selling digital artwork directly to customers' },
    { icon: <SiPinterest />, color: '#E60023', text: 'Video & Content Marketing', desc: 'Creating video content for Pinterest and social media' },
  ];

  const cloudinaryBase = "https://res.cloudinary.com/dzhtnwfg0";

  return (
    <div className="min-h-screen pt-32 pb-20 max-w-[1280px] mx-auto px-5 md:px-16 relative z-10">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="mb-16 text-center"
      >
        <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full border border-tertiary/40 bg-tertiary/10 font-mono text-tertiary mb-6">
          <span className="w-2 h-2 rounded-full bg-tertiary animate-pulse" />
          VENTURE // ACTIVE
        </div>
        <h1 className="text-4xl md:text-7xl font-black text-text-primary mb-4 tracking-tight">
          Aurelian <span className="amber-gradient-text">Canvas</span>
        </h1>
        <p className="text-lg text-on-surface-variant max-w-2xl mx-auto">
          AI art brand — solo operation. Creating 16K digital artwork using AI prompt engineering,
          selling on Gumroad, marketing on Pinterest.
        </p>
        <div className="flex flex-wrap justify-center gap-2 mt-6">
          {['AI Generation', 'Prompt Eng.', '16K Art', 'Video Marketing', 'Pinterest SEO', 'Gumroad'].map((tag, i) => (
            <span key={i} className="px-2 py-0.5 rounded-full border border-tertiary/30 bg-tertiary/10 text-[9px] font-bold text-tertiary tracking-wide">{tag}</span>
          ))}
        </div>
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

      {/* Activities grid */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="glass-panel p-8 rounded-2xl border-tertiary/30 mb-16"
      >
        <h2 className="text-2xl font-bold amber-gradient-text mb-6">What I Build & Run Here, Entirely Alone</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {ventureCards.map((item, i) => (
            <div key={i} className="flex items-start gap-3 p-4 rounded-lg bg-white/5 hover:bg-white/10 transition-colors">
              <div className="p-2 rounded-lg" style={{ backgroundColor: `${item.color}15`, border: `1px solid ${item.color}30` }}>
                <span style={{ color: item.color }}>{item.icon}</span>
              </div>
              <div>
                <div className="text-sm font-bold text-text-primary">{item.text}</div>
                <div className="text-xs text-on-surface-variant mt-1">{item.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Art Gallery */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="mb-16"
      >
        <div className="flex justify-between items-end border-b border-tertiary/20 pb-4 mb-8">
          <h2 className="text-2xl font-bold amber-gradient-text">Curated Exhibits</h2>
          <div className="font-mono text-on-surface-variant text-sm">07 Active Pieces</div>
        </div>

        {/* Bento grid gallery */}
        <div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-2 gap-4 md:h-[600px]">
          {/* Large feature */}
          <div className="md:col-span-2 md:row-span-2 glass-panel rounded-xl relative overflow-hidden group cursor-pointer neon-glow-amber h-64 md:h-auto">
            <div className="corner-bracket corner-tl" />
            <div className="corner-bracket corner-br" />
            <img
              src={`${cloudinaryBase}/image/upload/v1767181736/presentmyvirt_du9pfo.png`}
              alt="Featured Artwork"
              className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-all duration-700 scale-100 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-surface-dark via-surface-dark/50 to-transparent opacity-80" />
            <div className="absolute bottom-0 left-0 p-6 w-full flex justify-between items-end">
              <div>
                <div className="font-mono text-tertiary mb-1 text-sm">EXHIBIT // 01</div>
                <h3 className="text-xl font-bold text-text-primary">Featured Collection</h3>
              </div>
              <span className="bg-tertiary text-on-tertiary px-3 py-1 rounded font-mono text-sm font-bold">$22</span>
            </div>
          </div>

          {/* Medium pieces */}
          {[
            { title: "AI Portrait", img: "v1767181736/presentmyvirt_du9pfo" },
            { title: "Abstract Vision", img: "v1767181735/benefitsofoutsorcing_vozcfg" },
            { title: "Digital Dreamscape", img: "v1767181735/resumescribe_yfbnat" },
            { title: "Neon Aesthetic", img: "v1767181736/SmartEDU_uzgbba" },
          ].map((piece, i) => (
            <div key={i} className="glass-panel rounded-xl relative overflow-hidden group cursor-pointer border border-outline-variant/30 hover:border-tertiary/50 transition-colors h-48 md:h-auto">
              <img
                src={`${cloudinaryBase}/image/upload/${piece.img}.png`}
                alt={piece.title}
                className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-all duration-500 scale-100 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-surface-dark to-transparent opacity-90" />
              <div className="absolute bottom-0 left-0 p-4">
                <h3 className="text-sm font-bold text-text-primary">{piece.title}</h3>
                <div className="font-mono text-tertiary/70 mt-1 text-xs">$22</div>
              </div>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Video Showcase */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="glass-panel p-6 rounded-2xl border-tertiary/30 mb-16"
      >
        <h2 className="text-xl font-bold amber-gradient-text mb-6">Video Showcase</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="aspect-video glass-panel rounded-xl overflow-hidden border-tertiary/20 p-1">
            <video
              src={`${cloudinaryBase}/video/upload/v1/Dev_Portfolio___Void_Neon_yep88m.mp4`}
              autoPlay loop muted playsInline
              className="w-full h-full object-cover rounded-lg opacity-70 hover:opacity-100 transition-opacity"
            />
          </div>
          <div className="aspect-video glass-panel rounded-xl overflow-hidden border-tertiary/20 p-1">
            <video
              src={`${cloudinaryBase}/video/upload/v1/Etheria___UI_UX_Portfolio_k0ohf9.mp4`}
              autoPlay loop muted playsInline
              className="w-full h-full object-cover rounded-lg opacity-70 hover:opacity-100 transition-opacity"
            />
          </div>
        </div>
      </motion.div>

      {/* CTAs */}
      <div className="flex flex-wrap justify-center gap-6 mb-8">
        <a href="#" onClick={() => sounds.click()} onMouseEnter={() => sounds.hover()}
          className="glass-panel border-tertiary text-tertiary px-8 py-4 rounded-lg font-mono uppercase tracking-widest hover:bg-tertiary hover:text-on-tertiary transition-all neon-glow-amber flex items-center gap-3 text-sm">
          <FaShoppingBag size={14} /> Purchase on Gumroad
        </a>
        <a href="#" onClick={() => sounds.click()} onMouseEnter={() => sounds.hover()}
          className="glass-panel border-outline-variant text-text-primary px-8 py-4 rounded-lg font-mono uppercase tracking-widest hover:border-text-primary transition-all flex items-center gap-3 text-sm">
          <SiPinterest size={14} /> View on Pinterest
        </a>
      </div>

      {/* Bottom info */}
      <div className="text-center text-on-surface-variant text-sm">
        <p>7 artworks · $22 each · Built with AI · Solo operation</p>
      </div>
    </div>
  );
};

export default AurelianCanvas;
