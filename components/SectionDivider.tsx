'use client';

import { motion } from 'framer-motion';

interface SectionDividerProps {
  variant?: 'wave' | 'particles' | 'line' | 'gradient';
}

export default function SectionDivider({ variant = 'wave' }: SectionDividerProps) {
  if (variant === 'wave') {
    return (
      <div className="relative h-24 overflow-hidden">
        <svg
          className="absolute bottom-0 w-full h-24"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <motion.path
            d="M0,50 Q300,0 600,50 T1200,50 L1200,120 L0,120 Z"
            fill="url(#waveGradient)"
            animate={{
              d: [
                'M0,50 Q300,0 600,50 T1200,50 L1200,120 L0,120 Z',
                'M0,50 Q300,100 600,50 T1200,50 L1200,120 L0,120 Z',
                'M0,50 Q300,0 600,50 T1200,50 L1200,120 L0,120 Z',
              ],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
          <defs>
            <linearGradient id="waveGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="rgba(58, 134, 255, 0.1)" />
              <stop offset="50%" stopColor="rgba(131, 56, 236, 0.1)" />
              <stop offset="100%" stopColor="rgba(255, 0, 110, 0.1)" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    );
  }

  if (variant === 'particles') {
    return (
      <div className="relative h-16 my-8">
        <div className="flex items-center justify-center space-x-2">
          {[...Array(50)].map((_, i) => (
            <motion.div
              key={i}
              className="w-1 h-1 rounded-full bg-cyber-blue"
              animate={{
                opacity: [0.2, 1, 0.2],
                scale: [0.5, 1.5, 0.5],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: i * 0.02,
              }}
            />
          ))}
        </div>
      </div>
    );
  }

  if (variant === 'gradient') {
    return (
      <div className="relative h-1 my-12">
        <motion.div
          className="h-full bg-gradient-to-r from-transparent via-cyber-blue to-transparent"
          animate={{
            backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: 'linear',
          }}
          style={{ backgroundSize: '200% 100%' }}
        />
      </div>
    );
  }

  return (
    <div className="relative h-px my-12 bg-gradient-to-r from-transparent via-gray-700 to-transparent" />
  );
}

