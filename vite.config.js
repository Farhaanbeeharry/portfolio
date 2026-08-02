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
      const copyDir = (src, dest) => {
        if (!fs.existsSync(src)) return;
        fs.mkdirSync(dest, { recursive: true });
        for (const entry of fs.readdirSync(src, { withFileTypes: true })) {
          const s = path.join(src, entry.name);
          const d = path.join(dest, entry.name);
          if (entry.isDirectory()) copyDir(s, d);
          else fs.copyFileSync(s, d);
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
  base: "./",
  publicDir: false,
  plugins: [react(), legacyStaticAssets()],
  server: {
    port: 5173,
    open: false,
  },
});
