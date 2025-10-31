'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const KONAMI_CODE = [
  'ArrowUp',
  'ArrowUp',
  'ArrowDown',
  'ArrowDown',
  'ArrowLeft',
  'ArrowRight',
  'ArrowLeft',
  'ArrowRight',
  'b',
  'a',
];

export default function KonamiCode() {
  const [keys, setKeys] = useState<string[]>([]);
  const [activated, setActivated] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      setKeys((prevKeys) => {
        const newKeys = [...prevKeys, e.key].slice(-10);
        
        if (JSON.stringify(newKeys) === JSON.stringify(KONAMI_CODE)) {
          setActivated(true);
          setTimeout(() => setActivated(false), 5000);
          return [];
        }
        
        return newKeys;
      });
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <AnimatePresence>
      {activated && (
        <motion.div
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          exit={{ scale: 0, rotate: 180 }}
          className="fixed inset-0 z-50 flex items-center justify-center pointer-events-none"
        >
          <div className="text-center">
            <motion.div
              animate={{
                scale: [1, 1.2, 1],
                rotate: [0, 360],
              }}
              transition={{ duration: 2, repeat: Infinity }}
              className="text-9xl mb-4"
            >
              🎮
            </motion.div>
            <motion.h2
              className="text-5xl font-bold gradient-text mb-4"
              animate={{ opacity: [0, 1, 1, 0] }}
              transition={{ duration: 4 }}
            >
              KONAMI CODE ACTIVATED!
            </motion.h2>
            <motion.p
              className="text-2xl text-cyber-green"
              animate={{ opacity: [0, 1, 1, 0] }}
              transition={{ duration: 4 }}
            >
              🏆 Achievement Unlocked: Secret Master
            </motion.p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

