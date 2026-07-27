"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FiArrowRight, FiDownload, FiFileText, FiMail } from "react-icons/fi";

export function Hero() {
  return (
    <section className="relative overflow-hidden px-4 pb-16 pt-24 sm:px-6 lg:min-h-screen lg:pt-28">
      <div className="mx-auto grid max-w-[1400px] items-center gap-16 lg:grid-cols-[0.82fr_1.18fr] lg:gap-14">
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="relative z-20"
        >
          <div className="mb-7 inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/10 px-4 py-2 backdrop-blur-xl sm:mb-8">
            <span className="h-2.5 w-2.5 rounded-full bg-emerald-400 shadow-[0_0_18px_#34d399]" />
            <span className="text-xs text-slate-200 sm:text-sm">
              Available for opportunities
            </span>
          </div>

          <h1 className="text-5xl font-black leading-none tracking-tight sm:text-6xl xl:text-7xl">
            Hi, I&apos;m
            <span className="mt-3 block bg-gradient-to-r from-cyan-400 via-blue-500 to-violet-500 bg-clip-text text-transparent">
              Vahid Aliyev
            </span>
          </h1>

          <p className="mt-6 text-xl font-bold text-white sm:mt-7 sm:text-2xl">
            Frontend / Full-Stack Developer |
          </p>

          <p className="mt-5 max-w-xl text-base leading-7 text-slate-300 sm:mt-6 sm:text-lg sm:leading-8">
            I build modern, fast and responsive web applications with React,
            Next.js and AI integrations. Turning ideas into real products.
          </p>

          <div className="mt-8 flex flex-wrap gap-4 sm:mt-10 sm:gap-5">
            <a
              href="#projects"
              className="group inline-flex items-center gap-3 rounded-2xl bg-gradient-to-r from-cyan-400 to-violet-500 px-5 py-3.5 text-sm font-bold text-white shadow-[0_0_35px_rgba(34,211,238,0.25)] transition hover:scale-105 sm:px-7 sm:py-4 sm:text-base"
            >
              View My Work
              <FiArrowRight className="transition group-hover:translate-x-1" />
            </a>

            <a
              href="/Vahid_Aliyev_CV.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 rounded-2xl border border-white/15 bg-white/10 px-5 py-3.5 text-sm font-bold text-white backdrop-blur-xl transition hover:border-cyan-300 hover:text-cyan-300 sm:px-7 sm:py-4 sm:text-base"
            >
              View My CV
              <FiFileText className="text-lg" />
            </a>
          </div>

          <div className="mt-7 flex gap-4 sm:mt-8 sm:gap-5">
            <SocialIcon
              href="https://github.com/vahid2104"
              icon={<FaGithub />}
            />

            <SocialIcon
              href="https://www.linkedin.com/in/vahid-aliyev-front-end-developer/"
              icon={<FaLinkedin />}
            />

            <SocialIcon
              href="mailto:vahid.aliyev.03@gmail.com"
              icon={<FiMail />}
            />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 25 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="relative mx-auto mt-2 min-h-[680px] w-full max-w-[720px] sm:min-h-[760px] lg:mt-0 lg:h-[690px] lg:min-h-0"
        >
          <div className="absolute left-1/2 top-0 h-[290px] w-[290px] -translate-x-1/2 sm:h-[360px] sm:w-[360px] lg:h-[440px] lg:w-[440px]">
            <Image
              src="/images/avatar.png"
              alt="Vahid Aliyev avatar"
              width={520}
              height={520}
              priority
              className="relative z-10 h-full w-full rounded-full object-cover shadow-[0_0_90px_rgba(139,92,246,0.35)]"
            />

            <FloatingCard
              className="-left-15 top-5 scale-[0.72] sm:-left-16 sm:top-14 sm:scale-90 lg:-left-28 lg:top-20 lg:scale-100"
              icon="</>"
              title="Clean Code"
              text="My Passion"
            />

            <FloatingCard
              className="-right-18 top-12 scale-[0.72] sm:-right-14 sm:top-10 sm:scale-90 lg:-right-24 lg:top-8 lg:scale-100"
              icon="⚡"
              title="Fast & Modern"
              text="Next.js Power"
            />

            <FloatingCard
              className="-right-11 -bottom-3 scale-[0.72] sm:-right-10 sm:bottom-12 sm:scale-90 lg:-right-24 lg:bottom-20 lg:scale-100"
              icon="🧠"
              title="AI Integration"
              text="OpenAI APIs"
            />
          </div>

          <div className="absolute bottom-0 left-1/2 z-30 w-full -translate-x-1/2 overflow-hidden rounded-3xl border border-white/10 bg-[#080d22]/90 shadow-2xl backdrop-blur-xl">
            <div className="grid grid-cols-1 lg:grid-cols-[1fr_230px]">
              <div className="p-4 sm:p-6">
                <div className="mb-4 flex items-center gap-2 sm:mb-5">
                  <span className="h-3 w-3 rounded-full bg-red-400" />
                  <span className="h-3 w-3 rounded-full bg-yellow-400" />
                  <span className="h-3 w-3 rounded-full bg-green-400" />
                  <span className="ml-auto text-xs text-slate-400 sm:text-sm">
                    dev.js
                  </span>
                </div>

                <pre className="overflow-x-auto font-mono text-xs leading-6 sm:text-sm sm:leading-7 lg:text-[15px] lg:leading-8">
                  <code>
                    <span className="text-violet-400">const</span>
                    <span className="text-cyan-300"> developer</span>
                    <span className="text-slate-400"> = </span>
                    <span className="text-yellow-300">{"{"}</span>
                    {"\n"}

                    <span className="text-sky-300">{"  "}name</span>
                    <span className="text-slate-400">: </span>
                    <span className="text-emerald-300">
                      &quot;Vahid Aliyev&quot;
                    </span>
                    <span className="text-slate-400">,</span>
                    {"\n"}

                    <span className="text-sky-300">{"  "}role</span>
                    <span className="text-slate-400">: </span>
                    <span className="text-emerald-300">
                      &quot;Frontend / Full-Stack Developer&quot;
                    </span>
                    <span className="text-slate-400">,</span>
                    {"\n"}

                    <span className="text-sky-300">{"  "}stack</span>
                    <span className="text-slate-400">: </span>
                    <span className="text-yellow-300">[</span>
                    <span className="text-emerald-300">&quot;React&quot;</span>
                    <span className="text-slate-400">, </span>
                    <span className="text-emerald-300">
                      &quot;Next.js&quot;
                    </span>
                    <span className="text-slate-400">, </span>
                    <span className="text-emerald-300">
                      &quot;TypeScript&quot;
                    </span>
                    <span className="text-yellow-300">]</span>
                    <span className="text-slate-400">,</span>
                    {"\n"}

                    <span className="text-sky-300">{"  "}focus</span>
                    <span className="text-slate-400">: </span>
                    <span className="text-emerald-300">
                      &quot;AI-powered Web Apps&quot;
                    </span>
                    <span className="text-slate-400">,</span>
                    {"\n"}

                    <span className="text-sky-300">{"  "}location</span>
                    <span className="text-slate-400">: </span>
                    <span className="text-emerald-300">
                      &quot;Warsaw, Poland&quot;
                    </span>
                    <span className="text-slate-400">,</span>
                    {"\n"}

                    <span className="text-yellow-300">{"}"}</span>
                    <span className="text-slate-400">;</span>
                  </code>
                </pre>
              </div>

              <div className="grid grid-cols-3 border-t border-white/10 bg-white/[0.03] lg:block lg:border-l lg:border-t-0">
                <Stat number="10+" text="Projects" icon="▦" />
                <Stat number="2+" text="Learning" icon="★" />
                <Stat number="100%" text="Commitment" icon="☕" />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function SocialIcon({ href, icon }: { href: string; icon: React.ReactNode }) {
  const isExternal = !href.startsWith("mailto:") && href !== "#";

  return (
    <a
      href={href}
      target={isExternal ? "_blank" : undefined}
      rel={isExternal ? "noopener noreferrer" : undefined}
      className="grid h-12 w-12 place-items-center rounded-2xl border border-white/10 bg-white/10 text-xl text-white backdrop-blur-xl transition hover:-translate-y-1 hover:border-cyan-300 hover:text-cyan-300 sm:h-14 sm:w-14 sm:text-2xl"
    >
      {icon}
    </a>
  );
}

function FloatingCard({
  className,
  icon,
  title,
  text,
}: {
  className: string;
  icon: string;
  title: string;
  text: string;
}) {
  return (
    <div
      className={`absolute z-40 min-w-[130px] rounded-2xl border border-white/10 bg-[#0b1026]/85 px-5 py-4 text-center shadow-xl backdrop-blur-xl ${className}`}
    >
      <div className="text-2xl text-cyan-300">{icon}</div>

      <p className="mt-2 whitespace-nowrap text-sm font-bold text-white">
        {title}
      </p>

      <p className="whitespace-nowrap text-xs text-slate-400">{text}</p>
    </div>
  );
}

function Stat({
  number,
  text,
  icon,
}: {
  number: string;
  text: string;
  icon: string;
}) {
  return (
    <div className="flex min-h-[100px] items-center justify-center gap-2 border-r border-white/10 px-2 text-center last:border-r-0 lg:h-1/3 lg:min-h-0 lg:justify-start lg:gap-4 lg:border-b lg:border-r-0 lg:px-6 lg:text-left lg:last:border-b-0">
      <span className="text-lg text-cyan-300 lg:text-2xl">{icon}</span>

      <div>
        <p className="text-xl font-black text-white lg:text-3xl">{number}</p>

        <p className="text-[10px] text-slate-400 sm:text-xs lg:text-sm">
          {text}
        </p>
      </div>
    </div>
  );
}
