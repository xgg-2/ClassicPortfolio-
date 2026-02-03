import React, { useState, useMemo } from 'react';
import Section from './Section';
import { PROJECTS, SCRIPTS } from '../constants';
import { ArrowUpRight, Github, FolderOpen, Code, Copy, Terminal, Search, X } from 'lucide-react';
import ProjectGallery from './ProjectGallery';
import ScriptModal from './ScriptModal';
import { Project, Script } from '../types';
import { useSound } from '../hooks/useSound';
import { motion, LayoutGroup, AnimatePresence } from 'framer-motion';

const MotionDiv = motion.div as any;
const MotionButton = motion.button as any;

const CATEGORIES = ['All', 'Discord Bot', 'Tools', 'Website', 'Scripts'];

const Projects: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [selectedScript, setSelectedScript] = useState<Script | null>(null);
  const { playHover, playClick } = useSound();

  const filteredProjects = useMemo(() => {
    let currentProjects = PROJECTS;

    if (activeCategory !== 'All') {
      currentProjects = currentProjects.filter(p => p.category === activeCategory);
    }

    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      currentProjects = currentProjects.filter(p => 
        p.title.toLowerCase().includes(query) ||
        p.description.toLowerCase().includes(query) ||
        p.technologies.some(t => t.toLowerCase().includes(query))
      );
    }
    
    return currentProjects;
  }, [activeCategory, searchQuery]);

  const filteredScripts = useMemo(() => {
    let currentScripts = SCRIPTS;
    
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      currentScripts = currentScripts.filter(s => 
        s.title.toLowerCase().includes(query) ||
        s.description.toLowerCase().includes(query) ||
        s.language.toLowerCase().includes(query) ||
        s.tags.some(t => t.toLowerCase().includes(query))
      );
    }

    return currentScripts;
  }, [searchQuery]);

  const handleCategoryChange = (cat: string) => {
    playClick();
    setActiveCategory(cat);
  };

  const handleProjectClick = (project: Project) => {
    playClick();
    setSelectedProject(project);
  };

  const handleScriptClick = (script: Script) => {
    playClick();
    setSelectedScript(script);
  };

  const handleCopyScript = (e: React.MouseEvent, script: Script) => {
    e.stopPropagation();
    playClick();
    navigator.clipboard.writeText(script.codeSnippet);
  };

  const clearSearch = () => {
    playClick();
    setSearchQuery('');
  };

  return (
    <Section id="work" fullWidth>
      <div className="max-w-screen-xl mx-auto mb-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 border-b border-stone-300 pb-8">
          <div>
            <h2 className="font-serif text-5xl md:text-6xl text-ink mb-4">Selected Work</h2>
            <p className="text-stone-500 max-w-md">
              A curation of key projects and utilities, categorized by function and architecture.
            </p>
          </div>
          <div className="mt-6 md:mt-0 hidden md:block">
            <span className="text-6xl font-serif text-stone-200">01</span>
          </div>
        </div>

        <div className="flex flex-col-reverse lg:flex-row lg:items-center justify-between gap-8 mb-16">
          
          <div className="flex flex-wrap gap-2 md:gap-4 overflow-x-auto pb-4 md:pb-0 no-scrollbar">
            {CATEGORIES.map((cat) => (
              <MotionButton
                key={cat}
                onClick={() => handleCategoryChange(cat)}
                onMouseEnter={playHover}
                className={`relative px-4 md:px-6 py-2 text-xs md:text-sm font-bold uppercase tracking-widest transition-colors duration-300 ${
                  activeCategory === cat ? 'text-paper' : 'text-stone-500 hover:text-ink'
                }`}
              >
                {activeCategory === cat && (
                  <MotionDiv 
                    layoutId="activePill"
                    className="absolute inset-0 bg-ink rounded-full"
                    initial={false}
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{cat}</span>
              </MotionButton>
            ))}
          </div>

          <div className="relative w-full lg:w-72 group">
            <div className="absolute inset-y-0 left-0 flex items-center pl-0 pointer-events-none text-stone-400 group-focus-within:text-ink transition-colors">
              <Search size={18} />
            </div>
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search..."
              className="w-full bg-transparent border-b border-stone-300 py-2 pl-8 pr-8 text-ink placeholder:text-stone-400 focus:outline-none focus:border-ink transition-colors font-serif italic text-lg"
            />
            {searchQuery && (
              <button 
                onClick={clearSearch}
                className="absolute inset-y-0 right-0 flex items-center pr-0 text-stone-400 hover:text-ink cursor-pointer"
              >
                <X size={16} />
              </button>
            )}
          </div>
        </div>
      </div>

      <LayoutGroup>
        <MotionDiv layout className="max-w-screen-2xl mx-auto min-h-[400px]">
          <AnimatePresence mode="wait">
            {activeCategory === 'Scripts' ? (
              <MotionDiv 
                key="scripts-grid"
                layout
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              >
                {filteredScripts.length > 0 ? (
                  filteredScripts.map((script) => (
                    <MotionDiv
                      key={script.id}
                      layout
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      className="group bg-paper border border-stone-200 hover:border-ink transition-colors duration-300 cursor-pointer flex flex-col h-full"
                      onClick={() => handleScriptClick(script)}
                      onMouseEnter={playHover}
                    >
                      <div className="p-6 bg-stone-100 border-b border-stone-200 flex justify-between items-center group-hover:bg-stone-200 transition-colors">
                        <div className="flex items-center gap-3">
                          <Terminal size={20} className="text-stone-500 group-hover:text-ink transition-colors" />
                          <span className="text-xs font-bold uppercase tracking-widest text-stone-500 group-hover:text-ink transition-colors">
                            {script.language}
                          </span>
                        </div>
                        <button 
                          onClick={(e) => handleCopyScript(e, script)}
                          className="p-2 hover:bg-white rounded-md transition-colors text-stone-500 hover:text-ink"
                          title="Copy Script"
                        >
                          <Copy size={16} />
                        </button>
                      </div>
                      
                      <div className="p-6 flex-1 flex flex-col">
                        <h3 className="font-serif text-2xl text-ink mb-3 group-hover:underline decoration-1 underline-offset-4">
                          {script.title}
                        </h3>
                        <p className="text-stone-600 text-sm leading-relaxed mb-6 flex-1 line-clamp-3">
                          {script.description}
                        </p>
                        <div className="flex flex-wrap gap-2 mt-auto">
                          {script.tags.map(tag => (
                            <span key={tag} className="text-[10px] font-bold uppercase tracking-wider px-2 py-1 bg-stone-100 text-stone-500 rounded-sm">
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                      
                      <div className="px-6 py-3 bg-stone-50 border-t border-stone-100 text-xs font-bold uppercase tracking-widest text-stone-400 group-hover:text-ink group-hover:bg-stone-200 transition-colors flex items-center justify-center gap-2">
                        <Code size={14} /> View Source
                      </div>
                    </MotionDiv>
                  ))
                ) : (
                  <div className="col-span-full py-20 text-center text-stone-400 italic font-serif text-xl">
                    No scripts found matching your search.
                  </div>
                )}
              </MotionDiv>
            ) : (
              <MotionDiv 
                key="projects-grid"
                layout
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              >
                {filteredProjects.length > 0 ? (
                  filteredProjects.map((project) => (
                    <MotionDiv 
                      key={project.id} 
                      layout
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      className="group cursor-pointer flex flex-col"
                      onClick={() => handleProjectClick(project)}
                      onMouseEnter={playHover}
                    >
                      <div className="relative overflow-hidden mb-6 bg-stone-200 aspect-[16/10] shadow-sm">
                        <div className="absolute inset-0 bg-ink/0 group-hover:bg-ink/10 transition-colors duration-500 z-10 flex items-center justify-center opacity-0 group-hover:opacity-100">
                            <div className="bg-paper text-ink px-5 py-2 font-serif italic text-lg flex items-center gap-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 shadow-lg">
                              <FolderOpen size={18} /> View Details
                            </div>
                        </div>
                        
                        {project.githubUrl && (
                          <div className="absolute top-3 right-3 z-20 bg-paper/90 backdrop-blur px-2 py-1 text-[10px] font-bold uppercase tracking-widest text-ink flex items-center gap-1 shadow-sm">
                            <Github size={10} /> Public
                          </div>
                        )}

                        <img 
                          src={project.imageUrl} 
                          alt={project.title}
                          className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-1000 ease-out grayscale hover:grayscale-0"
                        />
                      </div>
                      
                      <div className="flex-1 flex flex-col border-t border-stone-200 pt-4">
                          <div className="flex items-center justify-between mb-2">
                            <span className="text-[10px] font-bold uppercase tracking-widest text-stone-400">
                              {project.category}
                            </span>
                            <ArrowUpRight size={18} className="text-stone-300 group-hover:text-ink transition-colors" />
                          </div>

                          <h3 className="font-serif text-2xl text-ink mb-3 group-hover:underline decoration-1 underline-offset-4">
                            {project.title}
                          </h3>
                          
                          <p className="text-stone-600 leading-relaxed text-sm mb-4 line-clamp-2">
                            {project.description}
                          </p>
                          
                          <div className="flex flex-wrap gap-2 mt-auto">
                            {project.technologies.slice(0, 3).map((tech) => (
                              <span key={tech} className="text-[10px] font-bold uppercase tracking-wider border border-stone-200 px-2 py-1 text-stone-500 bg-stone-50">
                                {tech}
                              </span>
                            ))}
                          </div>
                      </div>
                    </MotionDiv>
                  ))
                ) : (
                  <div className="col-span-full py-20 text-center text-stone-400 italic font-serif text-xl">
                    No projects found matching your search.
                  </div>
                )}
              </MotionDiv>
            )}
          </AnimatePresence>
        </MotionDiv>
      </LayoutGroup>

      <ProjectGallery 
        project={selectedProject} 
        isOpen={!!selectedProject} 
        onClose={() => setSelectedProject(null)} 
      />

      <ScriptModal
        script={selectedScript}
        isOpen={!!selectedScript}
        onClose={() => setSelectedScript(null)}
      />
    </Section>
  );
};

export default Projects;
