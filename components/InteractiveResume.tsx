'use client';

import { motion } from 'framer-motion';
import { ExternalLink, Calendar, MapPin, Award } from 'lucide-react';
import { experiences } from '@/lib/data';

export default function InteractiveResume() {
  return (
    <div className="py-20 px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-4">
          Professional Journey
        </h2>
        <p className="text-gray-400 text-lg mb-6">
          Interactive resume timeline
        </p>
      </motion.div>

      <div className="max-w-5xl mx-auto relative">
        {/* Timeline Line */}
        <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyber-blue via-cyber-purple to-cyber-pink" />

        {/* Timeline Items */}
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.2 }}
            className={`relative mb-12 md:mb-16 ${
              index % 2 === 0 ? 'md:pr-[55%]' : 'md:pl-[55%]'
            }`}
          >
            {/* Timeline Dot */}
            <div className="hidden md:block absolute top-6 left-1/2 -translate-x-1/2 w-6 h-6 rounded-full bg-cyber-blue border-4 border-black z-10" />

            {/* Content Card */}
            <motion.div
              whileHover={{ scale: 1.02, y: -5 }}
              className="card group"
            >
              <div className="flex items-start justify-between mb-4">
                <div>
                  <div className="flex items-center space-x-2 text-sm text-gray-400 mb-2">
                    <Calendar size={16} />
                    <span>{exp.period}</span>
                  </div>
                  <h3 className="text-2xl font-bold mb-1 group-hover:text-cyber-blue transition-colors">
                    {exp.title}
                  </h3>
                  <p className="text-cyber-purple font-semibold">{exp.company}</p>
                </div>
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.5 }}
                  className="p-2 rounded-lg bg-cyber-blue/20"
                >
                  <Award className="text-cyber-blue" size={24} />
                </motion.div>
              </div>

              <p className="text-gray-400 mb-4">{exp.description}</p>

              <div className="space-y-2">
                <h4 className="text-sm font-bold text-cyber-green">Key Achievements:</h4>
                <ul className="space-y-2">
                  {exp.achievements.map((achievement, i) => (
                    <motion.li
                      key={i}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.2 + i * 0.1 }}
                      className="flex items-start space-x-2"
                    >
                      <span className="text-cyber-green mt-1">▸</span>
                      <span className="text-gray-300">{achievement}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

