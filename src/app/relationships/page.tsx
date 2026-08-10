import type { Metadata } from "next";
import RelationshipGraph from "@/components/RelationshipGraph";

export const metadata: Metadata = {
  title: "Character Relationships | Cantos",
  description: "Visual graph of how characters across world epics are connected.",
};

export default function RelationshipsPage() {
  return (
    <div className="h-screen flex flex-col">
      <div className="px-6 pt-6 pb-2">
        <h1 className="text-3xl font-bold font-display">Character Relationships</h1>
        <p className="text-sm text-[var(--text-muted)] mt-1">
          See how characters connect across epics — family, friendship, rivalry, and divine guidance.
        </p>
      </div>
      <div className="flex-1 overflow-hidden">
        <RelationshipGraph />
      </div>
    </div>
  );
}
