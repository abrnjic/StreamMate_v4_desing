import { useState } from "react";
import { Play, Star, Sparkles } from "lucide-react";
import DetailPanel from "@/components/streammate/DetailPanel";

// Combine movies and series, sorted by year descending (newest first)
const movies = [
  { id: 101, title: "Dune Part Two", year: 2024, rating: 8.5, genre: "Sci-Fi", duration: "2h 46min", color: "#d97706", _type: "movie" },
  { id: 102, title: "Poor Things", year: 2023, rating: 7.9, genre: "Drama", duration: "2h 21min", color: "#14b8a6", _type: "movie" },
  { id: 103, title: "Oppenheimer", year: 2023, rating: 8.5, genre: "Drama", duration: "3h 0min", color: "#ec4899", _type: "movie" },
  { id: 104, title: "Killers of the Flower Moon", year: 2023, rating: 7.7, genre: "Drama", duration: "3h 26min", color: "#f97316", _type: "movie" },
  { id: 105, title: "Past Lives", year: 2023, rating: 7.9, genre: "Romantika", duration: "1h 45min", color: "#a855f7", _type: "movie" },
];

const series = [
  { id: 201, title: "Shogun", year: 2024, rating: 9.0, genre: "Drama", seasons: 1, episodes: 10, color: "#ef4444", _type: "series" },
  { id: 202, title: "The Bear S3", year: 2024, rating: 8.6, genre: "Drama", seasons: 3, episodes: 10, color: "#f59e0b", _type: "series" },
  { id: 203, title: "House of the Dragon S2", year: 2024, rating: 8.2, genre: "Fantazija", seasons: 2, episodes: 8, color: "#dc2626", _type: "series" },
  { id: 204, title: "The Last of Us S2", year: 2025, rating: 8.8, genre: "Drama", seasons: 2, episodes: 7, color: "#16a34a", _type: "series" },
  { id: 205, title: "Severance S2", year: 2025, rating: 9.1, genre: "Sci-Fi", seasons: 2, episodes: 10, color: "#6366f1", _type: "series" },
];

const newArrivals = [...movies, ...series].sort((a, b) => b.year - a.year);

function NewArrivalCard({ item, onClick }) {
  const isMovie = item._type === "movie";

  return (
    <div
      className="flex-shrink-0 relative rounded-xl overflow-hidden cursor-pointer group"
      style={{
        width: "140px",
        transition: "transform 0.2s, box-shadow 0.2s",
      }}
      onMouseEnter={e => {
        e.currentTarget.style.transform = "scale(1.04)";
        e.currentTarget.style.boxShadow = `0 0 28px ${item.color}55`;
      }}
      onMouseLeave={e => {
        e.currentTarget.style.transform = "scale(1)";
        e.currentTarget.style.boxShadow = "none";
      }}
      onClick={() => onClick(item)}
    >
      {/* Poster */}
      <div
        className="relative flex items-center justify-center"
        style={{
          height: "200px",
          background: `linear-gradient(160deg, ${item.color}44 0%, #0d1b3e 100%)`,
          border: `1px solid ${item.color}22`,
          borderRadius: "12px 12px 0 0",
        }}
      >
        {/* Background number decoration */}
        <span
          className="absolute font-black select-none"
          style={{ fontSize: "80px", color: `${item.color}18`, lineHeight: 1, top: "10px", right: "8px" }}
        >
          {item.id % 100}
        </span>

        {/* Play overlay */}
        <div
          className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
          style={{ background: "rgba(0,0,0,0.5)" }}
        >
          <div
            className="w-11 h-11 rounded-full flex items-center justify-center"
            style={{ background: `${item.color}cc`, boxShadow: `0 0 20px ${item.color}88` }}
          >
            <Play size={18} fill="white" className="text-white ml-0.5" />
          </div>
        </div>

        {/* NEW badge */}
        <div
          className="absolute top-2 left-2 flex items-center gap-1 px-1.5 py-0.5 rounded-md text-xs font-bold"
          style={{ background: "rgba(99,102,241,0.85)", color: "white", backdropFilter: "blur(8px)" }}
        >
          <Sparkles size={9} />
          NOVO
        </div>

        {/* Year badge */}
        <div
          className="absolute top-2 right-2 px-1.5 py-0.5 rounded-md text-xs font-bold"
          style={{ background: "rgba(0,0,0,0.65)", color: "rgba(255,255,255,0.8)", backdropFilter: "blur(8px)" }}
        >
          {item.year}
        </div>

        {/* Rating bottom left */}
        <div
          className="absolute bottom-2 left-2 flex items-center gap-1 px-1.5 py-0.5 rounded-full text-xs font-bold"
          style={{ background: "rgba(0,0,0,0.65)", backdropFilter: "blur(8px)" }}
        >
          <Star size={9} fill="#fbbf24" className="text-yellow-400" />
          <span className="text-white">{item.rating}</span>
        </div>

        {/* Type badge bottom right */}
        <div
          className="absolute bottom-2 right-2 px-1.5 py-0.5 rounded-md text-xs font-semibold"
          style={{ background: `${item.color}33`, color: item.color, border: `1px solid ${item.color}44` }}
        >
          {isMovie ? "Film" : "Serija"}
        </div>
      </div>

      {/* Info */}
      <div
        className="p-2.5"
        style={{
          background: "rgba(10,16,40,0.95)",
          border: `1px solid ${item.color}18`,
          borderTop: "none",
          borderRadius: "0 0 12px 12px",
        }}
      >
        <p className="text-white text-xs font-semibold truncate">{item.title}</p>
        <p className="text-slate-500 text-xs mt-0.5 truncate">
          {item.genre} · {isMovie ? item.duration : `${item.seasons} sez.`}
        </p>
      </div>
    </div>
  );
}

export default function NewArrivalsRow() {
  const [selected, setSelected] = useState(null);

  return (
    <>
      <div className="flex gap-4 overflow-x-auto pb-2" style={{ scrollbarWidth: "none" }}>
        {newArrivals.map(item => (
          <NewArrivalCard key={`${item._type}-${item.id}`} item={item} onClick={setSelected} />
        ))}
      </div>

      {selected && (
        <DetailPanel
          item={selected}
          type={selected._type}
          onClose={() => setSelected(null)}
        />
      )}
    </>
  );
}