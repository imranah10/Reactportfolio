import React from "react";
import { FaGithub, FaHackerrank, FaLongArrowAltRight } from "react-icons/fa";
import { BsLinkedin } from "react-icons/bs";
import './Home.css';
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <div className="container" style={{ padding: '4rem 1rem', maxWidth: '1000px', margin: '0 auto' }}>
      <h2 className="text-center section-title" style={{ fontFamily: 'var(--font-display)', fontSize: '2.5rem', marginBottom: '3rem', color: '#fff' }}>
        <span style={{ borderBottom: "2px solid var(--neon-cyan)" }}>CONTACT US</span>
      </h2>

      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <motion.div
          className="glass-panel"
          style={{
            padding: '3rem',
            borderRadius: '24px',
            maxWidth: '600px',
            width: '100%',
            position: 'relative',
            background: 'linear-gradient(180deg, rgba(10,10,10,0.9) 0%, rgba(0,20,20,0.9) 100%)',
            border: '1px solid var(--neon-cyan)'
          }}
          initial={{ scale: 0.9, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
        >
          {/* Scanning Line */}
          <div style={{
            position: 'absolute', top: 0, left: 0, right: 0, height: '4px', background: 'var(--neon-green)',
            boxShadow: '0 0 20px var(--neon-green)', animation: 'scan 2s ease-in-out infinite'
          }}></div>

          <h3 style={{ textAlign: 'center', fontFamily: 'var(--font-display)', color: 'var(--neon-green)', marginBottom: '2rem' }}>
            <span style={{ animation: 'blink 1s infinite' }}>●</span> SECURE UPLINK ESTABLISHED
          </h3>

          <p style={{ textAlign: 'center', fontSize: '1.2rem', color: 'var(--text-secondary)', marginBottom: '3rem' }}>
            Initiate protocol to transmit freelance opportunities, mission briefings, or alliance requests.
          </p>

          <div style={{ display: 'grid', gap: '1.5rem' }}>
            <a href="https://github.com/imranah10" target="_blank" rel="noreferrer" className="cyber-btn" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '1rem', borderColor: 'var(--text-primary)', color: 'white' }}>
              <FaGithub size={24} /> ACCESS_GITHUB_REPO
            </a>
            <a href="https://www.linkedin.com/in/imran-ahmad-aa257520b/" target="_blank" rel="noreferrer" className="cyber-btn" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '1rem', borderColor: '#0077b5', color: '#0077b5' }}>
              <BsLinkedin size={24} /> CONNECT_LINKEDIN_NODE
            </a>
            <a href="https://www.hackerrank.com/profile/imranaha310" target="_blank" rel="noreferrer" className="cyber-btn" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '1rem', borderColor: '#2EC866', color: '#2EC866' }}>
              <FaHackerrank size={24} /> DECRYPT_HACKERRANK
            </a>
          </div>

          <div style={{ textAlign: 'center', marginTop: '3rem', fontSize: '0.8rem', color: '#555', fontFamily: 'monospace' }}>
            ENCRYPTION: AES-256-GCM // LATENCY: 12ms // STATUS: ONLINE
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;
