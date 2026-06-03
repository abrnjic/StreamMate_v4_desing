/**
 * BrandLogo — StreamMate brand logo, pure SVG, no external images.
 * Props:
 *   variant: "full" (icon + text) | "icon" (icon only)
 *   height: pixel height (default 40)
 */
export default function BrandLogo({ variant = "full", height = 40 }) {
  const iconSize = height;
  const fontSize = height * 0.55;

  return (
    <div className="flex items-center gap-2" style={{ height }}>
      {/* Icon: glowing S-wave */}
      <svg
        width={iconSize}
        height={iconSize}
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{
          filter: "drop-shadow(0 0 8px #6366f1) drop-shadow(0 0 16px #3b82f6)",
          flexShrink: 0,
        }}
      >
        <defs>
          <linearGradient id="smGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#3b82f6" />
            <stop offset="50%" stopColor="#6366f1" />
            <stop offset="100%" stopColor="#8b5cf6" />
          </linearGradient>
          <linearGradient id="smGrad2" x1="100%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#8b5cf6" />
            <stop offset="100%" stopColor="#3b82f6" />
          </linearGradient>
        </defs>

        {/* Rounded square background */}
        <rect x="2" y="2" width="44" height="44" rx="12" fill="url(#smGrad)" opacity="0.15" />
        <rect x="2" y="2" width="44" height="44" rx="12" stroke="url(#smGrad)" strokeWidth="1.5" fill="none" opacity="0.5" />

        {/* Bold S shape */}
        <path
          d="M31 13C31 13 25 11 20 13C15 15 13 19 17 22C20 24 28 24 31 27C34 30 32 35 27 37C22 39 16 37 16 37"
          stroke="url(#smGrad)"
          strokeWidth="4.5"
          strokeLinecap="round"
          fill="none"
        />

        {/* Play triangle accent */}
        <polygon
          points="34,21 40,24 34,27"
          fill="url(#smGrad2)"
          opacity="0.9"
        />
      </svg>

      {/* Wordmark */}
      {variant === "full" && (
        <div
          className="font-black tracking-tight select-none"
          style={{ fontSize, lineHeight: 1, letterSpacing: "-0.5px" }}
        >
          <span style={{ color: "#ffffff" }}>Stream</span>
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
    </div>
  );
}