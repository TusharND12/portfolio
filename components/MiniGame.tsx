'use client';

import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Play, RotateCcw } from 'lucide-react';

export default function MiniGame() {
  const [isOpen, setIsOpen] = useState(false);
  const [score, setScore] = useState(0);
  const [gameStarted, setGameStarted] = useState(false);
  const [targetWord, setTargetWord] = useState('');
  const [userInput, setUserInput] = useState('');
  const [timeLeft, setTimeLeft] = useState(30);

  const words = [
    'react', 'typescript', 'javascript', 'nextjs', 'tailwind',
    'nodejs', 'python', 'database', 'api', 'frontend',
    'backend', 'fullstack', 'coding', 'developer', 'portfolio'
  ];

  const startGame = () => {
    setGameStarted(true);
    setScore(0);
    setTimeLeft(30);
    setTargetWord(words[Math.floor(Math.random() * words.length)]);
  };

  const resetGame = () => {
    setGameStarted(false);
    setScore(0);
    setUserInput('');
    setTimeLeft(30);
  };

  useEffect(() => {
    if (gameStarted && timeLeft > 0) {
      const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
      return () => clearTimeout(timer);
    } else if (timeLeft === 0) {
      setGameStarted(false);
    }
  }, [gameStarted, timeLeft]);

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setUserInput(value);

    if (value.toLowerCase() === targetWord) {
      setScore(score + 1);
      setUserInput('');
      setTargetWord(words[Math.floor(Math.random() * words.length)]);
      setTimeLeft(timeLeft + 2); // Bonus time
    }
  };

  return (
    <>
      {/* Game Button - Floating */}
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-32 right-6 z-40 p-4 rounded-full glass border border-cyber-purple/30 hover:border-cyber-purple/60 transition-all backdrop-blur-sm"
        title="Play Typing Game"
      >
        <Play size={24} className="text-cyber-purple" />
      </motion.button>

      {/* Game Modal */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm"
            onClick={() => setIsOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.9, y: 50 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 50 }}
              onClick={(e) => e.stopPropagation()}
              className="card max-w-md w-full mx-4"
            >
              {/* Header */}
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-2xl font-bold gradient-text">Speed Typing</h3>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-2 hover:bg-gray-800 rounded-lg transition-colors"
                >
                  <X size={20} />
                </button>
              </div>

              {!gameStarted ? (
                <div className="text-center">
                  <p className="text-gray-400 mb-6">
                    Type the words as fast as you can!<br />
                    Test your coding vocabulary speed.
                  </p>
                  <button onClick={startGame} className="btn-primary">
                    Start Game
                  </button>
                  {score > 0 && (
                    <p className="mt-4 text-cyber-green">
                      Last Score: {score} words
                    </p>
                  )}
                </div>
              ) : (
                <div>
                  {/* Game Stats */}
                  <div className="flex justify-between mb-6">
                    <div className="text-center">
                      <p className="text-gray-400 text-sm">Score</p>
                      <p className="text-2xl font-bold text-cyber-green">{score}</p>
                    </div>
                    <div className="text-center">
                      <p className="text-gray-400 text-sm">Time Left</p>
                      <p className="text-2xl font-bold text-cyber-blue">{timeLeft}s</p>
                    </div>
                  </div>

                  {/* Target Word */}
                  <div className="bg-gray-900 rounded-lg p-8 mb-4 text-center">
                    <motion.p
                      key={targetWord}
                      initial={{ scale: 0.8, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      className="text-4xl font-mono font-bold gradient-text"
                    >
                      {targetWord}
                    </motion.p>
                  </div>

                  {/* Input */}
                  <input
                    type="text"
                    value={userInput}
                    onChange={handleInput}
                    autoFocus
                    placeholder="Type here..."
                    className="w-full px-4 py-3 rounded-lg bg-gray-900 border-2 border-cyber-blue focus:border-cyber-purple focus:outline-none text-center text-xl font-mono"
                  />

                  {/* Reset Button */}
                  <button
                    onClick={resetGame}
                    className="mt-4 w-full px-4 py-2 glass rounded-lg hover:bg-gray-800 transition-colors flex items-center justify-center space-x-2"
                  >
                    <RotateCcw size={16} />
                    <span>Reset</span>
                  </button>
                </div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

