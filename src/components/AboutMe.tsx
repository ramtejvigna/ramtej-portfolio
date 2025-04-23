import { motion } from "framer-motion";
import { education, personalInfo } from "@/lib/data";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Resume from "./resume";

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
        
        <div className="mx-auto">
          <Tabs defaultValue="education" className="w-full flex flex-col items-center">
            <TabsList className="grid w-full grid-cols-3 mb-8 max-w-4xl">
              <TabsTrigger value="education">Education</TabsTrigger>
              <TabsTrigger value="personal">Personal Details</TabsTrigger>
              <TabsTrigger value="resume">Resume</TabsTrigger>
            </TabsList>
            
            <TabsContent value="education" className="flex flex-col md:flex-row items-center justify-evenly w-full">
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
              <div className="mt-8">
                <img src="Me.jpg" alt="Ram" className="rounded-lg shadow-lg w-80" />
              </div>
            </TabsContent>
            
            <TabsContent value="personal">
              <Card className="glassmorphism">
                <CardHeader>
                  <CardTitle>Personal Details</CardTitle>
                  <CardDescription>Get to know me better</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <p className="font-medium">
                        I'm currently pursuing my undergraduate degree in Artificial Intelligence and Data Science at SRKR Engineering College.
                      </p>
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
                      <p className="text-sm text-muted-foreground mb-1">Technical Skills</p>
                      <div className="flex flex-wrap gap-2 mb-2">
                        <Badge>Java</Badge>
                        <Badge>Python</Badge>
                        <Badge>Full Stack</Badge>
                        <Badge>Data Structures</Badge>
                        <Badge>DBMS</Badge>
                        <Badge>Machine Learning</Badge>
                      </div>
                    </div>
                    
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">Achievements</p>
                      <ul className="list-disc pl-5 space-y-1">
                        <li>3rd place in Hackoverflow 2k24 (National Hackathon)</li>
                        <li>Junior Best Team award in SIH-2023 Internal Hackathon</li>
                        <li>Completed 350+ coding problems across platforms</li>
                        <li>Technical team member for workshops and hackathons</li>
                      </ul>
                    </div>
                    
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">About Me</p>
                      <p>
                        I'm passionate about working with new technologies and dedicated to continuous learning. 
                        I enjoy teaching web technologies and helping others develop their skills. 
                        My experience includes mentoring students during hackathons and workshops, which has improved my teaching abilities while allowing me to stay at the cutting edge of technology.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="resume">
              <Resume />
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;