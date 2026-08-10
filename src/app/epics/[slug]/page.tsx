import { notFound } from "next/navigation";
import Link from "next/link";
import { epics, getEpicBySlug } from "@/lib/data/epics";
import { getCharactersByEpic } from "@/lib/data/characters";
import { timelineEvents } from "@/lib/data/timeline";
import { deepDives } from "@/lib/data/deep-dives";

export function generateStaticParams() {
  return epics.map((epic) => ({ slug: epic.slug }));
}

export default async function EpicPage(props: { params: Promise<{ slug: string }> }) {
  const params = await props.params;
  const epic = getEpicBySlug(params.slug);
  if (!epic) notFound();

  const characters = getCharactersByEpic(epic.slug);
  const events = timelineEvents.filter((e) => e.epic === epic.slug);
  const dive = deepDives.find((d) => d.slug === epic.slug);

  return (
    <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-16">
      {/* Header */}
      <div className="mb-12">
        <Link
          href="/epics"
          className="text-sm text-[var(--text-muted)] hover:text-[var(--accent-gold)] transition-colors mb-4 inline-flex items-center gap-1"
        >
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 19l-7-7 7-7" />
          </svg>
          All Epics
        </Link>

        <div className="flex items-center gap-4 mb-4">
          <div
            className="w-14 h-14 rounded-xl flex items-center justify-center text-2xl font-bold font-display"
            style={{ backgroundColor: `${epic.color}20`, color: epic.color }}
          >
            {epic.title[0]}
          </div>
          <div>
            <h1 className="text-4xl font-bold tracking-tight font-display">
              {epic.title}
            </h1>
            <p className="text-[var(--text-muted)] italic">{epic.subtitle}</p>
          </div>
        </div>

        <div className="flex flex-wrap gap-3 text-sm text-[var(--text-muted)] mb-6">
          <span>{epic.tradition}</span>
          <span className="text-[var(--border)]">·</span>
          <span>{epic.region}</span>
          <span className="text-[var(--border)]">·</span>
          <span>{epic.era}</span>
          <span className="text-[var(--border)]">·</span>
          <span>{epic.language}</span>
          <span className="text-[var(--border)]">·</span>
          <span>{epic.verses}</span>
        </div>

        <p className="text-lg text-[var(--text-secondary)] leading-relaxed max-w-3xl">
          {epic.summary}
        </p>
      </div>

      {/* Themes */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4 font-display">Themes</h2>
        <div className="flex flex-wrap gap-2">
          {epic.themes.map((theme) => (
            <span
              key={theme}
              className="px-3 py-1.5 rounded-lg bg-[var(--bg-card)] text-sm border border-[var(--border)]"
            >
              {theme}
            </span>
          ))}
        </div>
      </section>

      {/* Structure */}
      {dive && (
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4 font-display">Structure</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {dive.structure.map((item) => (
              <div
                key={item.book}
                className="p-3 rounded-xl border border-[var(--border)] bg-[var(--bg-card)]"
              >
                <h3 className="font-semibold text-sm font-display">{item.book}</h3>
                <p className="text-xs text-[var(--text-secondary)] mt-1">{item.summary}</p>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Key Scenes */}
      {dive && (
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4 font-display">Key Scenes</h2>
          <div className="space-y-3">
            {dive.keyScenes.map((scene, i) => (
              <div
                key={scene.title}
                className="p-5 rounded-xl border border-[var(--border)] bg-[var(--bg-card)]"
              >
                <div className="flex items-start gap-3">
                  <div
                    className="w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold font-display shrink-0 mt-0.5"
                    style={{ backgroundColor: `${epic.color}20`, color: epic.color }}
                  >
                    {i + 1}
                  </div>
                  <div>
                    <h3 className="font-semibold font-display">{scene.title}</h3>
                    <p className="text-sm text-[var(--text-secondary)] mt-1">
                      {scene.description}
                    </p>
                    <p
                      className="text-xs mt-2 font-medium"
                      style={{ color: epic.color }}
                    >
                      {scene.significance}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Characters */}
      {characters.length > 0 && (
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4 font-display">
            Key Characters
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {characters.map((char) => (
              <Link
                key={char.id}
                href={`/characters#${char.id}`}
                className="p-4 rounded-xl border border-[var(--border)] bg-[var(--bg-card)] hover:border-[var(--border-hover)] transition-all group"
              >
                <h3 className="font-semibold group-hover:text-[var(--accent-gold)] transition-colors font-display">
                  {char.name}
                </h3>
                <p className="text-xs text-[var(--text-muted)] mb-2">
                  {char.title}
                </p>
                <p className="text-sm text-[var(--text-secondary)] line-clamp-2">
                  {char.description}
                </p>
                <div className="flex flex-wrap gap-1 mt-2">
                  {char.traits.slice(0, 3).map((trait) => (
                    <span
                      key={trait}
                      className="text-[10px] px-2 py-0.5 rounded-full bg-[var(--bg-hover)] text-[var(--text-muted)] border border-[var(--border)]"
                    >
                      {trait}
                    </span>
                  ))}
                </div>
              </Link>
            ))}
          </div>
        </section>
      )}

      {/* Timeline Events */}
      {events.length > 0 && (
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4 font-display">
            Key Events
          </h2>
          <div className="relative">
            <div className="absolute left-4 top-0 bottom-0 w-px bg-[var(--border)]" />
            <div className="space-y-4">
              {events.map((event) => (
                <div key={event.id} className="relative pl-10">
                  <div
                    className="absolute left-2.5 top-1.5 w-3 h-3 rounded-full border-2"
                    style={{
                      borderColor: epic.color,
                      backgroundColor: `${epic.color}30`,
                    }}
                  />
                  <div className="p-4 rounded-xl border border-[var(--border)] bg-[var(--bg-card)]">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-xs text-[var(--text-muted)]">
                        {event.era}
                      </span>
                    </div>
                    <h3 className="font-semibold font-display">{event.title}</h3>
                    <p className="text-sm text-[var(--text-secondary)] mt-1">
                      {event.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Legacy */}
      {dive && (
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4 font-display">Legacy & Influence</h2>
          <div className="p-5 rounded-xl border border-[var(--border)] bg-[var(--bg-card)] mb-4">
            <p className="text-[var(--text-secondary)] leading-relaxed">{dive.legacy}</p>
          </div>
          <div className="flex flex-wrap gap-2">
            {dive.influence.map((item) => (
              <span
                key={item}
                className="px-3 py-1.5 rounded-lg text-sm border border-[var(--border)]"
                style={{ backgroundColor: `${epic.color}10`, color: epic.color }}
              >
                {item}
              </span>
            ))}
          </div>
        </section>
      )}

      {/* Fun Fact */}
      {dive && (
        <div
          className="p-6 rounded-2xl border-2 text-center"
          style={{ borderColor: `${epic.color}40`, backgroundColor: `${epic.color}08` }}
        >
          <p className="text-xs uppercase tracking-widest mb-2" style={{ color: epic.color }}>
            Did You Know?
          </p>
          <p className="text-[var(--text-secondary)] italic">{dive.funFact}</p>
        </div>
      )}
    </div>
  );
}
