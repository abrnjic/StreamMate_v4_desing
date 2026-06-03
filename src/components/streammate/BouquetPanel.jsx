import { useState } from "react";
import { Wifi } from "lucide-react";
import { bouquets } from "./bouquet/bouquetData";
import BouquetSidebar from "./bouquet/BouquetSidebar";
import ChannelPanel from "./bouquet/ChannelPanel";

// ─── Grid Card ────────────────────────────────────────────────────────────────
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

// ─── Split View ───────────────────────────────────────────────────────────────
function SplitView({ initialBouquet, onShowGrid }) {
  const [selected, setSelected] = useState(initialBouquet);

  const handleSelect = (b) => setSelected(b);

  return (
    <div className="flex" style={{ minHeight: "calc(100vh - 130px)" }}>
      <BouquetSidebar selected={selected} onSelect={handleSelect} onShowGrid={onShowGrid} />
      <ChannelPanel bouquet={selected} onShowGrid={onShowGrid} />
    </div>
  );
}

// ─── Main Export ──────────────────────────────────────────────────────────────
export default function BouquetPanel() {
  const [view, setView] = useState("grid");
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