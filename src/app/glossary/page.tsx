"use client";

import { useState } from "react";
import { glossaryTerms } from "@/lib/data/glossary";
import { epics } from "@/lib/data/epics";

export default function GlossaryPage() {
  const [search, setSearch] = useState("");
  const [selectedOrigin, setSelectedOrigin] = useState("all");

  const origins = [...new Set(glossaryTerms.map((t) => t.origin))].sort();

  const filtered = glossaryTerms.filter((t) => {
    if (selectedOrigin !== "all" && t.origin !== selectedOrigin) return false;
    if (search) {
      const q = search.toLowerCase();
      return (
        t.term.toLowerCase().includes(q) ||
        t.definition.toLowerCase().includes(q) ||
        t.origin.toLowerCase().includes(q)
      );
    }
    return true;
  });

  const grouped = origins
    .filter((o) => selectedOrigin === "all" || o === selectedOrigin)
    .map((origin) => ({
      origin,
      terms: filtered.filter((t) => t.origin === origin),
    }))
    .filter((g) => g.terms.length > 0);

  return (
    <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-16">
      <div className="mb-10">
        <h1 className="text-4xl font-bold tracking-tight mb-4 font-display">
          Glossary
        </h1>
        <p className="text-[var(--text-secondary)] text-lg max-w-2xl">
          Key terms from epic literature — Sanskrit, Greek, Latin, Old
          English, and modern critical vocabulary.
        </p>
      </div>

      {/* Search & Filter */}
      <div className="flex flex-col sm:flex-row gap-4 mb-8">
        <input
          type="text"
          placeholder="Search terms, definitions..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="flex-1 px-4 py-2.5 rounded-lg border border-[var(--border)] bg-[var(--bg-card)] text-[var(--text-primary)] placeholder:text-[var(--text-muted)] focus:outline-none focus:border-[var(--accent-gold)] transition-colors text-sm"
        />
        <div className="flex flex-wrap gap-2">
          <button
            onClick={() => setSelectedOrigin("all")}
            className={`px-3 py-1.5 rounded-lg text-sm transition-all ${
              selectedOrigin === "all"
                ? "bg-[var(--accent-gold)] text-[var(--bg-primary)]"
                : "border border-[var(--border)] text-[var(--text-secondary)] hover:border-[var(--border-hover)]"
            }`}
          >
            All
          </button>
          {origins.map((o) => (
            <button
              key={o}
              onClick={() => setSelectedOrigin(o)}
              className={`px-3 py-1.5 rounded-lg text-sm transition-all ${
                selectedOrigin === o
                  ? "bg-[var(--accent-gold)] text-[var(--bg-primary)]"
                  : "border border-[var(--border)] text-[var(--text-secondary)] hover:border-[var(--border-hover)]"
              }`}
            >
              {o}
            </button>
          ))}
        </div>
      </div>

      {/* Terms by Origin */}
      <div className="space-y-8">
        {grouped.map((group) => (
          <div key={group.origin}>
            <h2 className="text-lg font-semibold font-display mb-4 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[var(--accent-gold)]" />
              {group.origin}
              <span className="text-sm text-[var(--text-muted)] font-normal">
                ({group.terms.length} terms)
              </span>
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {group.terms.map((term) => (
                <div
                  key={term.id}
                  className="p-4 rounded-xl border border-[var(--border)] bg-[var(--bg-card)] hover:border-[var(--border-hover)] transition-all"
                >
                  <div className="flex items-baseline gap-2 mb-1">
                    <h3 className="font-semibold font-display">{term.term}</h3>
                    {term.pronunciation && (
                      <span className="text-xs text-[var(--text-muted)] italic">
                        {term.pronunciation}
                      </span>
                    )}
                  </div>
                  <p className="text-sm text-[var(--text-secondary)] mb-2 leading-relaxed">
                    {term.definition}
                  </p>
                  <div className="flex flex-wrap gap-1">
                    {term.epics.map((epicSlug) => {
                      const epic = epics.find((e) => e.slug === epicSlug);
                      return (
                        <span
                          key={epicSlug}
                          className="text-[10px] px-2 py-0.5 rounded-full border"
                          style={{
                            borderColor: epic?.color || "#666",
                            color: epic?.color || "#666",
                          }}
                        >
                          {epic?.title}
                        </span>
                      );
                    })}
                  </div>
                  {term.relatedTerms && term.relatedTerms.length > 0 && (
                    <div className="mt-2 flex flex-wrap gap-1">
                      <span className="text-[10px] text-[var(--text-muted)]">Related:</span>
                      {term.relatedTerms.map((rt) => (
                        <span
                          key={rt}
                          className="text-[10px] px-1.5 py-0.5 rounded bg-[var(--bg-hover)] text-[var(--text-muted)]"
                        >
                          {rt}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
