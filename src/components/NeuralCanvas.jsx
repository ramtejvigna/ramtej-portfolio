import { useEffect, useRef } from "react";

export default function NeuralCanvas({ explode }) {
  const canvasRef = useRef(null);
  const simRef = useRef({ particles: [], pulses: [], animId: null });
  const explodeRef = useRef(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    const sim = simRef.current;

    function resize() {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    }
    resize();
    window.addEventListener("resize", resize);

    const count = window.innerWidth < 768 ? 60 : 110;
    sim.particles = Array.from({ length: count }, () => {
      const depth = Math.random();
      const speed = 0.10 + (1 - depth) * 0.22;
      const dvx = (Math.random() - 0.5) * speed;
      const dvy = (Math.random() - 0.5) * speed;
      return {
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        dvx, dvy, vx: dvx, vy: dvy,
        depth,
        size: (0.5 + Math.random() * 1.6) * (1 - depth * 0.6),
        baseOpacity: (0.18 + Math.random() * 0.52) * (1 - depth * 0.55),
        pulse: Math.random() * Math.PI * 2,
        isHub: false,
        isCyan: Math.random() > 0.28,
      };
    });

    const hubSet = new Set();
    while (hubSet.size < 10) hubSet.add(Math.floor(Math.random() * count));
    for (const i of hubSet) {
      const p = sim.particles[i];
      p.isHub = true;
      p.size = (p.size + 0.8) * 2;
      p.baseOpacity = Math.min(0.82, p.baseOpacity * 2.2);
    }

    sim.pulses = [];

    function draw() {
      const W = canvas.width, H = canvas.height;
      ctx.clearRect(0, 0, W, H);

      const pts = sim.particles;
      const maxDist = 130;

      for (const p of pts) {
        p.x = (p.x + p.vx + W) % W;
        p.y = (p.y + p.vy + H) % H;
        p.pulse += 0.015;
      }

      for (let i = 0; i < pts.length; i++) {
        const p = pts[i];
        for (let j = i + 1; j < pts.length; j++) {
          const q = pts[j];
          if (Math.abs(p.depth - q.depth) > 0.38) continue;
          const dx = p.x - q.x, dy = p.y - q.y;
          const d = Math.sqrt(dx * dx + dy * dy);
          if (d >= maxDist) continue;
          const nearness = 1 - (p.depth + q.depth) / 2;
          const alpha = (1 - d / maxDist) * 0.15 * (0.35 + nearness * 0.65);
          const rgb = (p.isCyan && q.isCyan) ? "147,180,255"
            : (!p.isCyan && !q.isCyan) ? "59,130,246"
            : "110,150,255";
          ctx.strokeStyle = `rgba(${rgb},${alpha})`;
          ctx.lineWidth = 0.3 + nearness * 0.45;
          ctx.beginPath();
          ctx.moveTo(p.x, p.y);
          ctx.lineTo(q.x, q.y);
          ctx.stroke();
        }
      }

      for (let i = sim.pulses.length - 1; i >= 0; i--) {
        const pulse = sim.pulses[i];
        pulse.progress += pulse.speed;
        if (pulse.progress >= 1) { sim.pulses.splice(i, 1); continue; }
        const p = pts[pulse.src], q = pts[pulse.dst];
        const dx = p.x - q.x, dy = p.y - q.y;
        if (Math.sqrt(dx * dx + dy * dy) >= maxDist) { sim.pulses.splice(i, 1); continue; }
        const px = p.x + (q.x - p.x) * pulse.progress;
        const py = p.y + (q.y - p.y) * pulse.progress;
        const nearness = 1 - (p.depth + q.depth) / 2;
        const bright = 0.55 + nearness * 0.45;
        const rgb = p.isCyan ? "147,180,255" : "59,130,246";
        ctx.beginPath();
        ctx.arc(px, py, 5 + nearness * 3, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${rgb},${bright * 0.22})`;
        ctx.fill();
        ctx.beginPath();
        ctx.arc(px, py, 1.4 + nearness * 0.8, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${rgb},${bright})`;
        ctx.fill();
      }

      if (Math.random() < 0.025 && sim.pulses.length < 18) {
        const src = Math.floor(Math.random() * pts.length);
        const p = pts[src];
        for (let j = 0; j < pts.length; j++) {
          if (j === src) continue;
          const q = pts[j];
          const dx = p.x - q.x, dy = p.y - q.y;
          const d = Math.sqrt(dx * dx + dy * dy);
          if (d < maxDist && Math.abs(p.depth - q.depth) < 0.38) {
            sim.pulses.push({ src, dst: j, progress: 0, speed: 0.006 + Math.random() * 0.01 });
            break;
          }
        }
      }

      for (const p of pts) {
        const pulseOpacity = p.baseOpacity * (0.72 + 0.28 * Math.sin(p.pulse));
        const drawSize = Math.max(0.3, p.size);
        const rgb = p.isCyan ? "147,180,255" : "59,130,246";
        if (p.isHub) {
          const glowR = drawSize * 5;
          const g = ctx.createRadialGradient(p.x, p.y, drawSize * 0.5, p.x, p.y, glowR);
          g.addColorStop(0, `rgba(${rgb},${pulseOpacity * 0.38})`);
          g.addColorStop(1, `rgba(${rgb},0)`);
          ctx.beginPath();
          ctx.arc(p.x, p.y, glowR, 0, Math.PI * 2);
          ctx.fillStyle = g;
          ctx.fill();
        }
        ctx.beginPath();
        ctx.arc(p.x, p.y, drawSize, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${rgb},${pulseOpacity})`;
        ctx.fill();
      }

      sim.animId = requestAnimationFrame(draw);
    }
    draw();

    return () => {
      cancelAnimationFrame(sim.animId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const pts = simRef.current.particles;
    const cx = canvas.width / 2, cy = canvas.height / 2;
    if (explode && !explodeRef.current) {
      for (const p of pts) {
        const dx = p.x - cx, dy = p.y - cy;
        const d = Math.sqrt(dx * dx + dy * dy) || 1;
        const speed = 1.5 + Math.random() * 3;
        p.vx = (dx / d) * speed;
        p.vy = (dy / d) * speed;
      }
      simRef.current.pulses = [];
    }
    if (!explode && explodeRef.current) {
      for (const p of pts) {
        p.vx = p.dvx;
        p.vy = p.dvy;
      }
    }
    explodeRef.current = explode;
  }, [explode]);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full"
      style={{ zIndex: 0 }}
    />
  );
}
