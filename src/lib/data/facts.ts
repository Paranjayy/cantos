export interface EpicFact {
  id: string;
  text: string;
  epic: string;
  category: "length" | "age" | "culture" | "detail" | "impact";
}

export const epicFacts: EpicFact[] = [
  { id: "f1", text: "The Mahabharata is roughly 10 times longer than the Iliad and Odyssey combined — making it the longest poem ever written.", epic: "mahabharata", category: "length" },
  { id: "f2", text: "The Epic of Gilgamesh is over 4,000 years old — it predates the Bible, Homer, and even the concept of 'literature' as we know it.", epic: "gilgamesh", category: "age" },
  { id: "f3", text: "The word 'robot' comes from the Czech 'robota' (forced labor), but the concept of artificial beings goes back to the Greek myth of Talos — a bronze giant protecting Crete.", epic: "iliad", category: "culture" },
  { id: "f4", text: "The Trojan War may have been based on real conflicts around 1200 BCE — archaeological evidence at Hisarlik (ancient Troy) shows destruction layers from that era.", epic: "iliad", category: "detail" },
  { id: "f5", text: "Valmiki wrote the Ramayana before the Mahabharata was composed — making it the adi-kavya (first poem) in Sanskrit literature.", epic: "ramayana", category: "age" },
  { id: "f6", text: "The word 'odyssey' in English comes directly from Homer's epic — it means any long, eventful journey.", epic: "odyssey", category: "impact" },
  { id: "f7", text: "Dante's Divine Comedy is considered the greatest work of Italian literature and helped establish the Italian language as a literary language.", epic: "divine-comedy", category: "impact" },
  { id: "f8", text: "Beowulf exists in only one manuscript — the Cotton MS Vitellius A.xv — which was nearly destroyed in a fire in 1731.", epic: "beowulf", category: "detail" },
  { id: "f9", text: "The Mahabharata contains the Bhagavad Gita — 700 verses of Hindu philosophy that are among the most widely read spiritual texts in the world.", epic: "mahabharata", category: "impact" },
  { id: "f10", text: "Homer's two epics were likely composed orally — they were not written down until centuries after they were first performed.", epic: "iliad", category: "age" },
  { id: "f11", text: "The Iliad never actually describes the fall of Troy — it ends with Hector's funeral. The wooden horse story comes from other traditions.", epic: "iliad", category: "detail" },
  { id: "f12", text: "The Aeneid was deliberately modeled on Homer's epics — Book 1-6 echoes the Odyssey (wandering), Book 7-12 echoes the Iliad (war).", epic: "aeneid", category: "culture" },
  { id: "f13", text: "The Mahabharata includes a nuclear-war-like description (the Brahmastra) that some modern readers have interpreted as ancient advanced technology.", epic: "mahabharata", category: "detail" },
  { id: "f14", text: "Gilgamesh's search for immortality parallels the Biblical story of Noah — both feature a great flood and a survivor warned by a god.", epic: "gilgamesh", category: "culture" },
  { id: "f15", text: "The Ramayana has been adapted into dozens of languages and art forms across Southeast Asia — from Thai Khon dance to Indonesian Wayang shadow puppetry.", epic: "ramayana", category: "impact" },
  { id: "f16", text: "Dante wrote the Divine Comedy in Tuscan Italian, not Latin — a radical choice that helped create modern Italian as a literary language.", epic: "divine-comedy", category: "detail" },
  { id: "f17", text: "Beowulf's dragon fight is one of the oldest examples of the 'slaying the dragon' trope that dominates modern fantasy literature.", epic: "beowulf", category: "impact" },
  { id: "f18", text: "The Mahabharata's Yaksha Prashna (questions of the spirit) contains 124 philosophical questions about ethics, governance, and the meaning of life.", epic: "mahabharata", category: "detail" },
];

export function getRandomFact(): EpicFact {
  return epicFacts[Math.floor(Math.random() * epicFacts.length)];
}

export function getFactsByEpic(epic: string): EpicFact[] {
  return epicFacts.filter((f) => f.epic === epic);
}
