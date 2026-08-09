"use client";

import { useState } from "react";
import Link from "next/link";
import { epics } from "@/lib/data/epics";

interface Pathway {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  color: string;
  stops: {
    epic: string;
    title: string;
    text: string;
    link: string;
  }[];
}

const pathways: Pathway[] = [
  {
    id: "exile-return",
    title: "The Exile's Journey",
    subtitle: "Banishment, transformation, and the long road home",
    description:
      "From Rama's forest exile to Odysseus' decade at sea, exile is the crucible where heroes are forged. Follow the pattern across traditions.",
    color: "#D97706",
    stops: [
      { epic: "ramayana", title: "Rama into the Forest", text: "Rama accepts exile without protest — duty over comfort. Sita and Lakshmana follow.", link: "/epics/ramayana" },
      { epic: "mahabharata", title: "The Pandavas' 13 Years", text: "After the rigged dice game, the five brothers lose everything and live in the wilderness.", link: "/epics/mahabharata" },
      { epic: "odyssey", title: "Odysseus at Sea", text: "Ten years of monsters, goddesses, and temptation — all to reach one island: Ithaca.", link: "/epics/odyssey" },
      { epic: "aeneid", title: "Aeneas Flees Troy", text: "Carrying his father on his back, Aeneas leaves burning Troy to find a new homeland.", link: "/epics/aeneid" },
    ],
  },
  {
    id: "wrath-vengeance",
    title: "Wrath and Its Consequences",
    subtitle: "The fire that consumes the angry and everyone around them",
    description:
      "Achilles' withdrawal, Draupadi's vow, Ravana's hubris — uncontrolled anger is the most dangerous force in epic literature.",
    color: "#B91C1C",
    stops: [
      { epic: "iliad", title: "Achilles' Mēnis", text: "When Agamemnon takes Briseis, Achilles' wrath costs thousands of Greek lives.", link: "/epics/iliad" },
      { epic: "mahabharata", title: "Draupadi's Vow", text: "Humiliated in the assembly hall, Draupadi vows to wash her hair with Dushasana's blood.", link: "/epics/mahabharata" },
      { epic: "ramayana", title: "Ravana's Desire", text: "Ravana's lust for Sita drives him to abduct her, sealing his doom and Lanka's fall.", link: "/epics/ramayana" },
      { epic: "beowulf", title: "The Dragon's Fury", text: "A stolen cup sends the dragon to burn the Geatish homeland. Even Beowulf cannot fully stop it.", link: "/epics/beowulf" },
    ],
  },
  {
    id: "friends-companions",
    title: "Friendship and Brotherhood",
    subtitle: "The bonds that make us human, forged in fire",
    description:
      "Gilgamesh and Enkidu, Achilles and Patroclus, the five Pandavas — the deepest friendships in literature are tested by death and war.",
    color: "#047857",
    stops: [
      { epic: "gilgamesh", title: "Gilgamesh & Enkidu", text: "Created as enemies, they become inseparable. Enkidu's death drives Gilgamesh to the ends of the earth.", link: "/epics/gilgamesh" },
      { epic: "iliad", title: "Achilles & Patroclus", text: "Patroclus dies wearing Achilles' armor. Achilles' grief surpasses his wrath — the turning point of the Iliad.", link: "/epics/iliad" },
      { epic: "mahabharata", title: "The Five Pandavas", text: "Different mothers, different gifts, but one unbreakable bond. They share Draupadi and share exile.", link: "/epics/mahabharata" },
      { epic: "odyssey", title: "Odysseus & Eumaeus", text: "The faithful swineherd who waits twenty years. Loyalty that outlasts gods and monsters.", link: "/epics/odyssey" },
    ],
  },
  {
    id: "mortality-glory",
    title: "Facing Mortality",
    subtitle: "How we answer the oldest question",
    description:
      "Gilgamesh seeking immortality, Achilles choosing glory, Dante mapping the afterlife — every epic confronts the fact of death.",
    color: "#7C3AED",
    stops: [
      { epic: "gilgamesh", title: "The Plant of Youth", text: "Gilgamesh finds the plant that restores youth — then a serpent steals it. Death is the human condition.", link: "/epics/gilgamesh" },
      { epic: "iliad", title: "Achilles' Choice", text: "A long, forgettable life? Or a short one of glory? Achilles chooses kleos — his name lives forever.", link: "/epics/iliad" },
      { epic: "mahabharata", title: "The Bhagavad Gita", text: "Krishna tells Arjuna: the soul is eternal. Death is transformation, not ending. Fight.", link: "/epics/mahabharata" },
      { epic: "divine-comedy", title: "Dante's Cosmos", text: "A literal journey through Hell, Purgatory, and Paradise. Death is not the end — it's the beginning.", link: "/epics/divine-comedy" },
    ],
  },
  {
    id: "divine-mortals",
    title: "When Gods Walk Among Us",
    subtitle: "Divine intervention and the blurred line between mortal and god",
    description:
      "The gods take sides, meddle, create avatars, and occasionally fall in love. The boundary between divine and mortal is always in motion.",
    color: "#A855F7",
    stops: [
      { epic: "iliad", title: "The Gods Choose Sides", text: "Athena helps Odysseus, Apollo guides Paris, Aphrodite rescues Aeneas. The gods are not neutral.", link: "/epics/iliad" },
      { epic: "ramayana", title: "Rama as Avatar", text: "Rama is the 7th avatar of Vishnu. His life is lila — divine play, not just mortal struggle.", link: "/epics/ramayana" },
      { epic: "mahabharata", title: "Krishna's Cosmic Form", text: "On the battlefield, Arjuna sees Krishna's universal form — every god, every universe, within one being.", link: "/epics/mahabharata" },
      { epic: "gilgamesh", title: "Two-Thirds God", text: "Gilgamesh is divine and mortal in unequal measure. The tension drives everything.", link: "/epics/gilgamesh" },
    ],
  },
];

export default function PathwaysPage() {
  const [selectedPathway, setSelectedPathway] = useState(pathways[0]);

  return (
    <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-16">
      <div className="mb-12">
        <h1 className="text-4xl font-bold tracking-tight mb-4 font-display">
          Reading Pathways
        </h1>
        <p className="text-[var(--text-secondary)] text-lg max-w-2xl">
          Thematic journeys across multiple epics. Follow a theme and
          discover how the same human questions echo across traditions.
        </p>
      </div>

      {/* Pathway Selector */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 mb-10">
        {pathways.map((p) => (
          <button
            key={p.id}
            onClick={() => setSelectedPathway(p)}
            className={`text-left p-4 rounded-xl border transition-all ${
              selectedPathway.id === p.id
                ? "border-2 bg-[var(--bg-card)]"
                : "border-[var(--border)] bg-[var(--bg-card)] hover:border-[var(--border-hover)]"
            }`}
            style={{
              borderColor:
                selectedPathway.id === p.id ? p.color : undefined,
            }}
          >
            <div
              className="w-2 h-2 rounded-full mb-3"
              style={{ backgroundColor: p.color }}
            />
            <h3 className="font-semibold font-display text-sm mb-1">
              {p.title}
            </h3>
            <p className="text-xs text-[var(--text-muted)]">{p.subtitle}</p>
          </button>
        ))}
      </div>

      {/* Pathway Detail */}
      <div className="mb-6">
        <h2 className="text-2xl font-bold font-display mb-2">
          {selectedPathway.title}
        </h2>
        <p className="text-[var(--text-secondary)]">
          {selectedPathway.description}
        </p>
      </div>

      {/* Journey Steps */}
      <div className="relative">
        <div
          className="absolute left-6 top-0 bottom-0 w-px"
          style={{ backgroundColor: `${selectedPathway.color}40` }}
        />

        <div className="space-y-6">
          {selectedPathway.stops.map((stop, i) => {
            const epic = epics.find((e) => e.slug === stop.epic);
            return (
              <div key={i} className="relative pl-16">
                <div
                  className="absolute left-4 top-4 w-5 h-5 rounded-full border-2 z-10 flex items-center justify-center text-[10px] font-bold text-[var(--bg-primary)]"
                  style={{
                    borderColor: selectedPathway.color,
                    backgroundColor: selectedPathway.color,
                  }}
                >
                  {i + 1}
                </div>
                <div className="p-5 rounded-xl border border-[var(--border)] bg-[var(--bg-card)] hover:border-[var(--border-hover)] transition-all">
                  <div className="flex items-center gap-2 mb-2">
                    <span
                      className="text-[10px] px-2 py-0.5 rounded-full border"
                      style={{
                        borderColor: epic?.color || "#666",
                        color: epic?.color || "#666",
                      }}
                    >
                      {epic?.title}
                    </span>
                  </div>
                  <h3 className="text-lg font-semibold font-display mb-1">
                    {stop.title}
                  </h3>
                  <p className="text-sm text-[var(--text-secondary)] mb-3">
                    {stop.text}
                  </p>
                  <Link
                    href={stop.link}
                    className="text-xs text-[var(--accent-gold)] hover:underline"
                  >
                    Explore {epic?.title} →
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Insight */}
      <div
        className="mt-12 p-6 rounded-xl border text-center"
        style={{
          borderColor: `${selectedPathway.color}30`,
          backgroundColor: `${selectedPathway.color}08`,
        }}
      >
        <p className="text-sm text-[var(--text-secondary)] italic">
          &ldquo;The same questions recur because they are our questions.
          The epics do not answer them once — they answer them forever.&rdquo;
        </p>
      </div>
    </div>
  );
}
