import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-scroll";
import { ArrowDown, Download, Mail } from "lucide-react";

const Hero: React.FC = () => {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center pt-16 container-padding"
    >
      <div className="container mx-auto grid md:grid-cols-2 gap-8 items-center">
        <motion.div
          className="text-center md:text-left"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            Ahmad <span className="gradient-text">Sofware Developer</span>
          </h1>

          <p className="text-xl md:text-2xl text-text-secondary mb-8">
            I build scalable, modern web & mobile apps
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <a
              href="mailto:ahmadfzn2005@gmail.com"
              className="btn-primary flex items-center justify-center gap-2"
            >
              <Mail size={18} />
              Hire Me
            </a>
            <a
              href="/file/cv.pdf"
              download="ahmadfauzan.pdf"
              className="btn-outline flex items-center justify-center gap-2"
            >
              <Download size={18} />
              Download CV
            </a>
          </div>
        </motion.div>

        <motion.div
          className="flex justify-center md:justify-end"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="relative">
            <div className="h-64 w-64 md:h-72 md:w-72 lg:h-80 lg:w-80 rounded-full overflow-hidden ring-4 ring-accent-purple/30 animate-float">
              <img
                src="ahmad.png"
                alt="Ahmad - Software Developer"
                className="object-cover w-full h-full"
              />
            </div>
            <div className="absolute -inset-0.5 rounded-full bg-gradient-to-r from-accent-blue to-accent-purple opacity-20 blur-xl"></div>
          </div>
        </motion.div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <Link to="about" smooth={true} duration={500} offset={-80}>
          <ArrowDown className="text-accent-blue cursor-pointer" size={28} />
        </Link>
      </div>
    </section>
  );
};

export default Hero;
