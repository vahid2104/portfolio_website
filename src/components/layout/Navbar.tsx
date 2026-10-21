"use client";

import Link from "next/link";
import { AnimatePresence, motion, useScroll, useSpring } from "framer-motion";
import { useEffect, useState } from "react";
import { FiArrowUpRight, FiMenu, FiX } from "react-icons/fi";

import { ThemeToggle } from "@/components/theme/ThemeToggle";
import { ButtonLink, container } from "@/components/ui/primitives";
import { navItems, site } from "@/data/site";
import { cn } from "@/lib/utils";

/** Tracks which section is in the middle of the viewport. */
function useActiveSection(ids: string[]) {
  const [active, setActive] = useState<string | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActive(entry.target.id);
        }
      },
      { rootMargin: "-45% 0px -50% 0px" },
    );

    for (const id of ids) {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    }

    return () => observer.disconnect();
  }, [ids]);

  return active;
}

const sectionIds = navItems.map((item) => item.href.slice(1));

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const active = useActiveSection(sectionIds);

  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 140, damping: 30, mass: 0.3 });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    const onKey = (event: KeyboardEvent) => event.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 border-b transition-[background-color,border-color] duration-500",
        scrolled || open
          ? "border-line bg-bg/80 backdrop-blur-xl"
          : "border-transparent bg-transparent",
      )}
    >
      <nav className={cn(container, "flex h-[72px] items-center justify-between gap-6")}>
        <Link href="/#top" onClick={() => setOpen(false)} className="group flex items-center gap-3">
          <span className="grid h-9 w-9 place-items-center rounded-[10px] bg-accent font-mono text-[13px] font-medium text-on-accent transition-transform duration-500 group-hover:rotate-[8deg]">
            {site.initials}
          </span>
          <span className="text-[15px] font-medium tracking-tight">{site.name}</span>
        </Link>

        <ul className="hidden items-center gap-1 rounded-full border border-line bg-surface/60 p-1 backdrop-blur md:flex">
          {navItems.map((item) => {
            const isActive = active === item.href.slice(1);
            return (
              <li key={item.href} className="relative">
                {isActive && (
                  <motion.span
                    layoutId="nav-pill"
                    className="absolute inset-0 rounded-full bg-surface-2"
                    transition={{ type: "spring", stiffness: 380, damping: 32 }}
                  />
                )}
                <a
                  href={`/${item.href}`}
                  className={cn(
                    "relative block rounded-full px-4 py-2 text-sm transition-colors",
                    isActive ? "text-fg" : "text-muted hover:text-fg",
                  )}
                >
                  {item.label}
                </a>
              </li>
            );
          })}
        </ul>

        <div className="flex items-center gap-2.5">
          <ThemeToggle />
          <ButtonLink
            href={site.cv}
            variant="accent"
            size="sm"
            target="_blank"
            icon={<FiArrowUpRight className="h-4 w-4" />}
            className="hidden sm:inline-flex"
          >
            Resume
          </ButtonLink>
          <button
            type="button"
            onClick={() => setOpen((value) => !value)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            className="grid h-10 w-10 place-items-center rounded-full border border-line md:hidden"
          >
            {open ? <FiX className="h-[18px] w-[18px]" /> : <FiMenu className="h-[18px] w-[18px]" />}
          </button>
        </div>
      </nav>

      <motion.div
        aria-hidden
        style={{ scaleX: progress }}
        className="absolute inset-x-0 bottom-[-1px] h-px origin-left bg-accent"
      />

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "calc(100dvh - 72px)" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden border-t border-line bg-bg md:hidden"
          >
            <ul className={cn(container, "flex flex-col gap-1 pt-6")}>
              {navItems.map((item, index) => (
                <motion.li
                  key={item.href}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.06 * index + 0.1 }}
                >
                  <a
                    href={`/${item.href}`}
                    onClick={() => setOpen(false)}
                    className="flex items-baseline justify-between border-b border-line py-5 text-3xl font-semibold tracking-tight"
                  >
                    {item.label}
                    <span className="font-mono text-xs text-subtle">0{index + 1}</span>
                  </a>
                </motion.li>
              ))}
              <motion.li
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.45 }}
                className="pt-8"
              >
                <ButtonLink href={site.cv} target="_blank" variant="accent" icon={<FiArrowUpRight />} className="w-full">
                  Download resume
                </ButtonLink>
              </motion.li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
