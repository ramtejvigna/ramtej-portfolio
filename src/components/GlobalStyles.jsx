import { useEffect } from "react";

export default function GlobalStyles() {
  useEffect(() => {
    const style = document.createElement("style");
    style.textContent = `
      @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500;700&family=Inter:wght@400;500;600&display=swap');

      html { scroll-behavior: smooth; }

      * { box-sizing: border-box; }

      body { margin: 0; background: #050810; color: #f0f4ff; font-family: 'Inter', sans-serif; }

      ::-webkit-scrollbar { width: 5px; }
      ::-webkit-scrollbar-track { background: #050810; }
      ::-webkit-scrollbar-thumb { background: #00f5ff44; border-radius: 10px; }

      @keyframes shimmer {
        0%   { background-position: -200% center; }
        100% { background-position:  200% center; }
      }
      @keyframes bounce-arrow {
        0%, 100% { transform: translateY(0); }
        50%       { transform: translateY(10px); }
      }
      @keyframes grid-fade {
        0%   { opacity: 0.03; }
        100% { opacity: 0.06; }
      }
      .shimmer-border {
        background: linear-gradient(90deg, #00f5ff33, #7c3aed88, #00f5ff33);
        background-size: 200%;
        animation: shimmer 2.8s linear infinite;
      }
      .bounce-arrow { animation: bounce-arrow 1.8s ease-in-out infinite; }

      @keyframes pulse {
        0%, 100% { opacity: 1; }
        50%       { opacity: 0.35; }
      }
      @keyframes lc-glow-pulse {
        0%, 100% { box-shadow: 0 0 24px rgba(255,161,22,0.12), 0 8px 40px rgba(0,0,0,0.55); }
        50%       { box-shadow: 0 0 52px rgba(255,161,22,0.26), 0 8px 40px rgba(0,0,0,0.55); }
      }
      @keyframes gh-glow-pulse {
        0%, 100% { box-shadow: 0 0 20px rgba(226,232,240,0.06), 0 8px 40px rgba(0,0,0,0.55); }
        50%       { box-shadow: 0 0 42px rgba(226,232,240,0.13), 0 8px 40px rgba(0,0,0,0.55); }
      }
      .lc-glow { animation: lc-glow-pulse 3.2s ease-in-out infinite; }
      .gh-glow { animation: gh-glow-pulse 4s   ease-in-out infinite; }
      .dsa-skeleton { animation: pulse 1.8s ease-in-out infinite; }
    `;
    document.head.appendChild(style);
    return () => document.head.removeChild(style);
  }, []);

  return null;
}
