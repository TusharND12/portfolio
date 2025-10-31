'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { Mail, Github, Linkedin, Code, Zap, Trophy, Heart } from 'lucide-react';
import { personalInfo } from '@/lib/data';
import { useRef, useState } from 'react';

export default function ConnectWithMe() {
  const [isFlipped, setIsFlipped] = useState(false);
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });

  // Card moves with parallax
  const y1 = useTransform(scrollYProgress, [0, 1], [50, -50]);

  return (
    <div ref={sectionRef} className="py-20 px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <h2 className="text-4xl font-bold gradient-text mb-4">
          Connect With Me
        </h2>
        <p className="text-gray-400">Let's build something amazing together</p>
      </motion.div>

      <div className="max-w-2xl mx-auto">
        {/* Flippable Card with Parallax */}
        <div className="perspective-1000">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            style={{ y: y1 }}
            className="relative w-full aspect-[1.75/1] cursor-pointer"
            onClick={() => setIsFlipped(!isFlipped)}
          >
            <motion.div
              className="relative w-full h-full preserve-3d"
              animate={{ rotateY: isFlipped ? 180 : 0 }}
              transition={{ duration: 0.6, type: 'spring', stiffness: 120 }}
            >
              {/* FRONT SIDE */}
              <div
                className="absolute inset-0 backface-hidden rounded-2xl overflow-hidden shadow-2xl glass border border-white/20"
                style={{ backfaceVisibility: 'hidden' }}
              >
            {/* Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-gray-900 to-black" />
            
                {/* Grid Pattern */}
                <div className="absolute inset-0 opacity-10">
                  <div className="w-full h-full" style={{
                    backgroundImage: 'linear-gradient(rgba(58, 134, 255, 0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(58, 134, 255, 0.3) 1px, transparent 1px)',
                    backgroundSize: '20px 20px',
                  }} />
                </div>

                {/* FULL SCAN EFFECT */}
                <motion.div
                  className="absolute inset-x-0 h-full pointer-events-none"
                  style={{
                    background: 'linear-gradient(180deg, transparent 0%, rgba(58, 134, 255, 0.15) 45%, rgba(58, 134, 255, 0.3) 50%, rgba(58, 134, 255, 0.15) 55%, transparent 100%)',
                    boxShadow: '0 0 40px rgba(58, 134, 255, 0.4)',
                  }}
                  animate={{
                    y: ['-100%', '200%', '-100%'],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: 'linear',
                  }}
                />
                
                {/* Horizontal scan lines */}
                <div className="absolute inset-0 pointer-events-none opacity-20">
                  <div className="w-full h-full" style={{
                    backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(58, 134, 255, 0.1) 2px, rgba(58, 134, 255, 0.1) 4px)',
                  }} />
                </div>

                {/* Corner Brackets */}
                {[0, 1, 2, 3].map((i) => (
                  <div
                    key={i}
                    className="absolute w-8 h-8 border-cyber-blue"
                    style={{
                      top: i < 2 ? 8 : 'auto',
                      bottom: i >= 2 ? 8 : 'auto',
                      left: i % 2 === 0 ? 8 : 'auto',
                      right: i % 2 === 1 ? 8 : 'auto',
                      borderTopWidth: i < 2 ? 2 : 0,
                      borderBottomWidth: i >= 2 ? 2 : 0,
                      borderLeftWidth: i % 2 === 0 ? 2 : 0,
                      borderRightWidth: i % 2 === 1 ? 2 : 0,
                    }}
                  />
                ))}

                {/* Content */}
                <div className="relative z-10 p-8 h-full flex flex-col justify-between">
                  <div>
                    <div className="text-xs text-cyber-blue mb-3 font-mono">{'<DEVELOPER/>'}</div>
                    <h3 className="text-3xl font-bold gradient-text mb-2">
                      {personalInfo.name}
                    </h3>
                    <p className="text-gray-300 text-lg">{personalInfo.title}</p>
                  </div>

                  <div className="space-y-2">
                    <div className="text-sm text-gray-400">{personalInfo.email}</div>
                    <div className="text-sm text-gray-400">{personalInfo.location}</div>
                  </div>

                  {/* Social Icons */}
                  <div className="flex justify-between items-center">
                    <div className="flex space-x-3">
                      <a
                        href={personalInfo.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-lg bg-white/10 hover:bg-cyber-blue/30 transition-colors"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <Github size={16} className="text-white" />
                      </a>
                      <a
                        href={personalInfo.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-lg bg-white/10 hover:bg-cyber-blue/30 transition-colors"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <Linkedin size={16} className="text-white" />
                      </a>
                      <a
                        href={`mailto:${personalInfo.email}`}
                        className="p-2 rounded-lg bg-white/10 hover:bg-cyber-blue/30 transition-colors"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <Mail size={16} className="text-white" />
                      </a>
                    </div>
                    <div className="text-xs text-gray-500">Click to flip →</div>
                  </div>
                </div>
              </div>

              {/* BACK SIDE */}
              <div
                className="absolute inset-0 backface-hidden rounded-2xl overflow-hidden shadow-2xl"
                style={{
                  backfaceVisibility: 'hidden',
                  transform: 'rotateY(180deg)',
                }}
              >
                <div className="w-full h-full glass border border-white/20 bg-gradient-to-br from-gray-900 via-gray-800 to-black">
                  {/* Background Pattern */}
                  <div className="absolute inset-0 opacity-5">
                    <div className="w-full h-full" style={{
                      backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)',
                      backgroundSize: '30px 30px',
                    }} />
                  </div>

                  {/* Content */}
                  <div className="relative z-10 p-8 h-full flex flex-col justify-between">
                    <div>
                      <div className="text-xs text-cyber-purple mb-3 font-mono">{'</STATS>'}</div>
                      <h3 className="text-2xl font-bold gradient-text mb-6">Quick Stats</h3>
                      
                      <div className="grid grid-cols-2 gap-4">
                        <div className="text-center p-4 rounded-lg bg-cyber-blue/10 border border-cyber-blue/30">
                          <Code className="text-cyber-blue mx-auto mb-2" size={24} />
                          <div className="text-2xl font-bold text-cyber-blue">100K+</div>
                          <div className="text-xs text-gray-400">Lines of Code</div>
                        </div>
                        
                        <div className="text-center p-4 rounded-lg bg-cyber-purple/10 border border-cyber-purple/30">
                          <Zap className="text-cyber-purple mx-auto mb-2" size={24} />
                          <div className="text-2xl font-bold text-cyber-purple">5+</div>
                          <div className="text-xs text-gray-400">Years Exp</div>
                        </div>
                        
                        <div className="text-center p-4 rounded-lg bg-cyber-green/10 border border-cyber-green/30">
                          <Trophy className="text-cyber-green mx-auto mb-2" size={24} />
                          <div className="text-2xl font-bold text-cyber-green">50+</div>
                          <div className="text-xs text-gray-400">Projects</div>
                        </div>
                        
                        <div className="text-center p-4 rounded-lg bg-cyber-pink/10 border border-cyber-pink/30">
                          <Heart className="text-cyber-pink mx-auto mb-2" size={24} />
                          <div className="text-2xl font-bold text-cyber-pink">100%</div>
                          <div className="text-xs text-gray-400">Passion</div>
                        </div>
                      </div>
                    </div>

                    <div className="text-center">
                      <div className="text-xs text-gray-500">← Click to flip back</div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

    </div>
  );
}
