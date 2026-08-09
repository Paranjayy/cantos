export interface ComparisonTheme {
  id: string;
  title: string;
  description: string;
  epics: {
    slug: string;
    expression: string;
    example: string;
  }[];
}

export const comparisons: ComparisonTheme[] = [
  {
    id: "exile",
    title: "Exile & Return",
    description:
      "Nearly every epic features a hero banished from home. Exile is the crucible of identity — the hero returns transformed, or fails to return at all.",
    epics: [
      { slug: "ramayana", expression: "Rama's 14-year exile", example: "Rama, Sita, and Lakshmana are banished to the Dandaka forest by Kaikeyi's demand." },
      { slug: "odyssey", expression: "Odysseus' 10-year journey home", example: "Odysseus is cursed by Poseidon and cannot return to Ithaca for a decade." },
      { slug: "mahabharata", expression: "Pandavas' 13-year exile", example: "After losing the dice game, the Pandavas live in the forest and then incognito." },
      { slug: "aeneid", expression: "Aeneas' flight from Troy", example: "Aeneas leaves burning Troy to found a new homeland in Italy." },
    ],
  },
  {
    id: "wrath",
    title: "Wrath & Its Consequences",
    description:
      "Uncontrolled anger destroys the angry and everyone around them. The epics explore wrath as both a divine force and a human failing.",
    epics: [
      { slug: "iliad", expression: "Achilles' wrath (mēnis)", example: "Achilles' withdrawal from battle costs thousands of Greek lives." },
      { slug: "mahabharata", expression: "Draupadi's vow of revenge", example: "After being humiliated, Draupadi vows to wash her hair with Dushasana's blood." },
      { slug: "ramayana", expression: "Ravana's hubris", example: "Ravana's desire for Sita leads to his destruction and Lanka's fall." },
      { slug: "beowulf", expression: "The dragon's fury", example: "A stolen cup drives the dragon to burn the Geatish homeland." },
    ],
  },
  {
    id: "duty",
    title: "Duty vs. Desire",
    description:
      "The tension between what one must do and what one wants to do drives the most dramatic moments in epic literature.",
    epics: [
      { slug: "mahabharata", expression: "Dharma — the cosmic law", example: "Yudhishthira's duty as king conflicts with his personal attachments. Arjuna's duty as warrior conflicts with killing his kin." },
      { slug: "ramayana", expression: "Rama's obedience to his father", example: "Rama chooses duty over comfort, accepting exile without protest." },
      { slug: "iliad", expression: "Achilles' choice: glory or home", example: "Achilles chooses a short, glorious life over a long, peaceful one." },
      { slug: "aeneid", expression: "Aeneas' pietas (duty to gods and state)", example: "Aeneas abandons Dido to fulfill his destiny in Italy." },
    ],
  },
  {
    id: "mortality",
    title: "Mortality & Immortality",
    description:
      "The oldest human question: how do we face death? The epics offer different answers — through legacy, through gods, through acceptance.",
    epics: [
      { slug: "gilgamesh", expression: "The quest for eternal life", example: "Gilgamesh searches for immortality after Enkidu's death, only to learn that death is the human condition." },
      { slug: "iliad", expression: "Glory (kleos) as immortality", example: "Achilles chooses a short life of glory over a long obscurity — his name will live forever." },
      { slug: "mahabharata", expression: "The cycle of rebirth", example: "The Bhagavad Gita teaches that the soul is eternal — death is transformation, not ending." },
      { slug: "divine-comedy", expression: "The afterlife mapped", example: "Dante literally journeys through Hell, Purgatory, and Paradise — death is not the end but a beginning." },
    ],
  },
  {
    id: "divine-intervention",
    title: "Divine Intervention",
    description:
      "Gods walk among mortals in epic literature — sometimes as allies, sometimes as obstacles, sometimes as the plot itself.",
    epics: [
      { slug: "iliad", expression: "The gods take sides", example: "Athena helps Odysseus, Apollo guides Paris's arrow, Aphrodite rescues Aeneas." },
      { slug: "mahabharata", expression: "Krishna's cosmic revelation", example: "Krishna reveals his divine form to Arjuna, showing the entire universe within himself." },
      { slug: "ramayana", expression: "Rama as avatar", example: "Rama is the 7th avatar of Vishnu — his life is a divine play (lila)." },
      { slug: "gilgamesh", expression: "Ishtar's wrath", example: "The goddess Ishtar sends the Bull of Heaven when Gilgamesh rejects her." },
    ],
  },
  {
    id: "friendship",
    title: "Friendship & Brotherhood",
    description:
      "The bonds between companions — forged in battle, tested by circumstance, broken by death — are among epic literature's most powerful moments.",
    epics: [
      { slug: "gilgamesh", expression: "Gilgamesh and Enkidu", example: "Their friendship transforms Gilgamesh from tyrant to seeker. Enkidu's death drives the entire second half of the epic." },
      { slug: "iliad", expression: "Achilles and Patroclus", example: "Patroclus' death is the Iliad's turning point — Achilles' grief is more powerful than his wrath." },
      { slug: "mahabharata", expression: "The five Pandavas", example: "Despite differences, the Pandavas remain united — their bond is unbreakable even through exile and war." },
      { slug: "odyssey", expression: "Odysseus and Eumaeus", example: "The faithful swineherd who waits 20 years for his master's return." },
    ],
  },
];
