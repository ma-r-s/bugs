<script lang="ts">
	import { page } from '$app/state';
</script>

<svelte:head>
	<title>Specimen not found · Bugs</title>
</svelte:head>

<section class="mx-auto max-w-2xl space-y-5 font-serif text-ink-700">
	<p class="font-mono text-[11px] uppercase tracking-widest text-ink-400">
		Error · {page.status}
	</p>
	<h2 class="!mt-2 font-display text-3xl font-semibold text-ink-900 sm:text-4xl">
		{page.error?.message ?? 'Specimen not found in this catalog.'}
	</h2>
	<p class="text-[17px] leading-relaxed">
		The page you requested is not part of the field guide. The catalog is small and curated;
		twelve specimens, no more, indexed by slug. If you arrived here from a link that used to
		work, it has probably been renamed.
	</p>
	<p>
		<a href="/" class="font-bold">← Return to the catalog</a>
	</p>
</section>
