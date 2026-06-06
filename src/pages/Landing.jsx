import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import IPhoneMockup from "@/components/streammate/IPhoneMockup";
import AppPreviewContent from "@/components/streammate/AppPreviewContent";

export default function Landing() {
  const navigate = useNavigate();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => setVisible(true), 100);
  }, []);

  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center overflow-hidden relative px-6"
      style={{
        background: "linear-gradient(145deg, #06040f 0%, #0d0b28 40%, #080f24 70%, #050d1a 100%)",
      }}
    >
      {/* Background glow orbs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div
          className="absolute"
          style={{
            width: "700px",
            height: "700px",
            top: "50%",
            left: "30%",
            transform: "translate(-50%, -55%)",
            background: "radial-gradient(circle, rgba(124,58,237,0.18) 0%, rgba(6,182,212,0.08) 45%, transparent 70%)",
            borderRadius: "50%",
          }}
        />
        <div
          className="absolute"
          style={{
            width: "400px",
            height: "400px",
            bottom: "10%",
            right: "5%",
            background: "radial-gradient(circle, rgba(6,182,212,0.1) 0%, transparent 65%)",
            borderRadius: "50%",
          }}
        />
      </div>

      {/* Grid overlay */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ opacity: 0.03 }}>
        <defs>
          <pattern id="lgrid" width="50" height="50" patternUnits="userSpaceOnUse">
            <path d="M 50 0 L 0 0 0 50" fill="none" stroke="white" strokeWidth="0.5" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#lgrid)" />
      </svg>

      {/* Main layout: text left, phone right */}
      <div
        className="relative z-10 w-full max-w-6xl flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-16"
        style={{
          opacity: visible ? 1 : 0,
          transform: visible ? "translateY(0)" : "translateY(30px)",
          transition: "opacity 0.8s ease, transform 0.8s ease",
        }}
      >
        {/* Left — Text content */}
        <div className="flex-1 text-center lg:text-left max-w-lg">
          {/* Logo */}
          <div className="flex items-center justify-center lg:justify-start gap-3 mb-8">
            <svg width="52" height="52" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"
              style={{ filter: "drop-shadow(0 0 14px rgba(124,58,237,0.8)) drop-shadow(0 0 28px rgba(6,182,212,0.4))" }}>
              <defs>
                <linearGradient id="lIconGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#7c3aed" />
                  <stop offset="50%" stopColor="#4f46e5" />
                  <stop offset="100%" stopColor="#06b6d4" />
                </linearGradient>
                <linearGradient id="lTextGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#c4b5fd" />
                  <stop offset="100%" stopColor="#67e8f9" />
                </linearGradient>
              </defs>
              <rect x="2" y="2" width="44" height="44" rx="13" fill="url(#lIconGrad)" opacity="0.2" />
              <rect x="2" y="2" width="44" height="44" rx="13" stroke="url(#lIconGrad)" strokeWidth="1.5" fill="none" opacity="0.7" />
              <text x="24" y="33" textAnchor="middle" fontSize="30" fontWeight="800"
                fontFamily="'Segoe UI', system-ui, sans-serif" letterSpacing="-1" fill="url(#lTextGrad)">S</text>
            </svg>
            <div style={{ fontSize: "32px", lineHeight: 1, letterSpacing: "-0.04em", fontFamily: "'Segoe UI', system-ui, sans-serif" }}>
              <span style={{ fontWeight: 800, background: "linear-gradient(120deg, #c4b5fd 0%, #818cf8 50%, #67e8f9 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>Stream</span>
              <span style={{ fontWeight: 300, color: "#cbd5e1" }}>Mate</span>
            </div>
          </div>

          {/* Headline */}
          <h1
            className="font-black leading-tight mb-4"
            style={{
              fontSize: "clamp(2.2rem, 5vw, 3.5rem)",
              fontFamily: "'Segoe UI', system-ui, sans-serif",
              letterSpacing: "-0.03em",
              background: "linear-gradient(135deg, #ffffff 0%, #c4b5fd 50%, #67e8f9 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            Gledaj više.<br />Živite zajedno.
          </h1>

          <p className="text-slate-400 text-lg leading-relaxed mb-8 max-w-md mx-auto lg:mx-0">
            Premium IPTV iskustvo s tisućama live kanala, filmova i serija — uvijek u tvojoj ruci.
          </p>

          {/* Feature pills */}
          <div className="flex flex-wrap gap-2 justify-center lg:justify-start mb-10">
            {["📺 10,000+ Kanala", "🎬 VOD Biblioteka", "📱 Sve platforme", "⚡ 4K streaming"].map((f) => (
              <span key={f} className="text-xs font-medium px-3 py-1.5 rounded-full"
                style={{ background: "rgba(99,102,241,0.15)", border: "1px solid rgba(99,102,241,0.3)", color: "#a5b4fc" }}>
                {f}
              </span>
            ))}
          </div>

          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">
            <button
              onClick={() => navigate("/home")}
              className="px-8 py-3.5 rounded-2xl font-bold text-base transition-all hover:scale-105 active:scale-95"
              style={{
                background: "linear-gradient(135deg, #7c3aed 0%, #4f46e5 50%, #06b6d4 100%)",
                color: "white",
                boxShadow: "0 0 30px rgba(99,102,241,0.4), 0 4px 20px rgba(0,0,0,0.3)",
              }}
            >
              Pokreni StreamMate →
            </button>
            <button
              onClick={() => navigate("/activation")}
              className="px-8 py-3.5 rounded-2xl font-bold text-base transition-all hover:scale-105 active:scale-95"
              style={{
                background: "rgba(255,255,255,0.06)",
                border: "1px solid rgba(255,255,255,0.12)",
                color: "#e2e8f0",
              }}
            >
              Aktiviraj uređaj
            </button>
          </div>
        </div>

        {/* Right — iPhone Mockup */}
        <div
          className="flex-shrink-0 flex items-center justify-center"
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0) rotateY(0deg)" : "translateY(40px) rotateY(-5deg)",
            transition: "opacity 1s ease 0.3s, transform 1s ease 0.3s",
            filter: "drop-shadow(0 40px 80px rgba(99,102,241,0.35)) drop-shadow(0 20px 40px rgba(6,182,212,0.2))",
          }}
        >
          <IPhoneMockup>
            <AppPreviewContent />
          </IPhoneMockup>
        </div>
      </div>

      {/* Bottom tagline */}
      <div
        className="relative z-10 mt-12 text-center"
        style={{
          opacity: visible ? 0.4 : 0,
          transition: "opacity 1s ease 0.6s",
        }}
      >
        <p className="text-slate-500 text-xs tracking-widest uppercase">
          Watch Together · Live Together · Stream Anywhere
        </p>
      </div>
    </div>
  );
}