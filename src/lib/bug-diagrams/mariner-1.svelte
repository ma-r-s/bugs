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
			<!-- caret marking the missing bar -->
			<g transform="translate(2 -24)">
				<path d="M0 0 L7 -8 L14 0" class="accent" stroke-width="1.4" fill="none" />
			</g>
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

		<!-- Smoothed curve -->
		<path
			d="M0 18 q 50 -6 100 0 t 100 0 t 100 0 t 70 0"
			class="ink"
			stroke-width="1.5"
			fill="none"
		/>
		<text x="380" y="22" class="label">smoothed</text>

		<!-- Raw zigzag -->
		<path
			d="M0 60 l 8 -12 l 8 14 l 10 -10 l 8 8 l 12 -16 l 8 14 l 14 -12 l 8 10 l 12 -18 l 10 18 l 16 -16 l 14 14 l 18 -20 l 22 22 l 24 -28 l 24 30"
			class="accent"
			stroke-width="1.5"
			fill="none"
		/>
		<text x="240" y="88" class="label" fill="#7d2a1d">raw → veer-off</text>
	</g>

	<!-- Rocket icon -->
	<g transform="translate(395 230)">
		<g transform="rotate(35)">
			<path d="M0 0 L 4 -16 L 8 0 Z" class="ink" fill="#f6efd9" stroke-width="1.2" />
			<line x1="1" y1="0" x2="-2" y2="6" class="accent" stroke-width="1.2" />
			<line x1="7" y1="0" x2="10" y2="6" class="accent" stroke-width="1.2" />
		</g>
		<text x="-32" y="24" class="hand" fill="#7d2a1d" font-size="13">T+293s</text>
	</g>
</svg>
