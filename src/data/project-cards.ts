export type ProjectFilter = "All" | "Full Stack" | "Frontend" | "AI" | "Next.js" | "Dashboard" | "Startup";

export type ProjectCard = {
  slug: string;
  title: string;
  label: string;
  description: string;
  image: string;
  imageAlt: string;
  categories: Exclude<ProjectFilter, "All">[];
  stack: string[];
  github?: string;
  live?: string;
  landing?: string;
  /** Shown as a large card in the bento grid. */
  featured?: boolean;
};

export const projectFilters: ProjectFilter[] = [
  "All",
  "Full Stack",
  "AI",
  "Frontend",
  "Next.js",
  "Dashboard",
  "Startup",
];

export const projectCards: ProjectCard[] = [
  {
    slug: "ai-smart-application-system",
    title: "AI Smart Application System",
    label: "Full Stack · AI · Master's thesis",
    description:
      "Recruitment platform where applicants upload CVs and reviewers decide with structured AI analysis. Role-based access for three roles, deployed as three services.",
    image: "/images/projects/ai-smart-application-system/hero.png",
    imageAlt: "AI Smart Application System recruitment dashboard",
    categories: ["Full Stack", "AI"],
    stack: ["React", "TypeScript", "Node.js", "MongoDB", "OpenAI"],
    github: "https://github.com/vahid2104/ai-smart-application-system",
    live: "https://ai-smart-application-system.vercel.app/",
    featured: true,
  },
  {
    slug: "ai-code-review-app",
    title: "AI Code Review App",
    label: "Full Stack · AI",
    description:
      "Structured AI feedback on submitted code, with JWT auth, per-user usage limits and saved review history.",
    image: "/images/projects/ai-code-review-app/hero.png",
    imageAlt: "AI Code Review application dashboard",
    categories: ["Full Stack", "AI"],
    stack: ["React", "Node.js", "MongoDB", "OpenAI"],
    github: "https://github.com/vahid2104/AI_Code_Review_App",
    live: "https://ai-code-review-app-sigma.vercel.app/",
    featured: true,
  },
  {
    slug: "real-time-data-visualization-dashboard",
    title: "Real-Time Data Dashboard",
    label: "Full Stack · Real-time · Team",
    description:
      "Live KPIs and charts streamed over WebSockets, with connection states and alerts. I owned the frontend.",
    image: "/images/projects/real-time-data-visualization-dashboard/hero.png",
    imageAlt: "Real-Time Data Visualization Dashboard",
    categories: ["Full Stack", "Dashboard"],
    stack: ["React", "Socket.IO", "Recharts", "Vitest"],
    github: "https://github.com/vahid2104/Real-Time-Data-Visualization-Dashboard",
    live: "https://real-time-data-visualization-dashbo.vercel.app/",
    featured: true,
  },
  {
    slug: "v-stream",
    title: "V Stream",
    label: "Frontend · Next.js",
    description:
      "Movie and TV discovery with search, trailers, Firebase authentication and personal watchlists, powered by the TMDB API.",
    image: "/images/projects/v-stream/hero.png",
    imageAlt: "V Stream movie and television streaming platform",
    categories: ["Frontend", "Next.js"],
    stack: ["Next.js", "TypeScript", "Firebase", "TMDB"],
    github: "https://github.com/vahid2104/V_Stream",
    live: "https://v-stream-liard.vercel.app/",
    featured: true,
  },
  {
    slug: "lets-speak-law",
    title: "Let's Speak Law",
    label: "Startup · In development",
    description:
      "A social platform for law students that combines professional networking with visual content sharing.",
    image: "/images/projects/lets-speak-law/hero.png",
    imageAlt: "Let's Speak Law social platform for law students",
    categories: ["Frontend", "Startup"],
    stack: ["Startup", "Product", "Team"],
    landing: "https://letsspeaklaw.com",
  },
  {
    slug: "tech-store",
    title: "Tech Store",
    label: "Frontend",
    description:
      "E-commerce frontend with filtering, search, sorting, cart persistence, authentication and a simulated checkout.",
    image: "/images/projects/tech-store/hero.png",
    imageAlt: "Tech Store e-commerce website",
    categories: ["Frontend"],
    stack: ["React", "TypeScript", "Firebase", "Formik"],
    github: "https://github.com/vahid2104/Tech_Store",
    live: "https://vahid2104.github.io/Tech_Store/",
  },
  {
    slug: "warsaw-beauty-salon-explorer",
    title: "Warsaw Beauty Salon Explorer",
    label: "Frontend · Next.js",
    description:
      "Salon discovery for real Warsaw businesses with category filters, detail pages and an admin editing interface.",
    image: "/images/projects/warsaw-beauty-salon-explorer/hero.png",
    imageAlt: "Warsaw Beauty Salon Explorer website",
    categories: ["Frontend", "Next.js"],
    stack: ["Next.js", "TypeScript", "REST API"],
    github: "https://github.com/vahid2104/warsaw_beauty_salon_explorer",
    live: "https://warsaw-beauty-salon-explorer-delta.vercel.app/",
  },
  {
    slug: "routine-management-app",
    title: "Routine Management App",
    label: "Full Stack",
    description:
      "Routine and task manager for creating projects, organising tasks and managing personal workflows.",
    image: "/images/projects/routine-management-app/hero.png",
    imageAlt: "Routine Management full-stack application",
    categories: ["Full Stack"],
    stack: ["React", "Express", "MongoDB"],
    github: "https://github.com/vahid2104/Routine_Management_App_64284_65971_64520",
  },
  {
    slug: "nbc-news-portal",
    title: "NBC News Portal",
    label: "Frontend · Next.js",
    description:
      "News platform with live articles, category navigation, infinite scrolling, favourites and article pages.",
    image: "/images/projects/nbc-news-portal/hero.png",
    imageAlt: "NBC News Portal application",
    categories: ["Frontend", "Next.js"],
    stack: ["Next.js", "Tailwind CSS", "NewsAPI"],
    github: "https://github.com/vahid2104/nbc-news-portal",
    live: "https://nbc-news-portal.vercel.app/",
  },
  {
    slug: "weather-dashboard",
    title: "Weather Dashboard",
    label: "Frontend · Dashboard",
    description:
      "Current conditions, forecasts and location search through an external weather API.",
    image: "/images/projects/weather-dashboard/hero.png",
    imageAlt: "Weather Dashboard application",
    categories: ["Frontend", "Next.js", "Dashboard"],
    stack: ["Next.js", "Tailwind CSS", "OpenWeather"],
    github: "https://github.com/vahid2104/weather-dashboard",
    live: "https://vahid2104.github.io/weather-dashboard/",
  },
];
