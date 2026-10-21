"use client";

import Image from "next/image";
import {
  AnimatePresence,
  motion,
  useMotionTemplate,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";
import { useEffect, useState } from "react";
import { FiArrowDown, FiDownload, FiGithub, FiLinkedin, FiMail } from "react-icons/fi";

import {
  ButtonLink,
  CountUp,
  IconLink,
  Marquee,
  WordReveal,
  Aurora,
  tone,
  container,
} from "@/components/ui/primitives";
import { TechTile } from "@/components/ui/TechIcon";
import { dailyStack, experience, site, stats } from "@/data/site";
import { cn } from "@/lib/utils";

const EASE = [0.22, 1, 0.36, 1] as const;
const rotatingWords = ["AI-powered", "full-stack", "real-time"];

function RotatingWord() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = window.setInterval(() => setIndex((value) => (value + 1) % rotatingWords.length), 2600);
    return () => window.clearInterval(id);
  }, []);

  return (
    <motion.span
      layout
      transition={{ layout: { duration: 0.5, ease: EASE } }}
      // clip-path (not overflow) so the outgoing word can never paint outside the line
      className="relative inline-block pb-[0.12em] align-top [clip-path:inset(0_-0.15em)]"
    >
      <AnimatePresence mode="wait" initial={false}>
        <motion.span
          key={rotatingWords[index]}
          initial={{ y: "105%" }}
          animate={{ y: "0%" }}
          exit={{ y: "-105%" }}
          transition={{ duration: 0.45, ease: EASE }}
          className="text-gradient inline-block whitespace-nowrap"
        >
          {rotatingWords[index]}
        </motion.span>
      </AnimatePresence>
    </motion.span>
  );
}

function PortraitCard() {
  const x = useMotionValue(0.5);
  const y = useMotionValue(0.5);
  const rotateX = useSpring(useTransform(y, [0, 1], [7, -7]), { stiffness: 150, damping: 18 });
  const rotateY = useSpring(useTransform(x, [0, 1], [-9, 9]), { stiffness: 150, damping: 18 });
  const glareX = useTransform(x, [0, 1], ["0%", "100%"]);
  const glareY = useTransform(y, [0, 1], ["0%", "100%"]);
  const glare = useMotionTemplate`radial-gradient(500px circle at ${glareX} ${glareY}, rgb(255 255 255 / 0.12), transparent 45%)`;
  const latest = experience[0];

  return (
    <motion.div
      initial={{ opacity: 0, y: 40, scale: 0.96 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 1, delay: 0.35, ease: EASE }}
      className="relative mx-auto w-full max-w-[380px] [perspective:1200px] lg:mx-0"
    >
      <motion.div
        onPointerMove={(event) => {
          if (event.pointerType !== "mouse") return;
          const rect = event.currentTarget.getBoundingClientRect();
          x.set((event.clientX - rect.left) / rect.width);
          y.set((event.clientY - rect.top) / rect.height);
        }}
        onPointerLeave={() => {
          x.set(0.5);
          y.set(0.5);
        }}
        style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
        className="relative rounded-[28px] border border-line bg-surface p-2.5 shadow-card"
      >
        <div className="relative aspect-[19/21] overflow-hidden rounded-[20px] bg-surface-2">
          <Image
            src={site.avatar}
            alt="Portrait of Vahid Aliyev"
            fill
            priority
            sizes="(max-width: 1024px) 90vw, 400px"
            className="object-cover"
          />
          <motion.div aria-hidden style={{ background: glare }} className="pointer-events-none absolute inset-0" />
        </div>

        <div className="px-3.5 pb-2 pt-4">
          <div className="flex items-center justify-between gap-3">
            <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-subtle">Latest role</p>
            <p className="font-mono text-[11px] text-subtle">{latest.period}</p>
          </div>
          <p className="mt-1.5 text-[15px] font-medium">
            {latest.role} · <span className="text-muted">{latest.company}</span>
          </p>
        </div>
      </motion.div>

      {/* Floating chips */}
      {[
        { label: "React · Next.js", className: "-left-6 top-10", delay: "0s", dot: "bg-accent" },
        { label: "Node.js", className: "-right-5 top-[42%]", delay: "-2s", dot: "bg-violet" },
        { label: "OpenAI API", className: "-left-3 bottom-24", delay: "-4s", dot: "bg-cyan" },
      ].map((chip) => (
        <span
          key={chip.label}
          style={{ animationDelay: chip.delay }}
          className={cn(
            "absolute hidden animate-float rounded-full border border-line bg-bg/85 px-3.5 py-2 font-mono text-xs text-fg shadow-card backdrop-blur sm:inline-flex",
            chip.className,
          )}
        >
          <span className={cn("mr-2 mt-[5px] h-1.5 w-1.5 rounded-full", chip.dot)} />
          {chip.label}
        </span>
      ))}
    </motion.div>
  );
}

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-[136px] lg:pt-[160px]">
      <div
        aria-hidden
        className="bg-grid pointer-events-none absolute inset-0 [mask-image:radial-gradient(ellipse_at_top,black_20%,transparent_70%)]"
      />
      <Aurora />

      <div className={cn(container, "relative")}>
        <div className="grid items-end gap-16 lg:grid-cols-[1fr_380px] lg:gap-16">
          <div className="flex flex-col gap-8">
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: EASE }}
              className="inline-flex w-fit items-center gap-2.5 rounded-full border border-line bg-surface/60 py-1.5 pl-2.5 pr-3.5 text-[13px] text-muted backdrop-blur"
            >
              <span className="relative grid h-4 w-4 place-items-center">
                <span className="absolute h-2 w-2 animate-ping-slow rounded-full bg-success" />
                <span className="relative h-2 w-2 rounded-full bg-success" />
              </span>
              Open to new roles · {site.location}
            </motion.div>

            <h1 className="text-[2.75rem] font-semibold leading-[1.0] tracking-[-0.045em] sm:text-6xl lg:text-[4.25rem]">
              <WordReveal immediate text="Software engineer building" />{" "}
              <RotatingWord />{" "}
              <WordReveal immediate delay={0.25} text="products, end to end." />
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5, ease: EASE }}
              className="max-w-[600px] text-lg leading-relaxed text-muted sm:text-[19px]"
            >
              I&apos;m Vahid — a frontend-focused full-stack developer with an M.Sc. in Computer
              Science. I design, build and deploy web apps with React, Next.js, TypeScript and
              Node.js, from the first component to production.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.65, ease: EASE }}
              className="flex flex-wrap items-center gap-3"
            >
              <ButtonLink href="#work" magnetic icon={<FiArrowDown className="h-[18px] w-[18px]" />}>
                See selected work
              </ButtonLink>
              <ButtonLink
                href={site.cv}
                variant="secondary"
                target="_blank"
                icon={<FiDownload className="h-[18px] w-[18px]" />}
              >
                Download CV
              </ButtonLink>
              <span className="mx-1 hidden h-7 w-px bg-line sm:block" />
              <IconLink href={site.github} label="GitHub">
                <FiGithub className="h-5 w-5" />
              </IconLink>
              <IconLink href={site.linkedin} label="LinkedIn">
                <FiLinkedin className="h-5 w-5" />
              </IconLink>
              <IconLink href={`mailto:${site.email}`} label="Email">
                <FiMail className="h-5 w-5" />
              </IconLink>
            </motion.div>
          </div>

          <PortraitCard />
        </div>

        {/* Stats */}
        <motion.dl
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.4 }}
          transition={{ staggerChildren: 0.08 }}
          className="mt-20 grid grid-cols-2 overflow-hidden rounded-3xl border border-line lg:mt-24 lg:grid-cols-4"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              variants={{
                hidden: { opacity: 0, y: 20 },
                show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: EASE } },
              }}
              className={cn(
                "flex flex-col gap-1.5 px-6 py-7 sm:px-8",
                index % 2 === 1 && "border-l border-line",
                index >= 2 && "border-t border-line lg:border-t-0",
                index === 2 && "lg:border-l",
              )}
            >
              <dt className="order-2 flex items-center gap-2 text-sm text-muted">
                <span className={cn("h-1.5 w-1.5 shrink-0 rounded-full", tone(index).dot)} />
                {stat.label}
              </dt>
              <dd className="order-1 text-4xl font-semibold tracking-[-0.04em] sm:text-[2.75rem]">
                {stat.value !== undefined ? <CountUp to={stat.value} suffix={stat.suffix} /> : stat.text}
              </dd>
            </motion.div>
          ))}
        </motion.dl>
      </div>

      {/* Stack marquee */}
      <div className={cn(container, "mt-6 flex items-center gap-5")}>
        <span className="hidden shrink-0 font-mono text-xs uppercase tracking-[0.14em] text-subtle sm:block">
          Daily stack
        </span>
        <Marquee className="flex-1 py-2">
          {dailyStack.map((item) => (
            <TechTile key={item} name={item} size="sm" />
          ))}
        </Marquee>
      </div>
    </section>
  );
}
