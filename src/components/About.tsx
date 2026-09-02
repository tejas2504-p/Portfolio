export default function About() {
  const areas = [
    { num: "01", title: "FULL-STACK DEVELOPMENT" },
    { num: "02", title: "AI & AUTOMATION" },
    { num: "03", title: "REAL-TIME APPLICATIONS" },
    { num: "04", title: "CLOUD & DEVOPS" },
  ];

  return (
    <section id="about" className="py-32 bg-[#0a0a0a] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Left Column: Text */}
          <div>
            <h2 className="text-sm font-semibold tracking-widest text-gray-400 mb-8">
              ABOUT ME
            </h2>
            <div className="space-y-8 text-xl sm:text-2xl text-gray-300 font-light leading-relaxed">
              <p>
                I&apos;m Tejas Prajapati, a Full-Stack Developer focused on building modern web applications, AI-powered systems and real-time experiences.
              </p>
              <p>
                I enjoy working across frontend, backend, databases and cloud technologies.
              </p>
            </div>
          </div>

          {/* Right Column: Areas */}
          <div className="flex flex-col justify-center">
            <div className="space-y-12">
              {areas.map((area) => (
                <div key={area.num} className="group flex items-start space-x-6 border-b border-white/10 pb-6">
                  <span className="text-sm font-mono text-gray-500 mt-1">
                    {area.num}
                  </span>
                  <h3 className="text-xl sm:text-2xl font-medium tracking-wide text-white group-hover:text-gray-300 transition-colors">
                    {area.title}
                  </h3>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
