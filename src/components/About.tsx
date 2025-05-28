import React from "react";
import { motion } from "framer-motion";
import { Code, Briefcase, Cpu, Coffee } from "lucide-react";

const About: React.FC = () => {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.1 * i,
        duration: 0.5,
      },
    }),
  };

  const techStack = [
    { name: "React", icon: <Code className="text-accent-blue" size={24} /> },
    { name: "Node.js", icon: <Cpu className="text-accent-blue" size={24} /> },
    {
      name: "Flutter",
      icon: <Briefcase className="text-accent-blue" size={24} />,
    },
    {
      name: "Firebase",
      icon: <Coffee className="text-accent-blue" size={24} />,
    },
  ];

  return (
    <section
      id="about"
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
          About <span className="gradient-text">Me</span>
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex justify-center"
          >
            <div className="relative w-full max-w-md">
              <div className="aspect-[3/4] rounded-xl overflow-hidden">
                <img
                  src="self.JPG"
                  alt="Ahmad Portrait"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -inset-1 rounded-xl bg-gradient-to-tr from-accent-purple to-accent-blue -z-10 blur opacity-20"></div>
            </div>
          </motion.div>

          <div>
            <motion.h3
              className="section-subtitle"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Who am I?
            </motion.h3>

            <motion.div
              className="space-y-4 text-text-secondary"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <p>
                Hi, I'm Ahmad, a passionate Software Developer with 2+ years of
                experience in creating modern web and mobile applications.
              </p>
              <p>
                I specialize in building scalable, performant applications using
                modern technologies. My approach combines clean code principles
                with user-centered design to create exceptional digital
                experiences.
              </p>
              <p>
                When I'm not coding, you can find me exploring new technologies,
                contributing to open-source projects, or sharing my knowledge
                through technical articles and mentoring.
              </p>
            </motion.div>

            <motion.div
              className="mt-8"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <h4 className="text-lg font-medium mb-4">My Tech Stack</h4>
              <div className="grid grid-cols-2 gap-4">
                {techStack.map((tech, index) => (
                  <motion.div
                    key={tech.name}
                    custom={index}
                    variants={fadeIn}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="flex items-center gap-3 p-3 rounded-lg bg-background bg-opacity-60"
                  >
                    {tech.icon}
                    <span>{tech.name}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
