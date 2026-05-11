<svg viewBox="0 0 460 260" class="diagram-svg w-full max-w-md" xmlns="http://www.w3.org/2000/svg">
	<!-- The lookup table grid -->
	<g transform="translate(40 30)">
		<text class="label-mono">SRT LOOKUP TABLE · 2,048 ENTRIES</text>

		<!-- 32 columns × 8 rows visualization (256 cells out of 2048) -->
		<g transform="translate(0 14)">
			<!-- Draw cells -->
			{#each Array(8) as _, row}
				{#each Array(32) as _, col}
					{@const i = row * 32 + col}
					{@const missing = i === 76 || i === 122 || i === 168 || i === 200 || i === 232}
					<rect
						x={col * 8}
						y={row * 8}
						width="6.5"
						height="6.5"
						class={missing ? 'accent' : 'ink'}
						fill={missing ? '#a13929' : '#f6efd9'}
						stroke-width="0.6"
					/>
				{/each}
			{/each}
		</g>

		<text x="0" y="100" class="label" font-size="11">
			5 entries omitted in mask layout
		</text>
	</g>

	<!-- The division example -->
	<g transform="translate(40 170)">
		<text class="label-mono">EXAMPLE</text>

		<text y="20" class="label-mono" font-size="14">
			4195835.0 ÷ 3145727.0
		</text>
		<text y="40" class="label-mono" font-size="14">
			= 1.33382045
			<tspan fill="#7d2a1d">2</tspan>
			<tspan>... (Pentium)</tspan>
		</text>
		<text y="58" class="label-mono" font-size="14">
			= 1.33382045
			<tspan>5</tspan>
			<tspan>... (correct)</tspan>
		</text>
	</g>

	<!-- Note -->
	<text x="430" y="218" class="hand" text-anchor="end" font-size="13">
		1 in 9,000,000,000
	</text>
</svg>
