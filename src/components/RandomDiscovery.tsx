"use client";

import { useState } from "react";
import Link from "next/link";
import { epics } from "@/lib/data/epics";
import { characters } from "@/lib/data/characters";
import { quotes } from "@/lib/data/quotes";
import { glossaryTerms } from "@/lib/data/glossary";

interface Discovery {
  type: "epic" | "character" | "quote" | "glossary";
  title: string;
  subtitle: string;
  href: string;
  color?: string;
}

function getRandomDiscovery(): Discovery {
  const roll = Math.random();

  if (roll < 0.3) {
    const epic = epics[Math.floor(Math.random() * epics.length)];
    return {
      type: "epic",
      title: epic.title,
      subtitle: `${epic.tradition} · ${epic.era}`,
      href: `/epics/${epic.slug}`,
      color: epic.color,
    };
  } else if (roll < 0.6) {
    const char = characters[Math.floor(Math.random() * characters.length)];
    const epic = epics.find((e) => e.slug === char.epic);
    return {
      type: "character",
      title: char.name,
      subtitle: char.title,
      href: `/characters#${char.id}`,
      color: epic?.color,
    };
  } else if (roll < 0.85) {
    const quote = quotes[Math.floor(Math.random() * quotes.length)];
    const epic = epics.find((e) => e.slug === quote.epic);
    return {
      type: "quote",
      title: `"${quote.text.slice(0, 80)}${quote.text.length > 80 ? "..." : ""}"`,
      subtitle: quote.source,
      href: "/quotes",
      color: epic?.color,
    };
  } else {
    const term = glossaryTerms[Math.floor(Math.random() * glossaryTerms.length)];
    return {
      type: "glossary",
      title: term.term,
      subtitle: `${term.origin} — ${term.definition.slice(0, 80)}...`,
      href: "/glossary",
    };
  }
}

const typeLabels: Record<string, string> = {
  epic: "Epic",
  character: "Character",
  quote: "Quote",
  glossary: "Term",
};

export default function RandomDiscovery() {
  const [discovery, setDiscovery] = useState<Discovery>(getRandomDiscovery);

  return (
    <section className="border-t border-[var(--border)] py-16">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-6">
          <p className="text-xs tracking-[0.2em] uppercase text-[var(--text-muted)] mb-2">
            Discover Something
          </p>
          <h2 className="text-2xl font-bold font-display">
            Random Discovery
          </h2>
        </div>

        <div className="p-6 rounded-xl border border-[var(--border)] bg-[var(--bg-card)] text-center">
          <span className="text-[10px] px-2 py-0.5 rounded-full bg-[var(--bg-hover)] text-[var(--text-muted)] border border-[var(--border)] mb-3 inline-block">
            {typeLabels[discovery.type]}
          </span>

          <h3 className="text-lg font-semibold font-display mb-1">
            {discovery.type === "quote" ? (
              <span className="italic">{discovery.title}</span>
            ) : (
              discovery.title
            )}
          </h3>
          <p className="text-sm text-[var(--text-muted)] mb-4">
            {discovery.subtitle}
          </p>

          <div className="flex justify-center gap-3">
            <Link
              href={discovery.href}
              className="px-4 py-2 text-sm font-medium rounded-lg bg-[var(--accent-gold)] text-[var(--bg-primary)] hover:bg-[var(--accent-gold-light)] transition-colors"
            >
              Explore
            </Link>
            <button
              onClick={() => setDiscovery(getRandomDiscovery())}
              className="px-4 py-2 text-sm font-medium rounded-lg border border-[var(--border)] text-[var(--text-secondary)] hover:border-[var(--border-hover)] transition-colors"
            >
              Another
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
