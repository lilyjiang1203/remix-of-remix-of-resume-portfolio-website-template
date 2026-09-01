import { experience } from "@/data/portfolio-data";
import TimelineItem from "./TimelineItem";

export default function ExperienceTimeline() {
  const formatDateRange = (startDate: string, endDate: string | null) => {
    const start = new Date(startDate);
    const startIsValid = !isNaN(start.getTime());
    const startMonth = startIsValid
      ? start.toLocaleDateString("en-US", { month: "short", year: "numeric" })
      : startDate;

    if (!endDate) {
      return `${startMonth} — Present`;
    }

    const end = new Date(endDate);
    const endIsValid = !isNaN(end.getTime());
    const endMonth = endIsValid
      ? end.toLocaleDateString("en-US", { month: "short", year: "numeric" })
      : endDate;

    return `${startMonth} — ${endMonth}`;
  };

  return (
    <div>
      {experience.map((exp) => (
        <TimelineItem
          key={exp.id}
          date={formatDateRange(exp.startDate, exp.endDate)}
          title={`${exp.role} at ${exp.company}`}
          location={exp.location}
          description={exp.description}
          media={exp.media}
        />
      ))}
    </div>
  );
}
