'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, Mail, MapPin, Zap, Coffee, Briefcase, MessageCircle, Check, Loader2, Calendar } from 'lucide-react';
import { personalInfo } from '@/lib/data';

const quickButtons = [
  { icon: <Zap size={20} />, label: 'Quick Question', color: '#ffbe0b' },
  { icon: <Briefcase size={20} />, label: 'Hire Me', color: '#3a86ff' },
  { icon: <Coffee size={20} />, label: 'Just Chat', color: '#8338ec' },
  { icon: <Calendar size={20} />, label: 'Schedule Call', color: '#06ffa5' },
];

export default function UltimateContact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  const [focusedField, setFocusedField] = useState<string | null>(null);
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [charCount, setCharCount] = useState(0);
  const [showConfetti, setShowConfetti] = useState(false);

  // Auto-save draft
  useEffect(() => {
    const saved = localStorage.getItem('contact-draft');
    if (saved) {
      setFormData(JSON.parse(saved));
    }
  }, []);

  useEffect(() => {
    if (formData.name || formData.email || formData.message) {
      localStorage.setItem('contact-draft', JSON.stringify(formData));
    }
  }, [formData]);

  // Live validation
  const validateEmail = (email: string) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const handleChange = (field: string, value: string) => {
    setFormData({ ...formData, [field]: value });

    if (field === 'message') {
      setCharCount(value.length);
    }

    // Clear error when user types
    if (errors[field]) {
      setErrors({ ...errors, [field]: '' });
    }

    // Live email validation
    if (field === 'email' && value) {
      if (!validateEmail(value)) {
        setErrors({ ...errors, email: 'Invalid email format' });
      } else {
        setErrors({ ...errors, email: '' });
      }
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validation
    const newErrors: { [key: string]: string } = {};
    if (!formData.name) newErrors.name = 'Name is required';
    if (!formData.email) newErrors.email = 'Email is required';
    else if (!validateEmail(formData.email)) newErrors.email = 'Invalid email';
    if (!formData.message) newErrors.message = 'Message is required';

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setStatus('sending');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus('success');
        setShowConfetti(true);
        setFormData({ name: '', email: '', message: '' });
        localStorage.removeItem('contact-draft');
        setTimeout(() => {
          setStatus('idle');
          setShowConfetti(false);
        }, 5000);
      } else {
        setStatus('error');
        setTimeout(() => setStatus('idle'), 3000);
      }
    } catch (error) {
      setStatus('error');
      setTimeout(() => setStatus('idle'), 3000);
    }
  };

  return (
    <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Confetti Effect */}
      {showConfetti && (
        <div className="fixed inset-0 pointer-events-none z-50">
          {[...Array(50)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-3 h-3 rounded-full"
              style={{
                left: '50%',
                top: '50%',
                backgroundColor: ['#3a86ff', '#8338ec', '#ff006e', '#06ffa5', '#ffbe0b'][i % 5],
              }}
              initial={{ scale: 0, x: 0, y: 0 }}
              animate={{
                scale: [0, 1, 1, 0],
                x: (Math.random() - 0.5) * 1000,
                y: (Math.random() - 0.5) * 1000,
                rotate: Math.random() * 360,
              }}
              transition={{
                duration: 2,
                delay: i * 0.02,
              }}
            />
          ))}
        </div>
      )}

      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-4">
            <span className="gradient-text">Get In Touch</span>
          </h2>
          <p className="text-gray-400 text-xl max-w-2xl mx-auto">
            Let&apos;s create something extraordinary together
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Side - Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Quick Contact Buttons */}
            <div>
              <h3 className="text-xl font-bold mb-4">What brings you here?</h3>
              <div className="grid grid-cols-1 gap-3">
                {quickButtons.map((btn, index) => (
                  <motion.button
                    key={index}
                    whileHover={{ scale: 1.05, x: 10 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center space-x-3 p-4 glass rounded-lg hover:border transition-all"
                    style={{
                      borderColor: focusedField ? btn.color : 'transparent',
                    }}
                    onClick={() => {
                      setFormData({
                        ...formData,
                        message: `${btn.label}: `,
                      });
                    }}
                  >
                    <div
                      className="p-2 rounded-lg"
                      style={{ backgroundColor: `${btn.color}22` }}
                    >
                      <div style={{ color: btn.color }}>{btn.icon}</div>
                    </div>
                    <span className="font-semibold">{btn.label}</span>
                  </motion.button>
                ))}
              </div>
            </div>

            {/* Contact Information */}
            <div className="card">
              <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
              <div className="space-y-4">
                <motion.div
                  whileHover={{ x: 5 }}
                  className="flex items-start space-x-4"
                >
                  <div className="p-3 rounded-lg bg-cyber-blue/20">
                    <Mail className="text-cyber-blue" size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Email</h4>
                    <a
                      href={`mailto:${personalInfo.email}`}
                      className="text-gray-400 hover:text-cyber-blue transition-colors"
                    >
                      {personalInfo.email}
                    </a>
                  </div>
                </motion.div>

                <motion.div
                  whileHover={{ x: 5 }}
                  className="flex items-start space-x-4"
                >
                  <div className="p-3 rounded-lg bg-cyber-purple/20">
                    <MapPin className="text-cyber-purple" size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Location</h4>
                    <p className="text-gray-400">{personalInfo.location}</p>
                  </div>
                </motion.div>
              </div>
            </div>

            {/* Availability */}
            <div className="card">
              <h4 className="font-bold mb-4 flex items-center space-x-2">
                <div className="w-3 h-3 rounded-full bg-cyber-green animate-pulse" />
                <span>Available For</span>
              </h4>
              <ul className="space-y-2 text-gray-400">
                <li className="flex items-center space-x-2">
                  <span className="text-cyber-green">✓</span>
                  <span>Full-time opportunities</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="text-cyber-green">✓</span>
                  <span>Freelance projects</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="text-cyber-green">✓</span>
                  <span>Consulting</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="text-cyber-green">✓</span>
                  <span>Collaboration</span>
                </li>
              </ul>
            </div>
          </motion.div>

          {/* Right Side - Enhanced Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <form onSubmit={handleSubmit} className="card relative">
              {/* Form particles background */}
              <div className="absolute inset-0 pointer-events-none overflow-hidden rounded-lg">
                {focusedField && [...Array(20)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute w-1 h-1 rounded-full bg-cyber-blue"
                    style={{
                      left: `${Math.random() * 100}%`,
                      top: `${Math.random() * 100}%`,
                    }}
                    animate={{
                      opacity: [0, 1, 0],
                      scale: [0, 1.5, 0],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: i * 0.1,
                    }}
                  />
                ))}
              </div>

              <div className="space-y-6 relative z-10">
                {/* Name Field */}
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2 flex items-center justify-between">
                    <span>Name</span>
                    {formData.name && <Check size={16} className="text-cyber-green" />}
                  </label>
                  <motion.div
                    animate={{
                      boxShadow: focusedField === 'name'
                        ? '0 0 20px rgba(58, 134, 255, 0.5)'
                        : '0 0 0px rgba(58, 134, 255, 0)',
                    }}
                    className="relative rounded-lg"
                  >
                    <input
                      type="text"
                      id="name"
                      value={formData.name}
                      onChange={(e) => handleChange('name', e.target.value)}
                      onFocus={() => setFocusedField('name')}
                      onBlur={() => setFocusedField(null)}
                      className={`w-full px-4 py-3 rounded-lg bg-gray-900 border-2 transition-all ${
                        focusedField === 'name'
                          ? 'border-cyber-blue'
                          : errors.name
                          ? 'border-red-500'
                          : 'border-gray-700'
                      } focus:outline-none`}
                      placeholder="Your name"
                    />
                    {/* Neon glow line */}
                    {focusedField === 'name' && (
                      <motion.div
                        layoutId="activeField"
                        className="absolute -bottom-0.5 left-0 right-0 h-0.5 bg-cyber-blue"
                        style={{ boxShadow: '0 0 10px rgba(58, 134, 255, 0.8)' }}
                      />
                    )}
                  </motion.div>
                  {errors.name && (
                    <motion.p
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="text-red-400 text-sm mt-1"
                    >
                      {errors.name}
                    </motion.p>
                  )}
                </div>

                {/* Email Field */}
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2 flex items-center justify-between">
                    <span>Email</span>
                    {formData.email && !errors.email && <Check size={16} className="text-cyber-green" />}
                  </label>
                  <motion.div
                    animate={{
                      boxShadow: focusedField === 'email'
                        ? '0 0 20px rgba(58, 134, 255, 0.5)'
                        : '0 0 0px rgba(58, 134, 255, 0)',
                    }}
                    className="relative rounded-lg"
                  >
                    <input
                      type="email"
                      id="email"
                      value={formData.email}
                      onChange={(e) => handleChange('email', e.target.value)}
                      onFocus={() => setFocusedField('email')}
                      onBlur={() => setFocusedField(null)}
                      className={`w-full px-4 py-3 rounded-lg bg-gray-900 border-2 transition-all ${
                        focusedField === 'email'
                          ? 'border-cyber-blue'
                          : errors.email
                          ? 'border-red-500'
                          : formData.email && !errors.email
                          ? 'border-cyber-green'
                          : 'border-gray-700'
                      } focus:outline-none`}
                      placeholder="your.email@example.com"
                    />
                    {focusedField === 'email' && (
                      <motion.div
                        layoutId="activeField"
                        className="absolute -bottom-0.5 left-0 right-0 h-0.5 bg-cyber-blue"
                        style={{ boxShadow: '0 0 10px rgba(58, 134, 255, 0.8)' }}
                      />
                    )}
                  </motion.div>
                  {errors.email && (
                    <motion.p
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="text-red-400 text-sm mt-1"
                    >
                      {errors.email}
                    </motion.p>
                  )}
                </div>

                {/* Message Field */}
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2 flex items-center justify-between">
                    <span>Message</span>
                    <span className={`text-xs ${charCount > 500 ? 'text-cyber-green' : 'text-gray-400'}`}>
                      {charCount} / 500 characters
                    </span>
                  </label>
                  <motion.div
                    animate={{
                      boxShadow: focusedField === 'message'
                        ? '0 0 20px rgba(58, 134, 255, 0.5)'
                        : '0 0 0px rgba(58, 134, 255, 0)',
                    }}
                    className="relative rounded-lg"
                  >
                    <textarea
                      id="message"
                      rows={6}
                      value={formData.message}
                      onChange={(e) => handleChange('message', e.target.value)}
                      onFocus={() => setFocusedField('message')}
                      onBlur={() => setFocusedField(null)}
                      className={`w-full px-4 py-3 rounded-lg bg-gray-900 border-2 transition-all resize-none ${
                        focusedField === 'message'
                          ? 'border-cyber-blue'
                          : errors.message
                          ? 'border-red-500'
                          : 'border-gray-700'
                      } focus:outline-none`}
                      placeholder="Tell me about your project..."
                    />
                    {/* Character progress bar */}
                    <motion.div
                      className="absolute bottom-0 left-0 h-1 bg-cyber-blue rounded-b-lg"
                      initial={{ width: 0 }}
                      animate={{ width: `${(charCount / 500) * 100}%` }}
                      style={{
                        boxShadow: charCount > 400 ? '0 0 10px rgba(58, 134, 255, 0.8)' : 'none',
                      }}
                    />
                    {focusedField === 'message' && (
                      <motion.div
                        layoutId="activeField"
                        className="absolute -bottom-0.5 left-0 right-0 h-0.5 bg-cyber-blue"
                        style={{ boxShadow: '0 0 10px rgba(58, 134, 255, 0.8)' }}
                      />
                    )}
                  </motion.div>
                  {errors.message && (
                    <motion.p
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="text-red-400 text-sm mt-1"
                    >
                      {errors.message}
                    </motion.p>
                  )}
                </div>

                {/* Morphing Submit Button */}
                <motion.button
                  type="submit"
                  disabled={status === 'sending'}
                  whileHover={{ scale: status === 'sending' ? 1 : 1.05 }}
                  whileTap={{ scale: status === 'sending' ? 1 : 0.95 }}
                  className="w-full btn-primary flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed relative overflow-hidden"
                >
                  <AnimatePresence mode="wait">
                    {status === 'idle' && (
                      <motion.div
                        key="idle"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="flex items-center space-x-2"
                      >
                        <Send size={20} />
                        <span>Send Message</span>
                      </motion.div>
                    )}

                    {status === 'sending' && (
                      <motion.div
                        key="sending"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="flex items-center space-x-2"
                      >
                        <Loader2 size={20} className="animate-spin" />
                        <span>Sending...</span>
                      </motion.div>
                    )}

                    {status === 'success' && (
                      <motion.div
                        key="success"
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.5 }}
                        className="flex items-center space-x-2"
                      >
                        <Check size={20} className="text-cyber-green" />
                        <span className="text-cyber-green">Message Sent! 🎉</span>
                      </motion.div>
                    )}

                    {status === 'error' && (
                      <motion.div
                        key="error"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 20 }}
                        className="flex items-center space-x-2"
                      >
                        <span>✗</span>
                        <span>Error! Try again</span>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  {/* Button hover effect */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-cyber-purple to-cyber-pink opacity-0"
                    whileHover={{ opacity: 0.2 }}
                  />
                </motion.button>

                {/* Auto-save indicator */}
                {(formData.name || formData.email || formData.message) && (
                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="text-xs text-gray-500 text-center"
                  >
                    💾 Draft auto-saved
                  </motion.p>
                )}
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

