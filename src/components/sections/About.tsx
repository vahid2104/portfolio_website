"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  FiBox,
  FiCode,
  FiDownload,
  FiTarget,
  FiZap,
} from "react-icons/fi";
import {
  SiExpress,
  SiFirebase,
  SiGit,
  SiJavascript,
  SiMongodb,
  SiNextdotjs,
  SiNodedotjs,
  SiReact,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";
import { TbBrandOpenai } from "react-icons/tb";

const stats = [
  {
    value: "10+",
    label: "Projects completed",
  },
  {
    value: "2+",
    label: "Years of learning",
  },
  {
    value: "3",
    label: "Internship experiences",
  },
  {
    value: "100%",
    label: "Dedication",
  },
];

const skills = [
  {
    name: "React",
    icon: SiReact,
  },
  {
    name: "Next.js",
    icon: SiNextdotjs,
  },
  {
    name: "TypeScript",
    icon: SiTypescript,
  },
  {
    name: "Tailwind CSS",
    icon: SiTailwindcss,
  },
  {
    name: "Node.js",
    icon: SiNodedotjs,
  },
  {
    name: "Express.js",
    icon: SiExpress,
  },
  {
    name: "MongoDB",
    icon: SiMongodb,
  },
  {
    name: "JavaScript",
    icon: SiJavascript,
  },
  {
    name: "Firebase",
    icon: SiFirebase,
  },
  {
    name: "Git",
    icon: SiGit,
  },
  {
    name: "OpenAI API",
    icon: TbBrandOpenai,
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

const itemAnimation = {
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

export default function About() {
  return (
    <section
      id="about"
      className="relative overflow-hidden px-4 py-24 sm:px-6 lg:py-32"
    >
      {/* Background glow */}
      <div className="pointer-events-none absolute left-0 top-1/4 h-80 w-80 rounded-full bg-cyan-500/10 blur-[130px]" />

      <div className="pointer-events-none absolute bottom-0 right-0 h-96 w-96 rounded-full bg-violet-500/10 blur-[150px]" />

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
        {/* Section label */}
        <motion.div
          variants={itemAnimation}
          className="mb-12 flex items-center gap-3"
        >
          <span className="h-2.5 w-2.5 rounded-full bg-cyan-400 shadow-[0_0_18px_rgba(34,211,238,0.9)]" />

          <p className="text-xs font-bold uppercase tracking-[0.35em] text-cyan-300 sm:text-sm">
            About me
          </p>

          <div className="h-px w-16 bg-gradient-to-r from-cyan-400/70 to-transparent" />
        </motion.div>

        {/* Main content */}
        <div className="grid items-stretch gap-6 xl:grid-cols-[0.95fr_0.82fr_1.15fr]">
          {/* About information */}
          <motion.div
            variants={itemAnimation}
            className="flex flex-col justify-between rounded-[2rem] border border-white/10 bg-[#080d22]/70 p-6 shadow-2xl backdrop-blur-xl sm:p-8"
          >
            <div>
              <h2 className="text-4xl font-black leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
                Get to know

                <span className="block bg-gradient-to-r from-cyan-400 via-blue-500 to-violet-500 bg-clip-text text-transparent">
                  me better
                </span>
              </h2>

              <p className="mt-6 text-base leading-8 text-slate-300 sm:text-lg">
                I&apos;m Vahid Aliyev, a Frontend and Full-Stack Developer based
                in Warsaw. I enjoy building modern, responsive and practical
                applications with React, Next.js, TypeScript and backend
                technologies.
              </p>

              <p className="mt-4 text-base leading-8 text-slate-400">
                My background combines law, computer science and software
                development. That helps me approach technical problems with
                structure, attention to detail and a strong focus on real user
                needs.
              </p>

              <div className="mt-8 space-y-5">
                <AboutFeature
                  icon={<FiTarget />}
                  text="Focused on clean, reusable and scalable application architecture."
                />

                <AboutFeature
                  icon={<FiZap />}
                  text="Interested in performance, user experience and AI-powered features."
                />

                <AboutFeature
                  icon={<FiBox />}
                  text="Always learning, building and improving through practical projects."
                />
              </div>
            </div>

            <a
              href="/Vahid_Aliyev_CV.pdf"
              download
              className="group mt-10 inline-flex w-fit items-center gap-3 rounded-2xl border border-violet-400/40 bg-gradient-to-r from-blue-500/20 to-violet-500/20 px-6 py-4 font-bold text-white shadow-[0_0_32px_rgba(124,58,237,0.15)] transition hover:-translate-y-1 hover:border-cyan-300 hover:text-cyan-200"
            >
              <FiDownload className="transition group-hover:translate-y-0.5" />

              Download CV
            </a>
          </motion.div>

          {/* Profile image */}
          <motion.div
            variants={itemAnimation}
            className="relative min-h-[520px] overflow-hidden rounded-[2rem] border border-white/10 bg-[#080d22]/70 p-3 shadow-2xl backdrop-blur-xl sm:min-h-[620px]"
          >
            <div className="absolute inset-0 bg-gradient-to-b from-cyan-500/10 via-transparent to-violet-500/15" />

            <div className="relative h-full min-h-[490px] overflow-hidden rounded-[1.5rem] border border-white/10 sm:min-h-[590px]">
              <Image
                src="/images/avatar.png"
                alt="Vahid Aliyev"
                fill
                priority={false}
                className="object-cover object-center"
                sizes="(max-width: 1280px) 100vw, 32vw"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#050816] via-transparent to-transparent" />

              <div className="absolute bottom-4 left-4 right-4 rounded-2xl border border-white/10 bg-[#080d22]/85 p-5 backdrop-blur-xl sm:bottom-6 sm:left-6 sm:right-6">
                <FiCode className="text-3xl text-cyan-300" />

                <p className="mt-4 text-lg font-semibold leading-8 text-white">
                  “Code is not only what I write. It is how I turn an idea into
                  a useful product.”
                </p>
              </div>
            </div>
          </motion.div>

          {/* Stats and skills */}
          <motion.div variants={itemAnimation} className="space-y-6">
            {/* Stats */}
            <div className="rounded-[2rem] border border-white/10 bg-[#080d22]/70 p-6 shadow-2xl backdrop-blur-xl sm:p-8">
              <div className="mb-6 flex items-center gap-3">
                <span className="h-2.5 w-2.5 rounded-full bg-violet-400 shadow-[0_0_16px_rgba(167,139,250,0.9)]" />

                <h3 className="text-lg font-bold text-white">
                  At a glance
                </h3>
              </div>

              <div className="grid grid-cols-2 overflow-hidden rounded-2xl border border-white/10">
                {stats.map((stat, index) => (
                  <div
                    key={stat.label}
                    className={`min-h-[130px] p-5 sm:p-6 ${
                      index % 2 === 0
                        ? "border-r border-white/10"
                        : ""
                    } ${
                      index < 2
                        ? "border-b border-white/10"
                        : ""
                    }`}
                  >
                    <p className="bg-gradient-to-r from-cyan-300 to-violet-400 bg-clip-text text-3xl font-black text-transparent sm:text-4xl">
                      {stat.value}
                    </p>

                    <p className="mt-2 text-xs leading-5 text-slate-400 sm:text-sm">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Tech stack */}
            <div className="rounded-[2rem] border border-white/10 bg-[#080d22]/70 p-6 shadow-2xl backdrop-blur-xl sm:p-8">
              <div className="mb-6 flex items-center gap-3">
                <span className="h-2.5 w-2.5 rounded-full bg-cyan-400 shadow-[0_0_16px_rgba(34,211,238,0.9)]" />

                <h3 className="text-lg font-bold text-white">
                  Tech stack
                </h3>
              </div>

              <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 xl:grid-cols-4">
                {skills.map((skill) => {
                  const Icon = skill.icon;

                  return (
                    <div
                      key={skill.name}
                      className="group flex min-h-[110px] flex-col items-center justify-center rounded-2xl border border-white/10 bg-white/[0.03] px-3 py-4 text-center transition hover:-translate-y-1 hover:border-cyan-400/40 hover:bg-cyan-400/[0.06]"
                    >
                      <Icon className="text-3xl text-cyan-300 transition group-hover:scale-110 group-hover:text-violet-300" />

                      <p className="mt-3 text-xs font-semibold text-slate-300 sm:text-sm">
                        {skill.name}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}

function AboutFeature({
  icon,
  text,
}: {
  icon: React.ReactNode;
  text: string;
}) {
  return (
    <div className="flex items-start gap-4">
      <span className="mt-1 grid h-10 w-10 shrink-0 place-items-center rounded-xl border border-cyan-400/20 bg-cyan-400/10 text-lg text-cyan-300">
        {icon}
      </span>

      <p className="text-sm leading-7 text-slate-300 sm:text-base">
        {text}
      </p>
    </div>
  );
}