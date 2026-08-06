import React from 'react';
import { motion } from 'framer-motion';
import { FaLinkedinIn, FaGithub, FaHackerrank } from 'react-icons/fa';
import { sounds } from '../utils/sound';

const Footer = () => {
  const socials = [
    { name: "LinkedIn", link: "https://www.linkedin.com/in/imran-ahmad-aa257520b/", icon: <FaLinkedinIn size={18} /> },
    { name: "GitHub", link: "https://github.com/imranah10", icon: <FaGithub size={18} /> },
    { name: "HackerRank", link: "https://www.hackerrank.com/profile/imranaha310", icon: <FaHackerrank size={18} /> },
  ];

  return (
    <footer className="relative w-full overflow-hidden pt-32 pb-12 border-t border-primary/20 bg-surface-container-lowest/80 backdrop-blur-md flex flex-col items-center">
      {/* Giant background text */}
      <div className="font-black text-surface-container-highest/10 absolute -bottom-16 left-0 select-none text-[clamp(4rem,15vw,16rem)] leading-none tracking-tighter w-full text-center pointer-events-none whitespace-nowrap">
        IMRAN AHMAD
      </div>

      {/* Social links */}
      <div className="relative z-10 flex gap-5 mb-8">
        {socials.map((social, idx) => (
          <motion.a
            key={idx}
            href={social.link}
            target="_blank"
            rel="noreferrer"
            onMouseEnter={() => sounds.hover()}
            onClick={() => sounds.click()}
            whileHover={{ y: -4 }}
            className="w-12 h-12 rounded-full flex items-center justify-center text-on-surface-variant transition-all bg-surface-dark border border-white/10 hover:text-tertiary hover:border-tertiary/60"
            aria-label={social.name}
          >
            {social.icon}
          </motion.a>
        ))}
      </div>

      {/* Text */}
      <div className="relative z-10 flex flex-col items-center gap-4 px-4 max-w-xl mb-8">
        <h3 className="text-xl font-bold text-text-primary">Stay Connected</h3>
        <p className="text-on-surface-variant text-sm leading-relaxed">
          React & AI developer. Creator of Toolverse (100+ tools, npm package).
          Open for freelance, full-time, and collaboration.
        </p>
      </div>

      {/* Bottom */}
      <div className="relative z-10 flex flex-col sm:flex-row justify-between w-full max-w-[1280px] items-center text-gray-500 text-xs font-mono tracking-widest uppercase gap-4 px-8 pt-8 border-t border-white/5">
        <p>© 2026 IMRAN AHMAD // NEURAL INTERFACE v2.0</p>
        <p className="flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
          BUILT WITH REACT · AI
        </p>
      </div>
    </footer>
  );
};

export default Footer;
