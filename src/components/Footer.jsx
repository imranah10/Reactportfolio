import React from 'react';
import { motion } from 'framer-motion';
import { FaLinkedinIn, FaGithub, FaHackerrank } from 'react-icons/fa';
import { sounds } from '../utils/sound';

const Footer = () => {
  const socials = [
    { name: "LinkedIn", link: "https://www.linkedin.com/in/imran-ahmad-aa257520b/", icon: <FaLinkedinIn size={20} />, hoverColor: "hover:text-[#0A66C2] hover:border-[#0A66C2]/60" },
    { name: "GitHub", link: "https://github.com/imranah10", icon: <FaGithub size={20} />, hoverColor: "hover:text-white hover:border-white/60" },
    { name: "HackerRank", link: "https://www.hackerrank.com/profile/imranaha310", icon: <FaHackerrank size={20} />, hoverColor: "hover:text-[#00EA64] hover:border-[#00EA64]/60" },
  ];

  return (
    <footer className="relative pt-28 sm:pt-36 pb-12 px-6 sm:px-12 border-t border-white/5 flex flex-col items-center gap-12 bg-[#05050a]/90 backdrop-blur-3xl z-20 overflow-hidden text-center mt-12">
      {/* Top glow line */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent" />
      
      {/* Background text */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full text-center pointer-events-none select-none z-0 overflow-hidden">
        <h1 className="text-[clamp(2.5rem,11vw,12rem)] font-display font-black text-transparent bg-clip-text bg-gradient-to-b from-white/[0.04] to-transparent tracking-[0.1em] leading-none uppercase whitespace-nowrap">
          IMRAN AHMAD
        </h1>
      </div>

      {/* Socials */}
      <div className="relative z-10 flex gap-5 sm:gap-6">
        {socials.map((social, idx) => (
          <motion.a
            key={idx}
            href={social.link}
            target="_blank"
            rel="noreferrer"
            onMouseEnter={() => sounds.hover()}
            onClick={() => sounds.click()}
            whileHover={{ y: -4 }}
            className={`w-14 h-14 rounded-full flex items-center justify-center text-gray-400 transition-all duration-300 bg-[#08080d] border border-white/10 ${social.hoverColor}`}
            aria-label={social.name}
          >
            {social.icon}
          </motion.a>
        ))}
      </div>

      {/* Text */}
      <div className="relative z-10 flex flex-col items-center gap-4 px-4 max-w-xl">
        <h3 className="text-2xl sm:text-3xl font-display font-bold text-white tracking-tight">Stay Connected</h3>
        <p className="text-gray-400 font-medium text-sm sm:text-base leading-relaxed">
          React & AI developer. Creator of Toolverse (100+ tools). Open for freelance, full-time, and collaboration.
        </p>
      </div>

      {/* Bottom */}
      <div className="relative z-10 flex flex-col sm:flex-row justify-between w-full max-w-[1400px] items-center text-gray-500 text-[10px] sm:text-[11px] font-bold tracking-[0.2em] uppercase gap-6 mt-6 pt-8 border-t border-white/5">
        <p>© {new Date().getFullYear()} IMRAN AHMAD</p>
        <p className="flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
          BUILT WITH REACT · AI · ❤️
        </p>
      </div>
    </footer>
  );
};

export default Footer;
