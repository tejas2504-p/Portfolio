"use client";

import { useEffect, useRef } from "react";
import { experiences } from "@/data/experience";
import { animateStagger } from "@/lib/animations/sectionAnimations";
import { gsap } from "@/lib/animations/gsap";

export default function Experience() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      animateStagger(sectionRef.current!, "[data-animate='experience-heading']", reduceMotion);
      
      if (!reduceMotion) {
        // Timeline vertical line reveal
        const line = sectionRef.current!.querySelector(".timeline-line");
        if (line) {
          gsap.fromTo(
            line,
            { scaleY: 0 },
            {
              scaleY: 1,
              duration: 1.5,
              transformOrigin: "top center",
              ease: "power3.inOut",
              scrollTrigger: {
                trigger: sectionRef.current,
                start: "top 70%",
                once: true,
              }
            }
          );
        }

        // Experience Entries and Markers
        const entries = gsap.utils.toArray<HTMLElement>("[data-animate='timeline-entry']");
        
        entries.forEach((entry) => {
          gsap.fromTo(
            entry,
            { opacity: 0, y: 30 },
            {
              opacity: 1,
              y: 0,
              duration: 0.8,
              ease: "power2.out",
              scrollTrigger: {
                trigger: entry,
                start: "top 85%",
                once: true,
              },
            }
          );
          
          const marker = entry.querySelector(".timeline-marker");
          if (marker) {
            gsap.fromTo(
              marker,
              { opacity: 0, scale: 0 },
              {
                opacity: 1,
                scale: 1,
                duration: 0.5,
                ease: "back.out(2)",
                delay: 0.3,
                scrollTrigger: {
                  trigger: entry,
                  start: "top 85%",
                  once: true,
                }
              }
            );
          }
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="experience" className="py-32 md:py-48 bg-[var(--background)] border-t border-[var(--border-subtle)] relative">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 relative z-10">
        
        <div className="flex flex-col lg:grid lg:grid-cols-12 gap-16 lg:gap-8">
          
          {/* LEFT: technical section label / index */}
          <div className="lg:col-span-2 flex flex-col" data-animate="experience-heading">
            <div className="flex items-center gap-4 lg:flex-col lg:items-start lg:gap-3">
              <span className="text-sm font-mono tracking-widest text-[var(--text-muted)]">05</span>
              <span className="text-[var(--border-primary)] lg:hidden">/</span>
              <span className="text-sm font-mono tracking-widest text-[var(--text-muted)] uppercase">EXPERIENCE</span>
              <div className="hidden lg:block w-full h-[1px] bg-[var(--border-subtle)] mt-4"></div>
            </div>
          </div>

          {/* CENTER/RIGHT: large heading and timeline */}
          <div className="lg:col-span-10 flex flex-col">
            <h2 data-animate="experience-heading" className="text-[clamp(3.5rem,7vw,6.5rem)] font-bold tracking-tighter text-[var(--text-primary)] uppercase leading-[0.85] mb-20 sm:mb-28">
              EXPERIENCE
            </h2>

            <div className="relative flex flex-col lg:pl-4">
              {/* Continuous subtle vertical line */}
              <div className="timeline-line absolute left-[40px] md:left-[80px] top-8 bottom-0 w-[1px] bg-[var(--border-subtle)]"></div>
              
              <div className="flex flex-col">
                {experiences.map((exp) => {
                  const isActive = exp.endDate.toUpperCase() === 'PRESENT';
                  return (
                  <div key={exp.id} className="group relative flex items-start focus-within:!opacity-100 pt-8 pb-24 last:pb-0" tabIndex={0} data-animate="timeline-entry">
                    
                    {/* LEFT: Number */}
                    <div className="w-[40px] md:w-[80px] shrink-0 flex justify-start mt-[-2px]">
                      <span className="text-[10px] md:text-xs font-mono tracking-widest text-[var(--text-muted)] opacity-40 group-hover:opacity-100 group-focus-within:opacity-100 group-hover:text-[var(--text-primary)] group-focus-within:text-[var(--text-primary)] transition-colors duration-500 uppercase bg-[var(--background)] pr-2 md:pr-4">
                        {exp.number}
                      </span>
                    </div>

                    {/* MARKER - absolutely positioned perfectly over the line */}
                    <div className={`timeline-marker absolute left-[36px] md:left-[76px] top-[36px] w-[9px] h-[9px] rounded-none z-10 transition-all duration-500 ${isActive ? 'bg-[var(--text-primary)] shadow-[0_0_15px_rgba(255,255,255,0.15)] scale-110' : 'border border-[var(--border-subtle)] bg-[var(--background)] group-hover:border-[var(--text-primary)] group-focus-within:border-[var(--text-primary)] group-hover:bg-[var(--text-primary)] group-focus-within:bg-[var(--text-primary)] group-hover:scale-110 group-focus-within:scale-110'}`}></div>
                    
                    {/* RIGHT: Content */}
                    <div className="flex-1 flex flex-col pl-8 md:pl-16 lg:pl-20 transition-transform duration-500 motion-safe:group-hover:translate-x-1 motion-safe:group-focus-within:translate-x-1">
                      <span className="text-xs font-mono tracking-widest text-[var(--text-muted)] opacity-60 mb-6 uppercase group-hover:opacity-100 group-focus-within:opacity-100 transition-opacity duration-500">
                        {exp.startDate} — {exp.endDate}
                      </span>
                      
                      <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tighter text-[var(--text-primary)] uppercase leading-tight mb-2">
                        {exp.role}
                      </h3>
                      
                      <h4 className="text-lg sm:text-xl text-[var(--text-primary)] font-medium tracking-wide uppercase mb-10 opacity-90">
                        {exp.company} <span className="text-[var(--text-muted)] font-normal text-sm ml-2">/ {exp.location}</span>
                      </h4>
                      
                      <p className="text-lg sm:text-xl text-[var(--text-secondary)] font-light leading-relaxed max-w-3xl mb-10">
                        {exp.description}
                      </p>
                      
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map(tech => (
                          <span key={tech} className="px-3 py-1.5 text-[10px] sm:text-xs font-mono tracking-widest text-[var(--text-secondary)] border border-[var(--border-subtle)] uppercase rounded-sm group-hover:border-[var(--text-muted)] group-focus-within:border-[var(--text-muted)] transition-colors duration-500">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                  </div>
                )})}
              </div>
            </div>

          </div>
          
        </div>
      </div>
    </section>
  );
}
