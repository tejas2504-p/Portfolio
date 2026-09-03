"use client";

import { useEffect, useRef } from "react";
import { animateStagger } from "@/lib/animations/sectionAnimations";
import { gsap } from "@/lib/animations/gsap";

export default function Skills() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      animateStagger(sectionRef.current!, "[data-animate='skills-heading']", reduceMotion);
      animateStagger(sectionRef.current!, "[data-animate='skill-category']", reduceMotion);
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const skillCategories = [
    {
      num: "01",
      title: "FRONTEND",
      skills: ["JavaScript", "TypeScript", "React.js", "Next.js", "Redux", "Tailwind CSS"],
    },
    {
      num: "02",
      title: "BACKEND",
      skills: ["Node.js", "Express.js"],
    },
    {
      num: "03",
      title: "DATABASE",
      skills: ["MongoDB", "MySQL", "PostgreSQL"],
    },
    {
      num: "04",
      title: "CLOUD & DEVOPS",
      skills: ["AWS", "Docker", "Kubernetes", "Jenkins"],
    },
    {
      num: "05",
      title: "TOOLS",
      skills: ["Git", "GitHub", "Postman", "VS Code"],
    },
  ];

  return (
    <section ref={sectionRef} id="skills" className="py-32 md:py-48 bg-[var(--background)] border-t border-[var(--border-subtle)] relative">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 relative z-10">
        
        <div className="flex flex-col lg:grid lg:grid-cols-12 gap-16 lg:gap-8">
          
          {/* LEFT: technical section label / index and status */}
          <div className="lg:col-span-2 flex flex-col" data-animate="skills-heading">
            <div className="flex items-center gap-4 lg:flex-col lg:items-start lg:gap-3">
              <span className="text-sm font-mono tracking-widest text-[var(--text-muted)]">03</span>
              <span className="text-[var(--border-primary)] lg:hidden">/</span>
              <span className="text-sm font-mono tracking-widest text-[var(--text-muted)] uppercase">SKILLS</span>
              <div className="hidden lg:block w-full h-[1px] bg-[var(--border-subtle)] mt-4"></div>
            </div>

            <div className="hidden lg:flex flex-col mt-12 gap-8">
              <div className="flex flex-col gap-2">
                <span className="text-[10px] font-mono tracking-widest text-[var(--text-muted)] opacity-50 uppercase">
                  SYSTEM STATUS
                </span>
                <span className="text-xs font-mono tracking-widest text-[var(--text-primary)] uppercase flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[var(--text-primary)] opacity-80 animate-pulse"></span>
                  ACTIVE
                </span>
              </div>
              <div className="flex flex-col gap-2">
                <span className="text-[10px] font-mono tracking-widest text-[var(--text-muted)] opacity-50 uppercase">
                  MODULES
                </span>
                <span className="text-xs font-mono tracking-widest text-[var(--text-secondary)] uppercase">
                  05 DETECTED
                </span>
              </div>
            </div>
          </div>

          {/* CENTER/RIGHT: large heading and categories */}
          <div className="lg:col-span-10 flex flex-col">
            <h2 data-animate="skills-heading" className="text-[clamp(3.5rem,7vw,6.5rem)] font-bold tracking-tighter text-[var(--text-primary)] uppercase leading-[0.85] mb-20 sm:mb-24">
              SKILLS
            </h2>

            <div className="group/grid grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-x-12 gap-y-20 lg:pl-4">
              {skillCategories.map((category) => (
                <div 
                  key={category.title} 
                  data-animate="skill-category" 
                  className="flex flex-col group/category transition-opacity duration-500 lg:hover:!opacity-100 lg:group-hover/grid:opacity-30 focus-within:!opacity-100"
                  tabIndex={0}
                >
                  <div className="flex flex-col mb-8 outline-none">
                    <span className="text-xs font-mono tracking-widest text-[var(--text-muted)] opacity-60 mb-2 transition-colors duration-300 lg:group-hover/category:text-[var(--text-primary)] lg:group-hover/category:opacity-100">
                      {category.num}
                    </span>
                    <h3 className="text-sm font-semibold tracking-widest text-[var(--text-primary)] uppercase mb-6 transition-transform duration-300 lg:group-hover/category:translate-x-1">
                      {category.title}
                    </h3>
                    <div className="w-full h-[1px] bg-[var(--border-subtle)] transition-colors duration-300 lg:group-hover/category:bg-[var(--text-secondary)]"></div>
                  </div>
                  
                  <ul className="space-y-1">
                    {category.skills.map((skill, index) => (
                      <li
                        key={skill}
                        className="group/item flex items-center border-b border-transparent transition-all duration-300 py-3 px-3 -mx-3 rounded-sm cursor-default lg:group-hover/category:border-[var(--border-subtle)] hover:!border-[var(--text-muted)] hover:!bg-[var(--background-secondary)]"
                      >
                        <span className="text-xs font-mono tracking-widest text-[var(--text-muted)] opacity-40 transition-all duration-300 mr-5 shrink-0 lg:group-hover/category:opacity-80 group-hover/item:!opacity-100 group-hover/item:!text-[var(--text-primary)]">
                          [{String(index + 1).padStart(2, '0')}]
                        </span>
                        <span className="text-sm font-light tracking-wide text-[var(--text-secondary)] transition-all duration-300 lg:group-hover/category:text-[var(--text-primary)] lg:group-hover/category:translate-x-1 group-hover/item:!translate-x-2">
                          {skill}
                        </span>
                        <span className="ml-auto text-[var(--text-muted)] opacity-0 transition-all duration-300 -translate-x-2 lg:group-hover/category:opacity-50 lg:group-hover/category:translate-x-0 group-hover/item:!opacity-100 group-hover/item:!text-[var(--text-primary)] font-mono text-xs">
                          ↗
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
