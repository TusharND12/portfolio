'use client';

import { motion } from 'framer-motion';

interface InfiniteScrollProps {
  items: string[];
  speed?: number;
}

export default function InfiniteScroll({ items, speed = 30 }: InfiniteScrollProps) {
  return (
    <div className="relative overflow-hidden py-8">
      <div className="flex">
        <motion.div
          className="flex space-x-8"
          animate={{
            x: [0, -1000],
          }}
          transition={{
            duration: speed,
            repeat: Infinity,
            ease: 'linear',
          }}
        >
          {[...items, ...items, ...items].map((item, index) => (
            <div
              key={index}
              className="glass px-6 py-3 rounded-full whitespace-nowrap text-sm font-semibold"
            >
              {item}
            </div>
          ))}
        </motion.div>
      </div>

      {/* Fade edges */}
      <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-black to-transparent pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-black to-transparent pointer-events-none" />
    </div>
  );
}

