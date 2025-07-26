export interface TimelineItem {
  id: number;
  title: string;
  organization: string;
  period: string;
  description: string;
  type: "work" | "internship" | "education";
}

export const timelineItems: TimelineItem[] = [
  {
    id: 1,
    title: "Full Stack Developer",
    organization: "Berkatsoft",
    period: "2024 - 2025",
    description:
      "Collaborated with front-end and back-end development teams to create responsive and accessible web and Android applications. Implemented performance optimizations that improved load times by up to 40%.",
    type: "work",
  },
  {
    id: 2,
    title: "Full Stack Developer",
    organization: "Prilude Studio Indonesia.",
    period: "2023",
    description:
      "Developed and maintained multiple web applications using React, Laravel, and MySQL. Collaborated with UX designers to implement intuitive user interfaces. Reduced API response times by up to 30% through query optimization.",
    type: "internship",
  },

  {
    id: 3,
    title: "Vocational high school in software engineering",
    organization: "Daarul Abroor vocational high school",
    period: "2021 - 2024",
    description:
      "A vocational high school graduate, I built a solid foundation in software development, honing my skills in coding, problem-solving, and application development.",
    type: "education",
  },
];
