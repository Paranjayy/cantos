import type { Metadata } from "next";
import CompareTwoEpics from "@/components/CompareTwoEpics";

export const metadata: Metadata = {
  title: "Compare Any Two Epics | Cantos",
  description: "Interactive side-by-side comparison of any two world epics.",
};

export default function ComparePage() {
  return (
    <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-16">
      <div className="mb-12 text-center">
        <h1 className="text-4xl font-bold tracking-tight font-display mb-3">
          Compare Any Two Epics
        </h1>
        <p className="text-[var(--text-secondary)] max-w-xl mx-auto">
          Select two epics and explore their shared themes, characters, connections, and quotes.
        </p>
      </div>
      <CompareTwoEpics />
    </div>
  );
}
