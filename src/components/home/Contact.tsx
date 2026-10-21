"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useState, useSyncExternalStore } from "react";
import { FiArrowUpRight, FiCheck, FiCopy } from "react-icons/fi";

import { Magnetic, Reveal, WordReveal, container } from "@/components/ui/primitives";
import { site } from "@/data/site";
import { cn } from "@/lib/utils";

function useLocalTime(timeZone: string) {
  return useSyncExternalStore(
    (onChange) => {
      const id = window.setInterval(onChange, 15_000);
      return () => window.clearInterval(id);
    },
    () =>
      new Intl.DateTimeFormat("en-GB", {
        timeZone,
        hour: "2-digit",
        minute: "2-digit",
        timeZoneName: "short",
      }).format(new Date()),
    () => null,
  );
}

const pillBase =
  "inline-flex h-12 items-center gap-2 rounded-full px-6 text-[15px] font-medium transition-colors duration-300";

export function Contact() {
  const [copied, setCopied] = useState(false);
  const time = useLocalTime(site.timeZone);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(site.email);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1800);
    } catch {
      window.location.href = `mailto:${site.email}`;
    }
  };

  return (
    <section id="contact" className="pt-32 lg:pt-44">
      <div className={container}>
        <Reveal>
          <div className="relative overflow-hidden rounded-[32px] bg-accent px-6 py-12 text-on-accent sm:px-12 sm:py-16 lg:px-16">
            <div
              aria-hidden
              className="pointer-events-none absolute -bottom-48 -right-24 h-[520px] w-[520px] animate-blob rounded-full bg-[radial-gradient(circle,rgb(120_220_255/0.45),transparent_65%)]"
            />

            <p className="font-mono text-[13px] uppercase tracking-[0.12em]">05 — Contact</p>

            <h2 className="mt-10 max-w-[950px] text-[2.6rem] font-semibold leading-[1.0] tracking-[-0.045em] sm:text-6xl lg:text-[4.75rem]">
              <WordReveal text="Have a role or a product in mind? Let's talk." />
            </h2>

            <div className="mt-14 flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between">
              <div className="flex flex-col gap-6">
                <button
                  type="button"
                  onClick={copyEmail}
                  className="group flex w-fit cursor-pointer items-center gap-3 text-left text-2xl font-medium tracking-[-0.03em] sm:text-[28px]"
                  aria-label={`Copy email address ${site.email}`}
                >
                  <span className="underline decoration-on-accent/30 decoration-2 underline-offset-[6px] transition-colors group-hover:decoration-on-accent">
                    {site.email}
                  </span>
                  <span className="relative grid h-9 w-9 place-items-center rounded-full border border-on-accent/25">
                    <AnimatePresence mode="wait" initial={false}>
                      <motion.span
                        key={copied ? "check" : "copy"}
                        initial={{ scale: 0.4, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0.4, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        {copied ? <FiCheck className="h-4 w-4" /> : <FiCopy className="h-4 w-4" />}
                      </motion.span>
                    </AnimatePresence>
                  </span>
                  <span
                    aria-live="polite"
                    className={cn(
                      "font-mono text-xs transition-opacity duration-300",
                      copied ? "opacity-100" : "opacity-0",
                    )}
                  >
                    Copied
                  </span>
                </button>

                <div className="flex flex-wrap gap-2.5">
                  <Magnetic>
                    <a href={`mailto:${site.email}`} className={cn(pillBase, "bg-on-accent text-accent hover:opacity-90")}>
                      Send an email <FiArrowUpRight className="h-4 w-4" />
                    </a>
                  </Magnetic>
                  {[
                    { label: "LinkedIn", href: site.linkedin },
                    { label: "GitHub", href: site.github },
                    { label: "WhatsApp", href: site.whatsapp },
                  ].map((link) => (
                    <a
                      key={link.label}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={cn(pillBase, "border border-on-accent/30 hover:bg-on-accent hover:text-accent")}
                    >
                      {link.label} <FiArrowUpRight className="h-4 w-4" />
                    </a>
                  ))}
                </div>
              </div>

              <div className="flex flex-col gap-1.5 lg:items-end">
                <p className="text-[15px]">Usually replies within 24 hours</p>
                <p className="font-mono text-xs uppercase tracking-[0.1em] opacity-80">
                  Warsaw{time ? ` · ${time}` : ""}
                </p>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
