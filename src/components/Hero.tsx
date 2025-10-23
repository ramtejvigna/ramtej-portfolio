
import { motion } from "framer-motion";
import { personalInfo, socialLinks } from "@/lib/data";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Code } from "lucide-react";
import TextType from "./ui/TextType";

const Hero = () => {
  const iconComponents = {
    github: Github,
    linkedin: Linkedin,
    code: Code,
  };

  return (
    <section id="home" className="flex items-center justify-center relative py-32 overflow-hidden px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-4xl px-4 py-12">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center space-y-8"
        >
          {/* Main heading */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h1 className="text-9xl sm:text-5xl md:text-8xl lg:text-8xl font-bold leading-tight">
              <span className="text-transparent bg-clip-text bg-primary">
                {personalInfo.name.split(" ")[0]} {personalInfo.name.split(" ")[1]} 
              </span>
            </h1>
          </motion.div>

          {/* Typing effect */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-5xl sm:text-xl md:text-5xl min-h-[2.5rem] flex items-center justify-center"
          >
            <TextType
              text={personalInfo.tagline}
              typingSpeed={75}
              pauseDuration={1500}
              showCursor={true}
              cursorCharacter="" 
              variableSpeed={undefined} 
              onSentenceComplete={undefined} 
              textColors={['hsl(var(--primary))']}
              cursorClassName="text-primary"
            />
          </motion.div>
          <p className="text-2xl text-muted-foreground mb-8">
            I'm passionate about building modern web applications, AI systems, and solving real-world problems through technology.
          </p>
          {/* Social links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex justify-center space-x-6"
          >
            {socialLinks.map((link, index) => {
              const IconComponent = iconComponents[link.icon as keyof typeof iconComponents];
              return (
                <motion.a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="tech-icon hover:shadow-glow-md hover:scale-110 transition-all duration-300 group"
                  aria-label={link.name}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: 0.7 + index * 0.1 }}
                  whileHover={{ y: -5 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <IconComponent className="h-6 w-6 group-hover:text-primary transition-colors duration-300" />
                </motion.a>
              );
            })}
          </motion.div>

          {/* CTA buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6"
          >
            <motion.a 
              href="#projects"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button size="lg" className="bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 shadow-glow hover:shadow-glow-md transition-all duration-300 w-full sm:w-auto px-8 py-3">
                View Projects
              </Button>
            </motion.a>
            <motion.a 
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary/10 hover:shadow-glow transition-all duration-300 w-full sm:w-auto px-8 py-3">
                Get In Touch
              </Button>
            </motion.a>
          </motion.div>
        </motion.div>
      </div>

      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <a href="#about" aria-label="Scroll down">
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
          >
            <svg width="30" height="30" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12.5 5V20M12.5 20L7 14.5M12.5 20L18 14.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </motion.div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
