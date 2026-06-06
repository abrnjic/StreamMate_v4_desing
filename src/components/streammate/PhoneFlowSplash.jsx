export default function PhoneFlowSplash() {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center relative overflow-hidden"
      style={{ background: "linear-gradient(145deg, #08051a 0%, #0d0b28 50%, #080f24 100%)" }}>
      {/* Grid */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ opacity: 0.04 }}>
        <defs><pattern id="pg" width="30" height="30" patternUnits="userSpaceOnUse">
          <path d="M 30 0 L 0 0 0 30" fill="none" stroke="white" strokeWidth="0.5" />
        </pattern></defs>
        <rect width="100%" height="100%" fill="url(#pg)" />
      </svg>
      {/* Glow */}
      <div className="absolute" style={{ width: "300px", height: "300px", top: "50%", left: "50%", transform: "translate(-50%,-60%)", background: "radial-gradient(circle, rgba(124,58,237,0.25) 0%, rgba(6,182,212,0.1) 45%, transparent 70%)", borderRadius: "50%" }} />
      <div className="relative z-10 flex flex-col items-center gap-5">
        {/* Icon */}
        <svg width="64" height="64" viewBox="0 0 48 48" fill="none"
          style={{ filter: "drop-shadow(0 0 14px rgba(124,58,237,0.9)) drop-shadow(0 0 28px rgba(6,182,212,0.5))" }}>
          <defs>
            <linearGradient id="sIconG" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#7c3aed" /><stop offset="50%" stopColor="#4f46e5" /><stop offset="100%" stopColor="#06b6d4" />
            </linearGradient>
            <linearGradient id="sTxtG" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#c4b5fd" /><stop offset="100%" stopColor="#67e8f9" />
            </linearGradient>
          </defs>
          <rect x="2" y="2" width="44" height="44" rx="13" fill="url(#sIconG)" opacity="0.2" />
          <rect x="2" y="2" width="44" height="44" rx="13" stroke="url(#sIconG)" strokeWidth="1.5" fill="none" opacity="0.8" />
          <text x="24" y="33" textAnchor="middle" fontSize="30" fontWeight="800" fontFamily="'Segoe UI', system-ui, sans-serif" letterSpacing="-1" fill="url(#sTxtG)">S</text>
        </svg>
        {/* Wordmark */}
        <div style={{ fontSize: "26px", lineHeight: 1, letterSpacing: "-0.04em", fontFamily: "'Segoe UI', system-ui, sans-serif" }}>
          <span style={{ fontWeight: 800, background: "linear-gradient(120deg, #c4b5fd 0%, #818cf8 50%, #67e8f9 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>Stream</span>
          <span style={{ fontWeight: 300, color: "#cbd5e1" }}>Mate</span>
        </div>
        <p style={{ fontSize: "9px", color: "rgba(148,163,184,0.55)", letterSpacing: "0.18em", textTransform: "uppercase", fontFamily: "'Segoe UI', system-ui, sans-serif" }}>
          Watch Together · Live Together
        </p>
        {/* Wave */}
        <svg width="160" height="18" viewBox="0 0 160 18" fill="none" style={{ opacity: 0.35 }}>
          <defs><linearGradient id="wG" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="transparent" /><stop offset="30%" stopColor="#7c3aed" />
            <stop offset="70%" stopColor="#06b6d4" /><stop offset="100%" stopColor="transparent" />
          </linearGradient></defs>
          <path d="M0 9 Q20 0 40 9 Q60 18 80 9 Q100 0 120 9 Q140 18 160 9" stroke="url(#wG)" strokeWidth="1.5" fill="none" strokeLinecap="round" />
        </svg>
        {/* Dots */}
        <div className="flex items-center gap-2">
          {[0,1,2].map(i => (
            <div key={i} style={{ width: i===1?"9px":"7px", height: i===1?"9px":"7px", borderRadius: "50%", background: i===1 ? "linear-gradient(135deg,#7c3aed,#06b6d4)" : "transparent", border: i!==1 ? "1.5px solid rgba(148,163,184,0.3)" : "none" }} />
          ))}
        </div>
        <p style={{ fontSize: "9px", color: "rgba(148,163,184,0.3)", letterSpacing: "0.1em" }}>v1.0.0</p>
      </div>
    </div>
  );
}