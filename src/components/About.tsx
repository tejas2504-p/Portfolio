"use client";

import { useEffect, useRef } from "react";
import { animateStagger } from "@/lib/animations/sectionAnimations";
import { gsap } from "@/lib/animations/gsap";

export default function About() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      animateStagger(sectionRef.current!, "[data-animate='about-heading']", reduceMotion);
      
      const paragraphs = sectionRef.current!.querySelectorAll("[data-animate='paragraph']");
      if (!reduceMotion && paragraphs.length) {
        gsap.fromTo(
          paragraphs,
          { opacity: 0, y: 20 },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            stagger: 0.2,
            ease: "power3.out",
            scrollTrigger: {
              trigger: paragraphs[0],
              start: "top 85%",
              once: true,
            },
          }
        );
      }

      animateStagger(sectionRef.current!, "[data-animate='capability']", reduceMotion);
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const capabilities = [
    { num: "01", title: "TESTING & QUALITY ASSURANCE", desc: "Writing reliable, well-tested code with CI/CD pipelines and automated checks." },
    { num: "02", title: "SYSTEM DESIGN & ARCHITECTURE", desc: "Designing scalable, maintainable systems with clean, modular architecture." },
    { num: "03", title: "API & DATABASE DESIGN", desc: "Building robust REST/GraphQL APIs and efficient, well-structured databases." },
    { num: "04", title: "SECURITY & PERFORMANCE", desc: "Optimizing applications for speed while following secure coding practices." },
  ];

  return (
    <section ref={sectionRef} id="about" className="py-32 md:py-48 bg-[var(--background)] border-t border-[var(--border-subtle)] relative">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 relative z-10">
        
        <div className="flex flex-col lg:grid lg:grid-cols-12 gap-16 lg:gap-8">
          
          {/* LEFT: technical section label / index */}
          <div className="lg:col-span-2 flex flex-col" data-animate="about-heading">
            <div className="flex items-center gap-4 lg:flex-col lg:items-start lg:gap-3">
              <span className="text-sm font-mono tracking-widest text-[var(--text-muted)]">02</span>
              <span className="text-[var(--border-primary)] lg:hidden">/</span>
              <span className="text-sm font-mono tracking-widest text-[var(--text-muted)] uppercase">ABOUT</span>
              <div className="hidden lg:block w-full h-[1px] bg-[var(--border-subtle)] mt-4"></div>
            </div>
          </div>

          {/* CENTER/MAIN: large About heading and introduction */}
          <div className="lg:col-span-6 flex flex-col">
            <h2 data-animate="about-heading" className="text-[clamp(3.5rem,7vw,6.5rem)] font-[family-name:var(--font-heading)] font-bold tracking-tighter text-[var(--text-primary)] uppercase leading-[0.85] mb-12 sm:mb-16">
              ABOUT <br />
              ME.
            </h2>

            <div className="space-y-8 text-xl sm:text-2xl text-[var(--text-secondary)] font-[family-name:var(--font-para-clean)] font-light leading-relaxed max-w-2xl">
              <p data-animate="paragraph">
                I'm Tejas Prajapati, a <strong className="font-medium text-[var(--text-primary)]">Full-Stack Developer</strong> specializing in building scalable, high-performance web applications and digital solutions. My expertise spans frontend, backend, databases, real-time systems, AI integration, and cloud technologies.
              </p>
              <p data-animate="paragraph">
                I focus on clean architecture, performance, maintainability, and intuitive user experiences, transforming complex requirements into reliable, production-ready software.
              </p>
            </div>
          </div>

          {/* RIGHT: small capability information */}
          <div className="lg:col-span-4 flex flex-col lg:pl-10 xl:pl-16 lg:border-l lg:border-[var(--border-subtle)] mt-8 lg:mt-0">
            <div className="flex flex-col border-t border-[var(--border-subtle)]">
              {capabilities.map((area) => (
                <div key={area.num} data-animate="capability" className="group flex flex-col gap-3 py-8 border-b border-[var(--border-subtle)] hover:border-[var(--text-secondary)] hover:bg-[var(--background-secondary)] transition-colors duration-500 cursor-default p-4 -mx-4 rounded-sm">
                  <div className="flex items-center gap-4">
                    <span className="text-xs font-mono tracking-widest text-[var(--text-muted)] group-hover:text-[var(--text-primary)] opacity-60 group-hover:opacity-100 transition-all duration-300">
                      {area.num}
                    </span>
                    <h4 className="text-xs font-semibold tracking-widest text-[var(--text-primary)] uppercase transition-transform duration-300 group-hover:translate-x-1">
                      {area.title}
                    </h4>
                  </div>
                  <p className="text-sm text-[var(--text-secondary)] font-light leading-relaxed transition-transform duration-300 group-hover:translate-x-1">
                    {area.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
