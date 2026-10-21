"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { FiArrowRight, FiArrowUpRight, FiCheck } from "react-icons/fi";

import { Aurora, ButtonLink, Reveal, SectionHeader, Tag, container } from "@/components/ui/primitives";
import { getProjectBySlug } from "@/data/projects";
import { cn } from "@/lib/utils";

const EASE = [0.22, 1, 0.36, 1] as const;

const project = getProjectBySlug("lets-speak-law")!;
const landingUrl = project.links.find((link) => link.type === "landing")?.href ?? "https://letsspeaklaw.com";
const shots = (project.gallery?.images ?? []).filter((image) => !image.src.includes("mobile")).slice(0, 3);
const roadmap = project.roadmap?.items ?? [];

const myRole = [
  "Product and feature planning with the team",
  "Frontend and interface development",
  "UX and technical decisions for the MVP",
];

/** Screenshots fanned out like a deck; the front one cycles automatically and on click. */
function ShotDeck() {
  const [front, setFront] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused || shots.length < 2) return;
    const id = window.setInterval(() => setFront((value) => (value + 1) % shots.length), 4200);
    return () => window.clearInterval(id);
  }, [paused]);

  return (
    <div
      className="relative h-full min-h-[270px] w-full sm:min-h-[420px]"
      onPointerEnter={() => setPaused(true)}
      onPointerLeave={() => setPaused(false)}
    >
      {shots.map((shot, index) => {
        const position = (index - front + shots.length) % shots.length;
        return (
          <motion.button
            key={shot.src}
            type="button"
            onClick={() => setFront((value) => (value + 1) % shots.length)}
            aria-label={`Show next screenshot (current: ${shots[front]?.label})`}
            animate={{
              x: position * 34,
              y: position * -26,
              rotate: position * 3.5,
              scale: 1 - position * 0.06,
              opacity: position > 2 ? 0 : 1 - position * 0.18,
              zIndex: shots.length - position,
            }}
            whileHover={position === 0 ? { y: -6 } : undefined}
            transition={{ duration: 0.7, ease: EASE }}
            className="absolute bottom-6 left-0 w-[86%] origin-bottom-left cursor-pointer overflow-hidden rounded-2xl border border-line bg-surface p-1.5 text-left shadow-card"
          >
            <div className="flex items-center gap-1.5 px-2 pb-2 pt-1">
              <span className="h-2 w-2 rounded-full bg-subtle/50" />
              <span className="h-2 w-2 rounded-full bg-subtle/50" />
              <span className="h-2 w-2 rounded-full bg-subtle/50" />
              <span className="ml-2 truncate font-mono text-[10px] text-subtle">letsspeaklaw.com</span>
            </div>
            <div className="relative aspect-[16/9] overflow-hidden rounded-xl bg-surface-2">
              <Image
                src={shot.src}
                alt={shot.alt}
                fill
                sizes="(max-width: 1024px) 90vw, 560px"
                className="object-cover object-top"
              />
            </div>
          </motion.button>
        );
      })}

      <div className="absolute bottom-0 left-0 flex items-center gap-3">
        {shots.map((shot, index) => (
          <button
            key={shot.src}
            type="button"
            onClick={() => setFront(index)}
            aria-label={`Show ${shot.label}`}
            className={cn(
              "h-1.5 rounded-full transition-all duration-500",
              index === front ? "w-8 bg-violet" : "w-3 bg-line hover:bg-subtle",
            )}
          />
        ))}
        <span className="ml-1 font-mono text-[11px] text-subtle">{shots[front]?.label}</span>
      </div>
    </div>
  );
}

function Roadmap() {
  const doneCount = roadmap.filter((item) => item.status === "Completed").length;
  const progress = (doneCount + 0.5) / roadmap.length;

  return (
    <div className="relative border-t border-line px-6 pb-8 pt-10 sm:px-10 lg:px-12">
      <div className="mb-8 flex items-center justify-between gap-4">
        <p className="font-mono text-xs uppercase tracking-[0.14em] text-subtle">Roadmap</p>
        <p className="font-mono text-xs text-muted">
          Stage {doneCount + 1} of {roadmap.length}
        </p>
      </div>

      <div className="relative mb-8 h-1 overflow-hidden rounded-full bg-surface-2">
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: progress }}
          viewport={{ once: true, amount: 0.8 }}
          transition={{ duration: 1.6, ease: EASE, delay: 0.2 }}
          className="absolute inset-0 origin-left rounded-full bg-[linear-gradient(90deg,var(--accent),var(--violet))]"
        />
      </div>

      <ol className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {roadmap.map((item, index) => {
          const isCurrent = item.status === "In Development";
          const isDone = item.status === "Completed";
          return (
            <motion.li
              key={item.stage}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.7, delay: 0.08 * index, ease: EASE }}
              className="flex flex-col gap-2.5"
            >
              <div className="flex items-center gap-2.5">
                <span
                  className={cn(
                    "grid h-6 w-6 place-items-center rounded-full font-mono text-[11px]",
                    isDone && "bg-inverse text-on-inverse",
                    isCurrent && "bg-accent text-on-accent",
                    !isDone && !isCurrent && "border border-line text-subtle",
                  )}
                >
                  {isDone ? <FiCheck className="h-3.5 w-3.5" /> : item.stage}
                </span>
                <span
                  className={cn(
                    "font-mono text-[11px] uppercase tracking-[0.1em]",
                    isCurrent ? "text-accent-text" : "text-subtle",
                  )}
                >
                  {item.status}
                </span>
              </div>
              <p className="text-[17px] font-medium tracking-tight">{item.title}</p>
              <p className="text-sm leading-relaxed text-muted">{item.description}</p>
            </motion.li>
          );
        })}
      </ol>
    </div>
  );
}

export function Startup() {
  return (
    <section id="startup" className="pt-32 lg:pt-44">
      <div className={container}>
        <SectionHeader
          index="01"
          eyebrow="Now building"
          title="Let's Speak Law — where my two degrees meet."
          description="A startup I'm building with a team: a social platform for law students, shaped by my legal background and built with my engineering one."
        />

        <Reveal className="mt-14">
          <div className="relative overflow-hidden rounded-[32px] border border-line bg-surface shadow-card">
            <Aurora variant="violet" />

            <div className="relative grid gap-12 p-6 sm:p-10 lg:grid-cols-[1fr_1.1fr] lg:gap-10 lg:p-12">
              <div className="flex flex-col gap-7">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="inline-flex items-center gap-2 rounded-full bg-accent px-3 py-1 font-mono text-xs text-on-accent">
                    <span className="relative grid h-2 w-2 place-items-center">
                      <span className="absolute h-2 w-2 animate-ping-slow rounded-full bg-on-accent/60" />
                      <span className="relative h-1.5 w-1.5 rounded-full bg-on-accent" />
                    </span>
                    Building now
                  </span>
                  <Tag className="border-violet/40 bg-violet-soft text-violet">Startup</Tag>
                  <Tag>Legal tech</Tag>
                  <Tag>Team project</Tag>
                </div>

                <div>
                  <h3 className="text-4xl font-semibold tracking-[-0.04em] sm:text-5xl">
                    Let&apos;s Speak <span className="text-violet">Law</span>
                  </h3>
                  <p className="mt-5 max-w-[520px] text-base leading-relaxed text-muted sm:text-[17px]">
                    Law students have no place of their own online. Let&apos;s Speak Law combines
                    professional networking with visual content sharing — profiles, a legal content
                    feed, discussions and discovery, built for one clearly defined community.
                  </p>
                </div>

                <div>
                  <p className="font-mono text-xs uppercase tracking-[0.14em] text-subtle">My role</p>
                  <ul className="mt-3 flex flex-col gap-2.5">
                    {myRole.map((item) => (
                      <li key={item} className="flex items-start gap-3 text-[15px]">
                        <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-violet/15 text-violet">
                          <FiCheck className="h-3 w-3" />
                        </span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-wrap gap-2">
                  {(project.features?.items ?? []).map((feature) => (
                    <Tag key={feature.title}>{feature.title}</Tag>
                  ))}
                </div>

                <div className="mt-auto flex flex-wrap gap-3 pt-2">
                  <ButtonLink
                    href={landingUrl}
                    external
                    variant="accent"
                    magnetic
                    icon={<FiArrowUpRight className="h-[18px] w-[18px]" />}
                  >
                    Visit letsspeaklaw.com
                  </ButtonLink>
                  <ButtonLink
                    href="/projects/lets-speak-law"
                    variant="secondary"
                    icon={<FiArrowRight className="h-[18px] w-[18px]" />}
                  >
                    Read the case study
                  </ButtonLink>
                </div>
              </div>

              <ShotDeck />
            </div>

            <Roadmap />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
