<p>
	In June 1994, Thomas Nicely, a mathematics professor at Lynchburg College in Virginia, was
	computing reciprocals of prime numbers as part of a research project on twin primes. He noticed
	that his results from a then-new Intel Pentium machine disagreed, in the seventh decimal place,
	with results from his older 486. He spent four months convinced he had made a programming
	mistake. He had not. The Pentium was wrong.
</p>

<p>
	The Pentium's floating-point unit implemented division using the SRT algorithm, which generates
	two quotient bits per cycle by consulting a lookup table of partial-remainder estimates. The
	table had 2,048 entries. Intel's silicon designers had specified the entries correctly, but the
	script that copied the table from specification to physical mask layout omitted five entries.
	The omission produced no errors during Intel's verification testing because the verification
	suite exercised only a small fraction of the table. The five missing entries corresponded to a
	tiny region of input space.
</p>

<p>
	For most pairs of floating-point inputs, the SRT algorithm did not need the missing table
	entries and division worked correctly. For specific pairs whose intermediate partial remainders
	hit one of the five missing rows, the algorithm read zero where it should have read a quotient
	estimate, and the result was wrong by up to roughly <strong>0.0061%</strong> in the
	low-order bits. About one division in nine billion was affected. The errors were small enough
	to be invisible in graphics, financial calculations, and most engineering work. They were
	visible in number-theoretic research where seven or eight decimal places mattered.
</p>

<p>
	Intel discovered the bug internally in May 1994, before Nicely's independent discovery, and
	silently corrected the mask in subsequent steppings. They did not announce the bug. When
	Nicely reported it publicly in late October, Intel's initial position was that the defect
	affected so few users that a recall was unnecessary. They offered replacements only to users
	who could "prove" they were doing math that needed the missing precision. Engineers were asked
	to defend their own work to the manufacturer's satisfaction.
</p>

<p>
	The response did not go well. The story was picked up by the trade press, then by mainstream
	newspapers, then by late-night television. <em>Saturday Night Live</em> ran a sketch about
	"the Pentium chip with the slightly defective math co-processor." On December 20, IBM announced
	it was halting shipments of Pentium-based PCs. The next day, Intel reversed course and offered
	no-questions-asked replacements to anyone who asked. The recall cost Intel
	<strong>$475 million</strong>, the largest of its kind in semiconductor history at the time.
</p>

<p>
	The Pentium FDIV bug is studied today not for its arithmetic (the omission is
	straightforward), but for the public-relations doctrine it produced. Intel's modern bug
	response, including the choreography of Spectre, Meltdown, and every subsequent silicon
	vulnerability, is downstream of the lesson learned in December 1994: <em>you do not get to
	decide which customers had a right to be precise</em>. The customers decide. If you make them
	argue, you have already lost the second round.
</p>
