export default function ScrollIndicator() {
  return (
    <div data-hero-scroll-indicator className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-60 hover:opacity-100 transition-opacity z-20">
      <span className="text-[10px] font-mono tracking-widest text-[var(--text-muted)] uppercase">
        SCROLL
      </span>
      <span className="text-[var(--text-secondary)] text-sm animate-bounce">
        ↓
      </span>
    </div>
  );
}
