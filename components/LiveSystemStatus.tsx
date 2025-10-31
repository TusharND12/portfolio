'use client';

import { motion } from 'framer-motion';
import { Activity, CheckCircle, Clock, Code, Database, Globe, Server } from 'lucide-react';
import { useEffect, useState } from 'react';

const systems = [
  { name: 'Website', status: 'operational', uptime: 99.99, icon: <Globe size={20} /> },
  { name: 'API Services', status: 'operational', uptime: 99.95, icon: <Server size={20} /> },
  { name: 'Database', status: 'operational', uptime: 99.98, icon: <Database size={20} /> },
  { name: 'Build System', status: 'operational', uptime: 100, icon: <Code size={20} /> },
];

export default function LiveSystemStatus() {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [responseTime, setResponseTime] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    // Simulate response time check
    const startTime = performance.now();
    setTimeout(() => {
      const endTime = performance.now();
      setResponseTime(Math.round(endTime - startTime));
    }, 100);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="py-20 px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-4">
          System Status
        </h2>
        <p className="text-gray-400 text-lg">
          Live monitoring • All systems operational
        </p>
      </motion.div>

      <div className="max-w-4xl mx-auto">
        {/* Status Overview */}
        <div className="card mb-8">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center space-x-3">
              <div className="w-4 h-4 rounded-full bg-cyber-green animate-pulse" />
              <h3 className="text-2xl font-bold">All Systems Operational</h3>
            </div>
            <div className="text-sm text-gray-400">
              {currentTime.toLocaleTimeString()}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            <div className="p-4 rounded-lg bg-gray-800/50">
              <div className="flex items-center space-x-2 mb-2">
                <Clock className="text-cyber-blue" size={20} />
                <span className="text-sm text-gray-400">Response Time</span>
              </div>
              <div className="text-3xl font-bold text-cyber-blue">{responseTime}ms</div>
            </div>

            <div className="p-4 rounded-lg bg-gray-800/50">
              <div className="flex items-center space-x-2 mb-2">
                <Activity className="text-cyber-green" size={20} />
                <span className="text-sm text-gray-400">Uptime</span>
              </div>
              <div className="text-3xl font-bold text-cyber-green">99.98%</div>
            </div>
          </div>

          {/* System List */}
          <div className="space-y-3">
            {systems.map((system, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex items-center justify-between p-4 rounded-lg glass hover:bg-gray-800/50 transition-colors"
              >
                <div className="flex items-center space-x-3">
                  <div className="p-2 rounded-lg bg-cyber-green/20">
                    {system.icon}
                  </div>
                  <div>
                    <div className="font-semibold">{system.name}</div>
                    <div className="text-xs text-gray-400">Uptime: {system.uptime}%</div>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="text-cyber-green" size={20} />
                  <span className="text-sm text-cyber-green font-semibold">Operational</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Performance Graph Placeholder */}
        <div className="card">
          <h3 className="text-xl font-bold mb-4">Performance Over Time</h3>
          <div className="h-48 flex items-end space-x-2">
            {[...Array(30)].map((_, i) => {
              const height = 50 + Math.random() * 50;
              return (
                <motion.div
                  key={i}
                  className="flex-1 bg-gradient-to-t from-cyber-blue to-cyber-purple rounded-t"
                  initial={{ height: 0 }}
                  whileInView={{ height: `${height}%` }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.02 }}
                  whileHover={{ opacity: 0.8 }}
                />
              );
            })}
          </div>
          <div className="flex justify-between text-xs text-gray-400 mt-4">
            <span>30 days ago</span>
            <span>Today</span>
          </div>
        </div>
      </div>
    </div>
  );
}

