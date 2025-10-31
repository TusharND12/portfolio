'use client';

import { motion } from 'framer-motion';
import { Coffee, Music, Code2, Trophy, Lightbulb, Heart, Calendar, TrendingUp, Code } from 'lucide-react';

const facts = [
  { icon: <Coffee size={24} />, text: 'ML Models Built', value: '15+', color: '#8338ec' },
  { icon: <Code2 size={24} />, text: 'Lines of code', value: '50K+', color: '#3a86ff' },
  { icon: <Music size={24} />, text: 'Projects completed', value: '12+', color: '#ff006e' },
  { icon: <Trophy size={24} />, text: 'ML Accuracy', value: '95%', color: '#06ffa5' },
  { icon: <Lightbulb size={24} />, text: 'Technologies learned', value: '25+', color: '#ffbe0b' },
  { icon: <Heart size={24} />, text: 'Passion level', value: '💯', color: '#fb5607' },
];

const funFacts = [
  '🎮 Started coding to make games and interactive experiences',
  '☕ Can\'t code without coffee - it\'s my fuel!',
  '🌙 Night owl - best code at 2 AM when it\'s quiet',
  '🐛 Debug detective champion - love solving complex problems',
  '📚 Learn a new tech every month to stay updated',
  '🎨 Designer turned developer - love beautiful interfaces',
  '🏃 Run marathons & debug code - endurance in both!',
  '🎵 Listen to lo-fi while coding for focus',
  '🧠 Passionate about Machine Learning & AI research',
  '💡 Always exploring cutting-edge technologies',
  '🛠️ Love building full-stack applications from scratch',
  '🌱 Dedicated to continuous learning and improvement',
  '🎯 3rd-year Computer Engineering student',
  '🔬 Research experience in precision agriculture',
];

export default function FunFacts() {
  return (
    <div className="py-20 px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <h2 className="text-4xl font-bold gradient-text mb-4">
          Fun Facts & Stats
        </h2>
        <p className="text-gray-400">Get to know me better</p>
      </motion.div>

      <div className="max-w-7xl mx-auto">
        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-12">
          {facts.map((fact, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.1, rotate: 5 }}
              className="card text-center"
            >
              <div
                className="inline-flex p-3 rounded-full mb-3"
                style={{ backgroundColor: `${fact.color}22` }}
              >
                <div style={{ color: fact.color }}>{fact.icon}</div>
              </div>
              <div className="text-3xl font-bold mb-1" style={{ color: fact.color }}>
                {fact.value}
              </div>
              <div className="text-xs text-gray-400">{fact.text}</div>
            </motion.div>
          ))}
        </div>

        {/* Fun Facts List */}
        <div className="card mb-8">
          <h3 className="text-2xl font-bold mb-6 text-center">Random Facts About Me</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {funFacts.map((fact, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-800/50 transition-colors"
              >
                <span className="text-2xl">{fact.split(' ')[0]}</span>
                <span className="text-gray-300">{fact.split(' ').slice(1).join(' ')}</span>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Certifications & Achievements */}
        <div className="card">
          <h3 className="text-2xl font-bold mb-6 text-center gradient-text">Certifications & Achievements</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="p-4 rounded-lg glass text-center"
            >
              <div className="text-4xl mb-3">🎓</div>
              <h4 className="font-bold text-cyber-green mb-2">3rd Year Student</h4>
              <p className="text-sm text-gray-400">Computer Engineering</p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="p-4 rounded-lg glass text-center"
            >
              <div className="text-4xl mb-3">🔬</div>
              <h4 className="font-bold text-cyber-blue mb-2">ML Research Intern</h4>
              <p className="text-sm text-gray-400">Vishwakarma University</p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="p-4 rounded-lg glass text-center"
            >
              <div className="text-4xl mb-3">🏆</div>
              <h4 className="font-bold text-cyber-purple mb-2">95% ML Accuracy</h4>
              <p className="text-sm text-gray-400">Disease Detection Model</p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="p-4 rounded-lg glass text-center"
            >
              <div className="text-4xl mb-3">🌾</div>
              <h4 className="font-bold text-cyber-pink mb-2">Precision Agriculture</h4>
              <p className="text-sm text-gray-400">Research Collaboration</p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="p-4 rounded-lg glass text-center"
            >
              <div className="text-4xl mb-3">🏥</div>
              <h4 className="font-bold text-cyber-yellow mb-2">Medical AI</h4>
              <p className="text-sm text-gray-400">Ulcerative Colitis Detection</p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="p-4 rounded-lg glass text-center"
            >
              <div className="text-4xl mb-3">🗜️</div>
              <h4 className="font-bold text-cyber-green mb-2">Model Compression</h4>
              <p className="text-sm text-gray-400">Edge Intelligence Expert</p>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}

