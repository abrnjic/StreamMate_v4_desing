/**
 * AppPreviewContent — mini render of StreamMate home UI inside the iPhone mockup
 * Completely static, visual-only preview
 */
export default function AppPreviewContent() {
  const channels = [
    { name: "HRT 1", color: "#3b82f6", num: "01" },
    { name: "Nova TV", color: "#ef4444", num: "02" },
    { name: "RTL", color: "#f59e0b", num: "03" },
    { name: "Sport", color: "#10b981", num: "04" },
  ];

  const movies = [
    { title: "Dune 2", color: "#d97706", img: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=80&h=120&fit=crop" },
    { title: "Oppenheimer", color: "#dc2626", img: "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=80&h=120&fit=crop" },
    { title: "Avatar", color: "#0891b2", img: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=80&h=120&fit=crop" },
  ];

  return (
    <div
      className="w-full h-full overflow-hidden text-white"
      style={{ background: "linear-gradient(180deg, #060a18 0%, #080c20 100%)", fontFamily: "'Segoe UI', system-ui, sans-serif" }}
    >
      {/* Status bar */}
      <div className="flex items-center justify-between px-5 pt-3 pb-1">
        <span style={{ fontSize: "10px", fontWeight: 600, color: "rgba(255,255,255,0.8)" }}>9:41</span>
        <div className="flex items-center gap-1">
          {/* Signal bars */}
          <div className="flex items-end gap-0.5">
            {[3, 5, 7, 9].map((h, i) => (
              <div key={i} style={{ width: "3px", height: `${h}px`, borderRadius: "1px", background: i < 3 ? "rgba(255,255,255,0.9)" : "rgba(255,255,255,0.3)" }} />
            ))}
          </div>
          {/* WiFi */}
          <svg width="12" height="10" viewBox="0 0 12 10" fill="none">
            <path d="M6 8.5C6.55228 8.5 7 8.94772 7 9.5C7 10.0523 6.55228 10.5 6 10.5C5.44772 10.5 5 10.0523 5 9.5C5 8.94772 5.44772 8.5 6 8.5Z" fill="rgba(255,255,255,0.9)" />
            <path d="M3.5 6.5C4.33 5.67 5.11 5.5 6 5.5C6.89 5.5 7.67 5.67 8.5 6.5" stroke="rgba(255,255,255,0.9)" strokeWidth="1" strokeLinecap="round" fill="none" />
            <path d="M1.5 4C3 2.5 4.5 2 6 2C7.5 2 9 2.5 10.5 4" stroke="rgba(255,255,255,0.5)" strokeWidth="1" strokeLinecap="round" fill="none" />
          </svg>
          {/* Battery */}
          <div style={{ width: "20px", height: "10px", borderRadius: "2px", border: "1px solid rgba(255,255,255,0.5)", padding: "1.5px", display: "flex", alignItems: "center" }}>
            <div style={{ width: "80%", height: "100%", borderRadius: "1px", background: "#22c55e" }} />
          </div>
        </div>
      </div>

      {/* Top nav */}
      <div className="flex items-center justify-between px-4 py-2">
        <div style={{ fontSize: "14px", fontWeight: 800, background: "linear-gradient(90deg, #c4b5fd, #67e8f9)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
          StreamMate
        </div>
        <div className="flex gap-1.5">
          <div style={{ width: "24px", height: "24px", borderRadius: "8px", background: "rgba(255,255,255,0.07)", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.7)" strokeWidth="2" strokeLinecap="round">
              <circle cx="11" cy="11" r="8" /><path d="m21 21-4.35-4.35" />
            </svg>
          </div>
          <div style={{ width: "24px", height: "24px", borderRadius: "8px", background: "rgba(255,255,255,0.07)", display: "flex", alignItems: "center", justifyContent: "center", position: "relative" }}>
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.7)" strokeWidth="2" strokeLinecap="round">
              <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" /><path d="M13.73 21a2 2 0 0 1-3.46 0" />
            </svg>
            <div style={{ position: "absolute", top: "3px", right: "3px", width: "5px", height: "5px", borderRadius: "50%", background: "#3b82f6" }} />
          </div>
        </div>
      </div>

      {/* Hero banner */}
      <div className="mx-3 mb-3 rounded-xl overflow-hidden" style={{ height: "130px", position: "relative", background: "linear-gradient(135deg, #1e1b4b 0%, #0c1445 100%)" }}>
        <img
          src="https://images.unsplash.com/photo-1511512578047-dfb367046420?w=300&h=160&fit=crop"
          alt="hero"
          style={{ width: "100%", height: "100%", objectFit: "cover", opacity: 0.5 }}
        />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(90deg, rgba(6,10,24,0.9) 0%, rgba(6,10,24,0.3) 100%)" }} />
        <div style={{ position: "absolute", bottom: "12px", left: "12px" }}>
          <div style={{ fontSize: "8px", color: "#67e8f9", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "3px" }}>🔴 LIVE</div>
          <div style={{ fontSize: "13px", fontWeight: 700, color: "white", lineHeight: 1.2 }}>HRT 1</div>
          <div style={{ fontSize: "9px", color: "rgba(255,255,255,0.5)", marginTop: "2px" }}>Dnevnik · 19:30</div>
          <div style={{ marginTop: "6px", display: "inline-flex", alignItems: "center", gap: "4px", background: "rgba(59,130,246,0.9)", borderRadius: "6px", padding: "3px 8px" }}>
            <svg width="8" height="8" viewBox="0 0 24 24" fill="white"><polygon points="5 3 19 12 5 21 5 3" /></svg>
            <span style={{ fontSize: "8px", fontWeight: 600, color: "white" }}>Gledaj</span>
          </div>
        </div>
      </div>

      {/* Live channels row */}
      <div className="px-3 mb-3">
        <div style={{ fontSize: "10px", fontWeight: 700, color: "rgba(255,255,255,0.8)", marginBottom: "6px" }}>📺 Live Kanali</div>
        <div className="flex gap-2">
          {channels.map((ch) => (
            <div key={ch.name} className="flex-1 rounded-lg p-1.5 text-center" style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.07)" }}>
              <div style={{ width: "24px", height: "24px", borderRadius: "8px", background: ch.color + "30", border: `1px solid ${ch.color}50`, margin: "0 auto 3px", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <span style={{ fontSize: "6px", fontWeight: 800, color: ch.color }}>{ch.num}</span>
              </div>
              <div style={{ fontSize: "7px", color: "rgba(255,255,255,0.6)", fontWeight: 500 }}>{ch.name}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Movies row */}
      <div className="px-3 mb-3">
        <div style={{ fontSize: "10px", fontWeight: 700, color: "rgba(255,255,255,0.8)", marginBottom: "6px" }}>🎬 Filmovi</div>
        <div className="flex gap-2">
          {movies.map((m) => (
            <div key={m.title} style={{ width: "60px", flexShrink: 0 }}>
              <div style={{ width: "60px", height: "85px", borderRadius: "8px", overflow: "hidden", marginBottom: "4px", position: "relative", border: `1px solid ${m.color}30` }}>
                <img src={m.img} alt={m.title} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                <div style={{ position: "absolute", inset: 0, background: "linear-gradient(180deg, transparent 50%, rgba(0,0,0,0.7) 100%)" }} />
              </div>
              <div style={{ fontSize: "7px", color: "rgba(255,255,255,0.6)", fontWeight: 500, lineHeight: 1.2 }}>{m.title}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom nav */}
      <div
        className="flex items-center justify-around px-2 py-2"
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          background: "rgba(6,10,24,0.95)",
          borderTop: "1px solid rgba(59,130,246,0.12)",
          backdropFilter: "blur(10px)",
        }}
      >
        {[
          { icon: "M5 12s2.545-5 7-5c4.454 0 7 5 7 5s-2.546 5-7 5c-4.455 0-7-5-7-5z M12 13c.552 0 1-.448 1-1s-.448-1-1-1-1 .448-1 1 .448 1 1 1z", label: "Sve", active: true },
          { icon: "M22 17H2a3 3 0 0 0 3-3V9a7 7 0 0 1 14 0v5a3 3 0 0 0 3 3zm-8.27 4a2 2 0 0 1-3.46 0", label: "Live" },
          { icon: "M7 2h10a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2z", label: "Serije" },
          { icon: "M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z", label: "Favoriti" },
        ].map((item) => (
          <div key={item.label} className="flex flex-col items-center gap-0.5">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none"
              stroke={item.active ? "#3b82f6" : "rgba(148,163,184,0.6)"}
              strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d={item.icon} />
            </svg>
            <span style={{ fontSize: "6px", color: item.active ? "#3b82f6" : "rgba(148,163,184,0.5)", fontWeight: item.active ? 700 : 400 }}>{item.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}