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
    <section id="experience" className="py-32 bg-[#050505] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <h2 className="text-sm font-semibold tracking-widest text-gray-400 mb-16 text-center sm:text-left">
          EXPERIENCE
        </h2>

        <div className="max-w-3xl">
          <div className="space-y-16 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-white/10 before:to-transparent">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group"
              >
                {/* Timeline dot */}
                <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white/10 bg-[#050505] shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 shadow">
                  <div className="w-2 h-2 bg-gray-500 rounded-full group-hover:bg-white transition-colors"></div>
                </div>
                
                {/* Content */}
                <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-6 rounded-lg border border-white/5 bg-white/[0.02] hover:bg-white/[0.04] transition-colors">
                  <div className="flex flex-col mb-4">
                    <h3 className="text-xl font-medium tracking-wide text-white">
                      {exp.title}
                    </h3>
                    <span className="text-sm font-mono text-gray-500 mt-2">
                      {exp.period}
                    </span>
                  </div>
                  <p className="text-gray-400 font-light leading-relaxed">
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
