import { useState } from "react";
import NavBar from "@/components/streammate/NavBar";
import { Play, Star, Search } from "lucide-react";
import { useNavigate } from "react-router-dom";
import DetailPanel from "@/components/streammate/DetailPanel";
import VideoPreviewCard from "@/components/streammate/VideoPreviewCard";

const genres = ["Sve", "Drama", "Thriller", "Komedija", "Sci-Fi", "Kriminalistika", "Fantazija", "Dokumentarac"];

const series = [
  { id: 1, title: "Breaking Bad", seasons: 5, episodes: 62, rating: 9.5, genre: "Drama", status: "Završena", color: "#10b981" },
  { id: 2, title: "Game of Thrones", seasons: 8, episodes: 73, rating: 9.2, genre: "Fantazija", status: "Završena", color: "#f59e0b" },
  { id: 3, title: "The Crown", seasons: 6, episodes: 60, rating: 8.6, genre: "Drama", status: "Završena", color: "#8b5cf6" },
  { id: 4, title: "Stranger Things", seasons: 4, episodes: 34, rating: 8.7, genre: "Sci-Fi", status: "U tijeku", color: "#ef4444" },
  { id: 5, title: "Succession", seasons: 4, episodes: 39, rating: 8.8, genre: "Drama", status: "Završena", color: "#3b82f6" },
  { id: 6, title: "The Last of Us", seasons: 2, episodes: 17, rating: 8.8, genre: "Drama", status: "U tijeku", color: "#84cc16" },
  { id: 7, title: "House of the Dragon", seasons: 2, episodes: 18, rating: 8.4, genre: "Fantazija", status: "U tijeku", color: "#dc2626" },
  { id: 8, title: "Peaky Blinders", seasons: 6, episodes: 36, rating: 8.8, genre: "Kriminalistika", status: "Završena", color: "#6366f1" },
  { id: 9, title: "Ozark", seasons: 4, episodes: 44, rating: 8.5, genre: "Thriller", status: "Završena", color: "#0891b2" },
  { id: 10, title: "Severance", seasons: 2, episodes: 19, rating: 8.7, genre: "Thriller", status: "U tijeku", color: "#ec4899" },
  { id: 11, title: "The Bear", seasons: 3, episodes: 28, rating: 8.6, genre: "Drama", status: "U tijeku", color: "#f97316" },
  { id: 12, title: "Squid Game", seasons: 2, episodes: 17, rating: 8.0, genre: "Thriller", status: "U tijeku", color: "#e11d48" },
];

const featured = series[0];

export default function Series() {
  const navigate = useNavigate();
  const [activeGenre, setActiveGenre] = useState("Sve");
  const [search, setSearch] = useState("");
  const [selected, setSelected] = useState(null);

  const handleNav = (id) => {
    if (id === "live") navigate("/live-tv");
    else if (id === "movies") navigate("/movies");
    else if (id === "series") return;
    else navigate("/home");
  };

  const filtered = series.filter(s => {
    const matchGenre = activeGenre === "Sve" || s.genre === activeGenre;
    const matchSearch = s.title.toLowerCase().includes(search.toLowerCase());
    return matchGenre && matchSearch;
  });

  return (
    <div className="min-h-screen" style={{ background: "linear-gradient(180deg, #060a18 0%, #080c20 100%)" }}>
      <NavBar active="series" onSelect={handleNav} />

      {/* Featured hero */}
      <div className="relative w-full overflow-hidden" style={{ height: "320px" }}>
        <div className="absolute inset-0" style={{ background: `linear-gradient(135deg, ${featured.color}44 0%, #060a18 70%)` }} />
        <div className="absolute inset-0" style={{ background: "linear-gradient(to top, #060a18 0%, transparent 60%)" }} />
        <div className="absolute inset-0 flex flex-col justify-end p-8">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-xs font-bold px-2 py-1 rounded text-white" style={{ background: "#8b5cf6" }}>TOP SERIJA</span>
            <span className="text-xs text-slate-400">{featured.seasons} sezone · {featured.episodes} epizoda</span>
          </div>
          <h1 className="text-5xl font-black text-white mb-1">{featured.title}</h1>
          <div className="flex items-center gap-3 mb-5">
            <span className="text-yellow-400 flex items-center gap-1 text-sm font-bold">
              <Star size={14} fill="currentColor" /> {featured.rating}
            </span>
            <span className="text-slate-400 text-sm">{featured.genre}</span>
            <span
              className="text-xs px-2 py-0.5 rounded-full font-medium"
              style={{ background: "rgba(16,185,129,0.15)", color: "#10b981", border: "1px solid rgba(16,185,129,0.3)" }}
            >
              {featured.status}
            </span>
          </div>
          <div className="flex gap-3">
            <button
              className="flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-sm text-white"
              style={{ background: "linear-gradient(135deg, #8b5cf6, #6366f1)", boxShadow: "0 0 20px rgba(139,92,246,0.4)" }}
            >
              <Play size={16} fill="white" /> Gledaj S1E1
            </button>
            <button
              className="px-5 py-3 rounded-xl text-sm font-semibold text-white"
              style={{ background: "rgba(255,255,255,0.1)", border: "1px solid rgba(255,255,255,0.15)" }}
            >
              Sve epizode
            </button>
          </div>
        </div>
      </div>

      {/* Search bar — glassmorphism sticky */}
      <div
        className="sticky z-20 px-4 sm:px-6 py-3"
        style={{
          top: 0,
          background: "rgba(6,10,24,0.65)",
          backdropFilter: "blur(24px)",
          WebkitBackdropFilter: "blur(24px)",
          borderBottom: "1px solid rgba(255,255,255,0.06)",
        }}
      >
        <div
          className="flex items-center gap-3 px-4 py-3 rounded-2xl transition-all duration-300"
          style={{
            background: "rgba(255,255,255,0.05)",
            backdropFilter: "blur(12px)",
            WebkitBackdropFilter: "blur(12px)",
            border: "1px solid rgba(255,255,255,0.08)",
          }}
          onFocusCapture={e => {
            e.currentTarget.style.borderColor = "rgba(139,92,246,0.5)";
            e.currentTarget.style.boxShadow = "0 0 0 1px rgba(139,92,246,0.3), 0 0 24px rgba(139,92,246,0.15)";
          }}
          onBlurCapture={e => {
            e.currentTarget.style.borderColor = "rgba(255,255,255,0.08)";
            e.currentTarget.style.boxShadow = "none";
          }}
        >
          <Search size={16} className="text-slate-400 flex-shrink-0" />
          <input
            className="bg-transparent text-white text-sm flex-1 outline-none placeholder-slate-500"
            placeholder="Pretraži serije..."
            value={search}
            onChange={e => setSearch(e.target.value)}
          />
          {search && (
            <button
              onClick={() => setSearch("")}
              className="text-slate-500 hover:text-slate-300 transition-colors text-xs flex-shrink-0"
            >
              ✕
            </button>
          )}
        </div>
      </div>

      {/* Genre tabs */}
      <div className="px-6 mb-6 flex gap-2 overflow-x-auto" style={{ scrollbarWidth: "none" }}>
        {genres.map(g => (
          <button
            key={g}
            onClick={() => setActiveGenre(g)}
            className="flex-shrink-0 px-4 py-1.5 rounded-full text-sm font-medium transition-all"
            style={{
              background: activeGenre === g ? "linear-gradient(135deg, #8b5cf6, #6366f1)" : "rgba(255,255,255,0.06)",
              color: activeGenre === g ? "white" : "rgba(148,163,184,0.8)",
              border: activeGenre === g ? "none" : "1px solid rgba(255,255,255,0.06)",
              boxShadow: activeGenre === g ? "0 0 16px rgba(139,92,246,0.3)" : "none",
            }}
          >
            {g}
          </button>
        ))}
      </div>

      {/* Series grid */}
      <div className="px-6 pb-10">
        <p className="text-slate-400 text-sm mb-4">{filtered.length} serija</p>
        <div className="grid gap-4" style={{ gridTemplateColumns: "repeat(auto-fill, minmax(155px, 1fr))" }}>
          {filtered.map(s => (
            <VideoPreviewCard
              key={s.id}
              item={s}
              type="series"
              onClick={() => setSelected(s)}
            />
          ))}
        </div>
      </div>

      {selected && (
        <DetailPanel item={selected} type="series" onClose={() => setSelected(null)} />
      )}
    </div>
  );
}