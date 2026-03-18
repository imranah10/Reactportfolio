import React from 'react';
import { motion } from 'framer-motion';

const GithubStats = () => {
  // Using radial themes from github-readme-stats to match dark minimalist look
  const theme = "tokyonight"; // Good dark theme, or 'radical', 'dark'

  return (
    <div style={{ marginTop: '4rem' }}>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
        style={{ marginBottom: '3rem', textAlign: 'center' }}
      >
        <h3 style={{ fontSize: 'var(--text-xl)', color: 'var(--text-secondary)', letterSpacing: '0.2em' }}>
          GITHUB METRICS
        </h3>
      </motion.div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem', alignItems: 'center' }}>

        {/* Activity Graph */}
        <motion.div
          style={{ width: '100%', overflow: 'hidden', borderRadius: '12px', background: '#0a0a0a' }}
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <img
            src={`https://github-readme-activity-graph.vercel.app/graph?username=imranah10&theme=${theme}&area=true&hide_border=true&point=true&bg_color=0a0a0a`}
            alt="Github Activity Graph"
            style={{ width: '100%', height: 'auto', display: 'block', opacity: 0.9 }}
          />
        </motion.div>

        {/* Small Data Cards */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem', width: '100%' }}>

          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <img
              src={`https://github-profile-summary-cards.vercel.app/api/cards/profile-details?username=imranah10&theme=${theme}`}
              alt="Profile Details"
              style={{ width: '100%', height: 'auto', borderRadius: '8px', opacity: 0.9 }}
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <img
              src={`https://github-profile-summary-cards.vercel.app/api/cards/most-commit-language?username=imranah10&theme=${theme}`}
              alt="Top Languages"
              style={{ width: '100%', height: 'auto', borderRadius: '8px', opacity: 0.9 }}
            />
          </motion.div>

        </div>
      </div>
    </div>
  );
};

export default GithubStats;
