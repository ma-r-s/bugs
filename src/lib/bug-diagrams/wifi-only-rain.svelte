<svg
	viewBox="0 0 460 280"
	class="diagram-svg w-full max-w-lg"
	xmlns="http://www.w3.org/2000/svg"
>
	<!-- DRY panel -->
	<g transform="translate(20 40)">
		<text x="100" y="-12" class="label-mono" text-anchor="middle">DRY · LINK FAILS</text>

		<!-- Antennae -->
		<g class="ink" stroke-width="1.5">
			<line x1="10" y1="155" x2="10" y2="115" />
			<line x1="190" y1="155" x2="190" y2="115" />
		</g>
		<rect x="3" y="105" width="14" height="10" class="ink-fill" />
		<rect x="183" y="105" width="14" height="10" class="ink-fill" />

		<!-- Tree (upright, into Fresnel zone) -->
		<g class="leaf-fill" fill-opacity="0.35">
			<ellipse cx="100" cy="80" rx="32" ry="38" />
			<ellipse cx="86" cy="70" rx="20" ry="22" />
			<ellipse cx="114" cy="68" rx="22" ry="24" />
		</g>
		<line x1="100" y1="118" x2="100" y2="155" class="leaf" stroke-width="2.5" />

		<!-- Signal path (blocked by tree) -->
		<path
			d="M17 110 q 80 -20 173 0"
			class="accent"
			stroke-dasharray="4 3"
			stroke-width="1.4"
			fill="none"
			stroke-opacity="0.6"
		/>

		<!-- Block marker on path -->
		<g transform="translate(100 95)" stroke-linecap="round">
			<line x1="-8" y1="-8" x2="8" y2="8" class="accent" stroke-width="2.2" />
			<line x1="-8" y1="8" x2="8" y2="-8" class="accent" stroke-width="2.2" />
		</g>

		<!-- Ground -->
		<line x1="-5" y1="155" x2="205" y2="155" class="ink" stroke-width="1" />

		<text x="100" y="180" class="label" text-anchor="middle">98% packet loss</text>
	</g>

	<!-- WET panel -->
	<g transform="translate(240 40)">
		<text x="100" y="-12" class="label-mono" text-anchor="middle">WET · LINK UP</text>

		<!-- Antennae -->
		<g class="ink" stroke-width="1.5">
			<line x1="10" y1="155" x2="10" y2="115" />
			<line x1="190" y1="155" x2="190" y2="115" />
		</g>
		<rect x="3" y="105" width="14" height="10" class="ink-fill" />
		<rect x="183" y="105" width="14" height="10" class="ink-fill" />

		<!-- Tree bent by rain (canopy displaced down/right, out of zone) -->
		<path
			d="M100 155 q 4 -50 36 -75"
			class="leaf"
			stroke-width="2.5"
			fill="none"
		/>
		<g class="leaf-fill" fill-opacity="0.35">
			<ellipse cx="140" cy="75" rx="26" ry="30" transform="rotate(28 140 75)" />
			<ellipse cx="128" cy="65" rx="18" ry="20" transform="rotate(28 128 65)" />
		</g>

		<!-- Signal path (clear) -->
		<line x1="17" y1="110" x2="183" y2="110" class="accent" stroke-width="1.8" />
		<polygon points="180,107 188,110 180,113" class="accent-fill" />

		<!-- Raindrops as small slanted dashes -->
		<g class="accent" stroke-width="1.2" stroke-linecap="round" stroke-opacity="0.6">
			<line x1="36" y1="6" x2="32" y2="18" />
			<line x1="62" y1="14" x2="58" y2="26" />
			<line x1="86" y1="4" x2="82" y2="16" />
			<line x1="112" y1="12" x2="108" y2="24" />
			<line x1="138" y1="2" x2="134" y2="14" />
			<line x1="164" y1="18" x2="160" y2="30" />
			<line x1="182" y1="6" x2="178" y2="18" />
			<line x1="48" y1="38" x2="44" y2="50" />
			<line x1="92" y1="36" x2="88" y2="48" />
			<line x1="152" y1="44" x2="148" y2="56" />
		</g>

		<!-- Ground -->
		<line x1="-5" y1="155" x2="205" y2="155" class="ink" stroke-width="1" />

		<text x="100" y="180" class="label" text-anchor="middle">link clean</text>
	</g>

	<!-- Caption -->
	<text x="230" y="255" class="hand" text-anchor="middle" font-size="14">
		Rain bends the canopy clear of the Fresnel zone.
	</text>
</svg>
