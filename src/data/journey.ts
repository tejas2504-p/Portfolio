export interface Milestone {
  id: string;
  number: string;
  category: string;
  title: string;
  description: string;
  technologies: string[];
}

export const journeyMilestones: Milestone[] = [
  {
    id: "foundation",
    number: "01",
    category: "FUNDAMENTALS",
    title: "FOUNDATION",
    description: "Learning computer science fundamentals, programming, databases, and web development.",
    technologies: ["C++", "Java", "HTML/CSS", "JavaScript", "SQL"]
  },
  {
    id: "fullstack",
    number: "02",
    category: "ENGINEERING",
    title: "FULL-STACK DEVELOPMENT",
    description: "Building full-stack applications using React, Node.js, Express.js, MongoDB and modern web technologies.",
    technologies: ["React", "Node.js", "Express", "MongoDB", "Tailwind CSS"]
  },
  {
    id: "realtime-ai",
    number: "03",
    category: "ADVANCED SYSTEMS",
    title: "REAL-TIME + AI",
    description: "Working on projects involving real-time communication, AI integration, automation, and intelligent applications.",
    technologies: ["Socket.IO", "WebSockets", "OpenAI", "Discord.js"]
  },
  {
    id: "production",
    number: "04",
    category: "ARCHITECTURE",
    title: "BUILDING FOR PRODUCTION",
    description: "Focusing on scalable architecture, performance, clean code, cloud technologies, and production-ready development.",
    technologies: ["Next.js", "TypeScript", "AWS", "Docker", "CI/CD"]
  }
];
