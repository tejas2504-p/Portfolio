import { projects } from "@/data/projects";

export default function Projects() {
  return (
    <section id="projects" className="py-32 bg-[#0a0a0a] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <h2 className="text-sm font-semibold tracking-widest text-gray-400 mb-16 text-center sm:text-left">
          PROJECTS
        </h2>

        <div className="space-y-24">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group flex flex-col lg:flex-row gap-8 lg:gap-16 border-b border-white/10 pb-16 last:border-0 last:pb-0"
            >
              <div className="lg:w-1/3">
                <span className="text-sm font-mono text-gray-500 block mb-4">
                  PROJECT {project.id}
                </span>
                <h3 className="text-3xl font-medium tracking-wide text-white mb-6">
                  {project.title}
                </h3>
                <div className="flex flex-wrap gap-2 mb-8">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-xs font-medium tracking-wider text-gray-400 border border-white/10 rounded-full bg-white/5"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="lg:w-2/3 flex flex-col justify-between">
                <p className="text-lg sm:text-xl text-gray-300 font-light leading-relaxed mb-10 max-w-2xl">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-6">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-semibold tracking-widest text-white hover:text-gray-300 transition-colors uppercase flex items-center gap-2"
                  >
                    GitHub
                    <span className="text-lg leading-none transition-transform group-hover:translate-x-1">→</span>
                  </a>
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-semibold tracking-widest text-white hover:text-gray-300 transition-colors uppercase flex items-center gap-2"
                  >
                    Live Demo
                    <span className="text-lg leading-none transition-transform group-hover:translate-x-1">→</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
