import { useState } from "react";
import { Play, Search, Users } from "lucide-react";
import DetailPanel from "@/components/streammate/DetailPanel";

function ChannelRow({ ch, index, accentColor }) {
  return (
    <div
      className="flex items-center gap-3 p-3 sm:p-4 rounded-xl cursor-pointer group"
      style={{
        background: "rgba(13,20,45,0.4)",
        backdropFilter: "blur(12px)",
        WebkitBackdropFilter: "blur(12px)",
        border: "1px solid rgba(255,255,255,0.05)",
        transition: "background 0.15s, border-color 0.15s, transform 0.15s",
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
            <span
              className="flex items-center gap-1 px-1.5 py-0.5 rounded text-xs font-bold flex-shrink-0"
              style={{ background: "rgba(239,68,68,0.15)", color: "#ef4444" }}
            >
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

export default function ChannelPanel({ bouquet, onShowGrid }) {
  const [search, setSearch] = useState("");
  const [selected, setSelected] = useState(null);

  const filtered = bouquet.channels.filter(c =>
    c.name.toLowerCase().includes(search.toLowerCase())
  );
  const liveCount = bouquet.channels.filter(c => c.isLive).length;

  return (
    <div className="flex-1 flex flex-col min-w-0">
      {/* Panel header */}
      <div
        className="px-4 sm:px-6 py-4 flex-shrink-0"
        style={{
          background: "rgba(6,10,24,0.5)",
          backdropFilter: "blur(16px)",
          WebkitBackdropFilter: "blur(16px)",
          borderBottom: "1px solid rgba(255,255,255,0.05)",
        }}
      >
        {/* Mobile horizontal bouquet scroll */}
        <div
          className="flex md:hidden gap-2 mb-4 overflow-x-auto pb-1"
          style={{ scrollbarWidth: "none" }}
        >
          {/* All packages button */}
          <button
            onClick={onShowGrid}
            className="flex-shrink-0 flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-medium text-slate-400"
            style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.08)" }}
          >
            ☰ Paketi
          </button>
        </div>

        {/* Title row */}
        <div className="flex items-center gap-4 mb-4">
          <div
            className="w-11 h-11 rounded-2xl flex items-center justify-center text-2xl flex-shrink-0"
            style={{
              background: `${bouquet.color}20`,
              border: `1px solid ${bouquet.color}44`,
              boxShadow: `0 0 20px ${bouquet.color}22`,
            }}
          >
            {bouquet.icon}
          </div>
          <div className="flex-1 min-w-0">
            <h2 className="text-white font-bold text-lg leading-none truncate">{bouquet.name}</h2>
            <p className="text-slate-500 text-xs mt-0.5">{bouquet.description}</p>
          </div>
          <div className="flex items-center gap-3 flex-shrink-0">
            <div
              className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-xs font-bold"
              style={{ background: "rgba(239,68,68,0.12)", color: "#ef4444", border: "1px solid rgba(239,68,68,0.2)" }}
            >
              <div className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse" />
              {liveCount} LIVE
            </div>
            <span className="hidden sm:block text-xs font-semibold" style={{ color: bouquet.color }}>
              {bouquet.count} kanala
            </span>
          </div>
        </div>

        {/* Search */}
        <div
          className="flex items-center gap-2 px-4 py-2.5 rounded-xl transition-all"
          style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.07)" }}
          onFocusCapture={e => e.currentTarget.style.borderColor = `${bouquet.color}50`}
          onBlurCapture={e => e.currentTarget.style.borderColor = "rgba(255,255,255,0.07)"}
        >
          <Search size={15} className="text-slate-400 flex-shrink-0" />
          <input
            className="bg-transparent text-white text-sm flex-1 outline-none placeholder-slate-500"
            placeholder={`Pretraži ${bouquet.name}...`}
            value={search}
            onChange={e => setSearch(e.target.value)}
          />
        </div>
      </div>

      {/* Channel list */}
      <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-2">
        {/* Accent top line */}
        <div className="h-px mb-4 rounded-full" style={{ background: `linear-gradient(90deg, ${bouquet.color}60, transparent)` }} />

        {filtered.map((ch, i) => (
          <div key={ch.id} onClick={() => setSelected(ch)}>
            <ChannelRow ch={ch} index={i} accentColor={bouquet.color} />
          </div>
        ))}

        {filtered.length === 0 && (
          <div className="text-center py-16 text-slate-500 text-sm">
            Nema rezultata za "{search}"
          </div>
        )}
      </div>

      {selected && (
        <DetailPanel item={selected} type="channel" onClose={() => setSelected(null)} />
      )}
    </div>
  );
}