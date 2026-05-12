import { bugs } from "$lib/bugs";

export const prerender = true;

const BASE = "https://bugs.ma-r-s.com";

const urls = [
  { path: "/", priority: 1.0 },
  { path: "/about", priority: 0.5 },
  ...bugs.map((b) => ({ path: `/${b.slug}`, priority: 0.8 })),
];

export function GET() {
  const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls
  .map(
    (u) => `\t<url>
\t\t<loc>${BASE}${u.path}</loc>
\t\t<priority>${u.priority.toFixed(1)}</priority>
\t</url>`,
  )
  .join("\n")}
</urlset>`;

  return new Response(body, {
    headers: {
      "Content-Type": "application/xml",
      "Cache-Control": "public, max-age=3600",
    },
  });
}
