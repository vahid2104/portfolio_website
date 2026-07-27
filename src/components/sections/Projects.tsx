"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  FiArrowDown,
  FiArrowUp,
  FiArrowUpRight,
  FiExternalLink,
  FiFilter,
  FiGithub,
  FiLayers,
} from "react-icons/fi";

type ProjectCategory =
  | "All"
  | "Full Stack"
  | "Frontend"
  | "AI"
  | "Dashboard"
  | "Next.js";

type ProjectStatus =
  | "Featured"
  | "Startup"
  | "In Development"
  | "Real-Time"
  | "Live"
  | "GitHub Only";

type ProjectLink = {
  github?: string;
  live?: string;
  landingPage?: string;
};

type Project = {
  id: number;
  title: string;
  slug: string;
  description: string;
  image: string;
  imageAlt: string;
  categories: Exclude<ProjectCategory, "All">[];
  technologies: string[];
  statuses?: ProjectStatus[];
  links: ProjectLink;
  caseStudyEnabled: boolean;
  priority: number;
};

const filters: ProjectCategory[] = [
  "All",
  "Full Stack",
  "Frontend",
  "AI",
  "Dashboard",
  "Next.js",
];

const INITIAL_PROJECT_COUNT = 6;

const projects: Project[] = [
  {
    id: 1,
    title: "AI Smart Application System",
    slug: "ai-smart-application-system",
    description:
      "An AI-powered recruitment platform that helps managers review applications, analyze CVs and manage candidates through secure role-based dashboards.",
    image: "/images/projects/ai-smart-application-system/hero.png",
    imageAlt: "AI Smart Application System recruitment dashboard",
    categories: ["Full Stack", "AI"],
    technologies: ["React", "TypeScript", "Node.js", "MongoDB", "OpenAI"],
    statuses: ["Featured"],
    links: {
      github: "https://github.com/vahid2104/ai-smart-application-system",
      live: "https://ai-smart-application-system.vercel.app/",
    },
    caseStudyEnabled: true,
    priority: 1,
  },
  {
    id: 2,
    title: "Let's Speak Law",
    slug: "lets-speak-law",
    description:
      "A social platform created for law students, combining professional networking and visual content sharing in an experience inspired by LinkedIn and Instagram.",
    image: "/images/projects/lets-speak-law/hero.png",
    imageAlt: "Let's Speak Law social media platform for law students",
    categories: ["Frontend"],
    technologies: [
      "Startup",
      "Product Design",
      "Social Platform",
      "Team Project",
    ],
    statuses: ["Startup", "In Development"],
    links: {
      landingPage: "https://letsspeaklaw.com",
    },
    caseStudyEnabled: true,
    priority: 2,
  },
  {
    id: 3,
    title: "V Stream",
    slug: "v-stream",
    description:
      "A modern streaming platform with movie discovery, trailers, authentication, watchlists and dynamic content powered by the TMDB API.",
    image: "/images/projects/v-stream/hero.png",
    imageAlt: "V Stream movie and television streaming platform",
    categories: ["Frontend", "Next.js"],
    technologies: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Firebase",
      "TMDB API",
    ],
    statuses: ["Featured"],
    links: {
      github: "https://github.com/vahid2104/V_Stream",
      live: "https://v-stream-liard.vercel.app/",
    },
    caseStudyEnabled: true,
    priority: 3,
  },
  {
    id: 4,
    title: "Real-Time Data Visualization Dashboard",
    slug: "real-time-data-visualization-dashboard",
    description:
      "A full-stack monitoring dashboard that displays live data through WebSocket communication, authentication and interactive data visualizations.",
    image: "/images/projects/real-time-data-visualization-dashboard/hero.png",
    imageAlt: "Real-Time Data Visualization Dashboard",
    categories: ["Full Stack", "Dashboard"],
    technologies: [
      "React",
      "TypeScript",
      "Node.js",
      "Socket.IO",
      "MongoDB",
      "Recharts",
    ],
    statuses: ["Real-Time"],
    links: {
      github:
        "https://github.com/vahid2104/Real-Time-Data-Visualization-Dashboard",
      live: "https://real-time-data-visualization-dashbo.vercel.app/",
    },
    caseStudyEnabled: true,
    priority: 4,
  },
  {
    id: 5,
    title: "AI Code Review App",
    slug: "ai-code-review-app",
    description:
      "A full-stack developer tool that analyzes source code and provides structured AI-generated feedback, suggestions and review history.",
    image: "/images/projects/ai-code-review-app/hero.png",
    imageAlt: "AI Code Review application dashboard",
    categories: ["Full Stack", "AI"],
    technologies: [
      "React",
      "TypeScript",
      "Node.js",
      "MongoDB",
      "OpenAI",
      "JWT",
    ],
    statuses: ["Featured"],
    links: {
      github: "https://github.com/vahid2104/AI_Code_Review_App",
      live: "https://ai-code-review-app-sigma.vercel.app/",
    },
    caseStudyEnabled: true,
    priority: 5,
  },
  {
    id: 6,
    title: "Tech Store",
    slug: "tech-store",
    description:
      "A responsive e-commerce frontend with product filtering, search, sorting, cart persistence, authentication and a simulated checkout flow.",
    image: "/images/projects/tech-store/hero.png",
    imageAlt: "Tech Store e-commerce website",
    categories: ["Frontend"],
    technologies: [
      "React",
      "TypeScript",
      "Firebase",
      "Formik",
      "Yup",
      "GitHub Pages",
    ],
    statuses: ["Live"],
    links: {
      github: "https://github.com/vahid2104/Tech_Store",
      live: "https://vahid2104.github.io/Tech_Store/",
    },
    caseStudyEnabled: true,
    priority: 6,
  },
  {
    id: 7,
    title: "Warsaw Beauty Salon Explorer",
    slug: "warsaw-beauty-salon-explorer",
    description:
      "A salon discovery platform featuring real Warsaw businesses, category filters, detailed salon pages and an administrative editing interface.",
    image: "/images/projects/warsaw-beauty-salon-explorer/hero.png",
    imageAlt: "Warsaw Beauty Salon Explorer website",
    categories: ["Frontend", "Next.js"],
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "REST API"],
    links: {
      github: "https://github.com/vahid2104/warsaw_beauty_salon_explorer",
      live: "https://warsaw-beauty-salon-explorer-delta.vercel.app/",
    },
    caseStudyEnabled: true,
    priority: 7,
  },
  {
    id: 8,
    title: "Routine Management App",
    slug: "routine-management-app",
    description:
      "A full-stack routine and task management application for creating projects, organizing tasks and managing personal workflows.",
    image: "/images/projects/routine-management-app/hero.png",
    imageAlt: "Routine Management full-stack application",
    categories: ["Full Stack"],
    technologies: ["React", "Vite", "Node.js", "Express", "MongoDB"],
    statuses: ["GitHub Only"],
    links: {
      github:
        "https://github.com/vahid2104/Routine_Management_App_64284_65971_64520",
      // live: "ADD_AFTER_FIXING_AND_DEPLOYING",
    },
    caseStudyEnabled: true,
    priority: 8,
  },
  {
    id: 9,
    title: "NBC News Portal",
    slug: "nbc-news-portal",
    description:
      "A responsive news platform featuring live articles, category navigation, infinite scrolling, favourites and detailed article pages.",
    image: "/images/projects/nbc-news-portal/hero.png",
    imageAlt: "NBC News Portal application",
    categories: ["Frontend", "Next.js"],
    technologies: ["Next.js", "React", "Tailwind CSS", "NewsAPI"],
    links: {
      github: "https://github.com/vahid2104/nbc-news-portal",
      live: "https://nbc-news-portal.vercel.app/",
    },
    caseStudyEnabled: true,
    priority: 9,
  },
  {
    id: 10,
    title: "Weather Dashboard",
    slug: "weather-dashboard",
    description:
      "A clean weather dashboard providing current conditions, forecasts and location-based weather search through an external API.",
    image: "/images/projects/weather-dashboard/hero.png",
    imageAlt: "Weather Dashboard application",
    categories: ["Frontend", "Next.js", "Dashboard"],
    technologies: ["Next.js", "React", "Tailwind CSS", "OpenWeather API"],
    links: {
      github: "https://github.com/vahid2104/weather-dashboard",
      live: "https://vahid2104.github.io/weather-dashboard/",
    },
    caseStudyEnabled: true,
    priority: 10,
  },
];

const sectionVariants = {
  hidden: {
    opacity: 0,
    y: 40,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: "easeOut" as const,
    },
  },
};

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 32,
    scale: 0.97,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
  },
  exit: {
    opacity: 0,
    y: 20,
    scale: 0.96,
  },
};

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState<ProjectCategory>("All");

  const [showAllProjects, setShowAllProjects] = useState(false);

  const sortedProjects = useMemo(() => {
    return [...projects].sort((a, b) => a.priority - b.priority);
  }, []);

  const filteredProjects = useMemo(() => {
    if (activeFilter === "All") {
      return sortedProjects;
    }

    return sortedProjects.filter((project) =>
      project.categories.includes(
        activeFilter as Exclude<ProjectCategory, "All">,
      ),
    );
  }, [activeFilter, sortedProjects]);

  const visibleProjects = useMemo(() => {
    if (activeFilter !== "All") {
      return filteredProjects;
    }

    if (showAllProjects) {
      return filteredProjects;
    }

    return filteredProjects.slice(0, INITIAL_PROJECT_COUNT);
  }, [activeFilter, filteredProjects, showAllProjects]);

  const hiddenProjectsCount = Math.max(
    projects.length - INITIAL_PROJECT_COUNT,
    0,
  );

  const handleFilterChange = (filter: ProjectCategory) => {
    setActiveFilter(filter);

    if (filter !== "All") {
      setShowAllProjects(false);
    }
  };

  const handleToggleProjects = () => {
    setShowAllProjects((currentValue) => !currentValue);
  };

  const handleShowLess = () => {
    setShowAllProjects(false);

    document
      .getElementById("projects")
      ?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <section
      id="projects"
      className="relative overflow-hidden px-4 py-24 sm:px-6 lg:px-8 lg:py-32"
    >
      {/* Decorative background glows */}
      <div className="pointer-events-none absolute -left-40 top-1/4 h-[420px] w-[420px] rounded-full bg-cyan-500/[0.08] blur-[150px]" />

      <div className="pointer-events-none absolute -right-40 bottom-10 h-[500px] w-[500px] rounded-full bg-violet-500/[0.08] blur-[170px]" />

      <div className="pointer-events-none absolute left-1/2 top-0 h-px w-[70%] -translate-x-1/2 bg-gradient-to-r from-transparent via-cyan-400/20 to-transparent" />

      <motion.div
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{
          once: true,
          amount: 0.08,
        }}
        className="relative mx-auto max-w-[1400px]"
      >
        {/* Section header */}
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3">
              <span className="h-2.5 w-2.5 rounded-full bg-cyan-400 shadow-[0_0_18px_rgba(34,211,238,0.9)]" />

              <p className="text-xs font-bold uppercase tracking-[0.35em] text-cyan-300 sm:text-sm">
                Selected work
              </p>

              <div className="h-px w-14 bg-gradient-to-r from-cyan-400/70 to-transparent sm:w-20" />
            </div>

            <h2 className="mt-5 text-4xl font-black tracking-tight text-white sm:text-5xl lg:text-6xl">
              Featured
              <span className="ml-3 bg-gradient-to-r from-cyan-400 via-blue-500 to-violet-500 bg-clip-text text-transparent">
                Projects
              </span>
            </h2>

            <p className="mt-5 max-w-2xl text-base leading-8 text-slate-400 sm:text-lg">
              A selection of full-stack applications, AI-powered products,
              startup ideas and frontend experiences where I transformed
              concepts into functional digital products.
            </p>
          </div>

          <div className="inline-flex w-fit items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.035] px-4 py-3 text-sm text-slate-300 shadow-xl backdrop-blur-xl">
            <span className="grid h-9 w-9 place-items-center rounded-xl border border-cyan-400/20 bg-cyan-400/[0.07] text-cyan-300">
              <FiLayers />
            </span>

            <div>
              <p className="font-semibold text-white">
                {projects.length} projects
              </p>

              <p className="text-xs text-slate-500">
                Built across multiple categories
              </p>
            </div>
          </div>
        </div>

        {/* Filters */}
        <div className="mt-10 flex items-start gap-3">
          <div className="mt-0 hidden h-11 w-11 shrink-0 place-items-center rounded-xl border border-white/10 bg-white/[0.03] text-cyan-300 sm:grid">
            <FiFilter />
          </div>

          <div className="flex w-full gap-2 overflow-x-auto pb-3 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            {filters.map((filter) => {
              const isActive = activeFilter === filter;

              return (
                <button
                  key={filter}
                  type="button"
                  onClick={() => handleFilterChange(filter)}
                  aria-pressed={isActive}
                  className={`relative shrink-0 cursor-pointer overflow-hidden rounded-xl border px-5 py-3 text-sm font-semibold transition-all duration-300 ${
                    isActive
                      ? "border-cyan-400/50 bg-cyan-400/10 text-cyan-100 shadow-[0_0_25px_rgba(34,211,238,0.12)]"
                      : "border-white/10 bg-white/[0.025] text-slate-400 hover:border-violet-400/40 hover:bg-violet-400/[0.06] hover:text-white"
                  }`}
                >
                  <span className="relative z-10">{filter}</span>

                  {isActive && (
                    <motion.span
                      layoutId="active-project-filter"
                      className="absolute inset-x-4 bottom-0 h-px bg-gradient-to-r from-transparent via-cyan-300 to-transparent"
                      transition={{
                        type: "spring",
                        stiffness: 350,
                        damping: 30,
                      }}
                    />
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {/* Active filter result information */}
        <div className="mt-3 flex min-h-6 items-center justify-between gap-4 text-sm text-slate-500">
          <p>
            Showing{" "}
            <span className="font-semibold text-slate-300">
              {visibleProjects.length}
            </span>{" "}
            {visibleProjects.length === 1 ? "project" : "projects"}
            {activeFilter !== "All" && (
              <>
                {" "}
                in{" "}
                <span className="font-semibold text-cyan-300">
                  {activeFilter}
                </span>
              </>
            )}
          </p>

          {activeFilter !== "All" && (
            <button
              type="button"
              onClick={() => handleFilterChange("All")}
              className="cursor-pointer font-medium text-cyan-300 transition hover:text-cyan-200"
            >
              Clear filter
            </button>
          )}
        </div>

        {/* Projects grid */}
        <motion.div
          layout
          className="mt-7 grid gap-6 md:grid-cols-2 xl:grid-cols-3"
        >
          <AnimatePresence mode="popLayout">
            {visibleProjects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Empty result */}
        {visibleProjects.length === 0 && (
          <div className="mt-8 rounded-[2rem] border border-white/10 bg-white/[0.025] px-6 py-16 text-center backdrop-blur-xl">
            <p className="text-lg font-semibold text-white">
              No projects found
            </p>

            <p className="mt-2 text-sm text-slate-400">
              There are currently no projects available in this category.
            </p>

            <button
              type="button"
              onClick={() => handleFilterChange("All")}
              className="mt-6 cursor-pointer rounded-xl border border-cyan-400/30 bg-cyan-400/[0.08] px-5 py-3 text-sm font-semibold text-cyan-200 transition hover:border-cyan-300 hover:bg-cyan-400/15"
            >
              View all projects
            </button>
          </div>
        )}

        {/* Show more / show less */}
        {activeFilter === "All" && hiddenProjectsCount > 0 && (
          <div className="mt-12 flex justify-center">
            {!showAllProjects ? (
              <motion.button
                type="button"
                onClick={handleToggleProjects}
                whileHover={{ y: -3 }}
                whileTap={{ scale: 0.98 }}
                className="group relative inline-flex cursor-pointer items-center gap-3 overflow-hidden rounded-2xl border border-cyan-400/30 bg-cyan-400/[0.07] px-6 py-3.5 text-sm font-semibold text-cyan-100 shadow-[0_15px_50px_rgba(34,211,238,0.08)] backdrop-blur-xl transition-all duration-300 hover:border-cyan-300/60 hover:bg-cyan-400/[0.12] sm:px-7"
              >
                <span className="absolute inset-0 translate-y-full bg-gradient-to-r from-cyan-400/[0.08] to-violet-400/[0.08] transition-transform duration-300 group-hover:translate-y-0" />

                <span className="relative">
                  Show {hiddenProjectsCount} More Projects
                </span>

                <FiArrowDown className="relative transition-transform duration-300 group-hover:translate-y-1" />
              </motion.button>
            ) : (
              <motion.button
                type="button"
                onClick={handleShowLess}
                whileHover={{ y: -3 }}
                whileTap={{ scale: 0.98 }}
                className="group inline-flex cursor-pointer items-center gap-3 rounded-2xl border border-white/15 bg-white/[0.04] px-6 py-3.5 text-sm font-semibold text-slate-200 backdrop-blur-xl transition-all duration-300 hover:border-violet-400/40 hover:bg-violet-400/[0.08] hover:text-white sm:px-7"
              >
                Show Less
                <FiArrowUp className="transition-transform duration-300 group-hover:-translate-y-1" />
              </motion.button>
            )}
          </div>
        )}
      </motion.div>
    </section>
  );
}

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const isStartup = project.statuses?.includes("Startup");
  const isFeatured = project.statuses?.includes("Featured");

  return (
    <motion.article
      layout
      variants={cardVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      transition={{
        duration: 0.45,
        delay: Math.min(index * 0.05, 0.3),
        ease: "easeOut",
      }}
      className={`group relative flex h-full flex-col overflow-hidden rounded-[2rem] border bg-[#080d22]/80 shadow-2xl backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 ${
        isStartup
          ? "border-violet-400/30 shadow-[0_20px_80px_rgba(139,92,246,0.09)] hover:border-violet-400/60 hover:shadow-[0_25px_90px_rgba(139,92,246,0.14)]"
          : isFeatured
            ? "border-cyan-400/20 hover:border-cyan-400/50 hover:shadow-[0_25px_90px_rgba(34,211,238,0.12)]"
            : "border-white/10 hover:border-cyan-400/30 hover:shadow-[0_25px_80px_rgba(34,211,238,0.08)]"
      }`}
    >
      {/* Project image */}
      <div className="relative aspect-[16/10] overflow-hidden border-b border-white/10 bg-[#0b1026]">
        <Image
          src={project.image}
          alt={project.imageAlt}
          fill
          priority={project.priority <= 3}
          sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.055]"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-[#080d22] via-[#080d22]/10 to-transparent opacity-80" />

        <div
          className={`absolute inset-0 transition-colors duration-500 ${
            isStartup
              ? "bg-violet-500/0 group-hover:bg-violet-500/[0.05]"
              : "bg-cyan-500/0 group-hover:bg-cyan-500/[0.04]"
          }`}
        />

        {/* Status badges */}
        {project.statuses && project.statuses.length > 0 && (
          <div className="absolute left-4 top-4 flex max-w-[75%] flex-wrap gap-2">
            {project.statuses.map((status) => (
              <ProjectStatusBadge key={status} status={status} />
            ))}
          </div>
        )}

        {/* Top case study arrow */}
        {project.caseStudyEnabled && (
          <Link
            href={`/projects/${project.slug}`}
            aria-label={`View ${project.title} case study`}
            className="absolute right-4 top-4 grid h-11 w-11 -translate-y-2 place-items-center rounded-full border border-white/15 bg-[#080d22]/85 text-white opacity-0 shadow-xl backdrop-blur-xl transition-all duration-300 hover:border-cyan-300 hover:bg-cyan-400/15 hover:text-cyan-200 group-hover:translate-y-0 group-hover:opacity-100"
          >
            <FiArrowUpRight className="text-lg" />
          </Link>
        )}
      </div>

      {/* Project content */}
      <div className="flex flex-1 flex-col p-5 sm:p-6">
        {/* Categories */}
        <div className="flex flex-wrap gap-2">
          {project.categories.map((category) => (
            <span
              key={category}
              className={`rounded-full border px-3 py-1 text-[10px] font-bold uppercase tracking-[0.13em] ${
                isStartup
                  ? "border-violet-400/25 bg-violet-400/[0.08] text-violet-200"
                  : "border-cyan-400/15 bg-cyan-400/[0.05] text-cyan-200"
              }`}
            >
              {category}
            </span>
          ))}
        </div>

        {/* Project title */}
        {project.caseStudyEnabled ? (
          <Link
            href={`/projects/${project.slug}`}
            className="group/title mt-5 inline-flex w-fit items-start gap-2"
          >
            <h3 className="text-xl font-bold leading-snug text-white transition-colors duration-300 group-hover/title:text-cyan-300 sm:text-2xl">
              {project.title}
            </h3>

            <FiArrowUpRight className="mt-1 shrink-0 text-cyan-300 opacity-0 transition-all duration-300 group-hover/title:-translate-y-0.5 group-hover/title:translate-x-0.5 group-hover/title:opacity-100" />
          </Link>
        ) : (
          <h3 className="mt-5 text-xl font-bold leading-snug text-white sm:text-2xl">
            {project.title}
          </h3>
        )}

        {/* Description */}
        <p className="mt-4 line-clamp-4 text-sm leading-7 text-slate-400 sm:text-[15px]">
          {project.description}
        </p>

        {/* Technologies */}
        <div className="mt-5 flex flex-wrap gap-2">
          {project.technologies.map((technology) => (
            <span
              key={technology}
              className="rounded-lg border border-white/10 bg-white/[0.035] px-3 py-1.5 text-xs font-medium text-slate-300 transition-colors duration-300 group-hover:border-cyan-400/15"
            >
              {technology}
            </span>
          ))}
        </div>

        {/* Project actions */}
        <div className="mt-auto flex flex-wrap items-center gap-3 border-t border-white/10 pt-6">
          {project.caseStudyEnabled && (
            <Link
              href={`/projects/${project.slug}`}
              className={`group/button inline-flex min-h-10 cursor-pointer items-center gap-2 rounded-xl border px-4 py-2.5 text-sm font-semibold transition-all duration-300 ${
                isStartup
                  ? "border-violet-400/30 bg-violet-400/[0.08] text-violet-200 hover:border-violet-300 hover:bg-violet-400/[0.15]"
                  : "border-cyan-400/30 bg-cyan-400/[0.07] text-cyan-200 hover:border-cyan-300 hover:bg-cyan-400/[0.15]"
              }`}
            >
              View Case Study
              <FiArrowUpRight className="transition-transform duration-300 group-hover/button:-translate-y-0.5 group-hover/button:translate-x-0.5" />
            </Link>
          )}

          {project.links.landingPage && (
            <ExternalProjectLink
              href={project.links.landingPage}
              label="Visit Startup"
              variant="startup"
            />
          )}

          {project.links.github && (
            <IconProjectLink
              href={project.links.github}
              label={`${project.title} GitHub repository`}
              icon={<FiGithub />}
              variant="github"
            />
          )}

          {project.links.live && (
            <IconProjectLink
              href={project.links.live}
              label={`${project.title} live demo`}
              icon={<FiExternalLink />}
              variant="live"
            />
          )}
        </div>
      </div>

      {/* Bottom hover glow */}
      <div
        className={`pointer-events-none absolute inset-x-12 bottom-0 h-px bg-gradient-to-r from-transparent to-transparent transition-all duration-500 ${
          isStartup
            ? "via-violet-400/0 group-hover:via-violet-400/80"
            : "via-cyan-400/0 group-hover:via-cyan-400/70"
        }`}
      />
    </motion.article>
  );
}

function ProjectStatusBadge({ status }: { status: ProjectStatus }) {
  const styles: Record<ProjectStatus, string> = {
    Featured: "border-cyan-300/30 bg-[#080d22]/85 text-cyan-200",
    Startup: "border-violet-300/35 bg-violet-500/15 text-violet-100",
    "In Development": "border-amber-300/30 bg-amber-400/10 text-amber-200",
    "Real-Time": "border-emerald-300/30 bg-emerald-400/10 text-emerald-200",
    Live: "border-green-300/30 bg-green-400/10 text-green-200",
    "GitHub Only": "border-slate-300/20 bg-slate-500/10 text-slate-300",
  };

  return (
    <span
      className={`rounded-full border px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.12em] shadow-lg backdrop-blur-xl ${styles[status]}`}
    >
      {status}
    </span>
  );
}

function ExternalProjectLink({
  href,
  label,
  variant,
}: {
  href: string;
  label: string;
  variant: "startup";
}) {
  const variants = {
    startup:
      "border-violet-400/30 bg-violet-400/[0.08] text-violet-200 hover:border-violet-300 hover:bg-violet-400/[0.15]",
  };

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`group/external inline-flex min-h-10 cursor-pointer items-center gap-2 rounded-xl border px-4 py-2.5 text-sm font-semibold transition-all duration-300 ${variants[variant]}`}
    >
      {label}

      <FiExternalLink className="transition-transform duration-300 group-hover/external:-translate-y-0.5 group-hover/external:translate-x-0.5" />
    </a>
  );
}

function IconProjectLink({
  href,
  label,
  icon,
  variant,
}: {
  href: string;
  label: string;
  icon: React.ReactNode;
  variant: "github" | "live";
}) {
  const variants = {
    github:
      "hover:border-violet-400/40 hover:bg-violet-400/10 hover:text-violet-200",
    live: "hover:border-cyan-400/40 hover:bg-cyan-400/10 hover:text-cyan-200",
  };

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      title={label}
      className={`grid h-10 w-10 cursor-pointer place-items-center rounded-xl border border-white/10 bg-white/[0.03] text-slate-300 transition-all duration-300 ${variants[variant]}`}
    >
      {icon}
    </a>
  );
}
