import { projects } from "@/data/projects";
import SectionHeading from "./SectionHeading";

export default function Projects() {
  return (
    <section id="projects" className="py-32 md:py-48 bg-[var(--background)] border-t border-[var(--border-subtle)]">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <SectionHeading number="04" title="PROJECTS" subtitle="SELECTED WORKS" />

        <div className="space-y-32">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group flex flex-col lg:flex-row gap-12 lg:gap-24 border-b border-[var(--border-subtle)] pb-24 last:border-0 last:pb-0"
            >
              <div className="lg:w-5/12">
                <span className="text-sm font-mono tracking-widest text-[var(--text-muted)] block mb-6">
                  PROJECT {project.id}
                </span>
                <h3 className="text-4xl sm:text-5xl font-bold tracking-tighter text-[var(--text-primary)] mb-8 uppercase leading-tight">
                  {project.title}
                </h3>
                <div className="flex flex-wrap gap-3 mb-8">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-4 py-1.5 text-xs font-mono tracking-widest text-[var(--text-secondary)] border border-[var(--border-primary)] uppercase"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="lg:w-7/12 flex flex-col justify-between">
                <p className="text-xl sm:text-2xl text-[var(--text-secondary)] font-light leading-relaxed mb-12 max-w-2xl">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-6">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group/link flex items-center gap-3 text-sm font-semibold tracking-widest text-[var(--text-primary)] hover:text-[var(--text-secondary)] transition-colors uppercase border-b border-transparent hover:border-[var(--text-secondary)] pb-1"
                  >
                    GitHub
                    <span className="text-lg leading-none transition-transform group-hover/link:translate-x-1 group-hover/link:-translate-y-1">↗</span>
                  </a>
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group/link flex items-center gap-3 text-sm font-semibold tracking-widest text-[var(--text-primary)] hover:text-[var(--text-secondary)] transition-colors uppercase border-b border-transparent hover:border-[var(--text-secondary)] pb-1"
                  >
                    Live Demo
                    <span className="text-lg leading-none transition-transform group-hover/link:translate-x-1 group-hover/link:-translate-y-1">↗</span>
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
