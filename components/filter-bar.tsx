"use client"

import { cn } from "@/lib/utils"
import { FILTERS } from "@/lib/songs"

interface FilterBarProps {
  activeFilter: string
  onFilterChange: (filter: string) => void
}

export function FilterBar({ activeFilter, onFilterChange }: FilterBarProps) {
  return (
    <div className="flex flex-wrap gap-1.5">
      {FILTERS.map((filter) => (
        <button
          key={filter.key}
          onClick={() => onFilterChange(filter.key)}
          className={cn(
            "px-3.5 py-1.5 rounded-full text-xs font-bold transition-all duration-200 cursor-pointer",
            activeFilter === filter.key
              ? "bg-primary text-primary-foreground shadow-lg"
              : "bg-white/[0.04] text-white/40 hover:bg-white/[0.08] hover:text-white/70 border border-white/[0.06]"
          )}
          style={activeFilter === filter.key ? { boxShadow: "0 0 20px rgba(255,190,11,0.3)" } : undefined}
        >
          {filter.label}
        </button>
      ))}
    </div>
  )
}
