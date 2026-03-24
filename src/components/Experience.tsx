
import { motion } from "framer-motion";
import { achievements, experiences, positions } from "@/lib/data";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import SpotlightCard from "./SpotlightCard";

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
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Experience & Achievements</h2>
          <div className="h-1 w-20 bg-primary mx-auto mb-8"></div>
          <p className="text-lg text-foreground/80">
            My professional journey and leadership roles.
          </p>
        </motion.div>

        <div className="max-w-7xl mx-auto">
          <Tabs defaultValue="experience" className="w-full">
            <TabsList className="grid w-full grid-cols-1 sm:grid-cols-3 mb-6 sm:mb-8">
              <TabsTrigger value="experience">Professional Experience</TabsTrigger>
              <TabsTrigger value="positions">Leadership Positions</TabsTrigger>
              <TabsTrigger value="achievements">Achievements</TabsTrigger>
            </TabsList>

            <TabsContent value="experience" className="mt-0">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
                {experiences.map((experience, index) => (
                  <motion.div
                    key={`${experience.company}-${index}`}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="flex"
                  >
                    <SpotlightCard className="custom-spotlight-card" spotlightColor="rgba(0, 204, 255, 0.15)">
                      <CardHeader className="pb-4">
                        <div className="flex justify-between items-start gap-4">
                          <div className="flex-1">
                            <CardTitle className="text-xl mb-2">{experience.title}</CardTitle>
                            <CardDescription className="text-base text-muted-foreground">
                              {experience.company}
                            </CardDescription>
                          </div>
                          <div className="text-sm text-muted-foreground px-3 py-1 rounded-full border whitespace-nowrap">
                            {experience.period}
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent className="flex-1 pt-0">
                        <ul className="space-y-3">
                          {experience.description.map((desc, i) => (
                            <li key={i} className="text-foreground/80 leading-relaxed flex items-start">
                              <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                              <span>{desc}</span>
                            </li>
                          ))}
                        </ul>
                      </CardContent>
                    </SpotlightCard>
                  </motion.div>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="positions" className="mt-0">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
                {positions.map((position, index) => (
                  <motion.div
                    key={`${position.organization}-${index}`}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="flex"
                  >
                    <SpotlightCard spotlightColor="rgba(0, 204, 255, 0.15)" className="glassmorphism overflow-hidden flex-1 flex flex-col">
                      <CardHeader className="pb-4">
                        <div className="flex justify-between items-start gap-4">
                          <div className="flex-1">
                            <CardTitle className="text-xl mb-2">{position.title}</CardTitle>
                            <CardDescription className="text-base text-muted-foreground">
                              {position.organization}
                            </CardDescription>
                          </div>
                          <div className="text-sm text-muted-foreground px-3 py-1 rounded-full border whitespace-nowrap">
                            {position.period}
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent className="flex-1 pt-0">
                        <ul className="space-y-3">
                          {position.description.map((desc, i) => (
                            <li key={i} className="text-foreground/80 leading-relaxed flex items-start">
                              <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                              <span>{desc}</span>
                            </li>
                          ))}
                        </ul>
                      </CardContent>
                    </SpotlightCard>
                  </motion.div>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="achievements" className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {achievements.map((achievement, index) => (
                  <motion.div
                    key={`${index}`}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="flex"
                  >
                    <SpotlightCard spotlightColor="rgba(0, 204, 255, 0.15)" className="glassmorphism overflow-hidden flex-1 flex flex-col">
                      <CardHeader className="pb-4">
                        <div className="flex justify-between items-start gap-4">
                          <div className="flex-1">
                            <CardTitle className="text-xl mb-2">{achievement.title}</CardTitle>
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent className="flex-1 pt-0">
                        <ul className="space-y-3">
                          {achievement.description}
                        </ul>
                      </CardContent>
                    </SpotlightCard>
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
