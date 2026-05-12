<svg
	viewBox="0 0 460 300"
	class="diagram-svg w-full max-w-lg"
	xmlns="http://www.w3.org/2000/svg"
>
	<!-- Logbook page -->
	<g transform="translate(40 30)">
		<rect width="380" height="240" class="ink" fill="#fbf7ec" stroke-width="1.2" />
		<!-- Ruled lines -->
		<g class="ink" stroke-opacity="0.22" stroke-width="0.6">
			<line x1="0" y1="30" x2="380" y2="30" />
			<line x1="0" y1="56" x2="380" y2="56" />
			<line x1="0" y1="82" x2="380" y2="82" />
			<line x1="0" y1="108" x2="380" y2="108" />
			<line x1="0" y1="134" x2="380" y2="134" />
			<line x1="0" y1="160" x2="380" y2="160" />
			<line x1="0" y1="186" x2="380" y2="186" />
			<line x1="0" y1="212" x2="380" y2="212" />
		</g>

		<!-- Header -->
		<text x="12" y="22" class="label-mono">Sept 9, 1947 · Mark II · Panel F</text>

		<!-- Log entries -->
		<text x="12" y="50" class="hand" font-size="14">15:45 · Relay #70, Panel F.</text>
		<text x="12" y="76" class="hand" font-size="14">
			First actual case of bug being found.
		</text>

		<!-- Moth specimen, centered on lower portion -->
		<g transform="translate(190 165)">
			<!-- Tape strips (drawn before the moth so moth sits "on top") -->
			<g class="ink" fill="#dfca8a" fill-opacity="0.5" stroke-width="0.5">
				<rect x="-58" y="-3" width="24" height="6" transform="rotate(-12 -46 0)" />
				<rect x="34" y="-3" width="24" height="6" transform="rotate(12 46 0)" />
			</g>

			<!-- Wings: four overlapping ellipses for moth-like flat shape -->
			<g class="ink" stroke-width="1.1" fill="#dfca8a" fill-opacity="0.55">
				<!-- Upper-left wing -->
				<path d="M0 -2 q -40 -22 -52 4 q -2 16 14 16 q 18 -2 28 -10 q 14 -2 10 -10 z" />
				<!-- Upper-right wing (mirror) -->
				<path d="M0 -2 q 40 -22 52 4 q 2 16 -14 16 q -18 -2 -28 -10 q -14 -2 -10 -10 z" />
				<!-- Lower-left wing -->
				<path d="M0 4 q -30 -2 -38 18 q -2 12 12 12 q 16 -2 20 -10 q 12 -4 6 -20 z" />
				<!-- Lower-right wing (mirror) -->
				<path d="M0 4 q 30 -2 38 18 q 2 12 -12 12 q -16 -2 -20 -10 q -12 -4 -6 -20 z" />
			</g>

			<!-- Body -->
			<ellipse cx="0" cy="0" rx="3" ry="16" class="ink-fill" />
			<!-- Head -->
			<circle cx="0" cy="-15" r="2.5" class="ink-fill" />

			<!-- Antennae -->
			<g class="ink" stroke-width="0.9" fill="none">
				<path d="M-1 -17 q -6 -4 -10 -10" />
				<path d="M1 -17 q 6 -4 10 -10" />
				<circle cx="-11" cy="-27" r="1" class="ink-fill" />
				<circle cx="11" cy="-27" r="1" class="ink-fill" />
			</g>
		</g>

		<!-- Specimen pointer -->
		<g transform="translate(245 175)">
			<path d="M0 0 q 30 -12 60 -22" class="ink" stroke-width="0.7" fill="none" />
			<text x="62" y="-20" class="hand" font-size="13">specimen.</text>
		</g>

		<!-- Signature -->
		<text x="12" y="232" class="label-mono" font-size="9">· W. Burke</text>
	</g>
</svg>
