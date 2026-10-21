export const site = {
  name: "Vahid Aliyev",
  initials: "VA",
  role: "Software Engineer — Frontend / Full-Stack",
  location: "Warsaw, Poland",
  timeZone: "Europe/Warsaw",
  email: "vahid.aliyev.03@gmail.com",
  github: "https://github.com/vahid2104",
  linkedin: "https://www.linkedin.com/in/vahid-aliyev-dev/",
  whatsapp: `https://wa.me/994773616467?text=${encodeURIComponent(
    "Hello Vahid, I found your portfolio and would like to discuss an opportunity.",
  )}`,
  cv: "/Vahid_Aliyev_CV.pdf",
  avatar: "/images/avatar.png",
} as const;

export const navItems = [
  { label: "Startup", href: "#startup" },
  { label: "Work", href: "#work" },
  { label: "Experience", href: "#experience" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
] as const;

export type Stat = {
  /** Numeric part is animated with a count-up; omit for text values. */
  value?: number;
  text?: string;
  suffix?: string;
  label: string;
};

export const stats: Stat[] = [
  { value: 10, suffix: "+", label: "Projects designed, built & deployed" },
  { value: 4, label: "Internships, 2024 — 2026" },
  { text: "M.Sc.", label: "Computer Science, 2026" },
  { value: 3, label: "Languages — AZ · EN · TR" },
];

export const dailyStack = [
  "React",
  "Next.js",
  "TypeScript",
  "Node.js",
  "Express",
  "MongoDB",
  "Socket.IO",
  "Tailwind CSS",
  "OpenAI API",
  "Framer Motion",
  "Vitest",
  "Vercel",
];

export type Experience = {
  role: string;
  company: string;
  companyUrl?: string;
  logo?: string;
  period: string;
  location: string;
  description: string;
  stack: string[];
};

export const experience: Experience[] = [
  {
    role: "Frontend Developer Intern",
    company: "Aplit",
    companyUrl: "https://www.linkedin.com/company/aplitco/",
    logo: "/images/companies/aplit.jpg",
    period: "Sep — Oct 2026",
    location: "Remote",
    description:
      "Built product UI features in React and Next.js with TypeScript — reusable, responsive components wired to REST APIs, shipped through a code-reviewed Git workflow.",
    stack: ["React", "Next.js", "TypeScript"],
  },
  {
    role: "Frontend AI Engineer Intern",
    company: "FlyRank AI",
    companyUrl: "https://www.linkedin.com/company/flyrank/",
    logo: "/images/companies/flyrank-ai.jpg",
    period: "Jul — Aug 2026",
    location: "Remote",
    description:
      "Integrated LLM APIs into full-stack features and designed prompts that return structured, predictable output the UI can render reliably.",
    stack: ["LLM APIs", "React", "REST"],
  },
  {
    role: "Frontend Developer Intern",
    company: "Software Village",
    companyUrl: "https://www.linkedin.com/school/software-village/",
    logo: "/images/companies/software-village.jpg",
    period: "May — Jul 2026",
    location: "Remote",
    description:
      "Delivered features in a sprint-based Scrum team, taking part in planning, estimation and progress reviews.",
    stack: ["Next.js", "TypeScript", "Scrum"],
  },
  {
    role: "Frontend Developer Trainee",
    company: "YUP Technology",
    companyUrl: "https://www.linkedin.com/company/yuptechnology/",
    logo: "/images/companies/yup-technology.jpg",
    period: "May — Sep 2024",
    location: "Baku, Azerbaijan",
    description:
      "Built project-based frontends with React and Tailwind CSS, practising Git workflows, responsive design and reusable components.",
    stack: ["React", "Tailwind CSS", "Git"],
  },
];

export const education = [
  {
    icon: "law",
    degree: "Bachelor of Laws",
    school: "Baku State University",
    place: "Baku, Azerbaijan",
    period: "2020 — 2024",
  },
  {
    icon: "cs",
    degree: "M.Sc. Computer Science",
    school: "VIZJA University",
    place: "Warsaw, Poland",
    period: "2024 — 2026",
    thesis: {
      title: "AI Smart Application System",
      href: "/projects/ai-smart-application-system",
    },
  },
] as const;

export const skillGroups = [
  {
    title: "Frontend",
    items: ["React", "Next.js", "TypeScript", "JavaScript", "Tailwind CSS", "Framer Motion", "Recharts"],
  },
  {
    title: "Backend",
    items: ["Node.js", "Express", "REST APIs", "Socket.IO", "JWT · bcrypt", "Firebase Auth"],
  },
  {
    title: "Data & AI",
    items: ["MongoDB", "Mongoose", "OpenAI API", "Prompt engineering", "Structured outputs"],
  },
  {
    title: "Tooling",
    items: ["Git · GitHub", "Vitest", "Supertest", "Postman", "Vercel", "Render", "Figma"],
  },
];
