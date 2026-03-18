import React from "react";
import { FaArrowRight } from "react-icons/fa";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <div id="contact" className="py-24 sm:py-32 md:py-40 px-4 md:px-12 max-w-[1400px] mx-auto text-center z-10 relative">

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        className="bg-[#0f0f16]/80 backdrop-blur-2xl py-20 sm:py-24 md:py-32 px-4 rounded-[2rem] sm:rounded-[3rem] relative overflow-hidden group border border-purple-500/20 shadow-[0_0_50px_rgba(168,85,247,0.1)] transition-all duration-700 hover:border-cyan-500/40 hover:shadow-[0_0_80px_rgba(6,182,212,0.2)]"
      >
        {/* Internal Vibrant Ambient Glows */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/10 rounded-full blur-[80px] pointer-events-none group-hover:bg-cyan-500/20 transition-colors duration-700"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-500/10 rounded-full blur-[80px] pointer-events-none group-hover:bg-purple-500/20 transition-colors duration-700"></div>

        <div className="relative z-10 flex flex-col items-center">
          <div className="inline-block px-4 py-2 rounded-full border border-cyan-500/30 mb-8 sm:mb-10 bg-cyan-500/10">
            <span className="text-[10px] sm:text-xs font-bold tracking-[0.3em] uppercase text-cyan-400">
              Project Inquiries
            </span>
          </div>

          <h2 className="text-[clamp(3rem,8vw,7.5rem)] leading-[1] font-display font-extrabold tracking-tight text-white mb-6 sm:mb-8">
            Let's build <br />
            the <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500">future.</span>
          </h2>

          <p className="text-base sm:text-lg md:text-xl text-gray-400 mb-12 sm:mb-16 max-w-2xl mx-auto font-body font-medium px-4">
            Available for freelance opportunities and innovative front-end collaborations. Let's create something incredibly vibrant together.
          </p>

          <div className="flex justify-center flex-col sm:flex-row gap-6 w-full sm:w-auto px-6 sm:px-0">
            <a
              href="mailto:imranaha310@gmail.com"
              className="group/btn w-full sm:w-auto px-10 py-5 rounded-full bg-gradient-to-r from-cyan-500 hover:from-cyan-400 to-purple-600 hover:to-purple-500 text-white font-display text-sm font-bold tracking-[0.2em] uppercase transition-all duration-500 flex items-center justify-center gap-4 shadow-[0_0_30px_rgba(168,85,247,0.4)] hover:shadow-[0_0_50px_rgba(6,182,212,0.6)] hover:-translate-y-1"
            >
              Get in touch
              <span className="transform group-hover/btn:translate-x-1 transition-transform duration-300">
                <FaArrowRight size={14} />
              </span>
            </a>
          </div>
        </div>
      </motion.div>

    </div>
  );
};

export default Contact;
