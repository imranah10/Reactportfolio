import React, { useRef, useEffect } from 'react';

const Background = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let animationFrameId;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();

    const symbols = "0101010101XYZΩΣΠ日カタカナｦｧｨｩｪｫｬｭｮｯｱｲｳｴｵｶｷｸｹｺｻｼｽｾｿﾀﾁﾂﾃﾄﾅﾆﾇﾈﾉﾊﾋﾌﾍﾎﾏﾐﾑﾒﾓﾔﾕﾖﾗﾘﾙﾚﾛﾜﾝ";
    const fontSize = 16;
    const particleCount = 400; // Fixed number of stars/particles
    let drops = [];

    const init = () => {
      drops = [];
      for (let i = 0; i < particleCount; i++) {
        drops.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          z: Math.random() * canvas.width,
        });
      }
    };

    init();

    const draw = () => {
      // Warp Speed Effect
      ctx.fillStyle = 'rgba(0, 0, 0, 0.2)'; // Longer trails for warp speed
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      const centerX = canvas.width / 2;
      const centerY = canvas.height / 2;

      for (let i = 0; i < drops.length; i++) {


        const p = drops[i];

        // Move particle towards camera
        p.z -= 10; 

        // Reset if too close
        if (p.z <= 0) {
           p.z = canvas.width;
           p.x = Math.random() * canvas.width;
           p.y = Math.random() * canvas.height;
        }

        // 3D Perspective Projection
        const k = 128.0 / p.z;
        const px = (p.x - centerX) * k + centerX;
        const py = (p.y - centerY) * k + centerY;
        const size = Math.max(0, (1 - p.z / canvas.width) * 5); /* Fix: Prevent negative radius */

        // Draw Particle
        const hue = (p.z / canvas.width * 360 + Date.now() / 5) % 360;
        ctx.fillStyle = `hsl(${hue}, 100%, 60%)`;
        ctx.beginPath();
        ctx.arc(px, py, size, 0, Math.PI * 2);
        ctx.fill();

        // Connecting lines for "Network" feel (only if close)
        if (size > 3) {
           ctx.strokeStyle = `hsla(${hue}, 100%, 50%, 0.2)`;
           ctx.beginPath();
           ctx.moveTo(px, py);
           ctx.lineTo(centerX, centerY); // Lines to center (Vortex)
           ctx.stroke();
        }
      }
      animationFrameId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        zIndex: -1,
        background: '#000',
        pointerEvents: 'none',
        opacity: 0.8
      }}
    />
  );
};

export default Background;
