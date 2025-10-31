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
                      <div className="text-xs text-cyber-purple mb-3 font-mono">{'</CONTACT>'}</div>
                      <h3 className="text-2xl font-bold gradient-text mb-6">Get In Touch</h3>
                      
                      {/* QR Code Section */}
                      <div className="mb-6 p-5 rounded-2xl bg-gradient-to-br from-gray-800/60 to-gray-900/60 border border-cyber-blue/30 shadow-2xl backdrop-blur-sm">
                        <div className="flex items-center justify-between">
                          <div className="flex-1">
                            <div className="text-lg font-semibold text-cyber-blue mb-2 flex items-center">
                              <span className="mr-2">📄</span>
                              Resume QR Code
                            </div>
                            <div className="text-sm text-gray-300 mb-3">
                              Scan to view my resume
                            </div>
                            <div className="text-xs text-cyber-green font-mono bg-gray-800/50 px-2 py-1 rounded">
                              {personalInfo.email}
                            </div>
                          </div>
                          <div className="ml-6 relative">
                            {/* Glow effect container */}
                            <div className="relative">
                              {/* Outer glow ring */}
                              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-cyber-blue/20 via-cyber-purple/20 to-cyber-green/20 blur-sm animate-pulse"></div>
                              
                              {/* Main QR container */}
                              <div className="relative w-24 h-24 bg-white rounded-2xl border-2 border-cyber-blue/60 shadow-xl flex items-center justify-center overflow-hidden">
                                {/* Inner gradient border */}
                                <div className="absolute inset-1 rounded-xl bg-gradient-to-br from-cyber-blue/10 to-cyber-purple/10"></div>
                                
                                {/* QR Code Image */}
                                <img 
                                  src="/images/resume-qr.png" 
                                  alt="Resume QR Code" 
                                  className="relative z-10 max-w-full max-h-full rounded-lg object-contain"
                                  style={{ width: '88px', height: '88px' }}
                                  loading="eager"
                                  onError={(e) => {
                                    console.log('QR code image failed to load');
                                    // Hide image if it fails
                                    e.currentTarget.style.display = 'none';
                                  }}
                                />
                                
                                {/* Simple and visible scan effects */}
                                <div className="absolute inset-0 pointer-events-none overflow-hidden rounded-2xl">
                                  {/* Main scanning line - very visible */}
                                  <motion.div
                                    className="absolute left-0 right-0 h-4 bg-gradient-to-r from-cyber-blue via-cyber-purple to-cyber-green shadow-2xl"
                                    style={{
                                      boxShadow: '0 0 20px rgba(58, 134, 255, 0.8)',
                                    }}
                                    animate={{
                                      y: ['0px', '80px', '0px'],
                                    }}
                                    transition={{
                                      duration: 2,
                                      repeat: Infinity,
                                      ease: 'linear',
                                    }}
                                  />
                                  
                                  {/* Corner indicators - very visible */}
                                  <div className="absolute top-1 left-1 w-6 h-6 border-2 border-cyber-blue rounded-full animate-ping opacity-100"></div>
                                  <div className="absolute top-1 right-1 w-6 h-6 border-2 border-cyber-purple rounded-full animate-ping opacity-100" style={{animationDelay: '0.3s'}}></div>
                                  <div className="absolute bottom-1 left-1 w-6 h-6 border-2 border-cyber-green rounded-full animate-ping opacity-100" style={{animationDelay: '0.6s'}}></div>
                                  <div className="absolute bottom-1 right-1 w-6 h-6 border-2 border-cyber-blue rounded-full animate-ping opacity-100" style={{animationDelay: '0.9s'}}></div>
                                  
                                  {/* Static border glow */}
                                  <div className="absolute inset-0 border-2 border-cyber-blue/50 rounded-2xl animate-pulse"></div>
                                </div>
                              </div>
                              
                              {/* Corner decorations */}
                              <div className="absolute -top-1 -left-1 w-3 h-3 border-t-2 border-l-2 border-cyber-blue rounded-tl-lg"></div>
                              <div className="absolute -top-1 -right-1 w-3 h-3 border-t-2 border-r-2 border-cyber-blue rounded-tr-lg"></div>
                              <div className="absolute -bottom-1 -left-1 w-3 h-3 border-b-2 border-l-2 border-cyber-blue rounded-bl-lg"></div>
                              <div className="absolute -bottom-1 -right-1 w-3 h-3 border-b-2 border-r-2 border-cyber-blue rounded-br-lg"></div>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Contact Details */}
                      <div className="space-y-3">
                        <div className="flex items-center space-x-3">
                          <Mail className="text-cyber-green" size={16} />
                          <div>
                            <div className="text-sm text-gray-300">Email</div>
                            <div className="text-xs text-gray-400">{personalInfo.email}</div>
                          </div>
                        </div>
                        
                        <div className="flex items-center space-x-3">
                          <div className="text-cyber-blue" style={{fontSize: '16px'}}>📍</div>
                          <div>
                            <div className="text-sm text-gray-300">Location</div>
                            <div className="text-xs text-gray-400">{personalInfo.location}</div>
                          </div>
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
