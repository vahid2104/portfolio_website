"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  FiCalendar,
  FiExternalLink,
  FiMapPin,
} from "react-icons/fi";

type Experience = {
  company: string;
  role: string;
  period: string;
  location: string;
  description: string;
  technologies: string[];
  logoSrc: string;
  logoAlt: string;
  website: string;
};

const experiences: Experience[] = [
  {
    company: "Yup Technology",
    role: "Frontend Developer Trainee",
    period: "15 June 2023 — 15 September 2023",
    location: "On-site · Baku, Azerbaijan",
    description:
      "Built practical frontend projects with HTML, CSS, JavaScript and React in a project-based training environment. Worked with Git, responsive design, reusable components, debugging and collaborative development workflows.",
    technologies: [
      "React",
      "JavaScript",
      "Tailwind CSS",
      "Git",
    ],
    logoSrc: "/images/companies/yup-technology.jpg",
    logoAlt: "Yup Technology logo",
    website:
      "https://www.linkedin.com/company/yuptechnology/",
  },
  {
    company: "Software Village",
    role: "Frontend Developer Intern",
    period: "15 May 2025 — 15 July 2025",
    location: "Remote",
    description:
      "Collaborated with a development team on practical software projects using Agile and Scrum principles. Worked in sprint-based cycles, contributed to task planning and delivery, shared progress with the team and strengthened real-world development, communication and problem-solving skills.",
    technologies: [
      "React",
      "Next.js",
      "TypeScript",
      "Git",
    ],
    logoSrc: "/images/companies/software-village.jpg",
    logoAlt: "Software Village logo",
    website:
      "https://www.linkedin.com/school/software-village/posts/?feedView=all",
  },
  {
    company: "Flyrank AI",
    role: "Front-end AI Engineering Intern",
    period: "1 July 2025 — Present",
    location: "Remote",
    description:
      "Contributed to AI-oriented and software development tasks. Worked with APIs, application logic and intelligent features designed for practical real-world use cases.",
    technologies: [
      "AI APIs",
      "JavaScript",
      "React",
      "REST API",
    ],
    logoSrc: "/images/companies/flyrank-ai.jpg",
    logoAlt: "Flyrank AI logo",
    website:
      "https://www.linkedin.com/company/flyrank/posts/?feedView=all",
  },
];

const containerAnimation = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const headingAnimation = {
  hidden: {
    opacity: 0,
    y: 28,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.65,
    },
  },
};

export default function WorkExperience() {
  return (
    <section
      id="experience"
      className="relative overflow-hidden px-4 py-24 sm:px-6 lg:py-32"
    >
      {/* Background separator */}
      <div className="pointer-events-none absolute left-1/2 top-0 h-px w-[78%] -translate-x-1/2 bg-gradient-to-r from-transparent via-violet-400/25 to-transparent" />

      {/* Background glows */}
      <div className="pointer-events-none absolute -left-48 top-1/3 h-[440px] w-[440px] rounded-full bg-violet-500/[0.08] blur-[160px]" />

      <div className="pointer-events-none absolute -right-48 bottom-0 h-[460px] w-[460px] rounded-full bg-cyan-500/[0.07] blur-[160px]" />

      <motion.div
        variants={containerAnimation}
        initial="hidden"
        whileInView="visible"
        viewport={{
          once: true,
          amount: 0.12,
        }}
        className="relative mx-auto max-w-[1400px]"
      >
        <motion.div
          variants={headingAnimation}
          className="rounded-[2rem] border border-white/10 bg-[#080d22]/75 p-5 shadow-2xl backdrop-blur-xl sm:p-8 lg:p-10"
        >
          {/* Section header */}
          <div className="mb-10">
            <div className="flex items-center gap-3">
              <span className="h-2.5 w-2.5 rounded-full bg-violet-400 shadow-[0_0_16px_rgba(167,139,250,0.9)]" />

              <p className="text-xs font-bold uppercase tracking-[0.35em] text-violet-300 sm:text-sm">
                Experience
              </p>

              <div className="h-px w-16 bg-gradient-to-r from-violet-400/70 to-transparent" />
            </div>

            <h2 className="mt-5 text-3xl font-black tracking-tight text-white sm:text-4xl lg:text-5xl">
              Work

              <span className="ml-3 bg-gradient-to-r from-cyan-400 to-violet-500 bg-clip-text text-transparent">
                Experience
              </span>
            </h2>

            <p className="mt-5 max-w-3xl text-base leading-8 text-slate-400">
              Practical experience gained through frontend development,
              collaborative software projects and AI-oriented application
              development.
            </p>
          </div>

          {/* Timeline */}
          <div className="relative">
            <div className="absolute bottom-8 left-[25px] top-8 hidden w-px bg-gradient-to-b from-cyan-400 via-violet-500 to-cyan-400 sm:block" />

            <div className="space-y-6">
              {experiences.map((experience, index) => (
                <ExperienceCard
                  key={`${experience.company}-${experience.role}`}
                  experience={experience}
                  index={index}
                />
              ))}
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}

function ExperienceCard({
  experience,
  index,
}: {
  experience: Experience;
  index: number;
}) {
  const hasWebsite =
    Boolean(experience.website) &&
    experience.website !== "#";

  return (
    <motion.article
      initial={{
        opacity: 0,
        x: 30,
      }}
      whileInView={{
        opacity: 1,
        x: 0,
      }}
      viewport={{
        once: true,
        amount: 0.25,
      }}
      transition={{
        duration: 0.55,
        delay: index * 0.12,
      }}
      className="relative rounded-3xl border border-white/10 bg-white/[0.025] p-5 transition duration-300 hover:-translate-y-1 hover:border-cyan-400/25 hover:bg-white/[0.04] sm:ml-14 sm:p-7"
    >
      {/* Timeline point */}
      <span className="absolute -left-[45px] top-10 hidden h-5 w-5 rounded-full border-4 border-[#080d22] bg-cyan-400 shadow-[0_0_20px_rgba(34,211,238,0.95)] sm:block" />

      <div className="grid gap-6 lg:grid-cols-[130px_1fr]">
        {/* Company logo */}
        <div className="relative flex h-[110px] w-[110px] shrink-0 items-center justify-center overflow-hidden rounded-2xl border border-white/10 bg-[#0b1026] shadow-xl sm:h-[120px] sm:w-[120px]">
          <Image
            src={experience.logoSrc}
            alt={experience.logoAlt}
            fill
            sizes="120px"
            className="object-contain p-4"
          />
        </div>

        {/* Experience information */}
        <div>
          <div className="flex flex-col gap-5 xl:flex-row xl:items-start xl:justify-between">
            <div>
              <h3 className="text-xl font-bold text-white sm:text-2xl">
                {experience.role}
              </h3>

              {hasWebsite ? (
                <a
                  href={experience.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-1 inline-flex items-center gap-2 font-semibold text-cyan-300 transition hover:text-violet-300"
                >
                  {experience.company}

                  <FiExternalLink className="text-sm" />
                </a>
              ) : (
                <p className="mt-1 font-semibold text-cyan-300">
                  {experience.company}
                </p>
              )}

              <div className="mt-4 flex flex-wrap gap-x-5 gap-y-2 text-xs text-slate-400 sm:text-sm">
                <span className="inline-flex items-center gap-2">
                  <FiCalendar className="text-cyan-300" />

                  {experience.period}
                </span>

                <span className="inline-flex items-center gap-2">
                  <FiMapPin className="text-violet-300" />

                  {experience.location}
                </span>
              </div>
            </div>

            {/* Technologies */}
            <div className="flex flex-wrap gap-2 xl:max-w-[430px] xl:justify-end">
              {experience.technologies.map((technology) => (
                <span
                  key={technology}
                  className="rounded-full border border-cyan-400/20 bg-cyan-400/[0.06] px-3 py-1.5 text-xs font-medium text-cyan-200"
                >
                  {technology}
                </span>
              ))}
            </div>
          </div>

          <p className="mt-5 max-w-4xl text-sm leading-7 text-slate-300 sm:text-base sm:leading-8">
            {experience.description}
          </p>
        </div>
      </div>
    </motion.article>
  );
}