import { useNavigate } from "react-router-dom";
import NavBar from "@/components/streammate/NavBar";
import BouquetPanel from "@/components/streammate/BouquetPanel";

export default function LiveTV() {
  const navigate = useNavigate();

  const handleNav = (id) => {
    if (id === "live") return;
    if (id === "movies") navigate("/movies");
    else if (id === "series") navigate("/series");
    else navigate("/home");
  };

  return (
    <div
      className="min-h-screen"
      style={{ background: "linear-gradient(180deg, #060a18 0%, #080c20 100%)" }}
    >
      <NavBar active="live" onSelect={handleNav} />
      <BouquetPanel />
    </div>
  );
}