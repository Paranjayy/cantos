export interface TimelineEvent {
  id: string;
  epic: string;
  title: string;
  description: string;
  era: string;
  sortYear: number;
  characters: string[];
  significance: "major" | "minor";
}

export const timelineEvents: TimelineEvent[] = [
  // Gilgamesh (oldest)
  { id: "g1", epic: "gilgamesh", title: "Gilgamesh becomes King", description: "Gilgamesh rules Uruk as a tyrant, two-thirds god and one-third mortal.", era: "~2700 BCE", sortYear: -2700, characters: ["gilgamesh"], significance: "major" },
  { id: "g2", epic: "gilgamesh", title: "Enkidu created", description: "The gods create Enkidu as a counterbalance to Gilgamesh's tyranny.", era: "~2700 BCE", sortYear: -2699, characters: ["gilgamesh", "enkidu"], significance: "major" },
  { id: "g3", epic: "gilgamesh", title: "Killing of Humbaba", description: "Gilgamesh and Enkidu slay the guardian of the Cedar Forest.", era: "~2700 BCE", sortYear: -2698, characters: ["gilgamesh", "enkidu"], significance: "major" },
  { id: "g4", epic: "gilgamesh", title: "Death of Enkidu", description: "Enkidu dies after the gods condemn him. Gilgamesh is devastated.", era: "~2700 BCE", sortYear: -2697, characters: ["gilgamesh", "enkidu"], significance: "major" },
  { id: "g5", epic: "gilgamesh", title: "Quest for immortality", description: "Gilgamesh journeys to find Utnapishtim, the only mortal granted eternal life.", era: "~2700 BCE", sortYear: -2696, characters: ["gilgamesh"], significance: "major" },

  // Mahabharata
  { id: "m1", epic: "mahabharata", title: "Birth of Bhishma", description: "Devavrata is born to Shantanu and Ganga. Later takes his terrible vow.", era: "~3100 BCE", sortYear: -3100, characters: ["shantanu", "ganga", "devavrata"], significance: "major" },
  { id: "m2", epic: "mahabharata", title: "Birth of the Pandavas & Kauravas", description: "Dhritarashtra's 100 sons and Pandu's 5 sons are born.", era: "~3050 BCE", sortYear: -3050, characters: ["dhritarashtra", "pandu", "yudhishthira", "duryodhana"], significance: "major" },
  { id: "m3", epic: "mahabharata", title: "Draupadi's Swayamvara", description: "Arjuna wins Draupadi's hand by stringing Shiva's bow.", era: "~3030 BCE", sortYear: -3030, characters: ["arjuna", "draupadi"], significance: "major" },
  { id: "m4", epic: "mahabharata", title: "The Dice Game", description: "Duryodhana tricks Yudhishthira into gambling away the kingdom and Draupadi.", era: "~3025 BCE", sortYear: -3025, characters: ["yudhishthira", "duryodhana", "draupadi"], significance: "major" },
  { id: "m5", epic: "mahabharata", title: "The 13-Year Exile", description: "The Pandavas live in exile for 13 years, the 13th incognito.", era: "~3025-3012 BCE", sortYear: -3020, characters: ["yudhishthira", "arjuna", "bima", "draupadi"], significance: "major" },
  { id: "m6", epic: "mahabharata", title: "Krishna's Failed Peace Mission", description: "Krishna tries to negotiate peace. Duryodhana refuses.", era: "~3012 BCE", sortYear: -3012, characters: ["krishna", "duryodhana"], significance: "major" },
  { id: "m7", epic: "mahabharata", title: "Bhagavad Gita", description: "On the battlefield, Krishna reveals the cosmic truth to Arjuna.", era: "~3012 BCE", sortYear: -3011, characters: ["krishna", "arjuna"], significance: "major" },
  { id: "m8", epic: "mahabharata", title: "Battle of Kurukshetra", description: "18-day war between Pandavas and Kauravas. Millions die.", era: "~3012 BCE", sortYear: -3011, characters: ["arjuna", "duryodhana", "bhishma", "karna", "draupadi"], significance: "major" },
  { id: "m9", epic: "mahabharata", title: "Draupadi's Vow", description: "Draupadi vows to wash her hair with Dushasana's blood.", era: "~3025 BCE", sortYear: -3024, characters: ["draupadi", "dushasana"], significance: "major" },

  // Ramayana
  { id: "r1", epic: "ramayana", title: "Rama breaks Shiva's bow", description: "Rama wins Sita's hand at the Swayamvara of Mithila.", era: "~5100 BCE", sortYear: -5100, characters: ["rama", "sita"], significance: "major" },
  { id: "r2", epic: "ramayana", title: "Rama's Exile", description: "Rama is exiled for 14 years due to Kaikeyi's demands.", era: "~5100 BCE", sortYear: -5099, characters: ["rama", "sita", "lakshmana"], significance: "major" },
  { id: "r3", epic: "ramayana", title: "Abduction of Sita", description: "Ravana abducts Sita to Lanka.", era: "~5090 BCE", sortYear: -5090, characters: ["sita", "ravana"], significance: "major" },
  { id: "r4", epic: "ramayana", title: "Hanuman's leap to Lanka", description: "Hanuman leaps across the ocean to find Sita.", era: "~5090 BCE", sortYear: -5089, characters: ["hanuman", "sita"], significance: "major" },
  { id: "r5", epic: "ramayana", title: "Battle of Lanka", description: "Rama's monkey army fights Ravana's demons. Ravana is slain.", era: "~5086 BCE", sortYear: -5086, characters: ["rama", "ravana", "hanuman"], significance: "major" },

  // Iliad
  { id: "i1", epic: "iliad", title: "Judgment of Paris", description: "Paris chooses Aphrodite as the fairest goddess, winning Helen.", era: "~1200 BCE", sortYear: -1200, characters: [], significance: "major" },
  { id: "i2", epic: "iliad", title: "The Trojan War begins", description: "Greek fleet sails to Troy to reclaim Helen.", era: "~1194 BCE", sortYear: -1194, characters: ["achilles", "agamemnon"], significance: "major" },
  { id: "i3", epic: "iliad", title: "Achilles withdraws from battle", description: "Agamemnon takes Briseis. Achilles refuses to fight.", era: "~1184 BCE", sortYear: -1184, characters: ["achilles", "agamemnon"], significance: "major" },
  { id: "i4", epic: "iliad", title: "Death of Patroclus", description: "Patroclus fights in Achilles' armor and is killed by Hector.", era: "~1184 BCE", sortYear: -1183, characters: ["patroclus", "achilles", "hector"], significance: "major" },
  { id: "i5", epic: "iliad", title: "Achilles kills Hector", description: "Achilles returns to battle, kills Hector, and drags his body.", era: "~1184 BCE", sortYear: -1182, characters: ["achilles", "hector"], significance: "major" },
  { id: "i6", epic: "iliad", title: "Death of Achilles", description: "Paris kills Achilles with an arrow guided by Apollo.", era: "~1180 BCE", sortYear: -1180, characters: ["achilles"], significance: "major" },

  // Odyssey (after Iliad)
  { id: "o1", epic: "odyssey", title: "Fall of Troy", description: "The Trojan Horse. Troy falls to the Greeks.", era: "~1180 BCE", sortYear: -1179, characters: ["odysseus"], significance: "major" },
  { id: "o2", epic: "odyssey", title: "Odyssey begins", description: "Odysseus sets sail for Ithaca. Poseidon curses his journey.", era: "~1180 BCE", sortYear: -1178, characters: ["odysseus"], significance: "major" },
  { id: "o3", epic: "odyssey", title: "Polyphemus", description: "Odysseus blinds the Cyclops. Poseidon's wrath intensifies.", era: "~1175 BCE", sortYear: -1175, characters: ["odysseus"], significance: "major" },
  { id: "o4", epic: "odyssey", title: "Circe's island", description: "Circe turns Odysseus' crew into pigs. He stays a year.", era: "~1172 BCE", sortYear: -1172, characters: ["odysseus", "circe"], significance: "major" },
  { id: "o5", epic: "odyssey", title: "Descent to Underworld", description: "Odysseus visits the land of the dead to consult Tiresias.", era: "~1171 BCE", sortYear: -1171, characters: ["odysseus"], significance: "major" },
  { id: "o6", epic: "odyssey", title: "Return to Ithaca", description: "After 10 years, Odysseus returns home disguised as a beggar.", era: "~1170 BCE", sortYear: -1170, characters: ["odysseus", "penelope", "telemachus"], significance: "major" },
  { id: "o7", epic: "odyssey", title: "Slaughter of the suitors", description: "Odysseus reveals himself and kills all the suitors.", era: "~1170 BCE", sortYear: -1169, characters: ["odysseus", "penelope"], significance: "major" },

  // Aeneid
  { id: "a1", epic: "aeneid", title: "Fall of Troy", description: "Aeneas escapes burning Troy with his father on his back.", era: "~1180 BCE", sortYear: -1179, characters: ["aeneas"], significance: "major" },
  { id: "a2", epic: "aeneid", title: "Dido and Aeneas", description: "Aeneas and Dido fall in love in Carthage. He leaves her.", era: "~1175 BCE", sortYear: -1175, characters: ["aeneas", "dido"], significance: "major" },
  { id: "a3", epic: "aeneid", title: "Battle of Latium", description: "Aeneas wages war against Turnus and the Latins.", era: "~1170 BCE", sortYear: -1170, characters: ["aeneas", "turnus"], significance: "major" },

  // Beowulf
  { id: "b1", epic: "beowulf", title: "Beowulf arrives in Denmark", description: "Beowulf sails to Heorot to fight Grendel.", era: "~500 CE", sortYear: 500, characters: ["beowulf", "hrothgar"], significance: "major" },
  { id: "b2", epic: "beowulf", title: "Kills Grendel", description: "Beowulf tears off Grendel's arm with bare hands.", era: "~500 CE", sortYear: 501, characters: ["beowulf", "grendel"], significance: "major" },
  { id: "b3", epic: "beowulf", title: "Kills Grendel's Mother", description: "Beowulf dives into the mere and slays Grendel's mother.", era: "~500 CE", sortYear: 502, characters: ["beowulf"], significance: "major" },
  { id: "b4", epic: "beowulf", title: "Fights the Dragon", description: "Fifty years later, Beowulf fights a dragon and dies.", era: "~550 CE", sortYear: 550, characters: ["beowulf", "wiglaf"], significance: "major" },

  // Divine Comedy
  { id: "dc1", epic: "divine-comedy", title: "Dante's journey begins", description: "Dante is lost in a dark wood and meets Virgil.", era: "~1300 CE", sortYear: 1300, characters: ["dante", "virgil"], significance: "major" },
  { id: "dc2", epic: "divine-comedy", title: "Descent into Hell", description: "Dante descends through the nine circles of Hell.", era: "~1300 CE", sortYear: 1300, characters: ["dante", "virgil"], significance: "major" },
  { id: "dc3", epic: "divine-comedy", title: "Ascent of Purgatory", description: "Dante climbs the mountain of Purgatory.", era: "~1300 CE", sortYear: 1300, characters: ["dante", "virgil"], significance: "major" },
  { id: "dc4", epic: "divine-comedy", title: "Paradise", description: "Beatrice guides Dante through Heaven.", era: "~1300 CE", sortYear: 1301, characters: ["dante", "beatrice"], significance: "major" },

  // More Mahabharata
  { id: "m10", epic: "mahabharata", title: "Bhishma's Oath", description: "Devavrata vows celibacy so his father can marry Satyavati. He becomes Bhishma — 'the terrible'.", era: "~3100 BCE", sortYear: -3099, characters: ["devavrata", "shantanu"], significance: "major" },
  { id: "m11", epic: "mahabharata", title: "Birth of Karna", description: "Kunti invokes Surya before marriage. Karna is born and abandoned.", era: "~3060 BCE", sortYear: -3060, characters: ["karna", "kunti"], significance: "major" },
  { id: "m12", epic: "mahabharata", title: "Killing of Kamsa", description: "Krishna kills his evil uncle Kamsa in Mathura.", era: "~3040 BCE", sortYear: -3040, characters: ["krishna"], significance: "major" },
  { id: "m13", epic: "mahabharata", title: "Burning of Lakshagriha", description: "Duryodhana tries to burn the Pandavas alive in a lac palace. They escape.", era: "~3025 BCE", sortYear: -3024, characters: ["duryodhana", "yudhishthira"], significance: "major" },
  { id: "m14", epic: "mahabharata", title: "Draupadi Swayamvara", description: "Arjuna wins Draupadi by stringing Shiva's bow. She becomes wife to all five Pandavas.", era: "~3025 BCE", sortYear: -3023, characters: ["arjuna", "draupadi"], significance: "major" },

  // More Ramayana
  { id: "r6", epic: "ramayana", title: "Building the Bridge", description: "Hanuman and the monkey army build a bridge (Rama Setu) across the ocean to Lanka.", era: "~5088 BCE", sortYear: -5088, characters: ["rama", "hanuman"], significance: "major" },
  { id: "r7", epic: "ramayana", title: "Ravana's Death", description: "Rama kills Ravana with a divine arrow. Sita is freed.", era: "~5086 BCE", sortYear: -5085, characters: ["rama", "ravana", "sita"], significance: "major" },
  { id: "r8", epic: "ramayana", title: "Sita's Fire Test", description: "Sita proves her purity by walking through fire. Agni (fire god) testifies.", era: "~5086 BCE", sortYear: -5085, characters: ["sita", "rama"], significance: "major" },
  { id: "r9", epic: "ramayana", title: "Sita's Final Departure", description: "Sita leaves the world, returning to the earth (her mother).", era: "~5080 BCE", sortYear: -5080, characters: ["sita"], significance: "major" },

  // More Odyssey
  { id: "o8", epic: "odyssey", title: "Scylla and Charybdis", description: "Odysseus navigates between a six-headed monster and a deadly whirlpool.", era: "~1173 BCE", sortYear: -1173, characters: ["odysseus"], significance: "major" },
  { id: "o9", epic: "odyssey", title: "Lotus-Eaters", description: "Odysseus' crew eat the lotus fruit and forget their desire to return home.", era: "~1178 BCE", sortYear: -1178, characters: ["odysseus"], significance: "major" },

  // More Iliad
  { id: "i7", epic: "iliad", title: "The Trojan Horse", description: "The Greeks build a wooden horse and hide soldiers inside.", era: "~1180 BCE", sortYear: -1179, characters: ["odysseus"], significance: "major" },
  { id: "i8", epic: "iliad", title: "Death of Priam", description: "Neoptolemus kills Priam at the altar of Zeus. Troy falls.", era: "~1180 BCE", sortYear: -1179, characters: ["priam"], significance: "major" },

  // More Gilgamesh
  { id: "g6", epic: "gilgamesh", title: "Killing of the Bull of Heaven", description: "Ishtar sends the Bull of Heaven. Gilgamesh and Enkidu slay it.", era: "~2700 BCE", sortYear: -2697, characters: ["gilgamesh", "enkidu", "ishtar"], significance: "major" },
  { id: "g7", epic: "gilgamesh", title: "Meeting Utnapishtim", description: "Gilgamesh finds the one immortal man and learns about the great flood.", era: "~2700 BCE", sortYear: -2696, characters: ["gilgamesh", "utnapishtim"], significance: "major" },

  // More Aeneid
  { id: "a4", epic: "aeneid", title: "Aeneas in the Underworld", description: "Anchises shows Aeneas the future of Rome in the Underworld.", era: "~1175 BCE", sortYear: -1174, characters: ["aeneas", "anchises"], significance: "major" },
  { id: "a5", epic: "aeneid", title: "The Shield of Aeneas", description: "Vulcan forges a shield depicting Rome's future, including Augustus' victory.", era: "~1171 BCE", sortYear: -1171, characters: ["aeneas"], significance: "major" },

  // More Beowulf
  { id: "b5", epic: "beowulf", title: "Beowulf becomes King", description: "After Hygelac's death, Beowulf rules the Geats for 50 years.", era: "~505 CE", sortYear: 505, characters: ["beowulf"], significance: "major" },

  // More Divine Comedy
  { id: "dc5", epic: "divine-comedy", title: "Meeting with Ulysses", description: "Dante meets Ulysses (Odysseus) in the Eighth Circle of Hell.", era: "~1300 CE", sortYear: 1300, characters: ["dante", "odysseus"], significance: "major" },
  { id: "dc6", epic: "divine-comedy", title: "Dante meets Beatrice", description: "At the top of Purgatory, Virgil leaves and Beatrice appears.", era: "~1300 CE", sortYear: 1300, characters: ["dante", "beatrice", "virgil"], significance: "major" },
];
