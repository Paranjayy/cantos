export interface Connection {
  id: string;
  from: { epic: string; character: string; name: string };
  to: { epic: string; character: string; name: string };
  type: "parallel" | "inspiration" | "counterpart" | "archetype";
  label: string;
  description: string;
}

export const connections: Connection[] = [
  // The Cunning Survivor archetype
  { id: "c1", from: { epic: "odyssey", character: "odysseus", name: "Odysseus" }, to: { epic: "ramayana", character: "rama", name: "Rama" }, type: "counterpart", label: "Hero's Return", description: "Both embark on epic journeys home from war — Odysseus through the Mediterranean, Rama through exile. Both must reclaim their thrones." },
  { id: "c2", from: { epic: "iliad", character: "achilles", name: "Achilles" }, to: { epic: "mahabharata", character: "karna", name: "Karna" }, type: "parallel", label: "Tragic Warriors", description: "Both are the greatest warriors of their epics, fighting on opposite sides. Both are doomed by fate and divine intervention. Both have complex relationships with their mothers." },
  { id: "c3", from: { epic: "odyssey", character: "odysseus", name: "Odysseus" }, to: { epic: "mahabharata", character: "krishna", name: "Krishna" }, type: "parallel", label: "Cunning Strategists", description: "Both rely on intelligence over brute force. Odysseus invents the Trojan Horse; Krishna orchestrates the Kurukshetra war through strategy." },
  { id: "c4", from: { epic: "iliad", character: "achilles", name: "Achilles" }, to: { epic: "mahabharata", character: "arjuna", name: "Arjuna" }, type: "counterpart", label: "Divine Warriors", description: "Both are the supreme archers of their epics. Both have divine parentage (Thetis/Indra). Both face the choice between personal desire and duty." },
  { id: "c5", from: { epic: "ramayana", character: "hanuman", name: "Hanuman" }, to: { epic: "odyssey", character: "odysseus", name: "Odysseus" }, type: "counterpart", label: "Loyal Journeys", description: "Hanuman crosses the ocean to find Sita; Odysseus crosses the sea to reach Penelope. Both face supernatural obstacles on the way." },

  // The Abducted Beloved
  { id: "c6", from: { epic: "ramayana", character: "sita", name: "Sita" }, to: { epic: "iliad", character: "helen", name: "Helen" }, type: "parallel", label: "The Abducted", description: "Both women's abductions trigger epic wars. Sita is taken by Ravana; Helen is taken by Paris. But their agency differs profoundly." },
  { id: "c7", from: { epic: "ramayana", character: "sita", name: "Sita" }, to: { epic: "iliad", character: "andromache", name: "Andromache" }, type: "parallel", label: "Wives of War", description: "Both suffer the consequences of their husbands' wars. Sita is imprisoned; Andromache watches Troy fall and loses Hector." },

  // The Divine Guide
  { id: "c8", from: { epic: "mahabharata", character: "krishna", name: "Krishna" }, to: { epic: "odyssey", character: "odysseus", name: "Athena" }, type: "counterpart", label: "Divine Patronage", description: "Krishna guides Arjuna through the Gita; Athena guides Odysseus through the Odyssey. Both are wisdom deities who intervene directly." },
  { id: "c9", from: { epic: "iliad", character: "hector", name: "Hector" }, to: { epic: "mahabharata", character: "duryodhana", name: "Duryodhana" }, type: "parallel", label: "Doomed Defenders", description: "Both fight for a cause they know is failing. Hector defends a city that will fall; Duryodhana leads an army destined for destruction." },

  // The Exile Pattern
  { id: "c10", from: { epic: "ramayana", character: "rama", name: "Rama" }, to: { epic: "aeneid", character: "aeneas", name: "Aeneas" }, type: "parallel", label: "Exiled Founders", description: "Both are exile-hero-founders. Rama is exiled and returns to rule Ayodhya. Aeneas is exiled from Troy and founds Rome." },
  { id: "c11", from: { epic: "gilgamesh", character: "gilgamesh", name: "Gilgamesh" }, to: { epic: "divine-comedy", character: "dante", name: "Dante" }, type: "archetype", label: "Journey to the Otherworld", description: "Both make journeys beyond the mortal realm. Gilgamesh meets Utnapishtim; Dante descends to Hell and climbs to Paradise." },

  // Wrath
  { id: "c12", from: { epic: "iliad", character: "achilles", name: "Achilles" }, to: { epic: "mahabharata", character: "draupadi", name: "Draupadi" }, type: "parallel", label: "Righteous Wrath", description: "Both are driven by righteous anger that reshapes the course of war. Achilles' withdrawal costs thousands; Draupadi's vow triggers the final battle." },

  // Friendship
  { id: "c13", from: { epic: "gilgamesh", character: "gilgamesh", name: "Gilgamesh" }, to: { epic: "iliad", character: "achilles", name: "Achilles" }, type: "parallel", label: "Grief for the Lost", description: "Both are transformed by the death of their beloved companion. Gilgamesh after Enkidu, Achilles after Patroclus." },

  // Mortality
  { id: "c14", from: { epic: "gilgamesh", character: "gilgamesh", name: "Gilgamesh" }, to: { epic: "iliad", character: "achilles", name: "Achilles" }, type: "archetype", label: "Confronting Death", description: "Both face the fundamental question of mortality. Gilgamesh seeks immortality and fails. Achilles chooses glory over longevity." },

  // Cross-cultural myths
  { id: "c15", from: { epic: "gilgamesh", character: "gilgamesh", name: "Gilgamesh" }, to: { epic: "divine-comedy", character: "dante", name: "Dante" }, type: "inspiration", label: "Cosmic Journey", description: "The oldest epic's quest for meaning parallels the medieval epic's structured cosmos. Both are journeys beyond the known world." },
];

export function getConnectionsByEpic(epic: string): Connection[] {
  return connections.filter(
    (c) => c.from.epic === epic || c.to.epic === epic
  );
}

export function getConnectionsByCharacter(character: string): Connection[] {
  return connections.filter(
    (c) => c.from.character === character || c.to.character === character
  );
}
