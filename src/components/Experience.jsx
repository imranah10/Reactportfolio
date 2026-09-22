import { motion } from 'framer-motion';
import SectionHeading from './SectionHeading';

const ITEMS = [
  {
    role: 'Full Stack Developer → Independent AI Builder',
    org: 'MyVirtualMate',
    meta: 'REMOTE · AUSTRALIAN COMPANY',
    period: 'Aug 2025 — Nov 2025',
    desc: 'Built and shipped product surfaces for a live AI-companion platform: presentation site, resume screener and marketing pages.',
    current: true,
  },
  {
    role: 'Web Developer Intern',
    org: 'CDC, BHU Varanasi',
    meta: 'ON-SITE · BANARAS',
    period: 'Jan 2024 — Mar 2024',
    desc: 'Hands-on web development inside a university career-development environment.',
  },
  {
    role: 'Internship',
    org: 'Navi Mumbai, Maharashtra',
    meta: 'ON-SITE',
    period: 'Apr 2022 — Jun 2022',
    desc: 'Foundation phase — real team workflows, deadlines and delivery discipline.',
  },
  {
    role: 'Training',
    org: 'Salt Lake, Kolkata',
    meta: 'ON-SITE',
    period: 'Mar 2022 — Dec 2022',
    desc: 'Structured engineering training — programming fundamentals to deployment.',
  },
];

const Experience = () => (
  <section id="experience" className="relative py-24 sm:py-32 border-t border-line bg-surface/30">
    <div className="max-w-[1200px] mx-auto px-5 md:px-8">
      <SectionHeading num="02" kicker="CAREER TIMELINE" title={<>Where I've <span className="grad-text">worked</span>.</>} />

      <div className="relative">
        {/* vertical line */}
        <div className="absolute left-[7px] sm:left-[9px] top-2 bottom-2 w-px bg-line" aria-hidden="true" />

        <div className="flex flex-col gap-10">
          {ITEMS.map((it, i) => (
            <motion.div
              key={it.role}
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ delay: i * 0.06, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="relative pl-9 sm:pl-12"
            >
              {/* node */}
              <span
                className={`absolute left-0 top-2 w-[15px] h-[15px] sm:w-[19px] sm:h-[19px] rounded-full border-2 flex items-center justify-center ${
                  it.current ? 'border-lime bg-bg' : 'border-line-strong bg-bg'
                }`}
                aria-hidden="true"
              >
                {it.current && <span className="w-1.5 h-1.5 rounded-full bg-lime animate-pulse-dot" />}
              </span>

              <div className="panel rounded-2xl p-5 sm:p-6 hover:border-cyan/25 transition-colors duration-300">
                <div className="flex flex-wrap items-baseline justify-between gap-2 mb-1.5">
                  <h3 className="font-display font-bold text-lg sm:text-xl tracking-tight">
                    {it.role}
                  </h3>
                  <span className="font-mono text-[10px] tracking-[0.15em] text-cyan">
                    {it.period}
                  </span>
                </div>
                <p className="font-mono text-[10px] tracking-[0.2em] text-mute mb-3">
                  {it.org} <span className="text-faint">· {it.meta}</span>
                </p>
                <p className="text-[13px] text-mute leading-relaxed max-w-[640px]">{it.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default Experience;
