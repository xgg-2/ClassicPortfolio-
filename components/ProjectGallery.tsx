import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight, Github, ExternalLink } from 'lucide-react';
import { Project } from '../types';
import { useSound } from '../hooks/useSound';

interface ProjectGalleryProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
}

// Fix: Cast motion components to any to resolve TypeScript errors where props like 'initial' are not recognized
const MotionDiv = motion.div as any;
const MotionImg = motion.img as any;

const ProjectGallery: React.FC<ProjectGalleryProps> = ({ project, isOpen, onClose }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const { playHover, playClick } = useSound();

  // Reset index when project changes
  React.useEffect(() => {
    if (isOpen) setCurrentIndex(0);
  }, [isOpen, project]);

  if (!project) return null;

  const images = [project.imageUrl, ...project.gallery];

  const nextImage = () => {
    playClick();
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    playClick();
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const handleClose = () => {
    playClick();
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[110] flex items-center justify-center md:p-4">
          {/* Backdrop */}
          <MotionDiv 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleClose}
            className="absolute inset-0 bg-ink/90 backdrop-blur-md"
          />

          {/* Modal Content */}
          <MotionDiv 
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.4, ease: [0.32, 0.72, 0, 1] }}
            className="relative w-full max-w-7xl h-[100vh] md:h-[90vh] bg-paper flex flex-col md:flex-row overflow-hidden md:shadow-2xl"
            onClick={(e: React.MouseEvent) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button 
              onClick={handleClose}
              onMouseEnter={playHover}
              className="absolute top-4 right-4 z-[120] p-2 bg-paper/50 backdrop-blur-md hover:bg-paper rounded-full transition-colors text-ink shadow-md"
            >
              <X size={24} />
            </button>

            {/* Image Viewer */}
            <div className="w-full h-1/2 md:h-full md:w-3/4 bg-stone-900 relative flex items-center justify-center p-4 md:p-12 overflow-hidden">
              <AnimatePresence mode="wait">
                <MotionImg 
                  key={currentIndex}
                  src={images[currentIndex]} 
                  alt={`${project.title} screenshot ${currentIndex + 1}`}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="max-h-full max-w-full object-contain select-none"
                />
              </AnimatePresence>

              {/* Navigation Arrows */}
              {images.length > 1 && (
                <>
                  <button 
                    onClick={prevImage}
                    onMouseEnter={playHover}
                    className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 p-2 md:p-3 bg-ink/30 md:bg-ink/50 text-paper hover:bg-ink transition-colors rounded-full backdrop-blur-sm"
                  >
                    <ChevronLeft size={20} className="md:w-6 md:h-6" />
                  </button>
                  <button 
                    onClick={nextImage}
                    onMouseEnter={playHover}
                    className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 p-2 md:p-3 bg-ink/30 md:bg-ink/50 text-paper hover:bg-ink transition-colors rounded-full backdrop-blur-sm"
                  >
                    <ChevronRight size={20} className="md:w-6 md:h-6" />
                  </button>
                </>
              )}
              
              {/* Image Counter */}
              <div className="absolute bottom-4 md:bottom-6 left-1/2 -translate-x-1/2 bg-ink/70 px-3 py-1 rounded-full text-[10px] md:text-xs text-stone-300 tracking-widest backdrop-blur-sm">
                {currentIndex + 1} / {images.length}
              </div>
            </div>

            {/* Project Details Sidebar */}
            <div className="w-full h-1/2 md:h-full md:w-1/4 p-6 md:p-10 overflow-y-auto border-t md:border-t-0 md:border-l border-stone-200 bg-paper">
               <span className="text-[10px] md:text-xs font-bold uppercase tracking-widest text-stone-400 mb-2 block">
                  {project.year}
               </span>
               <h2 className="font-serif text-2xl md:text-3xl text-ink mb-4 md:mb-6 leading-tight">
                 {project.title}
               </h2>
               
               <div className="mb-6 md:mb-8">
                  {project.githubUrl && (
                    <div className="inline-flex items-center gap-2 px-2 py-0.5 md:px-3 md:py-1 bg-green-100 text-green-800 text-[10px] md:text-xs font-bold uppercase tracking-wider rounded mb-3 md:mb-4">
                      <div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-green-600 rounded-full animate-pulse" />
                      Public Project
                    </div>
                  )}
                  <p className="text-stone-600 leading-relaxed text-sm">
                    {project.description}
                  </p>
               </div>

               <div className="mb-6 md:mb-8">
                 <h3 className="text-[10px] md:text-xs font-bold uppercase tracking-widest text-ink mb-3 md:mb-4">Stack</h3>
                 <div className="flex flex-wrap gap-1.5 md:gap-2">
                   {project.technologies.map(tech => (
                     <span key={tech} className="text-[10px] md:text-xs border border-stone-300 px-2 py-0.5 md:px-2 md:py-1 text-stone-500 rounded-sm">
                       {tech}
                     </span>
                   ))}
                 </div>
               </div>

               <div className="flex flex-col gap-2 md:gap-3 mt-auto pb-4 md:pb-0">
                 {project.githubUrl && (
                   <a 
                     href={project.githubUrl}
                     target="_blank"
                     rel="noopener noreferrer"
                     onMouseEnter={playHover}
                     onClick={playClick}
                     className="flex items-center justify-center gap-3 w-full py-2.5 md:py-3 bg-stone-200 text-ink hover:bg-stone-300 transition-colors text-[10px] md:text-sm font-bold uppercase tracking-wider"
                   >
                     <Github size={16} className="md:w-[18px] md:h-[18px]" /> View Code
                   </a>
                 )}
                 <a 
                   href={project.link}
                   target="_blank"
                   rel="noopener noreferrer"
                   onMouseEnter={playHover}
                   onClick={playClick}
                   className="flex items-center justify-center gap-3 w-full py-2.5 md:py-3 bg-ink text-paper hover:bg-accent transition-colors text-[10px] md:text-sm font-bold uppercase tracking-wider"
                 >
                   <ExternalLink size={16} className="md:w-[18px] md:h-[18px]" /> Live Demo
                 </a>
               </div>
            </div>
          </MotionDiv>
        </div>
      )}
    </AnimatePresence>
  );
};

export default ProjectGallery;