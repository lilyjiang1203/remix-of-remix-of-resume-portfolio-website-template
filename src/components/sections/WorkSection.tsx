import { Link } from "react-router-dom";
import { experience } from "@/data/portfolio-data";
import SplitSection from "@/components/ui/split-section";
import { format } from "date-fns";

interface WorkSectionProps {
  /** Show every paragraph of each role (used on the dedicated Experience page) */
  full?: boolean;
}

/**
 * WorkSection — magazine folio of experience
 */
export default function WorkSection({ full = false }: WorkSectionProps) {
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

          const paragraphs = Array.isArray(job.description)
            ? job.description
            : [job.description];
          const visible = full ? paragraphs : paragraphs.slice(0, 1);
          const hasMore = !full && paragraphs.length > 1;

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
                <div className="mt-6 space-y-4 max-w-reading">
                  {visible.map((paragraph, i) => (
                    <p key={i} className="text-body leading-relaxed text-foreground/85">
                      {paragraph}
                    </p>
                  ))}
                </div>
                {hasMore && (
                  <Link
                    to="/experience"
                    className="inline-block mt-4 text-tiny text-primary underline underline-offset-4 hover:text-accent transition-colors"
                  >
                    Read more
                  </Link>
                )}
              </div>
            </div>
          );
        })}
      </div>

      {!full && (
        <div className="mt-16 md:mt-20 border-t border-border pt-8">
          <Link
            to="/experience"
            className="text-tiny text-primary underline underline-offset-4 hover:text-accent transition-colors"
          >
            View full experience &rarr;
          </Link>
        </div>
      )}
    </SplitSection>
  );
}
