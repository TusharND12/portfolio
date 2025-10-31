'use client';

import { motion } from 'framer-motion';
import { CheckCircle, Circle } from 'lucide-react';

const skillCategories = [
  {
    category: 'Frontend Development',
    level: 'Expert',
    percentage: 95,
    skills: [
      { name: 'React/Next.js', mastery: 'Expert', projects: 40 },
      { name: 'TypeScript', mastery: 'Expert', projects: 35 },
      { name: 'Tailwind CSS', mastery: 'Expert', projects: 30 },
      { name: 'State Management', mastery: 'Advanced', projects: 25 },
      { name: '3D Graphics (Three.js)', mastery: 'Advanced', projects: 10 },
    ],
    color: '#3a86ff',
  },
  {
    category: 'Backend Development',
    level: 'Expert',
    percentage: 90,
    skills: [
      { name: 'Node.js/Express', mastery: 'Expert', projects: 35 },
      { name: 'API Design', mastery: 'Expert', projects: 40 },
      { name: 'Database Design', mastery: 'Expert', projects: 30 },
      { name: 'Python/Django', mastery: 'Advanced', projects: 20 },
      { name: 'Microservices', mastery: 'Advanced', projects: 15 },
    ],
    color: '#8338ec',
  },
  {
    category: 'DevOps & Cloud',
    level: 'Advanced',
    percentage: 85,
    skills: [
      { name: 'Docker/Containers', mastery: 'Expert', projects: 25 },
      { name: 'AWS/Cloud Platforms', mastery: 'Advanced', projects: 20 },
      { name: 'CI/CD Pipelines', mastery: 'Advanced', projects: 30 },
      { name: 'Linux/Shell', mastery: 'Advanced', projects: 35 },
    ],
    color: '#ff006e',
  },
];

const certifications = [
  '✓ AWS Certified Developer',
  '✓ React Advanced Patterns',
  '✓ Node.js Certified',
  '✓ TypeScript Expert',
];

export default function SkillsAssessment() {
  return (
    <div className="py-20 px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-4">
          Skills Assessment
        </h2>
        <p className="text-gray-400 text-lg">
          Detailed breakdown of my expertise
        </p>
      </motion.div>

      <div className="max-w-7xl mx-auto space-y-8">
        {skillCategories.map((category, catIndex) => (
          <motion.div
            key={catIndex}
            initial={{ opacity: 0, x: catIndex % 2 === 0 ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: catIndex * 0.1 }}
            className="card"
          >
            {/* Category Header */}
            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
              <div>
                <h3 className="text-2xl font-bold mb-2" style={{ color: category.color }}>
                  {category.category}
                </h3>
                <p className="text-gray-400">Level: <span className="text-cyber-green font-bold">{category.level}</span></p>
              </div>
              <div className="text-center mt-4 md:mt-0">
                <div className="text-4xl font-bold" style={{ color: category.color }}>
                  {category.percentage}%
                </div>
                <p className="text-xs text-gray-400">Proficiency</p>
              </div>
            </div>

            {/* Progress Bar */}
            <div className="w-full bg-gray-800 rounded-full h-3 mb-6 overflow-hidden">
              <motion.div
                className="h-full rounded-full"
                style={{ backgroundColor: category.color }}
                initial={{ width: 0 }}
                whileInView={{ width: `${category.percentage}%` }}
                viewport={{ once: true }}
                transition={{ duration: 1.5, delay: catIndex * 0.1 }}
              />
            </div>

            {/* Skills List */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {category.skills.map((skill, skillIndex) => (
                <motion.div
                  key={skillIndex}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: catIndex * 0.1 + skillIndex * 0.05 }}
                  whileHover={{ x: 5 }}
                  className="flex items-center justify-between p-3 rounded-lg bg-gray-800/50"
                >
                  <div className="flex items-center space-x-3">
                    <CheckCircle size={16} style={{ color: category.color }} />
                    <div>
                      <div className="font-semibold">{skill.name}</div>
                      <div className="text-xs text-gray-400">{skill.mastery} • {skill.projects} projects</div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}

        {/* Certifications */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="card text-center"
        >
          <h3 className="text-2xl font-bold gradient-text mb-6">
            Certifications & Achievements
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {certifications.map((cert, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ scale: 1.05, rotate: 3 }}
                className="p-4 rounded-lg glass flex items-center justify-center"
              >
                <span className="text-cyber-green text-sm font-semibold">{cert}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}

