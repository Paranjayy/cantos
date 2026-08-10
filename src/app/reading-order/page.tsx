import type { Metadata } from "next";
import Link from "next/link";
import { epics } from "@/lib/data/epics";

export const metadata: Metadata = {
  title: "Reading Order | Cantos",
  description: "Suggested reading paths through the world's great epics.",
};

const pathways = [
  {
    title: "Chronological",
    subtitle: "Follow the timeline of human storytelling",
    description: "Start with the oldest epic and work forward through history.",
    icon: "01",
    color: "#D4A373",
    order: ["gilgamesh", "iliad", "odyssey", "ramayana", "mahabharata", "aeneid", "beowulf", "divine-comedy"],
  },
  {
    title: "By Theme",
    subtitle: "Follow the thread that calls to you",
    description: "Group epics by the questions they ask, not when they were written.",
    icon: "02",
    color: "#10B981",
    order: [
      "iliad", "mahabharata",
      "odyssey", "ramayana",
      "aeneid", "divine-comedy",
      "beowulf", "gilgamesh",
    ],
    groups: [
      { name: "Wrath & War", slugs: ["iliad", "mahabharata"] },
      { name: "Exile & Return", slugs: ["odyssey", "ramayana"] },
      { name: "Fate & Founding", slugs: ["aeneid", "divine-comedy"] },
      { name: "Mortality & Meaning", slugs: ["beowulf", "gilgamesh"] },
    ],
  },
  {
    title: "By Region",
    subtitle: "Explore one tradition at a time",
    description: "Go deep into a single literary tradition before crossing borders.",
    icon: "03",
    color: "#60A5FA",
    groups: [
      { name: "Mesopotamian", slugs: ["gilgamesh"] },
      { name: "Greek", slugs: ["iliad", "odyssey"] },
      { name: "Indian", slugs: ["ramayana", "mahabharata"] },
      { name: "Roman", slugs: ["aeneid"] },
      { name: "Norse-Germanic", slugs: ["beowulf"] },
      { name: "Italian", slugs: ["divine-comedy"] },
    ],
  },
  {
    title: "By Length",
    subtitle: "From short to monumental",
    description: "Start manageable, then tackle the giants.",
    icon: "04",
    color: "#A78BFA",
    order: ["beowulf", "iliad", "odyssey", "aeneid", "gilgamesh", "divine-comedy", "ramayana", "mahabharata"],
    note: "Beowulf (~3,182 lines) is the shortest. The Mahabharata (~100,000 lines) is the longest epic in world literature — by far.",
  },
  {
    title: "The Beginner's Path",
    subtitle: "If you've never read an epic before",
    description: "Start with the most accessible, most immediately gripping works.",
    icon: "05",
    color: "#F59E0B",
    order: ["odyssey", "iliad", "gilgamesh", "beowulf", "divine-comedy"],
    note: "The Odyssey hooks you with adventure. The Iliad shocks you with war. Gilgamesh devastates you with grief. Then you're ready for the rest.",
  },
];

export default function ReadingOrderPage() {
  return (
    <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-16">
      <div className="mb-12 text-center">
        <h1 className="text-4xl font-bold tracking-tight font-display mb-3">
          Where to Start
        </h1>
        <p className="text-[var(--text-secondary)] max-w-xl mx-auto">
          There&apos;s no single right order. Here are five ways to approach the world&apos;s great epics.
        </p>
      </div>

      <div className="space-y-12">
        {pathways.map((pw) => (
          <div key={pw.title} className="rounded-2xl border border-[var(--border)] bg-[var(--bg-card)] p-6 sm:p-8">
            <div className="flex items-start gap-4 mb-4">
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center text-lg font-bold font-display shrink-0"
                style={{ backgroundColor: `${pw.color}20`, color: pw.color }}
              >
                {pw.icon}
              </div>
              <div>
                <h2 className="text-xl font-bold font-display">{pw.title}</h2>
                <p className="text-sm text-[var(--text-muted)] italic">{pw.subtitle}</p>
              </div>
            </div>
            <p className="text-sm text-[var(--text-secondary)] mb-6">{pw.description}</p>

            {pw.groups ? (
              <div className="space-y-4">
                {pw.groups.map((g) => (
                  <div key={g.name}>
                    <h3 className="text-xs uppercase tracking-wider text-[var(--text-muted)] mb-2">{g.name}</h3>
                    <div className="flex flex-wrap gap-2">
                      {g.slugs.map((slug) => {
                        const epic = epics.find((e) => e.slug === slug)!;
                        return (
                          <Link
                            key={slug}
                            href={`/epics/${slug}`}
                            className="flex items-center gap-2 px-3 py-2 rounded-lg border border-[var(--border)] bg-[var(--bg-primary)] hover:border-[var(--border-hover)] transition-all group"
                          >
                            <div
                              className="w-2 h-2 rounded-full"
                              style={{ backgroundColor: epic.color }}
                            />
                            <span className="text-sm font-medium group-hover:text-[var(--accent-gold)] transition-colors">
                              {epic.title}
                            </span>
                            <span className="text-[10px] text-[var(--text-muted)]">{epic.era}</span>
                          </Link>
                        );
                      })}
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="flex flex-wrap gap-2">
                {(pw.order || []).map((slug, i) => {
                  const epic = epics.find((e) => e.slug === slug)!;
                  return (
                    <Link
                      key={slug}
                      href={`/epics/${slug}`}
                      className="flex items-center gap-2 px-3 py-2 rounded-lg border border-[var(--border)] bg-[var(--bg-primary)] hover:border-[var(--border-hover)] transition-all group"
                    >
                      <span className="text-xs font-mono text-[var(--text-muted)] w-5">{i + 1}.</span>
                      <div
                        className="w-2 h-2 rounded-full"
                        style={{ backgroundColor: epic.color }}
                      />
                      <span className="text-sm font-medium group-hover:text-[var(--accent-gold)] transition-colors">
                        {epic.title}
                      </span>
                      <span className="text-[10px] text-[var(--text-muted)]">{epic.era}</span>
                    </Link>
                  );
                })}
              </div>
            )}

            {pw.note && (
              <p className="text-xs text-[var(--text-muted)] mt-4 italic">{pw.note}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
