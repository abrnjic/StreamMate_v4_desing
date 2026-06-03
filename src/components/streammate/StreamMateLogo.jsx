/**
 * StreamMate Logo — Fluid Wave S
 * Reusable logo component used across all screens.
 * Props:
 *   size       — icon size in px (default 64)
 *   showText   — show "StreamMate" wordmark (default true)
 *   showTag    — show tagline below wordmark (default false)
 *   textSize   — wordmark font size class e.g. "text-2xl" (default "text-3xl")
 *   glowColor  — CSS glow color string (default rgba(99,102,241,0.8))
 */
export default function StreamMateLogo({
  size = 64,
  showText = true,
  showTag = false,
  textSize = "text-3xl",
  glowColor = "rgba(99,102,241,0.8)",
}) {
  const id = `waveGrad-${size}`;

  return (
    <div className="flex flex-col items-center gap-0">
      {/* Icon */}
      <div style={{ filter: `drop-shadow(0 0 ${Math.round(size * 0.35)}px ${glowColor})` }}>
        <svg
          width={size}
          height={size}
          viewBox="0 0 100 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id={id} x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#3b82f6" />
              <stop offset="45%" stopColor="#6366f1" />
              <stop offset="100%" stopColor="#8b5cf6" />
            </linearGradient>
          </defs>

          {/* Wave 1 — top arc */}
          <path
            d="M15 30 C15 30, 30 10, 50 18 C70 26, 80 14, 85 20"
            stroke={`url(#${id})`}
            strokeWidth="9"
            strokeLinecap="round"
            fill="none"
            opacity="0.95"
          />
          {/* Wave 2 — middle S-curve (main) */}
          <path
            d="M15 50 C25 38, 45 38, 50 50 C55 62, 75 62, 85 50"
            stroke={`url(#${id})`}
            strokeWidth="9"
            strokeLinecap="round"
            fill="none"
            opacity="1"
          />
          {/* Wave 3 — bottom arc */}
          <path
            d="M15 80 C20 86, 30 74, 50 82 C70 90, 85 70, 85 80"
            stroke={`url(#${id})`}
            strokeWidth="9"
            strokeLinecap="round"
            fill="none"
            opacity="0.85"
          />
          {/* Connecting vertical dots / nodes */}
          <circle cx="15" cy="30" r="4.5" fill={`url(#${id})`} opacity="0.7" />
          <circle cx="85" cy="20" r="4.5" fill={`url(#${id})`} opacity="0.7" />
          <circle cx="50" cy="50" r="5"   fill={`url(#${id})`} opacity="0.9" />
          <circle cx="15" cy="80" r="4.5" fill={`url(#${id})`} opacity="0.7" />
          <circle cx="85" cy="80" r="4.5" fill={`url(#${id})`} opacity="0.7" />
        </svg>
      </div>

      {/* Wordmark */}
      {showText && (
        <div className={`flex items-baseline gap-0 ${textSize} font-black leading-tight`} style={{ letterSpacing: "-0.5px" }}>
          <span className="text-white">Stream</span>
          <span
            style={{
              background: "linear-gradient(135deg, #3b82f6, #8b5cf6)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            Mate
          </span>
        </div>
      )}

      {/* Tagline */}
      {showTag && (
        <p
          className="text-xs tracking-widest mt-1"
          style={{ color: "rgba(148,163,184,0.7)", letterSpacing: "0.22em" }}
        >
          YOUR WORLD. YOUR STREAM.
        </p>
      )}
    </div>
  );
}