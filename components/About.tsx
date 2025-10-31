'use client';

import { motion } from 'framer-motion';
import { experiences, achievements } from '@/lib/data';
import { Award, Briefcase, Calendar } from 'lucide-react';

export default function About() {
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
            <span className="gradient-text">About Me</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto mb-6">
            My journey through the developer universe
          </p>
          
          {/* Personal Journey Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="card max-w-4xl mx-auto mb-12"
          >
            <div className="text-left space-y-4">
              <p className="text-gray-300 leading-relaxed">
                👋 Hi! I'm <span className="text-cyber-blue font-semibold">Tushar Dhokane</span>, a passionate 
                <span className="text-cyber-green font-semibold"> Full-Stack Developer & ML Engineer</span> currently 
                pursuing my B.Tech in Computer Engineering (3rd Year) from Pune, India.
              </p>
              
              <p className="text-gray-300 leading-relaxed">
                🚀 My journey into the tech world began with a curiosity about how intelligent systems work. 
                Today, I specialize in building <span className="text-cyber-purple font-semibold">cutting-edge AI/ML solutions</span> and 
                <span className="text-cyber-pink font-semibold"> full-stack web applications</span> that solve real-world problems.
              </p>
              
              <p className="text-gray-300 leading-relaxed">
                🏆 I'm proud to be the <span className="text-cyber-green font-semibold">1st Place Winner of the Fusion National Level Hackathon 2025</span> (AIML Domain), 
                where I competed against top talent from across the country. This achievement reflects my dedication to excellence 
                and passion for innovation in artificial intelligence.
              </p>
              
              <p className="text-gray-300 leading-relaxed">
                🔬 I had the incredible opportunity to work as a <span className="text-cyber-blue font-semibold">Research Intern at Binghamton University</span> through 
                the VUxBU Centre of Design Thinking and Innovation (August - December 2024). This international research collaboration 
                enhanced my skills in <span className="text-cyber-purple font-semibold">precision agriculture</span> and <span className="text-cyber-pink font-semibold">medical diagnosis</span> using 
                advanced machine learning techniques.
              </p>
              
              <p className="text-gray-300 leading-relaxed">
                💡 My expertise spans across <span className="text-cyber-green font-semibold">TensorFlow, PyTorch, React.js, Node.js, and modern web technologies</span>. 
                I've developed ML models with <span className="text-cyber-blue font-semibold">95% accuracy</span> for disease detection, built real-time social platforms, 
                and created state-of-the-art model compression pipelines that reduce model sizes by <span className="text-cyber-purple font-semibold">75%</span> while 
                maintaining performance.
              </p>
              
              <p className="text-gray-300 leading-relaxed">
                🎯 I'm driven by the challenge of transforming complex problems into elegant, efficient solutions. Whether it's 
                optimizing AI models for edge devices, building intuitive user interfaces, or designing scalable backend systems, 
                I bring a combination of <span className="text-cyber-pink font-semibold">technical excellence</span> and <span className="text-cyber-green font-semibold">creative problem-solving</span> to 
                every project.
              </p>
              
              <div className="flex flex-wrap gap-3 mt-6 justify-center">
                <span className="px-4 py-2 rounded-full bg-cyber-blue/20 text-cyber-blue text-sm font-medium border border-cyber-blue/30">
                  🧠 ML/AI Specialist
                </span>
                <span className="px-4 py-2 rounded-full bg-cyber-green/20 text-cyber-green text-sm font-medium border border-cyber-green/30">
                  💻 Full-Stack Developer
                </span>
                <span className="px-4 py-2 rounded-full bg-cyber-purple/20 text-cyber-purple text-sm font-medium border border-cyber-purple/30">
                  🏆 Hackathon Winner
                </span>
                <span className="px-4 py-2 rounded-full bg-cyber-pink/20 text-cyber-pink text-sm font-medium border border-cyber-pink/30">
                  🔬 Research Intern
                </span>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Experience Timeline */}
        <div className="mb-20">
          <motion.h3
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-3xl font-bold mb-8 flex items-center space-x-3"
          >
            <Briefcase className="text-cyber-blue" />
            <span>Experience</span>
          </motion.h3>

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="card relative"
              >
                {/* Timeline connector */}
                {index !== experiences.length - 1 && (
                  <div className="absolute left-6 top-full h-8 w-0.5 bg-gradient-to-b from-cyber-blue to-transparent" />
                )}

                <div className="flex items-start space-x-4">
                  <div className="p-3 rounded-lg bg-cyber-blue/20">
                    <Calendar className="text-cyber-blue" size={24} />
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                      <h4 className="text-xl font-bold">{exp.title}</h4>
                      <span className="text-gray-400 text-sm">{exp.period}</span>
                    </div>
                    <p className="text-cyber-blue mb-2">{exp.company}</p>
                    <p className="text-gray-400 mb-4">{exp.description}</p>
                    <ul className="space-y-2">
                      {exp.achievements.map((achievement, i) => (
                        <li key={i} className="flex items-start space-x-2">
                          <span className="text-cyber-green mt-1">✓</span>
                          <span className="text-gray-300">{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Achievements */}
        <div>
          <motion.h3
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-3xl font-bold mb-8 flex items-center space-x-3"
          >
            <Award className="text-cyber-purple" />
            <span>Achievements</span>
          </motion.h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {achievements.map((achievement, index) => (
              <motion.div
                key={achievement.id}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05, rotate: 2 }}
                className={`card text-center ${
                  achievement.unlocked ? 'border-cyber-green' : 'opacity-50'
                }`}
              >
                <div className="text-5xl mb-3">{achievement.icon}</div>
                <h4 className="text-lg font-bold mb-2">{achievement.title}</h4>
                <p className="text-gray-400 text-sm">{achievement.description}</p>
                {achievement.unlocked && (
                  <div className="mt-3 inline-block px-3 py-1 rounded-full bg-cyber-green/20 text-cyber-green text-xs">
                    Unlocked!
                  </div>
                )}
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mt-8 text-center text-gray-400 text-sm"
          >
            <p>🎮 Explore the site to unlock more achievements!</p>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

