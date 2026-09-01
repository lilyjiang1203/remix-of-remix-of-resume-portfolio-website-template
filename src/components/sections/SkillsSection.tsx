import { personalInfo } from "@/data/portfolio-data";
import SplitSection from "@/components/ui/split-section";

/**
 * SkillsSection — editorial tag grid
 */
export default function SkillsSection() {
  const skillsList = personalInfo.skills.split(",").map((s) => s.trim());

  return (
    <SplitSection title="Skills" id="skills">
      <div className="flex flex-wrap gap-3">
        {skillsList.map((skill, index) => (
          <span
            key={index}
            className="text-tiny px-5 py-3 border border-primary/25 text-primary/90 transition-colors duration-300 hover:bg-primary hover:text-primary-foreground"
          >
            {skill}
          </span>
        ))}
      </div>
    </SplitSection>
  );
}
