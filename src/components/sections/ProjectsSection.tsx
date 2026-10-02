import { Link } from "react-router-dom";
import { projects } from "@/data/portfolio-data";
import SplitSection from "@/components/ui/split-section";
import { Button } from "@/components/ui/button";
import DemoAccountsDialog from "@/components/DemoAccountsDialog";

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
              <div className="space-y-4">
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
                <div className="flex flex-wrap items-center gap-4 pt-3">
                  {isRealUrl(project.liveUrl) && (
                    <Button asChild size="sm">
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Live Demo
                      </a>
                    </Button>
                  )}
                  {isRealUrl(project.githubUrl) && (
                    <Button variant="outline" asChild size="sm">
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        GitHub
                      </a>
                    </Button>
                  )}
                </div>
                {project.id === "proj-6" && project.liveUrl && (
                  <DemoAccountsDialog liveUrl={project.liveUrl} />
                )}
                {project.caseStudyUrl && (
                  <div className="pt-1">
                    <Link
                      to={project.caseStudyUrl}
                      className="text-tiny text-primary hover:text-accent transition-colors underline underline-offset-4"
                    >
                      Read case study
                    </Link>
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </SplitSection>
  );
}
