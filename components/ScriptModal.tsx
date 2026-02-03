import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Copy, Check, Code } from 'lucide-react';
import { Script } from '../types';
import { useSound } from '../hooks/useSound';

interface ScriptModalProps {
  script: Script | null;
  isOpen: boolean;
  onClose: () => void;
}


const MotionDiv = motion.div as any;

const ScriptModal: React.FC<ScriptModalProps> = ({ script, isOpen, onClose }) => {
  const { playClick, playHover } = useSound();
  const [copied, setCopied] = useState(false);

  if (!script) return null;

  const handleCopy = () => {
    playClick();
    navigator.clipboard.writeText(script.codeSnippet);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[110] flex items-center justify-center p-4">
          <MotionDiv 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-ink/90 backdrop-blur-md"
          />

          <MotionDiv 
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.4, ease: [0.32, 0.72, 0, 1] }}
            className="relative w-full max-w-4xl bg-paper shadow-2xl overflow-hidden md:rounded-lg flex flex-col h-full md:h-auto max-h-[100vh] md:max-h-[90vh]"
            onClick={(e: React.MouseEvent) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="p-4 md:p-6 border-b border-stone-200 flex justify-between items-start bg-stone-100 relative z-[120]">
              <div>
                <span className="text-[10px] md:text-xs font-bold uppercase tracking-widest text-stone-500 mb-1 block">
                    {script.language} Script
                </span>
                <h2 className="font-serif text-xl md:text-3xl text-ink leading-tight">
                    {script.title}
                </h2>
              </div>
              <button 
                onClick={() => { playClick(); onClose(); }}
                className="p-2 bg-stone-200 hover:bg-stone-300 rounded-full text-ink transition-colors relative z-[130]"
              >
                <X size={20} />
              </button>
            </div>

            {/* Content */}
            <div className="flex-1 overflow-y-auto p-4 md:p-8">
                <div className="flex flex-col md:grid md:grid-cols-3 gap-6 md:gap-8">
                    {/* Info Column */}
                    <div className="md:col-span-1">
                        <div className="aspect-video md:aspect-[4/3] bg-stone-200 rounded-lg overflow-hidden mb-4 md:mb-6">
                            <img src={script.imageUrl} alt={script.title} className="w-full h-full object-cover" />
                        </div>
                        <h3 className="text-[10px] md:text-xs font-bold uppercase tracking-widest text-ink mb-2 md:mb-3">About</h3>
                        <p className="text-stone-600 text-sm leading-relaxed mb-4 md:mb-6">
                            {script.description}
                        </p>
                        <div className="flex flex-wrap gap-1.5 md:gap-2">
                            {script.tags.map(tag => (
                                <span key={tag} className="text-[9px] md:text-[10px] uppercase font-bold px-2 py-0.5 md:py-1 bg-stone-200 text-stone-600 rounded">
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </div>

                    {/* Code Column */}
                    <div className="md:col-span-2 flex flex-col min-h-[300px] md:min-h-0">
                        <div className="flex justify-between items-center mb-3 md:mb-4">
                            <h3 className="text-[10px] md:text-xs font-bold uppercase tracking-widest text-ink flex items-center gap-2">
                                <Code size={14} className="md:w-4 md:h-4" /> Source Code
                            </h3>
                            <button 
                                onClick={handleCopy}
                                onMouseEnter={playHover}
                                className={`flex items-center gap-2 px-3 py-1.5 md:px-4 md:py-2 text-[10px] md:text-xs font-bold uppercase tracking-wider rounded transition-all duration-300 ${
                                    copied ? 'bg-green-600 text-white' : 'bg-ink text-paper hover:bg-stone-800'
                                }`}
                            >
                                {copied ? <Check size={12} className="md:w-[14px] md:h-[14px]" /> : <Copy size={12} className="md:w-[14px] md:h-[14px]" />}
                                {copied ? 'Copied' : 'Copy'}
                            </button>
                        </div>
                        
                        <div className="bg-[#1e1e1e] p-3 md:p-4 rounded-lg overflow-x-auto border border-stone-800 flex-1">
                            <pre className="text-xs md:text-sm font-mono text-gray-300 leading-relaxed">
                                <code>{script.codeSnippet}</code>
                            </pre>
                        </div>
                    </div>
                </div>
            </div>

          </MotionDiv>
        </div>
      )}
    </AnimatePresence>
  );
};

export default ScriptModal;
