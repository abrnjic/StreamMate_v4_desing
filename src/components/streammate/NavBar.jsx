import { Tv, Film, Clapperboard, Heart, Video, Settings, Search, Bell } from "lucide-react";
import StreamMateLogo from "@/components/streammate/StreamMateLogo";

const navItems = [
  { icon: Tv, label: "Live TV", id: "live" },
  { icon: Film, label: "Filmovi", id: "movies" },
  { icon: Clapperboard, label: "Serije", id: "series" },
  { icon: Heart, label: "Favoriti", id: "favorites" },
  { icon: Video, label: "Snimke", id: "recordings" },
  { icon: Settings, label: "Postavke", id: "settings" },
];

export default function NavBar({ active, onSelect }) {
  return (
    <div
      className="sticky top-0 z-50 w-full flex items-center justify-between px-6 py-3"
      style={{
        background: "rgba(6, 10, 24, 0.85)",
        backdropFilter: "blur(20px)",
        WebkitBackdropFilter: "blur(20px)",
        borderBottom: "1px solid rgba(59, 130, 246, 0.12)",
      }}
    >
      {/* Logo */}
      <div className="mr-8">
        <StreamMateLogo size={32} showText={true} textSize="text-lg" glowColor="rgba(99,102,241,0.6)" />
      </div>

      {/* Nav items */}
      <div className="flex items-center gap-1 flex-1">
        {navItems.map(({ icon: Icon, label, id }) => (
          <button
            key={id}
            onClick={() => onSelect(id)}
            className="flex items-center gap-1.5 px-3 py-2 rounded-lg text-sm font-medium transition-all relative"
            style={{
              color: active === id ? "white" : "rgba(148,163,184,0.7)",
              background: active === id ? "rgba(59,130,246,0.15)" : "transparent",
            }}
          >
            <Icon size={15} />
            <span className="hidden md:inline">{label}</span>
            {active === id && (
              <div
                className="absolute bottom-0 left-1/2 -translate-x-1/2 rounded-full"
                style={{
                  width: "20px",
                  height: "2px",
                  background: "linear-gradient(90deg, #3b82f6, #6366f1)",
                  boxShadow: "0 0 8px rgba(99,102,241,0.6)",
                }}
              />
            )}
          </button>
        ))}
      </div>

      {/* Right side icons */}
      <div className="flex items-center gap-2">
        <button
          className="p-2 rounded-lg text-slate-400 hover:text-white transition-colors"
          style={{ background: "rgba(255,255,255,0.05)" }}
        >
          <Search size={18} />
        </button>
        <button
          className="p-2 rounded-lg text-slate-400 hover:text-white transition-colors relative"
          style={{ background: "rgba(255,255,255,0.05)" }}
        >
          <Bell size={18} />
          <div
            className="absolute top-1.5 right-1.5 rounded-full"
            style={{ width: "6px", height: "6px", background: "#3b82f6" }}
          />
        </button>
        <div
          className="w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold text-white"
          style={{ background: "linear-gradient(135deg, #3b82f6, #6366f1)" }}
        >
          U
        </div>
      </div>
    </div>
  );
}