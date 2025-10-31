'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, Code, X, Copy, Check } from 'lucide-react';

const sampleCode = `// Welcome to the Code Playground!
function greet(name) {
  return \`Hello, \${name}! 👋\`;
}

console.log(greet('Developer'));

// Try editing and running this code!
const skills = ['React', 'TypeScript', 'Next.js'];
skills.forEach(skill => {
  console.log(\`⚡ Expert in: \${skill}\`);
});`;

export default function CodePlayground() {
  const [isOpen, setIsOpen] = useState(false);
  const [code, setCode] = useState(sampleCode);
  const [output, setOutput] = useState('');
  const [copied, setCopied] = useState(false);

  const runCode = () => {
    try {
      const logs: string[] = [];
      const originalLog = console.log;
      
      console.log = (...args: any[]) => {
        logs.push(args.map(arg => 
          typeof arg === 'object' ? JSON.stringify(arg) : String(arg)
        ).join(' '));
      };

      eval(code);
      console.log = originalLog;
      setOutput(logs.join('\n'));
    } catch (error: any) {
      setOutput(`❌ Error: ${error.message}`);
    }
  };

  const copyCode = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <>
      {/* Trigger Button */}
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(true)}
        className="fixed bottom-48 right-6 z-40 p-4 rounded-full glass border border-cyber-green/30 hover:border-cyber-green/60 transition-all backdrop-blur-sm"
        title="Code Playground"
      >
        <Code size={24} className="text-cyber-green" />
      </motion.button>

      {/* Playground Modal */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm p-4"
            onClick={() => setIsOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.9, y: 50 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 50 }}
              onClick={(e) => e.stopPropagation()}
              className="glass rounded-lg w-full max-w-4xl h-[80vh] flex flex-col"
            >
              {/* Header */}
              <div className="flex items-center justify-between p-4 border-b border-gray-700">
                <div className="flex items-center space-x-3">
                  <Code className="text-cyber-green" size={24} />
                  <h3 className="text-xl font-bold gradient-text">Code Playground</h3>
                </div>
                <div className="flex items-center space-x-2">
                  <button
                    onClick={copyCode}
                    className="p-2 hover:bg-gray-800 rounded-lg transition-colors"
                    title="Copy code"
                  >
                    {copied ? <Check size={20} className="text-cyber-green" /> : <Copy size={20} />}
                  </button>
                  <button
                    onClick={() => setIsOpen(false)}
                    className="p-2 hover:bg-gray-800 rounded-lg transition-colors"
                  >
                    <X size={20} />
                  </button>
                </div>
              </div>

              {/* Editor and Output */}
              <div className="flex-1 flex flex-col md:flex-row overflow-hidden">
                {/* Code Editor */}
                <div className="flex-1 flex flex-col p-4 border-r border-gray-700">
                  <div className="text-sm text-gray-400 mb-2">JavaScript Editor</div>
                  <textarea
                    value={code}
                    onChange={(e) => setCode(e.target.value)}
                    className="flex-1 w-full bg-gray-900 text-cyber-green font-mono text-sm p-4 rounded-lg border border-gray-700 focus:border-cyber-green focus:outline-none resize-none"
                    spellCheck={false}
                  />
                </div>

                {/* Output Console */}
                <div className="flex-1 flex flex-col p-4">
                  <div className="text-sm text-gray-400 mb-2">Console Output</div>
                  <div className="flex-1 bg-gray-900 font-mono text-sm p-4 rounded-lg border border-gray-700 overflow-auto">
                    {output ? (
                      <pre className="text-cyber-blue whitespace-pre-wrap">{output}</pre>
                    ) : (
                      <div className="text-gray-500">Click "Run Code" to see output...</div>
                    )}
                  </div>
                </div>
              </div>

              {/* Footer */}
              <div className="p-4 border-t border-gray-700 flex items-center justify-between">
                <div className="text-sm text-gray-400">
                  💡 Tip: Try editing the code and click Run!
                </div>
                <button
                  onClick={runCode}
                  className="btn-primary flex items-center space-x-2"
                >
                  <Play size={20} />
                  <span>Run Code</span>
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

