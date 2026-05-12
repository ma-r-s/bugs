/**
 * The catalog. Each entry is one bug entry in the field guide.
 *
 * Order is curatorial, not chronological. The catalog reads top to bottom
 * the way a good gallery reads, alternating mood and scale.
 */

export type Source = {
  title: string;
  url: string;
};

export type Bug = {
  id: string;
  slug: string;
  name: string;
  scientificName: string;
  family: string;
  year: string;
  habitat: string;
  observer: string;
  tagline: string;
  consequence: string;
  sources: Source[];
};

export const bugs: Bug[] = [
  {
    id: "BG-001",
    slug: "500-mile-email",
    name: "The 500-Mile Email",
    scientificName: "Sendmail epistola quingentorum milium",
    family: "Network Anomalies",
    year: "2002",
    habitat: "Statistics Dept. mail server, UNC Chapel Hill",
    observer: "Trey Harris, sage-members mailing list",
    tagline: "Email cannot travel more than 500 miles from the campus.",
    consequence: "No data lost. A statistics chair questions his sanity.",
    sources: [
      {
        title: "The 500-Mile Email (Trey Harris, original)",
        url: "https://www.ibiblio.org/harris/500milemail.html",
      },
      { title: "Absurd Bug Stories", url: "https://500mile.email/" },
    ],
  },
  {
    id: "BG-002",
    slug: "wifi-only-rain",
    name: "The Wi-Fi That Worked Only When It Rained",
    scientificName: "Aqua restituens signum",
    family: "Radio-Frequency Specimens",
    year: "2024",
    habitat: "A suburban home, recently re-occupied",
    observer: "Predrag Gruevski, personal blog",
    tagline: "The wireless link returned 98% packet loss except during storms.",
    consequence: "One season of online classes, taken in the rain.",
    sources: [
      {
        title: "The Wi-Fi only works when it's raining (Predrag Gruevski)",
        url: "https://predr.ag/blog/wifi-only-works-when-its-raining/",
      },
      {
        title: "Hacker News discussion",
        url: "https://news.ycombinator.com/item?id=39896371",
      },
    ],
  },
  {
    id: "BG-003",
    slug: "tuesday-printer",
    name: "OpenOffice Will Not Print on Tuesdays",
    scientificName: "Magicus dies Martis",
    family: "Calendar-Coupled Faults",
    year: "2008",
    habitat: "CUPS print queues, Ubuntu 8.04",
    observer: "Ubuntu Launchpad bug #255161",
    tagline:
      "PostScript jobs misidentified as Erlang bytecode on Tuesdays only.",
    consequence: "Weekly status reports go unprinted.",
    sources: [
      {
        title: "Launchpad bug #255161",
        url: "https://bugs.launchpad.net/ubuntu/+source/cupsys/+bug/255161",
      },
      {
        title: 'Hacker News: "OpenOffice will never print on Tuesdays"',
        url: "https://news.ycombinator.com/item?id=11717010",
      },
    ],
  },
  {
    id: "BG-004",
    slug: "mariner-1",
    name: "Mariner 1's Missing Overbar",
    scientificName: "Vinculum absens",
    family: "Aerospace Calamities",
    year: "1962",
    habitat: "Atlas-Agena B guidance program",
    observer: "NASA / JPL",
    tagline:
      "A single missing overbar in transcribed source destroyed the rocket.",
    consequence: "$18.5M ($190M adj.), 293 seconds of flight, one Venus probe.",
    sources: [
      {
        title: "NASA Mariner 1 mission page",
        url: "https://science.nasa.gov/mission/mariner-1/",
      },
      {
        title: "Mariner 1 destroyed due to code error (EDN)",
        url: "https://www.edn.com/mariner-1-destroyed-due-to-code-error-july-22-1962/",
      },
    ],
  },
  {
    id: "BG-005",
    slug: "therac-25",
    name: "Therac-25",
    scientificName: "Acceleratio fatalis",
    family: "Concurrent-Programming Fatalities",
    year: "1985-1987",
    habitat: "Six radiation-therapy clinics",
    observer: "Nancy Leveson, IEEE Computer",
    tagline:
      "A race condition between operator keystrokes and turntable rotation.",
    consequence:
      "At least three deaths, multiple severe injuries, removed from service.",
    sources: [
      {
        title: 'Leveson, "An Investigation of the Therac-25 Accidents"',
        url: "https://www.cs.columbia.edu/~junfeng/08fa-e6998/sched/readings/therac25.pdf",
      },
      {
        title: "Therac-25 (Wikipedia)",
        url: "https://en.wikipedia.org/wiki/Therac-25",
      },
    ],
  },
  {
    id: "BG-006",
    slug: "patriot-dhahran",
    name: "The Patriot at Dhahran",
    scientificName: "Tempus erroneum",
    family: "Floating-Point Tragedies",
    year: "1991",
    habitat: "MIM-104 Patriot, Saudi Arabia",
    observer: "U.S. Government Accountability Office",
    tagline:
      "A clock that drifted 0.34 seconds across one hundred hours of uptime.",
    consequence: "28 American soldiers killed, around 100 wounded.",
    sources: [
      {
        title: "GAO/IMTEC-92-26 Patriot Missile Defense",
        url: "https://www.gao.gov/products/imtec-92-26",
      },
      {
        title: "1991 Khobar bombing (Wikipedia)",
        url: "https://en.wikipedia.org/wiki/1991_Khobar_bombing",
      },
    ],
  },
  {
    id: "BG-007",
    slug: "pacman-256",
    name: "Pac-Man Level 256",
    scientificName: "Ludus arcadiae fatalis",
    family: "Integer-Overflow Game Artifacts",
    year: "1980",
    habitat: "Namco Pac-Man arcade ROM",
    observer: "Players, the hard way",
    tagline: "The 256th level is half a maze and half garbled memory.",
    consequence: 'The first widely-observed "kill screen."',
    sources: [
      {
        title: 'Don Hodges, "Fixing Pac-Man\'s Kill Screen"',
        url: "https://donhodges.com/how_high_can_you_get2.htm",
      },
      {
        title: "Kill screen (Wikipedia)",
        url: "https://en.wikipedia.org/wiki/Kill_screen",
      },
    ],
  },
  {
    id: "BG-008",
    slug: "nuclear-gandhi",
    name: "Nuclear Gandhi",
    scientificName: "Fabula apocrypha",
    family: "Apocryphal Specimens",
    year: "1991 (alleged), 2010 (canonized)",
    habitat: "Sid Meier's Civilization",
    observer: "The Internet",
    tagline: "A bug that never happened, now built into the game on purpose.",
    consequence:
      "One of the most cited bugs in computing, almost certainly a myth.",
    sources: [
      {
        title: "Nuclear Gandhi (Wikipedia)",
        url: "https://en.wikipedia.org/wiki/Nuclear_Gandhi",
      },
      {
        title: "Sid Meier debunks the myth (AV Club)",
        url: "https://www.avclub.com/sid-meier-s-memoir-debunks-the-myth-of-nuclear-gandhi-1844991916",
      },
    ],
  },
  {
    id: "BG-009",
    slug: "knight-capital",
    name: "Knight Capital's 45 Minutes",
    scientificName: "Vexillum reanimatum",
    family: "Deployment Catastrophes",
    year: "2012",
    habitat: "SMARS routing tier, eight servers",
    observer: "SEC enforcement filing",
    tagline:
      "A deprecated flag reused, on one server out of eight, on deploy day.",
    consequence:
      "$440M loss in 45 minutes; the firm did not survive the quarter.",
    sources: [
      {
        title: "SEC Release No. 70694",
        url: "https://www.sec.gov/litigation/admin/2013/34-70694.pdf",
      },
      {
        title: 'Doug Seven, "Knightmare: A DevOps Cautionary Tale"',
        url: "https://dougseven.com/2014/04/17/knightmare-a-devops-cautionary-tale/",
      },
    ],
  },
  {
    id: "BG-010",
    slug: "pentium-fdiv",
    name: "The Pentium FDIV Bug",
    scientificName: "Tabula divisionis lacunosa",
    family: "Silicon Defects",
    year: "1994",
    habitat: "Intel Pentium P5, first revisions",
    observer: "Thomas Nicely, Lynchburg College",
    tagline:
      "Five missing lookup-table entries; one wrong division in nine billion.",
    consequence:
      "$475M write-off; the modern era of public bug response begins.",
    sources: [
      {
        title: "Pentium FDIV bug (Wikipedia)",
        url: "https://en.wikipedia.org/wiki/Pentium_FDIV_bug",
      },
      {
        title: "Thomas Nicely's original account",
        url: "https://faculty.lynchburg.edu/~nicely/pentbug/pentbug.html",
      },
    ],
  },
  {
    id: "BG-011",
    slug: "hopper-moth",
    name: "The Hopper Moth",
    scientificName: "Lepidopterum primum",
    family: "Etymological Curiosities",
    year: "1947",
    habitat: "Harvard Mark II, relay panel F, Position 70",
    observer: 'William "Bill" Burke and the Mark II crew',
    tagline: "The most famous specimen in computing, taped to a logbook page.",
    consequence: "The first literal bug. The word was already in use.",
    sources: [
      {
        title: "Smithsonian: Log Book With Computer Bug",
        url: "https://americanhistory.si.edu/collections/object/nmah_334663",
      },
      {
        title: 'JSTOR Daily, "The Bug in the Computer Bug Story"',
        url: "https://daily.jstor.org/the-bug-in-the-computer-bug-story/",
      },
    ],
  },
  {
    id: "BG-012",
    slug: "blackout-2003",
    name: "The Northeast Blackout",
    scientificName: "Conditio cursoria reticularis",
    family: "Infrastructure-Scale Faults",
    year: "2003",
    habitat: "FirstEnergy's XA/21 EMS, Akron control room",
    observer: "U.S.-Canada Power System Outage Task Force",
    tagline:
      "A silent alarm subsystem hung; operators watched stale screens for an hour.",
    consequence:
      "50 million people without power across eight states and Ontario.",
    sources: [
      {
        title: "Final Report on the August 14, 2003 Blackout",
        url: "https://www.energy.gov/oe/articles/blackout-2003-final-report-august-14-2003-blackout-united-states-and-canada-causes-and",
      },
      {
        title: "Northeast blackout of 2003 (Wikipedia)",
        url: "https://en.wikipedia.org/wiki/Northeast_blackout_of_2003",
      },
    ],
  },
];

export const bugBySlug = Object.fromEntries(bugs.map((b) => [b.slug, b]));

/** Catalog index map for prev/next navigation. */
export const bugIndex = new Map(bugs.map((b, i) => [b.slug, i]));

export function neighbors(slug: string): {
  prev: Bug | null;
  next: Bug | null;
} {
  const i = bugIndex.get(slug);
  if (i === undefined) return { prev: null, next: null };
  return {
    prev: i > 0 ? bugs[i - 1] : null,
    next: i < bugs.length - 1 ? bugs[i + 1] : null,
  };
}
