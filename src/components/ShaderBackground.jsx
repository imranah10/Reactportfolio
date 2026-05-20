import React, { useEffect, useRef } from 'react';
import premiumBg from '../assets/ultra_premium_dark_bg.png';

const ShaderBackground = () => {
  const canvasRef = useRef(null);
  const mouseRef = useRef({ x: 0, y: 0, tx: 0, ty: 0, active: false });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    // Particle class
    class Particle {
      constructor() {
        this.reset();
      }

      reset() {
        this.x = Math.random() * width;
        this.y = Math.random() * height + height;
        this.vx = (Math.random() - 0.5) * 0.4;
        this.vy = -(Math.random() * 0.6 + 0.2);
        this.size = Math.random() * 2.5 + 1.0;
        this.alpha = Math.random() * 0.6 + 0.3;
        this.color = Math.random() > 0.5 ? '#06b6d4' : '#a855f7';
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;
        this.alpha -= 0.0005;

        // Mouse avoidance or slight pull
        if (mouseRef.current.active) {
          const dx = mouseRef.current.x - this.x;
          const dy = mouseRef.current.y - this.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 150) {
            const force = (150 - dist) / 150;
            this.x -= (dx / dist) * force * 0.5;
            this.y -= (dy / dist) * force * 0.5;
          }
        }

        if (this.y < 0 || this.alpha <= 0) {
          this.reset();
        }
      }

      draw() {
        ctx.save();
        ctx.globalAlpha = this.alpha;
        ctx.fillStyle = this.color;
        ctx.shadowBlur = 4;
        ctx.shadowColor = this.color;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      }
    }

    // Grid nodes class for digital crosshairs
    const gridSpacing = 80;
    const particles = Array.from({ length: 75 }, () => new Particle());
    let time = 0;

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    const handleMouseMove = (e) => {
      mouseRef.current.tx = e.clientX;
      mouseRef.current.ty = e.clientY;
      mouseRef.current.active = true;
    };

    const handleMouseLeave = () => {
      mouseRef.current.active = false;
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);

    const render = () => {
      time += 0.0015;

      // Mouse position easing (spring physics)
      mouseRef.current.x += (mouseRef.current.tx - mouseRef.current.x) * 0.08;
      mouseRef.current.y += (mouseRef.current.ty - mouseRef.current.y) * 0.08;

      ctx.clearRect(0, 0, width, height);

      // 1. Draw glowing digital grid intersections
      const startX = Math.floor(mouseRef.current.x % gridSpacing) - gridSpacing;
      const startY = Math.floor(mouseRef.current.y % gridSpacing) - gridSpacing;

      ctx.strokeStyle = 'rgba(255, 255, 255, 0.035)';
      ctx.lineWidth = 1;

      for (let x = 0; x < width + gridSpacing; x += gridSpacing) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, height);
        ctx.stroke();
      }
      for (let y = 0; y < height + gridSpacing; y += gridSpacing) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(width, y);
        ctx.stroke();
      }

      // Intersection Crosshairs with mouse proximity response
      for (let x = gridSpacing; x < width; x += gridSpacing) {
        for (let y = gridSpacing; y < height; y += gridSpacing) {
          const dx = mouseRef.current.x - x;
          const dy = mouseRef.current.y - y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          
          if (dist < 200) {
            const factor = (200 - dist) / 200; // 0 to 1
            ctx.save();
            ctx.strokeStyle = `rgba(6, 182, 212, ${factor * 0.45})`;
            ctx.lineWidth = 1.5;
            
            // Draw crosshairs
            ctx.beginPath();
            ctx.moveTo(x - 4, y); ctx.lineTo(x + 4, y);
            ctx.moveTo(x, y - 4); ctx.lineTo(x, y + 4);
            ctx.stroke();
            
            // Draw connection line to mouse
            if (dist < 120) {
              ctx.strokeStyle = `rgba(168, 85, 247, ${factor * 0.25})`;
              ctx.beginPath();
              ctx.moveTo(x, y);
              ctx.lineTo(mouseRef.current.x, mouseRef.current.y);
              ctx.stroke();
            }
            
            ctx.restore();
          } else {
            // Draw plain dot
            ctx.fillStyle = 'rgba(255, 255, 255, 0.03)';
            ctx.beginPath();
            ctx.arc(x, y, 1, 0, Math.PI * 2);
            ctx.fill();
          }
        }
      }

      // 2. Draw procedural 21st.dev bezier shader lines (Undulating neon waves)
      const drawWave = (offsetY, amp, freq, speed, color1, color2, thickness) => {
        ctx.save();
        const grad = ctx.createLinearGradient(0, 0, width, 0);
        grad.addColorStop(0, 'transparent');
        grad.addColorStop(0.2, color1);
        grad.addColorStop(0.5, color2);
        grad.addColorStop(0.8, color1);
        grad.addColorStop(1, 'transparent');

        ctx.strokeStyle = grad;
        ctx.lineWidth = thickness;
        ctx.beginPath();

        // High quality wave resolution
        const step = 20;
        for (let x = 0; x <= width; x += step) {
          // Dynamic wave height influenced by mouse Y if mouse is active
          let mouseInfluence = 0;
          if (mouseRef.current.active) {
            const mDistX = Math.abs(mouseRef.current.x - x);
            if (mDistX < 250) {
              const weight = (250 - mDistX) / 250;
              mouseInfluence = (mouseRef.current.y - (height / 2)) * 0.18 * weight;
            }
          }

          const y =
            offsetY +
            Math.sin(x * freq + time * speed) * amp +
            Math.cos(x * (freq * 0.5) - time * (speed * 0.7)) * (amp * 0.4) +
            mouseInfluence;

          if (x === 0) {
            ctx.moveTo(x, y);
          } else {
            ctx.lineTo(x, y);
          }
        }
        ctx.stroke();
        ctx.restore();
      };

      // Layer 1: Deep Cyan wave
      drawWave(height * 0.25, 45, 0.002, 1.2, 'rgba(6, 182, 212, 0.28)', 'rgba(168, 85, 247, 0.22)', 2.5);
      // Layer 2: Vibrant Purple/Pink wave
      drawWave(height * 0.55, 60, 0.0015, -0.9, 'rgba(236, 72, 153, 0.25)', 'rgba(6, 182, 212, 0.25)', 3.5);
      // Layer 3: Lower Ambient Wave
      drawWave(height * 0.8, 30, 0.003, 1.5, 'rgba(168, 85, 247, 0.20)', 'rgba(236, 72, 153, 0.18)', 2.0);

      // 3. Update & Draw floating ambient particles
      particles.forEach((p) => {
        p.update();
        p.draw();
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <div className="fixed inset-0 z-[-1] overflow-hidden bg-[#020207]">
      {/* 2D Canvas Shader Render */}
      <canvas ref={canvasRef} className="absolute inset-0 block w-full h-full pointer-events-none" />

      {/* Massive Neon Fluid Glowing Ambient Orbs */}
      <div className="absolute top-[-20%] left-[-10%] w-[60vw] h-[60vw] rounded-full bg-cyan-600/10 blur-[130px] mix-blend-screen animate-orb1 pointer-events-none"></div>
      <div className="absolute top-[20%] right-[-10%] w-[50vw] h-[50vw] rounded-full bg-purple-600/10 blur-[130px] mix-blend-screen animate-orb2 pointer-events-none"></div>
      <div className="absolute bottom-[-20%] left-[20%] w-[70vw] h-[50vw] rounded-full bg-pink-600/8 blur-[130px] mix-blend-screen animate-orb1 pointer-events-none" style={{ animationDelay: '-5s' }}></div>

      {/* Premium background grid graphics */}
      <div
        className="absolute inset-0 opacity-35 mix-blend-screen bg-cover bg-center pointer-events-none"
        style={{ backgroundImage: `url(${premiumBg})` }}
      ></div>

      {/* Subtle overlay film noise */}
      <div
        className="absolute inset-0 opacity-[0.03] mix-blend-overlay pointer-events-none"
        style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}
      ></div>

      {/* Vignette styling for cinema contrast */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#020205] via-transparent to-transparent pointer-events-none opacity-90"></div>
    </div>
  );
};

export default ShaderBackground;
