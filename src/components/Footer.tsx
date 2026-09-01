import { personalInfo } from "@/data/portfolio-data";

export default function Footer() {
  return (
    <footer className="border-t border-border mt-8">
      <div className="max-w-6xl mx-auto px-8 md:px-16 lg:px-24 py-10 flex flex-col md:flex-row items-center justify-between gap-4">
        <span className="text-tiny text-muted-foreground">
          &copy; {new Date().getFullYear()} {personalInfo.name}
        </span>
        <span className="text-tiny text-primary/60">
          {personalInfo.title}
        </span>
      </div>
    </footer>
  );
}
