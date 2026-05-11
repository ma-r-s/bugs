<script lang="ts">
	import SpecimenCard from '$lib/components/SpecimenCard.svelte';
	import type { PageData } from './$types';

	const bodies = import.meta.glob('$lib/bug-bodies/*.svelte', { eager: true }) as Record<
		string,
		{ default: any }
	>;
	const diagrams = import.meta.glob('$lib/bug-diagrams/*.svelte', { eager: true }) as Record<
		string,
		{ default: any }
	>;

	interface Props {
		data: PageData;
	}
	let { data }: Props = $props();
	const bug = $derived(data.bug);

	const Body = $derived(bodies[`/src/lib/bug-bodies/${bug.slug}.svelte`]?.default ?? null);
	const Diagram = $derived(diagrams[`/src/lib/bug-diagrams/${bug.slug}.svelte`]?.default ?? null);
</script>

<svelte:head>
	<title>{bug.name} · Bugs</title>
	<meta name="description" content={bug.tagline} />
</svelte:head>

<SpecimenCard {bug}>
	{#snippet diagram()}
		{#if Diagram}
			<Diagram />
		{/if}
	{/snippet}

	{#snippet body()}
		{#if Body}
			<Body />
		{/if}
	{/snippet}

	{#snippet sources()}
		<ul class="space-y-1.5">
			{#each bug.sources as src}
				<li>
					<a href={src.url} target="_blank" rel="noopener" class="hover:text-cinnabar-600">
						{src.title}
					</a>
				</li>
			{/each}
		</ul>
	{/snippet}
</SpecimenCard>
