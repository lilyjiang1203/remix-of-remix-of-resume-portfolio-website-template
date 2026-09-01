/**
 * Portfolio Data
 * Single source of truth for all portfolio content
 */

import type {
  PersonalInfo,
  Experience,
  Writing,
  Speaking,
  Project,
  Education,
  SocialLink,
} from "@/types/portfolio";
import sarahPortrait from "@/assets/sarah-portrait.png.asset.json";

// ===== Portfolio Data =====

export const personalInfo: PersonalInfo = {
  name: "Li Jiang",
  title: "UI/UX Designer & Software Developer",
  location: { city: "Edmonton, Alberta", country: "Canada" },
  website: "[Your Portfolio Website, if available]",
  email: "[Your Email Address]",
  avatar: sarahPortrait.url,
  bio: "I am a UI/UX designer and software developer based in Edmonton, Canada, with a background in graphic design, e-commerce design, and software development. Before transitioning into technology, I spent several years working in visual and digital design, including designing content and storefront experiences for Tmall e-commerce platforms in China.\n\nI recently completed the Computer Software Development program at NAIT, where I developed skills in web and mobile development, databases, UI/UX design, and application development. My design background helps me approach software from both a technical and user-centered perspective, with a strong focus on creating interfaces that are clear, practical, and visually engaging.\n\nI enjoy working on projects that combine technology, design, and real-world problem solving, particularly in areas such as healthcare technology, data-driven applications, and digital products.",
  skills: "UI/UX Design, Figma, Wireframing, Prototyping, Workflow Design, User-Centered Design, Web Development, Mobile Development, Flutter, Dart, HTML, CSS, JavaScript, PHP, CodeIgniter, WordPress, MySQL, Database Design, ERD, Agile, Problem Solving, Team Leadership, Cross-functional Collaboration, Visual Design, Branding",
};

export const experience: Experience[] = [
  {
    id: "exp-1",
    company: "NAIT",
    role: "Software Development / UI/UX Projects",
    location: "Edmonton, Alberta, Canada",
    startDate: "2024",
    endDate: "2025",
    description: "Designed and developed web and mobile applications as part of the Computer Software Development program. Worked with front-end and back-end technologies, databases, responsive interfaces, and UI/UX workflows while completing individual and team-based software projects.",
    current: false,
  },
  {
    id: "exp-2",
    company: "[Company Name]",
    role: "Graphic / E-commerce Designer",
    location: "China",
    startDate: "[Start Year]",
    endDate: "[End Year]",
    description: "Designed digital marketing materials, product pages, promotional graphics, and storefront layouts for Tmall and other e-commerce platforms. Worked closely with product and marketing teams to create visually engaging online shopping experiences while maintaining brand consistency.",
    current: false,
  },
  {
    id: "exp-3",
    company: "[Company Name]",
    role: "Graphic Designer",
    location: "China",
    startDate: "[Start Year]",
    endDate: "[End Year]",
    description: "Created visual assets for digital and print media, including promotional materials, advertising graphics, layouts, and branded content. Developed strong skills in visual communication, typography, composition, and user-focused design.",
    current: false,
  },
];

export const writing: Writing[] = [
  {
    id: "write-1",
    title: "Building Design Systems That Scale",
    publication: "Smashing Magazine",
    date: "2024-01",
    url: "https://example.com/article-1",
    featured: true,
  },
  {
    id: "write-2",
    title: "The Future of Design Tools: AI and Automation",
    publication: "UX Collective",
    date: "2023-11",
    url: "https://example.com/article-2",
    featured: false,
  },
  {
    id: "write-3",
    title: "Accessibility in Design: Beyond Compliance",
    publication: "A List Apart",
    date: "2023-08",
    url: "https://example.com/article-3",
    featured: false,
  },
  {
    id: "write-4",
    title: "Designing for Mobile: Patterns That Work",
    publication: "CSS-Tricks",
    date: "2023-05",
    url: "https://example.com/article-4",
    featured: false,
  },
  {
    id: "write-5",
    title: "From Developer to Designer: My Journey",
    publication: "Medium",
    date: "2023-02",
    url: "https://example.com/article-5",
    featured: false,
  },
];

export const speaking: Speaking[] = [
  {
    id: "speak-1",
    event: "Design Systems Summit 2024",
    date: "2024-06-15",
    location: "San Francisco, CA",
    talk: "Scaling Design Systems Across Multiple Products",
    description: "A deep dive into building and maintaining design systems that work across multiple product teams and platforms.",
    url: "https://example.com/talk-1",
    recordingUrl: "https://example.com/recording-1",
    slidesUrl: "https://example.com/slides-1",
    upcoming: true,
  },
  {
    id: "speak-2",
    event: "UX Week Conference",
    date: "2023-10-20",
    location: "New York, NY",
    talk: "Bridging Design and Development: A Practical Guide",
    description: "Practical strategies for improving collaboration between design and engineering teams.",
    url: "https://example.com/talk-2",
    recordingUrl: "https://example.com/recording-2",
    upcoming: false,
  },
  {
    id: "speak-3",
    event: "Figma Config",
    date: "2023-06-21",
    location: "Virtual",
    talk: "Building Accessible Components in Figma",
    description: "Learn how to design accessible components from the ground up using Figma.",
    url: "https://example.com/talk-3",
    recordingUrl: "https://example.com/recording-3",
    slidesUrl: "https://example.com/slides-3",
    upcoming: false,
  },
  {
    id: "speak-4",
    event: "Local Design Meetup",
    date: "2023-03-15",
    location: "Austin, TX",
    talk: "Career Growth for Designers: From IC to Leadership",
    description: "Tips and insights on transitioning from individual contributor to design leadership roles.",
    upcoming: false,
  },
];

export const projects: Project[] = [
  {
    id: "proj-1",
    name: "Clinic Management System",
    description:
      "Designed a clinic management system for receptionists, nurses, doctors, and clinic managers. Created user workflows, wireframes, database structures, and role-based interfaces focused on simplifying everyday clinic operations.",
    techStack: ["Figma", "UI/UX Design", "Wireframing", "Workflow Design", "ERD", "Database Design"],
    liveUrl: "[Add Figma or Portfolio Link]",
    status: "active",
  },
  {
    id: "proj-2",
    name: "Edmonton Transit Digital Display Prototype",
    description:
      "Led a six-person team in designing a prototype for an interactive digital display system for Edmonton transit stops. Helped coordinate the team, define the product concept, and develop a user-focused solution within a hackathon environment.",
    techStack: ["UI/UX Design", "Prototyping", "Team Leadership", "Product Design", "Problem Solving"],
    liveUrl: "[Add Project Link]",
    status: "active",
  },
  {
    id: "proj-3",
    name: "Mobile Application Project",
    description:
      "Designed and developed a mobile application as part of my software development coursework, applying mobile UI patterns, application architecture, state management, and responsive design principles.",
    techStack: ["Flutter", "Dart", "Provider"],
    githubUrl: "[Add GitHub Link]",
    status: "active",
  },
  {
    id: "proj-4",
    name: "Web Development Projects",
    description:
      "Built responsive websites and web applications involving content management, CRUD functionality, authentication, databases, and custom user interfaces.",
    techStack: ["HTML", "CSS", "JavaScript", "PHP", "CodeIgniter", "WordPress", "MySQL"],
    githubUrl: "[Add GitHub or Portfolio Link]",
    status: "active",
  },
];

export const education: Education[] = [
  {
    id: "edu-1",
    institution: "Northern Alberta Institute of Technology (NAIT)",
    degree: "Diploma",
    field: "Computer Software Development — Digital Media and IT",
    startYear: "2024",
    endYear: "2025",
    location: "Edmonton, Alberta, Canada",
    details: "Studied software development, web development, mobile application development, databases, networking, and user interface design.",
  },
  {
    id: "edu-2",
    institution: "[College Name], China",
    degree: "Diploma",
    field: "Animation / Digital Media Design",
    startYear: "2005",
    endYear: "2010",
    location: "China",
    details: "Studied animation, visual design, digital media, and related creative disciplines, building the foundation for several years of professional graphic and digital design work.",
  },
];

export const socialLinks: SocialLink[] = [
  {
    platform: "LinkedIn",
    url: "[Your LinkedIn URL]",
  },
  {
    platform: "GitHub",
    url: "[Your GitHub URL]",
  },
  {
    platform: "Portfolio",
    url: "[Your Portfolio URL]",
  },
];
