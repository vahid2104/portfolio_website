import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";

import { Providers } from "@/components/theme/Providers";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Runs before first paint so the page never flashes the wrong theme.
// Order: saved choice → system preference → dark.
const themeScript = `(function(){try{var t=localStorage.getItem("theme");if(t!=="light"&&t!=="dark"){t=window.matchMedia("(prefers-color-scheme: light)").matches?"light":"dark"}document.documentElement.dataset.theme=t}catch(e){document.documentElement.dataset.theme="dark"}})();`;

export const metadata: Metadata = {
  metadataBase: new URL("https://vahidaliyev.com"),

  title: {
    default: "Vahid Aliyev | Software Engineer — Frontend & Full-Stack",
    template: "%s | Vahid Aliyev",
  },

  description:
    "Portfolio of Vahid Aliyev, a software engineer in Warsaw building AI-powered web products end to end with React, Next.js, TypeScript and Node.js.",

  keywords: [
    "Vahid Aliyev",
    "Software Engineer",
    "Frontend Developer",
    "Full-Stack Developer",
    "React Developer",
    "Next.js Developer",
    "TypeScript Developer",
    "Node.js Developer",
    "AI Web Applications",
    "Let's Speak Law",
    "Warsaw Developer",
  ],

  authors: [{ name: "Vahid Aliyev" }],
  creator: "Vahid Aliyev",

  alternates: {
    canonical: "/",
  },

  openGraph: {
    title: "Vahid Aliyev | Software Engineer — Frontend & Full-Stack",
    description:
      "Software engineer building AI-powered web products end to end with React, Next.js and Node.js.",
    url: "/",
    siteName: "Vahid Aliyev Portfolio",
    images: [
      {
        url: "/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "Vahid Aliyev — Software Engineer portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Vahid Aliyev | Software Engineer — Frontend & Full-Stack",
    description:
      "Software engineer building AI-powered web products end to end with React, Next.js and Node.js.",
    images: ["/images/og-image.png"],
  },

  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.png",
    apple: "/favicon.png",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f7f4ec" },
    { media: "(prefers-color-scheme: dark)", color: "#0a0b16" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <head>
        {/* Declaring both schemes stops browser "auto dark mode" from re-colouring the light theme */}
        <meta name="color-scheme" content="light dark" />
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body suppressHydrationWarning className="grain min-h-full bg-bg text-fg">
        <Providers>{children}</Providers>
        <Analytics />
      </body>
    </html>
  );
}
