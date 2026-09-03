export default function HeroVisualPlaceholder() {
  return (
    <div 
      className="w-full h-[350px] sm:h-[450px] lg:h-[600px] border border-[var(--border-subtle)] flex items-center justify-center relative overflow-hidden bg-[var(--background)] group transition-colors hover:border-[var(--border-primary)] duration-700"
      style={{
        transform: "translate(var(--mouse-x, 0px), var(--mouse-y, 0px))",
        transition: "transform 0.2s cubic-bezier(0.2, 0, 0, 1)"
      }}
    >
      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,var(--border-primary)_1px,transparent_1px)] bg-[size:24px_24px] opacity-[0.08]"></div>
      
      {/* Soft radial glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.02)_0%,transparent_60%)] opacity-0 group-hover:opacity-100 transition-opacity duration-1000"></div>

      {/* Thin circular outline */}
      <div className="absolute w-[200px] h-[200px] sm:w-[300px] sm:h-[300px] rounded-full border border-[var(--border-subtle)] opacity-20 group-hover:opacity-40 transition-all duration-1000 scale-95 group-hover:scale-100"></div>

      {/* Subtle crosshair */}
      <div className="absolute w-full h-[1px] bg-[var(--border-subtle)] opacity-20 group-hover:opacity-30 transition-opacity duration-700"></div>
      <div className="absolute h-full w-[1px] bg-[var(--border-subtle)] opacity-20 group-hover:opacity-30 transition-opacity duration-700"></div>
      
      {/* Center + */}
      <div className="absolute text-[var(--border-primary)] text-xs opacity-50">+</div>

      {/* Inner dashed border */}
      <div className="absolute inset-6 border border-dashed border-[var(--border-subtle)] opacity-30 group-hover:opacity-50 transition-opacity duration-700"></div>
      
      {/* Technical coordinate marks */}
      <div className="absolute top-3 left-3 text-[10px] font-mono text-[var(--text-muted)] opacity-50">X: 0.000</div>
      <div className="absolute bottom-3 right-3 text-[10px] font-mono text-[var(--text-muted)] opacity-50">Y: 0.000</div>
      <div className="absolute top-3 right-3 text-[10px] font-mono text-[var(--text-muted)] opacity-50">+ Z</div>
      
      {/* Main Label */}
      <div className="flex flex-col items-center justify-center gap-2 z-10 text-[var(--text-muted)] font-mono text-xs uppercase tracking-widest text-center px-6 py-4 bg-[var(--background)]/60 backdrop-blur-md border border-[var(--border-subtle)] group-hover:border-[var(--border-primary)] transition-colors duration-700">
        <span className="text-[var(--text-primary)]">[ 3D VISUAL SPACE ]</span>
        <span className="opacity-50 text-[10px]">Future implementation</span>
      </div>
    </div>
  );
}
