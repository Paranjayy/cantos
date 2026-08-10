import { epics } from "@/lib/data/epics";
import { characters } from "@/lib/data/characters";
import { timelineEvents } from "@/lib/data/timeline";
import { connections } from "@/lib/data/connections";
import { quotes } from "@/lib/data/quotes";
import { glossaryTerms } from "@/lib/data/glossary";

export default function StatsPage() {
  const traditions = [...new Set(epics.map((e) => e.tradition))];
  const regions = [...new Set(epics.map((e) => e.region))];

  const stats = [
    { label: "World Epics", value: epics.length, color: "#C9A96E" },
    { label: "Characters", value: characters.length, color: "#3B82F6" },
    { label: "Timeline Events", value: timelineEvents.length, color: "#10B981" },
    { label: "Cross-Epic Connections", value: connections.length, color: "#A855F7" },
    { label: "Quotes", value: quotes.length, color: "#F59E0B" },
    { label: "Glossary Terms", value: glossaryTerms.length, color: "#EF4444" },
    { label: "Traditions Represented", value: traditions.length, color: "#047857" },
    { label: "Regions Covered", value: regions.length, color: "#7C3AED" },
  ];

  const oldestNewest = [
    {
      title: "Oldest Epic",
      name: "Epic of Gilgamesh",
      era: "~2100 BCE",
      color: "#0F766E",
    },
    {
      title: "Newest Epic",
      name: "Divine Comedy",
      era: "~1308–1320 CE",
      color: "#BE123C",
    },
    {
      title: "Longest Epic",
      name: "Mahabharata",
      era: "~100,000 verses",
      color: "#B91C1C",
    },
    {
      title: "Shortest Epic",
      name: "Beowulf",
      era: "~3,000 lines",
      color: "#B45309",
    },
  ];

  return (
    <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-16">
      <div className="mb-12">
        <h1 className="text-4xl font-bold tracking-tight mb-4 font-display">
          By the Numbers
        </h1>
        <p className="text-[var(--text-secondary)] text-lg max-w-2xl">
          The scope of Cantos, at a glance.
        </p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-16">
        {stats.map((stat, i) => (
          <div
            key={stat.label}
            className="p-6 rounded-xl border border-[var(--border)] bg-[var(--bg-card)] text-center animate-fade-in-up"
            style={{ animationDelay: `${i * 0.06}s`, opacity: 0 }}
          >
            <div
              className="text-4xl font-bold font-display mb-2"
              style={{ color: stat.color }}
            >
              {stat.value}
            </div>
            <div className="text-sm text-[var(--text-muted)]">{stat.label}</div>
          </div>
        ))}
      </div>

      {/* Extremes */}
      <div className="mb-16">
        <h2 className="text-2xl font-bold mb-6 font-display">Extremes</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {oldestNewest.map((item) => (
            <div
              key={item.title}
              className="p-5 rounded-xl border border-[var(--border)] bg-[var(--bg-card)]"
            >
              <p className="text-xs text-[var(--text-muted)] mb-1">
                {item.title}
              </p>
              <div className="flex items-center gap-2">
                <div
                  className="w-2 h-2 rounded-full"
                  style={{ backgroundColor: item.color }}
                />
                <span className="text-lg font-semibold font-display">
                  {item.name}
                </span>
              </div>
              <p className="text-sm text-[var(--text-muted)] mt-1">
                {item.era}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Epics by Tradition */}
      <div className="mb-16">
        <h2 className="text-2xl font-bold mb-6 font-display">
          By Tradition
        </h2>
        <div className="space-y-3">
          {traditions.map((tradition) => {
            const epicList = epics.filter((e) => e.tradition === tradition);
            return (
              <div
                key={tradition}
                className="p-4 rounded-xl border border-[var(--border)] bg-[var(--bg-card)]"
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="font-semibold font-display">
                    {tradition}
                  </span>
                  <span className="text-sm text-[var(--text-muted)]">
                    {epicList.length} epic{epicList.length !== 1 ? "s" : ""}
                  </span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {epicList.map((e) => (
                    <span
                      key={e.slug}
                      className="text-xs px-2 py-0.5 rounded-full border"
                      style={{ borderColor: e.color, color: e.color }}
                    >
                      {e.title}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Characters per Epic */}
      <div>
        <h2 className="text-2xl font-bold mb-6 font-display">
          Characters per Epic
        </h2>
        <div className="space-y-2">
          {epics.map((epic) => {
            const count = characters.filter((c) => c.epic === epic.slug).length;
            const maxCount = Math.max(
              ...epics.map(
                (e) => characters.filter((c) => c.epic === e.slug).length
              )
            );
            return (
              <div key={epic.slug} className="flex items-center gap-4">
                <span className="text-sm text-[var(--text-secondary)] w-28 text-right truncate">
                  {epic.title}
                </span>
                <div className="flex-1 h-6 rounded-lg bg-[var(--bg-card)] border border-[var(--border)] overflow-hidden">
                  <div
                    className="h-full rounded-lg transition-all duration-1000"
                    style={{
                      width: `${maxCount > 0 ? (count / maxCount) * 100 : 0}%`,
                      backgroundColor: `${epic.color}60`,
                    }}
                  />
                </div>
                <span className="text-sm text-[var(--text-muted)] w-8">
                  {count}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
