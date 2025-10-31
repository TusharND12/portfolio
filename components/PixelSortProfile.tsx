'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function PixelSortProfile() {
  const [isGlitching, setIsGlitching] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsGlitching(true);
      setTimeout(() => setIsGlitching(false), 200);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative flex items-center justify-center py-20">
      <motion.div
        className="relative w-80 h-80"
        onHoverStart={() => setIsGlitching(true)}
        onHoverEnd={() => setIsGlitching(false)}
      >
        {/* Main Image */}
        <div className="relative w-full h-full rounded-lg overflow-hidden border-4 border-cyber-blue">
          <div className="w-full h-full bg-gradient-to-br from-cyber-blue via-cyber-purple to-cyber-pink flex items-center justify-center text-8xl relative">
            👤

            {/* Pixel sort effect */}
            {isGlitching && (
              <>
                {[...Array(20)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute bg-cyber-blue/80"
                    style={{
                      left: 0,
                      top: `${(i / 20) * 100}%`,
                      width: '100%',
                      height: '5%',
                    }}
                    initial={{ x: 0 }}
                    animate={{
                      x: [(Math.random() - 0.5) * 50, 0],
                    }}
                    transition={{
                      duration: 0.15,
                      delay: i * 0.01,
                    }}
                  />
                ))}

                {/* RGB Split */}
                <motion.div
                  className="absolute inset-0 mix-blend-screen"
                  style={{
                    background: 'linear-gradient(90deg, red, transparent, blue)',
                  }}
                  animate={{
                    x: [0, 5, -5, 0],
                  }}
                  transition={{ duration: 0.2 }}
                />
              </>
            )}

            {/* Scanlines */}
            <div
              className="absolute inset-0 pointer-events-none opacity-10"
              style={{
                backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 2px, black 2px, black 4px)',
              }}
            />
          </div>
        </div>

        {/* Corner effects */}
        {[0, 1, 2, 3].map((i) => (
          <motion.div
            key={i}
            className="absolute w-6 h-6"
            style={{
              top: i < 2 ? -2 : 'auto',
              bottom: i >= 2 ? -2 : 'auto',
              left: i % 2 === 0 ? -2 : 'auto',
              right: i % 2 === 1 ? -2 : 'auto',
            }}
            animate={{
              opacity: isGlitching ? [1, 0, 1] : 1,
              scale: isGlitching ? [1, 1.5, 1] : 1,
            }}
            transition={{ duration: 0.2 }}
          >
            <div className="w-full h-full border-cyber-pink" style={{
              borderTopWidth: i < 2 ? 3 : 0,
              borderBottomWidth: i >= 2 ? 3 : 0,
              borderLeftWidth: i % 2 === 0 ? 3 : 0,
              borderRightWidth: i % 2 === 1 ? 3 : 0,
            }} />
          </motion.div>
        ))}

        <div className="text-center mt-6">
          <p className="text-sm text-gray-400">Hover for glitch effect</p>
        </div>
      </motion.div>
    </div>
  );
}

