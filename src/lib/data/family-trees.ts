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
];

export function getFamilyTreeById(id: string): FamilyTree | undefined {
  return familyTrees.find((t) => t.id === id);
}
