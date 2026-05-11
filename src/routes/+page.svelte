<script lang="ts">
	import { bugs } from '$lib/bugs';
</script>

<svelte:head>
	<title>Bugs · A Field Guide</title>
</svelte:head>

<section class="max-w-2xl">
	<p class="font-mono text-[11px] uppercase tracking-widest text-ink-400">Frontispiece</p>
	<h2 class="mt-1 font-display text-4xl font-semibold leading-tight text-ink-900 sm:text-5xl">
		A field guide to twelve software bugs.
	</h2>
	<div class="mt-6 space-y-4 font-serif text-base leading-relaxed text-ink-700 sm:text-lg">
		<p>
			Naturalists used to walk into the world with a notebook, a pencil, and the conviction that
			everything they encountered deserved to be drawn. The drawings are what survive: the
			specimen, the silhouette, the careful caption beneath. This is that, for software bugs.
		</p>
		<p>
			Twelve specimens, collected from the published record between 1947 and 2024. Each is
			illustrated, dated, taxonomized, and described in the voice of someone who finds the
			particular causes interesting and the consequences instructive. No screenshots, no stack
			traces. Diagrams only.
		</p>
		<p class="font-serif italic text-ink-600">
			Begin anywhere. The catalog is curatorial, not chronological.
		</p>
	</div>
</section>

<div class="my-12 specimen-rule"></div>

<ol class="grid gap-5 sm:grid-cols-2">
	{#each bugs as bug}
		<li>
			<a
				href="/{bug.slug}"
				class="paper-card group block h-full rounded-sm p-5 no-underline transition-colors hover:bg-parchment-200/70 sm:p-6"
			>
				<div class="flex items-baseline justify-between">
					<span class="font-mono text-[10px] uppercase tracking-widest text-ink-400">
						{bug.id} · {bug.year}
					</span>
					<span class="font-mono text-[10px] uppercase tracking-widest text-ink-400">
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
			</a>
		</li>
	{/each}
</ol>
