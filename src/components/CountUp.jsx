import { useEffect, useRef, useState } from "react";

export default function CountUp({ target, suffix = "", decimals = 0 }) {
  const ref = useRef(null);
  // Render the real number first so prerendered HTML and crawlers see it, then count up from 0 in view.
  const [value, setValue] = useState(target);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (el.getBoundingClientRect().top > window.innerHeight) setValue(0);
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setStarted(true); },
      { threshold: 0.5 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  useEffect(() => {
    if (!started) return;
    const duration = 1400;
    const start = performance.now();
    function step(now) {
      const t = Math.min((now - start) / duration, 1);
      const ease = 1 - Math.pow(1 - t, 3);
      setValue(parseFloat((ease * target).toFixed(decimals)));
      if (t < 1) requestAnimationFrame(step);
    }
    requestAnimationFrame(step);
  }, [started, target, decimals]);

  return <span ref={ref}>{value.toFixed(decimals)}{suffix}</span>;
}
