import { useState } from "react";

export default function PhoneFlowActivation() {
  const [tab, setTab] = useState("code"); // code | m3u

  return (
    <div className="w-full h-full flex flex-col overflow-hidden"
      style={{ background: "linear-gradient(180deg, #060a18 0%, #080c20 100%)", fontFamily: "'Segoe UI', system-ui, sans-serif", color: "white" }}>

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

      {/* Logo mini */}
      <div className="flex items-center gap-2 px-4 pt-2 pb-3 flex-shrink-0">
        <svg width="22" height="22" viewBox="0 0 48 48" fill="none" style={{ filter:"drop-shadow(0 0 6px rgba(124,58,237,0.8))" }}>
          <defs>
            <linearGradient id="aIG" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stopColor="#7c3aed"/><stop offset="100%" stopColor="#06b6d4"/></linearGradient>
            <linearGradient id="aTG" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stopColor="#c4b5fd"/><stop offset="100%" stopColor="#67e8f9"/></linearGradient>
          </defs>
          <rect x="2" y="2" width="44" height="44" rx="13" fill="url(#aIG)" opacity="0.25"/>
          <rect x="2" y="2" width="44" height="44" rx="13" stroke="url(#aIG)" strokeWidth="1.5" fill="none" opacity="0.7"/>
          <text x="24" y="33" textAnchor="middle" fontSize="30" fontWeight="800" fontFamily="'Segoe UI',system-ui,sans-serif" letterSpacing="-1" fill="url(#aTG)">S</text>
        </svg>
        <div style={{ fontSize:"14px", fontWeight:700 }}>
          <span style={{ background:"linear-gradient(90deg,#c4b5fd,#67e8f9)", WebkitBackgroundClip:"text", WebkitTextFillColor:"transparent", backgroundClip:"text" }}>Stream</span>
          <span style={{ fontWeight:300, color:"#94a3b8" }}>Mate</span>
        </div>
      </div>

      {/* Title */}
      <div className="px-4 mb-3 flex-shrink-0">
        <h2 style={{ fontSize:"15px", fontWeight:800, color:"white", marginBottom:"3px" }}>Aktivacija uređaja</h2>
        <p style={{ fontSize:"9px", color:"rgba(148,163,184,0.7)" }}>Odaberi metodu aktivacije</p>
      </div>

      {/* Tabs */}
      <div className="flex mx-4 mb-4 flex-shrink-0" style={{ background:"rgba(255,255,255,0.05)", borderRadius:"10px", padding:"3px", gap:"3px" }}>
        {[{id:"code", label:"XC Codes"}, {id:"m3u", label:"M3U URL"}].map(t => (
          <button key={t.id} onClick={() => setTab(t.id)}
            className="flex-1 py-1.5 rounded-lg transition-all"
            style={{ fontSize:"9px", fontWeight:700, background: tab===t.id ? "linear-gradient(135deg,#7c3aed,#4f46e5)" : "transparent", color: tab===t.id ? "white" : "rgba(148,163,184,0.6)" }}>
            {t.label}
          </button>
        ))}
      </div>

      {/* Form */}
      <div className="flex-1 px-4 overflow-hidden">
        {tab === "code" ? (
          <div className="flex flex-col gap-2.5">
            {/* URL */}
            <div>
              <label style={{ fontSize:"8px", color:"rgba(148,163,184,0.7)", display:"block", marginBottom:"4px", fontWeight:600, letterSpacing:"0.05em", textTransform:"uppercase" }}>Server URL</label>
              <div style={{ background:"rgba(255,255,255,0.05)", border:"1px solid rgba(99,102,241,0.3)", borderRadius:"10px", padding:"8px 10px", display:"flex", alignItems:"center", gap:"6px" }}>
                <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="rgba(99,102,241,0.7)" strokeWidth="2"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>
                <span style={{ fontSize:"9px", color:"rgba(148,163,184,0.4)" }}>http://server.iptv.com:8080</span>
              </div>
            </div>
            {/* Username */}
            <div>
              <label style={{ fontSize:"8px", color:"rgba(148,163,184,0.7)", display:"block", marginBottom:"4px", fontWeight:600, letterSpacing:"0.05em", textTransform:"uppercase" }}>Korisničko ime</label>
              <div style={{ background:"rgba(255,255,255,0.05)", border:"1px solid rgba(255,255,255,0.08)", borderRadius:"10px", padding:"8px 10px", display:"flex", alignItems:"center", gap:"6px" }}>
                <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="rgba(148,163,184,0.5)" strokeWidth="2"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
                <span style={{ fontSize:"9px", color:"rgba(148,163,184,0.4)" }}>korisnik123</span>
              </div>
            </div>
            {/* Password */}
            <div>
              <label style={{ fontSize:"8px", color:"rgba(148,163,184,0.7)", display:"block", marginBottom:"4px", fontWeight:600, letterSpacing:"0.05em", textTransform:"uppercase" }}>Lozinka</label>
              <div style={{ background:"rgba(255,255,255,0.05)", border:"1px solid rgba(255,255,255,0.08)", borderRadius:"10px", padding:"8px 10px", display:"flex", alignItems:"center", gap:"6px" }}>
                <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="rgba(148,163,184,0.5)" strokeWidth="2"><rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
                <span style={{ fontSize:"9px", color:"rgba(148,163,184,0.4)" }}>••••••••</span>
              </div>
            </div>
          </div>
        ) : (
          <div className="flex flex-col gap-2.5">
            <div>
              <label style={{ fontSize:"8px", color:"rgba(148,163,184,0.7)", display:"block", marginBottom:"4px", fontWeight:600, letterSpacing:"0.05em", textTransform:"uppercase" }}>M3U Playlist URL</label>
              <div style={{ background:"rgba(255,255,255,0.05)", border:"1px solid rgba(6,182,212,0.3)", borderRadius:"10px", padding:"8px 10px", display:"flex", alignItems:"center", gap:"6px" }}>
                <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="rgba(6,182,212,0.7)" strokeWidth="2"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/></svg>
                <span style={{ fontSize:"9px", color:"rgba(148,163,184,0.4)" }}>http://lista.m3u/playlist</span>
              </div>
            </div>
            <div style={{ background:"rgba(6,182,212,0.08)", border:"1px solid rgba(6,182,212,0.2)", borderRadius:"10px", padding:"8px 10px" }}>
              <p style={{ fontSize:"8px", color:"rgba(6,182,212,0.8)", lineHeight:1.5 }}>
                📋 M3U format podržava sve IPTV playliste. Zalijepi URL direktno od tvog provajdera.
              </p>
            </div>
          </div>
        )}

        {/* Activate button */}
        <button style={{ marginTop:"14px", width:"100%", padding:"10px", borderRadius:"12px", background:"linear-gradient(135deg,#7c3aed,#4f46e5,#06b6d4)", color:"white", fontSize:"11px", fontWeight:800, border:"none", boxShadow:"0 0 20px rgba(99,102,241,0.4)", cursor:"pointer" }}>
          ⚡ Aktiviraj StreamMate
        </button>
      </div>
    </div>
  );
}