<p>
	The Therac-25 was a linear accelerator built by Atomic Energy of Canada Limited and used in
	cancer radiation therapy clinics in the United States and Canada in the mid-1980s. It had two
	operating modes. <em>Electron mode</em> delivered a low-energy electron beam, spread by a pair
	of scanning magnets, for shallow tumors. <em>X-ray mode</em> delivered a high-energy electron
	beam (about a hundred times stronger) that struck a metal target, producing penetrating X-rays
	for deeper tissue.
</p>

<p>
	Switching modes required physically rotating a turntable that placed the scanning magnets or
	the target in the beam path. The rotation took about eight seconds. The Therac-20, the
	previous-generation machine, also did this, with hardware interlocks that physically prevented
	the beam from firing unless the turntable was in a recognized position. The Therac-25 removed
	the interlocks. The same coordination was to be enforced in software.
</p>

<p>
	The fatal sequence required a fast typist. The operator would select X-ray mode by mistake,
	then press the up-arrow to back up and re-enter electron mode, then hit Enter to fire. Inside
	the software, two threads shared a one-byte variable: one thread used it to track the
	operator's mode selection; another used it as a flag indicating whether the turntable had
	reached the requested position. If the operator's Enter keypress arrived in the brief window
	between the mode-change command and the turntable-position update, the software believed the
	turntable was in electron-mode position when it was still in transit. The high-energy beam
	fired through nothing, into the patient.
</p>

<p>
	The dose delivered in that configuration was about <strong>one hundred times</strong> the
	intended therapeutic dose. The machine then printed "Malfunction 54" on the operator's terminal.
	Malfunction 54 was a generic error code; the operator's manual did not explain it. Several
	operators, seeing the error, assumed the treatment had been aborted and reset the machine to
	deliver the prescribed dose a second time.
</p>

<p>
	Six patients received massive overdoses between 1985 and 1987. Three died from the radiation
	exposure. Three survived with severe injuries. The bug was reported, investigated, denied,
	reproduced by Nancy Leveson and Clark Turner, denied again, and eventually acknowledged by AECL
	after sustained pressure from regulators and the medical physics community.
</p>

<p>
	The technical lesson is the standard one about race conditions. The deeper lesson, the one
	Leveson spent the next decade arguing in software-safety literature, is that <em>removing
	hardware interlocks because the software is now reliable enough</em> is a category of
	engineering decision that demands evidence the software does not, in practice, ever provide.
	Hardware interlocks fail visibly. Software interlocks fail invisibly, often along timing
	dimensions that are essentially impossible to characterize from inspection.
</p>

<p>
	The Therac-25 is the most studied software-safety incident in the literature. Its lessons are
	cited in aviation, nuclear, automotive, and medical-device design today. The patients it killed
	are why.
</p>
