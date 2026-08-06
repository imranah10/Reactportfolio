import React from 'react';
import { motion } from 'framer-motion';
import { sounds } from '../utils/sound';

const StoryReveal = () => {
  return (
    <section className="py-32 relative border-t border-primary/10 overflow-hidden">
      <div className="max-w-5xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          onViewportEnter={() => sounds.reveal()}
          className="glass-panel border-primary/30 rounded-2xl p-8 relative shadow-[0_0_50px_rgba(76,215,246,0.1)]"
        >
          {/* Top gradient line */}
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary to-transparent opacity-50" />

          {/* Corner brackets */}
          <div className="corner-bracket corner-tl" />
          <div className="corner-bracket corner-tr" />
          <div className="corner-bracket corner-bl" />
          <div className="corner-bracket corner-br" />

          {/* Terminal header */}
          <div className="flex items-center justify-between border-b border-primary/20 pb-4 mb-8">
            <div className="flex items-center gap-3">
              <div className="w-3 h-3 rounded-full bg-error animate-pulse" />
              <div className="w-3 h-3 rounded-full bg-tertiary animate-pulse" style={{ animationDelay: '0.1s' }} />
              <div className="w-3 h-3 rounded-full bg-primary animate-pulse" style={{ animationDelay: '0.2s' }} />
            </div>
            <div className="font-mono text-primary/70 text-xs tracking-widest">SYS.LOG // GENESIS_PROTOCOL</div>
          </div>

          {/* Terminal content */}
          <div className="space-y-8 font-mono text-lg text-on-surface-variant relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="flex gap-4"
            >
              <span className="text-primary select-none">&gt;</span>
              <p className="border-r-2 border-primary pr-2 animate-[blink_0.75s_step-end_infinite] overflow-hidden">
                I started as a self-taught developer, building web apps and landing pages.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
              className="flex gap-4"
            >
              <span className="text-primary select-none">&gt;</span>
              <p className="text-on-surface-variant">It was fine, but it wasn't the future.</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 1.0 }}
              className="flex gap-4"
            >
              <span className="text-primary select-none">&gt;</span>
              <p className="border-l-2 border-primary/30 pl-4 py-2 bg-primary/5">
                Then I discovered <span className="text-primary font-bold">AI tools</span> and{" "}
                <span className="text-neon-pink font-bold">automation</span>. Suddenly, the browser wasn't just a document viewer anymore; it was a portal to other worlds.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 1.4 }}
              className="flex gap-4"
            >
              <span className="text-primary select-none">&gt;</span>
              <p className="text-text-primary text-xl font-bold tracking-wide mt-4">
                Now, I build experiences that blur the line between software and cinema.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 1.8 }}
              className="flex gap-4"
            >
              <span className="text-primary animate-pulse select-none">_</span>
            </motion.div>
          </div>

          {/* Holographic overlay */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden rounded-2xl">
            <div className="scanline" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200%] h-[200%] bg-[radial-gradient(ellipse_at_center,rgba(76,215,246,0.05)_0%,transparent_70%)] animate-[spin_60s_linear_infinite]" />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default StoryReveal;
