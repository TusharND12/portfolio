'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { skills } from '@/lib/data';

const skillTreeData = [
  // Core Programming Languages
  { id: 'programming', label: 'Programming', x: 50, y: 10, children: ['python', 'java', 'javascript', 'sql'] },
  { id: 'python', label: 'Python', x: 20, y: 25, level: 95 },
  { id: 'java', label: 'Java', x: 40, y: 25, level: 85 },
  { id: 'javascript', label: 'JavaScript', x: 60, y: 25, level: 92 },
  { id: 'sql', label: 'SQL', x: 80, y: 25, level: 87 },
  
  // Frontend Technologies
  { id: 'frontend', label: 'Frontend', x: 50, y: 42, children: ['react', 'html5', 'tailwind', 'css3'] },
  { id: 'react', label: 'React.js', x: 20, y: 57, level: 95 },
  { id: 'html5', label: 'HTML5', x: 40, y: 57, level: 98 },
  { id: 'tailwind', label: 'Tailwind', x: 60, y: 57, level: 90 },
  { id: 'css3', label: 'CSS3', x: 80, y: 57, level: 88 },
  
  // Backend Technologies
  { id: 'backend', label: 'Backend', x: 50, y: 74, children: ['nodejs', 'express', 'mongodb', 'mongoose'] },
  { id: 'nodejs', label: 'Node.js', x: 20, y: 89, level: 90 },
  { id: 'express', label: 'Express.js', x: 40, y: 89, level: 88 },
  { id: 'mongodb', label: 'MongoDB', x: 60, y: 89, level: 85 },
  { id: 'mongoose', label: 'Mongoose', x: 80, y: 89, level: 82 },
  
  // Machine Learning & AI
  { id: 'ml_ai', label: 'ML & AI', x: 50, y: 106, children: ['tensorflow', 'keras', 'opencv', 'scikit'] },
  { id: 'tensorflow', label: 'TensorFlow', x: 20, y: 121, level: 92 },
  { id: 'keras', label: 'Keras', x: 40, y: 121, level: 90 },
  { id: 'opencv', label: 'OpenCV', x: 60, y: 121, level: 88 },
  { id: 'scikit', label: 'Scikit-learn', x: 80, y: 121, level: 85 },
  
  // Tools & Version Control
  { id: 'tools', label: 'Tools', x: 50, y: 138, children: ['git', 'github', 'websockets', 'firebase'] },
  { id: 'git', label: 'Git', x: 20, y: 153, level: 93 },
  { id: 'github', label: 'GitHub', x: 40, y: 153, level: 95 },
  { id: 'websockets', label: 'WebSockets', x: 60, y: 153, level: 80 },
  { id: 'firebase', label: 'Firebase', x: 80, y: 153, level: 88 },
  
  // Deployment Platforms
  { id: 'deployment', label: 'Deployment', x: 50, y: 170, children: ['vercel', 'netlify', 'heroku', 'docker'] },
  { id: 'vercel', label: 'Vercel', x: 20, y: 185, level: 90 },
  { id: 'netlify', label: 'Netlify', x: 40, y: 185, level: 85 },
  { id: 'heroku', label: 'Heroku', x: 60, y: 185, level: 80 },
  { id: 'docker', label: 'Docker', x: 80, y: 185, level: 75 },
];

export default function SkillTree() {
  const [hoveredNode, setHoveredNode] = useState<string | null>(null);

  return (
    <div className="py-20 px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <h2 className="text-4xl font-bold gradient-text mb-4">Skill Tree</h2>
        <p className="text-gray-400">My technology progression path</p>
      </motion.div>

      <div className="max-w-6xl mx-auto card">
        <svg className="w-full h-[900px]" viewBox="0 0 100 200" preserveAspectRatio="xMidYMid meet">
          {/* Connections */}
          {skillTreeData.map((node) =>
            node.children?.map((childId) => {
              const child = skillTreeData.find((n) => n.id === childId);
              if (!child) return null;
              return (
                <motion.line
                  key={`${node.id}-${childId}`}
                  x1={node.x}
                  y1={node.y}
                  x2={child.x}
                  y2={child.y}
                  stroke="#3a86ff"
                  strokeWidth="0.3"
                  initial={{ pathLength: 0 }}
                  whileInView={{ pathLength: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1 }}
                />
              );
            })
          )}

          {/* Nodes */}
          {skillTreeData.map((node, index) => (
            <g key={node.id}>
              <motion.circle
                cx={node.x}
                cy={node.y}
                r={node.level ? 4.5 : 4}
                fill={node.level ? `hsl(${node.level * 1.2}, 70%, 50%)` : '#8338ec'}
                stroke={hoveredNode === node.id ? '#ff006e' : '#3a86ff'}
                strokeWidth={hoveredNode === node.id ? 0.8 : 0.4}
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                onMouseEnter={() => setHoveredNode(node.id)}
                onMouseLeave={() => setHoveredNode(null)}
                className="cursor-pointer"
              />
              <motion.text
                x={node.x}
                y={node.y - 6}
                textAnchor="middle"
                fill="white"
                fontSize={node.label.length > 8 ? "3" : "3.5"}
                fontWeight="bold"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 + 0.3 }}
              >
                {node.label}
              </motion.text>
              {node.level && (
                <motion.text
                  x={node.x}
                  y={node.y + 6}
                  textAnchor="middle"
                  fill="#06ffa5"
                  fontSize="3"
                  fontWeight="bold"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 + 0.5 }}
                >
                  Lv.{node.level}
                </motion.text>
              )}
            </g>
          ))}
        </svg>

        <div className="text-center mt-6 text-sm text-gray-400">
          🎮 Hover over nodes to highlight • Levels show proficiency
        </div>
      </div>
    </div>
  );
}

