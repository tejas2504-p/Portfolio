interface SectionHeadingProps {
  number: string;
  title: string;
  subtitle?: string;
}

export default function SectionHeading({
  number,
  title,
  subtitle,
}: SectionHeadingProps) {
  return (
    <div data-animate="heading" className="mb-20 sm:mb-32">
      <div className="flex items-center gap-4 mb-8">
        <span className="text-sm font-mono tracking-widest text-[var(--text-muted)]">
          {number}
        </span>
        <span className="text-[var(--border-primary)]">/</span>
        <span className="text-sm font-mono tracking-widest text-[var(--text-muted)] uppercase">
          {title}
        </span>
      </div>

      {subtitle && (
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tighter text-[var(--text-primary)] uppercase leading-tight">
          {subtitle}
        </h2>
      )}
    </div>
  );
}
