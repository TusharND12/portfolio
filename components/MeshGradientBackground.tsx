'use client';

import { useEffect, useRef } from 'react';

export default function MeshGradientBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    let time = 0;

    const animate = () => {
      time += 0.005;

      // Create mesh gradient - MUCH MORE SUBTLE
      const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
      gradient.addColorStop(0, `hsla(${220 + Math.sin(time) * 20}, 70%, 50%, 0.02)`);
      gradient.addColorStop(0.5, `hsla(${280 + Math.cos(time) * 20}, 70%, 50%, 0.03)`);
      gradient.addColorStop(1, `hsla(${340 + Math.sin(time * 0.7) * 20}, 70%, 50%, 0.02)`);

      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      requestAnimationFrame(animate);
    };

    animate();

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return <canvas ref={canvasRef} className="fixed inset-0 -z-20" />;
}

