import { Link } from "react-router-dom";
import { useEffect } from "react";
import Layout from "@/components/Layout";
import Navigation from "@/components/Navigation";
import SplitSection from "@/components/ui/split-section";
import teamAsset from "@/assets/hackathon-team.jpg.asset.json";
import referenceAsset from "@/assets/hackathon-reference.jpg.asset.json";
import portraitAsset from "@/assets/hackathon-portrait.jpg.asset.json";
import sketch1Asset from "@/assets/hackathon-sketch-1.jpg.asset.json";
import sketch2Asset from "@/assets/hackathon-sketch-2.jpg.asset.json";
import techDenAsset from "@/assets/hackathon-techden.jpg.asset.json";
import eventAsset from "@/assets/hackathon-event.jpg.asset.json";
import teamworkAsset from "@/assets/hackathon-teamwork.jpg.asset.json";
import pitchConceptAsset from "@/assets/hackathon-pitch-concept.jpg.asset.json";
import pitchTechAsset from "@/assets/hackathon-pitch-tech.jpg.asset.json";
import pitchBenefitsAsset from "@/assets/hackathon-pitch-benefits.jpg.asset.json";

interface FigureProps {
  src: string;
  alt: string;
  caption: string;
  className?: string;
}

function Figure({ src, alt, caption, className }: FigureProps) {
  return (
    <figure className="space-y-3">
      <img
        src={src}
        alt={alt}
        loading="lazy"
        className={`w-full rounded-sm border border-border object-cover ${className ?? ""}`}
      />
      <figcaption className="text-tiny text-muted-foreground max-w-reading">{caption}</figcaption>
    </figure>
  );
}

export default function HackathonCaseStudy() {
  useEffect(() => {
    document.title = "City of Edmonton Hackathon — Real-Time Bus Stop Display | Li Jiang";
    window.scrollTo(0, 0);
  }, []);

  return (
    <Layout>
      <Navigation />

      {/* Hero */}
      <header className="pt-32 px-8 md:px-16 lg:px-24">
        <div className="max-w-7xl mx-auto space-y-10">
          <Link
            to="/#projects"
            className="text-tiny text-muted-foreground hover:text-primary transition-colors"
          >
            &larr; Back to projects
          </Link>

          <div className="space-y-5">
            <span className="eyebrow">Case Study &middot; Hackathon</span>
            <h1 className="text-section text-primary leading-tight">
              City of Edmonton Hackathon &mdash;{" "}
              <span className="italic font-normal">Real-Time Bus Stop Display</span>
            </h1>
            <p className="text-body text-foreground/85 max-w-reading">
              A team-based hackathon concept exploring how digital bus stop displays could make
              public transit information more visible, accessible, and useful for riders.
            </p>
            <ul className="flex flex-wrap gap-x-8 gap-y-2 pt-2">
              {[
                "Team Lead · 6-person team",
                "UI/UX Concept",
                "Prototype & Presentation",
                "Edmonton Unlimited · Tech+Den",
              ].map((item) => (
                <li key={item} className="text-tiny text-muted-foreground">
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <Figure
            src={teamAsset.url}
            alt="Hackathon team standing in front of an Edmonton Unlimited backdrop"
            caption="Team photo after the hackathon presentation. One team member had left before the photo was taken."
          />
        </div>
      </header>

      <SplitSection title="Challenge" id="challenge">
        <div className="space-y-8">
          <p className="text-body text-foreground/85 max-w-reading leading-relaxed">
            Traditional bus stops often provide limited real-time information. Our team explored how
            a digital display could help riders quickly understand upcoming routes, arrival times,
            service updates, and other useful transit information.
          </p>
          <div className="max-w-sm">
            <Figure
              src={referenceAsset.url}
              alt="Digital electronic bus stop display showing multiple routes and schedules"
              caption="Reference photo taken in China: an electronic bus stop display showing full route lines, arrival windows, and service hours. It became the starting point for asking whether Edmonton bus stops could communicate this clearly."
            />
          </div>
        </div>
      </SplitSection>

      <SplitSection title="My Role" id="role">
        <div className="space-y-8">
          <p className="text-body text-foreground/85 max-w-reading leading-relaxed">
            As Team Lead, I helped coordinate a six-person team, organize ideas, contribute to the
            user experience and interface concept, and support the development of the final prototype
            and presentation.
          </p>
          <div className="max-w-xs">
            <Figure
              src={portraitAsset.url}
              alt="Li Jiang at the City of Edmonton hackathon"
              caption="At the hackathon, hosted by Edmonton Unlimited."
            />
          </div>
        </div>
      </SplitSection>

      <SplitSection title="Process" id="process">
        <div className="space-y-10">
          <p className="text-body text-foreground/85 max-w-reading leading-relaxed">
            We began by reviewing examples of real-time transit displays and sketching possible
            screen layouts. The team discussed information hierarchy, route visibility, arrival-time
            presentation, and how the display could work in a public outdoor environment.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            <Figure
              src={sketch1Asset.url}
              alt="Hand-drawn concept sketches titled Real-time Bus Stop Displays"
              caption="Early concept sketches: screen zones for live routes, arrival order, and secondary information."
            />
            <Figure
              src={sketch2Asset.url}
              alt="Hand-drawn layout and flow sketches for the display screens"
              caption="Layout and flow exploration: how content blocks rotate and how riders scan the screen."
            />
          </div>
          <Figure
            src={teamworkAsset.url}
            alt="Team working together on laptops during the hackathon"
            caption="Working session during the hackathon: research, sketching, and building the prototype together."
          />
        </div>
      </SplitSection>


      <SplitSection title="Solution" id="solution">
        <p className="text-body text-foreground/85 max-w-reading leading-relaxed">
          We proposed a digital bus stop display that prioritizes upcoming routes and real-time
          arrival information while providing space for service alerts and other useful rider
          information.
        </p>
      </SplitSection>

      <SplitSection title="Final Presentation" id="presentation">
        <div className="space-y-10">
          <p className="text-body text-foreground/85 max-w-reading leading-relaxed">
            At the end of the weekend our team presented the concept to the judges &mdash; walking
            through the rider experience, the technical approach, and the benefits for both riders
            and the city.
          </p>
          <div className="space-y-8">
            <Figure
              src={pitchConceptAsset.url}
              alt="Presentation slide showing an illustrated bus stop with a digital display"
              caption="Presenting the concept: an illustrated bus stop with a real-time digital display."
            />
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              <Figure
                src={pitchTechAsset.url}
                alt="Presentation slide listing the technical stack: HTML, CSS, JavaScript, NodeJS"
                caption="Technical slide: HTML, CSS, JavaScript, and Node.js for the prototype."
              />
              <Figure
                src={pitchBenefitsAsset.url}
                alt="Presentation slide listing project benefits"
                caption="Benefits slide: knowing bus locations, realistic arrival times, convenience, and potential ad revenue."
              />
            </div>
          </div>
        </div>
      </SplitSection>


      <SplitSection title="Team &amp; Event" id="team">
        <div className="space-y-10">
          <p className="text-body text-foreground/85 max-w-reading leading-relaxed">
            The hackathon took place at Edmonton Unlimited, where our team worked out of one of the
            Tech+Den rooms across the event weekend &mdash; moving from research and sketching to a
            shared prototype and a final presentation.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-[1fr_1.4fr] gap-8 items-start">
            <Figure
              src={techDenAsset.url}
              alt="Tech+Den room sign at Edmonton Unlimited with the team's name card"
              caption="Our assigned Tech+Den team room."
            />
            <Figure
              src={eventAsset.url}
              alt="Two teammates in the audience during the hackathon presentations"
              caption="During the presentation sessions at the event."
            />
          </div>
        </div>
      </SplitSection>

      <SplitSection title="Outcome" id="outcome">
        <div className="space-y-6">
          <p className="text-body text-foreground/85 max-w-reading leading-relaxed">
            The concept was developed and presented during the hackathon as a collaborative
            prototype. The original source files are no longer available, so selected project visuals
            were reconstructed from photographs and the team&rsquo;s presentation recording.
          </p>
          <div className="border-t border-border pt-8">
            <Link
              to="/#projects"
              className="text-tiny text-primary underline underline-offset-4 hover:text-accent transition-colors"
            >
              View all projects &rarr;
            </Link>
          </div>
        </div>
      </SplitSection>
    </Layout>
  );
}
