<svg viewBox="0 0 460 260" class="diagram-svg w-full max-w-md" xmlns="http://www.w3.org/2000/svg">
	<!-- Counter strip -->
	<g transform="translate(40 30)">
		<text class="label-mono">level counter (uint8)</text>
		<g transform="translate(0 8)">
			<rect x="0" y="0" width="60" height="20" class="ink" />
			<text x="30" y="14" class="label-mono" text-anchor="middle">255</text>
			<line x1="62" y1="10" x2="80" y2="10" class="ink" stroke-width="1.2" />
			<polygon points="84,10 76,7 76,13" class="ink-fill" />
			<rect x="82" y="0" width="60" height="20" class="accent" />
			<text x="112" y="14" class="label-mono" text-anchor="middle" fill="#7d2a1d">0</text>
			<text x="148" y="14" class="label" font-size="11">overflow</text>
		</g>
	</g>

	<!-- Left: normal maze grid -->
	<g transform="translate(40 100)">
		<text x="60" y="-6" class="label-mono" text-anchor="middle">LEVEL 255</text>
		<g class="ink" stroke-width="1.2" fill="none">
			<rect x="0" y="0" width="120" height="120" />
			<!-- Maze lines -->
			<line x1="0" y1="20" x2="40" y2="20" />
			<line x1="60" y1="20" x2="120" y2="20" />
			<line x1="20" y1="40" x2="100" y2="40" />
			<line x1="0" y1="60" x2="60" y2="60" />
			<line x1="80" y1="60" x2="120" y2="60" />
			<line x1="20" y1="80" x2="100" y2="80" />
			<line x1="0" y1="100" x2="40" y2="100" />
			<line x1="60" y1="100" x2="120" y2="100" />
		</g>
		<!-- Dots -->
		<g class="ink-fill">
			<circle cx="10" cy="30" r="1.5" />
			<circle cx="30" cy="30" r="1.5" />
			<circle cx="50" cy="30" r="1.5" />
			<circle cx="70" cy="30" r="1.5" />
			<circle cx="90" cy="30" r="1.5" />
			<circle cx="110" cy="30" r="1.5" />
			<circle cx="10" cy="50" r="1.5" />
			<circle cx="110" cy="50" r="1.5" />
			<circle cx="10" cy="90" r="1.5" />
			<circle cx="110" cy="90" r="1.5" />
		</g>
		<!-- Pac-Man -->
		<path d="M60 80 a 7 7 0 1 1 5 -3 z" class="ink-fill" />
	</g>

	<!-- Right: corrupted maze -->
	<g transform="translate(280 100)">
		<text x="60" y="-6" class="label-mono" text-anchor="middle" fill="#7d2a1d">LEVEL 256</text>
		<!-- Normal left half -->
		<g class="ink" stroke-width="1.2" fill="none">
			<rect x="0" y="0" width="60" height="120" />
			<line x1="0" y1="20" x2="40" y2="20" />
			<line x1="20" y1="40" x2="60" y2="40" />
			<line x1="0" y1="60" x2="60" y2="60" />
			<line x1="20" y1="80" x2="60" y2="80" />
			<line x1="0" y1="100" x2="40" y2="100" />
		</g>
		<!-- Corrupted right half: random rects -->
		<g class="accent" fill="#a13929" fill-opacity="0.5" stroke="none">
			<rect x="62" y="2" width="6" height="6" />
			<rect x="72" y="10" width="10" height="4" />
			<rect x="86" y="4" width="4" height="12" />
			<rect x="94" y="14" width="14" height="6" />
			<rect x="64" y="22" width="12" height="4" />
			<rect x="80" y="26" width="6" height="10" />
			<rect x="92" y="22" width="10" height="6" />
			<rect x="108" y="30" width="8" height="8" />
			<rect x="64" y="40" width="6" height="6" />
			<rect x="74" y="44" width="10" height="4" />
			<rect x="88" y="40" width="4" height="14" />
			<rect x="98" y="50" width="12" height="4" />
			<rect x="66" y="62" width="16" height="6" />
			<rect x="86" y="58" width="8" height="10" />
			<rect x="100" y="64" width="14" height="4" />
			<rect x="64" y="80" width="6" height="6" />
			<rect x="74" y="84" width="10" height="4" />
			<rect x="90" y="82" width="6" height="6" />
			<rect x="100" y="86" width="12" height="6" />
			<rect x="66" y="100" width="14" height="4" />
			<rect x="84" y="104" width="6" height="10" />
			<rect x="96" y="100" width="18" height="6" />
		</g>
	</g>
</svg>
