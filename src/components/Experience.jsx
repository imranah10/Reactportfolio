import React, { useState } from 'react';
import experience from './data/experience.json';
import Skills from './Skills';
import { motion, AnimatePresence } from 'framer-motion';
import { FaMapMarkerAlt, FaCalendarAlt } from 'react-icons/fa';
import { sounds } from '../utils/sound';

const Experience = () => {
  const [activeIdx, setActiveIdx] = useState(0);

  const detailedDeliverables = {
    4: [
      "Built and deployed production SaaS dashboards for MyVirtualMate using React, Next.js, and MongoDB.",
      "After the role transitioned, continued independently — dedicated to self-learning AI tools and AI automation full-time.",
      "Built PromptForge (AI prompt engineering platform) entirely using AI-assisted development — GLM 5.2, AI Studio, and Google Stitch.",
      "Currently building Toolverse — a privacy-first online toolkit with 100+ tools, published as an npm package (263 components, 1,099 icons). Includes CSS X-Ray, Code Universe, and Butterfly Effect.",
      "Integrated Google Analytics for real-time user telemetry and traffic intelligence across all deployed platforms.",
      "Mastered AI-assisted development workflow — using Cursor AI, Gemini, Claude, and GLM 5.2 for rapid prototyping and production-grade code generation."
    ],
    1: [
      "Crafted responsive public landing pages and digital tools in Banaras under the Make in India initiative.",
      "Re-engineered CSS assets into utility Tailwind structures, trimming styles sheet payloads by over 60%.",
      "Collaborated with UI developers to resolve complex state issues and improve cross-browser render compatibility.",
      "Created structured documentation for modular components, easing technical onboarding of junior interns."
    ],
    2: [
      "Assisted in developing high-throughput web prototypes using modern JavaScript stacks in Navi Mumbai.",
      "Conducted thorough testing sweeps to debug rendering leaks and clean layout shifts.",
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
    <section id="experience" className="py-32 relative border-t border-primary/10 max-w-[1280px] mx-auto px-5 md:px-16">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
        {/* Left: Career timeline */}
        <div>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            onViewportEnter={() => sounds.reveal()}
            className="text-3xl md:text-5xl font-black text-primary mb-12 tracking-tight"
          >
            Career Nodes
          </motion.h2>

          <div className="space-y-10 relative before:absolute before:inset-y-0 before:left-[11px] before:w-px before:bg-primary/30 ml-4">
            {experience.map((item, idx) => {
              const isActive = idx === activeIdx;
              return (
                <div key={item.id} className="relative pl-10 group">
                  <div className={`absolute left-[-13px] top-1.5 w-6 h-6 rounded-full bg-surface border-2 flex items-center justify-center z-10 transition-all ${isActive ? 'border-primary scale-125' : 'border-outline-variant'}`}>
                    <div className={`w-2 h-2 rounded-full transition-colors ${isActive ? 'bg-primary animate-pulse' : 'bg-outline-variant'}`} />
                  </div>
                  <button
                    onClick={() => { setActiveIdx(idx); sounds.click(); }}
                    onMouseEnter={() => sounds.hover()}
                    className={`glass-panel p-6 rounded-xl w-full text-left transition-colors ${isActive ? 'border-primary/50' : 'border-outline-variant/20 hover:border-primary/30'}`}
                  >
                    <div className="font-mono text-primary text-xs mb-2">{item.startDate} — {item.endDate}</div>
                    <h3 className="text-xl font-bold text-text-primary mb-1">{item.role}</h3>
                    <div className="font-mono text-sm text-tertiary mb-3 flex items-center gap-1.5">
                      <FaMapMarkerAlt size={10} /> {item.Location}
                    </div>
                  </button>
                </div>
              );
            })}
          </div>
        </div>

        {/* Right: Detail panel */}
        <div>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-black text-primary mb-12 tracking-tight"
          >
            Skill Constellation
          </motion.h2>

          {/* Skills inline */}
          <Skills />

          {/* Active experience details */}
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedExp.id}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.45 }}
              className="glass-panel p-6 rounded-xl border-primary/20 mt-8"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-xl bg-white border border-white/10 p-2 flex items-center justify-center">
                  <img src={selectedExp.imagesrc} alt={selectedExp.role} className="w-full h-full object-contain" />
                </div>
                <div>
                  <h3 className="text-xl font-black text-text-primary">{selectedExp.role}</h3>
                  <p className="text-primary text-sm flex items-center gap-1.5 mt-1">
                    <FaMapMarkerAlt size={10} /> {selectedExp.Location}
                  </p>
                </div>
                <div className="ml-auto inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-tertiary/20 bg-tertiary/5 text-tertiary text-xs font-bold tracking-widest uppercase">
                  <FaCalendarAlt size={10} /> {selectedExp.startDate}
                </div>
              </div>
              <div className="space-y-3">
                <p className="font-mono text-xs font-bold text-gray-500 uppercase tracking-widest">Sub-system Milestones</p>
                {activeDeliverables.map((bullet, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0 shadow-[0_0_8px_rgba(76,215,246,0.8)]" />
                    <p className="text-on-surface-variant text-sm leading-relaxed">{bullet}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default Experience;
