'use client';

import { motion } from 'framer-motion';
import { Search, Lightbulb, Code, TestTube, Rocket, Users } from 'lucide-react';

const process = [
  {
    icon: <Search size={32} />,
    title: 'Discovery',
    description: 'Understanding your needs, goals, and vision',
    color: '#3a86ff',
  },
  {
    icon: <Lightbulb size={32} />,
    title: 'Planning',
    description: 'Creating strategy, wireframes, and architecture',
    color: '#8338ec',
  },
  {
    icon: <Code size={32} />,
    title: 'Development',
    description: 'Building with clean, scalable, maintainable code',
    color: '#ff006e',
  },
  {
    icon: <TestTube size={32} />,
    title: 'Testing',
    description: 'Rigorous testing for quality and performance',
    color: '#06ffa5',
  },
  {
    icon: <Rocket size={32} />,
    title: 'Launch',
    description: 'Deploying to production with CI/CD',
    color: '#ffbe0b',
  },
  {
    icon: <Users size={32} />,
    title: 'Support',
    description: 'Ongoing maintenance and improvements',
    color: '#fb5607',
  },
];

export default function ProcessWorkflow() {
  return (
    <div className="py-20 px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <h2 className="text-4xl font-bold gradient-text mb-4">
          My Process
        </h2>
        <p className="text-gray-400">How I bring ideas to life</p>
      </motion.div>

      <div className="max-w-7xl mx-auto relative">
        {/* Connection Line */}
        <div className="hidden lg:block absolute top-24 left-0 right-0 h-0.5 bg-gradient-to-r from-cyber-blue via-cyber-purple to-cyber-pink opacity-30" />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {process.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              className="relative"
            >
              <div className="card text-center group hover:scale-105 transition-transform">
                <div className="relative z-10">
                  <motion.div
                    className="inline-flex p-4 rounded-full mb-4"
                    style={{ backgroundColor: `${step.color}22` }}
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.5 }}
                  >
                    <div style={{ color: step.color }}>{step.icon}</div>
                  </motion.div>
                  <div className="text-sm text-gray-400 mb-2">Step {index + 1}</div>
                  <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                  <p className="text-gray-400 text-sm">{step.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

