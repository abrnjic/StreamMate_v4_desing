import { useState } from "react";
import NavBar from "@/components/streammate/NavBar";
import BouquetPanel from "@/components/streammate/BouquetPanel";
import { useNavigate } from "react-router-dom";

export default function LiveTV() {
  const navigate = useNavigate();
  const [selectedBouquet, setSelectedBouquet] = useState(null);

  const handleNav = (id) => {
    if (id === "movies") navigate("/movies");
    else if (id === "series") navigate("/series");
    else if (id === "live") return;
    else navigate("/home");
  };

  return (
    <div
      className="min-h-screen"
      style={{ background: "linear-gradient(180deg, #060a18 0%, #080c20 100%)" }}
    >
      <NavBar active="live" onSelect={handleNav} />
      <BouquetPanel selectedBouquet={selectedBouquet} onSelectBouquet={setSelectedBouquet} />
    </div>
  );
}