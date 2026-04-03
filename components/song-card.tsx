"use client"

import { useState } from "react"
import { cn } from "@/lib/utils"
import { TAG_LABELS, TAG_COLORS, type Song } from "@/lib/songs"

function GenreTag({ tag }: { tag: string }) {
  const label = TAG_LABELS[tag] || tag
  const colors = TAG_COLORS[tag] || { text: "text-foreground/60", bg: "bg-foreground/10" }
  return (
    <span className={cn("text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-sm border border-white/5", colors.text, colors.bg)}>
      {label}
    </span>
  )
}

function FrequencyBar({ count }: { count: number }) {
  const pct = (count / 5) * 100
  const color =
    count === 5 ? "bg-primary shadow-[0_0_10px_rgba(255,190,11,0.5)]"
    : count >= 4 ? "bg-crimson shadow-[0_0_8px_rgba(255,0,110,0.4)]"
    : count >= 3 ? "bg-amber"
    : count >= 2 ? "bg-forest"
    : "bg-white/30"

  return (
    <div className="flex items-center gap-2 min-w-[90px]" title={`Played ${count} of 5 shows`}>
      <div className="flex-1 h-2 rounded-full bg-white/5 overflow-hidden">
        <div
          className={cn("h-full rounded-full transition-all", color)}
          style={{ width: `${pct}%` }}
        />
      </div>
      <span className={cn(
        "font-mono text-[11px] font-bold tabular-nums",
        count >= 4 ? "text-primary" : count >= 2 ? "text-foreground/60" : "text-white/30"
      )}>
        {count}/5
      </span>
    </div>
  )
}

interface SongCardProps {
  song: Song
  rank: number
  isTopThree: boolean
}

export function SongCard({ song, rank, isTopThree }: SongCardProps) {
  const [expanded, setExpanded] = useState(false)

  return (
    <div
      className={cn(
        "group transition-all duration-200",
        isTopThree
          ? "rounded-xl border border-primary/25 bg-primary/[0.05] backdrop-blur-md mb-2"
          : "border-b border-white/5 last:border-b-0 hover:bg-white/[0.02]"
      )}
      style={isTopThree ? { boxShadow: "0 0 30px rgba(255,190,11,0.06), inset 0 1px 0 rgba(255,190,11,0.1)" } : undefined}
    >
      <button
        onClick={() => setExpanded(!expanded)}
        className={cn(
          "w-full text-left flex items-center gap-3 sm:gap-4 cursor-pointer",
          isTopThree ? "py-4 px-4 sm:px-5" : "py-3 px-3 sm:px-4"
        )}
      >
        {/* Rank */}
        <div
          className={cn(
            "shrink-0 flex items-center justify-center font-mono tabular-nums",
            isTopThree
              ? "w-11 h-11 rounded-full bg-primary text-primary-foreground text-lg font-black"
              : "w-7 h-7 rounded-full bg-white/5 text-white/40 text-xs font-medium"
          )}
          style={isTopThree ? { boxShadow: "0 0 20px rgba(255,190,11,0.4)" } : undefined}
        >
          {rank}
        </div>

        {/* Frequency bar - desktop */}
        <div className="shrink-0 hidden sm:block">
          <FrequencyBar count={song.count} />
        </div>

        {/* Song info */}
        <div className="flex-1 min-w-0">
          <h3 className={cn(
            "font-serif leading-tight truncate",
            isTopThree ? "text-lg sm:text-xl text-foreground" : "text-base text-foreground/90"
          )}>
            {song.title}
          </h3>
          <div className="flex items-center gap-2 mt-0.5">
            <span className="text-xs truncate text-white/40">
              {song.primaryArtist}
            </span>
            <span className="sm:hidden text-[10px] font-mono text-primary/80 font-bold">
              {song.count}/5
            </span>
          </div>
        </div>

        {/* Tags - desktop */}
        <div className="hidden lg:flex items-center gap-1 shrink-0">
          {song.tags.map((tag) => (
            <GenreTag key={tag} tag={tag} />
          ))}
        </div>

        {/* Expand chevron */}
        <svg
          className={cn("w-4 h-4 text-white/20 shrink-0 transition-transform duration-200", expanded && "rotate-180")}
          fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" aria-hidden="true"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="m19 9-7 7-7-7" />
        </svg>
      </button>

      {/* Expanded detail */}
      {expanded && (
        <div className={cn(
          "pb-4 animate-in fade-in slide-in-from-top-1 duration-200",
          isTopThree ? "px-5 pl-[calc(1.25rem+2.75rem+0.75rem)]" : "px-4 pl-[calc(1rem+1.75rem+0.75rem)]"
        )}>
          {/* Mobile tags + bar */}
          <div className="flex flex-wrap items-center gap-2 mb-2 sm:hidden">
            <FrequencyBar count={song.count} />
          </div>
          <div className="flex flex-wrap items-center gap-1 mb-2 lg:hidden">
            {song.tags.map((tag) => (
              <GenreTag key={tag} tag={tag} />
            ))}
          </div>
          {song.secondaryArtist && (
            <p className="text-xs text-white/30 mb-1.5">
              via {song.secondaryArtist}
            </p>
          )}
          <p className="text-sm text-white/50 leading-relaxed">
            {song.description}
          </p>
          {isTopThree && (
            <p
              className="text-xs text-primary font-mono mt-2 font-bold"
              style={{ textShadow: "0 0 10px rgba(255,190,11,0.3)" }}
            >
              {song.count === 5
                ? "Played at every show this run -- the surest bet on the setlist"
                : `Played ${song.count} of 5 shows -- a heavy rotation staple`}
            </p>
          )}
        </div>
      )}
    </div>
  )
}
