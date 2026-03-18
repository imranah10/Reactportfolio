import React from 'react';
import { motion } from 'framer-motion';
import { FaLinkedinIn, FaGithub, FaHackerrank } from 'react-icons/fa';

const Footer = () => {
  const socials = [
    { name: "LinkedIn", link: "https://www.linkedin.com/in/imran-ahmad-aa257520b/", icon: <FaLinkedinIn size={22} />, hoverColor: "hover:text-[#0A66C2] hover:shadow-[0_0_20px_#0A66C2] hover:border-[#0A66C2]" },
    { name: "GitHub", link: "https://github.com/imranah10", icon: <FaGithub size={22} />, hoverColor: "hover:text-purple-400 hover:shadow-[0_0_20px_#c084fc] hover:border-purple-400" },
    { name: "HackerRank", link: "https://www.hackerrank.com/profile/imranaha310", icon: <FaHackerrank size={22} />, hoverColor: "hover:text-[#00EA64] hover:shadow-[0_0_20px_#00EA64] hover:border-[#00EA64]" }
  ];

  return (
    <footer className="relative pt-24 sm:pt-32 pb-12 px-6 sm:px-8 border-t border-white/10 flex flex-col items-center gap-10 sm:gap-12 bg-[#05050a]/80 backdrop-blur-2xl z-20 overflow-hidden text-center mt-10">

      {/* Radiant Glowing Border on Top */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-purple-500 to-transparent opacity-50"></div>

      {/* Massive Background Text for Empty Space Grander - Vibrant Opacity */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full text-center pointer-events-none select-none z-0 overflow-hidden">
        <h1 className="text-[clamp(3rem,15vw,18rem)] font-display font-black text-transparent bg-clip-text bg-gradient-to-b from-white/[0.08] to-transparent tracking-tighter leading-none whitespace-nowrap">
          IMRAN AHMAD
        </h1>
      </div>

      <div className="relative z-10 flex gap-4 sm:gap-6">
        {socials.map((social, idx) => (
          <motion.a
            key={idx}
            href={social.link}
            target="_blank"
            rel="noreferrer"
            className={`w-14 h-14 sm:w-16 sm:h-16 rounded-full flex items-center justify-center text-gray-400 transition-all duration-300 group hover:-translate-y-2 bg-[#0a0a0f] border border-white/10 ${social.hoverColor}`}
            aria-label={social.name}
          >
            <div className="group-hover:scale-110 transition-transform duration-300">
              {social.icon}
            </div>
          </motion.a>
        ))}
      </div>

      <div className="relative z-10 flex flex-col items-center gap-4 px-4">
        <h3 className="text-2xl sm:text-3xl font-display font-bold text-white tracking-tight">Stay Connected</h3>
        <p className="text-gray-400 font-medium text-sm sm:text-base max-w-md leading-relaxed">
          Building digital products, brands, and vibrant experiences. Always open to discussing new engineering possibilities.
        </p>
      </div>

      <div className="relative z-10 flex flex-col sm:flex-row justify-between w-full max-w-[1400px] items-center text-gray-500 text-[10px] sm:text-[11px] font-bold tracking-[0.2em] uppercase gap-6 mt-12 sm:mt-16 pt-8 border-t border-white/5">
        <p>© {new Date().getFullYear()} IMRAN AHMAD</p>
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
