<p>
	At 8:40 PM local time on February 25, 1991, an Iraqi Scud missile entered the airspace over
	Dharan, Saudi Arabia, on a trajectory toward a U.S. Army barracks. A nearby Patriot missile
	battery detected the incoming Scud, computed an intercept solution, and decided not to fire.
	The Scud landed on the barracks. Twenty-eight American soldiers died and approximately one
	hundred were wounded.
</p>

<p>
	The Patriot's decision not to fire was the product of an arithmetic mistake compounded over
	one hundred hours of uptime.
</p>

<p>
	The Patriot tracked targets using a radar that took position measurements every tenth of a
	second. The system clock counted those intervals as integers. To compute a target's predicted
	position, the clock counter had to be converted to a floating-point number of seconds: the
	count multiplied by 0.1.
</p>

<p>
	The number 0.1 cannot be represented exactly in binary floating point. The Patriot used a
	24-bit fixed-point representation that introduced a small truncation error on each conversion:
	about <strong>0.0000000953 seconds</strong> per tick, or roughly one part in 10⁷. The error
	accumulated linearly with uptime. After one hundred hours, the cumulative error was 0.34
	seconds.
</p>

<p>
	A Scud missile travels at about 1,676 meters per second. A clock that is wrong by 0.34 seconds
	produces a predicted intercept position that is wrong by 570 meters. The Patriot's range gate
	is the patch of sky the system expects to find the target on the next radar sweep. If the
	predicted position is wrong by more than the gate's width, the radar looks in the wrong place,
	the target appears not to be there, and the system concludes the original detection was a
	false alarm. It cancels the intercept.
</p>

<p>
	A fix was already in flight. Raytheon had identified the drift problem weeks earlier and
	produced a patch that corrected the clock conversion. The patched software arrived at the
	Dharan battery the morning <em>after</em> the strike, by truck. The battery had been on
	continuous operation for over a hundred hours when the Scud came in; it had passed the
	threshold of accumulated error needed to make the bug fatal.
</p>

<p>
	The post-incident GAO report listed the cause as an unexpected interaction between a
	floating-point conversion and operational reality. The reality was uptime. The Patriot had been
	specified to operate in short missions of less than fourteen hours and was being used as a
	semi-permanent installation in a wartime theater. The conversion error that was harmless at
	fourteen hours became deadly at one hundred and four.
</p>

<p>
	The lesson is the one floating-point papers have repeated for sixty years and that working
	programmers continue to learn the hard way: <em>error in floating-point representation is not a
	bug, it is a tax</em>. The tax is paid every operation. It is the engineer's job to know how
	much has been paid and how much room remains.
</p>
