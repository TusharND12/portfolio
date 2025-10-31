'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Users, Eye, Clock } from 'lucide-react';

export default function LiveVisitorCounter() {
  const [visitors, setVisitors] = useState({
    current: 1,
    today: Math.floor(Math.random() * 50) + 10,
    total: Math.floor(Math.random() * 500) + 100,
  });

  useEffect(() => {
    // Simulate live visitors
    const interval = setInterval(() => {
      setVisitors((prev) => ({
        ...prev,
        current: Math.max(1, prev.current + (Math.random() > 0.5 ? 1 : -1)),
      }));
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      className="fixed bottom-6 left-6 z-40 glass rounded-lg p-4 max-w-xs hidden md:block"
    >
      <div className="text-xs text-gray-400 mb-2">Live Stats</div>
      <div className="space-y-2">
        <div className="flex items-center space-x-2">
          <div className="w-2 h-2 rounded-full bg-cyber-green animate-pulse" />
          <Users size={14} className="text-cyber-green" />
          <span className="text-sm">Online: <span className="text-cyber-green font-bold">{visitors.current}</span></span>
        </div>
        <div className="flex items-center space-x-2">
          <Eye size={14} className="text-cyber-blue" />
          <span className="text-sm">Today: <span className="text-cyber-blue font-bold">{visitors.today}</span></span>
        </div>
        <div className="flex items-center space-x-2">
          <Clock size={14} className="text-cyber-purple" />
          <span className="text-sm">Total: <span className="text-cyber-purple font-bold">{visitors.total}</span></span>
        </div>
      </div>
    </motion.div>
  );
}

