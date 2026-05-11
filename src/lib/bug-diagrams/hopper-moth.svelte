<svg viewBox="0 0 460 260" class="diagram-svg w-full max-w-md" xmlns="http://www.w3.org/2000/svg">
	<!-- Logbook page background -->
	<g transform="translate(40 30)">
		<rect width="380" height="200" class="ink" fill="#fbf7ec" />
		<!-- Ruled lines -->
		<g class="ink" stroke-opacity="0.25" stroke-width="0.6">
			<line x1="0" y1="30" x2="380" y2="30" />
			<line x1="0" y1="50" x2="380" y2="50" />
			<line x1="0" y1="70" x2="380" y2="70" />
			<line x1="0" y1="90" x2="380" y2="90" />
			<line x1="0" y1="110" x2="380" y2="110" />
			<line x1="0" y1="130" x2="380" y2="130" />
			<line x1="0" y1="150" x2="380" y2="150" />
			<line x1="0" y1="170" x2="380" y2="170" />
		</g>

		<!-- Header -->
		<text x="10" y="20" class="label-mono">Sept 9, 1947 · Mark II · Panel F</text>

		<!-- Log entries -->
		<text x="10" y="45" class="hand" font-size="14">
			15:45 · Relay #70 Panel F. Found first
		</text>
		<text x="10" y="65" class="hand" font-size="14">
			actual case of bug being found.
		</text>

		<!-- The moth, taped center -->
		<g transform="translate(200 130)">
			<!-- Body -->
			<ellipse cx="0" cy="0" rx="3" ry="14" class="ink-fill" />
			<!-- Wings -->
			<g class="ink" stroke-width="1.2" fill="#dfca8a" fill-opacity="0.4">
				<path d="M0 -8 q -28 -10 -34 8 q -2 14 14 12 q 12 0 20 -10 z" />
				<path d="M0 -8 q 28 -10 34 8 q 2 14 -14 12 q -12 0 -20 -10 z" />
				<path d="M0 6 q -22 -4 -26 14 q 0 10 12 8 q 10 -2 14 -10 z" />
				<path d="M0 6 q 22 -4 26 14 q 0 10 -12 8 q -10 -2 -14 -10 z" />
			</g>
			<!-- Antennae -->
			<g class="ink" stroke-width="1">
				<line x1="-1" y1="-13" x2="-6" y2="-22" />
				<line x1="1" y1="-13" x2="6" y2="-22" />
			</g>

			<!-- Tape strips -->
			<g class="ink" fill="#dfca8a" fill-opacity="0.45" stroke-width="0.6">
				<rect x="-48" y="-3" width="22" height="6" transform="rotate(-15 -37 0)" />
				<rect x="26" y="-3" width="22" height="6" transform="rotate(15 37 0)" />
			</g>
		</g>

		<!-- Note arrow -->
		<g transform="translate(230 130)">
			<path d="M0 0 q 30 -20 70 -30" class="ink" stroke-width="0.8" fill="none" />
			<text x="74" y="-26" class="hand" font-size="13">specimen.</text>
		</g>

		<!-- Signature line -->
		<text x="10" y="185" class="label-mono" font-size="9">· Burke, W.</text>
	</g>
</svg>
