'use client';

import { useState, useEffect } from 'react';
import { useThemeStore } from '@/lib/store';
import { ThemeMode } from '@/lib/store';
import { Menu, X, Terminal, Rocket, Zap, Briefcase } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const themes: { mode: ThemeMode; icon: JSX.Element; label: string }[] = [
  { mode: 'universe', icon: <Rocket size={20} />, label: '3D Universe' },
  { mode: 'terminal', icon: <Terminal size={20} />, label: 'Terminal' },
  { mode: 'cyberpunk', icon: <Zap size={20} />, label: 'Cyberpunk' },
  { mode: 'professional', icon: <Briefcase size={20} />, label: 'Professional' },
];

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { mode, setMode, toggleTerminal } = useThemeStore();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'glass shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center space-x-2"
          >
            <span className="text-2xl font-bold gradient-text">Full Stack Developer</span>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#about" className="hover:text-cyber-blue transition-colors">
              About
            </a>
            <a href="#projects" className="hover:text-cyber-purple transition-colors">
              Projects
            </a>
            <a href="#skills" className="hover:text-cyber-pink transition-colors">
              Skills
            </a>
            <a href="#contact" className="hover:text-cyber-green transition-colors">
              Contact
            </a>
          </div>

          {/* Theme Switcher & Terminal Toggle */}
          <div className="hidden md:flex items-center space-x-4">
            <div className="flex items-center space-x-2 glass px-3 py-2 rounded-lg">
              {themes.map((theme) => (
                <motion.button
                  key={theme.mode}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setMode(theme.mode)}
                  className={`p-2 rounded transition-colors ${
                    mode === theme.mode
                      ? 'bg-cyber-blue text-white'
                      : 'text-gray-400 hover:text-white'
                  }`}
                  title={theme.label}
                >
                  {theme.icon}
                </motion.button>
              ))}
            </div>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={toggleTerminal}
              className="px-4 py-2 glass rounded-lg hover:bg-terminal-text hover:text-terminal-bg transition-all font-mono text-sm"
            >
              Terminal
            </motion.button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg glass"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden glass"
          >
            <div className="px-4 pt-2 pb-4 space-y-3">
              <a
                href="#about"
                className="block py-2 hover:text-cyber-blue transition-colors"
                onClick={() => setIsOpen(false)}
              >
                About
              </a>
              <a
                href="#projects"
                className="block py-2 hover:text-cyber-purple transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Projects
              </a>
              <a
                href="#skills"
                className="block py-2 hover:text-cyber-pink transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Skills
              </a>
              <a
                href="#contact"
                className="block py-2 hover:text-cyber-green transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Contact
              </a>

              <div className="pt-4 border-t border-gray-700">
                <p className="text-sm text-gray-400 mb-2">Theme</p>
                <div className="grid grid-cols-2 gap-2">
                  {themes.map((theme) => (
                    <button
                      key={theme.mode}
                      onClick={() => {
                        setMode(theme.mode);
                        setIsOpen(false);
                      }}
                      className={`flex items-center space-x-2 p-2 rounded transition-colors ${
                        mode === theme.mode
                          ? 'bg-cyber-blue text-white'
                          : 'glass text-gray-400 hover:text-white'
                      }`}
                    >
                      {theme.icon}
                      <span className="text-sm">{theme.label}</span>
                    </button>
                  ))}
                </div>
              </div>

              <button
                onClick={() => {
                  toggleTerminal();
                  setIsOpen(false);
                }}
                className="w-full mt-4 px-4 py-2 glass rounded-lg hover:bg-terminal-text hover:text-terminal-bg transition-all flex items-center justify-center space-x-2"
              >
                <Terminal size={20} />
                <span>Open Terminal</span>
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}

