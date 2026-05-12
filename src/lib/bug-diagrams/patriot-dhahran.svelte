<svg
	viewBox="0 0 460 300"
	class="diagram-svg w-full max-w-lg"
	xmlns="http://www.w3.org/2000/svg"
>
	<!-- Clock face (left) -->
	<g transform="translate(90 140)">
		<circle r="62" class="ink" stroke-width="1.5" fill="#fbf7ec" />
		<!-- Tick marks at 12, 3, 6, 9 -->
		<g class="ink" stroke-width="1.2">
			<line x1="0" y1="-62" x2="0" y2="-54" />
			<line x1="62" y1="0" x2="54" y2="0" />
			<line x1="0" y1="62" x2="0" y2="54" />
			<line x1="-62" y1="0" x2="-54" y2="0" />
		</g>
		<!-- minute ticks -->
		<g class="ink" stroke-width="0.6" stroke-opacity="0.4">
			<line x1="0" y1="-62" x2="0" y2="-58" transform="rotate(30)" />
			<line x1="0" y1="-62" x2="0" y2="-58" transform="rotate(60)" />
			<line x1="0" y1="-62" x2="0" y2="-58" transform="rotate(120)" />
			<line x1="0" y1="-62" x2="0" y2="-58" transform="rotate(150)" />
			<line x1="0" y1="-62" x2="0" y2="-58" transform="rotate(210)" />
			<line x1="0" y1="-62" x2="0" y2="-58" transform="rotate(240)" />
			<line x1="0" y1="-62" x2="0" y2="-58" transform="rotate(300)" />
			<line x1="0" y1="-62" x2="0" y2="-58" transform="rotate(330)" />
		</g>

		<!-- Actual time hand (12 o'clock) -->
		<line x1="0" y1="0" x2="0" y2="-50" class="ink" stroke-width="2.2" stroke-linecap="round" />
		<!-- Computed hand (drifted ~5°) -->
		<line x1="0" y1="0" x2="18" y2="-48" class="accent" stroke-width="2.2" stroke-linecap="round" />
		<circle r="3" class="ink-fill" />

		<text x="0" y="88" class="label" text-anchor="middle" font-size="11">actual</text>
		<text x="0" y="102" class="label" fill="#7d2a1d" text-anchor="middle" font-size="11">
			computed (−0.34 s)
		</text>
	</g>

	<!-- Trajectory diagram (right) -->
	<g transform="translate(220 70)">
		<text x="0" y="-10" class="label-mono">SCUD TRAJECTORY</text>

		<!-- Actual path -->
		<path d="M0 0 q 80 30 200 80" class="ink" stroke-width="1.6" fill="none" />
		<circle cx="200" cy="80" r="3.5" class="ink-fill" />
		<text x="194" y="100" class="label" font-size="11">actual impact</text>

		<!-- Predicted path (short by 570m) -->
		<path
			d="M0 0 q 70 -2 195 28"
			class="accent"
			stroke-width="1.5"
			stroke-dasharray="3 2"
			fill="none"
		/>
		<circle cx="195" cy="28" r="3.5" class="accent-fill" />
		<text x="160" y="20" class="label" fill="#7d2a1d" font-size="11">
			predicted (570 m short)
		</text>

		<!-- Distance bracket between the two impact points -->
		<g class="ink" stroke-opacity="0.4">
			<line x1="200" y1="80" x2="195" y2="28" stroke-width="0.8" stroke-dasharray="1 2" />
		</g>
	</g>

	<!-- Bottom annotation -->
	<text
		x="230"
		y="275"
		class="hand"
		text-anchor="middle"
		font-size="14"
		transform="rotate(-2 230 275)"
	>one hundred hours of uptime.</text>
</svg>
