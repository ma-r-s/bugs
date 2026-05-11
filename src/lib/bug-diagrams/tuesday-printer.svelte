<svg viewBox="0 0 460 260" class="diagram-svg w-full max-w-md" xmlns="http://www.w3.org/2000/svg">
	<!-- The PostScript file -->
	<g transform="translate(20 40)">
		<rect x="0" y="0" width="130" height="100" class="ink" />
		<rect x="0" y="0" width="130" height="14" class="ink-fill" />
		<text x="6" y="11" class="label-mono" fill="#fbf7ec">postscript.ps</text>
		<text x="6" y="32" class="label-mono">%!PS-Adobe-3.0</text>
		<text x="6" y="46" class="label-mono">%%CreationDate:</text>
		<text x="6" y="60" class="label-mono" fill="#7d2a1d">  (Tue Aug 12</text>
		<text x="6" y="74" class="label-mono">    10:14:22)</text>
		<text x="6" y="92" class="label-mono">...</text>
	</g>

	<!-- Arrow into file -->
	<g transform="translate(160 90)">
		<line x1="0" y1="0" x2="40" y2="0" class="ink" stroke-width="1.2" />
		<polygon points="44,0 36,-3 36,3" class="ink-fill" />
	</g>

	<!-- file(1) magic detector -->
	<g transform="translate(210 60)">
		<rect x="0" y="0" width="100" height="60" class="ink" />
		<text x="50" y="22" class="label" text-anchor="middle">file(1)</text>
		<text x="50" y="38" class="label-mono" text-anchor="middle">magic detector</text>
		<text x="50" y="52" class="label-mono" text-anchor="middle" fill="#7d2a1d">"Tue ..."</text>
	</g>

	<!-- Two output paths -->
	<!-- Path 1: false positive -->
	<g transform="translate(310 80)">
		<line x1="0" y1="0" x2="40" y2="-30" class="accent" stroke-width="1.2" />
		<polygon points="44,-32 36,-30 38,-23" class="accent-fill" />
	</g>
	<g transform="translate(355 30)">
		<rect x="0" y="0" width="90" height="50" class="accent" />
		<text x="45" y="22" class="label" text-anchor="middle" fill="#7d2a1d">Erlang JAM</text>
		<text x="45" y="38" class="label-mono" text-anchor="middle" fill="#7d2a1d">→ refused ✕</text>
	</g>

	<!-- Path 2: correct (other days) -->
	<g transform="translate(310 110)">
		<line x1="0" y1="0" x2="40" y2="30" class="ink" stroke-width="1.2" stroke-opacity="0.4" />
		<polygon points="44,32 36,30 38,23" class="ink-fill" fill-opacity="0.4" />
	</g>
	<g transform="translate(355 130)">
		<rect x="0" y="0" width="90" height="50" class="ink" stroke-opacity="0.4" />
		<text x="45" y="22" class="label" text-anchor="middle" fill-opacity="0.6">PostScript</text>
		<text x="45" y="38" class="label-mono" text-anchor="middle" fill-opacity="0.6">→ printer ✓</text>
	</g>

	<!-- Caption -->
	<text x="230" y="220" class="hand" text-anchor="middle">
		Only on Tuesdays.
	</text>
</svg>
