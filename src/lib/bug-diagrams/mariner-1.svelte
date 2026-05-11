<svg viewBox="0 0 460 260" class="diagram-svg w-full max-w-md" xmlns="http://www.w3.org/2000/svg">
	<!-- Top: the equations as handwritten -->
	<g transform="translate(60 40)">
		<text class="label-mono" fill="currentColor" font-size="22">R</text>
		<line x1="0" y1="-8" x2="14" y2="-8" class="accent" stroke-width="1.5" />
		<text x="20" y="0" class="label-mono" font-size="22">(t)</text>
		<text x="80" y="0" class="label" font-size="14" font-style="italic">intended</text>
	</g>

	<g transform="translate(60 90)">
		<text class="label-mono" font-size="22">R</text>
		<!-- overbar absent -->
		<text x="20" y="0" class="label-mono" font-size="22">(t)</text>
		<text x="80" y="0" class="label" font-size="14" font-style="italic" fill="#7d2a1d">as transcribed</text>
		<!-- Strike of caret indicating missing -->
		<g transform="translate(3 -16)">
			<path d="M0 0 L7 -7 L14 0" class="accent" stroke-width="1.2" fill="none" />
			<text x="22" y="-2" class="hand" fill="#7d2a1d">overbar omitted</text>
		</g>
	</g>

	<!-- Divider -->
	<line x1="40" y1="140" x2="420" y2="140" class="ink" stroke-dasharray="3 3" />

	<!-- Bottom: trajectory comparison -->
	<g transform="translate(40 200)">
		<text x="0" y="-30" class="label-mono">trajectory</text>

		<!-- smooth signal -->
		<path
			d="M0 0 q 50 -10 100 0 t 100 0 t 100 0 t 100 0"
			class="ink"
			stroke-width="1.2"
		/>
		<text x="370" y="4" class="label">smoothed</text>

		<!-- noisy signal -->
		<path
			d="M0 30 l 8 -8 l 6 14 l 10 -10 l 8 6 l 12 -14 l 8 12 l 14 -10 l 8 8 l 12 -16 l 10 14 l 16 -12 l 14 10 l 18 -16 l 22 18 l 28 -22 l 30 24 l 22 -28 l 18 30"
			class="accent"
			stroke-width="1.2"
			fill="none"
		/>
		<text x="370" y="38" class="label" fill="#7d2a1d">raw → veer-off</text>
	</g>

	<!-- Rocket and explosion -->
	<g transform="translate(380 80)">
		<path d="M0 0 l 8 -20 l 8 20 l -8 -2 z" class="ink" stroke-width="1.2" fill="none" />
		<g class="accent">
			<circle cx="22" cy="-30" r="2" />
			<circle cx="28" cy="-22" r="2" />
			<circle cx="16" cy="-34" r="1.5" />
			<circle cx="34" cy="-32" r="1.5" />
			<circle cx="24" cy="-40" r="2" />
		</g>
		<text x="-4" y="14" class="hand" fill="#7d2a1d">T+293s</text>
	</g>
</svg>
