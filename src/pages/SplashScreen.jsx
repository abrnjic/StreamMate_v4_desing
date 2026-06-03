import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function SplashScreen() {
  const navigate = useNavigate();
  const [progress, setProgress] = useState(0);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(p => {
        if (p >= 100) {
          clearInterval(interval);
          return 100;
        }
        return p + 2;
      });
    }, 40);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (progress === 100) {
      setTimeout(() => setFadeOut(true), 300);
      setTimeout(() => navigate("/home"), 800);
    }
  }, [progress, navigate]);

  return (
    <div
      className="fixed inset-0 flex items-center justify-center overflow-hidden"
      style={{
        background: "linear-gradient(145deg, #08051a 0%, #0d0b28 40%, #080f24 70%, #050d1a 100%)",
        opacity: fadeOut ? 0 : 1,
        transition: "opacity 0.5s ease",
      }}
    >
      {/* Subtle grid overlay */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none"
        style={{ opacity: 0.04 }}
      >
        <defs>
          <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="0.5" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid)" />
      </svg>

      {/* Glow orb — purple/cyan radial */}
      <div
        className="absolute pointer-events-none"
        style={{
          width: "600px",
          height: "600px",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -60%)",
          background: "radial-gradient(circle at 50% 50%, rgba(124,58,237,0.22) 0%, rgba(6,182,212,0.1) 45%, transparent 70%)",
          borderRadius: "50%",
        }}
      />

      {/* Center content */}
      <div className="relative z-10 flex flex-col items-center gap-8">
        {/* Logo icon */}
        <div style={{ animation: "smFadeIn 0.8s ease both" }}>
          <svg
            width="80"
            height="80"
            viewBox="0 0 48 48"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            style={{
              filter: "drop-shadow(0 0 16px rgba(124,58,237,0.8)) drop-shadow(0 0 32px rgba(6,182,212,0.4))",
            }}
          >
            <defs>
              <linearGradient id="splashIconGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#7c3aed" />
                <stop offset="50%" stopColor="#4f46e5" />
                <stop offset="100%" stopColor="#06b6d4" />
              </linearGradient>
              <linearGradient id="splashTextGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#c4b5fd" />
                <stop offset="100%" stopColor="#67e8f9" />
              </linearGradient>
            </defs>
            <rect x="2" y="2" width="44" height="44" rx="13" fill="url(#splashIconGrad)" opacity="0.2" />
            <rect x="2" y="2" width="44" height="44" rx="13" stroke="url(#splashIconGrad)" strokeWidth="1.5" fill="none" opacity="0.7" />
            <text
              x="24" y="33"
              textAnchor="middle"
              fontSize="30"
              fontWeight="800"
              fontFamily="'Segoe UI', system-ui, sans-serif"
              letterSpacing="-1"
              fill="url(#splashTextGrad)"
            >
              S
            </text>
          </svg>
        </div>

        {/* Wordmark */}
        <div style={{ animation: "smFadeIn 0.8s ease 0.2s both" }}>
          <div
            className="select-none"
            style={{
              fontSize: "42px",
              lineHeight: 1,
              letterSpacing: "-0.05em",
              fontFamily: "'Segoe UI', system-ui, sans-serif",
            }}
          >
            <span
              style={{
                fontWeight: 800,
                background: "linear-gradient(120deg, #c4b5fd 0%, #818cf8 50%, #67e8f9 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Stream
            </span>
            <span
              style={{
                fontWeight: 300,
                color: "#cbd5e1",
              }}
            >
              Mate
            </span>
          </div>

          {/* Tagline */}
          <p
            className="text-center mt-2"
            style={{
              fontSize: "13px",
              color: "rgba(148,163,184,0.55)",
              letterSpacing: "0.15em",
              fontFamily: "'Segoe UI', system-ui, sans-serif",
              textTransform: "uppercase",
            }}
          >
            Watch Together · Live Together
          </p>
        </div>

        {/* Wave SVG decoration */}
        <div style={{ animation: "smFadeIn 0.8s ease 0.35s both", opacity: 0.35 }}>
          <svg width="220" height="24" viewBox="0 0 220 24" fill="none">
            <defs>
              <linearGradient id="waveGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="transparent" />
                <stop offset="30%" stopColor="#7c3aed" />
                <stop offset="70%" stopColor="#06b6d4" />
                <stop offset="100%" stopColor="transparent" />
              </linearGradient>
            </defs>
            <path
              d="M0 12 Q27.5 0 55 12 Q82.5 24 110 12 Q137.5 0 165 12 Q192.5 24 220 12"
              stroke="url(#waveGrad)"
              strokeWidth="2"
              fill="none"
              strokeLinecap="round"
            />
          </svg>
        </div>

        {/* Loading dots */}
        <div
          className="flex items-center gap-2.5"
          style={{ animation: "smFadeIn 0.8s ease 0.5s both" }}
        >
          {[0, 1, 2].map(i => (
            <div
              key={i}
              style={{
                width: i === 1 ? "10px" : "8px",
                height: i === 1 ? "10px" : "8px",
                borderRadius: "50%",
                background: i === 1
                  ? "linear-gradient(135deg, #7c3aed, #06b6d4)"
                  : "transparent",
                border: i !== 1 ? "1.5px solid rgba(148,163,184,0.35)" : "none",
                animation: `smBounce 1.2s ease-in-out ${i * 0.18}s infinite`,
              }}
            />
          ))}
        </div>

        {/* Version */}
        <p
          style={{
            fontSize: "11px",
            color: "rgba(148,163,184,0.3)",
            letterSpacing: "0.1em",
            fontFamily: "'Segoe UI', system-ui, sans-serif",
            animation: "smFadeIn 0.8s ease 0.6s both",
          }}
        >
          v1.0.0
        </p>
      </div>

      <style>{`
        @keyframes smFadeIn {
          from { opacity: 0; transform: translateY(12px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes smBounce {
          0%, 100% { transform: translateY(0); opacity: 0.5; }
          50%       { transform: translateY(-5px); opacity: 1; }
        }
      `}</style>
    </div>
  );
}