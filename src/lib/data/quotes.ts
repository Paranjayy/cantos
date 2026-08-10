export interface EpicQuote {
  id: string;
  text: string;
  source: string;
  epic: string;
  author?: string;
  context?: string;
}

export const quotes: EpicQuote[] = [
  // Bhagavad Gita
  { id: "q1", text: "You have the right to work, but never to the fruit of work.", source: "Bhagavad Gita 2.47", epic: "mahabharata", author: "Krishna", context: "Krishna's teaching to Arjuna on the battlefield" },
  { id: "q2", text: "The soul is never born nor dies at any time. It has not come into being, does not come into being, and will not come into being.", source: "Bhagavad Gita 2.20", epic: "mahabharata", author: "Krishna" },
  { id: "q3", text: "Whenever dharma declines and adharma rises, I manifest myself.", source: "Bhagavad Gita 4.7", epic: "mahabharata", author: "Krishna" },
  { id: "q4", text: "Those who see me in all things, and all things in me, are never separated from me.", source: "Bhagavad Gita 6.30", epic: "mahabharata", author: "Krishna" },
  { id: "q5", text: "When meditation is mastered, the mind is unwavering like the flame of a lamp in a windless place.", source: "Bhagavad Gita 6.19", epic: "mahabharata", author: "Krishna" },

  // Iliad
  { id: "q6", text: "Sing, O goddess, the anger of Achilles.", source: "Iliad, Book 1", epic: "iliad", author: "Homer", context: "The opening line of the Iliad" },
  { id: "q7", text: "I would rather serve as the hired man of the poorest man than be king of all the dead.", source: "Iliad, Book 20", epic: "iliad", author: "Achilles" },
  { id: "q8", text: "I will not let you forget your duty.", source: "Iliad, Book 2", epic: "iliad", author: "Achilles" },
  { id: "q9", text: "Even as leaves of generation, so is the generation of men.", source: "Iliad, Book 6", epic: "iliad", author: "Homer" },
  { id: "q10", text: "There is a time for everything — a time to be born and a time to die.", source: "Iliad, Book 21", epic: "iliad", author: "Homer" },

  // Odyssey
  { id: "q11", text: "Tell me, O Muse, of that ingenious hero who traveled far and wide.", source: "Odyssey, Book 1", epic: "odyssey", author: "Homer", context: "The opening of the Odyssey" },
  { id: "q12", text: "There is nothing more admirable than when two people who see eye to eye keep house as man and wife.", source: "Odyssey, Book 6", epic: "odyssey", author: "Homer" },
  { id: "q13", text: "Of all creatures that breathe and move upon the earth, nothing is bred that is weaker than man.", source: "Odyssey, Book 18", epic: "odyssey", author: "Homer" },

  // Ramayana
  { id: "q14", text: "A brother is as valuable as a father.", source: "Ramayana", epic: "ramayana", author: "Valmiki" },
  { id: "q15", text: "Where Rama is, there is dharma. Where dharma is, there is victory.", source: "Ramayana", epic: "ramayana", author: "Valmiki" },
  { id: "q16", text: "A noble person always speaks the truth, fulfills duties, and helps those in need.", source: "Ramayana", epic: "ramayana", author: "Valmiki" },

  // Gilgamesh
  { id: "q17", text: "He who saw the deep, the foundations of the land, who knew the ways, was wise in all matters.", source: "Epic of Gilgamesh, Tablet 1", epic: "gilgamesh", context: "The opening lines describing Gilgamesh" },
  { id: "q18", text: "The life that you seek you will never find. When the gods created man, they allotted to him death, but life they retained in their own keeping.", source: "Epic of Gilgamesh, Tablet 10", epic: "gilgamesh", author: "Utnapishtim" },

  // Aeneid
  { id: "q19", text: "Arms, and the man I sing, who, forc'd by fate, and haughty Juno's unrelenting hate.", source: "Aeneid, Book 1", epic: "aeneid", author: "Virgil", context: "The opening of the Aeneid" },
  { id: "q20", text: "I found Rome a city of bricks and left it a city of marble.", source: "Attributed to Augustus", epic: "aeneid" },
  { id: "q21", text: "Do not yield to grief. This is not the way to go. Rather, increase the pain by thinking of so much suffering.", source: "Aeneid, Book 2", epic: "aeneid", author: "Anchises" },

  // Divine Comedy
  { id: "q22", text: "Midway upon the journey of our life, I found myself within a dark wood, for the straight way had been lost.", source: "Inferno, Canto 1", epic: "divine-comedy", author: "Dante", context: "The opening of the Divine Comedy" },
  { id: "q23", text: "Abandon all hope, ye who enter here.", source: "Inferno, Canto 3", epic: "divine-comedy", author: "Dante", context: "Inscription on the gates of Hell" },
  { id: "q24", text: "The love that moves the sun and the other stars.", source: "Paradiso, Canto 33", epic: "divine-comedy", author: "Dante", context: "The final line of the Divine Comedy" },

  // Beowulf
  { id: "q25", text: "I hereby renounce sword and the shelter of the broad shield, the heavy war-board.", source: "Beowulf", epic: "beowulf", author: "Anonymous", context: "Beowulf fights Grendel without weapons" },
  { id: "q26", text: "Fate goes ever as fate must.", source: "Beowulf", epic: "beowulf", author: "Beowulf" },
  { id: "q27", text: "Each of us must await his end of worldly life. Let him who can win glory before death.", source: "Beowulf", epic: "beowulf", author: "Beowulf" },

  // Mahabharata (non-Gita)
  { id: "q28", text: "Dharma exists for the welfare of all beings. Hence, that by which the welfare of all living beings is sustained, that is dharma.", source: "Mahabharata, Shanti Parva", epic: "mahabharata", author: "Bhishma" },
  { id: "q29", text: "The world is a suspension of water, earth is its support, air its foundation. The sun with its rays supports the whole.", source: "Mahabharata", epic: "mahabharata" },
  { id: "q30", text: "There is no friend like dharma, no enemy like adharma. There is no wealth like knowledge, no poverty like disease.", source: "Mahabharata, Anushasana Parva", epic: "mahabharata" },
];
