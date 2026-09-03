"use client";

import { journeyMilestones } from "@/data/journey";

export default function Journey() {
  return (
    <section id="experience" className="py-32 md:py-48 bg-[var(--background)] border-t border-[var(--border-subtle)] relative">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 relative z-10">
        
        <div className="flex flex-col lg:grid lg:grid-cols-12 gap-16 lg:gap-8">
          
          {/* LEFT: technical section label / index */}
          <div className="lg:col-span-2 flex flex-col" data-animate="journey-heading">
            <div className="flex items-center gap-4 lg:flex-col lg:items-start lg:gap-3">
              <span className="text-sm font-mono tracking-widest text-[var(--text-muted)]">05</span>
              <span className="text-[var(--border-primary)] lg:hidden">/</span>
              <span className="text-sm font-mono tracking-widest text-[var(--text-muted)] uppercase">DEVELOPMENT PATH</span>
              <div className="hidden lg:block w-full h-[1px] bg-[var(--border-subtle)] mt-4"></div>
            </div>
          </div>

          {/* CENTER/RIGHT: large heading and timeline */}
          <div className="lg:col-span-10 flex flex-col">
            <h2 data-animate="journey-heading" className="text-[clamp(3.5rem,7vw,6.5rem)] font-[family-name:var(--font-heading)] font-bold tracking-tighter text-[var(--text-primary)] uppercase leading-[0.85] mb-20 sm:mb-28">
              JOURNEY.
            </h2>

            <div className="flex flex-col border-t border-[var(--border-subtle)]">
              {journeyMilestones.map((milestone) => (
                <div 
                  key={milestone.id} 
                  data-animate="journey-entry"
                  className="group flex flex-col md:flex-row items-start py-12 md:py-16 border-b border-[var(--border-subtle)] transition-colors duration-500 hover:bg-[var(--background-secondary)] px-4 -mx-4 sm:px-8 sm:-mx-8 lg:px-12 lg:-mx-12 focus-within:bg-[var(--background-secondary)] outline-none"
                  tabIndex={0}
                >
                  
                  {/* LEFT COLUMN: Number & Category */}
                  <div className="w-full md:w-[200px] lg:w-[250px] shrink-0 flex flex-row md:flex-col justify-between md:justify-start items-center md:items-start mb-8 md:mb-0">
                    <span className="text-4xl md:text-5xl font-[family-name:var(--font-heading)] font-light text-[var(--text-muted)] opacity-50 group-hover:text-[var(--text-primary)] group-hover:opacity-100 group-focus-within:text-[var(--text-primary)] group-focus-within:opacity-100 transition-all duration-500">
                      {milestone.number}
                    </span>
                    <span className="text-[10px] sm:text-xs font-mono tracking-widest text-[var(--text-primary)] md:text-[var(--text-muted)] opacity-80 md:opacity-50 md:mt-4 uppercase group-hover:opacity-100 group-focus-within:opacity-100 transition-opacity duration-500">
                      {milestone.category}
                    </span>
                  </div>

                  {/* RIGHT COLUMN: Content */}
                  <div className="flex-1 flex flex-col">
                    <h3 className="text-2xl sm:text-3xl md:text-4xl font-[family-name:var(--font-heading)] font-bold tracking-tighter text-[var(--text-primary)] uppercase leading-tight mb-6 group-hover:translate-x-2 group-focus-within:translate-x-2 transition-transform duration-500 ease-out">
                      {milestone.title}
                    </h3>
                    
                    <p className="text-lg sm:text-xl text-[var(--text-secondary)] font-[family-name:var(--font-para-clean)] font-light leading-relaxed max-w-3xl mb-10">
                      {milestone.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-2">
                      {milestone.technologies.map(tech => (
                        <span key={tech} className="px-3 py-1.5 text-[10px] sm:text-xs font-mono tracking-widest text-[var(--text-secondary)] border border-[var(--border-subtle)] uppercase rounded-sm group-hover:border-[var(--text-muted)] group-focus-within:border-[var(--text-muted)] transition-colors duration-500">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                </div>
              ))}
            </div>

          </div>
          
        </div>
      </div>
    </section>
  );
}
