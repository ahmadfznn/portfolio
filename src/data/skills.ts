export interface Skill {
  name: string;
  level: number; // 0-100
  category: 'frontend' | 'backend' | 'mobile' | 'other';
}

export const skills: Skill[] = [
  // Frontend
  { name: 'HTML/CSS', level: 95, category: 'frontend' },
  { name: 'JavaScript', level: 90, category: 'frontend' },
  { name: 'TypeScript', level: 80, category: 'frontend' },
  { name: 'React.js', level: 90, category: 'frontend' },
  { name: 'Next.js', level: 90, category: 'frontend' },
  { name: 'Tailwind CSS', level: 90, category: 'frontend' },
  
  // Backend
  { name: 'Node.js', level: 85, category: 'backend' },
  { name: 'Express', level: 85, category: 'backend' },
  { name: 'Laravel', level: 85, category: 'backend' },
  { name: 'PostgreSQL', level: 75, category: 'backend' },
  { name: 'MongoDB', level: 70, category: 'backend' },
  { name: 'Firebase', level: 85, category: 'backend' },
  
  // Mobile
  { name: 'Flutter', level: 90, category: 'mobile' },
  { name: 'Kotlin', level: 70, category: 'mobile' },
  
  // Other
  { name: 'Git', level: 90, category: 'other' },
  { name: 'Docker', level: 65, category: 'other' },
];