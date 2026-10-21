"use client";

import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { useCallback, useEffect, useState } from "react";
import type { IconType } from "react-icons";
import {
  FiArrowLeft,
  FiArrowRight,
  FiArrowUpRight,
  FiBookmark,
  FiCheck,
  FiChevronLeft,
  FiChevronRight,
  FiCode,
  FiCompass,
  FiDatabase,
  FiEdit3,
  FiGithub,
  FiGrid,
  FiLayers,
  FiLock,
  FiMaximize2,
  FiMessageCircle,
  FiMinus,
  FiPlus,
  FiServer,
  FiShield,
  FiTarget,
  FiTrendingUp,
  FiUploadCloud,
  FiUserPlus,
  FiUsers,
  FiX,
  FiZap,
} from "react-icons/fi";

import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import {
  Aurora,
  ButtonLink,
  Reveal,
  SectionHeader,
  SpotlightCard,
  Tag,
  WordReveal,
  container,
} from "@/components/ui/primitives";
import { TechIcon } from "@/components/ui/TechIcon";
import { projects } from "@/data/projects";
import { cn } from "@/lib/utils";
import type {
  ProjectCaseStudy,
  ProjectFeatureSection,
  ProjectGalleryImage,
  ProjectIconName,
  ProjectLink,
} from "@/types/project";

const EASE = [0.22, 1, 0.36, 1] as const;

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

function Icon({ name, className }: { name?: ProjectIconName; className?: string }) {
  const Component = (name && iconMap[name]) || FiLayers;
  return <Component className={className} />;
}

function LinkButton({ link, primary }: { link: ProjectLink; primary?: boolean }) {
  const icon = link.type === "github" ? <FiGithub className="h-[18px] w-[18px]" /> : <FiArrowUpRight className="h-[18px] w-[18px]" />;
  return (
    <ButtonLink href={link.href} external variant={primary ? "accent" : "secondary"} icon={icon} magnetic={primary}>
      {link.label}
    </ButtonLink>
  );
}

/** Section wrapper with an auto-numbered header. */
function Block({
  index,
  eyebrow,
  title,
  description,
  children,
}: {
  index: number;
  eyebrow: string;
  title: string;
  description?: string;
  children: React.ReactNode;
}) {
  return (
    <section className="pt-28 lg:pt-36">
      <div className={container}>
        <SectionHeader index={String(index).padStart(2, "0")} eyebrow={eyebrow} title={title} description={description} />
        <div className="mt-12">{children}</div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* Hero                                                                */
/* ------------------------------------------------------------------ */

function Hero({ project }: { project: ProjectCaseStudy }) {
  return (
    <section id="top" className="relative overflow-hidden pt-[124px] lg:pt-[148px]">
      <div
        aria-hidden
        className="bg-grid pointer-events-none absolute inset-0 [mask-image:radial-gradient(ellipse_at_top,black_15%,transparent_65%)]"
      />
      <Aurora className="h-[900px]" />
      <div className={cn(container, "relative")}>
        <motion.div initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, ease: EASE }}>
          <Link href="/#work" className="group inline-flex items-center gap-2 text-sm text-muted transition-colors hover:text-fg">
            <FiArrowLeft className="h-4 w-4 transition-transform duration-300 group-hover:-translate-x-1" />
            All projects
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1, ease: EASE }}
          className="mt-10 flex flex-wrap gap-2"
        >
          {project.statuses.map((status) => (
            <span key={status} className="rounded-full bg-accent px-3 py-1 font-mono text-xs text-on-accent">
              {status}
            </span>
          ))}
          {project.categories
            .filter((category) => !(project.statuses as string[]).includes(category))
            .map((category) => (
              <Tag key={category}>{category}</Tag>
            ))}
        </motion.div>

        <h1 className="mt-7 max-w-[1000px] text-[2.75rem] font-semibold leading-[1.0] tracking-[-0.045em] sm:text-6xl lg:text-[5rem]">
          <WordReveal immediate text={project.title} />
          {project.highlightedTitle && (
            <>
              {" "}
              <span className="text-accent-text">
                <WordReveal immediate delay={0.2} text={project.highlightedTitle} />
              </span>
            </>
          )}
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.35, ease: EASE }}
          className="mt-7 max-w-[720px] text-lg leading-relaxed text-muted sm:text-xl"
        >
          {project.subtitle}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.45, ease: EASE }}
          className="mt-9 flex flex-wrap gap-3"
        >
          {project.links.map((link, index) => (
            <LinkButton key={`${link.type}-${link.href}`} link={link} primary={index === 0} />
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.97 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1.1, delay: 0.4, ease: EASE }}
          className="mt-16 rounded-[28px] border border-line bg-surface p-2 shadow-card sm:p-3"
        >
          <div className="flex items-center gap-2 px-2 pb-3 pt-1">
            <span className="h-2.5 w-2.5 rounded-full bg-subtle/50" />
            <span className="h-2.5 w-2.5 rounded-full bg-subtle/50" />
            <span className="h-2.5 w-2.5 rounded-full bg-subtle/50" />
            <span className="ml-3 h-7 flex-1 rounded-lg bg-surface-2" />
          </div>
          <div className="relative aspect-[16/9] overflow-hidden rounded-[18px] bg-surface-2">
            <Image
              src={project.heroImage}
              alt={project.heroImageAlt}
              fill
              priority
              sizes="(max-width: 1200px) 100vw, 1200px"
              className="object-cover object-top"
            />
          </div>
        </motion.div>

        <motion.dl
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.4 }}
          transition={{ staggerChildren: 0.08 }}
          className="mt-5 grid grid-cols-2 overflow-hidden rounded-3xl border border-line lg:grid-cols-4"
        >
          {project.metrics.map((metric, index) => (
            <motion.div
              key={`${metric.value}-${metric.label}`}
              variants={{ hidden: { opacity: 0, y: 16 }, show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: EASE } } }}
              className={cn(
                "flex flex-col gap-3 px-6 py-6 sm:px-7",
                index % 2 === 1 && "border-l border-line",
                index >= 2 && "border-t border-line lg:border-t-0",
                index === 2 && "lg:border-l",
              )}
            >
              <Icon name={metric.icon} className="h-5 w-5 text-accent-text" />
              <dd className="text-2xl font-semibold tracking-[-0.03em] sm:text-[28px]">{metric.value}</dd>
              <dt className="text-sm text-muted">{metric.label}</dt>
            </motion.div>
          ))}
        </motion.dl>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* Content blocks                                                      */
/* ------------------------------------------------------------------ */

function CheckList({ items, className }: { items: string[]; className?: string }) {
  return (
    <ul className={cn("flex flex-col gap-3", className)}>
      {items.map((item, index) => (
        <motion.li
          key={item}
          initial={{ opacity: 0, x: -10 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.05 * index, ease: EASE }}
          className="flex items-start gap-3 text-[15px] leading-relaxed"
        >
          <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-accent/20 text-accent-text">
            <FiCheck className="h-3 w-3" />
          </span>
          {item}
        </motion.li>
      ))}
    </ul>
  );
}

function Overview({ project, index }: { project: ProjectCaseStudy; index: number }) {
  const { overview } = project;
  return (
    <Block index={index} eyebrow={overview.eyebrow} title={overview.title} description={overview.description}>
      <div className="grid gap-5 lg:grid-cols-[1.4fr_1fr]">
        <Reveal className="flex flex-col gap-5 rounded-3xl border border-line bg-surface p-8 text-base leading-relaxed text-muted shadow-card sm:p-10 sm:text-[17px]">
          {overview.paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </Reveal>
        <Reveal delay={0.1} className="rounded-3xl border border-line bg-surface p-8 shadow-card sm:p-10">
          <p className="font-mono text-xs uppercase tracking-[0.14em] text-accent-text">
            {overview.contributionEyebrow ?? "My contribution"}
          </p>
          <h3 className="mt-3 text-2xl font-semibold tracking-[-0.03em]">{overview.contributionTitle}</h3>
          <CheckList items={overview.contributions} className="mt-6" />
        </Reveal>
      </div>
    </Block>
  );
}

function Story({ project, index }: { project: ProjectCaseStudy; index: number }) {
  const story = project.story!;
  return (
    <Block index={index} eyebrow={story.eyebrow} title={story.title} description={story.description}>
      <Reveal className="grid gap-10 rounded-3xl border border-line bg-surface p-8 shadow-card sm:p-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <h3 className="text-3xl font-semibold leading-[1.1] tracking-[-0.035em] sm:text-4xl">{story.heading}</h3>
        <div className="flex flex-col gap-5 text-base leading-relaxed text-muted sm:text-[17px]">
          {story.paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </Reveal>
    </Block>
  );
}

function ProblemSolution({ project, index }: { project: ProjectCaseStudy; index: number }) {
  const section = project.problemSolution!;
  return (
    <Block index={index} eyebrow={section.eyebrow} title={section.title} description={section.description}>
      <div className="grid gap-5 lg:grid-cols-2">
        <Reveal className="rounded-3xl border border-line bg-surface p-8 shadow-card sm:p-10">
          <p className="font-mono text-xs uppercase tracking-[0.14em] text-subtle">01 · The problem</p>
          <h3 className="mt-4 text-2xl font-semibold leading-snug tracking-[-0.03em]">{section.problem.title}</h3>
          <ul className="mt-7 flex flex-col gap-3">
            {section.problem.items.map((item) => (
              <li key={item} className="flex items-start gap-3 text-[15px] leading-relaxed text-muted">
                <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full border border-line">
                  <FiMinus className="h-3 w-3" />
                </span>
                {item}
              </li>
            ))}
          </ul>
        </Reveal>
        <Reveal delay={0.1} className="rounded-3xl bg-inverse p-8 text-on-inverse sm:p-10">
          <p className="font-mono text-xs uppercase tracking-[0.14em] opacity-60">02 · The solution</p>
          <h3 className="mt-4 text-2xl font-semibold leading-snug tracking-[-0.03em]">{section.solution.title}</h3>
          <ul className="mt-7 flex flex-col gap-3">
            {section.solution.items.map((item) => (
              <li key={item} className="flex items-start gap-3 text-[15px] leading-relaxed">
                <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-accent text-on-accent">
                  <FiCheck className="h-3 w-3" />
                </span>
                {item}
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </Block>
  );
}

function FeatureGrid({ data, index }: { data: ProjectFeatureSection; index: number }) {
  return (
    <Block index={index} eyebrow={data.eyebrow} title={data.title} description={data.description}>
      <div className={cn("grid gap-5 sm:grid-cols-2", data.items.length % 3 === 0 && "lg:grid-cols-3")}>
        {data.items.map((item, i) => (
          <Reveal key={item.title} delay={0.06 * (i % 3)} className="h-full">
            <SpotlightCard className="flex h-full flex-col gap-4 p-7">
              <span className="grid h-11 w-11 place-items-center rounded-xl bg-surface-2 text-accent-text transition-transform duration-500 group-hover/spot:-rotate-6 group-hover/spot:scale-110">
                <Icon name={item.icon} className="h-5 w-5" />
              </span>
              <h3 className="text-xl font-semibold tracking-[-0.02em]">{item.title}</h3>
              <p className="text-[15px] leading-relaxed text-muted">{item.description}</p>
            </SpotlightCard>
          </Reveal>
        ))}
      </div>
    </Block>
  );
}

function TechStack({ project, index }: { project: ProjectCaseStudy; index: number }) {
  const section = project.techStack!;
  return (
    <Block index={index} eyebrow={section.eyebrow} title={section.title} description={section.description}>
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {section.groups.map((group, i) => (
          <Reveal key={group.title} delay={0.06 * i} className="h-full">
            <SpotlightCard className="flex h-full flex-col gap-5 p-7">
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-semibold tracking-[-0.02em]">{group.title}</h3>
                <Icon name={group.icon} className="h-5 w-5 text-subtle" />
              </div>
              <div className="flex flex-wrap gap-2">
                {group.technologies.map((tech) => (
                  <Tag key={tech} className="gap-1.5">
                    <TechIcon name={tech} className="h-3.5 w-3.5" />
                    {tech}
                  </Tag>
                ))}
              </div>
            </SpotlightCard>
          </Reveal>
        ))}
      </div>
    </Block>
  );
}

function Architecture({ project, index }: { project: ProjectCaseStudy; index: number }) {
  const section = project.architecture!;
  return (
    <Block index={index} eyebrow={section.eyebrow} title={section.title} description={section.description}>
      <div className="flex flex-col items-stretch lg:flex-row lg:items-center">
        {section.items.map((item, i) => (
          <div key={item.title} className="flex flex-col items-center lg:flex-1 lg:flex-row">
            <Reveal delay={0.12 * i} className="w-full">
              <div className="flex flex-col gap-3 rounded-3xl border border-line bg-surface p-6 shadow-card">
                <span className="grid h-11 w-11 place-items-center rounded-xl bg-accent text-on-accent">
                  <Icon name={item.icon} className="h-5 w-5" />
                </span>
                <p className="text-lg font-semibold tracking-[-0.02em]">{item.title}</p>
                <p className="font-mono text-xs text-muted">{item.subtitle}</p>
              </div>
            </Reveal>
            {i < section.items.length - 1 && (
              <motion.div
                aria-hidden
                initial={{ scaleX: 0, scaleY: 0 }}
                whileInView={{ scaleX: 1, scaleY: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.12 * i + 0.3, ease: EASE }}
                className="h-10 w-px shrink-0 origin-top bg-accent lg:h-px lg:w-10 lg:origin-left"
              />
            )}
          </div>
        ))}
      </div>
      {section.note && (
        <Reveal className="mt-8 max-w-[760px] rounded-2xl bg-surface-2 px-6 py-5 text-[15px] leading-relaxed text-muted">
          {section.note}
        </Reveal>
      )}
    </Block>
  );
}

function Roadmap({ project, index }: { project: ProjectCaseStudy; index: number }) {
  const section = project.roadmap!;
  return (
    <Block index={index} eyebrow={section.eyebrow} title={section.title} description={section.description}>
      <ol className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {section.items.map((item, i) => {
          const current = item.status === "In Development";
          const done = item.status === "Completed";
          return (
            <motion.li
              key={item.stage}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7, delay: 0.08 * i, ease: EASE }}
              className={cn(
                  "flex h-full flex-col gap-4 rounded-3xl border p-7",
                  current ? "border-accent bg-accent/10" : "border-line bg-surface",
                )}
              >
                <div className="flex items-center justify-between">
                  <span className="font-mono text-sm text-subtle">{item.stage}</span>
                  <span
                    className={cn(
                      "rounded-full px-2.5 py-1 font-mono text-[11px]",
                      done && "bg-inverse text-on-inverse",
                      current && "bg-accent text-on-accent",
                      !done && !current && "border border-line text-muted",
                    )}
                  >
                    {item.status}
                  </span>
                </div>
                <h3 className="text-xl font-semibold tracking-[-0.02em]">{item.title}</h3>
                <p className="text-[15px] leading-relaxed text-muted">{item.description}</p>
            </motion.li>
          );
        })}
      </ol>
    </Block>
  );
}

/** Accordion: first challenge open, one open at a time. */
function Challenges({ project, index }: { project: ProjectCaseStudy; index: number }) {
  const section = project.challenges!;
  const [open, setOpen] = useState<string | null>(section.items[0]?.number ?? null);

  return (
    <Block index={index} eyebrow={section.eyebrow} title={section.title} description={section.description}>
      <div className="border-b border-line">
        {section.items.map((item) => {
          const isOpen = open === item.number;
          return (
            <div key={item.number} className="border-t border-line">
              <button
                type="button"
                onClick={() => setOpen(isOpen ? null : item.number)}
                aria-expanded={isOpen}
                className="group flex w-full cursor-pointer items-center gap-6 py-6 text-left"
              >
                <span className="font-mono text-sm text-subtle">{item.number}</span>
                <span className="flex-1 text-xl font-medium tracking-[-0.02em] transition-colors group-hover:text-accent-text sm:text-2xl">
                  {item.title}
                </span>
                <span
                  className={cn(
                    "grid h-10 w-10 shrink-0 place-items-center rounded-full border transition-all duration-500",
                    isOpen ? "rotate-180 border-accent bg-accent text-on-accent" : "border-line",
                  )}
                >
                  {isOpen ? <FiMinus className="h-4 w-4" /> : <FiPlus className="h-4 w-4" />}
                </span>
              </button>
              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.45, ease: EASE }}
                    className="overflow-hidden"
                  >
                    <p className="max-w-[720px] pb-7 pl-[41px] text-base leading-relaxed text-muted">{item.description}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>
    </Block>
  );
}

function Learnings({ project, index }: { project: ProjectCaseStudy; index: number }) {
  const section = project.learnings!;
  return (
    <Block index={index} eyebrow={section.eyebrow} title={section.title} description={section.description}>
      <Reveal className="rounded-3xl border border-line bg-surface p-8 shadow-card sm:p-10">
        <CheckList items={section.items} className="grid gap-x-10 gap-y-4 md:grid-cols-2" />
      </Reveal>
    </Block>
  );
}

/* ------------------------------------------------------------------ */
/* Gallery with lightbox                                               */
/* ------------------------------------------------------------------ */

function Lightbox({
  images,
  index,
  onClose,
  onChange,
}: {
  images: ProjectGalleryImage[];
  index: number;
  onClose: () => void;
  onChange: (index: number) => void;
}) {
  const go = useCallback(
    (step: number) => onChange((index + step + images.length) % images.length),
    [index, images.length, onChange],
  );

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
      if (event.key === "ArrowRight") go(1);
      if (event.key === "ArrowLeft") go(-1);
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [go, onClose]);

  const image = images[index];

  return (
    <motion.div
      role="dialog"
      aria-modal="true"
      aria-label={image.label}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[70] flex flex-col bg-bg/90 backdrop-blur-xl"
      onClick={onClose}
    >
      <div className={cn(container, "flex items-center justify-between py-5")}>
        <p className="font-mono text-sm">
          {image.label} <span className="text-subtle">· {index + 1}/{images.length}</span>
        </p>
        <button type="button" onClick={onClose} aria-label="Close" className="grid h-11 w-11 place-items-center rounded-full border border-line hover:bg-surface">
          <FiX className="h-5 w-5" />
        </button>
      </div>

      <div className="relative flex flex-1 items-center justify-center px-4 pb-10 sm:px-20">
        <motion.div
          layoutId={`shot-${image.src}`}
          className="relative h-full max-h-[78vh] w-full max-w-[1300px] overflow-hidden rounded-2xl border border-line bg-surface"
          onClick={(event) => event.stopPropagation()}
        >
          <Image src={image.src} alt={image.alt} fill sizes="100vw" className="object-contain" />
        </motion.div>

        {images.length > 1 && (
          <>
            <button
              type="button"
              aria-label="Previous image"
              onClick={(event) => {
                event.stopPropagation();
                go(-1);
              }}
              className="absolute left-3 top-1/2 grid h-12 w-12 -translate-y-1/2 place-items-center rounded-full border border-line bg-surface hover:bg-surface-2 sm:left-6"
            >
              <FiChevronLeft className="h-5 w-5" />
            </button>
            <button
              type="button"
              aria-label="Next image"
              onClick={(event) => {
                event.stopPropagation();
                go(1);
              }}
              className="absolute right-3 top-1/2 grid h-12 w-12 -translate-y-1/2 place-items-center rounded-full border border-line bg-surface hover:bg-surface-2 sm:right-6"
            >
              <FiChevronRight className="h-5 w-5" />
            </button>
          </>
        )}
      </div>
    </motion.div>
  );
}

function Gallery({ project, index }: { project: ProjectCaseStudy; index: number }) {
  const section = project.gallery!;
  const [active, setActive] = useState<number | null>(null);

  return (
    <Block index={index} eyebrow={section.eyebrow} title={section.title} description={section.description}>
      <div className="grid gap-5 md:grid-cols-2">
        {section.images.map((image, i) => (
          <Reveal key={image.src} delay={0.08 * (i % 2)}>
            <button
              type="button"
              onClick={() => setActive(i)}
              className="group w-full cursor-zoom-in rounded-3xl border border-line bg-surface p-2 text-left shadow-card"
            >
              <motion.div layoutId={`shot-${image.src}`} className="relative aspect-[16/10] overflow-hidden rounded-[18px] bg-surface-2">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, 600px"
                  className="object-cover object-top transition-transform duration-[1.2s] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.04]"
                />
              </motion.div>
              <div className="flex items-center justify-between px-3 pb-2 pt-4">
                <span className="text-[15px] font-medium">{image.label}</span>
                <FiMaximize2 className="h-4 w-4 text-subtle transition-colors group-hover:text-fg" />
              </div>
            </button>
          </Reveal>
        ))}
      </div>

      <AnimatePresence>
        {active !== null && (
          <Lightbox images={section.images} index={active} onClose={() => setActive(null)} onChange={setActive} />
        )}
      </AnimatePresence>
    </Block>
  );
}

/* ------------------------------------------------------------------ */
/* Closing call to action + next project                               */
/* ------------------------------------------------------------------ */

function Closing({ project }: { project: ProjectCaseStudy }) {
  const position = projects.findIndex((item) => item.slug === project.slug);
  const next = projects[(position + 1) % projects.length];
  const nextTitle = [next.title, next.highlightedTitle].filter(Boolean).join(" ");

  return (
    <section className="pt-28 lg:pt-36">
      <div className={cn(container, "grid gap-5 lg:grid-cols-[1.2fr_1fr]")}>
        <Reveal className="flex flex-col justify-between gap-10 rounded-[32px] border border-line bg-surface p-8 shadow-card sm:p-12">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.14em] text-accent-text">{project.cta.eyebrow}</p>
            <h2 className="mt-4 text-3xl font-semibold leading-[1.1] tracking-[-0.035em] sm:text-4xl">{project.cta.title}</h2>
            <p className="mt-4 max-w-[520px] text-base leading-relaxed text-muted">{project.cta.description}</p>
          </div>
          <div className="flex flex-wrap gap-3">
            {project.links.map((link, index) => (
              <LinkButton key={`cta-${link.href}`} link={link} primary={index === 0} />
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <Link
            href={`/projects/${next.slug}`}
            className="group relative flex h-full min-h-[320px] flex-col justify-between overflow-hidden rounded-[32px] bg-inverse p-8 text-on-inverse sm:p-10"
          >
            <div className="flex items-center justify-between">
              <span className="font-mono text-xs uppercase tracking-[0.14em] opacity-60">Next project</span>
              <span className="grid h-11 w-11 place-items-center rounded-full bg-accent text-on-accent transition-transform duration-500 group-hover:translate-x-1 group-hover:-rotate-45">
                <FiArrowRight className="h-5 w-5" />
              </span>
            </div>
            <div className="relative mt-8 aspect-[16/8] overflow-hidden rounded-2xl">
              <Image
                src={next.heroImage}
                alt={next.heroImageAlt}
                fill
                sizes="500px"
                className="object-cover object-top transition-transform duration-[1.2s] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-105"
              />
            </div>
            <p className="mt-6 text-2xl font-semibold tracking-[-0.03em] sm:text-3xl">{nextTitle}</p>
          </Link>
        </Reveal>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* Page                                                                */
/* ------------------------------------------------------------------ */

export default function CaseStudyPage({ project }: { project: ProjectCaseStudy }) {
  // Number only the sections this project actually has.
  let counter = 0;
  const next = () => ++counter;

  return (
    <>
      <Navbar />
      <main className="relative overflow-x-clip">
        <Hero project={project} />
        <Overview project={project} index={next()} />
        {project.story && <Story project={project} index={next()} />}
        {project.problemSolution && <ProblemSolution project={project} index={next()} />}
        {project.principles && <FeatureGrid data={project.principles} index={next()} />}
        {project.features && <FeatureGrid data={project.features} index={next()} />}
        {project.techStack && <TechStack project={project} index={next()} />}
        {project.architecture && <Architecture project={project} index={next()} />}
        {project.roadmap && <Roadmap project={project} index={next()} />}
        {project.challenges && <Challenges project={project} index={next()} />}
        {project.learnings && <Learnings project={project} index={next()} />}
        {project.gallery && <Gallery project={project} index={next()} />}
        <Closing project={project} />
      </main>
      <Footer />
    </>
  );
}
