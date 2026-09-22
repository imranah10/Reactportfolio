import { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  FiMail, FiCopy, FiCheck, FiGithub, FiLinkedin, FiArrowUpRight,
  FiSend, FiUser, FiAtSign, FiMessageSquare, FiLoader,
} from 'react-icons/fi';
import { SiX } from 'react-icons/si';

const EMAIL = 'imranaha310@gmail.com';
const FORM_ENDPOINT = 'https://formsubmit.co/ajax/imranaha310@gmail.com';
const FORM_CLASSIC = 'https://formsubmit.co/imranaha310@gmail.com';

const TOPICS = [
  { value: 'HR / Recruiter', label: 'HR / Recruiter — hiring' },
  { value: 'Client — Project', label: 'Client — project enquiry' },
  { value: 'Collaboration', label: 'Collaboration / content' },
  { value: 'Something else', label: 'Something else' },
];

const SOCIALS = [
  { icon: <FiGithub size={18} />, href: 'https://github.com/imranah10', label: 'GitHub' },
  { icon: <SiX size={16} />, href: 'https://x.com/ImranAhama49612', label: 'X (Twitter)' },
  { icon: <FiLinkedin size={18} />, href: 'https://www.linkedin.com/in/imran-ahmad-aa257520b', label: 'LinkedIn' },
  { icon: <FiArrowUpRight size={18} />, href: 'https://toolverse-official.vercel.app', label: 'Toolverse' },
];

const fieldCls =
  'w-full bg-bg/60 border border-line rounded-xl px-4 py-3.5 text-sm text-ink placeholder:text-faint ' +
  'outline-none focus:border-cyan/60 focus:ring-2 focus:ring-cyan/15 transition-all duration-300';

const Contact = () => {
  const [copied, setCopied] = useState(false);
  const [status, setStatus] = useState('idle'); // idle | sending | fallback | success
  const formRef = useRef(null);

  // Returning from the classic-POST relay (?sent=1) → success
  useEffect(() => {
    const q = new URLSearchParams(window.location.search);
    if (q.get('sent') === '1') {
      setStatus('success');
      window.history.replaceState({}, '', window.location.pathname + '#contact');
    }
  }, []);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      window.location.href = `mailto:${EMAIL}`;
    }
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    if (status === 'sending' || status === 'fallback') return;
    setStatus('sending');

    const form = e.currentTarget;
    const data = new FormData(form);
    const subject = `Portfolio — ${data.get('topic') || 'Enquiry'} · ${data.get('name')}`;

    // Path 1: AJAX (fast, no reload)
    const ctrl = new AbortController();
    const t = setTimeout(() => ctrl.abort(), 12000);
    try {
      const res = await fetch(FORM_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          name: data.get('name'),
          email: data.get('email'),
          message: data.get('message'),
          _subject: subject,
          _template: 'table',
          _captcha: 'false',
          _replyto: data.get('email'),
        }),
        signal: ctrl.signal,
      });
      clearTimeout(t);
      const json = await res.json().catch(() => null);
      if (res.ok && json && String(json.success) === 'true') {
        setStatus('success');
        form.reset();
        return;
      }
      throw new Error('ajax rejected');
    } catch {
      clearTimeout(t);
      // Path 2: classic navigation POST — passes bot checks, redirects back with ?sent=1
      setStatus('fallback');
      const relay = document.createElement('form');
      relay.method = 'POST';
      relay.action = FORM_CLASSIC;
      const add = (k, v) => {
        const i = document.createElement('input');
        i.type = 'hidden'; i.name = k; i.value = v;
        relay.appendChild(i);
      };
      add('_captcha', 'false');
      add('_template', 'table');
      add('_subject', subject);
      add('_next', `${window.location.origin}/?sent=1#contact`);
      add('name', data.get('name') || '');
      add('email', data.get('email') || '');
      add('message', data.get('message') || '');
      document.body.appendChild(relay);
      relay.submit();
    }
  };

  return (
    <section id="contact" className="relative py-28 sm:py-40 border-t border-line overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-60" aria-hidden="true" />
      <div className="absolute top-1/3 left-1/4 -translate-x-1/2 w-[560px] h-[560px] rounded-full bg-cyan/[0.05] blur-[120px]" aria-hidden="true" />
      <div className="absolute bottom-0 right-0 w-[420px] h-[420px] rounded-full bg-magenta/[0.05] blur-[120px]" aria-hidden="true" />

      <div className="max-w-[1200px] mx-auto px-5 md:px-8 relative">
        <div className="grid lg:grid-cols-[0.95fr_1.05fr] gap-12 lg:gap-16 items-start">

          {/* ── Left: pitch + direct channels ── */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.7 }}
              className="inline-flex items-center gap-2.5 font-mono text-[10px] tracking-[0.25em] text-lime border border-lime/25 bg-lime/5 rounded-full px-4 py-2 mb-8"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-lime animate-pulse-dot" />
              AVAILABLE FOR DEPLOYMENT
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ delay: 0.1, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="font-display font-extrabold tracking-tight leading-[1.02] text-[clamp(2.4rem,6.5vw,4.4rem)] mb-6"
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
              className="text-mute max-w-[480px] mb-9 text-[15px] leading-relaxed"
            >
              Full-time roles, freelance builds, or wild ideas — drop it in the form and
              it lands straight in my inbox. I reply within 24 hours.
            </motion.p>

            {/* email row */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.35, duration: 0.7 }}
              className="flex flex-wrap items-center gap-3 mb-9"
            >
              <a
                href={`mailto:${EMAIL}`}
                className="inline-flex items-center gap-2.5 bg-ink text-bg font-semibold text-sm px-6 py-3.5 rounded-xl hover:bg-cyan transition-colors duration-300"
              >
                <FiMail size={16} /> {EMAIL}
              </a>
              <button
                onClick={copyEmail}
                className="inline-flex items-center gap-2.5 border border-line-strong text-ink text-sm px-5 py-3.5 rounded-xl hover:border-cyan/50 hover:text-cyan transition-colors duration-300"
                aria-live="polite"
              >
                {copied ? <FiCheck size={16} className="text-lime" /> : <FiCopy size={16} />}
                {copied ? 'COPIED!' : 'COPY'}
              </button>
            </motion.div>

            {/* socials */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.45, duration: 0.7 }}
            >
              <p className="font-mono text-[10px] tracking-[0.25em] text-faint mb-4">ELSEWHERE //</p>
              <div className="flex items-center gap-3.5">
                {SOCIALS.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.label}
                    title={s.label}
                    className="w-12 h-12 rounded-xl panel flex items-center justify-center text-mute hover:text-cyan hover:border-cyan/40 hover:-translate-y-1 transition-all duration-300"
                  >
                    {s.icon}
                  </a>
                ))}
              </div>
            </motion.div>
          </div>

          {/* ── Right: the form ── */}
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ delay: 0.2, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="relative panel rounded-2xl p-6 sm:p-8 glow-cyan overflow-hidden"
          >
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan/60 to-transparent" aria-hidden="true" />

            <AnimatePresence mode="wait">
              {status === 'success' ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.94 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  className="py-14 flex flex-col items-center text-center"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: 'spring', stiffness: 260, damping: 16, delay: 0.1 }}
                    className="w-16 h-16 rounded-full bg-lime/15 border border-lime/40 flex items-center justify-center mb-6"
                  >
                    <FiCheck size={30} className="text-lime" />
                  </motion.div>
                  <h3 className="font-display font-bold text-2xl mb-2">Message transmitted.</h3>
                  <p className="text-mute text-sm max-w-[320px] mb-7">
                    It's in my inbox already — expect a reply within 24 hours.
                  </p>
                  <button
                    onClick={() => setStatus('idle')}
                    className="font-mono text-[11px] tracking-[0.2em] text-cyan border border-cyan/30 rounded-full px-5 py-2.5 hover:bg-cyan/10 transition-colors"
                  >
                    SEND ANOTHER →
                  </button>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  ref={formRef}
                  onSubmit={onSubmit}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="space-y-4"
                  noValidate={false}
                >
                  <div className="flex items-center justify-between mb-1">
                    <p className="font-mono text-[10px] tracking-[0.25em] text-faint">
                      TRANSMISSION FORM
                    </p>
                    <span className="font-mono text-[9px] tracking-[0.15em] text-lime flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-lime animate-pulse-dot" /> ENCRYPTED · SECURE
                    </span>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <label className="block">
                      <span className="font-mono text-[9px] tracking-[0.2em] text-mute mb-2 flex items-center gap-1.5">
                        <FiUser size={10} /> YOUR NAME *
                      </span>
                      <input
                        required
                        name="name"
                        type="text"
                        autoComplete="name"
                        placeholder="Jane Doe"
                        className={fieldCls}
                      />
                    </label>
                    <label className="block">
                      <span className="font-mono text-[9px] tracking-[0.2em] text-mute mb-2 flex items-center gap-1.5">
                        <FiAtSign size={10} /> YOUR EMAIL *
                      </span>
                      <input
                        required
                        name="email"
                        type="email"
                        autoComplete="email"
                        placeholder="jane@company.com"
                        className={fieldCls}
                      />
                    </label>
                  </div>

                  <label className="block">
                    <span className="font-mono text-[9px] tracking-[0.2em] text-mute mb-2 flex items-center gap-1.5">
                      <FiMessageSquare size={10} /> I AM A…
                    </span>
                    <select name="topic" defaultValue={TOPICS[0].value} className={`${fieldCls} appearance-none cursor-pointer`}>
                      {TOPICS.map((t) => (
                        <option key={t.value} value={t.value} className="bg-[#0B0C12] text-ink">
                          {t.label}
                        </option>
                      ))}
                    </select>
                  </label>

                  <label className="block">
                    <span className="font-mono text-[9px] tracking-[0.2em] text-mute mb-2 flex items-center gap-1.5">
                      <FiMessageSquare size={10} /> MESSAGE *
                    </span>
                    <textarea
                      required
                      name="message"
                      rows={5}
                      minLength={10}
                      placeholder="Tell me about the role, the project, or the idea…"
                      className={`${fieldCls} resize-none`}
                    />
                  </label>

                  {/* honeypot */}
                  <input type="text" name="_honey" className="hidden" tabIndex={-1} autoComplete="off" aria-hidden="true" />

                  <button
                    type="submit"
                    disabled={status === 'sending' || status === 'fallback'}
                    className="group w-full inline-flex items-center justify-center gap-2.5 bg-ink text-bg font-semibold text-sm px-6 py-4 rounded-xl hover:bg-cyan disabled:opacity-60 disabled:cursor-not-allowed transition-colors duration-300"
                  >
                    {status === 'sending' || status === 'fallback' ? (
                      <>
                        <FiLoader size={16} className="animate-spin" />
                        {status === 'fallback' ? 'SECURE RELAY…' : 'TRANSMITTING…'}
                      </>
                    ) : (
                      <>
                        SEND MESSAGE
                        <FiSend size={15} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                      </>
                    )}
                  </button>

                  <p className="font-mono text-[9px] tracking-[0.12em] text-faint text-center pt-1">
                    // LANDS DIRECTLY IN MY INBOX — NO MIDDLEMEN, NO SPAM.
                  </p>
                </motion.form>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
