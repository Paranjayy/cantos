export interface GlossaryTerm {
  id: string;
  term: string;
  pronunciation?: string;
  origin: string;
  definition: string;
  epics: string[];
  relatedTerms?: string[];
}

export const glossaryTerms: GlossaryTerm[] = [
  { id: "dharma", term: "Dharma", origin: "Sanskrit", definition: "Cosmic law, duty, righteousness — the moral fabric that holds the universe together. The central concept of the Mahabharata.", epics: ["mahabharata", "ramayana"], relatedTerms: ["karma", "rtam"] },
  { id: "karma", term: "Karma", origin: "Sanskrit", definition: "Action and its consequences. Every action generates results that affect the present and future lives.", epics: ["mahabharata", "ramayana"], relatedTerms: ["dharma", "samsara"] },
  { id: "kleos", term: "Kleos", origin: "Ancient Greek", definition: "Glory, fame — specifically the glory won through heroic deeds. What Achilles chooses over a long life.", epics: ["iliad", "odyssey"], relatedTerms: ["timē", "arete"] },
  { id: "timē", term: "Timē", origin: "Ancient Greek", definition: "Honor, public esteem — the tangible rewards (prize, respect) that accompany glory.", epics: ["iliad"], relatedTerms: ["kleos", "arete"] },
  { id: "arete", term: "Arete", origin: "Ancient Greek", definition: "Excellence, virtue — the quality of being the best version of yourself in any domain.", epics: ["iliad", "odyssey"], relatedTerms: ["kleos", "timē"] },
  { id: "metis", term: "Metis", origin: "Ancient Greek", definition: "Cunning intelligence, craft — the defining quality of Odysseus. Brain over brawn.", epics: ["odyssey"], relatedTerms: ["dolos"] },
  { id: "pietas", term: "Pietas", origin: "Latin", definition: "Duty to gods, family, and state — the defining Roman virtue. Aeneas embodies it.", epics: ["aeneid"], relatedTerms: ["dharma"] },
  { id: "hubris", term: "Hubris", origin: "Ancient Greek", definition: "Excessive pride or defiance toward the gods. Inevitably punished in Greek literature.", epics: ["iliad", "odyssey"], relatedTerms: ["nemesis"] },
  { id: "nemesis", term: "Nemesis", origin: "Ancient Greek", definition: "Divine retribution — the inescapable punishment for hubris.", epics: ["iliad", "odyssey"], relatedTerms: ["hubris"] },
  { id: "mēnis", term: "Mēnis", origin: "Ancient Greek", definition: "Wrath, rage — the word that opens the Iliad. Achilles' wrath that costs the Greeks dearly.", epics: ["iliad"], relatedTerms: ["hubris"] },
  { id: "nemeton", term: "Nemeton", origin: "Celtic/Greek", definition: "Sacred grove — a natural sanctuary. Trees as sacred space in ancient European religion.", epics: ["beowulf"], relatedTerms: [] },
  { id: "wyrd", term: "Wyrd", origin: "Old English", definition: "Fate, destiny — what shapes human life. Related to the Germanic concept of fate.", epics: ["beowulf"], relatedTerms: ["fatum"] },
  { id: "fatum", term: "Fatum", origin: "Latin", definition: "Fate, that which has been spoken — the Roman concept of inevitable destiny.", epics: ["aeneid"], relatedTerms: ["wyrd"] },
  { id: "avatar", term: "Avatar", origin: "Sanskrit", definition: "Descent, manifestation — a god's incarnation on earth. Rama is the 7th avatar of Vishnu.", epics: ["ramayana", "mahabharata"], relatedTerms: ["dharma"] },
  { id: "samsara", term: "Saṃsāra", origin: "Sanskrit", definition: "The cycle of birth, death, and rebirth. Liberation (moksha) is the escape from this cycle.", epics: ["mahabharata", "ramayana"], relatedTerms: ["karma", "moksha"] },
  { id: "moksha", term: "Moksha", origin: "Sanskrit", definition: "Liberation from the cycle of rebirth. The ultimate spiritual goal in Hindu philosophy.", epics: ["mahabharata", "ramayana"], relatedTerms: ["samsara", "dharma"] },
  { id: "xenia", term: "Xenia", origin: "Ancient Greek", definition: "Hospitality, guest-friendship — a sacred duty. Violating xenia brings divine punishment.", epics: ["odyssey", "iliad"], relatedTerms: ["arete"] },
  { id: "nostos", term: "Nostos", origin: "Ancient Greek", definition: "Homecoming — specifically the return home from war. The Odyssey is the nostos par excellence.", epics: ["odyssey"], relatedTerms: ["nostosalgia"] },
  { id: "kleos-aphthiton", term: "Kleos Aphthiton", origin: "Ancient Greek", definition: "Imperishable glory — the fame that never dies. What the Homeric hero seeks above all.", epics: ["iliad", "odyssey"], relatedTerms: ["kleos"] },
  { id: "bhakti", term: "Bhakti", origin: "Sanskrit", definition: "Devotion, especially devotion to a personal god. Hanuman is the model of bhakti.", epics: ["ramayana", "mahabharata"], relatedTerms: ["dharma"] },
  { id: "lila", term: "Līlā", origin: "Sanskrit", definition: "Divine play — the idea that the universe is the playful creation of the divine.", epics: ["ramayana", "mahabharata"], relatedTerms: ["avatar"] },
  { id: "monomyth", term: "Monomyth", origin: "Modern (Joseph Campbell)", definition: "The hero's journey — a universal narrative pattern: departure → initiation → return.", epics: ["odyssey", "ramayana", "gilgamesh"], relatedTerms: ["nostos"] },
  { id: "eucatastrophe", term: "Eucatastrophe", origin: "Modern (J.R.R. Tolkien)", definition: "The sudden, joyous turn — the moment when hope seems lost but good triumphs.", epics: ["odyssey", "ramayana", "divine-comedy"], relatedTerms: ["monomyth"] },
  { id: "anagnorisis", term: "Anagnorisis", origin: "Ancient Greek", definition: "Recognition, discovery — the moment of critical knowledge in a narrative.", epics: ["iliad", "odyssey"], relatedTerms: ["peripeteia"] },
  { id: "peripeteia", term: "Peripeteia", origin: "Ancient Greek", definition: "Reversal of fortune — the sudden change from good to bad or vice versa.", epics: ["iliad", "odyssey", "beowulf"], relatedTerms: ["anagnorisis"] },
];
