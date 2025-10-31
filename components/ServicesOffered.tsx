'use client';

import { motion } from 'framer-motion';
import { Code, Smartphone, Cloud, Palette, Database, Zap } from 'lucide-react';

const services = [
  {
    icon: <Code size={32} />,
    title: 'Web Development',
    description: 'Full-stack web applications with modern frameworks',
    features: ['React/Next.js', 'Node.js/Express', 'RESTful APIs', 'Real-time features'],
    color: '#3a86ff',
  },
  {
    icon: <Smartphone size={32} />,
    title: 'Mobile Apps',
    description: 'Native and cross-platform mobile applications',
    features: ['React Native', 'Progressive Web Apps', 'Responsive Design', 'App Store Deploy'],
    color: '#8338ec',
  },
  {
    icon: <Database size={32} />,
    title: 'Backend Systems',
    description: 'Scalable server architectures and databases',
    features: ['PostgreSQL/MongoDB', 'Authentication', 'Payment Integration', 'Microservices'],
    color: '#ff006e',
  },
  {
    icon: <Cloud size={32} />,
    title: 'Cloud & DevOps',
    description: 'Cloud infrastructure and deployment automation',
    features: ['AWS/Vercel', 'Docker', 'CI/CD Pipelines', 'Monitoring'],
    color: '#06ffa5',
  },
  {
    icon: <Palette size={32} />,
    title: 'UI/UX Design',
    description: 'Beautiful and intuitive user interfaces',
    features: ['Figma to Code', 'Design Systems', 'Animations', 'Accessibility'],
    color: '#ffbe0b',
  },
  {
    icon: <Zap size={32} />,
    title: 'Performance',
    description: 'Optimization and speed improvements',
    features: ['SEO', 'Load Time', 'Core Web Vitals', 'Best Practices'],
    color: '#fb5607',
  },
];

export default function ServicesOffered() {
  return (
    <div className="py-20 px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <h2 className="text-4xl font-bold gradient-text mb-4">
          Services I Offer
        </h2>
        <p className="text-gray-400">Comprehensive solutions for your needs</p>
      </motion.div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ y: -10, scale: 1.02 }}
            className="card group"
          >
            <div
              className="inline-flex p-4 rounded-lg mb-4"
              style={{ backgroundColor: `${service.color}22` }}
            >
              <div style={{ color: service.color }}>{service.icon}</div>
            </div>
            <h3 className="text-2xl font-bold mb-2">{service.title}</h3>
            <p className="text-gray-400 mb-4">{service.description}</p>
            <ul className="space-y-2">
              {service.features.map((feature, i) => (
                <li key={i} className="flex items-center space-x-2 text-sm">
                  <span style={{ color: service.color }}>✓</span>
                  <span className="text-gray-300">{feature}</span>
                </li>
              ))}
            </ul>
            <div className="mt-6 pt-6 border-t border-gray-700">
              <button className="text-sm font-semibold" style={{ color: service.color }}>
                Learn More →
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

