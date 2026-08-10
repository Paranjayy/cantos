"use client";

import { useState } from "react";
import { epics } from "@/lib/data/epics";
import Link from "next/link";

interface MapRegion {
  name: string;
  x: number;
  y: number;
  epics: string[];
}

const regions: MapRegion[] = [
  { name: "Mesopotamia", x: 56, y: 32, epics: ["gilgamesh"] },
  { name: "Indian Subcontinent", x: 65, y: 42, epics: ["mahabharata", "ramayana"] },
  { name: "Mediterranean (Greek)", x: 48, y: 32, epics: ["iliad", "odyssey"] },
  { name: "Mediterranean (Roman)", x: 43, y: 30, epics: ["aeneid"] },
  { name: "Northern Europe", x: 42, y: 22, epics: ["beowulf"] },
  { name: "Italy", x: 44, y: 30, epics: ["divine-comedy"] },
];

export default function MapPage() {
  const [hoveredRegion, setHoveredRegion] = useState<MapRegion | null>(null);

  return (
    <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-16">
      <div className="mb-10">
        <h1 className="text-4xl font-bold tracking-tight mb-4 font-display">
          Where the Epics Were Born
        </h1>
        <p className="text-[var(--text-secondary)] text-lg max-w-2xl">
          Every epic has a homeland. See where these stories emerged from the
          landscapes, cultures, and conflicts of the ancient world.
        </p>
      </div>

      {/* SVG Map */}
      <div className="relative rounded-xl border border-[var(--border)] bg-[var(--bg-card)] overflow-hidden mb-10">
        <div className="aspect-[2/1] relative">
          <svg viewBox="0 0 100 60" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            {/* Simplified world outline */}
            <rect width="100" height="60" fill="var(--bg-card)" />

            {/* Land masses - simplified */}
            {/* Europe */}
            <path d="M 38 18 Q 42 16 46 18 Q 48 20 46 24 Q 44 26 40 24 Q 36 22 38 18 Z" fill="var(--bg-hover)" stroke="var(--border)" strokeWidth="0.3" />
            {/* Africa */}
            <path d="M 38 28 Q 44 26 48 28 Q 52 30 54 34 Q 52 40 48 44 Q 44 46 40 42 Q 36 38 38 32 Z" fill="var(--bg-hover)" stroke="var(--border)" strokeWidth="0.3" />
            {/* Asia */}
            <path d="M 52 16 Q 60 14 70 18 Q 76 20 78 26 Q 76 30 72 34 Q 68 36 62 34 Q 56 30 52 24 Q 50 20 52 16 Z" fill="var(--bg-hover)" stroke="var(--border)" strokeWidth="0.3" />
            {/* India */}
            <path d="M 62 34 Q 66 32 68 36 Q 66 42 64 44 Q 62 42 60 38 Q 60 36 62 34 Z" fill="var(--bg-hover)" stroke="var(--border)" strokeWidth="0.3" />

            {/* Region markers */}
            {regions.map((region) => {
              const isHovered = hoveredRegion?.name === region.name;
              const epicColors = region.epics.map((slug) => epics.find((e) => e.slug === slug)?.color || "#666");

              return (
                <g key={region.name}>
                  {/* Pulse ring */}
                  {isHovered && (
                    <circle
                      cx={region.x}
                      cy={region.y}
                      r="4"
                      fill="none"
                      stroke={epicColors[0]}
                      strokeWidth="0.3"
                      opacity="0.5"
                    >
                      <animate attributeName="r" values="2;5;2" dur="2s" repeatCount="indefinite" />
                      <animate attributeName="opacity" values="0.5;0;0.5" dur="2s" repeatCount="indefinite" />
                    </circle>
                  )}

                  {/* Main dot */}
                  <circle
                    cx={region.x}
                    cy={region.y}
                    r={isHovered ? 2.5 : 1.8}
                    fill={epicColors[0]}
                    stroke={isHovered ? "#fff" : "none"}
                    strokeWidth="0.5"
                    className="cursor-pointer transition-all duration-300"
                    onMouseEnter={() => setHoveredRegion(region)}
                    onMouseLeave={() => setHoveredRegion(null)}
                  />

                  {/* Label */}
                  <text
                    x={region.x}
                    y={region.y - 3.5}
                    textAnchor="middle"
                    className="text-[2.2px] fill-[var(--text-secondary)] pointer-events-none font-display"
                    style={{
                      opacity: isHovered ? 1 : 0.6,
                      transition: "opacity 0.3s",
                    }}
                  >
                    {region.name}
                  </text>
                </g>
              );
            })}
          </svg>
        </div>

        {/* Tooltip */}
        {hoveredRegion && (
          <div className="absolute bottom-4 left-4 right-4 sm:left-auto sm:right-4 sm:w-80 p-4 rounded-xl border border-[var(--border)] bg-[var(--bg-primary)] shadow-xl">
            <h3 className="font-semibold font-display mb-2">{hoveredRegion.name}</h3>
            <div className="space-y-1">
              {hoveredRegion.epics.map((slug) => {
                const epic = epics.find((e) => e.slug === slug);
                return epic ? (
                  <Link
                    key={slug}
                    href={`/epics/${slug}`}
                    className="flex items-center gap-2 text-sm text-[var(--text-secondary)] hover:text-[var(--accent-gold)]"
                  >
                    <div className="w-2 h-2 rounded-full" style={{ backgroundColor: epic.color }} />
                    {epic.title}
                    <span className="text-xs text-[var(--text-muted)]">({epic.tradition})</span>
                  </Link>
                ) : null;
              })}
            </div>
          </div>
        )}
      </div>

      {/* Region List */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {regions.map((region) => (
          <div
            key={region.name}
            className="p-5 rounded-xl border border-[var(--border)] bg-[var(--bg-card)] hover:border-[var(--border-hover)] transition-all"
            onMouseEnter={() => setHoveredRegion(region)}
            onMouseLeave={() => setHoveredRegion(null)}
          >
            <h3 className="font-semibold font-display mb-2">{region.name}</h3>
            <div className="space-y-1">
              {region.epics.map((slug) => {
                const epic = epics.find((e) => e.slug === slug);
                return epic ? (
                  <div key={slug} className="flex items-center gap-2 text-sm text-[var(--text-secondary)]">
                    <div className="w-2 h-2 rounded-full" style={{ backgroundColor: epic.color }} />
                    {epic.title}
                  </div>
                ) : null;
              })}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
