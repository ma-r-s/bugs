<svg
	viewBox="0 0 460 260"
	class="diagram-svg w-full max-w-lg"
	xmlns="http://www.w3.org/2000/svg"
>
	<!-- PostScript file -->
	<g transform="translate(20 50)">
		<rect x="0" y="0" width="140" height="110" class="ink" fill="#fbf7ec" />
		<rect x="0" y="0" width="140" height="16" class="ink-fill" />
		<text x="6" y="12" class="label-mono" fill="#fbf7ec" font-size="10">postscript.ps</text>
		<text x="6" y="34" class="label-mono" font-size="10">%!PS-Adobe-3.0</text>
		<text x="6" y="48" class="label-mono" font-size="10">%%CreationDate:</text>
		<text x="6" y="62" class="label-mono" font-size="10" fill="#7d2a1d">  (Tue Aug 12</text>
		<text x="6" y="76" class="label-mono" font-size="10">    10:14:22)</text>
		<text x="6" y="92" class="label-mono" font-size="10">...</text>
	</g>

	<!-- Arrow -->
	<g transform="translate(170 105)">
		<line x1="0" y1="0" x2="40" y2="0" class="ink" stroke-width="1.2" />
		<polygon points="44,0 36,-3 36,3" class="ink-fill" />
	</g>

	<!-- file(1) detector -->
	<g transform="translate(220 80)">
		<rect x="0" y="0" width="100" height="60" class="ink" fill="#fbf7ec" />
		<text x="50" y="24" class="label" text-anchor="middle">file(1)</text>
		<text x="50" y="40" class="label-mono" text-anchor="middle" font-size="9">magic match</text>
		<text x="50" y="54" class="label-mono" text-anchor="middle" font-size="9" fill="#7d2a1d">
			"Tue ..."
		</text>
	</g>

	<!-- Branch up: Erlang JAM (wrong) -->
	<g transform="translate(320 100)">
		<line x1="0" y1="0" x2="38" y2="-40" class="accent" stroke-width="1.2" />
		<polygon points="42,-42 34,-40 36,-32" class="accent-fill" />
	</g>
	<g transform="translate(365 30)">
		<rect width="90" height="50" class="accent" fill="#fbf7ec" />
		<text x="45" y="22" class="label" text-anchor="middle" fill="#7d2a1d">Erlang JAM</text>
		<text x="45" y="38" class="label-mono" text-anchor="middle" font-size="10" fill="#7d2a1d">
			refused ✕
		</text>
	</g>

	<!-- Branch down: PostScript (correct, ghosted) -->
	<g transform="translate(320 120)">
		<line x1="0" y1="0" x2="38" y2="40" class="ink" stroke-width="1.2" stroke-opacity="0.35" />
		<polygon points="42,42 34,40 36,32" class="ink-fill" fill-opacity="0.35" />
	</g>
	<g transform="translate(365 145)">
		<rect width="90" height="50" class="ink" fill="#fbf7ec" stroke-opacity="0.4" />
		<text x="45" y="22" class="label" text-anchor="middle" fill-opacity="0.55">PostScript</text>
		<text x="45" y="38" class="label-mono" text-anchor="middle" font-size="10" fill-opacity="0.55">
			printer ✓
		</text>
	</g>

	<!-- Caption -->
	<text x="230" y="235" class="hand" text-anchor="middle" font-size="14">
		Only on Tuesdays.
	</text>
</svg>
