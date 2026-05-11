<svg viewBox="0 0 460 260" class="diagram-svg w-full max-w-md" xmlns="http://www.w3.org/2000/svg">
	<!-- Grid network -->
	<g transform="translate(40 40)">
		<text class="label-mono">14 AUG 2003 · CASCADE</text>

		<!-- Nodes -->
		<g transform="translate(0 20)">
			<!-- Lines first (drawn under nodes) -->
			<g class="ink" stroke-width="1.2">
				<line x1="40" y1="30" x2="120" y2="30" />
				<line x1="120" y1="30" x2="200" y2="30" />
				<line x1="200" y1="30" x2="280" y2="30" />
				<line x1="280" y1="30" x2="360" y2="30" />
				<line x1="40" y1="30" x2="120" y2="100" />
				<line x1="120" y1="100" x2="200" y2="30" />
				<line x1="200" y1="100" x2="280" y2="30" />
				<line x1="200" y1="100" x2="280" y2="100" />
				<line x1="280" y1="100" x2="360" y2="30" />
				<line x1="280" y1="100" x2="360" y2="100" />
				<line x1="120" y1="100" x2="200" y2="100" />
			</g>

			<!-- Failed lines (red) -->
			<g class="accent" stroke-width="1.5">
				<line x1="40" y1="30" x2="120" y2="30" />
				<line x1="120" y1="30" x2="200" y2="30" />
				<line x1="40" y1="30" x2="120" y2="100" />
				<line x1="120" y1="100" x2="200" y2="30" />
			</g>

			<!-- Nodes -->
			<g class="ink" fill="#f6efd9" stroke-width="1.2">
				<circle cx="40" cy="30" r="8" />
				<circle cx="120" cy="30" r="8" />
				<circle cx="200" cy="30" r="8" />
				<circle cx="280" cy="30" r="8" />
				<circle cx="360" cy="30" r="8" />
				<circle cx="120" cy="100" r="8" />
				<circle cx="200" cy="100" r="8" />
				<circle cx="280" cy="100" r="8" />
				<circle cx="360" cy="100" r="8" />
			</g>

			<!-- First failure (tree + line) -->
			<g class="accent">
				<text x="40" y="14" class="label-mono" text-anchor="middle" font-size="10" fill="#7d2a1d">
					tree
				</text>
				<line x1="40" y1="18" x2="40" y2="22" stroke-width="1.5" />
			</g>
		</g>
	</g>

	<!-- Alarm subsystem -->
	<g transform="translate(40 200)">
		<rect width="180" height="44" class="ink" fill="#f6efd9" />
		<text x="90" y="18" class="label-mono" text-anchor="middle">XA/21 ALARM PROC</text>
		<text x="90" y="34" class="hand" text-anchor="middle" font-size="13" fill="#7d2a1d">silent.</text>
	</g>

	<g transform="translate(240 200)">
		<rect width="180" height="44" class="ink" fill="#f6efd9" />
		<text x="90" y="18" class="label-mono" text-anchor="middle">CONTROL ROOM</text>
		<text x="90" y="34" class="label" text-anchor="middle" font-style="italic" font-size="11">
			looks normal
		</text>
	</g>

	<!-- Connector -->
	<line x1="220" y1="222" x2="240" y2="222" class="ink" stroke-width="1.2" stroke-dasharray="2 2" />
</svg>
