import { FiArrowUp } from "react-icons/fi";

import { site } from "@/data/site";
import { cn, container } from "@/lib/utils";

export function Footer() {
  return (
    <footer className="mt-24 border-t border-line">
      <div className={cn(container, "flex flex-col gap-5 py-10 sm:flex-row sm:items-center sm:justify-between")}>
        <p className="text-sm text-muted">
          © {new Date().getFullYear()} {site.name}
        </p>
        <p className="font-mono text-xs text-subtle">Built with Next.js, TypeScript, Tailwind CSS & Framer Motion</p>
        <a href="#top" className="group inline-flex items-center gap-2 text-sm font-medium">
          Back to top
          <FiArrowUp className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-1" />
        </a>
      </div>
    </footer>
  );
}
