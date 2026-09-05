export interface Project {
  id: string;
  number: string;
  title: string;
  category: string;
  description: string;
  technologies: string[];
  image: string;
  images: string[];
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
    image: "/projects/cue1.jpeg",
    images: [
      "/projects/cue1.jpeg",
      "/projects/cue2.jpeg",
      "/projects/cue3.jpeg"
    ],
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
    image: "/projects/bot1.jpeg",
    images: [
      "/projects/bot1.jpeg",
      "/projects/bot2.jpeg"
    ],
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
    image: "/projects/govern1.jpeg",
    images: [
      "/projects/govern1.jpeg",
      "/projects/govern2.jpeg",
      "/projects/govern3.jpeg",
      "/projects/govern4.jpeg"
    ],
    githubUrl: "https://github.com/tejas2504-p/smart-civic-grievance-system",
    liveUrl: null,
  },
];
