/**
 * The authoritative per-project record: what each thing IS, what it was built
 * with, and what it is about.
 *
 * Why this exists rather than deriving from `projects.js`: those tags are
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
 * `blurb` is the one line shown on the work card: what the project does, in the
 * plainest words available, so a visitor knows what it is before deciding to
 * open it. It is NOT the scraped `desc` field — six of those are just the
 * project's own title repeated, and the rest are 200-word paragraphs written for
 * a meta description. Each blurb below is condensed from the project's actual
 * write-up.
 *
 * `stack` is what it was built with. `domain` is what it is, which the search
 * also matches so "inventory" or "hotel" finds the right project.
 */

export const TECH = {
  umbrella: {
    blurb: "Works out the fewest umbrellas you need from a weather forecast",
    stack: ["JavaScript", "HTML", "CSS", "UI/UX"],
    domain: ["web component", "algorithm", "challenge"],
  },
  automatic_irrigation_system: {
    blurb: "Solar-powered plant watering: soil sensors on a NodeMCU, run from a phone",
    stack: ["Flutter", "Dart", "Arduino", "NodeMCU"],
    domain: ["IoT", "hardware", "solar", "sensors"],
  },
  candidate_assessment_system: {
    blurb: "Custom hiring assessments with automatic scoring and employer reports",
    stack: ["Angular", "Java", "Spring Boot", "PostgreSQL", "UI/UX"],
    domain: ["assessment", "hiring", "enterprise"],
  },
  rupeaks: {
    blurb: "A stock-market simulator for learning to trade with fake money",
    stack: ["Adobe XD", "UI/UX"],
    domain: ["fintech", "prototype", "competition", "stock exchange", "education"],
  },
  ptma: {
    blurb: "An Erasmus+ mobility companion for students and staff",
    stack: ["Flutter", "Dart"],
    domain: ["education", "mobility", "Erasmus+", "App Store", "Google Play"],
  },
  poker_planning: {
    blurb: "Planning poker for agile teams — live voting and reveal, synced in realtime",
    stack: ["JavaScript", "Firebase", "HTML", "CSS"],
    domain: ["realtime", "agile", "estimation"],
  },
  dailyapps: {
    blurb: "XEFI's digital HR and admin app for day-to-day staff management",
    stack: ["Flutter", "Dart"],
    domain: ["enterprise", "field operations", "HR", "XEFI"],
  },
  dietsensor: {
    blurb: "Personalised nutrition coaching, with payments and localisation built in",
    stack: ["Flutter", "Dart", "Firebase", "Lokalise", "Amplitude"],
    domain: ["health", "nutrition", "payments", "localisation", "coaching"],
  },
  kalydian: {
    blurb: "XEFI's professional password manager for teams and shared credentials",
    stack: ["Flutter", "Dart"],
    domain: ["security", "password manager", "XEFI"],
  },
  weartwice: {
    blurb: "A second-hand fashion marketplace in the UAE, with payments and delivery",
    stack: ["Flutter", "Dart", "Strapi", "MAMO Pay"],
    domain: ["marketplace", "e-commerce", "fashion", "UAE", "payments", "sustainability"],
  },
  momento: {
    blurb: "Project collaboration and meeting minutes for small teams",
    stack: ["Angular", "Supabase", "TypeScript"],
    domain: ["project management", "kanban", "meeting minutes"],
  },
  blaugrana: {
    blurb: "Football club management: attendance, members, payments and finances",
    stack: ["React", "Supabase", "Firebase", "PWA"],
    domain: ["football", "club management", "payments"],
  },
  teamtoss: {
    blurb: "Creates football matches, shuffles balanced teams and shares the lineup",
    stack: ["React", "Supabase", "Tailwind CSS"],
    domain: ["football", "team organiser"],
  },
  staybleu: {
    blurb: "Hospitality management for luxury hotels and property groups",
    stack: ["Next.js", "React", "TypeScript", "Supabase"],
    domain: ["hotel PMS", "dashboard", "bookings", "hospitality"],
  },
  concept_habitat: {
    blurb: "A staff CRM and visitor registration for a home & lifestyle showroom event",
    stack: ["React", "Vite", "Supabase"],
    domain: ["CRM", "dashboard", "showroom", "events"],
  },
  motogate: {
    blurb: "QR event ticketing and live gate scanning for MotoClub Mauritius",
    stack: ["Flutter", "Dart", "Firebase"],
    domain: ["QR access", "access control", "events", "ticketing", "App Store", "Google Play"],
  },
  pryowl: {
    blurb: "Surveys, quizzes and e-signatures, with 21 question types and PDF signing",
    stack: ["React", "Supabase"],
    domain: ["SaaS", "survey builder", "quiz", "e-signature"],
  },
  "panda-pick": {
    blurb: "Office prediction games: challenges, a live leaderboard and daily mini-games",
    stack: ["React", "Supabase"],
    domain: ["SaaS", "team games", "leaderboard", "multi-tenant"],
  },
  fruitopia: {
    blurb: "A farm-to-table marketplace: customer storefront and vendor workspace in one app",
    stack: ["Flutter", "Dart", "Supabase"],
    domain: ["marketplace", "e-commerce", "farm to table", "App Store", "Google Play"],
  },
  nexstock: {
    blurb: "Multi-store inventory, POS and invoicing, with a Flutter app for the shop floor",
    stack: ["Laravel", "PHP", "React", "TypeScript", "Flutter"],
    domain: ["inventory", "POS", "invoicing", "multi-store", "reporting"],
  },
  lokal: {
    blurb: "A local business directory with listings, catalogues and WhatsApp contact",
    stack: ["React", "Supabase"],
    domain: ["directory", "small business", "listings"],
  },
  perfect_garment: {
    blurb: "Takes a garment order to quotation, deposit, 3D mockup, delivery and invoice",
    stack: ["Flutter", "Dart", "Supabase", "PostgreSQL", "Kotlin"],
    domain: [
      "manufacturing",
      "garment workshop",
      "orders",
      "quotations",
      "invoicing",
      "payments",
      "3D mockup",
      "PDF",
      "WhatsApp",
      "internal tool",
    ],
  },
};

/** Everything searchable about a project, as one lowercase haystack. */
export const searchTerms = (slug) => {
  const t = TECH[slug];
  if (!t) return "";
  return [t.blurb, ...t.stack, ...t.domain].join(" ").toLowerCase();
};

/** How many published case files used a given technology. */
export const buildsWith = (...names) => {
  const want = names.map((n) => n.toLowerCase());
  return Object.values(TECH).filter((t) =>
    t.stack.some((s) => want.includes(s.toLowerCase()))
  ).length;
};
