import { useState } from "react";
import NavBar from "@/components/streammate/NavBar";
import { Play, Star, Filter, Search, ChevronDown } from "lucide-react";
import { useNavigate } from "react-router-dom";

const genres = ["Sve", "Akcija", "Drama", "Komedija", "Sci-Fi", "Thriller", "Horror", "Romantika", "Animacija"];

const movies = [
  { id: 1, title: "Inception", year: 2010, rating: 8.8, genre: "Sci-Fi", duration: "2h 28min", color: "#3b82f6" },
  { id: 2, title: "The Dark Knight", year: 2008, rating: 9.0, genre: "Akcija", duration: "2h 32min", color: "#6366f1" },
  { id: 3, title: "Interstellar", year: 2014, rating: 8.6, genre: "Sci-Fi", duration: "2h 49min", color: "#8b5cf6" },
  { id: 4, title: "Oppenheimer", year: 2023, rating: 8.5, genre: "Drama", duration: "3h 0min", color: "#ec4899" },
  { id: 5, title: "Tenet", year: 2020, rating: 7.3, genre: "Thriller", duration: "2h 30min", color: "#10b981" },
  { id: 6, title: "Avatar: The Way", year: 2022, rating: 7.6, genre: "Sci-Fi", duration: "3h 12min", color: "#f59e0b" },
  { id: 7, title: "Top Gun: Maverick", year: 2022, rating: 8.3, genre: "Akcija", duration: "2h 11min", color: "#ef4444" },
  { id: 8, title: "The Batman", year: 2022, rating: 7.8, genre: "Akcija", duration: "2h 56min", color: "#4f46e5" },
  { id: 9, title: "Dune Part Two", year: 2024, rating: 8.5, genre: "Sci-Fi", duration: "2h 46min", color: "#d97706" },
  { id: 10, title: "Poor Things", year: 2023, rating: 7.9, genre: "Drama", duration: "2h 21min", color: "#14b8a6" },
  { id: 11, title: "Killers of the Flower Moon", year: 2023, rating: 7.7, genre: "Drama", duration: "3h 26min", color: "#f97316" },
  { id: 12, title: "Past Lives", year: 2023, rating: 7.9, genre: "Romantika", duration: "1h 45min", color: "#a855f7" },
];

const featured = movies[0];

export default function Movies() {
  const navigate = useNavigate();
  const [activeGenre, setActiveGenre] = useState("Sve");
  const [search, setSearch] = useState("");

  const handleNav = (id) => {
    if (id === "live") navigate("/live-tv");
    else if (id === "series") navigate("/series");
    else if (id === "movies") return;
    else navigate("/home");
  };

  const filtered = movies.filter(m => {
    const matchGenre = activeGenre === "Sve" || m.genre === activeGenre;
    const matchSearch = m.title.toLowerCase().includes(search.toLowerCase());
    return matchGenre && matchSearch;
  });

  return (
    <div className="min-h-screen" style={{ background: "linear-gradient(180deg, #060a18 0%, #080c20 100%)" }}>
      <NavBar active="movies" onSelect={handleNav} />

      {/* Featured hero */}
      <div
        className="relative w-full overflow-hidden"
        style={{ height: "340px" }}
      >
        <div
          className="absolute inset-0"
          style={{
            background: `linear-gradient(135deg, ${featured.color}44 0%, #060a18 70%)`,
          }}
        />
        <div className="absolute inset-0" style={{ background: "linear-gradient(to top, #060a18 0%, transparent 60%)" }} />
        <div className="absolute inset-0 flex flex-col justify-end p-8">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-xs font-bold px-2 py-1 rounded text-white" style={{ background: "#ef4444" }}>PREPORUČENO</span>
            <span className="text-xs text-slate-400">{featured.duration}</span>
          </div>
          <h1 className="text-5xl font-black text-white mb-1">{featured.title}</h1>
          <div className="flex items-center gap-3 mb-5">
            <span className="text-yellow-400 flex items-center gap-1 text-sm font-bold">
              <Star size={14} fill="currentColor" /> {featured.rating}
            </span>
            <span className="text-slate-400 text-sm">{featured.year}</span>
            <span className="text-slate-400 text-sm">{featured.genre}</span>
          </div>
          <div className="flex gap-3">
            <button
              className="flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-sm text-white"
              style={{ background: "linear-gradient(135deg, #3b82f6, #6366f1)", boxShadow: "0 0 20px rgba(99,102,241,0.4)" }}
            >
              <Play size={16} fill="white" /> Gledaj odmah
            </button>
            <button
              className="px-5 py-3 rounded-xl text-sm font-semibold text-white"
              style={{ background: "rgba(255,255,255,0.1)", border: "1px solid rgba(255,255,255,0.15)" }}
            >
              + Dodaj u liste
            </button>
          </div>
        </div>
      </div>

      {/* Search + Filter bar */}
      <div className="px-6 py-4 flex items-center gap-4">
        <div
          className="flex-1 flex items-center gap-2 px-4 py-2.5 rounded-xl"
          style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.08)" }}
        >
          <Search size={16} className="text-slate-400" />
          <input
            className="bg-transparent text-white text-sm flex-1 outline-none placeholder-slate-500"
            placeholder="Pretraži filmove..."
            value={search}
            onChange={e => setSearch(e.target.value)}
          />
        </div>
        <button
          className="flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm text-slate-300"
          style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.08)" }}
        >
          <Filter size={15} /> Filtriraj <ChevronDown size={14} />
        </button>
      </div>

      {/* Genre tabs */}
      <div className="px-6 mb-6 flex gap-2 overflow-x-auto" style={{ scrollbarWidth: "none" }}>
        {genres.map(g => (
          <button
            key={g}
            onClick={() => setActiveGenre(g)}
            className="flex-shrink-0 px-4 py-1.5 rounded-full text-sm font-medium transition-all"
            style={{
              background: activeGenre === g ? "linear-gradient(135deg, #3b82f6, #6366f1)" : "rgba(255,255,255,0.06)",
              color: activeGenre === g ? "white" : "rgba(148,163,184,0.8)",
              border: activeGenre === g ? "none" : "1px solid rgba(255,255,255,0.06)",
              boxShadow: activeGenre === g ? "0 0 16px rgba(99,102,241,0.3)" : "none",
            }}
          >
            {g}
          </button>
        ))}
      </div>

      {/* Movie grid */}
      <div className="px-6 pb-10">
        <p className="text-slate-400 text-sm mb-4">{filtered.length} filmova</p>
        <div className="grid gap-4" style={{ gridTemplateColumns: "repeat(auto-fill, minmax(140px, 1fr))" }}>
          {filtered.map(movie => (
            <div
              key={movie.id}
              className="rounded-xl overflow-hidden cursor-pointer group"
              style={{ transition: "transform 0.2s, box-shadow 0.2s" }}
              onMouseEnter={e => {
                e.currentTarget.style.transform = "scale(1.05)";
                e.currentTarget.style.boxShadow = `0 0 24px ${movie.color}44`;
              }}
              onMouseLeave={e => {
                e.currentTarget.style.transform = "scale(1)";
                e.currentTarget.style.boxShadow = "none";
              }}
            >
              {/* Poster */}
              <div
                className="relative flex items-center justify-center"
                style={{
                  height: "200px",
                  background: `linear-gradient(160deg, ${movie.color}44 0%, #0d1b3e 100%)`,
                }}
              >
                <span className="text-6xl font-black opacity-15 text-white absolute">{movie.id}</span>
                <div
                  className="opacity-0 group-hover:opacity-100 transition-opacity absolute inset-0 flex items-center justify-center"
                  style={{ background: "rgba(0,0,0,0.5)" }}
                >
                  <div
                    className="w-12 h-12 rounded-full flex items-center justify-center"
                    style={{ background: "rgba(59,130,246,0.8)", boxShadow: "0 0 20px rgba(59,130,246,0.5)" }}
                  >
                    <Play size={20} fill="white" className="text-white ml-0.5" />
                  </div>
                </div>
                <div className="absolute top-2 right-2 flex items-center gap-1 px-2 py-0.5 rounded-full text-xs font-bold text-white"
                  style={{ background: "rgba(0,0,0,0.6)", backdropFilter: "blur(8px)" }}>
                  <Star size={10} fill="#fbbf24" className="text-yellow-400" />
                  {movie.rating}
                </div>
              </div>
              {/* Info */}
              <div className="p-2.5" style={{ background: "rgba(10,16,40,0.95)" }}>
                <p className="text-white text-xs font-semibold truncate">{movie.title}</p>
                <div className="flex items-center justify-between mt-1">
                  <span className="text-slate-400 text-xs">{movie.year}</span>
                  <span className="text-xs px-1.5 py-0.5 rounded font-medium"
                    style={{ background: `${movie.color}22`, color: movie.color }}>
                    {movie.genre}
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