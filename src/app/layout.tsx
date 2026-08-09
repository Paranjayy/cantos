import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import MobileNav from "@/components/MobileNav";
import SearchPalette from "@/components/SearchPalette";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Cantos — World Epic Explorer",
  description:
    "Explore the world's great epics — Mahabharata, Ramayana, Iliad, Odyssey, and more. Interactive family trees, character explorers, timelines, and comparative analysis.",
};

const navLinks = [
  { href: "/epics", label: "Epics" },
  { href: "/family-tree", label: "Family Trees" },
  { href: "/characters", label: "Characters" },
  { href: "/timeline", label: "Timeline" },
  { href: "/compare", label: "Compare" },
  { href: "/pathways", label: "Pathways" },
];

export default function RootLayout({
  children,
}: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <header className="sticky top-0 z-50 border-b border-[var(--border)] bg-[var(--bg-primary)]/80 backdrop-blur-xl">
          <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex h-16 items-center justify-between">
              <Link href="/" className="flex items-center gap-2">
                <span className="text-xl font-semibold tracking-tight gradient-text font-display">
                  Cantos
                </span>
              </Link>
              <div className="hidden md:flex items-center gap-1">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="px-3 py-2 text-sm text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors rounded-md hover:bg-[var(--bg-hover)]"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
              <div className="flex items-center gap-2">
                <SearchPalette />
                <MobileNav />
              </div>
            </div>
          </nav>
        </header>
        <main className="flex-1">{children}</main>
        <footer className="border-t border-[var(--border)] py-12 px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl text-center">
            <p className="text-sm text-[var(--text-muted)]">
              Cantos — Every epic is a canto in the larger human story.
            </p>
          </div>
        </footer>
      </body>
    </html>
  );
}
