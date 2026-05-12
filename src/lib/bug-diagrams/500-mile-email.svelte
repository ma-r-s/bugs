<svg
	viewBox="0 0 460 320"
	class="diagram-svg w-full max-w-lg"
	xmlns="http://www.w3.org/2000/svg"
>
	<!-- Origin: Chapel Hill -->
	<g transform="translate(180 170)">
		<!-- Concentric rings -->
		<circle r="40" class="ink" stroke-dasharray="2 3" stroke-opacity="0.35" />
		<circle r="85" class="ink" stroke-dasharray="2 3" stroke-opacity="0.35" />
		<circle r="125" class="accent" stroke-width="1.6" />

		<!-- Ring labels (placed at varying angles to avoid collision) -->
		<text x="0" y="-45" text-anchor="middle" class="label-mono" font-size="9" fill-opacity="0.55">
			200 mi
		</text>
		<text x="0" y="-90" text-anchor="middle" class="label-mono" font-size="9" fill-opacity="0.55">
			400 mi
		</text>
		<text x="0" y="-132" text-anchor="middle" class="label-mono" font-size="10" fill="#7d2a1d">
			~500 mi (cutoff)
		</text>

		<!-- Origin dot + label -->
		<circle r="3" class="ink-fill" />
		<text x="6" y="-6" class="label">Chapel Hill</text>

		<!-- Princeton (NE, inside ring 2) -->
		<g transform="translate(55 -55)">
			<circle r="3" class="ink-fill" />
			<text x="6" y="-4" class="label">Princeton ✓</text>
		</g>
		<line x1="3" y1="-2" x2="51" y2="-53" class="ink" stroke-width="0.6" stroke-opacity="0.3" />

		<!-- Memphis (SW, inside ring 3 near edge) -->
		<g transform="translate(-95 75)">
			<circle r="3" class="ink-fill" />
			<text x="-6" y="-4" class="label" text-anchor="end">Memphis ✓</text>
		</g>
		<line x1="-3" y1="2" x2="-92" y2="73" class="ink" stroke-width="0.6" stroke-opacity="0.3" />

		<!-- Houston (outside the ring, fails) -->
		<g transform="translate(155 32)">
			<circle r="3.5" class="accent-fill" />
			<text x="8" y="4" class="label" fill="#7d2a1d">Houston ✕</text>
		</g>
		<path
			d="M3 1 L153 31"
			class="accent"
			stroke-dasharray="3 2"
			stroke-width="1.2"
		/>
	</g>

	<!-- Math callout bottom-left -->
	<g transform="translate(28 270)">
		<text class="label-mono">timeout = 0  →  ~3 ms</text>
		<text y="14" class="label-mono">c · 3ms ÷ 2  ≈  500 mi</text>
	</g>

	<!-- Handwritten note top-left -->
	<text
		x="40"
		y="40"
		class="hand"
		font-size="15"
		transform="rotate(-3 40 40)"
	>"...but it works to Memphis."</text>
</svg>
