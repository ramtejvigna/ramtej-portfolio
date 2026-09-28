// Infinite horizontal ticker. Items are duplicated so the -50% loop is seamless.
export default function Marquee({ items, className = "" }) {
  const row = [...items, ...items];
  return (
    <div className={`relative flex overflow-hidden [mask-image:linear-gradient(90deg,transparent,#000_10%,#000_90%,transparent)] ${className}`}>
      <div className="flex shrink-0 animate-marquee items-center hover:[animation-play-state:paused]">
        {row.map((item, i) => (
          <span key={i} className="flex items-center gap-10 pr-10 whitespace-nowrap">
            {item}
            <span className="text-azure text-[0.6em]">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}
