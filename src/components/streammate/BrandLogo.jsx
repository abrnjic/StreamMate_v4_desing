/**
 * BrandLogo — StreamMate brand logo, implementacija prema brand assets handoff.
 * Props:
 *   variant: "full" (icon + wordmark) | "icon" (samo icon)
 *   height: pixel height (default 40)
 *   darkBg: true = gradijent za tamnu pozadinu (default), false = za svijetlu
 */
export default function BrandLogo({ variant = "full", height = 40, darkBg = true }) {
  const iconSize = height;
  const fontSize = height * 0.58;

  // Gradijenti prema brand assets
  const wordmarkGradient = darkBg
    ? "linear-gradient(120deg, #c4b5fd 0%, #818cf8 50%, #67e8f9 100%)"
    : "linear-gradient(120deg, #7c3aed 0%, #4f46e5 50%, #0891b2 100%)";

  return (
    <div className="flex items-center gap-2.5" style={{ height }}>
      {/* Icon: "S" lettermark u rounded-square obliku */}
      <svg
        width={iconSize}
        height={iconSize}
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{
          filter: "drop-shadow(0 0 8px rgba(124,58,237,0.7)) drop-shadow(0 0 18px rgba(6,182,212,0.4))",
          flexShrink: 0,
        }}
      >
        <defs>
          <linearGradient id="smIconGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#7c3aed" />
            <stop offset="50%" stopColor="#4f46e5" />
            <stop offset="100%" stopColor="#06b6d4" />
          </linearGradient>
          <linearGradient id="smIconGradText" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#c4b5fd" />
            <stop offset="100%" stopColor="#67e8f9" />
          </linearGradient>
        </defs>

        {/* Rounded square background */}
        <rect x="2" y="2" width="44" height="44" rx="13" fill="url(#smIconGrad)" opacity="0.18" />
        <rect x="2" y="2" width="44" height="44" rx="13" stroke="url(#smIconGrad)" strokeWidth="1.5" fill="none" opacity="0.55" />

        {/* "S" lettermark */}
        <text
          x="24"
          y="33"
          textAnchor="middle"
          fontSize="30"
          fontWeight="800"
          fontFamily="'Segoe UI', system-ui, sans-serif"
          letterSpacing="-1"
          fill="url(#smIconGradText)"
        >
          S
        </text>
      </svg>

      {/* Wordmark: "Stream" bold + "Mate" light, oba gradient */}
      {variant === "full" && (
        <div
          className="select-none"
          style={{
            fontSize,
            lineHeight: 1,
            letterSpacing: "-0.05em",
            fontFamily: "'Segoe UI', system-ui, sans-serif",
          }}
        >
          <span
            style={{
              fontWeight: 800,
              background: wordmarkGradient,
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
              background: wordmarkGradient,
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              opacity: 0.85,
            }}
          >
            Mate
          </span>
        </div>
      )}
    </div>
  );
}