import React from 'react';
import Section from './Section';

const About: React.FC = () => {
  return (
    <Section id="about">
      <div className="max-w-4xl mx-auto text-center mb-16">
        <span className="text-sm font-bold uppercase tracking-widest text-stone-400 mb-4 block">Philosophy</span>
        <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-ink leading-tight">
          "Code is not just functionality; it is literature for machines and humans alike."
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="aspect-[3/4] bg-stone-200 relative">
             <img 
                src="https://picsum.photos/600/800?grayscale" 
                alt="Portrait"
                className="w-full h-full object-cover grayscale contrast-125"
              />
        </div>
        <div className="space-y-6 text-lg text-stone-700 leading-relaxed">
          <p>
            <span className="text-4xl float-left mr-2 font-serif leading-[0.8]">I</span>
            believe in the craftsmanship of software. In an era of rapid AI generation and instant deployment, the art of structuring logic, ensuring type safety, and optimizing render cycles is often overlooked. 
          </p>
          <p>
            My approach is deeply rooted in traditional engineering principles. I value stability over hype, clarity over cleverness, and user accessibility over flashy animations.
          </p>
          <p>
            With over 8 years of experience building large-scale distributed systems, I have found that the most scalable solutions are often the simplest ones. My goal is to reduce complexity, allowing businesses to grow without technical debt holding them back.
          </p>
          <div className="pt-8 border-t border-stone-300 mt-8">
            <p className="font-serif italic text-xl">Youcef (xgg.2)</p>
            <p className="text-sm text-stone-500 uppercase tracking-widest mt-1">Senior Staff Engineer</p>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default About;