export default function GridBackground() {
  return (
    <div
      className="fixed inset-0 z-0 pointer-events-none"
      style={{
        backgroundImage: `
          linear-gradient(to right, var(--border-subtle) 1px, transparent 1px),
          linear-gradient(to bottom, var(--border-subtle) 1px, transparent 1px)
        `,
        backgroundSize: "clamp(4rem, 8vw, 6rem) clamp(4rem, 8vw, 6rem)",
        backgroundPosition: "center center",
        opacity: 0.5,
      }}
    >
      {/* Optional: subtle radial gradient to dim the grid in the center or edges if needed */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,var(--background)_80%)]" />
    </div>
  );
}
