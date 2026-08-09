"use client";

import { useState } from "react";
import { timelineEvents } from "@/lib/data/timeline";
import { epics } from "@/lib/data/epics";

export default function TimelinePage() {
  const [filter, setFilter] = useState<string>("all");

  const filtered = timelineEvents
    .filter((e) => filter === "all" || e.epic === filter)
    .sort((a, b) => a.sortYear - b.sortYear);

  return (
    <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-16">
      <div className="mb-8">
        <h1 className="text-4xl font-bold tracking-tight mb-4 font-display">
          Narrative Timeline
        </h1>
        <p className="text-[var(--text-secondary)] text-lg max-w-2xl">
          Five thousand years of storytelling, from Mesopotamia to medieval
          Italy — one scrolling journey.
        </p>
      </div>

      {/* Filter */}
      <div className="flex flex-wrap gap-2 mb-8">
        <button
          onClick={() => setFilter("all")}
          className={`px-3 py-1.5 rounded-lg text-sm transition-all ${
            filter === "all"
              ? "bg-[var(--accent-gold)] text-[var(--bg-primary)]"
              : "border border-[var(--border)] text-[var(--text-secondary)] hover:border-[var(--border-hover)]"
          }`}
        >
          All Epics
        </button>
        {epics.map((epic) => (
          <button
            key={epic.slug}
            onClick={() => setFilter(epic.slug)}
            className={`px-3 py-1.5 rounded-lg text-sm transition-all ${
              filter === epic.slug
                ? "bg-[var(--accent-gold)] text-[var(--bg-primary)]"
                : "border border-[var(--border)] text-[var(--text-secondary)] hover:border-[var(--border-hover)]"
            }`}
          >
            {epic.title}
          </button>
        ))}
      </div>

      {/* Timeline */}
      <div className="relative">
        <div className="absolute left-6 top-0 bottom-0 w-px bg-[var(--border)]" />

        <div className="space-y-6">
          {filtered.map((event) => {
            const epic = epics.find((e) => e.slug === event.epic);
            return (
              <div key={event.id} className="relative pl-16">
                <div
                  className="absolute left-4 top-4 w-5 h-5 rounded-full border-2 z-10"
                  style={{
                    borderColor: epic?.color || "#666",
                    backgroundColor: `${epic?.color || "#666"}30`,
                  }}
                />
                <div className="p-5 rounded-xl border border-[var(--border)] bg-[var(--bg-card)] hover:border-[var(--border-hover)] transition-all">
                  <div className="flex items-center gap-2 mb-2">
                    <span
                      className="text-[10px] px-2 py-0.5 rounded-full border"
                      style={{
                        borderColor: epic?.color || "#666",
                        color: epic?.color || "#666",
                      }}
                    >
                      {epic?.title}
                    </span>
                    <span className="text-xs text-[var(--text-muted)]">
                      {event.era}
                    </span>
                  </div>
                  <h3 className="text-lg font-semibold font-display mb-1">
                    {event.title}
                  </h3>
                  <p className="text-sm text-[var(--text-secondary)]">
                    {event.description}
                  </p>
                  {event.characters.length > 0 && (
                    <div className="flex flex-wrap gap-1.5 mt-3">
                      {event.characters.map((charId) => (
                        <span
                          key={charId}
                          className="text-[10px] px-2 py-0.5 rounded-full bg-[var(--bg-hover)] text-[var(--text-muted)] border border-[var(--border)] capitalize"
                        >
                          {charId.replace(/-/g, " ")}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {filtered.length === 0 && (
        <div className="text-center py-20 text-[var(--text-muted)]">
          No events found.
        </div>
      )}
    </div>
  );
}
