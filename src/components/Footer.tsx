
import { personalInfo, socialLinks } from "@/lib/data";
import { Github, Linkedin, Code } from "lucide-react";

const Footer = () => {
  const iconComponents = {
    github: Github,
    linkedin: Linkedin,
    code: Code,
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-10 bg-foreground/5">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center">
          <div className="text-2xl font-bold mb-4 text-primary">
            Vigna Ramtej
          </div>
          
          <div className="flex space-x-4 mb-6">
            {socialLinks.map((link) => {
              const IconComponent = iconComponents[link.icon as keyof typeof iconComponents];
              return (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="tech-icon hover:shadow-glow-md transition-all duration-300"
                  aria-label={link.name}
                >
                  <IconComponent className="h-5 w-5" />
                </a>
              );
            })}
          </div>
          
          <div className="text-center text-sm text-foreground/60 max-w-lg">
            <p className="mb-3">
              {personalInfo.tagline}
            </p>
            
            <nav className="mb-6">
              <ul className="flex flex-wrap justify-center gap-4">
                <li><a href="#home" className="hover:text-primary transition-colors">Home</a></li>
                <li><a href="#about" className="hover:text-primary transition-colors">About</a></li>
                <li><a href="#experience" className="hover:text-primary transition-colors">Experience</a></li>
                <li><a href="#projects" className="hover:text-primary transition-colors">Projects</a></li>
                <li><a href="#skills" className="hover:text-primary transition-colors">Skills</a></li>
                <li><a href="#contact" className="hover:text-primary transition-colors">Contact</a></li>
              </ul>
            </nav>
            
            <p className="text-xs">
              &copy; {currentYear} Vigna Ramtej Telagarapu. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
