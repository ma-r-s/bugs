<p>
	The story goes like this. In the original <em>Civilization</em>, released by MicroProse in
	1991, every leader is assigned a numerical aggression value. Mahatma Gandhi is given the lowest
	possible aggression: 1, on a scale where most leaders sit between 4 and 7. When a civilization
	adopts democracy as its government, the game subtracts 2 from its leader's aggression. Gandhi's
	value, the story says, drops to -1. The variable is an unsigned 8-bit integer. -1 wraps around
	to 255, the highest possible aggression value in the system. Pacifist Gandhi suddenly becomes
	the most warlike leader in the game and starts firing nuclear weapons at his neighbors.
</p>

<p>
	The story is told everywhere. It is on Wikipedia. It is in Hacker News comments. It is in
	textbook chapters on integer overflow. It is in a thousand programmer conversations as the
	canonical example of why type discipline matters.
</p>

<p>The story is almost certainly not true.</p>

<p>
	Sid Meier, the lead designer of Civilization, addressed it directly in his 2020 memoir. The
	original game's aggression values were stored as signed integers in C, not unsigned. A negative
	value would have remained a negative value. The behavior the story describes could not have
	occurred in the original code. Brian Reynolds, lead designer on Civilization II, has gone
	further: he reviewed the source code from memory and stated that no part of the aggression
	logic could have produced a maximum-aggression Gandhi by underflow.
</p>

<p>
	The actual nuclear Gandhi exists in Civilization V, released in 2010. The Civilization V
	designers, aware of the popular myth, deliberately wrote Gandhi's nuclear-launch threshold
	lower than other leaders', as an inside joke. Gandhi in Civilization V is statistically more
	eager to use atomic weapons than any other leader in the game. The bug had never existed; the
	joke implementation made the bug retroactively real.
</p>

<p>
	The story is included in this guide because of the form it takes, not the fact it claims. An
	anecdote about a bug is socially much cheaper to repeat than the bug itself, which would
	require a debugger. Once a bug story is good enough to remember, the question of whether it
	actually happened becomes a curiosity for historians and irrelevant to programmers, who will
	tell the story anyway.
</p>

<p>
	The nuclear Gandhi myth is now closer to truth than it has ever been, because Firaxis put it
	into the game. The original bug, if there ever was one, is unfalsifiable: the 1991 codebase is
	not public, and the engineers who wrote it say it did not happen. The specimen pinned to this
	page is a story <em>about</em> the bug, not the bug.
</p>

<p>
	The lesson, such as it is: <em>not every famous bug is a real bug</em>. Some bugs are good
	enough as stories that the industry has agreed to remember them anyway.
</p>
