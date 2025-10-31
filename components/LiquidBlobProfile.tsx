'use client';

import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

export default function LiquidBlobProfile() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        setMousePos({
          x: ((e.clientX - rect.left) / rect.width) * 100,
          y: ((e.clientY - rect.top) / rect.height) * 100,
        });
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="relative flex items-center justify-center py-20">
      <motion.div
        ref={containerRef}
        className="relative w-80 h-80"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
      >
        {/* Liquid Blob SVG Mask */}
        <svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 400">
          <defs>
            <filter id="goo">
              <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" />
              <feColorMatrix
                in="blur"
                mode="matrix"
                values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7"
                result="goo"
              />
            </filter>
            
            <mask id="blobMask">
              <motion.circle
                cx="200"
                cy="200"
                r="150"
                fill="white"
                filter="url(#goo)"
                animate={{
                  r: [140, 160, 140],
                  cx: [180, 220, 180],
                  cy: [180, 220, 180],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              />
              {[...Array(6)].map((_, i) => (
                <motion.circle
                  key={i}
                  cx="200"
                  cy="200"
                  r="60"
                  fill="white"
                  animate={{
                    cx: [
                      200 + Math.cos((i * Math.PI * 2) / 6) * 80,
                      200 + Math.cos((i * Math.PI * 2) / 6 + Math.PI) * 80,
                      200 + Math.cos((i * Math.PI * 2) / 6) * 80,
                    ],
                    cy: [
                      200 + Math.sin((i * Math.PI * 2) / 6) * 80,
                      200 + Math.sin((i * Math.PI * 2) / 6 + Math.PI) * 80,
                      200 + Math.sin((i * Math.PI * 2) / 6) * 80,
                    ],
                  }}
                  transition={{
                    duration: 3 + i * 0.2,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }}
                />
              ))}
            </mask>
          </defs>

          {/* Image with blob mask */}
          <foreignObject
            width="400"
            height="400"
            mask="url(#blobMask)"
          >
            <div className="w-full h-full bg-gradient-to-br from-cyber-blue via-cyber-purple to-cyber-pink flex items-center justify-center text-8xl">
              👤
            </div>
          </foreignObject>

          {/* Blob outline */}
          <motion.circle
            cx="200"
            cy="200"
            r="150"
            fill="none"
            stroke="url(#gradient)"
            strokeWidth="3"
            filter="url(#goo)"
            animate={{
              r: [140, 160, 140],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />

          <defs>
            <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#3a86ff" />
              <stop offset="50%" stopColor="#8338ec" />
              <stop offset="100%" stopColor="#ff006e" />
            </linearGradient>
          </defs>
        </svg>

        {/* Floating particles */}
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 rounded-full bg-cyber-blue"
              style={{
                left: `${mousePos.x}%`,
                top: `${mousePos.y}%`,
              }}
              animate={{
                x: [(Math.random() - 0.5) * 200, (Math.random() - 0.5) * 200],
                y: [(Math.random() - 0.5) * 200, (Math.random() - 0.5) * 200],
                opacity: [0, 1, 0],
                scale: [0, 1.5, 0],
              }}
              transition={{
                duration: 2 + Math.random() * 2,
                repeat: Infinity,
                delay: i * 0.1,
              }}
            />
          ))}
        </div>
      </motion.div>
    </div>
  );
}

