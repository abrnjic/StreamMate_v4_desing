import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

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
        className="relative z-10 flex flex-col items-center px-16 py-14 rounded-3xl"
        style={{
          background: "rgba(13, 27, 62, 0.55)",
          backdropFilter: "blur(24px)",
          WebkitBackdropFilter: "blur(24px)",
          border: "1px solid rgba(59, 130, 246, 0.2)",
          boxShadow: "0 8px 80px rgba(59,130,246,0.12), inset 0 1px 0 rgba(255,255,255,0.08)",
          minWidth: "420px",
        }}
      >
        {/* Logo icon */}
        <div className="mb-6" style={{ filter: "drop-shadow(0 0 24px rgba(99,102,241,0.8))" }}>
          <svg width="80" height="80" viewBox="0 0 80 80" fill="none">
            <defs>
              <linearGradient id="logoGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#3b82f6" />
                <stop offset="50%" stopColor="#6366f1" />
                <stop offset="100%" stopColor="#8b5cf6" />
              </linearGradient>
            </defs>
            {/* S + Play hybrid icon */}
            <path
              d="M20 16 C20 16, 55 12, 58 28 C61 40, 38 42, 40 52 C42 62, 62 64, 62 64"
              stroke="url(#logoGrad)"
              strokeWidth="10"
              strokeLinecap="round"
              fill="none"
            />
            <path d="M45 32 L65 45 L45 58 Z" fill="url(#logoGrad)" opacity="0.9" />
          </svg>
        </div>

        {/* Brand name */}
        <div className="mb-2 flex items-baseline gap-0">
          <span
            className="text-4xl font-bold text-white"
            style={{ fontFamily: "system-ui, sans-serif", letterSpacing: "-0.5px" }}
          >
            Stream
          </span>
          <span
            className="text-4xl font-bold"
            style={{
              background: "linear-gradient(135deg, #3b82f6, #6366f1)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              letterSpacing: "-0.5px",
            }}
          >
            Mate
          </span>
        </div>

        {/* Tagline */}
        <p
          className="text-xs mb-10 tracking-widest"
          style={{ color: "rgba(148, 163, 184, 0.8)", letterSpacing: "0.25em" }}
        >
          YOUR WORLD. YOUR STREAM.
        </p>

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