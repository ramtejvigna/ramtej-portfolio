import { motion } from "framer-motion";
import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { X, Download, Eye, FileText } from "lucide-react";

const Resume = () => {
  const [showResume, setShowResume] = useState(false);

  return (
    <section id="resume" className="py-20 relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Resume</h2>
          <div className="h-1 w-20 bg-primary mx-auto mb-8"></div>
          <p className="text-lg text-foreground/80">
            My professional experience and qualifications. Click on the resume preview to view the full document.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-col md:flex-row gap-6 items-center"
          >
            {/* Resume Preview Card */}
            <motion.div 
              className="bg-card border rounded-lg shadow-lg w-full overflow-hidden cursor-pointer"
              whileTap={{ scale: 0.98 }}
              onClick={() => setShowResume(true)}
            >
              <div className="bg-primary p-4 text-primary-foreground flex justify-between items-center">
                <h3 className="text-xl font-semibold flex items-center gap-2">
                  <FileText className="w-5 h-5" /> My Resume
                </h3>
                <div className="flex items-center gap-2">
                    <Badge variant="secondary" className="text-xs">PDF</Badge>
                    <div>
                        <button 
                        onClick={() => setShowResume(true)}
                        className="text-primary-foreground px-4 py-2 rounded-lg w-full flex items-center justify-center gap-2 hover:bg-primary/90 transition-colors"
                        >
                        <Eye size={18} /> View Resume
                        </button>
                    </div>
                </div>
              </div>
              <div className="pt-6">
                {/* Resume preview thumbnail */}
                <div className="bg-muted/30 border rounded mb-4 overflow-hidden">
                  <img 
                    src="/resume-thumbnail.jpg" 
                    alt="Resume Preview" 
                    className="w-full h-auto object-cover"
                    onError={(e) => {
                      (e.target as HTMLImageElement).onerror = null;
                      (e.target as HTMLImageElement).src = "image.png"; // Fallback placeholder
                    }}
                  />
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Resume Viewer Modal */}
      {showResume && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
        >
          <motion.div
            initial={{ scale: 0.9, y: 20 }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0.9, y: 20 }}
            className="bg-card rounded-lg shadow-xl w-full max-w-5xl max-h-[90vh] flex flex-col"
          >
            <div className="flex items-center justify-between p-4 border-b">
              <h3 className="font-bold text-xl flex items-center gap-2">
                <FileText size={20} /> My Resume
              </h3>
              <div className="flex items-center gap-2">
                <motion.a
                  href="Resum11.pdf" 
                  download
                  className="bg-primary/10 hover:bg-primary/20 text-primary p-2 rounded-full"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Download size={20} />
                </motion.a>
                <motion.button
                  onClick={() => setShowResume(false)}
                  className="bg-muted/20 hover:bg-muted/30 p-2 rounded-full"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <X size={20} />
                </motion.button>
              </div>
            </div>
            <div className="flex-1 overflow-auto p-4">
              {/* PDF Viewer - Uses iframe to display the PDF */}
              <div className="w-full h-full min-h-[50rem] bg-white rounded">
                <iframe
                  src="Resum11.pdf"
                  className="w-full h-[50rem] rounded border"
                  title="Resume PDF"
                ></iframe>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </section>
  );
};

export default Resume;