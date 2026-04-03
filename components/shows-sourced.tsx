interface Show {
  date: string
  venue: string
  city: string
  upcoming?: boolean
  note?: string
}

const shows: Show[] = [
  { date: "Mar 30", venue: "The Regent Theater", city: "Los Angeles", upcoming: true },
  { date: "Mar 28", venue: "Fillmore Auditorium", city: "Denver" },
  { date: "Mar 07", venue: "The Warfield", city: "San Francisco", note: "Set 1 new Melvin originals, Set 2 Bob Weir tribute" },
  { date: "Mar 01", venue: "Ardmore Music Hall", city: "Ardmore PA" },
  { date: "Feb 28", venue: "Capitol Theatre", city: "Port Chester NY" },
  { date: "Feb 27", venue: "The Cabot", city: "Beverly MA" },
]

export function ShowsSourced() {
  return (
    <section
      className="rounded-xl overflow-hidden bg-[#0d0518]/50 backdrop-blur-md border border-white/[0.06]"
      style={{ boxShadow: "0 0 30px rgba(131,56,236,0.05)" }}
    >
      <div className="px-4 py-3 border-b border-white/[0.06]">
        <h2
          className="font-serif text-xl text-foreground"
          style={{ textShadow: "0 0 15px rgba(131,56,236,0.2)" }}
        >
          Shows Sourced
        </h2>
        <p className="text-[10px] text-white/30 font-mono mt-0.5 tracking-wide">
          These 5 shows inform the rankings
        </p>
      </div>

      {/* Upcoming show */}
      {shows.filter(s => s.upcoming).map((show, i) => (
        <div
          key={i}
          className="bg-crimson/80 text-white px-4 py-3 flex items-center justify-between border-b border-white/[0.06]"
          style={{ boxShadow: "inset 0 0 20px rgba(255,0,110,0.15)" }}
        >
          <div className="flex items-center gap-2">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-white" />
            </span>
            <span className="font-mono text-xs font-bold uppercase tracking-wide">Next</span>
          </div>
          <div className="text-right text-sm">
            <span className="font-semibold">{show.venue}</span>
          </div>
        </div>
      ))}

      {/* Past shows */}
      {shows.filter(s => !s.upcoming).map((show, i) => (
        <div key={i}>
          <div className="flex items-center justify-between px-4 py-2.5 border-b border-white/[0.04] last:border-b-0">
            <span className="font-mono text-[11px] text-white/30 tabular-nums w-14 shrink-0">{show.date}</span>
            <div className="text-right min-w-0">
              <span className="text-sm text-foreground/70 truncate">{show.venue}</span>
              <span className="text-xs text-white/25 ml-1 hidden sm:inline">&middot; {show.city}</span>
            </div>
          </div>
          {show.note && (
            <div className="px-4 pb-2 -mt-1 border-b border-white/[0.04]">
              <p className="text-[10px] text-plum/60 italic leading-relaxed">{show.note}</p>
            </div>
          )}
        </div>
      ))}
    </section>
  )
}
