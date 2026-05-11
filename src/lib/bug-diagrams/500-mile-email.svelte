<svg viewBox="0 0 420 260" class="diagram-svg w-full max-w-md" xmlns="http://www.w3.org/2000/svg">
	<!-- Campus origin -->
	<circle cx="210" cy="130" r="3" class="ink-fill" />
	<text x="215" y="124" class="label">Chapel Hill</text>

	<!-- Concentric distance rings -->
	<circle cx="210" cy="130" r="40" class="ink" stroke-dasharray="2 3" stroke-opacity="0.5" />
	<circle cx="210" cy="130" r="80" class="ink" stroke-dasharray="2 3" stroke-opacity="0.5" />
	<circle cx="210" cy="130" r="115" class="accent" stroke-width="1.5" />

	<!-- Ring labels -->
	<text x="244" y="135" class="label-mono">200 mi</text>
	<text x="285" y="135" class="label-mono">400 mi</text>
	<text x="328" y="135" class="label-mono">~500 mi</text>

	<!-- Successful packet (short hop) -->
	<g stroke-linecap="round">
		<path d="M210 130 L165 95" class="ink" stroke-width="1.2" />
		<polygon points="161,92 168,93 165,99" class="ink-fill" />
		<text x="148" y="84" class="label">Princeton ✓</text>
	</g>

	<!-- Successful (medium) -->
	<g>
		<path d="M210 130 L250 200" class="ink" stroke-width="1.2" />
		<polygon points="253,204 246,202 250,209" class="ink-fill" />
		<text x="226" y="220" class="label">Memphis ✓</text>
	</g>

	<!-- Failed packet, bounces off ring -->
	<g>
		<path d="M210 130 L335 175" class="accent" stroke-width="1.5" stroke-dasharray="3 2" />
		<circle cx="335" cy="175" r="4" class="accent-fill" />
		<text x="343" y="178" class="label" fill="currentColor">Houston ✕</text>
	</g>

	<!-- Speed-of-light annotation -->
	<g transform="translate(40, 215)">
		<text class="label-mono">timeout = 0 → ~3ms</text>
		<text y="14" class="label-mono">c × 3ms ÷ 2 ≈ 500 mi</text>
	</g>

	<!-- Hand-written note -->
	<text x="40" y="50" class="hand" transform="rotate(-4 40 50)">
		"it works to Memphis."
	</text>
</svg>
