import React from "react";
import { motion } from "framer-motion";
import profile2 from "./images/profile.jpg";
import { FiCpu, FiLayers, FiActivity, FiTerminal } from "react-icons/fi";
import { sounds } from "../utils/sound";

const About = () => {
  const telemetryStats = [
    { id: "SYS-01", label: "STACK DENSITY", value: "30+", desc: "Technology nodes including GLM 5.2, AI Studio, Three.js", icon: <FiCpu className="text-primary" size={20} /> },
    { id: "SYS-02", label: "SYSTEM FLUIDITY", value: "99.9%", desc: "Adaptive UI layout uptime across all screen scales", icon: <FiActivity className="text-secondary" size={20} /> },
    { id: "SYS-03", label: "BUILDS DELIVERED", value: "30+", desc: "Production web platforms, npm packages, and AI products", icon: <FiLayers className="text-neon-pink" size={20} /> }
  ];

  return (
    <section id="about" className="py-32 relative border-t border-primary/10 max-w-[1280px] mx-auto px-5 md:px-16">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        onViewportEnter={() => sounds.reveal()}
        className="glass-panel rounded-3xl p-8 md:p-12 border-primary/30 flex flex-col md:flex-row gap-12 items-center relative overflow-hidden"
      >
        {/* Background dot grid */}
        <div className="absolute inset-0 opacity-50 pointer-events-none" style={{
          backgroundImage: 'radial-gradient(circle, rgba(76,215,246,0.05) 1px, transparent 1px)',
          backgroundSize: '20px 20px'
        }} />

        {/* Profile image */}
        <div className="w-64 h-64 rounded-2xl border-2 border-primary/50 overflow-hidden relative shrink-0 tilt-card neon-glow z-10">
          <img src={profile2} alt="Imran Ahmad" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-primary/20 mix-blend-overlay" />
          <div className="scanline" />
          <div className="corner-bracket corner-tl" />
          <div className="corner-bracket corner-tr" />
          <div className="corner-bracket corner-bl" />
          <div className="corner-bracket corner-br" />
        </div>

        {/* Content */}
        <div className="flex-1 space-y-6 z-10">
          <div className="flex items-center gap-4 border-b border-primary/20 pb-6">
            <h2 className="text-3xl md:text-5xl font-black text-text-primary">SUBJECT: IMRAN AHMAD</h2>
            <span className="px-3 py-1 bg-primary/10 text-primary font-mono text-xs rounded border border-primary/30 animate-pulse">ID: IA-77X</span>
          </div>

          {/* System specs */}
          <div className="grid grid-cols-2 gap-4 font-mono text-sm text-on-surface-variant bg-surface-dark/50 p-4 rounded-xl border border-outline-variant/20">
            <div><span className="text-primary mr-2">CLASS:</span> CREATIVE TECHNOLOGIST</div>
            <div><span className="text-primary mr-2">STATUS:</span> ACTIVE</div>
            <div><span className="text-primary mr-2">LOCATION:</span> BIHAR, INDIA</div>
            <div><span className="text-primary mr-2">UPTIME:</span> 99.9%</div>
          </div>

          {/* Bio */}
          <p className="text-lg text-on-surface-variant leading-relaxed">
            Self-taught React & AI developer with 1 year of experience. Creator of Toolverse —
            a privacy-first online toolkit with 100+ tools, published as an npm package with 263 React components
            and 1,099 SVG icons. I bridge the gap between conceptual design and robust technical implementation,
            specializing in high-performance web applications that demand both visual excellence and architectural integrity.
          </p>

          {/* Telemetry stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
            {telemetryStats.map((stat, i) => (
              <motion.div
                key={stat.id}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="glass-panel p-4 rounded-xl border-outline-variant/20 relative overflow-hidden"
              >
                <div className="flex justify-between items-start mb-2">
                  <span className="font-mono text-[9px] text-gray-500 font-bold tracking-widest">{stat.id}</span>
                  <div className="p-1.5 rounded-lg bg-white/5 border border-white/10">{stat.icon}</div>
                </div>
                <div className="text-2xl font-black text-text-primary">{stat.value}</div>
                <p className="text-xs text-on-surface-variant mt-1">{stat.desc}</p>
              </motion.div>
            ))}
          </div>

          {/* Terminal console */}
          <div className="bg-surface-dark/90 border border-primary/25 rounded-xl overflow-hidden">
            <div className="bg-surface-container-lowest px-4 py-3 border-b border-white/5 flex items-center justify-between">
              <div className="flex gap-1.5">
                <span className="w-3 h-3 rounded-full bg-error/30" />
                <span className="w-3 h-3 rounded-full bg-tertiary/30" />
                <span className="w-3 h-3 rounded-full bg-primary/30" />
              </div>
              <span className="font-mono text-[9px] text-gray-500 font-bold uppercase tracking-widest flex items-center gap-1.5">
                <FiTerminal className="text-primary" /> TOOLVERSE_SYSTEM.sh
              </span>
              <span className="w-8" />
            </div>
            <div className="p-4 font-mono text-sm text-on-surface-variant">
              <div className="flex gap-2 mb-2 text-primary font-bold">
                <span>$</span><span>cat toolverse_core.txt</span>
              </div>
              <p className="italic mb-2 pl-4 border-l border-primary/30 leading-relaxed">
                "Toolverse is a privacy-first online toolkit with 8 Studios and 100+ tools — all running 100% in the browser.
                Published as an npm package with 263 React components and 1,099 SVG icons. Built entirely with AI-assisted
                development using GLM 5.2, AI Studio, and Google Stitch."
              </p>
              <div className="flex items-center gap-1.5 text-neon-pink font-bold font-mono">
                <span>$</span>
                <span className="text-on-surface-variant uppercase tracking-widest text-xs">TOOLVERSE SYSTEM ONLINE</span>
                <span className="w-2 h-4 bg-neon-pink animate-[blink_1s_step-start_infinite]" />
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default About;
