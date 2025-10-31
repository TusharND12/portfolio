'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

export default function LoadingScreen() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + Math.random() * 15;
      });
    }, 100);

    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: progress >= 100 ? 0 : 1 }}
      transition={{ duration: 0.5 }}
      className="fixed inset-0 z-50 bg-black flex items-center justify-center"
      style={{ pointerEvents: progress >= 100 ? 'none' : 'auto' }}
    >
      <div className="text-center space-y-8">
        {/* Logo/Title */}
        <motion.div
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-5xl font-bold gradient-text mb-2">
            Full Stack Developer
          </h1>
          <p className="text-gray-400">Initializing...</p>
        </motion.div>

        {/* Loading Bar */}
        <div className="w-64 h-2 bg-gray-800 rounded-full overflow-hidden">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: `${Math.min(progress, 100)}%` }}
            className="h-full bg-gradient-to-r from-cyber-blue via-cyber-purple to-cyber-pink"
          />
        </div>

        {/* Progress Percentage */}
        <p className="text-gray-400 font-mono">
          {Math.min(Math.floor(progress), 100)}%
        </p>

        {/* Orbiting Elements */}
        <div className="relative w-32 h-32 mx-auto">
          {[...Array(3)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute inset-0"
              animate={{ rotate: 360 }}
              transition={{
                duration: 3 + i,
                repeat: Infinity,
                ease: 'linear',
              }}
            >
              <div
                className="absolute top-0 left-1/2 w-3 h-3 rounded-full -translate-x-1/2"
                style={{
                  background: ['#3a86ff', '#8338ec', '#ff006e'][i],
                }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

