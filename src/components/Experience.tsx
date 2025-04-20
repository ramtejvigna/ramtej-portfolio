
import { motion } from "framer-motion";
import { experiences, positions } from "@/lib/data";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Experience = () => {
  return (
    <section id="experience" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Experience & Roles</h2>
          <div className="h-1 w-20 bg-primary mx-auto mb-8"></div>
          <p className="text-lg text-foreground/80">
            My professional journey and leadership roles.
          </p>
        </motion.div>
        
        <div className="max-w-4xl mx-auto">
          <Tabs defaultValue="experience" className="w-full">
            <TabsList className="grid w-full grid-cols-2 mb-8">
              <TabsTrigger value="experience">Work Experience</TabsTrigger>
              <TabsTrigger value="positions">Positions</TabsTrigger>
            </TabsList>
            
            <TabsContent value="experience">
              <div className="space-y-8">
                {experiences.map((experience, index) => (
                  <motion.div
                    key={`${experience.company}-${index}`}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <Card className="glassmorphism overflow-hidden">
                      <div className="h-2 bg-gradient-to-r from-primary to-accent"></div>
                      <CardHeader>
                        <div className="flex justify-between items-start flex-wrap gap-2">
                          <div>
                            <CardTitle>{experience.title}</CardTitle>
                            <CardDescription>{experience.company}</CardDescription>
                          </div>
                          <div className="text-sm text-muted-foreground px-3 py-1 rounded-full border">
                            {experience.period}
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <ul className="space-y-2 ml-6 list-disc">
                          {experience.description.map((desc, i) => (
                            <li key={i} className="text-foreground/80">
                              {desc}
                            </li>
                          ))}
                        </ul>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="positions">
              <div className="space-y-8">
                {positions.map((position, index) => (
                  <motion.div
                    key={`${position.organization}-${index}`}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <Card className="glassmorphism overflow-hidden">
                      <div className="h-2 bg-gradient-to-r from-accent to-primary"></div>
                      <CardHeader>
                        <div className="flex justify-between items-start flex-wrap gap-2">
                          <div>
                            <CardTitle>{position.title}</CardTitle>
                            <CardDescription>{position.organization}</CardDescription>
                          </div>
                          <div className="text-sm text-muted-foreground px-3 py-1 rounded-full border">
                            {position.period}
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <ul className="space-y-2 ml-6 list-disc">
                          {position.description.map((desc, i) => (
                            <li key={i} className="text-foreground/80">
                              {desc}
                            </li>
                          ))}
                        </ul>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </section>
  );
};

export default Experience;
