import Section from "../components/Section";
import SectionHeading from "../components/SectionHeading";
import ProjectShowcase from "../components/ProjectShowcase";

export default function Projects() {
  return (
    <Section id="Projects" className="py-32 sm:py-40">
      <SectionHeading
        index="04"
        eyebrow="Selected work"
        title="Projects that proved"
        accent="the process."
        intro="From sandboxed code judges to multimodal deep learning, each one built, measured and shipped."
      />
      <ProjectShowcase />
    </Section>
  );
}
