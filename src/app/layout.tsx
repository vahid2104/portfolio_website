import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://vahidaliyev.com"),

  title: {
    default: "Vahid Aliyev | Frontend & Full-Stack Developer",
    template: "%s | Vahid Aliyev",
  },

  description:
    "Portfolio of Vahid Aliyev, a Frontend and Full-Stack Developer specializing in React, Next.js, TypeScript, Node.js and AI-powered web applications.",

  keywords: [
    "Vahid Aliyev",
    "Frontend Developer",
    "Full-Stack Developer",
    "React Developer",
    "Next.js Developer",
    "TypeScript Developer",
    "Node.js Developer",
    "Software Engineer",
    "AI Web Applications",
    "Warsaw Developer",
  ],

  authors: [
    {
      name: "Vahid Aliyev",
    },
  ],

  creator: "Vahid Aliyev",

  alternates: {
    canonical: "/",
  },

  openGraph: {
    title: "Vahid Aliyev | Frontend & Full-Stack Developer",

    description:
      "Frontend and Full-Stack Developer building modern web applications with React, Next.js and AI integrations.",

    url: "/",

    siteName: "Vahid Aliyev Portfolio",

    images: [
      {
        url: "/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "Vahid Aliyev Frontend and Full-Stack Developer Portfolio",
      },
    ],

    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",

    title: "Vahid Aliyev | Frontend & Full-Stack Developer",

    description:
      "Frontend and Full-Stack Developer building modern web applications with React, Next.js and AI integrations.",

    images: ["/images/og-image.png"],
  },

  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.png",
    apple: "/favicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="bg-[#050816] text-white antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  );
}
