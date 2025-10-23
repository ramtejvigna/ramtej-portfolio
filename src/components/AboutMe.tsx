import { motion } from "framer-motion";
import { CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import SpotlightCard from "./SpotlightCard";
import Resume from "./resume";

const AboutMe = () => {
  return (
    <section id="about" className="py-12 sm:py-16 lg:py-20 relative">
      <div className="container mx-auto px-3 sm:px-4 lg:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="w-full mx-auto text-center mb-8 sm:mb-10 lg:mb-12"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4">About Me</h2>
          <div className="h-1 w-16 sm:w-20 bg-primary mx-auto mb-6 sm:mb-8"></div>
        </motion.div>

        <div className="mx-auto">
          <Tabs defaultValue="personal" className="w-full flex flex-col items-center">
            <TabsList className="grid w-full grid-cols-2 mb-4 sm:mb-6 lg:mb-8 max-w-xs sm:max-w-sm md:max-w-md mx-auto">
              <TabsTrigger value="personal" className="text-xs sm:text-sm px-2 sm:px-4">Personal</TabsTrigger>
              <TabsTrigger value="resume" className="text-xs sm:text-sm px-2 sm:px-4">Resume</TabsTrigger>
            </TabsList>

            <TabsContent value="personal" className="w-full">
              <SpotlightCard className="w-full mx-auto" spotlightColor="rgba(0, 204, 255, 0.15)">
                <CardContent className="p-4 sm:p-6 lg:p-8">
                  <div className="space-y-4 sm:space-y-6">
                    <div className="flex flex-col items-center text-center">
                      <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-primary mb-3 sm:mb-4">
                        Hi, I'm Ramtej! 👋
                      </h3>
                      <div className="text-sm sm:text-base lg:text-lg text-foreground/80 leading-relaxed space-y-3 sm:space-y-4 max-w-4xl">
                        <p className="px-2 sm:px-4">
                          I'm a results-driven <strong className="text-primary">AI and Full Stack Developer</strong> passionate about building intelligent, scalable, and high-performance solutions that solve real-world problems. With strong expertise in Java, Python, React, and Node.js, I deliver <strong className="text-primary">end-to-end systems</strong> that combine sleek user interfaces with powerful data-driven backends.
                        </p>
                        <p className="px-2 sm:px-4">
                          My work blends creativity with technical precision — from crafting seamless web experiences to deploying <strong className="text-primary">Machine Learning</strong> models that drive actionable insights. Having excelled in national hackathons and contributed to multiple full-stack and AI-driven projects, I bring hands-on experience, problem-solving ability, and a commitment to excellence to every collaboration.
                        </p>
                        <p className="px-2 sm:px-4">
                          I take pride in understanding client needs deeply, communicating clearly, and delivering solutions that are not just functional — but <strong>impactful</strong>, <strong>efficient</strong>, and <strong>future-ready</strong>.
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </SpotlightCard>
            </TabsContent>

            <TabsContent value="resume" className="w-full">
              <Resume />
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;