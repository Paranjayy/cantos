"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { epics } from "@/lib/data/epics";

export default function EpicOfTheDay() {
  const [epic, setEpic] = useState(epics[0]);

  useEffect(() => {
    const today = new Date();
    const dayOfYear = Math.floor(
      (today.getTime() - new Date(today.getFullYear(), 0, 0).getTime()) / 86400000
    );
    setEpic(epics[dayOfYear % epics.length]);
  }, []);

  return (
    <section className="mb-16">
      <p className="text-xs uppercase tracking-[0.2em] text-[var(--text-muted)] mb-3 font-medium">
        Epic of the Day
      </p>
      <Link
        href={`/epics/${epic.slug}`}
        className="block p-6 sm:p-8 rounded-2xl border-2 transition-all group"
        style={{
          borderColor: `${epic.color}40`,
          background: `linear-gradient(135deg, ${epic.color}10, transparent)`,
        }}
      >
        <div className="flex items-center gap-3 mb-3">
          <div
            className="w-10 h-10 rounded-lg flex items-center justify-center text-lg font-bold font-display"
            style={{ backgroundColor: `${epic.color}20`, color: epic.color }}
          >
            {epic.title[0]}
          </div>
          <div>
            <h3 className="font-bold text-lg group-hover:text-[var(--accent-gold)] transition-colors font-display">
              {epic.title}
            </h3>
            <p className="text-xs text-[var(--text-muted)] italic">{epic.subtitle}</p>
          </div>
        </div>
        <p className="text-sm text-[var(--text-secondary)] leading-relaxed line-clamp-3">
          {epic.summary}
        </p>
        <div className="flex flex-wrap gap-1.5 mt-3">
          {epic.themes.slice(0, 4).map((theme) => (
            <span
              key={theme}
              className="text-[10px] px-2 py-0.5 rounded-full border"
              style={{ borderColor: `${epic.color}30`, color: epic.color, backgroundColor: `${epic.color}08` }}
            >
              {theme}
            </span>
          ))}
        </div>
      </Link>
    </section>
  );
}
