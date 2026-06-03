import { useState, useRef } from "react";
import { Play, Star, Volume2, VolumeX, Heart } from "lucide-react";
import { useFavorites } from "@/hooks/useFavorites";

/**
 * VideoPreviewCard — kartica s video preview-om na hover.
 * Props:
 *   item    — film/serija objekt
 *   type    — "movie" | "series"
 *   onClick — fn za otvaranje DetailPanel
 */
export default function VideoPreviewCard({ item, type, onClick }) {
  const [hovered, setHovered] = useState(false);
  const [videoReady, setVideoReady] = useState(false);
  const [muted, setMuted] = useState(true);
  const hoverTimer = useRef(null);
  const videoRef = useRef(null);
  const { isFavorite, toggleFavorite } = useFavorites();

  // Demo video sources per genre/color — u produkciji bi ovo bili pravi trailer URLovi
  const demoVideos = [
    "https://www.w3schools.com/html/mov_bbb.mp4",
    "https://www.w3schools.com/html/movie.mp4",
  ];
  const videoSrc = demoVideos[item.id % demoVideos.length];

  const handleMouseEnter = () => {
    hoverTimer.current = setTimeout(() => {
      setHovered(true);
      setVideoReady(false);
      if (videoRef.current) {
        videoRef.current.currentTime = 0;
        videoRef.current.play().catch(() => {});
      }
    }, 600); // 600ms delay prije pokretanja
  };

  const handleMouseLeave = () => {
    clearTimeout(hoverTimer.current);
    setHovered(false);
    setVideoReady(false);
    setMuted(true);
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  };

  const toggleMute = (e) => {
    e.stopPropagation();
    if (videoRef.current) {
      videoRef.current.muted = !muted;
      setMuted(m => !m);
    }
  };

  const isMovie = type === "movie";

  return (
    <div
      className="rounded-xl overflow-hidden cursor-pointer group"
      style={{
        transition: "transform 0.25s ease, box-shadow 0.25s ease",
        transform: hovered ? "scale(1.06)" : "scale(1)",
        boxShadow: hovered ? `0 0 32px ${item.color}55, 0 8px 32px rgba(0,0,0,0.5)` : "none",
        zIndex: hovered ? 10 : 1,
        position: "relative",
      }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
    >
      {/* Poster / Video area */}
      <div
        className="relative flex items-center justify-center overflow-hidden"
        style={{
          height: "200px",
          background: `linear-gradient(160deg, ${item.color}44 0%, #0d1b3e 100%)`,
        }}
      >
        {/* Big number watermark */}
        <span className="text-6xl font-black text-white absolute select-none" style={{ opacity: hovered ? 0 : 0.12, transition: "opacity 0.3s" }}>
          {item.id}
        </span>

        {/* Video element — hidden until hovered */}
        <video
          ref={videoRef}
          src={videoSrc}
          muted
          loop
          playsInline
          preload="none"
          onCanPlay={() => setVideoReady(true)}
          className="absolute inset-0 w-full h-full object-cover"
          style={{
            opacity: hovered && videoReady ? 1 : 0,
            transition: "opacity 0.5s ease",
          }}
        />

        {/* Gradient overlay over video */}
        {hovered && (
          <div
            className="absolute inset-0"
            style={{
              background: `linear-gradient(to top, rgba(6,10,24,0.85) 0%, transparent 50%), linear-gradient(to bottom, rgba(6,10,24,0.3) 0%, transparent 40%)`,
              pointerEvents: "none",
            }}
          />
        )}

        {/* Glassmorphism bottom info bar — shown on hover */}
        {hovered && (
          <div
            className="absolute bottom-0 left-0 right-0 px-3 py-2 flex items-end justify-between"
            style={{
              background: "rgba(0,0,0,0.0)",
              animation: "fadeInUp 0.25s ease",
            }}
          >
            {/* Loading dots if video not ready */}
            {!videoReady && (
              <div className="flex gap-1 items-center">
                {[0, 1, 2].map(i => (
                  <div
                    key={i}
                    className="w-1.5 h-1.5 rounded-full"
                    style={{
                      background: item.color,
                      animation: `bounce 1s ease-in-out ${i * 0.15}s infinite`,
                    }}
                  />
                ))}
              </div>
            )}
            {videoReady && <div />}

            {/* Mute toggle */}
            <button
              onClick={toggleMute}
              className="flex items-center justify-center rounded-full transition-all"
              style={{
                width: "26px",
                height: "26px",
                background: "rgba(0,0,0,0.55)",
                backdropFilter: "blur(8px)",
                border: "1px solid rgba(255,255,255,0.12)",
                color: "white",
              }}
            >
              {muted ? <VolumeX size={12} /> : <Volume2 size={12} />}
            </button>
          </div>
        )}

        {/* Ratings badge */}
        <div
          className="absolute top-2 right-2 flex items-center gap-1 px-2 py-0.5 rounded-full text-xs font-bold text-white"
          style={{ background: "rgba(0,0,0,0.6)", backdropFilter: "blur(8px)" }}
        >
          <Star size={10} fill="#fbbf24" className="text-yellow-400" />
          {item.rating}
        </div>

        {/* Series status badge */}
        {!isMovie && item.status && (
          <div
            className="absolute top-2 left-2 text-xs font-bold px-2 py-0.5 rounded-full"
            style={{
              background: item.status === "U tijeku" ? "rgba(59,130,246,0.2)" : "rgba(255,255,255,0.1)",
              color: item.status === "U tijeku" ? "#60a5fa" : "#94a3b8",
              border: item.status === "U tijeku" ? "1px solid rgba(59,130,246,0.3)" : "1px solid rgba(255,255,255,0.1)",
            }}
          >
            {item.status === "U tijeku" ? "● NOVO" : "✓"}
          </div>
        )}

        {/* Play button — shown when NOT hovered */}
        <div
          className="absolute inset-0 flex items-center justify-center"
          style={{
            opacity: hovered ? 0 : 0,
            background: "rgba(0,0,0,0.5)",
            transition: "opacity 0.2s",
          }}
        >
          <div
            className="w-12 h-12 rounded-full flex items-center justify-center"
            style={{
              background: isMovie ? "rgba(59,130,246,0.8)" : "rgba(139,92,246,0.8)",
              boxShadow: `0 0 20px ${item.color}88`,
            }}
          >
            <Play size={20} fill="white" className="text-white ml-0.5" />
          </div>
        </div>

        {/* Favorite heart button */}
        <button
          onClick={e => { e.stopPropagation(); toggleFavorite(item, type); }}
          className="absolute bottom-2 left-2 w-7 h-7 rounded-full flex items-center justify-center transition-all"
          style={{
            background: isFavorite(item.id, type) ? "rgba(239,68,68,0.85)" : "rgba(0,0,0,0.55)",
            backdropFilter: "blur(8px)",
            border: isFavorite(item.id, type) ? "1px solid rgba(239,68,68,0.6)" : "1px solid rgba(255,255,255,0.12)",
            opacity: hovered || isFavorite(item.id, type) ? 1 : 0,
            transform: isFavorite(item.id, type) ? "scale(1.1)" : "scale(1)",
            transition: "opacity 0.2s, transform 0.2s, background 0.2s",
          }}
        >
          <Heart
            size={13}
            fill={isFavorite(item.id, type) ? "white" : "none"}
            style={{ color: isFavorite(item.id, type) ? "white" : "rgba(239,68,68,0.8)" }}
          />
        </button>

        {/* Accent border on hover */}
        <div
          className="absolute inset-0 rounded-t-xl pointer-events-none"
          style={{
            border: `1px solid ${item.color}${hovered ? "55" : "00"}`,
            transition: "border-color 0.3s",
          }}
        />
      </div>

      {/* Info footer */}
      <div
        className="p-2.5"
        style={{
          background: hovered ? `rgba(10,16,40,1)` : "rgba(10,16,40,0.95)",
          borderTop: hovered ? `1px solid ${item.color}33` : "1px solid transparent",
          transition: "border-color 0.3s, background 0.3s",
        }}
      >
        <p className="text-white text-xs font-semibold truncate">{item.title}</p>
        <div className="flex items-center justify-between mt-1">
          {isMovie ? (
            <span className="text-slate-400 text-xs">{item.year}</span>
          ) : (
            <span className="text-slate-400 text-xs">S{item.seasons} · {item.episodes}ep</span>
          )}
          <span
            className="text-xs px-1.5 py-0.5 rounded font-medium"
            style={{ background: `${item.color}22`, color: item.color }}
          >
            {item.genre}
          </span>
        </div>
      </div>

      <style>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(6px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes bounce {
          0%, 100% { transform: translateY(0); opacity: 0.6; }
          50% { transform: translateY(-4px); opacity: 1; }
        }
      `}</style>
    </div>
  );
}