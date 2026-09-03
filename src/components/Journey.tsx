"use client";

import { useEffect, useRef } from "react";
import { journeyMilestones } from "@/data/journey";
import { animateStagger } from "@/lib/animations/sectionAnimations";
import { gsap } from "@/lib/animations/gsap";

export default function Journey() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      // 1. SECTION ENTRANCE
      animateStagger(sectionRef.current!, "[data-animate='journey-heading']", reduceMotion);
      
      if (!reduceMotion) {
        // 2. TIMELINE PROGRESSION
        const entries = gsap.utils.toArray<HTMLElement>("[data-animate='journey-entry']");
        
        entries.forEach((entry) => {
          gsap.fromTo(
            entry,
            { opacity: 0, y: 40 },
            {
              opacity: 1,
              y: 0,
              duration: 1,
              ease: "power3.out",
              scrollTrigger: {
                trigger: entry,
                start: "top 85%",
                once: true,
              },
            }
          );
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="experience" className="py-24 md:py-48 bg-[var(--background)] border-t border-[var(--border-subtle)] relative">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 relative z-10">
        
        <div className="flex flex-col lg:grid lg:grid-cols-12 gap-16 lg:gap-8">
          
          {/* LEFT: Section Meta */}
          <div className="lg:col-span-3 flex flex-col" data-animate="journey-heading">
            <div className="flex items-center gap-4 lg:flex-col lg:items-start lg:gap-3">
              <span className="text-sm font-mono tracking-widest text-[var(--text-muted)]">05</span>
              <span className="text-[var(--border-primary)] lg:hidden">/</span>
              <span className="text-sm font-mono tracking-widest text-[var(--text-muted)] uppercase">DEVELOPMENT PATH</span>
              <div className="hidden lg:block w-full h-[1px] bg-[var(--border-subtle)] mt-4 mb-8"></div>
            </div>
            
            <p className="hidden lg:block text-sm font-[family-name:var(--font-para-clean)] text-[var(--text-muted)] leading-relaxed max-w-[200px]">
              From learning fundamentals to building real-world systems, every project has been part of the process.
            </p>
          </div>

          {/* RIGHT: Heading and Timeline */}
          <div className="lg:col-span-9 flex flex-col">
            <h2 data-animate="journey-heading" className="text-[clamp(3.5rem,7vw,6.5rem)] font-[family-name:var(--font-heading)] font-bold tracking-tighter text-[var(--text-primary)] uppercase leading-[0.85] mb-8">
              JOURNEY.
            </h2>
            
            <p data-animate="journey-heading" className="lg:hidden text-base font-[family-name:var(--font-para-clean)] text-[var(--text-muted)] leading-relaxed mb-16 max-w-lg">
              From learning fundamentals to building real-world systems, every project has been part of the process.
            </p>

            {/* Timeline Wrapper */}
            <div className="flex flex-col w-full border-t border-[var(--border-subtle)]">
              {journeyMilestones.map((milestone) => (
                <article 
                  key={milestone.id} 
                  data-animate="journey-entry"
                  className="group relative flex flex-col md:flex-row items-start py-12 md:py-16 border-b border-[var(--border-subtle)] transition-colors duration-500 hover:bg-[var(--background-secondary)] focus-within:bg-[var(--background-secondary)] outline-none rounded-sm px-4 -mx-4 md:px-6 md:-mx-6 lg:px-8 lg:-mx-8"
                  tabIndex={0}
                >
                  
                  {/* META COLUMN: Number, Category, Status */}
                  <div className="w-full md:w-[200px] lg:w-[240px] shrink-0 flex flex-row md:flex-col justify-between md:justify-start items-center md:items-start mb-6 md:mb-0 md:pr-8">
                    <span className="text-4xl md:text-5xl lg:text-6xl font-[family-name:var(--font-heading)] font-light text-[var(--text-muted)] opacity-30 group-hover:text-[var(--text-primary)] group-hover:opacity-100 group-focus-within:text-[var(--text-primary)] group-focus-within:opacity-100 transition-all duration-500">
                      {milestone.number}
                    </span>
                    <div className="flex flex-col items-end md:items-start md:mt-4 gap-1">
                      <span className="text-[10px] sm:text-xs font-mono tracking-widest text-[var(--text-primary)] md:text-[var(--text-muted)] opacity-90 md:opacity-50 uppercase group-hover:opacity-100 group-focus-within:opacity-100 transition-opacity duration-500 text-right md:text-left">
                        {milestone.category}
                      </span>
                      {milestone.status && (
                        <span className="text-[10px] font-mono tracking-widest text-[var(--text-muted)] opacity-40 uppercase mt-1">
                          {milestone.status}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* CONTENT COLUMN: Title, Desc, Tags */}
                  <div className="flex-1 flex flex-col pt-2 md:pt-4">
                    <h3 className="text-2xl sm:text-3xl lg:text-4xl font-[family-name:var(--font-heading)] font-bold tracking-tighter text-[var(--text-primary)] uppercase leading-tight mb-4 lg:mb-6 group-hover:translate-x-2 group-focus-within:translate-x-2 transition-transform duration-500 ease-out">
                      {milestone.title}
                    </h3>
                    
                    <p className="text-base sm:text-lg lg:text-xl text-[var(--text-secondary)] font-[family-name:var(--font-para-clean)] font-light leading-relaxed max-w-2xl mb-8">
                      {milestone.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-2 lg:gap-3">
                      {milestone.technologies.map(tech => (
                        <span key={tech} className="px-3 py-1.5 text-[10px] sm:text-xs font-mono tracking-widest text-[var(--text-secondary)] border border-[var(--border-subtle)] uppercase rounded-sm group-hover:border-[var(--text-muted)] group-focus-within:border-[var(--text-muted)] transition-colors duration-500">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                </article>
              ))}
            </div>

          </div>
          
        </div>
      </div>
    </section>
  );
}
