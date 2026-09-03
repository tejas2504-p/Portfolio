"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";
import ThreeCanvas from "./three/ThreeCanvas";
import ScrollIndicator from "./ScrollIndicator";

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      // Respect reduced motion preference
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
      
      if (sectionRef.current) {
        const { clientX, clientY } = e;
        const { innerWidth, innerHeight } = window;
        
        // Calculate subtle movement between -8px and 8px
        const x = (clientX / innerWidth - 0.5) * 16; 
        const y = (clientY / innerHeight - 0.5) * 16;
        
        sectionRef.current.style.setProperty("--mouse-x", `${x}px`);
        sectionRef.current.style.setProperty("--mouse-y", `${y}px`);
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section 
      ref={sectionRef}
      className="relative min-h-[100svh] flex flex-col justify-center pt-32 pb-24 lg:pt-24 lg:pb-24 overflow-hidden"
    >
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 w-full relative z-10 flex flex-col lg:flex-row items-center gap-12 lg:gap-8">
        
        {/* Left Content */}
        <div className="w-full lg:w-1/2 flex flex-col relative z-20">
          {/* Section Indicator */}
          <div className="flex items-center gap-4 mb-6 lg:mb-12 relative">
            <div className="absolute -left-6 lg:-left-12 w-4 lg:w-8 h-[1px] bg-[var(--border-primary)] opacity-30"></div>
            <span className="text-sm font-mono tracking-widest text-[var(--text-muted)]">
              01
            </span>
            <span className="text-[var(--border-primary)]">/</span>
            <span className="text-sm font-mono tracking-widest text-[var(--text-muted)] uppercase">
              INTRO
            </span>
          </div>

          {/* Main Typography */}
          <h1 className="text-[clamp(3rem,8vw,7rem)] font-bold text-[var(--text-primary)] tracking-tighter leading-[0.85] mb-6 lg:mb-8 uppercase">
            TEJAS <br />
            PRAJAPATI
          </h1>
          
          {/* Developer Title */}
          <h2 className="text-[clamp(1rem,2vw,1.25rem)] font-mono tracking-widest text-[var(--text-secondary)] mb-8 lg:mb-10 uppercase">
            FULL-STACK <br className="sm:hidden" /> DEVELOPER
          </h2>

          {/* Description */}
          <p className="text-base sm:text-lg text-[var(--text-muted)] max-w-[500px] mb-12 lg:mb-16 leading-relaxed font-light">
            I build scalable web applications, <br className="hidden sm:block" />
            AI-powered systems and real-time <br className="hidden sm:block" />
            digital experiences.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 mb-12 lg:mb-20 w-full sm:w-auto">
            <Link
              href="#projects"
              className="group w-full sm:w-auto flex items-center justify-center sm:justify-between gap-4 px-8 py-4 border border-[var(--border-primary)] hover:border-[var(--text-primary)] hover:bg-[var(--background-secondary)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--text-primary)] transition-all duration-300 bg-[var(--background)] rounded-[2px]"
            >
              <span className="text-sm font-mono tracking-widest text-[var(--text-primary)] uppercase transition-transform duration-300 group-hover:translate-x-1">
                VIEW PROJECTS
              </span>
              <span className="text-[var(--text-primary)] transition-transform duration-300 group-hover:translate-x-2 group-hover:-translate-y-2">
                ↗
              </span>
            </Link>
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="group w-full sm:w-auto flex items-center justify-center sm:justify-between gap-4 px-8 py-4 border border-[var(--border-subtle)] hover:border-[var(--text-primary)] hover:bg-[var(--background-secondary)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--text-primary)] transition-all duration-300 bg-[var(--background)] rounded-[2px]"
            >
              <span className="text-sm font-mono tracking-widest text-[var(--text-secondary)] group-hover:text-[var(--text-primary)] uppercase transition-all duration-300 group-hover:translate-x-1">
                DOWNLOAD RESUME
              </span>
              <span className="text-[var(--text-secondary)] group-hover:text-[var(--text-primary)] transition-all duration-300 group-hover:translate-x-2 group-hover:-translate-y-2">
                ↗
              </span>
            </a>
          </div>

          {/* Technical Metadata - Desktop Only */}
          <div className="hidden lg:flex flex-wrap items-center gap-x-4 gap-y-3">
            <span className="text-xs font-mono tracking-widest text-[var(--text-muted)] uppercase hover:text-[var(--text-primary)] hover:translate-x-1 transition-all duration-300 cursor-default px-2 py-1 -ml-2 hover:bg-[var(--background-secondary)] border border-transparent hover:border-[var(--border-subtle)]">
              FULL STACK
            </span>
            <span className="text-[var(--border-subtle)]">|</span>
            <span className="text-xs font-mono tracking-widest text-[var(--text-muted)] uppercase hover:text-[var(--text-primary)] hover:translate-x-1 transition-all duration-300 cursor-default px-2 py-1 -ml-2 hover:bg-[var(--background-secondary)] border border-transparent hover:border-[var(--border-subtle)]">
              AI
            </span>
            <span className="text-[var(--border-subtle)]">|</span>
            <span className="text-xs font-mono tracking-widest text-[var(--text-muted)] uppercase hover:text-[var(--text-primary)] hover:translate-x-1 transition-all duration-300 cursor-default px-2 py-1 -ml-2 hover:bg-[var(--background-secondary)] border border-transparent hover:border-[var(--border-subtle)]">
              REAL-TIME
            </span>
            <span className="text-[var(--border-subtle)]">|</span>
            <span className="text-xs font-mono tracking-widest text-[var(--text-muted)] uppercase hover:text-[var(--text-primary)] hover:translate-x-1 transition-all duration-300 cursor-default px-2 py-1 -ml-2 hover:bg-[var(--background-secondary)] border border-transparent hover:border-[var(--border-subtle)]">
              CLOUD
            </span>
          </div>
        </div>
        
        {/* Right Content - 3D Visual Space */}
        <div className="w-full lg:w-1/2 relative z-10 flex items-center justify-center">
          <ThreeCanvas />
        </div>

        {/* Technical Metadata - Mobile Only */}
        <div className="flex lg:hidden w-full flex-col gap-y-2 mt-4 z-20 items-start">
            <span className="text-sm font-mono tracking-widest text-[var(--text-muted)] uppercase hover:text-[var(--text-primary)] hover:translate-x-2 transition-all duration-300 cursor-default px-3 py-2 -ml-3 hover:bg-[var(--background-secondary)] border border-transparent hover:border-[var(--border-subtle)] rounded-sm">
              FULL STACK
            </span>
            <span className="text-sm font-mono tracking-widest text-[var(--text-muted)] uppercase hover:text-[var(--text-primary)] hover:translate-x-2 transition-all duration-300 cursor-default px-3 py-2 -ml-3 hover:bg-[var(--background-secondary)] border border-transparent hover:border-[var(--border-subtle)] rounded-sm">
              AI
            </span>
            <span className="text-sm font-mono tracking-widest text-[var(--text-muted)] uppercase hover:text-[var(--text-primary)] hover:translate-x-2 transition-all duration-300 cursor-default px-3 py-2 -ml-3 hover:bg-[var(--background-secondary)] border border-transparent hover:border-[var(--border-subtle)] rounded-sm">
              REAL-TIME
            </span>
            <span className="text-sm font-mono tracking-widest text-[var(--text-muted)] uppercase hover:text-[var(--text-primary)] hover:translate-x-2 transition-all duration-300 cursor-default px-3 py-2 -ml-3 hover:bg-[var(--background-secondary)] border border-transparent hover:border-[var(--border-subtle)] rounded-sm">
              CLOUD
            </span>
        </div>

      </div>

      <ScrollIndicator />
    </section>
  );
}
