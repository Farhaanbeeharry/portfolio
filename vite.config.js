import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import fs from "node:fs";
import path from "node:path";

// The portfolio's static assets (images, PDFs, per-project media) live at the
// repository root — the same tree the original static site used. We keep them
// exactly where they are so the extracted project article bodies and every
// <img>/href in the app resolve to the same URLs the old site used.
//
//   /img/...        -> ./img
//   /assets/...     -> ./assets
//   /portfolio/...  -> ./portfolio  (per-project background/logo/icon media)
//
// This plugin serves those directories in `vite dev` and copies them into the
// build output on `vite build`, without duplicating them into a `public/`
// folder in the repo.
const STATIC_DIRS = ["img", "assets", "portfolio"];

// `portfolio/<slug>/` holds BOTH the per-project media the app still needs
// (thumbnail/background/logo/icon) and the pre-React static page for that
// project, `index.html`. Those 21 stale pages must not ship.
//
// They are the old dark design, and because Apache serves a real file before it
// applies any SPA rewrite (the standard `!-f`/`!-d` conditions), a deployed
// portfolio/<slug>/index.html wins over the React route for that URL — the
// visitor gets the superseded page and never boots the app. The write-ups
// themselves were extracted from these files into src/data/projects.js, so
// nothing is lost by leaving them out of the build.
//
// NOTE: the cPanel upload is overlay-only and never deletes, so excluding them
// here stops future deploys from shipping them but does NOT remove copies
// already on the server. The deploy workflow therefore ends with an explicit
// SSH step that deletes public_html/portfolio/*/index.html after every upload.
const isLegacyProjectPage = (relPath) =>
  /^portfolio[\\/][^\\/]+[\\/]index\.html$/i.test(relPath);

function legacyStaticAssets() {
  const rootDir = process.cwd();
  return {
    name: "legacy-static-assets",
    configureServer(server) {
      server.middlewares.use((req, res, next) => {
        try {
          const urlPath = decodeURIComponent((req.url || "").split("?")[0]);
          const top = urlPath.split("/")[1];
          if (!STATIC_DIRS.includes(top)) return next();
          // Keep dev honest about the legacy pages too: fall through to the SPA
          // so /portfolio/<slug>/index.html behaves here as it will once the
          // stale files are gone from the server.
          if (isLegacyProjectPage(urlPath.replace(/^\//, ""))) return next();
          const filePath = path.join(rootDir, urlPath);
          // Directory or missing -> let Vite handle (e.g. /portfolio/<slug>
          // falls through to the SPA so the React project route renders).
          if (!fs.existsSync(filePath) || fs.statSync(filePath).isDirectory()) {
            return next();
          }
          const ext = path.extname(filePath).toLowerCase();
          const types = {
            ".jpg": "image/jpeg",
            ".jpeg": "image/jpeg",
            ".png": "image/png",
            ".svg": "image/svg+xml",
            ".gif": "image/gif",
            ".webp": "image/webp",
            ".ico": "image/x-icon",
            ".pdf": "application/pdf",
          };
          if (types[ext]) res.setHeader("Content-Type", types[ext]);
          fs.createReadStream(filePath).pipe(res);
        } catch {
          next();
        }
      });
    },
    closeBundle() {
      const outDir = path.join(rootDir, "dist");
      let skipped = 0;
      const copyDir = (src, dest) => {
        if (!fs.existsSync(src)) return;
        fs.mkdirSync(dest, { recursive: true });
        for (const entry of fs.readdirSync(src, { withFileTypes: true })) {
          const s = path.join(src, entry.name);
          const d = path.join(dest, entry.name);
          if (entry.isDirectory()) {
            copyDir(s, d);
          } else if (isLegacyProjectPage(path.relative(rootDir, s))) {
            skipped++;
          } else {
            fs.copyFileSync(s, d);
          }
        }
      };
      for (const dir of STATIC_DIRS) {
        copyDir(path.join(rootDir, dir), path.join(outDir, dir));
      }
      // favicon
      const ico = path.join(rootDir, "img", "logo.ico");
      if (fs.existsSync(ico)) {
        fs.copyFileSync(ico, path.join(outDir, "img", "logo.ico"));
      }
    },
  };
}

export default defineConfig({
  // Absolute base, NOT "./". The app is a browser-history SPA served from the
  // domain root, and Apache rewrites every unmatched URL to the root
  // index.html without redirecting — so that one document is loaded under URLs
  // at several depths (/, /work/, /portfolio/lokal/). Relative asset URLs
  // resolve against whichever URL is showing, which sends /portfolio/lokal/ off
  // to /portfolio/lokal/assets/index-*.css; the SPA rewrite then answers that
  // with index.html, so the browser gets HTML where the stylesheet and the
  // module should be and the page renders unstyled. "/" pins both to the one
  // location they actually live at.
  base: "/",
  publicDir: false,
  plugins: [react(), legacyStaticAssets()],
  server: {
    port: 5173,
    open: false,
  },
});
