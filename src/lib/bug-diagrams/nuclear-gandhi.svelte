<svg
	viewBox="0 0 460 280"
	class="diagram-svg w-full max-w-lg"
	xmlns="http://www.w3.org/2000/svg"
>
	<!-- Left: the legend, every claim crossed out -->
	<g transform="translate(40 50)">
		<text class="label-mono">THE LEGEND · 1991</text>

		<!-- Claim 1 -->
		<g transform="translate(0 28)">
			<text class="label-mono" font-size="13">aggression: 1</text>
			<line x1="-4" y1="-5" x2="92" y2="-5" class="accent" stroke-width="1.6" />
		</g>

		<!-- Operation 1: arrow + label -->
		<g transform="translate(0 50)">
			<line
				x1="0"
				y1="0"
				x2="60"
				y2="0"
				class="ink"
				stroke-width="1"
				stroke-opacity="0.4"
			/>
			<polygon points="64,0 56,-3 56,3" class="ink-fill" fill-opacity="0.4" />
			<text x="70" y="3" class="label-mono" font-size="12">−2 democracy</text>
			<line x1="68" y1="-1" x2="174" y2="-1" class="accent" stroke-width="1.6" />
		</g>

		<!-- Claim 2 -->
		<g transform="translate(0 80)">
			<text class="label-mono" font-size="13">aggression: −1</text>
			<line x1="-4" y1="-5" x2="100" y2="-5" class="accent" stroke-width="1.6" />
		</g>

		<!-- Operation 2: dashed arrow + claim -->
		<g transform="translate(0 102)">
			<line
				x1="0"
				y1="0"
				x2="60"
				y2="0"
				class="accent"
				stroke-width="1"
				stroke-dasharray="3 2"
				stroke-opacity="0.5"
			/>
			<polygon points="64,0 56,-3 56,3" class="accent-fill" fill-opacity="0.5" />
			<text x="70" y="3" class="label-mono" font-size="12" fill="#7d2a1d">
				"underflows to 255"
			</text>
			<line x1="68" y1="-1" x2="200" y2="-1" class="accent" stroke-width="1.6" />
		</g>

		<text x="0" y="138" class="hand" font-size="15" fill="#7d2a1d">never happened.</text>
	</g>

	<!-- Vertical divider -->
	<line
		x1="280"
		y1="40"
		x2="280"
		y2="240"
		class="ink"
		stroke-dasharray="3 3"
		stroke-opacity="0.35"
	/>

	<!-- Right: Civ V (canonized) -->
	<g transform="translate(305 50)">
		<text class="label-mono">CIV V · 2010</text>

		<g transform="translate(0 22)">
			<rect width="118" height="68" class="ink" fill="#fbf7ec" stroke-width="1.2" />
			<text x="59" y="22" class="label" text-anchor="middle" font-size="12">Gandhi</text>
			<text x="59" y="42" class="label-mono" text-anchor="middle" font-size="10">nuke = 12</text>
			<text
				x="59"
				y="58"
				class="label"
				text-anchor="middle"
				font-style="italic"
				font-size="10"
				fill="#7d2a1d"
			>
				highest
			</text>
		</g>

		<g transform="translate(0 110)">
			<text class="label" font-size="11">other leaders:</text>
			<text x="0" y="16" class="label-mono" font-size="10">nuke = 1..5</text>
		</g>

		<text x="0" y="172" class="hand" font-size="14" fill="#7d2a1d">implemented on purpose.</text>
	</g>

	<!-- Caption -->
	<text
		x="230"
		y="260"
		class="label"
		text-anchor="middle"
		font-style="italic"
		font-size="12"
	>A bug that became canon, after never having existed.</text>
</svg>
