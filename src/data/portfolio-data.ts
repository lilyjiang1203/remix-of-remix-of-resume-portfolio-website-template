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
  title: "Full Stack Developer",
  location: { city: "Edmonton, Alberta", country: "Canada" },
  email: "lilyjiang1203@gmail.com",
  avatar: sarahPortrait.url,
  bio: "I am a full stack developer based in Edmonton, Canada, with a background in graphic design, e-commerce design, and software development. Before transitioning into technology, I spent several years working in visual and digital design, including designing content and storefront experiences for Tmall e-commerce platforms in China.\n\nI recently completed the Computer Software Development program at NAIT, where I developed skills in web and mobile development, databases, UI/UX design, and application development. My design background helps me approach software from both a technical and user-centered perspective, with a strong focus on creating interfaces that are clear, practical, and visually engaging.\n\nI enjoy working on projects that combine technology, design, and real-world problem solving, particularly in areas such as healthcare technology, data-driven applications, and digital products.",
  skills: "Full-Stack Development, Front-End Development, Software Development, C#, SQL, React.js, Node.js, JavaScript, RESTful architecture, Adobe Illustrator, Digital Marketing, Project Management, Blazor, Django, PHP, HTML5, Graphic Design, E-Commerce, Marketing Materials, Web Development, Marketing Campaign Strategies, RESTful WebServices, Problem Solving, Architecture Frameworks, Promotional Design, GitHub, Social Media, Communication, CorelDRAW, MySQL, Adobe Photoshop, Mac & PC platforms",
};

export const experience: Experience[] = [
  {
    id: "exp-1",
    company: "NAIT",
    role: "Software Development / UI/UX Projects",
    location: "Edmonton, Alberta, Canada",
    startDate: "2024",
    endDate: "2025",
    description: [
      "Designed and developed web and mobile applications as part of the Computer Software Development program.",
      "Worked with front-end and back-end technologies, databases, responsive interfaces, and UI/UX workflows while completing individual and team-based software projects.",
    ],
    current: false,
  },
  {
    id: "exp-2",
    company: "Jinange Medical Supplies Co., Ltd",
    role: "Graphic Designer",
    location: "Wuhan, Hubei, China",
    startDate: "2017",
    endDate: "2020",
    description: [
      "Designed digital and print materials for medical product lines, including product catalogs, promotional materials, and digital content.",
      "Managed creative projects from concept to final delivery and collaborated with clients and internal teams to define requirements, coordinate content, and meet project deadlines.",
    ],
    current: false,
  },
  {
    id: "exp-3",
    company: "Shijixinchuang Commercial and Trading Co., Ltd",
    role: "Graphic Designer & Web Designer",
    location: "Wuhan, Hubei, China",
    startDate: "2014",
    endDate: "2017",
    description: [
      "Managed visual design and digital content for the company's Tmall e-commerce store, supporting multiple well-known printer and technology brands. Designed product detail pages, storefront layouts, product images, promotional banners, and advertising graphics, and maintained product listings and visual content through the Tmall seller platform.",
      "Created campaign assets for major e-commerce promotions, including Double 11 (Singles' Day), 618, seasonal sales, and new product launches. Collaborated with sales and marketing teams to update product information, pricing promotions, and campaign content while maintaining consistent branding across the online store and company website.",
      "Redesigned and maintained the company website and produced additional digital and print marketing materials to support online and offline sales.",
    ],
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
    name: "Happy Paws Pet Care",
    description:
      "Designed and developed a responsive pet care website using jQuery, jQuery UI, and PHP/MySQL. Implemented interactive components including dynamic layouts, form validation, content sliders, multi-select filters, and data visualization with FLOT.",
    techStack: ["jQuery", "jQuery UI", "PHP", "MySQL", "FLOT", "Responsive Design"],
    liveUrl: "https://lilyjiang1203.github.io/happy-paws-jquery/",
    status: "active",
  },
  {
    id: "proj-2",
    name: "Northbound — Responsive Travel Website",
    description:
      "Redesigned and developed a responsive Alberta outdoor travel website with custom branding, interactive tour cards, animated navigation, testimonials, and booking UI. Customized typography, colour systems, imagery, and responsive layouts across desktop and mobile.",
    techStack: ["HTML5", "CSS3", "Responsive Design"],
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
];
