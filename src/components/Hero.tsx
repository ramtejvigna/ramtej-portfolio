
import { motion } from "framer-motion";
import { personalInfo, socialLinks } from "@/lib/data";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Code } from "lucide-react";

const Hero = () => {
  const iconComponents = {
    github: Github,
    linkedin: Linkedin,
    code: Code,
  };

  return (
    <section id="home" className="min-h-screen flex flex-col justify-center relative pt-16 overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-cyan-500/10" />
      </div>
      
      <div className="container mx-auto px-4 py-12 grid lg:grid-cols-2 gap-8 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4">
            Hi, I'm{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
              {personalInfo.name.split(" ")[0] +" " + personalInfo.name.split(" ")[1]}
            </span>
          </h1>
          
          <p className="text-2xl md:text-3xl font-light text-foreground/80 mb-8">
            {personalInfo.tagline}
          </p>
          
          <p className="text-muted-foreground max-w-lg mb-8">
            I'm passionate about building modern web applications, AI systems, and solving real-world problems through technology.
          </p>
          
          <div className="flex space-x-4 mb-8">
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
                  <IconComponent className="h-6 w-6" />
                </a>
              );
            })}
          </div>
          
          <div className="flex flex-wrap gap-4">
            <a href="#projects">
              <Button size="lg" className="bg-primary hover:bg-primary/90">
                View Projects
              </Button>
            </a>
            <a href="#contact">
              <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary/10">
                Get In Touch
              </Button>
            </a>
          </div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="flex justify-center items-center rounded-3xl m-10 shadow-lg overflow-hidden"
        >
          <img src="hero.png" alt="Vigna Ramtej" />
        </motion.div>
      </div>
      
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <a href="#about" aria-label="Scroll down">
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
          >
            <svg width="30" height="30" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12.5 5V20M12.5 20L7 14.5M12.5 20L18 14.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </motion.div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
