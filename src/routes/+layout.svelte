<script lang="ts">
	import '../app.css';
	let { children } = $props();
</script>

<div class="min-h-dvh">
	<header class="border-b border-parchment-300 bg-parchment-100/60 backdrop-blur-sm">
		<div class="mx-auto flex max-w-5xl items-baseline justify-between px-5 py-5 sm:px-8">
			<a href="/" class="no-underline">
				<h1 class="font-display text-2xl font-semibold tracking-tight text-ink-900 sm:text-3xl">
					Bugs
				</h1>
				<p class="font-serif text-xs italic text-ink-400 sm:text-sm">
					A Field Guide to the Errata of Computing
				</p>
			</a>
			<nav class="font-mono text-[11px] uppercase tracking-widest text-ink-400">
				<a href="/about" class="no-underline hover:text-ink-700">About</a>
			</nav>
		</div>
	</header>

	<main class="mx-auto max-w-5xl px-5 py-10 sm:px-8 sm:py-14">
		{@render children?.()}
	</main>

	<footer class="border-t border-parchment-300 bg-parchment-100/40">
		<div
			class="mx-auto flex max-w-5xl flex-wrap items-center justify-between gap-4 px-5 py-6 font-mono text-[11px] uppercase tracking-widest text-ink-400 sm:px-8"
		>
			<span>
				Compiled and illustrated by
				<a href="https://www.ma-r-s.com" class="hover:text-cinnabar-600">Mario A. Ruiz</a>
			</span>
			<span>CC BY-NC 4.0 · 2026</span>
		</div>
	</footer>
</div>
