"use client";

import { useState, useMemo } from "react";
import { epics } from "@/lib/data/epics";
import { deepDives } from "@/lib/data/deep-dives";
import { characters } from "@/lib/data/characters";
import { connections } from "@/lib/data/connections";
import { quotes } from "@/lib/data/quotes";

export default function CompareTwoEpics() {
  const [epic1, setEpic1] = useState("mahabharata");
  const [epic2, setEpic2] = useState("iliad");

  const e1 = epics.find((e) => e.slug === epic1)!;
  const e2 = epics.find((e) => e.slug === epic2)!;
  const d1 = deepDives.find((d) => d.slug === epic1);
  const d2 = deepDives.find((d) => d.slug === epic2);

  const chars1 = useMemo(() => characters.filter((c) => c.epic === epic1), [epic1]);
  const chars2 = useMemo(() => characters.filter((c) => c.epic === epic2), [epic2]);

  const sharedThemes = useMemo(() => {
    const t1 = new Set(e1.themes.map((t) => t.toLowerCase()));
    return e2.themes.filter((t) => t1.has(t.toLowerCase()));
  }, [e1, e2]);

  const quotes1 = useMemo(() => quotes.filter((q) => q.epic === epic1), [epic1]);
  const quotes2 = useMemo(() => quotes.filter((q) => q.epic === epic2), [epic2]);

  const crossConnections = useMemo(
    () => connections.filter((c) => (c.from.epic === epic1 && c.to.epic === epic2) || (c.from.epic === epic2 && c.to.epic === epic1)),
    [epic1, epic2]
  );

  const sharedTraits = useMemo(() => {
    const traits1 = new Set(chars1.flatMap((c) => c.traits));
    return [...new Set(chars2.flatMap((c) => c.traits))].filter((t) => traits1.has(t));
  }, [chars1, chars2]);

  return (
    <div className="space-y-8">
      {/* Epic Selection */}
      <div className="flex flex-col sm:flex-row items-center gap-4 p-6 rounded-2xl border border-[var(--border)] bg-[var(--bg-card)]">
        <select
          value={epic1}
          onChange={(e) => setEpic1(e.target.value)}
          className="px-4 py-2 rounded-lg bg-[var(--bg-primary)] border border-[var(--border)] text-sm font-medium focus:outline-none focus:ring-2 focus:ring-[var(--accent-gold)]"
        >
          {epics.map((e) => (
            <option key={e.slug} value={e.slug}>{e.title}</option>
          ))}
        </select>

        <svg className="w-6 h-6 text-[var(--text-muted)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
        </svg>

        <select
          value={epic2}
          onChange={(e) => setEpic2(e.target.value)}
          className="px-4 py-2 rounded-lg bg-[var(--bg-primary)] border border-[var(--border)] text-sm font-medium focus:outline-none focus:ring-2 focus:ring-[var(--accent-gold)]"
        >
          {epics.map((e) => (
            <option key={e.slug} value={e.slug}>{e.title}</option>
          ))}
        </select>
      </div>

      {/* Side by Side */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {[e1, e2].map((epic, i) => (
          <div key={epic.slug} className="rounded-2xl border border-[var(--border)] bg-[var(--bg-card)] p-6">
            <div className="flex items-center gap-3 mb-4">
              <div
                className="w-10 h-10 rounded-lg flex items-center justify-center text-lg font-bold font-display"
                style={{ backgroundColor: `${epic.color}20`, color: epic.color }}
              >
                {epic.title[0]}
              </div>
              <div>
                <h3 className="font-bold font-display text-lg">{epic.title}</h3>
                <p className="text-xs text-[var(--text-muted)]">{epic.tradition} · {epic.era}</p>
              </div>
            </div>
            <p className="text-sm text-[var(--text-secondary)] mb-4 line-clamp-4">{epic.summary}</p>

            <div className="space-y-3">
              <div>
                <h4 className="text-xs uppercase tracking-wider text-[var(--text-muted)] mb-1">Characters</h4>
                <div className="flex flex-wrap gap-1">
                  {(i === 0 ? chars1 : chars2).slice(0, 6).map((c) => (
                    <span key={c.id} className="text-[10px] px-2 py-0.5 rounded-full bg-[var(--bg-hover)] border border-[var(--border)]">
                      {c.name}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="text-xs uppercase tracking-wider text-[var(--text-muted)] mb-1">Themes</h4>
                <div className="flex flex-wrap gap-1">
                  {epic.themes.map((t) => (
                    <span
                      key={t}
                      className="text-[10px] px-2 py-0.5 rounded-full border"
                      style={{
                        borderColor: sharedThemes.includes(t) ? `${epic.color}60` : "var(--border)",
                        backgroundColor: sharedThemes.includes(t) ? `${epic.color}15` : "transparent",
                        color: sharedThemes.includes(t) ? epic.color : "var(--text-muted)",
                      }}
                    >
                      {t}{sharedThemes.includes(t) ? " ★" : ""}
                    </span>
                  ))}
                </div>
              </div>

              {d1 && (
                <div>
                  <h4 className="text-xs uppercase tracking-wider text-[var(--text-muted)] mb-1">Key Scenes</h4>
                  <div className="flex flex-wrap gap-1">
                    {(i === 0 ? d1 : d2)?.keyScenes.map((s) => (
                      <span key={s.title} className="text-[10px] px-2 py-0.5 rounded-full bg-[var(--bg-hover)] border border-[var(--border)]">
                        {s.title}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Shared Themes */}
      {sharedThemes.length > 0 && (
        <div className="p-6 rounded-2xl border border-[var(--border)] bg-[var(--bg-card)]">
          <h3 className="font-bold font-display text-lg mb-3">Shared Themes</h3>
          <div className="flex flex-wrap gap-2">
            {sharedThemes.map((t) => (
              <span key={t} className="px-3 py-1.5 rounded-lg bg-[var(--accent-gold)]/10 text-[var(--accent-gold)] text-sm border border-[var(--accent-gold)]/20">
                {t}
              </span>
            ))}
          </div>
        </div>
      )}

      {/* Shared Traits */}
      {sharedTraits.length > 0 && (
        <div className="p-6 rounded-2xl border border-[var(--border)] bg-[var(--bg-card)]">
          <h3 className="font-bold font-display text-lg mb-3">Shared Character Traits</h3>
          <div className="flex flex-wrap gap-2">
            {sharedTraits.map((t) => (
              <span key={t} className="px-3 py-1.5 rounded-lg bg-[var(--bg-hover)] text-sm border border-[var(--border)]">
                {t}
              </span>
            ))}
          </div>
        </div>
      )}

      {/* Cross-Epic Connections */}
      {crossConnections.length > 0 && (
        <div className="p-6 rounded-2xl border border-[var(--border)] bg-[var(--bg-card)]">
          <h3 className="font-bold font-display text-lg mb-3">Cross-Epic Connections</h3>
          <div className="space-y-3">
            {crossConnections.map((conn) => (
              <div key={conn.id} className="p-4 rounded-xl border border-[var(--border)] bg-[var(--bg-primary)]">
                <div className="flex items-center gap-2 mb-1">
                  <span className="font-semibold text-sm" style={{ color: epics.find((e) => e.slug === conn.from.epic)?.color }}>{conn.from.name}</span>
                  <svg className="w-3 h-3 text-[var(--text-muted)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                  <span className="font-semibold text-sm" style={{ color: epics.find((e) => e.slug === conn.to.epic)?.color }}>{conn.to.name}</span>
                  <span className="text-[10px] px-2 py-0.5 rounded-full bg-[var(--bg-hover)] border border-[var(--border)] text-[var(--text-muted)]">
                    {conn.label}
                  </span>
                </div>
                <p className="text-sm text-[var(--text-secondary)]">{conn.description}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Quote Comparison */}
      {(quotes1.length > 0 || quotes2.length > 0) && (
        <div className="p-6 rounded-2xl border border-[var(--border)] bg-[var(--bg-card)]">
          <h3 className="font-bold font-display text-lg mb-3">Quote Comparison</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <h4 className="text-xs uppercase tracking-wider mb-2" style={{ color: e1.color }}>{e1.title}</h4>
              {quotes1.slice(0, 2).map((q) => (
                <blockquote key={q.id} className="text-sm text-[var(--text-secondary)] italic border-l-2 pl-3 mb-3" style={{ borderColor: e1.color }}>
                  &ldquo;{q.text}&rdquo;
                  <cite className="block text-xs text-[var(--text-muted)] mt-1 not-italic">— {q.author}</cite>
                </blockquote>
              ))}
            </div>
            <div>
              <h4 className="text-xs uppercase tracking-wider mb-2" style={{ color: e2.color }}>{e2.title}</h4>
              {quotes2.slice(0, 2).map((q) => (
                <blockquote key={q.id} className="text-sm text-[var(--text-secondary)] italic border-l-2 pl-3 mb-3" style={{ borderColor: e2.color }}>
                  &ldquo;{q.text}&rdquo;
                  <cite className="block text-xs text-[var(--text-muted)] mt-1 not-italic">— {q.author}</cite>
                </blockquote>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
