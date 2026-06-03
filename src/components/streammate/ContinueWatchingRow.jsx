import { useState } from "react";
import { Play, X, Clock } from "lucide-react";
import DetailPanel from "@/components/streammate/DetailPanel";

// Demo data — u produkciji bi dolazilo iz korisničkog profila/backenda
const continueItems = [
  {
    id: 1,
    title: "Inception",
    type: "movie",
    genre: "Sci-Fi",
    year: 2010,
    rating: "8.8",
    progress: 42,
    timeLeft: "1h 14min ostalo",
    resumeAt: "1:08:30",
    color: "#3b82f6",
    description: "Dom Cobb je iskusni lopov koji krade tajne iz dubina podsvijesti, dok čovjek spava. No, sada mu je ponuđen nemoguć zadatak — usaditi ideju umjesto ukrasti je.",
  },
  {
    id: 2,
    title: "Breaking Bad",
    type: "series",
    genre: "Drama",
    seasons: 5,
    episodes: 62,
    rating: "9.5",
    progress: 68,
    timeLeft: "S3 E7 · 22min ostalo",
    resumeAt: "S03E07 – 22:10",
    color: "#10b981",
    description: "Walter White, kemijski profesor obolio od raka, počinje kuhati metamfetamin kako bi osigurao financijsku budućnost svoje obitelji.",
  },
  {
    id: 3,
    title: "Dune",
    type: "movie",
    genre: "Sci-Fi",
    year: 2021,
    rating: "8.0",
    progress: 25,
    timeLeft: "2h 14min ostalo",
    resumeAt: "44:00",
    color: "#f59e0b",
    description: "Paul Atreides, mladi i nadareni čovjek, putuje na najopasniji planet u svemiru kako bi zaštitio svoju obitelj i narod.",
  },
  {
    id: 4,
    title: "Stranger Things",
    type: "series",
    genre: "Sci-Fi",
    seasons: 4,
    episodes: 42,
    rating: "8.7",
    progress: 85,
    timeLeft: "S4 E9 · 35min ostalo",
    resumeAt: "S04E09 – 12:40",
    color: "#8b5cf6",
    description: "Grupa prijatelja u gradu Hawkins otkriva mračne tajne i nadnaravne sile koje prijete njihovom svijetu.",
  },
  {
    id: 5,
    title: "Oppenheimer",
    type: "movie",
    genre: "Drama",
    year: 2023,
    rating: "8.5",
    progress: 55,
    timeLeft: "1h 25min ostalo",
    resumeAt: "1:45:00",
    color: "#ef4444",
    description: "Priča o J. Robertu Oppenheimeru i razvoju prve nuklearne bombe za vrijeme Drugog svjetskog rata.",
  },
];

function ContinueCard({ item, onRemove, onSelect }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="flex-shrink-0 rounded-2xl overflow-hidden cursor-pointer"
      style={{
        width: "240px",
        background: "rgba(13,20,45,0.85)",
        border: `1px solid ${hovered ? item.color + "44" : "rgba(255,255,255,0.07)"}`,
        boxShadow: hovered ? `0 0 28px ${item.color}33` : "none",
        transition: "border-color 0.25s, box-shadow 0.25s, transform 0.25s",
        transform: hovered ? "translateY(-3px)" : "translateY(0)",
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={() => onSelect(item)}
    >
      {/* Thumbnail area */}
      <div
        className="relative"
        style={{
          height: "130px",
          background: `linear-gradient(135deg, ${item.color}33 0%, #060a18 100%)`,
        }}
      >
        {/* Big letter watermark */}
        <span
          className="absolute right-3 top-2 font-black select-none"
          style={{ fontSize: "80px", lineHeight: 1, color: `${item.color}18` }}
        >
          {item.title[0]}
        </span>

        {/* Play overlay */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div
            className="w-12 h-12 rounded-full flex items-center justify-center transition-all"
            style={{
              background: hovered ? item.color : "rgba(0,0,0,0.55)",
              backdropFilter: "blur(8px)",
              border: `2px solid ${hovered ? "transparent" : item.color + "66"}`,
              boxShadow: hovered ? `0 0 20px ${item.color}88` : "none",
              transition: "background 0.2s, box-shadow 0.2s",
            }}
          >
            <Play size={18} fill="white" className="text-white ml-0.5" />
          </div>
        </div>

        {/* Type badge */}
        <div
          className="absolute top-2 left-2 px-2 py-0.5 rounded-full text-xs font-bold"
          style={{
            background: item.type === "movie" ? "rgba(59,130,246,0.2)" : "rgba(139,92,246,0.2)",
            color: item.type === "movie" ? "#60a5fa" : "#a78bfa",
            border: item.type === "movie" ? "1px solid rgba(59,130,246,0.3)" : "1px solid rgba(139,92,246,0.3)",
          }}
        >
          {item.type === "movie" ? "Film" : "Serija"}
        </div>

        {/* Remove button */}
        <button
          onClick={e => { e.stopPropagation(); onRemove(item.id); }}
          className="absolute top-2 right-2 w-6 h-6 rounded-full flex items-center justify-center transition-all"
          style={{
            background: "rgba(0,0,0,0.6)",
            border: "1px solid rgba(255,255,255,0.1)",
            color: "rgba(148,163,184,0.7)",
            opacity: hovered ? 1 : 0,
            transition: "opacity 0.2s",
          }}
        >
          <X size={11} />
        </button>

        {/* Progress bar */}
        <div
          className="absolute bottom-0 left-0 right-0"
          style={{ height: "3px", background: "rgba(255,255,255,0.08)" }}
        >
          <div
            style={{
              height: "100%",
              width: `${item.progress}%`,
              background: `linear-gradient(90deg, ${item.color}, ${item.color}cc)`,
              boxShadow: `0 0 6px ${item.color}88`,
              transition: "width 0.3s ease",
            }}
          />
        </div>
      </div>

      {/* Info */}
      <div className="p-3">
        <p className="text-white text-sm font-semibold truncate">{item.title}</p>
        <div className="flex items-center gap-1.5 mt-1">
          <Clock size={11} className="flex-shrink-0" style={{ color: item.color }} />
          <p className="text-xs truncate" style={{ color: "rgba(148,163,184,0.7)" }}>
            {item.timeLeft}
          </p>
        </div>

        {/* Resume CTA */}
        <div
          className="mt-2.5 flex items-center justify-between px-2.5 py-1.5 rounded-lg text-xs font-semibold"
          style={{
            background: `${item.color}18`,
            border: `1px solid ${item.color}33`,
            color: item.color,
          }}
        >
          <span>Nastavi od {item.resumeAt}</span>
          <Play size={10} fill={item.color} />
        </div>
      </div>
    </div>
  );
}

export default function ContinueWatchingRow() {
  const [items, setItems] = useState(continueItems);
  const [selected, setSelected] = useState(null);

  const handleRemove = (id) => {
    setItems(prev => prev.filter(i => i.id !== id));
  };

  if (items.length === 0) {
    return (
      <div
        className="flex items-center justify-center py-8 rounded-2xl text-slate-500 text-sm"
        style={{ background: "rgba(255,255,255,0.03)", border: "1px dashed rgba(255,255,255,0.07)" }}
      >
        Nema nedovršenog sadržaja
      </div>
    );
  }

  return (
    <>
      <div
        className="flex gap-3 overflow-x-auto pb-2"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        {items.map(item => (
          <ContinueCard
            key={item.id}
            item={item}
            onRemove={handleRemove}
            onSelect={setSelected}
          />
        ))}
      </div>

      {selected && (
        <DetailPanel
          item={selected}
          type={selected.type === "movie" ? "movie" : "series"}
          onClose={() => setSelected(null)}
        />
      )}
    </>
  );
}