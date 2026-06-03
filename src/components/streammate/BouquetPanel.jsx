import { useState } from "react";
import { Play, Search, Wifi, Users, Grid3X3 } from "lucide-react";

const bouquets = [
  {
    id: "hr",
    name: "HR Paketi",
    icon: "🇭🇷",
    description: "Hrvatska televizija",
    color: "#3b82f6",
    glow: "rgba(59,130,246,0.35)",
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
    glow: "rgba(16,185,129,0.35)",
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
    glow: "rgba(245,158,11,0.35)",
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
    glow: "rgba(139,92,246,0.35)",
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
    glow: "rgba(236,72,153,0.35)",
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
    color: "#a855f7",
    glow: "rgba(168,85,247,0.35)",
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
    glow: "rgba(99,102,241,0.35)",
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
    glow: "rgba(8,145,178,0.35)",
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

// ─── Bouquet Grid Card ────────────────────────────────────────────────────────
function BouquetCard({ bouquet, onSelect }) {
  const liveCount = bouquet.channels.filter(c => c.isLive).length;
  return (
    <div
      className="group relative rounded-2xl cursor-pointer overflow-hidden"
      style={{
        background: "rgba(13,20,45,0.55)",
        backdropFilter: "blur(18px)",
        WebkitBackdropFilter: "blur(18px)",
        border: "1px solid rgba(255,255,255,0.07)",
        transition: "transform 0.25s ease, box-shadow 0.25s ease, border-color 0.25s ease",
      }}
      onMouseEnter={e => {
        e.currentTarget.style.transform = "translateY(-5px)";
        e.currentTarget.style.boxShadow = `0 16px 48px ${bouquet.glow}`;
        e.currentTarget.style.borderColor = `${bouquet.color}55`;
      }}
      onMouseLeave={e => {
        e.currentTarget.style.transform = "translateY(0)";
        e.currentTarget.style.boxShadow = "none";
        e.currentTarget.style.borderColor = "rgba(255,255,255,0.07)";
      }}
      onClick={() => onSelect(bouquet)}
    >
      <div className="absolute top-0 left-0 right-0 h-px" style={{ background: `linear-gradient(90deg, transparent, ${bouquet.color}99, transparent)` }} />
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" style={{ background: `radial-gradient(ellipse at top, ${bouquet.color}0d 0%, transparent 70%)` }} />

      <div className="relative p-5">
        <div className="flex items-start justify-between mb-4">
          <div className="w-14 h-14 rounded-2xl flex items-center justify-center text-3xl flex-shrink-0" style={{ background: `${bouquet.color}18`, border: `1px solid ${bouquet.color}33`, boxShadow: `0 0 20px ${bouquet.color}22` }}>
            {bouquet.icon}
          </div>
          <div className="flex items-center gap-1 px-2 py-1 rounded-lg text-xs font-bold" style={{ background: "rgba(239,68,68,0.15)", color: "#ef4444", border: "1px solid rgba(239,68,68,0.2)" }}>
            <div className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse" />
            {liveCount} LIVE
          </div>
        </div>
        <h3 className="text-white font-bold text-base mb-0.5">{bouquet.name}</h3>
        <p className="text-slate-400 text-xs mb-4">{bouquet.description}</p>
        <div className="space-y-1.5 mb-4">
          {bouquet.channels.slice(0, 3).map(ch => (
            <div key={ch.id} className="flex items-center gap-2">
              <div className="w-5 h-5 rounded-md flex items-center justify-center text-xs font-black text-white flex-shrink-0" style={{ background: `${ch.color}33` }}>{ch.name[0]}</div>
              <span className="text-slate-300 text-xs truncate flex-1">{ch.name}</span>
              <span className="text-slate-500 text-xs truncate hidden sm:block">{ch.program}</span>
            </div>
          ))}
          {bouquet.channels.length > 3 && <p className="text-slate-500 text-xs pl-7">+{bouquet.channels.length - 3} više kanala</p>}
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1.5">
            <Wifi size={12} style={{ color: bouquet.color }} />
            <span className="text-xs font-semibold" style={{ color: bouquet.color }}>{bouquet.count} kanala</span>
          </div>
          <div className="flex items-center gap-1 text-xs font-semibold px-3 py-1.5 rounded-lg opacity-70 group-hover:opacity-100 transition-opacity" style={{ background: `${bouquet.color}18`, color: bouquet.color, border: `1px solid ${bouquet.color}33` }}>
            Otvori
          </div>
        </div>
      </div>
    </div>
  );
}

// ─── Sidebar Bouquet Item ─────────────────────────────────────────────────────
function SidebarItem({ bouquet, isActive, onSelect }) {
  const liveCount = bouquet.channels.filter(c => c.isLive).length;
  return (
    <button
      onClick={() => onSelect(bouquet)}
      className="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-left transition-all relative group"
      style={{
        background: isActive ? `${bouquet.color}18` : "transparent",
        border: isActive ? `1px solid ${bouquet.color}40` : "1px solid transparent",
        boxShadow: isActive ? `0 0 16px ${bouquet.color}22` : "none",
      }}
      onMouseEnter={e => { if (!isActive) { e.currentTarget.style.background = "rgba(255,255,255,0.04)"; e.currentTarget.style.borderColor = "rgba(255,255,255,0.07)"; } }}
      onMouseLeave={e => { if (!isActive) { e.currentTarget.style.background = "transparent"; e.currentTarget.style.borderColor = "transparent"; } }}
    >
      {/* Active left bar */}
      {isActive && (
        <div className="absolute left-0 top-2 bottom-2 w-0.5 rounded-full" style={{ background: bouquet.color, boxShadow: `0 0 8px ${bouquet.color}` }} />
      )}

      <div
        className="w-9 h-9 rounded-xl flex items-center justify-center text-lg flex-shrink-0 transition-all"
        style={{
          background: isActive ? `${bouquet.color}25` : "rgba(255,255,255,0.05)",
          border: isActive ? `1px solid ${bouquet.color}44` : "1px solid rgba(255,255,255,0.05)",
        }}
      >
        {bouquet.icon}
      </div>

      <div className="flex-1 min-w-0">
        <p className="text-sm font-semibold truncate" style={{ color: isActive ? "white" : "rgba(148,163,184,0.8)" }}>
          {bouquet.name}
        </p>
        <div className="flex items-center gap-1.5 mt-0.5">
          <div className="w-1 h-1 rounded-full bg-red-500" />
          <span className="text-xs" style={{ color: isActive ? "rgba(239,68,68,0.9)" : "rgba(148,163,184,0.4)" }}>
            {liveCount} live
          </span>
        </div>
      </div>

      <span className="text-xs font-mono flex-shrink-0" style={{ color: isActive ? bouquet.color : "rgba(148,163,184,0.3)" }}>
        {bouquet.count}
      </span>
    </button>
  );
}

// ─── Channel Row ─────────────────────────────────────────────────────────────
function ChannelRow({ ch, index, accentColor }) {
  return (
    <div
      className="flex items-center gap-3 p-3 sm:p-4 rounded-xl cursor-pointer group"
      style={{
        background: "rgba(13,20,45,0.4)",
        backdropFilter: "blur(12px)",
        WebkitBackdropFilter: "blur(12px)",
        border: "1px solid rgba(255,255,255,0.05)",
        transition: "background 0.2s, border-color 0.2s, transform 0.15s",
      }}
      onMouseEnter={e => {
        e.currentTarget.style.background = `${accentColor}0d`;
        e.currentTarget.style.borderColor = `${accentColor}30`;
        e.currentTarget.style.transform = "translateX(4px)";
      }}
      onMouseLeave={e => {
        e.currentTarget.style.background = "rgba(13,20,45,0.4)";
        e.currentTarget.style.borderColor = "rgba(255,255,255,0.05)";
        e.currentTarget.style.transform = "translateX(0)";
      }}
    >
      <span className="text-slate-600 text-xs w-5 text-right font-mono flex-shrink-0">{index + 1}</span>

      <div
        className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0 font-black text-xs text-white"
        style={{
          background: `linear-gradient(135deg, ${ch.color}55, ${ch.color}22)`,
          border: `1px solid ${ch.color}44`,
          boxShadow: `0 0 10px ${ch.color}22`,
        }}
      >
        {ch.name.substring(0, 2).toUpperCase()}
      </div>

      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-2">
          <span className="text-white text-sm font-semibold truncate">{ch.name}</span>
          {ch.isLive && (
            <span className="flex items-center gap-1 px-1.5 py-0.5 rounded text-xs font-bold flex-shrink-0" style={{ background: "rgba(239,68,68,0.15)", color: "#ef4444" }}>
              <div className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse" />
              LIVE
            </span>
          )}
        </div>
        <p className="text-slate-400 text-xs truncate mt-0.5">{ch.program}</p>
      </div>

      <div className="hidden sm:flex items-center gap-1 text-slate-500 text-xs">
        <Users size={11} />
        {ch.viewers}
      </div>

      <div
        className="w-8 h-8 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0"
        style={{ background: `${accentColor}33`, border: `1px solid ${accentColor}55` }}
      >
        <Play size={12} fill="white" className="text-white ml-0.5" />
      </div>
    </div>
  );
}

// ─── Split Layout (Sidebar + Channels) ───────────────────────────────────────
function SplitView({ initialBouquet, onShowGrid }) {
  const [selected, setSelected] = useState(initialBouquet);
  const [search, setSearch] = useState("");

  const filtered = selected.channels.filter(c =>
    c.name.toLowerCase().includes(search.toLowerCase())
  );
  const liveCount = selected.channels.filter(c => c.isLive).length;

  const handleSelect = (b) => {
    setSelected(b);
    setSearch("");
  };

  return (
    <div className="flex h-full" style={{ minHeight: "calc(100vh - 130px)" }}>

      {/* ── Sidebar ─────────────────────────────────────────────────────── */}
      <div
        className="hidden md:flex flex-col flex-shrink-0 w-56 lg:w-64"
        style={{
          background: "rgba(8,12,28,0.7)",
          backdropFilter: "blur(24px)",
          WebkitBackdropFilter: "blur(24px)",
          borderRight: "1px solid rgba(255,255,255,0.06)",
        }}
      >
        {/* Sidebar header */}
        <div className="px-4 py-4 border-b" style={{ borderColor: "rgba(255,255,255,0.05)" }}>
          <p className="text-slate-400 text-xs font-semibold uppercase tracking-widest">Paketi</p>
        </div>

        {/* Bouquet list */}
        <div className="flex-1 overflow-y-auto px-2 py-3 space-y-0.5" style={{ scrollbarWidth: "none" }}>
          {bouquets.map(b => (
            <SidebarItem key={b.id} bouquet={b} isActive={selected.id === b.id} onSelect={handleSelect} />
          ))}
        </div>

        {/* Grid button at bottom */}
        <div className="px-3 pb-4 pt-2 border-t" style={{ borderColor: "rgba(255,255,255,0.05)" }}>
          <button
            onClick={onShowGrid}
            className="w-full flex items-center gap-2 px-3 py-2.5 rounded-xl text-xs font-medium text-slate-400 hover:text-white transition-colors"
            style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.07)" }}
          >
            <Grid3X3 size={14} /> Pregled svih paketa
          </button>
        </div>
      </div>

      {/* ── Channel panel ────────────────────────────────────────────────── */}
      <div className="flex-1 flex flex-col min-w-0">

        {/* Panel header */}
        <div
          className="px-4 sm:px-6 py-4 flex-shrink-0"
          style={{
            background: "rgba(6,10,24,0.6)",
            backdropFilter: "blur(16px)",
            WebkitBackdropFilter: "blur(16px)",
            borderBottom: "1px solid rgba(255,255,255,0.05)",
          }}
        >
          {/* Mobile: horizontal bouquet scroller */}
          <div className="flex md:hidden gap-2 mb-4 overflow-x-auto pb-1" style={{ scrollbarWidth: "none" }}>
            <button
              onClick={onShowGrid}
              className="flex-shrink-0 flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-medium text-slate-400"
              style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.08)" }}
            >
              <Grid3X3 size={13} /> Paketi
            </button>
            {bouquets.map(b => (
              <button
                key={b.id}
                onClick={() => handleSelect(b)}
                className="flex-shrink-0 flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-semibold transition-all"
                style={{
                  background: selected.id === b.id ? `${b.color}22` : "rgba(255,255,255,0.05)",
                  border: selected.id === b.id ? `1px solid ${b.color}44` : "1px solid rgba(255,255,255,0.07)",
                  color: selected.id === b.id ? "white" : "rgba(148,163,184,0.6)",
                  boxShadow: selected.id === b.id ? `0 0 12px ${b.color}22` : "none",
                }}
              >
                <span>{b.icon}</span>
                <span>{b.name}</span>
              </button>
            ))}
          </div>

          {/* Title row */}
          <div className="flex items-center gap-4 mb-4">
            <div
              className="w-10 h-10 rounded-xl flex items-center justify-center text-xl flex-shrink-0"
              style={{ background: `${selected.color}22`, border: `1px solid ${selected.color}44`, boxShadow: `0 0 16px ${selected.color}22` }}
            >
              {selected.icon}
            </div>
            <div className="flex-1 min-w-0">
              <h2 className="text-white font-bold text-lg leading-none">{selected.name}</h2>
              <p className="text-slate-500 text-xs mt-0.5">{selected.description}</p>
            </div>
            <div className="flex items-center gap-3 flex-shrink-0">
              <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-xs font-bold" style={{ background: "rgba(239,68,68,0.12)", color: "#ef4444", border: "1px solid rgba(239,68,68,0.2)" }}>
                <div className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse" />
                {liveCount} LIVE
              </div>
              <span className="hidden sm:block text-xs font-semibold" style={{ color: selected.color }}>{selected.count} kanala</span>
            </div>
          </div>

          {/* Search */}
          <div
            className="flex items-center gap-2 px-4 py-2.5 rounded-xl transition-all"
            style={{
              background: "rgba(255,255,255,0.04)",
              border: "1px solid rgba(255,255,255,0.07)",
            }}
            onFocusCapture={e => e.currentTarget.style.borderColor = `${selected.color}50`}
            onBlurCapture={e => e.currentTarget.style.borderColor = "rgba(255,255,255,0.07)"}
          >
            <Search size={15} className="text-slate-400 flex-shrink-0" />
            <input
              className="bg-transparent text-white text-sm flex-1 outline-none placeholder-slate-500"
              placeholder={`Pretraži ${selected.name}...`}
              value={search}
              onChange={e => setSearch(e.target.value)}
            />
          </div>
        </div>

        {/* Channel list */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-2">
          {/* Colored accent line at top */}
          <div className="h-px mb-4 rounded-full" style={{ background: `linear-gradient(90deg, ${selected.color}60, transparent)` }} />
          {filtered.map((ch, i) => (
            <ChannelRow key={ch.id} ch={ch} index={i} accentColor={selected.color} />
          ))}
          {filtered.length === 0 && (
            <div className="text-center py-16 text-slate-500 text-sm">
              Nema rezultata za "{search}"
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

// ─── Grid View ────────────────────────────────────────────────────────────────
function GridView({ onSelect }) {
  return (
    <div className="px-4 sm:px-6 py-8">
      <div className="mb-8">
        <h1 className="text-white text-2xl sm:text-3xl font-bold mb-1">📺 Live TV</h1>
        <p className="text-slate-400 text-sm">Odaberi buket za pregled dostupnih kanala</p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {bouquets.map(b => (
          <BouquetCard key={b.id} bouquet={b} onSelect={onSelect} />
        ))}
      </div>
    </div>
  );
}

// ─── Main Export ──────────────────────────────────────────────────────────────
export default function BouquetPanel() {
  const [view, setView] = useState("grid"); // "grid" | "split"
  const [activeBouquet, setActiveBouquet] = useState(null);

  const handleSelectBouquet = (b) => {
    setActiveBouquet(b);
    setView("split");
  };

  if (view === "split" && activeBouquet) {
    return <SplitView initialBouquet={activeBouquet} onShowGrid={() => setView("grid")} />;
  }

  return <GridView onSelect={handleSelectBouquet} />;
}