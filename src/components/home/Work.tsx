"use client";

import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion, useMotionValue, useSpring } from "framer-motion";
import { useMemo, useState } from "react";
import { FiArrowUpRight, FiGithub } from "react-icons/fi";

import { Reveal, SectionHeader, SpotlightCard, container, tone } from "@/components/ui/primitives";
import { TechIcon } from "@/components/ui/TechIcon";
import { projectCards, projectFilters, type ProjectCard, type ProjectFilter } from "@/data/project-cards";
import { cn } from "@/lib/utils";

const EASE = [0.22, 1, 0.36, 1] as const;
const featured = projectCards.filter((project) => project.featured);
const bentoSpans = ["lg:col-span-7", "lg:col-span-5", "lg:col-span-5", "lg:col-span-7"];

function FeaturedCard({ project, className, index }: { project: ProjectCard; className?: string; index: number }) {
  return (
    <Reveal delay={(index % 2) * 0.1} className={className}>
      <SpotlightCard className="flex h-full flex-col p-2.5">
        <Link
          href={`/projects/${project.slug}`}
          aria-label={`${project.title} case study`}
          className="absolute inset-0 z-10 rounded-3xl"
        />

        <div className="relative aspect-[16/10] overflow-hidden rounded-[18px] bg-surface-2 lg:aspect-auto lg:min-h-[300px] lg:flex-1">
          <Image
            src={project.image}
            alt={project.imageAlt}
            fill
            sizes="(max-width: 1024px) 100vw, 700px"
            className="object-cover object-top transition-transform duration-[1.2s] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover/spot:scale-[1.04]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/25 to-transparent opacity-0 transition-opacity duration-500 group-hover/spot:opacity-100" />
        </div>

        <div className="flex flex-col gap-3.5 px-3 pb-3 pt-6 sm:px-4">
          <p className={cn("font-mono text-xs uppercase tracking-[0.08em]", tone(index).text)}>{project.label}</p>

          <div className="flex items-start justify-between gap-4">
            <h3 className="text-2xl font-semibold tracking-[-0.03em] sm:text-[26px]">{project.title}</h3>
            <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full border border-line transition-all duration-500 group-hover/spot:rotate-45 group-hover/spot:border-violet group-hover/spot:bg-violet group-hover/spot:text-white">
              <FiArrowUpRight className="h-[18px] w-[18px]" />
            </span>
          </div>

          <p className="max-w-[560px] text-[15px] leading-relaxed text-muted sm:text-base">{project.description}</p>

          <div className="mt-auto flex flex-wrap items-center justify-between gap-3 border-t border-line pt-4">
            <ul className="flex items-center gap-1.5" aria-label="Tech stack">
              {project.stack.map((tech) => (
                <li
                  key={tech}
                  title={tech}
                  className="grid h-8 w-8 place-items-center rounded-lg bg-surface-2 transition-transform duration-300 hover:-translate-y-0.5"
                >
                  <TechIcon name={tech} className="h-4 w-4" />
                  <span className="sr-only">{tech}</span>
                </li>
              ))}
            </ul>
            <div className="relative z-20 flex items-center gap-4 text-sm font-medium">
              {project.live && (
                <a href={project.live} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 hover:text-accent-text">
                  Live <FiArrowUpRight className="h-3.5 w-3.5" />
                </a>
              )}
              {project.github && (
                <a href={project.github} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 hover:text-accent-text">
                  <FiGithub className="h-3.5 w-3.5" /> Code
                </a>
              )}
            </div>
          </div>
        </div>
      </SpotlightCard>
    </Reveal>
  );
}

/** Index of every project, filterable, with an image preview that trails the cursor. */
function ProjectIndex() {
  const [filter, setFilter] = useState<ProjectFilter>("All");
  const [hovered, setHovered] = useState<ProjectCard | null>(null);
  const x = useSpring(useMotionValue(0), { stiffness: 260, damping: 26, mass: 0.5 });
  const y = useSpring(useMotionValue(0), { stiffness: 260, damping: 26, mass: 0.5 });

  const list = useMemo(
    () => (filter === "All" ? projectCards : projectCards.filter((project) => project.categories.includes(filter))),
    [filter],
  );

  const counts = useMemo(() => {
    const map = new Map<ProjectFilter, number>();
    for (const item of projectFilters) {
      map.set(item, item === "All" ? projectCards.length : projectCards.filter((p) => p.categories.includes(item)).length);
    }
    return map;
  }, []);

  return (
    <div className="mt-24">
      <Reveal className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
        <div>
          <p className="font-mono text-xs uppercase tracking-[0.14em] text-subtle">Index</p>
          <h3 className="mt-3 text-3xl font-semibold tracking-[-0.03em]">All projects</h3>
        </div>

        <div role="tablist" aria-label="Filter projects" className="flex flex-wrap gap-2">
          {projectFilters.map((item) => {
            const active = item === filter;
            return (
              <button
                key={item}
                role="tab"
                aria-selected={active}
                type="button"
                onClick={() => setFilter(item)}
                className={cn(
                  "relative cursor-pointer rounded-full px-3.5 py-1.5 font-mono text-xs transition-colors",
                  active ? "text-on-inverse" : "border border-line text-muted hover:border-subtle hover:text-fg",
                )}
              >
                {active && (
                  <motion.span
                    layoutId="filter-pill"
                    className="absolute inset-0 rounded-full bg-inverse"
                    transition={{ type: "spring", stiffness: 380, damping: 32 }}
                  />
                )}
                <span className="relative">
                  {item} <span className="opacity-60">{counts.get(item)}</span>
                </span>
              </button>
            );
          })}
        </div>
      </Reveal>

      <div
        className="relative mt-8 border-b border-line"
        onPointerMove={(event) => {
          const rect = event.currentTarget.getBoundingClientRect();
          x.set(event.clientX - rect.left);
          y.set(event.clientY - rect.top);
        }}
        onPointerLeave={() => setHovered(null)}
      >
        <motion.ul layout>
          <AnimatePresence initial={false} mode="popLayout">
            {list.map((project, index) => (
              <motion.li
                key={project.slug}
                layout
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.35, ease: EASE }}
                onPointerEnter={(event) => event.pointerType === "mouse" && setHovered(project)}
              >
                <Link
                  href={`/projects/${project.slug}`}
                  className="group/row grid grid-cols-[40px_1fr_auto] items-center gap-4 border-t border-line py-5 transition-colors sm:grid-cols-[56px_1.3fr_1fr_auto] sm:py-6"
                >
                  <span className="font-mono text-xs text-subtle">{String(index + 1).padStart(2, "0")}</span>
                  <span className="flex flex-col gap-1">
                    <span className="text-lg font-medium tracking-tight transition-transform duration-500 group-hover/row:translate-x-2 group-hover/row:text-violet sm:text-xl">
                      {project.title}
                    </span>
                    <span className="font-mono text-[11px] uppercase tracking-[0.08em] text-subtle sm:hidden">
                      {project.label}
                    </span>
                  </span>
                  <span className="hidden font-mono text-xs text-muted sm:block">{project.label}</span>
                  <span className="grid h-9 w-9 place-items-center rounded-full border border-line transition-all duration-500 group-hover/row:border-violet group-hover/row:bg-violet group-hover/row:text-white">
                    <FiArrowUpRight className="h-4 w-4" />
                  </span>
                </Link>
              </motion.li>
            ))}
          </AnimatePresence>
        </motion.ul>

        {/* Cursor preview (mouse only) */}
        <motion.div
          aria-hidden
          style={{ x, y }}
          className="pointer-events-none absolute left-0 top-0 z-20 hidden [@media(pointer:fine)]:block"
        >
          <AnimatePresence>
            {hovered && (
              <motion.div
                key={hovered.slug}
                initial={{ opacity: 0, scale: 0.85, rotate: -4 }}
                animate={{ opacity: 1, scale: 1, rotate: 0 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.35, ease: EASE }}
                className="absolute -translate-y-1/2 translate-x-8 overflow-hidden rounded-2xl border border-line bg-surface p-1.5 shadow-card"
              >
                <div className="relative h-[180px] w-[300px] overflow-hidden rounded-xl bg-surface-2">
                  <Image src={hovered.image} alt="" fill sizes="300px" className="object-cover object-top" />
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </div>
  );
}

export function Work() {
  return (
    <section id="work" className="pt-32 lg:pt-44">
      <div className={container}>
        <SectionHeader
          index="02"
          eyebrow="Selected work"
          title="Products I designed, built and shipped."
          description="Live and open source — interface, API, database and deployment, built end to end."
        />

        <div className="mt-14 grid gap-5 lg:grid-cols-12">
          {featured.map((project, index) => (
            <FeaturedCard key={project.slug} project={project} index={index} className={bentoSpans[index]} />
          ))}
        </div>

        <ProjectIndex />
      </div>
    </section>
  );
}
