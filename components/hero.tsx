"use client"

import { useEffect, useState } from "react"

const SHOW_TIME = new Date("2026-03-30T19:00:00-07:00").getTime()

function pad(n: number) {
  return String(n).padStart(2, "0")
}

function CountdownTimer() {
  const [mounted, setMounted] = useState(false)
  const [now, setNow] = useState(0)

  useEffect(() => {
    setMounted(true)
    setNow(Date.now())
    const interval = setInterval(() => setNow(Date.now()), 1000)
    return () => clearInterval(interval)
  }, [])

  if (!mounted) {
    return (
      <div className="flex items-center justify-center gap-5 sm:gap-8">
        {["Hrs", "Min", "Sec"].map((label, i) => (
          <div key={label} className="flex items-center gap-5 sm:gap-8">
            <div className="flex flex-col items-center">
              <span className="font-mono text-5xl sm:text-6xl text-primary tabular-nums font-bold" style={{ textShadow: "0 0 30px rgba(255,190,11,0.5), 0 0 60px rgba(255,190,11,0.2)" }}>--</span>
              <span className="font-mono text-[9px] uppercase tracking-[0.25em] text-white/40 mt-1">{label}</span>
            </div>
            {i < 2 && <span className="font-serif text-4xl text-crimson/50 -mt-5">:</span>}
          </div>
        ))}
      </div>
    )
  }

  const diff = SHOW_TIME - now
  if (diff <= 0) {
    return (
      <p className="font-serif text-4xl italic text-primary" style={{ textShadow: "0 0 30px rgba(255,190,11,0.5)" }}>
        {"Showtime. Enjoy it."}
      </p>
    )
  }

  const d = Math.floor(diff / 86400000)
  const h = Math.floor((diff % 86400000) / 3600000)
  const m = Math.floor((diff % 3600000) / 60000)
  const s = Math.floor((diff % 60000) / 1000)

  const units = [
    ...(d > 0 ? [{ value: pad(d), label: d === 1 ? "Day" : "Days" }] : []),
    { value: pad(h), label: "Hrs" },
    { value: pad(m), label: "Min" },
    { value: pad(s), label: "Sec" },
  ]

  return (
    <div className="flex items-center justify-center gap-5 sm:gap-8">
      {units.map((unit, i) => (
        <div key={unit.label} className="flex items-center gap-5 sm:gap-8">
          <div className="flex flex-col items-center">
            <span
              className="font-mono text-5xl sm:text-6xl text-primary tabular-nums font-bold"
              style={{ textShadow: "0 0 30px rgba(255,190,11,0.5), 0 0 60px rgba(255,190,11,0.2)" }}
            >
              {unit.value}
            </span>
            <span className="font-mono text-[9px] uppercase tracking-[0.25em] text-white/40 mt-1">{unit.label}</span>
          </div>
          {i < units.length - 1 && <span className="font-serif text-4xl text-crimson/50 -mt-5">:</span>}
        </div>
      ))}
    </div>
  )
}

export function Hero() {
  return (
    <header className="relative text-center pt-10 sm:pt-14 pb-8">
      {/* Decorative top border */}
      <div className="flex items-center justify-center gap-4 mb-6">
        <div className="h-px w-16 bg-gradient-to-r from-transparent to-crimson/50" />
        <div className="h-2 w-2 rounded-full bg-crimson animate-pulse" />
        <div className="h-px w-12 bg-crimson/40" />
        <div className="h-2 w-2 rounded-full bg-primary animate-pulse" style={{ animationDelay: "0.5s" }} />
        <div className="h-px w-12 bg-primary/40" />
        <div className="h-2 w-2 rounded-full bg-forest animate-pulse" style={{ animationDelay: "1s" }} />
        <div className="h-px w-16 bg-gradient-to-l from-transparent to-forest/50" />
      </div>

      <p
        className="font-mono text-xs uppercase tracking-[0.4em] text-crimson font-bold mb-4"
        style={{ textShadow: "0 0 20px rgba(255,0,110,0.4)" }}
      >
        Setlist Field Guide
      </p>

      <h1
        className="font-serif text-7xl sm:text-8xl lg:text-9xl text-foreground leading-[0.85] text-balance"
        style={{ textShadow: "0 4px 30px rgba(255,190,11,0.15), 0 0 80px rgba(131,56,236,0.1)" }}
      >
        Melvin Seals
        <br />
        <span className="inline-block mt-2">
          <span className="text-white/20 text-[0.55em]">&amp;</span>{" "}
          <em
            className="text-primary"
            style={{ textShadow: "0 0 40px rgba(255,190,11,0.6), 0 0 80px rgba(255,190,11,0.3)" }}
          >
            JGB
          </em>
        </span>
      </h1>

      <p
        className="text-white/80 text-sm sm:text-base mt-5 max-w-md mx-auto leading-relaxed tracking-wide"
        style={{ textShadow: "0 1px 8px rgba(0,0,0,0.7)" }}
      >
        What might they play? Every song from the last 5 shows -- a field guide for the show.
      </p>

      <p
        className="text-sm sm:text-base text-white/60 mt-3 tracking-wide"
        style={{ textShadow: "0 1px 8px rgba(0,0,0,0.7)" }}
      >
        Made for{" "}
        <span className="font-bold text-forest text-base sm:text-lg" style={{ textShadow: "0 0 14px rgba(6,214,160,0.5)" }}>Akash</span>{" "}
        &amp;{" "}
        <span className="font-bold text-forest text-base sm:text-lg" style={{ textShadow: "0 0 14px rgba(6,214,160,0.5)" }}>Ankur</span>
      </p>

      {/* Venue */}
      <div className="mt-7 flex flex-col items-center gap-2.5">
        <div
          className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-crimson/90 text-white font-bold text-sm shadow-lg backdrop-blur-sm"
          style={{ boxShadow: "0 0 30px rgba(255,0,110,0.3), 0 4px 20px rgba(0,0,0,0.3)" }}
        >
          <span className="relative flex h-2.5 w-2.5" aria-hidden="true">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75" />
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-white" />
          </span>
          The Regent Theater &middot; Los Angeles
        </div>
        <span
          className="font-mono text-xs text-primary tracking-[0.3em] font-medium"
          style={{ textShadow: "0 0 15px rgba(255,190,11,0.4)" }}
        >
          MARCH 30, 2026
        </span>
      </div>

      {/* Countdown */}
      <div className="mt-8">
        <CountdownTimer />
      </div>

      {/* Bottom ornament */}
      <div className="flex items-center justify-center gap-3 mt-8">
        <div className="h-px w-20 sm:w-32 bg-gradient-to-r from-transparent via-crimson/30 to-transparent" />
        <svg className="w-5 h-5 text-primary/40" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
        <div className="h-px w-20 sm:w-32 bg-gradient-to-r from-transparent via-crimson/30 to-transparent" />
      </div>
    </header>
  )
}
