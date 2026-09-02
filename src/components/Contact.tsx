export default function Contact() {
  return (
    <section id="contact" className="py-32 md:py-48 bg-[var(--background)] border-t border-[var(--border-subtle)]">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 text-center">
        <h2 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tighter text-[var(--text-primary)] mb-12 uppercase leading-[0.9]">
          LET&apos;S BUILD <br className="hidden sm:block" />
          SOMETHING TOGETHER.
        </h2>
        
        <p className="text-xl sm:text-2xl text-[var(--text-secondary)] font-light max-w-2xl mx-auto mb-20 leading-relaxed">
          Have an idea, opportunity or project? <br />
          Let&apos;s connect.
        </p>
        
        <div className="flex flex-wrap justify-center gap-6">
          <a
            href="mailto:#"
            className="group flex items-center justify-between gap-4 px-8 py-4 border border-[var(--border-primary)] hover:border-[var(--text-primary)] transition-colors"
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
            className="group flex items-center justify-between gap-4 px-8 py-4 border border-[var(--border-primary)] hover:border-[var(--text-primary)] transition-colors"
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
            className="group flex items-center justify-between gap-4 px-8 py-4 border border-[var(--border-primary)] hover:border-[var(--text-primary)] transition-colors"
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
            className="group flex items-center justify-between gap-4 px-8 py-4 border border-[var(--border-primary)] hover:border-[var(--text-primary)] transition-colors"
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
