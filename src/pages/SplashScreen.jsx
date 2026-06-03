import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import StreamMateLogo from "@/components/streammate/StreamMateLogo";

export default function SplashScreen() {
  const navigate = useNavigate();
  const [progress, setProgress] = useState(0);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            setFadeOut(true);
            setTimeout(() => navigate("/home"), 600);
          }, 300);
          return 100;
        }
        return prev + 2;
      });
    }, 60);
    return () => clearInterval(interval);
  }, [navigate]);

  return (
    <div
      className="fixed inset-0 flex items-center justify-center overflow-hidden"
      style={{
        background: "radial-gradient(ellipse at center, #0d1b3e 0%, #060a18 50%, #020408 100%)",
        opacity: fadeOut ? 0 : 1,
        transition: "opacity 0.6s ease",
      }}
    >
      {/* Animated wave background */}
      <div className="absolute inset-0 overflow-hidden">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url(https://media.base44.com/images/public/6a1fa590cdfcf0990345869c/7197fb89d_generated_image.png)`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            opacity: 0.4,
          }}
        />
        {/* Animated glow orbs */}
        <div
          className="absolute rounded-full"
          style={{
            width: "600px",
            height: "600px",
            left: "-200px",
            top: "-200px",
            background: "radial-gradient(circle, rgba(59,130,246,0.15) 0%, transparent 70%)",
            animation: "pulse 4s ease-in-out infinite",
          }}
        />
        <div
          className="absolute rounded-full"
          style={{
            width: "500px",
            height: "500px",
            right: "-150px",
            bottom: "-150px",
            background: "radial-gradient(circle, rgba(139,92,246,0.12) 0%, transparent 70%)",
            animation: "pulse 5s ease-in-out infinite reverse",
          }}
        />
      </div>

      {/* Glass card */}
      <div
        className="relative z-10 flex flex-col items-center w-full max-w-sm mx-4 px-8 py-12 rounded-3xl sm:px-16 sm:py-14"
        style={{
          background: "rgba(13, 27, 62, 0.55)",
          backdropFilter: "blur(24px)",
          WebkitBackdropFilter: "blur(24px)",
          border: "1px solid rgba(59, 130, 246, 0.2)",
          boxShadow: "0 8px 80px rgba(59,130,246,0.12), inset 0 1px 0 rgba(255,255,255,0.08)",
        }}
      >
        {/* Logo */}
        <div className="mb-6 flex flex-col items-center">
          <img
            src="https://media.base44.com/images/public/6a1fa590cdfcf0990345869c/f2451d2f9_Slikazaslona2026-06-03u062321.png"
            alt="StreamMate"
            className="w-56 sm:w-64"
            style={{ filter: "drop-shadow(0 0 32px rgba(99,102,241,0.7))" }}
          />
        </div>

        {/* Loading bar */}
        <div className="w-full">
          <div
            className="w-full rounded-full overflow-hidden"
            style={{
              height: "3px",
              background: "rgba(255,255,255,0.08)",
            }}
          >
            <div
              className="h-full rounded-full transition-all duration-100"
              style={{
                width: `${progress}%`,
                background: "linear-gradient(90deg, #3b82f6, #6366f1, #8b5cf6)",
                boxShadow: "0 0 12px rgba(99,102,241,0.8)",
                transition: "width 0.1s linear",
              }}
            />
          </div>
          <p
            className="text-center text-xs mt-4 tracking-widest"
            style={{ color: "rgba(148,163,184,0.5)", letterSpacing: "0.2em" }}
          >
            LOADING...
          </p>
        </div>
      </div>

      <style>{`
        @keyframes pulse {
          0%, 100% { transform: scale(1); opacity: 0.5; }
          50% { transform: scale(1.1); opacity: 1; }
        }
      `}</style>
    </div>
  );
}