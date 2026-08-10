export interface Character {
  id: string;
  name: string;
  title: string;
  epic: string;
  tradition: string;
  role: string;
  description: string;
  traits: string[];
  keyEvents: string[];
  relationships: { name: string; type: string }[];
  archetype: string;
}

export const characters: Character[] = [
  // Mahabharata
  {
    id: "arjuna",
    name: "Arjuna",
    title: "The Peerless Archer",
    epic: "mahabharata",
    tradition: "Hindu",
    role: "Protagonist / Pandava",
    description:
      "Third of the five Pandava brothers, son of Indra and Kunti. Central figure of the Bhagavad Gita, where Krishna reveals the path of duty to him on the battlefield of Kurukshetra.",
    traits: ["Archery", "Devotion", "Conflict", "Loyalty", "Doubt"],
    keyEvents: [
      "Receives the Bhagavad Gita",
      "Wins Draupadi's hand",
      "Exile and encounters with Shiva",
      "Battles Karna",
      "The Chakravyuha (Indra's formation)",
    ],
    relationships: [
      { name: "Krishna", type: "Charioteer / Friend / Guide" },
      { name: "Draupadi", type: "Wife" },
      { name: "Subhadra", type: "Wife" },
      { name: "Karna", type: "Rival / Unknown Brother" },
      { name: "Abhimanyu", type: "Son" },
    ],
    archetype: "The Reluctant Hero",
  },
  {
    id: "krishna",
    name: "Krishna",
    title: "The Divine One",
    epic: "mahabharata",
    tradition: "Hindu",
    role: "Divine Guide / Charioteer",
    description:
      "Eighth avatar of Vishnu. Arjuna's charioteer and spiritual guide. Reveals the cosmic truth of the Bhagavad Gita. Embodies divine play (lila) — simultaneously playful and profoundly serious.",
    traits: ["Divine Wisdom", "Playfulness", "Strategy", "Compassion", "Power"],
    keyEvents: [
      "Reveals the Bhagavad Gita to Arjuna",
      "Kills Kamsa",
      "Lifts Govardhana Hill",
      "Sends diplomatic missions to prevent war",
      "Kills Shishupala",
    ],
    relationships: [
      { name: "Arjuna", type: "Friend / Protégé" },
      { name: "Draupadi", type: "Protector / Friend" },
      { name: "Balarama", type: "Brother" },
      { name: "Subhadra", type: "Sister" },
    ],
    archetype: "The Divine Trickster",
  },
  {
    id: "yudhishthira",
    name: "Yudhishthira",
    title: "Dharmaraja",
    epic: "mahabharata",
    tradition: "Hindu",
    role: "Eldest Pandava / King",
    description:
      "Son of Dharma (Yama). Embodies righteousness and justice, but his fatal flaw — gambling — leads to the Pandavas' exile and the eventual war. His moral compass is the epic's ethical spine.",
    traits: ["Justice", "Wisdom", "Gambling", "Patience", "Duty"],
    keyEvents: [
      "Wins the dice game but is cheated",
      "The great exile",
      "Crowned Emperor after the war",
      "Journey to heaven (walks with a dog)",
    ],
    relationships: [
      { name: "Draupadi", type: "Wife" },
      { name: "Arjuna", type: "Brother" },
      { name: "Duryodhana", type: "Rival" },
      { name: "Krishna", type: "Guide" },
    ],
    archetype: "The Just King",
  },
  {
    id: "karna",
    name: "Karna",
    title: "The Tragic Hero",
    epic: "mahabharata",
    tradition: "Hindu",
    role: "Kaurava Champion / Secret Pandava",
    description:
      "Born to Kunti and Surya before her marriage, abandoned and raised by a low-caste family. Fought against his own brothers without knowing the truth. The epic's most tragic figure — noble, generous, yet doomed by circumstance.",
    traits: ["Generosity", "Tragedy", "Loyalty", "Pride", "Misfortune"],
    keyEvents: [
      "Abandoned at birth",
      "Rejected by Parashurama as student",
      "Cursed to forget mantra in battle",
      "Kills Ghatotkacha",
      "Slain by Arjuna with Krishna's help",
    ],
    relationships: [
      { name: "Kunti", type: "Mother (secret)" },
      { name: "Surya", type: "Father (divine)" },
      { name: "Duryodhana", type: "Friend / Ally" },
      { name: "Arjuna", type: "Unknown Brother / Rival" },
    ],
    archetype: "The Tragic Outsider",
  },
  {
    id: "duryodhana",
    name: "Duryodhana",
    title: "The Kaurava King",
    epic: "mahabharata",
    tradition: "Hindu",
    role: "Primary Antagonist",
    description:
      "Eldest of the hundred Kauravas. Consumed by jealousy and ambition, he engineers the exile and refuses all attempts at reconciliation. Not pure evil — a human driven by insecurity, pride, and the poison of Shakuni's counsel.",
    traits: ["Ambition", "Jealousy", "Pride", "Cunning", "Fearlessness"],
    keyEvents: [
      "Wins the rigged dice game",
      "Humiliates Draupadi",
      "Refuses to return the kingdom",
      "Fights Bhima in the final duel",
    ],
    relationships: [
      { name: "Dhritarashtra", type: "Father" },
      { name: "Gandhari", type: "Mother" },
      { name: "Shakuni", type: "Uncle / Advisor" },
      { name: "Bhima", type: "Nemesis" },
      { name: "Karna", type: "Champion / Friend" },
    ],
    archetype: "The Jealous Shadow",
  },

  // Ramayana
  {
    id: "rama",
    name: "Rama",
    title: "The Ideal Man",
    epic: "ramayana",
    tradition: "Hindu",
    role: "Protagonist / 7th Avatar of Vishnu",
    description:
      "The seventh avatar of Vishnu, prince of Ayodhya, exile and hero. Embodies dharma, duty, and ideal kingship — but his perfection makes him a figure of debate as much as devotion.",
    traits: ["Duty", "Perfection", "Exile", "Courage", "Sacrifice"],
    keyEvents: [
      "Breaks Shiva's bow at Swayamvara",
      "Exiled for 14 years",
      "Loses Sita to Ravana",
      "Builds bridge to Lanka with monkey army",
      "Kills Ravana",
      "Rules as ideal king (Ram Rajya)",
    ],
    relationships: [
      { name: "Sita", type: "Wife" },
      { name: "Lakshmana", type: "Brother" },
      { name: "Hanuman", type: "Devotee" },
      { name: "Ravana", type: "Adversary" },
      { name: "Dasharatha", type: "Father" },
    ],
    archetype: "The Ideal Hero",
  },
  {
    id: "sita",
    name: "Sita",
    title: "The Embodiment of Devotion",
    epic: "ramayana",
    tradition: "Hindu",
    role: "Heroine / Princess of Mithila",
    description:
      "Born from the earth (furrow), she is Rama's wife and the moral heart of the Ramayana. Her abduction by Ravana drives the epic's central conflict. Her suffering and the tests of her purity remain among literature's most debated passages.",
    traits: ["Devotion", "Suffering", "Strength", "Purity", "Independence"],
    keyEvents: [
      "Chosen as Rama's wife (Swayamvara)",
      "Follows Rama into exile",
      "Abducted by Ravana",
      "Rescued from Lanka",
      "Proves her purity in fire",
      "Earth swallows her (final departure)",
    ],
    relationships: [
      { name: "Rama", type: "Husband" },
      { name: "Hanuman", type: "Rescuer" },
      { name: "Ravana", type: "Abductor" },
      { name: "Lakshmana", type: "Brother-in-law" },
    ],
    archetype: "The Abducted Beloved",
  },
  {
    id: "hanuman",
    name: "Hanuman",
    title: "The Devoted One",
    epic: "ramayana",
    tradition: "Hindu",
    role: "Divine Ally / Monkey God",
    description:
      "Son of Vayu (Wind God) and Anjana. The eternal devotee of Rama, whose boundless devotion gives him the power to leap across oceans, carry mountains, and burn Lanka. Symbol of selfless service.",
    traits: ["Devotion", "Strength", "Wisdom", "Humility", "Loyalty"],
    keyEvents: [
      "Leaps across the ocean to Lanka",
      "Finds Sita in the Ashoka grove",
      "Burns Lanka with his flaming tail",
      "Carries the mountain with healing herbs",
      "Carries Rama's message to Sita",
    ],
    relationships: [
      { name: "Rama", type: "Lord / Master" },
      { name: "Sita", type: "Charge to protect" },
      { name: "Bhima", type: "Half-brother (via Vayu)" },
    ],
    archetype: "The Eternal Devotee",
  },

  // Iliad
  {
    id: "achilles",
    name: "Achilles",
    title: "The Swift-Footed",
    epic: "iliad",
    tradition: "Greek",
    role: "Protagonist / Greek Champion",
    description:
      "Greatest warrior of the Trojan War. When Agamemnon takes his prize Briseis, his wrath turns the tide against the Greeks. His story is a meditation on glory, rage, and the cost of mortality.",
    traits: ["Wrath", "Glory", "Mortality", "Pride", "Love"],
    keyEvents: [
      "Refuses to fight (wrath)",
      "Patroclus dies in his armor",
      "Returns to battle, kills Hector",
      "Drags Hector's body",
      "Killed by Paris's arrow (heel)",
    ],
    relationships: [
      { name: "Patroclus", type: "Beloved Companion" },
      { name: "Agamemnon", type: "Rival Leader" },
      { name: "Hector", type: "Nemesis" },
      { name: "Thetis", type: "Mother (sea nymph)" },
    ],
    archetype: "The Tragic Warrior",
  },
  {
    id: "odysseus",
    name: "Odysseus",
    title: "The Man of Many Wiles",
    epic: "odyssey",
    tradition: "Greek",
    role: "Protagonist / King of Ithaca",
    description:
      "The cleverest of the Greek heroes. His ten-year journey home from Troy is the foundational story of Western literature — a tale of cunning, endurance, and the longing for home.",
    traits: ["Cunning", "Perseverance", "Wit", "Longing", "Adaptability"],
    keyEvents: [
      "Devises the Trojan Horse",
      "Blinds Polyphemus (the Cyclops)",
      "Survives Circe's magic",
      "Resists the Sirens' song",
      "Descends to the Underworld",
      "Returns home disguised as a beggar",
      "Slaughters the suitors",
    ],
    relationships: [
      { name: "Penelope", type: "Wife" },
      { name: "Telemachus", type: "Son" },
      { name: "Athena", type: "Patron Goddess" },
      { name: "Poseidon", type: "Adversary" },
      { name: "Circe", type: "Lover / Ally" },
    ],
    archetype: "The Cunning Survivor",
  },

  // Gilgamesh
  {
    id: "gilgamesh",
    name: "Gilgamesh",
    title: "King of Uruk",
    epic: "gilgamesh",
    tradition: "Mesopotamian",
    role: "Protagonist / King",
    description:
      "Two-thirds god, one-third mortal. The world's first literary hero — a tyrannical king transformed by friendship and grief into a seeker of immortality. His journey predates all other epics by over a millennium.",
    traits: ["Strength", "Grief", "Quest", "Pride", "Mortality"],
    keyEvents: [
      "Meets and befriends Enkidu",
      "Kills Humbaba",
      "Kills the Bull of Heaven",
      "Enkidu dies — Gilgamesh grieves",
      "Quest for immortality",
      "Finds Utnapishtim but loses the plant of youth",
      "Returns to Uruk, accepts mortality",
    ],
    relationships: [
      { name: "Enkidu", type: "Beloved Friend" },
      { name: "Shamhat", type: "Catalyst" },
      { name: "Utnapishtim", type: "Immortal Sage" },
      { name: "Ishtar", type: "Rejected Goddess" },
    ],
    archetype: "The Mortal God-King",
  },
  // Mahabharata - more
  {
    id: "bhishma",
    name: "Bhishma",
    title: "The Grandfather",
    epic: "mahabharata",
    tradition: "Hindu",
    role: "Kuru Patriarch / Commander",
    description:
      "Born Devavrata, he took a terrible vow of celibacy so his father could marry. The moral compass of the Kuru dynasty — forced to fight for the side he knows is wrong.",
    traits: ["Duty", "Vow", "Celibacy", "Loyalty", "Tragedy"],
    keyEvents: [
      "Takes the vow of celibacy",
      "Commands the Kaurava army",
      "Cannot kill his grandnephews (Pandavas)",
      "Lies on a bed of arrows for 58 days",
      "Receives Shantanu's death blessing",
    ],
    relationships: [
      { name: "Shantanu", type: "Father" },
      { name: "Ganga", type: "Mother" },
      { name: "Yudhishthira", type: "Grandnephew" },
      { name: "Duryodhana", type: "Grandnephew" },
    ],
    archetype: "The Bound Warrior",
  },
  {
    id: "bheema",
    name: "Bhima",
    title: "The Strongest",
    epic: "mahabharata",
    tradition: "Hindu",
    role: "Second Pandava / Warrior",
    description:
      "Son of Vayu, the Wind God. Known for his immense physical strength, love of food, and fierce loyalty. He kills all 100 Kauravas.",
    traits: ["Strength", "Loyalty", "Food", "Fury", "Brotherhood"],
    keyEvents: [
      "Poisoned by Duryodhana as a child",
      "Kills all 100 Kauravas",
      "Kills Dushasana (tears out his heart)",
      "Kills Duryodhana in final duel",
      "Breaks Bhima's thigh oath",
    ],
    relationships: [
      { name: "Yudhishthira", type: "Brother" },
      { name: "Arjuna", type: "Brother" },
      { name: "Draupadi", type: "Wife" },
      { name: "Duryodhana", type: "Nemesis" },
    ],
    archetype: "The Devoted Destroyer",
  },
  // Ramayana - more
  {
    id: "bharata-r",
    name: "Bharata",
    title: "The Devoted Brother",
    epic: "ramayana",
    tradition: "Hindu",
    role: "Prince of Ayodhya / Regent",
    description:
      "Son of Kaikeyi who demanded Rama's exile. Despite gaining the throne, Bharata refuses to rule and instead serves as Rama's regent for 14 years.",
    traits: ["Devotion", "Selflessness", "Duty", "Humility"],
    keyEvents: [
      "Refuses the throne",
      "Governs as Rama's regent",
      "Rules from Nandigrama (not the palace)",
      "Waits for Rama's return",
    ],
    relationships: [
      { name: "Rama", type: "Brother" },
      { name: "Kaikeyi", type: "Mother" },
      { name: "Dasharatha", type: "Father" },
    ],
    archetype: "The Selfless Servant",
  },
  // Iliad - more
  {
    id: "hector",
    name: "Hector",
    title: "Troy's Champion",
    epic: "iliad",
    tradition: "Greek",
    role: "Trojan Prince / Commander",
    description:
      "The greatest warrior of Troy, defender of his city and family. Unlike Achilles, Hector fights not for personal glory but for duty. His death is the Iliad's emotional climax.",
    traits: ["Duty", "Honor", "Courage", "Family", "Tragedy"],
    keyEvents: [
      "Kills Patroclus (mistaken for Achilles)",
      "Chased around Troy by Achilles",
      "Faces Achilles alone",
      "Killed by Achilles",
      "Body desecrated by Achilles",
      "Priam ransoms Hector's body",
    ],
    relationships: [
      { name: "Priam", type: "Father" },
      { name: "Andromache", type: "Wife" },
      { name: "Achilles", type: "Nemesis" },
      { name: "Paris", type: "Brother" },
    ],
    archetype: "The Dutiful Defender",
  },
  {
    id: "penelope",
    name: "Penelope",
    title: "The Faithful Wife",
    epic: "odyssey",
    tradition: "Greek",
    role: "Queen of Ithaca",
    description:
      "Odysseus' wife, who waits 20 years for his return. She is not merely passive — she outwits the suitors with her weaving trick and tests Odysseus' identity upon his return.",
    traits: ["Patience", "Cunning", "Loyalty", "Wit", "Endurance"],
    keyEvents: [
      "Waits 20 years for Odysseus",
      "Weaves and unravels Laertes' shroud",
      "Tests Odysseus with the secret of their bed",
      "Reunites with Odysseus",
    ],
    relationships: [
      { name: "Odysseus", type: "Husband" },
      { name: "Telemachus", type: "Son" },
      { name: "Athena", type: "Patron" },
    ],
    archetype: "The Steadfast Waiter",
  },
  {
    id: "telemachus",
    name: "Telemachus",
    title: "The Searching Son",
    epic: "odyssey",
    tradition: "Greek",
    role: "Odysseus' Son",
    description:
      "When the epic begins, Telemachus is a young man who has never known his father. His journey to find news of Odysseus is a coming-of-age story within the larger narrative.",
    traits: ["Coming-of-age", "Courage", "Loyalty", "Impatience"],
    keyEvents: [
      "Journey to Pylos and Sparta",
      "Fights alongside Odysseus against the suitors",
      "Kills Antinous' father Eupeithes",
    ],
    relationships: [
      { name: "Odysseus", type: "Father" },
      { name: "Penelope", type: "Mother" },
      { name: "Athena", type: "Guide" },
    ],
    archetype: "The Heir Apparent",
  },
  // Divine Comedy
  {
    id: "virgil-dc",
    name: "Virgil",
    title: "The Poet Guide",
    epic: "divine-comedy",
    tradition: "Christian / European",
    role: "Guide through Hell and Purgatory",
    description:
      "The Roman poet who guides Dante through Hell and Purgatory. Represents human reason and classical wisdom — necessary but insufficient for salvation.",
    traits: ["Wisdom", "Reason", "Authority", "Compassion"],
    keyEvents: [
      "Guides Dante through Hell",
      "Guides Dante through Purgatory",
      "Leaves Dante at the gates of Paradise",
    ],
    relationships: [
      { name: "Dante", type: "Charge" },
      { name: "Beatrice", type: "Successor Guide" },
    ],
    archetype: "The Reasonable Guide",
  },
  {
    id: "beatrice",
    name: "Beatrice",
    title: "The Divine Beloved",
    epic: "divine-comedy",
    tradition: "Christian / European",
    role: "Guide through Paradise",
    description:
      "Dante's beloved, who represents divine grace and revelation. She takes over from Virgil to guide Dante through Paradise — reason yields to faith.",
    traits: ["Divine Love", "Grace", "Beauty", "Revelation"],
    keyEvents: [
      "Replaces Virgil as Dante's guide",
      "Guides Dante through Paradise",
      "Represents Dante's beloved and the Church",
    ],
    relationships: [
      { name: "Dante", type: "Beloved / Charge" },
      { name: "Virgil", type: "Predecessor Guide" },
    ],
    archetype: "The Divine Feminine",
  },
];

export function getCharacterById(id: string): Character | undefined {
  return characters.find((c) => c.id === id);
}

export function getCharactersByEpic(epic: string): Character[] {
  return characters.filter((c) => c.epic === epic);
}
