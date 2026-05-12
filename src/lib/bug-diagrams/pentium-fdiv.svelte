<svg
	viewBox="0 0 460 300"
	class="diagram-svg w-full max-w-lg"
	xmlns="http://www.w3.org/2000/svg"
>
	<defs>
		<pattern id="fdiv-cell" x="0" y="0" width="8" height="8" patternUnits="userSpaceOnUse">
			<rect width="6.5" height="6.5" x="0" y="0" fill="#f6efd9" stroke="currentColor" stroke-width="0.5" />
		</pattern>
	</defs>

	<!-- Lookup table -->
	<g transform="translate(80 40)">
		<text x="0" y="-10" class="label-mono">SRT LOOKUP TABLE · 2,048 ENTRIES</text>
		<!-- Tile the grid: 32 cols × 8 rows = 256 visible cells -->
		<rect width="256" height="64" fill="url(#fdiv-cell)" />

		<!-- Five missing entries highlighted -->
		<g class="accent" fill="#a13929" fill-opacity="0.65" stroke="none">
			<rect x="80" y="16" width="6.5" height="6.5" />
			<rect x="120" y="16" width="6.5" height="6.5" />
			<rect x="56" y="40" width="6.5" height="6.5" />
			<rect x="160" y="24" width="6.5" height="6.5" />
			<rect x="216" y="32" width="6.5" height="6.5" />
		</g>

		<text x="0" y="84" class="label" font-size="11">
			5 entries omitted in the mask layout
		</text>
	</g>

	<!-- Example math -->
	<g transform="translate(40 180)">
		<text class="label-mono">EXAMPLE</text>
		<g transform="translate(0 22)">
			<text class="label-mono" font-size="13">
				4 195 835.0  ÷  3 145 727.0
			</text>
			<text y="22" class="label-mono" font-size="13">
				= 1.3338204
				<tspan fill="#7d2a1d" font-weight="600">2</tspan>
				…   (Pentium)
			</text>
			<text y="42" class="label-mono" font-size="13">
				= 1.3338204
				<tspan fill="currentColor" font-weight="600">5</tspan>
				…   (correct)
			</text>
		</g>
	</g>

	<!-- Hand note -->
	<text x="420" y="266" class="hand" text-anchor="end" font-size="14">
		~1 in 9,000,000,000
	</text>
</svg>
