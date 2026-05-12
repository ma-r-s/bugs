<script lang="ts">
	import { neighbors, type Bug } from '$lib/bugs';
	import type { Snippet } from 'svelte';

	interface Props {
		bug: Bug;
		diagram?: Snippet;
		body?: Snippet;
		sources?: Snippet;
	}

	let { bug, diagram, body, sources }: Props = $props();

	const nav = $derived(neighbors(bug.slug));
</script>

<article class="space-y-10">
	<nav class="font-mono text-[11px] uppercase tracking-widest">
		<a href="/" class="no-underline text-ink-400 hover:text-cinnabar-600">← Catalog</a>
	</nav>

	<header class="paper-card rounded-sm p-6 sm:p-10">
		<div class="flex flex-wrap items-baseline justify-between gap-2">
			<span class="font-mono text-[11px] uppercase tracking-widest text-ink-400">
				Specimen {bug.id}
			</span>
			<span class="font-mono text-[11px] uppercase tracking-widest text-ink-400">
				{bug.family}
			</span>
		</div>

		<h2 class="mt-3 font-display text-3xl font-semibold leading-[1.1] text-ink-900 sm:text-5xl">
			{bug.name}
		</h2>
		<p class="mt-2 font-serif text-base italic text-ink-400 sm:text-lg">
			{bug.scientificName}
		</p>

		<p class="mt-6 font-serif text-lg italic leading-snug text-ink-700 sm:text-xl">
			{bug.tagline}
		</p>

		<dl
			class="mt-8 grid gap-x-8 gap-y-3 border-t border-parchment-300 pt-6 font-mono text-[12px] uppercase tracking-wider text-ink-400 sm:grid-cols-2"
		>
			<div class="flex justify-between gap-4 sm:block">
				<dt>First Observed</dt>
				<dd class="text-ink-700 sm:mt-1 sm:normal-case sm:tracking-normal">{bug.year}</dd>
			</div>
			<div class="flex justify-between gap-4 sm:block">
				<dt>Habitat</dt>
				<dd
					class="text-right text-ink-700 sm:mt-1 sm:text-left sm:normal-case sm:tracking-normal"
				>
					{bug.habitat}
				</dd>
			</div>
			<div class="flex justify-between gap-4 sm:block">
				<dt>Reported By</dt>
				<dd
					class="text-right text-ink-700 sm:mt-1 sm:text-left sm:normal-case sm:tracking-normal"
				>
					{bug.observer}
				</dd>
			</div>
			<div class="flex justify-between gap-4 sm:block">
				<dt>Consequence</dt>
				<dd
					class="text-right text-ink-700 sm:mt-1 sm:text-left sm:normal-case sm:tracking-normal"
				>
					{bug.consequence}
				</dd>
			</div>
		</dl>
	</header>

	{#if diagram}
		<figure class="paper-card rounded-sm p-5 sm:p-8">
			<div class="flex items-baseline justify-between">
				<span class="font-mono text-[11px] uppercase tracking-widest text-ink-400">Figure 1</span>
				<span class="font-mono text-[11px] uppercase tracking-widest text-ink-400">
					{bug.id}
				</span>
			</div>
			<div class="my-4 flex items-center justify-center">
				{@render diagram()}
			</div>
		</figure>
	{/if}

	{#if body}
		<section
			class="prose-bug mx-auto max-w-2xl font-serif text-[17px] leading-relaxed text-ink-700"
		>
			{@render body()}
		</section>
	{/if}

	{#if sources}
		<aside
			class="mx-auto max-w-2xl border-t border-parchment-300 pt-6 font-serif text-sm text-ink-400"
		>
			<p class="mb-3 font-mono text-[11px] uppercase tracking-widest text-ink-700">
				Field Notes &amp; Sources
			</p>
			{@render sources()}
		</aside>
	{/if}

	<!-- Prev / next navigation: a field-guide tradition -->
	<nav
		class="mx-auto grid max-w-2xl grid-cols-2 gap-4 border-t border-parchment-300 pt-6 font-serif"
	>
		<div class="text-left">
			{#if nav.prev}
				<a
					href="/{nav.prev.slug}"
					class="block no-underline transition-colors hover:text-cinnabar-600"
				>
					<span class="block font-mono text-[10px] uppercase tracking-widest text-ink-400">
						← Previous
					</span>
					<span class="mt-1 block text-ink-700">{nav.prev.name}</span>
				</a>
			{/if}
		</div>
		<div class="text-right">
			{#if nav.next}
				<a
					href="/{nav.next.slug}"
					class="block no-underline transition-colors hover:text-cinnabar-600"
				>
					<span class="block font-mono text-[10px] uppercase tracking-widest text-ink-400">
						Next →
					</span>
					<span class="mt-1 block text-ink-700">{nav.next.name}</span>
				</a>
			{/if}
		</div>
	</nav>
</article>
