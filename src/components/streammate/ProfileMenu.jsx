import { useState, useRef, useEffect } from "react";
import { User, Settings, CreditCard, Bell, Shield, LogOut, ChevronRight, Check } from "lucide-react";

const menuItems = [
  { icon: User, label: "Moj profil", sub: "user@streammate.tv" },
  { icon: CreditCard, label: "Pretplata", sub: "Premium · aktivan", accent: "#10b981" },
  { icon: Bell, label: "Obavijesti", sub: "Uključene" },
  { icon: Shield, label: "Privatnost i sigurnost", sub: null },
  { icon: Settings, label: "Postavke aplikacije", sub: null },
  { divider: true },
  { icon: LogOut, label: "Odjava", sub: null, danger: true },
];

export default function ProfileMenu({ size = 32, fontSize = "text-sm" }) {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  // Close on outside click
  useEffect(() => {
    if (!open) return;
    const handler = (e) => {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false);
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, [open]);

  return (
    <div className="relative" ref={ref}>
      {/* Avatar button */}
      <button
        onClick={() => setOpen(o => !o)}
        className="flex items-center justify-center font-bold text-white rounded-full transition-all"
        style={{
          width: size,
          height: size,
          fontSize: size * 0.35,
          background: open
            ? "linear-gradient(135deg, #6366f1, #8b5cf6)"
            : "linear-gradient(135deg, #3b82f6, #6366f1)",
          boxShadow: open ? "0 0 0 2px rgba(99,102,241,0.5), 0 0 16px rgba(99,102,241,0.4)" : "none",
          transition: "box-shadow 0.2s, background 0.2s",
        }}
      >
        U
      </button>

      {/* Dropdown */}
      {open && (
        <div
          className="absolute right-0 mt-2 w-64 rounded-2xl overflow-hidden"
          style={{
            top: "100%",
            background: "rgba(8,13,35,0.92)",
            backdropFilter: "blur(32px)",
            WebkitBackdropFilter: "blur(32px)",
            border: "1px solid rgba(255,255,255,0.1)",
            boxShadow: "0 24px 64px rgba(0,0,0,0.6), 0 0 0 1px rgba(99,102,241,0.15)",
            animation: "fadeDown 0.18s cubic-bezier(0.32,0.72,0,1)",
            zIndex: 100,
          }}
        >
          {/* Header */}
          <div
            className="px-4 py-4 flex items-center gap-3"
            style={{ borderBottom: "1px solid rgba(255,255,255,0.06)" }}
          >
            <div
              className="w-10 h-10 rounded-full flex items-center justify-center font-bold text-white text-base flex-shrink-0"
              style={{ background: "linear-gradient(135deg, #3b82f6, #8b5cf6)" }}
            >
              U
            </div>
            <div className="min-w-0">
              <p className="text-white text-sm font-semibold truncate">Korisnik</p>
              <p className="text-slate-400 text-xs truncate">user@streammate.tv</p>
            </div>
            <div
              className="ml-auto flex-shrink-0 px-2 py-0.5 rounded-full text-xs font-bold"
              style={{ background: "rgba(16,185,129,0.15)", color: "#10b981", border: "1px solid rgba(16,185,129,0.25)" }}
            >
              PRO
            </div>
          </div>

          {/* Menu items */}
          <div className="py-2">
            {menuItems.map((item, i) => {
              if (item.divider) {
                return <div key={i} className="my-1.5 mx-4 h-px" style={{ background: "rgba(255,255,255,0.06)" }} />;
              }
              const Icon = item.icon;
              return (
                <button
                  key={i}
                  className="w-full flex items-center gap-3 px-4 py-2.5 text-left transition-all group"
                  style={{ color: item.danger ? "#ef4444" : "rgba(203,213,225,0.9)" }}
                  onMouseEnter={e => {
                    e.currentTarget.style.background = item.danger
                      ? "rgba(239,68,68,0.08)"
                      : "rgba(255,255,255,0.05)";
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.background = "transparent";
                  }}
                  onClick={() => setOpen(false)}
                >
                  <div
                    className="w-8 h-8 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{
                      background: item.danger
                        ? "rgba(239,68,68,0.1)"
                        : item.accent
                        ? `${item.accent}15`
                        : "rgba(255,255,255,0.06)",
                      border: item.danger
                        ? "1px solid rgba(239,68,68,0.15)"
                        : "1px solid rgba(255,255,255,0.06)",
                    }}
                  >
                    <Icon size={15} style={{ color: item.danger ? "#ef4444" : item.accent || "rgba(148,163,184,0.8)" }} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium leading-none">{item.label}</p>
                    {item.sub && (
                      <p className="text-xs mt-0.5 truncate" style={{ color: item.accent || "rgba(100,116,139,0.9)" }}>
                        {item.sub}
                      </p>
                    )}
                  </div>
                  {!item.danger && <ChevronRight size={14} className="text-slate-600 flex-shrink-0" />}
                </button>
              );
            })}
          </div>

          {/* Footer */}
          <div
            className="px-4 py-2.5 flex items-center gap-1.5"
            style={{ borderTop: "1px solid rgba(255,255,255,0.05)", background: "rgba(0,0,0,0.2)" }}
          >
            <Check size={11} className="text-green-400" />
            <span className="text-xs" style={{ color: "rgba(100,116,139,0.7)" }}>StreamMate v2.4.1 · Sve je u redu</span>
          </div>
        </div>
      )}

      <style>{`
        @keyframes fadeDown {
          from { opacity: 0; transform: translateY(-8px) scale(0.97); }
          to   { opacity: 1; transform: translateY(0)    scale(1);    }
        }
      `}</style>
    </div>
  );
}