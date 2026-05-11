<p>
	At 4:10 PM Eastern Daylight Time on August 14, 2003, the lights went out across most of the
	northeastern United States and the Canadian province of Ontario. Roughly <strong>fifty million
	people</strong> lost power. The blackout was the largest in North American history at the
	time. The technical cause was a tree in Ohio. The systemic cause was a race condition.
</p>

<p>
	At 2:02 PM, a high-voltage transmission line operated by FirstEnergy Corporation, in
	northeastern Ohio, sagged into an overgrown elm tree and tripped offline. North American power
	grids are designed to absorb that kind of single-line failure routinely: load reroutes to
	neighboring lines, operators see an alert, the system stabilizes within minutes.
</p>

<p>
	But the operators did not see an alert.
</p>

<p>
	FirstEnergy's control room in Akron, Ohio, ran GE Energy's XA/21 energy management system, the
	software used to monitor grid state and notify operators of faults. XA/21 contained a race
	condition in its alarm-processing subsystem: a buggy interaction between two threads that could
	deadlock when triggered by simultaneous events. The trip of the first Ohio line was one such
	event; another routine alarm fired in the same millisecond window. The alarm thread
	deadlocked. It stopped processing new alarms. The displays in the Akron control room continued
	to render the most recent state, which was now stale.
</p>

<p>
	The operators saw a grid that looked normal. The clock on their wall ticked forward. The
	situation outside their windows did not.
</p>

<p>
	Over the next hour, three more transmission lines tripped from overload, each one shedding
	load onto a smaller and smaller set of remaining lines. Each new trip should have produced an
	alarm and triggered emergency reconfiguration. None did. By 4:05 PM, the cascade was beyond
	anyone's ability to contain. By 4:11 PM, transmission across an enormous swath of the
	interconnected northeastern grid had collapsed. Subway trains stopped in tunnels. Airports
	went dark. Two hundred and fifty-six power plants shut down.
</p>

<p>
	The U.S.-Canada Power System Outage Task Force published its final report eight months later.
	The root cause was identified as a software race condition in the XA/21 alarm processor,
	compounded by inadequate tree-trimming on the original Ohio line and by FirstEnergy's failure
	to notice that its own alarm system had gone quiet for over an hour. GE patched XA/21.
	FirstEnergy paid civil penalties. The grid added new procedures requiring operators to
	independently verify that the alarm system was functioning.
</p>

<p>
	The bug is the archetype of a class of failures that are <em class="underline decoration-dotted
	underline-offset-4">inherently invisible</em>: the system reporting the problem is the system
	with the problem. An alarm processor that stops processing alarms produces no alarm about its
	own failure. The operators are looking at a screen that lies by omission.
</p>

<p>
	The lesson is in the post-mortem: redundancy in the watched system is not enough. The
	watching system needs its own watcher, and that watcher needs to be different enough from the
	watched system to fail independently. The grid runs on this principle today. So does any
	monitoring system worth its name.
</p>
