import { useState } from 'react';
import { motion } from 'framer-motion';
import { FiMail, FiCopy, FiCheck, FiGithub, FiLinkedin, FiArrowUpRight } from 'react-icons/fi';

const EMAIL = 'imranaha310@gmail.com';

const Contact = () => {
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      window.location.href = `mailto:${EMAIL}`;
    }
  };

  return (
    <section id="contact" className="relative py-28 sm:py-40 border-t border-line overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-60" aria-hidden="true" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[560px] h-[560px] rounded-full bg-cyan/[0.05] blur-[120px]" aria-hidden="true" />

      <div className="max-w-[1200px] mx-auto px-5 md:px-8 relative text-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7 }}
          className="inline-flex items-center gap-2.5 font-mono text-[10px] tracking-[0.25em] text-lime border border-lime/25 bg-lime/5 rounded-full px-4 py-2 mb-10"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-lime animate-pulse-dot" />
          AVAILABLE FOR DEPLOYMENT
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ delay: 0.1, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="font-display font-extrabold tracking-tight leading-[1.02] text-[clamp(2.6rem,8vw,5.5rem)] mb-6"
        >
          Let's build something
          <br />
          <span className="grad-text">worth shipping.</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.25, duration: 0.7 }}
          className="text-mute max-w-[520px] mx-auto mb-12 text-[15px] leading-relaxed"
        >
          Full-time roles, freelance builds, or wild ideas — my inbox is open and I reply fast.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.35, duration: 0.7 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-14"
        >
          <a
            href={`mailto:${EMAIL}`}
            className="inline-flex items-center gap-2.5 bg-ink text-bg font-semibold text-sm px-7 py-4 rounded-xl hover:bg-cyan transition-colors duration-300"
          >
            <FiMail size={16} /> {EMAIL}
          </a>
          <button
            onClick={copyEmail}
            className="inline-flex items-center gap-2.5 border border-line-strong text-ink text-sm px-6 py-4 rounded-xl hover:border-cyan/50 hover:text-cyan transition-colors duration-300"
            aria-live="polite"
          >
            {copied ? <FiCheck size={16} className="text-lime" /> : <FiCopy size={16} />}
            {copied ? 'COPIED!' : 'COPY EMAIL'}
          </button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.45, duration: 0.7 }}
          className="flex items-center justify-center gap-4"
        >
          {[
            { icon: <FiGithub size={18} />, href: 'https://github.com/imranah10', label: 'GitHub' },
            { icon: <FiLinkedin size={18} />, href: 'https://www.linkedin.com/in/imran-ahmad-aa257520b', label: 'LinkedIn' },
            { icon: <FiArrowUpRight size={18} />, href: 'https://toolverse-official.vercel.app', label: 'Toolverse' },
          ].map((s) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={s.label}
              className="w-12 h-12 rounded-xl panel flex items-center justify-center text-mute hover:text-cyan hover:border-cyan/40 hover:-translate-y-1 transition-all duration-300"
            >
              {s.icon}
            </a>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
