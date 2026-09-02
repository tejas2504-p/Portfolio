export default function Footer() {
  return (
    <footer className="py-12 bg-[var(--background)] border-t border-[var(--border-subtle)]">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 flex flex-col sm:flex-row justify-between items-center gap-6">
        <div className="text-[var(--text-muted)] text-xs font-mono tracking-widest uppercase">
          © 2026 TEJAS PRAJAPATI
        </div>
        
        <div className="flex gap-8">
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors text-xs font-semibold tracking-widest uppercase"
          >
            GITHUB
          </a>
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors text-xs font-semibold tracking-widest uppercase"
          >
            LINKEDIN
          </a>
        </div>
        
        <div className="text-[var(--text-muted)] text-xs font-mono tracking-widest uppercase">
          BUILT WITH NEXT.JS
        </div>
      </div>
    </footer>
  );
}
