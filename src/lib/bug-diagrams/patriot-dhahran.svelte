<svg viewBox="0 0 460 260" class="diagram-svg w-full max-w-md" xmlns="http://www.w3.org/2000/svg">
	<!-- Clock face with drift -->
	<g transform="translate(90 110)">
		<circle r="60" class="ink" stroke-width="1.5" />
		<!-- Tick marks -->
		<g class="ink" stroke-width="1.2">
			<line x1="0" y1="-60" x2="0" y2="-52" />
			<line x1="60" y1="0" x2="52" y2="0" />
			<line x1="0" y1="60" x2="0" y2="52" />
			<line x1="-60" y1="0" x2="-52" y2="0" />
		</g>
		<!-- Truth hand (12 o'clock) -->
		<line x1="0" y1="0" x2="0" y2="-50" class="ink" stroke-width="2" stroke-linecap="round" />
		<!-- Computed hand, drifted -->
		<line x1="0" y1="0" x2="22" y2="-44" class="accent" stroke-width="2" stroke-linecap="round" />
		<circle r="2.5" class="ink-fill" />
		<text x="-44" y="80" class="label" font-size="11">actual time</text>
		<text x="20" y="80" class="label" fill="#7d2a1d" font-size="11">computed (−0.34s)</text>
	</g>

	<!-- Trajectory -->
	<g transform="translate(220 80)">
		<text x="0" y="-8" class="label-mono">SCUD TRAJECTORY</text>

		<!-- True path -->
		<path d="M0 0 q 80 30 200 80" class="ink" stroke-width="1.5" />
		<polygon points="204,84 195,76 198,87" class="ink-fill" />
		<text x="155" y="40" class="label" font-size="11">actual impact</text>

		<!-- Predicted path -->
		<path d="M0 0 q 80 0 200 25" class="accent" stroke-width="1.5" stroke-dasharray="3 2" />
		<text x="155" y="22" class="label" fill="#7d2a1d" font-size="11">predicted (−570 m)</text>

		<!-- Range gate -->
		<rect x="195" y="20" width="30" height="10" class="ink" stroke-dasharray="2 2" fill="none" />
	</g>

	<!-- Hand annotation -->
	<text x="60" y="230" class="hand" transform="rotate(-3 60 230)">
		one hundred hours of uptime.
	</text>
</svg>
