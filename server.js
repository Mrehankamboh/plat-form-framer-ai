// Simple static server for the mirrored Platform site (no dependencies)
const http = require("http");
const fs = require("fs");
const path = require("path");

const PORT = process.env.PORT || 3020;
const ROOT = path.join(__dirname, "site");

const TYPES = {
  ".html": "text/html; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".mjs": "text/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".gif": "image/gif",
  ".svg": "image/svg+xml",
  ".webp": "image/webp",
  ".ico": "image/x-icon",
  ".mp4": "video/mp4",
  ".woff2": "font/woff2",
};

// "/labs" -> labs.html, "/" -> index.html, "/labs/slug" -> labs/slug.html
function resolveFile(urlPath) {
  const clean = path.normalize(decodeURIComponent(urlPath)).replace(/^([\/])+/, "");
  const candidates = [clean, clean + ".html", path.join(clean, "index.html")];
  for (const rel of candidates) {
    const full = path.join(ROOT, rel);
    if (!full.startsWith(ROOT)) continue;
    if (fs.existsSync(full) && fs.statSync(full).isFile()) return full;
  }
  return null;
}

http
  .createServer((req, res) => {
    const urlPath = req.url.split("?")[0].split("#")[0];
    const file = resolveFile(urlPath === "/" ? "/index.html" : urlPath);
    if (!file) {
      res.writeHead(404, { "Content-Type": TYPES[".html"] });
      return fs.createReadStream(path.join(ROOT, "404.html")).pipe(res);
    }
    const status = path.basename(file) === "404.html" ? 404 : 200;
    res.writeHead(status, { "Content-Type": TYPES[path.extname(file).toLowerCase()] || "application/octet-stream" });
    fs.createReadStream(file).pipe(res);
  })
  .listen(PORT, () => console.log(`Platform site running at http://localhost:${PORT}`));
