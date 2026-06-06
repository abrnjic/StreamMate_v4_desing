export default function PhoneFlowHome() {
  const channels = [
    { name: "HRT 1", num: "01", color: "#3b82f6", live: true },
    { name: "Nova TV", num: "02", color: "#ef4444", live: true },
    { name: "RTL", num: "03", color: "#f59e0b", live: false },
    { name: "Sport 1", num: "04", color: "#10b981", live: true },
  ];
  const movies = [
    { title: "Dune 2", genre: "Sci-Fi", rating: "8.5", img: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=100&h=140&fit=crop" },
    { title: "Oppenheimer", genre: "Drama", rating: "8.3", img: "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=100&h=140&fit=crop" },
    { title: "Avatar 3", genre: "Action", rating: "7.9", img: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=100&h=140&fit=crop" },
  ];
  const series = [
    { title: "House of Dragon", ep: "S02E08", img: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=100&h=60&fit=crop" },
    { title: "The Last of Us", ep: "S02E03", img: "https://images.unsplash.com/photo-1552820728-8b83bb6b773f?w=100&h=60&fit=crop" },
    { title: "Stranger Things", ep: "S05E01", img: "https://images.unsplash.com/photo-1509347528160-9a9e33742cdb?w=100&h=60&fit=crop" },
  ];

  return (
    <div className="w-full h-full overflow-y-auto overflow-x-hidden"
      style={{ background: "linear-gradient(180deg, #060a18 0%, #080c20 100%)", fontFamily: "'Segoe UI', system-ui, sans-serif", color: "white" }}
    >
      {/* Status bar */}
      <div className="flex items-center justify-between px-4 pt-3 pb-1 flex-shrink-0">
        <span style={{ fontSize: "10px", fontWeight: 600, color: "rgba(255,255,255,0.8)" }}>9:41</span>
        <div className="flex items-center gap-1">
          <div className="flex items-end gap-0.5">{[3,5,7,9].map((h,i)=><div key={i} style={{ width:"3px", height:`${h}px`, borderRadius:"1px", background: i<3?"rgba(255,255,255,0.9)":"rgba(255,255,255,0.3)" }}/>)}</div>
          <div style={{ width:"20px", height:"10px", borderRadius:"2px", border:"1px solid rgba(255,255,255,0.5)", padding:"1.5px", display:"flex", alignItems:"center" }}>
            <div style={{ width:"75%", height:"100%", borderRadius:"1px", background:"#22c55e" }}/>
          </div>
        </div>
      </div>

      {/* Top bar */}
      <div className="flex items-center justify-between px-4 py-2">
        <div style={{ fontSize:"14px", fontWeight:800 }}>
          <span style={{ background:"linear-gradient(90deg,#c4b5fd,#67e8f9)", WebkitBackgroundClip:"text", WebkitTextFillColor:"transparent", backgroundClip:"text" }}>Stream</span>
          <span style={{ fontWeight:300, color:"#94a3b8" }}>Mate</span>
        </div>
        <div className="flex gap-1.5">
          <div style={{ width:"24px", height:"24px", borderRadius:"8px", background:"rgba(255,255,255,0.07)", display:"flex", alignItems:"center", justifyContent:"center" }}>
            <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.7)" strokeWidth="2"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/></svg>
          </div>
          <div style={{ width:"28px", height:"28px", borderRadius:"8px", background:"linear-gradient(135deg,#7c3aed,#06b6d4)", display:"flex", alignItems:"center", justifyContent:"center" }}>
            <span style={{ fontSize:"11px", fontWeight:800, color:"white" }}>K</span>
          </div>
        </div>
      </div>

      {/* Hero */}
      <div className="mx-3 mb-3 rounded-xl overflow-hidden" style={{ height:"120px", position:"relative" }}>
        <img src="https://images.unsplash.com/photo-1511512578047-dfb367046420?w=320&h=180&fit=crop" alt="hero" style={{ width:"100%", height:"100%", objectFit:"cover", opacity:0.55 }}/>
        <div style={{ position:"absolute", inset:0, background:"linear-gradient(90deg, rgba(6,10,24,0.92) 0%, rgba(6,10,24,0.2) 100%)" }}/>
        <div style={{ position:"absolute", bottom:"10px", left:"10px" }}>
          <div style={{ fontSize:"7px", color:"#ef4444", letterSpacing:"0.12em", textTransform:"uppercase", marginBottom:"2px", display:"flex", alignItems:"center", gap:"4px" }}>
            <span style={{ display:"inline-block", width:"5px", height:"5px", borderRadius:"50%", background:"#ef4444", boxShadow:"0 0 6px #ef4444" }}/>LIVE
          </div>
          <div style={{ fontSize:"13px", fontWeight:800, color:"white", lineHeight:1.1 }}>HRT 1</div>
          <div style={{ fontSize:"8px", color:"rgba(255,255,255,0.5)", marginTop:"1px" }}>Dnevnik · 19:30</div>
          <div style={{ marginTop:"6px", display:"inline-flex", alignItems:"center", gap:"4px", background:"rgba(59,130,246,0.9)", borderRadius:"6px", padding:"3px 8px" }}>
            <svg width="7" height="7" viewBox="0 0 24 24" fill="white"><polygon points="5 3 19 12 5 21 5 3"/></svg>
            <span style={{ fontSize:"8px", fontWeight:700, color:"white" }}>Gledaj sada</span>
          </div>
        </div>
      </div>

      {/* Section: Live kanali */}
      <div className="px-3 mb-4">
        <div className="flex items-center justify-between mb-2">
          <span style={{ fontSize:"10px", fontWeight:800, color:"white" }}>📺 Live TV</span>
          <span style={{ fontSize:"8px", color:"#3b82f6", fontWeight:600 }}>Sve kanale →</span>
        </div>
        <div className="flex gap-2">
          {channels.map(ch => (
            <div key={ch.name} className="flex-1 rounded-xl p-1.5 flex flex-col items-center gap-1"
              style={{ background:"rgba(255,255,255,0.04)", border:`1px solid ${ch.live?"rgba(239,68,68,0.2)":"rgba(255,255,255,0.06)"}` }}>
              <div style={{ width:"26px", height:"26px", borderRadius:"8px", background:`${ch.color}20`, border:`1px solid ${ch.color}40`, display:"flex", alignItems:"center", justifyContent:"center", position:"relative" }}>
                <span style={{ fontSize:"7px", fontWeight:900, color:ch.color }}>{ch.num}</span>
                {ch.live && <div style={{ position:"absolute", top:"-2px", right:"-2px", width:"6px", height:"6px", borderRadius:"50%", background:"#ef4444", boxShadow:"0 0 4px #ef4444" }}/>}
              </div>
              <span style={{ fontSize:"6.5px", color:"rgba(255,255,255,0.6)", fontWeight:600, textAlign:"center", lineHeight:1.2 }}>{ch.name}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Section: Filmovi */}
      <div className="px-3 mb-4">
        <div className="flex items-center justify-between mb-2">
          <span style={{ fontSize:"10px", fontWeight:800, color:"white" }}>🎬 Filmovi</span>
          <span style={{ fontSize:"8px", color:"#3b82f6", fontWeight:600 }}>Sve →</span>
        </div>
        <div className="flex gap-2">
          {movies.map(m => (
            <div key={m.title} style={{ width:"68px", flexShrink:0 }}>
              <div style={{ width:"68px", height:"95px", borderRadius:"10px", overflow:"hidden", marginBottom:"4px", position:"relative", border:"1px solid rgba(255,255,255,0.08)" }}>
                <img src={m.img} alt={m.title} style={{ width:"100%", height:"100%", objectFit:"cover" }}/>
                <div style={{ position:"absolute", inset:0, background:"linear-gradient(180deg, transparent 50%, rgba(0,0,0,0.75) 100%)" }}/>
                <div style={{ position:"absolute", bottom:"4px", left:"4px", fontSize:"7px", color:"#fbbf24", fontWeight:700 }}>★ {m.rating}</div>
              </div>
              <div style={{ fontSize:"7.5px", color:"rgba(255,255,255,0.7)", fontWeight:600, lineHeight:1.2 }}>{m.title}</div>
              <div style={{ fontSize:"6.5px", color:"rgba(148,163,184,0.5)", marginTop:"1px" }}>{m.genre}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Section: Serije */}
      <div className="px-3 mb-4">
        <div className="flex items-center justify-between mb-2">
          <span style={{ fontSize:"10px", fontWeight:800, color:"white" }}>🎭 Serije</span>
          <span style={{ fontSize:"8px", color:"#3b82f6", fontWeight:600 }}>Sve →</span>
        </div>
        <div className="flex flex-col gap-2">
          {series.map(s => (
            <div key={s.title} className="flex items-center gap-2 rounded-xl p-2"
              style={{ background:"rgba(255,255,255,0.04)", border:"1px solid rgba(255,255,255,0.06)" }}>
              <div style={{ width:"48px", height:"32px", borderRadius:"8px", overflow:"hidden", flexShrink:0 }}>
                <img src={s.img} alt={s.title} style={{ width:"100%", height:"100%", objectFit:"cover" }}/>
              </div>
              <div className="flex-1 min-w-0">
                <div style={{ fontSize:"8.5px", fontWeight:700, color:"white", lineHeight:1.2 }}>{s.title}</div>
                <div style={{ fontSize:"7px", color:"rgba(148,163,184,0.6)", marginTop:"1px" }}>{s.ep}</div>
              </div>
              <div style={{ width:"20px", height:"20px", borderRadius:"50%", background:"rgba(59,130,246,0.2)", border:"1px solid rgba(59,130,246,0.4)", display:"flex", alignItems:"center", justifyContent:"center", flexShrink:0 }}>
                <svg width="7" height="7" viewBox="0 0 24 24" fill="#3b82f6"><polygon points="5 3 19 12 5 21 5 3"/></svg>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom nav */}
      <div style={{ position:"sticky", bottom:0, background:"rgba(6,10,24,0.98)", borderTop:"1px solid rgba(59,130,246,0.12)", backdropFilter:"blur(10px)", display:"flex", alignItems:"center", justifyContent:"space-around", padding:"6px 8px 8px" }}>
        {[
          { label:"Sve", active:true, path:"M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" },
          { label:"Live", path:"M22 17H2a3 3 0 0 0 3-3V9a7 7 0 0 1 14 0v5a3 3 0 0 0 3 3z" },
          { label:"Filmovi", path:"M19.82 2H4.18A2.18 2.18 0 0 0 2 4.18v15.64A2.18 2.18 0 0 0 4.18 22h15.64A2.18 2.18 0 0 0 22 19.82V4.18A2.18 2.18 0 0 0 19.82 2z" },
          { label:"Serije", path:"M21 3H3v18h18V3zM9 17H7v-7h2v7zm4 0h-2V7h2v10zm4 0h-2v-4h2v4z" },
          { label:"Favoriti", path:"M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" },
        ].map(item => (
          <div key={item.label} style={{ display:"flex", flexDirection:"column", alignItems:"center", gap:"2px" }}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke={item.active?"#3b82f6":"rgba(148,163,184,0.5)"} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d={item.path}/>
            </svg>
            <span style={{ fontSize:"6px", color:item.active?"#3b82f6":"rgba(148,163,184,0.5)", fontWeight:item.active?700:400 }}>{item.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}