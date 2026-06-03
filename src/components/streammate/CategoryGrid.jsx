import { Play, Star, Tv, ChevronRight } from "lucide-react";

const categories = [
  {
    id: "action",
    label: "Akcija",
    emoji: "💥",
    count: 148,
    color: "#ef4444",
    glow: "rgba(239,68,68,0.3)",
    items: [
      { title: "The Dark Knight", year: 2008, rating: "9.0" },
      { title: "Mad Max: Fury Road", year: 2015, rating: "8.1" },
      { title: "John Wick", year: 2014, rating: "7.4" },
    ],
  },
  {
    id: "scifi",
    label: "Sci-Fi",
    emoji: "🚀",
    count: 97,
    color: "#3b82f6",
    glow: "rgba(59,130,246,0.3)",
    items: [
      { title: "Inception", year: 2010, rating: "8.8" },
      { title: "Interstellar", year: 2014, rating: "8.6" },
      { title: "Dune", year: 2021, rating: "8.0" },
    ],
  },
  {
    id: "drama",
    label: "Drama",
    emoji: "🎭",
    count: 213,
    color: "#8b5cf6",
    glow: "rgba(139,92,246,0.3)",
    items: [
      { title: "Oppenheimer", year: 2023, rating: "8.5" },
      { title: "The Godfather", year: 1972, rating: "9.2" },
      { title: "Schindler's List", year: 1993, rating: "9.0" },
    ],
  },
  {
    id: "thriller",
    label: "Triler",
    emoji: "😱",
    count: 124,
    color: "#f59e0b",
    glow: "rgba(245,158,11,0.3)",
    items: [
      { title: "Se7en", year: 1995, rating: "8.6" },
      { title: "Parasite", year: 2019, rating: "8.5" },
      { title: "Tenet", year: 2020, rating: "7.3" },
    ],
  },
  {
    id: "comedy",
    label: "Komedija",
    emoji: "😂",
    count: 176,
    color: "#10b981",
    glow: "rgba(16,185,129,0.3)",
    items: [
      { title: "The Grand Budapest Hotel", year: 2014, rating: "8.1" },
      { title: "Superbad", year: 2007, rating: "7.6" },
      { title: "Step Brothers", year: 2008, rating: "6.9" },
    ],
  },
  {
    id: "fantasy",
    label: "Fantazija",
    emoji: "🧙",
    count: 89,
    color: "#ec4899",
    glow: "rgba(236,72,153,0.3)",
    items: [
      { title: "LOTR: Fellowship", year: 2001, rating: "8.8" },
      { title: "Harry Potter", year: 2001, rating: "7.6" },
      { title: "The Hobbit", year: 2012, rating: "7.8" },
    ],
  },
];

const seriesCategories = [
  {
    id: "series-drama",
    label: "Drama serije",
    emoji: "🎬",
    count: 94,
    color: "#6366f1",
    glow: "rgba(99,102,241,0.3)",
    items: [
      { title: "Breaking Bad", seasons: "S5", rating: "9.5" },
      { title: "The Crown", seasons: "S6", rating: "8.6" },
      { title: "Succession", seasons: "S4", rating: "8.8" },
    ],
  },
  {
    id: "series-fantasy",
    label: "Fantasy serije",
    emoji: "⚔️",
    count: 61,
    color: "#14b8a6",
    glow: "rgba(20,184,166,0.3)",
    items: [
      { title: "Game of Thrones", seasons: "S8", rating: "9.2" },
      { title: "The Witcher", seasons: "S3", rating: "8.1" },
      { title: "House of the Dragon", seasons: "S2", rating: "8.5" },
    ],
  },
  {
    id: "series-scifi",
    label: "Sci-Fi serije",
    emoji: "🛸",
    count: 53,
    color: "#f97316",
    glow: "rgba(249,115,22,0.3)",
    items: [
      { title: "Stranger Things", seasons: "S4", rating: "8.7" },
      { title: "Black Mirror", seasons: "S6", rating: "8.8" },
      { title: "Dark", seasons: "S3", rating: "8.8" },
    ],
  },
];

function CategoryCard({ cat, onSelect }) {
  return (
    <div
      className="group relative rounded-2xl overflow-hidden cursor-pointer"
      style={{
        background: "rgba(13, 20, 45, 0.6)",
        backdropFilter: "blur(16px)",
        WebkitBackdropFilter: "blur(16px)",
        border: `1px solid rgba(255,255,255,0.08)`,
        transition: "transform 0.25s ease, box-shadow 0.25s ease, border-color 0.25s ease",
      }}
      onMouseEnter={e => {
        e.currentTarget.style.transform = "translateY(-4px)";
        e.currentTarget.style.boxShadow = `0 12px 40px ${cat.glow}`;
        e.currentTarget.style.borderColor = `${cat.color}44`;
      }}
      onMouseLeave={e => {
        e.currentTarget.style.transform = "translateY(0)";
        e.currentTarget.style.boxShadow = "none";
        e.currentTarget.style.borderColor = "rgba(255,255,255,0.08)";
      }}
      onClick={() => onSelect && onSelect(cat.id)}
    >
      {/* Subtle gradient top glow */}
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{ background: `linear-gradient(90deg, transparent, ${cat.color}88, transparent)` }}
      />

      {/* Header */}
      <div className="p-4 pb-3">
        <div className="flex items-start justify-between">
          <div className="flex items-center gap-2">
            <div
              className="w-9 h-9 rounded-xl flex items-center justify-center text-lg flex-shrink-0"
              style={{ background: `${cat.color}22`, border: `1px solid ${cat.color}44` }}
            >
              {cat.emoji}
            </div>
            <div>
              <p className="text-white font-bold text-sm leading-tight">{cat.label}</p>
              <p className="text-xs mt-0.5" style={{ color: "rgba(148,163,184,0.6)" }}>
                {cat.count} naslova
              </p>
            </div>
          </div>
          <ChevronRight
            size={16}
            className="mt-1 transition-transform group-hover:translate-x-1"
            style={{ color: cat.color }}
          />
        </div>
      </div>

      {/* Divider */}
      <div className="mx-4 h-px" style={{ background: "rgba(255,255,255,0.05)" }} />

      {/* Item list */}
      <div className="p-4 pt-3 space-y-2">
        {cat.items.map((item, i) => (
          <div key={i} className="flex items-center justify-between gap-2">
            <div className="flex items-center gap-2 min-w-0">
              <div
                className="w-1 h-1 rounded-full flex-shrink-0"
                style={{ background: cat.color, opacity: 1 - i * 0.25 }}
              />
              <span className="text-xs text-slate-300 truncate">{item.title}</span>
            </div>
            <div className="flex items-center gap-1 flex-shrink-0">
              <Star size={9} style={{ color: cat.color }} fill={cat.color} />
              <span className="text-xs font-semibold" style={{ color: cat.color }}>
                {item.rating}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Play button */}
      <div className="px-4 pb-4">
        <div
          className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold w-full justify-center transition-all group-hover:opacity-100"
          style={{
            background: `${cat.color}18`,
            border: `1px solid ${cat.color}33`,
            color: cat.color,
            opacity: 0.7,
          }}
        >
          <Play size={11} fill={cat.color} />
          Pregledaj sve
        </div>
      </div>
    </div>
  );
}

function CategoryRow({ title, subtitle, accentColor, cats, onSelect }) {
  return (
    <div>
      {/* Row header */}
      <div className="flex items-center justify-between mb-4 px-3 sm:px-6">
        <div>
          <h2 className="text-white text-xl font-bold">{title}</h2>
          <p className="text-slate-500 text-xs mt-0.5">{subtitle}</p>
        </div>
        <button
          className="flex items-center gap-1 text-xs font-medium flex-shrink-0"
          style={{ color: accentColor }}
        >
          Sve <ChevronRight size={14} />
        </button>
      </div>

      {/* Horizontally scrollable row */}
      <div
        className="flex gap-3 overflow-x-auto px-3 sm:px-6 pb-3"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        {cats.map(cat => (
          <div key={cat.id} className="flex-shrink-0" style={{ width: "220px" }}>
            <CategoryCard cat={cat} onSelect={onSelect} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default function CategoryGrid({ onSelect }) {
  return (
    <div className="py-6 space-y-8">
      <CategoryRow
        title="🎬 Kategorije filmova"
        subtitle="Odaberi žanr koji te zanima"
        accentColor="#3b82f6"
        cats={categories}
        onSelect={onSelect}
      />
      <CategoryRow
        title="🎭 Kategorije serija"
        subtitle="TV serije po žanrovima"
        accentColor="#6366f1"
        cats={seriesCategories}
        onSelect={onSelect}
      />
    </div>
  );
}