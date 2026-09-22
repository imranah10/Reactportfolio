import { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { FiGithub, FiPackage, FiZap } from 'react-icons/fi';
import useLiveStats from './useLiveStats';

/** Animated count-up when scrolled into view */
const CountUp = ({ value, duration = 1400 }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-40px' });
  const [n, setN] = useState(0);

  useEffect(() => {
    if (!inView || value == null) return undefined;
    const start = performance.now();
    let raf;
    const tick = (now) => {
      const p = Math.min(1, (now - start) / duration);
      setN(Math.round((1 - Math.pow(1 - p, 3)) * value));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, value, duration]);

  return <span ref={ref}>{n || value || 0}</span>;
};

const Card = ({ icon, label, children, delay = 0, live = false, href, cta }) => (
  <motion.a
    href={href}
    target={href ? '_blank' : undefined}
    rel={href ? 'noopener noreferrer' : undefined}
    initial={{ opacity: 0, y: 28 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: '-60px' }}
    transition={{ delay, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
    className="panel rounded-2xl p-6 sm:p-7 group relative overflow-hidden hover:border-cyan/35 transition-colors duration-300 block"
  >
    <div className="absolute -top-16 -right-16 w-40 h-40 rounded-full bg-cyan/5 blur-2xl group-hover:bg-cyan/10 transition-colors duration-500" />
    <div className="flex items-center justify-between mb-5">
      <span className="text-cyan">{icon}</span>
      {live ? (
        <span className="flex items-center gap-1.5 font-mono text-[9px] tracking-[0.2em] text-lime">
          <span className="w-1.5 h-1.5 rounded-full bg-lime animate-pulse-dot" /> LIVE
        </span>
      ) : null}
    </div>
    {children}
    {href && (
      <div className="mt-5 font-mono text-[10px] tracking-[0.2em] text-faint group-hover:text-cyan transition-colors">
        {cta} ↗
      </div>
    )}
  </motion.a>
);

const ProofStrip = () => {
  const { npmMonthly, repos } = useLiveStats();

  return (
    <section id="proof" className="relative py-20 sm:py-24">
      <div className="max-w-[1200px] mx-auto px-5 md:px-8">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="font-mono text-[10px] tracking-[0.3em] text-faint mb-6"
        >
          <span className="text-cyan">00 /</span> PROOF, NOT PROMISES — LIVE DATA
        </motion.p>

        <div className="grid sm:grid-cols-3 gap-4">
          <Card
            icon={<FiPackage size={20} />}
            label="npm"
            live
            href="https://www.npmjs.com/package/toolverse"
            cta="VIEW PACKAGE"
            delay={0}
          >
            <div className="font-display font-extrabold text-4xl sm:text-5xl tracking-tight">
              <CountUp value={npmMonthly ?? 547} />
            </div>
            <div className="mt-2 font-mono text-[11px] tracking-[0.15em] text-mute">
              DOWNLOADS / MONTH
            </div>
            <p className="mt-3 text-[13px] text-faint leading-relaxed">
              Real-time from npm registry. Package <span className="text-mute">toolverse</span> —
              254 React components + 1,052 icons × 7 variants.
            </p>
          </Card>

          <Card
            icon={<FiGithub size={20} />}
            label="GitHub"
            live
            href="https://github.com/imranah10"
            cta="VIEW PROFILE"
            delay={0.1}
          >
            <div className="font-display font-extrabold text-4xl sm:text-5xl tracking-tight">
              <CountUp value={repos ?? 70} />
            </div>
            <div className="mt-2 font-mono text-[11px] tracking-[0.15em] text-mute">
              PUBLIC REPOSITORIES
            </div>
            <p className="mt-3 text-[13px] text-faint leading-relaxed">
              Shipped in the open — from a 100+ tool platform to voice-agent SaaS experiments.
            </p>
          </Card>

          <Card
            icon={<FiZap size={20} />}
            label="Toolverse"
            live
            href="https://toolverse-official.vercel.app"
            cta="OPEN LIVE APP"
            delay={0.2}
          >
            <div className="font-display font-extrabold text-4xl sm:text-5xl tracking-tight">
              <CountUp value={56} />
            </div>
            <div className="mt-2 font-mono text-[11px] tracking-[0.15em] text-mute">
              TOOLS · 9 STUDIOS · v1.5.2
            </div>
            <p className="mt-3 text-[13px] text-faint leading-relaxed">
              100% browser-side — no uploads, no signups, no tracking. Deployed on Vercel.
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ProofStrip;
