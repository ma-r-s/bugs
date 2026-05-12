<svg
	viewBox="0 0 460 300"
	class="diagram-svg w-full max-w-lg"
	xmlns="http://www.w3.org/2000/svg"
>
	<!-- Top: the two equations -->
	<g transform="translate(60 60)">
		<text class="label-mono">INTENDED</text>
		<g transform="translate(0 32)">
			<!-- R with proper overbar -->
			<text
				x="0"
				y="0"
				font-family="ui-monospace, monospace"
				font-size="28"
				fill="currentColor"
			>R</text>
			<line x1="3" y1="-22" x2="18" y2="-22" class="ink" stroke-width="2" />
			<text
				x="22"
				y="0"
				font-family="ui-monospace, monospace"
				font-size="28"
				fill-opacity="0.65"
			>(t)</text>
		</g>
		<text x="0" y="62" class="label" font-style="italic">smoothed radius</text>
	</g>

	<g transform="translate(290 60)">
		<text class="label-mono" fill="#7d2a1d">TRANSCRIBED</text>
		<g transform="translate(0 32)">
			<!-- R without overbar -->
			<text
				x="0"
				y="0"
				font-family="ui-monospace, monospace"
				font-size="28"
				fill="currentColor"
			>R</text>
			<!-- Ghost overbar: dashed line where the real overbar should have been.
			     Same coordinates as the solid overbar on the INTENDED side, so the
			     two equations read as a side-by-side comparison. -->
			<line
				x1="3"
				y1="-22"
				x2="18"
				y2="-22"
				class="accent"
				stroke-width="1.6"
				stroke-dasharray="2.5 2"
			/>
			<text
				x="22"
				y="0"
				font-family="ui-monospace, monospace"
				font-size="28"
				fill-opacity="0.65"
			>(t)</text>
		</g>
		<text x="0" y="62" class="hand" fill="#7d2a1d" font-size="14">overbar omitted</text>
	</g>

	<!-- Divider -->
	<line x1="40" y1="160" x2="420" y2="160" class="ink" stroke-dasharray="3 3" stroke-opacity="0.35" />

	<!-- Trajectory comparison -->
	<g transform="translate(40 200)">
		<text class="label-mono">TRAJECTORY</text>

		<!-- Smoothed curve (the intended flight) -->
		<path
			d="M0 18 q 50 -6 100 0 t 100 0 t 100 0 t 80 0"
			class="ink"
			stroke-width="1.5"
			fill="none"
			stroke-opacity="0.55"
		/>
		<text x="295" y="14" class="label" font-style="italic">intended flight</text>

		<!-- Raw zigzag (the actual veer-off) -->
		<path
			d="M0 60 l 10 -14 l 10 18 l 12 -12 l 10 10 l 14 -20 l 10 18 l 16 -14 l 12 14 l 14 -22 l 12 24 l 18 -20 l 16 18 l 22 -26 l 24 30 l 30 -38 l 30 52"
			class="accent"
			stroke-width="1.6"
			fill="none"
		/>
		<text x="60" y="100" class="label" fill="#7d2a1d">raw → veer-off</text>
	</g>

	<!-- Rocket icon at the END of the raw zigzag -->
	<g transform="translate(300 274) rotate(50)">
		<path d="M-4 0 L 0 -18 L 4 0 Z" class="ink" fill="#f6efd9" stroke-width="1.2" />
		<line x1="-2" y1="0" x2="-5" y2="8" class="accent" stroke-width="1.2" />
		<line x1="2" y1="0" x2="5" y2="8" class="accent" stroke-width="1.2" />
	</g>
	<text x="316" y="284" class="hand" fill="#7d2a1d" font-size="13">T+293s</text>
</svg>
