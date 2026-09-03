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
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 text-center relative z-10">
        <span data-animate="contact-item" className="text-xs font-mono tracking-widest text-[var(--text-muted)] uppercase mb-8 block">
          AVAILABLE FOR FREELANCE & OPPORTUNITIES
        </span>
        <h2 data-animate="contact-item" className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tighter text-[var(--text-primary)] mb-12 uppercase leading-[0.9]">
          LET&apos;S BUILD <br className="hidden sm:block" />
          SOMETHING TOGETHER.
        </h2>
        
        <p data-animate="contact-item" className="text-xl sm:text-2xl text-[var(--text-secondary)] font-light max-w-2xl mx-auto mb-20 leading-relaxed">
          Have an idea, opportunity or project? <br />
          Let&apos;s connect.
        </p>
        
        <div data-animate="contact-item" className="flex flex-wrap justify-center gap-6">
          <a
            href="mailto:#"
            className="group flex items-center justify-between gap-4 px-8 py-4 border border-[var(--border-primary)] hover:border-[var(--text-primary)] transition-colors bg-[var(--background)]"
          >
            <span className="text-sm font-semibold tracking-widest text-[var(--text-primary)] uppercase">
              GET IN TOUCH
            </span>
            <span className="text-[var(--text-primary)] transition-transform group-hover:translate-x-1 group-hover:-translate-y-1">
              ↗
            </span>
          </a>
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center justify-between gap-4 px-8 py-4 border border-[var(--border-primary)] hover:border-[var(--text-primary)] transition-colors bg-[var(--background)]"
          >
            <span className="text-sm font-semibold tracking-widest text-[var(--text-secondary)] group-hover:text-[var(--text-primary)] uppercase transition-colors">
              GITHUB
            </span>
            <span className="text-[var(--text-secondary)] group-hover:text-[var(--text-primary)] transition-all group-hover:translate-x-1 group-hover:-translate-y-1">
              ↗
            </span>
          </a>
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center justify-between gap-4 px-8 py-4 border border-[var(--border-primary)] hover:border-[var(--text-primary)] transition-colors bg-[var(--background)]"
          >
            <span className="text-sm font-semibold tracking-widest text-[var(--text-secondary)] group-hover:text-[var(--text-primary)] uppercase transition-colors">
              LINKEDIN
            </span>
            <span className="text-[var(--text-secondary)] group-hover:text-[var(--text-primary)] transition-all group-hover:translate-x-1 group-hover:-translate-y-1">
              ↗
            </span>
          </a>
          <a
            href="mailto:#"
            className="group flex items-center justify-between gap-4 px-8 py-4 border border-[var(--border-primary)] hover:border-[var(--text-primary)] transition-colors bg-[var(--background)]"
          >
            <span className="text-sm font-semibold tracking-widest text-[var(--text-secondary)] group-hover:text-[var(--text-primary)] uppercase transition-colors">
              EMAIL
            </span>
            <span className="text-[var(--text-secondary)] group-hover:text-[var(--text-primary)] transition-all group-hover:translate-x-1 group-hover:-translate-y-1">
              ↗
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
