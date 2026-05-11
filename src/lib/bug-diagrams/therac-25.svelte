<svg viewBox="0 0 460 260" class="diagram-svg w-full max-w-md" xmlns="http://www.w3.org/2000/svg">
	<!-- Top timeline: operator -->
	<g transform="translate(40 60)">
		<text x="-10" y="-12" class="label-mono">OPERATOR</text>
		<line x1="0" y1="0" x2="380" y2="0" class="ink" stroke-width="1" />

		<!-- Keystrokes -->
		<g class="ink-fill">
			<circle cx="20" cy="0" r="3" />
			<circle cx="90" cy="0" r="3" />
			<circle cx="160" cy="0" r="3" />
			<circle cx="220" cy="0" r="3" />
		</g>
		<text x="20" y="-10" class="label-mono" text-anchor="middle">x</text>
		<text x="90" y="-10" class="label-mono" text-anchor="middle">↑</text>
		<text x="160" y="-10" class="label-mono" text-anchor="middle">e</text>
		<text x="220" y="-10" class="label-mono" text-anchor="middle">⏎</text>
		<text x="20" y="18" class="label" text-anchor="middle" font-size="9">X-ray</text>
		<text x="90" y="18" class="label" text-anchor="middle" font-size="9">undo</text>
		<text x="160" y="18" class="label" text-anchor="middle" font-size="9">electron</text>
		<text x="220" y="18" class="label" text-anchor="middle" font-size="9">FIRE</text>
	</g>

	<!-- Lower timeline: turntable -->
	<g transform="translate(40 160)">
		<text x="-10" y="-12" class="label-mono">TURNTABLE</text>
		<line x1="0" y1="0" x2="380" y2="0" class="ink" stroke-width="1" />

		<!-- Rotation in progress (8s) -->
		<rect x="20" y="-6" width="240" height="12" class="ink" fill="#dfca8a" fill-opacity="0.5" />
		<text x="140" y="3" class="label" text-anchor="middle" font-size="11">rotating · 8s</text>

		<!-- Fire window -->
		<g class="accent">
			<line x1="220" y1="-18" x2="220" y2="18" stroke-width="1.5" stroke-dasharray="2 2" />
		</g>
		<text x="220" y="32" class="label" text-anchor="middle" fill="#7d2a1d" font-size="11">
			Enter pressed mid-rotation
		</text>
	</g>

	<!-- Connector -->
	<line x1="260" y1="80" x2="260" y2="148" class="accent" stroke-width="1" stroke-dasharray="2 2" />

	<!-- Caption -->
	<text x="230" y="240" class="hand" text-anchor="middle">
		The variable for "input mode" is the variable for "turntable ready".
	</text>
</svg>
