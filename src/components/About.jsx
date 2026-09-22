import { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import SectionHeading from './SectionHeading';
import { FiFileText, FiMail } from 'react-icons/fi';

const STORY = [
  { p: '> whoami', c: 'text-cyan' },
  { p: 'Self-taught developer from India. Started with HTML curiosity — ended up shipping a 56-tool platform.', c: 'text-ink' },
  { p: '> cat philosophy.txt', c: 'text-cyan' },
  { p: '"Fast, private, browser-first. If a tool can run on the user\'s machine, it should."', c: 'text-ink' },
  { p: '> ./current_status.sh', c: 'text-cyan' },
  { p: 'Building Toolverse in public. Open to full-time & freelance.', c: 'text-lime' },
];

const Terminal = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  const [line, setLine] = useState(0);

  useEffect(() => {
    if (!inView) return undefined;
    if (line >= STORY.length) return undefined;
    const t = setTimeout(() => setLine((l) => l + 1), line === 0 ? 200 : 340);
    return () => clearTimeout(t);
  }, [inView, line]);

  return (
    <div ref={ref} className="panel rounded-2xl overflow-hidden">
      <div className="flex items-center gap-2 px-4 py-3 border-b border-line bg-surface/80">
        <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]" />
        <span className="w-2.5 h-2.5 rounded-full bg-[#febc2e]" />
        <span className="w-2.5 h-2.5 rounded-full bg-[#28c840]" />
        <span className="ml-3 font-mono text-[9px] tracking-[0.2em] text-faint">IMRAN@PORTFOLIO: ~</span>
      </div>
      <div className="p-5 sm:p-6 font-mono text-[12px] sm:text-[13px] leading-[1.9] min-h-[260px]">
        {STORY.slice(0, line).map((s, i) => (
          <p key={i} className={s.c} style={{ whiteSpace: 'pre-wrap' }}>
            {s.p}
          </p>
        ))}
        {line < STORY.length && <span className="inline-block w-2 h-4 bg-cyan/70 animate-pulse" />}
      </div>
    </div>
  );
};

const FACTS = [
  ['BASED IN', 'India · Remote-friendly'],
  ['FOCUS', 'Full Stack · AI products'],
  ['SHIPPING SINCE', '2022'],
  ['STATUS', 'Open to full-time & freelance'],
];

const About = () => (
  <section id="about" className="relative py-24 sm:py-32 border-t border-line bg-surface/30">
    <div className="max-w-[1200px] mx-auto px-5 md:px-8">
      <SectionHeading num="04" kicker="HUMAN BEHIND THE CODE" title={<>The <span className="grad-text">story</span>.</>} />

      <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-8 items-start">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <Terminal />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ delay: 0.1, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col gap-5"
        >
          <div className="panel rounded-2xl divide-y divide-[rgba(255,255,255,0.06)]">
            {FACTS.map(([k, v]) => (
              <div key={k} className="flex items-center justify-between px-5 py-4">
                <span className="font-mono text-[9px] tracking-[0.25em] text-faint">{k}</span>
                <span className="text-[13px] text-ink">{v}</span>
              </div>
            ))}
          </div>

          <p className="text-mute text-[14px] leading-relaxed px-1">
            I don't just write components — I ship products. Every project on this page is live,
            every number is real, and every tool respects the user's privacy. That's the standard
            I bring to any team.
          </p>

          <div className="flex flex-wrap gap-3 px-1">
            <a
              href="/Imran_Ahmad_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 border border-line-strong text-ink text-sm px-5 py-3 rounded-xl hover:border-cyan/50 hover:text-cyan transition-colors duration-300"
            >
              <FiFileText size={14} /> Full Resume
            </a>
            <a
              href="mailto:imranaha310@gmail.com"
              className="inline-flex items-center gap-2 border border-line-strong text-ink text-sm px-5 py-3 rounded-xl hover:border-cyan/50 hover:text-cyan transition-colors duration-300"
            >
              <FiMail size={14} /> Say hello
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

export default About;
