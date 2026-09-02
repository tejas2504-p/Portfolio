import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center pt-24 overflow-hidden bg-[var(--background)]">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 w-full relative z-10 flex flex-col lg:flex-row items-center">
        {/* Left Content */}
        <div className="w-full lg:w-1/2">
          {/* Section Indicator */}
          <div className="flex items-center gap-4 mb-12">
            <span className="text-sm font-mono tracking-widest text-[var(--text-muted)]">
              01
            </span>
            <span className="text-[var(--border-primary)]">/</span>
            <span className="text-sm font-mono tracking-widest text-[var(--text-muted)] uppercase">
              INTRO
            </span>
          </div>

          {/* Main Typography */}
          <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-[7rem] font-bold text-[var(--text-primary)] tracking-tighter leading-[0.9] mb-8 uppercase">
            TEJAS <br />
            PRAJAPATI
          </h1>
          
          <h2 className="text-lg sm:text-xl font-mono tracking-widest text-[var(--text-secondary)] mb-12 uppercase">
            FULL-STACK DEVELOPER
          </h2>

          <p className="text-lg sm:text-xl text-[var(--text-secondary)] max-w-lg mb-16 leading-relaxed font-light">
            I build scalable web applications, <br className="hidden sm:block" />
            AI-powered systems and real-time <br className="hidden sm:block" />
            digital experiences.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-6">
            <Link
              href="#projects"
              className="group flex items-center justify-between gap-4 px-8 py-4 border border-[var(--border-primary)] hover:border-[var(--text-primary)] transition-colors"
            >
              <span className="text-sm font-semibold tracking-widest text-[var(--text-primary)] uppercase">
                VIEW PROJECTS
              </span>
              <span className="text-[var(--text-primary)] transition-transform group-hover:translate-x-1 group-hover:-translate-y-1">
                ↗
              </span>
            </Link>
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-between gap-4 px-8 py-4 border border-[var(--border-primary)] hover:border-[var(--text-primary)] transition-colors"
            >
              <span className="text-sm font-semibold tracking-widest text-[var(--text-secondary)] group-hover:text-[var(--text-primary)] uppercase transition-colors">
                DOWNLOAD RESUME
              </span>
              <span className="text-[var(--text-secondary)] group-hover:text-[var(--text-primary)] transition-all group-hover:translate-x-1 group-hover:-translate-y-1">
                ↗
              </span>
            </a>
          </div>
        </div>
        
        {/* Right Content - Empty area for future 3D */}
        <div className="hidden lg:block w-full lg:w-1/2 h-[600px]">
          {/* 3D Model will go here in future phases */}
        </div>
      </div>
    </section>
  );
}
