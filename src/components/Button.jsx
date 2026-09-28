import { ArrowUpRight } from "lucide-react";
import Magnetic from "./Magnetic";

// Pill button whose fill sweeps up on hover. variant: "solid" | "ghost"
export default function Button({ children, href, onClick, variant = "solid", icon = <ArrowUpRight size={16} />, className = "" }) {
  const Tag = href ? "a" : "button";
  const external = href && !href.startsWith("mailto") && !href.startsWith("#");
  const solid = variant === "solid";

  return (
    <Magnetic>
      <Tag
        href={href}
        onClick={onClick}
        target={external ? "_blank" : undefined}
        rel={external ? "noopener noreferrer" : undefined}
        className={`group relative inline-flex items-center gap-3 overflow-hidden rounded-full px-7 py-3.5 font-display text-sm font-semibold tracking-tight transition-colors duration-500 ${
          solid
            ? "bg-snow text-ink hover:text-snow"
            : "border border-white/15 text-snow hover:text-ink hover:border-snow"
        } ${className}`}
      >
        <span
          className={`absolute inset-0 translate-y-full rounded-full transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-y-0 ${
            solid ? "bg-cobalt" : "bg-snow"
          }`}
        />
        <span className="relative">{children}</span>
        {icon && (
          <span className="relative flex h-5 w-5 items-center justify-center overflow-hidden">
            <span className="transition-transform duration-500 group-hover:translate-x-5 group-hover:-translate-y-5">{icon}</span>
            <span className="absolute -translate-x-5 translate-y-5 transition-transform duration-500 group-hover:translate-x-0 group-hover:translate-y-0">{icon}</span>
          </span>
        )}
      </Tag>
    </Magnetic>
  );
}
