<p>
	The bug surfaces as a complaint from the chair of the Statistics Department. The faculty cannot
	send email further than five hundred miles. Trey Harris, the campus sysadmin, has just inherited
	the system. He assumes the chair is confused. He drives over.
</p>

<p>
	The chair is not confused. He has a list. Email to a colleague in Princeton goes through. Email
	to a journal in Memphis goes through. Email to a Houston lab times out every time. Harris
	measures it. The cutoff is approximately <em>five hundred and twenty miles</em>, and it is stable
	to within thirty.
</p>

<p>
	The first hypothesis, the only sane one, is that someone has misunderstood. Email is software.
	Geography is not. The two should not interact. But the data is clean: a packet trace shows the
	server opening a TCP connection to the remote host and abandoning it before the SYN/ACK comes
	back. The further the destination, the more often the abandonment.
</p>

<p>
	What had changed: the previous week, the campus IT department had pushed a routine sendmail
	configuration upgrade. The upgrade preserved most settings but reset the SMTP connect timeout
	to its default. The default was <em>zero</em>. Sendmail interprets a zero timeout not as
	"infinite" but as "use the system minimum," and the system minimum, on that particular machine
	at typical load, worked out to roughly <strong>three milliseconds</strong>.
</p>

<p>
	Three milliseconds is enough time for light to travel about 900 kilometers in vacuum. Through
	the campus's fully switched backbone, a packet experienced essentially no router-induced delay
	until it crossed the campus point of presence and entered the public internet. From there the
	round-trip time to any modestly-loaded SMTP server was dominated by physics: the speed of light
	through fiber, plus a constant.
</p>

<p>
	Round-trip time of three milliseconds, multiplied by two-thirds (the propagation factor in
	glass), divided by two (one direction), times the rule of thumb that light covers about a foot
	per nanosecond, gives a working radius near five hundred miles. The bug was not in the software.
	The bug was a missing constant in a configuration file, and the consequence was a perfect
	geometric circle centered on Chapel Hill, North Carolina, beyond which email would not go.
</p>

<p>
	Harris fixed it by setting the timeout to a sane value. The faculty's mail to Houston started
	going through. The chair was vindicated. The story circulated on sysadmin mailing lists for
	years before Harris cleaned it up into the canonical narrative on his website in 2002.
</p>

<p>
	The lesson everyone takes home is the wrong one. The lesson is not "software can be weird." The
	lesson is that a user reporting <em>"X happens only within 500 miles"</em> deserves the same
	good-faith diagnostic effort as one reporting "X never happens." Most absurd-sounding bug reports
	are absurd. A small number are physics.
</p>
