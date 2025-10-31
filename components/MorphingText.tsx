'use client';

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

interface MorphingTextProps {
  texts: string[];
  className?: string;
}

export default function MorphingText({ texts, className = '' }: MorphingTextProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % texts.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [texts.length]);

  return (
    <div className={`relative ${className}`}>
      {texts.map((text, index) => (
        <motion.span
          key={index}
          className="absolute inset-0"
          initial={{ opacity: 0, y: 20, filter: 'blur(10px)' }}
          animate={{
            opacity: currentIndex === index ? 1 : 0,
            y: currentIndex === index ? 0 : -20,
            filter: currentIndex === index ? 'blur(0px)' : 'blur(10px)',
          }}
          transition={{
            duration: 0.5,
            ease: 'easeOut',
          }}
        >
          {text}
        </motion.span>
      ))}
      {/* Invisible text for spacing */}
      <span className="opacity-0">{texts[0]}</span>
    </div>
  );
}

