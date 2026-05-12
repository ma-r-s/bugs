<svg
	viewBox="0 0 460 300"
	class="diagram-svg w-full max-w-lg"
	xmlns="http://www.w3.org/2000/svg"
>
	<!-- Grid network -->
	<g transform="translate(40 40)">
		<text class="label-mono">14 AUG 2003 · CASCADE</text>

		<g transform="translate(0 26)">
			<!-- Lines (drawn under nodes) -->
			<g class="ink" stroke-width="1.2">
				<line x1="30" y1="30" x2="120" y2="30" />
				<line x1="120" y1="30" x2="210" y2="30" />
				<line x1="210" y1="30" x2="300" y2="30" />
				<line x1="300" y1="30" x2="380" y2="30" />
				<line x1="30" y1="30" x2="120" y2="100" />
				<line x1="120" y1="30" x2="210" y2="100" />
				<line x1="210" y1="30" x2="300" y2="100" />
				<line x1="300" y1="30" x2="380" y2="100" />
				<line x1="120" y1="100" x2="210" y2="100" />
				<line x1="210" y1="100" x2="300" y2="100" />
				<line x1="300" y1="100" x2="380" y2="100" />
			</g>

			<!-- Failed lines (accent) -->
			<g class="accent" stroke-width="1.8">
				<line x1="30" y1="30" x2="120" y2="30" />
				<line x1="120" y1="30" x2="210" y2="30" />
				<line x1="30" y1="30" x2="120" y2="100" />
				<line x1="120" y1="30" x2="210" y2="100" />
			</g>

			<!-- Nodes -->
			<g class="ink" fill="#fbf7ec" stroke-width="1.4">
				<circle cx="30" cy="30" r="9" />
				<circle cx="120" cy="30" r="9" />
				<circle cx="210" cy="30" r="9" />
				<circle cx="300" cy="30" r="9" />
				<circle cx="380" cy="30" r="9" />
				<circle cx="120" cy="100" r="9" />
				<circle cx="210" cy="100" r="9" />
				<circle cx="300" cy="100" r="9" />
				<circle cx="380" cy="100" r="9" />
			</g>

			<!-- First fault: the tree -->
			<g transform="translate(30 30)">
				<!-- Tiny tree -->
				<g class="leaf-fill" fill-opacity="0.55" transform="translate(0 -22)">
					<ellipse cx="0" cy="-2" rx="7" ry="9" />
				</g>
				<line x1="0" y1="-22" x2="0" y2="-13" class="leaf" stroke-width="1" />
				<text x="-22" y="-26" class="label-mono" fill="#7d2a1d" font-size="9">
					tree
				</text>
			</g>
		</g>
	</g>

	<!-- Alarm/control row -->
	<g transform="translate(40 200)">
		<g>
			<rect width="180" height="50" class="ink" fill="#fbf7ec" />
			<text x="90" y="20" class="label-mono" text-anchor="middle">XA/21 ALARM PROC</text>
			<text x="90" y="40" class="hand" text-anchor="middle" font-size="14" fill="#7d2a1d">
				silent.
			</text>
		</g>

		<g transform="translate(200 0)">
			<rect width="180" height="50" class="ink" fill="#fbf7ec" />
			<text x="90" y="20" class="label-mono" text-anchor="middle">CONTROL ROOM</text>
			<text x="90" y="40" class="label" text-anchor="middle" font-style="italic" font-size="11">
				looks normal
			</text>
		</g>

		<!-- Broken connector between the two -->
		<g class="ink" stroke-width="1" stroke-dasharray="2 3" stroke-opacity="0.5">
			<line x1="180" y1="25" x2="200" y2="25" />
		</g>
	</g>

	<!-- Caption -->
	<text x="230" y="275" class="hand" text-anchor="middle" font-size="13">
		The watcher that watches the watcher.
	</text>
</svg>
