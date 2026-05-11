<p>
	Predrag Gruevski went home to visit his parents after a long stretch abroad. The Wi-Fi did not
	work. His parents had been living with it for months, and they had developed a folk theory: the
	internet works only when it is raining.
</p>

<p>
	Folk theories about software are usually false. Folk theories about radios are usually
	frighteningly precise. Wi-Fi is a radio.
</p>

<p>
	The link from the family's outdoor mesh node to the indoor router had 98% packet loss on dry
	days and recovered fully during storms. The recovery began in the first minutes of rainfall and
	lasted, on average, fifteen minutes past the rain's end, after which the connection collapsed
	again. The pattern was reproducible. The pattern survived router reboots, channel changes, and
	a new SSID.
</p>

<p>
	The cause was a tree.
</p>

<p>
	Wireless propagation does not work like a laser. The signal is a wave whose energy occupies a
	roughly ellipsoidal volume between transmitter and receiver: the <em>Fresnel zone</em>. Objects
	inside the Fresnel zone cause interference, even if the direct line of sight is clear. For a 5
	GHz link over a typical garden distance, the first Fresnel zone is approximately one meter at
	its widest.
</p>

<p>
	A nearby tree had grown just tall enough to encroach on the upper boundary of the Fresnel zone.
	The encroachment was minor in still air, but minor encroachments matter a lot at 5 GHz. When it
	rained, water collected on the leaves, the branches bent under the new weight, and the canopy
	dropped clear of the Fresnel zone. Signal recovered. As the canopy dried out, the branches
	sprang back to their dry position and re-occupied the zone. Signal died.
</p>

<p>
	The fifteen-minute tail after each storm corresponded to the time it took for residual water to
	drip off the leaves and the branches to spring back. The system's behavior was a one-line
	mechanical model: a damped oscillator with rain as input, branch height as state, packet loss as
	output. Everything else was a consequence.
</p>

<p>
	Gruevski upgraded the link from 802.11g to 802.11n, which uses beamforming and multi-input
	antennas to tolerate more interference, and the connection became indifferent to weather.
</p>

<p>
	The bug is satisfying not because it is unusual (wireless interference from foliage is a known
	problem in WISP deployments) but because the failure mode is so cleanly mechanical that it
	feels like it shouldn't be allowed. The internet is not supposed to care about
	<em class="underline decoration-dotted underline-offset-4">how heavy the leaves are today</em>.
	It does anyway.
</p>
