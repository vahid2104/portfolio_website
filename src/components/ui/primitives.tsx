"use client";

import Link from "next/link";
import {
  animate,
  motion,
  useInView,
  useMotionValue,
  useSpring,
  type HTMLMotionProps,
} from "framer-motion";
import { useEffect, useRef, useState } from "react";

import { cn } from "@/lib/utils";

export { container } from "@/lib/utils";

const EASE = [0.22, 1, 0.36, 1] as const;

/** Colour rotation used for markers so sections don't all look the same. */
export const tones = [
  { dot: "bg-accent", text: "text-accent-text", soft: "bg-accent/15", border: "border-accent/50" },
  { dot: "bg-violet", text: "text-violet", soft: "bg-violet/15", border: "border-violet/50" },
  { dot: "bg-cyan", text: "text-cyan", soft: "bg-cyan/15", border: "border-cyan/50" },
  { dot: "bg-coral", text: "text-coral", soft: "bg-coral/15", border: "border-coral/50" },
] as const;

export const tone = (index: number) => tones[((index % tones.length) + tones.length) % tones.length];

/* ------------------------------------------------------------------ */
/* Aurora — drifting colour blobs behind a section                      */
/* ------------------------------------------------------------------ */

export function Aurora({ className, variant = "default" }: { className?: string; variant?: "default" | "violet" }) {
  const blobs =
    variant === "violet"
      ? [
          { background: "var(--glow-2)", width: 560, height: 560, right: "-12%", top: "-25%" },
          { background: "var(--glow-3)", width: 380, height: 380, left: "-8%", bottom: "-20%", animationDelay: "-7s" },
        ]
      : [
          { background: "var(--glow-1)", width: 520, height: 520, left: "-6%", top: "-18%" },
          { background: "var(--glow-2)", width: 620, height: 620, right: "-12%", top: "-6%", animationDelay: "-6s" },
          { background: "var(--glow-3)", width: 420, height: 420, left: "38%", top: "34%", animationDelay: "-12s" },
        ];

  return (
    <div aria-hidden className={cn("aurora", className)}>
      {blobs.map((style, index) => (
        <span key={index} style={style} />
      ))}
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Reveal — fades content up once it scrolls into view                 */
/* ------------------------------------------------------------------ */

export function Reveal({
  children,
  delay = 0,
  y = 28,
  className,
  ...rest
}: { delay?: number; y?: number } & HTMLMotionProps<"div">) {
  return (
    <motion.div
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.8, delay, ease: EASE }}
      className={className}
      {...rest}
    >
      {children}
    </motion.div>
  );
}

/* ------------------------------------------------------------------ */
/* WordReveal — each word slides up from behind a mask                 */
/* ------------------------------------------------------------------ */

export function WordReveal({
  text,
  className,
  delay = 0,
  immediate = false,
}: {
  text: string;
  className?: string;
  delay?: number;
  /** Animate on mount instead of on scroll (used above the fold). */
  immediate?: boolean;
}) {
  const words = text.split(" ");
  const trigger = immediate
    ? { animate: "show" as const }
    : { whileInView: "show" as const, viewport: { once: true, amount: 0.5 } };

  return (
    <motion.span
      initial="hidden"
      {...trigger}
      transition={{ staggerChildren: 0.06, delayChildren: delay }}
      className={className}
      aria-label={text}
    >
      {words.map((word, index) => (
        <span key={`${word}-${index}`} aria-hidden className="inline-block overflow-hidden pb-[0.12em] align-top">
          <motion.span
            className="inline-block"
            variants={{
              hidden: { y: "110%" },
              show: { y: "0%", transition: { duration: 0.85, ease: EASE } },
            }}
          >
            {word}
            {index < words.length - 1 ? " " : ""}
          </motion.span>
        </span>
      ))}
    </motion.span>
  );
}

/* ------------------------------------------------------------------ */
/* SectionHeader                                                       */
/* ------------------------------------------------------------------ */

export function SectionHeader({
  index,
  eyebrow,
  title,
  description,
  className,
}: {
  index: string;
  eyebrow: string;
  title: string;
  description?: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("flex flex-col gap-7", className)}>
      <Reveal y={12} className="flex items-center gap-3 font-mono text-[13px] tracking-wide text-muted">
        <span className={cn("h-2 w-2 rounded-[2px]", tone(Number.parseInt(index, 10) - 1).dot)} />
        <span>
          {index} — {eyebrow}
        </span>
      </Reveal>

      <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between lg:gap-20">
        <h2 className="max-w-[760px] text-[2.6rem] font-semibold leading-[1.02] tracking-[-0.035em] text-balance sm:text-5xl lg:text-[3.5rem]">
          <WordReveal text={title} />
        </h2>

        {description && (
          <Reveal delay={0.15} className="max-w-[420px] text-base leading-relaxed text-muted sm:text-[17px]">
            {description}
          </Reveal>
        )}
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Tag                                                                 */
/* ------------------------------------------------------------------ */

export function Tag({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border border-line px-3 py-1 font-mono text-xs text-muted transition-colors duration-300 hover:border-violet/60 hover:text-fg",
        className,
      )}
    >
      {children}
    </span>
  );
}

/* ------------------------------------------------------------------ */
/* Magnetic — child follows the cursor slightly while hovered          */
/* ------------------------------------------------------------------ */

export function Magnetic({
  children,
  strength = 0.25,
  className,
}: {
  children: React.ReactNode;
  strength?: number;
  className?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const x = useSpring(useMotionValue(0), { stiffness: 220, damping: 18, mass: 0.4 });
  const y = useSpring(useMotionValue(0), { stiffness: 220, damping: 18, mass: 0.4 });

  return (
    <motion.span
      ref={ref}
      style={{ x, y }}
      className={cn("inline-flex", className)}
      onPointerMove={(event) => {
        if (event.pointerType !== "mouse" || !ref.current) return;
        const rect = ref.current.getBoundingClientRect();
        x.set((event.clientX - rect.left - rect.width / 2) * strength);
        y.set((event.clientY - rect.top - rect.height / 2) * strength);
      }}
      onPointerLeave={() => {
        x.set(0);
        y.set(0);
      }}
    >
      {children}
    </motion.span>
  );
}

/* ------------------------------------------------------------------ */
/* Button                                                              */
/* ------------------------------------------------------------------ */

type ButtonVariant = "primary" | "secondary" | "accent" | "ghost";

const buttonVariants: Record<ButtonVariant, string> = {
  primary: "bg-inverse text-on-inverse hover:opacity-90",
  secondary: "border border-line text-fg hover:border-subtle hover:bg-surface",
  accent: "bg-accent text-on-accent hover:brightness-95",
  ghost: "text-fg hover:bg-surface-2",
};

export function ButtonLink({
  href,
  children,
  icon,
  variant = "primary",
  size = "md",
  external,
  download,
  className,
  magnetic = false,
  ...rest
}: {
  href: string;
  children: React.ReactNode;
  icon?: React.ReactNode;
  variant?: ButtonVariant;
  size?: "sm" | "md";
  external?: boolean;
  download?: boolean;
  className?: string;
  magnetic?: boolean;
} & Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, "href">) {
  const classes = cn(
    "group/button inline-flex cursor-pointer items-center justify-center gap-2.5 rounded-full font-medium whitespace-nowrap transition-[background-color,border-color,opacity,filter] duration-300",
    size === "md" ? "h-12 px-6 text-[15px]" : "h-10 px-[18px] text-sm",
    buttonVariants[variant],
    className,
  );

  const content = (
    <>
      <span>{children}</span>
      {icon && (
        <span className="inline-flex transition-transform duration-300 group-hover/button:translate-x-0.5 group-hover/button:-translate-y-[1px]">
          {icon}
        </span>
      )}
    </>
  );

  const isInternal = href.startsWith("/") && !download;

  const element = isInternal ? (
    <Link href={href} className={classes} {...rest}>
      {content}
    </Link>
  ) : (
    <a
      href={href}
      className={classes}
      download={download}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      {...rest}
    >
      {content}
    </a>
  );

  return magnetic ? <Magnetic>{element}</Magnetic> : element;
}

export function IconLink({
  href,
  label,
  children,
  className,
}: {
  href: string;
  label: string;
  children: React.ReactNode;
  className?: string;
}) {
  const external = href.startsWith("http");
  return (
    <Magnetic strength={0.35}>
      <a
        href={href}
        aria-label={label}
        title={label}
        {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
        className={cn(
          "grid h-12 w-12 place-items-center rounded-full border border-line text-fg transition-colors duration-300 hover:border-fg hover:bg-inverse hover:text-on-inverse",
          className,
        )}
      >
        {children}
      </a>
    </Magnetic>
  );
}

/* ------------------------------------------------------------------ */
/* CountUp                                                             */
/* ------------------------------------------------------------------ */

export function CountUp({ to, suffix = "", duration = 1.6 }: { to: number; suffix?: string; duration?: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.6 });
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const controls = animate(0, to, {
      duration,
      ease: EASE,
      onUpdate: (latest) => setValue(Math.round(latest)),
    });
    return () => controls.stop();
  }, [inView, to, duration]);

  return (
    <span ref={ref} className="tabular-nums">
      {value}
      {suffix}
    </span>
  );
}

/* ------------------------------------------------------------------ */
/* Marquee — infinite horizontal loop, pauses on hover                 */
/* ------------------------------------------------------------------ */

export function Marquee({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <div
      className={cn(
        "group/marquee relative flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]",
        className,
      )}
    >
      <div className="flex w-max shrink-0 animate-marquee gap-3 pr-3 group-hover/marquee:[animation-play-state:paused]">
        {children}
        <div aria-hidden className="flex gap-3">
          {children}
        </div>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* SpotlightCard — border + surface glow follows the cursor            */
/* ------------------------------------------------------------------ */

export function SpotlightCard({
  children,
  className,
  ...rest
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      onPointerMove={(event) => {
        const rect = event.currentTarget.getBoundingClientRect();
        event.currentTarget.style.setProperty("--x", `${event.clientX - rect.left}px`);
        event.currentTarget.style.setProperty("--y", `${event.clientY - rect.top}px`);
      }}
      className={cn(
        "group/spot relative rounded-3xl border border-line bg-surface shadow-card",
        "before:pointer-events-none before:absolute before:-inset-px before:rounded-[inherit] before:opacity-0 before:transition-opacity before:duration-500 hover:before:opacity-100",
        "before:[background:radial-gradient(420px_circle_at_var(--x)_var(--y),color-mix(in_srgb,var(--violet)_70%,transparent),color-mix(in_srgb,var(--accent)_40%,transparent)_25%,transparent_50%)]",
        "before:[mask:linear-gradient(#000_0_0)_content-box_exclude,linear-gradient(#000_0_0)] before:p-px",
        className,
      )}
      {...rest}
    >
      {children}
    </div>
  );
}
