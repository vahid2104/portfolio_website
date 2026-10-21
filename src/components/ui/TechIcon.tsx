"use client";

import type { IconType } from "react-icons";
import { LuBraces, LuChartColumn, LuCode, LuKeyRound, LuShieldCheck } from "react-icons/lu";
import {
  SiAxios,
  SiExpress,
  SiFigma,
  SiFirebase,
  SiFormik,
  SiFramer,
  SiGit,
  SiGithub,
  SiGithubactions,
  SiGithubpages,
  SiGoogle,
  SiJavascript,
  SiJsonwebtokens,
  SiMongodb,
  SiMongoose,
  SiNextdotjs,
  SiNodedotjs,
  SiPostman,
  SiReact,
  SiReactrouter,
  SiRender,
  SiSocketdotio,
  SiTailwindcss,
  SiThemoviedatabase,
  SiTypescript,
  SiVercel,
  SiVite,
  SiVitest,
} from "react-icons/si";
import { TbApi, TbBrandOpenai, TbPrompt, TbTestPipe } from "react-icons/tb";
import { motion } from "framer-motion";

import { cn } from "@/lib/utils";

type TechMeta = { icon: IconType; color?: string };

/**
 * Brand icons keyed by a normalised technology name.
 * Brands whose logo is black/white get no colour, so they follow the theme's text colour.
 */
const registry: Record<string, TechMeta> = {
  react: { icon: SiReact, color: "#58c4dc" },
  "next.js": { icon: SiNextdotjs },
  "app router": { icon: SiNextdotjs },
  typescript: { icon: SiTypescript, color: "#3178c6" },
  javascript: { icon: SiJavascript, color: "#e8c400" },
  "tailwind css": { icon: SiTailwindcss, color: "#06b6d4" },
  "framer motion": { icon: SiFramer, color: "#7c6cff" },
  recharts: { icon: LuChartColumn, color: "#22b5bf" },
  "node.js": { icon: SiNodedotjs, color: "#5fa04e" },
  express: { icon: SiExpress },
  "express.js": { icon: SiExpress },
  "rest api": { icon: TbApi, color: "#8b7cff" },
  "rest apis": { icon: TbApi, color: "#8b7cff" },
  "socket.io": { icon: SiSocketdotio },
  jwt: { icon: SiJsonwebtokens, color: "#d63aff" },
  "jwt · bcrypt": { icon: SiJsonwebtokens, color: "#d63aff" },
  bcrypt: { icon: LuKeyRound, color: "#e8603c" },
  "firebase auth": { icon: SiFirebase, color: "#ffa000" },
  firebase: { icon: SiFirebase, color: "#ffa000" },
  "google sign-in": { icon: SiGoogle, color: "#4285f4" },
  mongodb: { icon: SiMongodb, color: "#47a248" },
  "mongodb atlas": { icon: SiMongodb, color: "#47a248" },
  mongoose: { icon: SiMongoose, color: "#e0484f" },
  openai: { icon: TbBrandOpenai },
  "openai api": { icon: TbBrandOpenai },
  "prompt engineering": { icon: TbPrompt, color: "#0ea5c6" },
  "structured outputs": { icon: LuBraces, color: "#e8603c" },
  "structured json": { icon: LuBraces, color: "#e8603c" },
  "git · github": { icon: SiGithub },
  git: { icon: SiGit, color: "#f05032" },
  github: { icon: SiGithub },
  "github actions": { icon: SiGithubactions, color: "#2088ff" },
  "github pages": { icon: SiGithubpages },
  vitest: { icon: SiVitest, color: "#729b1b" },
  supertest: { icon: TbTestPipe, color: "#8b7cff" },
  postman: { icon: SiPostman, color: "#ff6c37" },
  vercel: { icon: SiVercel },
  render: { icon: SiRender },
  figma: { icon: SiFigma, color: "#f24e1e" },
  vite: { icon: SiVite, color: "#9f6bff" },
  "react router": { icon: SiReactrouter, color: "#f44250" },
  axios: { icon: SiAxios, color: "#5a29e4" },
  formik: { icon: SiFormik, color: "#2563eb" },
  "tmdb api": { icon: SiThemoviedatabase, color: "#01b4e4" },
  tmdb: { icon: SiThemoviedatabase, color: "#01b4e4" },
  "protected ui": { icon: LuShieldCheck, color: "#16a34a" },
};

export function getTech(name: string): TechMeta | undefined {
  const key = name.trim().toLowerCase();
  return registry[key] ?? registry[key.replace(/ \d+$/, "")];
}

/** Brand icon for a technology, or nothing when we don't know it. */
export function TechIcon({ name, className }: { name: string; className?: string }) {
  const meta = getTech(name);
  if (!meta) return null;
  const Icon = meta.icon;
  return <Icon aria-hidden className={className} style={meta.color ? { color: meta.color } : undefined} />;
}

/** Icon on top, name underneath. */
export function TechTile({ name, className, size = "md" }: { name: string; className?: string; size?: "sm" | "md" }) {
  const meta = getTech(name);
  const Icon = meta?.icon ?? LuCode;

  return (
    <motion.div
      whileHover={{ y: -4 }}
      transition={{ type: "spring", stiffness: 400, damping: 22 }}
      title={name}
      className={cn(
        "group/tile flex shrink-0 flex-col items-center justify-center gap-2 rounded-2xl border border-line bg-surface text-center transition-colors duration-300 hover:border-violet/50",
        size === "md" ? "min-h-[92px] px-2 py-3.5" : "w-[96px] px-2 py-3",
        className,
      )}
    >
      <span className="grid h-10 w-10 place-items-center rounded-xl bg-surface-2 transition-transform duration-300 group-hover/tile:scale-110">
        <Icon aria-hidden className="h-5 w-5" style={meta?.color ? { color: meta.color } : undefined} />
      </span>
      <span className="font-mono text-[11px] leading-tight text-muted transition-colors group-hover/tile:text-fg">{name}</span>
    </motion.div>
  );
}
