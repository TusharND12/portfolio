'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Mail } from 'lucide-react';

export default function CallToAction() {
  return (
    <div className="py-20 px-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        className="max-w-4xl mx-auto card-cyber text-center relative overflow-hidden"
      >
        {/* Background Effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-cyber-blue/10 via-cyber-purple/10 to-cyber-pink/10 animate-pulse-slow" />
        
        <div className="relative z-10 p-12">
          <motion.h2
            className="text-4xl md:text-5xl font-bold gradient-text mb-6"
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
          >
            Let's Build Something Amazing Together
          </motion.h2>
          
          <motion.p
            className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto"
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            Ready to turn your idea into reality? I'm available for freelance projects, full-time opportunities, and collaborations.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-primary flex items-center space-x-2 w-full sm:w-auto"
            >
              <Mail size={20} />
              <span>Get In Touch</span>
              <ArrowRight size={20} />
            </motion.a>
          </motion.div>

          {/* Stats */}
          <motion.div
            className="grid grid-cols-3 gap-8 mt-12 pt-12 border-t border-gray-700"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <div>
              <div className="text-3xl font-bold text-cyber-green mb-2">24h</div>
              <div className="text-sm text-gray-400">Response Time</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-cyber-blue mb-2">100%</div>
              <div className="text-sm text-gray-400">Client Satisfaction</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-cyber-purple mb-2">50+</div>
              <div className="text-sm text-gray-400">Projects Completed</div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}

