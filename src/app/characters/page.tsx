"use client";

import { useState } from "react";
import { characters, type Character } from "@/lib/data/characters";
import { epics } from "@/lib/data/epics";

export default function CharactersPage() {
  const [filter, setFilter] = useState<string>("all");
  const [search, setSearch] = useState("");

  const filtered = characters.filter((c) => {
    if (filter !== "all" && c.epic !== filter) return false;
    if (search) {
      const q = search.toLowerCase();
      return (
        c.name.toLowerCase().includes(q) ||
        c.title.toLowerCase().includes(q) ||
        c.description.toLowerCase().includes(q) ||
        c.traits.some((t) => t.toLowerCase().includes(q))
      );
    }
    return true;
  });

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
      <div className="mb-8">
        <h1 className="text-4xl font-bold tracking-tight mb-4 font-display">
          Characters
        </h1>
        <p className="text-[var(--text-secondary)] text-lg max-w-2xl">
          The mortals, immortals, and everything between who populate these
          epics.
        </p>
      </div>

      {/* Filters */}
      <div className="flex flex-col sm:flex-row gap-4 mb-8">
        <div className="flex-1">
          <input
            type="text"
            placeholder="Search characters, traits, roles..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full px-4 py-2.5 rounded-lg border border-[var(--border)] bg-[var(--bg-card)] text-[var(--text-primary)] placeholder:text-[var(--text-muted)] focus:outline-none focus:border-[var(--accent-gold)] transition-colors text-sm"
          />
        </div>
        <div className="flex flex-wrap gap-2">
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
      </div>

      {/* Character Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {filtered.map((char) => (
          <div
            key={char.id}
            id={char.id}
            className="p-6 rounded-xl border border-[var(--border)] bg-[var(--bg-card)] hover:border-[var(--border-hover)] transition-all"
          >
            <div className="flex items-start justify-between mb-3">
              <div>
                <h2 className="text-xl font-semibold font-display">
                  {char.name}
                </h2>
                <p className="text-xs text-[var(--text-muted)]">
                  {char.title} · {char.role}
                </p>
              </div>
              <span
                className="text-[10px] px-2 py-0.5 rounded-full border"
                style={{
                  borderColor: getEpicColor(char.epic),
                  color: getEpicColor(char.epic),
                }}
              >
                {epics.find((e) => e.slug === char.epic)?.title}
              </span>
            </div>

            <p className="text-sm text-[var(--text-secondary)] mb-4 leading-relaxed">
              {char.description}
            </p>

            <div className="mb-3">
              <p className="text-xs font-medium text-[var(--text-muted)] mb-1">
                Traits
              </p>
              <div className="flex flex-wrap gap-1">
                {char.traits.map((trait) => (
                  <span
                    key={trait}
                    className="text-[10px] px-2 py-0.5 rounded-full bg-[var(--bg-hover)] text-[var(--text-muted)] border border-[var(--border)]"
                  >
                    {trait}
                  </span>
                ))}
              </div>
            </div>

            <div className="mb-3">
              <p className="text-xs font-medium text-[var(--text-muted)] mb-1">
                Key Events
              </p>
              <ul className="text-sm text-[var(--text-secondary)] space-y-1">
                {char.keyEvents.slice(0, 3).map((event) => (
                  <li key={event} className="flex items-start gap-2">
                    <span className="text-[var(--accent-gold)] mt-1.5 text-[6px]">●</span>
                    {event}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <p className="text-xs font-medium text-[var(--text-muted)] mb-1">
                Relationships
              </p>
              <div className="flex flex-wrap gap-1.5">
                {char.relationships.map((rel) => (
                  <span
                    key={rel.name}
                    className="text-[10px] px-2 py-0.5 rounded-full bg-[var(--bg-hover)] text-[var(--text-muted)] border border-[var(--border)]"
                    title={rel.type}
                  >
                    {rel.name} — {rel.type}
                  </span>
                ))}
              </div>
            </div>

            <div className="mt-3 pt-3 border-t border-[var(--border)]">
              <span className="text-xs text-[var(--text-muted)] italic">
                Archetype: {char.archetype}
              </span>
            </div>
          </div>
        ))}
      </div>

      {filtered.length === 0 && (
        <div className="text-center py-20 text-[var(--text-muted)]">
          No characters found matching your search.
        </div>
      )}
    </div>
  );
}

function getEpicColor(epicSlug: string): string {
  return epics.find((e) => e.slug === epicSlug)?.color || "#666";
}
