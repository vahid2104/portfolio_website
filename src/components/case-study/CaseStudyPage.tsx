"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import type { IconType } from "react-icons";

import {
  FiArrowLeft,
  FiArrowRight,
  FiArrowUpRight,
  FiBookmark,
  FiCheck,
  FiCode,
  FiCompass,
  FiDatabase,
  FiEdit3,
  FiExternalLink,
  FiGithub,
  FiGrid,
  FiLayers,
  FiLock,
  FiMessageCircle,
  FiServer,
  FiShield,
  FiTarget,
  FiTrendingUp,
  FiUploadCloud,
  FiUserPlus,
  FiUsers,
  FiZap,
} from "react-icons/fi";

import type {
  ProjectCaseStudy,
  ProjectFeatureSection,
  ProjectIconName,
  ProjectLink,
  ProjectRoadmapStatus,
} from "@/types/project";

type CaseStudyPageProps = {
  project: ProjectCaseStudy;
};

type AccentStyles = {
  text: string;
  border: string;
  background: string;
  hoverBorder: string;
  hoverBackground: string;
  glow: string;
  gradient: string;
  shadow: string;
};

const iconMap: Record<ProjectIconName, IconType> = {
  bookmark: FiBookmark,
  compass: FiCompass,
  edit: FiEdit3,
  grid: FiGrid,
  lock: FiLock,
  message: FiMessageCircle,
  shield: FiShield,
  target: FiTarget,
  trending: FiTrendingUp,
  upload: FiUploadCloud,
  userPlus: FiUserPlus,
  users: FiUsers,
  zap: FiZap,
  layers: FiLayers,
  code: FiCode,
  server: FiServer,
  database: FiDatabase,
};

const revealAnimation = {
  hidden: {
    opacity: 0,
    y: 35,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.65,
      ease: "easeOut" as const,
    },
  },
};

function getAccentStyles(
  project: ProjectCaseStudy,
): AccentStyles {
  if (project.theme === "violet") {
    return {
      text: "text-violet-300",
      border: "border-violet-400/25",
      background: "bg-violet-400/[0.08]",
      hoverBorder: "hover:border-violet-400/45",
      hoverBackground: "hover:bg-violet-400/[0.13]",
      glow: "bg-violet-500/[0.1]",
      gradient:
        "from-violet-400 via-blue-500 to-cyan-400",
      shadow:
        "shadow-[0_20px_70px_rgba(139,92,246,0.11)]",
    };
  }

  return {
    text: "text-cyan-300",
    border: "border-cyan-400/25",
    background: "bg-cyan-400/[0.08]",
    hoverBorder: "hover:border-cyan-400/45",
    hoverBackground: "hover:bg-cyan-400/[0.13]",
    glow: "bg-cyan-500/[0.1]",
    gradient:
      "from-cyan-400 via-blue-500 to-violet-500",
    shadow:
      "shadow-[0_20px_70px_rgba(34,211,238,0.1)]",
  };
}

export default function CaseStudyPage({
  project,
}: CaseStudyPageProps) {
  const accent = getAccentStyles(project);

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#050816] text-white">
      <BackgroundDecorations theme={project.theme} />

      <div className="relative z-10">
        <CaseStudyNavigation
          project={project}
          accent={accent}
        />

        <HeroSection
          project={project}
          accent={accent}
        />

        <OverviewSection
          project={project}
          accent={accent}
        />

        {project.story && (
          <StorySection
            project={project}
            accent={accent}
          />
        )}

        {project.problemSolution && (
          <ProblemSolutionSection
            project={project}
            accent={accent}
          />
        )}

        {project.principles && (
          <FeatureGridSection
            data={project.principles}
            accent={accent}
          />
        )}

        {project.features && (
          <FeatureGridSection
            data={project.features}
            accent={accent}
          />
        )}

        {project.techStack && (
          <TechStackSection
            project={project}
            accent={accent}
          />
        )}

        {project.architecture && (
          <ArchitectureSection
            project={project}
            accent={accent}
          />
        )}

        {project.roadmap && (
          <RoadmapSection
            project={project}
            accent={accent}
          />
        )}

        {project.challenges && (
          <ChallengesSection
            project={project}
            accent={accent}
          />
        )}

        {project.learnings && (
          <LearningsSection
            project={project}
            accent={accent}
          />
        )}

        {project.gallery && (
          <GallerySection
            project={project}
            accent={accent}
          />
        )}

        <FinalCallToAction
          project={project}
          accent={accent}
        />
      </div>
    </main>
  );
}

function BackgroundDecorations({
  theme,
}: {
  theme: ProjectCaseStudy["theme"];
}) {
  const isViolet = theme === "violet";

  return (
    <>
      <div className="pointer-events-none fixed inset-0 bg-[linear-gradient(rgba(255,255,255,0.015)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.015)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:linear-gradient(to_bottom,black,transparent_88%)]" />

      <div
        className={`pointer-events-none fixed -left-40 top-1/4 h-[440px] w-[440px] rounded-full blur-[160px] ${
          isViolet
            ? "bg-violet-500/[0.09]"
            : "bg-cyan-500/[0.08]"
        }`}
      />

      <div
        className={`pointer-events-none fixed -right-40 top-1/2 h-[500px] w-[500px] rounded-full blur-[175px] ${
          isViolet
            ? "bg-cyan-500/[0.06]"
            : "bg-violet-500/[0.07]"
        }`}
      />
    </>
  );
}

function CaseStudyNavigation({
  project,
  accent,
}: {
  project: ProjectCaseStudy;
  accent: AccentStyles;
}) {
  return (
    <nav className="mx-auto flex max-w-[1400px] items-center justify-between px-4 py-6 sm:px-6 lg:px-8">
      <Link
        href="/#projects"
        className={`group inline-flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.03] px-4 py-2.5 text-sm font-semibold text-slate-300 backdrop-blur-xl transition-all duration-300 ${accent.hoverBorder} hover:bg-white/[0.06] hover:text-white`}
      >
        <FiArrowLeft className="transition-transform duration-300 group-hover:-translate-x-1" />

        Back to projects
      </Link>

      <div className="hidden items-center gap-2 text-xs font-semibold uppercase tracking-[0.22em] text-slate-500 sm:flex">
        <span>Case Study</span>

        <span
          className={`h-1.5 w-1.5 rounded-full ${accent.background}`}
        />

        <span className={accent.text}>
          {project.categories[0]}
        </span>
      </div>
    </nav>
  );
}

function HeroSection({
  project,
  accent,
}: {
  project: ProjectCaseStudy;
  accent: AccentStyles;
}) {
  return (
    <section className="px-4 pb-20 pt-12 sm:px-6 sm:pt-16 lg:px-8 lg:pb-28 lg:pt-20">
      <div className="mx-auto max-w-[1400px]">
        <motion.div
          variants={revealAnimation}
          initial="hidden"
          animate="visible"
          className="mx-auto max-w-5xl text-center"
        >
          <div className="flex flex-wrap justify-center gap-2">
            {project.statuses.map((status) => (
              <Badge
                key={`status-${status}`}
                accent={accent}
              >
                {status}
              </Badge>
            ))}

            {project.categories.map((category) => (
              <Badge
                key={`category-${category}`}
                accent={accent}
              >
                {category}
              </Badge>
            ))}
          </div>

          <h1 className="mt-8 text-4xl font-black leading-[1.08] tracking-tight text-white sm:text-6xl lg:text-7xl">
            {project.title}

            {project.highlightedTitle && (
              <span
                className={`ml-3 bg-gradient-to-r ${accent.gradient} bg-clip-text text-transparent`}
              >
                {project.highlightedTitle}
              </span>
            )}
          </h1>

          <p className="mx-auto mt-7 max-w-3xl text-base leading-8 text-slate-400 sm:text-lg lg:text-xl">
            {project.subtitle}
          </p>

          <div className="mt-9 flex flex-wrap justify-center gap-3">
            {project.links.map((link) => (
              <ProjectLinkButton
                key={`${link.type}-${link.label}`}
                link={link}
                accent={accent}
              />
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{
            opacity: 0,
            y: 45,
            scale: 0.98,
          }}
          animate={{
            opacity: 1,
            y: 0,
            scale: 1,
          }}
          transition={{
            duration: 0.8,
            delay: 0.2,
          }}
          className="relative mx-auto mt-14 max-w-6xl"
        >
          <div
            className={`absolute -inset-4 rounded-[2.5rem] ${accent.glow} blur-2xl`}
          />

          <div
            className={`relative overflow-hidden rounded-[1.5rem] border ${accent.border} bg-[#090e23]/90 p-2 shadow-[0_35px_120px_rgba(0,0,0,0.45)] sm:rounded-[2rem] sm:p-3`}
          >
            <div className="mb-3 flex items-center gap-2 px-2 pt-1">
              <span className="h-2.5 w-2.5 rounded-full bg-red-400/70" />

              <span className="h-2.5 w-2.5 rounded-full bg-amber-400/70" />

              <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/70" />

              <div className="ml-2 h-7 flex-1 rounded-lg border border-white/5 bg-white/[0.025]" />
            </div>

            <div className="relative aspect-[16/9] overflow-hidden rounded-xl border border-white/10 bg-[#0c1228] sm:rounded-[1.35rem]">
              <Image
                src={project.heroImage}
                alt={project.heroImageAlt}
                fill
                priority
                sizes="(max-width: 1400px) 100vw, 1400px"
                className="object-cover"
              />

              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#050816]/25 to-transparent" />
            </div>
          </div>
        </motion.div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {project.metrics.map((metric) => (
            <ProjectMetricCard
              key={`${metric.value}-${metric.label}`}
              value={metric.value}
              label={metric.label}
              icon={metric.icon}
              accent={accent}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function OverviewSection({
  project,
  accent,
}: {
  project: ProjectCaseStudy;
  accent: AccentStyles;
}) {
  return (
    <SectionContainer
      eyebrow={project.overview.eyebrow}
      title={project.overview.title}
      description={project.overview.description}
      accent={accent}
    >
      <div className="grid gap-6 lg:grid-cols-[1.35fr_0.65fr]">
        <GlassCard className="p-6 sm:p-8 lg:p-10">
          <div className="space-y-5 text-sm leading-8 text-slate-400 sm:text-base">
            {project.overview.paragraphs.map(
              (paragraph, index) => (
                <p key={`${index}-${paragraph}`}>
                  {paragraph}
                </p>
              ),
            )}
          </div>
        </GlassCard>

        <GlassCard className="p-6 sm:p-8">
          <p
            className={`text-xs font-bold uppercase tracking-[0.28em] ${accent.text}`}
          >
            {project.overview.contributionEyebrow ??
              "My contribution"}
          </p>

          <h3 className="mt-4 text-2xl font-bold text-white">
            {project.overview.contributionTitle}
          </h3>

          <div className="mt-6 space-y-4">
            {project.overview.contributions.map((item) => (
              <CheckItem
                key={item}
                text={item}
                accent={accent}
              />
            ))}
          </div>
        </GlassCard>
      </div>
    </SectionContainer>
  );
}

function StorySection({
  project,
  accent,
}: {
  project: ProjectCaseStudy;
  accent: AccentStyles;
}) {
  const story = project.story;

  if (!story) {
    return null;
  }

  return (
    <SectionContainer
      eyebrow={story.eyebrow}
      title={story.title}
      description={story.description}
      accent={accent}
    >
      <GlassCard className="relative overflow-hidden p-6 sm:p-8 lg:p-12">
        <div
          className={`pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full ${accent.glow} blur-[100px]`}
        />

        <div className="relative grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
          <div>
            <span
              className={`grid h-14 w-14 place-items-center rounded-2xl border ${accent.border} ${accent.background} text-2xl ${accent.text}`}
            >
              <FiLayers />
            </span>

            <h3 className="mt-7 text-3xl font-black leading-tight text-white sm:text-4xl">
              {story.heading}
            </h3>
          </div>

          <div className="space-y-5 text-sm leading-8 text-slate-400 sm:text-base">
            {story.paragraphs.map((paragraph, index) => (
              <p key={`${index}-${paragraph}`}>
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </GlassCard>
    </SectionContainer>
  );
}

function ProblemSolutionSection({
  project,
  accent,
}: {
  project: ProjectCaseStudy;
  accent: AccentStyles;
}) {
  const section = project.problemSolution;

  if (!section) {
    return null;
  }

  return (
    <SectionContainer
      eyebrow={section.eyebrow}
      title={section.title}
      description={section.description}
      accent={accent}
    >
      <div className="grid gap-6 lg:grid-cols-2">
        <GlassCard className="relative overflow-hidden p-6 sm:p-8 lg:p-10">
          <div className="absolute right-0 top-0 text-[130px] font-black leading-none text-red-400/[0.025]">
            01
          </div>

          <p className="text-xs font-bold uppercase tracking-[0.28em] text-red-300">
            The problem
          </p>

          <h3 className="mt-4 text-2xl font-bold leading-snug text-white sm:text-3xl">
            {section.problem.title}
          </h3>

          <ul className="mt-7 space-y-4">
            {section.problem.items.map((item) => (
              <li
                key={item}
                className="flex items-start gap-3 text-sm leading-7 text-slate-400 sm:text-base"
              >
                <span className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-red-300" />

                {item}
              </li>
            ))}
          </ul>
        </GlassCard>

        <GlassCard className="relative overflow-hidden p-6 sm:p-8 lg:p-10">
          <div
            className={`absolute right-0 top-0 text-[130px] font-black leading-none opacity-[0.035] ${accent.text}`}
          >
            02
          </div>

          <p
            className={`text-xs font-bold uppercase tracking-[0.28em] ${accent.text}`}
          >
            The solution
          </p>

          <h3 className="mt-4 text-2xl font-bold leading-snug text-white sm:text-3xl">
            {section.solution.title}
          </h3>

          <div className="mt-7 space-y-4">
            {section.solution.items.map((item) => (
              <CheckItem
                key={item}
                text={item}
                accent={accent}
              />
            ))}
          </div>
        </GlassCard>
      </div>
    </SectionContainer>
  );
}

function FeatureGridSection({
  data,
  accent,
}: {
  data: ProjectFeatureSection;
  accent: AccentStyles;
}) {
  return (
    <SectionContainer
      eyebrow={data.eyebrow}
      title={data.title}
      description={data.description}
      accent={accent}
    >
      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {data.items.map((item, index) => {
          const Icon = item.icon
            ? iconMap[item.icon]
            : FiLayers;

          return (
            <motion.article
              key={item.title}
              initial={{
                opacity: 0,
                y: 25,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
                amount: 0.2,
              }}
              transition={{
                duration: 0.5,
                delay: index * 0.06,
              }}
              className={`group rounded-[1.75rem] border border-white/10 bg-white/[0.025] p-6 backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 ${accent.hoverBorder} ${accent.hoverBackground}`}
            >
              <span
                className={`grid h-12 w-12 place-items-center rounded-2xl border ${accent.border} ${accent.background} text-xl ${accent.text} transition-transform duration-500 group-hover:rotate-3 group-hover:scale-110`}
              >
                <Icon />
              </span>

              <h3 className="mt-6 text-xl font-bold text-white">
                {item.title}
              </h3>

              <p className="mt-3 text-sm leading-7 text-slate-400">
                {item.description}
              </p>
            </motion.article>
          );
        })}
      </div>
    </SectionContainer>
  );
}

function TechStackSection({
  project,
  accent,
}: {
  project: ProjectCaseStudy;
  accent: AccentStyles;
}) {
  const section = project.techStack;

  if (!section) {
    return null;
  }

  return (
    <SectionContainer
      eyebrow={section.eyebrow}
      title={section.title}
      description={section.description}
      accent={accent}
    >
      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
        {section.groups.map((group) => {
          const Icon = group.icon
            ? iconMap[group.icon]
            : FiLayers;

          return (
            <GlassCard
              key={group.title}
              className={`p-6 transition-all duration-300 ${accent.hoverBorder}`}
            >
              <div className="flex items-center gap-3">
                <span
                  className={`grid h-11 w-11 place-items-center rounded-xl border ${accent.border} ${accent.background} ${accent.text}`}
                >
                  <Icon />
                </span>

                <h3 className="text-lg font-bold text-white">
                  {group.title}
                </h3>
              </div>

              <div className="mt-6 flex flex-wrap gap-2">
                {group.technologies.map((technology) => (
                  <span
                    key={technology}
                    className="rounded-lg border border-white/10 bg-white/[0.035] px-3 py-2 text-xs font-medium text-slate-300"
                  >
                    {technology}
                  </span>
                ))}
              </div>
            </GlassCard>
          );
        })}
      </div>
    </SectionContainer>
  );
}

function ArchitectureSection({
  project,
  accent,
}: {
  project: ProjectCaseStudy;
  accent: AccentStyles;
}) {
  const section = project.architecture;

  if (!section) {
    return null;
  }

  return (
    <SectionContainer
      eyebrow={section.eyebrow}
      title={section.title}
      description={section.description}
      accent={accent}
    >
      <GlassCard className="p-5 sm:p-8 lg:p-10">
        <div className="grid items-center gap-5 lg:grid-cols-[1fr_auto_1fr_auto_1fr_auto_1fr]">
          {section.items.map((item, index) => {
            const Icon = item.icon
              ? iconMap[item.icon]
              : FiLayers;

            return (
              <div
                key={item.title}
                className="contents"
              >
                <div
                  className={`rounded-2xl border border-white/10 bg-[#0a1026]/80 p-5 text-center transition-all duration-300 ${accent.hoverBorder}`}
                >
                  <span
                    className={`mx-auto grid h-12 w-12 place-items-center rounded-2xl border ${accent.border} ${accent.background} text-xl ${accent.text}`}
                  >
                    <Icon />
                  </span>

                  <h3 className="mt-4 font-bold text-white">
                    {item.title}
                  </h3>

                  <p className="mt-1 text-xs text-slate-500">
                    {item.subtitle}
                  </p>
                </div>

                {index < section.items.length - 1 && (
                  <div className="flex items-center justify-center">
                    <FiArrowRight
                      className={`rotate-90 text-xl lg:rotate-0 ${accent.text}`}
                    />
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {section.note && (
          <div
            className={`mt-8 rounded-2xl border ${accent.border} ${accent.background} p-5`}
          >
            <div className="flex items-start gap-4">
              <span
                className={`grid h-10 w-10 shrink-0 place-items-center rounded-xl border ${accent.border} bg-[#080d22] ${accent.text}`}
              >
                <FiShield />
              </span>

              <p className="text-sm leading-7 text-slate-400">
                {section.note}
              </p>
            </div>
          </div>
        )}
      </GlassCard>
    </SectionContainer>
  );
}

function RoadmapSection({
  project,
  accent,
}: {
  project: ProjectCaseStudy;
  accent: AccentStyles;
}) {
  const section = project.roadmap;

  if (!section) {
    return null;
  }

  return (
    <SectionContainer
      eyebrow={section.eyebrow}
      title={section.title}
      description={section.description}
      accent={accent}
    >
      <GlassCard className="p-5 sm:p-8 lg:p-10">
        <div className="grid gap-5 lg:grid-cols-4">
          {section.items.map((item, index) => (
            <motion.article
              key={item.stage}
              initial={{
                opacity: 0,
                y: 25,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
                amount: 0.2,
              }}
              transition={{
                duration: 0.5,
                delay: index * 0.08,
              }}
              className="rounded-2xl border border-white/10 bg-[#090f25]/80 p-5"
            >
              <div className="flex items-center justify-between gap-3">
                <span
                  className={`grid h-12 w-12 place-items-center rounded-full border ${accent.border} bg-[#080d22] text-sm font-black ${accent.text}`}
                >
                  {item.stage}
                </span>

                <RoadmapStatusBadge status={item.status} />
              </div>

              <h3 className="mt-6 text-lg font-bold text-white">
                {item.title}
              </h3>

              <p className="mt-3 text-sm leading-7 text-slate-400">
                {item.description}
              </p>
            </motion.article>
          ))}
        </div>
      </GlassCard>
    </SectionContainer>
  );
}

function ChallengesSection({
  project,
  accent,
}: {
  project: ProjectCaseStudy;
  accent: AccentStyles;
}) {
  const section = project.challenges;

  if (!section) {
    return null;
  }

  return (
    <SectionContainer
      eyebrow={section.eyebrow}
      title={section.title}
      description={section.description}
      accent={accent}
    >
      <div className="grid gap-5 lg:grid-cols-2">
        {section.items.map((challenge, index) => (
          <motion.article
            key={challenge.number}
            initial={{
              opacity: 0,
              x: index % 2 === 0 ? -25 : 25,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
              amount: 0.2,
            }}
            transition={{
              duration: 0.55,
            }}
            className="relative overflow-hidden rounded-[1.75rem] border border-white/10 bg-white/[0.025] p-6 backdrop-blur-xl sm:p-8"
          >
            <span
              className={`absolute right-4 top-0 text-[90px] font-black leading-none opacity-[0.04] ${accent.text}`}
            >
              {challenge.number}
            </span>

            <p
              className={`text-sm font-bold tracking-[0.2em] ${accent.text}`}
            >
              CHALLENGE {challenge.number}
            </p>

            <h3 className="relative mt-4 text-xl font-bold text-white sm:text-2xl">
              {challenge.title}
            </h3>

            <p className="relative mt-4 text-sm leading-7 text-slate-400 sm:text-base">
              {challenge.description}
            </p>
          </motion.article>
        ))}
      </div>
    </SectionContainer>
  );
}

function LearningsSection({
  project,
  accent,
}: {
  project: ProjectCaseStudy;
  accent: AccentStyles;
}) {
  const section = project.learnings;

  if (!section) {
    return null;
  }

  return (
    <SectionContainer
      eyebrow={section.eyebrow}
      title={section.title}
      description={section.description}
      accent={accent}
    >
      <div className="grid gap-4 md:grid-cols-2">
        {section.items.map((learning, index) => (
          <motion.div
            key={learning}
            initial={{
              opacity: 0,
              y: 18,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
              amount: 0.2,
            }}
            transition={{
              duration: 0.4,
              delay: index * 0.04,
            }}
            className="flex items-start gap-4 rounded-2xl border border-white/10 bg-white/[0.025] p-5 backdrop-blur-xl"
          >
            <span
              className={`grid h-8 w-8 shrink-0 place-items-center rounded-xl border ${accent.border} ${accent.background} ${accent.text}`}
            >
              <FiCheck />
            </span>

            <p className="pt-1 text-sm leading-7 text-slate-300 sm:text-base">
              {learning}
            </p>
          </motion.div>
        ))}
      </div>
    </SectionContainer>
  );
}

function GallerySection({
  project,
  accent,
}: {
  project: ProjectCaseStudy;
  accent: AccentStyles;
}) {
  const section = project.gallery;

  if (!section) {
    return null;
  }

  return (
    <SectionContainer
      eyebrow={section.eyebrow}
      title={section.title}
      description={section.description}
      accent={accent}
    >
      <div className="grid gap-6 lg:grid-cols-2">
        {section.images.map((image, index) => (
          <motion.figure
            key={image.src}
            initial={{
              opacity: 0,
              y: 30,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
              amount: 0.15,
            }}
            transition={{
              duration: 0.55,
              delay: index * 0.05,
            }}
            className="group overflow-hidden rounded-[1.75rem] border border-white/10 bg-[#090e23]/90 p-2 shadow-2xl"
          >
            <div className="relative aspect-[16/10] overflow-hidden rounded-[1.3rem] bg-[#0b1128]">
              <Image
                src={image.src}
                alt={image.alt}
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
              />

              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#050816]/55 via-transparent to-transparent" />

              <figcaption className="absolute bottom-4 left-4 rounded-xl border border-white/10 bg-[#050816]/75 px-4 py-2 text-sm font-semibold text-white backdrop-blur-xl">
                {image.label}
              </figcaption>
            </div>
          </motion.figure>
        ))}
      </div>
    </SectionContainer>
  );
}

function FinalCallToAction({
  project,
  accent,
}: {
  project: ProjectCaseStudy;
  accent: AccentStyles;
}) {
  return (
    <section className="px-4 pb-24 pt-8 sm:px-6 lg:px-8 lg:pb-32">
      <motion.div
        initial={{
          opacity: 0,
          y: 35,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        viewport={{
          once: true,
          amount: 0.2,
        }}
        transition={{
          duration: 0.65,
        }}
        className={`relative mx-auto max-w-[1200px] overflow-hidden rounded-[2rem] border ${accent.border} bg-white/[0.025] px-6 py-14 text-center backdrop-blur-xl sm:px-10 lg:py-20 ${accent.shadow}`}
      >
        <div
          className={`pointer-events-none absolute left-1/2 top-0 h-40 w-80 -translate-x-1/2 rounded-full ${accent.glow} blur-[90px]`}
        />

        <div className="relative">
          <p
            className={`text-xs font-bold uppercase tracking-[0.3em] ${accent.text}`}
          >
            {project.cta.eyebrow}
          </p>

          <h2 className="mx-auto mt-4 max-w-3xl text-3xl font-black tracking-tight text-white sm:text-4xl lg:text-5xl">
            {project.cta.title}
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-slate-400 sm:text-base">
            {project.cta.description}
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-3">
            {project.links.map((link) => (
              <ProjectLinkButton
                key={`cta-${link.type}-${link.label}`}
                link={link}
                accent={accent}
              />
            ))}

            <Link
              href="/#projects"
              className="group inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.035] px-5 py-3 text-sm font-semibold text-slate-200 transition-all duration-300 hover:-translate-y-1 hover:border-white/25 hover:bg-white/[0.07] hover:text-white"
            >
              View Other Projects

              <FiArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

function ProjectLinkButton({
  link,
  accent,
}: {
  link: ProjectLink;
  accent: AccentStyles;
}) {
  const Icon =
    link.type === "github"
      ? FiGithub
      : FiExternalLink;

  return (
    <a
      href={link.href}
      target="_blank"
      rel="noopener noreferrer"
      className={`group relative inline-flex items-center gap-2 overflow-hidden rounded-xl border ${accent.border} ${accent.background} px-5 py-3 text-sm font-semibold ${accent.text} transition-all duration-300 hover:-translate-y-1 ${accent.hoverBorder} ${accent.hoverBackground}`}
    >
      <span
        className={`absolute inset-0 translate-y-full bg-gradient-to-r ${accent.gradient} opacity-[0.08] transition-transform duration-300 group-hover:translate-y-0`}
      />

      <Icon className="relative" />

      <span className="relative">{link.label}</span>

      <FiArrowUpRight className="relative transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
    </a>
  );
}

function SectionContainer({
  eyebrow,
  title,
  description,
  children,
  accent,
}: {
  eyebrow: string;
  title: string;
  description: string;
  children: React.ReactNode;
  accent: AccentStyles;
}) {
  return (
    <section className="px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
      <motion.div
        variants={revealAnimation}
        initial="hidden"
        whileInView="visible"
        viewport={{
          once: true,
          amount: 0.08,
        }}
        className="mx-auto max-w-[1400px]"
      >
        <div className="mb-10 max-w-3xl lg:mb-14">
          <div className="flex items-center gap-3">
            <span
              className={`h-2.5 w-2.5 rounded-full ${accent.background}`}
            />

            <p
              className={`text-xs font-bold uppercase tracking-[0.32em] ${accent.text}`}
            >
              {eyebrow}
            </p>

            <div
              className={`h-px w-14 bg-gradient-to-r ${accent.gradient} opacity-50`}
            />
          </div>

          <h2 className="mt-5 text-3xl font-black tracking-tight text-white sm:text-4xl lg:text-5xl">
            {title}
          </h2>

          <p className="mt-5 max-w-2xl text-sm leading-7 text-slate-400 sm:text-base">
            {description}
          </p>
        </div>

        {children}
      </motion.div>
    </section>
  );
}

function GlassCard({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`rounded-[1.75rem] border border-white/10 bg-white/[0.025] shadow-2xl backdrop-blur-xl ${className}`}
    >
      {children}
    </div>
  );
}

function Badge({
  children,
  accent,
}: {
  children: React.ReactNode;
  accent: AccentStyles;
}) {
  return (
    <span
      className={`rounded-full border ${accent.border} ${accent.background} px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.16em] ${accent.text} sm:text-xs`}
    >
      {children}
    </span>
  );
}

function ProjectMetricCard({
  value,
  label,
  icon,
  accent,
}: {
  value: string;
  label: string;
  icon?: ProjectIconName;
  accent: AccentStyles;
}) {
  const Icon = icon ? iconMap[icon] : FiLayers;

  return (
    <div className="rounded-2xl border border-white/10 bg-white/[0.025] p-5 backdrop-blur-xl">
      <div className="flex items-center gap-4">
        <span
          className={`grid h-10 w-10 shrink-0 place-items-center rounded-xl border ${accent.border} ${accent.background} ${accent.text}`}
        >
          <Icon />
        </span>

        <div>
          <p className="font-bold text-white">{value}</p>

          <p className="mt-1 text-xs text-slate-500">
            {label}
          </p>
        </div>
      </div>
    </div>
  );
}

function CheckItem({
  text,
  accent,
}: {
  text: string;
  accent: AccentStyles;
}) {
  return (
    <div className="flex items-start gap-3 text-sm leading-6 text-slate-300">
      <span
        className={`mt-1 grid h-5 w-5 shrink-0 place-items-center rounded-full border ${accent.border} ${accent.background} ${accent.text}`}
      >
        <FiCheck className="text-xs" />
      </span>

      <span>{text}</span>
    </div>
  );
}

function RoadmapStatusBadge({
  status,
}: {
  status: ProjectRoadmapStatus;
}) {
  const styles: Record<ProjectRoadmapStatus, string> = {
    Completed:
      "border-emerald-400/20 bg-emerald-400/[0.08] text-emerald-200",

    "In Development":
      "border-amber-400/20 bg-amber-400/[0.08] text-amber-200",

    Planned:
      "border-slate-400/15 bg-slate-400/[0.06] text-slate-400",
  };

  return (
    <span
      className={`rounded-full border px-2.5 py-1 text-[9px] font-bold uppercase tracking-[0.1em] ${styles[status]}`}
    >
      {status}
    </span>
  );
}