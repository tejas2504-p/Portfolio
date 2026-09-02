export interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  githubUrl: string;
  liveUrl: string;
}

export const projects: Project[] = [
  {
    id: "01",
    title: "8 BALL POOL",
    description:
      "Real-time multiplayer 8 Ball Pool game with secure authentication, matchmaking and live gameplay synchronization.",
    technologies: ["MERN", "Socket.IO", "MongoDB"],
    githubUrl: "#",
    liveUrl: "#",
  },
  {
    id: "02",
    title: "AI DISCORD BOT",
    description:
      "AI-powered Discord bot designed for conversation, automation and intelligent server interactions.",
    technologies: ["Node.js", "Discord.js", "AI", "MongoDB"],
    githubUrl: "#",
    liveUrl: "#",
  },
  {
    id: "03",
    title: "SMART GOVERNMENT GRIEVANCE PORTAL",
    description:
      "AI-powered civic complaint management system designed to simplify grievance submission and management.",
    technologies: ["React", "Node.js", "MongoDB", "AI"],
    githubUrl: "#",
    liveUrl: "#",
  },
];
