import { X, Play, Star, Clock, Users, Tv, Calendar, Wifi } from "lucide-react";

/**
 * DetailPanel — glassmorphism overlay panel for channels and movies/series.
 *
 * Props:
 *   item   — object with fields: name/title, program/genre, description, rating, duration/seasons,
 *             viewers, isLive, color, year
 *   type   — "channel" | "movie" | "series"
 *   onClose — fn to close
 */
export default function DetailPanel({ item, type, onClose }) {
  if (!item) return null;

  const isChannel = type === "channel";
  const title = item.name || item.title;
  const accentColor = item.color || "#3b82f6";

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 z-50"
        style={{ background: "rgba(0,0,0,0.72)", backdropFilter: "blur(6px)", WebkitBackdropFilter: "blur(6px)" }}
        onClick={onClose}
      />

      {/* Panel */}
      <div
        className="fixed z-50 flex flex-col"
        style={{
          bottom: 0,
          left: 0,
          right: 0,
          maxHeight: "88vh",
          borderRadius: "24px 24px 0 0",
          background: "rgba(8,13,32,0.92)",
          backdropFilter: "blur(32px)",
          WebkitBackdropFilter: "blur(32px)",
          border: "1px solid rgba(255,255,255,0.08)",
          borderBottom: "none",
          boxShadow: `0 -24px 80px rgba(0,0,0,0.6), 0 0 0 1px ${accentColor}22`,
          animation: "slideUp 0.3s cubic-bezier(0.32,0.72,0,1)",
        }}
      >
        {/* Drag handle */}
        <div className="flex justify-center pt-3 pb-1 flex-shrink-0">
          <div className="w-10 h-1 rounded-full" style={{ background: "rgba(255,255,255,0.15)" }} />
        </div>

        {/* Accent top glow line */}
        <div className="h-px mx-6" style={{ background: `linear-gradient(90deg, transparent, ${accentColor}88, transparent)` }} />

        {/* Scrollable content */}
        <div className="overflow-y-auto flex-1" style={{ scrollbarWidth: "none" }}>
          {/* Hero area */}
          <div
            className="relative mx-4 mt-5 rounded-2xl overflow-hidden flex items-end"
            style={{
              height: "180px",
              background: `linear-gradient(135deg, ${accentColor}33 0%, #060a18 100%)`,
              border: `1px solid ${accentColor}22`,
            }}
          >
            {/* Animated glow orb */}
            <div
              className="absolute rounded-full"
              style={{
                width: "300px", height: "300px",
                top: "-100px", left: "-60px",
                background: `radial-gradient(circle, ${accentColor}22 0%, transparent 70%)`,
                pointerEvents: "none",
              }}
            />

            {/* Big initial letter */}
            <span
              className="absolute right-6 top-4 font-black select-none"
              style={{ fontSize: "120px", lineHeight: 1, color: `${accentColor}18` }}
            >
              {title[0]}
            </span>

            {/* Live / status badge */}
            {item.isLive && (
              <div
                className="absolute top-4 left-4 flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-bold"
                style={{ background: "rgba(239,68,68,0.18)", color: "#ef4444", border: "1px solid rgba(239,68,68,0.25)" }}
              >
                <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
                LIVE
              </div>
            )}
            {item.status && (
              <div
                className="absolute top-4 left-4 px-3 py-1 rounded-lg text-xs font-bold"
                style={{
                  background: item.status === "U tijeku" ? "rgba(59,130,246,0.18)" : "rgba(255,255,255,0.08)",
                  color: item.status === "U tijeku" ? "#60a5fa" : "#94a3b8",
                  border: item.status === "U tijeku" ? "1px solid rgba(59,130,246,0.3)" : "1px solid rgba(255,255,255,0.1)",
                }}
              >
                {item.status === "U tijeku" ? "● U TIJEKU" : "✓ ZAVRŠENA"}
              </div>
            )}

            {/* Gradient overlay */}
            <div
              className="absolute inset-0"
              style={{ background: "linear-gradient(to top, rgba(8,13,32,0.9) 0%, transparent 60%)" }}
            />

            {/* Bottom info */}
            <div className="relative z-10 p-4 pb-5 w-full">
              <h2 className="text-white font-black text-2xl leading-none">{title}</h2>
              {isChannel && item.program && (
                <p className="text-slate-400 text-sm mt-1 truncate">{item.program}</p>
              )}
            </div>
          </div>

          {/* Stats row */}
          <div className="flex items-center gap-3 px-4 mt-4 flex-wrap">
            {item.rating && (
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-sm font-bold"
                style={{ background: "rgba(251,191,36,0.1)", color: "#fbbf24", border: "1px solid rgba(251,191,36,0.2)" }}>
                <Star size={13} fill="#fbbf24" /> {item.rating}
              </div>
            )}
            {(item.duration) && (
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-sm text-slate-300"
                style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.08)" }}>
                <Clock size={13} className="text-slate-400" /> {item.duration}
              </div>
            )}
            {item.seasons && (
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-sm text-slate-300"
                style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.08)" }}>
                <Tv size={13} className="text-slate-400" /> {item.seasons} sez. · {item.episodes} ep.
              </div>
            )}
            {item.year && (
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-sm text-slate-300"
                style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.08)" }}>
                <Calendar size={13} className="text-slate-400" /> {item.year}
              </div>
            )}
            {item.viewers && (
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-sm text-slate-300"
                style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.08)" }}>
                <Users size={13} className="text-slate-400" /> {item.viewers}
              </div>
            )}
            {isChannel && (
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-sm font-semibold"
                style={{ background: `${accentColor}15`, color: accentColor, border: `1px solid ${accentColor}30` }}>
                <Wifi size={13} /> HD
              </div>
            )}
            {item.genre && (
              <div className="px-3 py-1.5 rounded-xl text-sm font-medium"
                style={{ background: `${accentColor}15`, color: accentColor, border: `1px solid ${accentColor}30` }}>
                {item.genre}
              </div>
            )}
          </div>

          {/* Description */}
          <div className="px-4 mt-5">
            <h3 className="text-slate-400 text-xs font-semibold uppercase tracking-widest mb-2">O sadržaju</h3>
            <p className="text-slate-300 text-sm leading-relaxed">
              {item.description || generateDescription(title, item.genre || item.program, type)}
            </p>
          </div>

          {/* Action buttons */}
          <div className="px-4 mt-6 pb-8 flex gap-3">
            <button
              className="flex-1 flex items-center justify-center gap-2 py-3.5 rounded-2xl font-bold text-sm text-white"
              style={{
                background: `linear-gradient(135deg, ${accentColor}, ${accentColor}cc)`,
                boxShadow: `0 0 24px ${accentColor}44`,
              }}
            >
              <Play size={16} fill="white" />
              {isChannel ? "Gledaj uživo" : "Gledaj odmah"}
            </button>
            <button
              className="px-5 py-3.5 rounded-2xl text-sm font-semibold text-slate-300 flex-shrink-0"
              style={{ background: "rgba(255,255,255,0.07)", border: "1px solid rgba(255,255,255,0.1)" }}
            >
              + Lista
            </button>
          </div>
        </div>

        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-8 h-8 rounded-full flex items-center justify-center text-slate-400 hover:text-white transition-colors"
          style={{ background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.1)" }}
        >
          <X size={16} />
        </button>
      </div>

      <style>{`
        @keyframes slideUp {
          from { transform: translateY(100%); opacity: 0; }
          to   { transform: translateY(0);    opacity: 1; }
        }
      `}</style>
    </>
  );
}

function generateDescription(title, genre, type) {
  const descriptions = {
    channel: `${title} donosi najaktualnije vijesti, ekskluzivne prijenose i premium sadržaj 24 sata dnevno. Pratite live program i ne propustite ni jedan trenutak.`,
    movie: `${title} je izniman film koji spaja uzbudljivu radnju s dubokim likovima. ${genre ? `Žanr ${genre} ovdje dolazi do punog izražaja kroz` : "Uživajte u"} maestralnoj režiji i nezaboravnim scenama koje vas neće ostaviti ravnodušnima.`,
    series: `${title} je hit serija koja osvaja publiku diljem svijeta. Svaka epizoda donosi novi obrat, dublje razvijene likove i napetu atmosferu koja vas tjera da gledate još.`,
  };
  return descriptions[type] || descriptions.movie;
}