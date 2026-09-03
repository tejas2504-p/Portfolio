export interface Milestone {
  id: string;
  number: string;
  category: string;
  title: string;
  description: string;
  technologies: string[];
  status?: string;
}

export const journeyMilestones: Milestone[] = [
  {
    id: "foundation",
    number: "01",
    category: "Computer Engineering",
    title: "FOUNDATION",
    description: "Built a strong foundation in programming, object-oriented programming, databases, data structures, and software engineering concepts.",
    technologies: ["C++", "Java", "DSA", "SQL", "OOP"],
    status: "2021"
  },
  {
    id: "fullstack",
    number: "02",
    category: "Modern Web Applications",
    title: "FULL-STACK DEVELOPMENT",
    description: "Started building complete web applications using React, Next.js, Node.js, Express.js, MongoDB, PostgreSQL and REST APIs.",
    technologies: ["React", "Next.js", "Node.js", "Express", "MongoDB", "PostgreSQL"],
    status: "2022"
  },
  {
    id: "realtime-ai",
    number: "03",
    category: "Advanced Projects",
    title: "REAL-TIME + AI",
    description: "Explored real-time systems, WebSockets/Socket.IO, AI APIs, automation, and intelligent application development.",
    technologies: ["Socket.IO", "WebSockets", "AI Integration", "Automation"],
    status: "2023"
  },
  {
    id: "hackathons",
    number: "04",
    category: "Learning by Building",
    title: "PROJECTS + HACKATHONS",
    description: "Developed multiple projects and participated in hackathons to apply technical concepts to practical problems.",
    technologies: ["Rapid Prototyping", "Git/GitHub", "Problem Solving", "Team Collaboration"],
    status: "2023 - 2024"
  },
  {
    id: "current",
    number: "05",
    category: "Production-Oriented Development",
    title: "CURRENT FOCUS",
    description: "Currently focusing on scalable architecture, performance, cloud technologies, DevOps, AI integration, and creating polished production-ready applications.",
    technologies: ["Cloud Infrastructure", "DevOps", "Scalability", "Performance Optimization"],
    status: "PRESENT"
  }
];
