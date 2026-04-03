"use client"

import { useState, useMemo } from "react"
import { FilterBar } from "@/components/filter-bar"
import { SongCard } from "@/components/song-card"
import { StatsRow } from "@/components/stats-row"
import { filterSongs } from "@/lib/songs"

export function SongList() {
  const [activeFilter, setActiveFilter] = useState("all")
  const filtered = useMemo(() => filterSongs(activeFilter), [activeFilter])

  const showTopThree = activeFilter === "all"
  const topSongs = showTopThree ? filtered.slice(0, 3) : []
  const restSongs = showTopThree ? filtered.slice(3) : filtered

  return (
    <section>
      <div className="flex flex-wrap items-baseline gap-4 mb-1">
        <h2
          className="font-serif text-4xl sm:text-5xl text-foreground"
          style={{ textShadow: "0 0 30px rgba(255,190,11,0.1)" }}
        >
          Song Catalog
        </h2>
        <span className="font-mono text-xs text-white/30">{filtered.length} songs</span>
      </div>
      <p
        className="text-sm text-white/75 mb-5 max-w-xl leading-relaxed"
        style={{ textShadow: "0 1px 8px rgba(0,0,0,0.7)" }}
      >
        Ranked by frequency across the last 5 shows. Songs played more often are the strongest bets for tomorrow night. Tap any song for the backstory.
      </p>

      <StatsRow songCount={filtered.length} />
      <div className="mt-4 mb-6">
        <FilterBar activeFilter={activeFilter} onFilterChange={setActiveFilter} />
      </div>

      {/* Top 3 highlighted section */}
      {showTopThree && topSongs.length > 0 && (
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-3">
            <div className="flex items-center gap-2">
              <svg
                className="w-5 h-5 text-primary"
                viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"
                style={{ filter: "drop-shadow(0 0 8px rgba(255,190,11,0.5))" }}
              >
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
              </svg>
              <span
                className="font-mono text-xs uppercase tracking-[0.2em] text-primary font-black"
                style={{ textShadow: "0 0 15px rgba(255,190,11,0.4)" }}
              >
                Most Likely
              </span>
            </div>
            <div className="h-px flex-1 bg-primary/20" />
          </div>
          <p
            className="text-xs text-white/70 mb-4 leading-relaxed"
            style={{ textShadow: "0 1px 6px rgba(0,0,0,0.7)" }}
          >
            These songs appeared in 4+ of the last 5 shows. Near-guaranteed to be on tomorrow&apos;s setlist.
          </p>
          <div className="flex flex-col gap-1.5">
            {topSongs.map((song, i) => (
              <SongCard key={song.title} song={song} rank={i + 1} isTopThree />
            ))}
          </div>
        </div>
      )}

      {/* Rest of catalog */}
      <div
        className="rounded-xl overflow-hidden bg-[#0d0518]/60 backdrop-blur-md border border-white/[0.06]"
        style={{ boxShadow: "0 0 40px rgba(13,5,24,0.5)" }}
      >
        {showTopThree && (
          <div className="px-4 py-2.5 border-b border-white/[0.05] bg-white/[0.02]">
            <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-white/25">
              The Rest &middot; {restSongs.length} songs
            </span>
          </div>
        )}
        {restSongs.map((song, i) => (
          <SongCard
            key={song.title}
            song={song}
            rank={showTopThree ? i + 4 : i + 1}
            isTopThree={false}
          />
        ))}
        {filtered.length === 0 && (
          <p className="text-center py-8 text-white/30 text-sm">No songs match this filter.</p>
        )}
      </div>
    </section>
  )
}
