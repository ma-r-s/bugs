<p>
	Knight Capital Group was, in the summer of 2012, one of the largest market makers on the New
	York Stock Exchange. It handled roughly ten percent of the trading volume of U.S. equities. On
	the morning of August 1st, it deployed a software update to support a new SEC program. By 10:15
	AM Eastern, it had lost $440 million. By the end of the week, it had been forced to sell
	itself.
</p>

<p>
	The failure was the product of three small mistakes stacked, none individually catastrophic,
	each invisible without the others.
</p>

<p>
	<strong>Mistake one: zombie code.</strong> In 2003, Knight had a feature called
	<em>Power Peg</em>, an internal testing tool that allowed engineers to drive parent orders to
	a target price by emitting child orders in a controlled loop. It was an unsafe tool by design,
	useful only in testing. In 2003 Knight decided to retire it, set the activation flag's default
	to <em>off</em>, and stopped using it. They did not remove the underlying code. Power Peg sat
	in production for nine years, dead but reachable, waiting to be called.
</p>

<p>
	<strong>Mistake two: flag reuse.</strong> In July 2012, an engineer working on the new Retail
	Liquidity Program needed an order-routing flag bit. The flag word was full. The engineer reused
	the bit that had previously activated Power Peg, on the reasonable assumption that no live code
	read it. New code interpreted the bit as <em>"this is a Retail Liquidity Program order."</em>
	Old code still interpreted it as <em>"activate Power Peg."</em>
</p>

<p>
	<strong>Mistake three: partial deploy.</strong> Knight's SMARS routing tier ran on eight
	production servers. The new code was deployed by hand, server by server. The technician
	deployed to seven of the eight servers. On the eighth, the old code remained.
</p>

<p>
	At market open on August 1st, the new code on the other seven servers started setting the
	repurposed flag on incoming retail orders. The eighth server, unmodified, received those
	orders, saw the flag, and activated Power Peg. The old testing tool started doing what it had
	been written to do nine years earlier: emit child orders in a loop to drive an asset toward a
	target price. The asset was every Knight-routed retail order. The target was meaningless. The
	loop had no daily-volume limit, because those limits had been added years later, in a different
	code path.
</p>

<p>
	In 45 minutes, Knight executed over <strong>four million orders</strong> involving 397 million
	shares of 154 stocks. The market noticed. Spreads on those stocks widened violently. Knight's
	risk team understood within minutes that something was wrong; they spent the next half hour
	trying to identify which of eight servers was misbehaving and how to safely stop it. The
	servers were stopped one by one. By the time the bleeding was contained, the firm had taken a
	loss greater than its market capitalization.
</p>

<p>
	Knight sold itself to Getco LLC three months later in a deal that effectively ended the
	company as an independent firm. The SEC fined the surviving entity $12 million. The events of
	that morning are now standard reading in <em>every</em> serious software-engineering curriculum
	that touches on operations.
</p>

<p>
	The lesson is one no senior engineer needs to hear and one every junior engineer should:
	<em>deprecation is not deletion</em>. Code that is "off" is code that can be turned back on by
	a single bit, and bits get reused.
</p>
