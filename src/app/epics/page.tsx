import Link from "next/link";
import { epics } from "@/lib/data/epics";

export default function EpicsPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
      <div className="mb-12">
        <h1 className="text-4xl font-bold tracking-tight mb-4 font-display">
          The World&apos;s Great Epics
        </h1>
        <p className="text-[var(--text-secondary)] text-lg max-w-2xl">
          From the oldest known story to Renaissance masterworks — eight
          epics that shaped how humanity understands itself.
        </p>
      </div>

      <div className="space-y-4">
        {epics.map((epic, i) => (
          <Link
            key={epic.slug}
            href={`/epics/${epic.slug}`}
            className="group flex flex-col md:flex-row gap-6 p-6 rounded-xl border border-[var(--border)] bg-[var(--bg-card)] hover:border-[var(--border-hover)] hover:bg-[var(--bg-hover)] transition-all animate-fade-in-up"
            style={{ animationDelay: `${i * 0.06}s`, opacity: 0 }}
          >
            <div className="flex-shrink-0">
              <div
                className="w-16 h-16 rounded-xl flex items-center justify-center text-2xl font-bold font-display"
                style={{
                  backgroundColor: `${epic.color}20`,
                  color: epic.color,
                }}
              >
                {epic.title[0]}
              </div>
            </div>

            <div className="flex-1 min-w-0">
              <div className="flex items-start justify-between gap-4 mb-2">
                <div>
                  <h2 className="text-xl font-semibold group-hover:text-[var(--accent-gold)] transition-colors font-display">
                    {epic.title}
                  </h2>
                  <p className="text-sm text-[var(--text-muted)] italic">
                    {epic.subtitle}
                  </p>
                </div>
                <svg
                  className="w-5 h-5 text-[var(--text-muted)] group-hover:text-[var(--accent-gold)] transition-colors flex-shrink-0 mt-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </div>

              <p className="text-sm text-[var(--text-secondary)] mb-4 line-clamp-2 md:line-clamp-none">
                {epic.summary}
              </p>

              <div className="flex flex-wrap items-center gap-3 text-xs text-[var(--text-muted)]">
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

              <div className="flex flex-wrap gap-1.5 mt-3">
                {epic.themes.map((theme) => (
                  <span
                    key={theme}
                    className="text-[10px] px-2 py-0.5 rounded-full bg-[var(--bg-hover)] text-[var(--text-muted)] border border-[var(--border)]"
                  >
                    {theme}
                  </span>
                ))}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
