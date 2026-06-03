import { Play } from "lucide-react";

const liveChannels = [
  { id: 1, name: "HRT 1", category: "Vijesti", isLive: true, viewers: "12K", color: "#ef4444" },
  { id: 2, name: "Nova TV", category: "Zabava", isLive: true, viewers: "8K", color: "#f59e0b" },
  { id: 3, name: "RTL", category: "Film", isLive: true, viewers: "15K", color: "#3b82f6" },
  { id: 4, name: "Sport Klub", category: "Sport", isLive: true, viewers: "22K", color: "#10b981" },
  { id: 5, name: "Al Jazeera", category: "Vijesti", isLive: true, viewers: "5K", color: "#8b5cf6" },
  { id: 6, name: "HBO Max", category: "Film", isLive: false, viewers: "31K", color: "#6366f1" },
  { id: 7, name: "Eurosport", category: "Sport", isLive: true, viewers: "18K", color: "#ec4899" },
];

const movies = [
  { id: 1, title: "Inception", year: 2010, rating: "8.8", genre: "Sci-Fi" },
  { id: 2, title: "The Dark Knight", year: 2008, rating: "9.0", genre: "Akcija" },
  { id: 3, title: "Interstellar", year: 2014, rating: "8.6", genre: "Sci-Fi" },
  { id: 4, title: "Tenet", year: 2020, rating: "7.3", genre: "Thriller" },
  { id: 5, title: "Oppenheimer", year: 2023, rating: "8.5", genre: "Drama" },
  { id: 6, title: "Avatar", year: 2022, rating: "7.6", genre: "Sci-Fi" },
];

const series = [
  { id: 1, title: "Breaking Bad", seasons: 5, rating: "9.5", genre: "Drama" },
  { id: 2, title: "Game of Thrones", seasons: 8, rating: "9.2", genre: "Fantazija" },
  { id: 3, title: "The Crown", seasons: 6, rating: "8.6", genre: "Drama" },
  { id: 4, title: "Stranger Things", seasons: 4, rating: "8.7", genre: "Sci-Fi" },
  { id: 5, title: "House of Cards", seasons: 6, rating: "8.1", genre: "Politika" },
];

const continueWatching = [
  { id: 1, title: "Vijesti RTL", progress: 65, channel: "RTL", time: "Nastavi od 32:15" },
  { id: 2, title: "Inception", progress: 42, channel: "Film", time: "Nastavi od 1:48:30" },
  { id: 3, title: "Breaking Bad S3", progress: 80, channel: "Serije", time: "Nastavi od 45:10" },
];

function ChannelCard({ ch }) {
  return (
    <div
      className="flex-shrink-0 rounded-xl overflow-hidden cursor-pointer group transition-all"
      style={{
        width: "160px",
        background: "rgba(15,23,42,0.8)",
        border: "1px solid rgba(255,255,255,0.06)",
        transition: "transform 0.2s, box-shadow 0.2s",
      }}
      onMouseEnter={e => {
        e.currentTarget.style.transform = "scale(1.04)";
        e.currentTarget.style.boxShadow = `0 0 24px ${ch.color}33`;
      }}
      onMouseLeave={e => {
        e.currentTarget.style.transform = "scale(1)";
        e.currentTarget.style.boxShadow = "none";
      }}
    >
      {/* Channel preview area */}
      <div
        className="relative flex items-center justify-center"
        style={{
          height: "90px",
          background: `linear-gradient(135deg, ${ch.color}22, ${ch.color}11)`,
        }}
      >
        <span className="text-2xl font-black text-white opacity-80">{ch.name.substring(0, 2)}</span>
        {ch.isLive && (
          <div
            className="absolute top-2 left-2 flex items-center gap-1 px-1.5 py-0.5 rounded text-xs font-bold"
            style={{ background: "#ef4444", color: "white" }}
          >
            <div className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
            LIVE
          </div>
        )}
        <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-30 transition-opacity flex items-center justify-center">
          <Play size={24} className="text-white opacity-0 group-hover:opacity-100 transition-opacity" fill="white" />
        </div>
      </div>
      {/* Info */}
      <div className="p-3">
        <p className="text-white text-sm font-semibold truncate">{ch.name}</p>
        <div className="flex items-center justify-between mt-1">
          <span className="text-xs text-slate-400">{ch.category}</span>
          <span className="text-xs" style={{ color: ch.color }}>{ch.viewers}</span>
        </div>
      </div>
    </div>
  );
}

function MovieCard({ item }) {
  const colors = ["#3b82f6", "#6366f1", "#8b5cf6", "#ec4899", "#10b981", "#f59e0b"];
  const color = colors[item.id % colors.length];
  return (
    <div
      className="flex-shrink-0 rounded-xl overflow-hidden cursor-pointer group"
      style={{
        width: "130px",
        transition: "transform 0.2s, box-shadow 0.2s",
      }}
      onMouseEnter={e => {
        e.currentTarget.style.transform = "scale(1.05)";
        e.currentTarget.style.boxShadow = "0 0 20px rgba(59,130,246,0.3)";
      }}
      onMouseLeave={e => {
        e.currentTarget.style.transform = "scale(1)";
        e.currentTarget.style.boxShadow = "none";
      }}
    >
      <div
        className="relative flex items-end justify-start p-3"
        style={{
          height: "190px",
          background: `linear-gradient(160deg, ${color}33 0%, #060a18 100%)`,
          border: "1px solid rgba(255,255,255,0.06)",
          borderRadius: "12px 12px 0 0",
        }}
      >
        <div
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center rounded-t-xl"
          style={{ background: "rgba(0,0,0,0.5)" }}
        >
          <Play size={28} fill="white" className="text-white" />
        </div>
        <span
          className="text-3xl font-black opacity-20 absolute top-3 right-3"
          style={{ color }}
        >
          {item.id}
        </span>
        <div>
          <span className="text-xs px-1.5 py-0.5 rounded text-white font-bold" style={{ background: color }}>
            ★ {item.rating}
          </span>
        </div>
      </div>
      <div
        className="p-2.5"
        style={{
          background: "rgba(15,23,42,0.9)",
          border: "1px solid rgba(255,255,255,0.05)",
          borderTop: "none",
          borderRadius: "0 0 12px 12px",
        }}
      >
        <p className="text-white text-xs font-semibold truncate">{item.title}</p>
        <p className="text-slate-400 text-xs mt-0.5">{item.year} · {item.genre}</p>
      </div>
    </div>
  );
}

function ContinueCard({ item }) {
  return (
    <div
      className="flex-shrink-0 rounded-xl overflow-hidden cursor-pointer group"
      style={{
        width: "220px",
        background: "rgba(15,23,42,0.8)",
        border: "1px solid rgba(59,130,246,0.1)",
        transition: "transform 0.2s",
      }}
      onMouseEnter={e => e.currentTarget.style.transform = "scale(1.03)"}
      onMouseLeave={e => e.currentTarget.style.transform = "scale(1)"}
    >
      <div
        className="relative flex items-center justify-center"
        style={{
          height: "120px",
          background: "linear-gradient(135deg, #1e3a5f, #0d1b3e)",
        }}
      >
        <div
          className="w-10 h-10 rounded-full flex items-center justify-center"
          style={{ background: "rgba(59,130,246,0.3)", border: "2px solid rgba(59,130,246,0.5)" }}
        >
          <Play size={18} fill="white" className="text-white ml-0.5" />
        </div>
        <div
          className="absolute bottom-0 left-0 right-0"
          style={{ height: "3px", background: "rgba(255,255,255,0.1)" }}
        >
          <div
            style={{
              height: "100%",
              width: `${item.progress}%`,
              background: "linear-gradient(90deg, #3b82f6, #6366f1)",
            }}
          />
        </div>
      </div>
      <div className="p-3">
        <p className="text-white text-sm font-semibold truncate">{item.title}</p>
        <p className="text-slate-400 text-xs mt-1">{item.time}</p>
      </div>
    </div>
  );
}

export default function ContentRow({ section }) {
  const getSectionData = () => {
    switch (section) {
      case "live": return { items: liveChannels, Card: ChannelCard };
      case "movies": return { items: movies, Card: MovieCard };
      case "series": return { items: series.map(s => ({ ...s, year: `S${s.seasons}`, genre: s.genre, rating: s.rating })), Card: MovieCard };
      case "continue": return { items: continueWatching, Card: ContinueCard };
      case "favorites": return { items: liveChannels.filter(c => c.isLive), Card: ChannelCard };
      default: return { items: [], Card: ChannelCard };
    }
  };

  const { items, Card } = getSectionData();

  return (
    <div className="flex gap-4 overflow-x-auto pb-2" style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}>
      {items.map(item => <Card key={item.id} ch={item} item={item} />)}
    </div>
  );
}