import { motion } from "framer-motion";
import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { X, Download, Eye, FileText } from "lucide-react";

const Resume = () => {
  const [showResume, setShowResume] = useState(false);

  return (
    <section id="resume" className="pt-4 w-full sm:pt-6 lg:pt-8 pb-12 sm:pb-16 lg:pb-20 relative">
      <div className="container mx-auto px-3 sm:px-4 lg:px-6">

        <div className="mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-col gap-4 sm:gap-6 items-center justify-center"
          >
            {/* Resume Preview Card */}
            <motion.div 
              className="bg-card border rounded-lg shadow-lg w-full max-w-4xl overflow-hidden cursor-pointer"
              whileTap={{ scale: 0.98 }}
              onClick={() => setShowResume(true)}
            >
              <div className="bg-primary p-3 sm:p-4 text-primary-foreground">
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 sm:gap-2">
                  <h3 className="text-lg sm:text-xl font-semibold flex items-center gap-2">
                    <FileText className="w-4 h-4 sm:w-5 sm:h-5" /> My Resume
                  </h3>
                  <div className="flex items-center gap-2 w-full sm:w-auto">
                    <Badge variant="secondary" className="text-xs">PDF</Badge>
                    <button 
                      onClick={() => setShowResume(true)}
                      className="text-primary-foreground px-3 sm:px-4 py-2 rounded-lg flex-1 sm:flex-none flex items-center justify-center gap-2 hover:bg-primary/90 transition-colors text-sm sm:text-base"
                    >
                      <Eye size={16} className="sm:w-4 sm:h-4" /> View Resume
                    </button>
                  </div>
                </div>
              </div>
              <div className="p-3 sm:p-4 lg:p-6">
                {/* Resume preview thumbnail */}
                <div className="bg-muted/30 border rounded overflow-hidden">
                  <img 
                    src="/resume-thumbnail.jpg" 
                    alt="Resume Preview" 
                    loading="lazy"
                    className="w-full h-48 sm:h-64 lg:h-80 object-cover"
                    onError={(e) => {
                      (e.target as HTMLImageElement).onerror = null;
                      (e.target as HTMLImageElement).src = "resume_1.png"; // Fallback placeholder
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
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-2 sm:p-4"
        >
          <motion.div
            initial={{ scale: 0.9, y: 20 }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0.9, y: 20 }}
            className="bg-card rounded-lg shadow-xl w-full max-w-6xl max-h-[95vh] sm:max-h-[90vh] flex flex-col"
          >
            <div className="flex items-center justify-between p-3 sm:p-4 border-b">
              <h3 className="font-bold text-lg sm:text-xl flex items-center gap-2">
                <FileText size={18} className="sm:w-5 sm:h-5" /> My Resume
              </h3>
              <div className="flex items-center gap-1 sm:gap-2">
                <motion.a
                  href="VRT_Resume.pdf" 
                  download
                  className="bg-primary/10 hover:bg-primary/20 text-primary p-2 rounded-full"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Download size={16} className="sm:w-5 sm:h-5" />
                </motion.a>
                <motion.button
                  onClick={() => setShowResume(false)}
                  className="bg-muted/20 hover:bg-muted/30 p-2 rounded-full"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <X size={16} className="sm:w-5 sm:h-5" />
                </motion.button>
              </div>
            </div>
            <div className="flex-1 overflow-auto p-2 sm:p-4">
              {/* PDF Viewer - Uses iframe to display the PDF */}
              <div className="w-full h-full bg-background rounded">
                <iframe
                  src="VRT_Resume.pdf"
                  className="w-full h-[70vh] sm:h-[60vh] lg:h-[70vh] rounded border border-border"
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