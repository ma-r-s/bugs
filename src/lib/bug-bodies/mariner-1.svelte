<p>
	On July 22, 1962, NASA launched Mariner 1 from Cape Canaveral atop an Atlas-Agena B rocket. The
	probe's mission was to fly past Venus and collect data on its atmosphere. Two hundred and
	ninety-three seconds into flight the booster began to yaw erratically, lost its programmed
	trajectory, and threatened the shipping lanes south of the launch site. The Range Safety
	Officer pushed the destruct button. The total cost of the launch was $18.5 million in 1962
	dollars; close to $190 million today.
</p>

<p>
	The post-mortem identified a defect in the guidance software running on the ground tracker
	(not, contrary to legend, on the rocket itself). The story that ran in newspapers the next week
	described "a missing hyphen" in the code. That description has persisted for sixty-four years.
	It is wrong by one notational character.
</p>

<p>
	The defect was not a missing hyphen. It was a missing <em>overbar</em>.
</p>

<p>
	The guidance program used a smoothing function over a quantity called <code>R</code>, the
	tracked radius of the rocket's position. The mathematical expression for the smoothed quantity
	was conventionally written with a bar above the letter:
	<em>R̄</em>, read aloud as "R bar." The bar denotes a time-averaging operation that filters out
	short-term noise in the radar return. An engineer transcribing the handwritten guidance
	equations into program source missed the bar on a specific occurrence of <code>R</code>. The
	unaveraged value, which is by nature noisier, was passed to the trajectory correction routine.
</p>

<p>
	The routine interpreted normal tracking noise as real and rapid trajectory changes. It issued
	correction commands to fight phantom deviations. The corrections nudged the rocket off course;
	the off-course nudges produced more noise; the system amplified its own panic.
</p>

<p>
	A New York Times reporter, given the engineering explanation by NASA's spokespeople, rendered
	"overbar" as "hyphen." It was an honest reach: both are horizontal lines, and "hyphen" was
	within five seconds of explainability to a 1962 newspaper reader. <em>The Times</em>'s
	correction never caught up to the original story, and "the missing hyphen that destroyed
	Mariner 1" became part of computing folklore.
</p>

<p>
	The real cause is more interesting than the myth. A missing hyphen is a typo. A missing
	overbar is a missing <em>operation</em>: a small handwritten convention that did not survive
	the trip from a chalkboard to a Fortran listing. Mariner 2, with the overbar properly
	transcribed, launched five weeks later and successfully became the first spacecraft to return
	data from another planet.
</p>
