import Section from "../components/Section";
import SectionHeading from "../components/SectionHeading";
import SkillsArsenal from "../components/SkillsArsenal";
import Marquee from "../components/Marquee";
import { SKILLS } from "../data/skills";

const ALL = Object.values(SKILLS).flat();
const HALF = Math.ceil(ALL.length / 2);

const chip = (s) => (
  <span key={s} className="font-display text-4xl font-semibold tracking-tight text-transparent sm:text-6xl [-webkit-text-stroke:1px_rgba(147,180,255,0.35)] transition-colors duration-300 hover:text-snow">
    {s}
  </span>
);

export default function Skills() {
  return (
    <Section id="Skills" className="py-32 sm:py-40">
      <SectionHeading
        index="02"
        eyebrow="Toolkit"
        title="Tools I reach for"
        accent="under pressure."
        intro="A stack refined through real projects, tight deadlines and production incidents."
      />

      <div className="-mx-5 mb-16 flex flex-col gap-4 sm:-mx-8">
        <Marquee items={ALL.slice(0, HALF).map(chip)} />
        <div className="[&_.animate-marquee]:[animation-direction:reverse]">
          <Marquee items={ALL.slice(HALF).map(chip)} />
        </div>
      </div>

      <SkillsArsenal />
    </Section>
  );
}
