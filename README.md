# Platform (plat-form.framer.ai) — Local Copy

A local copy of the [Platform](https://plat-form.framer.ai/) Framer website, mirrored with HTTrack and fixed so it runs on `localhost`.

## Requirements

- [Node.js](https://nodejs.org/) (any recent version). No packages need to be installed.
- An internet connection (see [Notes](#notes)).

## Getting started

```bash
git clone https://github.com/Mrehankamboh/plat-form-framer-ai.git
cd plat-form-framer-ai
npm run dev
```

Then open http://localhost:3020 in your browser.

To use a different port (macOS, Linux or Git Bash):

```bash
PORT=4000 npm run dev
```

## Project structure

```
.
├── server.js        # Small Node static server (no dependencies)
├── package.json     # npm scripts: dev / start
└── site/            # The mirrored website
    ├── index.html   # Home page
    ├── services.html
    ├── labs.html
    ├── labs/        # Blog articles
    ├── ...          # Sign in, sign up, policy pages, 404
    ├── framerusercontent.com/images/   # Local copies of the site images
    └── unpkg.com/   # Lenis smooth-scroll stylesheet
```

## How it works

`server.js` serves the files in `site/` and maps clean URLs to HTML files, the same way the live site works:

| URL | File |
| --- | --- |
| `/` | `site/index.html` |
| `/services` | `site/services.html` |
| `/labs/<article>` | `site/labs/<article>.html` |
| anything else | `site/404.html` (with a 404 status) |

## Fixes applied to the HTTrack mirror

- **Blank page fixed:** HTTrack rewrote the JSON data of the number counters (`<number-flow-react data="...">`) into fake file names, which crashed the page script. The original JSON was restored in `site/index.html`.
- **Links restored:** HTTrack changed internal links to `services.html#top`. They were rewritten back to the live site's format (`./services#top`).
- **404 status:** the server returns a real 404 status for unknown pages.

## Comparison with the live site

The local copy was compared side by side with https://plat-form.framer.ai/:

- The home page matches section by section (same layout, height and content).
- All 18 pages have identical text, image count and page titles.
- Page navigation works the same way.

## Notes

- Images load from the local `site/framerusercontent.com/` folder.
- The site's JavaScript, videos and some SVG icons still load from `framerusercontent.com`, so an internet connection is required for animations and videos.
- The browser console shows some React hydration warnings. The live site shows the same warnings, so they are not caused by this copy.

## Credits

The original website and design are the Platform template made in [Framer](https://www.framer.com/). This repository is a local copy for learning and reference.
