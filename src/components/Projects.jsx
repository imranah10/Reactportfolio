import React, { useState, useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform, AnimatePresence } from 'framer-motion';
import { FaLongArrowAltRight, FaYoutube, FaExternalLinkAlt, FaGithub, FaPlay } from 'react-icons/fa';
import './Home.css';

const TiltCard = ({ children, className }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseX = useSpring(x, { stiffness: 150, damping: 15 });
  const mouseY = useSpring(y, { stiffness: 150, damping: 15 });

  const rotateX = useTransform(mouseY, [-0.5, 0.5], ["10deg", "-10deg"]);
  const rotateY = useTransform(mouseX, [-0.5, 0.5], ["-10deg", "10deg"]);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      className={`project-card ${className || ''}`}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
    >
      <div
        style={{ transform: "translateZ(50px)", transformStyle: "preserve-3d" }}
        className="glass-card"
      >
        {/* Holo Overlay */}
        <div style={{
          position: 'absolute', inset: 0,
          background: 'linear-gradient(125deg, rgba(255,255,255,0.1) 0%, transparent 40%, transparent 60%, rgba(255,255,255,0.05) 100%)',
          pointerEvents: 'none', zIndex: 10
        }} />
        {children}
      </div>
    </motion.div>
  );
};

const VideoModal = ({ videoUrl, onClose }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      style={{
        position: 'fixed', top: 0, left: 0, width: '100%', height: '100vh',
        background: 'rgba(0,0,0,0.8)', zIndex: 99999,
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        padding: '1rem'
      }}
      onClick={onClose}
    >
      <motion.div
        layoutId={videoUrl} // Shared layout ID for smooth expansion
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.8, opacity: 0 }}
        style={{
          width: '90%', maxWidth: '800px', // Smaller than full screen
          aspectRatio: '16/9',
          position: 'relative', background: '#000',
          boxShadow: '0 0 30px rgba(0, 243, 255, 0.3)',
          border: '1px solid var(--neon-cyan)',
          borderRadius: '12px',
          overflow: 'hidden'
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          style={{
            position: 'absolute', top: '10px', right: '15px', zIndex: 10,
            background: 'rgba(0,0,0,0.5)', border: 'none', color: '#fff',
            fontSize: '1.5rem', cursor: 'pointer', borderRadius: '50%',
            width: '40px', height: '40px', display: 'flex', alignItems: 'center', justifyContent: 'center'
          }}
        >
          &times;
        </button>
        <video
          src={videoUrl}
          autoPlay
          controls
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
        />
      </motion.div>
    </motion.div>
  );
};

const VideoPreview = ({ videoUrl, isActive }) => {
  const videoRef = useRef(null);

  React.useEffect(() => {
    if (videoRef.current) {
      if (isActive) {
        const playPromise = videoRef.current.play();
        if (playPromise !== undefined) {
          playPromise.catch(e => console.log("Play interrupted"));
        }
      } else {
        videoRef.current.pause();
        videoRef.current.currentTime = 0;
      }
    }
  }, [isActive]);

  return (
    <div style={{ position: 'relative', width: '100%', height: '100%', background: '#000' }}>
      <video
        ref={videoRef}
        src={videoUrl}
        muted
        loop
        playsInline
        style={{
          width: '100%', height: '100%', objectFit: 'cover',
          filter: isActive ? 'none' : 'brightness(0.6)',
          transition: 'filter 0.3s ease'
        }}
      />

      {/* Play Icon - Only visible when NOT active */}
      {!isActive && (
        <div style={{
          position: 'absolute', inset: 0,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          pointerEvents: 'none'
        }}>
          <div style={{
            width: '50px', height: '50px', borderRadius: '50%',
            background: 'rgba(0,0,0,0.5)',
            border: '2px solid var(--neon-cyan)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            boxShadow: '0 0 10px var(--neon-cyan)'
          }}>
            <FaPlay className="text-white" style={{ marginLeft: '3px', color: 'var(--neon-cyan)' }} size={20} />
          </div>
        </div>
      )}
    </div>
  );
};

const Projects = () => {
  const [showAll, setShowAll] = useState(false);
  const [activeVideo, setActiveVideo] = useState(null);

  // Helper to build Cloudinary Video URL
  const getCloudinaryVideo = (publicId) =>
    `https://res.cloudinary.com/dzhtnwfg0/video/upload/${publicId}.mp4`;

  const videoProjects = [
    {
      title: "Thought Echo 🌙✨",
      desc: "A magical cosmic web app that turns your daily thoughts into beautiful, personalized AI reflections.",
      tech: "React • Vite • Tailwind • Framer Motion • Gemini API",
      live: "https://thought-echo.vercel.app",
      videoUrl: getCloudinaryVideo("Thought_Echo_-_Magical_Resonance_q8kafk"),
    },
    {
      title: "Dev (Portfolio)",
      desc: "Futuristic 3D portfolio with particle tornadoes and electric physics borders.",
      tech: "Next.js 14 • Three.js • Tailwind",
      live: "https://modern-portfolio-eight-topaz.vercel.app/",
      videoUrl: getCloudinaryVideo("Dev_Portfolio___Void_Neon_yep88m"),
    },
    {
      title: "Etheria (UI/UX)",
      desc: "Premium Awwwards-style portfolio focused on fluid motion and magnetic interactions.",
      tech: "Next.js 14 • Framer Motion • Lenis",
      live: "https://ui-ux-designer-port.vercel.app/",
      videoUrl: getCloudinaryVideo("Etheria___UI_UX_Portfolio_k0ohf9"),
    },
    {
      title: "AetherStack (UI Lib)",
      desc: "Modern, customizable UI component library with dark/light mode support.",
      tech: "React • Tailwind • Framer Motion",
      live: "https://aether-stack-official.vercel.app/",
      videoUrl: getCloudinaryVideo("Aetherstack_Futuristic_Quantum_Realms_n6skkt"),
    }
  ];

  // Image Projects - Specific Order Requested
  const imageProjects = [
    {
      title: "MyVirtualMate",
      desc: "AI-powered virtual companion for emotional support.",
      tech: "React Native • Firebase • Gemini API",
      img: "https://res.cloudinary.com/dzhtnwfg0/image/upload/v1767181736/presentmyvirt_du9pfo.png", // Using similar image as fallback/placeholder if specific one missing
      live: "https://myvirtualmate.com.au/"
    },
    {
      title: "Approkure",
      desc: "Smart procurement platform for vendor management.",
      tech: "React • Node.js • MongoDB • Tailwind",
      img: "https://res.cloudinary.com/dzhtnwfg0/image/upload/v1767181736/appprokure_jsvhtk.png",
      live: "https://approkure.com/"
    },
    {
      title: "Resume-Scribe",
      desc: "Intelligent AI resume builder tailored to job descriptions.",
      tech: "Lovable • Tailwind CSS • Gemini API • Firebase • supabase",
      img: "https://res.cloudinary.com/dzhtnwfg0/image/upload/v1767181735/resumescribe_yfbnat.png",
      live: "https://shortlisted.myvirtualmate.com.au/auth"
    },
    {
      title: "PresentMyVirtualMate",
      desc: "Presentation tool for showcasing AI virtual assistants.",
      tech: "React • Framer Motion • Tailwind CSS",
      img: "https://res.cloudinary.com/dzhtnwfg0/image/upload/v1767181736/presentmyvirt_du9pfo.png",
      live: "https://present.myvirtualmate.com.au/"
    },
    {
      title: "Benefits of Outsource",
      desc: "Informative landing page with stats and case studies.",
      tech: "HTML • Tailwind CSS • JavaScript",
      img: "https://res.cloudinary.com/dzhtnwfg0/image/upload/v1767181735/benefitsofoutsorcing_vozcfg.png",
      live: "https://benefits-of-outsourcing-with-mvm.myvirtualmate.com.au/"
    },
    {
      title: "SmartEDU",
      desc: "Educational platform for smart learning.",
      tech: "HTML • CSS • JS • Bootstrap",
      img: "https://res.cloudinary.com/dzhtnwfg0/image/upload/v1767181736/SmartEDU_uzgbba.png",
      live: "https://imranah10.github.io/SmartEDU/"
    },
    {
      title: "Trendzz",
      desc: "E-commerce trend tracking application.",
      tech: "HTML • CSS • JS • Bootstrap",
      img: "https://res.cloudinary.com/dzhtnwfg0/image/upload/v1767181736/Trendzz_mixefq.png",
      live: "https://imranah10.github.io/Trendzz/"
    },
    {
      title: "Techyy",
      desc: "Tech news and electronics store landing page.",
      tech: "HTML • CSS • JS • Bootstrap",
      img: "https://res.cloudinary.com/dzhtnwfg0/image/upload/v1767181736/Techyy_ba8eaz.png",
      live: "https://imranah10.github.io/Techy/"
    },
    {
      title: "I-Folio",
      desc: "Classic portfolio template.",
      tech: "HTML • CSS • JS • Bootstrap",
      img: "https://res.cloudinary.com/dzhtnwfg0/image/upload/v1767181735/PORTFOLIO1_x6w8s9.png",
      live: "https://imranah10.github.io/Portfolio-bootstrap-sample/"
    }
  ];

  return (
    <div className="container" style={{ maxWidth: '1200px', margin: '0 auto', padding: '2rem 1rem' }}>

      {/* Header */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '3rem' }}>
        <h2 className="section-title" style={{ fontFamily: 'var(--font-display)', fontSize: '2.5rem' }}>
          <span style={{ color: 'var(--neon-magenta)' }}>#</span> PROJECTS
        </h2>
        <button
          className="cyber-btn"
          onClick={() => setShowAll(!showAll)}
          style={{ fontSize: '0.8rem', padding: '8px 16px' }}
        >
          {showAll ? 'SHOW LESS' : 'SHOW ALL'} <FaLongArrowAltRight />
        </button>
      </div>

      {/* Featured Video Projects */}
      <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.5rem', marginBottom: '1.5rem', color: 'var(--neon-cyan)', borderLeft: '3px solid var(--neon-cyan)', paddingLeft: '1rem' }}>
        Featured / <span style={{ color: 'var(--text-secondary)' }}>Interactive Demos</span>
      </h3>

      <div className="projects-grid" style={{ marginBottom: '4rem' }}>
        {videoProjects.map((proj, idx) => (
          <TiltCard key={idx} className="video-card">
            <div
              style={{ height: '220px', overflow: 'hidden', borderRadius: '12px 12px 0 0', position: 'relative' }}
              onMouseEnter={() => setActiveVideo(idx)}
              onMouseLeave={() => setActiveVideo(null)}
            >
              <VideoPreview
                videoUrl={proj.videoUrl}
                isActive={activeVideo === idx}
              />
            </div>

            <div className="card-content">
              <div>
                <h3 style={{ fontFamily: 'var(--font-display)', marginBottom: '0.5rem', fontSize: '1.25rem', color: '#fff' }}>{proj.title}</h3>
                <p style={{ color: 'var(--text-primary)', fontSize: '0.9rem', marginBottom: '1rem', lineHeight: '1.4' }}>{proj.desc}</p>
                <p className="tech-stack">{proj.tech}</p>
              </div>

              <div className="card-actions">
                <a href={proj.live} target="_blank" rel="noreferrer" className="card-btn" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px' }}>
                  <FaExternalLinkAlt /> Live
                </a>
              </div>
            </div>
          </TiltCard>
        ))}
      </div>

      {/* Standard Image Projects */}
      {showAll && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          transition={{ duration: 0.5 }}
        >
          <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.5rem', marginBottom: '1.5rem', color: 'var(--neon-green)', borderLeft: '3px solid var(--neon-green)', paddingLeft: '1rem' }}>
            More / <span style={{ color: 'var(--text-secondary)' }}>Development</span>
          </h3>
          <div className="projects-grid">
            {imageProjects.map((proj, idx) => (
              <TiltCard key={idx}>
                <div style={{ position: 'relative', overflow: 'hidden', height: '200px' }}>
                  <img src={proj.img} alt={proj.title} style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.5s ease' }} className="project-img" />
                </div>
                <div className="card-content">
                  <div>
                    <h3 style={{ fontFamily: 'var(--font-display)', marginBottom: '0.5rem', color: '#fff' }}>{proj.title}</h3>
                    <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', marginBottom: '1rem' }}>{proj.desc}</p>
                    <p className="tech-stack">{proj.tech}</p>
                  </div>
                  <div className="card-actions">
                    <a href={proj.live} target="_blank" rel="noreferrer" className="card-btn">Live View</a>
                  </div>
                </div>
              </TiltCard>
            ))}
          </div>
        </motion.div>
      )}

    </div>
  );
};

export default Projects;