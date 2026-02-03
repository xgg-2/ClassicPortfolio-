import React from 'react';
import Section from './Section';
import { EXPERIENCE, SKILLS } from '../constants';

const Experience: React.FC = () => {
  return (
    <Section id="experience" className="bg-stone-100/50">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24">
        
        {/* Left Column: Experience */}
        <div className="lg:col-span-7">
          <div className="mb-16 border-b border-stone-300 pb-8 flex justify-between items-end">
             <h2 className="font-serif text-4xl md:text-5xl text-ink">Career History</h2>
             <span className="text-6xl font-serif text-stone-200">02</span>
          </div>
          
          <div className="space-y-16">
            {EXPERIENCE.map((job) => (
              <div key={job.id} className="relative pl-8 md:pl-0 border-l-2 md:border-l-0 border-stone-300 md:border-none">
                <div className="md:grid md:grid-cols-12 md:gap-8">
                  <div className="md:col-span-4 mb-2 md:mb-0">
                    <span className="text-sm font-bold tracking-widest text-stone-400 uppercase block mb-1">
                      {job.period}
                    </span>
                    <h4 className="font-serif text-xl text-stone-800">{job.company}</h4>
                  </div>
                  <div className="md:col-span-8">
                    <h3 className="text-xl font-bold text-ink mb-4">{job.role}</h3>
                    <ul className="space-y-3">
                      {job.description.map((desc, idx) => (
                        <li key={idx} className="text-stone-600 leading-relaxed text-base flex items-start">
                           <span className="mr-3 mt-2 block w-1.5 h-1.5 bg-stone-400 rounded-full flex-shrink-0" />
                           {desc}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column: Skills */}
        <div className="lg:col-span-5">
           <div className="mb-16 border-b border-stone-300 pb-8">
             <h2 className="font-serif text-4xl md:text-5xl text-ink">Technical Proficiency</h2>
          </div>
          
          <div className="space-y-12">
            {SKILLS.map((category) => (
              <div key={category.title}>
                <h3 className="font-serif text-2xl text-ink mb-6 italic">{category.title}</h3>
                <div className="flex flex-wrap gap-x-4 gap-y-3">
                  {category.skills.map((skill) => (
                    <span 
                      key={skill} 
                      className="text-base text-stone-600 border-b border-stone-300 pb-1"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </Section>
  );
};

export default Experience;