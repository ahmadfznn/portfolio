import React, { useState } from "react";
import { motion } from "framer-motion";
import { Code, Server, Smartphone, Layers } from "lucide-react";
import { skills } from "../data/skills";

const Skills: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<
    "all" | "frontend" | "backend" | "mobile" | "other"
  >("all");

  const categories = [
    { id: "all", name: "All", icon: <Layers size={20} /> },
    { id: "frontend", name: "Frontend", icon: <Code size={20} /> },
    { id: "backend", name: "Backend", icon: <Server size={20} /> },
    { id: "mobile", name: "Mobile", icon: <Smartphone size={20} /> },
    { id: "other", name: "DevOps & Tools", icon: <Layers size={20} /> },
  ];

  const filteredSkills =
    activeCategory === "all"
      ? skills
      : skills.filter((skill) => skill.category === activeCategory);

  return (
    <section
      id="skills"
      className="section bg-background-secondary container-padding"
    >
      <div className="container mx-auto">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Technical <span className="gradient-text">Skills</span>
        </motion.h2>

        <motion.div
          className="flex flex-wrap justify-center gap-3 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id as any)}
              className={`flex items-center gap-2 px-4 py-2 rounded-full transition-all ${
                activeCategory === category.id
                  ? "bg-accent-purple text-white"
                  : "bg-background-tertiary text-text-secondary hover:text-white"
              }`}
            >
              {category.icon}
              {category.name}
            </button>
          ))}
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {filteredSkills.map((skill, index) => (
            <motion.div
              key={skill.name}
              className="p-4 rounded-lg bg-background"
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
            >
              <div className="flex justify-between items-center mb-2">
                <span className="font-medium">{skill.name}</span>
                <span className="text-sm text-text-secondary">
                  {skill.level}%
                </span>
              </div>
              <div className="h-2 w-full bg-background-tertiary rounded-full overflow-hidden">
                <motion.div
                  className="h-full bg-gradient-to-r from-accent-blue to-accent-purple"
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.1 }}
                ></motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
