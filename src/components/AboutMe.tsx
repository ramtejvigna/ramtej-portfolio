import { motion } from "framer-motion";
import { education, personalInfo } from "@/lib/data";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import SpotlightCard from "./SpotlightCard";
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
        </motion.div>

        <div className="mx-auto">
          <Tabs defaultValue="personal" className="w-full flex flex-col items-center">
            <TabsList className="grid w-full grid-cols-2 mb-8 max-w-4xl">
              <TabsTrigger value="personal">Personal Details</TabsTrigger>
              <TabsTrigger value="resume">Resume</TabsTrigger>
            </TabsList>

            <TabsContent value="personal">
              <SpotlightCard className="custom-spotlight-card mx-28" spotlightColor="rgba(0, 204, 255, 0.15)">
                <CardContent>
                  <div className="py-4 space-y-6">
                    <div className="flex flex-col items-center">
                      <h3 className="text-4xl font-bold text-primary mb-4">Hi, I'm Ramtej! 👋</h3>
                      <p className="text-lg text-foreground/70 leading-relaxed flex flex-col text-center items-center gap-4 p-4 px-16">
                        <span>I'm a results-driven <strong className="text-primary">AI and Full Stack Developer</strong> passionate about building intelligent, scalable, and high-performance solutions that solve real-world problems. With strong expertise in Java, Python, React, and Node.js, I deliver <strong className="text-primary">end-to-end systems</strong> that combine sleek user interfaces with powerful data-driven backends.</span>
                        <span>My work blends creativity with technical precision — from crafting seamless web experiences to deploying <strong className="text-primary">Machine Learning</strong> models that drive actionable insights. Having excelled in national hackathons and contributed to multiple full-stack and AI-driven projects, I bring hands-on experience, problem-solving ability, and a commitment to excellence to every collaboration.</span>
                        <span>I take pride in understanding client needs deeply, communicating clearly, and delivering solutions that are not just functional — but <strong>impactful</strong>, <strong>efficient</strong>, and <strong>future-ready</strong>.</span>
                      </p>
                    </div>
                  </div>
                </CardContent>
              </SpotlightCard>
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