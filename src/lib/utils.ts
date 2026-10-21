import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
/** Page-width wrapper shared by every section. */
export const container = "mx-auto w-full max-w-[1200px] px-5 sm:px-8";
