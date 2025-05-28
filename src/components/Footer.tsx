import React from "react";
import { Link } from "react-scroll";
import { Code, Heart } from "lucide-react";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: "Home", to: "hero" },
    { name: "About", to: "about" },
    { name: "Projects", to: "projects" },
    { name: "Skills", to: "skills" },
    { name: "Experience", to: "experience" },
    { name: "Contact", to: "contact" },
  ];

  return (
    <footer className="bg-background-secondary pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Code className="text-accent-blue" size={28} />
              <span className="text-xl font-semibold font-poppins">Ahmad</span>
            </div>
            <p className="text-text-secondary mb-4">
              Software developer specializing in creating beautiful, functional,
              and user-friendly applications.
            </p>
            <p className="text-text-secondary">
              Building digital experiences that make a difference.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.to}
                    smooth={true}
                    duration={500}
                    offset={-80}
                    className="text-text-secondary hover:text-accent-blue transition-colors cursor-pointer"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <p className="text-text-secondary mb-2">ahmadfzn2005@gmail.com</p>
            <p className="text-text-secondary mb-2">+62 878-4677-5109</p>
            <p className="text-text-secondary">Tasikmalaya, Indonesia</p>
          </div>
        </div>

        <div className="border-t border-background-tertiary pt-8 text-center">
          <p className="text-text-secondary flex items-center justify-center gap-2">
            © {currentYear} Ahmad. All Rights Reserved. Built with
            <Heart
              size={16}
              className="text-accent-purple"
              fill="currentColor"
            />
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
