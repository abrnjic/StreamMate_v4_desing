import { useState } from "react";
import { useNavigate } from "react-router-dom";
import NavBar from "@/components/streammate/NavBar";
import HeroBanner from "@/components/streammate/HeroBanner";
import ContentRow from "@/components/streammate/ContentRow";
import CategoryGrid from "@/components/streammate/CategoryGrid";
import FavoritesRow from "@/components/streammate/FavoritesRow";
import NewArrivalsRow from "@/components/streammate/NewArrivalsRow";
import ContinueWatchingRow from "@/components/streammate/ContinueWatchingRow";
import { ChevronRight } from "lucide-react";

const sections = [
  { id: "continue-watching", label: "▶️ Nastavi gledanje", sub: "Nastavi tamo gdje si stao" },
  { id: "live", label: "📺 Live TV", sub: "Kanali uživo" },
  { id: "new", label: "✨ Novo u ponudi", sub: "Najnoviji filmovi i serije" },
  { id: "favorites", label: "⭐ Favoriti", sub: "Omiljeni sadržaj" },
  { id: "movies", label: "🎬 Filmovi", sub: "Filmovi na zahtjev" },
  { id: "series", label: "🎭 Serije", sub: "TV serije" },
];

function SectionHeader({ label, sub }) {
  return (
    <div className="flex items-center justify-between mb-4">
      <div>
        <h2 className="text-white text-xl font-bold">{label}</h2>
        <p className="text-slate-500 text-xs mt-0.5">{sub}</p>
      </div>
      <button
        className="flex items-center gap-1 text-xs font-medium transition-colors"
        style={{ color: "#3b82f6" }}
      >
        Sve <ChevronRight size={14} />
      </button>
    </div>
  );
}

export default function Home() {
  const navigate = useNavigate();
  const [activeNav, setActiveNav] = useState("home");

  const handleNav = (id) => {
    if (id === "live") navigate("/live-tv");
    else if (id === "movies") navigate("/movies");
    else if (id === "series") navigate("/series");
    else if (id === "roadmap") navigate("/roadmap");
  };

  return (
    <div
      className="min-h-screen"
      style={{ background: "linear-gradient(180deg, #060a18 0%, #080c20 100%)" }}
    >
      {/* Navigation */}
      <NavBar active={activeNav} onSelect={handleNav} />

      {/* Hero Banner */}
      <HeroBanner />

      {/* Category grid with glassmorphism */}
      <CategoryGrid onSelect={handleNav} />

      {/* Divider */}
      <div className="mx-4 sm:mx-6 h-px" style={{ background: "rgba(255,255,255,0.05)" }} />

      {/* Content sections */}
      <div className="px-3 sm:px-6 py-6 sm:py-8 space-y-8 sm:space-y-10">
        {sections.map(section => (
          <div key={section.id}>
            <SectionHeader label={section.label} sub={section.sub} />
            {section.id === "favorites" ? (
              <FavoritesRow />
            ) : section.id === "new" ? (
              <NewArrivalsRow />
            ) : section.id === "continue-watching" ? (
              <ContinueWatchingRow />
            ) : (
              <ContentRow section={section.id} />
            )}
          </div>
        ))}
      </div>

      {/* Bottom padding for mobile nav */}
      <div className="h-8 md:h-4 pb-16 md:pb-0" />
    </div>
  );
}