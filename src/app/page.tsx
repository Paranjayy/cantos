import Link from "next/link";
import { epics } from "@/lib/data/epics";
import { getRandomFact } from "@/lib/data/facts";

export default function Home() {
  return (
    <div className="min-h-[calc(100vh-4rem)]">
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[var(--bg-primary)] via-transparent to-[var(--bg-primary)] pointer-events-none" />
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[var(--accent-gold)]/[0.03] rounded-full blur-[120px] animate-pulse-glow" />

        <div className="relative mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 pt-24 pb-20 text-center">
          <div className="animate-fade-in-up">
            <p className="text-sm tracking-[0.2em] uppercase text-[var(--accent-gold)] mb-6 font-medium">
              World Epic Explorer
            </p>
          </div>

          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.1] mb-8 animate-fade-in-up animate-delay-100 font-display">
            Every Epic Is a{" "}
            <span className="gradient-text">Canto</span>
            <br />
            in the Larger{" "}
            <span className="gradient-text">Human Story</span>
          </h1>

          <p className="text-lg sm:text-xl text-[var(--text-secondary)] max-w-2xl mx-auto mb-12 text-balance animate-fade-in-up animate-delay-200">
            Explore the Mahabharata&apos;s thousand branches, Homer&apos;s
            timeless voyages, Gilgamesh&apos;s ancient grief, and every great
            narrative that shaped how humanity understands itself.
          </p>

          <div className="flex flex-wrap justify-center gap-4 animate-fade-in-up animate-delay-300">
            <Link
              href="/epics"
              className="inline-flex items-center gap-2 px-6 py-3 bg-[var(--accent-gold)] text-[var(--bg-primary)] font-medium rounded-lg hover:bg-[var(--accent-gold-light)] transition-colors"
            >
              Explore All Epics
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
            <Link
              href="/family-tree"
              className="inline-flex items-center gap-2 px-6 py-3 border border-[var(--border)] text-[var(--text-primary)] font-medium rounded-lg hover:bg-[var(--bg-hover)] hover:border-[var(--border-hover)] transition-colors"
            >
              Family Trees
            </Link>
            <Link
              href="/compare"
              className="inline-flex items-center gap-2 px-6 py-3 border border-[var(--border)] text-[var(--text-primary)] font-medium rounded-lg hover:bg-[var(--bg-hover)] hover:border-[var(--border-hover)] transition-colors"
            >
              Compare Epics
            </Link>
          </div>
        </div>
      </section>

      {/* Epic Grid */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight mb-4 font-display">
            The World&apos;s Great Epics
          </h2>
          <p className="text-[var(--text-secondary)] max-w-xl mx-auto">
            From Mesopotamia to medieval Italy, these are the narratives that
            defined civilizations.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {epics.map((epic, i) => (
            <Link
              key={epic.slug}
              href={`/epics/${epic.slug}`}
              className="group card-glow rounded-xl p-6 bg-[var(--bg-card)] animate-fade-in-up"
              style={{ animationDelay: `${i * 0.08}s`, opacity: 0 }}
            >
              <div
                className="w-2 h-2 rounded-full mb-4"
                style={{ backgroundColor: epic.color }}
              />
              <h3 className="text-lg font-semibold mb-1 group-hover:text-[var(--accent-gold)] transition-colors font-display">
                {epic.title}
              </h3>
              <p className="text-xs text-[var(--text-muted)] mb-3">
                {epic.tradition} · {epic.era}
              </p>
              <p className="text-sm text-[var(--text-secondary)] line-clamp-3">
                {epic.summary}
              </p>
              <div className="mt-4 flex flex-wrap gap-1">
                {epic.themes.slice(0, 3).map((theme) => (
                  <span
                    key={theme}
                    className="text-[10px] px-2 py-0.5 rounded-full bg-[var(--bg-hover)] text-[var(--text-muted)] border border-[var(--border)]"
                  >
                    {theme}
                  </span>
                ))}
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Features Preview */}
      <section className="border-t border-[var(--border)] py-20">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold tracking-tight text-center mb-16 font-display">
            Tools for Exploration
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-12 h-12 mx-auto mb-4 rounded-xl bg-[var(--bg-card)] border border-[var(--border)] flex items-center justify-center">
                <svg className="w-6 h-6 text-[var(--accent-gold)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2 font-display">Family Trees</h3>
              <p className="text-sm text-[var(--text-secondary)]">
                Navigate complex dynasties — the Kuru lineage, the Raghu
                dynasty, and the tangled houses of Troy.
              </p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 mx-auto mb-4 rounded-xl bg-[var(--bg-card)] border border-[var(--border)] flex items-center justify-center">
                <svg className="w-6 h-6 text-[var(--accent-gold)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2 font-display">Connections</h3>
              <p className="text-sm text-[var(--text-secondary)]">
                See how characters and archetypes echo across traditions —
                Achilles and Karna, Sita and Helen.
              </p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 mx-auto mb-4 rounded-xl bg-[var(--bg-card)] border border-[var(--border)] flex items-center justify-center">
                <svg className="w-6 h-6 text-[var(--accent-gold)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2 font-display">Timeline</h3>
              <p className="text-sm text-[var(--text-secondary)]">
                See how events across millennia connect — from Gilgamesh
                to Dante, in one scrolling journey.
              </p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 mx-auto mb-4 rounded-xl bg-[var(--bg-card)] border border-[var(--border)] flex items-center justify-center">
                <svg className="w-6 h-6 text-[var(--accent-gold)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2 font-display">Compare</h3>
              <p className="text-sm text-[var(--text-secondary)]">
                Discover the patterns that connect — exile, wrath, duty,
                mortality — across every tradition.
              </p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 mx-auto mb-4 rounded-xl bg-[var(--bg-card)] border border-[var(--border)] flex items-center justify-center">
                <svg className="w-6 h-6 text-[var(--accent-gold)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 5v2m0 4v2m0 4v2M5 5a2 2 0 00-2 2v3a2 2 0 110 4v3a2 2 0 002 2h14a2 2 0 002-2v-3a2 2 0 110-4V7a2 2 0 00-2-2H5z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2 font-display">Pathways</h3>
              <p className="text-sm text-[var(--text-secondary)]">
                Thematic journeys across epics — follow a thread and see how
                the same questions recur.
              </p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 mx-auto mb-4 rounded-xl bg-[var(--bg-card)] border border-[var(--border)] flex items-center justify-center">
                <svg className="w-6 h-6 text-[var(--accent-gold)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2 font-display">Glossary</h3>
              <p className="text-sm text-[var(--text-secondary)]">
                Key terms from Sanskrit, Greek, Latin, and Old English — the
                vocabulary of epic literature.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Did You Know */}
      <DidYouKnow />
    </div>
  );
}

function DidYouKnow() {
  const fact = getRandomFact();
  const epic = epics.find((e) => e.slug === fact.epic);

  return (
    <section className="border-t border-[var(--border)] py-16">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-xs tracking-[0.2em] uppercase text-[var(--text-muted)] mb-4">
          Did you know?
        </p>
        <blockquote className="text-lg text-[var(--text-secondary)] leading-relaxed mb-4 italic">
          &ldquo;{fact.text}&rdquo;
        </blockquote>
        <div className="flex items-center justify-center gap-2">
          <div
            className="w-2 h-2 rounded-full"
            style={{ backgroundColor: epic?.color || "#666" }}
          />
          <span className="text-sm text-[var(--text-muted)]">
            {epic?.title}
          </span>
        </div>
      </div>
    </section>
  );
}
