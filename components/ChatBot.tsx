'use client';

import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { TerminalTerminal, TerminalX } from './TerminalIcons';

interface Message {
  role: 'user' | 'assistant';
  content: string;
}

export default function ChatBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      role: 'assistant',
      content: `$ whoami
tushar-ai-assistant

$ ls -la portfolio/
drwxr-xr-x 8 tushar tushar 4096 Dec 2024 projects/
drwxr-xr-x 6 tushar tushar 4096 Dec 2024 skills/
drwxr-xr-x 4 tushar tushar 4096 Dec 2024 experience/
drwxr-xr-x 3 tushar tushar 4096 Dec 2024 achievements/

$ cat README.md
AI Assistant for Tushar Dhokane's Portfolio
============================================

Available commands:
• search projects python    # Find Python projects
• search skills react       # Find React expertise  
• search achievements ml    # Find ML achievements
• search experience intern  # Find internship details
• contact info             # Get contact information

$ help
Type your query to search through portfolio data...`,
    },
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMessage = input.trim();
    setInput('');
    setMessages((prev) => [...prev, { role: 'user', content: userMessage }]);
    setIsLoading(true);

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: userMessage }),
      });

      const data = await response.json();
      setMessages((prev) => [
        ...prev,
        { role: 'assistant', content: data.response },
      ]);
    } catch (error) {
      setMessages((prev) => [
        ...prev,
        {
          role: 'assistant',
          content: 'Sorry, I encountered an error. Please try again.',
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      {/* Chat Button */}
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 left-6 z-50 p-4 rounded-lg bg-black border-2 border-green-400 shadow-lg hover:shadow-green-400/50 transition-all duration-300 hover:border-green-300"
      >
        {isOpen ? <TerminalX size={24} /> : <TerminalTerminal size={24} />}
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 50, scale: 0.9 }}
            className="fixed bottom-24 left-6 w-96 max-w-[calc(100vw-3rem)] h-[500px] z-50 bg-black border-2 border-green-400 rounded-lg overflow-hidden flex flex-col shadow-2xl"
          >
            {/* Header */}
            <div className="bg-black border-b border-gray-700 p-3">
              <div className="flex items-center space-x-2">
                <div className="flex space-x-1">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                </div>
                <div className="flex-1 text-center">
                  <span className="text-gray-300 font-mono text-sm">terminal@tushar-portfolio:~$</span>
                </div>
              </div>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto bg-black p-4 space-y-2">
              {messages.map((message, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`flex ${
                    message.role === 'user' ? 'justify-start' : 'justify-start'
                  }`}
                >
                  <div className="w-full">
                    {message.role === 'user' && (
                      <div className="text-green-400 font-mono text-sm mb-1">
                        visitor@portfolio:~$ {message.content}
                      </div>
                    )}
                    <div
                      className={`${
                        message.role === 'user'
                          ? 'hidden'
                          : 'text-gray-300 font-mono text-sm whitespace-pre-wrap'
                      }`}
                    >
                      {message.content}
                    </div>
                  </div>
                </motion.div>
              ))}
              {isLoading && (
                <div className="flex justify-start">
                  <div className="text-gray-300 font-mono text-sm">
                    <span className="text-green-400">tushar-ai-assistant@portfolio:~$</span> processing...
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <form onSubmit={handleSubmit} className="bg-black border-t border-gray-700 p-4">
              <div className="flex items-center space-x-2">
                <span className="text-green-400 font-mono text-sm">visitor@portfolio:~$</span>
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder=""
                  className="flex-1 bg-transparent text-gray-300 font-mono text-sm border-none outline-none"
                  disabled={isLoading}
                />
                <div className="w-2 h-4 bg-green-400 animate-pulse"></div>
              </div>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

