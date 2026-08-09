"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import Link from "next/link";
import { epics } from "@/lib/data/epics";
import { characters } from "@/lib/data/characters";

interface SearchResult {
  type: "epic" | "character" | "page";
  title: string;
  subtitle: string;
  href: string;
  color?: string;
}

const pages = [
  { title: "Epics Catalog", subtitle: "All world epics", href: "/epics" },
  { title: "Family Trees", subtitle: "Interactive genealogy", href: "/family-tree" },
  { title: "Characters", subtitle: "Cross-epic profiles", href: "/characters" },
  { title: "Timeline", subtitle: "5000 years of narrative", href: "/timeline" },
  { title: "Compare", subtitle: "Universal epic themes", href: "/compare" },
  { title: "Pathways", subtitle: "Thematic journeys", href: "/pathways" },
];

export default function SearchPalette() {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  const results: SearchResult[] = [];

  if (query.length > 0) {
    const q = query.toLowerCase();

    epics.forEach((e) => {
      if (
        e.title.toLowerCase().includes(q) ||
        e.tradition.toLowerCase().includes(q) ||
        e.themes.some((t) => t.toLowerCase().includes(q))
      ) {
        results.push({
          type: "epic",
          title: e.title,
          subtitle: `${e.tradition} · ${e.era}`,
          href: `/epics/${e.slug}`,
          color: e.color,
        });
      }
    });

    characters.forEach((c) => {
      if (
        c.name.toLowerCase().includes(q) ||
        c.title.toLowerCase().includes(q) ||
        c.traits.some((t) => t.toLowerCase().includes(q))
      ) {
        results.push({
          type: "character",
          title: c.name,
          subtitle: c.title,
          href: `/characters#${c.id}`,
          color: epics.find((e) => e.slug === c.epic)?.color,
        });
      }
    });

    pages.forEach((p) => {
      if (
        p.title.toLowerCase().includes(q) ||
        p.subtitle.toLowerCase().includes(q)
      ) {
        results.push({
          type: "page",
          title: p.title,
          subtitle: p.subtitle,
          href: p.href,
        });
      }
    });
  }

  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        setOpen((prev) => !prev);
      }
      if (e.key === "Escape") {
        setOpen(false);
      }
    },
    []
  );

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [handleKeyDown]);

  useEffect(() => {
    if (open) {
      setTimeout(() => inputRef.current?.focus(), 50);
    } else {
      setQuery("");
    }
  }, [open]);

  if (!open) {
    return (
      <button
        onClick={() => setOpen(true)}
        className="hidden md:flex items-center gap-2 px-3 py-1.5 rounded-lg border border-[var(--border)] text-[var(--text-muted)] text-sm hover:border-[var(--border-hover)] hover:text-[var(--text-secondary)] transition-colors"
      >
        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
        Search
        <kbd className="text-[10px] px-1.5 py-0.5 rounded border border-[var(--border)] bg-[var(--bg-card)]">
          ⌘K
        </kbd>
      </button>
    );
  }

  return (
    <>
      <div
        className="fixed inset-0 z-[100] bg-black/60 backdrop-blur-sm"
        onClick={() => setOpen(false)}
      />
      <div className="fixed top-[15%] left-1/2 -translate-x-1/2 z-[101] w-full max-w-lg">
        <div className="bg-[var(--bg-primary)] border border-[var(--border)] rounded-xl shadow-2xl overflow-hidden">
          <div className="flex items-center gap-3 px-4 border-b border-[var(--border)]">
            <svg className="w-5 h-5 text-[var(--text-muted)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            <input
              ref={inputRef}
              type="text"
              placeholder="Search epics, characters, pages..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="flex-1 py-4 bg-transparent text-[var(--text-primary)] placeholder:text-[var(--text-muted)] focus:outline-none text-sm"
            />
            <kbd className="text-[10px] px-1.5 py-0.5 rounded border border-[var(--border)] text-[var(--text-muted)]">
              ESC
            </kbd>
          </div>

          {results.length > 0 && (
            <div className="max-h-80 overflow-y-auto p-2">
              {results.slice(0, 10).map((result, i) => (
                <Link
                  key={i}
                  href={result.href}
                  onClick={() => setOpen(false)}
                  className="flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-[var(--bg-hover)] transition-colors"
                >
                  {result.color && (
                    <div
                      className="w-2 h-2 rounded-full flex-shrink-0"
                      style={{ backgroundColor: result.color }}
                    />
                  )}
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium truncate">
                      {result.title}
                    </p>
                    <p className="text-xs text-[var(--text-muted)] truncate">
                      {result.subtitle}
                    </p>
                  </div>
                  <span className="text-[10px] px-1.5 py-0.5 rounded bg-[var(--bg-card)] text-[var(--text-muted)] border border-[var(--border)] capitalize">
                    {result.type}
                  </span>
                </Link>
              ))}
            </div>
          )}

          {query.length > 0 && results.length === 0 && (
            <div className="p-8 text-center text-sm text-[var(--text-muted)]">
              No results found.
            </div>
          )}

          {query.length === 0 && (
            <div className="p-4 text-center text-sm text-[var(--text-muted)]">
              Start typing to search across epics, characters, and pages.
            </div>
          )}
        </div>
      </div>
    </>
  );
}
