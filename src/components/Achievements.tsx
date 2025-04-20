
import { motion } from "framer-motion";
import { achievements, certifications } from "@/lib/data";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Achievements = () => {
  return (
    <section id="achievements" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Achievements & Certifications</h2>
          <div className="h-1 w-20 bg-primary mx-auto mb-8"></div>
          <p className="text-lg text-foreground/80">
            Recognition and accreditations I've earned along my journey.
          </p>
        </motion.div>
        
        <div className="max-w-4xl mx-auto">
          <Tabs defaultValue="achievements" className="w-full">
            <TabsList className="grid w-full grid-cols-2 mb-8">
              <TabsTrigger value="achievements">Achievements</TabsTrigger>
              <TabsTrigger value="certifications">Certifications</TabsTrigger>
            </TabsList>
            
            <TabsContent value="achievements">
              <div className="space-y-6">
                {achievements.map((achievement, index) => (
                  <motion.div
                    key={achievement.title}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <Card className="glassmorphism overflow-hidden hover:shadow-glow transition-all duration-300">
                      <div className="h-2 bg-gradient-to-r from-primary to-accent"></div>
                      <CardHeader>
                        <CardTitle className="text-xl">
                          {achievement.title}
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-foreground/80">
                          {achievement.description}
                        </p>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="certifications">
              <div className="space-y-6">
                {certifications.map((certification, index) => (
                  <motion.div
                    key={certification.title}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <Card className="glassmorphism overflow-hidden hover:shadow-glow transition-all duration-300">
                      <div className="h-2 bg-gradient-to-r from-accent to-primary"></div>
                      <CardHeader>
                        <CardTitle className="text-xl">
                          {certification.title}
                        </CardTitle>
                        <CardDescription>
                          {certification.provider}
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="bg-secondary/50 rounded-full px-3 py-1 inline-block text-sm">
                          Score: {certification.score}
                        </div>
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

export default Achievements;
