import { useState } from "react";
import { Tv, Globe, Trophy, Music, Film, Baby, Zap, Newspaper, Play, Circle, ChevronRight, Search } from "lucide-react";

const bouquets = [
  {
    id: "hr",
    name: "HR Paketi",
    icon: "🇭🇷",
    description: "Hrvatska televizija",
    color: "#3b82f6",
    count: 42,
    channels: [
      { id: 1, name: "HRT 1", isLive: true, viewers: "12K", program: "Dnevnik", color: "#3b82f6" },
      { id: 2, name: "HRT 2", isLive: true, viewers: "5K", program: "Sport", color: "#3b82f6" },
      { id: 3, name: "HRT 3", isLive: true, viewers: "2K", program: "Kultura", color: "#3b82f6" },
      { id: 4, name: "Nova TV", isLive: true, viewers: "18K", program: "Vijesti Nova", color: "#ef4444" },
      { id: 5, name: "RTL Hrvatska", isLive: true, viewers: "15K", program: "RTL Direkt", color: "#f59e0b" },
      { id: 6, name: "Doma TV", isLive: false, viewers: "3K", program: "Film večeri", color: "#8b5cf6" },
      { id: 7, name: "Z1", isLive: true, viewers: "1K", program: "Grad Zagreb", color: "#10b981" },
    ],
  },
  {
    id: "sport",
    name: "Sport",
    icon: "⚽",
    description: "Sportski kanali",
    color: "#10b981",
    count: 28,
    channels: [
      { id: 1, name: "Sport Klub 1", isLive: true, viewers: "22K", program: "Premijer liga", color: "#10b981" },
      { id: 2, name: "Sport Klub 2", isLive: true, viewers: "8K", program: "NBA košarka", color: "#10b981" },
      { id: 3, name: "Eurosport 1", isLive: true, viewers: "11K", program: "Tenis ATP", color: "#f59e0b" },
      { id: 4, name: "Eurosport 2", isLive: false, viewers: "4K", program: "Biciklizam", color: "#f59e0b" },
      { id: 5, name: "Arena Sport 1", isLive: true, viewers: "19K", program: "HNL live", color: "#ef4444" },
      { id: 6, name: "Arena Sport 2", isLive: true, viewers: "7K", program: "NBA All-Star", color: "#ef4444" },
      { id: 7, name: "DAZN", isLive: true, viewers: "33K", program: "Champions League", color: "#3b82f6" },
      { id: 8, name: "Sky Sport", isLive: false, viewers: "9K", program: "Football", color: "#6366f1" },
    ],
  },
  {
    id: "news",
    name: "Vijesti",
    icon: "📰",
    description: "Informativni kanali",
    color: "#f59e0b",
    count: 18,
    channels: [
      { id: 1, name: "Al Jazeera", isLive: true, viewers: "5K", program: "Breaking News", color: "#f59e0b" },
      { id: 2, name: "CNN International", isLive: true, viewers: "8K", program: "World News", color: "#ef4444" },
      { id: 3, name: "BBC World", isLive: true, viewers: "12K", program: "Global Update", color: "#dc2626" },
      { id: 4, name: "N1 Info", isLive: true, viewers: "6K", program: "Vijesti N1", color: "#3b82f6" },
      { id: 5, name: "Euronews", isLive: true, viewers: "4K", program: "Europe Today", color: "#6366f1" },
      { id: 6, name: "DW News", isLive: false, viewers: "3K", program: "Deutschland", color: "#10b981" },
    ],
  },
  {
    id: "movies",
    name: "Filmovi",
    icon: "🎬",
    description: "Filmski kanali",
    color: "#8b5cf6",
    count: 35,
    channels: [
      { id: 1, name: "HBO", isLive: true, viewers: "31K", program: "House of Dragon", color: "#dc2626" },
      { id: 2, name: "Cinemax", isLive: true, viewers: "14K", program: "Akcijski film", color: "#8b5cf6" },
      { id: 3, name: "AXN", isLive: true, viewers: "9K", program: "Thriller noir", color: "#6366f1" },
      { id: 4, name: "Fox Movies", isLive: false, viewers: "7K", program: "Comedy", color: "#f59e0b" },
      { id: 5, name: "FilmBox", isLive: true, viewers: "5K", program: "Classic Film", color: "#3b82f6" },
      { id: 6, name: "Pickbox NOW", isLive: true, viewers: "3K", program: "Domaći film", color: "#10b981" },
    ],
  },
  {
    id: "kids",
    name: "Dječji",
    icon: "🧒",
    description: "Za djecu",
    color: "#ec4899",
    count: 15,
    channels: [
      { id: 1, name: "Cartoon Network", isLive: true, viewers: "19K", program: "Gumball", color: "#f59e0b" },
      { id: 2, name: "Nickelodeon", isLive: true, viewers: "22K", program: "SpongeBob", color: "#f97316" },
      { id: 3, name: "Disney Channel", isLive: true, viewers: "15K", program: "Disney Movie", color: "#3b82f6" },
      { id: 4, name: "HRT Kids", isLive: false, viewers: "4K", program: "Crtani", color: "#ec4899" },
      { id: 5, name: "Minimax", isLive: true, viewers: "8K", program: "Animacija", color: "#10b981" },
    ],
  },
  {
    id: "music",
    name: "Muzika",
    icon: "🎵",
    description: "Glazbeni kanali",
    color: "#ec4899",
    count: 12,
    channels: [
      { id: 1, name: "MTV", isLive: true, viewers: "11K", program: "Music Charts", color: "#ec4899" },
      { id: 2, name: "VH1", isLive: false, viewers: "4K", program: "80s Hits", color: "#8b5cf6" },
      { id: 3, name: "CMC", isLive: true, viewers: "6K", program: "Domačica", color: "#3b82f6" },
      { id: 4, name: "Music Box", isLive: true, viewers: "3K", program: "Pop Hits", color: "#10b981" },
    ],
  },
  {
    id: "regional",
    name: "Regionalni",
    icon: "🌍",
    description: "Balkanski kanali",
    color: "#6366f1",
    count: 55,
    channels: [
      { id: 1, name: "RTS 1", isLive: true, viewers: "8K", program: "Vijesti RTS", color: "#ef4444" },
      { id: 2, name: "Pink TV", isLive: true, viewers: "21K", program: "Zadruga LIVE", color: "#ec4899" },
      { id: 3, name: "Prva TV", isLive: false, viewers: "7K", program: "Serija", color: "#f59e0b" },
      { id: 4, name: "FTV BIH", isLive: true, viewers: "5K", program: "Dnevnik FTV", color: "#3b82f6" },
      { id: 5, name: "OBN", isLive: true, viewers: "4K", program: "OBN Info", color: "#10b981" },
      { id: 6, name: "Kanal 5 MK", isLive: false, viewers: "2K", program: "Film", color: "#8b5cf6" },
    ],
  },
  {
    id: "international",
    name: "Internacionalni",
    icon: "🌐",
    description: "Svjetski kanali",
    color: "#0891b2",
    count: 48,
    channels: [
      { id: 1, name: "Sky One", isLive: true, viewers: "14K", program: "Premier Show", color: "#3b82f6" },
      { id: 2, name: "Fox", isLive: true, viewers: "9K", program: "Fox News", color: "#ef4444" },
      { id: 3, name: "Discovery", isLive: true, viewers: "6K", program: "Nature Doc", color: "#10b981" },
      { id: 4, name: "National Geographic", isLive: false, viewers: "5K", program: "Space", color: "#f59e0b" },
      { id: 5, name: "History", isLive: true, viewers: "4K", program: "WW2 Doc", color: "#8b5cf6" },
    ],
  },
];

function ChannelRow({ ch, index }) {
  return (
    <div
      className="flex items-center gap-4 p-3 rounded-xl cursor-pointer group transition-all"
      style={{
        background: "rgba(255,255,255,0.02)",
        border: "1px solid rgba(255,255,255,0.04)",
        transition: "background 0.15s, transform 0.15s",
      }}
      onMouseEnter={e => {
        e.currentTarget.style.background = "rgba(59,130,246,0.08)";
        e.currentTarget.style.borderColor = "rgba(59,130,246,0.2)";
      }}
      onMouseLeave={e => {
        e.currentTarget.style.background = "rgba(255,255,255,0.02)";
        e.currentTarget.style.borderColor = "rgba(255,255,255,0.04)";
      }}
    >
      {/* Number */}
      <span className="text-slate-600 text-xs w-5 text-right font-mono">{index + 1}</span>

      {/* Channel logo placeholder */}
      <div
        className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 font-bold text-xs text-white"
        style={{ background: `linear-gradient(135deg, ${ch.color}44, ${ch.color}22)`, border: `1px solid ${ch.color}33` }}
      >
        {ch.name.substring(0, 2).toUpperCase()}
      </div>

      {/* Info */}
      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-2">
          <span className="text-white text-sm font-semibold truncate">{ch.name}</span>
          {ch.isLive && (
            <div className="flex items-center gap-1">
              <div className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse" />
              <span className="text-red-400 text-xs font-bold">LIVE</span>
            </div>
          )}
        </div>
        <p className="text-slate-400 text-xs truncate mt-0.5">{ch.program}</p>
      </div>

      {/* Viewers */}
      <span className="text-slate-500 text-xs hidden sm:block">{ch.viewers}</span>

      {/* Play button */}
      <div
        className="w-8 h-8 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
        style={{ background: "rgba(59,130,246,0.3)", border: "1px solid rgba(59,130,246,0.4)" }}
      >
        <Play size={12} fill="white" className="text-white ml-0.5" />
      </div>
    </div>
  );
}

export default function BouquetPanel({ selectedBouquet, onSelectBouquet }) {
  const [search, setSearch] = useState("");

  const currentBouquet = bouquets.find(b => b.id === selectedBouquet);
  const filteredChannels = currentBouquet
    ? currentBouquet.channels.filter(c => c.name.toLowerCase().includes(search.toLowerCase()))
    : [];

  return (
    <div className="flex h-screen" style={{ height: "calc(100vh - 57px)" }}>

      {/* LEFT: Bouquet list */}
      <div
        className="flex-shrink-0 overflow-y-auto"
        style={{
          width: "260px",
          background: "rgba(6,10,24,0.6)",
          borderRight: "1px solid rgba(59,130,246,0.1)",
          scrollbarWidth: "none",
        }}
      >
        <div className="p-4">
          <h2 className="text-white font-bold text-base mb-1">📦 Buketi</h2>
          <p className="text-slate-500 text-xs mb-4">Odaberi paket kanala</p>

          <div className="space-y-1.5">
            {bouquets.map(b => (
              <button
                key={b.id}
                onClick={() => { onSelectBouquet(b.id); setSearch(""); }}
                className="w-full flex items-center gap-3 px-3 py-3 rounded-xl text-left transition-all"
                style={{
                  background: selectedBouquet === b.id
                    ? `linear-gradient(135deg, ${b.color}22, ${b.color}11)`
                    : "transparent",
                  border: selectedBouquet === b.id
                    ? `1px solid ${b.color}44`
                    : "1px solid transparent",
                }}
              >
                <span className="text-xl">{b.icon}</span>
                <div className="flex-1 min-w-0">
                  <p
                    className="text-sm font-semibold truncate"
                    style={{ color: selectedBouquet === b.id ? "white" : "rgba(148,163,184,0.8)" }}
                  >
                    {b.name}
                  </p>
                  <p className="text-xs text-slate-500 truncate">{b.count} kanala</p>
                </div>
                {selectedBouquet === b.id && (
                  <div
                    className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                    style={{ background: b.color, boxShadow: `0 0 6px ${b.color}` }}
                  />
                )}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* RIGHT: Channel list */}
      <div className="flex-1 overflow-y-auto" style={{ scrollbarWidth: "none" }}>
        {!currentBouquet ? (
          /* Empty state */
          <div className="flex flex-col items-center justify-center h-full text-center px-8">
            <div
              className="w-20 h-20 rounded-2xl flex items-center justify-center mb-6"
              style={{ background: "rgba(59,130,246,0.1)", border: "1px solid rgba(59,130,246,0.2)" }}
            >
              <Tv size={36} className="text-blue-400" />
            </div>
            <h3 className="text-white text-xl font-bold mb-2">Odaberi buket</h3>
            <p className="text-slate-400 text-sm max-w-xs">
              Odaberi jedan od paketa s lijeve strane da vidiš dostupne kanale
            </p>
            <div className="grid grid-cols-4 gap-3 mt-8">
              {bouquets.slice(0, 4).map(b => (
                <button
                  key={b.id}
                  onClick={() => onSelectBouquet(b.id)}
                  className="flex flex-col items-center gap-2 p-4 rounded-xl transition-all"
                  style={{
                    background: "rgba(255,255,255,0.04)",
                    border: "1px solid rgba(255,255,255,0.06)",
                  }}
                  onMouseEnter={e => e.currentTarget.style.background = "rgba(59,130,246,0.08)"}
                  onMouseLeave={e => e.currentTarget.style.background = "rgba(255,255,255,0.04)"}
                >
                  <span className="text-2xl">{b.icon}</span>
                  <span className="text-xs text-slate-300 font-medium">{b.name}</span>
                </button>
              ))}
            </div>
          </div>
        ) : (
          <div className="p-6">
            {/* Bouquet header */}
            <div
              className="flex items-center gap-4 p-5 rounded-2xl mb-6"
              style={{
                background: `linear-gradient(135deg, ${currentBouquet.color}22, ${currentBouquet.color}08)`,
                border: `1px solid ${currentBouquet.color}33`,
              }}
            >
              <span className="text-4xl">{currentBouquet.icon}</span>
              <div className="flex-1">
                <h2 className="text-white text-xl font-bold">{currentBouquet.name}</h2>
                <p className="text-slate-400 text-sm">{currentBouquet.description}</p>
              </div>
              <div className="text-right">
                <p className="text-2xl font-black" style={{ color: currentBouquet.color }}>{currentBouquet.count}</p>
                <p className="text-slate-500 text-xs">kanala</p>
              </div>
            </div>

            {/* Search */}
            <div
              className="flex items-center gap-2 px-4 py-2.5 rounded-xl mb-4"
              style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.07)" }}
            >
              <Search size={15} className="text-slate-400" />
              <input
                className="bg-transparent text-white text-sm flex-1 outline-none placeholder-slate-500"
                placeholder={`Pretraži ${currentBouquet.name}...`}
                value={search}
                onChange={e => setSearch(e.target.value)}
              />
            </div>

            {/* Live indicator row */}
            <div className="flex items-center gap-2 mb-4">
              <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
              <span className="text-xs text-slate-400">
                {filteredChannels.filter(c => c.isLive).length} kanala uživo
              </span>
            </div>

            {/* Channel list */}
            <div className="space-y-1.5">
              {filteredChannels.map((ch, i) => (
                <ChannelRow key={ch.id} ch={ch} index={i} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}