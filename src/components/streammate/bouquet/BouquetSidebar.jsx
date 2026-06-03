import { Grid3X3, ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";
import { bouquets } from "./bouquetData";

function SidebarItem({ bouquet, isActive, onSelect, collapsed }) {
  const liveCount = bouquet.channels.filter(c => c.isLive).length;

  return (
    <button
      onClick={() => onSelect(bouquet)}
      title={collapsed ? `${bouquet.name} · ${liveCount} live` : undefined}
      className="w-full flex items-center rounded-xl text-left transition-all relative group"
      style={{
        gap: collapsed ? 0 : "10px",
        padding: collapsed ? "10px" : "10px 12px",
        justifyContent: collapsed ? "center" : "flex-start",
        background: isActive ? `${bouquet.color}18` : "transparent",
        border: isActive ? `1px solid ${bouquet.color}40` : "1px solid transparent",
        boxShadow: isActive ? `0 0 18px ${bouquet.color}22, inset 0 1px 0 ${bouquet.color}15` : "none",
        transition: "all 0.2s ease",
      }}
      onMouseEnter={e => {
        if (!isActive) {
          e.currentTarget.style.background = "rgba(255,255,255,0.05)";
          e.currentTarget.style.borderColor = "rgba(255,255,255,0.08)";
        }
      }}
      onMouseLeave={e => {
        if (!isActive) {
          e.currentTarget.style.background = "transparent";
          e.currentTarget.style.borderColor = "transparent";
        }
      }}
    >
      {/* Active indicator bar */}
      {isActive && (
        <div
          className="absolute left-0 top-2 bottom-2 w-0.5 rounded-full"
          style={{ background: bouquet.color, boxShadow: `0 0 8px ${bouquet.color}` }}
        />
      )}

      {/* Icon */}
      <div
        className="flex-shrink-0 rounded-xl flex items-center justify-center transition-all"
        style={{
          width: collapsed ? 36 : 34,
          height: collapsed ? 36 : 34,
          fontSize: collapsed ? "1.1rem" : "1rem",
          background: isActive ? `${bouquet.color}28` : "rgba(255,255,255,0.05)",
          border: isActive ? `1px solid ${bouquet.color}44` : "1px solid rgba(255,255,255,0.06)",
          boxShadow: isActive ? `0 0 12px ${bouquet.color}22` : "none",
        }}
      >
        {bouquet.icon}
      </div>

      {/* Label + meta (hidden when collapsed) */}
      {!collapsed && (
        <div className="flex-1 min-w-0">
          <p
            className="text-sm font-semibold truncate leading-none mb-1"
            style={{ color: isActive ? "white" : "rgba(148,163,184,0.85)" }}
          >
            {bouquet.name}
          </p>
          <div className="flex items-center gap-1.5">
            <div className="w-1 h-1 rounded-full bg-red-500" />
            <span className="text-xs" style={{ color: "rgba(239,68,68,0.7)" }}>
              {liveCount} live
            </span>
          </div>
        </div>
      )}

      {/* Count badge */}
      {!collapsed && (
        <span
          className="text-xs font-mono flex-shrink-0 px-1.5 py-0.5 rounded-md"
          style={{
            background: isActive ? `${bouquet.color}22` : "rgba(255,255,255,0.05)",
            color: isActive ? bouquet.color : "rgba(148,163,184,0.35)",
            border: isActive ? `1px solid ${bouquet.color}33` : "1px solid transparent",
          }}
        >
          {bouquet.count}
        </span>
      )}
    </button>
  );
}

export default function BouquetSidebar({ selected, onSelect, onShowGrid }) {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <div
      className="hidden md:flex flex-col flex-shrink-0 relative"
      style={{
        width: collapsed ? 64 : 224,
        background: "rgba(6,10,24,0.55)",
        backdropFilter: "blur(28px)",
        WebkitBackdropFilter: "blur(28px)",
        borderRight: "1px solid rgba(255,255,255,0.07)",
        transition: "width 0.25s cubic-bezier(0.4,0,0.2,1)",
      }}
    >
      {/* Top glow line */}
      <div className="absolute top-0 left-0 right-0 h-px" style={{ background: "linear-gradient(90deg, transparent, rgba(99,102,241,0.4), transparent)" }} />

      {/* Header */}
      <div
        className="flex items-center px-3 py-4 flex-shrink-0"
        style={{
          borderBottom: "1px solid rgba(255,255,255,0.05)",
          justifyContent: collapsed ? "center" : "space-between",
        }}
      >
        {!collapsed && (
          <div>
            <p className="text-white text-xs font-bold uppercase tracking-widest">Paketi</p>
            <p className="text-slate-500 text-xs mt-0.5">{bouquets.length} kategorija</p>
          </div>
        )}
        <button
          onClick={() => setCollapsed(c => !c)}
          className="w-7 h-7 rounded-lg flex items-center justify-center text-slate-400 hover:text-white transition-colors flex-shrink-0"
          style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.08)" }}
          title={collapsed ? "Proširi sidebar" : "Smanji sidebar"}
        >
          {collapsed ? <ChevronRight size={14} /> : <ChevronLeft size={14} />}
        </button>
      </div>

      {/* Bouquet list */}
      <div
        className="flex-1 overflow-y-auto py-3 space-y-0.5"
        style={{ padding: collapsed ? "12px 8px" : "12px 8px", scrollbarWidth: "none" }}
      >
        {bouquets.map(b => (
          <SidebarItem
            key={b.id}
            bouquet={b}
            isActive={selected.id === b.id}
            onSelect={onSelect}
            collapsed={collapsed}
          />
        ))}
      </div>

      {/* Footer — Grid button */}
      <div
        className="flex-shrink-0 p-2"
        style={{ borderTop: "1px solid rgba(255,255,255,0.05)" }}
      >
        <button
          onClick={onShowGrid}
          title={collapsed ? "Pregled paketa" : undefined}
          className="w-full flex items-center rounded-xl text-xs font-medium text-slate-400 hover:text-white transition-all"
          style={{
            gap: collapsed ? 0 : "8px",
            padding: collapsed ? "9px" : "9px 12px",
            justifyContent: collapsed ? "center" : "flex-start",
            background: "rgba(255,255,255,0.04)",
            border: "1px solid rgba(255,255,255,0.07)",
          }}
          onMouseEnter={e => e.currentTarget.style.background = "rgba(255,255,255,0.08)"}
          onMouseLeave={e => e.currentTarget.style.background = "rgba(255,255,255,0.04)"}
        >
          <Grid3X3 size={14} className="flex-shrink-0" />
          {!collapsed && <span>Svi paketi</span>}
        </button>
      </div>
    </div>
  );
}