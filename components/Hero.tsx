'use client';

import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Twitter, ChevronDown } from 'lucide-react';
import { personalInfo } from '@/lib/data';
import { useThemeStore } from '@/lib/store';

const socialLinks = [
  { icon: <Github size={24} />, href: personalInfo.github, label: 'GitHub' },
  { icon: <Linkedin size={24} />, href: personalInfo.linkedin, label: 'LinkedIn' },
  { icon: <Twitter size={24} />, href: personalInfo.twitter, label: 'Twitter' },
  { icon: <Mail size={24} />, href: `mailto:${personalInfo.email}`, label: 'Email' },
];

export default function Hero() {
  const mode = useThemeStore((state) => state.mode);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 z-0">
        {mode === 'cyberpunk' && (
          <div className="absolute inset-0 bg-gradient-to-br from-cyber-purple/20 via-cyber-blue/20 to-cyber-pink/20 animate-pulse-slow" />
        )}
        {mode === 'terminal' && (
          <div className="matrix-bg absolute inset-0 bg-terminal-bg opacity-50" />
        )}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/50 to-black" />
        
        {/* Floating particles */}
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-cyber-blue rounded-full opacity-20"
            animate={{
              x: [Math.random() * window.innerWidth, Math.random() * window.innerWidth],
              y: [Math.random() * window.innerHeight, Math.random() * window.innerHeight],
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              repeatType: 'reverse',
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1
            className="text-5xl md:text-7xl font-bold mb-6"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <span className="gradient-text">
              {personalInfo.name}
            </span>
          </motion.h1>

          <motion.h2
            className="text-2xl md:text-4xl text-gray-300 mb-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            {personalInfo.title}
          </motion.h2>

          <motion.p
            className="text-lg md:text-xl text-gray-400 mb-8 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            {personalInfo.tagline}
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.8 }}
          >
            <a href="#projects" className="btn-primary w-full sm:w-auto">
              View My Work
            </a>
            <a
              href="#contact"
              className="px-6 py-3 glass rounded-lg font-semibold transition-all duration-300 hover:scale-105 w-full sm:w-auto"
            >
              Get In Touch
            </a>
          </motion.div>

          {/* Social Links */}
          <motion.div
            className="flex items-center justify-center space-x-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9, duration: 0.8 }}
          >
            {socialLinks.map((link, index) => (
              <motion.a
                key={index}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-cyber-blue transition-colors"
                whileHover={{ scale: 1.2, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
                aria-label={link.label}
              >
                {link.icon}
              </motion.a>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <ChevronDown className="text-gray-400" size={32} />
      </motion.div>
    </section>
  );
}

