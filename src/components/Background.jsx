// Fixed ambient backdrop: drifting blue aurora, faint grid, film grain.
export default function Background() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      <div className="absolute -top-[20%] -left-[10%] h-[70vh] w-[70vh] rounded-full bg-cobalt/20 blur-[140px] animate-aurora" />
      <div className="absolute top-[30%] -right-[15%] h-[60vh] w-[60vh] rounded-full bg-azure/10 blur-[160px] animate-aurora [animation-delay:-6s]" />
      <div className="absolute -bottom-[25%] left-[20%] h-[60vh] w-[80vh] rounded-full bg-navy/60 blur-[140px] animate-aurora [animation-delay:-12s]" />
      <div
        className="absolute inset-0 opacity-40"
        style={{
          backgroundImage:
            "linear-gradient(rgba(147,180,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(147,180,255,0.05) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
          maskImage: "radial-gradient(ellipse 80% 60% at 50% 30%, #000 20%, transparent 75%)",
          WebkitMaskImage: "radial-gradient(ellipse 80% 60% at 50% 30%, #000 20%, transparent 75%)",
        }}
      />
      <div className="grain" />
    </div>
  );
}
