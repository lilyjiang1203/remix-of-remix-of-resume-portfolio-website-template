import { personalInfo } from "@/data/portfolio-data";

/**
 * AboutSection — editorial feature paragraph
 */
export default function AboutSection() {
  const firstParagraph = personalInfo.bio.split("\n\n")[0];

  return (
    <section
      id="about"
      className="flex items-center justify-center px-8 md:px-16 lg:px-24 py-24 md:py-32"
    >
      <div className="w-full max-w-3xl text-center space-y-10 md:space-y-14">
        <span className="eyebrow">About</span>
        <p className="text-lead max-w-2xl mx-auto text-foreground/90">
          {firstParagraph}
        </p>
      </div>
    </section>
  );
}
