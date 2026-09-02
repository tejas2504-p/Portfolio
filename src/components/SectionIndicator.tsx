export default function SectionIndicator() {
  const sections = ["01", "02", "03", "04", "05", "06"];

  return (
    <div className="fixed left-8 top-1/2 -translate-y-1/2 z-40 hidden xl:flex flex-col items-center pointer-events-none mix-blend-difference">
      {sections.map((num, index) => (
        <div key={num} className="flex flex-col items-center">
          <span className="text-[10px] font-mono tracking-widest text-[var(--text-muted)]">
            {num}
          </span>
          {index < sections.length - 1 && (
            <div className="w-px h-16 bg-[var(--border-subtle)] my-2" />
          )}
        </div>
      ))}
    </div>
  );
}
