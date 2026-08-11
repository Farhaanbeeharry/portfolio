/**
 * The authoritative technology record, curated per project.
 *
 * Why this exists rather than deriving from `projects.js` tags: those tags are
 * scraped keyword lists from the pre-React pages and they are not accurate. Two
 * examples that were feeding the capability counts —
 *   candidate_assessment_system was tagged "flutter, umbrella, challenge" (it is
 *     an Angular + Java + PostgreSQL system, and the keywords were copy-pasted
 *     from the Umbrella page)
 *   umbrella was tagged "flutter" (it is a plain JavaScript web component)
 * — which meant "Flutter · 8 builds" counted two projects containing no Flutter
 * at all. A number presented as counted has to actually be countable, so the
 * stacks below are read off each project's own write-up.
 *
 * `stack` is what was actually built with. `domain` is what the thing IS, which
 * the work search also matches so "inventory" or "hotel" finds the right project.
 */

export const TECH = {
  umbrella: {
    stack: ["JavaScript", "HTML", "CSS", "UI/UX"],
    domain: ["web component", "algorithm", "challenge"],
  },
  automatic_irrigation_system: {
    stack: ["Flutter", "Dart", "Arduino", "NodeMCU"],
    domain: ["IoT", "hardware", "solar", "sensors"],
  },
  candidate_assessment_system: {
    stack: ["Angular", "Java", "Spring Boot", "PostgreSQL", "UI/UX"],
    domain: ["assessment", "hiring", "enterprise"],
  },
  rupeaks: {
    stack: ["Adobe XD", "UI/UX"],
    domain: ["fintech", "prototype", "competition"],
  },
  ptma: {
    stack: ["Flutter", "Dart"],
    domain: ["education", "mobility", "Erasmus+", "App Store", "Google Play"],
  },
  poker_planning: {
    stack: ["JavaScript", "Firebase", "HTML", "CSS"],
    domain: ["realtime", "agile", "estimation"],
  },
  dailyapps: {
    stack: ["Flutter", "Dart"],
    domain: ["enterprise", "field operations", "XEFI"],
  },
  dietsensor: {
    stack: ["Flutter", "Dart", "Firebase", "Lokalise", "Amplitude"],
    domain: ["health", "nutrition", "payments", "localisation"],
  },
  kalydian: {
    stack: ["Flutter", "Dart"],
    domain: ["security", "password manager", "XEFI"],
  },
  weartwice: {
    stack: ["Flutter", "Dart", "Strapi", "MAMO Pay"],
    domain: ["marketplace", "e-commerce", "fashion", "UAE", "payments"],
  },
  momento: {
    stack: ["Angular", "Supabase", "TypeScript"],
    domain: ["project management", "kanban"],
  },
  blaugrana: {
    stack: ["React", "Supabase", "Firebase", "PWA"],
    domain: ["football", "fan app"],
  },
  teamtoss: {
    stack: ["React", "Supabase", "Tailwind CSS"],
    domain: ["football", "team organiser"],
  },
  staybleu: {
    stack: ["Next.js", "React", "TypeScript", "Supabase"],
    domain: ["hotel PMS", "dashboard", "bookings"],
  },
  concept_habitat: {
    stack: ["React", "Vite", "Supabase"],
    domain: ["CRM", "dashboard", "showroom", "events"],
  },
  motogate: {
    stack: ["Flutter", "Dart", "Firebase"],
    domain: ["QR access", "access control", "events", "App Store", "Google Play"],
  },
  pryowl: {
    stack: ["React", "Supabase"],
    domain: ["SaaS", "survey builder", "quiz", "e-signature"],
  },
  "panda-pick": {
    stack: ["React", "Supabase"],
    domain: ["SaaS", "team games"],
  },
  fruitopia: {
    stack: ["Flutter", "Dart", "Supabase"],
    domain: ["marketplace", "e-commerce", "farm to table", "App Store", "Google Play"],
  },
  nexstock: {
    stack: ["Laravel", "PHP", "React", "TypeScript", "Flutter"],
    domain: ["inventory", "POS", "invoicing", "multi-store", "reporting"],
  },
  lokal: {
    stack: ["React", "Supabase"],
    domain: ["directory", "small business"],
  },
};

/** Everything searchable about a project, as one lowercase haystack. */
export const searchTerms = (slug) => {
  const t = TECH[slug];
  if (!t) return "";
  return [...t.stack, ...t.domain].join(" ").toLowerCase();
};

/** How many published case files used a given technology. */
export const buildsWith = (...names) => {
  const want = names.map((n) => n.toLowerCase());
  return Object.values(TECH).filter((t) =>
    t.stack.some((s) => want.includes(s.toLowerCase()))
  ).length;
};
