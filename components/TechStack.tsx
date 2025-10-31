'use client';

import { motion } from 'framer-motion';

const techStack = {
  'Frontend': ['React', 'Next.js', 'TypeScript', 'Tailwind', 'Vue.js', 'Svelte', 'Three.js', 'Framer Motion'],
  'Backend': ['Node.js', 'Express', 'Python', 'Django', 'FastAPI', 'GraphQL', 'REST APIs', 'WebSockets'],
  'Database': ['PostgreSQL', 'MongoDB', 'Redis', 'MySQL', 'Prisma', 'Supabase', 'Firebase'],
  'DevOps': ['Docker', 'AWS', 'Vercel', 'GitHub Actions', 'Nginx', 'Linux', 'CI/CD'],
  'Tools': ['Git', 'VS Code', 'Figma', 'Postman', 'Jest', 'Webpack', 'Vite', 'npm/yarn'],
  'Mobile': ['React Native', 'PWA', 'Expo', 'Flutter', 'Mobile-First Design'],
};

export default function TechStack() {
  return (
    <div className="py-20 px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <h2 className="text-4xl font-bold gradient-text mb-4">
          Tech Stack
        </h2>
        <p className="text-gray-400">Technologies I work with daily</p>
      </motion.div>

      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {Object.entries(techStack).map(([category, technologies], catIndex) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: catIndex * 0.1 }}
              className="card"
            >
              <h3 className="text-xl font-bold mb-4 gradient-text">{category}</h3>
              <div className="flex flex-wrap gap-2">
                {technologies.map((tech, index) => (
                  <motion.span
                    key={index}
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: catIndex * 0.1 + index * 0.03 }}
                    whileHover={{ scale: 1.1, rotate: 3 }}
                    className="px-3 py-1 glass rounded-full text-sm cursor-default"
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

