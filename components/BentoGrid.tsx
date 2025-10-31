'use client';

import { motion } from 'framer-motion';
import { TerminalCode, TerminalZap, TerminalHeart, TerminalTrophy, TerminalUsers, TerminalTarget, TerminalAward, TerminalGraduation, TerminalBrain, TerminalRocket } from './TerminalIcons';

const gridItems = [
  {
    title: '3rd Year',
    subtitle: 'Computer Engineering Student',
    icon: <TerminalGraduation size={32} />,
    color: '#3a86ff',
    span: 'col-span-1 row-span-1',
  },
  {
    title: '1st Place',
    subtitle: 'Fusion Hackathon 2025',
    icon: <TerminalAward size={32} />,
    color: '#8338ec',
    span: 'col-span-1 row-span-2',
  },
  {
    title: '95%',
    subtitle: 'ML Model Accuracy',
    icon: <TerminalBrain size={32} />,
    color: '#ff006e',
    span: 'col-span-2 row-span-1',
  },
  {
    title: '6+',
    subtitle: 'Featured Projects',
    icon: <TerminalTrophy size={32} />,
    color: '#06ffa5',
    span: 'col-span-1 row-span-1',
  },
  {
    title: 'Research Intern',
    subtitle: 'Binghamton University',
    icon: <TerminalRocket size={32} />,
    color: '#ffbe0b',
    span: 'col-span-2 row-span-1',
  },
  {
    title: '25+',
    subtitle: 'Technologies Mastered',
    icon: <TerminalCode size={32} />,
    color: '#fb5607',
    span: 'col-span-1 row-span-1',
  },
  {
    title: '1,800+',
    subtitle: 'Images Processed',
    icon: <TerminalTarget size={32} />,
    color: '#06ffa5',
    span: 'col-span-1 row-span-1',
  },
  {
    title: '100%',
    subtitle: 'Passion & Dedication',
    icon: <TerminalHeart size={32} />,
    color: '#ff006e',
    span: 'col-span-1 row-span-1',
  },
];

export default function BentoGrid() {
  return (
    <div className="py-20 px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <h2 className="text-4xl font-bold gradient-text mb-4">At a Glance</h2>
        <p className="text-gray-400">Key metrics that matter</p>
      </motion.div>

      <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 auto-rows-[200px] gap-4">
        {gridItems.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ scale: 1.05, zIndex: 10 }}
            className={`${item.span} relative group`}
          >
            <div className="w-full h-full card flex flex-col items-center justify-center text-center relative overflow-hidden">
              {/* Background glow */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity"
                style={{
                  background: `radial-gradient(circle, ${item.color}, transparent)`,
                }}
              />

              {/* Icon */}
              <motion.div
                className="mb-4"
                style={{ color: item.color }}
                whileHover={{ rotate: 360, scale: 1.2 }}
                transition={{ duration: 0.5 }}
              >
                {item.icon}
              </motion.div>

              {/* Title */}
              <h3 className="text-4xl font-bold mb-2" style={{ color: item.color }}>
                {item.title}
              </h3>

              {/* Subtitle */}
              <p className="text-sm text-gray-400">{item.subtitle}</p>

              {/* Hover border */}
              <div
                className="absolute inset-0 border-2 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"
                style={{ borderColor: item.color }}
              />
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

