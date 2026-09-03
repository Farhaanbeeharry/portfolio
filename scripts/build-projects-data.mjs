// Build script (run once with Node): extracts the article body + hero fields
// from the 22 static project subpages and writes src/data/projects.js.
// The extracted bodies keep their original HTML/CSS classes (showcase.css,
// project.css) so the React ProjectPage renders identically.
//
//   node scripts/build-projects-data.mjs
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, "..");
const PORTFOLIO = path.join(ROOT, "portfolio");

// slug -> display title + data-cat (from the homepage work grid)
const PROJECTS = {
  umbrella: ["Umbrella Challenge", "web ui_ux"],
  automatic_irrigation_system: ["Automatic Irrigation", "mobile arduino"],
  candidate_assessment_system: ["Candidate Assessment", "web ui_ux"],
  rupeaks: ["Rupeaks", "mobile ui_ux competition"],
  ptma: ["PTMA", "mobile"],
  poker_planning: ["Poker Planning", "web"],
  dailyapps: ["DailyApps", "mobile"],
  dietsensor: ["DietSensor", "mobile"],
  kalydian: ["Kalydian", "mobile"],
  weartwice: ["WearTwice", "mobile"],
  momento: ["MoMento", "web ui_ux"],
  blaugrana: ["Blaugrana", "web ui_ux"],
  teamtoss: ["TeamToss", "web ui_ux"],
  staybleu: ["StayBleu", "web ui_ux"],
  concept_habitat: ["Concept Habitat", "web mobile ui_ux"],
  motogate: ["MotoGate", "mobile"],
  pryowl: ["Pryowl", "web ui_ux"],
  "panda-pick": ["PandaPick", "web ui_ux"],
  fruitopia: ["Fruitopia", "mobile ui_ux"],
  nexstock: ["NexStock", "web mobile ui_ux"],
  lokal: ["Lokal", "web ui_ux"],
  perfect_garment: ["Perfect Garment", "mobile ui_ux"],
};
const ORDER = Object.keys(PROJECTS);

// These fields are scraped out of HTML and then rendered as React text nodes,
// so any entity that survives shows up literally on the page ("Web &amp;
// Mobile"). Decode them here rather than at the render site: `desc` also feeds
// the meta description, and `body` must keep its entities because it is injected
// as raw HTML.
const decodeEntities = (s) =>
  s
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&#0?39;/g, "'")
    .replace(/&apos;/g, "'")
    .replace(/&nbsp;/g, " ")
    .replace(/&amp;/g, "&"); // last, so &amp;lt; decodes to &lt; not <

const grab = (s, pat) => {
  const m = s.match(pat);
  return m ? decodeEntities(m[1].trim()) : "";
};

// Rewrite relative asset references inside a body so they resolve from the SPA
// root: bare filenames (background.png, logo.svg, icon.png) belong to the
// project folder -> /portfolio/<slug>/<file>; ../../-prefixed paths point at
// the site root -> /<rest>.
function rewriteAssets(html, slug) {
  return html.replace(
    /((?:src|href)=")((?:\.\.\/\.\.\/)?)([^"]+?)(")/g,
    (all, q, parent, rest, endq) => {
      if (/^(https?:|mailto:|tel:|#|\/|\$)/.test(rest)) return all;
      // `portfolio/` is part of the URL, not just of the repo path: only /img,
      // /assets and /portfolio are served as static directories, so the bare
      // `/<slug>/icon.png` this produced before fell through to the SPA and
      // rendered as a broken image on every page whose showcase uses a logo.
      const target = parent ? rest : `portfolio/${slug}/${rest}`;
      return `${q}/${target}${endq}`;
    }
  );
}

const results = [];
for (const slug of ORDER) {
  const file = path.join(PORTFOLIO, slug, "index.html");
  // Normalise line endings on read: with core.autocrlf the pages check out
  // CRLF on Windows, and each CR would land inside the JSON body strings as
  // a literal \r, rewriting all 22 entries on an unrelated rerun.
  const s = fs.readFileSync(file, "utf8").replace(/\r\n/g, "\n");

  const title = grab(s, /<title>(.*?)<\/title>/);
  const desc = grab(s, /name="description"\s+content="(.*?)"/);
  const keywords = grab(s, /name="keywords"\s+content="(.*?)"/);

  // cover
  const cm = s.match(/<figure class="pp-cover reveal">\s*<img\s+src="([^"]+)"\s+alt="([^"]*)"\s*\/?>\s*<\/figure>/);
  const cover = cm ? `/portfolio/${slug}/${cm[1].replace(/^\.\//, "")}` : null;
  const coverAlt = cm ? cm[2] : title;

  // category (the .pp-cat div)
  const cat = grab(s, /<div class="pp-cat reveal"><i class="fa-solid fa-layer-group"><\/i>\s*(.*?)<\/div>/);

  // date from the .pp-meta calendar span
  const date = grab(s, /<span><i class="fa-regular fa-calendar"><\/i>\s*(.*?)<\/span>/);

  // tags
  const tgs = [...s.matchAll(/<div class="pp-tags reveal">([\s\S]*?)<\/div>/g)][0]?.[1] || "";
  const tags = [...tgs.matchAll(/>([^<]+)<\/span>/g)].map((m) => m[1]);

  // article body between <article class="pp-article"> ... </article>
  const bm = s.match(/<article class="pp-article">([\s\S]*?)<\/article>/);
  if (!bm) throw new Error(`No <article class="pp-article"> in ${slug}`);
  const body = rewriteAssets(bm[1].trim(), slug);

  results.push({
    slug,
    title,
    disp: PROJECTS[slug][0],
    cat: PROJECTS[slug][1],
    desc,
    keywords,
    category: cat,
    date,
    tags,
    cover,
    coverAlt,
    body,
  });
}

const out = `// Auto-generated by scripts/build-projects-data.mjs — do not edit by hand.
export const projects = ${JSON.stringify(results, null, 2)};
`;

const outDir = path.join(ROOT, "src", "data");
fs.mkdirSync(outDir, { recursive: true });
fs.writeFileSync(path.join(outDir, "projects.js"), out, "utf8");
console.log(`Wrote ${results.length} projects to src/data/projects.js`);
