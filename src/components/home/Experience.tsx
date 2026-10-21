"use client";

import Image from "next/image";
import { motion, useScroll, useSpring } from "framer-motion";
import { useRef } from "react";

import { SectionHeader, container } from "@/components/ui/primitives";
import { experience } from "@/data/site";

const EASE = [0.22, 1, 0.36, 1] as const;

export function Experience() {
  const listRef = useRef<HTMLOListElement>(null);
  const { scrollYProgress } = useScroll({ target: listRef, offset: ["start 75%", "end 55%"] });
  const line = useSpring(scrollYProgress, { stiffness: 120, damping: 30, mass: 0.4 });

  return (
    <section id="experience" className="pt-32 lg:pt-44">
      <div className={container}>
        <SectionHeader
          index="03"
          eyebrow="Experience"
          title="Where I've been building."
          description="Four internships across product teams, AI tooling and agile delivery — alongside a master's degree."
        />

        <ol ref={listRef} className="relative mt-16">
          {/* Scroll-drawn timeline */}
          <span aria-hidden className="absolute bottom-0 left-[23px] top-0 w-px bg-line md:left-[calc(200px+23px+40px)]" />
          <motion.span
            aria-hidden
            style={{ scaleY: line }}
            className="absolute bottom-0 left-[23px] top-0 w-px origin-top bg-[linear-gradient(to_bottom,var(--accent),var(--violet),var(--cyan))] md:left-[calc(200px+23px+40px)]"
          />

          {experience.map((item, index) => (
            <motion.li
              key={`${item.company}-${item.period}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{ duration: 0.8, ease: EASE }}
              className="group relative grid gap-x-10 gap-y-3 pb-14 pl-[72px] md:grid-cols-[200px_1fr_220px] md:pl-0"
            >
              <div className="pt-3 md:text-right">
                <p className="font-mono text-sm">{item.period}</p>
                <p className="mt-1 font-mono text-xs text-subtle">{item.location}</p>
              </div>

              <div className="relative md:pl-[72px]">
                {/* Node on the line */}
                <div className="absolute -left-[72px] top-0 md:left-0">
                  <div className="relative grid h-12 w-12 place-items-center overflow-hidden rounded-xl border border-line bg-surface transition-colors duration-500 group-hover:border-violet">
                    {item.logo ? (
                      <Image src={item.logo} alt={`${item.company} logo`} fill sizes="48px" className="object-cover" />
                    ) : (
                      <span className="text-lg font-semibold">{item.company[0]}</span>
                    )}
                  </div>
                </div>

                <h3 className="text-[22px] font-semibold tracking-[-0.025em]">{item.role}</h3>
                <p className="mt-0.5 text-[15px] text-muted">
                  {item.companyUrl ? (
                    <a href={item.companyUrl} target="_blank" rel="noopener noreferrer" className="underline-offset-4 hover:text-fg hover:underline">
                      {item.company}
                    </a>
                  ) : (
                    item.company
                  )}
                  {index === 0 && <span className="ml-2 font-mono text-[11px] text-subtle">· most recent</span>}
                </p>
                <p className="mt-4 max-w-[600px] text-base leading-relaxed text-muted">{item.description}</p>
              </div>

              <div className="flex flex-wrap gap-2 md:justify-end md:pt-3">
                {item.stack.map((tech) => (
                  <span key={tech} className="font-mono text-xs text-muted">
                    {tech}
                  </span>
                )).reduce<React.ReactNode[]>((acc, node, i) => (i ? [...acc, <span key={`d${i}`} className="font-mono text-xs text-subtle">·</span>, node] : [node]), [])}
              </div>
            </motion.li>
          ))}
        </ol>
      </div>
    </section>
  );
}
