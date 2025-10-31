'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Code, Zap, Heart, Trophy } from 'lucide-react';

export default function FlipCardProfile() {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div className="relative flex items-center justify-center py-20">
      <div
        className="relative w-80 h-96 cursor-pointer perspective-1000"
        onMouseEnter={() => setIsFlipped(true)}
        onMouseLeave={() => setIsFlipped(false)}
      >
        <motion.div
          className="relative w-full h-full preserve-3d"
          animate={{ rotateY: isFlipped ? 180 : 0 }}
          transition={{ duration: 0.6, type: 'spring' }}
        >
          {/* Front Side - Image */}
          <div
            className="absolute inset-0 backface-hidden"
            style={{ backfaceVisibility: 'hidden' }}
          >
            <div className="w-full h-full card flex flex-col items-center justify-center relative overflow-hidden">
              {/* Animated border */}
              <motion.div
                className="absolute inset-0 border-4 border-cyber-blue rounded-lg"
                animate={{
                  borderColor: ['#3a86ff', '#8338ec', '#ff006e', '#3a86ff'],
                }}
                transition={{ duration: 3, repeat: Infinity }}
              />

              {/* Profile Image */}
              <div className="w-48 h-48 rounded-full overflow-hidden mb-4 border-4 border-cyber-blue relative">
                <div className="w-full h-full bg-gradient-to-br from-cyber-blue via-cyber-purple to-cyber-pink flex items-center justify-center text-6xl">
                  👤
                </div>
                {/* Scan line */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-b from-transparent via-white/20 to-transparent"
                  animate={{ y: ['-100%', '200%'] }}
                  transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
                />
              </div>

              <h3 className="text-2xl font-bold gradient-text mb-2">Your Name</h3>
              <p className="text-gray-400">Full-Stack Developer</p>

              <div className="mt-6 text-sm text-gray-500 animate-pulse">
                Hover to flip →
              </div>
            </div>
          </div>

          {/* Back Side - Info */}
          <div
            className="absolute inset-0 backface-hidden"
            style={{
              backfaceVisibility: 'hidden',
              transform: 'rotateY(180deg)',
            }}
          >
            <div className="w-full h-full card-cyber flex flex-col items-center justify-center p-8">
              <h3 className="text-2xl font-bold gradient-text mb-6">Quick Stats</h3>

              <div className="space-y-4 w-full">
                <div className="flex items-center space-x-3">
                  <Code className="text-cyber-blue" size={24} />
                  <div>
                    <div className="text-sm text-gray-400">Lines of Code</div>
                    <div className="text-xl font-bold text-cyber-blue">100K+</div>
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <Trophy className="text-cyber-green" size={24} />
                  <div>
                    <div className="text-sm text-gray-400">Projects</div>
                    <div className="text-xl font-bold text-cyber-green">50+</div>
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <Zap className="text-cyber-yellow" size={24} />
                  <div>
                    <div className="text-sm text-gray-400">Experience</div>
                    <div className="text-xl font-bold text-cyber-yellow">5+ Years</div>
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <Heart className="text-cyber-pink" size={24} />
                  <div>
                    <div className="text-sm text-gray-400">Passion</div>
                    <div className="text-xl font-bold text-cyber-pink">∞</div>
                  </div>
                </div>
              </div>

              <div className="mt-6 text-sm text-gray-500 animate-pulse">
                ← Hover out to flip back
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

