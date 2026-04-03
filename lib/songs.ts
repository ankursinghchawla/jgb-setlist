export interface Song {
  title: string
  primaryArtist: string
  secondaryArtist: string
  count: number
  description: string
  tags: string[]
}

export const TAG_LABELS: Record<string, string> = {
  dead: "Dead",
  jgb: "JGB",
  soul: "Soul",
  reggae: "Reggae",
  dylan: "Dylan",
  rock: "Rock",
}

export const TAG_COLORS: Record<string, { text: string; bg: string }> = {
  dead: { text: "text-navy", bg: "bg-navy/20" },
  jgb: { text: "text-gold", bg: "bg-gold/20" },
  soul: { text: "text-crimson", bg: "bg-crimson/15" },
  reggae: { text: "text-forest", bg: "bg-forest/20" },
  dylan: { text: "text-amber", bg: "bg-amber/15" },
  rock: { text: "text-foreground/70", bg: "bg-foreground/10" },
}

export const songs: Song[] = [
  {title:"Ain't No Bread in the Breadbox",primaryArtist:"Norton Buffalo",secondaryArtist:"Jerry Garcia Band",count:5,description:"Played at every single show in this run. A funky blues-rock number by harmonica virtuoso Norton Buffalo \u2014 the one song you're almost guaranteed to hear tomorrow.",tags:["jgb"]},
  {title:"Drums / Space",primaryArtist:"Grateful Dead tradition",secondaryArtist:"",count:5,description:"The freeform percussion and ambient improvisation segment from every Dead show. JGB carries on the tradition nightly, giving the rhythm section a spotlight for exploratory drumming.",tags:["dead"]},
  {title:"Tore Up Over You",primaryArtist:"Hank Ballard & The Midnighters",secondaryArtist:"",count:4,description:"4 of 5 shows. A gritty R&B classic from the late 1950s. JGB uses it as a showcase for soulful vocals and Melvin's churchy organ work.",tags:["soul"]},
  {title:"Mystery Train",primaryArtist:"Junior Parker",secondaryArtist:"Elvis Presley",count:2,description:"One of the most iconic early rock and roll songs, first cut by Junior Parker in 1953 and famously covered by Elvis at Sun Records. JGB stretches it into a hypnotic, extended jam vehicle.",tags:["rock"]},
  {title:"I Was Made to Love Her",primaryArtist:"Stevie Wonder",secondaryArtist:"",count:2,description:"A 1967 Motown hit that was one of young Stevie Wonder's early masterpieces. JGB's rendition highlights raw romantic urgency with Melvin's organ adding gospel heat.",tags:["soul"]},
  {title:"Quinn the Eskimo (The Mighty Quinn)",primaryArtist:"Bob Dylan",secondaryArtist:"Manfred Mann",count:2,description:"A whimsical, infectious Dylan song from the Basement Tapes sessions that became a #1 hit for Manfred Mann in 1968. JGB plays it as an exuberant crowd-pleaser.",tags:["dylan"]},
  {title:"My Sisters and Brothers",primaryArtist:"Charles Johnson",secondaryArtist:"",count:2,description:"A gospel tune rooted in the Black church tradition, performed by JGB as a joyful communal sing-along. Typically closes sets on an uplifting note.",tags:["soul"]},
  {title:"Stop That Train",primaryArtist:"Keith & Tex",secondaryArtist:"Bob Marley",count:2,description:"A rocksteady/reggae classic first recorded in Jamaica by Keith & Tex. JGB renders it as a laid-back groove that lets Melvin's Hammond organ shimmer.",tags:["reggae"]},
  {title:"The Other One",primaryArtist:"Grateful Dead",secondaryArtist:"",count:2,description:"One of the Dead's most intense and psychedelic compositions, written by Bob Weir and Bill Kreutzmann. JGB channels the same improvisational energy into extended exploratory jams.",tags:["dead"]},
  {title:"New Speedway Boogie",primaryArtist:"Grateful Dead",secondaryArtist:"",count:2,description:"Written by Garcia and Hunter in the aftermath of the Altamont tragedy in 1969. The song grapples with disillusionment and the darker side of the counterculture movement.",tags:["dead"]},
  {title:"Truckin'",primaryArtist:"Grateful Dead",secondaryArtist:"",count:2,description:"The Dead's semi-autobiographical 1970 anthem about life on the road. One of their most recognizable songs and a counterculture touchstone.",tags:["dead"]},
  {title:"Like a Road",primaryArtist:"Jerry Garcia",secondaryArtist:"Robert Hunter",count:2,description:"A Garcia/Hunter composition from Garcia's solo work. A mellow, reflective tune about life's journey with a warm, pastoral quality.",tags:["jgb"]},
  {title:"Feel Like a Stranger",primaryArtist:"Grateful Dead",secondaryArtist:"",count:2,description:"A Bob Weir-penned disco-influenced rocker that opened many Dead shows in the early 1980s. Its funky groove makes it a natural JGB fit.",tags:["dead"]},
  {title:"One More Saturday Night",primaryArtist:"Grateful Dead (Bob Weir)",secondaryArtist:"",count:2,description:"Bob Weir's rollicking Chuck Berry-style rocker that traditionally closed Saturday Dead shows. A party anthem built for crowd participation.",tags:["dead"]},
  {title:"Cats Under the Stars",primaryArtist:"Jerry Garcia Band",secondaryArtist:"",count:2,description:"The title track from the only JGB studio album (1978), a jazzy, nocturnal tune about love and mystery. One of the few true JGB originals and a deep fan favorite.",tags:["jgb"]},
  {title:"In the Midnight Hour",primaryArtist:"Wilson Pickett",secondaryArtist:"",count:1,description:"Wilson Pickett's 1965 soul anthem, co-written with Steve Cropper at Stax Records. JGB uses it as a high-powered soul workout.",tags:["soul"]},
  {title:"Struggling Man",primaryArtist:"Jimmy Cliff",secondaryArtist:"",count:1,description:"A reggae classic from 1973 about perseverance in the face of hardship. JGB's version preserves its rootsy, hopeful feel.",tags:["reggae"]},
  {title:"The Way You Do the Things You Do",primaryArtist:"The Temptations",secondaryArtist:"",count:1,description:"A classic 1964 Motown hit written by Smokey Robinson. JGB plays it as a feel-good groove tune that showcases the band's R&B chops.",tags:["soul"]},
  {title:"Let It Rock",primaryArtist:"Chuck Berry",secondaryArtist:"",count:1,description:"A Chuck Berry rocker from 1960 about a railroad worker. JGB cranks up the energy with this one as a barn-burner.",tags:["rock"]},
  {title:"Don't Let Go",primaryArtist:"Roy Hamilton",secondaryArtist:"Jerry Garcia Band",count:1,description:"Originally a 1958 R&B hit by Roy Hamilton, Garcia transformed it into an epic jam vehicle that could stretch past 20 minutes. One of the most beloved songs in the JGB canon.",tags:["soul","jgb"]},
  {title:"Going Down the Road Feeling Bad",primaryArtist:"Traditional",secondaryArtist:"Grateful Dead",count:1,description:"An old American folk/blues standard that the Dead adopted as a raucous concert closer. JGB maintains that rollicking, communal sing-along energy.",tags:["dead"]},
  {title:"They Love Each Other",primaryArtist:"Jerry Garcia",secondaryArtist:"Robert Hunter",count:1,description:"A sweet, upbeat Garcia/Hunter love song. JGB plays the mellow, grooving later version that evolved from its early acoustic form.",tags:["jgb","dead"]},
  {title:"Swing Low, Sweet Chariot",primaryArtist:"Traditional (Spiritual)",secondaryArtist:"",count:1,description:"One of the most famous African American spirituals, dating to the mid-19th century. JGB performs it as a reverent gospel moment within the set.",tags:["soul"]},
  {title:"The Night They Drove Old Dixie Down",primaryArtist:"The Band",secondaryArtist:"",count:1,description:"Robbie Robertson's masterful 1969 narrative about the fall of the Confederacy. Widely regarded as one of the greatest songs in American rock.",tags:["rock"]},
  {title:"Waiting for a Miracle",primaryArtist:"Bruce Cockburn",secondaryArtist:"",count:1,description:"A politically charged 1984 song by Bruce Cockburn. JGB strips away some politics and emphasizes its driving, hopeful rhythm.",tags:["rock"]},
  {title:"Lay Down Sally",primaryArtist:"Eric Clapton",secondaryArtist:"",count:1,description:"A breezy 1977 country-rock single from Slowhand. JGB's version emphasizes the easygoing shuffle and gives Melvin room to stretch.",tags:["rock"]},
  {title:"That's All Right",primaryArtist:"Arthur 'Big Boy' Crudup",secondaryArtist:"Elvis Presley",count:1,description:"The song that launched rock and roll \u2014 Crudup's 1946 blues original became Elvis's first single at Sun Records. JGB plays it as a roots-rock shuffle.",tags:["rock"]},
  {title:"And It Stoned Me",primaryArtist:"Van Morrison",secondaryArtist:"",count:1,description:"The opening track from Moondance (1970), a nostalgic reverie about a childhood day of fishing. Its gentle, rolling feel suits JGB perfectly.",tags:["rock"]},
  {title:"Dancing in the Street",primaryArtist:"Martha and the Vandellas",secondaryArtist:"Grateful Dead",count:1,description:"The iconic 1964 Motown hit that became an anthem of joy and protest. The Dead made it a concert staple, and JGB continues the tradition.",tags:["soul","dead"]},
  {title:"No Woman, No Cry",primaryArtist:"Bob Marley & The Wailers",secondaryArtist:"",count:1,description:"Marley's tender 1975 reggae ballad about growing up in Trenchtown. JGB leans into its warm, communal spirit with extended organ passages.",tags:["reggae"]},
  {title:"Hey Pocky A-Way",primaryArtist:"The Meters",secondaryArtist:"The Neville Brothers",count:1,description:"A New Orleans funk classic rooted in Mardi Gras Indian chant traditions. JGB channels that second-line groove with Melvin driving from the organ bench.",tags:["soul"]},
  {title:"Stir It Up",primaryArtist:"Bob Marley & The Wailers",secondaryArtist:"",count:1,description:"One of Marley's earliest hits (1973), a seductive reggae love song. JGB plays it slow and deep, letting the groove percolate.",tags:["reggae"]},
  {title:"Money Honey",primaryArtist:"Clyde McPhatter & The Drifters",secondaryArtist:"Elvis Presley",count:1,description:"A foundational 1953 R&B hit that helped bridge jump blues and rock and roll. JGB's take emphasizes the song's raw jukebox energy.",tags:["soul"]},
  {title:"Friend of the Devil",primaryArtist:"Grateful Dead",secondaryArtist:"",count:1,description:"A beloved Garcia/Hunter/Dawson folk tune from American Beauty (1970). JGB typically plays it at a slower, more contemplative tempo.",tags:["dead"]},
  {title:"Expressway to Your Heart",primaryArtist:"The Soul Survivors",secondaryArtist:"",count:1,description:"A 1967 blue-eyed soul hit from Philadelphia. JGB uses it as a high-energy set-opener that gets the crowd moving immediately.",tags:["soul"]},
  {title:"Bright Side of the Road",primaryArtist:"Van Morrison",secondaryArtist:"",count:1,description:"An exuberant 1979 Van Morrison track brimming with optimism. JGB captures its breezy, life-affirming spirit.",tags:["rock"]},
  {title:"Corrina",primaryArtist:"Traditional",secondaryArtist:"Bob Dylan / Taj Mahal",count:1,description:"A folk-blues standard with roots stretching back to the 1920s. JGB plays a version closest to the Taj Mahal arrangement.",tags:["rock","dylan"]},
  {title:"Evangeline",primaryArtist:"The Band",secondaryArtist:"Emmylou Harris",count:1,description:"A gorgeous waltz from The Last Waltz, featuring Emmylou Harris on the original. A Cajun love story with a haunting, cinematic quality.",tags:["rock"]},
  {title:"The Maker",primaryArtist:"Daniel Lanois",secondaryArtist:"",count:1,description:"A deeply spiritual song from Lanois's 1989 album Acadie. Its gospel-infused intensity makes it a powerful vehicle for Melvin's organ.",tags:["rock"]},
  {title:"Neighbor, Neighbor",primaryArtist:"Jimmy Hughes",secondaryArtist:"",count:1,description:"A deep-cut 1960s Southern soul number. JGB revived this obscure gem as a funky, organ-driven workout that rewards the crate-digger fans.",tags:["soul"]},
  {title:"Eyes of the World",primaryArtist:"Grateful Dead",secondaryArtist:"",count:1,description:"A luminous Garcia/Hunter composition from Wake of the Flood (1973). One of the Dead's most uplifting and improvisationally rich songs.",tags:["dead"]},
  {title:"I Feel Like Dynamite",primaryArtist:"King Floyd",secondaryArtist:"",count:1,description:"A deep funk cut by New Orleans soul singer King Floyd. JGB turns it into a high-energy workout anchored by Melvin's explosive organ.",tags:["soul"]},
  {title:"Sugaree",primaryArtist:"Jerry Garcia",secondaryArtist:"Robert Hunter",count:1,description:"A Garcia/Hunter classic from Garcia's first solo album (1972). One of the most beloved songs in the entire Garcia repertoire.",tags:["jgb","dead"]},
  {title:"Midnight Moonlight",primaryArtist:"Peter Rowan",secondaryArtist:"Old & In the Way",count:1,description:"Written for Old & In the Way, the bluegrass supergroup Rowan shared with Garcia. JGB electrifies it into a soaring psychedelic jam.",tags:["jgb"]},
  {title:"Help on the Way",primaryArtist:"Grateful Dead",secondaryArtist:"",count:1,description:"The first movement of the Help>Slip>Frank suite from Blues for Allah (1975). A complex, progressive piece that builds tension.",tags:["dead"]},
  {title:"Slipknot!",primaryArtist:"Grateful Dead",secondaryArtist:"",count:1,description:"The instrumental middle of the Help>Slip>Frank suite \u2014 rhythmically complex and deeply improvisational. One of the Dead's most adventurous jam spaces.",tags:["dead"]},
  {title:"Shakedown Street",primaryArtist:"Grateful Dead",secondaryArtist:"",count:1,description:"The title track from the Dead's 1978 disco-influenced album. Its funky groove is a natural fit for JGB's R&B-heavy approach.",tags:["dead"]},
  {title:"Reggae Boogie",primaryArtist:"Melvin Seals",secondaryArtist:"(original)",count:1,description:"A new Melvin original debuted at the Warfield. Part of a special all-originals first set \u2014 Melvin writing new music, not just carrying the torch.",tags:["jgb"]},
  {title:"Same Old Blues",primaryArtist:"Melvin Seals",secondaryArtist:"(original)",count:1,description:"A new Melvin blues number from the Warfield's special first set. Leans into his deep roots in gospel and blues organ.",tags:["jgb"]},
  {title:"It's Samba Night",primaryArtist:"Melvin Seals",secondaryArtist:"(original)",count:1,description:"A Latin-inflected groove premiered at the Warfield. JGB exploring rhythmic territory beyond their usual Americana/soul palette.",tags:["jgb"]},
  {title:"Reflections",primaryArtist:"Melvin Seals",secondaryArtist:"(original)",count:1,description:"A contemplative new original from the all-originals Warfield set. An introspective moment in JGB's typically high-energy catalog.",tags:["jgb"]},
  {title:"Lucky Strike",primaryArtist:"Melvin Seals",secondaryArtist:"(original)",count:1,description:"A new Melvin Seals original rounding out the Warfield's fresh compositions. New music from the bandleader himself.",tags:["jgb"]},
  {title:"I Second That Emotion",primaryArtist:"Smokey Robinson & The Miracles",secondaryArtist:"",count:1,description:"Smokey's 1967 Motown classic about playing it cool in love. A silky groove that lets Melvin's organ slide between the vocal lines.",tags:["soul"]},
  {title:"(I'm a) Road Runner",primaryArtist:"Junior Walker & The All Stars",secondaryArtist:"",count:1,description:"A 1966 Motown hit driven by Junior Walker's wailing saxophone. JGB swaps sax for organ but keeps the relentless energy intact.",tags:["soul"]},
  {title:"The Wheel",primaryArtist:"Grateful Dead",secondaryArtist:"",count:1,description:"A Garcia/Hunter meditation on fate and karma. Its hypnotic, circular groove perfectly captures the 'the wheel is turning and you can't slow down' feeling.",tags:["dead"]},
  {title:"Jack Straw",primaryArtist:"Grateful Dead",secondaryArtist:"",count:1,description:"A Weir/Hunter tale of two drifters from Europe '72. One of the Dead's most enduring concert openers, given a JGB twist at the Warfield.",tags:["dead"]},
  {title:"Let's Spend the Night Together",primaryArtist:"The Rolling Stones",secondaryArtist:"",count:1,description:"A classic 1967 Stones single. JGB gives it a funkier, more organ-heavy arrangement that Melvin owns completely.",tags:["rock"]},
  {title:"Knockin' on Heaven's Door",primaryArtist:"Bob Dylan",secondaryArtist:"",count:1,description:"Written for the 1973 film Pat Garrett and Billy the Kid. JGB plays it with a reverent, gospel-tinged arrangement.",tags:["dylan"]},
  {title:"Mama Tried",primaryArtist:"Merle Haggard",secondaryArtist:"",count:1,description:"Haggard's autobiographical 1968 country classic. The Dead made it a concert staple, and JGB carries on that tradition.",tags:["rock"]},
  {title:"When I Paint My Masterpiece",primaryArtist:"Bob Dylan",secondaryArtist:"The Band",count:1,description:"A whimsical Dylan song about artistic aspiration, first on The Band's Cahoots (1971). Humor and longing for creative transcendence.",tags:["dylan"]},
].sort((a, b) => b.count - a.count || a.title.localeCompare(b.title))

export const FILTERS = [
  { key: "all", label: "All" },
  { key: "heavy", label: "Heavy Rotation" },
  { key: "dead", label: "Dead" },
  { key: "jgb", label: "Garcia / JGB" },
  { key: "soul", label: "Soul" },
  { key: "reggae", label: "Reggae" },
  { key: "dylan", label: "Dylan" },
  { key: "rock", label: "Rock" },
] as const

export function filterSongs(filter: string): Song[] {
  if (filter === "heavy") return songs.filter((s) => s.count >= 2)
  if (filter !== "all") return songs.filter((s) => s.tags.includes(filter))
  return songs
}
