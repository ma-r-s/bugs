import { error } from "@sveltejs/kit";
import { bugs, bugBySlug } from "$lib/bugs";
import type { EntryGenerator, PageLoad } from "./$types";

export const prerender = true;

export const entries: EntryGenerator = () =>
  bugs.map((b) => ({ slug: b.slug }));

export const load: PageLoad = ({ params }) => {
  const bug = bugBySlug[params.slug];
  if (!bug) {
    throw error(404, `No specimen ${params.slug} in this catalog.`);
  }
  return { bug };
};
