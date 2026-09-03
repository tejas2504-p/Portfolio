export interface Experience {
  id: string;
  number: string;
  company: string;
  role: string;
  location: string;
  startDate: string;
  endDate: string;
  description: string;
  technologies: string[];
}

export const experiences: Experience[] = [
  {
    id: "exp-1",
    number: "01",
    company: "COMPANY NAME",
    role: "ROLE",
    location: "LOCATION",
    startDate: "START DATE",
    endDate: "PRESENT",
    description: "Replace this placeholder with actual experience.",
    technologies: ["Tech 1", "Tech 2"],
  },
  {
    id: "exp-2",
    number: "02",
    company: "PREVIOUS COMPANY",
    role: "PREVIOUS ROLE",
    location: "LOCATION",
    startDate: "START DATE",
    endDate: "END DATE",
    description: "Replace this placeholder with actual experience.",
    technologies: ["Tech 3", "Tech 4"],
  }
];
