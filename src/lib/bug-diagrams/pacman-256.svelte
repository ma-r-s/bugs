<svg
	viewBox="0 0 460 300"
	class="diagram-svg w-full max-w-lg"
	xmlns="http://www.w3.org/2000/svg"
>
	<!-- Counter overflow strip (top) -->
	<g transform="translate(40 30)">
		<text class="label-mono">LEVEL COUNTER · uint8</text>
		<g transform="translate(0 18)">
			<rect width="64" height="26" class="ink" fill="#fbf7ec" />
			<text x="32" y="17" class="label-mono" text-anchor="middle" font-size="11">255</text>
			<line x1="66" y1="13" x2="86" y2="13" class="ink" stroke-width="1.2" />
			<polygon points="90,13 82,9 82,17" class="ink-fill" />
			<rect x="90" y="0" width="64" height="26" class="accent" fill="#a13929" fill-opacity="0.12" />
			<text x="122" y="17" class="label-mono" text-anchor="middle" font-size="11" fill="#7d2a1d">
				0
			</text>
			<text x="164" y="17" class="label" font-style="italic" font-size="11">overflow</text>
		</g>
	</g>

	<!-- Maze comparison -->
	<g transform="translate(40 100)">
		<!-- Level 255 (intact) -->
		<text x="65" y="-8" class="label-mono" text-anchor="middle">LEVEL 255</text>
		<g transform="translate(0 0)">
			<rect width="130" height="130" class="ink" stroke-width="1.4" fill="#fbf7ec" />
			<g class="ink" stroke-width="1.1" fill="none">
				<line x1="0" y1="22" x2="45" y2="22" />
				<line x1="65" y1="22" x2="130" y2="22" />
				<line x1="22" y1="44" x2="108" y2="44" />
				<line x1="0" y1="66" x2="60" y2="66" />
				<line x1="85" y1="66" x2="130" y2="66" />
				<line x1="22" y1="88" x2="108" y2="88" />
				<line x1="0" y1="110" x2="45" y2="110" />
				<line x1="65" y1="110" x2="130" y2="110" />
			</g>
			<!-- pellets -->
			<g class="ink-fill">
				<circle cx="11" cy="33" r="1.6" />
				<circle cx="33" cy="33" r="1.6" />
				<circle cx="55" cy="33" r="1.6" />
				<circle cx="75" cy="33" r="1.6" />
				<circle cx="97" cy="33" r="1.6" />
				<circle cx="119" cy="33" r="1.6" />
				<circle cx="11" cy="55" r="1.6" />
				<circle cx="119" cy="55" r="1.6" />
				<circle cx="11" cy="77" r="1.6" />
				<circle cx="119" cy="77" r="1.6" />
				<circle cx="11" cy="99" r="1.6" />
				<circle cx="119" cy="99" r="1.6" />
			</g>
			<!-- Pac-Man -->
			<g transform="translate(65 88)">
				<path d="M0 0 L 7 -2 A 8 8 0 1 1 7 2 Z" class="ink-fill" />
			</g>
		</g>

		<!-- Divider arrow between mazes -->
		<g transform="translate(160 60)">
			<line x1="0" y1="-20" x2="0" y2="20" class="ink" stroke-width="0.8" stroke-dasharray="3 3" stroke-opacity="0.5" />
			<text x="0" y="70" class="hand" text-anchor="middle" font-size="13">
				+1 →
			</text>
		</g>

		<!-- Level 256 (corrupt) -->
		<g transform="translate(190 0)">
			<text x="65" y="-8" class="label-mono" text-anchor="middle" fill="#7d2a1d">
				LEVEL 256
			</text>
			<rect width="130" height="130" class="accent" stroke-width="1.4" fill="#fbf7ec" />
			<!-- Left half: normal maze -->
			<g class="ink" stroke-width="1.1" fill="none">
				<line x1="0" y1="22" x2="45" y2="22" />
				<line x1="22" y1="44" x2="65" y2="44" />
				<line x1="0" y1="66" x2="60" y2="66" />
				<line x1="22" y1="88" x2="65" y2="88" />
				<line x1="0" y1="110" x2="45" y2="110" />
			</g>
			<!-- Center divider (where corruption begins) -->
			<line x1="65" y1="6" x2="65" y2="124" class="accent" stroke-width="0.6" stroke-dasharray="2 2" stroke-opacity="0.6" />
			<!-- Right half: garbage tiles -->
			<g class="accent" fill="#a13929" fill-opacity="0.45" stroke="none">
				<rect x="68" y="6" width="8" height="6" />
				<rect x="80" y="14" width="14" height="6" />
				<rect x="100" y="8" width="6" height="14" />
				<rect x="112" y="18" width="14" height="6" />
				<rect x="70" y="28" width="14" height="6" />
				<rect x="88" y="32" width="8" height="12" />
				<rect x="102" y="28" width="12" height="6" />
				<rect x="118" y="36" width="8" height="8" />
				<rect x="70" y="50" width="8" height="6" />
				<rect x="82" y="54" width="14" height="4" />
				<rect x="100" y="50" width="6" height="14" />
				<rect x="112" y="60" width="14" height="6" />
				<rect x="68" y="72" width="20" height="6" />
				<rect x="92" y="68" width="10" height="12" />
				<rect x="106" y="74" width="18" height="6" />
				<rect x="70" y="92" width="8" height="8" />
				<rect x="82" y="96" width="14" height="6" />
				<rect x="100" y="94" width="8" height="8" />
				<rect x="112" y="98" width="14" height="6" />
				<rect x="68" y="116" width="20" height="4" />
				<rect x="94" y="112" width="6" height="12" />
				<rect x="104" y="114" width="22" height="6" />
			</g>
		</g>
	</g>

	<!-- Caption -->
	<text x="230" y="265" class="hand" text-anchor="middle" font-size="14">
		fruit drawer iterates 255 times, off the table, into game memory.
	</text>
</svg>
