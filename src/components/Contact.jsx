import React from "react";
import { FaArrowRight, FaEnvelope, FaClock, FaMapMarkerAlt, FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { motion } from "framer-motion";
import { sounds } from "../utils/sound";

const Contact = () => {
  return (
    <div id="contact" className="py-16 sm:py-24 px-6 md:px-12 max-w-[1400px] mx-auto text-center z-10 relative">

      <motion.div
        initial={{ opacity: 0, scale: 0.96 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        onViewportEnter={() => sounds.reveal()}
        className="bg-[#0b0b12]/80 backdrop-blur-2xl py-14 sm:py-20 px-6 sm:px-12 rounded-[2.5rem] sm:rounded-[3.5rem] relative overflow-hidden group border border-purple-500/20 shadow-[0_0_60px_rgba(168,85,247,0.08)] transition-all duration-700 hover:border-cyan-500/40 hover:shadow-[0_0_80px_rgba(6,182,212,0.18)]"
      >
        {/* Corner brackets */}
        <div className="absolute top-8 left-8 w-8 h-8 border-t-2 border-l-2 border-white/5 group-hover:border-cyan-500/30 transition-colors duration-500 hidden sm:block" />
        <div className="absolute top-8 right-8 w-8 h-8 border-t-2 border-r-2 border-white/5 group-hover:border-purple-500/30 transition-colors duration-500 hidden sm:block" />
        <div className="absolute bottom-8 left-8 w-8 h-8 border-b-2 border-l-2 border-white/5 group-hover:border-purple-500/30 transition-colors duration-500 hidden sm:block" />
        <div className="absolute bottom-8 right-8 w-8 h-8 border-b-2 border-r-2 border-white/5 group-hover:border-cyan-500/30 transition-colors duration-500 hidden sm:block" />

        {/* Glows */}
        <div className="absolute top-0 right-0 w-80 h-80 bg-cyan-500/10 rounded-full blur-[90px] pointer-events-none group-hover:bg-cyan-500/20 transition-all duration-700" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-purple-500/10 rounded-full blur-[90px] pointer-events-none group-hover:bg-purple-500/20 transition-all duration-700" />

        <div className="relative z-10 flex flex-col items-center">
          
          {/* Status badge */}
          <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full border border-cyan-500/30 mb-8 bg-cyan-500/10 backdrop-blur-md">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-400" />
            </span>
            <span className="text-[10px] sm:text-xs font-mono font-bold tracking-[0.25em] uppercase text-cyan-400">
              Available for Work
            </span>
          </div>

          <h2 className="text-[clamp(2.5rem,7vw,6.5rem)] leading-[1.05] font-display font-extrabold tracking-tight text-white mb-6">
            Let's build <br />
            the <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500">future.</span>
          </h2>

          <p className="text-base sm:text-lg md:text-xl text-gray-300 mb-12 max-w-2xl mx-auto font-body font-normal px-4 leading-relaxed">
            React & AI developer with 9 months of experience. Creator of Toolverse (100+ tools, npm package). 
            Open to freelance, full-time, and collaboration opportunities.
          </p>

          {/* Contact info cards */}
          <div className="flex flex-wrap justify-center gap-4 sm:gap-6 mb-12 max-w-xl mx-auto">
            <a href="mailto:imranaha310@gmail.com"
              onMouseEnter={() => sounds.hover()} onClick={() => sounds.click()}
              className="flex items-center gap-2 px-5 py-3 rounded-xl bg-white/5 border border-white/10 font-mono text-xs text-gray-400 hover:border-cyan-500/30 hover:text-cyan-400 transition-all duration-300 hover:-translate-y-1">
              <FaEnvelope className="text-cyan-400" />
              <span>imranaha310@gmail.com</span>
            </a>
            <div className="flex items-center gap-2 px-5 py-3 rounded-xl bg-white/5 border border-white/10 font-mono text-xs text-gray-400">
              <FaClock className="text-purple-400" />
              <span>Available 24/7 Remote</span>
            </div>
            <div className="flex items-center gap-2 px-5 py-3 rounded-xl bg-white/5 border border-white/10 font-mono text-xs text-gray-400">
              <FaMapMarkerAlt className="text-pink-400" />
              <span>Bihar, India</span>
            </div>
          </div>

          {/* Social links */}
          <div className="flex gap-4 mb-10">
            {[
              { icon: <FaGithub />, href: "https://github.com/imranah10", color: "hover:text-white" },
              { icon: <FaLinkedin />, href: "#", color: "hover:text-blue-400" },
              { icon: <FaTwitter />, href: "#", color: "hover:text-cyan-400" },
            ].map((social, i) => (
              <a key={i} href={social.href} target="_blank" rel="noreferrer"
                onMouseEnter={() => sounds.hover()} onClick={() => sounds.click()}
                className={`w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 ${social.color} transition-all duration-300 hover:-translate-y-1 hover:border-white/30`}>
                {social.icon}
              </a>
            ))}
          </div>

          {/* CTA button */}
          <a href="mailto:imranaha310@gmail.com"
            onMouseEnter={() => sounds.hover()} onClick={() => sounds.click()}
            className="group/btn px-10 py-5 rounded-full bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-display text-sm font-bold tracking-[0.25em] uppercase transition-all duration-500 flex items-center justify-center gap-4 shadow-[0_0_35px_rgba(168,85,247,0.4)] hover:shadow-[0_0_55px_rgba(6,182,212,0.6)] hover:-translate-y-1 relative overflow-hidden">
            <span className="absolute top-0 -left-[100%] w-[50%] h-full bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-[30deg] transition-all duration-1000 group-hover/btn:left-[150%]" />
            <span>Get in touch</span>
            <FaArrowRight size={14} className="group-hover/btn:translate-x-1 transition-transform duration-300" />
          </a>
        </div>

        {/* Grid overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.01)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.01)_1px,transparent_1px)] bg-[size:30px_30px] pointer-events-none" />
      </motion.div>
    </div>
  );
};

export default Contact;
