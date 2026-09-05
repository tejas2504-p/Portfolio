export default function Footer() {
  return (
    <footer className="pt-20 pb-12 bg-[var(--background)] border-t border-[var(--border-subtle)] relative z-10">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="flex flex-col lg:grid lg:grid-cols-12 gap-16 lg:gap-8 pb-16 border-b border-[var(--border-subtle)]">
          {/* BRAND (LEFT) */}
          <div className="lg:col-span-4 flex flex-col">
            <h2 className="text-xl sm:text-2xl font-bold tracking-tighter text-[var(--text-primary)] uppercase mb-2">
              TEJAS PRAJAPATI
            </h2>
            <p className="text-sm font-mono tracking-widest text-[var(--text-secondary)] uppercase">
              SOFTWARE DEVELOPER
            </p>
          </div>

          {/* NAVIGATION (CENTER) */}
          <div className="lg:col-span-4 flex flex-col gap-4">
            <span className="text-[10px] font-mono tracking-widest text-[var(--text-muted)] uppercase mb-2">
              NAVIGATION
            </span>
            <div className="flex flex-col gap-3">
              {['ABOUT', 'SKILLS', 'PROJECTS', 'JOURNEY', 'CONTACT'].map(item => (
                <a key={item} href={`#${item.toLowerCase()}`} className="text-sm font-semibold tracking-widest text-[var(--text-secondary)] hover:text-[var(--text-primary)] uppercase transition-colors w-fit focus-visible:outline-none focus-visible:text-[var(--text-primary)]">
                  {item}
                </a>
              ))}
            </div>
          </div>

          {/* SOCIALS (RIGHT) */}
          <div className="lg:col-span-4 flex flex-col gap-4">
            <span className="text-[10px] font-mono tracking-widest text-[var(--text-muted)] uppercase mb-2">
              SOCIALS
            </span>
            <div className="flex flex-col w-full border-t border-[var(--border-subtle)]">
              {[
                { name: 'EMAIL', url: 'mailto:tejasprajapati2504@email.com' },
                { name: 'GITHUB', url: 'https://github.com/tejas2504-p' },
                { name: 'LINKEDIN', url: 'https://www.linkedin.com/in/tejas-prajapati25p/' }
              ].map(item => (
                <a key={item.name} href={item.url} target={item.name !== 'EMAIL' ? '_blank' : undefined} rel={item.name !== 'EMAIL' ? 'noopener noreferrer' : undefined} className="group flex items-center justify-between py-6 lg:py-8 text-xs sm:text-sm font-semibold tracking-widest text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--background-secondary)] uppercase transition-all w-full focus-visible:outline-none focus-visible:text-[var(--text-primary)] border-b border-[var(--border-subtle)] px-4">
                  {item.name}
                  <span className="text-[var(--text-muted)] text-[10px] group-hover:text-[var(--text-primary)] transition-transform group-hover:translate-x-1 group-hover:-translate-y-1">
                    ↗
                  </span>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* BOTTOM METADATA */}
        <div className="pt-8 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6">
          <div className="text-[10px] sm:text-xs font-mono tracking-widest text-[var(--text-muted)] uppercase">
            © 2026 TEJAS PRAJAPATI
          </div>
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 text-[10px] sm:text-xs font-mono tracking-widest text-[var(--text-muted)] uppercase text-left sm:text-right">
            <span>DESIGNED + DEVELOPED BY TEJAS PRAJAPATI</span>
            <span className="hidden sm:inline text-[var(--border-primary)]">/</span>
            <span>BUILT WITH NEXT.JS</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
