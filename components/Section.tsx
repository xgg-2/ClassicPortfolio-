import React from 'react';
import { motion } from 'framer-motion';

// Fix: Cast motion component to any to resolve TypeScript errors where props like 'initial' are not recognized
const MotionSection = motion.section as any;

interface SectionProps {
  id?: string;
  className?: string;
  children: React.ReactNode;
  fullWidth?: boolean;
}

const Section: React.FC<SectionProps> = ({ id, className = '', children, fullWidth = false }) => {
  return (
    <MotionSection 
      id={id} 
      className={`py-20 md:py-32 border-b border-stone-200 last:border-0 relative bg-paper z-10 ${className}`}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className={`mx-auto px-6 md:px-12 lg:px-24 ${fullWidth ? 'max-w-full' : 'max-w-screen-xl'}`}>
        {children}
      </div>
    </MotionSection>
  );
};

export default Section;