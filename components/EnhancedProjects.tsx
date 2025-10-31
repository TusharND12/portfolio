'use client';

import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { Github, ExternalLink, Star } from 'lucide-react';
import { projects } from '@/lib/data';
import { useRef } from 'react';
import InfiniteScroll from './InfiniteScroll';
import Image from 'next/image';

function ProjectCard({ project, index }: { project: typeof projects[0]; index: number }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useSpring(useTransform(mouseY, [-300, 300], [15, -15]));
  const rotateY = useSpring(useTransform(mouseX, [-300, 300], [-15, 15]));

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    mouseX.set(e.clientX - centerX);
    mouseY.set(e.clientY - centerY);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="perspective-1000"
    >
      <motion.div
        style={{
          rotateX,
          rotateY,
          transformStyle: 'preserve-3d',
        }}
        className="relative group"
      >
        <div className="card overflow-hidden">
          {/* Project Image/Preview Area */}
          <div
            className="w-full h-56 rounded-lg mb-4 flex items-center justify-center relative overflow-hidden"
            style={{
              background: `linear-gradient(135deg, ${project.color}33, ${project.color}11)`,
            }}
          >
            {/* Animated gradient overlay */}
            <motion.div
              className="absolute inset-0"
              style={{
                background: `radial-gradient(circle at 50% 50%, ${project.color}40, transparent 70%)`,
              }}
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.6, 0.3],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
              }}
            />

            {/* Project Image or Icon */}
            {project.image ? (
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover rounded-lg z-10"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            ) : (
              <motion.span
                className="text-8xl relative z-10"
                animate={{
                  scale: [1, 1.1, 1],
                  rotate: [0, 5, -5, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                }}
              >
                🚀
              </motion.span>
            )}

            {/* Hover overlay */}
            <motion.div
              className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
              initial={{ opacity: 0 }}
              whileHover={{ opacity: 1 }}
            >
              <div className="text-center space-y-4">
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary inline-flex items-center space-x-2"
                  onClick={(e) => e.stopPropagation()}
                >
                  <ExternalLink size={18} />
                  <span>View Live</span>
                </a>
              </div>
            </motion.div>
          </div>

          {/* Featured Badge */}
          {project.featured && (
            <div className="absolute top-4 right-4 glass px-3 py-1 rounded-full flex items-center space-x-1 z-10">
              <Star size={14} className="text-yellow-400" fill="currentColor" />
              <span className="text-xs">Featured</span>
            </div>
          )}

          {/* Project Info */}
          <h3 className="text-2xl font-bold mb-2 group-hover:text-cyber-blue transition-colors">
            {project.title}
          </h3>
          <p className="text-gray-400 mb-4">{project.description}</p>

          {/* Technologies */}
          <div className="flex flex-wrap gap-2 mb-4">
            {project.technologies.map((tech, i) => (
              <motion.span
                key={i}
                whileHover={{ scale: 1.1, y: -2 }}
                className="text-xs px-3 py-1 rounded-full glass"
                style={{ borderColor: project.color, borderWidth: 1 }}
              >
                {tech}
              </motion.span>
            ))}
          </div>

          {/* Links */}
          <div className="flex space-x-4">
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 text-gray-400 hover:text-white transition-colors group"
            >
              <Github size={18} className="group-hover:scale-110 transition-transform" />
              <span className="text-sm">Code</span>
            </a>
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 text-gray-400 hover:text-white transition-colors group"
            >
              <ExternalLink size={18} className="group-hover:scale-110 transition-transform" />
              <span className="text-sm">Live</span>
            </a>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function EnhancedProjects() {
  const techList = ['React', 'Next.js', 'TypeScript', 'Node.js', 'Python', 'PostgreSQL', 'AWS', 'Docker', 'GraphQL', 'Tailwind'];

  return (
    <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.h2
            className="text-5xl md:text-6xl font-bold mb-4"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <span className="gradient-text">Featured Projects</span>
          </motion.h2>
          <p className="text-gray-400 text-xl max-w-2xl mx-auto">
            Explore my portfolio of innovative solutions
          </p>
        </motion.div>

        {/* Infinite scrolling tech stack */}
        <InfiniteScroll items={techList} speed={25} />

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

        {/* View All CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <a href="#contact" className="btn-primary inline-block text-lg px-8 py-4">
            Want to see more? Let&apos;s talk!
          </a>
        </motion.div>
      </div>
    </div>
  );
}

