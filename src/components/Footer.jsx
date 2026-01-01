import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Footer = () => {
  return (
    <footer style={{ 
      borderTop: '1px solid var(--neon-magenta)', 
      background: 'linear-gradient(to top, #000 0%, rgba(10,0,10,0.9) 100%)', 
      padding: '4rem 1rem 2rem', 
      textAlign: 'center',
      marginTop: 'auto',
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* Scanning Laser */}
      <div style={{
        position: 'absolute', top: 0, left: 0, right: 0, height: '2px',
        background: 'var(--neon-green)',
        boxShadow: '0 0 20px var(--neon-green)',
        animation: 'scan 4s linear infinite'
      }}></div>

      <div className="container" style={{ maxWidth: '800px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
        <h2 style={{ fontFamily: 'var(--font-display)', color: 'var(--text-secondary)', opacity: 0.5, marginBottom: '2rem', letterSpacing: '5px' }}>
           SYSTEM STATUS: <span style={{ color: 'var(--neon-green)' }}>OPERATIONAL</span>
        </h2>

        <div style={{ display: 'flex', justifyContent: 'center', gap: '3rem', marginBottom: '3rem', fontSize: '2rem' }}>
          {[
            { icon: "fa-linkedin", link: "https://www.linkedin.com/in/imran-ahmad-aa257520b/", color: "#0077b5" },
            { icon: "fa-github", link: "https://github.com/imranah10", color: "#6e5494" },
            { icon: "fa-hackerrank", link: "https://www.hackerrank.com/profile/imranaha310", color: "#2EC866" }
          ].map((social, idx) => (
             <a 
               key={idx}
               href={social.link} 
               target="_blank" 
               rel="noreferrer" 
               className="social-glitch"
               style={{ color: 'white', position: 'relative', transition: '0.3s' }}
               onMouseOver={(e) => {
                 e.currentTarget.style.color = social.color;
                 e.currentTarget.style.textShadow = `0 0 20px ${social.color}`;
                 e.currentTarget.style.transform = 'scale(1.2) rotate(10deg)';
               }}
               onMouseOut={(e) => {
                 e.currentTarget.style.color = 'white';
                 e.currentTarget.style.textShadow = 'none';
                 e.currentTarget.style.transform = 'scale(1) rotate(0deg)';
               }}
             >
               <i className={`fa-brands ${social.icon}`}></i>
             </a>
          ))}
        </div>



        <div style={{ 
          borderTop: '1px solid var(--glass-border)', 
          paddingTop: '2rem',
          color: 'var(--text-secondary)', 
          fontSize: '0.9rem', 
          fontFamily: 'monospace' 
        }}>
           [PROTOCOL_ID: 2025] // DEVELOPED BY <a href="https://github.com/imranah10/Reactportfolio" style={{ color: 'var(--neon-cyan)', textDecoration: 'none' }}>IMRAN_OS</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
