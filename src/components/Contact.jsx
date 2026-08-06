import React from "react";
import { FaArrowRight, FaEnvelope, FaClock, FaMapMarkerAlt, FaGithub, FaLinkedin } from "react-icons/fa";
import { motion } from "framer-motion";
import { sounds } from "../utils/sound";

const Contact = () => {
  return (
    <section id="contact" className="py-40 relative border-t border-primary/10 text-center flex flex-col items-center justify-center min-h-[60vh] max-w-[1280px] mx-auto px-5 md:px-16">
      <motion.div
        initial={{ opacity: 0, scale: 0.96 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        onViewportEnter={() => sounds.reveal()}
      >
        {/* Status badge */}
        <div className="inline-flex items-center gap-2 px-6 py-2 rounded-full border border-primary/40 bg-primary/10 font-mono text-primary mb-12 shadow-[0_0_20px_rgba(76,215,246,0.2)]">
          <span className="w-3 h-3 rounded-full bg-primary animate-pulse" />
          AVAILABLE FOR DEPLOYMENT
        </div>

        {/* Headline */}
        <h2 className="text-[clamp(2.5rem,7vw,5rem)] font-black text-text-primary mb-12 max-w-3xl leading-tight tracking-tight">
          Initialize the next protocol. <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-neon-pink">
            Let's build the future.
          </span>
        </h2>

        <p className="text-lg text-on-surface-variant mb-12 max-w-2xl">
          React & AI developer with 1 year of experience. Creator of Toolverse (100+ tools, npm package).
          Open to freelance, full-time, and collaboration opportunities.
        </p>

        {/* Contact info */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <a href="mailto:imranaha310@gmail.com"
            onMouseEnter={() => sounds.hover()} onClick={() => sounds.click()}
            className="flex items-center gap-2 px-5 py-3 rounded-xl bg-white/5 border border-white/10 font-mono text-sm text-on-surface-variant hover:border-primary/30 hover:text-primary transition-all hover:-translate-y-1">
            <FaEnvelope className="text-primary" /> imranaha310@gmail.com
          </a>
          <div className="flex items-center gap-2 px-5 py-3 rounded-xl bg-white/5 border border-white/10 font-mono text-sm text-on-surface-variant">
            <FaClock className="text-secondary" /> Available 24/7 Remote
          </div>
          <div className="flex items-center gap-2 px-5 py-3 rounded-xl bg-white/5 border border-white/10 font-mono text-sm text-on-surface-variant">
            <FaMapMarkerAlt className="text-neon-pink" /> Bihar, India
          </div>
        </div>

        {/* Socials */}
        <div className="flex gap-4 mb-12 justify-center">
          <a href="https://github.com/imranah10" target="_blank" rel="noreferrer"
            onMouseEnter={() => sounds.hover()} onClick={() => sounds.click()}
            className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-primary hover:border-primary/30 transition-all hover:-translate-y-1">
            <FaGithub />
          </a>
          <a href="https://www.linkedin.com/in/imran-ahmad-aa257520b/" target="_blank" rel="noreferrer"
            onMouseEnter={() => sounds.hover()} onClick={() => sounds.click()}
            className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-primary hover:border-primary/30 transition-all hover:-translate-y-1">
            <FaLinkedin />
          </a>
        </div>

        {/* CTA */}
        <a href="mailto:imranaha310@gmail.com"
          onMouseEnter={() => sounds.hover()} onClick={() => sounds.click()}
          className="group inline-flex items-center gap-4 px-10 py-5 bg-surface-dark hover:bg-primary/10 border-2 border-primary text-primary font-bold rounded-xl transition-all duration-300 neon-glow text-xl">
          Initialize Contact Sequence
          <FaArrowRight className="group-hover:translate-x-2 transition-transform" />
        </a>
      </motion.div>
    </section>
  );
};

export default Contact;
