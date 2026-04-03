interface StatProps {
  value: string | number
  label: string
  color?: string
  glow?: string
}

function Stat({ value, label, color = "text-foreground", glow }: StatProps) {
  return (
    <div className="flex flex-col items-center gap-0.5">
      <div
        className={`font-serif text-3xl sm:text-4xl leading-none ${color}`}
        style={glow ? { textShadow: glow } : undefined}
      >
        {value}
      </div>
      <div className="font-mono text-[9px] uppercase tracking-[0.15em] text-white/30">
        {label}
      </div>
    </div>
  )
}

export function StatsRow({ songCount }: { songCount: number }) {
  return (
    <div
      className="flex justify-center items-end gap-8 sm:gap-14 py-4 mb-2 rounded-xl bg-white/[0.02] border border-white/[0.06] backdrop-blur-sm"
      style={{ boxShadow: "0 0 30px rgba(13,5,24,0.3)" }}
    >
      <Stat value={songCount} label="Songs" color="text-primary" glow="0 0 20px rgba(255,190,11,0.4)" />
      <Stat value={5} label="Shows" color="text-crimson" glow="0 0 15px rgba(255,0,110,0.3)" />
      <Stat value={2} label="Every Night" color="text-forest" glow="0 0 15px rgba(6,214,160,0.3)" />
    </div>
  )
}
