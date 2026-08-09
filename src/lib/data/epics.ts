export interface Epic {
  slug: string;
  title: string;
  subtitle: string;
  tradition: string;
  region: string;
  era: string;
  author: string;
  language: string;
  verses: string;
  summary: string;
  themes: string[];
  keyCharacters: string[];
  color: string;
  accent: string;
}

export const epics: Epic[] = [
  {
    slug: "mahabharata",
    title: "Mahabharata",
    subtitle: "The Great Song of the Bhārata",
    tradition: "Hindu",
    region: "Indian Subcontinent",
    era: "~400 BCE – 400 CE",
    author: "Vyasa (attributed)",
    language: "Sanskrit",
    verses: "~100,000 verses",
    summary:
      "The longest epic poem ever composed. A dynastic struggle between the Pandavas and Kauravas for the throne of Hastinapura, weaving together philosophy, mythology, and the doctrine of dharma into an unparalleled tapestry of human conflict and divine intervention.",
    themes: ["Dharma", "Duty vs Desire", "War", "Fate", "Cosmic Order"],
    keyCharacters: [
      "Yudhishthira",
      "Arjuna",
      "Krishna",
      "Bhishma",
      "Drona",
      "Karna",
      "Duryodhana",
    ],
    color: "#B91C1C",
    accent: "#FCA5A5",
  },
  {
    slug: "ramayana",
    title: "Ramayana",
    subtitle: "Rama's Journey",
    tradition: "Hindu",
    region: "Indian Subcontinent",
    era: "~500 BCE – 100 BCE",
    author: "Valmiki (attributed)",
    language: "Sanskrit",
    verses: "~24,000 verses",
    summary:
      "The exile, abduction, and rescue of Sita by Rama, aided by the monkey-god Hanuman. A foundational narrative of ideal kingship, devotion, and the cosmic battle between good and evil that has shaped Southeast Asian culture for millennia.",
    themes: ["Devotion", "Exile", "Ideal Kingship", "Good vs Evil", "Love"],
    keyCharacters: [
      "Rama",
      "Sita",
      "Hanuman",
      "Lakshmana",
      "Ravana",
      "Bharata",
    ],
    color: "#D97706",
    accent: "#FDE68A",
  },
  {
    slug: "iliad",
    title: "Iliad",
    subtitle: "The Song of Ilion",
    tradition: "Greek",
    region: "Mediterranean",
    era: "~8th century BCE",
    author: "Homer (attributed)",
    language: "Ancient Greek",
    verses: "~15,700 lines",
    summary:
      "The climactic weeks of the Trojan War, centered on Achilles' wrath and its devastating consequences. A meditation on glory, mortality, and the terrible cost of human pride set against the backdrop of divine intervention.",
    themes: [
      "Glory (Kleos)",
      "Wrath",
      "Mortality",
      "Honor",
      "Fate",
      "Divine Will",
    ],
    keyCharacters: [
      "Achilles",
      "Hector",
      "Patroclus",
      "Agamemnon",
      "Odysseus",
      "Priam",
    ],
    color: "#1D4ED8",
    accent: "#93C5FD",
  },
  {
    slug: "odyssey",
    title: "Odyssey",
    subtitle: "The Journey Home",
    tradition: "Greek",
    region: "Mediterranean",
    era: "~8th century BCE",
    author: "Homer (attributed)",
    language: "Ancient Greek",
    verses: "~12,100 lines",
    summary:
      "Odysseus' ten-year struggle to return home after the Trojan War. A tale of cunning, perseverance, and longing that defined the archetypal hero's journey and influenced storytelling across every subsequent era.",
    themes: [
      "Homecoming",
      "Cunning (Metis)",
      "Perseverance",
      "Identity",
      "Hospitality",
    ],
    keyCharacters: [
      "Odysseus",
      "Penelope",
      "Telemachus",
      "Circe",
      "Calypso",
      "Athena",
    ],
    color: "#047857",
    accent: "#6EE7B7",
  },
  {
    slug: "aeneid",
    title: "Aeneid",
    subtitle: "The Song of Aeneas",
    tradition: "Roman",
    region: "Mediterranean",
    era: "~29–19 BCE",
    author: "Virgil",
    language: "Latin",
    verses: "~9,800 lines",
    summary:
      "The legendary journey of Aeneas from fallen Troy to the founding of Rome. A national epic that bridges Greek mythology and Roman destiny, exploring duty, sacrifice, and the weight of prophecy.",
    themes: [
      "Duty (Pietas)",
      "Fate",
      "Sacrifice",
      "Founding Myth",
      "War",
    ],
    keyCharacters: ["Aeneas", "Dido", "Turnus", "Anchises", "Ascanius"],
    color: "#7C3AED",
    accent: "#C4B5FD",
  },
  {
    slug: "beowulf",
    title: "Beowulf",
    subtitle: "The Monster Slayer",
    tradition: "Anglo-Saxon",
    region: "Northern Europe",
    era: "~700–1000 CE",
    author: "Anonymous",
    language: "Old English",
    verses: "~3,000 lines",
    summary:
      "A Scandinavian hero battles monsters, dragons, and the passage of time. The oldest surviving epic in Old English, it bridges pagan warrior culture and Christian moral reflection.",
    themes: [
      "Heroism",
      "Mortality",
      "Monster-Slaying",
      "Loyalty",
      "Aging",
      "Legacy",
    ],
    keyCharacters: ["Beowulf", "Grendel", "Grendel's Mother", "Hrothgar", "Wiglaf"],
    color: "#B45309",
    accent: "#FCD34D",
  },
  {
    slug: "gilgamesh",
    title: "Epic of Gilgamesh",
    subtitle: "He Who Saw the Deep",
    tradition: "Mesopotamian",
    region: "Middle East",
    era: "~2100 BCE (oldest)",
    author: "Shin-leqi-unninni (attributed)",
    language: "Akkadian (Sumerian sources)",
    verses: "~3,200 lines",
    summary:
      "The world's oldest known epic. A king's quest for immortality after the death of his beloved friend Enkidu, confronting the limits of human ambition and the inevitability of death.",
    themes: [
      "Mortality",
      "Friendship",
      "Civilization vs Nature",
      "Quest",
      "Legacy",
    ],
    keyCharacters: ["Gilgamesh", "Enkidu", "Utnapishtim", "Shamhat", "Humbaba"],
    color: "#0F766E",
    accent: "#5EEAD4",
  },
  {
    slug: "divine-comedy",
    title: "Divine Comedy",
    subtitle: "Commedia",
    tradition: "Christian / European",
    region: "Italy",
    era: "~1308–1320",
    author: "Dante Alighieri",
    language: "Italian",
    verses: "~14,233 lines",
    summary:
      "A journey through Hell, Purgatory, and Paradise — a cosmic exploration of sin, redemption, and divine love that codified medieval theology into an unforgettable narrative.",
    themes: [
      "Sin",
      "Redemption",
      "Divine Love",
      "Justice",
      "The Afterlife",
    ],
    keyCharacters: ["Dante", "Virgil", "Beatrice", "Ulysses", "Count Ugolino"],
    color: "#BE123C",
    accent: "#FDA4AF",
  },
];

export function getEpicBySlug(slug: string): Epic | undefined {
  return epics.find((e) => e.slug === slug);
}
