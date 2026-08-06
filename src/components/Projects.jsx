import React, { useState } from 'react';
import projects from './data/projects.json';
import { motion, AnimatePresence } from 'framer-motion';
import { FaExternalLinkAlt, FaGithub, FaChevronDown } from 'react-icons/fa';
import { sounds } from '../utils/sound';

const Projects = () => {
  const [showArchive, setShowArchive] = useState(false);
  const projectList = projects || [];
  const featured = projectList.slice(0, 4);
  const archive = projectList.slice(4);

  const getTechColor = (tech) => {
    const t = tech.toLowerCase();
    if (t.includes('react') || t.includes('tailwind') || t.includes('typescript')) return 'text-primary border-primary/30 bg-primary/5';
    if (t.includes('node') || t.includes('mongo')) return 'text-green-400 border-green-400/30 bg-green-400/5';
    if (t.includes('next') || t.includes('three')) return 'text-tertiary border-tertiary/30 bg-tertiary/5';
    if (t.includes('framer') || t.includes('lovable')) return 'text-neon-pink border-neon-pink/30 bg-neon-pink/5';
    if (t.includes('firebase')) return 'text-yellow-400 border-yellow-400/30 bg-yellow-400/5';
    if (t.includes('babel') || t.includes('tensorflow')) return 'text-secondary border-secondary/30 bg-secondary/5';
    return 'text-secondary border-secondary/30 bg-secondary/5';
  };

  const borderColor = (idx) => {
    const colors = ['primary', 'tertiary', 'neon-pink', 'primary'];
    return colors[idx % 4];
  };

  return (
    <section id="projects" className="py-32 relative border-t border-primary/10 max-w-[1280px] mx-auto px-5 md:px-16">
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        onViewportEnter={() => sounds.reveal()}
        className="text-4xl md:text-6xl font-black text-primary mb-16 text-center tracking-tight"
      >
        Featured Deployments
      </motion.h2>

      {/* Featured Projects */}
      <div className="space-y-24 mb-32">
        {featured.map((project, idx) => {
          const bc = borderColor(idx);
          return (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.8, delay: 0.1 }}
              onViewportEnter={() => sounds.reveal()}
              className={`flex flex-col ${idx % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-12 items-center group`}
            >
              {/* Details card */}
              <div
                onMouseEnter={() => sounds.hover()}
                className={`flex-1 glass-panel p-8 rounded-2xl border-${bc}/30 relative overflow-hidden group w-full`}
              >
                <div className={`absolute inset-0 bg-gradient-to-br from-${bc}/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                <div className="scanline" />
                <div className="corner-bracket corner-tl" />
                <div className="corner-bracket corner-tr" />
                <div className="corner-bracket corner-bl" />
                <div className="corner-bracket corner-br" />
                <h3 className="text-3xl md:text-5xl font-black text-text-primary mb-4 relative z-10">{project.title}</h3>
                <p className="text-on-surface-variant text-lg mb-8 relative z-10 leading-relaxed">{project.desc}</p>
                <div className="flex flex-wrap gap-3 relative z-10 mb-8">
                  {project.stack.map((tech, i) => (
                    <span key={i} className={`text-sm font-mono px-3 py-1 rounded border ${getTechColor(tech)}`}>{tech}</span>
                  ))}
                </div>
                <div className="flex gap-4 relative z-10">
                  <a href={project.demo} target="_blank" rel="noreferrer"
                    onClick={() => sounds.click()} onMouseEnter={() => sounds.hover()}
                    className="px-6 py-3 border border-primary text-primary font-mono text-sm uppercase tracking-widest hover:bg-primary/10 transition-colors flex items-center gap-2">
                    <FaExternalLinkAlt size={12} /> Live Demo
                  </a>
                  <a href={project.source} target="_blank" rel="noreferrer"
                    onClick={() => sounds.click()} onMouseEnter={() => sounds.hover()}
                    className="px-6 py-3 border border-outline-variant text-text-muted font-mono text-sm uppercase tracking-widest hover:border-text-muted hover:text-on-surface transition-colors flex items-center gap-2">
                    <FaGithub size={12} /> Code
                  </a>
                </div>
              </div>

              {/* Media viewport */}
              <div className={`flex-1 w-full aspect-video glass-panel rounded-2xl border-${bc}/20 p-2 neon-glow`}>
                {project.videoSrc ? (
                  <video src={project.videoSrc} autoPlay loop muted playsInline
                    className="w-full h-full object-cover rounded-xl opacity-80 group-hover:opacity-100 transition-opacity duration-700" />
                ) : project.imageSrc ? (
                  <img src={project.imageSrc} alt={project.title}
                    className="w-full h-full object-cover rounded-xl opacity-80 group-hover:opacity-100 transition-opacity duration-700 group-hover:scale-105" />
                ) : (
                  <div className="w-full h-full bg-surface-dark rounded-xl border border-primary/10 flex items-center justify-center font-mono text-primary/50">
                    [ 3D RENDER VIEWPORT ]
                  </div>
                )}
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Archive toggle */}
      <div className="w-full flex justify-center mb-16">
        <button
          onClick={() => { setShowArchive(!showArchive); sounds.click(); }}
          onMouseEnter={() => sounds.hover()}
          className="group flex flex-col items-center gap-4 text-on-surface-variant hover:text-primary transition-colors"
        >
          <span className="text-xs font-bold tracking-[0.3em] uppercase">{showArchive ? 'Hide Archive' : 'System Archive'}</span>
          <motion.div animate={{ rotate: showArchive ? 180 : 0 }} transition={{ duration: 0.4 }}
            className="w-14 h-14 rounded-full border border-primary/30 flex items-center justify-center group-hover:bg-primary group-hover:text-surface-dark transition-all">
            <FaChevronDown size={18} />
          </motion.div>
        </button>
      </div>

      {/* Archive grid */}
      <AnimatePresence>
        {showArchive && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.8 }}
            className="overflow-hidden"
          >
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {archive.map((project, idx) => (
                <a key={idx} href={project.demo} target="_blank" rel="noreferrer"
                  onClick={() => sounds.click()} onMouseEnter={() => sounds.hover()}
                  className="glass-panel p-6 rounded-xl border-outline-variant/30 hover:border-primary/50 transition-all hover:-translate-y-1 group block">
                  <div className="font-mono text-sm text-text-primary group-hover:text-primary">{project.title}</div>
                  <div className="text-xs text-on-surface-variant mt-2">{project.stack[0]}</div>
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Projects;
