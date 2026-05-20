import React from 'react';
import { motion } from 'framer-motion';
import { FaLinkedinIn, FaGithub, FaHackerrank } from 'react-icons/fa';
import { FiCpu, FiServer, FiActivity } from 'react-icons/fi';

const Footer = () => {
  const socials = [
    { 
      name: "LinkedIn", 
      link: "https://www.linkedin.com/in/imran-ahmad-aa257520b/", 
      icon: <FaLinkedinIn size={22} />, 
      hoverColor: "hover:text-[#0A66C2] hover:shadow-[0_0_25px_#0A66C2] hover:border-[#0A66C2]/60",
      ledColor: "bg-[#0A66C2]"
    },
    { 
      name: "GitHub", 
      link: "https://github.com/imranah10", 
      icon: <FaGithub size={22} />, 
      hoverColor: "hover:text-purple-400 hover:shadow-[0_0_25px_#c084fc] hover:border-purple-400/60",
      ledColor: "bg-purple-500"
    },
    { 
      name: "HackerRank", 
      link: "https://www.hackerrank.com/profile/imranaha310", 
      icon: <FaHackerrank size={22} />, 
      hoverColor: "hover:text-[#00EA64] hover:shadow-[0_0_25px_#00EA64] hover:border-[#00EA64]/60",
      ledColor: "bg-[#00EA64]"
    }
  ];

  return (
    <footer className="relative pt-28 sm:pt-36 pb-12 px-6 sm:px-12 border-t border-white/10 flex flex-col items-center gap-12 bg-[#05050a]/90 backdrop-blur-3xl z-20 overflow-hidden text-center mt-12">

      {/* Decorative Sci-Fi Layout Crosshairs */}
      <div className="absolute top-4 left-6 text-gray-700 font-mono text-[9px] select-none pointer-events-none hidden md:block">SYS // LAT.SECURE</div>
      <div className="absolute top-4 right-6 text-gray-700 font-mono text-[9px] select-none pointer-events-none hidden md:block">GRID.LOCK // 2026</div>

      {/* Radiant Glowing Border on Top with dynamic sweep */}
      <div className="absolute top-0 left-0 w-full h-[1.5px] bg-gradient-to-r from-transparent via-purple-500 to-transparent opacity-60"></div>
      
      {/* Massive Background Text optimized for small viewports to never overflow layout bounds */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full text-center pointer-events-none select-none z-0 overflow-hidden">
        <h1 className="text-[clamp(2.5rem,11vw,12rem)] font-display font-black text-transparent bg-clip-text bg-gradient-to-b from-white/[0.04] to-transparent tracking-[0.1em] sm:tracking-[0.15em] leading-none uppercase whitespace-nowrap">
          IMRAN AHMAD
        </h1>
      </div>

      {/* Social Nodes */}
      <div className="relative z-10 flex gap-5 sm:gap-6">
        {socials.map((social, idx) => (
          <motion.a
            key={idx}
            href={social.link}
            target="_blank"
            rel="noreferrer"
            className={`w-14 h-14 sm:w-16 sm:h-16 rounded-full flex items-center justify-center text-gray-400 transition-all duration-300 group hover:-translate-y-2 bg-[#08080d] border border-white/10 relative overflow-hidden ${social.hoverColor}`}
            aria-label={social.name}
          >
            {/* Ambient status bulb inside button */}
            <span className={`absolute top-2 right-2 w-1 h-1 rounded-full ${social.ledColor} opacity-30 group-hover:opacity-100 group-hover:animate-ping transition-all duration-300`}></span>
            
            <div className="group-hover:scale-110 transition-transform duration-300 z-10">
              {social.icon}
            </div>
          </motion.a>
        ))}
      </div>

      {/* Stay Connected Content */}
      <div className="relative z-10 flex flex-col items-center gap-4 px-4 max-w-xl">
        <h3 className="text-2xl sm:text-3xl font-display font-bold text-white tracking-tight">Stay Connected</h3>
        <p className="text-gray-400 font-medium text-sm sm:text-base leading-relaxed">
          Building state-of-the-art interactive solutions. Open for contract opportunities, technical architectural advisory, and global remote collaborations.
        </p>
      </div>

      {/* Technical Telemetry Dashboard Panel */}
      <div className="relative z-10 w-full max-w-[1000px] p-6 rounded-2xl bg-[#08080f]/75 border border-white/5 font-mono text-[9px] sm:text-[10px] text-gray-500 shadow-md">
        <div className="flex flex-wrap justify-center items-center gap-x-8 gap-y-3 font-semibold">
          <span className="flex items-center gap-1.5 uppercase">
            <FiCpu className="text-cyan-400" />
            <span>RENDER ENGINE:</span>
            <span className="text-gray-300">REACT 18.x / VITE / TAILWIND</span>
          </span>
          <span className="h-3 w-[1px] bg-white/10 hidden sm:block"></span>
          <span className="flex items-center gap-1.5 uppercase">
            <FiServer className="text-purple-400" />
            <span>SYSTEM METRIC:</span>
            <span className="text-gray-300">100% RESPONSIVE GRID</span>
          </span>
          <span className="h-3 w-[1px] bg-white/10 hidden sm:block"></span>
          <span className="flex items-center gap-1.5 uppercase">
            <FiActivity className="text-pink-400" />
            <span>THEME MATRIX:</span>
            <span className="text-gray-300">NEON CHROMATIC HUD</span>
          </span>
        </div>
      </div>

      {/* Bottom copyright segment */}
      <div className="relative z-10 flex flex-col sm:flex-row justify-between w-full max-w-[1400px] items-center text-gray-500 text-[10px] sm:text-[11px] font-bold tracking-[0.2em] uppercase gap-6 mt-6 pt-8 border-t border-white/5">
        <p>© {new Date().getFullYear()} IMRAN AHMAD. ALL RIGHTS RESERVED.</p>
        <p>
          <a href="https://github.com/imranah10" target="_blank" rel="noreferrer" className="hover:text-cyan-400 transition-colors duration-300 group flex items-center gap-2">
            ENGINEERED BY <span className="text-white group-hover:text-purple-400 transition-all duration-300">IMRAN</span>
          </a>
        </p>
      </div>

    </footer>
  );
};

export default Footer;
