'use client';

import { motion } from 'framer-motion';
import { Quote, Star } from 'lucide-react';
import { useState } from 'react';

const testimonials = [
  {
    name: 'Sarah Johnson',
    role: 'Product Manager at TechCorp',
    image: '👩‍💼',
    text: 'Outstanding developer! Delivered our project ahead of schedule with exceptional quality. The attention to detail and problem-solving skills are remarkable.',
    rating: 5,
  },
  {
    name: 'Michael Chen',
    role: 'CTO at StartupXYZ',
    image: '👨‍💻',
    text: 'One of the best developers I\'ve worked with. Great communication, clean code, and always goes the extra mile. Highly recommended!',
    rating: 5,
  },
  {
    name: 'Emily Rodriguez',
    role: 'Lead Designer',
    image: '👩‍🎨',
    text: 'Amazing collaboration! Turned our designs into pixel-perfect, performant code. A true professional who understands both design and development.',
    rating: 5,
  },
  {
    name: 'David Park',
    role: 'Founder at InnovateLabs',
    image: '👨‍💼',
    text: 'Incredible technical skills combined with business understanding. Built our MVP in record time and it scaled beautifully.',
    rating: 5,
  },
];

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="py-20 px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <h2 className="text-4xl font-bold gradient-text mb-4">
          What People Say
        </h2>
        <p className="text-gray-400">Testimonials from clients and colleagues</p>
      </motion.div>

      <div className="max-w-6xl mx-auto">
        {/* Main Featured Testimonial */}
        <motion.div
          key={activeIndex}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="card mb-8"
        >
          <Quote className="text-cyber-blue mb-4" size={40} />
          <p className="text-xl md:text-2xl text-gray-300 mb-6 italic">
            "{testimonials[activeIndex].text}"
          </p>
          <div className="flex items-center space-x-4">
            <div className="text-5xl">{testimonials[activeIndex].image}</div>
            <div>
              <h4 className="font-bold text-lg">{testimonials[activeIndex].name}</h4>
              <p className="text-gray-400 text-sm">{testimonials[activeIndex].role}</p>
              <div className="flex items-center space-x-1 mt-2">
                {[...Array(testimonials[activeIndex].rating)].map((_, i) => (
                  <Star key={i} size={16} className="text-yellow-400 fill-current" />
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Thumbnail Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {testimonials.map((testimonial, index) => (
            <motion.button
              key={index}
              onClick={() => setActiveIndex(index)}
              whileHover={{ scale: 1.05 }}
              className={`card p-4 text-center transition-all ${
                activeIndex === index ? 'border-2 border-cyber-blue' : ''
              }`}
            >
              <div className="text-4xl mb-2">{testimonial.image}</div>
              <p className="text-sm font-semibold">{testimonial.name}</p>
              <p className="text-xs text-gray-400">{testimonial.role.split(' ')[0]}</p>
            </motion.button>
          ))}
        </div>
      </div>
    </div>
  );
}

