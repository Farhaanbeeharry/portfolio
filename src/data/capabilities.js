/**
 * The capability matrix — what replaced the self-rated percentage bars.
 *
 * A bar reading "Flutter 90%" is an opinion the visitor cannot check, and it
 * caps the claim at someone else's 100. Every row here instead resolves to
 * something openable on this site: a count of case files that actually used the
 * technology, and/or a named role in the service log.
 *
 * Counts come from the curated stacks in tech.js, NOT from the scraped keyword
 * tags in projects.js. Those tags were wrong in ways that inflated the numbers —
 * see the note at the top of tech.js.
 */
import { TECH, buildsWith } from "./tech.js";
import { projects } from "./projects.js";

/**
 * [label, technology names counted from the case files, corroborating role]
 * A row with no builds is not padding: it is a real skill whose evidence is a
 * role or a qualification rather than a project published here, and the matrix
 * marks that difference rather than hiding it.
 */
const ROWS = [
  ["Flutter / Dart", ["Flutter", "Dart"], "XEFI · App Store & Google Play"],
  ["React", ["React"], null],
  ["Supabase", ["Supabase"], null],
  ["TypeScript", ["TypeScript"], "Stratalis 2024"],
  ["Firebase", ["Firebase"], null],
  ["Angular", ["Angular"], "ELCA 2021–23"],
  ["Java / Spring Boot", ["Java", "Spring Boot"], "ELCA 2021–23 · ELCAdemy"],
  ["JavaScript", ["JavaScript"], "Stratalis 2024"],
  ["Next.js", ["Next.js"], null],
  ["Laravel / PHP", ["Laravel", "PHP"], null],
  ["Strapi", ["Strapi"], "WearTwice 2024"],
  ["PostgreSQL / SQL", ["PostgreSQL"], "Stratalis · Candidate Assessment"],
  ["Tailwind CSS", ["Tailwind CSS"], null],
  ["Arduino / NodeMCU", ["Arduino", "NodeMCU"], "Mechatronics certificate"],
  ["UI / UX", ["UI/UX", "Adobe XD"], "FSC 3rd prize · Behance"],
  ["C#", [], "Event Store 2023"],
];

export const capabilities = ROWS.map(([name, names, note]) => {
  const builds = names.length ? buildsWith(...names) : 0;
  const parts = [];
  if (builds) parts.push(`${builds} build${builds === 1 ? "" : "s"}`);
  if (note) parts.push(note);
  return { name, builds, evidence: parts.join(" · ") };
}).sort((a, b) => b.builds - a.builds);

/** Counts shown in the shell and the routes. All countable on this page. */
export const counts = {
  caseFiles: projects.length,
  technologies: new Set(
    Object.values(TECH).flatMap((t) => t.stack)
  ).size,
  roles: 9,
  certificates: 16,
  placements: 4,
  since: 2019,
};
