export interface Project {
  id: string;
  number: string;
  title: string;
  category: string;
  description: string;
  technologies: string[];
  image: string;
  githubUrl: string | null;
  liveUrl: string | null;
}

export const projects: Project[] = [
  {
    id: "pool",
    number: "01",
    title: "Cue-Arena",
    category: "REAL-TIME MULTIPLAYER",
    description: "A full-stack real-time multiplayer 8 Ball Pool game with secure authentication, matchmaking and synchronized live gameplay.",
    technologies: ["MERN Stack", "Socket.IO", "MongoDB"],
    image: "/projects/8-ball-pool.webp",
    githubUrl: "https://github.com/tejas2504-p/Cue-Arena",
    liveUrl: null,
  },
  {
    id: "ai-bot",
    number: "02",
    title: "Autonomous Discord Agent",
    category: "AI / AUTOMATION",
    description: "An AI-powered Discord bot capable of intelligent conversations and server interactions with persistent chat memory.",
    technologies: ["Node.js", "Discord.js", "AI", "MongoDB"],
    image: "/projects/ai-discord-bot.webp",
    githubUrl: "https://github.com/tejas2504-p/Autonomous-Discord-Agent",
    liveUrl: null,
  },
  {
    id: "grievance",
    number: "03",
    title: "Smart Government Grievance Portal",
    category: "AI / CIVIC TECHNOLOGY",
    description: "An AI-powered civic complaint management platform designed to help users submit, manage and track government grievances.",
    technologies: ["React", "Node.js", "MongoDB", "AI"],
    image: "/projects/government-grievance.webp",
    githubUrl: "https://github.com/tejas2504-p/smart-civic-grievance-system",
    liveUrl: null,
  },
];
