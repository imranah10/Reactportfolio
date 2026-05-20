import React from "react";
import { motion } from "framer-motion";
import profile2 from "./images/profile.jpg";
import InlineHoverReveal from "./InlineHoverReveal";
import { FiCpu, FiLayers, FiActivity, FiTerminal, FiGlobe } from "react-icons/fi";

const About = () => {
  // Stats telemetry metrics
  const telemetryStats = [
    {
      id: "SYS-01",
      label: "STACK DENSITY",
      value: "25+",
      desc: "Orbital technology nodes in active constellation maps",
      icon: <FiCpu className="text-cyan-400" size={20} />,
      glowColor: "rgba(34,211,238,0.2)",
      borderColor: "group-hover:border-cyan-500/50",
      ledColor: "bg-cyan-400"
    },
    {
      id: "SYS-02",
      label: "SYSTEM FLUIDITY",
      value: "99.9%",
      desc: "Adaptive UI layout uptime across all screen scales",
      icon: <FiActivity className="text-purple-400" size={20} />,
      glowColor: "rgba(168,85,247,0.2)",
      borderColor: "group-hover:border-purple-500/50",
      ledColor: "bg-purple-400"
    },
    {
      id: "SYS-03",
      label: "BUILDS DELIVERED",
      value: "25+",
      desc: "Immersive & performant digital web platforms compiled",
      icon: <FiLayers className="text-pink-400" size={20} />,
      glowColor: "rgba(236,72,153,0.2)",
      borderColor: "group-hover:border-pink-500/50",
      ledColor: "bg-pink-400"
    }
  ];

  return (
    <div id="about" className="py-16 sm:py-24 px-6 md:px-12 max-w-[1400px] mx-auto z-10 relative overflow-hidden">
      
      {/* Decorative Sci-Fi Background Tech Details */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-pink-500/5 rounded-full blur-[120px] pointer-events-none -z-10"></div>
      <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-cyan-500/5 rounded-full blur-[120px] pointer-events-none -z-10"></div>
      <div className="absolute top-10 left-10 w-24 h-24 border border-cyan-500/10 rounded-full animate-[spin_40s_linear_infinite] border-dashed pointer-events-none -z-10"></div>
      
      {/* Dynamic Header Section */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
        className="mb-12 sm:mb-16 relative z-10"
      >
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6 relative overflow-hidden border border-pink-500/30 bg-pink-500/10 backdrop-blur-md">
          <span className="w-1.5 h-1.5 rounded-full bg-pink-500 animate-ping"></span>
          <span className="text-[10px] sm:text-xs font-bold tracking-[0.25em] uppercase text-pink-400 relative z-10">
            BIOMETRIC OVERVIEW
          </span>
        </div>
        <h2 className="text-[clamp(2.5rem,6vw,5.5rem)] font-display font-extrabold tracking-tight leading-none text-white">
          Who I <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-500">Am.</span>
        </h2>
      </motion.div>

      {/* Main Column Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start relative z-10">

        {/* PROFILE VISOR & TECHNICAL DATA DRAWER */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-5 flex flex-col items-center lg:items-stretch w-full max-w-[450px] lg:max-w-none mx-auto"
        >
          {/* Biometric Glass Viewport */}
          <div className="relative w-full aspect-[4/5] rounded-[2rem] p-1 bg-gradient-to-br from-pink-500 via-purple-500 to-cyan-500 shadow-[0_0_50px_rgba(236,72,153,0.2)] group z-10 overflow-hidden">
            
            {/* Holographic Radar Sweep Overlay */}
            <div className="absolute inset-0 bg-[linear-gradient(to_bottom,transparent_45%,rgba(34,211,238,0.15)_50%,transparent_55%)] bg-[length:100%_200%] animate-[radar-sweep_6s_linear_infinite] pointer-events-none z-20"></div>

            {/* Corner Tech Brackets */}
            <div className="absolute top-4 left-4 w-6 h-6 border-t-2 border-l-2 border-cyan-400 z-30"></div>
            <div className="absolute top-4 right-4 w-6 h-6 border-t-2 border-r-2 border-cyan-400 z-30"></div>
            <div className="absolute bottom-4 left-4 w-6 h-6 border-b-2 border-l-2 border-cyan-400 z-30"></div>
            <div className="absolute bottom-4 right-4 w-6 h-6 border-b-2 border-r-2 border-cyan-400 z-30"></div>

            {/* Live System Diagnostics Badges */}
            <div className="absolute top-6 left-6 px-3 py-1 rounded bg-[#0a0a0f]/80 border border-cyan-500/30 backdrop-blur-md z-30 flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse"></span>
              <span className="text-[9px] font-mono font-bold tracking-wider text-cyan-400">STATUS: OPTIMAL</span>
            </div>

            <div className="absolute top-6 right-6 px-3 py-1 rounded bg-[#0a0a0f]/80 border border-purple-500/30 backdrop-blur-md z-30">
              <span className="text-[9px] font-mono font-bold tracking-wider text-purple-400">SYS.INIT // RX-808</span>
            </div>

            <div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl bg-[#0a0a0f]/85 border border-white/10 backdrop-blur-md z-30 flex flex-col gap-1.5 font-mono">
              <div className="flex justify-between text-[10px] text-gray-400">
                <span>SECTOR ID:</span>
                <span className="text-cyan-400 font-bold">FRONT-END // UX</span>
              </div>
              <div className="flex justify-between text-[10px] text-gray-400">
                <span>OPERATIONAL RATIO:</span>
                <span className="text-purple-400 font-bold">100% RESPONSIVE</span>
              </div>
              <div className="flex justify-between text-[10px] text-gray-400">
                <span>LOCATION:</span>
                <span className="text-pink-400 font-bold">BIHAR, INDIA</span>
              </div>
            </div>

            {/* Profile Picture itself */}
            <div className="w-full h-full rounded-[1.8rem] overflow-hidden bg-[#0a0a0f] relative">
              <img
                src={profile2}
                alt="Imran Profile"
                className="w-full h-full object-cover transition-all duration-1000 ease-out group-hover:scale-105 group-hover:brightness-[0.85] opacity-90"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0f] via-transparent to-transparent opacity-60"></div>
            </div>
            
            {/* Ambient Background Glow */}
            <div className="absolute inset-0 -z-10 bg-gradient-to-br from-pink-500 to-purple-600 blur-[50px] opacity-35 group-hover:opacity-60 transition-opacity duration-700"></div>
          </div>

          {/* Sub-ledger system specs */}
          <div className="mt-6 p-5 rounded-2xl bg-[#0a0a0f]/50 border border-white/5 font-mono text-[10px] sm:text-xs text-gray-400 flex flex-col gap-2.5 shadow-[inset_0_1px_3px_rgba(255,255,255,0.05)]">
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400"></span>
              <span className="text-white font-bold uppercase tracking-wider">UNIT SYSTEM SPECIFICATIONS:</span>
            </div>
            <div className="grid grid-cols-2 gap-4 pt-1 border-t border-white/5">
              <div>
                <p className="text-gray-500 uppercase tracking-widest text-[9px]">ENGINE REVISION</p>
                <p className="text-gray-200 font-semibold mt-0.5">VITE + REACT 18.x</p>
              </div>
              <div>
                <p className="text-gray-500 uppercase tracking-widest text-[9px]">ACCENTS LAYER</p>
                <p className="text-gray-200 font-semibold mt-0.5">VIBRANT CHROMA GLOW</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* DYNAMIC TELEMETRY & SYSTEM TEXT */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-7 flex flex-col justify-between"
        >
          {/* Subheading text */}
          <div className="mb-8">
            <h3 className="text-[clamp(1.8rem,3.5vw,3rem)] font-display font-bold mb-6 leading-[1.15] text-white tracking-tight">
              Engineering Empathy <br />
              Through <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">Clean Digital Logic.</span>
            </h3>

            <div className="flex flex-col gap-5 text-base sm:text-lg text-gray-300 font-normal leading-relaxed">
              <p>
                I am a{" "}
                <InlineHoverReveal
                  mediaSrc="https://res.cloudinary.com/dzhtnwfg0/video/upload/v1/Dev_Portfolio___Void_Neon_yep88m.mp4"
                  isVideo={true}
                >
                  self-taught frontend developer
                </InlineHoverReveal>{" "}
                based in Bihar, India. I specialize in designing and engineering high-impact, performant web applications from absolute scratch and evolving them into cutting-edge,{" "}
                <InlineHoverReveal
                  mediaSrc="https://res.cloudinary.com/dzhtnwfg0/image/upload/v1767181736/presentmyvirt_du9pfo.png"
                  isVideo={false}
                >
                  vibrant, responsive experiences
                </InlineHoverReveal>
                .
              </p>
              <p>
                To me, coding is not just about writing syntax—it is about carving smooth, visual interactive pathways that bridges the divide between human imagination and machine performance. I obsess over micro-animations, architectural stability, and layouts that feel truly alive.
              </p>
            </div>
          </div>

          {/* Tech Stats Telemetry Dashboard Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
            {telemetryStats.map((stat, i) => (
              <motion.div
                key={stat.id}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
                className={`group p-5 rounded-2xl bg-[#0a0a10]/85 border border-white/5 hover:border-white/15 backdrop-blur-xl relative overflow-hidden transition-all duration-300 flex flex-col justify-between`}
                style={{
                  boxShadow: `0 4px 30px rgba(0,0,0,0.4)`
                }}
              >
                {/* Accent glow on hover */}
                <div 
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  style={{
                    background: `radial-gradient(circle at 50% 20%, ${stat.glowColor} 0%, transparent 70%)`
                  }}
                ></div>

                {/* Left rim color accent */}
                <div className={`absolute top-0 left-0 w-[3px] h-0 group-hover:h-full transition-all duration-500 ${stat.ledColor}`}></div>

                {/* Header card info */}
                <div className="flex justify-between items-start mb-4">
                  <span className="font-mono text-[9px] text-gray-500 font-bold tracking-widest">{stat.id} // {stat.label}</span>
                  <div className="p-1.5 rounded-lg bg-white/5 border border-white/10 group-hover:scale-110 transition-transform duration-300">
                    {stat.icon}
                  </div>
                </div>

                {/* Main counter dial */}
                <div className="mb-2">
                  <h4 className="text-3xl sm:text-4xl font-display font-black text-white tracking-tight group-hover:scale-105 origin-left transition-transform duration-300">
                    {stat.value}
                  </h4>
                </div>

                {/* Text descriptor */}
                <p className="text-[11px] text-gray-400 leading-relaxed font-medium">
                  {stat.desc}
                </p>

                {/* Glowing LED state indicator */}
                <div className="flex items-center gap-1.5 mt-3 pt-3 border-t border-white/5">
                  <span className={`w-1.5 h-1.5 rounded-full ${stat.ledColor} animate-pulse shadow-[0_0_6px_currentColor]`}></span>
                  <span className="font-mono text-[8px] text-gray-500 uppercase tracking-widest">SUB-SYSTEM ACTIVE</span>
                </div>
              </motion.div>
            ))}
          </div>

          {/* AXIO_LINK Monospace shell console */}
          <div className="bg-[#07070b]/90 border border-purple-500/25 rounded-2xl overflow-hidden shadow-[0_10px_40px_rgba(0,0,0,0.6)] group transition-all duration-500 hover:border-cyan-500/40">
            {/* Terminal Window Header Bar */}
            <div className="bg-[#0b0b12] px-4 py-3 border-b border-white/5 flex items-center justify-between">
              <div className="flex gap-1.5">
                <span className="w-3 h-3 rounded-full bg-red-500/30 group-hover:bg-red-500 transition-colors duration-300 inline-block"></span>
                <span className="w-3 h-3 rounded-full bg-yellow-500/30 group-hover:bg-yellow-500 transition-colors duration-300 inline-block"></span>
                <span className="w-3 h-3 rounded-full bg-green-500/30 group-hover:bg-green-500 transition-colors duration-300 inline-block"></span>
              </div>
              <span className="font-mono text-[9px] text-gray-500 font-bold uppercase tracking-[0.2em] flex items-center gap-1.5">
                <FiTerminal className="text-cyan-400" /> AXIO_LINK_MISSION.sh
              </span>
              <span className="w-8"></span>
            </div>

            {/* Terminal contents */}
            <div className="p-6 font-mono text-xs sm:text-sm text-gray-300 leading-relaxed relative">
              <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500/5 rounded-full blur-3xl pointer-events-none"></div>
              
              <div className="flex gap-2 mb-2 text-cyan-400 font-bold">
                <span>$</span>
                <span>cat mission_statement.txt</span>
              </div>
              
              <p className="text-gray-300 italic mb-4 leading-relaxed pl-4 border-l border-purple-500/30 text-sm sm:text-base">
                "To architect visually elegant, fluid digital pathways using advanced frontend frameworks, weaving vibrant responsive aesthetics with modular clean code structures to solve real-world logic."
              </p>

              <div className="flex items-center gap-1.5 text-pink-400 font-bold font-mono">
                <span>$</span>
                <span className="text-gray-300 uppercase tracking-widest text-[9px] sm:text-xs">SYSTEM INTEGRATION READY</span>
                <span className="w-2 h-4 bg-pink-400 animate-[blink_1s_step-start_infinite]"></span>
              </div>
            </div>
          </div>

        </motion.div>

      </div>
      
      {/* Custom keyframes style for scanner laser and blink cursor */}
      <style>{`
        @keyframes radar-sweep {
          0% { background-position: 0% 0%; }
          100% { background-position: 0% 200%; }
        }
        @keyframes blink {
          50% { opacity: 0; }
        }
      `}</style>

    </div>
  );
};

export default About;
