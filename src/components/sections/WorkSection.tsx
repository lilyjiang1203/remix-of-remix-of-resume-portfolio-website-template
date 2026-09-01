import { experience } from "@/data/portfolio-data";
import SplitSection from "@/components/ui/split-section";
import { format } from "date-fns";

/**
 * WorkSection — magazine folio of experience
 */
export default function WorkSection() {
  return (
    <SplitSection title="Experience" id="work">
      <div className="space-y-16 md:space-y-20">
        {experience.map((job, index) => {
          const safeYear = (value?: string | null) => {
            if (!value) return null;
            const d = new Date(value);
            return isNaN(d.getTime()) ? value : format(d, "yyyy");
          };
          const startYear = safeYear(job.startDate) ?? "";
          const endYear = safeYear(job.endDate) ?? "Present";
          const numeral = String(index + 1).padStart(2, "0");

          return (
            <div key={job.id} className="relative">
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
                    {startYear} — {endYear}
                  </span>
                </div>
                <h3 className="text-large leading-tight text-primary">
                  <span className="italic font-normal">{job.role}</span>
                  <span className="text-muted-foreground"> &mdash; {job.company}</span>
                </h3>
                <p className="text-tiny text-muted-foreground">{job.location}</p>
                <p className="text-body leading-relaxed mt-6 text-foreground/85 max-w-reading">
                  {job.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </SplitSection>
  );
}
