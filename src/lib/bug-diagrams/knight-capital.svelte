<svg
	viewBox="0 0 460 300"
	class="diagram-svg w-full max-w-lg"
	xmlns="http://www.w3.org/2000/svg"
>
	<!-- Flag bit interpretation (top) -->
	<g transform="translate(40 30)">
		<text class="label-mono">FLAG BIT · TWO MEANINGS</text>

		<g transform="translate(0 18)">
			<rect width="170" height="26" class="ink" fill="#fbf7ec" />
			<text x="85" y="17" class="label-mono" text-anchor="middle">NEW: RLP order</text>
		</g>
		<g transform="translate(210 18)">
			<rect width="170" height="26" class="accent" fill="#fbf7ec" />
			<text x="85" y="17" class="label-mono" text-anchor="middle" fill="#7d2a1d">
				OLD: Power Peg
			</text>
		</g>
	</g>

	<!-- Eight servers -->
	<g transform="translate(40 110)">
		<text class="label-mono">SMARS ROUTING TIER · 8 SERVERS</text>

		<g transform="translate(0 18)">
			<!-- Seven good -->
			<g transform="translate(0 0)">
				<rect width="38" height="50" class="ink" fill="#fbf7ec" />
				<text x="19" y="22" class="label-mono" text-anchor="middle" font-size="10">v2</text>
				<text x="19" y="38" class="label-mono" text-anchor="middle" font-size="9">OK</text>
			</g>
			<g transform="translate(48 0)">
				<rect width="38" height="50" class="ink" fill="#fbf7ec" />
				<text x="19" y="22" class="label-mono" text-anchor="middle" font-size="10">v2</text>
				<text x="19" y="38" class="label-mono" text-anchor="middle" font-size="9">OK</text>
			</g>
			<g transform="translate(96 0)">
				<rect width="38" height="50" class="ink" fill="#fbf7ec" />
				<text x="19" y="22" class="label-mono" text-anchor="middle" font-size="10">v2</text>
				<text x="19" y="38" class="label-mono" text-anchor="middle" font-size="9">OK</text>
			</g>
			<g transform="translate(144 0)">
				<rect width="38" height="50" class="ink" fill="#fbf7ec" />
				<text x="19" y="22" class="label-mono" text-anchor="middle" font-size="10">v2</text>
				<text x="19" y="38" class="label-mono" text-anchor="middle" font-size="9">OK</text>
			</g>
			<g transform="translate(192 0)">
				<rect width="38" height="50" class="ink" fill="#fbf7ec" />
				<text x="19" y="22" class="label-mono" text-anchor="middle" font-size="10">v2</text>
				<text x="19" y="38" class="label-mono" text-anchor="middle" font-size="9">OK</text>
			</g>
			<g transform="translate(240 0)">
				<rect width="38" height="50" class="ink" fill="#fbf7ec" />
				<text x="19" y="22" class="label-mono" text-anchor="middle" font-size="10">v2</text>
				<text x="19" y="38" class="label-mono" text-anchor="middle" font-size="9">OK</text>
			</g>
			<g transform="translate(288 0)">
				<rect width="38" height="50" class="ink" fill="#fbf7ec" />
				<text x="19" y="22" class="label-mono" text-anchor="middle" font-size="10">v2</text>
				<text x="19" y="38" class="label-mono" text-anchor="middle" font-size="9">OK</text>
			</g>
			<!-- Eighth: rogue -->
			<g transform="translate(336 0)">
				<rect width="38" height="50" class="accent" fill="#a13929" fill-opacity="0.18" />
				<text x="19" y="22" class="label-mono" text-anchor="middle" font-size="10" fill="#7d2a1d">v1</text>
				<text x="19" y="38" class="label-mono" text-anchor="middle" font-size="9" fill="#7d2a1d">PWR</text>
			</g>
			<!-- Arrow pointing at the eighth -->
			<g transform="translate(355 60)">
				<line x1="0" y1="0" x2="0" y2="14" class="accent" stroke-width="1.2" />
				<polygon points="0,-2 -3,4 3,4" class="accent-fill" />
			</g>
		</g>
		<text x="354" y="92" class="hand" font-size="13" fill="#7d2a1d" text-anchor="middle">
			one server.
		</text>
	</g>

	<!-- Result -->
	<g transform="translate(40 235)">
		<text class="label-mono">RESULT</text>
		<text x="0" y="20" class="label" font-style="italic">
			4M executions · 397M shares · 45 minutes
		</text>
		<text x="0" y="40" class="label" fill="#7d2a1d" font-size="13">−$440,000,000</text>
	</g>
</svg>
