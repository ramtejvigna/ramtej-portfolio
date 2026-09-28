import { useEffect, useState } from "react";

export default function useActiveSection(sectionIds, initial = sectionIds[0]) {
  const [active, setActive] = useState(initial);

  useEffect(() => {
    const nodes = sectionIds.map((id) => document.getElementById(id)).filter(Boolean);
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => { if (e.isIntersecting) setActive(e.target.id); });
      },
      { threshold: 0.4 }
    );
    nodes.forEach((n) => obs.observe(n));
    return () => obs.disconnect();
  }, [sectionIds]);

  return active;
}
