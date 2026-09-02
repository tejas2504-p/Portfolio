import Link from "next/link";

export default function Hero() {
  const labels = ["FULL STACK", "AI", "REAL-TIME SYSTEMS", "CLOUD"];

  return (
    <section className="relative min-h-screen flex flex-col justify-center pt-20 overflow-hidden bg-[#050505]">
      {/* Background accents (optional subtlety without complex animations) */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-white/[0.02] rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-white/[0.01] rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 w-full relative z-10">
        <div className="max-w-4xl">
          {/* Labels */}
          <div className="flex flex-wrap gap-3 mb-8">
            {labels.map((label) => (
              <span
                key={label}
                className="px-3 py-1 text-xs font-semibold tracking-widest text-gray-400 border border-white/10 rounded-full bg-white/5"
              >
                {label}
              </span>
            ))}
          </div>

          {/* Main Typography */}
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-white tracking-tighter mb-4">
            TEJAS PRAJAPATI
          </h1>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-medium text-gray-400 mb-8 tracking-tight">
            FULL-STACK DEVELOPER
          </h2>

          <p className="text-lg sm:text-xl text-gray-400 max-w-2xl mb-12 leading-relaxed">
            I build scalable web applications, <br className="hidden sm:block" />
            AI-powered systems and real-time <br className="hidden sm:block" />
            digital experiences.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="#projects"
              className="px-8 py-4 bg-white text-black font-semibold rounded hover:bg-gray-200 transition-colors text-center tracking-wide"
            >
              VIEW PROJECTS
            </Link>
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-transparent border border-white/20 text-white font-semibold rounded hover:bg-white/5 transition-colors text-center tracking-wide"
            >
              DOWNLOAD RESUME
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
