<script lang="ts">
	import { bugs } from '$lib/bugs';
	import CodeCrawler from '$lib/components/CodeCrawler.svelte';

	const count = bugs.length;
</script>

<svelte:head>
	<title>Bugs · A Field Guide</title>
	<meta
		name="description"
		content="A field guide to famous software bugs, illustrated and explained. Specimens collected from the published history of computing."
	/>
</svelte:head>

<CodeCrawler count={6} />

<section class="relative z-10 max-w-2xl">
	<p class="font-mono text-[11px] uppercase tracking-widest text-ink-400">Frontispiece</p>
	<h2
		class="mt-2 font-display text-4xl font-semibold leading-[1.05] text-ink-900 sm:text-6xl"
	>
		A field guide to the bugs of computing.
	</h2>
	<div class="mt-6 space-y-4 font-serif text-base leading-relaxed text-ink-700 sm:text-lg">
		<p>
			Naturalists used to walk into the world with a notebook, a pencil, and the conviction that
			everything they encountered deserved to be drawn. The drawings are what survive: the
			specimen, the silhouette, the careful caption beneath. This is that, for software bugs.
		</p>
		<p>
			Specimens collected from the published record between 1947 and 2024. Each is illustrated,
			dated, taxonomized, and described in the voice of someone who finds the particular causes
			interesting and the consequences instructive. No screenshots, no stack traces. Diagrams
			only. The catalog grows when a specimen earns its page.
		</p>
		<p class="font-serif italic text-ink-600">
			Begin anywhere. The order is curatorial, not chronological.
		</p>
	</div>
</section>

<div class="relative z-10 mt-12 flex items-center gap-4">
	<span class="font-mono text-[11px] uppercase tracking-widest text-ink-400">
		{count} Specimens
	</span>
	<span class="specimen-rule flex-1"></span>
</div>

<ol class="relative z-10 mt-8 grid gap-5 sm:grid-cols-2">
	{#each bugs as bug}
		<li>
			<a
				href="/{bug.slug}"
				class="paper-card no-underline group flex h-full flex-col rounded-sm p-5 transition-colors hover:bg-parchment-200/70 sm:p-6"
			>
				<div class="flex items-baseline justify-between gap-3">
					<span class="font-mono text-[10px] uppercase tracking-widest text-ink-400">
						{bug.id} · {bug.year}
					</span>
					<span class="font-mono text-[10px] uppercase tracking-widest text-ink-400 text-right">
						{bug.family}
					</span>
				</div>
				<h3
					class="mt-3 font-display text-2xl font-semibold leading-tight text-ink-900 group-hover:text-cinnabar-600"
				>
					{bug.name}
				</h3>
				<p class="mt-1 font-serif text-sm italic text-ink-400">
					{bug.scientificName}
				</p>
				<p class="mt-4 font-serif text-[15px] leading-snug text-ink-700">
					{bug.tagline}
				</p>
				<p class="mt-auto pt-3 font-serif text-[12px] italic leading-snug text-ink-400">
					{bug.consequence}
				</p>
			</a>
		</li>
	{/each}
</ol>
