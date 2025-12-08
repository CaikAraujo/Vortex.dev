import React from 'react';
import { PROJECTS } from '../constants';
import { Reveal } from './ui/Section';

export const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-32 bg-vortex-black overflow-hidden">
      <Reveal className="max-w-7xl mx-auto px-6 mb-16">
        <h2 className="font-display text-4xl md:text-6xl font-bold text-white mb-6">
          Selected <span className="text-vortex-accent">Works.</span>
        </h2>
      </Reveal>

      <div className="relative w-full overflow-hidden group">
         {/* Marquee effect wrapper */}
        <div className="flex gap-8 animate-[scroll_30s_linear_infinite] group-hover:[animation-play-state:paused] w-max">
           {/* Duplicate array to create seamless loop */}
           {[...PROJECTS, ...PROJECTS, ...PROJECTS].map((project, idx) => (
             <div key={`${project.id}-${idx}`} className="relative w-[300px] md:w-[500px] aspect-video rounded-sm overflow-hidden flex-shrink-0 cursor-pointer grayscale hover:grayscale-0 transition-all duration-500">
                <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-110" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-transparent flex flex-col justify-end p-6 border-b-2 border-transparent hover:border-vortex-accent transition-colors">
                    <span className="text-vortex-accent text-xs font-mono font-bold uppercase tracking-wider mb-2">{project.category}</span>
                    <h3 className="text-white font-display text-2xl font-bold">{project.title}</h3>
                </div>
             </div>
           ))}
        </div>
      </div>
      
      <style>
      {`
        @keyframes scroll {
            0% { transform: translateX(0); }
            100% { transform: translateX(-33.33%); }
        }
      `}
      </style>
    </section>
  );
};