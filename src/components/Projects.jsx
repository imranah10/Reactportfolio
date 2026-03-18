import React, { useState } from 'react';
import projects from './data/projects.json';
import { motion, AnimatePresence } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaChevronDown } from 'react-icons/fa';

const Projects = () => {
  const [showArchive, setShowArchive] = useState(false);

  // Safe array slicing just in case projects don't load correctly
  const projectList = projects || [];
  const featured = projectList.slice(0, 4); // First 4 are video projects
  const archive = projectList.slice(4); // Remaining 9 are image projects

  // Generic tech color mapper for pills
  const getTechColor = (tech) => {
    const t = tech.toLowerCase();
    if (t.includes('react') || t.includes('tailwind')) return 'text-cyan-400 bg-cyan-400/10 border-cyan-400/20';
    if (t.includes('node') || t.includes('mongo')) return 'text-green-400 bg-green-400/10 border-green-400/20';
    if (t.includes('next') || t.includes('three')) return 'text-white bg-white/10 border-white/20';
    if (t.includes('framer') || t.includes('lovable')) return 'text-pink-400 bg-pink-400/10 border-pink-400/20';
    if (t.includes('firebase')) return 'text-yellow-400 bg-yellow-400/10 border-yellow-400/20';
    return 'text-purple-400 bg-purple-400/10 border-purple-400/20';
  };

  return (
    <div id="projects" className="py-24 sm:py-32 md:py-40 px-4 sm:px-8 md:px-12 max-w-[1400px] mx-auto z-10 relative">

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
        className="mb-16 sm:mb-24 flex flex-col md:flex-row justify-between items-start md:items-end gap-8 relative z-10"
      >
        <div>
          <div className="inline-block px-4 py-2 rounded-full mb-6 border border-purple-500/30 bg-purple-500/10 backdrop-blur-md">
            <span className="text-[10px] sm:text-xs font-bold tracking-[0.2em] uppercase text-purple-400">
              Selected Work
            </span>
          </div>
          <h2 className="text-[clamp(2.5rem,6vw,5.5rem)] font-display font-extrabold tracking-tight leading-none text-white">
            Featured <br /> <span className="text-gradient">Projects.</span>
          </h2>
        </div>
      </motion.div>

      {/* Featured Video Projects */}
      <div className="flex flex-col gap-16 md:gap-24 relative z-10 w-full overflow-hidden">
        {featured.map((project, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className={`flex flex-col ${idx % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-8 md:gap-12 lg:gap-20 items-center group`}
          >
            {/* Project Media Container - Vibrant Glow Hover */}
            <div className="w-full lg:w-[60%] overflow-hidden rounded-[1.5rem] bg-[#0f0f16] border border-white/10 relative aspect-video transition-all duration-700 hover:-translate-y-2 hover:shadow-[0_0_40px_rgba(168,85,247,0.3)] hover:border-purple-500/40">
              {project.videoSrc ? (
                <video
                  src={project.videoSrc}
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-700 ease-out"
                />
              ) : (
                <img
                  src={project.imageSrc}
                  alt={project.title}
                  className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-700 ease-out"
                />
              )}
              {/* Overlay Gradient on Video/Image */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0f] via-transparent to-transparent opacity-60 group-hover:opacity-20 transition-opacity duration-500 pointer-events-none"></div>
            </div>

            {/* Project Details */}
            <div className="w-full lg:w-[40%] flex flex-col justify-center px-2 sm:px-0">
              <span className="text-cyan-400 font-mono tracking-widest text-sm font-bold mb-4">0{idx + 1}</span>
              <h3 className="text-[clamp(1.8rem,3vw,2.5rem)] font-display font-bold text-white mb-4 tracking-tight leading-tight">
                {project.title}
              </h3>
              <p className="text-gray-400 font-medium text-[15px] sm:text-[16px] mb-8 leading-relaxed max-w-md">
                {project.desc}
              </p>

              <div className="flex flex-wrap gap-2 mb-10 w-[95%]">
                {project.stack.map((tech, i) => (
                  <span key={i} className={`px-3 py-1.5 rounded-full border text-xs font-bold tracking-wider uppercase ${getTechColor(tech)}`}>
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex flex-wrap gap-4 sm:gap-6 items-center">
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noreferrer"
                  className="px-6 py-3 rounded-full bg-white text-black text-xs font-bold tracking-[0.2em] uppercase transition-all duration-300 hover:bg-gradient-to-r hover:from-cyan-400 hover:to-purple-500 hover:text-white flex items-center justify-center gap-2 flex-1 sm:flex-none"
                >
                  <FaExternalLinkAlt size={14} /> Live Demo
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="mt-24 sm:mt-32 w-full flex justify-center relative z-10">
        <button
          onClick={() => setShowArchive(!showArchive)}
          className="group flex flex-col items-center gap-4 text-gray-400 hover:text-white transition-colors duration-300 focus:outline-none"
        >
          <span className="text-[10px] sm:text-xs font-bold tracking-[0.3em] uppercase transition-colors group-hover:text-cyan-400">
            {showArchive ? 'Hide Development Lab' : 'View Development Lab'}
          </span>
          <motion.div
            animate={{ rotate: showArchive ? 180 : 0 }}
            transition={{ duration: 0.4 }}
            className="w-14 h-14 rounded-full border border-cyan-500/30 flex items-center justify-center bg-[#111] group-hover:bg-cyan-500 group-hover:text-white group-hover:shadow-[0_0_20px_rgba(34,211,238,0.5)] transition-all duration-300 shadow-lg"
          >
            <FaChevronDown size={18} />
          </motion.div>
        </button>
      </div>

      {/* Archive / Image Projects */}
      <AnimatePresence>
        {showArchive && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden mt-16 sm:mt-24"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 relative z-10 pb-10 pt-4">
              {archive.map((project, idx) => (
                <div key={idx} className="bg-[#0f0f16] rounded-[1.5rem] border border-white/10 overflow-hidden group hover:-translate-y-2 transition-transform duration-500 hover:border-purple-500/40 hover:shadow-[0_0_30px_rgba(168,85,247,0.2)] flex flex-col h-full cursor-pointer relative">

                  <div className="absolute top-4 right-4 z-20 opacity-0 group-hover:opacity-100 transition-opacity bg-black/50 backdrop-blur-md p-2 rounded-full text-white pointer-events-none">
                    <FaExternalLinkAlt size={16} />
                  </div>

                  <div className="relative aspect-video w-full overflow-hidden bg-[#111]">
                    <img
                      src={project.imageSrc}
                      alt={project.title}
                      className="w-full h-full object-cover opacity-70 group-hover:opacity-100 transition-opacity duration-700 ease-out group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0f0f16] to-transparent opacity-80 group-hover:opacity-40 transition-opacity"></div>
                  </div>

                  <div className="p-6 sm:p-8 flex flex-col flex-1 relative z-10">
                    <h4 className="text-xl sm:text-2xl font-display font-bold text-white mb-2 tracking-tight group-hover:text-cyan-400 transition-colors">
                      {project.title}
                    </h4>
                    <p className="text-gray-400 font-medium text-14px sm:text-15px mb-6 leading-relaxed">
                      {project.desc}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-8 mt-auto">
                      {project.stack.map((tech, i) => (
                        <span key={i} className={`px-2.5 py-1 rounded-md border text-[10px] sm:text-[11px] font-bold tracking-widest uppercase ${getTechColor(tech)}`}>
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Entire card acts as link through absolute click overlay */}
                    <a href={project.demo} target="_blank" rel="noreferrer" className="absolute inset-0 z-10" aria-label={`View ${project.title} Demo`}></a>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Projects;