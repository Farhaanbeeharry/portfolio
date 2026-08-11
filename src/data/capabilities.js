/**
 * The capability matrix — what replaced the self-rated percentage bars.
 *
 * A bar reading "Flutter 90%" is an opinion the visitor cannot check, and it
 * quietly caps the claim at someone else's 100. Every row here instead points
 * at something on this site a visitor can open: a count of case studies, or a
 * named role in the service log.
 *
 * Build counts are derived from the project tags at load, so the number can
 * never drift away from the case studies actually published.
 */
import { projects } from "./projects.js";

const tagged = (...tags) => {
  const want = tags.map((t) => t.toLowerCase());
  return projects.filter((p) =>
    p.tags.some((t) => want.includes(t.toLowerCase().trim()))
  ).length;
};

/** [label, tags counted from the case studies, corroborating role or award] */
const ROWS = [
  ["Flutter / Dart", ["flutter", "dart"], "XEFI · App Store"],
  ["Supabase", ["supabase"], null],
  ["React", ["react"], null],
  ["Firebase", ["firebase"], null],
  ["Angular", ["angular"], "ELCA 2021–23"],
  ["Java / Spring Boot", [], "ELCA 2021–23 · ELCAdemy"],
  ["TypeScript / Node", ["javascript", "typescript"], "Stratalis 2024"],
  ["C#", [], "Event Store 2023"],
  ["Strapi", [], "WearTwice 2024"],
  ["Next.js", ["next.js"], null],
  ["Laravel / PHP", ["laravel"], null],
  ["SQL / Postgres", [], "Candidate Assessment"],
  ["Arduino / NodeMCU", ["arduino", "nodemcu", "iot"], null],
  ["UI / UX", ["ui/ux"], "FSC 3rd prize · Behance"],
];

export const capabilities = ROWS.map(([name, tags, note]) => {
  const builds = tags.length ? tagged(...tags) : 0;
  const parts = [];
  if (builds) parts.push(`${builds} build${builds === 1 ? "" : "s"}`);
  if (note) parts.push(note);
  return { name, builds, evidence: parts.join(" · ") };
}).sort((a, b) => b.builds - a.builds);

/** Counts shown in the console readouts. All of them are countable on the page. */
export const counts = {
  caseFiles: projects.length,
  roles: 9,
  certificates: 16,
  placements: 4,
  since: 2019,
};
