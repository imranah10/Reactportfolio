import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SiGooglegemini, SiReact, SiNextdotjs, SiNodedotjs, SiMongodb, SiTailwindcss, SiTypescript, SiCloudflare, SiPostman, SiVercel, SiOpenai, SiGoogle } from 'react-icons/si';
import { FaGitAlt, FaRobot, FaRocket } from 'react-icons/fa';
import { LuSparkles, LuTerminalSquare, LuBrain, LuZap, LuNetwork, LuVideo, LuCpu } from 'react-icons/lu';

const Skills = () => {
  const categories = [
    {
      title: "AI & LOGIC",
      color: "#a855f7",
      glowColor: "rgba(168,85,247,0.4)",
      radius: 150,
      speed: 0.15,
      items: [
        { name: "Cursor AI", icon: <LuTerminalSquare />, prof: 98, status: "Active", desc: "Automating massive code transformations using custom system prompts.", officialColor: "#5258e5" },
        { name: "Lovable", icon: <LuSparkles />, prof: 95, status: "Active", desc: "Building beautiful glassmorphic elements in record-breaking speed.", officialColor: "#ec4899" },
        { name: "Gemini", icon: <SiGooglegemini />, prof: 99, status: "Master", desc: "Integrating deep learning systems with multi-modal prompting arrays.", officialColor: "#8ab4f8" },
        { name: "ChatGPT", icon: <SiOpenai />, prof: 96, status: "Active", desc: "Solving architectural puzzles and structural layouts efficiently.", officialColor: "#10a37f" },
        { name: "Claude", icon: <LuBrain />, prof: 97, status: "Active", desc: "Crafting highly structured documentation, refactors and logic flows.", officialColor: "#ea580c" },
        { name: "Grok", icon: <LuZap />, prof: 92, status: "Active", desc: "Synthesizing real-time streams and visual logic pipelines.", officialColor: "#facc15" },
        { name: "DeepSeek", icon: <LuNetwork />, prof: 94, status: "Active", desc: "Harnessing rapid open-source deep networks for server flows.", officialColor: "#2d72f1" },
        { name: "Veo-3", icon: <LuVideo />, prof: 90, status: "Active", desc: "Generating cinematic premium background footage for branding.", officialColor: "#ff4747" },
        { name: "Google Flow", icon: <SiGoogle />, prof: 93, status: "Active", desc: "Orchestrating cloud pipelines and structured distribution models.", officialColor: "#4285f4" },
        { name: "Ollama", icon: <LuCpu />, prof: 91, status: "Local Engine", desc: "Hosting and running custom-quantized language modules locally.", officialColor: "#9ca3af" },
        { name: "Meta AI", icon: <FaRobot />, prof: 90, status: "Active", desc: "Building modular agents with fast conversation layers.", officialColor: "#0064e0" },
        { name: "Antigravity", icon: <FaRocket />, prof: 100, status: "Infinite", desc: "Operating Advanced Agentic Coding vectors with zero friction.", officialColor: "#06b6d4" },
        { name: "Trae", icon: <LuTerminalSquare />, prof: 92, status: "Active", desc: "Co-piloting interactive system setups and script configurations.", officialColor: "#8b5cf6" },
        { name: "n8n", icon: <LuNetwork />, prof: 95, status: "Automation", desc: "Constructing complex workflow charts and API trigger nets.", officialColor: "#ff6c37" },
        { name: "Lindy AI", icon: <FaRobot />, prof: 91, status: "Automation", desc: "Creating autonomous multi-agent pipelines for digital tasking.", officialColor: "#10b981" }
      ]
    },
    {
      title: "CORE STACK",
      color: "#06b6d4",
      glowColor: "rgba(6,182,212,0.4)",
      radius: 110,
      speed: -0.22,
      items: [
        { name: "React JS", icon: <SiReact />, prof: 99, status: "Mastered", desc: "Engineering reactive hook layers and hardware-accelerated loops.", officialColor: "#61dafb" },
        { name: "Next.js", icon: <SiNextdotjs />, prof: 96, status: "Mastered", desc: "Configuring serverless routes, partial hydration, and SEO nodes.", officialColor: "#ffffff" },
        { name: "Node.js", icon: <SiNodedotjs />, prof: 95, status: "Fluent", desc: "Building high-throughput asynchronous APIs and backend micro-units.", officialColor: "#339933" },
        { name: "MongoDB", icon: <SiMongodb />, prof: 92, status: "Fluent", desc: "Modeling dynamic object structures and rapid document query pipelines.", officialColor: "#47a248" },
        { name: "Tailwind", icon: <SiTailwindcss />, prof: 99, status: "Mastered", desc: "Designing vibrant utilities, responsive grids, and luxury styles.", officialColor: "#38bdf8" },
        { name: "TypeScript", icon: <SiTypescript />, prof: 94, status: "Fluent", desc: "Securing codebases with robust typing matrices and dynamic interfaces.", officialColor: "#3178c6" }
      ]
    },
    {
      title: "UTILITIES",
      color: "#10b981",
      glowColor: "rgba(16,185,129,0.4)",
      radius: 70,
      speed: 0.3,
      items: [
        { name: "Cloudflare", icon: <SiCloudflare />, prof: 93, status: "Fluent", desc: "Managing global DNS routing, serverless workers, and fast page caching.", officialColor: "#f38020" },
        { name: "Git", icon: <FaGitAlt />, prof: 95, status: "Fluent", desc: "Handling complex atomic branching, merging, and pipeline webhooks.", officialColor: "#f05032" },
        { name: "Postman", icon: <SiPostman />, prof: 96, status: "Fluent", desc: "Testing backend queries and validating API JSON payload structural limits.", officialColor: "#ff6c37" },
        { name: "Vercel", icon: <SiVercel />, prof: 97, status: "Mastered", desc: "Deploying high-performance client panels and tracking live telemetry.", officialColor: "#ffffff" }
      ]
    }
  ];

  // Global hovered item states
  const [hoveredSkill, setHoveredSkill] = useState(categories[1].items[0]);
  const [hoveredCategory, setHoveredCategory] = useState(categories[1]);
  const [radarAngle, setRadarAngle] = useState(0);

  const hudColor = hoveredSkill?.officialColor || hoveredCategory.color;

  // Animate the continuous radar scan line
  useEffect(() => {
    let animId;
    const scan = () => {
      setRadarAngle((prev) => (prev + 1.2) % 360);
      animId = requestAnimationFrame(scan);
    };
    animId = requestAnimationFrame(scan);
    return () => cancelAnimationFrame(animId);
  }, []);

  return (
    <div className="mt-16 sm:mt-24 relative z-10 w-full overflow-hidden pb-8 px-2 sm:px-0">
      
      {/* SECTION HEADER */}
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-12 relative z-10 flex flex-col md:flex-row md:items-end justify-between gap-6"
      >
        <div>
          <div className="inline-block px-4 py-2 rounded-full mb-4 border border-cyan-500/20 bg-cyan-500/5">
            <span className="text-[10px] sm:text-xs font-bold tracking-[0.2em] uppercase text-cyan-400">
              Interactive Blueprint
            </span>
          </div>
          <h2 className="text-[clamp(2.3rem,5.5vw,4rem)] font-display font-extrabold tracking-tighter leading-none text-white">
            Tech Arsenal<span className="text-cyan-500">.</span>
          </h2>
          <p className="text-gray-400 font-body text-sm sm:text-base max-w-lg mt-2">
            Explore my digital architecture. Hover over the nodes in the stellar coordinate map to view real-time tech indicators.
          </p>
        </div>
      </motion.div>

      {/* ── CONSTELLATION MAP CONTAINER ── */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch relative z-10 w-full min-h-[460px]">
        
        {/* LEFT COLUMN: TELEMETRY HUD PANEL */}
        <div className="lg:col-span-5 flex flex-col justify-between">
          <div className="bg-[#0b0b14]/90 backdrop-blur-2xl border border-white/10 rounded-3xl p-6 sm:p-8 flex-1 flex flex-col justify-between shadow-2xl relative overflow-hidden group">
            {/* Ambient matching corner glow */}
            <div 
              className="absolute -top-24 -left-24 w-48 h-48 rounded-full blur-[60px] opacity-25 transition-colors duration-500" 
              style={{ backgroundColor: hudColor }}
            />
            
            {/* Glowing top line */}
            <div 
              className="absolute top-0 left-0 w-full h-[2px] transition-colors duration-500" 
              style={{ backgroundColor: hudColor }}
            />

            <div>
              {/* Telemetry Header */}
              <div className="flex items-center justify-between mb-8">
                <span className="text-[9px] font-mono tracking-widest text-gray-500 uppercase">
                  SYSTEM CORE HUD
                </span>
                <div className="flex items-center gap-1.5 px-2.5 py-0.5 rounded-md bg-white/[0.04] border border-white/5">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
                  <span className="text-[8px] font-mono font-bold tracking-widest uppercase text-cyan-300">TELEMETRY_ON</span>
                </div>
              </div>

              <AnimatePresence mode="wait">
                <motion.div
                  key={hoveredSkill.name}
                  initial={{ opacity: 0, x: -15 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 15 }}
                  transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                >
                  {/* Category Title */}
                  <span 
                    className="text-[9px] font-black tracking-[0.3em] uppercase transition-colors duration-500"
                    style={{ color: hudColor }}
                  >
                    {hoveredCategory.title} MODULE
                  </span>

                  {/* Skill name & Icon */}
                  <div className="flex items-center gap-4 mt-2.5 mb-5">
                    <div 
                      className="w-14 h-14 rounded-2xl border flex items-center justify-center text-2xl transition-all duration-500 shadow-lg"
                      style={{ 
                        borderColor: `${hudColor}40`, 
                        background: `${hudColor}0a`,
                        color: hudColor,
                        boxShadow: `0 0 20px ${hudColor}20`
                      }}
                    >
                      {hoveredSkill.icon}
                    </div>
                    <div>
                      <h4 className="text-2xl sm:text-3xl font-display font-extrabold text-white tracking-tight leading-none">
                        {hoveredSkill.name}
                      </h4>
                      <p className="text-[9px] font-mono tracking-widest text-gray-500 uppercase mt-1">
                        NODE STATUS: <span className="text-white">{hoveredSkill.status}</span>
                      </p>
                    </div>
                  </div>

                  {/* Proficiency Meter */}
                  <div className="bg-white/[0.02] border border-white/5 p-4 rounded-xl mb-6">
                    <div className="flex items-center justify-between text-xs font-mono font-bold text-gray-400 mb-2">
                      <span>INTELLIGENCE RATIO</span>
                      <span style={{ color: hudColor }}>{hoveredSkill.prof}%</span>
                    </div>
                    <div className="w-full h-[6px] bg-white/[0.04] rounded-full overflow-hidden">
                      <motion.div 
                        initial={{ width: 0 }}
                        animate={{ width: `${hoveredSkill.prof}%` }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                        className="h-full rounded-full"
                        style={{ backgroundColor: hudColor }}
                      />
                    </div>
                  </div>

                  {/* Spec Text Description */}
                  <p className="text-gray-400 text-sm leading-relaxed mb-4">
                    {hoveredSkill.desc}
                  </p>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Micro details at bottom of HUD */}
            <div className="pt-4 border-t border-white/5 flex items-center justify-between text-[8px] font-mono text-gray-600 uppercase tracking-widest mt-6">
              <span>SCANNER_RAD_DEG: {radarAngle.toFixed(1)}°</span>
              <span>GRID: AUTO_SYNC_NODE</span>
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN: INTERACTIVE SVG STELLAR CONSTELLATION MAP */}
        <div className="lg:col-span-7 bg-[#0b0b14]/70 border border-white/10 rounded-3xl p-4 sm:p-6 flex items-center justify-center relative overflow-hidden min-h-[380px] lg:min-h-[460px] shadow-2xl">
          
          {/* Constellation Mesh Grid Background */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.015)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.015)_1px,transparent_1px)] bg-[size:25px_25px] pointer-events-none" />
          
          {/* Interactive Orbits Space */}
          <div className="relative w-[340px] h-[340px] md:w-[400px] md:h-[400px] flex items-center justify-center">
            
            {/* SVG Canvas for Orbits, Sweep Radar, and Connections */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none select-none z-0 overflow-visible">
              <defs>
                <radialGradient id="radialGlow" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor="#0f0f1c" stopOpacity="0.8" />
                  <stop offset="100%" stopColor="#020208" stopOpacity="0" />
                </radialGradient>
              </defs>
              
              <circle cx="50%" cy="50%" r="190" fill="url(#radialGlow)" />

              {/* Concentric Orbital Tracks */}
              {categories.map((cat, i) => (
                <circle 
                  key={i}
                  cx="50%" 
                  cy="50%" 
                  r={cat.radius * 1.15} 
                  fill="none" 
                  stroke={cat.color} 
                  strokeOpacity="0.12" 
                  strokeWidth="1"
                  strokeDasharray="3 3"
                />
              ))}

              {/* Dynamic Radar Sweep Line */}
              <line 
                x1="50%" 
                y1="50%" 
                x2={`${50 + 60 * Math.cos((radarAngle * Math.PI) / 180)}%`} 
                y2={`${50 + 60 * Math.sin((radarAngle * Math.PI) / 180)}%`} 
                stroke="#06b6d4" 
                strokeWidth="1.2" 
                strokeOpacity="0.25"
              />
              <line 
                x1="50%" 
                y1="50%" 
                x2={`${50 + 130 * Math.cos((radarAngle * Math.PI) / 180)}%`} 
                y2={`${50 + 130 * Math.sin((radarAngle * Math.PI) / 180)}%`} 
                stroke="#a855f7" 
                strokeWidth="1.2" 
                strokeOpacity="0.15"
              />
            </svg>

            {/* Core Center Emblem */}
            <div className="absolute w-12 h-12 rounded-full bg-[#0d0d16] border border-cyan-500/40 flex items-center justify-center shadow-[0_0_20px_rgba(6,182,212,0.3)] z-10">
              <FaRocket className="text-cyan-400 animate-pulse text-sm" />
            </div>

            {/* Orbiting Skill Stars */}
            {categories.map((category) => {
              const ringRadius = category.radius * 1.15;
              const count = category.items.length;
              
              return category.items.map((skill, index) => {
                // Space items evenly in circular coordinates
                const startingAngle = (index / count) * 2 * Math.PI;
                
                // Active Orbit Rotation logic using motion values or standard sine
                return (
                  <OrbitingNode 
                    key={skill.name}
                    skill={skill}
                    category={category}
                    ringRadius={ringRadius}
                    startingAngle={startingAngle}
                    radarAngle={radarAngle}
                    onHover={() => {
                      setHoveredSkill(skill);
                      setHoveredCategory(category);
                    }}
                  />
                );
              });
            })}

          </div>
        </div>

      </div>

    </div>
  );
};

// Sub-component to compute orbit placement, sinus floating offsets, and trigger active radar sweeps
const OrbitingNode = ({ skill, category, ringRadius, startingAngle, radarAngle, onHover }) => {
  const [hovered, setHovered] = useState(false);
  const [sinOffset, setSinOffset] = useState(0);

  // Continuous floating wave offset
  useEffect(() => {
    let animId;
    let time = Math.random() * 100;
    const float = () => {
      time += 0.04;
      setSinOffset(Math.sin(time) * 3.5); // float offset in pixels
      animId = requestAnimationFrame(float);
    };
    animId = requestAnimationFrame(float);
    return () => cancelAnimationFrame(animId);
  }, []);

  // Compute node coordinates relative to absolute center
  // Slow orbital rotation over time is factored in
  const rotationAngle = startingAngle + (radarAngle * (category.speed / 180) * Math.PI);
  
  // Radar Sweep highlight calculation: check if radar angle aligns with current node angle
  // Map startingAngle to degrees (0 to 360)
  const nodeDegrees = (((rotationAngle * 180) / Math.PI) % 360 + 360) % 360;
  const degreesDiff = Math.abs(nodeDegrees - radarAngle);
  const isRadarOverlapping = degreesDiff < 20 || degreesDiff > 340;

  const nodeColor = skill.officialColor || category.color;

  // Render nodes absolute positioned
  return (
    <motion.button
      onMouseEnter={() => {
        setHovered(true);
        onHover();
      }}
      onMouseLeave={() => setHovered(false)}
      className="absolute w-11 h-11 sm:w-12 sm:h-12 rounded-xl border flex items-center justify-center cursor-pointer z-20"
      style={{
        left: `calc(50% + ${(ringRadius + sinOffset) * Math.cos(rotationAngle)}px)`,
        top: `calc(50% + ${(ringRadius + sinOffset) * Math.sin(rotationAngle)}px)`,
        transform: 'translate(-50%, -50%)',
        borderColor: hovered 
          ? nodeColor 
          : (isRadarOverlapping ? `${nodeColor}90` : `${nodeColor}25`),
        backgroundColor: hovered 
          ? `${nodeColor}1a` 
          : (isRadarOverlapping ? `${nodeColor}0d` : '#07070d'),
        color: hovered ? '#ffffff' : (isRadarOverlapping ? '#ffffff' : `${nodeColor}cc`),
        boxShadow: hovered 
          ? `0 0 22px ${nodeColor}60, inset 0 0 10px ${nodeColor}30` 
          : (isRadarOverlapping ? `0 0 14px ${nodeColor}30` : 'none'),
        transition: 'border-color 0.3s, background-color 0.3s, color 0.3s, box-shadow 0.3s'
      }}
    >
      <div className="text-xl sm:text-2xl select-none flex items-center justify-center">{skill.icon}</div>
    </motion.button>
  );
};

export default Skills;
