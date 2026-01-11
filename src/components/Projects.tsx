
import { motion, AnimatePresence } from "framer-motion";
import { projects } from "@/lib/data";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink, ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useMemo } from "react";

type ProjectCategory = "Full-Stack" | "AI";

const Projects = () => {
  const [activeTab, setActiveTab] = useState<ProjectCategory>("Full-Stack");
  const [currentIndex, setCurrentIndex] = useState(0);

  // Filter projects based on active tab
  const filteredProjects = useMemo(() => {
    return projects.filter((project) => project.category === activeTab);
  }, [activeTab]);

  // Reset index when switching tabs
  const handleTabChange = (tab: ProjectCategory) => {
    setActiveTab(tab);
    setCurrentIndex(0);
  };

  // Navigation handlers
  const handlePrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? filteredProjects.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === filteredProjects.length - 1 ? 0 : prev + 1));
  };

  const currentProject = filteredProjects[currentIndex];

  return (
    <section id="projects" className="py-20 relative">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Projects</h2>
          <div className="h-1 w-20 bg-primary mx-auto mb-8"></div>
          <p className="text-lg text-foreground/80">
            A selection of my most recent and notable projects.
          </p>
        </motion.div>

        {/* Tabs */}
        <div className="flex justify-center gap-4 mb-12">
          <Button
            variant={activeTab === "Full-Stack" ? "default" : "outline"}
            onClick={() => handleTabChange("Full-Stack")}
            className="px-8 py-6 text-lg font-semibold transition-all"
          >
            Full-Stack
          </Button>
          <Button
            variant={activeTab === "AI" ? "default" : "outline"}
            onClick={() => handleTabChange("AI")}
            className="px-8 py-6 text-lg font-semibold transition-all"
          >
            AI
          </Button>
        </div>

        {/* Project Carousel */}
        {currentProject && (
          <div className="max-w-7xl mx-auto relative">
            {/* Left Arrow */}
            <Button
              variant="ghost"
              size="icon"
              onClick={handlePrevious}
              className="hidden lg:flex absolute left-0 top-1/2 -translate-y-1/2 -translate-x-16 z-10 h-12 w-12 rounded-full bg-background/80 backdrop-blur-sm border border-border hover:bg-primary/10 hover:border-primary/50 transition-all"
            >
              <ChevronLeft className="h-6 w-6" />
            </Button>

            {/* Right Arrow */}
            <Button
              variant="ghost"
              size="icon"
              onClick={handleNext}
              className="hidden lg:flex absolute right-0 top-1/2 -translate-y-1/2 translate-x-16 z-10 h-12 w-12 rounded-full bg-background/80 backdrop-blur-sm border border-border hover:bg-primary/10 hover:border-primary/50 transition-all"
            >
              <ChevronRight className="h-6 w-6" />
            </Button>

            <AnimatePresence mode="wait">
              <motion.div
                key={`${activeTab}-${currentIndex}`}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center"
              >
                {/* Left Column - Image/Visual */}
                <div className="relative rounded-2xl overflow-hidden bg-gradient-to-br from-primary/20 via-primary/10 to-transparent p-1">
                  <div className="bg-card rounded-xl overflow-hidden">
                    <div className="aspect-video bg-gradient-to-br from-primary/30 to-primary/10 flex items-center justify-center relative">
                      {currentProject.image ? (
                        <img
                          src={currentProject.image}
                          alt={currentProject.title}
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        <div className="text-center p-8">
                          <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-primary/20 flex items-center justify-center">
                            <Github className="w-10 h-10 text-primary" />
                          </div>
                          <h3 className="text-2xl font-bold text-foreground">
                            {currentProject.title}
                          </h3>
                        </div>
                      )}
                    </div>
                  </div>
                </div>

                {/* Right Column - Details */}
                <div className="space-y-6">
                  <div>
                    <h3 className="text-3xl md:text-4xl font-bold mb-4">
                      {currentProject.title}
                    </h3>
                    <p className="text-foreground/70 text-lg leading-relaxed">
                      {currentProject.description}
                    </p>
                  </div>

                  {/* Tech Stack */}
                  <div>
                    <h4 className="text-sm font-semibold text-foreground/60 mb-3 uppercase tracking-wider">
                      Tech Stack
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {currentProject.skills.map((skill) => (
                        <Badge
                          key={skill}
                          variant="secondary"
                          className="bg-primary/10 text-primary hover:bg-primary/20 px-3 py-1"
                        >
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Links */}
                  <div className="flex gap-4 pt-4">
                    {currentProject.repoLink && (
                      <a
                        href={currentProject.repoLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1"
                      >
                        <Button variant="outline" className="w-full gap-2">
                          <Github className="h-4 w-4" />
                          <span>Repository</span>
                        </Button>
                      </a>
                    )}
                    {currentProject.demoLink && (
                      <a
                        href={currentProject.demoLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1"
                      >
                        <Button className="w-full gap-2">
                          <ExternalLink className="h-4 w-4" />
                          <span>Live Demo</span>
                        </Button>
                      </a>
                    )}
                  </div>

                  {/* Project Counter - Mobile Navigation */}
                  <div className="flex items-center justify-between pt-6 border-t border-border/50">
                    <div className="text-sm text-foreground/60">
                      Project {currentIndex + 1} of {filteredProjects.length}
                    </div>
                    {/* Mobile Navigation Buttons */}
                    <div className="flex gap-2 lg:hidden">
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={handlePrevious}
                        className="hover:bg-primary/10"
                      >
                        <ChevronLeft className="h-5 w-5" />
                      </Button>
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={handleNext}
                        className="hover:bg-primary/10"
                      >
                        <ChevronRight className="h-5 w-5" />
                      </Button>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;
