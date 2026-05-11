<svg viewBox="0 0 460 260" class="diagram-svg w-full max-w-md" xmlns="http://www.w3.org/2000/svg">
	<!-- Flag bit interpretation -->
	<g transform="translate(40 30)">
		<text class="label-mono">FLAG BIT · TWO MEANINGS</text>

		<g transform="translate(0 14)">
			<rect width="120" height="22" class="ink" />
			<text x="60" y="15" class="label-mono" text-anchor="middle">NEW: RLP order</text>
		</g>
		<g transform="translate(180 14)">
			<rect width="120" height="22" class="accent" />
			<text x="60" y="15" class="label-mono" text-anchor="middle" fill="#7d2a1d">OLD: Power Peg</text>
		</g>
	</g>

	<!-- Eight servers -->
	<g transform="translate(40 110)">
		<text class="label-mono">SMARS ROUTING TIER · 8 SERVERS</text>

		<g transform="translate(0 14)">
			<!-- Seven new -->
			{#each Array(7) as _, i}
				<g transform="translate({i * 45} 0)">
					<rect width="32" height="44" class="ink" fill="#f6efd9" />
					<text x="16" y="20" class="label-mono" text-anchor="middle" font-size="9">v2</text>
					<text x="16" y="34" class="label-mono" text-anchor="middle" font-size="8">OK</text>
				</g>
			{/each}
			<!-- One old -->
			<g transform="translate(315 0)">
				<rect width="32" height="44" class="accent" fill="#a13929" fill-opacity="0.15" />
				<text x="16" y="20" class="label-mono" text-anchor="middle" font-size="9" fill="#7d2a1d">v1</text>
				<text x="16" y="34" class="label-mono" text-anchor="middle" font-size="8" fill="#7d2a1d">PWR</text>
			</g>
		</g>
	</g>

	<!-- Result -->
	<g transform="translate(40 200)">
		<text class="label-mono">RESULT</text>
		<text x="0" y="16" class="label" font-style="italic">
			4M executions · 397M shares · 45 minutes
		</text>
		<text x="0" y="32" class="label" fill="#7d2a1d">−$440,000,000</text>
	</g>

	<!-- Annotation -->
	<text x="350" y="170" class="hand" font-size="13" fill="#7d2a1d" transform="rotate(-8 350 170)">
		one server.
	</text>
</svg>
