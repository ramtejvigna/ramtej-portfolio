import { Reveal, SplitText } from "./Reveal";

// index: "02", eyebrow: "About", title: plain words, accent: serif-italic words
export default function SectionHeading({ index, eyebrow, title, accent, intro, align = "left" }) {
  const centered = align === "center";
  return (
    <div className={`mb-16 sm:mb-20 ${centered ? "text-center flex flex-col items-center" : ""}`}>
      <Reveal className="flex items-center gap-3 mb-6" y={16}>
        <span className="font-mono text-xs text-azure">{index}</span>
        <span className="h-px w-10 bg-gradient-to-r from-azure to-transparent" />
        <span className="font-mono text-xs uppercase tracking-[0.25em] text-mist">{eyebrow}</span>
      </Reveal>
      <h2 className="font-display text-[clamp(2.4rem,6vw,4.75rem)] font-semibold leading-[1] tracking-[-0.035em] text-snow max-w-4xl">
        <SplitText text={title} />{" "}
        {accent && (
          <SplitText text={accent} wordClassName="serif-accent text-gradient pr-[0.08em]" delay={title.split(" ").length * 0.06} />
        )}
      </h2>
      {intro && (
        <Reveal delay={0.2} className={`mt-6 max-w-xl text-base sm:text-lg leading-relaxed text-mist ${centered ? "mx-auto" : ""}`}>
          {intro}
        </Reveal>
      )}
    </div>
  );
}
