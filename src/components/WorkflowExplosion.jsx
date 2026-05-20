import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaCode, FaRobot, FaChartLine, FaPaintBrush, FaTimes, FaGlobe, FaCogs, FaSignal, FaShieldAlt } from 'react-icons/fa';

import feImg from './images/fe_engineer_neon.png';
import aiImg from './images/ai_operator_neon.png';
import vfImg from './images/venture_founder_gold.png';
import uxImg from './images/ui_ux_specialist_pink.png';

const WorkflowExplosion = () => {
  const [selectedNode, setSelectedNode] = useState(null);

  const nodes = [
    {
      id: 1,
      title: "Front-End Engineer",
      subtitle: "UI PERFORMANCE PIPELINE",
      icon: <FaCode />,
      image: feImg,
      color: "#06b6d4",
      bgGlow: "rgba(6,182,212,0.15)",
      borderGlow: "group-hover:border-cyan-500/40 group-hover:shadow-[0_0_30px_rgba(6,182,212,0.25)]",
      desc: "Architecting high-performance modern responsive layouts in React, Next.js, and Vite. Obsessed with high-performance styling systems, fluid layout engines, and hardware-accelerated micro-animations that maintain a solid, stutter-free 60FPS.",
      tools: ["React JS", "Vite", "Next.js", "Tailwind CSS", "Framer Motion"],
      metrics: [
        { label: "Rendering Velocity", val: 99 },
        { label: "Asset Compression", val: 95 },
        { label: "FPS Stability", val: 100 }
      ]
    },
    {
      id: 2,
      title: "AI Creative Operator",
      subtitle: "COGNITIVE PIPELINE NODE",
      icon: <FaRobot />,
      image: aiImg,
      color: "#a855f7",
      bgGlow: "rgba(168,85,247,0.15)",
      borderGlow: "group-hover:border-purple-500/40 group-hover:shadow-[0_0_30px_rgba(168,85,247,0.25)]",
      desc: "Designing and orchestrating sophisticated custom prompt matrices and API integration pipelines. Harnessing state-of-the-art neural engines (Gemini, Claude) to build intelligent multi-agent tasks and generate cinematic design illustrations.",
      tools: ["Gemini API", "Claude / ChatGPT", "Ollama Models", "n8n Pipelines", "Prompt Arrays"],
      metrics: [
        { label: "Agent Autonomy", val: 92 },
        { label: "Token Efficiency", val: 94 },
        { label: "Context Retrieval", val: 97 }
      ]
    },
    {
      id: 3,
      title: "Venture Founder",
      subtitle: "DIGITAL VENTURE OPERATOR",
      icon: <FaChartLine />,
      image: vfImg,
      color: "#f59e0b",
      bgGlow: "rgba(245,158,11,0.15)",
      borderGlow: "group-hover:border-amber-500/40 group-hover:shadow-[0_0_30px_rgba(245,158,11,0.25)]",
      desc: "Operating and expanding the Aurelian Canvas automated brand entirely alone. Spearheading cross-platform content distribution vectors, video asset generators, Pinterest SEO strategy, and multi-channel Gumroad transactional tunnels.",
      tools: ["Gumroad Sales", "Pinterest SEO", "Video Generation", "Automation Ops"],
      metrics: [
        { label: "Growth Index", val: 96 },
        { label: "Lead Capture Ratio", val: 88 },
        { label: "Process Automation", val: 100 }
      ]
    },
    {
      id: 4,
      title: "UI/UX Specialist",
      subtitle: "VIBRANT INTERACTION ARCHITECT",
      icon: <FaPaintBrush />,
      image: uxImg,
      color: "#ec4899",
      bgGlow: "rgba(236,72,153,0.15)",
      borderGlow: "group-hover:border-pink-500/40 group-hover:shadow-[0_0_30px_rgba(236,72,153,0.25)]",
      desc: "Crafting beautiful glassmorphic visual systems, harmonious glowing palettes, and luxury typography layouts. Translating user experience blueprints into sleek modern structures that prioritize accessibility and delightful motion feedback.",
      tools: ["Glassmorphism CSS", "Modern Typography", "Interactive Blueprints", "Prototyping"],
      metrics: [
        { label: "Accessibility Score", val: 98 },
        { label: "Aesthetic Index", val: 99 },
        { label: "Interaction Delight", val: 95 }
      ]
    }
  ];

  return (
    <div className="relative py-10 sm:py-14 px-4 sm:px-8 max-w-[1400px] mx-auto overflow-hidden z-10">
      
      {/* Light backdrop highlights */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 rounded-full bg-purple-500/5 blur-[90px] pointer-events-none z-0" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 rounded-full bg-cyan-500/5 blur-[90px] pointer-events-none z-0" />

      {/* HEADER SECTION */}
      <div className="text-center mb-10 relative z-10">
        <div className="inline-block px-4 py-2 rounded-full mb-4 border border-purple-500/20 bg-purple-500/5">
          <span className="text-[10px] sm:text-xs font-bold tracking-[0.2em] uppercase text-purple-400">
            System Operations
          </span>
        </div>
        <h2 className="text-[clamp(2.3rem,5.5vw,4rem)] font-display font-extrabold tracking-tight leading-none text-white">
          Exploding <span className="text-gradient">Workflow.</span>
        </h2>
        <p className="text-gray-400 font-body text-sm sm:text-base max-w-md mx-auto mt-2">
          Click any operational node below to expand its system blueprint, real-time metrics, and custom cyber illustrations.
        </p>
      </div>

      {/* ── WORKFLOW INTERACTIVE MODULES GRID ── */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 relative z-10 mb-8">
        {nodes.map((node) => {
          const isSelected = selectedNode?.id === node.id;
          return (
            <motion.div
              key={node.id}
              onClick={() => setSelectedNode(node)}
              className={`group cursor-pointer rounded-2xl bg-[#09090f]/90 border border-white/5 p-5 transition-all duration-500 relative overflow-hidden flex flex-col justify-between min-h-[300px] ${
                isSelected 
                  ? 'border-white/20 bg-[#0c0c16]' 
                  : node.borderGlow
              }`}
              whileHover={{ y: -4 }}
            >
              {/* Corner Glowing Highlight */}
              <div 
                className="absolute -top-16 -right-16 w-32 h-32 rounded-full blur-[40px] opacity-15 transition-opacity group-hover:opacity-25" 
                style={{ backgroundColor: node.color }}
              />

              {/* Glowing top line sweep on hover */}
              <div 
                className="absolute top-0 left-0 w-full h-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-500" 
                style={{ backgroundColor: node.color }}
              />

              {/* AI Image Preview Header at top of card */}
              <div className="relative aspect-video w-full overflow-hidden rounded-xl bg-black/40 mb-4 border border-white/5">
                <img 
                  src={node.image} 
                  alt={node.title} 
                  className="w-full h-full object-cover opacity-75 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#09090f] via-transparent to-transparent" />
                <div className="absolute top-2 left-2 flex items-center gap-1.5 px-2 py-0.5 rounded border bg-black/60 border-white/10 backdrop-blur-md">
                  <span className="w-1 h-1 rounded-full animate-pulse" style={{ backgroundColor: node.color }} />
                  <span className="text-[7px] font-mono tracking-widest text-white/80 uppercase">AI ENGINE SYS</span>
                </div>
              </div>

              {/* Title & Badge */}
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div 
                    className="w-9 h-9 rounded-xl flex items-center justify-center text-base transition-transform duration-500 group-hover:scale-110"
                    style={{ background: `${node.color}15`, border: `1px solid ${node.color}30`, color: node.color }}
                  >
                    {node.icon}
                  </div>
                  <span className="text-[8px] font-mono font-black tracking-widest text-gray-500">SYS_ID: 0{node.id}</span>
                </div>
                
                <h3 className="text-lg font-display font-extrabold text-white leading-tight group-hover:text-cyan-400 transition-colors duration-300">
                  {node.title}
                </h3>
                <p className="text-[8px] font-mono tracking-widest text-gray-500 uppercase mt-1">
                  {node.subtitle}
                </p>
              </div>

              {/* Visual mini-asset indicator */}
              <div className="mt-4 flex items-center justify-between pt-3 border-t border-white/[0.04]">
                <span className="text-[9px] font-black uppercase tracking-widest text-cyan-400 group-hover:text-cyan-300 flex items-center gap-1.5 transition-colors">
                  System Detail <span className="transform group-hover:translate-x-1.5 transition-transform duration-300">→</span>
                </span>
                <div className="flex gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-white/20 group-hover:bg-cyan-500 transition-colors" />
                  <span className="w-1.5 h-1.5 rounded-full bg-white/20 group-hover:bg-purple-500 transition-colors" />
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* ── EXPANDED MODULE DETAIL SLIDER SCREEN ── */}
      <div className="relative z-20 w-full max-w-5xl mx-auto">
        <AnimatePresence mode="wait">
          {selectedNode && (
            <motion.div
              key={selectedNode.id}
              initial={{ opacity: 0, y: 15, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -15, scale: 0.98 }}
              transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
              className="bg-[#0b0b14]/95 border border-white/10 p-6 sm:p-8 rounded-3xl relative overflow-hidden shadow-2xl"
            >
              {/* Decorative dynamic top bar */}
              <div className="absolute top-0 left-0 w-full h-[3px]" style={{ backgroundColor: selectedNode.color }} />
              
              {/* Close Button */}
              <button
                onClick={() => setSelectedNode(null)}
                className="absolute top-5 right-5 text-gray-400 hover:text-white transition-colors cursor-pointer w-8 h-8 rounded-full border border-white/10 flex items-center justify-center bg-[#07070d] hover:border-white/30"
              >
                <FaTimes size={12} />
              </button>

              <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
                
                {/* LEFT: Stunning custom AI technical artwork */}
                <div className="md:col-span-5 relative group overflow-hidden rounded-2xl border border-white/10 bg-black/40 aspect-square flex items-center justify-center">
                  <img 
                    src={selectedNode.image} 
                    alt={selectedNode.title} 
                    className="w-full h-full object-cover opacity-90 transition-transform duration-1000 group-hover:scale-110" 
                  />
                  {/* Subtle overlays */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0b0b14]/90 via-transparent to-transparent opacity-85" />
                  <div className="absolute bottom-4 left-4 flex items-center gap-2 px-3 py-1 rounded-md border bg-black/50 border-white/10 backdrop-blur-md">
                    <span className="w-1.5 h-1.5 rounded-full animate-ping" style={{ backgroundColor: selectedNode.color }} />
                    <span className="text-[8px] font-mono tracking-widest text-white/80 uppercase">AI ENGINE RENDERED</span>
                  </div>
                </div>

                {/* RIGHT: High-tech subsystem description & detailed metrics */}
                <div className="md:col-span-7 flex flex-col justify-between h-full">
                  <div>
                    {/* Header badge */}
                    <div className="flex items-center gap-3.5 mb-3">
                      <div 
                        className="w-10 h-10 rounded-xl flex items-center justify-center text-lg shadow-md" 
                        style={{ background: `${selectedNode.color}20`, border: `1px solid ${selectedNode.color}35`, color: selectedNode.color }}
                      >
                        {selectedNode.icon}
                      </div>
                      <div>
                        <h4 className="text-xl sm:text-2xl font-display font-extrabold text-white tracking-tight">{selectedNode.title}</h4>
                        <p className="text-[9px] font-mono tracking-widest text-gray-500 uppercase mt-0.5">{selectedNode.subtitle}</p>
                      </div>
                    </div>

                    <p className="text-gray-300 text-sm leading-relaxed mb-6 font-medium">
                      {selectedNode.desc}
                    </p>

                    {/* Integrated custom telemetry meters */}
                    <div className="space-y-3 mb-6 bg-white/[0.01] border border-white/5 p-4 rounded-xl">
                      <p className="text-[9px] font-mono font-black text-gray-500 uppercase tracking-widest mb-3">Performance Indicators</p>
                      {selectedNode.metrics.map((metric, idx) => (
                        <div key={idx}>
                          <div className="flex justify-between items-center text-[11px] font-mono font-semibold text-gray-400 mb-1">
                            <span>{metric.label}</span>
                            <span style={{ color: selectedNode.color }}>{metric.val}%</span>
                          </div>
                          <div className="w-full h-[4px] bg-white/[0.04] rounded-full overflow-hidden">
                            <motion.div 
                              initial={{ width: 0 }}
                              animate={{ width: `${metric.val}%` }}
                              transition={{ duration: 0.6, delay: idx * 0.1 }}
                              className="h-full rounded-full"
                              style={{ backgroundColor: selectedNode.color }}
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Tool Badges */}
                  <div>
                    <p className="text-[9px] font-mono font-black text-gray-500 uppercase tracking-widest mb-2.5">Subsystem Tools & Libraries</p>
                    <div className="flex flex-wrap gap-1.5">
                      {selectedNode.tools.map((tool, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1 rounded-md border text-[9px] font-black uppercase tracking-widest"
                          style={{ 
                            borderColor: `${selectedNode.color}25`, 
                            background: `${selectedNode.color}06`, 
                            color: selectedNode.color 
                          }}
                        >
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>

                </div>

              </div>

            </motion.div>
          )}
        </AnimatePresence>
      </div>

    </div>
  );
};

export default WorkflowExplosion;
