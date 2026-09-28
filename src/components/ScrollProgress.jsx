import { motion, useScroll, useTransform } from "framer-motion";

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const progressWidth = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <motion.div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        height: 2,
        width: progressWidth,
        background: "linear-gradient(90deg, #00f5ff, #7c3aed)",
        zIndex: 100,
        boxShadow: "0 0 10px rgba(0,245,255,0.5)",
        transformOrigin: "left",
      }}
    />
  );
}
