import { useState } from "react";
import { Heart, Play, Star, Trash2 } from "lucide-react";
import { useFavorites } from "@/hooks/useFavorites";
import DetailPanel from "@/components/streammate/DetailPanel";

export default function FavoritesRow() {
  const { favorites, toggleFavorite } = useFavorites();
  const [selected, setSelected] = useState(null);

  if (favorites.length === 0) {
    return (
      <div
        className="flex flex-col items-center justify-center py-10 rounded-2xl"
        style={{
          background: "rgba(255,255,255,0.03)",
          border: "1px dashed rgba(255,255,255,0.08)",
        }}
      >
        <div
          className="w-12 h-12 rounded-full flex items-center justify-center mb-3"
          style={{ background: "rgba(239,68,68,0.1)", border: "1px solid rgba(239,68,68,0.15)" }}
        >
          <Heart size={20} style={{ color: "rgba(239,68,68,0.5)" }} />
        </div>
        <p className="text-slate-400 text-sm font-medium">Nema omiljenih</p>
        <p className="text-slate-600 text-xs mt-1">Dodaj filmove i serije pritiskom na ❤ ikonu</p>
      </div>
    );
  }

  return (
    <>
      <div className="flex gap-4 overflow-x-auto pb-2" style={{ scrollbarWidth: "none" }}>
        {favorites.map(item => {
          const type = item._type;
          return (
            <div
              key={`${type}-${item.id}`}
              className="flex-shrink-0 relative rounded-xl overflow-hidden cursor-pointer group"
              style={{
                width: "130px",
                transition: "transform 0.2s, box-shadow 0.2s",
              }}
              onMouseEnter={e => {
                e.currentTarget.style.transform = "scale(1.04)";
                e.currentTarget.style.boxShadow = `0 0 24px ${item.color}55`;
              }}
              onMouseLeave={e => {
                e.currentTarget.style.transform = "scale(1)";
                e.currentTarget.style.boxShadow = "none";
              }}
              onClick={() => setSelected({ item, type })}
            >
              {/* Poster */}
              <div
                className="relative flex items-center justify-center"
                style={{
                  height: "180px",
                  background: `linear-gradient(160deg, ${item.color}44 0%, #0d1b3e 100%)`,
                }}
              >
                <span className="text-5xl font-black text-white select-none" style={{ opacity: 0.12 }}>{item.id}</span>

                {/* Play overlay */}
                <div
                  className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
                  style={{ background: "rgba(0,0,0,0.5)" }}
                >
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center"
                    style={{ background: `${item.color}cc`, boxShadow: `0 0 16px ${item.color}88` }}
                  >
                    <Play size={16} fill="white" className="text-white ml-0.5" />
                  </div>
                </div>

                {/* Type badge */}
                <div
                  className="absolute top-2 left-2 text-xs font-bold px-1.5 py-0.5 rounded"
                  style={{ background: "rgba(0,0,0,0.6)", color: item.color, backdropFilter: "blur(8px)" }}
                >
                  {type === "movie" ? "Film" : "Serija"}
                </div>

                {/* Rating */}
                <div
                  className="absolute top-2 right-2 flex items-center gap-1 px-1.5 py-0.5 rounded-full text-xs font-bold text-white"
                  style={{ background: "rgba(0,0,0,0.6)", backdropFilter: "blur(8px)" }}
                >
                  <Star size={9} fill="#fbbf24" className="text-yellow-400" />
                  {item.rating}
                </div>

                {/* Remove from favorites */}
                <button
                  className="absolute bottom-2 right-2 w-7 h-7 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
                  style={{ background: "rgba(239,68,68,0.2)", border: "1px solid rgba(239,68,68,0.3)" }}
                  onClick={e => { e.stopPropagation(); toggleFavorite(item, type); }}
                >
                  <Trash2 size={12} style={{ color: "#ef4444" }} />
                </button>
              </div>

              {/* Info */}
              <div className="p-2" style={{ background: "rgba(10,16,40,0.95)" }}>
                <p className="text-white text-xs font-semibold truncate">{item.title}</p>
                <p className="text-slate-500 text-xs mt-0.5 truncate">{item.genre}</p>
              </div>
            </div>
          );
        })}
      </div>

      {selected && (
        <DetailPanel
          item={selected.item}
          type={selected.type}
          onClose={() => setSelected(null)}
        />
      )}
    </>
  );
}