
import { motion } from "framer-motion";
import { skills } from "@/lib/data";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ScrollVelocity from "./ScrollVelocity"

const Skills = () => {
  // Function to shuffle array for randomization
  const shuffleArray = <T,>(array: T[]): T[] => {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
  };

  // Create 4 rows of skills with different groupings
  const skillsPerRow = Math.ceil(skills.length / 4);
  const shuffledSkills = shuffleArray(skills);
  
  const skillRows = [
    shuffledSkills.slice(0, skillsPerRow),
    shuffledSkills.slice(skillsPerRow, skillsPerRow * 2), 
    shuffledSkills.slice(skillsPerRow * 2, skillsPerRow * 3),
    shuffledSkills.slice(skillsPerRow * 3)
  ].filter(row => row.length > 0); // Remove empty rows

  return (
    <section id="skills" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Skills</h2>
          <div className="h-1 w-20 bg-primary mx-auto mb-8"></div>
          <p className="text-lg text-foreground/80">
            My technical skills and proficiency levels.
          </p>
        </motion.div>

        <div className="max-w-7xl mx-auto">
          <ScrollVelocity 
            skillRows={skillRows}
            velocity={100}
            className="skill-icons-scroller" 
            scrollContainerRef={undefined} 
            parallaxStyle={{
              padding: '2rem 0',
            }} 
            scrollerStyle={undefined}          
          />
        </div>
      </div>
    </section>
  );
};

export default Skills;
