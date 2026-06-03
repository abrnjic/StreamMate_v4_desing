import { useState } from "react";
import { useNavigate } from "react-router-dom";
import NavBar from "@/components/streammate/NavBar";
import HeroBanner from "@/components/streammate/HeroBanner";
import ContentRow from "@/components/streammate/ContentRow";
import { ChevronRight } from "lucide-react";

const sections = [
  { id: "live", label: "📺 Live TV", sub: "Kanali uživo" },
  { id: "favorites", label: "⭐ Favoriti", sub: "Omiljeni sadržaj" },
  { id: "movies", label: "🎬 Filmovi", sub: "Filmovi na zahtjev" },
  { id: "series", label: "🎭 Serije", sub: "TV serije" },
  { id: "continue", label: "▶️ Nastavi gledati", sub: "Nedavno gledano" },
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

      {/* Content sections */}
      <div className="px-6 py-8 space-y-10">
        {sections.map(section => (
          <div key={section.id}>
            <SectionHeader label={section.label} sub={section.sub} />
            <ContentRow section={section.id} />
          </div>
        ))}
      </div>

      {/* Bottom padding for mobile */}
      <div className="h-8" />
    </div>
  );
}