import React, { useEffect } from 'react';
import './Home.css';
import experience from './data/experience.json';
import Skills from './Skills';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { motion } from 'framer-motion';

const Experience = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <div className="container" style={{ padding: '2rem 1rem' }}>
      <h1 className="text-center section-title" style={{ fontFamily: 'var(--font-display)', fontSize: '2.5rem', marginBottom: '3rem', color: '#fff' }}>
        <span style={{ borderBottom: "2px solid var(--neon-cyan)" }}>EXPERIENCE</span>
      </h1>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem', maxWidth: '900px', margin: '0 auto', position: 'relative' }}>

        {/* Timeline Center Line */}
        <div style={{ position: 'absolute', left: '50px', top: '0', bottom: '0', width: '2px', background: 'linear-gradient(to bottom, var(--neon-cyan), var(--neon-magenta))', zIndex: 0 }}></div>

        {experience.map((data, idx) => (
          <motion.div
            key={idx}
            className="glass-panel"
            style={{
              padding: '2rem',
              borderRadius: '20px',
              display: 'flex',
              gap: '2rem',
              alignItems: 'flex-start',
              position: 'relative',
              zIndex: 1,
              background: 'rgba(10, 10, 10, 0.8)', // Darker bg to pop against timeline
              borderLeft: '4px solid var(--neon-cyan)'
            }}
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: idx * 0.2 }}
            whileHover={{ scale: 1.02, x: 10 }}
          >
            {/* Timeline Node */}
            <div style={{
              position: 'absolute', left: '-41px', top: '30px',
              width: '20px', height: '20px',
              background: '#000', border: '4px solid var(--neon-cyan)',
              borderRadius: '50%', zIndex: 2,
              boxShadow: '0 0 15px var(--neon-cyan)'
            }}></div>

            <div style={{ flexShrink: 0 }}>
              <img
                src={data.imagesrc}
                alt="company"
                style={{ width: '80px', height: '80px', borderRadius: '12px', border: '1px solid var(--neon-magenta)', padding: '5px', background: 'white', objectFit: 'contain' }}
              />
            </div>
            <div style={{ flex: 1, minWidth: 0, overflowWrap: 'break-word' }}>
              <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '1.8rem', marginBottom: '0.5rem', color: 'white', textShadow: '0 0 10px rgba(255,255,255,0.3)', wordBreak: 'break-word' }}>
                {data.role}
              </h2>
              <h6 style={{ color: 'var(--neon-green)', fontFamily: 'var(--font-display)', marginBottom: '1.5rem', fontSize: '1rem', letterSpacing: '1px', wordBreak: 'break-word' }}>
                <i className="bi bi-clock-history"></i> {`${data.startDate}- ${data.endDate}`} <span style={{ color: 'var(--text-secondary)' }}>| {data.Location}</span>
              </h6>
              <ul style={{ listStyle: 'none', padding: 0 }}>
                <li style={{ marginBottom: '10px', color: 'var(--text-secondary)', display: 'flex', gap: '10px' }}>
                  {/* <span style={{ color: 'var(--neon-cyan)', flexShrink: 0 }}>▹</span> <span style={{ wordBreak: 'break-word' }}>{data.experiences[0]}</span> */}
                </li>
                <li style={{ color: 'var(--text-secondary)', display: 'flex', gap: '10px' }}>
                  {/* <span style={{ color: 'var(--neon-cyan)', flexShrink: 0 }}>▹</span> <span style={{ wordBreak: 'break-word' }}>{data.experiences[1]}</span> */}
                </li>
              </ul>
            </div>
          </motion.div>
        ))}
      </div>

      <Skills />
    </div>
  );
};

export default Experience;
