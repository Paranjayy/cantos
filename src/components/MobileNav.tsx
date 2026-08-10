"use client";

import { useState } from "react";
import Link from "next/link";

const navLinks = [
  { href: "/epics", label: "Epics" },
  { href: "/family-tree", label: "Family Trees" },
  { href: "/characters", label: "Characters" },
  { href: "/connections", label: "Connections" },
  { href: "/timeline", label: "Timeline" },
  { href: "/compare", label: "Compare" },
  { href: "/quotes", label: "Quotes" },
  { href: "/quiz", label: "Quiz" },
  { href: "/pathways", label: "Pathways" },
  { href: "/glossary", label: "Glossary" },
  { href: "/stats", label: "Stats" },
];

export default function MobileNav() {
  const [open, setOpen] = useState(false);

  return (
    <div className="md:hidden flex items-center">
      <button
        onClick={() => setOpen(!open)}
        className="text-[var(--text-secondary)] hover:text-[var(--text-primary)] p-2"
        aria-label="Toggle navigation"
      >
        {open ? (
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
          </svg>
        ) : (
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.75 9h16.5m-16.5 6.75h16.5" />
          </svg>
        )}
      </button>

      {open && (
        <>
          <div
            className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm"
            onClick={() => setOpen(false)}
          />
          <div className="fixed top-16 right-0 z-50 w-64 bg-[var(--bg-primary)] border-l border-[var(--border)] shadow-2xl p-4 animate-fade-in-up">
            <nav className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="px-4 py-3 text-sm text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-hover)] rounded-lg transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>
        </>
      )}
    </div>
  );
}
