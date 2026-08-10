export interface QuizQuestion {
  id: string;
  question: string;
  options: {
    text: string;
    scores: Record<string, number>;
  }[];
}

export const quizQuestions: QuizQuestion[] = [
  {
    id: "q1",
    question: "A war is about to begin. What do you do?",
    options: [
      { text: "Pick up your weapon and lead the charge", scores: { achilles: 3, arjuna: 2, beowulf: 2, rama: 1 } },
      { text: "Try to negotiate peace first", scores: { odysseus: 3, yudhishthira: 2, aeneas: 1, gilgamesh: 1 } },
      { text: "Study the enemy and plan a strategy", scores: { odysseus: 3, krishna: 2, arjuna: 1, dante: 1 } },
      { text: "Prepare yourself mentally through meditation", scores: { dante: 2, gilgamesh: 2, arjuna: 3, rama: 1 } },
    ],
  },
  {
    id: "q2",
    question: "Your best friend has died. How do you respond?",
    options: [
      { text: "Rage against the world", scores: { achilles: 3, gilgamesh: 2, beowulf: 1 } },
      { text: "Honor their memory through your actions", scores: { rama: 2, aeneas: 3, arjuna: 2 } },
      { text: "Seek wisdom about death and meaning", scores: { dante: 3, gilgamesh: 2, yudhishthira: 1 } },
      { text: "Carry on, but carry them with you always", scores: { odysseus: 2, yudhishthira: 3, rama: 2 } },
    ],
  },
  {
    id: "q3",
    question: "You are offered immortality. What's your first thought?",
    options: [
      { text: "Yes — but only if my loved ones get it too", scores: { rama: 2, odysseus: 3, beowulf: 1 } },
      { text: "What's the catch?", scores: { odysseus: 3, gilgamesh: 2, arjuna: 1 } },
      { text: "I'd rather have a meaningful life than an eternal one", scores: { achilles: 3, gilgamesh: 2, dante: 2 } },
      { text: "Immortality through legacy is enough", scores: { aeneas: 3, arjuna: 2, yudhishthira: 2 } },
    ],
  },
  {
    id: "q4",
    question: "What's more important — duty or personal happiness?",
    options: [
      { text: "Duty, always. The self comes second.", scores: { rama: 3, yudhishthira: 2, aeneas: 3, beowulf: 1 } },
      { text: "Happiness — life is short, make it count", scores: { achilles: 3, gilgamesh: 2 } },
      { text: "They're the same thing when you choose correctly", scores: { krishna: 3, arjuna: 2, dante: 1 } },
      { text: "Duty is important, but so is knowing when to bend the rules", scores: { odysseus: 3, arjuna: 1 } },
    ],
  },
  {
    id: "q5",
    question: "How do you handle someone who has wronged you?",
    options: [
      { text: "With swift and decisive punishment", scores: { beowulf: 2, achilles: 3, arjuna: 1 } },
      { text: "With cunning and patience", scores: { odysseus: 3, krishna: 2, yudhishthira: 1 } },
      { text: "With forgiveness, if they are worthy of it", scores: { rama: 2, yudhishthira: 3, dante: 1 } },
      { text: "With the knowledge that dharma will handle it", scores: { krishna: 3, rama: 2, gilgamesh: 1 } },
    ],
  },
  {
    id: "q6",
    question: "What would you build if you could build anything?",
    options: [
      { text: "A city that will last forever", scores: { aeneas: 3, rama: 2, yudhishthira: 1 } },
      { text: "A monument to my friend", scores: { gilgamesh: 3, achilles: 2, beowulf: 1 } },
      { text: "A school to pass on wisdom", scores: { dante: 2, krishna: 3, odysseus: 1 } },
      { text: "A home where all are welcome", scores: { rama: 2, odysseus: 2, aeneas: 2 } },
    ],
  },
  {
    id: "q7",
    question: "You're lost in a dark forest. What do you do?",
    options: [
      { text: "Fight through it with brute force", scores: { beowulf: 3, achilles: 2, arjuna: 1 } },
      { text: "Look for signs and follow your wits", scores: { odysseus: 3, krishna: 2, gilgamesh: 1 } },
      { text: "Accept that this is part of the journey", scores: { dante: 3, rama: 2, yudhishthira: 1 } },
      { text: "Call out for help — someone must know the way", scores: { dante: 2, arjuna: 3, gilgamesh: 1 } },
    ],
  },
];

export interface EpicHeroResult {
  id: string;
  name: string;
  epic: string;
  title: string;
  description: string;
  traits: string[];
  color: string;
}

export const heroResults: EpicHeroResult[] = [
  {
    id: "achilles",
    name: "Achilles",
    epic: "Iliad",
    title: "The Swift-Footed",
    description: "You are driven by passion and glory. You have a fierce sense of justice and a terrible wrath. You'd rather live a short, meaningful life than a long, forgettable one. Your loyalty to those you love is absolute.",
    traits: ["Passion", "Glory", "Loyalty", "Wrath", "Courage"],
    color: "#1D4ED8",
  },
  {
    id: "odysseus",
    name: "Odysseus",
    epic: "Odyssey",
    title: "The Man of Many Wiles",
    description: "You are clever, adaptable, and endlessly resourceful. You think before you act and always have a plan. Your greatest strength is your mind, and your greatest weakness is your longing for home.",
    traits: ["Cunning", "Wit", "Perseverance", "Longing", "Adaptability"],
    color: "#047857",
  },
  {
    id: "arjuna",
    name: "Arjuna",
    epic: "Mahabharata",
    title: "The Peerless Archer",
    description: "You are skilled and devoted, but you also struggle with doubt. You seek meaning in your actions and want to do the right thing. When you find your purpose, nothing can stop you.",
    traits: ["Devotion", "Skill", "Doubt", "Purpose", "Courage"],
    color: "#B91C1C",
  },
  {
    id: "rama",
    name: "Rama",
    epic: "Ramayana",
    title: "The Ideal Man",
    description: "You are the embodiment of duty and righteousness. You accept hardship without complaint and always do what is right, even when it costs you everything. Your strength is your calm.",
    traits: ["Duty", "Perfection", "Sacrifice", "Calm", "Devotion"],
    color: "#D97706",
  },
  {
    id: "gilgamesh",
    name: "Gilgamesh",
    epic: "Gilgamesh",
    title: "The King of Uruk",
    description: "You are powerful and restless, always seeking something beyond yourself. You've faced great loss and it has shaped you. You understand that mortality gives life its meaning.",
    traits: ["Power", "Grief", "Quest", "Mortality", "Legacy"],
    color: "#0F766E",
  },
  {
    id: "dante",
    name: "Dante",
    epic: "Divine Comedy",
    title: "The Pilgrim",
    description: "You are a seeker of truth and meaning. You've been lost in dark places but you keep moving forward. You believe that love can guide you through anything, even Hell itself.",
    traits: ["Seeking", "Faith", "Love", "Endurance", "Wisdom"],
    color: "#BE123C",
  },
  {
    id: "beowulf",
    name: "Beowulf",
    epic: "Beowulf",
    title: "The Monster Slayer",
    description: "You are brave to a fault and face every challenge head-on. You value honor and loyalty above all else. You'll fight the dragon even when no one else will follow.",
    traits: ["Bravery", "Strength", "Honor", "Loyalty", "Legacy"],
    color: "#B45309",
  },
  {
    id: "aeneas",
    name: "Aeneas",
    epic: "Aeneid",
    title: "The Father of Rome",
    description: "You carry the weight of destiny on your shoulders. You sacrifice personal happiness for a greater purpose. You believe in something larger than yourself and will endure anything to fulfill it.",
    traits: ["Duty", "Sacrifice", "Destiny", "Endurance", "Faith"],
    color: "#7C3AED",
  },
  {
    id: "krishna",
    name: "Krishna",
    epic: "Mahabharata",
    title: "The Divine One",
    description: "You are playful and profound at the same time. You see the big picture when others are lost in details. You guide others with wisdom and a touch of mischief.",
    traits: ["Wisdom", "Playfulness", "Strategy", "Compassion", "Power"],
    color: "#A855F7",
  },
];
