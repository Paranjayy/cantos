"use client";

import { useState } from "react";
import { connections, type Connection } from "@/lib/data/connections";
import { epics } from "@/lib/data/epics";

const typeColors: Record<string, string> = {
  parallel: "#3B82F6",
  counterpart: "#A855F7",
  inspiration: "#F59E0B",
  archetype: "#10B981",
};

const typeLabels: Record<string, string> = {
  parallel: "Parallel",
  counterpart: "Counterpart",
  inspiration: "Inspiration",
  archetype: "Archetype",
};

export default function ConnectionsPage() {
  const [filterType, setFilterType] = useState<string>("all");
  const [filterEpic, setFilterEpic] = useState<string>("all");

  const filtered = connections.filter((c) => {
    if (filterType !== "all" && c.type !== filterType) return false;
    if (filterEpic !== "all" && c.from.epic !== filterEpic && c.to.epic !== filterEpic) return false;
    return true;
  });

  return (
    <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-16">
      <div className="mb-10">
        <h1 className="text-4xl font-bold tracking-tight mb-4 font-display">
          Connections
        </h1>
        <p className="text-[var(--text-secondary)] text-lg max-w-2xl">
          How characters, archetypes, and stories echo across traditions.
          The same human patterns recur because they are our patterns.
        </p>
      </div>

      {/* Filters */}
      <div className="flex flex-col sm:flex-row gap-4 mb-8">
        <div className="flex flex-wrap gap-2">
          {Object.entries(typeLabels).map(([key, label]) => (
            <button
              key={key}
              onClick={() => setFilterType(filterType === key ? "all" : key)}
              className={`px-3 py-1.5 rounded-lg text-sm transition-all border ${
                filterType === key
                  ? "text-white"
                  : "border-[var(--border)] text-[var(--text-secondary)] hover:border-[var(--border-hover)]"
              }`}
              style={{
                backgroundColor: filterType === key ? typeColors[key] : undefined,
                borderColor: filterType === key ? typeColors[key] : undefined,
              }}
            >
              {label}
            </button>
          ))}
        </div>
        <select
          value={filterEpic}
          onChange={(e) => setFilterEpic(e.target.value)}
          className="px-3 py-1.5 rounded-lg text-sm border border-[var(--border)] bg-[var(--bg-card)] text-[var(--text-secondary)]"
        >
          <option value="all">All Epics</option>
          {epics.map((e) => (
            <option key={e.slug} value={e.slug}>{e.title}</option>
          ))}
        </select>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-10">
        {Object.entries(typeLabels).map(([key, label]) => {
          const count = connections.filter((c) => c.type === key).length;
          return (
            <div
              key={key}
              className="p-4 rounded-xl border border-[var(--border)] bg-[var(--bg-card)] text-center"
            >
              <div className="text-2xl font-bold font-display" style={{ color: typeColors[key] }}>
                {count}
              </div>
              <div className="text-xs text-[var(--text-muted)]">{label} Connections</div>
            </div>
          );
        })}
      </div>

      {/* Connections List */}
      <div className="space-y-4">
        {filtered.map((conn, i) => (
          <div
            key={conn.id}
            className="p-6 rounded-xl border border-[var(--border)] bg-[var(--bg-card)] hover:border-[var(--border-hover)] transition-all animate-fade-in-up"
            style={{ animationDelay: `${i * 0.04}s`, opacity: 0 }}
          >
            <div className="flex items-start gap-4">
              <div
                className="w-1 h-full min-h-[80px] rounded-full flex-shrink-0"
                style={{ backgroundColor: typeColors[conn.type] }}
              />
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-2">
                  <span
                    className="text-[10px] px-2 py-0.5 rounded-full text-white"
                    style={{ backgroundColor: typeColors[conn.type] }}
                  >
                    {typeLabels[conn.type]}
                  </span>
                  <span className="text-sm font-semibold font-display">
                    {conn.label}
                  </span>
                </div>

                <div className="flex items-center gap-3 mb-3 text-sm">
                  <CharacterBadge character={conn.from} />
                  <svg className="w-4 h-4 text-[var(--text-muted)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                  <CharacterBadge character={conn.to} />
                </div>

                <p className="text-sm text-[var(--text-secondary)]">
                  {conn.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {filtered.length === 0 && (
        <div className="text-center py-20 text-[var(--text-muted)]">
          No connections match your filters.
        </div>
      )}
    </div>
  );
}

function CharacterBadge({ character }: { character: Connection["from"] }) {
  const epic = epics.find((e) => e.slug === character.epic);
  return (
    <div className="flex items-center gap-2">
      <div
        className="w-2 h-2 rounded-full"
        style={{ backgroundColor: epic?.color || "#666" }}
      />
      <span className="font-medium">{character.name}</span>
      <span className="text-xs text-[var(--text-muted)]">({epic?.title})</span>
    </div>
  );
}
