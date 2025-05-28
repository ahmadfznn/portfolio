export interface TimelineItem {
  id: number;
  title: string;
  organization: string;
  period: string;
  description: string;
  type: 'work' | 'internship' | 'education';
}

export const timelineItems: TimelineItem[] = [
  {
    id: 1,
    title: "Full Stack Developer",
    organization: "Berkatsoft",
    period: "2024 - Present",
    description: "Lead the frontend development team in creating responsive, accessible web applications. Implemented performance optimizations that improved load times by 40%. Mentored junior developers and established coding standards.",
    type: "work"
  },
  {
    id: 2,
    title: "Full Stack Developer",
    organization: "Prilude Studio Indonesia.",
    period: "2023",
    description: "Developed and maintained multiple web applications using React, Node.js, and PostgreSQL. Collaborated with UX designers to implement intuitive user interfaces. Reduced API response times by 30% through query optimizations.",
    type: "internship"
  },
  
  // Education
  {
    id: 3,
    title: "Vocational high school in software engineering",
    organization: "Daarul Abroor vocational high school",
    period: "2021 - 2024",
    description: "Specialized in Software Engineering and Machine Learning. Graduated with distinction. Thesis on 'Optimizing Progressive Web Applications for Low-Bandwidth Environments'.",
    type: "education"
  },
];