# Bugs

A field guide to famous software bugs, illustrated and explained.

Each entry has a specimen ID, taxonomy, first-observed date, habitat, observer,
a 500-to-800-word writeup, and a custom inline-SVG diagram drawn for it. The
collection is curated rather than open. The catalog grows when a specimen earns
its page.

**Live:** [bugs.ma-r-s.com](https://bugs.ma-r-s.com)

## Current catalog

| ID     | Year      | Specimen                                  |
| ------ | --------- | ----------------------------------------- |
| BG-001 | 2002      | The 500-Mile Email                        |
| BG-002 | 2024      | The Wi-Fi That Worked Only When It Rained |
| BG-003 | 2008      | OpenOffice Will Not Print on Tuesdays     |
| BG-004 | 1962      | Mariner 1's Missing Overbar               |
| BG-005 | 1985-1987 | Therac-25                                 |
| BG-006 | 1991      | The Patriot at Dhahran                    |
| BG-007 | 1980      | Pac-Man Level 256                         |
| BG-008 | 1991      | Nuclear Gandhi (the myth)                 |
| BG-009 | 2012      | Knight Capital's 45 Minutes               |
| BG-010 | 1994      | The Pentium FDIV Bug                      |
| BG-011 | 1947      | The Hopper Moth                           |
| BG-012 | 2003      | The Northeast Blackout                    |

Curatorial criteria: the bug had to be real and well-documented (the one
exception is Nuclear Gandhi, included precisely because it is canonically
remembered as real and almost certainly was not); the cause had to be specific
and explicable in a paragraph; the consequences had to be either instructive,
funny, or both. Sources are linked from each entry.

## Project structure

```
src/
├── app.css                       # Tailwind + field-guide theme tokens
├── app.html                      # HTML shell with metadata
├── lib/
│   ├── bugs.ts                   # The catalog (manifest + metadata + sources)
│   ├── components/
│   │   └── SpecimenCard.svelte   # Shared field-guide chrome for each entry
│   ├── bug-bodies/
│   │   └── <slug>.svelte         # Per-bug writeup (12 files)
│   └── bug-diagrams/
│       └── <slug>.svelte         # Per-bug inline-SVG illustration (12 files)
└── routes/
    ├── +layout.svelte            # Site chrome (header, footer)
    ├── +page.svelte              # Catalog index
    ├── about/+page.svelte        # Colophon
    └── [slug]/
        ├── +page.ts              # Loads bug metadata by slug (prerendered)
        └── +page.svelte          # Renders bug body + diagram via slug map
```

The `[slug]` route resolves the body and diagram for each bug at build time via
Vite's `import.meta.glob`. Adding a new specimen is one row in `bugs.ts` plus
one body file plus one diagram file. The rest is wiring.

## Design

The visual language is naturalist field guide: aged paper, sepia ink, deep
botanical green and cinnabar red accents, a four-family typographic stack
(Cormorant Garamond display, EB Garamond body, JetBrains Mono labels, Caveat for
hand-annotations on the diagrams). Every diagram is drawn from scratch as inline
SVG using a small set of CSS classes (`ink`, `accent`, `leaf`, `label`,
`label-mono`, `hand`) defined in `app.css`. Nothing is generated, nothing is
borrowed.

## Tech stack

- [SvelteKit](https://svelte.dev/) 2 with Svelte 5 runes
- [Tailwind CSS](https://tailwindcss.com/) 3
- TypeScript everywhere
- Deployed on [Vercel](https://vercel.com/) via `adapter-auto`
- Custom subdomain via Cloudflare DNS

## Local development

Requires [bun](https://bun.sh/).

```bash
bun install
bun run dev
```

Then open [http://localhost:5173](http://localhost:5173).

## Build

```bash
bun run build       # production build
bun run preview     # preview the production build locally
```

## Adding a specimen

1. Add a row to the `bugs` array in `src/lib/bugs.ts` with all metadata fields
   (id, slug, name, scientific name, family, year, habitat, observer, tagline,
   consequence, and a `sources` array of `{ title, url }` pairs).
2. Create `src/lib/bug-bodies/<slug>.svelte` with the writeup. The component is
   plain content wrapped by the page's `.prose-bug` styling.
3. Create `src/lib/bug-diagrams/<slug>.svelte` with the inline SVG. Use the
   diagram classes defined in `app.css` for visual consistency.

The slug-based glob in `src/routes/[slug]/+page.svelte` picks both up
automatically. Prev/next navigation, the sitemap, and the catalog index pick
the new row up from `bugs.ts` without further wiring.

## License

MIT for the code. Diagrams and writeups are CC BY-NC 4.0. See `LICENSE`.

## Acknowledgments

Every entry's sources are linked at the foot of its page. Special debt is owed
to Nancy Leveson's Therac-25 investigation, Trey Harris's original 500-mile
email post, Don Hodges' Pac-Man disassembly, the U.S.-Canada Power System
Outage Task Force report, and the Smithsonian's care of the Hopper moth.

Compiled and illustrated by [Mario A. Ruiz](https://www.ma-r-s.com).
