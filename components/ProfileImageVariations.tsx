'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Layers, Droplet, Zap, Box, Palette } from 'lucide-react';

const variations = [
  { id: 'holographic', name: 'Holographic', icon: <Layers size={20} /> },
  { id: 'liquid', name: 'Liquid Blob', icon: <Droplet size={20} /> },
  { id: 'glitch', name: 'Glitch', icon: <Zap size={20} /> },
  { id: '3d-flip', name: '3D Flip', icon: <Box size={20} /> },
  { id: 'chromatic', name: 'Chromatic', icon: <Palette size={20} /> },
];

export default function ProfileImageVariations() {
  const [activeVariation, setActiveVariation] = useState('holographic');

  return (
    <div className="fixed top-20 left-6 z-40 glass rounded-lg p-3 hidden lg:block">
      <div className="text-xs text-gray-400 mb-2">Image Style</div>
      <div className="space-y-2">
        {variations.map((variation) => (
          <motion.button
            key={variation.id}
            onClick={() => setActiveVariation(variation.id)}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className={`flex items-center space-x-2 px-3 py-2 rounded-lg transition-colors w-full ${
              activeVariation === variation.id
                ? 'bg-cyber-blue text-white'
                : 'hover:bg-gray-800 text-gray-400'
            }`}
          >
            {variation.icon}
            <span className="text-xs">{variation.name}</span>
          </motion.button>
        ))}
      </div>
    </div>
  );
}

