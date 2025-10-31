'use client';

import { motion } from 'framer-motion';
import { skills } from '@/lib/data';
import { Code, Server, Wrench } from 'lucide-react';

const skillCategories = [
  { title: 'Frontend', icon: <Code size={24} />, skills: skills.frontend, color: '#3a86ff' },
  { title: 'Backend', icon: <Server size={24} />, skills: skills.backend, color: '#8338ec' },
  { title: 'Tools', icon: <Wrench size={24} />, skills: skills.tools, color: '#ff006e' },
];

export default function Skills() {
  return (
    <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Skills & Expertise</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            My constellation of technical skills
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, catIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: catIndex * 0.2 }}
              className="card"
            >
              <div className="flex items-center space-x-3 mb-6">
                <div
                  className="p-3 rounded-lg"
                  style={{ background: `${category.color}22` }}
                >
                  <div style={{ color: category.color }}>{category.icon}</div>
                </div>
                <h3 className="text-2xl font-bold">{category.title}</h3>
              </div>

              <div className="space-y-4">
                {category.skills.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: catIndex * 0.2 + index * 0.1 }}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center space-x-2">
                        <span className="text-2xl">{skill.icon}</span>
                        <span className="font-semibold">{skill.name}</span>
                      </div>
                      <span className="text-gray-400 text-sm">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-800 rounded-full h-2 overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: catIndex * 0.2 + index * 0.1 }}
                        className="h-full rounded-full"
                        style={{
                          background: `linear-gradient(90deg, ${category.color}, ${category.color}88)`,
                        }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Interactive Skill Visualization */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 card text-center"
        >
          <h3 className="text-2xl font-bold mb-4">Continuous Learning</h3>
          <p className="text-gray-400 mb-6">
            Always exploring new technologies and expanding my skill set
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {['AI/ML', 'Web3', 'Cloud Native', 'DevOps', 'Microservices'].map((tech, index) => (
              <motion.span
                key={tech}
                whileHover={{ scale: 1.1, rotate: 5 }}
                className="px-4 py-2 glass rounded-full text-sm cursor-pointer"
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}

