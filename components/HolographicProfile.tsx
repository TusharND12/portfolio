'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';
import Image from 'next/image';

export default function HolographicProfile() {
  const [isHovered, setIsHovered] = useState(false);
  const [glitchActive, setGlitchActive] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  
  const springX = useSpring(mouseX, { stiffness: 150, damping: 15 });
  const springY = useSpring(mouseY, { stiffness: 150, damping: 15 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        
        const deltaX = (e.clientX - centerX) / 25;
        const deltaY = (e.clientY - centerY) / 25;
        
        mouseX.set(deltaX);
        mouseY.set(deltaY);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);

  // Random glitch effect
  useEffect(() => {
    const interval = setInterval(() => {
      if (Math.random() > 0.7) {
        setGlitchActive(true);
        setTimeout(() => setGlitchActive(false), 100);
      }
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative flex items-center justify-center py-20">
      <motion.div
        ref={containerRef}
        className="relative"
        onHoverStart={() => setIsHovered(true)}
        onHoverEnd={() => setIsHovered(false)}
        style={{
          rotateY: springX,
          rotateX: springY,
        }}
      >
        {/* Holographic container */}
        <div className="relative perspective-1000 preserve-3d">
          {/* Outer glow ring */}
          <motion.div
            className="absolute -inset-8 rounded-full"
            style={{
              background: 'radial-gradient(circle, rgba(58, 134, 255, 0.3), transparent 70%)',
              filter: 'blur(20px)',
            }}
            animate={{
              scale: isHovered ? 1.2 : 1,
              opacity: isHovered ? 0.8 : 0.5,
            }}
          />

          {/* Corner brackets */}
          {[0, 1, 2, 3].map((i) => (
            <motion.div
              key={i}
              className="absolute w-8 h-8 border-cyber-blue"
              style={{
                top: i < 2 ? -10 : 'auto',
                bottom: i >= 2 ? -10 : 'auto',
                left: i % 2 === 0 ? -10 : 'auto',
                right: i % 2 === 1 ? -10 : 'auto',
                borderTopWidth: i < 2 ? 2 : 0,
                borderBottomWidth: i >= 2 ? 2 : 0,
                borderLeftWidth: i % 2 === 0 ? 2 : 0,
                borderRightWidth: i % 2 === 1 ? 2 : 0,
              }}
              animate={{
                scale: isHovered ? 1.2 : 1,
              }}
            />
          ))}

          {/* Main image container with multiple effects */}
          <div className="relative w-64 h-64 md:w-80 md:h-80">
            {/* RGB Split Effect Layers */}
            <motion.div
              className="absolute inset-0 rounded-full overflow-hidden"
              style={{
                transform: glitchActive ? 'translate(-2px, 0)' : 'none',
                opacity: 0.5,
                mixBlendMode: 'screen',
              }}
            >
              <div className="w-full h-full bg-red-500/20" />
            </motion.div>

            <motion.div
              className="absolute inset-0 rounded-full overflow-hidden"
              style={{
                transform: glitchActive ? 'translate(2px, 0)' : 'none',
                opacity: 0.5,
                mixBlendMode: 'screen',
              }}
            >
              <div className="w-full h-full bg-cyan-500/20" />
            </motion.div>

            {/* Main profile image */}
            <motion.div
              className="relative w-full h-full rounded-full overflow-hidden border-4 border-cyber-blue shadow-2xl"
              animate={{
                borderColor: isHovered ? '#ff006e' : '#3a86ff',
                boxShadow: isHovered
                  ? '0 0 40px rgba(255, 0, 110, 0.6)'
                  : '0 0 20px rgba(58, 134, 255, 0.4)',
              }}
            >
              {/* Profile Image */}
              <Image
                src="/images/20250202_035612 (2).jpg"
                alt="Tushar Dhokane - Full Stack Developer"
                fill
                className="object-cover"
                priority
              />

              {/* Scan line effect */}
              <motion.div
                className="absolute inset-0 pointer-events-none"
                style={{
                  background: 'linear-gradient(transparent 40%, rgba(255, 255, 255, 0.1) 50%, transparent 60%)',
                }}
                animate={{
                  y: ['-100%', '200%'],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: 'linear',
                }}
              />

              {/* Grid overlay */}
              <div
                className="absolute inset-0 pointer-events-none opacity-20"
                style={{
                  backgroundImage: 'linear-gradient(rgba(58, 134, 255, 0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(58, 134, 255, 0.3) 1px, transparent 1px)',
                  backgroundSize: '20px 20px',
                }}
              />

              {/* Glitch effect overlay */}
              {glitchActive && (
                <div className="absolute inset-0 bg-white/20 mix-blend-difference" />
              )}
            </motion.div>

            {/* Particle effect on hover */}
            {isHovered && (
              <div className="absolute inset-0 pointer-events-none">
                {[...Array(20)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute w-2 h-2 rounded-full bg-cyber-blue"
                    style={{
                      left: '50%',
                      top: '50%',
                    }}
                    initial={{ x: 0, y: 0, opacity: 1 }}
                    animate={{
                      x: (Math.random() - 0.5) * 200,
                      y: (Math.random() - 0.5) * 200,
                      opacity: 0,
                    }}
                    transition={{
                      duration: 1,
                      delay: i * 0.05,
                      repeat: Infinity,
                    }}
                  />
                ))}
              </div>
            )}

            {/* Rotating outer rings */}
            <motion.div
              className="absolute inset-0 rounded-full border-2 border-cyber-purple/30"
              style={{
                transform: 'scale(1.1)',
              }}
              animate={{
                rotate: 360,
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: 'linear',
              }}
            />

            <motion.div
              className="absolute inset-0 rounded-full border-2 border-cyber-pink/30"
              style={{
                transform: 'scale(1.15)',
              }}
              animate={{
                rotate: -360,
              }}
              transition={{
                duration: 12,
                repeat: Infinity,
                ease: 'linear',
              }}
            />

            {/* Data stream effect */}
            <div className="absolute -right-20 top-1/2 -translate-y-1/2 hidden md:block">
              <div className="flex flex-col space-y-2 font-mono text-xs text-cyber-green opacity-50">
                {['STATUS: ONLINE', 'RENDER: 3D', 'MODE: HOLO', 'FPS: 60'].map((text, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 0.5, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                  >
                    {text}
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Level indicator */}
            <div className="absolute -left-20 top-1/2 -translate-y-1/2 hidden md:block">
              <div className="flex flex-col space-y-1">
                {[...Array(10)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="w-12 h-1 bg-cyber-blue/30"
                    animate={{
                      backgroundColor: i < 7 ? '#3a86ff' : 'rgba(58, 134, 255, 0.3)',
                    }}
                    transition={{ delay: i * 0.1 }}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Bottom text display */}
          <motion.div
            className="mt-8 text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            <div className="text-xs font-mono text-cyber-blue mb-2">
              {'<'} HOLOGRAPHIC INTERFACE {'>'}
            </div>
            <motion.h3
              className="text-2xl md:text-3xl font-bold gradient-text mb-2"
              animate={{
                textShadow: isHovered
                  ? '0 0 20px rgba(58, 134, 255, 0.8)'
                  : '0 0 10px rgba(58, 134, 255, 0.4)',
              }}
            >
              Tushar Dhokane
            </motion.h3>
            <p className="text-gray-400 text-sm">Full-Stack Developer & ML Engineer</p>
            <p className="text-cyber-green text-xs mt-1">🏆 1st Place - Fusion Hackathon 2025</p>
            <p className="text-cyber-blue text-xs">🔬 Research Intern - Binghamton University</p>
            
            {/* Status indicators */}
            <div className="flex items-center justify-center space-x-4 mt-4 text-xs">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 rounded-full bg-cyber-green animate-pulse" />
                <span className="text-cyber-green">AVAILABLE</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 rounded-full bg-cyber-blue animate-pulse" />
                <span className="text-cyber-blue">REMOTE</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 rounded-full bg-cyber-purple animate-pulse" />
                <span className="text-cyber-purple">ML EXPERT</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Holographic base */}
        <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-96 h-2 bg-gradient-to-r from-transparent via-cyber-blue to-transparent opacity-50" />
      </motion.div>
    </div>
  );
}

