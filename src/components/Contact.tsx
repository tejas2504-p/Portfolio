"use client";

import { useEffect, useRef } from "react";
import { gsap } from "@/lib/animations/gsap";

export default function Contact() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!sectionRef.current || reduceMotion) return;

    const ctx = gsap.context(() => {
      const elements = sectionRef.current!.querySelectorAll("[data-animate='contact-item']");
      
      if (elements.length) {
        gsap.fromTo(
          elements,
          { opacity: 0, y: 40 },
          {
            opacity: 1,
            y: 0,
            duration: 1.5,
            stagger: 0.2,
            ease: "power3.out",
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top 80%",
              once: true,
            },
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="contact" className="py-32 md:py-48 bg-[var(--background)] border-t border-[var(--border-subtle)] relative">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 relative z-10">
        
        <div className="flex flex-col lg:grid lg:grid-cols-12 gap-16 lg:gap-8">
          
          {/* LEFT: technical section label / index */}
          <div className="lg:col-span-2 flex flex-col" data-animate="contact-item">
            <div className="flex items-center gap-4 lg:flex-col lg:items-start lg:gap-3">
              <span className="text-sm font-mono tracking-widest text-[var(--text-muted)]">06</span>
              <span className="text-[var(--border-primary)] lg:hidden">/</span>
              <span className="text-sm font-mono tracking-widest text-[var(--text-muted)] uppercase">CONTACT</span>
              <div className="hidden lg:block w-full h-[1px] bg-[var(--border-subtle)] mt-4"></div>
            </div>
          </div>

          {/* CENTER/RIGHT: Asymmetric Content */}
          <div className="lg:col-span-10 flex flex-col xl:flex-row gap-16 xl:gap-8 justify-between">
            
            {/* LARGE HEADING & COPY */}
            <div className="flex flex-col xl:w-1/2">
              <h2 data-animate="contact-item" className="text-[clamp(3.5rem,7vw,6.5rem)] font-bold tracking-tighter text-[var(--text-primary)] uppercase leading-[0.85] mb-10">
                LET&apos;S BUILD <br />
                SOMETHING <br />
                TOGETHER.
              </h2>
              <p data-animate="contact-item" className="text-lg sm:text-xl text-[var(--text-secondary)] font-light max-w-md leading-relaxed">
                Open to software development opportunities, interesting technical projects, and professional collaborations.
              </p>
            </div>

            {/* CONTACT ACTIONS */}
            <div className="flex flex-col xl:w-5/12 gap-10" data-animate="contact-item">
              
              {/* PRIMARY CTA */}
              <a
                href="mailto:placeholder@email.com"
                className="group flex flex-col border border-[var(--border-subtle)] hover:border-[var(--border-primary)] focus-visible:border-[var(--border-primary)] transition-colors bg-[var(--background-secondary)] p-8 md:p-12 outline-none"
              >
                <div className="flex items-center justify-between mb-16">
                  <span className="text-xs font-mono tracking-widest text-[var(--text-muted)] group-hover:text-[var(--text-primary)] group-focus-visible:text-[var(--text-primary)] transition-colors uppercase">
                    START A CONVERSATION
                  </span>
                  <span className="text-[var(--text-muted)] group-hover:text-[var(--text-primary)] group-focus-visible:text-[var(--text-primary)] transition-transform group-hover:translate-x-1 group-hover:-translate-y-1 group-focus-visible:translate-x-1 group-focus-visible:-translate-y-1">
                    ↗
                  </span>
                </div>
                <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tighter text-[var(--text-primary)] uppercase">
                  GET IN TOUCH
                </h3>
              </a>

              {/* SECONDARY ACTIONS */}
              <div className="flex flex-col border border-[var(--border-subtle)] bg-[var(--background-secondary)]">
                <a href="mailto:placeholder@email.com" className="group flex items-center justify-between p-6 md:p-8 border-b border-[var(--border-subtle)] hover:bg-[var(--background)] focus-visible:bg-[var(--background)] transition-colors outline-none">
                  <span className="text-sm font-semibold tracking-widest text-[var(--text-secondary)] group-hover:text-[var(--text-primary)] group-focus-visible:text-[var(--text-primary)] uppercase transition-colors">
                    EMAIL
                  </span>
                  <span className="text-[var(--text-muted)] group-hover:text-[var(--text-primary)] group-focus-visible:text-[var(--text-primary)] transition-transform group-hover:translate-x-1 group-hover:-translate-y-1 group-focus-visible:translate-x-1 group-focus-visible:-translate-y-1">
                    ↗
                  </span>
                </a>
                <a href="#" target="_blank" rel="noopener noreferrer" className="group flex items-center justify-between p-6 md:p-8 border-b border-[var(--border-subtle)] hover:bg-[var(--background)] focus-visible:bg-[var(--background)] transition-colors outline-none">
                  <span className="text-sm font-semibold tracking-widest text-[var(--text-secondary)] group-hover:text-[var(--text-primary)] group-focus-visible:text-[var(--text-primary)] uppercase transition-colors">
                    GITHUB
                  </span>
                  <span className="text-[var(--text-muted)] group-hover:text-[var(--text-primary)] group-focus-visible:text-[var(--text-primary)] transition-transform group-hover:translate-x-1 group-hover:-translate-y-1 group-focus-visible:translate-x-1 group-focus-visible:-translate-y-1">
                    ↗
                  </span>
                </a>
                <a href="#" target="_blank" rel="noopener noreferrer" className="group flex items-center justify-between p-6 md:p-8 hover:bg-[var(--background)] focus-visible:bg-[var(--background)] transition-colors outline-none">
                  <span className="text-sm font-semibold tracking-widest text-[var(--text-secondary)] group-hover:text-[var(--text-primary)] group-focus-visible:text-[var(--text-primary)] uppercase transition-colors">
                    LINKEDIN
                  </span>
                  <span className="text-[var(--text-muted)] group-hover:text-[var(--text-primary)] group-focus-visible:text-[var(--text-primary)] transition-transform group-hover:translate-x-1 group-hover:-translate-y-1 group-focus-visible:translate-x-1 group-focus-visible:-translate-y-1">
                    ↗
                  </span>
                </a>
              </div>
            </div>
            
          </div>
        </div>
      </div>
    </section>
  );
}
