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
// What ships at those paths instead is a copy of the built index.html -- see
// writeSpaFallbacks below. That both overwrites the stale page on the server
// (the upload is overlay-only and never deletes, so leaving the path empty
// would strand the old file there) and keeps the URL working at all, because
// the server will not rewrite a URL that resolves to an existing directory:
// with no index.html in portfolio/<slug>/, mod_autoindex answers with a
// directory listing of the project's media rather than the app.
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
      writeSpaFallbacks(outDir);
    },
  };
}

// Every directory under portfolio/ exists in the docroot as a real directory of
// project media, and the server's SPA rewrite -- like every stock one -- skips
// URLs that resolve to an existing file OR directory. So /portfolio/<slug>/
// never reaches the rewrite: without an index.html of its own it gets a
// mod_autoindex listing of the media inside.
//
// Dropping a copy of the built index.html into each of those directories closes
// that hole without touching the server's hand-managed root .htaccess. The app
// boots from the real document at that path and React Router reads the slug out
// of the URL, exactly as it does after the rewrite anywhere else. This is only
// sound because base is "/" -- a relative base would send the copy looking for
// portfolio/<slug>/assets/. The copies are generated on every build, so they
// cannot drift from the shell they came from.
function writeSpaFallbacks(outDir) {
  const shell = path.join(outDir, "index.html");
  const portfolioDir = path.join(outDir, "portfolio");
  if (!fs.existsSync(shell) || !fs.existsSync(portfolioDir)) return;
  // portfolio/ itself is a bare directory too; the app renders its 404 there.
  const targets = [portfolioDir];
  for (const entry of fs.readdirSync(portfolioDir, { withFileTypes: true })) {
    if (entry.isDirectory()) targets.push(path.join(portfolioDir, entry.name));
  }
  for (const dir of targets) {
    fs.copyFileSync(shell, path.join(dir, "index.html"));
  }
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
