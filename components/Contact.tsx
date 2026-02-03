import React from 'react';
import Section from './Section';
import { SOCIAL_LINKS } from '../constants';
import { ArrowRight } from 'lucide-react';
import { useSound } from '../hooks/useSound';

const Contact: React.FC = () => {
  const { playHover, playClick } = useSound();

  return (
    <footer className="bg-ink text-paper pt-24 pb-12">
      <div className="mx-auto px-6 md:px-12 lg:px-24 max-w-screen-xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-24">
          
          <div>
            <h2 className="font-serif text-5xl md:text-7xl mb-8">Let's build something enduring.</h2>
            <p className="text-stone-400 text-lg max-w-md leading-relaxed mb-12">
              Currently available for select consulting engagements and senior architectural roles.
            </p>
            
            <a 
              href="mailto:contact@xgg2.dev" 
              className="inline-flex items-center gap-4 text-2xl font-serif italic border-b border-stone-600 pb-2 hover:border-paper transition-colors"
              onMouseEnter={playHover}
              onClick={playClick}
            >
              Start a conversation <ArrowRight />
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:pt-4">
             <div>
                <h3 className="text-xs font-bold uppercase tracking-widest text-stone-500 mb-6">Contact</h3>
                <ul className="space-y-4">
                   {SOCIAL_LINKS.map(link => (
                     <li key={link.platform}>
                       <a 
                         href={link.url} 
                         className="block text-lg hover:text-stone-400 transition-colors"
                         onMouseEnter={playHover}
                         onClick={playClick}
                       >
                         {link.label}
                       </a>
                     </li>
                   ))}
                </ul>
             </div>
             <div>
                <h3 className="text-xs font-bold uppercase tracking-widest text-stone-500 mb-6">Location</h3>
                <p className="text-lg">
                  Based in San Francisco.<br />
                  Working Globally.
                </p>
             </div>
          </div>

        </div>

        <div className="border-t border-stone-800 pt-8 flex flex-col md:flex-row justify-between items-center text-stone-600 text-sm">
          <p>&copy; {new Date().getFullYear()} Youcef (xgg.2). All rights reserved.</p>
          <p className="mt-2 md:mt-0">Typeset in Playfair Display & Lato.</p>
        </div>
      </div>
    </footer>
  );
};

export default Contact;