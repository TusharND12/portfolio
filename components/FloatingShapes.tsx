'use client';

import { motion } from 'framer-motion';

export default function FloatingShapes() {
  const shapes = [
    { type: 'circle', size: 300, color: 'rgba(58, 134, 255, 0.02)', blur: 100 },
    { type: 'circle', size: 400, color: 'rgba(131, 56, 236, 0.02)', blur: 120 },
    { type: 'circle', size: 350, color: 'rgba(255, 0, 110, 0.02)', blur: 110 },
    { type: 'circle', size: 250, color: 'rgba(6, 255, 165, 0.02)', blur: 90 },
  ];

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      {shapes.map((shape, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full"
          style={{
            width: shape.size,
            height: shape.size,
            background: shape.color,
            filter: `blur(${shape.blur}px)`,
          }}
          animate={{
            x: [
              Math.random() * window.innerWidth,
              Math.random() * window.innerWidth,
              Math.random() * window.innerWidth,
            ],
            y: [
              Math.random() * window.innerHeight,
              Math.random() * window.innerHeight,
              Math.random() * window.innerHeight,
            ],
          }}
          transition={{
            duration: 20 + Math.random() * 10,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      ))}
    </div>
  );
}

