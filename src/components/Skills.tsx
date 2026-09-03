"use client";

import { useEffect, useRef } from "react";
import SectionHeading from "./SectionHeading";
import { animateSectionHeading, animateStagger } from "@/lib/animations/sectionAnimations";
import { gsap } from "@/lib/animations/gsap";

export default function Skills() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      animateSectionHeading(sectionRef.current!, reduceMotion);
      animateStagger(sectionRef.current!, "[data-animate='skill-category']", reduceMotion);
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const skillCategories = [
    {
      title: "FRONTEND",
      skills: ["JavaScript", "TypeScript", "React", "Next.js", "Redux", "Tailwind CSS"],
    },
    {
      title: "BACKEND",
      skills: ["Node.js", "Express.js"],
    },
    {
      title: "DATABASE",
      skills: ["MongoDB", "MySQL", "PostgreSQL"],
    },
    {
      title: "CLOUD & DEVOPS",
      skills: ["AWS", "Docker", "Kubernetes", "Jenkins"],
    },
    {
      title: "TOOLS",
      skills: ["Git", "GitHub", "Postman", "VS Code"],
    },
  ];

  return (
    <section ref={sectionRef} id="skills" className="py-32 md:py-48 bg-[var(--background)] border-t border-[var(--border-subtle)]">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <SectionHeading number="03" title="SKILLS" subtitle="TECHNOLOGY STACK" />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 lg:gap-24">
          {skillCategories.map((category) => (
            <div key={category.title} data-animate="skill-category" className="flex flex-col">
              <h3 className="text-lg font-mono tracking-widest text-[var(--text-primary)] mb-8 pb-4 border-b border-[var(--border-primary)] uppercase">
                {category.title}
              </h3>
              <ul className="space-y-6">
                {category.skills.map((skill) => (
                  <li
                    key={skill}
                    className="text-[var(--text-secondary)] text-base sm:text-lg font-light tracking-wide flex items-center group"
                  >
                    <span className="w-1.5 h-1.5 bg-[var(--border-primary)] group-hover:bg-[var(--text-primary)] transition-colors rounded-full mr-6"></span>
                    <span className="group-hover:text-[var(--text-primary)] transition-colors uppercase text-sm tracking-widest">
                      {skill}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
