export default function Skills() {
  const skillCategories = [
    {
      title: "FRONTEND",
      skills: ["JavaScript", "TypeScript", "React", "Next.js", "Redux", "Tailwind CSS"],
    },
    {
      title: "BACKEND",
      skills: ["Node.js", "Express.js"],
    },
    {
      title: "DATABASE",
      skills: ["MongoDB", "MySQL", "PostgreSQL"],
    },
    {
      title: "CLOUD & DEVOPS",
      skills: ["AWS", "Docker", "Kubernetes", "Jenkins"],
    },
    {
      title: "TOOLS",
      skills: ["Git", "GitHub", "Postman", "VS Code"],
    },
  ];

  return (
    <section id="skills" className="py-32 bg-[#050505] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <h2 className="text-sm font-semibold tracking-widest text-gray-400 mb-16 text-center sm:text-left">
          SKILLS
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-16">
          {skillCategories.map((category) => (
            <div key={category.title} className="flex flex-col">
              <h3 className="text-lg font-medium tracking-wide text-white mb-6 pb-2 border-b border-white/10">
                {category.title}
              </h3>
              <ul className="space-y-4">
                {category.skills.map((skill) => (
                  <li
                    key={skill}
                    className="text-gray-400 text-base sm:text-lg font-light tracking-wide flex items-center"
                  >
                    <span className="w-1.5 h-1.5 bg-white/20 rounded-full mr-4"></span>
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
