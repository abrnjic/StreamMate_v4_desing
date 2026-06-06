/**
 * IPhoneMockup — Realistic iPhone 17 Pro titanium frame
 * Accurate proportions, Dynamic Island, Camera Control, side buttons
 */
export default function IPhoneMockup({ children, className = "" }) {
  // Device dimensions: 393×852pt → scaled to fit nicely
  const W = 300;
  const H = 650;

  return (
    <div className={`relative ${className}`} style={{ width: `${W}px`, height: `${H}px` }}>
      <svg
        viewBox={`0 0 ${W} ${H}`}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute inset-0 w-full h-full pointer-events-none z-10"
        style={{ filter: "drop-shadow(0 8px 32px rgba(0,0,0,0.6)) drop-shadow(0 2px 8px rgba(0,0,0,0.8))" }}
      >
        <defs>
          {/* Titanium frame gradients */}
          <linearGradient id="titaniumSide" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#5a5a6a" />
            <stop offset="15%" stopColor="#9a9aaa" />
            <stop offset="35%" stopColor="#d4d4e0" />
            <stop offset="50%" stopColor="#f0f0f8" />
            <stop offset="65%" stopColor="#c0c0d0" />
            <stop offset="85%" stopColor="#8a8a9a" />
            <stop offset="100%" stopColor="#4a4a5a" />
          </linearGradient>
          <linearGradient id="titaniumVert" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#b0b0c0" />
            <stop offset="20%" stopColor="#e8e8f4" />
            <stop offset="50%" stopColor="#d0d0e0" />
            <stop offset="80%" stopColor="#e0e0ec" />
            <stop offset="100%" stopColor="#9090a0" />
          </linearGradient>
          <linearGradient id="titaniumBtn" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#c8c8d8" />
            <stop offset="50%" stopColor="#e8e8f4" />
            <stop offset="100%" stopColor="#a8a8b8" />
          </linearGradient>
          {/* Screen gloss */}
          <linearGradient id="gloss" x1="0" y1="0" x2="0.4" y2="1">
            <stop offset="0%" stopColor="rgba(255,255,255,0.08)" />
            <stop offset="40%" stopColor="rgba(255,255,255,0.03)" />
            <stop offset="100%" stopColor="rgba(255,255,255,0)" />
          </linearGradient>
          {/* Bezel inner shadow */}
          <linearGradient id="bezelGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#111118" />
            <stop offset="100%" stopColor="#0a0a12" />
          </linearGradient>
          {/* Dynamic Island */}
          <clipPath id="screenClip">
            <rect x="13" y="13" width={W - 26} height={H - 26} rx="42" />
          </clipPath>
        </defs>

        {/* ═══ OUTER TITANIUM FRAME ═══ */}
        {/* Main body shape */}
        <rect x="0.75" y="0.75" width={W - 1.5} height={H - 1.5} rx="50"
          fill="url(#titaniumVert)" />

        {/* Frame edge highlight - top */}
        <path d={`M 50 1.5 Q ${W/2} 0 ${W-50} 1.5`}
          stroke="rgba(255,255,255,0.55)" strokeWidth="1" fill="none" strokeLinecap="round" />
        {/* Frame edge highlight - left */}
        <path d={`M 1.5 80 Q 0 ${H/2} 1.5 ${H-80}`}
          stroke="rgba(255,255,255,0.2)" strokeWidth="1" fill="none" strokeLinecap="round" />
        {/* Frame edge shadow - right */}
        <path d={`M ${W-1.5} 80 Q ${W} ${H/2} ${W-1.5} ${H-80}`}
          stroke="rgba(0,0,0,0.4)" strokeWidth="1" fill="none" strokeLinecap="round" />
        {/* Frame edge shadow - bottom */}
        <path d={`M 50 ${H-1.5} Q ${W/2} ${H} ${W-50} ${H-1.5}`}
          stroke="rgba(0,0,0,0.5)" strokeWidth="1" fill="none" strokeLinecap="round" />

        {/* ═══ INNER BEZEL ═══ */}
        <rect x="7" y="7" width={W - 14} height={H - 14} rx="44"
          fill="url(#bezelGrad)" />

        {/* Screen surface */}
        <rect x="13" y="13" width={W - 26} height={H - 26} rx="40"
          fill="#06080f" />

        {/* ═══ SIDE BUTTONS ═══ */}

        {/* LEFT — Action button (top-left, small, pill) */}
        <rect x="-1" y="128" width="5.5" height="34" rx="2.75"
          fill="url(#titaniumBtn)"
          style={{ filter: "drop-shadow(1px 0 2px rgba(0,0,0,0.5))" }} />
        <rect x="-0.5" y="129" width="4" height="32" rx="2"
          fill="rgba(255,255,255,0.15)" />

        {/* LEFT — Volume Up */}
        <rect x="-1" y="178" width="5.5" height="52" rx="2.75"
          fill="url(#titaniumBtn)"
          style={{ filter: "drop-shadow(1px 0 2px rgba(0,0,0,0.5))" }} />
        <rect x="-0.5" y="179" width="4" height="50" rx="2"
          fill="rgba(255,255,255,0.15)" />

        {/* LEFT — Volume Down */}
        <rect x="-1" y="242" width="5.5" height="52" rx="2.75"
          fill="url(#titaniumBtn)"
          style={{ filter: "drop-shadow(1px 0 2px rgba(0,0,0,0.5))" }} />
        <rect x="-0.5" y="243" width="4" height="50" rx="2"
          fill="rgba(255,255,255,0.15)" />

        {/* RIGHT — Power button */}
        <rect x={W - 4.5} y="185" width="5.5" height="80" rx="2.75"
          fill="url(#titaniumBtn)"
          style={{ filter: "drop-shadow(-1px 0 2px rgba(0,0,0,0.5))" }} />
        <rect x={W - 4} y="186" width="4" height="78" rx="2"
          fill="rgba(255,255,255,0.15)" />

        {/* RIGHT — Camera Control (new on iPhone 16/17 — elongated button, lower right) */}
        <rect x={W - 4.5} y="370" width="5.5" height="55" rx="2.75"
          fill="url(#titaniumBtn)"
          style={{ filter: "drop-shadow(-1px 0 2px rgba(0,0,0,0.5))" }} />
        <rect x={W - 4} y="371" width="4" height="53" rx="2"
          fill="rgba(255,255,255,0.1)" />
        {/* Camera Control capacitive ring hint */}
        <rect x={W - 3.5} y="388" width="3" height="1.5" rx="0.75"
          fill="rgba(255,255,255,0.4)" />
        <rect x={W - 3.5} y="392" width="3" height="1.5" rx="0.75"
          fill="rgba(255,255,255,0.4)" />
        <rect x={W - 3.5} y="396" width="3" height="1.5" rx="0.75"
          fill="rgba(255,255,255,0.4)" />

        {/* ═══ DYNAMIC ISLAND ═══ */}
        {/* Pill shape — wider, centered */}
        <rect x="101" y="19" width="98" height="32" rx="16"
          fill="#000000" />
        {/* Inner depth shadow */}
        <rect x="102" y="20" width="96" height="30" rx="15"
          fill="#050505" stroke="rgba(255,255,255,0.04)" strokeWidth="0.5" />
        {/* Front camera dot */}
        <circle cx="173" cy="35" r="5.5" fill="#0a0a0a" />
        <circle cx="173" cy="35" r="3.5" fill="#080808" />
        {/* Camera lens reflection */}
        <circle cx="172" cy="34" r="1.2" fill="rgba(255,255,255,0.08)" />
        {/* Proximity sensor (left of camera) */}
        <rect x="130" y="31.5" width="20" height="7" rx="3.5"
          fill="#080808" />
        <rect x="131" y="32.5" width="18" height="5" rx="2.5"
          fill="#050505" />

        {/* ═══ SCREEN GLOSS ═══ */}
        <rect x="13" y="13" width={W - 26} height={H - 26} rx="40"
          fill="url(#gloss)" />

        {/* Left edge inner bevel */}
        <path d={`M 13 55 Q 14 ${H/2} 13 ${H-55}`}
          stroke="rgba(255,255,255,0.06)" strokeWidth="1" fill="none" />
        {/* Right edge inner bevel */}
        <path d={`M ${W-13} 55 Q ${W-14} ${H/2} ${W-13} ${H-55}`}
          stroke="rgba(0,0,0,0.3)" strokeWidth="1" fill="none" />

        {/* ═══ HOME INDICATOR ═══ */}
        <rect x="110" y={H - 20} width="80" height="5" rx="2.5"
          fill="rgba(255,255,255,0.28)" />

        {/* ═══ BACK CAMERA HINT (subtle corner glow representing lens bump) ═══ */}
        {/* Very subtle top-right area glow for realism */}
        <radialGradient id="cameraGlow" cx="75%" cy="0%" r="30%">
          <stop offset="0%" stopColor="rgba(255,255,255,0.04)" />
          <stop offset="100%" stopColor="rgba(255,255,255,0)" />
        </radialGradient>
        <rect x="13" y="13" width={W - 26} height={H - 26} rx="40"
          fill="url(#cameraGlow)" />
      </svg>

      {/* ═══ APP CONTENT ═══ */}
      <div
        className="absolute overflow-hidden"
        style={{
          top: "13px",
          left: "13px",
          width: `${W - 26}px`,
          height: `${H - 26}px`,
          borderRadius: "40px",
          zIndex: 1,
          background: "#06080f",
        }}
      >
        {children}
      </div>
    </div>
  );
}