
import { motion } from "framer-motion";
import { personalInfo, socialLinks } from "@/lib/data";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Code } from "lucide-react";
import TextType from "./ui/TextType";
import ShinyText from "./ShinyText";
import LightRays from "./LightRays";

const Hero = () => {
  const iconComponents = {
    github: Github,
    linkedin: Linkedin,
    code: Code,
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center py-32 overflow-hidden">
      {/* Light rays background - positioned absolutely at the top */}
      <LightRays
        raysOrigin="top-center"
        raysColor="#00ffff"
        raysSpeed={1.5}
        lightSpread={0.8}
        rayLength={1.2}
        followMouse={true}
        mouseInfluence={0.1}
        noiseAmount={0.1}
        distortion={0.05}
        className="absolute inset-0"
      />
      
      {/* Content container - positioned relatively to stay above background */}
      <div className="container mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-8 sm:py-12 relative z-10">
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
            <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-bold leading-tight">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
                {personalInfo.name.split(" ")[0]} {personalInfo.name.split(" ")[1]}
              </span>
            </h1>
          </motion.div>

          {/* Typing effect */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-lg sm:text-xl md:text-2xl lg:text-3xl min-h-[2rem] sm:min-h-[2.5rem] flex items-center justify-center"
          >
            <TextType
              text={personalInfo.tagline}
              typingSpeed={85}
              pauseDuration={1500}
              showCursor={true}
              cursorCharacter=""
              variableSpeed={undefined}
              onSentenceComplete={undefined}
              textColors={['hsl(var(--primary))']}
              cursorClassName="text-primary"
            />
          </motion.div>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground mb-6 sm:mb-8 max-w-3xl mx-auto px-2">
            <ShinyText
              text={"I'm passionate about building modern web applications, AI systems, and solving real-world problems through technology."}
              disabled={false}
              speed={3}
            />
          </p>
          {/* Social links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex justify-center space-x-4 sm:space-x-6"
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
            className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4 px-4"
          >
            <motion.a
              href="#projects"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button size="lg" className="bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 shadow-glow hover:shadow-glow-md transition-all duration-300 w-full sm:w-auto px-6 sm:px-8 py-3">
                View Projects
              </Button>
            </motion.a>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary/10 hover:shadow-glow transition-all duration-300 w-full sm:w-auto px-6 sm:px-8 py-3">
                Get In Touch
              </Button>
            </motion.a>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-20">
        <a href="#about" aria-label="Scroll down">
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="text-primary hover:text-secondary transition-colors duration-300"
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
