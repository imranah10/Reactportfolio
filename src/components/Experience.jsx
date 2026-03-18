import React from 'react';
import experience from './data/experience.json';
import Skills from './Skills';
import { motion } from 'framer-motion';

const Experience = () => {
  return (
    <div id="experience" className="py-24 sm:py-32 md:py-40 px-4 sm:px-8 max-w-[1200px] mx-auto z-10 relative overflow-hidden">

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
        className="mb-24 text-center relative z-10 flex flex-col items-center"
      >
        <div className="inline-block px-4 py-2 rounded-full mb-6 relative overflow-hidden border border-cyan-500/30 bg-cyan-500/10 backdrop-blur-md">
          <span className="text-[10px] sm:text-xs font-bold tracking-[0.2em] uppercase text-cyan-400 relative z-10">
            Professional Journey
          </span>
        </div>
        <h2 className="text-[clamp(2.5rem,6vw,5.5rem)] font-display font-extrabold tracking-tight leading-none relative z-10 text-white">
          Work <span className="text-gradient">Experience</span>
        </h2>
      </motion.div>

      <div className="flex flex-col gap-12 sm:gap-16 relative mb-32 max-w-5xl mx-auto">

        {/* Vibrant Glowing Timeline Line */}
        <div className="absolute left-[39px] sm:left-1/2 sm:-translate-x-1/2 top-0 bottom-0 w-[3px] bg-gradient-to-b from-transparent via-purple-500 to-transparent z-0 blur-[1px]"></div>
        <div className="absolute left-[40px] sm:left-1/2 sm:-translate-x-1/2 top-0 bottom-0 w-[1px] bg-gradient-to-b from-transparent via-cyan-400 to-transparent z-0"></div>

        {experience.map((data, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
            className={`flex flex-col sm:flex-row items-center justify-between w-full relative z-10 ${idx % 2 === 0 ? 'sm:flex-row-reverse' : ''}`}
          >
            {/* Glowing Neon Timeline Marker */}
            <div className="absolute left-8 sm:left-1/2 transform sm:-translate-x-1/2 flex items-center justify-center w-6 h-6 rounded-full bg-[#0a0a0f] border-2 border-cyan-400 shadow-[0_0_15px_rgba(34,211,238,0.8)] z-20 transition-transform duration-500 hover:scale-125">
              <div className="w-2 h-2 rounded-full bg-cyan-300 animate-pulse"></div>
            </div>

            {/* Content Container - Ensure Flex sizing works properly across devices */}
            <div className={`w-full sm:w-[45%] flex ${idx % 2 === 0 ? 'justify-start sm:justify-start' : 'justify-start sm:justify-end'} px-2 sm:px-0`}>
              <div className="w-full ml-16 sm:ml-0 bg-[#0f0f16]/80 backdrop-blur-md border border-white/10 p-6 sm:p-8 rounded-2xl group relative overflow-hidden transition-all duration-500 hover:border-cyan-500/50 hover:shadow-[0_0_30px_rgba(6,182,212,0.2)] hover:-translate-y-1">
                <div className="flex items-center gap-5 mb-5 sm:mb-6">
                  <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center p-2 shadow-[0_0_15px_rgba(255,255,255,0.2)] relative z-10">
                    <img src={data.imagesrc} alt={data.role} className="w-full h-full object-contain" />
                  </div>
                  <div className="relative z-10">
                    <h3 className="text-xl sm:text-2xl font-display font-bold text-white tracking-tight leading-tight group-hover:text-cyan-400 transition-colors">
                      {data.role}
                    </h3>
                    <p className="text-gray-400 text-sm mt-1 font-semibold tracking-wide">
                      {data.Location}
                    </p>
                  </div>
                </div>

                <div className="inline-block text-[10px] sm:text-[11px] font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400 tracking-[0.2em] uppercase relative z-10">
                  {data.startDate} — {data.endDate}
                </div>

                {/* Subtle internal gradient overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
            </div>

          </motion.div>
        ))}
      </div>

      <Skills />
    </div>
  );
};

export default Experience;
