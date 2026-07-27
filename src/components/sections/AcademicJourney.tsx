"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  FiArrowDown,
  FiArrowUpRight,
  FiBookOpen,
  FiCalendar,
  FiCode,
  FiMapPin,
  FiTrendingUp,
} from "react-icons/fi";

const bachelorSkills = [
  "Legal Research",
  "Critical Thinking",
  "Communication",
  "Problem Solving",
];

const masterSkills = [
  "Software Engineering",
  "Artificial Intelligence",
  "Full Stack",
  "Web Development",
];

const statistics = [
  {
    value: "2",
    label: "Degrees",
  },
  {
    value: "2",
    label: "Countries",
  },
  {
    value: "1",
    label: "Career Transition",
  },
  {
    value: "10+",
    label: "Projects",
  },
];

const sectionAnimation = {
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

const cardAnimation = {
  hidden: {
    opacity: 0,
    y: 45,
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

export default function AcademicJourney() {
  return (
    <section
      id="academic-journey"
      className="relative overflow-hidden px-4 py-24 sm:px-6 lg:px-8 lg:py-32"
    >
      {/* Background line */}
      <div className="pointer-events-none absolute left-1/2 top-0 h-px w-[78%] -translate-x-1/2 bg-gradient-to-r from-transparent via-cyan-400/25 to-transparent" />

      {/* Background glow effects */}
      <div className="pointer-events-none absolute -left-48 top-1/4 h-[480px] w-[480px] rounded-full bg-cyan-500/[0.08] blur-[160px]" />

      <div className="pointer-events-none absolute -right-48 bottom-20 h-[520px] w-[520px] rounded-full bg-violet-500/[0.08] blur-[180px]" />

      <div className="relative mx-auto max-w-[1400px]">
        {/* Section heading */}
        <motion.div
          variants={sectionAnimation}
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.2,
          }}
          className="mx-auto max-w-3xl text-center"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/[0.06] px-4 py-2 text-xs font-bold uppercase tracking-[0.28em] text-cyan-300">
            <FiBookOpen className="text-sm" />
            Academic Journey
          </div>

          <h2 className="mt-6 text-4xl font-black tracking-tight text-white sm:text-5xl lg:text-6xl">
            The foundation behind my
            <span className="block bg-gradient-to-r from-cyan-400 via-blue-500 to-violet-500 bg-clip-text text-transparent">
              software engineering journey.
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-slate-400 sm:text-lg">
            My academic background combines legal reasoning with modern
            software engineering, helping me approach technical challenges with
            both analytical depth and practical thinking.
          </p>
        </motion.div>

        {/* Main journey */}
        <div className="relative mt-16 lg:mt-24">
          {/* Desktop timeline line */}
          <div className="pointer-events-none absolute left-1/2 top-10 hidden h-[calc(100%-5rem)] w-px -translate-x-1/2 overflow-hidden bg-white/10 lg:block">
            <motion.div
              initial={{
                height: 0,
              }}
              whileInView={{
                height: "100%",
              }}
              viewport={{
                once: true,
                amount: 0.2,
              }}
              transition={{
                duration: 1.6,
                ease: "easeInOut",
              }}
              className="w-full bg-gradient-to-b from-cyan-400 via-blue-500 to-violet-500"
            />
          </div>

          <div className="grid gap-8 lg:grid-cols-[1fr_180px_1fr] lg:gap-10">
            {/* Bachelor side */}
            <motion.article
              variants={cardAnimation}
              initial="hidden"
              whileInView="visible"
              viewport={{
                once: true,
                amount: 0.15,
              }}
              className="group relative overflow-hidden rounded-[2rem] border border-cyan-400/20 bg-white/[0.025] p-6 shadow-[0_25px_80px_rgba(34,211,238,0.06)] backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:border-cyan-300/40 sm:p-8 lg:p-10"
            >
              <div className="pointer-events-none absolute -right-20 -top-20 h-60 w-60 rounded-full bg-cyan-400/[0.08] blur-[90px]" />

              <div className="relative">
                {/* Card top */}
                <div className="flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between">
                  <div className="flex items-start gap-4">
                    <span className="grid h-14 w-14 shrink-0 place-items-center rounded-2xl border border-cyan-400/20 bg-cyan-400/[0.08] text-2xl text-cyan-300">
                      <FiBookOpen />
                    </span>

                    <div>
                      <p className="text-xs font-bold uppercase tracking-[0.25em] text-cyan-300">
                        Bachelor&apos;s Degree
                      </p>

                      <h3 className="mt-2 text-2xl font-black text-white sm:text-3xl">
                        Bachelor of Laws
                      </h3>
                    </div>
                  </div>

                  <span className="w-fit rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-xs font-semibold text-slate-300">
                    Completed
                  </span>
                </div>

                {/* University information */}
                <div className="mt-8 space-y-3">
                  <div className="flex items-center gap-3 text-slate-300">
                    <FiBookOpen className="shrink-0 text-cyan-300" />

                    <span className="font-semibold">
                      Baku State University
                    </span>
                  </div>

                  <div className="flex items-center gap-3 text-sm text-slate-500">
                    <FiMapPin className="shrink-0 text-cyan-300" />

                    <span>Baku, Azerbaijan</span>
                  </div>

                  <div className="flex items-center gap-3 text-sm text-slate-500">
                    <FiCalendar className="shrink-0 text-cyan-300" />

                    <span>2020 — 2024</span>
                  </div>
                </div>

                <div className="my-8 h-px bg-gradient-to-r from-cyan-400/30 via-white/10 to-transparent" />

                <p className="text-sm leading-7 text-slate-400 sm:text-base">
                  Completed my bachelor&apos;s degree in Law, where I developed
                  strong analytical thinking, structured research abilities and
                  the discipline to approach complex problems logically.
                </p>

                {/* Skills */}
                <div className="mt-7 flex flex-wrap gap-2">
                  {bachelorSkills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-full border border-cyan-400/15 bg-cyan-400/[0.05] px-3 py-1.5 text-xs font-semibold text-cyan-100/80"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                {/* Bottom quote */}
                <div className="mt-8 rounded-2xl border border-white/10 bg-black/10 p-4">
                  <p className="text-xs uppercase tracking-[0.2em] text-slate-600">
                    Foundation
                  </p>

                  <p className="mt-2 text-sm leading-6 text-slate-300">
                    Law taught me how to research deeply, communicate clearly
                    and solve problems through structured reasoning.
                  </p>
                </div>
              </div>
            </motion.article>

            {/* Central transition */}
            <motion.div
              initial={{
                opacity: 0,
                scale: 0.9,
              }}
              whileInView={{
                opacity: 1,
                scale: 1,
              }}
              viewport={{
                once: true,
                amount: 0.4,
              }}
              transition={{
                duration: 0.7,
                delay: 0.15,
              }}
              className="relative flex items-center justify-center"
            >
              {/* Mobile connector */}
              <div className="absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-gradient-to-b from-cyan-400/30 via-blue-500/50 to-violet-400/30 lg:hidden" />

              <div className="relative z-10 flex w-full max-w-[320px] flex-col items-center rounded-[2rem] border border-blue-400/25 bg-slate-950/80 p-6 text-center shadow-[0_20px_80px_rgba(59,130,246,0.15)] backdrop-blur-xl lg:max-w-none">
                <span className="grid h-12 w-12 place-items-center rounded-2xl border border-blue-400/20 bg-blue-400/[0.08] text-xl text-blue-300">
                  <FiTrendingUp />
                </span>

                <p className="mt-4 text-xs font-bold uppercase tracking-[0.24em] text-blue-300">
                  Career Transition
                </p>

                <div className="mt-5 space-y-3">
                  <p className="text-lg font-bold text-white">
                    Law
                  </p>

                  <FiArrowDown className="mx-auto text-xl text-blue-400" />

                  <p className="text-lg font-bold text-white">
                    Software Engineering
                  </p>
                </div>

                <p className="mt-5 text-xs leading-6 text-slate-500">
                  Turning analytical thinking into real digital products.
                </p>
              </div>
            </motion.div>

            {/* Master side */}
            <motion.article
              variants={cardAnimation}
              initial="hidden"
              whileInView="visible"
              viewport={{
                once: true,
                amount: 0.15,
              }}
              transition={{
                delay: 0.15,
              }}
              className="group relative overflow-hidden rounded-[2rem] border border-violet-400/20 bg-white/[0.025] p-6 shadow-[0_25px_80px_rgba(139,92,246,0.06)] backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:border-violet-300/40 sm:p-8 lg:p-10"
            >
              <div className="pointer-events-none absolute -left-20 -top-20 h-60 w-60 rounded-full bg-violet-400/[0.08] blur-[90px]" />

              <div className="relative">
                {/* Card top */}
                <div className="flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between">
                  <div className="flex items-start gap-4">
                    <span className="grid h-14 w-14 shrink-0 place-items-center rounded-2xl border border-violet-400/20 bg-violet-400/[0.08] text-2xl text-violet-300">
                      <FiCode />
                    </span>

                    <div>
                      <p className="text-xs font-bold uppercase tracking-[0.25em] text-violet-300">
                        Master&apos;s Degree
                      </p>

                      <h3 className="mt-2 text-2xl font-black text-white sm:text-3xl">
                        M.Sc. Computer Science
                      </h3>
                    </div>
                  </div>

                  <span className="w-fit rounded-full border border-emerald-400/20 bg-emerald-400/[0.06] px-4 py-2 text-xs font-semibold text-emerald-300">
                    Completed
                  </span>
                </div>

                {/* University information */}
                <div className="mt-8 space-y-3">
                  <div className="flex items-center gap-3 text-slate-300">
                    <FiBookOpen className="shrink-0 text-violet-300" />

                    <span className="font-semibold">
                      Vizja University
                    </span>
                  </div>

                  <div className="flex items-center gap-3 text-sm text-slate-500">
                    <FiMapPin className="shrink-0 text-violet-300" />

                    <span>Warsaw, Poland</span>
                  </div>

                  <div className="flex items-center gap-3 text-sm text-slate-500">
                    <FiCalendar className="shrink-0 text-violet-300" />

                    <span>2024 — 2026</span>
                  </div>
                </div>

                <div className="my-8 h-px bg-gradient-to-r from-violet-400/30 via-white/10 to-transparent" />

                <p className="text-sm leading-7 text-slate-400 sm:text-base">
                  Currently pursuing a Master&apos;s degree in Computer Science,
                  focusing on software engineering, full-stack development,
                  modern web technologies and AI-powered applications.
                </p>

                {/* Skills */}
                <div className="mt-7 flex flex-wrap gap-2">
                  {masterSkills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-full border border-violet-400/15 bg-violet-400/[0.05] px-3 py-1.5 text-xs font-semibold text-violet-100/80"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                {/* Thesis */}
                <div className="mt-8 overflow-hidden rounded-2xl border border-violet-400/20 bg-violet-400/[0.045] p-5">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="text-xs font-bold uppercase tracking-[0.22em] text-violet-300">
                        Master&apos;s Thesis
                      </p>

                      <h4 className="mt-3 text-lg font-bold text-white">
                        AI Smart Application System
                      </h4>
                    </div>

                    <FiCode className="mt-1 shrink-0 text-xl text-violet-300" />
                  </div>

                  <p className="mt-3 text-sm leading-6 text-slate-400">
                    An AI-powered recruitment platform built with React,
                    TypeScript, Node.js, MongoDB and OpenAI integration.
                  </p>

                  <Link
                    href="/projects/ai-smart-application-system"
                    className="group mt-5 inline-flex items-center gap-2 text-sm font-bold text-violet-300 transition hover:text-violet-200"
                  >
                    View project

                    <FiArrowUpRight className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                  </Link>
                </div>
              </div>
            </motion.article>
          </div>
        </div>

        {/* Transition statement */}
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
            amount: 0.3,
          }}
          transition={{
            duration: 0.7,
          }}
          className="mx-auto mt-12 max-w-4xl rounded-[2rem] border border-white/10 bg-white/[0.025] p-6 text-center backdrop-blur-xl sm:p-8"
        >
          <p className="text-sm font-bold uppercase tracking-[0.24em] text-cyan-300">
            Two fields, one mindset
          </p>

          <blockquote className="mx-auto mt-5 max-w-3xl text-lg font-semibold leading-8 text-slate-200 sm:text-xl">
            “My legal background strengthened my analytical thinking and
            problem-solving skills, while computer science allowed me to
            transform that foundation into practical software products.”
          </blockquote>
        </motion.div>

        {/* Statistics */}
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
            amount: 0.25,
          }}
          transition={{
            duration: 0.7,
            delay: 0.1,
          }}
          className="mt-8 grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4"
        >
          {statistics.map((item) => (
            <div
              key={item.label}
              className="group rounded-2xl border border-white/10 bg-white/[0.025] p-5 text-center backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400/25 hover:bg-cyan-400/[0.04] sm:p-6"
            >
              <p className="bg-gradient-to-r from-cyan-300 to-violet-400 bg-clip-text text-3xl font-black text-transparent sm:text-4xl">
                {item.value}
              </p>

              <p className="mt-2 text-xs font-semibold uppercase tracking-[0.15em] text-slate-500">
                {item.label}
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}