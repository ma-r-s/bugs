<svg viewBox="0 0 460 260" class="diagram-svg w-full max-w-md" xmlns="http://www.w3.org/2000/svg">
	<!-- Left: the alleged underflow -->
	<g transform="translate(40 50)">
		<text class="label-mono">THE LEGEND (1991)</text>

		<g transform="translate(0 30)">
			<text class="label-mono" font-size="14">aggression: 1</text>
			<line x1="0" y1="14" x2="80" y2="14" class="ink" stroke-width="1" />
			<polygon points="84,14 76,11 76,17" class="ink-fill" />
		</g>

		<g transform="translate(90 36)">
			<text class="label-mono" font-size="14">−2 (democracy)</text>
		</g>

		<g transform="translate(0 80)">
			<text class="label-mono" font-size="14">aggression: −1</text>
			<line x1="0" y1="14" x2="80" y2="14" class="accent" stroke-width="1" stroke-dasharray="3 2" />
			<polygon points="84,14 76,11 76,17" class="accent-fill" />
		</g>

		<g transform="translate(90 86)">
			<text class="label-mono" font-size="14" fill="#7d2a1d">"underflows to 255"</text>
		</g>

		<!-- Big strikethrough -->
		<line x1="-10" y1="20" x2="240" y2="120" class="accent" stroke-width="2" />
		<text x="120" y="140" class="hand" text-anchor="middle" fill="#7d2a1d">never happened</text>
	</g>

	<!-- Vertical divider -->
	<line x1="280" y1="40" x2="280" y2="220" class="ink" stroke-dasharray="3 3" stroke-opacity="0.5" />

	<!-- Right: the canonized version -->
	<g transform="translate(300 50)">
		<text class="label-mono">CIV V (2010)</text>

		<g transform="translate(0 30)">
			<rect x="0" y="0" width="60" height="60" class="ink" fill="#f6efd9" />
			<text x="30" y="25" class="label" text-anchor="middle" font-size="11">Gandhi</text>
			<text x="30" y="40" class="label-mono" text-anchor="middle" font-size="10">nuke=12</text>
		</g>

		<g transform="translate(0 100)">
			<text class="label" font-size="11">other leaders:</text>
			<text class="label-mono" font-size="10" x="0" y="14">nuke=1..5</text>
		</g>

		<g transform="translate(80 50)">
			<text class="hand" font-size="13">"intentional"</text>
		</g>
	</g>

	<!-- Caption -->
	<text x="230" y="244" class="label" text-anchor="middle" font-style="italic">
		The bug that became canon, after never having existed.
	</text>
</svg>
