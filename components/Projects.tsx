'use client';

import { motion } from 'framer-motion';
import { Github, ExternalLink, Star } from 'lucide-react';
import { projects } from '@/lib/data';

export default function Projects() {
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
            <span className="gradient-text">Featured Projects</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Explore my universe of projects - each one a unique journey
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="card group relative overflow-hidden"
            >
              {/* Project Image Placeholder */}
              <div
                className="w-full h-48 rounded-lg mb-4 flex items-center justify-center relative overflow-hidden"
                style={{
                  background: `linear-gradient(135deg, ${project.color}33, ${project.color}11)`,
                }}
              >
                <div
                  className="absolute inset-0 opacity-20"
                  style={{
                    background: `radial-gradient(circle at 50% 50%, ${project.color}, transparent)`,
                  }}
                />
                {project.image ? (
                  <img
                    src={project.image}
                    alt={project.title}
                    className="absolute inset-0 w-full h-full object-cover rounded-lg z-10"
                    loading="lazy"
                  />
                ) : (
                  <span className="text-6xl filter blur-sm group-hover:blur-none transition-all">
                    🚀
                  </span>
                )}
              </div>

              {/* Featured Badge */}
              {project.featured && (
                <div className="absolute top-4 right-4 glass px-3 py-1 rounded-full flex items-center space-x-1">
                  <Star size={14} className="text-yellow-400" fill="currentColor" />
                  <span className="text-xs">Featured</span>
                </div>
              )}

              {/* Project Info */}
              <h3 className="text-xl font-bold mb-2 group-hover:text-cyber-blue transition-colors">
                {project.title}
              </h3>
              <p className="text-gray-400 mb-4 text-sm">{project.description}</p>

              {/* Technologies */}
              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech, i) => (
                  <span
                    key={i}
                    className="text-xs px-2 py-1 rounded glass"
                    style={{ borderColor: project.color }}
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Links */}
              <div className="flex space-x-4">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 text-gray-400 hover:text-white transition-colors"
                >
                  <Github size={18} />
                  <span className="text-sm">Code</span>
                </a>
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 text-gray-400 hover:text-white transition-colors"
                >
                  <ExternalLink size={18} />
                  <span className="text-sm">Live</span>
                </a>
              </div>

              {/* Hover overlay */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity pointer-events-none"
                style={{ background: project.color }}
              />
            </motion.div>
          ))}
        </div>

        {/* View All Projects Button */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <a href="#contact" className="btn-primary inline-block">
            Want to see more? Let&apos;s talk!
          </a>
        </motion.div>
      </div>
    </div>
  );
}

