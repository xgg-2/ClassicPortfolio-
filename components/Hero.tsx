import React from 'react';
import Section from './Section';
import { ArrowDown } from 'lucide-react';
import { motion } from 'framer-motion';

// Fix: Cast motion components to any to resolve TypeScript errors where props like 'initial' are not recognized
const MotionP = motion.p as any;
const MotionH1 = motion.h1 as any;
const MotionDiv = motion.div as any;

const Hero: React.FC = () => {
  return (
    <Section id="hero" className="min-h-screen flex flex-col justify-center pt-32 bg-paper relative z-10">
      <div className="max-w-5xl">
        <MotionP 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-sm md:text-base font-bold uppercase tracking-widest text-stone-500 mb-6"
        >
          Established 2015
        </MotionP>
        
        <MotionH1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
          className="font-serif text-6xl md:text-8xl lg:text-9xl leading-[0.9] text-ink mb-12 tracking-tighter"
        >
          Engineering <br />
          <span className="italic font-light">Digital</span> Clarity.
        </MotionH1>
        
        <div className="max-w-xl">
          <MotionP 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="text-lg md:text-xl leading-relaxed text-stone-600"
          >
            Specializing in scalable architecture and high-fidelity user interfaces. 
            I build robust software solutions that stand the test of time, prioritizing 
            maintainability and performance over fleeting trends.
          </MotionP>
        </div>
        
        <MotionDiv 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="mt-20 flex items-center space-x-4 animate-bounce"
        >
          <span className="text-xs uppercase tracking-widest text-stone-400">Scroll</span>
          <ArrowDown size={16} className="text-stone-400" />
        </MotionDiv>
      </div>
    </Section>
  );
};

export default Hero;