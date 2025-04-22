
import { motion } from "framer-motion";
import { skills } from "@/lib/data";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const SkillBar = ({ name, level }: { name: string; level: number }) => {
  return (
    <div className="mb-4">
      <div className="flex justify-between mb-1">
        <span className="font-medium">{name}</span>
        <span className="text-sm text-muted-foreground">{level}%</span>
      </div>
      <div className="h-2 bg-secondary rounded-full overflow-hidden">
        <motion.div
          className="skill-bar h-full"
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.1 }}
        />
      </div>
    </div>
  );
};

const categoryLabels = {
  language: "Programming Languages",
  framework: "Frameworks & Libraries",
  database: "Databases",
  tool: "Tools & Technologies",
  aiml: "AI & Machine Learning",
};

const Skills = () => {
  const categories = Array.from(new Set(skills.map(skill => skill.category)));

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

        <div className="max-w-4xl mx-auto">
          <div>
            <Tabs defaultValue={categories[0]}>
              <TabsList className="grid grid-cols-2 md:grid-cols-5 mb-8">
                {categories.map((category) => (
                  <TabsTrigger key={category} value={category} className="text-sm">
                    {categoryLabels[category as keyof typeof categoryLabels]}
                  </TabsTrigger>
                ))}
              </TabsList>

              {categories.map((category) => (
                <TabsContent key={category} value={category} className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {skills
                      .filter(skill => skill.category === category)
                      .map((skill) => (
                        <SkillBar key={skill.name} name={skill.name} level={skill.level} />
                      ))}
                  </div>
                </TabsContent>
              ))}
            </Tabs>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
