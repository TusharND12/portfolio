'use client';

import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Minimize2, Maximize2 } from 'lucide-react';
import { useThemeStore } from '@/lib/store';
import { parseCommand } from '@/lib/utils';
import { terminalCommands, skills, projects, personalInfo } from '@/lib/data';

interface TerminalLine {
  type: 'input' | 'output' | 'error';
  content: string;
}

export default function Terminal() {
  const [lines, setLines] = useState<TerminalLine[]>([
    { type: 'output', content: 'Welcome to Developer Universe Terminal v1.0.0' },
    { type: 'output', content: 'Type "help" for available commands' },
    { type: 'output', content: '' },
  ]);
  const [input, setInput] = useState('');
  const [commandHistory, setCommandHistory] = useState<string[]>([]);
  const [historyIndex, setHistoryIndex] = useState(-1);
  const [isMinimized, setIsMinimized] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const outputRef = useRef<HTMLDivElement>(null);
  const { isTerminalOpen, toggleTerminal } = useThemeStore();

  useEffect(() => {
    if (outputRef.current) {
      outputRef.current.scrollTop = outputRef.current.scrollHeight;
    }
  }, [lines]);

  const executeCommand = (cmd: string) => {
    const { command, args } = parseCommand(cmd);
    
    let output = '';

    switch (command.toLowerCase()) {
      case 'help':
        output = terminalCommands.help;
        break;
      
      case 'about':
        output = terminalCommands.about;
        break;
      
      case 'whoami':
        output = terminalCommands.whoami;
        break;
      
      case 'skills':
        output = '\n🎯 SKILLS:\n\n';
        output += '📱 Frontend:\n';
        skills.frontend.forEach(skill => {
          output += `  ${skill.icon} ${skill.name}: ${'█'.repeat(Math.floor(skill.level / 10))}${'░'.repeat(10 - Math.floor(skill.level / 10))} ${skill.level}%\n`;
        });
        output += '\n⚙️ Backend:\n';
        skills.backend.forEach(skill => {
          output += `  ${skill.icon} ${skill.name}: ${'█'.repeat(Math.floor(skill.level / 10))}${'░'.repeat(10 - Math.floor(skill.level / 10))} ${skill.level}%\n`;
        });
        break;
      
      case 'projects':
      case 'ls':
        output = '\n📂 PROJECTS:\n\n';
        projects.forEach((project, index) => {
          output += `${index + 1}. ${project.title}\n`;
          output += `   ${project.description}\n`;
          output += `   Tech: ${project.technologies.join(', ')}\n\n`;
        });
        break;
      
      case 'contact':
        output = `\n📧 CONTACT INFORMATION:\n\n`;
        output += `Email: ${personalInfo.email}\n`;
        output += `GitHub: ${personalInfo.github}\n`;
        output += `LinkedIn: ${personalInfo.linkedin}\n`;
        break;
      
      case 'clear':
      case 'cls':
        setLines([]);
        return;
      
      case 'sudo':
        output = terminalCommands.sudo;
        break;
      
      case 'matrix':
        output = `
        Wake up, Neo...
        The Matrix has you...
        Follow the white rabbit.
        
        Knock, knock, Neo.
        `;
        break;
      
      case 'cd':
        if (args[0]) {
          output = `Changed directory to: ${args[0]}`;
        } else {
          output = 'Usage: cd <directory>';
        }
        break;
      
      case 'cat':
        if (args[0]) {
          output = `Reading ${args[0]}...\nThis is a demo file!`;
        } else {
          output = 'Usage: cat <filename>';
        }
        break;
      
      case 'theme':
        output = 'Available themes: universe, terminal, cyberpunk, professional\nUse the theme switcher in the navigation bar';
        break;
      
      case 'ml':
        output = terminalCommands.ml;
        break;
      
      case 'ai':
        output = terminalCommands.ai;
        break;
      
      case 'resume':
        output = terminalCommands.resume;
        break;
      
      case 'edgecompress':
        output = terminalCommands.edgecompress;
        break;
      
      case 'hackathon':
        output = terminalCommands.hackathon;
        break;
      
      case 'echo':
        output = args.join(' ');
        break;
      
      case '':
        return;
      
      default:
        output = `Command not found: ${command}\nType "help" for available commands`;
        setLines(prev => [...prev, 
          { type: 'input', content: `$ ${cmd}` },
          { type: 'error', content: output }
        ]);
        return;
    }

    setLines(prev => [...prev,
      { type: 'input', content: `$ ${cmd}` },
      { type: 'output', content: output }
    ]);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (input.trim()) {
      setCommandHistory(prev => [...prev, input]);
      setHistoryIndex(-1);
      executeCommand(input);
      setInput('');
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (commandHistory.length > 0) {
        const newIndex = historyIndex === -1 ? commandHistory.length - 1 : Math.max(0, historyIndex - 1);
        setHistoryIndex(newIndex);
        setInput(commandHistory[newIndex]);
      }
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (historyIndex !== -1) {
        const newIndex = historyIndex + 1;
        if (newIndex >= commandHistory.length) {
          setHistoryIndex(-1);
          setInput('');
        } else {
          setHistoryIndex(newIndex);
          setInput(commandHistory[newIndex]);
        }
      }
    }
  };

  if (!isTerminalOpen) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 50 }}
        className={`fixed ${isMinimized ? 'bottom-4 right-4 w-80 h-12' : 'bottom-4 right-4 w-[700px] max-w-[90vw] h-[500px]'} z-40 glass rounded-lg overflow-hidden transition-all duration-300`}
      >
        {/* Terminal Header */}
        <div className="bg-gray-900 px-4 py-2 flex items-center justify-between border-b border-gray-700">
          <div className="flex items-center space-x-2">
            <div className="flex space-x-2">
              <button
                onClick={toggleTerminal}
                className="w-3 h-3 rounded-full bg-red-600 hover:bg-red-600 transition-colors"
              />
              <button
                onClick={() => setIsMinimized(!isMinimized)}
                className="w-3 h-3 rounded-full bg-yellow-500 hover:bg-yellow-600 transition-colors"
              />
              <button className="w-3 h-3 rounded-full bg-green-500 hover:bg-green-600 transition-colors" />
            </div>
            <span className="text-sm text-gray-400 ml-2">terminal@devuniverse</span>
          </div>
          <div className="flex items-center space-x-2">
            <button
              onClick={() => setIsMinimized(!isMinimized)}
              className="text-gray-400 hover:text-white transition-colors"
            >
              {isMinimized ? <Maximize2 size={16} /> : <Minimize2 size={16} />}
            </button>
            <button
              onClick={toggleTerminal}
              className="text-gray-400 hover:text-white transition-colors"
            >
              <X size={16} />
            </button>
          </div>
        </div>

        {/* Terminal Body */}
        {!isMinimized && (
          <div className="h-full flex flex-col bg-terminal-bg">
            <div
              ref={outputRef}
              className="flex-1 overflow-y-auto p-4 font-mono text-sm"
            >
              {lines.map((line, index) => (
                <div
                  key={index}
                  className={`${
                    line.type === 'input'
                      ? 'text-terminal-prompt'
                      : line.type === 'error'
                      ? 'text-red-400'
                      : 'text-terminal-text'
                  } whitespace-pre-wrap`}
                >
                  {line.content}
                </div>
              ))}
            </div>

            {/* Terminal Input */}
            <form onSubmit={handleSubmit} className="p-4 border-t border-gray-700">
              <div className="flex items-center space-x-2">
                <span className="text-terminal-prompt font-mono">$</span>
                <input
                  ref={inputRef}
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={handleKeyDown}
                  className="flex-1 bg-transparent text-terminal-text font-mono outline-none"
                  placeholder="Type a command..."
                  autoFocus
                />
              </div>
            </form>
          </div>
        )}
      </motion.div>
    </AnimatePresence>
  );
}

