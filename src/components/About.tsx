import SectionHeading from "./SectionHeading";

export default function About() {
  const areas = [
    { num: "01", title: "FULL-STACK DEVELOPMENT" },
    { num: "02", title: "AI & AUTOMATION" },
    { num: "03", title: "REAL-TIME APPLICATIONS" },
    { num: "04", title: "CLOUD & DEVOPS" },
  ];

  return (
    <section id="about" className="py-32 md:py-48 bg-[var(--background)] border-t border-[var(--border-subtle)] relative">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 relative z-10">
        <SectionHeading number="02" title="ABOUT" subtitle="ABOUT ME" />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-32">
          {/* Left Column: Text */}
          <div className="space-y-8 text-xl sm:text-2xl text-[var(--text-secondary)] font-light leading-relaxed">
            <p>
              I&apos;m Tejas Prajapati, a Full-Stack Developer focused on building modern web applications, AI-powered systems and real-time experiences.
            </p>
            <p>
              I enjoy working across frontend, backend, databases and cloud technologies.
            </p>
          </div>

          {/* Right Column: Areas */}
          <div className="flex flex-col justify-center">
            <span className="text-xs font-mono tracking-widest text-[var(--text-muted)] uppercase mb-8 block">
              CURRENT FOCUS
            </span>
            <div className="space-y-0 border-t border-[var(--border-subtle)]">
              {areas.map((area) => (
                <div key={area.num} className="group flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-12 border-b border-[var(--border-subtle)] py-8">
                  <span className="text-sm font-mono tracking-widest text-[var(--text-muted)] shrink-0">
                    {area.num}
                  </span>
                  <h3 className="text-xl sm:text-2xl font-light tracking-wide text-[var(--text-secondary)] group-hover:text-[var(--text-primary)] transition-colors uppercase">
                    {area.title}
                  </h3>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
