"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { FiArrowDown, FiArrowUpRight } from "react-icons/fi";
import { LuGraduationCap, LuScale } from "react-icons/lu";

import { Reveal, SectionHeader, SpotlightCard, container, tone } from "@/components/ui/primitives";
import { TechTile } from "@/components/ui/TechIcon";
import { education, site, skillGroups } from "@/data/site";
import { cn } from "@/lib/utils";

const EASE = [0.22, 1, 0.36, 1] as const;

function EducationCard({ item, index }: { item: (typeof education)[number]; index: number }) {
  const Icon = item.icon === "law" ? LuScale : LuGraduationCap;

  return (
    <Reveal delay={0.12 * index}>
      <SpotlightCard className="flex flex-col gap-5 p-7 sm:p-8">
        <div className="flex items-center justify-between">
          <span className={cn("grid h-11 w-11 place-items-center rounded-xl", tone(index + 1).soft, tone(index + 1).text)}>
            <Icon className="h-5 w-5" />
          </span>
          <span className="font-mono text-[13px] text-muted">{item.period}</span>
        </div>
        <div>
          <h3 className="text-2xl font-semibold tracking-[-0.03em]">{item.degree}</h3>
          <p className="mt-1.5 text-[15px] text-muted">
            {item.school} · {item.place}
          </p>
        </div>
        {"thesis" in item && (
          <Link
            href={item.thesis.href}
            className="relative z-10 flex items-center justify-between gap-3 rounded-xl bg-surface-2 px-4 py-3 text-sm transition-colors hover:text-accent-text"
          >
            <span className="flex items-center gap-3">
              <span className="font-mono text-[11px] uppercase tracking-[0.12em] text-accent-text">Thesis</span>
              {item.thesis.title}
            </span>
            <FiArrowUpRight className="h-4 w-4 shrink-0" />
          </Link>
        )}
      </SpotlightCard>
    </Reveal>
  );
}

export function About() {
  return (
    <section id="about" className="pt-32 lg:pt-44">
      <div className={container}>
        <SectionHeader
          index="04"
          eyebrow="About"
          title="From law to software engineering."
          description="Two degrees in two countries, one way of working: reason carefully, then build."
        />

        <div className="mt-14 grid gap-5 lg:grid-cols-[1fr_500px]">
          <Reveal className="h-full">
            <div className="relative flex h-full flex-col justify-between gap-12 overflow-hidden rounded-3xl border border-line bg-surface p-8 shadow-card sm:p-11">
              <div className="flex flex-col gap-7">
                <span className="text-gradient text-7xl font-semibold leading-[0.6]">&ldquo;</span>
                <p className="text-2xl font-medium leading-[1.3] tracking-[-0.025em] sm:text-[30px]">
                  Law taught me to reason from first principles and argue precisely. Computer
                  science let me turn that into products people use.
                </p>
                <p className="max-w-[560px] text-base leading-relaxed text-muted">
                  I moved from Baku to Warsaw to study computer science. Since then I&apos;ve shipped
                  10+ projects, worked in four teams and started building a legal-tech startup. I
                  care about simple architecture, fast interfaces and AI features that behave
                  predictably.
                </p>
              </div>

              <div className="flex items-center gap-3">
                <span className="relative h-11 w-11 overflow-hidden rounded-full bg-surface-2">
                  <Image src={site.avatar} alt="" fill sizes="44px" className="object-cover" />
                </span>
                <span>
                  <span className="block text-[15px] font-medium">{site.name}</span>
                  <span className="block font-mono text-xs text-subtle">{site.location}</span>
                </span>
              </div>
            </div>
          </Reveal>

          <div className="flex flex-col">
            <EducationCard item={education[0]} index={0} />
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3, ease: EASE }}
              className="flex items-center gap-3.5 py-4 pl-10"
            >
              <FiArrowDown className="h-[18px] w-[18px] animate-bounce text-violet" />
              <span className="font-mono text-[11px] uppercase tracking-[0.16em] text-subtle">Career transition</span>
            </motion.div>
            <EducationCard item={education[1]} index={1} />
          </div>
        </div>

        {/* Skills */}
        <div className="mt-24">
          <Reveal className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <h3 className="text-3xl font-semibold tracking-[-0.03em]">Tools I reach for</h3>
            <p className="max-w-[460px] text-[15px] leading-relaxed text-muted">
              Picked for the problem, not the trend — and used daily alongside AI tools for design,
              implementation, testing and docs.
            </p>
          </Reveal>

          <div className="mt-8 grid gap-5 sm:grid-cols-2">
            {skillGroups.map((group, index) => (
              <Reveal key={group.title} delay={0.08 * index} className="h-full">
                <SpotlightCard className="flex h-full flex-col gap-5 overflow-hidden p-7">
                  <span aria-hidden className={cn("absolute inset-x-0 top-0 h-1", tone(index).dot)} />
                  <div className="flex items-center justify-between">
                    <h4 className="text-xl font-semibold tracking-[-0.02em]">{group.title}</h4>
                    <span className={cn("font-mono text-xs", tone(index).text)}>0{index + 1}</span>
                  </div>
                  <div className="grid grid-cols-3 gap-2.5 lg:grid-cols-4">
                    {group.items.map((item) => (
                      <TechTile key={item} name={item} />
                    ))}
                  </div>
                </SpotlightCard>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
