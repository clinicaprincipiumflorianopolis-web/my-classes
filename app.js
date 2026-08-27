const { useState, useEffect, useMemo, useRef } = React;
const PALETTE = ["#12A594", "#5B6EE1", "#F2994A", "#EB5757", "#9B51E0", "#2D9CDB"];
const PIX = "54794320000190";
const STORAGE_KEY = "painel_alunos_data_v1";
const CATALOG_RAW = `[{"title": "review simple present", "category": "Gram\xE1tica", "studentOnly": null}, {"title": "Adverbs of manner", "category": "Gram\xE1tica", "studentOnly": null}, {"title": "aula_present_progressive_v2.pptx", "category": "Gram\xE1tica", "studentOnly": null}, {"title": "BY Teacher Tanisa - PREPOSITIONAL PHRASES AND SENTENCE STRUCTURE", "category": "Gram\xE1tica", "studentOnly": null}, {"title": "Count and non-count", "category": "Gram\xE1tica", "studentOnly": null}, {"title": "Futures - By teacher Tanisa", "category": "Gram\xE1tica", "studentOnly": null}, {"title": "Lesson 73 - Comparatives", "category": "Gram\xE1tica", "studentOnly": null}, {"title": "Plural nouns", "category": "Gram\xE1tica", "studentOnly": null}, {"title": "Possessive Forms in English", "category": "Gram\xE1tica", "studentOnly": null}, {"title": "possessives in english", "category": "Gram\xE1tica", "studentOnly": null}, {"title": "prepositions at/ on/ in", "category": "Gram\xE1tica", "studentOnly": null}, {"title": "Prepositions of direction", "category": "Gram\xE1tica", "studentOnly": null}, {"title": "Present progressive", "category": "Gram\xE1tica", "studentOnly": null}, {"title": "Pronouns", "category": "Gram\xE1tica", "studentOnly": null}, {"title": "Quantifiers: Some and Any", "category": "Gram\xE1tica", "studentOnly": null}, {"title": "SIMPLE PAST", "category": "Gram\xE1tica", "studentOnly": null}, {"title": "Simple present - visual", "category": "Gram\xE1tica", "studentOnly": null}, {"title": "Simple present vs. present progressive", "category": "Gram\xE1tica", "studentOnly": null}, {"title": "Superlative adjectives", "category": "Gram\xE1tica", "studentOnly": null}, {"title": "There is, there are", "category": "Gram\xE1tica", "studentOnly": null}, {"title": "There is/ there are", "category": "Gram\xE1tica", "studentOnly": null}, {"title": "Tradu\xE7\xE3o simultanea", "category": "Gram\xE1tica", "studentOnly": null}, {"title": "Understanding Modal verbs", "category": "Gram\xE1tica", "studentOnly": null}, {"title": "My family", "category": "Conversa\xE7\xE3o iniciante", "studentOnly": null}, {"title": "My city", "category": "Conversa\xE7\xE3o iniciante", "studentOnly": null}, {"title": "at the Restaurant", "category": "Conversa\xE7\xE3o iniciante", "studentOnly": null}, {"title": "Getting around the city", "category": "Conversa\xE7\xE3o iniciante", "studentOnly": null}, {"title": "You!", "category": "Conversa\xE7\xE3o iniciante", "studentOnly": null}, {"title": "simple present (aprofundamento)", "category": "Curso para adultos do zero", "studentOnly": null}, {"title": "Simple present (interrogativas)", "category": "Curso para adultos do zero", "studentOnly": null}, {"title": "Simple present (negatives)", "category": "Curso para adultos do zero", "studentOnly": null}, {"title": "simple present", "category": "Curso para adultos do zero", "studentOnly": null}, {"title": "simple present + verbo to be", "category": "Curso para adultos do zero", "studentOnly": null}, {"title": "layer dilemma - the co-worker", "category": "Dilemmas", "studentOnly": null}, {"title": "The amazon Rainforest", "category": "Economia", "studentOnly": null}, {"title": "Consumer pushback!", "category": "Economia", "studentOnly": null}, {"title": "currencies", "category": "Economia", "studentOnly": null}, {"title": "Debt", "category": "Economia", "studentOnly": null}, {"title": "minimum wage", "category": "Economia", "studentOnly": null}, {"title": "Prediction Markets", "category": "Economia", "studentOnly": null}, {"title": "STRIKES, UNIONS & THE ECONOMICS OF COLLECTIVE ACTION", "category": "Economia", "studentOnly": null}, {"title": "Trump's tariff war", "category": "Economia", "studentOnly": null}, {"title": "Universal basic income", "category": "Economia", "studentOnly": null}, {"title": "Grammar lab - comparatives, superlatives and equatives", "category": "Grammar/Conversation lab", "studentOnly": null}, {"title": "Conversation lab - Debate", "category": "Grammar/Conversation lab", "studentOnly": null}, {"title": "Grammar lab - conditionals", "category": "Grammar/Conversation lab", "studentOnly": null}, {"title": "conversation lab -digital footprint", "category": "Grammar/Conversation lab", "studentOnly": null}, {"title": "grammar lab - conjunctions", "category": "Grammar/Conversation lab", "studentOnly": null}, {"title": "conversation lab: conjunction stories", "category": "Grammar/Conversation lab", "studentOnly": null}, {"title": "Grammar lab - prepositions", "category": "Grammar/Conversation lab", "studentOnly": null}, {"title": "conversation lab - BIAS", "category": "Grammar/Conversation lab", "studentOnly": null}, {"title": "grammar lab - collocations", "category": "Grammar/Conversation lab", "studentOnly": null}, {"title": "conversation lab - regrets", "category": "Grammar/Conversation lab", "studentOnly": null}, {"title": "Project Futures & Decision Points", "category": "Grammar/Conversation lab", "studentOnly": null}, {"title": "Grammar lab - Present Simple x Present Continuous", "category": "Grammar/Conversation lab", "studentOnly": null}, {"title": "Conversation Lab - giving opinions", "category": "Grammar/Conversation lab", "studentOnly": null}, {"title": "Grammar lab - question formation in spoken English", "category": "Grammar/Conversation lab", "studentOnly": null}, {"title": "Conversation lab - question formation practice", "category": "Grammar/Conversation lab", "studentOnly": null}, {"title": "Conversation lab - Changes", "category": "Grammar/Conversation lab", "studentOnly": null}, {"title": "Grammar lab: simple past for advanced students", "category": "Grammar/Conversation lab", "studentOnly": null}, {"title": "Conversation lab - Telling stories (simple past)", "category": "Grammar/Conversation lab", "studentOnly": null}, {"title": "Grammar lab - present perfect vs. simple past", "category": "Grammar/Conversation lab", "studentOnly": null}, {"title": "Conversation Lab - Layoffs in tech & the return to the office", "category": "Grammar/Conversation lab", "studentOnly": null}, {"title": "Grammar lab - Future forms", "category": "Grammar/Conversation lab", "studentOnly": null}, {"title": "Grammar Lab: word order and sentence structure", "category": "Grammar/Conversation lab", "studentOnly": null}, {"title": "Intro questions - simple past", "category": "Ice breakers e conversa\xE7\xE3o iniciante", "studentOnly": null}, {"title": "First day at work (verb to be presente e passado)", "category": "Iniciante (foco no trabalho)", "studentOnly": null}, {"title": "A day at work (simple present + pronomes)", "category": "Iniciante (foco no trabalho)", "studentOnly": null}, {"title": "Tools & Processes", "category": "Iniciante (foco no trabalho)", "studentOnly": null}, {"title": "Meetings & Communication", "category": "Iniciante (foco no trabalho)", "studentOnly": null}, {"title": "Negotiating", "category": "Iniciante (foco no trabalho)", "studentOnly": null}, {"title": "Skills and growth", "category": "Iniciante (foco no trabalho)", "studentOnly": null}, {"title": "Job interviews - part 1: tell me about yourself", "category": "Iniciante (foco no trabalho)", "studentOnly": null}, {"title": "Job interviews: talking about experience", "category": "Iniciante (foco no trabalho)", "studentOnly": null}, {"title": "Job interview: talking about your skills", "category": "Iniciante (foco no trabalho)", "studentOnly": null}, {"title": "job interviews - Talking About Weaknesses", "category": "Iniciante (foco no trabalho)", "studentOnly": null}, {"title": "job interviews: talking about the future (motivation and goals)", "category": "Iniciante (foco no trabalho)", "studentOnly": null}, {"title": "job interviews - creating our answers", "category": "Iniciante (foco no trabalho)", "studentOnly": null}, {"title": "deep grammar dive - What are you working on? (simple present x present continuous)", "category": "Iniciante (foco no trabalho)", "studentOnly": null}, {"title": "Practice with simple present vs present progressive", "category": "Iniciante (foco no trabalho)", "studentOnly": null}, {"title": "Automation Class (Speaking-focused) - Simple Present vs Present Continuous", "category": "Iniciante (foco no trabalho)", "studentOnly": null}, {"title": "Simple Past - Dicas de ouro, refor\xE7o e uso na pr\xE1tica", "category": "Iniciante (foco no trabalho)", "studentOnly": null}, {"title": "CONVERSATION BOOTCAMP", "category": "Iniciante (foco no trabalho)", "studentOnly": null}, {"title": "negotiation at work (conectores, preposi\xE7\xF5es e verbos modais)", "category": "Iniciante (foco no trabalho)", "studentOnly": null}, {"title": "My Professional Journey", "category": "Iniciante (foco no trabalho)", "studentOnly": null}, {"title": "vocabulary improvement - Tech Roles & Responsibilities", "category": "Iniciante (foco no trabalho)", "studentOnly": null}, {"title": "grammar lab - conjunctions", "category": "Lapidando ingl\xEAs", "studentOnly": null}, {"title": "Conversation lab - Changes", "category": "Lapidando ingl\xEAs", "studentOnly": null}, {"title": "Conversation lab - Telling stories (simple past)", "category": "Lapidando ingl\xEAs", "studentOnly": null}, {"title": "Grammar Lab: word order and sentence structure", "category": "Lapidando ingl\xEAs", "studentOnly": null}, {"title": "Grammar lab - present perfect vs. simple past", "category": "Lapidando ingl\xEAs", "studentOnly": null}, {"title": "Conversation lab - Sliding Doors Moments", "category": "Lapidando ingl\xEAs", "studentOnly": null}, {"title": "Grammar lab - Present Simple x Present Continuous", "category": "Lapidando ingl\xEAs", "studentOnly": null}, {"title": "Grammar lab - Future forms", "category": "Lapidando ingl\xEAs", "studentOnly": null}, {"title": "conversation lab - Future projects", "category": "Lapidando ingl\xEAs", "studentOnly": null}, {"title": "Are rules meant to be broken?", "category": "Lapidando ingl\xEAs", "studentOnly": "mauricio"}, {"title": "Grammar lab - conditionals", "category": "Lapidando ingl\xEAs", "studentOnly": null}, {"title": "Grammar lab - question formation in spoken English", "category": "Lapidando ingl\xEAs", "studentOnly": null}, {"title": "Conversation Lab - giving opinions", "category": "Lapidando ingl\xEAs", "studentOnly": null}, {"title": "Grammar lab - comparatives, superlatives and equatives", "category": "Lapidando ingl\xEAs", "studentOnly": null}, {"title": "15 minute cities", "category": "Estilo de vida e cultura", "studentOnly": null}, {"title": "The amazon Rainforest", "category": "Estilo de vida e cultura", "studentOnly": null}, {"title": "The cost of convenience", "category": "Estilo de vida e cultura", "studentOnly": null}, {"title": "ANIMAL TESTING", "category": "Estilo de vida e cultura", "studentOnly": null}, {"title": "Antique and Unique", "category": "Estilo de vida e cultura", "studentOnly": null}, {"title": "Are rules meant to be broken?", "category": "Estilo de vida e cultura", "studentOnly": null}, {"title": "Blue zones", "category": "Estilo de vida e cultura", "studentOnly": null}, {"title": "Bucket list", "category": "Estilo de vida e cultura", "studentOnly": null}, {"title": "censorship", "category": "Estilo de vida e cultura", "studentOnly": null}, {"title": "comfort zone", "category": "Estilo de vida e cultura", "studentOnly": null}, {"title": "Confidence", "category": "Estilo de vida e cultura", "studentOnly": null}, {"title": "Critical Thinking", "category": "Estilo de vida e cultura", "studentOnly": null}, {"title": "Culture Shock", "category": "Estilo de vida e cultura", "studentOnly": null}, {"title": "Do you usually listen to music while studying or working?", "category": "Estilo de vida e cultura", "studentOnly": null}, {"title": "Dream jobs", "category": "Estilo de vida e cultura", "studentOnly": null}, {"title": "e-books and the old man and the sea", "category": "Estilo de vida e cultura", "studentOnly": null}, {"title": "End of the Year traditions", "category": "Estilo de vida e cultura", "studentOnly": null}, {"title": "Enduring friendship", "category": "Estilo de vida e cultura", "studentOnly": null}, {"title": "Extreme sports", "category": "Estilo de vida e cultura", "studentOnly": null}, {"title": "Famous cities: Tokyo", "category": "Estilo de vida e cultura", "studentOnly": null}, {"title": "freedom of speech", "category": "Estilo de vida e cultura", "studentOnly": null}, {"title": "Generations", "category": "Estilo de vida e cultura", "studentOnly": null}, {"title": "Goal-setting", "category": "Estilo de vida e cultura", "studentOnly": null}, {"title": "Guilty pleasures", "category": "Estilo de vida e cultura", "studentOnly": null}, {"title": "Having fun", "category": "Estilo de vida e cultura", "studentOnly": null}, {"title": "Healthy Habits", "category": "Estilo de vida e cultura", "studentOnly": null}, {"title": "Hey, are you listening?", "category": "Estilo de vida e cultura", "studentOnly": null}, {"title": "Left and right-brained", "category": "Estilo de vida e cultura", "studentOnly": null}, {"title": "Lost in Translation: Do We Still Need Languages?", "category": "Estilo de vida e cultura", "studentOnly": null}, {"title": "luck", "category": "Estilo de vida e cultura", "studentOnly": null}, {"title": "Modern villains", "category": "Estilo de vida e cultura", "studentOnly": null}, {"title": "New year's resolutions", "category": "Estilo de vida e cultura", "studentOnly": null}, {"title": "Online Sports gambling", "category": "Estilo de vida e cultura", "studentOnly": null}, {"title": "Procrastination", "category": "Estilo de vida e cultura", "studentOnly": null}, {"title": "Simplicity", "category": "Estilo de vida e cultura", "studentOnly": null}, {"title": "Sliding Doors Moments", "category": "Estilo de vida e cultura", "studentOnly": null}, {"title": "Talking about our friends", "category": "Estilo de vida e cultura", "studentOnly": null}, {"title": "the american dream", "category": "Estilo de vida e cultura", "studentOnly": null}, {"title": "The business of happiness", "category": "Estilo de vida e cultura", "studentOnly": null}, {"title": "The importance of community", "category": "Estilo de vida e cultura", "studentOnly": null}, {"title": "The pandemic and its ways", "category": "Estilo de vida e cultura", "studentOnly": null}, {"title": "The power of tacos", "category": "Estilo de vida e cultura", "studentOnly": null}, {"title": "The right to live, the right to die", "category": "Estilo de vida e cultura", "studentOnly": null}, {"title": "The science of laughter", "category": "Estilo de vida e cultura", "studentOnly": null}, {"title": "videogames", "category": "Estilo de vida e cultura", "studentOnly": null}, {"title": "Volunteering", "category": "Estilo de vida e cultura", "studentOnly": null}, {"title": "Weird Food Around the World", "category": "Estilo de vida e cultura", "studentOnly": null}, {"title": "what if the world was different?", "category": "Estilo de vida e cultura", "studentOnly": null}, {"title": "What makes art...art?", "category": "Estilo de vida e cultura", "studentOnly": null}, {"title": "What type of learner are you?", "category": "Estilo de vida e cultura", "studentOnly": null}, {"title": "Movie club: The devil wears prada", "category": "Movie club", "studentOnly": null}, {"title": "Movie club: ABOUT TIME", "category": "Movie club", "studentOnly": null}, {"title": "Movie club: into the wild", "category": "Movie club", "studentOnly": null}, {"title": "Movie club: Matrix", "category": "Movie club", "studentOnly": null}, {"title": "Candy bomber", "category": "Atualidades", "studentOnly": null}, {"title": "Chris Hadfield", "category": "Atualidades", "studentOnly": null}, {"title": "Artificial Empathy", "category": "Atualidades", "studentOnly": null}, {"title": "Banning cellphones in schools", "category": "Atualidades", "studentOnly": null}, {"title": "El Salvador enforces student dress codes", "category": "Atualidades", "studentOnly": null}, {"title": "ethics in genetic modification", "category": "Atualidades", "studentOnly": null}, {"title": "Grandma camp", "category": "Atualidades", "studentOnly": null}, {"title": "Lessons That Last a Lifetime \u2013 The Impact of a Great Teacher", "category": "Atualidades", "studentOnly": null}, {"title": "message in a bottle", "category": "Atualidades", "studentOnly": null}, {"title": "Security in schools", "category": "Atualidades", "studentOnly": null}, {"title": "Spain Vs airbnb", "category": "Atualidades", "studentOnly": null}, {"title": "unHappy Birthday", "category": "Atualidades", "studentOnly": null}, {"title": "Cancel culture", "category": "Tech talks", "studentOnly": null}, {"title": "Cryptocurrencies", "category": "Tech talks", "studentOnly": null}, {"title": "Doomscrolling", "category": "Tech talks", "studentOnly": null}, {"title": "Innovation Icons - Thomas Edison", "category": "Tech talks", "studentOnly": null}, {"title": "Innovation Icons: Marie Curie", "category": "Tech talks", "studentOnly": null}, {"title": "internet Addiction", "category": "Tech talks", "studentOnly": null}, {"title": "Online privacy - debate", "category": "Tech talks", "studentOnly": null}, {"title": "The metaverse", "category": "Tech talks", "studentOnly": null}, {"title": "treating addiction with ultrasound", "category": "Tech talks", "studentOnly": null}, {"title": "Toefl IBT - Exam Day Strategy & Execution", "category": "TOEFL IBT 2026", "studentOnly": null}, {"title": "Toefl ibt - listening", "category": "TOEFL IBT 2026", "studentOnly": null}, {"title": "TOEFL IBT - Reading", "category": "TOEFL IBT 2026", "studentOnly": null}, {"title": "TOEFL IBT - SPEAKING SECTION", "category": "TOEFL IBT 2026", "studentOnly": null}, {"title": "Toefl ibt - writing section", "category": "TOEFL IBT 2026", "studentOnly": null}, {"title": "Grammar lab - Present Simple x Present Continuous", "category": "TOEFL IBT 2026", "studentOnly": null}, {"title": "at the airport", "category": "Viagem (travel)", "studentOnly": null}, {"title": "At the airport PART 2", "category": "Viagem (travel)", "studentOnly": null}, {"title": "At the hotel", "category": "Viagem (travel)", "studentOnly": null}, {"title": "Sightseeing", "category": "Viagem (travel)", "studentOnly": null}, {"title": "In the restaurant", "category": "Viagem (travel)", "studentOnly": null}, {"title": "Negotiating", "category": "Trabalho (work)", "studentOnly": null}, {"title": "resolving work conflicts", "category": "Trabalho (work)", "studentOnly": null}, {"title": "Stress Management", "category": "Trabalho (work)", "studentOnly": null}, {"title": "Explaining things for the first time or more clearly", "category": "Trabalho (work)", "studentOnly": null}, {"title": "This is How It Works \u2013 Teach Me Something from Your Field", "category": "Trabalho (work)", "studentOnly": null}, {"title": "Motivation at work", "category": "Trabalho (work)", "studentOnly": null}, {"title": "Skills and growth", "category": "Trabalho (work)", "studentOnly": null}, {"title": "Problem Solving and brainstorming", "category": "Trabalho (work)", "studentOnly": null}, {"title": "Is a 4 workday week possible?", "category": "Trabalho (work)", "studentOnly": null}, {"title": "Employee tracking", "category": "Trabalho (work)", "studentOnly": null}, {"title": "Giving Feedback", "category": "Trabalho (work)", "studentOnly": null}, {"title": "Attending Presentations", "category": "Trabalho (work)", "studentOnly": null}, {"title": "Understanding Corporate Structure", "category": "Trabalho (work)", "studentOnly": null}, {"title": "Creativity and AI", "category": "Trabalho (work)", "studentOnly": null}, {"title": "Active listening", "category": "Trabalho (work)", "studentOnly": null}, {"title": "by Teacher Tanisa", "category": "Trabalho (work)", "studentOnly": null}, {"title": "Cross-Cultural Communication in Global Teams", "category": "Trabalho (work)", "studentOnly": null}, {"title": "Decision fatigue", "category": "Trabalho (work)", "studentOnly": null}, {"title": "Digital Nomads", "category": "Trabalho (work)", "studentOnly": null}, {"title": "Emotional intelligence", "category": "Trabalho (work)", "studentOnly": null}, {"title": "How to stay calm under pressure", "category": "Trabalho (work)", "studentOnly": null}, {"title": "Impostor syndrome", "category": "Trabalho (work)", "studentOnly": null}, {"title": "Incontestable Principles of Leadership", "category": "Trabalho (work)", "studentOnly": null}, {"title": "Jo\xE3o Augusto - Preparing for a job interview", "category": "Trabalho (work)", "studentOnly": "joao augusto"}, {"title": "Making hard decisions", "category": "Trabalho (work)", "studentOnly": null}, {"title": "Microcredentials", "category": "Trabalho (work)", "studentOnly": null}, {"title": "Million-Dollar Mental Health", "category": "Trabalho (work)", "studentOnly": null}, {"title": "Overcoming your mistakes", "category": "Trabalho (work)", "studentOnly": null}, {"title": "Personal Branding at Work", "category": "Trabalho (work)", "studentOnly": null}, {"title": "Pitching the Impossible", "category": "Trabalho (work)", "studentOnly": null}, {"title": "preparing for job interviews", "category": "Trabalho (work)", "studentOnly": null}, {"title": "Reduce Friction, increase influence", "category": "Trabalho (work)", "studentOnly": null}, {"title": "Starting a new job", "category": "Trabalho (work)", "studentOnly": null}, {"title": "Storytelling", "category": "Trabalho (work)", "studentOnly": null}, {"title": "The Hidden Rules of Corporate Success", "category": "Trabalho (work)", "studentOnly": null}, {"title": "THE NEED FOR SKILLED WORKERS", "category": "Trabalho (work)", "studentOnly": null}, {"title": "The Professionals Who Have 27 Hours in a Day", "category": "Trabalho (work)", "studentOnly": null}, {"title": "What would you do with a month off?", "category": "Trabalho (work)", "studentOnly": null}, {"title": "AI and the Music Industry", "category": "Especial (Dani Belli)", "studentOnly": "dani belli"}, {"title": "Ariana special", "category": "Especial (Dani Belli)", "studentOnly": "dani belli"}, {"title": "para conversation lab - how was your trip?", "category": "Especial (Dani Belli)", "studentOnly": "dani belli"}, {"title": "Bad Bunny: music and identity", "category": "Especial (Dani Belli)", "studentOnly": "dani belli"}, {"title": "Dealing with Stage Fright and Performance Anxiety", "category": "Especial (Dani Belli)", "studentOnly": "dani belli"}, {"title": "Fight with music", "category": "Especial (Dani Belli)", "studentOnly": "dani belli"}, {"title": "If I were famous", "category": "Especial (Dani Belli)", "studentOnly": "dani belli"}, {"title": "Luck in the music industry context", "category": "Especial (Dani Belli)", "studentOnly": "dani belli"}, {"title": "My beauty routine", "category": "Especial (Dani Belli)", "studentOnly": "dani belli"}, {"title": "Netflix, Music & The New Music Industry", "category": "Especial (Dani Belli)", "studentOnly": "dani belli"}, {"title": "Para Aula 10 - Conversation Lab - giving opinions", "category": "Especial (Dani Belli)", "studentOnly": "dani belli"}, {"title": "Para Grammar lab - Present Simple x Present Continuous", "category": "Especial (Dani Belli)", "studentOnly": "dani belli"}, {"title": "para Aula 9 - Grammar Lab: word order and sentence structure", "category": "Especial (Dani Belli)", "studentOnly": "dani belli"}, {"title": "SNL 2026 - ariana grande", "category": "Especial (Dani Belli)", "studentOnly": "dani belli"}, {"title": "Social Media as a Tool \u2014 When Work Meets Illusion", "category": "Especial (Dani Belli)", "studentOnly": "dani belli"}, {"title": "Soundcheck: English for music interviews", "category": "Especial (Dani Belli)", "studentOnly": "dani belli"}, {"title": "Special edition", "category": "Especial (Dani Belli)", "studentOnly": "dani belli"}, {"title": "Taylor swift announces her new album", "category": "Especial (Dani Belli)", "studentOnly": "dani belli"}, {"title": "The evolution of music", "category": "Especial (Dani Belli)", "studentOnly": "dani belli"}]`;
const LESSON_CATALOG = JSON.parse(CATALOG_RAW);
const MESES = [
  "janeiro",
  "fevereiro",
  "mar\xE7o",
  "abril",
  "maio",
  "junho",
  "julho",
  "agosto",
  "setembro",
  "outubro",
  "novembro",
  "dezembro"
];
const WEEKDAYS = ["domingo", "segunda-feira", "ter\xE7a-feira", "quarta-feira", "quinta-feira", "sexta-feira", "s\xE1bado"];
function countWeekdayInMonth(year, monthIndex0, weekday) {
  let count = 0;
  const d = new Date(year, monthIndex0, 1);
  while (d.getMonth() === monthIndex0) {
    if (d.getDay() === weekday) count++;
    d.setDate(d.getDate() + 1);
  }
  return count;
}
function getSchedule(student) {
  if (Array.isArray(student.schedule)) return student.schedule;
  if (student.scheduleDay !== void 0 && student.scheduleDay !== null) {
    return [{ day: student.scheduleDay, time: student.scheduleTime || "" }];
  }
  return [];
}
function scheduleOverflow(student, year, monthIndex0) {
  const schedule = getSchedule(student);
  if (schedule.length === 0 || !student.lessonsPerMonth) return null;
  const occurrences = schedule.reduce((sum, entry) => sum + countWeekdayInMonth(year, monthIndex0, Number(entry.day)), 0);
  const contracted = Number(student.lessonsPerMonth);
  if (occurrences > contracted) return { occurrences, contracted };
  return null;
}
const MEI_LIMIT = 8e4;
function computeYearRevenue(data, year) {
  const yearStr = String(year);
  let total = 0;
  data.students.forEach((s) => {
    const lessons = data.lessons[s.id] || [];
    lessons.forEach((l) => {
      if (l.date.slice(0, 4) === yearStr) total += Number(s.rate) || 0;
    });
  });
  return total;
}
function uid() {
  return Date.now().toString(36) + Math.random().toString(36).slice(2, 7);
}
function hashColor(id) {
  let h = 0;
  for (let i = 0; i < id.length; i++) h = h * 31 + id.charCodeAt(i) >>> 0;
  return PALETTE[h % PALETTE.length];
}
function todayKey() {
  const d = /* @__PURE__ */ new Date();
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}`;
}
function monthLabel(monthKey) {
  const [y, m] = monthKey.split("-").map(Number);
  return `${MESES[m - 1]} de ${y}`;
}
function dateBR(dateStr) {
  const [, m, d] = dateStr.split("-");
  return `${d}/${m}`;
}
function dateBRFull(dateStr) {
  const [y, m, d] = dateStr.split("-");
  return `${d}/${m}/${y}`;
}
function formatDuration(startDateStr) {
  const [y, m, d] = startDateStr.split("-").map(Number);
  const start = new Date(y, m - 1, d);
  const now = /* @__PURE__ */ new Date();
  let months = (now.getFullYear() - start.getFullYear()) * 12 + (now.getMonth() - start.getMonth());
  if (now.getDate() < start.getDate()) months -= 1;
  if (months < 1) return "menos de 1 m\xEAs";
  const years = Math.floor(months / 12);
  const remMonths = months % 12;
  const parts = [];
  if (years > 0) parts.push(`${years} ano${years > 1 ? "s" : ""}`);
  if (remMonths > 0) parts.push(`${remMonths} ${remMonths > 1 ? "meses" : "m\xEAs"}`);
  return parts.join(" e ");
}
function brl(n) {
  return new Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL" }).format(n || 0);
}
function normalizeName(name) {
  return name.trim().toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}
const LESSON_STOPWORDS = /* @__PURE__ */ new Set([
  "aula",
  "aulas",
  "lab",
  "conversation",
  "grammar",
  "exercicios",
  "exercicio",
  "exerc\xEDcios",
  "plataforma",
  "parte",
  "stories",
  "story",
  "with",
  "that",
  "para",
  "sobre",
  "the",
  "and",
  "of",
  "in",
  "on",
  "at",
  "for",
  "to",
  "is",
  "are",
  "correcao",
  "corre\xE7\xE3o",
  "revisao",
  "revis\xE3o"
]);
function meaningfulWords(text) {
  return normalizeName(text).split(/[^a-z0-9]+/).filter((w) => w.length >= 4 && !LESSON_STOPWORDS.has(w));
}
function wordsSimilar(a, b) {
  if (a === b) return true;
  if (a.length >= 4 && b.length >= 4 && (a.startsWith(b) || b.startsWith(a))) return true;
  return false;
}
function findSimilarLesson(newDesc, existingLessons) {
  const newWords = meaningfulWords(newDesc);
  if (newWords.length === 0) return null;
  for (const l of existingLessons) {
    const existingWords = meaningfulWords(l.desc);
    if (newWords.some((w) => existingWords.some((ew) => wordsSimilar(w, ew)))) return l;
  }
  return null;
}
function initials(name) {
  const parts = name.trim().split(/\s+/);
  return ((parts[0]?.[0] || "") + (parts[1]?.[0] || "")).toUpperCase();
}
function normalizePhone(raw) {
  let digits = (raw || "").replace(/\D/g, "");
  if (digits.length <= 11) digits = "55" + digits;
  return digits;
}
function buildMessage(student, monthKey, lessons) {
  const first = student.name.trim().split(/\s+/)[0];
  const total = lessons.length * (Number(student.rate) || 0);
  const lista = lessons.slice().sort((a, b) => a.date.localeCompare(b.date)).map((l) => `${dateBR(l.date)} - ${l.desc}`).join("\n");
  return `Ol\xE1 ${first}! Estou passando para fechar o m\xEAs de aulas de ${monthLabel(monthKey)}. Nosso total foram ${lessons.length} aula(s), totalizando ${brl(total)}.

O pix \xE9 ${PIX}.

Aqui vai a lista das aulas que fizemos:
${lista}`;
}
const emptyData = { students: [], lessons: {}, closed: {} };
function PainelAlunos() {
  const [data, setData] = useState(emptyData);
  const [loading, setLoading] = useState(true);
  const [saveError, setSaveError] = useState(false);
  const [view, setView] = useState({ screen: "dashboard" });
  const [showAddStudent, setShowAddStudent] = useState(false);
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, [view]);
  const CUR_MONTH = todayKey();
  useEffect(() => {
    (async () => {
      try {
        const res = await window.storage.get(STORAGE_KEY, false);
        setData(res && res.value ? JSON.parse(res.value) : emptyData);
      } catch (e) {
        setData(emptyData);
      } finally {
        setLoading(false);
      }
    })();
  }, []);
  async function persist(newData) {
    setData(newData);
    try {
      const res = await window.storage.set(STORAGE_KEY, JSON.stringify(newData), false);
      setSaveError(!res);
    } catch (e) {
      setSaveError(true);
    }
  }
  const pendingByStudent = useMemo(() => {
    const map = {};
    for (const s of data.students) {
      if (s.archived) continue;
      const lessons = data.lessons[s.id] || [];
      const closed = data.closed[s.id] || {};
      const months = [...new Set(lessons.map((l) => l.date.slice(0, 7)))].filter((m) => m < CUR_MONTH && !closed[m]).sort();
      if (months.length) map[s.id] = months;
    }
    return map;
  }, [data]);
  const totalPending = Object.values(pendingByStudent).reduce((a, b) => a + b.length, 0);
  const [curYear, curMonthIdx0] = CUR_MONTH.split("-").map((n, i) => i === 1 ? Number(n) - 1 : Number(n));
  const overflowByStudent = useMemo(() => {
    const map = {};
    for (const s of data.students) {
      if (s.archived) continue;
      const overflow = scheduleOverflow(s, curYear, curMonthIdx0);
      if (overflow) map[s.id] = overflow;
    }
    return map;
  }, [data, curYear, curMonthIdx0]);
  const yearRevenue = useMemo(() => computeYearRevenue(data, curYear), [data, curYear]);
  async function handleImportData(imported) {
    if (!imported || !Array.isArray(imported.students) || typeof imported.lessons !== "object") {
      return false;
    }
    await persist({
      students: imported.students,
      lessons: imported.lessons || {},
      closed: imported.closed || {}
    });
    return true;
  }
  async function addStudent({ name, phone, rate, schedule, lessonsPerMonth }) {
    const s = {
      id: uid(),
      name,
      phone,
      rate: Number(rate) || 0,
      schedule: (schedule || []).map((e) => ({ day: Number(e.day), time: e.time || "" })),
      lessonsPerMonth: lessonsPerMonth === "" ? null : Number(lessonsPerMonth)
    };
    await persist({ ...data, students: [...data.students, s] });
    setShowAddStudent(false);
  }
  async function updateStudent(id, patch) {
    const normalized = { ...patch };
    if ("rate" in normalized) normalized.rate = Number(normalized.rate) || 0;
    if ("schedule" in normalized) {
      normalized.schedule = (normalized.schedule || []).map((e) => ({ day: Number(e.day), time: e.time || "" }));
      delete normalized.scheduleDay;
      delete normalized.scheduleTime;
    }
    if ("lessonsPerMonth" in normalized) normalized.lessonsPerMonth = normalized.lessonsPerMonth === "" ? null : Number(normalized.lessonsPerMonth);
    await persist({
      ...data,
      students: data.students.map((s) => s.id === id ? { ...s, ...normalized } : s)
    });
  }
  async function removeStudent(id) {
    const { [id]: _l, ...restLessons } = data.lessons;
    const { [id]: _c, ...restClosed } = data.closed;
    await persist({
      students: data.students.filter((s) => s.id !== id),
      lessons: restLessons,
      closed: restClosed
    });
    setView({ screen: "dashboard" });
  }
  async function addLesson(studentId, lesson) {
    const list = data.lessons[studentId] || [];
    await persist({
      ...data,
      lessons: { ...data.lessons, [studentId]: [...list, { id: uid(), ...lesson }] }
    });
  }
  async function removeLesson(studentId, lessonId) {
    const list = (data.lessons[studentId] || []).filter((l) => l.id !== lessonId);
    await persist({ ...data, lessons: { ...data.lessons, [studentId]: list } });
  }
  async function closeMonth(studentId, monthKey, lessons, message) {
    const total = lessons.length * (Number(data.students.find((s) => s.id === studentId)?.rate) || 0);
    const studentClosed = { ...data.closed[studentId] || {} };
    studentClosed[monthKey] = { count: lessons.length, total, message, closedAt: (/* @__PURE__ */ new Date()).toISOString() };
    await persist({ ...data, closed: { ...data.closed, [studentId]: studentClosed } });
  }
  async function reopenMonth(studentId, monthKey) {
    const studentClosed = { ...data.closed[studentId] || {} };
    delete studentClosed[monthKey];
    await persist({ ...data, closed: { ...data.closed, [studentId]: studentClosed } });
  }
  if (loading) {
    return /* @__PURE__ */ React.createElement(Shell, null, /* @__PURE__ */ React.createElement("div", { style: { padding: 40, textAlign: "center", color: "var(--muted)" } }, "Carregando painel\u2026"));
  }
  return /* @__PURE__ */ React.createElement(Shell, { saveError, onRetry: () => persist(data) }, view.screen === "dashboard" && /* @__PURE__ */ React.createElement(
    Dashboard,
    {
      data,
      pendingByStudent,
      totalPending,
      overflowByStudent,
      yearRevenue,
      curYear,
      onOpenStudent: (id) => setView({ screen: "student", id }),
      onAddStudent: () => setShowAddStudent(true),
      onOpenReport: () => setView({ screen: "report" }),
      onOpenBroadcast: () => setView({ screen: "broadcast" }),
      onOpenArchived: () => setView({ screen: "archived" }),
      onImportData: handleImportData
    }
  ), view.screen === "archived" && /* @__PURE__ */ React.createElement(
    ArchivedScreen,
    {
      data,
      onBack: () => setView({ screen: "dashboard" }),
      onOpenStudent: (id) => setView({ screen: "student", id }),
      onReactivate: (id) => updateStudent(id, { archived: false })
    }
  ), view.screen === "broadcast" && /* @__PURE__ */ React.createElement(BroadcastScreen, { data, onBack: () => setView({ screen: "dashboard" }) }), view.screen === "student" && /* @__PURE__ */ React.createElement(
    StudentDetail,
    {
      student: data.students.find((s) => s.id === view.id),
      lessons: data.lessons[view.id] || [],
      closed: data.closed[view.id] || {},
      pendingMonths: pendingByStudent[view.id] || [],
      curMonth: CUR_MONTH,
      onBack: () => setView({ screen: "dashboard" }),
      onUpdateStudent: (patch) => updateStudent(view.id, patch),
      onRemoveStudent: () => removeStudent(view.id),
      onAddLesson: (lesson) => addLesson(view.id, lesson),
      onRemoveLesson: (lessonId) => removeLesson(view.id, lessonId),
      onCloseMonth: (monthKey, lessons, message) => closeMonth(view.id, monthKey, lessons, message),
      onReopenMonth: (monthKey) => reopenMonth(view.id, monthKey),
      onOpenSuggestions: () => setView({ screen: "suggestions", id: view.id }),
      overflow: overflowByStudent[view.id] || null
    }
  ), view.screen === "report" && /* @__PURE__ */ React.createElement(ReportScreen, { data, onBack: () => setView({ screen: "dashboard" }) }), view.screen === "suggestions" && /* @__PURE__ */ React.createElement(
    SuggestionsScreen,
    {
      student: data.students.find((s) => s.id === view.id),
      lessons: data.lessons[view.id] || [],
      onBack: () => setView({ screen: "student", id: view.id })
    }
  ), showAddStudent && /* @__PURE__ */ React.createElement(StudentModal, { onClose: () => setShowAddStudent(false), onSave: addStudent }));
}
function Shell({ children, saveError, onRetry }) {
  return /* @__PURE__ */ React.createElement("div", { className: "pa-root" }, /* @__PURE__ */ React.createElement("style", null, `
        @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@500;600;700&family=Inter:wght@400;500;600;700&display=swap');
        .pa-root {
          --bg: #F6F7FB;
          --surface: #FFFFFF;
          --ink: #202433;
          --muted: #6B7280;
          --border: #E7E9F2;
          --primary: #12A594;
          --primary-ink: #08463D;
          --warn: #FF7A59;
          --warn-bg: #FFF1EC;
          font-family: 'Inter', sans-serif;
          background: var(--bg);
          color: var(--ink);
          min-height: 100%;
          padding: 28px 20px 60px;
          box-sizing: border-box;
        }
        .pa-root * { box-sizing: border-box; }
        .pa-h1 { font-family: 'Space Grotesk', sans-serif; font-weight: 700; font-size: 28px; margin: 0; letter-spacing: -0.02em; }
        .pa-h2 { font-family: 'Space Grotesk', sans-serif; font-weight: 600; font-size: 20px; margin: 0; }
        .pa-muted { color: var(--muted); font-size: 14px; }
        .pa-btn {
          font-family: 'Inter', sans-serif; font-weight: 600; font-size: 14px;
          border: none; border-radius: 10px; padding: 10px 16px; cursor: pointer;
          transition: transform .12s ease, box-shadow .12s ease; background: var(--primary); color: white;
        }
        .pa-btn:hover { transform: translateY(-1px); box-shadow: 0 6px 14px rgba(18,165,148,.28); }
        .pa-btn.secondary { background: var(--surface); color: var(--ink); border: 1px solid var(--border); }
        .pa-btn.secondary:hover { box-shadow: 0 4px 10px rgba(0,0,0,.06); }
        .pa-btn.ghost { background: transparent; color: var(--muted); padding: 6px 10px; }
        .pa-btn.danger { background: #fff; color: #D64545; border: 1px solid #F3D2D2; }
        .pa-input, .pa-textarea {
          font-family: 'Inter', sans-serif; font-size: 14px; padding: 10px 12px;
          border-radius: 10px; border: 1px solid var(--border); background: var(--surface); width: 100%; color: var(--ink);
        }
        .pa-input:focus, .pa-textarea:focus { outline: 2px solid var(--primary); outline-offset: 1px; }
        .pa-card {
          background: var(--surface); border-radius: 16px; border: 1px solid var(--border);
          box-shadow: 0 1px 2px rgba(20,20,43,.04);
        }
        .pa-save-error {
          position: fixed; bottom: 16px; right: 16px; background: #FFF1EC; border: 1px solid #FFD1C2;
          color: #B23A22; padding: 10px 14px; border-radius: 12px; font-size: 13px; display: flex; gap: 10px; align-items: center;
        }
        @media (max-width: 640px) {
          .pa-root { padding: 18px 12px 48px; }
          .pa-h1 { font-size: 22px; }
        }
      `), children, saveError && /* @__PURE__ */ React.createElement("div", { className: "pa-save-error" }, "N\xE3o consegui salvar agora.", /* @__PURE__ */ React.createElement("button", { className: "pa-btn", style: { padding: "4px 10px" }, onClick: onRetry }, "Tentar de novo")));
}
function Dashboard({
  data,
  pendingByStudent,
  totalPending,
  onOpenStudent,
  onAddStudent,
  onOpenReport,
  onOpenBroadcast,
  onOpenArchived,
  onImportData,
  overflowByStudent,
  yearRevenue,
  curYear
}) {
  const overflowEntries = Object.entries(overflowByStudent || {});
  const meiPct = Math.min(100, Math.round(yearRevenue / MEI_LIMIT * 100));
  const activeStudents = data.students.filter((s) => !s.archived);
  const archivedCount = data.students.length - activeStudents.length;
  const fileInputRef = useRef(null);
  const [importMsg, setImportMsg] = useState(null);
  function handleExport() {
    const blob = new Blob([JSON.stringify(data, null, 2)], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    const today = (/* @__PURE__ */ new Date()).toISOString().slice(0, 10);
    a.href = url;
    a.download = `painel-alunos-backup-${today}.json`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  }
  function handleImportClick() {
    fileInputRef.current?.click();
  }
  function handleFileChange(e) {
    const file = e.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = async (evt) => {
      try {
        const imported = JSON.parse(evt.target.result);
        const ok = await onImportData(imported);
        setImportMsg(ok ? "success" : "error");
      } catch (err) {
        setImportMsg("error");
      }
      setTimeout(() => setImportMsg(null), 4e3);
    };
    reader.readAsText(file);
    e.target.value = "";
  }
  return /* @__PURE__ */ React.createElement("div", { style: { maxWidth: 880, margin: "0 auto" } }, /* @__PURE__ */ React.createElement("div", { style: { display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 6, flexWrap: "wrap", gap: 12 } }, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("p", { className: "pa-muted", style: { margin: 0, textTransform: "uppercase", letterSpacing: ".08em", fontSize: 12 } }, "Aulas particulares"), /* @__PURE__ */ React.createElement("h1", { className: "pa-h1" }, "Meus alunos"), /* @__PURE__ */ React.createElement("p", { className: "pa-muted", style: { margin: "4px 0 0", fontSize: 13 } }, "Faturamento ", curYear, " (MEI): ", brl(yearRevenue), " de ", brl(MEI_LIMIT), " (", meiPct, "%)")), /* @__PURE__ */ React.createElement("div", { style: { display: "flex", gap: 10, flexWrap: "wrap" } }, /* @__PURE__ */ React.createElement("button", { className: "pa-btn secondary", onClick: handleExport }, "\u2B07\uFE0F Exportar dados"), /* @__PURE__ */ React.createElement("button", { className: "pa-btn secondary", onClick: handleImportClick }, "\u2B06\uFE0F Importar dados"), /* @__PURE__ */ React.createElement("input", { ref: fileInputRef, type: "file", accept: "application/json", style: { display: "none" }, onChange: handleFileChange }), /* @__PURE__ */ React.createElement("button", { className: "pa-btn secondary", onClick: onOpenBroadcast }, "\u{1F4E3} Aviso geral"), /* @__PURE__ */ React.createElement("button", { className: "pa-btn secondary", onClick: onOpenReport }, "Relat\xF3rio financeiro"), archivedCount > 0 && /* @__PURE__ */ React.createElement("button", { className: "pa-btn secondary", onClick: onOpenArchived }, "Arquivados (", archivedCount, ")"), /* @__PURE__ */ React.createElement("button", { className: "pa-btn", onClick: onAddStudent }, "+ Novo aluno"))), importMsg === "success" && /* @__PURE__ */ React.createElement("div", { className: "pa-card", style: { marginTop: 16, padding: 14, background: "#E6F7F3", border: "1px solid #C9E9E3" } }, /* @__PURE__ */ React.createElement("p", { style: { margin: 0, fontSize: 14 } }, "Dados importados com sucesso! \u2713")), importMsg === "error" && /* @__PURE__ */ React.createElement("div", { className: "pa-card", style: { marginTop: 16, padding: 14, background: "var(--warn-bg)", border: "1px solid #FFD9CB" } }, /* @__PURE__ */ React.createElement("p", { style: { margin: 0, fontSize: 14, color: "#B23A22" } }, "N\xE3o consegui ler esse arquivo. Confira se \xE9 um backup exportado daqui.")), yearRevenue >= MEI_LIMIT && /* @__PURE__ */ React.createElement("div", { className: "pa-card", style: { marginTop: 16, padding: 16, background: "var(--warn-bg)", border: "1px solid #FFD9CB" } }, /* @__PURE__ */ React.createElement("strong", { style: { color: "#B23A22" } }, "\u26A0\uFE0F Limite anual do MEI atingido"), /* @__PURE__ */ React.createElement("p", { style: { margin: "4px 0 0", fontSize: 14 } }, "Seu faturamento em ", curYear, " j\xE1 \xE9 ", brl(yearRevenue), ", passou do limite de ", brl(MEI_LIMIT), ". Vale conversar com seu contador sobre os pr\xF3ximos passos.")), totalPending > 0 && /* @__PURE__ */ React.createElement("div", { className: "pa-card", style: { marginTop: 20, padding: 16, background: "var(--warn-bg)", border: "1px solid #FFD9CB" } }, /* @__PURE__ */ React.createElement("strong", { style: { color: "#B23A22" } }, totalPending, " fechamento", totalPending > 1 ? "s" : "", " de m\xEAs pronto", totalPending > 1 ? "s" : "", " para enviar"), /* @__PURE__ */ React.createElement("div", { style: { display: "flex", flexWrap: "wrap", gap: 8, marginTop: 10 } }, Object.entries(pendingByStudent).map(([sid, months]) => {
    const s = data.students.find((st) => st.id === sid);
    if (!s) return null;
    return /* @__PURE__ */ React.createElement("button", { key: sid, className: "pa-btn secondary", onClick: () => onOpenStudent(sid) }, s.name, " \xB7 ", months.length);
  }))), overflowEntries.length > 0 && /* @__PURE__ */ React.createElement("div", { className: "pa-card", style: { marginTop: 20, padding: 16, background: "#F3EEFF", border: "1px solid #DCCCFF" } }, /* @__PURE__ */ React.createElement("strong", { style: { color: "#5B3EBF" } }, overflowEntries.length, " aluno", overflowEntries.length > 1 ? "s" : "", " com m\xEAs de 5 semanas"), /* @__PURE__ */ React.createElement("p", { className: "pa-muted", style: { margin: "4px 0 0" } }, "Esse m\xEAs passa do n\xFAmero de aulas contratadas \u2014 vale avisar."), /* @__PURE__ */ React.createElement("div", { style: { display: "flex", flexWrap: "wrap", gap: 8, marginTop: 10 } }, overflowEntries.map(([sid, info]) => {
    const s = data.students.find((st) => st.id === sid);
    if (!s) return null;
    return /* @__PURE__ */ React.createElement("button", { key: sid, className: "pa-btn secondary", onClick: () => onOpenStudent(sid) }, s.name, " \xB7 ", info.occurrences, "/", info.contracted);
  }))), activeStudents.length === 0 ? /* @__PURE__ */ React.createElement("div", { className: "pa-card", style: { marginTop: 24, padding: 40, textAlign: "center" } }, /* @__PURE__ */ React.createElement("p", { className: "pa-muted" }, "Nenhum aluno cadastrado ainda."), /* @__PURE__ */ React.createElement("button", { className: "pa-btn", style: { marginTop: 10 }, onClick: onAddStudent }, "Cadastrar primeiro aluno")) : /* @__PURE__ */ React.createElement("div", { style: { display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))", gap: 14, marginTop: 20 } }, activeStudents.map((s) => {
    const color = hashColor(s.id);
    const pending = pendingByStudent[s.id];
    return /* @__PURE__ */ React.createElement(
      "div",
      {
        key: s.id,
        className: "pa-card",
        onClick: () => onOpenStudent(s.id),
        style: { padding: 18, cursor: "pointer", position: "relative" }
      },
      pending && /* @__PURE__ */ React.createElement("span", { style: {
        position: "absolute",
        top: 14,
        right: 14,
        width: 10,
        height: 10,
        borderRadius: "50%",
        background: "var(--warn)"
      }, title: "Fechamento pendente" }),
      /* @__PURE__ */ React.createElement("div", { style: {
        width: 44,
        height: 44,
        borderRadius: 12,
        background: color + "22",
        color,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontFamily: "'Space Grotesk', sans-serif",
        fontWeight: 700,
        fontSize: 16
      } }, initials(s.name)),
      /* @__PURE__ */ React.createElement("h2", { className: "pa-h2", style: { marginTop: 12 } }, s.name),
      /* @__PURE__ */ React.createElement("p", { className: "pa-muted", style: { marginTop: 4 } }, brl(s.rate), " / aula")
    );
  })));
}
function ArchivedScreen({ data, onBack, onOpenStudent, onReactivate }) {
  const archived = data.students.filter((s) => s.archived);
  return /* @__PURE__ */ React.createElement("div", { style: { maxWidth: 760, margin: "0 auto" } }, /* @__PURE__ */ React.createElement("button", { className: "pa-btn ghost", onClick: onBack, style: { marginBottom: 10, paddingLeft: 0 } }, "\u2190 Voltar"), /* @__PURE__ */ React.createElement("h1", { className: "pa-h1" }, "Alunos arquivados"), /* @__PURE__ */ React.createElement("p", { className: "pa-muted", style: { marginTop: 4 } }, "Alunos que pararam de fazer aula. O hist\xF3rico deles continua salvo \u2014 reative quando voltarem."), /* @__PURE__ */ React.createElement("div", { style: { marginTop: 18 } }, archived.length === 0 && /* @__PURE__ */ React.createElement("p", { className: "pa-muted" }, "Nenhum aluno arquivado."), archived.map((s) => /* @__PURE__ */ React.createElement("div", { key: s.id, className: "pa-card", style: { padding: 16, marginBottom: 12, display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 10 } }, /* @__PURE__ */ React.createElement("div", { style: { cursor: "pointer" }, onClick: () => onOpenStudent(s.id) }, /* @__PURE__ */ React.createElement("strong", null, s.name), /* @__PURE__ */ React.createElement("p", { className: "pa-muted", style: { margin: "2px 0 0", fontSize: 14 } }, brl(s.rate), " / aula")), /* @__PURE__ */ React.createElement("button", { className: "pa-btn secondary", onClick: () => onReactivate(s.id) }, "Reativar")))));
}
function ReportScreen({ data, onBack }) {
  const curYear = (/* @__PURE__ */ new Date()).getFullYear();
  const monthly = useMemo(() => {
    const map = {};
    data.students.forEach((s) => {
      const lessons = data.lessons[s.id] || [];
      const closedMonths = data.closed[s.id] || {};
      lessons.forEach((l) => {
        const mk = l.date.slice(0, 7);
        if (Number(mk.slice(0, 4)) !== curYear) return;
        if (!map[mk]) map[mk] = { total: 0, count: 0, byStudent: {} };
        map[mk].total += Number(s.rate) || 0;
        map[mk].count += 1;
        if (!map[mk].byStudent[s.id]) {
          map[mk].byStudent[s.id] = { name: s.name, count: 0, total: 0, closed: !!closedMonths[mk] };
        }
        map[mk].byStudent[s.id].count += 1;
        map[mk].byStudent[s.id].total += Number(s.rate) || 0;
      });
    });
    return Object.entries(map).sort((a, b) => b[0].localeCompare(a[0]));
  }, [data, curYear]);
  const grandTotal = monthly.reduce((sum, [, v]) => sum + v.total, 0);
  const maxTotal = Math.max(1, ...monthly.map(([, v]) => v.total));
  return /* @__PURE__ */ React.createElement("div", { style: { maxWidth: 760, margin: "0 auto" } }, /* @__PURE__ */ React.createElement("button", { className: "pa-btn ghost", onClick: onBack, style: { marginBottom: 10, paddingLeft: 0 } }, "\u2190 Voltar"), /* @__PURE__ */ React.createElement("h1", { className: "pa-h1" }, "Relat\xF3rio financeiro"), /* @__PURE__ */ React.createElement("p", { className: "pa-muted", style: { marginTop: 4 } }, "Quanto cada m\xEAs de ", curYear, " representa, somando todos os alunos \u2014 inclui aulas j\xE1 dadas em meses ainda em andamento."), /* @__PURE__ */ React.createElement("div", { className: "pa-card", style: { padding: 18, marginTop: 18, display: "flex", justifyContent: "space-between", alignItems: "baseline" } }, /* @__PURE__ */ React.createElement("span", { className: "pa-muted" }, "Total em ", curYear), /* @__PURE__ */ React.createElement("span", { style: { fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, fontSize: 24 } }, brl(grandTotal))), /* @__PURE__ */ React.createElement("div", { style: { marginTop: 18 } }, monthly.length === 0 && /* @__PURE__ */ React.createElement("p", { className: "pa-muted" }, "Nenhuma aula registrada ainda."), monthly.map(([mk, info]) => /* @__PURE__ */ React.createElement(MonthReportCard, { key: mk, monthKey: mk, info, maxTotal }))));
}
function MonthReportCard({ monthKey, info, maxTotal }) {
  const [open, setOpen] = useState(false);
  const students = Object.values(info.byStudent).sort((a, b) => b.total - a.total);
  const allClosed = students.every((s) => s.closed);
  const barWidth = Math.max(4, Math.round(info.total / maxTotal * 100));
  return /* @__PURE__ */ React.createElement("div", { className: "pa-card", style: { padding: 16, marginBottom: 12 } }, /* @__PURE__ */ React.createElement(
    "div",
    {
      style: { cursor: "pointer" },
      onClick: () => setOpen((o) => !o)
    },
    /* @__PURE__ */ React.createElement("div", { style: { display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 8 } }, /* @__PURE__ */ React.createElement("strong", { style: { textTransform: "capitalize" } }, monthLabel(monthKey)), /* @__PURE__ */ React.createElement("div", { style: { display: "flex", alignItems: "center", gap: 8 } }, /* @__PURE__ */ React.createElement(
      "span",
      {
        style: {
          background: allClosed ? "#E6F7F3" : "var(--warn-bg)",
          color: allClosed ? "var(--primary-ink)" : "#B23A22",
          fontSize: 12,
          fontWeight: 600,
          padding: "3px 8px",
          borderRadius: 999
        }
      },
      allClosed ? "Fechado" : "Em andamento"
    ), /* @__PURE__ */ React.createElement("span", { style: { fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, fontSize: 17 } }, brl(info.total)))),
    /* @__PURE__ */ React.createElement("p", { className: "pa-muted", style: { margin: "4px 0 0" } }, info.count, " aula(s) \xB7 ", students.length, " aluno(s)"),
    /* @__PURE__ */ React.createElement("div", { style: { background: "var(--border)", borderRadius: 999, height: 6, marginTop: 10, overflow: "hidden" } }, /* @__PURE__ */ React.createElement("div", { style: { width: `${barWidth}%`, height: "100%", background: "var(--primary)", borderRadius: 999 } }))
  ), open && /* @__PURE__ */ React.createElement("div", { style: { marginTop: 12, borderTop: "1px solid var(--border)", paddingTop: 10 } }, students.map((s) => /* @__PURE__ */ React.createElement("div", { key: s.name, style: { display: "flex", justifyContent: "space-between", padding: "4px 0", fontSize: 14 } }, /* @__PURE__ */ React.createElement("span", null, s.name, " ", s.closed ? "\u2713" : "", " ", /* @__PURE__ */ React.createElement("span", { className: "pa-muted" }, "\xB7 ", s.count, " aula(s)")), /* @__PURE__ */ React.createElement("span", null, brl(s.total))))));
}
function BroadcastScreen({ data, onBack }) {
  const defaultMessage = "Oi {nome}! Passando pra avisar que n\xE3o teremos aula no per\xEDodo de [DATA] a [DATA] por conta de [motivo]. Qualquer d\xFAvida me chama por aqui!";
  const [message, setMessage] = useState(defaultMessage);
  const [selected, setSelected] = useState(() => new Set(data.students.map((s) => s.id)));
  const [copiedId, setCopiedId] = useState(null);
  const allSelected = data.students.length > 0 && selected.size === data.students.length;
  function toggleAll() {
    setSelected(allSelected ? /* @__PURE__ */ new Set() : new Set(data.students.map((s) => s.id)));
  }
  function toggleOne(id) {
    setSelected((prev) => {
      const next = new Set(prev);
      next.has(id) ? next.delete(id) : next.add(id);
      return next;
    });
  }
  function personalize(student) {
    const first = student.name.trim().split(/\s+/)[0];
    return message.replaceAll("{nome}", first);
  }
  async function handleCopy(student) {
    try {
      await navigator.clipboard.writeText(personalize(student));
      setCopiedId(student.id);
      setTimeout(() => setCopiedId(null), 2e3);
    } catch (e) {
    }
  }
  const selectedStudents = data.students.filter((s) => selected.has(s.id));
  return /* @__PURE__ */ React.createElement("div", { style: { maxWidth: 760, margin: "0 auto" } }, /* @__PURE__ */ React.createElement("button", { className: "pa-btn ghost", onClick: onBack, style: { marginBottom: 10, paddingLeft: 0 } }, "\u2190 Voltar"), /* @__PURE__ */ React.createElement("h1", { className: "pa-h1" }, "Aviso geral"), /* @__PURE__ */ React.createElement("p", { className: "pa-muted", style: { marginTop: 4 } }, "Escreva uma mensagem (use ", /* @__PURE__ */ React.createElement("strong", null, "{nome}"), " para o primeiro nome de cada aluno), escolha para quem enviar, e mande pelo WhatsApp um por um \u2014 cada aluno recebe a conversa j\xE1 aberta com a mensagem pronta."), /* @__PURE__ */ React.createElement("div", { className: "pa-card", style: { padding: 18, marginTop: 16 } }, /* @__PURE__ */ React.createElement("label", { className: "pa-muted", style: { display: "block", marginBottom: 6 } }, "Mensagem"), /* @__PURE__ */ React.createElement(
    "textarea",
    {
      className: "pa-textarea",
      rows: 5,
      value: message,
      onChange: (e) => setMessage(e.target.value)
    }
  )), /* @__PURE__ */ React.createElement("div", { className: "pa-card", style: { padding: 18, marginTop: 16 } }, /* @__PURE__ */ React.createElement("div", { style: { display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 10 } }, /* @__PURE__ */ React.createElement("strong", null, "Enviar para"), /* @__PURE__ */ React.createElement("label", { style: { display: "flex", alignItems: "center", gap: 6, fontSize: 14, cursor: "pointer" } }, /* @__PURE__ */ React.createElement("input", { type: "checkbox", checked: allSelected, onChange: toggleAll }), "Selecionar todos")), data.students.length === 0 && /* @__PURE__ */ React.createElement("p", { className: "pa-muted" }, "Nenhum aluno cadastrado ainda."), data.students.map((s) => /* @__PURE__ */ React.createElement(
    "label",
    {
      key: s.id,
      style: {
        display: "flex",
        alignItems: "center",
        gap: 10,
        padding: "8px 0",
        borderTop: "1px solid var(--border)",
        cursor: "pointer",
        fontSize: 14
      }
    },
    /* @__PURE__ */ React.createElement("input", { type: "checkbox", checked: selected.has(s.id), onChange: () => toggleOne(s.id) }),
    /* @__PURE__ */ React.createElement("span", { style: { flex: 1 } }, s.name),
    !s.phone && /* @__PURE__ */ React.createElement("span", { className: "pa-muted", style: { fontSize: 12 } }, "sem WhatsApp cadastrado")
  ))), selectedStudents.length > 0 && /* @__PURE__ */ React.createElement("div", { style: { marginTop: 18 } }, /* @__PURE__ */ React.createElement("h2", { className: "pa-h2", style: { marginBottom: 10 } }, "Enviar (", selectedStudents.length, ")"), selectedStudents.map((s) => {
    const waLink = `https://wa.me/${normalizePhone(s.phone)}?text=${encodeURIComponent(personalize(s))}`;
    return /* @__PURE__ */ React.createElement("div", { key: s.id, className: "pa-card", style: { padding: 14, marginBottom: 10, display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 10 } }, /* @__PURE__ */ React.createElement("span", null, s.name), /* @__PURE__ */ React.createElement("div", { style: { display: "flex", gap: 8 } }, s.phone ? /* @__PURE__ */ React.createElement("a", { className: "pa-btn", href: waLink, target: "_blank", rel: "noopener noreferrer", style: { textDecoration: "none", background: "#25D366" } }, "Enviar no WhatsApp") : /* @__PURE__ */ React.createElement("span", { className: "pa-muted", style: { fontSize: 13 } }, "Sem telefone"), /* @__PURE__ */ React.createElement("button", { className: "pa-btn secondary", onClick: () => handleCopy(s) }, copiedId === s.id ? "Copiado!" : "Copiar")));
  })));
}
function SuggestionsScreen({ student, lessons, onBack }) {
  if (!student) return /* @__PURE__ */ React.createElement("div", { className: "pa-muted" }, "Aluno n\xE3o encontrado.");
  const studentKey = normalizeName(student.name);
  const doneNormalized = lessons.map((l) => normalizeName(l.desc));
  const suggestions = useMemo(() => {
    const available = LESSON_CATALOG.filter(
      (item) => !item.studentOnly || item.studentOnly === studentKey
    );
    const notDone = available.filter((item) => {
      const t = normalizeName(item.title);
      return !doneNormalized.some((desc) => desc.includes(t) || t.includes(desc));
    });
    const byCategory = {};
    notDone.forEach((item) => {
      (byCategory[item.category] = byCategory[item.category] || []).push(item.title);
    });
    return Object.entries(byCategory).sort((a, b) => a[0].localeCompare(b[0]));
  }, [studentKey, lessons]);
  const totalSuggestions = suggestions.reduce((sum, [, items]) => sum + items.length, 0);
  return /* @__PURE__ */ React.createElement("div", { style: { maxWidth: 760, margin: "0 auto" } }, /* @__PURE__ */ React.createElement("button", { className: "pa-btn ghost", onClick: onBack, style: { marginBottom: 10, paddingLeft: 0 } }, "\u2190 Voltar"), /* @__PURE__ */ React.createElement("h1", { className: "pa-h1" }, "Sugest\xF5es para ", student.name), /* @__PURE__ */ React.createElement("p", { className: "pa-muted", style: { marginTop: 4 } }, "Aulas do seu cat\xE1logo do Canva que ainda n\xE3o aparecem no hist\xF3rico deste aluno. A compara\xE7\xE3o \xE9 por nome \u2014 vale conferir antes, pode haver aulas com nomes um pouco diferentes do que voc\xEA registrou."), /* @__PURE__ */ React.createElement("div", { className: "pa-card", style: { padding: 16, marginTop: 16 } }, /* @__PURE__ */ React.createElement("p", { style: { margin: 0, fontSize: 14 } }, totalSuggestions, " sugest\xE3o(\xF5es) em ", suggestions.length, " categoria(s)")), /* @__PURE__ */ React.createElement("div", { style: { marginTop: 16 } }, suggestions.length === 0 && /* @__PURE__ */ React.createElement("p", { className: "pa-muted" }, "Nenhuma sugest\xE3o \u2014 parece que esse aluno j\xE1 viu tudo do cat\xE1logo (ou os nomes n\xE3o bateram)."), suggestions.map(([category, items]) => /* @__PURE__ */ React.createElement("div", { key: category, className: "pa-card", style: { padding: 16, marginBottom: 12 } }, /* @__PURE__ */ React.createElement("strong", null, category), /* @__PURE__ */ React.createElement("div", { style: { marginTop: 8 } }, items.map((title) => /* @__PURE__ */ React.createElement("div", { key: title, style: { padding: "6px 0", borderTop: "1px solid var(--border)", fontSize: 14 } }, title)))))));
}
function StudentModal({ onClose, onSave, initial }) {
  const [name, setName] = useState(initial?.name || "");
  const [phone, setPhone] = useState(initial?.phone || "");
  const [rate, setRate] = useState(initial?.rate ?? "");
  const [schedule, setSchedule] = useState(() => {
    const existing = initial ? getSchedule(initial) : [];
    return existing.length > 0 ? existing.map((e) => ({ day: String(e.day), time: e.time || "" })) : [{ day: "", time: "" }];
  });
  const [lessonsPerMonth, setLessonsPerMonth] = useState(
    initial?.lessonsPerMonth !== void 0 && initial?.lessonsPerMonth !== null ? String(initial.lessonsPerMonth) : ""
  );
  function updateScheduleEntry(index, field, value) {
    setSchedule((prev) => prev.map((e, i) => i === index ? { ...e, [field]: value } : e));
  }
  function addScheduleEntry() {
    setSchedule((prev) => [...prev, { day: "", time: "" }]);
  }
  function removeScheduleEntry(index) {
    setSchedule((prev) => prev.filter((_, i) => i !== index));
  }
  return /* @__PURE__ */ React.createElement("div", { style: {
    position: "fixed",
    inset: 0,
    background: "rgba(20,20,43,.35)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: 16,
    zIndex: 20
  }, onClick: onClose }, /* @__PURE__ */ React.createElement("div", { className: "pa-card", style: { padding: 24, width: 380, maxWidth: "100%", maxHeight: "90vh", overflowY: "auto" }, onClick: (e) => e.stopPropagation() }, /* @__PURE__ */ React.createElement("h2", { className: "pa-h2", style: { marginBottom: 16 } }, initial ? "Editar aluno" : "Novo aluno"), /* @__PURE__ */ React.createElement("label", { className: "pa-muted" }, "Nome"), /* @__PURE__ */ React.createElement("input", { className: "pa-input", style: { marginTop: 4, marginBottom: 12 }, value: name, onChange: (e) => setName(e.target.value), placeholder: "Nome completo" }), /* @__PURE__ */ React.createElement("label", { className: "pa-muted" }, "WhatsApp (com DDD)"), /* @__PURE__ */ React.createElement("input", { className: "pa-input", style: { marginTop: 4, marginBottom: 12 }, value: phone, onChange: (e) => setPhone(e.target.value), placeholder: "48 99999-9999" }), /* @__PURE__ */ React.createElement("label", { className: "pa-muted" }, "Valor por aula (R$)"), /* @__PURE__ */ React.createElement("input", { className: "pa-input", style: { marginTop: 4, marginBottom: 12 }, type: "number", min: "0", step: "0.01", value: rate, onChange: (e) => setRate(e.target.value), placeholder: "80" }), /* @__PURE__ */ React.createElement("label", { className: "pa-muted" }, "Dias e hor\xE1rios de aula"), /* @__PURE__ */ React.createElement("div", { style: { marginTop: 4, marginBottom: 8, display: "flex", flexDirection: "column", gap: 8 } }, schedule.map((entry, i) => /* @__PURE__ */ React.createElement("div", { key: i, style: { display: "flex", gap: 6 } }, /* @__PURE__ */ React.createElement(
    "select",
    {
      className: "pa-input",
      style: { flex: 1.3 },
      value: entry.day,
      onChange: (e) => updateScheduleEntry(i, "day", e.target.value)
    },
    /* @__PURE__ */ React.createElement("option", { value: "" }, "Dia\u2026"),
    WEEKDAYS.map((w, wi) => /* @__PURE__ */ React.createElement("option", { key: wi, value: wi }, w))
  ), /* @__PURE__ */ React.createElement(
    "input",
    {
      className: "pa-input",
      style: { flex: 1 },
      type: "time",
      value: entry.time,
      onChange: (e) => updateScheduleEntry(i, "time", e.target.value)
    }
  ), schedule.length > 1 && /* @__PURE__ */ React.createElement("button", { className: "pa-btn ghost", style: { padding: "6px 10px" }, onClick: () => removeScheduleEntry(i) }, "\u2715")))), /* @__PURE__ */ React.createElement("button", { className: "pa-btn secondary", style: { marginBottom: 16 }, onClick: addScheduleEntry }, "+ Adicionar outro dia"), /* @__PURE__ */ React.createElement("label", { className: "pa-muted" }, "Aulas contratadas por m\xEAs"), /* @__PURE__ */ React.createElement("input", { className: "pa-input", style: { marginTop: 4, marginBottom: 20 }, type: "number", min: "0", step: "1", value: lessonsPerMonth, onChange: (e) => setLessonsPerMonth(e.target.value), placeholder: "4" }), /* @__PURE__ */ React.createElement("div", { style: { display: "flex", gap: 10, justifyContent: "flex-end" } }, /* @__PURE__ */ React.createElement("button", { className: "pa-btn secondary", onClick: onClose }, "Cancelar"), /* @__PURE__ */ React.createElement(
    "button",
    {
      className: "pa-btn",
      disabled: !name.trim(),
      style: { opacity: name.trim() ? 1 : 0.5 },
      onClick: () => name.trim() && onSave({
        name: name.trim(),
        phone,
        rate,
        schedule: schedule.filter((e) => e.day !== ""),
        lessonsPerMonth
      })
    },
    "Salvar"
  ))));
}
function StudentDetail({
  student,
  lessons,
  closed,
  pendingMonths,
  curMonth,
  onBack,
  onUpdateStudent,
  onRemoveStudent,
  onAddLesson,
  onRemoveLesson,
  onCloseMonth,
  onReopenMonth,
  onOpenSuggestions,
  overflow
}) {
  const [editing, setEditing] = useState(false);
  const [date, setDate] = useState((/* @__PURE__ */ new Date()).toISOString().slice(0, 10));
  const [desc, setDesc] = useState("");
  const [confirmDelete, setConfirmDelete] = useState(false);
  const [search, setSearch] = useState("");
  const [similarWarning, setSimilarWarning] = useState(null);
  const [manualClosingMonth, setManualClosingMonth] = useState(null);
  if (!student) return /* @__PURE__ */ React.createElement("div", { className: "pa-muted" }, "Aluno n\xE3o encontrado.");
  const color = hashColor(student.id);
  const byMonth = useMemo(() => {
    const groups = {};
    for (const l of lessons) {
      const mk = l.date.slice(0, 7);
      (groups[mk] = groups[mk] || []).push(l);
    }
    return Object.entries(groups).sort((a, b) => b[0].localeCompare(a[0]));
  }, [lessons]);
  const closedMonthsSorted = Object.keys(closed).sort((a, b) => b.localeCompare(a));
  const todayStr = (/* @__PURE__ */ new Date()).toISOString().slice(0, 10);
  const stats = useMemo(() => {
    const doneLessons = lessons.filter((l) => l.date <= todayStr);
    if (doneLessons.length === 0) return null;
    const startDate = doneLessons.reduce((min, l) => l.date < min ? l.date : min, doneLessons[0].date);
    return { startDate, count: doneLessons.length };
  }, [lessons, todayStr]);
  const filteredByMonth = useMemo(() => {
    if (!search.trim()) return byMonth;
    const q = normalizeName(search);
    return byMonth.map(([mk, monthLessons]) => [mk, monthLessons.filter((l) => normalizeName(l.desc).includes(q))]).filter(([, monthLessons]) => monthLessons.length > 0);
  }, [byMonth, search]);
  function handleAdd() {
    if (!desc.trim() || !date) return;
    const match = findSimilarLesson(desc.trim(), lessons);
    if (match) {
      setSimilarWarning(match);
      return;
    }
    onAddLesson({ date, desc: desc.trim() });
    setDesc("");
  }
  function handleAddAnyway() {
    onAddLesson({ date, desc: desc.trim() });
    setDesc("");
    setSimilarWarning(null);
  }
  return /* @__PURE__ */ React.createElement("div", { style: { maxWidth: 760, margin: "0 auto" } }, /* @__PURE__ */ React.createElement("button", { className: "pa-btn ghost", onClick: onBack, style: { marginBottom: 10, paddingLeft: 0 } }, "\u2190 Voltar"), /* @__PURE__ */ React.createElement("div", { style: { display: "flex", gap: 14, alignItems: "center", flexWrap: "wrap" } }, /* @__PURE__ */ React.createElement("div", { style: {
    width: 52,
    height: 52,
    borderRadius: 14,
    background: color + "22",
    color,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontFamily: "'Space Grotesk', sans-serif",
    fontWeight: 700,
    fontSize: 18
  } }, initials(student.name)), /* @__PURE__ */ React.createElement("div", { style: { flex: 1, minWidth: 180 } }, /* @__PURE__ */ React.createElement("h1", { className: "pa-h1" }, student.name), /* @__PURE__ */ React.createElement("p", { className: "pa-muted" }, brl(student.rate), " / aula ", student.phone ? `\xB7 ${student.phone}` : ""), (() => {
    const schedule = getSchedule(student);
    if (schedule.length === 0) {
      return /* @__PURE__ */ React.createElement("p", { className: "pa-muted", style: { marginTop: 2, fontStyle: "italic" } }, 'Dia/hor\xE1rio e aulas contratadas ainda n\xE3o configurados \u2014 clique em "Editar" para preencher.');
    }
    const scheduleText = schedule.map((e) => `${WEEKDAYS[e.day]}${e.time ? ` \xE0s ${e.time}` : ""}`).join(" e ");
    return /* @__PURE__ */ React.createElement("p", { className: "pa-muted", style: { marginTop: 2, textTransform: "capitalize" } }, "Aula toda ", scheduleText, student.lessonsPerMonth ? ` \xB7 ${student.lessonsPerMonth} aula(s)/m\xEAs contratadas` : "");
  })(), stats && /* @__PURE__ */ React.createElement("p", { className: "pa-muted", style: { marginTop: 2 } }, "Aluno desde ", dateBRFull(stats.startDate), " (", formatDuration(stats.startDate), ") \xB7 ", stats.count, " aula(s) dadas")), /* @__PURE__ */ React.createElement("button", { className: "pa-btn secondary", onClick: () => setEditing(true) }, "Editar")), /* @__PURE__ */ React.createElement("div", { style: { marginTop: 14 } }, /* @__PURE__ */ React.createElement("button", { className: "pa-btn secondary", onClick: onOpenSuggestions }, "\u{1F4A1} Sugest\xF5es de aulas")), overflow && /* @__PURE__ */ React.createElement("div", { className: "pa-card", style: { marginTop: 16, padding: 16, background: "#F3EEFF", border: "1px solid #DCCCFF" } }, /* @__PURE__ */ React.createElement("strong", { style: { color: "#5B3EBF" } }, "Esse m\xEAs passa do combinado"), /* @__PURE__ */ React.createElement("p", { style: { margin: "4px 0 0", fontSize: 14 } }, "S\xE3o ", overflow.occurrences, " aulas esse m\xEAs, mas o combinado s\xE3o ", overflow.contracted, ". Vale perguntar pro aluno se ele quer fazer a aula extra ou pular uma.")), pendingMonths.map((mk) => /* @__PURE__ */ React.createElement(
    ClosingCard,
    {
      key: mk,
      student,
      monthKey: mk,
      lessons: (byMonth.find(([k]) => k === mk) || [null, []])[1],
      onClose: (msg, lessonsSnapshot) => onCloseMonth(mk, lessonsSnapshot, msg)
    }
  )), manualClosingMonth && !pendingMonths.includes(manualClosingMonth) && /* @__PURE__ */ React.createElement(
    ClosingCard,
    {
      key: "manual-" + manualClosingMonth,
      student,
      monthKey: manualClosingMonth,
      lessons: (byMonth.find(([k]) => k === manualClosingMonth) || [null, []])[1],
      onClose: (msg, lessonsSnapshot) => {
        onCloseMonth(manualClosingMonth, lessonsSnapshot, msg);
        setManualClosingMonth(null);
      },
      onDismiss: () => setManualClosingMonth(null)
    }
  ), /* @__PURE__ */ React.createElement("div", { className: "pa-card", style: { padding: 18, marginTop: 22 } }, /* @__PURE__ */ React.createElement("h2", { className: "pa-h2", style: { marginBottom: 12 } }, "Registrar aula"), /* @__PURE__ */ React.createElement("div", { style: { display: "flex", gap: 10, flexWrap: "wrap" } }, /* @__PURE__ */ React.createElement("input", { className: "pa-input", type: "date", style: { width: 160 }, value: date, onChange: (e) => setDate(e.target.value) }), /* @__PURE__ */ React.createElement(
    "input",
    {
      className: "pa-input",
      style: { flex: 1, minWidth: 180 },
      placeholder: "O que foi trabalhado na aula",
      value: desc,
      onChange: (e) => {
        setDesc(e.target.value);
        setSimilarWarning(null);
      },
      onKeyDown: (e) => e.key === "Enter" && handleAdd()
    }
  ), /* @__PURE__ */ React.createElement("button", { className: "pa-btn", onClick: handleAdd, disabled: !desc.trim(), style: { opacity: desc.trim() ? 1 : 0.5 } }, "Adicionar")), similarWarning && /* @__PURE__ */ React.createElement("div", { style: {
    marginTop: 12,
    padding: 12,
    borderRadius: 10,
    background: "var(--warn-bg)",
    border: "1px solid #FFD9CB"
  } }, /* @__PURE__ */ React.createElement("p", { style: { margin: 0, fontSize: 14, color: "#B23A22" } }, "Isso parece parecido com ", /* @__PURE__ */ React.createElement("strong", null, '"', similarWarning.desc, '"'), ", feita em ", dateBR(similarWarning.date), ". Tem certeza que j\xE1 n\xE3o fez essa aula?"), /* @__PURE__ */ React.createElement("div", { style: { display: "flex", gap: 10, marginTop: 8 } }, /* @__PURE__ */ React.createElement("button", { className: "pa-btn", onClick: handleAddAnyway }, "Adicionar mesmo assim"), /* @__PURE__ */ React.createElement("button", { className: "pa-btn secondary", onClick: () => setSimilarWarning(null) }, "Cancelar")))), /* @__PURE__ */ React.createElement("div", { style: { marginTop: 22 } }, /* @__PURE__ */ React.createElement(
    "input",
    {
      className: "pa-input",
      placeholder: "Pesquisar nas aulas j\xE1 dadas\u2026",
      value: search,
      onChange: (e) => setSearch(e.target.value),
      style: { marginBottom: 14 }
    }
  ), byMonth.length === 0 && /* @__PURE__ */ React.createElement("p", { className: "pa-muted" }, "Nenhuma aula registrada ainda."), byMonth.length > 0 && filteredByMonth.length === 0 && /* @__PURE__ */ React.createElement("p", { className: "pa-muted" }, 'Nenhuma aula encontrada para "', search, '".'), filteredByMonth.map(([mk, monthLessons]) => {
    const isClosed = !!closed[mk];
    return /* @__PURE__ */ React.createElement("div", { key: mk, className: "pa-card", style: { padding: 16, marginBottom: 12 } }, /* @__PURE__ */ React.createElement("div", { style: { display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 8 } }, /* @__PURE__ */ React.createElement("strong", { style: { textTransform: "capitalize" } }, monthLabel(mk)), /* @__PURE__ */ React.createElement("div", { style: { display: "flex", alignItems: "center", gap: 8 } }, /* @__PURE__ */ React.createElement("span", { className: "pa-muted" }, search.trim() ? `${monthLessons.length} encontrada(s)` : `${monthLessons.length} aula(s) \xB7 ${brl(monthLessons.length * student.rate)}`), isClosed && /* @__PURE__ */ React.createElement("span", { style: { background: "#E6F7F3", color: "var(--primary-ink)", fontSize: 12, fontWeight: 600, padding: "3px 8px", borderRadius: 999 } }, "Fechado \u2713"), !isClosed && !search.trim() && /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(
      "button",
      {
        className: "pa-btn secondary",
        onClick: () => setManualClosingMonth(mk)
      },
      "Gerar aviso de pagamento"
    ), /* @__PURE__ */ React.createElement(
      "button",
      {
        className: "pa-btn secondary",
        onClick: () => {
          const fullMonthLessons = (byMonth.find(([k]) => k === mk) || [null, []])[1];
          onCloseMonth(mk, fullMonthLessons, "");
        }
      },
      "Dar baixa"
    )))), /* @__PURE__ */ React.createElement("div", { style: { marginTop: 10 } }, monthLessons.sort((a, b) => a.date.localeCompare(b.date)).map((l) => /* @__PURE__ */ React.createElement("div", { key: l.id, style: { display: "flex", justifyContent: "space-between", alignItems: "center", padding: "6px 0", borderTop: "1px solid var(--border)" } }, /* @__PURE__ */ React.createElement("span", { style: { fontSize: 14 } }, dateBR(l.date), " \u2014 ", l.desc), !isClosed && /* @__PURE__ */ React.createElement("button", { className: "pa-btn ghost", onClick: () => onRemoveLesson(l.id) }, "Excluir")))), isClosed && /* @__PURE__ */ React.createElement("button", { className: "pa-btn ghost", style: { marginTop: 8 }, onClick: () => onReopenMonth(mk) }, "Reabrir fechamento"));
  })), /* @__PURE__ */ React.createElement("div", { style: { marginTop: 24, display: "flex", justifyContent: "flex-end", gap: 10, flexWrap: "wrap" } }, student.archived ? /* @__PURE__ */ React.createElement("button", { className: "pa-btn secondary", onClick: () => {
    onUpdateStudent({ archived: false });
  } }, "Reativar aluno") : /* @__PURE__ */ React.createElement(
    "button",
    {
      className: "pa-btn secondary",
      onClick: () => {
        onUpdateStudent({ archived: true });
        onBack();
      }
    },
    "Arquivar aluno"
  ), !confirmDelete ? /* @__PURE__ */ React.createElement("button", { className: "pa-btn danger", onClick: () => setConfirmDelete(true) }, "Remover aluno") : /* @__PURE__ */ React.createElement("span", { style: { fontSize: 14 } }, "Remover ", student.name, " e todo o hist\xF3rico?", " ", /* @__PURE__ */ React.createElement("button", { className: "pa-btn danger", onClick: onRemoveStudent }, "Confirmar"), " ", /* @__PURE__ */ React.createElement("button", { className: "pa-btn secondary", onClick: () => setConfirmDelete(false) }, "Cancelar"))), editing && /* @__PURE__ */ React.createElement(
    StudentModal,
    {
      initial: student,
      onClose: () => setEditing(false),
      onSave: (patch) => {
        onUpdateStudent(patch);
        setEditing(false);
      }
    }
  ));
}
function ClosingCard({ student, monthKey, lessons, onClose, onDismiss }) {
  const [message, setMessage] = useState(() => buildMessage(student, monthKey, lessons));
  const [copied, setCopied] = useState(false);
  const [archived, setArchived] = useState(false);
  const total = lessons.length * (Number(student.rate) || 0);
  const waLink = `https://wa.me/${normalizePhone(student.phone)}?text=${encodeURIComponent(message)}`;
  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(message);
      setCopied(true);
      setTimeout(() => setCopied(false), 2e3);
    } catch (e) {
      setCopied(false);
    }
  }
  if (archived) return null;
  return /* @__PURE__ */ React.createElement("div", { style: { marginTop: 20, position: "relative" } }, /* @__PURE__ */ React.createElement(
    "div",
    {
      className: "pa-card",
      style: {
        padding: "22px 22px 18px",
        position: "relative",
        overflow: "hidden",
        background: "linear-gradient(180deg, #FFFFFF 0%, #FBFDFC 100%)",
        borderTop: "3px dashed #C9E9E3"
      }
    },
    /* @__PURE__ */ React.createElement("div", { style: { display: "flex", justifyContent: "space-between", alignItems: "baseline", flexWrap: "wrap", gap: 8 } }, /* @__PURE__ */ React.createElement("span", { style: {
      fontFamily: "'Space Grotesk', sans-serif",
      fontWeight: 700,
      fontSize: 12,
      textTransform: "uppercase",
      letterSpacing: ".08em",
      color: "var(--primary-ink)"
    } }, "Fechamento \xB7 ", monthLabel(monthKey)), /* @__PURE__ */ React.createElement("span", { style: { fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, fontSize: 22 } }, brl(total))),
    /* @__PURE__ */ React.createElement("p", { className: "pa-muted", style: { marginTop: 4 } }, lessons.length, " aula(s) neste m\xEAs"),
    /* @__PURE__ */ React.createElement("label", { className: "pa-muted", style: { display: "block", marginTop: 14, marginBottom: 4 } }, "Mensagem para enviar"),
    /* @__PURE__ */ React.createElement(
      "textarea",
      {
        className: "pa-textarea",
        rows: 7,
        value: message,
        onChange: (e) => setMessage(e.target.value)
      }
    ),
    /* @__PURE__ */ React.createElement("div", { style: { display: "flex", gap: 10, flexWrap: "wrap", marginTop: 14 } }, /* @__PURE__ */ React.createElement(
      "a",
      {
        className: "pa-btn",
        href: waLink,
        target: "_blank",
        rel: "noopener noreferrer",
        style: { textDecoration: "none", background: "#25D366" }
      },
      "Enviar no WhatsApp"
    ), /* @__PURE__ */ React.createElement("button", { className: "pa-btn secondary", onClick: handleCopy }, copied ? "Copiado!" : "Copiar mensagem"), /* @__PURE__ */ React.createElement(
      "button",
      {
        className: "pa-btn secondary",
        onClick: () => {
          onClose(message, lessons);
          setArchived(true);
        }
      },
      "Marcar como enviado"
    ), onDismiss && /* @__PURE__ */ React.createElement("button", { className: "pa-btn ghost", onClick: onDismiss }, "Fechar pr\xE9via"))
  ));
}
ReactDOM.createRoot(document.getElementById("root")).render(/* @__PURE__ */ React.createElement(PainelAlunos, null));
