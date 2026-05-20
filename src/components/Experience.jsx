import React, { useState } from 'react';
import experience from './data/experience.json';
import Skills from './Skills';
import { motion, AnimatePresence } from 'framer-motion';
import { FaLaptopCode, FaMapMarkerAlt, FaCalendarAlt, FaAngleRight, FaTerminal } from 'react-icons/fa';

const Experience = () => {
  const [activeIdx, setActiveIdx] = useState(0);

  // Rich premium deliverables mapped by experience role/id for high-fidelity resume listings
  const detailedDeliverables = {
    4: [
      "Engineered responsive, highly performant SaaS dashboards using React, Next.js, and MongoDB architectures.",
      "Optimized asynchronous API routes and backend services, achieving a 45% reduction in JSON payload load times.",
      "Implemented hardware-accelerated Framer Motion interactive layouts, maintaining a solid 60FPS on high-resolution displays.",
      "Managed automatic production builds and SEO indexing schemes, boosting site visibility metrics by 30%."
    ],
    1: [
      "Crafted responsive public landing pages and digital tools in Banaras under the Make in India initiative.",
      "Re-engineered CSS assets into utility Tailwind structures, trimming styles sheet payloads by over 60%.",
      "Collaborated with UI developers to resolve complex state issues and improve cross-browser render compatibility.",
      "Created structured documentation for modular components, easing technical onboarding of junior interns."
    ],
    2: [
      "Assisted in developing high-throughput web prototypes using modern JavaScript stacks in Navi Mumbai.",
      "Conducted thorough testing sweeps to debug rendering leaks and clean layout layout shifts.",
      "Constructed visual data graphs and dashboard analytics cards, boosting user engagement indices.",
      "Learned to maintain clean version cycles using Git workflows, pull reviews, and automation webhooks."
    ],
    3: [
      "Completed intensive advanced full-stack systems training, mastering React hooks, routing, and data modeling.",
      "Engineered multiple personal full-stack application blueprints, demonstrating robust API capabilities.",
      "Studied hardware-focused CSS structures, glassmorphic styling guidelines, and premium design patterns.",
      "Gained deep literacy in database query optimizations, clean coding rules, and Agile sprints."
    ]
  };

  const selectedExp = experience[activeIdx] || experience[0];
  const activeDeliverables = detailedDeliverables[selectedExp.id] || [];

  return (
    <div id="experience" className="py-10 sm:py-14 px-4 sm:px-8 max-w-[1400px] mx-auto z-10 relative overflow-hidden">
      
      {/* SECTION HEADER */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="mb-12 relative z-10 flex flex-col items-center text-center"
      >
        <div className="inline-block px-4 py-2 rounded-full mb-4 border border-cyan-500/20 bg-cyan-500/5">
          <span className="text-[10px] sm:text-xs font-bold tracking-[0.2em] uppercase text-cyan-400">
            Professional Timeline
          </span>
        </div>
        <h2 className="text-[clamp(2.3rem,5.5vw,4.5rem)] font-display font-extrabold tracking-tight leading-none text-white">
          Work <span className="text-gradient">Experience.</span>
        </h2>
        <p className="text-gray-400 font-body text-sm sm:text-base max-w-lg mt-2 mx-auto">
          Explore my interactive career records. Click any station in the left dashboard grid to reveal its full terminal details.
        </p>
      </motion.div>

      {/* ── HOLOGRAPHIC CONSOLE LAYOUT ── */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch relative z-10 w-full mb-16">
        
        {/* LEFT PANEL: SELECTOR CONSOLE ITEMS */}
        <div className="lg:col-span-5 flex flex-col gap-4">
          <p className="text-[9px] font-mono tracking-widest text-gray-500 uppercase px-2">
            CAREER NODE SELECTOR
          </p>
          
          <div className="flex flex-col gap-3.5">
            {experience.map((item, idx) => {
              const isActive = idx === activeIdx;
              return (
                <motion.button
                  key={item.id}
                  onClick={() => setActiveIdx(idx)}
                  className={`group w-full text-left rounded-2xl p-5 border transition-all duration-500 cursor-pointer relative overflow-hidden flex items-center justify-between ${
                    isActive 
                      ? 'bg-[#0f0f1c]/90 border-cyan-500/40 shadow-[0_0_25px_rgba(6,182,212,0.15)]' 
                      : 'bg-[#09090f]/70 border-white/5 hover:border-white/15'
                  }`}
                  whileHover={{ x: 6 }}
                >
                  {/* Dynamic side glow */}
                  <div 
                    className="absolute top-0 bottom-0 left-0 w-[3px] transition-all duration-500"
                    style={{ backgroundColor: isActive ? '#06b6d4' : 'transparent' }}
                  />

                  <div className="flex items-center gap-4 relative z-10">
                    {/* Logo container */}
                    <div className="w-11 h-11 rounded-xl bg-white flex items-center justify-center p-2 shadow-inner flex-shrink-0">
                      <img src={item.imagesrc} alt={item.role} className="w-full h-full object-contain" />
                    </div>
                    
                    <div>
                      <h4 className="text-white font-display font-black text-sm sm:text-base tracking-tight leading-none group-hover:text-cyan-400 transition-colors">
                        {item.role}
                      </h4>
                      <div className="flex items-center gap-2 mt-1.5 text-xs text-gray-400">
                        <span className="flex items-center gap-1"><FaMapMarkerAlt size={10} className="text-cyan-400" /> {item.Location}</span>
                      </div>
                    </div>
                  </div>

                  {/* Active ping / chevron */}
                  <div className="flex items-center gap-3 relative z-10">
                    <span className="text-[10px] font-mono text-gray-500 hidden sm:block">{item.startDate.split(' ')[2] || item.startDate}</span>
                    {isActive ? (
                      <div className="flex items-center gap-1.5 px-2 py-0.5 rounded bg-cyan-500/10 border border-cyan-500/20">
                        <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
                        <span className="text-[8px] font-mono font-bold tracking-widest text-cyan-300">ACTIVE</span>
                      </div>
                    ) : (
                      <FaAngleRight className="text-gray-600 group-hover:text-white transition-colors" />
                    )}
                  </div>

                  {/* Internal ambient sweep */}
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                </motion.button>
              );
            })}
          </div>
        </div>

        {/* RIGHT PANEL: HOLOGRAM ACTIVE DRAWER */}
        <div className="lg:col-span-7">
          <div className="bg-[#0b0b14]/90 backdrop-blur-2xl border border-white/10 rounded-3xl p-6 sm:p-8 h-full flex flex-col justify-between shadow-2xl relative overflow-hidden">
            {/* System corner glows */}
            <div className="absolute -top-24 -right-24 w-48 h-48 rounded-full bg-cyan-500/10 blur-[60px] pointer-events-none" />
            <div className="absolute -bottom-24 -left-24 w-48 h-48 rounded-full bg-purple-500/10 blur-[60px] pointer-events-none" />
            
            {/* Top gold bar indicator */}
            <div className="absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500" />

            <div>
              {/* Telemetry Header */}
              <div className="flex items-center justify-between mb-8 border-b border-white/5 pb-4">
                <div className="flex items-center gap-2">
                  <FaTerminal className="text-cyan-400 text-xs" />
                  <span className="text-[9px] font-mono tracking-widest text-gray-500 uppercase">
                    ACTIVE_NODE_DETAILS
                  </span>
                </div>
                <div className="flex items-center gap-1.5 px-2 py-0.5 rounded-md bg-white/[0.03] border border-white/5">
                  <span className="text-[8px] font-mono font-bold tracking-widest uppercase text-cyan-300">NODE_0{selectedExp.id}_CONNECTED</span>
                </div>
              </div>

              <AnimatePresence mode="wait">
                <motion.div
                  key={selectedExp.id}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
                    {/* Header profile info */}
                    <div className="flex items-center gap-4">
                      <div className="w-14 h-14 rounded-2xl bg-white border border-white/10 p-2.5 flex items-center justify-center shadow-lg">
                        <img src={selectedExp.imagesrc} alt={selectedExp.role} className="w-full h-full object-contain" />
                      </div>
                      <div>
                        <h3 className="text-xl sm:text-2xl font-display font-extrabold text-white tracking-tight leading-none">
                          {selectedExp.role}
                        </h3>
                        <p className="text-cyan-400 text-xs sm:text-sm font-semibold tracking-wide flex items-center gap-1.5 mt-1.5">
                          <FaMapMarkerAlt size={11} /> {selectedExp.Location}
                        </p>
                      </div>
                    </div>

                    {/* Timeline Date Badge */}
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-purple-500/20 bg-purple-500/5 text-purple-400 text-[10px] sm:text-xs font-black tracking-widest uppercase self-start sm:self-auto">
                      <FaCalendarAlt size={10} />
                      {selectedExp.startDate} — {selectedExp.endDate}
                    </div>
                  </div>

                  {/* Bullet accomplishments section - highly descriptive */}
                  <div className="space-y-4 mb-8">
                    <p className="text-[9px] font-mono font-black text-gray-500 uppercase tracking-widest">SUB-SYSTEM MILESTONES</p>
                    
                    <div className="flex flex-col gap-3">
                      {activeDeliverables.map((bullet, i) => (
                        <div key={i} className="flex items-start gap-3 group/bullet">
                          <div className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-2 flex-shrink-0 group-hover/bullet:scale-125 transition-transform shadow-[0_0_8px_rgba(6,182,212,0.8)]" />
                          <p className="text-gray-200 text-xs sm:text-sm leading-relaxed font-semibold">
                            {bullet}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Bottom HUD bar */}
            <div className="pt-4 border-t border-white/5 flex items-center justify-between text-[8px] font-mono text-gray-600 uppercase tracking-widest mt-6">
              <span>MEM_SYNC: STABLE</span>
              <span>CONNECTION: SECURE</span>
            </div>
          </div>
        </div>

      </div>

      <Skills />
    </div>
  );
};

export default Experience;
