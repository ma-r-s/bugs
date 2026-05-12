<svg
	viewBox="0 0 460 280"
	class="diagram-svg w-full max-w-lg"
	xmlns="http://www.w3.org/2000/svg"
>
	<!-- OPERATOR timeline -->
	<g transform="translate(50 70)">
		<text x="-12" y="-14" class="label-mono">OPERATOR</text>
		<line x1="0" y1="0" x2="370" y2="0" class="ink" stroke-width="1" />

		<!-- Keystroke dots -->
		<g class="ink-fill">
			<circle cx="30" cy="0" r="3.5" />
			<circle cx="110" cy="0" r="3.5" />
			<circle cx="195" cy="0" r="3.5" />
			<circle cx="280" cy="0" r="3.5" />
		</g>

		<!-- Keystroke labels above (drawn glyphs, not Unicode that may not render) -->
		<g transform="translate(30 -20)">
			<text class="label-mono" text-anchor="middle" font-size="13">x</text>
		</g>
		<g transform="translate(110 -16)" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" fill="none">
			<line x1="0" y1="2" x2="0" y2="-10" />
			<line x1="-4" y1="-6" x2="0" y2="-10" />
			<line x1="4" y1="-6" x2="0" y2="-10" />
		</g>
		<g transform="translate(195 -20)">
			<text class="label-mono" text-anchor="middle" font-size="13">e</text>
		</g>
		<g transform="translate(280 -18)" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" fill="none">
			<path d="M-6 -4 L 6 -4 L 6 0" />
			<path d="M-2 -8 L -6 -4 L -2 0" />
		</g>

		<!-- Caption labels below dots -->
		<text x="30" y="18" class="label" text-anchor="middle" font-size="10">X-ray</text>
		<text x="110" y="18" class="label" text-anchor="middle" font-size="10">undo</text>
		<text x="195" y="18" class="label" text-anchor="middle" font-size="10">electron</text>
		<text x="280" y="18" class="label" text-anchor="middle" font-size="10" fill="#7d2a1d">FIRE</text>
	</g>

	<!-- TURNTABLE timeline -->
	<g transform="translate(50 180)">
		<text x="-12" y="-14" class="label-mono">TURNTABLE</text>
		<line x1="0" y1="0" x2="370" y2="0" class="ink" stroke-width="1" />

		<!-- Rotation bar -->
		<rect x="30" y="-8" width="280" height="16" class="ink" fill="#dfca8a" fill-opacity="0.45" />
		<text x="170" y="4" class="label" text-anchor="middle" font-size="11">
			rotating · 8 seconds
		</text>

		<!-- Kill window indicator -->
		<g class="accent" stroke-width="1.5">
			<line x1="280" y1="-22" x2="280" y2="22" stroke-dasharray="2 2" />
		</g>
		<text x="280" y="38" class="label" text-anchor="middle" fill="#7d2a1d" font-size="11">
			Enter pressed mid-rotation
		</text>
	</g>

	<!-- Connector line between FIRE keystroke and kill window -->
	<line
		x1="330"
		y1="92"
		x2="330"
		y2="168"
		class="accent"
		stroke-width="1"
		stroke-dasharray="2 2"
	/>

	<!-- Caption -->
	<text x="230" y="260" class="hand" text-anchor="middle" font-size="14">
		The variable for "input mode" is the variable for "turntable ready."
	</text>
</svg>
