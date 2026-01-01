import React from 'react';
import { motion } from 'framer-motion';
import './Home.css';

const GithubStats = () => {
  return (
    <div className="container" style={{ padding: '2rem 1rem', maxWidth: '1000px', margin: '0 auto' }}>
      
      {/* 3D Profile Summary Cards */}
      <h3 className="section-title" style={{ fontFamily: 'var(--font-display)', fontSize: '2rem', marginBottom: '2rem', textAlign: 'center' }}>
        <span style={{ color: 'var(--neon-green)' }}>NEURAL</span> PULSE
      </h3>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', alignItems: 'center' }}>
        
        <motion.div 
           className="glass-panel"
           style={{ padding: '1rem', borderRadius: '16px', width: '100%', overflow: 'hidden' }}
           initial={{ opacity: 0, scale: 0.95 }}
           whileInView={{ opacity: 1, scale: 1 }}
           viewport={{ once: true }}
        >
           <img 
             src="https://github-readme-activity-graph.vercel.app/graph?username=imranah10&theme=tokyonight&area=true&hide_border=true&point=true" 
             alt="Neural Pulse Graph" 
             style={{ width: '100%', height: 'auto', display: 'block' }}
           />
        </motion.div>

        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '2rem', justifyContent: 'center', width: '100%' }}>
            
            {/* Profile Details */}
            <motion.div 
               style={{ flex: '1 1 400px' }}
               initial={{ opacity: 0, x: -30 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true }}
            >
               <img 
                 src="https://github-profile-summary-cards.vercel.app/api/cards/profile-details?username=imranah10&theme=tokyonight" 
                 alt="Profile Details" 
                 style={{ width: '100%', height: 'auto', borderRadius: '12px' }}
               />
            </motion.div>

            {/* Language Stats */}
            <motion.div 
               style={{ flex: '1 1 400px' }}
               initial={{ opacity: 0, x: 30 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true }}
            >
               <img 
                 src="https://github-profile-summary-cards.vercel.app/api/cards/most-commit-language?username=imranah10&theme=tokyonight" 
                 alt="Top Languages" 
                 style={{ width: '100%', height: 'auto', borderRadius: '12px' }}
               />
            </motion.div>
        </div>
      </div>

    </div>
  );
};

export default GithubStats;
