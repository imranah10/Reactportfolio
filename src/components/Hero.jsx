import React from "react";
import { motion } from "framer-motion";
import pdf from "./resume.pdf";
import profileimg1 from "./images/profile1.jpg";
import { FaDownload, FaArrowRight } from "react-icons/fa";

const Hero = () => {
  return (
    <div className="relative min-h-[100vh] flex flex-col justify-center overflow-hidden px-4 sm:px-8 md:px-16 lg:px-24">
      {/* Container - flex-col on mobile, flex-row on lg */}
      <div className="w-full max-w-[1400px] mx-auto pt-32 sm:pt-40 pb-20 relative z-10 flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-8">

        {/* Left Typography Block */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="w-full lg:w-[55%] flex flex-col items-start text-left"
        >
          <div className="mb-6 sm:mb-8 inline-block px-4 py-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 backdrop-blur-md">
            <span className="text-[10px] sm:text-xs font-semibold tracking-[0.2em] uppercase text-cyan-400">
              Creative Front-End Engineer
            </span>
          </div>

          <h1 className="text-[clamp(2.5rem,7vw,6.5rem)] font-display font-bold leading-[1.05] tracking-tight mb-6 sm:mb-8 text-white">
            Building
            <br />
            Seamless <span className="text-gradient">Web</span>
            <br />
            Experiences.
          </h1>

          <p className="text-gray-400 text-base sm:text-lg md:text-xl font-body leading-relaxed max-w-lg mb-10 font-normal">
            I craft vibrant, high-performance applications focused on exceptional user flow and striking modern aesthetics.
          </p>

          <div className="flex flex-col sm:flex-row flex-wrap gap-4 sm:gap-6 w-full sm:w-auto">
            <a
              href="#projects"
              className="w-full sm:w-auto text-center px-8 py-4 rounded-full bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-display font-semibold text-sm tracking-wide uppercase transition-all duration-300 hover:shadow-[0_0_30px_rgba(6,182,212,0.5)] hover:-translate-y-1 flex items-center justify-center gap-3"
            >
              See my work <FaArrowRight />
            </a>

            <a
              href={pdf}
              target="_blank"
              rel="noreferrer"
              className="w-full sm:w-auto text-center px-8 py-4 rounded-full border border-white/20 font-display font-semibold text-sm tracking-wide uppercase text-white transition-all duration-300 hover:bg-white hover:text-black flex items-center justify-center gap-3"
            >
              <FaDownload /> Resume
            </a>
          </div>
        </motion.div>

        {/* Right Vibrant Profile Element */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="w-full lg:w-[45%] flex justify-center lg:justify-end mt-8 lg:mt-0 relative"
        >
          {/* Colorful glowing border container */}
          <div className="relative w-[clamp(260px,70vw,420px)] aspect-[4/5] rounded-[2rem] p-1 bg-gradient-to-br from-cyan-500 via-purple-500 to-pink-500 shadow-[0_0_50px_rgba(168,85,247,0.3)]">
            <div className="w-full h-full rounded-[1.8rem] overflow-hidden bg-[#111]">
              <img
                src={profileimg1}
                alt="Imran Profile"
                className="w-full h-full object-cover transition-transform duration-1000 hover:scale-110"
              />
            </div>

            {/* Super vibrant floating accent badge */}
            <div className="absolute -bottom-6 -left-6 sm:-left-12 bg-gray-900 border border-white/10 p-4 sm:p-6 rounded-2xl shadow-xl glass-panel animate-bounce" style={{ animationDuration: '4s' }}>
              <div className="text-3xl sm:text-4xl font-bold text-gradient mb-1">3+</div>
              <div className="text-[10px] sm:text-xs text-gray-400 font-semibold uppercase tracking-wider">Years Exp.</div>
            </div>
          </div>
        </motion.div>

      </div>
    </div>
  );
};

export default Hero;
