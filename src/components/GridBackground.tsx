export default function GridBackground() {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden bg-[var(--background)]">
      {/* 1. Base Ambient Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.03)_0%,transparent_70%)] opacity-50 md:opacity-100" />
      
      {/* 2. Grid */}
      <div
        className="absolute inset-0 opacity-[0.15] md:opacity-[0.25]"
        style={{
          backgroundImage: `
            linear-gradient(to right, var(--border-primary) 1px, transparent 1px),
            linear-gradient(to bottom, var(--border-primary) 1px, transparent 1px)
          `,
          backgroundSize: "clamp(3rem, 6vw, 5rem) clamp(3rem, 6vw, 5rem)",
          backgroundPosition: "center center",
        }}
      />
      
      {/* 3. Film Grain / Noise */}
      <div 
        className="absolute inset-0 opacity-[0.03] md:opacity-[0.05] mix-blend-screen"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
          backgroundRepeat: "repeat",
        }}
      />
      
      {/* 4. Vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,var(--background)_100%)] opacity-80 md:opacity-90" />
    </div>
  );
}
