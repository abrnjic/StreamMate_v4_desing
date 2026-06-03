import { useState } from "react";
import NavBar from "@/components/streammate/NavBar";
import { Play, Star, Search } from "lucide-react";
import { useNavigate } from "react-router-dom";

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

      {/* Search */}
      <div className="px-6 py-4">
        <div
          className="flex items-center gap-2 px-4 py-2.5 rounded-xl"
          style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.08)" }}
        >
          <Search size={16} className="text-slate-400" />
          <input
            className="bg-transparent text-white text-sm flex-1 outline-none placeholder-slate-500"
            placeholder="Pretraži serije..."
            value={search}
            onChange={e => setSearch(e.target.value)}
          />
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
            <div
              key={s.id}
              className="rounded-xl overflow-hidden cursor-pointer group"
              style={{ transition: "transform 0.2s, box-shadow 0.2s" }}
              onMouseEnter={e => {
                e.currentTarget.style.transform = "scale(1.04)";
                e.currentTarget.style.boxShadow = `0 0 24px ${s.color}44`;
              }}
              onMouseLeave={e => {
                e.currentTarget.style.transform = "scale(1)";
                e.currentTarget.style.boxShadow = "none";
              }}
            >
              <div
                className="relative flex items-center justify-center"
                style={{ height: "200px", background: `linear-gradient(160deg, ${s.color}44 0%, #0d1b3e 100%)` }}
              >
                <span className="text-6xl font-black opacity-10 text-white absolute">{s.id}</span>
                <div
                  className="opacity-0 group-hover:opacity-100 transition-opacity absolute inset-0 flex items-center justify-center"
                  style={{ background: "rgba(0,0,0,0.5)" }}
                >
                  <div
                    className="w-12 h-12 rounded-full flex items-center justify-center"
                    style={{ background: "rgba(139,92,246,0.8)", boxShadow: "0 0 20px rgba(139,92,246,0.5)" }}
                  >
                    <Play size={20} fill="white" className="text-white ml-0.5" />
                  </div>
                </div>
                <div className="absolute top-2 right-2 flex items-center gap-1 px-2 py-0.5 rounded-full text-xs font-bold text-white"
                  style={{ background: "rgba(0,0,0,0.6)", backdropFilter: "blur(8px)" }}>
                  <Star size={10} fill="#fbbf24" className="text-yellow-400" /> {s.rating}
                </div>
                <div
                  className="absolute top-2 left-2 text-xs font-bold px-2 py-0.5 rounded-full"
                  style={{
                    background: s.status === "U tijeku" ? "rgba(59,130,246,0.2)" : "rgba(255,255,255,0.1)",
                    color: s.status === "U tijeku" ? "#60a5fa" : "#94a3b8",
                    border: s.status === "U tijeku" ? "1px solid rgba(59,130,246,0.3)" : "1px solid rgba(255,255,255,0.1)",
                  }}
                >
                  {s.status === "U tijeku" ? "● NOVO" : "✓"}
                </div>
              </div>
              <div className="p-2.5" style={{ background: "rgba(10,16,40,0.95)" }}>
                <p className="text-white text-xs font-semibold truncate">{s.title}</p>
                <div className="flex items-center justify-between mt-1">
                  <span className="text-slate-400 text-xs">S{s.seasons} · {s.episodes}ep</span>
                  <span className="text-xs px-1.5 py-0.5 rounded font-medium"
                    style={{ background: `${s.color}22`, color: s.color }}>
                    {s.genre}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}