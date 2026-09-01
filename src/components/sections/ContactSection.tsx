import { personalInfo, socialLinks } from "@/data/portfolio-data";

/**
 * ContactSection — editorial contact folio
 */
export default function ContactSection() {
  return (
    <section
      id="contact"
      className="flex items-center px-8 md:px-16 lg:px-24 py-24 md:py-32"
    >
      <div className="w-full max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-[1fr_1.4fr] gap-12 lg:gap-32 items-center">
        <div className="flex items-center justify-center lg:justify-end lg:pr-16 lg:border-r border-border">
          <div className="text-center lg:text-right">
            <span className="eyebrow">Contact</span>
            <h2 className="text-section text-primary mt-6">Let&rsquo;s talk.</h2>
          </div>
        </div>

        <div className="flex items-center lg:pl-16">
          <div className="space-y-8">
            <div className="w-40 h-52 overflow-hidden rounded-t-full border border-primary/20 p-2">
              <img
                src={personalInfo.avatar}
                alt={personalInfo.name}
                className="w-full h-full object-cover rounded-t-full"
              />
            </div>

            <div>
              <p className="text-large text-primary">{personalInfo.name}</p>
              <a
                href={`mailto:${personalInfo.email}`}
                className="text-body text-foreground/85 underline underline-offset-4 decoration-primary/40 hover:decoration-primary block mt-2"
              >
                {personalInfo.email}
              </a>
              {personalInfo.website && (
                <a
                  href={`https://${personalInfo.website}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-body text-foreground/85 underline underline-offset-4 decoration-primary/40 hover:decoration-primary block mt-1"
                >
                  {personalInfo.website}
                </a>
              )}
            </div>

            <div className="flex flex-wrap gap-x-6 gap-y-2 pt-2">
              {socialLinks.map((link) => (
                <a
                  key={link.platform}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-tiny text-muted-foreground hover:text-primary transition-colors"
                >
                  {link.platform}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
