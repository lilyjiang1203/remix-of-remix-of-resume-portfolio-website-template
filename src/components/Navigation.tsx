import { personalInfo } from "@/data/portfolio-data";
import ThemeToggle from "./ThemeToggle";

export default function Navigation() {
  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b border-border px-8 md:px-16 lg:px-24"
      aria-label="Main navigation"
    >
      <div className="max-w-6xl mx-auto py-4 flex items-center justify-between">
        <div className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-4">
          <span className="text-xl text-primary" style={{ fontFamily: "var(--font-family-serif)" }}>
            {personalInfo.name}
          </span>
          <span className="text-tiny text-muted-foreground">{personalInfo.title}</span>
        </div>

        <div className="flex items-center gap-8">
          <a
            href="#contact"
            className="text-tiny text-primary hover:text-accent transition-colors"
          >
            Contact
          </a>
          <ThemeToggle />
        </div>
      </div>
    </nav>
  );
}
