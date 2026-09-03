"use client";

import { useEffect, useRef } from "react";
import { gsap } from "@/lib/animations/gsap";
import { animateStagger } from "@/lib/animations/sectionAnimations";

export default function Contact() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      // 1. Basic generic stagger for the left side / heading
      animateStagger(sectionRef.current!, "[data-animate='contact-heading']", reduceMotion);
      
      if (!reduceMotion) {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 70%",
            once: true,
          }
        });

        // 2. Decorative large number
        const decoration = sectionRef.current!.querySelector("[data-animate='contact-decoration']");
        if (decoration) {
          gsap.fromTo(decoration, 
            { opacity: 0, x: -50 }, 
            { opacity: 0.03, x: 0, duration: 2, ease: "power2.out", scrollTrigger: { trigger: sectionRef.current, start: "top 80%", once: true } }
          );
        }

        // 3. Technical Labels & Main Heading & Copy
        const mainElements = sectionRef.current!.querySelectorAll(".contact-main-reveal");
        tl.fromTo(mainElements,
          { opacity: 0, y: 40 },
          { opacity: 1, y: 0, duration: 1.2, stagger: 0.15, ease: "power3.out" }
        );

        // 4. Primary CTA
        const cta = sectionRef.current!.querySelector("[data-animate='contact-cta']");
        if (cta) {
          tl.fromTo(cta,
            { opacity: 0, y: 30, scale: 0.98 },
            { opacity: 1, y: 0, scale: 1, duration: 1, ease: "power3.out" },
            "-=0.6"
          );
        }

        // 5. Contact Links Stagger
        const links = sectionRef.current!.querySelectorAll("[data-animate='contact-link']");
        if (links.length) {
          tl.fromTo(links,
            { opacity: 0, y: 20 },
            { opacity: 1, y: 0, duration: 0.8, stagger: 0.15, ease: "power2.out" },
            "-=0.6"
          );
        }
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="contact" className="py-32 md:py-48 bg-[var(--background)] border-t border-[var(--border-subtle)] relative">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 relative z-10">
        
        <div className="flex flex-col lg:grid lg:grid-cols-12 gap-16 lg:gap-8">
          
          {/* LEFT: technical section label / index */}
          <div className="lg:col-span-2 flex flex-col" data-animate="contact-heading">
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
            <div className="flex flex-col xl:w-1/2 relative">
              {/* Decorative Number */}
              <div data-animate="contact-decoration" className="absolute top-[-2rem] lg:top-[-4rem] left-0 pointer-events-none opacity-[0.03] select-none text-[10rem] lg:text-[16rem] font-bold tracking-tighter leading-none hidden sm:block">
                06
              </div>
              
              <div className="relative z-10 flex flex-col">
                <div className="flex flex-wrap gap-3 mb-10 contact-main-reveal">
                  <span className="px-3 py-1.5 text-[10px] sm:text-xs font-mono tracking-widest text-[var(--text-secondary)] border border-[var(--border-subtle)] uppercase rounded-sm">
                    BASED IN INDIA
                  </span>
                  <span className="px-3 py-1.5 text-[10px] sm:text-xs font-mono tracking-widest text-[var(--text-secondary)] border border-[var(--border-subtle)] uppercase rounded-sm">
                    OPEN TO COLLABORATION
                  </span>
                </div>
                
                <h2 className="contact-main-reveal text-[clamp(3.5rem,7vw,6.5rem)] font-bold tracking-tighter text-[var(--text-primary)] uppercase leading-[0.85] mb-10">
                  LET&apos;S BUILD <br />
                  SOMETHING <br />
                  TOGETHER.
                </h2>
                <p className="contact-main-reveal text-lg sm:text-xl text-[var(--text-secondary)] font-light max-w-md leading-relaxed">
                  Open to software development opportunities, interesting technical projects, and professional collaborations.
                </p>
              </div>
            </div>

            {/* CONTACT ACTIONS */}
            <div className="flex flex-col xl:w-5/12 gap-10">
              
              {/* PRIMARY CTA */}
              <a
                href="mailto:placeholder@email.com"
                data-animate="contact-cta"
                className="group flex flex-col border border-[var(--border-subtle)] hover:border-[var(--text-primary)] focus-visible:border-[var(--text-primary)] transition-all duration-500 bg-[var(--background-secondary)] p-8 md:p-12 outline-none"
              >
                <div className="flex items-center justify-between mb-16">
                  <span className="text-xs font-mono tracking-widest text-[var(--text-muted)] group-hover:text-[var(--text-primary)] group-focus-visible:text-[var(--text-primary)] transition-colors duration-500 uppercase">
                    START A CONVERSATION
                  </span>
                  <span className="text-[var(--text-muted)] group-hover:text-[var(--text-primary)] group-focus-visible:text-[var(--text-primary)] transition-transform duration-500 group-hover:translate-x-1 group-hover:-translate-y-1 group-focus-visible:translate-x-1 group-focus-visible:-translate-y-1">
                    ↗
                  </span>
                </div>
                <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tighter text-[var(--text-primary)] uppercase">
                  GET IN TOUCH
                </h3>
              </a>

              {/* SECONDARY ACTIONS */}
              <div className="flex flex-col border border-[var(--border-subtle)] bg-[var(--background-secondary)]">
                <a href="mailto:tejasprajapati2504@email.com" data-animate="contact-link" className="group flex items-center justify-between p-6 md:p-8 border-b border-[var(--border-subtle)] hover:border-[var(--text-muted)] hover:bg-[var(--background)] focus-visible:bg-[var(--background)] transition-all duration-300 outline-none">
                  <span className="text-sm font-semibold tracking-widest text-[var(--text-secondary)] group-hover:text-[var(--text-primary)] group-focus-visible:text-[var(--text-primary)] uppercase transition-colors">
                    EMAIL
                  </span>
                  <span className="text-[var(--text-muted)] group-hover:text-[var(--text-primary)] group-focus-visible:text-[var(--text-primary)] transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 group-focus-visible:translate-x-1 group-focus-visible:-translate-y-1">
                    ↗
                  </span>
                </a>
                <a href="https://github.com/tejas2504-p" target="_blank" rel="noopener noreferrer" data-animate="contact-link" className="group flex items-center justify-between p-6 md:p-8 border-b border-[var(--border-subtle)] hover:border-[var(--text-muted)] hover:bg-[var(--background)] focus-visible:bg-[var(--background)] transition-all duration-300 outline-none">
                  <span className="text-sm font-semibold tracking-widest text-[var(--text-secondary)] group-hover:text-[var(--text-primary)] group-focus-visible:text-[var(--text-primary)] uppercase transition-colors">
                    GITHUB
                  </span>
                  <span className="text-[var(--text-muted)] group-hover:text-[var(--text-primary)] group-focus-visible:text-[var(--text-primary)] transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 group-focus-visible:translate-x-1 group-focus-visible:-translate-y-1">
                    ↗
                  </span>
                </a>
                <a href="https://www.linkedin.com/in/tejas-prajapati25p/" target="_blank" rel="noopener noreferrer" data-animate="contact-link" className="group flex items-center justify-between p-6 md:p-8 hover:bg-[var(--background)] focus-visible:bg-[var(--background)] transition-all duration-300 outline-none">
                  <span className="text-sm font-semibold tracking-widest text-[var(--text-secondary)] group-hover:text-[var(--text-primary)] group-focus-visible:text-[var(--text-primary)] uppercase transition-colors">
                    LINKEDIN
                  </span>
                  <span className="text-[var(--text-muted)] group-hover:text-[var(--text-primary)] group-focus-visible:text-[var(--text-primary)] transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 group-focus-visible:translate-x-1 group-focus-visible:-translate-y-1">
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
