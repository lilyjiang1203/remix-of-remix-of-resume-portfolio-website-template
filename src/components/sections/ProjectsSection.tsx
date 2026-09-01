import { projects } from "@/data/portfolio-data";
import SplitSection from "@/components/ui/split-section";

function isRealUrl(url?: string) {
  return !!url && !url.trim().startsWith("[");
}

export default function ProjectsSection() {
  return (
    <SplitSection title="Projects" id="projects">
      <div className="space-y-16 md:space-y-20">
        {projects.map((project, index) => {
          const numeral = String(index + 1).padStart(2, "0");
          return (
            <div key={project.id}>
              {index > 0 && <hr className="border-t border-border mb-16 md:mb-20" />}
              <div className="space-y-3">
                <div className="flex items-baseline gap-4">
                  <span
                    className="text-primary/25 text-5xl leading-none"
                    style={{ fontFamily: "var(--font-family-serif)" }}
                  >
                    {numeral}
                  </span>
                </div>
                <h3 className="text-large leading-tight text-primary">
                  <span className="italic font-normal">{project.name}</span>
                </h3>
                <p className="text-body text-foreground/85 max-w-reading">
                  {project.description}
                </p>
                {project.techStack.length > 0 && (
                  <ul className="flex flex-wrap gap-x-3 gap-y-2 pt-2">
                    {project.techStack.map((tech) => (
                      <li
                        key={tech}
                        className="text-tiny text-muted-foreground border border-border rounded-full px-3 py-1"
                      >
                        {tech}
                      </li>
                    ))}
                  </ul>
                )}
                <div className="flex flex-wrap gap-6 pt-2">
                  {project.caseStudyUrl && (
                    <Link
                      to={project.caseStudyUrl}
                      className="text-tiny text-primary hover:text-accent transition-colors underline underline-offset-4"
                    >
                      Read case study
                    </Link>
                  )}
                  {isRealUrl(project.liveUrl) && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-tiny text-primary hover:text-accent transition-colors underline underline-offset-4"
                    >
                      View project
                    </a>
                  )}
                  {isRealUrl(project.githubUrl) && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-tiny text-primary hover:text-accent transition-colors underline underline-offset-4"
                    >
                      GitHub
                    </a>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </SplitSection>
  );
}
