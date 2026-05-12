<script lang="ts">
	/**
	 * Decorative background creatures composed of code glyphs.
	 * Each "bug" is a small SVG made of bracket-punctuation
	 * (literal "code that walks") that drifts slowly across the
	 * viewport. Subtle, pointer-events disabled, hidden under
	 * prefers-reduced-motion.
	 */

	type Bug = {
		body: string;
		top: number;
		delay: number;
		duration: number;
		size: number;
		opacity: number;
		direction: 'rtl' | 'ltr';
	};

	// Bracket-based glyphs that read like little arthropods.
	const GLYPHS = ['<[••]>', '{[··]}', '<o-o>', '[••]', '<·_·>', '{[**]}', '<-•-•->'];

	function rand(min: number, max: number) {
		return min + Math.random() * (max - min);
	}

	function buildBugs(count: number): Bug[] {
		return Array.from({ length: count }, () => ({
			body: GLYPHS[Math.floor(Math.random() * GLYPHS.length)],
			top: rand(8, 92),
			delay: -rand(0, 80),
			duration: rand(60, 110),
			size: rand(13, 19),
			opacity: rand(0.1, 0.22),
			direction: Math.random() > 0.5 ? 'ltr' : 'rtl'
		}));
	}

	interface Props {
		count?: number;
	}
	let { count = 7 }: Props = $props();

	const bugs = buildBugs(count);
</script>

<div class="crawler" aria-hidden="true">
	{#each bugs as bug, i}
		<div
			class="crawl-track"
			class:reverse={bug.direction === 'rtl'}
			style="--top:{bug.top}%; --delay:{bug.delay}s; --duration:{bug.duration}s; --size:{bug.size}px; --opacity:{bug.opacity};"
		>
			<div class="gait">
				<svg
					viewBox="0 0 80 26"
					xmlns="http://www.w3.org/2000/svg"
					class="bug-svg"
				>
					<text
						x="40"
						y="14"
						text-anchor="middle"
						font-family="ui-monospace, SFMono-Regular, Menlo, monospace"
						font-size="14"
						fill="currentColor"
					>{bug.body}</text>
					<g stroke="currentColor" stroke-width="0.9" stroke-linecap="round">
						<line x1="22" y1="18" x2="16" y2="24" />
						<line x1="32" y1="18" x2="28" y2="25" />
						<line x1="42" y1="18" x2="42" y2="25" />
						<line x1="52" y1="18" x2="56" y2="25" />
						<line x1="62" y1="18" x2="68" y2="24" />
					</g>
				</svg>
			</div>
		</div>
	{/each}
</div>

<style>
	.crawler {
		position: fixed;
		inset: 0;
		pointer-events: none;
		z-index: 0;
		overflow: hidden;
	}

	.crawl-track {
		position: absolute;
		top: var(--top);
		left: -100px;
		color: #2a2114;
		opacity: var(--opacity);
		animation: crawl var(--duration) linear var(--delay) infinite;
		font-size: var(--size);
	}

	.crawl-track.reverse {
		animation-name: crawl-reverse;
	}

	.gait {
		animation: gait 0.55s ease-in-out infinite alternate;
		transform-origin: 50% 100%;
	}

	.bug-svg {
		width: calc(var(--size) * 4);
		height: auto;
		display: block;
	}

	.crawl-track.reverse .bug-svg {
		transform: scaleX(-1);
	}

	@keyframes crawl {
		from {
			transform: translateX(-50px);
		}
		to {
			transform: translateX(calc(100vw + 100px));
		}
	}

	@keyframes crawl-reverse {
		from {
			transform: translateX(calc(100vw + 100px));
		}
		to {
			transform: translateX(-50px);
		}
	}

	@keyframes gait {
		from {
			transform: translateY(0) rotate(-1deg);
		}
		to {
			transform: translateY(-1.5px) rotate(1deg);
		}
	}

	@media (prefers-reduced-motion: reduce) {
		.crawler {
			display: none;
		}
	}
</style>
