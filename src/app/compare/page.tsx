"use client";

import { useState } from "react";
import { comparisons } from "@/lib/data/comparisons";
import { epics } from "@/lib/data/epics";

export default function ComparePage() {
  const [expandedTheme, setExpandedTheme] = useState<string | null>(
    comparisons[0]?.id || null
  );

  return (
    <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-16">
      <div className="mb-8">
        <h1 className="text-4xl font-bold tracking-tight mb-4 font-display">
          Comparative Lens
        </h1>
        <p className="text-[var(--text-secondary)] text-lg max-w-2xl">
          The same human questions echo across every tradition. See how
          different epics answer them.
        </p>
      </div>

      <div className="space-y-4">
        {comparisons.map((theme, i) => (
          <div
            key={theme.id}
            className="rounded-xl border border-[var(--border)] bg-[var(--bg-card)] overflow-hidden animate-fade-in-up"
            style={{ animationDelay: `${i * 0.06}s`, opacity: 0 }}
          >
            <button
              onClick={() =>
                setExpandedTheme(
                  expandedTheme === theme.id ? null : theme.id
                )
              }
              className="w-full flex items-center justify-between p-6 text-left"
            >
              <div>
                <h2 className="text-xl font-semibold font-display">
                  {theme.title}
                </h2>
                <p className="text-sm text-[var(--text-secondary)] mt-1">
                  {theme.description}
                </p>
              </div>
              <svg
                className={`w-5 h-5 text-[var(--text-muted)] transition-transform flex-shrink-0 ml-4 ${
                  expandedTheme === theme.id ? "rotate-180" : ""
                }`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>

            {expandedTheme === theme.id && (
              <div className="px-6 pb-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
                {theme.epics.map((epicEntry) => {
                  const epic = epics.find(
                    (e) => e.slug === epicEntry.slug
                  );
                  return (
                    <div
                      key={epicEntry.slug}
                      className="p-4 rounded-lg border border-[var(--border)] bg-[var(--bg-primary)]"
                    >
                      <div className="flex items-center gap-2 mb-2">
                        <div
                          className="w-2 h-2 rounded-full"
                          style={{ backgroundColor: epic?.color || "#666" }}
                        />
                        <span className="text-sm font-medium font-display">
                          {epic?.title}
                        </span>
                      </div>
                      <p className="text-xs text-[var(--accent-gold)] mb-2 font-medium">
                        {epicEntry.expression}
                      </p>
                      <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                        {epicEntry.example}
                      </p>
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Cross-cutting insight */}
      <div className="mt-12 p-8 rounded-xl border border-[var(--border)] bg-gradient-to-br from-[var(--bg-card)] to-[var(--bg-primary)] text-center">
        <h2 className="text-2xl font-bold font-display mb-4">
          The Universal Patterns
        </h2>
        <p className="text-[var(--text-secondary)] max-w-2xl mx-auto leading-relaxed">
          Whether it&apos;s Arjuna on the battlefield or Odysseus at sea,
          Gilgamesh mourning Enkidu or Rama mourning Sita — every epic
          grapples with the same fundamental questions: What is duty? How
          do we face death? What makes a life meaningful? The answers
          differ, but the questions are ours.
        </p>
      </div>
    </div>
  );
}
