/**
 * IPhoneMockup — iPhone 17 Pro SVG frame with app screenshot inside
 * Shows the StreamMate app UI inside a realistic iPhone 17 Pro device frame
 */
export default function IPhoneMockup({ children, className = "" }) {
  return (
    <div className={`relative ${className}`} style={{ width: "320px", height: "660px" }}>
      {/* iPhone 17 Pro frame */}
      <svg
        viewBox="0 0 320 660"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute inset-0 w-full h-full pointer-events-none z-10"
      >
        <defs>
          <linearGradient id="frameGrad" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#8a8a9a" />
            <stop offset="30%" stopColor="#c8c8d8" />
            <stop offset="50%" stopColor="#e0e0f0" />
            <stop offset="70%" stopColor="#b0b0c8" />
            <stop offset="100%" stopColor="#7a7a8a" />
          </linearGradient>
          <linearGradient id="frameGrad2" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#9a9aaa" />
            <stop offset="50%" stopColor="#d0d0e0" />
            <stop offset="100%" stopColor="#8a8a9a" />
          </linearGradient>
          <linearGradient id="screenGloss" x1="0" y1="0" x2="0.3" y2="1">
            <stop offset="0%" stopColor="rgba(255,255,255,0.12)" />
            <stop offset="100%" stopColor="rgba(255,255,255,0)" />
          </linearGradient>
          <clipPath id="screenClip">
            <rect x="18" y="18" width="284" height="624" rx="36" />
          </clipPath>
        </defs>

        {/* Outer body */}
        <rect x="1" y="1" width="318" height="658" rx="52" fill="url(#frameGrad)" />
        <rect x="1" y="1" width="318" height="658" rx="52" stroke="url(#frameGrad2)" strokeWidth="1.5" fill="none" />

        {/* Inner body / bezel */}
        <rect x="8" y="8" width="304" height="644" rx="46" fill="#1a1a2e" />

        {/* Screen area background */}
        <rect x="16" y="16" width="288" height="628" rx="38" fill="#060a18" />

        {/* Dynamic Island */}
        <rect x="118" y="24" width="84" height="28" rx="14" fill="#000000" />
        {/* Camera dot in Dynamic Island */}
        <circle cx="183" cy="38" r="5" fill="#1a1a1a" />
        <circle cx="183" cy="38" r="2.5" fill="#0a0a0a" />

        {/* Screen gloss overlay */}
        <rect x="16" y="16" width="288" height="628" rx="38" fill="url(#screenGloss)" />

        {/* Side buttons - right side (power) */}
        <rect x="314" y="160" width="6" height="70" rx="3" fill="url(#frameGrad)" />

        {/* Side buttons - left side (volume up) */}
        <rect x="0" y="140" width="6" height="50" rx="3" fill="url(#frameGrad)" />
        {/* volume down */}
        <rect x="0" y="204" width="6" height="50" rx="3" fill="url(#frameGrad)" />
        {/* silent toggle */}
        <rect x="0" y="100" width="6" height="30" rx="3" fill="url(#frameGrad)" />

        {/* Bottom indicator bar */}
        <rect x="120" y="636" width="80" height="4" rx="2" fill="rgba(255,255,255,0.3)" />

        {/* Camera lens bump (back - subtle reflection on front) */}
        {/* Top edge highlight */}
        <path d="M 60 8 Q 160 4 260 8" stroke="rgba(255,255,255,0.25)" strokeWidth="1.5" fill="none" strokeLinecap="round" />
      </svg>

      {/* App content inside screen */}
      <div
        className="absolute overflow-hidden"
        style={{
          top: "18px",
          left: "18px",
          width: "284px",
          height: "624px",
          borderRadius: "36px",
          zIndex: 1,
        }}
      >
        {children}
      </div>
    </div>
  );
}