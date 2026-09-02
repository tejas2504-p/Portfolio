import SectionHeading from "./SectionHeading";

export default function Experience() {
  const experiences = [
    {
      title: "Software Development",
      period: "2025 — Present",
      description:
        "Building full-stack applications, AI systems and real-time projects.",
    },
    {
      title: "Hackathons & Projects",
      period: "2024 — Present",
      description:
        "Participated in multiple hackathons and developed software projects.",
    },
  ];

  return (
    <section id="experience" className="py-32 md:py-48 bg-[var(--background)] border-t border-[var(--border-subtle)]">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <SectionHeading number="05" title="EXPERIENCE" subtitle="WORK HISTORY" />

        <div className="max-w-4xl mx-auto">
          <div className="space-y-16 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-[1px] before:bg-[var(--border-primary)]">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group"
              >
                {/* Timeline dot */}
                <div className="flex items-center justify-center w-10 h-10 rounded-full border border-[var(--border-primary)] bg-[var(--background)] shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
                  <div className="w-2 h-2 bg-[var(--border-primary)] rounded-full group-hover:bg-[var(--text-primary)] transition-colors"></div>
                </div>
                
                {/* Content */}
                <div className="w-[calc(100%-4rem)] md:w-[calc(50%-3rem)] p-8 md:p-10 border border-[var(--border-subtle)] bg-[var(--background)] hover:border-[var(--border-primary)] transition-colors">
                  <div className="flex flex-col mb-6">
                    <h3 className="text-2xl font-light tracking-wide text-[var(--text-primary)] uppercase">
                      {exp.title}
                    </h3>
                    <span className="text-sm font-mono tracking-widest text-[var(--text-muted)] mt-4">
                      {exp.period}
                    </span>
                  </div>
                  <p className="text-[var(--text-secondary)] font-light leading-relaxed text-lg">
                    {exp.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
