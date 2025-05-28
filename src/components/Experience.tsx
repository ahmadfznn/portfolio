import React, { useState } from "react";
import { motion } from "framer-motion";
import { Briefcase, GraduationCap } from "lucide-react";
import { timelineItems } from "../data/experience";

const Experience: React.FC = () => {
  const [filter, setFilter] = useState<"all" | "work" | "education">("all");

  const filteredItems =
    filter === "all"
      ? timelineItems
      : timelineItems.filter((item) => item.type === filter);

  return (
    <section id="experience" className="section container-padding">
      <div className="container mx-auto">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          My <span className="gradient-text">Experience</span>
        </motion.h2>

        <motion.div
          className="flex justify-center gap-4 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <button
            onClick={() => setFilter("all")}
            className={`px-4 py-2 rounded-full transition-all ${
              filter === "all"
                ? "bg-accent-purple text-white"
                : "bg-background-tertiary text-text-secondary hover:text-white"
            }`}
          >
            All
          </button>
          <button
            onClick={() => setFilter("work")}
            className={`flex items-center gap-2 px-4 py-2 rounded-full transition-all ${
              filter === "work"
                ? "bg-accent-purple text-white"
                : "bg-background-tertiary text-text-secondary hover:text-white"
            }`}
          >
            <Briefcase size={18} />
            Work
          </button>
          <button
            onClick={() => setFilter("education")}
            className={`flex items-center gap-2 px-4 py-2 rounded-full transition-all ${
              filter === "education"
                ? "bg-accent-purple text-white"
                : "bg-background-tertiary text-text-secondary hover:text-white"
            }`}
          >
            <GraduationCap size={18} />
            Education
          </button>
        </motion.div>

        <div className="relative max-w-3xl mx-auto">
          {/* Timeline Line */}
          <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-1 bg-background-tertiary"></div>

          {/* Timeline Items */}
          {filteredItems.map((item, index) => (
            <motion.div
              key={item.id}
              className={`relative mb-12 ${
                index % 2 === 0
                  ? "md:pr-8 md:ml-auto md:text-right"
                  : "md:pl-8 md:text-left"
              } ${
                index % 2 === 0
                  ? "md:ml-auto md:mr-[50%]"
                  : "md:ml-[50%] md:mr-0"
              }`}
              initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              {/* Timeline Dot */}
              <div
                className={`absolute top-0 ${
                  index % 2 === 0
                    ? "left-0 md:left-auto md:right-0 md:-translate-x-1/2"
                    : "left-0 md:left-0 md:-translate-x-1/2"
                } md:left-1/2 transform -translate-y-1/2 md:-translate-x-1/2 w-6 h-6 rounded-full bg-accent-purple z-10 flex items-center justify-center`}
              >
                {item.type === "education" ? (
                  <GraduationCap size={14} className="text-white" />
                ) : (
                  <Briefcase size={14} className="text-white" />
                )}
              </div>

              {/* Content Card */}
              <div className="card">
                <div className="flex flex-col md:items-end">
                  <span className="text-sm font-medium px-3 py-1 rounded-full bg-background-tertiary inline-block mb-2 text-accent-blue">
                    {item.period}
                  </span>
                  <h3 className="text-xl font-semibold">{item.title}</h3>
                  <p className="text-text-secondary">{item.organization}</p>
                </div>
                <p className="mt-3 text-text-secondary">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
