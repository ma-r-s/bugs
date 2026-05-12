<p>
	Pac-Man's authors at Namco, in 1980, did not expect anyone to reach level 256. The level
	counter is one byte. It can hold the numbers from 0 to 255. Level 1 stores as 1, level 2 stores
	as 2, level 255 stores as 255, level 256 stores as 0.
</p>

<p>
	A handful of unusually patient players reached level 256 over the following decade. They
	discovered that the level is unwinnable. The right half of the maze is replaced with bright,
	flickering garbage. Some of the dots needed to advance are not drawn and cannot be eaten. The
	level cannot end. The board cannot be cleared. The game cannot continue.
</p>

<p>
	The drawing routine is the culprit. The bottom-right corner of every Pac-Man level shows a row
	of fruit icons, one per level the player has reached, capped at seven. The routine that draws
	this row works by taking the current level number, subtracting one, and then walking that many
	steps backward through a small fruit-table. At level 256, the level counter is 0. Zero minus
	one, in unsigned eight-bit arithmetic, is 255. The drawing routine cheerfully iterates two
	hundred and fifty-five times, reading two hundred and fifty-five bytes beyond the fruit table,
	and drawing whatever colored tile each byte happens to represent.
</p>

<p>
	The bytes immediately after the fruit table are arbitrary game state: sprite positions,
	ghost-AI flags, score digits. The drawing routine interprets all of it as fruit tile indices
	and draws it. The right half of the maze is overwritten with whatever the game's working memory
	happens to contain in that moment.
</p>

<p>
	This was the first widely-known <em>kill screen</em>: a level you cannot pass because the game
	itself has overwritten the means of passing. Donkey Kong has a famous kill screen at level 22,
	produced by a different overflow (a time-bonus calculation, not a level counter). Dig Dug has
	one for the same family of reasons. The pattern is the same. A counter or a pointer rolls
	over into territory the original programmer did not anticipate, and the game gracelessly
	draws or interprets memory until progress becomes mechanically impossible.
</p>

<p>
	Don Hodges, in 2009, disassembled the Pac-Man ROM and produced a six-byte patch that fixes the
	subtraction so the fruit drawing routine never walks off the table. The patched ROM has a
	playable level 256, and a 257, and so on. No commercial release of Pac-Man has shipped with
	the patch. The kill screen has remained part of the game's identity. Two players have, in the
	years since, performed <em>perfect games</em> of original Pac-Man: every dot, every fruit,
	every ghost, on every level up to and including level 255, with the kill screen as the natural
	endpoint of the run.
</p>

<p>
	The lesson is the smallest possible one, and the most universal: a counter has a maximum, and
	if you do not decide what happens past it, the hardware will decide for you.
</p>
