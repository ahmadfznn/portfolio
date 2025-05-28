export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  githubUrl: string;
}

export const projects: Project[] = [
  {
    id: 1,
    title: "Cashier Management",
    description: "A point-of-sale application to manage sales, inventory, and transactions efficiently for small to medium businesses.",
    image: "https://images.pexels.com/photos/12935074/pexels-photo-12935074.jpeg",
    tags: ["Flutter", "Laravel", "MySQL", "RESTful API"],
    githubUrl: "#"
  },
  {
    id: 2,
    title: "Chat App",
    description: "A real-time messaging app with secure user authentication, chat rooms, and instant notifications for seamless communication.",
    image: "https://images.pexels.com/photos/230554/pexels-photo-230554.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    tags: ["Flutter", "Firebase", "Node.js", "RESTful API"],
    githubUrl: "#"
  },
  {
    id: 3,
    title: "Employee Management",
    description: "A system to manage employee records, attendance, payroll, and leave requests with user-friendly admin controls.",
    image: "https://images.pexels.com/photos/140945/pexels-photo-140945.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    tags: ["React.js", "Node.js", "MySQL", "RESTful API"],
    githubUrl: "#"
  },
  {
    id: 4,
    title: "School Payment System",
    description: "A platform to manage and track student tuition payments, generate invoices, and send payment reminders automatically.",
    image: "https://images.pexels.com/photos/289737/pexels-photo-289737.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    tags: ["React.js", "Laravel", "Tailwind CSS", "RESTful API"],
    githubUrl: "#"
  },
];