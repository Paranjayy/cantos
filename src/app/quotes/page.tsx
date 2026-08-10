"use client";

import { useState } from "react";
import { quotes } from "@/lib/data/quotes";
import { epics } from "@/lib/data/epics";

export default function QuotesPage() {
  const [filter, setFilter] = useState("all");

  const filtered = quotes.filter(
    (q) => filter === "all" || q.epic === filter
  );

  return (
    <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-16">
      <div className="mb-10">
        <h1 className="text-4xl font-bold tracking-tight mb-4 font-display">
          Voices of the Epics
        </h1>
        <p className="text-[var(--text-secondary)] text-lg max-w-2xl">
          The words that have echoed across millennia — from battlefield to
          throne room, from dark wood to divine light.
        </p>
      </div>

      {/* Filter */}
      <div className="flex flex-wrap gap-2 mb-10">
        <button
          onClick={() => setFilter("all")}
          className={`px-3 py-1.5 rounded-lg text-sm transition-all ${
            filter === "all"
              ? "bg-[var(--accent-gold)] text-[var(--bg-primary)]"
              : "border border-[var(--border)] text-[var(--text-secondary)] hover:border-[var(--border-hover)]"
          }`}
        >
          All
        </button>
        {epics.map((e) => (
          <button
            key={e.slug}
            onClick={() => setFilter(e.slug)}
            className={`px-3 py-1.5 rounded-lg text-sm transition-all ${
              filter === e.slug
                ? "bg-[var(--accent-gold)] text-[var(--bg-primary)]"
                : "border border-[var(--border)] text-[var(--text-secondary)] hover:border-[var(--border-hover)]"
            }`}
          >
            {e.title}
          </button>
        ))}
      </div>

      {/* Quotes Grid */}
      <div className="columns-1 sm:columns-2 gap-4 space-y-4">
        {filtered.map((quote, i) => {
          const epic = epics.find((e) => e.slug === quote.epic);
          return (
            <div
              key={quote.id}
              className="break-inside-avoid p-6 rounded-xl border border-[var(--border)] bg-[var(--bg-card)] hover:border-[var(--border-hover)] transition-all animate-fade-in-up"
              style={{ animationDelay: `${i * 0.03}s`, opacity: 0 }}
            >
              <blockquote className="text-base text-[var(--text-primary)] leading-relaxed mb-4 italic font-display">
                &ldquo;{quote.text}&rdquo;
              </blockquote>
              <div className="flex items-center justify-between">
                <div className="text-sm text-[var(--text-muted)]">
                  {quote.author && (
                    <span className="font-medium">{quote.author} — </span>
                  )}
                  <span>{quote.source}</span>
                </div>
                <div
                  className="w-2 h-2 rounded-full flex-shrink-0"
                  style={{ backgroundColor: epic?.color || "#666" }}
                />
              </div>
              {quote.context && (
                <p className="text-xs text-[var(--text-muted)] mt-2 italic">
                  {quote.context}
                </p>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
