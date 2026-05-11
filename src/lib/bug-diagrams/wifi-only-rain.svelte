<svg viewBox="0 0 460 260" class="diagram-svg w-full max-w-md" xmlns="http://www.w3.org/2000/svg">
	<!-- Two panels: DRY (left) and WET (right) -->

	<!-- DRY panel -->
	<g transform="translate(20 30)">
		<text x="80" y="-8" class="label-mono">DRY · NO SIGNAL</text>

		<!-- Antennas -->
		<line x1="0" y1="140" x2="0" y2="100" class="ink" stroke-width="1.5" />
		<rect x="-5" y="92" width="10" height="8" class="ink-fill" />
		<line x1="200" y1="140" x2="200" y2="100" class="ink" stroke-width="1.5" />
		<rect x="195" y="92" width="10" height="8" class="ink-fill" />

		<!-- Fresnel ellipse -->
		<ellipse cx="100" cy="96" rx="100" ry="22" class="accent" stroke-dasharray="3 2" />

		<!-- Tree (upright, into zone) -->
		<g class="leaf">
			<line x1="100" y1="150" x2="100" y2="80" stroke-width="1.8" />
			<path d="M100 80 q -22 -6 -22 8 q -10 6 0 12 q -16 8 4 14 q 14 4 18 -8 q 14 8 18 -8 q 14 -6 0 -12 q 6 -16 -18 -8 z" />
		</g>

		<!-- Ground -->
		<line x1="-10" y1="140" x2="210" y2="140" class="ink" stroke-width="1" />

		<!-- Loss indicator -->
		<text x="60" y="170" class="label">98% loss</text>
	</g>

	<!-- WET panel -->
	<g transform="translate(240 30)">
		<text x="80" y="-8" class="label-mono">WET · LINK UP</text>

		<line x1="0" y1="140" x2="0" y2="100" class="ink" stroke-width="1.5" />
		<rect x="-5" y="92" width="10" height="8" class="ink-fill" />
		<line x1="200" y1="140" x2="200" y2="100" class="ink" stroke-width="1.5" />
		<rect x="195" y="92" width="10" height="8" class="ink-fill" />

		<!-- Fresnel ellipse, clear -->
		<ellipse cx="100" cy="96" rx="100" ry="22" class="ink" stroke-dasharray="3 2" stroke-opacity="0.6" />

		<!-- Signal beam (working) -->
		<line x1="6" y1="96" x2="194" y2="96" class="accent" stroke-width="1.5" />

		<!-- Tree (bent down by rain) -->
		<g class="leaf">
			<path d="M100 150 q 0 -40 22 -55" stroke-width="1.8" fill="none" />
			<path d="M122 95 q -16 -2 -16 8 q -10 4 0 10 q -10 6 6 10 q 10 4 14 -6 q 12 6 14 -6 q 12 -4 0 -10 q 4 -12 -18 -6 z" />
		</g>

		<!-- Raindrops -->
		<g class="accent">
			<line x1="60" y1="10" x2="55" y2="22" stroke-width="1" />
			<line x1="90" y1="6" x2="86" y2="20" stroke-width="1" />
			<line x1="125" y1="14" x2="120" y2="26" stroke-width="1" />
			<line x1="155" y1="8" x2="151" y2="20" stroke-width="1" />
			<line x1="175" y1="18" x2="171" y2="30" stroke-width="1" />
		</g>

		<!-- Ground -->
		<line x1="-10" y1="140" x2="210" y2="140" class="ink" stroke-width="1" />

		<!-- Loss indicator -->
		<text x="60" y="170" class="label">link clean</text>
	</g>

	<!-- Caption -->
	<text x="230" y="240" class="label" text-anchor="middle">
		Rain weighs the canopy down, clearing the Fresnel zone.
	</text>
</svg>
