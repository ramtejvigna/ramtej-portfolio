// Shared Lenis instance, set by <SmoothScroll />. Null when reduced motion is on.
let lenis = null;

export function setLenis(instance) {
  lenis = instance;
}

export function scrollToId(id) {
  const target = document.getElementById(id);
  if (!target) return;
  if (lenis) lenis.scrollTo(target, { offset: 0, duration: 1.4 });
  else target.scrollIntoView({ behavior: "smooth" });
}
