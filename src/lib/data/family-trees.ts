export interface TreeNode {
  id: string;
  name: string;
  title?: string;
  parent?: string;
  spouse?: string;
  generation: number;
  notes?: string;
  tags?: string[];
}

export interface FamilyTree {
  id: string;
  name: string;
  epic: string;
  description: string;
  nodes: TreeNode[];
}

export const familyTrees: FamilyTree[] = [
  {
    id: "kuru-dynasty",
    name: "Kuru Dynasty — Mahabharata",
    epic: "mahabharata",
    description:
      "The royal lineage of Hastinapura. The central conflict of the Mahabharata arises from the schism between the Pandava and Kaurava branches of this dynasty.",
    nodes: [
      // Generation 0: Progenitors
      { id: "du", name: "Duhshanta", title: "King of Hastinapura", generation: 0 },
      { id: "shakuntala", name: "Shakuntala", title: "Daughter of Menaka", generation: 0, spouse: "du" },

      // Generation 1
      { id: "bharata", name: "Bharata", title: "Emperor", parent: "du", generation: 1, notes: "The kingdom Bharata (India) is named after him" },

      // Generation 2-4 (condensed)
      { id: "shantanu", name: "Shantanu", title: "King of Hastinapura", generation: 3, tags: ["king"] },
      { id: "ganga", name: "Ganga", title: "River Goddess", spouse: "shantanu", generation: 3, tags: ["divine"] },

      // Generation 4: Bhishma and brothers
      { id: "devavrata", name: "Devavrata (Bhishma)", title: "The Grandfather", parent: "shantanu", generation: 4, notes: "Took a vow of celibacy so his father could marry Satyavati", tags: ["vow", "kuru-elder"] },
      { id: "chitrangada", name: "Chitrangada", parent: "shantanu", generation: 4 },
      { id: "vichitravirya", name: "Vichitravirya", parent: "shantanu", generation: 4 },

      // Generation 5: The Kuru patriarch
      { id: "vyasa", name: "Vyasa", title: "Author of Mahabharata", parent: "shantanu", generation: 5, notes: "Born of Satyavati and Parashara. Father of Dhritarashtra, Pandu, and Vidura through niyoga", tags: ["sage", "author"] },

      // Generation 6: The fathers
      { id: "dhritarashtra", name: "Dhritarashtra", title: "Blind King", parent: "vyasa", generation: 6, spouse: "gandhari", tags: ["king", "blind"] },
      { id: "gandhari", name: "Gandhari", title: "Queen of Hastinapura", spouse: "dhritarashtra", generation: 6, notes: "Blindfolded herself out of devotion to her blind husband", tags: ["queen"] },
      { id: "pandu", name: "Pandu", title: "King of Hastinapura", parent: "vyasa", generation: 6, spouse: "kunti", tags: ["king"] },
      { id: "kunti", name: "Kunti", title: "Mother of the Pandavas", spouse: "pandu", generation: 6, notes: "Also known as Pritha. Had a mantra to invoke gods", tags: ["queen"] },
      { id: "madri", name: "Madri", title: "Second wife of Pandu", spouse: "pandu", generation: 6 },
      { id: "vidura", name: "Vidura", title: "The Just Minister", parent: "vyasa", generation: 6, notes: "Born of a maid-servant, wisest of the Kuru elders", tags: ["minister", "wise"] },

      // Generation 7: The 100 Kauravas (key ones)
      { id: "duryodhana", name: "Duryodhana", title: "Eldest Kaurava", parent: "dhritarashtra", generation: 7, tags: ["kaurava", "antagonist"] },
      { id: "dushasana", name: "Dushasana", parent: "dhritarashtra", generation: 7, tags: ["kaurava"] },
      { id: "dusshala", name: "Dusshala", parent: "dhritarashtra", generation: 7, notes: "The only daughter of the Kauravas" },

      // Generation 7: The Pandavas
      { id: "yudhishthira", name: "Yudhishthira", title: "Dharmaraja", parent: "pandu", generation: 7, notes: "Son of Dharma (Yama). Eldest Pandava. Master of dice.", tags: ["pandava", "king", "dharma"] },
      { id: "bima", name: "Bhima", title: "The Strongest", parent: "pandu", generation: 7, notes: "Son of Vayu (Wind God). Known for immense strength.", tags: ["pandava", "warrior"] },
      { id: "arjuna", name: "Arjuna", title: "The Archer", parent: "pandu", generation: 7, notes: "Son of Indra. Central figure of the Bhagavad Gita.", tags: ["pandava", "warrior", "archer"] },
      { id: "nakula", name: "Nakula", parent: "pandu", generation: 7, tags: ["pandava"] },
      { id: "sahadeva", name: "Sahadeva", parent: "pandu", generation: 7, tags: ["pandava"] },

      // Generation 7: Draupadi
      { id: "draupadi", name: "Draupadi", title: "Queen of the Pandavas", spouse: "yudhishthira", generation: 7, notes: "Fire-born. Wife of all five Pandavas. Her humiliation triggers the war.", tags: ["queen", "fire-born"] },

      // Generation 8: Key descendants
      { id: "abhimanyu", name: "Abhimanyu", title: "The Young Warrior", parent: "arjuna", generation: 8, notes: "Killed in the Chakravyuha. Son of Arjuna and Subhadra.", tags: ["warrior", "tragic"] },
      { id: "ghatotkacha", name: "Ghatotkacha", parent: "bima", generation: 8, notes: "Son of Bhima and Hidimbi. Killed by Karna.", tags: ["half-rakshasa"] },
      { id: "prativindhya", name: "Prativindhya", parent: "yudhishthira", generation: 8, tags: ["pandava-son"] },

      // Krishna connection
      { id: "krishna", name: "Krishna", title: "The Divine", generation: 7, notes: "8th avatar of Vishnu. Charioteer of Arjuna. Cousin to the Pandavas via Kunti.", tags: ["divine", "advisor", "cousin"] },
    ],
  },
  {
    id: "raghu-dynasty",
    name: "Raghu Dynasty — Ramayana",
    epic: "ramayana",
    description:
      "The solar dynasty (Suryavansha) from which Rama descends. Kings of Ayodhya whose line traces back to the sun god.",
    nodes: [
      { id: "surya", name: "Surya", title: "Sun God", generation: 0, tags: ["divine"] },
      { id: "ikshvaku", name: "Ikshvaku", title: "Founder of the Solar Dynasty", parent: "surya", generation: 1, notes: "First king of the Suryavansha" },
      { id: "raghu", name: "Raghu", title: "The Generous King", generation: 4, notes: "The dynasty is named Raghu-vamsha after him", tags: ["king", "generous"] },
      { id: "dasharatha", name: "Dasharatha", title: "King of Ayodhya", generation: 9, spouse: "kaushalya", tags: ["king"] },
      { id: "kaushalya", name: "Kaushalya", title: "Senior Queen", spouse: "dasharatha", generation: 9 },
      { id: "kaikeyi", name: "Kaikeyi", title: "Queen of Ayodhya", spouse: "dasharatha", generation: 9, notes: "Demanded Rama's exile and Bharata's coronation", tags: ["queen"] },
      { id: "sumitra", name: "Sumitra", title: "Queen of Ayodhya", spouse: "dasharatha", generation: 9 },
      { id: "rama", name: "Rama", title: "Prince of Ayodhya / 7th Avatar of Vishnu", parent: "dasharatha", generation: 10, tags: ["avatar", "hero", "king"] },
      { id: "bharata-r", name: "Bharata", title: "Prince of Ayodhya", parent: "dasharatha", generation: 10, notes: "Refused the throne and ruled as Rama's regent", tags: ["prince", "devoted"] },
      { id: "lakshmana", name: "Lakshmana", title: "Rama's Brother", parent: "dasharatha", generation: 10, tags: ["prince", "warrior"] },
      { id: "shatrughna", name: "Shatrughna", parent: "dasharatha", generation: 10, tags: ["prince"] },
      { id: "sita", name: "Sita", title: "Princess of Mithila", spouse: "rama", generation: 10, notes: "Born from a furrow in the earth. Avatar of Lakshmi.", tags: ["heroine", "divine"] },
      { id: "hanuman", name: "Hanuman", title: "The Monkey God", generation: 10, notes: "Devotee of Rama. Son of Vayu. Key figure in rescuing Sita.", tags: ["divine", "devotee", "vanara"] },
      { id: "ravana", name: "Ravana", title: "King of Lanka", generation: 10, notes: "The ten-headed demon king who abducted Sita", tags: ["antagonist", "rakshasa"] },
      { id: "lava", name: "Lava", title: "Son of Rama", parent: "rama", generation: 11, tags: ["prince"] },
      { id: "kusha-r", name: "Kusha", title: "Son of Rama", parent: "rama", generation: 11, tags: ["prince"] },
    ],
  },
  {
    id: "trojan-war",
    name: "House of Troy — Trojan War",
    epic: "iliad",
    description:
      "The royal house of Troy, from the divine founding by Dardanus to the fall of Priam's city. The abducton of Helen by Paris ignites the war.",
    nodes: [
      { id: "dardanus", name: "Dardanus", title: "Founder of Troy", generation: 0, tags: ["divine"] },
      { id: "ericthonius", name: "Ericthonius", parent: "dardanus", generation: 1 },
      { id: "tros", name: "Tros", title: "Namesake of Troy", parent: "ericthonius", generation: 2 },
      { id: "ilus", name: "Ilus", title: "Founds Ilium", parent: "tros", generation: 3 },
      { id: "laomedon", name: "Laomedon", title: "King of Troy", parent: "ilus", generation: 4, notes: "Built Troy's walls with Apollo and Poseidon" },
      { id: "priam", name: "Priam", title: "Last King of Troy", parent: "laomedon", generation: 5, spouse: "hecube", tags: ["king"] },
      { id: "hecube", name: "Hecuba", title: "Queen of Troy", spouse: "priam", generation: 5, tags: ["queen"] },
      { id: "hector", name: "Hector", title: "Prince of Troy", parent: "priam", generation: 6, spouse: "andromache", notes: "Greatest Trojan warrior. Killed by Achilles.", tags: ["warrior", "tragic"] },
      { id: "andromache", name: "Andromache", spouse: "hector", generation: 6, notes: "Wife of Hector. Her lament is one of the Iliad's most moving passages." },
      { id: "paris", name: "Paris", title: "The Judge", parent: "priam", generation: 6, spouse: "helen", notes: "Abducted Helen. Killed by Philoctetes.", tags: ["warrior", "judgment"] },
      { id: "helen", name: "Helen", title: "Face That Launched a Thousand Ships", spouse: "paris", generation: 6, notes: "Daughter of Zeus. Previously married to Menelaus of Sparta.", tags: ["divine", "heroine"] },
      { id: "deiphobus", name: "Deiphobus", parent: "priam", generation: 6, tags: ["warrior"] },
      { id: "troilus", name: "Troilus", parent: "priam", generation: 6, notes: "Killed by Achilles in some versions" },
      { id: "cassandra", name: "Cassandra", parent: "priam", generation: 6, notes: "Prophetess cursed never to be believed", tags: ["prophetess"] },
      { id: "polyxena", name: "Polyxena", parent: "priam", generation: 6, notes: "Sacrificed at Achilles' tomb" },
      { id: "aeneas", name: "Aeneas", title: "Prince of Troy / Founder of Rome", generation: 6, tags: ["warrior", "hero"], notes: "Son of Anchoras. Escapes Troy and founds Rome in the Aeneid." },
    ],
  },
  {
    id: "greek-gods",
    name: "The Olympians — Greek Pantheon",
    epic: "iliad",
    description:
      "The twelve Olympian gods of Greek mythology. Their interventions in the Trojan War and other epics drive the narrative.",
    nodes: [
      { id: "cronus", name: "Cronus", title: "King of Titans", generation: 0, tags: ["titan"] },
      { id: "rhea", name: "Rhea", title: "Mother of Gods", spouse: "cronus", generation: 0, tags: ["titan"] },
      { id: "zeus", name: "Zeus", title: "King of the Gods", parent: "cronus", generation: 1, spouse: "hera", tags: ["king", "divine"] },
      { id: "hera", name: "Hera", title: "Queen of the Gods", spouse: "zeus", generation: 1, tags: ["queen", "divine"] },
      { id: "poseidon", name: "Poseidon", title: "God of the Sea", parent: "cronus", generation: 1, tags: ["divine"] },
      { id: "demeter", name: "Demeter", title: "Goddess of Harvest", parent: "cronus", generation: 1, tags: ["divine"] },
      { id: "athena", name: "Athena", title: "Goddess of Wisdom", parent: "zeus", generation: 2, notes: "Born from Zeus's head. Patron of Odysseus and Athens.", tags: ["divine", "wisdom"] },
      { id: "apollo", name: "Apollo", title: "God of Sun, Music, Prophecy", parent: "zeus", generation: 2, tags: ["divine"] },
      { id: "artemis", name: "Artemis", title: "Goddess of the Hunt", parent: "zeus", generation: 2, tags: ["divine"] },
      { id: "ares", name: "Ares", title: "God of War", parent: "zeus", generation: 2, tags: ["divine", "war"] },
      { id: "aphrodite", name: "Aphrodite", title: "Goddess of Love", generation: 2, notes: "Judged fairest by Paris. Sides with Trojans.", tags: ["divine", "love"] },
      { id: "hephaestus", name: "Hephaestus", title: "God of Fire and Forge", parent: "zeus", generation: 2, tags: ["divine"] },
      { id: "hermes", name: "Hermes", title: "Messenger of the Gods", parent: "zeus", generation: 2, tags: ["divine", "messenger"] },
      { id: "dionysus", name: "Dionysus", title: "God of Wine", parent: "zeus", generation: 2, tags: ["divine"] },
      { id: "hades", name: "Hades", title: "God of the Underworld", parent: "cronus", generation: 1, tags: ["divine", "underworld"] },
      { id: "thetis", name: "Thetis", title: "Sea Nymph", generation: 1, spouse: "peleus", notes: "Mother of Achilles. Attempts to make him invulnerable.", tags: ["divine"] },
      { id: "peleus", name: "Peleus", spouse: "thetis", generation: 1, notes: "Mortal husband of Thetis. Father of Achilles." },
    ],
  },
];

export function getFamilyTreeById(id: string): FamilyTree | undefined {
  return familyTrees.find((t) => t.id === id);
}
