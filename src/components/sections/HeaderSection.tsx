import { personalInfo } from "@/data/portfolio-data";

/**
 * HeaderSection — Sophisticated Editorial
 * Split name layout flanking an arch-framed portrait, with a folio metadata row.
 */
export default function HeaderSection() {
  const currentYear = new Date().getFullYear();
  const nameParts = personalInfo.name.split(" ");
  const firstName = nameParts[0];
  const lastName = nameParts.slice(1).join(" ");

  return (
    <section className="flex items-center justify-center px-8 md:px-16 lg:px-24 pt-28 pb-16 md:pt-36 md:pb-24">
      <div className="relative w-full max-w-6xl">
        {/* Decorative baseline */}
        <div className="absolute left-0 w-full h-px bg-primary/10 hidden lg:block top-1/2 -translate-y-1/2" />

        <div className="relative flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-0">
          {/* Left name */}
          <div className="z-20 lg:w-1/3 text-center lg:text-right lg:-mr-12">
            <h1 className="text-primary text-display mix-blend-multiply dark:mix-blend-normal">
              {firstName}
            </h1>
            <p className="eyebrow mt-6 justify-center lg:justify-end">
              {personalInfo.location.city}
            </p>
          </div>

          {/* Center arch portrait */}
          <div className="z-10 relative">
            <div className="relative w-64 md:w-80 lg:w-[22rem] aspect-[3/4.2] rounded-t-full overflow-hidden border border-primary/20 p-2">
              <div className="w-full h-full rounded-t-full overflow-hidden bg-secondary">
                <img
                  src={personalInfo.avatar}
                  alt={personalInfo.name}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Floating detail */}
            <div className="absolute -bottom-4 -left-6 md:-left-12 bg-background p-4 border border-primary/10">
              <span className="text-primary italic text-3xl" style={{ fontFamily: "var(--font-family-serif)" }}>
                Est. {currentYear}
              </span>
            </div>
          </div>

          {/* Right name */}
          <div className="z-20 lg:w-1/3 text-center lg:text-left lg:-ml-12">
            <h1 className="text-primary text-display mix-blend-multiply dark:mix-blend-normal">
              {lastName}
            </h1>
            <p className="mt-6">
              <span className="text-primary/90 italic text-2xl" style={{ fontFamily: "var(--font-family-serif)" }}>
                {personalInfo.title}
              </span>
            </p>
          </div>
        </div>

        {/* Folio metadata row */}
        <div className="mt-16 md:mt-28 flex flex-col md:flex-row items-start md:items-end justify-between border-t border-primary/20 pt-10 gap-8 w-full">
          <div className="flex flex-wrap justify-center md:justify-start gap-x-12 gap-y-4">
            <div className="flex flex-col">
              <span className="text-tiny text-primary/50 mb-2">Focus</span>
              <span className="text-xl text-primary" style={{ fontFamily: "var(--font-family-serif)" }}>
                Product Strategy
              </span>
            </div>
            <div className="flex flex-col">
              <span className="text-tiny text-primary/50 mb-2">Currently</span>
              <span className="text-xl text-primary" style={{ fontFamily: "var(--font-family-serif)" }}>
                Open to opportunities
              </span>
            </div>
          </div>

          <a
            href="#about"
            className="group flex items-center text-tiny text-primary transition-all duration-500 hover:tracking-[0.5em]"
          >
            Scroll to explore
            <svg
              className="ml-4 w-4 h-4 transform group-hover:translate-y-1 transition-transform duration-300"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
