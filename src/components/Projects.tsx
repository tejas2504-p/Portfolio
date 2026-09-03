"use client";

import { useEffect, useRef, useState } from "react";
import { projects } from "@/data/projects";
import { animateStagger } from "@/lib/animations/sectionAnimations";
import { gsap } from "@/lib/animations/gsap";

import Image from "next/image";

function ProjectImage({ src, alt, className }: { src: string; alt: string; className: string }) {
  const [error, setError] = useState(false);

  if (error) {
    return (
      <div className="w-full h-full flex flex-col items-center justify-center bg-[var(--background)] border border-[var(--border-subtle)] text-[var(--text-muted)] absolute inset-0 z-0">
        <div className="flex flex-col items-center gap-2 opacity-50">
          <svg className="w-6 h-6 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
          <span className="text-xs font-mono tracking-widest uppercase">VISUAL UNAVAILABLE</span>
        </div>
      </div>
    );
  }

  return (
    <Image
      src={src}
      alt={alt}
      fill
      sizes="(max-width: 1024px) 100vw, 50vw"
      className={className}
      onError={() => setError(true)}
    />
  );
}

export default function Projects() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      animateStagger(sectionRef.current!, "[data-animate='projects-heading']", reduceMotion);
      
      if (!reduceMotion) {
        // Featured Project (index 0)
        const feature = sectionRef.current!.querySelector<HTMLElement>("[data-project-index='0']");
        if (feature) {
          gsap.fromTo(
            feature,
            { opacity: 0, y: 40, scale: 0.98 },
            {
              opacity: 1,
              y: 0,
              scale: 1,
              duration: 1.2,
              ease: "power3.out",
              scrollTrigger: {
                trigger: feature,
                start: "top 85%",
                once: true,
              }
            }
          );
          
          const featureImg = feature.querySelector(".project-image-wrapper");
          if (featureImg) {
            gsap.fromTo(
              featureImg, 
              { clipPath: "inset(5% 2% 5% 2%)", scale: 1.05 },
              { 
                clipPath: "inset(0% 0% 0% 0%)", 
                scale: 1, 
                duration: 1.5, 
                ease: "power3.out", 
                scrollTrigger: { trigger: feature, start: "top 85%", once: true } 
              }
            );
          }
        }

        // Remaining Projects
        const remaining = Array.from(sectionRef.current!.querySelectorAll<HTMLElement>("[data-project-index]")).filter(el => el.dataset.projectIndex !== "0");
        if (remaining.length) {
          gsap.fromTo(
            remaining,
            { opacity: 0, y: 30 },
            {
              opacity: 1,
              y: 0,
              duration: 1,
              stagger: 0.2,
              ease: "power2.out",
              scrollTrigger: {
                trigger: remaining[0],
                start: "top 85%",
                once: true,
              }
            }
          );
          
          remaining.forEach(proj => {
            const img = proj.querySelector(".project-image-wrapper");
            if (img) {
              gsap.fromTo(
                img, 
                { clipPath: "inset(5% 0% 5% 0%)" },
                { 
                  clipPath: "inset(0% 0% 0% 0%)", 
                  duration: 1.2, 
                  ease: "power3.out", 
                  scrollTrigger: { trigger: proj, start: "top 85%", once: true } 
                }
              );
            }
          });
        }
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="projects" className="py-32 md:py-48 bg-[var(--background)] border-t border-[var(--border-subtle)] relative">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 relative z-10">
        
        <div className="flex flex-col lg:grid lg:grid-cols-12 gap-16 lg:gap-8">
          
          {/* LEFT: technical section label / index */}
          <div className="lg:col-span-2 flex flex-col" data-animate="projects-heading">
            <div className="flex items-center gap-4 lg:flex-col lg:items-start lg:gap-3">
              <span className="text-sm font-mono tracking-widest text-[var(--text-muted)]">04</span>
              <span className="text-[var(--border-primary)] lg:hidden">/</span>
              <span className="text-sm font-mono tracking-widest text-[var(--text-muted)] uppercase">PROJECTS</span>
              <div className="hidden lg:block w-full h-[1px] bg-[var(--border-subtle)] mt-4"></div>
            </div>
          </div>

          {/* CENTER/RIGHT: large heading and projects list */}
          <div className="lg:col-span-10 flex flex-col">
            <h2 data-animate="projects-heading" className="text-[clamp(3.5rem,7vw,6.5rem)] font-[family-name:var(--font-heading)] font-bold tracking-tighter text-[var(--text-primary)] uppercase leading-[0.85] mb-20 sm:mb-24">
              SELECTED <br />
              WORKS.
            </h2>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-y-24 gap-x-12 lg:pl-4">
              {projects.map((project, index) => (
                <div 
                  key={project.id} 
                  data-animate="project-item"
                  data-project-index={index} 
                  className={`group flex flex-col ${index === 0 ? 'lg:col-span-2' : 'lg:col-span-1'}`}
                >
                  {/* TOP: Number + Category */}
                  <div className="flex items-center gap-4 mb-6">
                    <span className="text-xs font-mono tracking-widest text-[var(--text-muted)] opacity-60 group-hover:text-[var(--text-primary)] group-hover:opacity-100 group-focus-within:text-[var(--text-primary)] group-focus-within:opacity-100 transition-colors duration-500 uppercase">
                      {project.number}
                    </span>
                    <div className="flex-1 h-[1px] bg-[var(--border-subtle)] group-hover:bg-[var(--text-secondary)] group-focus-within:bg-[var(--text-secondary)] transition-colors duration-500"></div>
                    <span className="text-[10px] font-mono tracking-widest text-[var(--text-muted)] uppercase">
                      {project.category}
                    </span>
                  </div>

                  {/* CENTER: Project Visual Area */}
                  <div className={`project-image-wrapper relative w-full overflow-hidden border border-[var(--border-subtle)] mb-8 bg-[var(--background-secondary)] ${index === 0 ? 'aspect-[4/3] sm:aspect-[16/9] lg:aspect-[21/9]' : 'aspect-[4/3]'}`}>
                    <div className="absolute inset-0 bg-[var(--background)] opacity-0 group-hover:opacity-10 group-focus-within:opacity-10 transition-opacity duration-700 z-10 pointer-events-none"></div>
                    <ProjectImage
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-700 ease-out motion-safe:group-hover:scale-[1.03] motion-safe:group-focus-within:scale-[1.03]"
                    />
                  </div>
                  
                  {/* BOTTOM: Title & Desc */}
                  <h3 className={`font-bold tracking-tighter text-[var(--text-primary)] uppercase leading-[0.9] mb-4 transition-transform duration-500 ease-out motion-safe:group-hover:translate-x-2 motion-safe:group-focus-within:translate-x-2 ${index === 0 ? 'text-4xl sm:text-5xl lg:text-6xl' : 'text-3xl sm:text-4xl'}`}>
                    {project.title}
                  </h3>
                  
                  <p className={`text-[var(--text-secondary)] font-light leading-relaxed max-w-3xl mb-12 ${index === 0 ? 'text-xl sm:text-2xl' : 'text-lg sm:text-xl'}`}>
                    {project.description}
                  </p>
                  
                  {/* BOTTOM: Technologies & Actions */}
                  <div className="flex flex-col xl:flex-row xl:items-end gap-8 justify-between mt-auto">
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1.5 text-[10px] sm:text-xs font-mono tracking-widest text-[var(--text-secondary)] border border-[var(--border-subtle)] uppercase rounded-sm transition-colors duration-300 group-hover:border-[var(--text-muted)] group-focus-within:border-[var(--text-muted)]"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="flex flex-wrap gap-6 mt-4 sm:mt-0 shrink-0">
                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="group/link flex items-center gap-2 text-xs font-semibold tracking-widest text-[var(--text-primary)] hover:text-[var(--text-secondary)] focus-visible:text-[var(--text-secondary)] transition-colors uppercase border-b border-[var(--text-muted)] hover:border-[var(--text-secondary)] focus-visible:border-[var(--text-secondary)] pb-1 outline-none"
                        >
                          GITHUB
                          <span className="text-sm leading-none transition-transform group-hover/link:translate-x-1 group-hover/link:-translate-y-1 group-focus-visible/link:translate-x-1 group-focus-visible/link:-translate-y-1">↗</span>
                        </a>
                      )}
                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="group/link flex items-center gap-2 text-xs font-semibold tracking-widest text-[var(--text-primary)] hover:text-[var(--text-secondary)] focus-visible:text-[var(--text-secondary)] transition-colors uppercase border-b border-[var(--text-muted)] hover:border-[var(--text-secondary)] focus-visible:border-[var(--text-secondary)] pb-1 outline-none"
                        >
                          LIVE DEMO
                          <span className="text-sm leading-none transition-transform group-hover/link:translate-x-1 group-hover/link:-translate-y-1 group-focus-visible/link:translate-x-1 group-focus-visible/link:-translate-y-1">↗</span>
                        </a>
                      )}
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
