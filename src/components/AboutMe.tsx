
import { motion } from "framer-motion";
import { education, personalInfo } from "@/lib/data";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const AboutMe = () => {
  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
          <div className="h-1 w-20 bg-primary mx-auto mb-8"></div>
          <p className="text-lg text-foreground/80">
            I'm a B.Tech student specializing in Artificial Intelligence and Data Science with a 
            passion for building full-stack applications and exploring cutting-edge technologies.
          </p>
        </motion.div>
        
        <div className="max-w-4xl mx-auto">
          <Tabs defaultValue="education" className="w-full">
            <TabsList className="grid w-full grid-cols-2 mb-8">
              <TabsTrigger value="education">Education</TabsTrigger>
              <TabsTrigger value="personal">Personal Details</TabsTrigger>
            </TabsList>
            
            <TabsContent value="education">
              <Card className="glassmorphism">
                <CardHeader>
                  <CardTitle>Education</CardTitle>
                  <CardDescription>My academic journey</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h3 className="font-bold text-xl">{education.degree}</h3>
                      <p className="text-foreground/70">{education.institution}, {education.location}</p>
                      <div className="flex justify-between items-center mt-2">
                        <p className="text-sm text-muted-foreground">{education.period}</p>
                        <Badge variant="secondary">CGPA: {education.cgpa}</Badge>
                      </div>
                    </div>
                    
                    <div>
                      <p className="font-medium mb-2">Relevant Coursework:</p>
                      <div className="flex flex-wrap gap-2">
                        {education.courses.map((course) => (
                          <Badge key={course} variant="outline">
                            {course}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="personal">
              <Card className="glassmorphism">
                <CardHeader>
                  <CardTitle>Personal Details</CardTitle>
                  <CardDescription>Get to know me better</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Full Name</p>
                    <p className="font-medium">{personalInfo.name}</p>
                  </div>
                  
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Email</p>
                    <a 
                      href={`mailto:${personalInfo.email}`}
                      className="font-medium text-primary hover:underline"
                    >
                      {personalInfo.email}
                    </a>
                  </div>
                  
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Phone</p>
                    <a 
                      href={`tel:${personalInfo.phone}`}
                      className="font-medium text-primary hover:underline"
                    >
                      {personalInfo.phone}
                    </a>
                  </div>
                  
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Interests</p>
                    <div className="flex flex-wrap gap-2 mt-1">
                      <Badge>Web Development</Badge>
                      <Badge>AI/ML</Badge>
                      <Badge>Problem Solving</Badge>
                      <Badge>Data Science</Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
