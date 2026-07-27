"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  FiArrowUpRight,
  FiCheck,
  FiCopy,
  FiDownload,
  FiGithub,
  FiLinkedin,
  FiMail,
  FiMapPin,
  FiMessageCircle,
  FiZap,
} from "react-icons/fi";

const EMAIL_ADDRESS = "vahid.aliyev.03@gmail.com";

// WhatsApp üçün ölkə kodu ilə birlikdə, boşluqsuz yaz.
// Məsələn: 48500111222
const WHATSAPP_NUMBER = "994773616467";

const WHATSAPP_MESSAGE =
  "Hello Vahid, I found your portfolio and would like to discuss an opportunity.";

const LINKEDIN_URL =
  "https://www.linkedin.com/in/vahid-aliyev-front-end-developer/";
const GITHUB_URL = "https://github.com/vahid2104";
const CV_URL = "/Vahid_Aliyev_CV.pdf";

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

export default function Contact() {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL_ADDRESS);

      setCopied(true);

      setTimeout(() => {
        setCopied(false);
      }, 1500);
    } catch (error) {
      console.error("Failed to copy email:", error);
    }
  };

  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    WHATSAPP_MESSAGE,
  )}`;

  return (
    <section
      id="contact"
      className="relative overflow-hidden px-4 py-24 sm:px-6 lg:px-8 lg:py-32"
    >
      {/* Background effects */}
      <div className="pointer-events-none absolute left-1/2 top-0 h-px w-[75%] -translate-x-1/2 bg-gradient-to-r from-transparent via-cyan-400/25 to-transparent" />

      <div className="pointer-events-none absolute -left-40 top-1/3 h-[420px] w-[420px] rounded-full bg-cyan-500/[0.08] blur-[150px]" />

      <div className="pointer-events-none absolute -right-40 bottom-0 h-[500px] w-[500px] rounded-full bg-violet-500/[0.08] blur-[170px]" />

      <motion.div
        variants={revealAnimation}
        initial="hidden"
        whileInView="visible"
        viewport={{
          once: true,
          amount: 0.1,
        }}
        className="relative mx-auto max-w-[1400px]"
      >
        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-stretch">
          {/* Left side */}
          <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.025] p-6 shadow-2xl backdrop-blur-xl sm:p-8 lg:p-12">
            <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-cyan-400/[0.08] blur-[100px]" />

            <div className="relative">
              <div className="flex items-center gap-3">
                <span className="grid h-11 w-11 place-items-center rounded-2xl border border-cyan-400/20 bg-cyan-400/[0.07] text-xl text-cyan-300">
                  <FiZap />
                </span>

                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.3em] text-cyan-300">
                    Let&apos;s connect
                  </p>

                  <p className="mt-1 text-sm text-slate-500">
                    Open to meaningful opportunities
                  </p>
                </div>
              </div>

              <h2 className="mt-8 max-w-3xl text-4xl font-black leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
                Let&apos;s build something
                <span className="block bg-gradient-to-r from-cyan-400 via-blue-500 to-violet-500 bg-clip-text text-transparent">
                  meaningful together.
                </span>
              </h2>

              <p className="mt-6 max-w-2xl text-base leading-8 text-slate-400 sm:text-lg">
                I&apos;m open to frontend, full-stack and AI-powered product
                opportunities, collaborative projects and startup ideas.
              </p>

              {/* Availability */}
              <div className="mt-8 inline-flex items-center gap-3 rounded-2xl border border-emerald-400/20 bg-emerald-400/[0.06] px-4 py-3">
                <span className="relative flex h-3 w-3">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-70" />
                  <span className="relative inline-flex h-3 w-3 rounded-full bg-emerald-400" />
                </span>

                <div>
                  <p className="text-sm font-semibold text-emerald-200">
                    Available for opportunities
                  </p>

                  <p className="mt-0.5 text-xs text-emerald-300/60">
                    Usually replies within 24 hours
                  </p>
                </div>
              </div>

              {/* Info row */}
              <div className="mt-10 grid gap-4 sm:grid-cols-2">
                <InfoCard
                  label="Location"
                  value="Warsaw, Poland"
                  icon={<FiMapPin />}
                />

                <InfoCard
                  label="Current focus"
                  value="Frontend · Full Stack · AI"
                  icon={<FiCheck />}
                />
              </div>
            </div>
          </div>

          {/* Right side */}
          <div className="flex flex-col gap-5">
            {/* Email card */}
            <a
              href={`mailto:${EMAIL_ADDRESS}`}
              className="group relative flex min-h-[190px] flex-1 overflow-hidden rounded-[2rem] border border-cyan-400/20 bg-cyan-400/[0.045] p-6 shadow-[0_20px_70px_rgba(34,211,238,0.07)] backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:border-cyan-300/50 hover:bg-cyan-400/[0.08] sm:p-8"
            >
              <div className="pointer-events-none absolute right-[-50px] top-[-50px] h-44 w-44 rounded-full bg-cyan-400/10 blur-[70px]" />

              <div className="relative flex w-full flex-col justify-between">
                <div className="flex items-start justify-between gap-4">
                  <span className="grid h-13 w-13 place-items-center rounded-2xl border border-cyan-400/20 bg-cyan-400/[0.08] text-2xl text-cyan-300">
                    <FiMail />
                  </span>

                  <FiArrowUpRight className="text-xl text-cyan-300 transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1" />
                </div>

                <div className="mt-8">
                  <p className="text-xs font-bold uppercase tracking-[0.25em] text-cyan-300">
                    Email
                  </p>

                  <h3 className="mt-3 text-xl font-bold text-white sm:text-2xl">
                    Start a conversation
                  </h3>

                  <p className="mt-2 break-all text-sm text-slate-400">
                    {EMAIL_ADDRESS}
                  </p>
                </div>
              </div>
            </a>

            {/* WhatsApp card */}
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative flex min-h-[190px] flex-1 overflow-hidden rounded-[2rem] border border-emerald-400/20 bg-emerald-400/[0.04] p-6 shadow-[0_20px_70px_rgba(16,185,129,0.06)] backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:border-emerald-300/50 hover:bg-emerald-400/[0.08] sm:p-8"
            >
              <div className="pointer-events-none absolute right-[-50px] top-[-50px] h-44 w-44 rounded-full bg-emerald-400/10 blur-[70px]" />

              <div className="relative flex w-full flex-col justify-between">
                <div className="flex items-start justify-between gap-4">
                  <span className="grid h-13 w-13 place-items-center rounded-2xl border border-emerald-400/20 bg-emerald-400/[0.08] text-2xl text-emerald-300">
                    <FiMessageCircle />
                  </span>

                  <FiArrowUpRight className="text-xl text-emerald-300 transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1" />
                </div>

                <div className="mt-8">
                  <p className="text-xs font-bold uppercase tracking-[0.25em] text-emerald-300">
                    WhatsApp
                  </p>

                  <h3 className="mt-3 text-xl font-bold text-white sm:text-2xl">
                    Send a quick message
                  </h3>

                  <p className="mt-2 text-sm text-slate-400">
                    Best for a fast and informal conversation.
                  </p>
                </div>
              </div>
            </a>

            {/* Secondary actions */}
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
              <button
                type="button"
                onClick={handleCopyEmail}
                className="group flex items-center justify-between text-slate-400 rounded-2xl border border-white/10 bg-white/[0.03] p-5 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400/30 hover:bg-cyan-400/[0.05] hover:text-cyan-300"
              >
                <div className="w-full">
                  {copied ? (
                    <p className="text-center w-full text-white">Copied!</p>
                  ) : (
                    <div className="flex flex-col items-center justify-center gap-3 ">
                      <span className="place-items-center rounded-2xl text-lg ">
                        <FiCopy />
                      </span>

                      <p className="text-xs font-bold ">Copy Email</p>
                    </div>
                  )}
                </div>
              </button>

              <a
                href={LINKEDIN_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex min-h-24 flex-col items-center justify-center gap-2 rounded-2xl border border-white/10 bg-white/[0.025] px-3 py-4 text-center text-slate-400 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-blue-400/30 hover:bg-blue-400/[0.06] hover:text-blue-200"
              >
                <FiLinkedin className="text-xl" />

                <span className="text-xs font-semibold">LinkedIn</span>
              </a>

              <a
                href={GITHUB_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex min-h-24 flex-col items-center justify-center gap-2 rounded-2xl border border-white/10 bg-white/[0.025] px-3 py-4 text-center text-slate-400 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-violet-400/30 hover:bg-violet-400/[0.06] hover:text-violet-200"
              >
                <FiGithub className="text-xl" />

                <span className="text-xs font-semibold">GitHub</span>
              </a>

              <a
                href={CV_URL}
                download
                className="group flex min-h-24 flex-col items-center justify-center gap-2 rounded-2xl border border-white/10 bg-white/[0.025] px-3 py-4 text-center text-slate-400 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-amber-400/30 hover:bg-amber-400/[0.06] hover:text-amber-200"
              >
                <FiDownload className="text-xl" />

                <span className="text-xs font-semibold">Download CV</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom line */}
        <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-6 text-center text-xs text-slate-600 sm:flex-row sm:text-left">
          <p>Have an idea, role or collaboration in mind? Let&apos;s talk.</p>

          <Link
            href="#home"
            className="group inline-flex items-center gap-2 font-semibold text-slate-400 transition hover:text-cyan-300"
          >
            Back to top
            <FiArrowUpRight className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </Link>
        </div>
      </motion.div>
    </section>
  );
}

function InfoCard({
  label,
  value,
  icon,
}: {
  label: string;
  value: string;
  icon: React.ReactNode;
}) {
  return (
    <div className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.025] p-4 backdrop-blur-xl">
      <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl border border-cyan-400/15 bg-cyan-400/[0.05] text-cyan-300">
        {icon}
      </span>

      <div>
        <p className="text-xs uppercase tracking-[0.18em] text-slate-600">
          {label}
        </p>

        <p className="mt-1 text-sm font-semibold text-slate-200">{value}</p>
      </div>
    </div>
  );
}
