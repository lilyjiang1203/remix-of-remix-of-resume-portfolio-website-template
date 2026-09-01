import { education } from "@/data/portfolio-data";
import SplitSection from "@/components/ui/split-section";

export default function EducationSection() {
  return (
    <SplitSection title="Education" id="education">
      <div className="space-y-16 md:space-y-20">
        {education.map((edu, index) => {
          const numeral = String(index + 1).padStart(2, "0");
          return (
            <div key={edu.id}>
              {index > 0 && <hr className="border-t border-border mb-16 md:mb-20" />}
              <div className="space-y-3">
                <div className="flex items-baseline gap-4">
                  <span
                    className="text-primary/25 text-5xl leading-none"
                    style={{ fontFamily: "var(--font-family-serif)" }}
                  >
                    {numeral}
                  </span>
                  <span className="text-tiny text-muted-foreground">
                    {edu.startYear} — {edu.endYear}
                  </span>
                </div>
                <h3 className="text-large leading-tight text-primary">
                  <span className="italic font-normal">{edu.degree}, {edu.field}</span>
                </h3>
                <p className="text-small text-muted-foreground">{edu.institution}</p>
                <p className="text-tiny text-muted-foreground">{edu.location}</p>
                {edu.details && (
                  <p className="text-body mt-4 text-foreground/85 max-w-reading">{edu.details}</p>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </SplitSection>
  );
}
