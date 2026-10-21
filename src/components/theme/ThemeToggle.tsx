"use client";

import { FiMoon, FiSun } from "react-icons/fi";

import { cn } from "@/lib/utils";
import { useTheme } from "./Providers";

/**
 * Pill switch: sun on the left, moon on the right, a knob that slides under the active one.
 * Knob position is driven by the [data-theme] attribute (CSS), so it is correct on first paint.
 */
export function ThemeToggle({ className }: { className?: string }) {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      type="button"
      onClick={(event) => {
        const rect = event.currentTarget.getBoundingClientRect();
        toggleTheme({ x: rect.left + rect.width / 2, y: rect.top + rect.height / 2 });
      }}
      aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
      title="Toggle theme"
      className={cn(
        "relative inline-flex h-10 w-[76px] shrink-0 cursor-pointer items-center rounded-full border border-line p-[3px] transition-colors hover:border-subtle",
        className,
      )}
    >
      <span
        aria-hidden
        className="absolute left-[3px] top-[3px] h-8 w-8 rounded-full bg-surface-2 shadow-sm transition-transform duration-500 ease-[cubic-bezier(0.65,0,0.35,1)] dark:translate-x-9"
      />
      <span className="relative grid h-8 w-8 place-items-center text-fg transition-colors dark:text-subtle">
        <FiSun className="h-4 w-4" />
      </span>
      <span className="relative ml-1 grid h-8 w-8 place-items-center text-subtle transition-colors dark:text-fg">
        <FiMoon className="h-4 w-4" />
      </span>
    </button>
  );
}
