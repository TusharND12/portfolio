'use client';

import React from 'react';

interface TerminalIconProps {
  size?: number;
  className?: string;
}

// Terminal-style icons with ASCII art aesthetics
export const TerminalCode: React.FC<TerminalIconProps> = ({ size = 24, className = '' }) => (
  <div className={`font-mono text-green-400 ${className}`} style={{ fontSize: size }}>
    {'</>'}
  </div>
);

export const TerminalTerminal: React.FC<TerminalIconProps> = ({ size = 24, className = '' }) => (
  <div className={`font-mono text-green-400 ${className}`} style={{ fontSize: size }}>
    {'>_'}
  </div>
);

export const TerminalStar: React.FC<TerminalIconProps> = ({ size = 24, className = '' }) => (
  <div className={`font-mono text-yellow-400 ${className}`} style={{ fontSize: size }}>
    {'★'}
  </div>
);

export const TerminalBranch: React.FC<TerminalIconProps> = ({ size = 24, className = '' }) => (
  <div className={`font-mono text-blue-400 ${className}`} style={{ fontSize: size }}>
    {'⊞'}
  </div>
);

export const TerminalFork: React.FC<TerminalIconProps> = ({ size = 24, className = '' }) => (
  <div className={`font-mono text-purple-400 ${className}`} style={{ fontSize: size }}>
    {'⚡'}
  </div>
);

export const TerminalTrophy: React.FC<TerminalIconProps> = ({ size = 24, className = '' }) => (
  <div className={`font-mono text-yellow-400 ${className}`} style={{ fontSize: size }}>
    {'⚡'}
  </div>
);

export const TerminalBrain: React.FC<TerminalIconProps> = ({ size = 24, className = '' }) => (
  <div className={`font-mono text-pink-400 ${className}`} style={{ fontSize: size }}>
    {'🧠'}
  </div>
);

export const TerminalRocket: React.FC<TerminalIconProps> = ({ size = 24, className = '' }) => (
  <div className={`font-mono text-cyan-400 ${className}`} style={{ fontSize: size }}>
    {'🚀'}
  </div>
);

export const TerminalTarget: React.FC<TerminalIconProps> = ({ size = 24, className = '' }) => (
  <div className={`font-mono text-green-400 ${className}`} style={{ fontSize: size }}>
    {'◉'}
  </div>
);

export const TerminalHeart: React.FC<TerminalIconProps> = ({ size = 24, className = '' }) => (
  <div className={`font-mono text-red-400 ${className}`} style={{ fontSize: size }}>
    {'♥'}
  </div>
);

export const TerminalAward: React.FC<TerminalIconProps> = ({ size = 24, className = '' }) => (
  <div className={`font-mono text-yellow-400 ${className}`} style={{ fontSize: size }}>
    {'🏆'}
  </div>
);

export const TerminalGraduation: React.FC<TerminalIconProps> = ({ size = 24, className = '' }) => (
  <div className={`font-mono text-blue-400 ${className}`} style={{ fontSize: size }}>
    {'🎓'}
  </div>
);

export const TerminalCalendar: React.FC<TerminalIconProps> = ({ size = 24, className = '' }) => (
  <div className={`font-mono text-blue-400 ${className}`} style={{ fontSize: size }}>
    {'📅'}
  </div>
);

export const TerminalTrending: React.FC<TerminalIconProps> = ({ size = 24, className = '' }) => (
  <div className={`font-mono text-green-400 ${className}`} style={{ fontSize: size }}>
    {'↗'}
  </div>
);

export const TerminalCoffee: React.FC<TerminalIconProps> = ({ size = 24, className = '' }) => (
  <div className={`font-mono text-orange-400 ${className}`} style={{ fontSize: size }}>
    {'☕'}
  </div>
);

export const TerminalMusic: React.FC<TerminalIconProps> = ({ size = 24, className = '' }) => (
  <div className={`font-mono text-purple-400 ${className}`} style={{ fontSize: size }}>
    {'♪'}
  </div>
);

export const TerminalLightbulb: React.FC<TerminalIconProps> = ({ size = 24, className = '' }) => (
  <div className={`font-mono text-yellow-400 ${className}`} style={{ fontSize: size }}>
    {'💡'}
  </div>
);

export const TerminalZap: React.FC<TerminalIconProps> = ({ size = 24, className = '' }) => (
  <div className={`font-mono text-yellow-400 ${className}`} style={{ fontSize: size }}>
    {'⚡'}
  </div>
);

export const TerminalUsers: React.FC<TerminalIconProps> = ({ size = 24, className = '' }) => (
  <div className={`font-mono text-blue-400 ${className}`} style={{ fontSize: size }}>
    {'👥'}
  </div>
);

export const TerminalX: React.FC<TerminalIconProps> = ({ size = 24, className = '' }) => (
  <div className={`font-mono text-red-400 ${className}`} style={{ fontSize: size }}>
    {'✕'}
  </div>
);

