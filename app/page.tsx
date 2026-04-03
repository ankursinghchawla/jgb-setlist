import { Hero } from "@/components/hero"
import { SpotifyEmbed } from "@/components/spotify-embed"
import { SongList } from "@/components/song-list"
import { ShowsSourced } from "@/components/shows-sourced"

export default function SetlistPage() {
  return (
    <div className="relative min-h-screen overflow-x-hidden">
      {/* Psychedelic background image - full bleed, vivid */}
      <div
        className="fixed inset-0 bg-cover bg-center bg-no-repeat scale-110"
        style={{ backgroundImage: "url('/images/psychedelic-bg.jpg')" }}
        aria-hidden="true"
      />

      {/* Animated color wash layers for extra psychedelia */}
      <div
        className="fixed inset-0 mix-blend-overlay opacity-40 animate-[hueRotate_20s_linear_infinite]"
        style={{
          background: "conic-gradient(from 0deg at 50% 50%, #ff006e, #fb5607, #ffbe0b, #06d6a0, #118ab2, #8338ec, #ff006e)",
        }}
        aria-hidden="true"
      />
      <div
        className="fixed inset-0 mix-blend-soft-light opacity-25 animate-[hueRotate_30s_linear_infinite_reverse]"
        style={{
          background: "radial-gradient(ellipse at 30% 20%, rgba(255,0,110,0.5), transparent 60%), radial-gradient(ellipse at 70% 80%, rgba(6,214,160,0.5), transparent 60%)",
        }}
        aria-hidden="true"
      />

      {/* Semi-transparent dark overlay for readability - much lighter than before */}
      <div className="fixed inset-0 bg-[#0d0518]/60" aria-hidden="true" />

      {/* Vignette - soft edge darkening */}
      <div
        className="fixed inset-0 pointer-events-none"
        aria-hidden="true"
        style={{ boxShadow: "inset 0 0 250px 80px rgba(13,5,24,0.6)" }}
      />

      <main className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 pb-20">
        <Hero />

        {/* Two-column layout - wide */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 mt-6">
          {/* Left sidebar: Spotify + Shows */}
          <aside className="lg:col-span-4 xl:col-span-3 flex flex-col gap-6 lg:sticky lg:top-6 lg:self-start">
            <SpotifyEmbed />
            <ShowsSourced />
          </aside>

          {/* Main content: Song Catalog */}
          <div className="lg:col-span-8 xl:col-span-9">
            <SongList />
          </div>
        </div>

        <footer className="mt-16 pt-6 border-t border-white/10 text-center pb-8">
          <p className="font-mono text-[10px] text-white/40 leading-relaxed tracking-wide">
            Setlist data from setlist.fm
            <br />
            The Pageant (3/13) and Belly Up (3/29) had no setlists posted
          </p>
        </footer>
      </main>
    </div>
  )
}
