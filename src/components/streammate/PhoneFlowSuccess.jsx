export default function PhoneFlowSuccess() {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center overflow-hidden relative"
      style={{ background: "linear-gradient(145deg, #060a18 0%, #0a1128 50%, #060e1e 100%)", fontFamily: "'Segoe UI', system-ui, sans-serif" }}>
      <div className="absolute" style={{ width:"250px", height:"250px", top:"50%", left:"50%", transform:"translate(-50%,-50%)", background:"radial-gradient(circle, rgba(34,197,94,0.2) 0%, transparent 70%)", borderRadius:"50%" }} />
      <div className="relative z-10 flex flex-col items-center gap-4">
        {/* Success ring */}
        <div className="relative flex items-center justify-center">
          <svg width="80" height="80" viewBox="0 0 80 80" fill="none">
            <circle cx="40" cy="40" r="36" stroke="rgba(34,197,94,0.2)" strokeWidth="3"/>
            <circle cx="40" cy="40" r="36" stroke="url(#sucGrad)" strokeWidth="3" strokeDasharray="226" strokeDashoffset="56" strokeLinecap="round"/>
            <defs><linearGradient id="sucGrad" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stopColor="#22c55e"/><stop offset="100%" stopColor="#06b6d4"/></linearGradient></defs>
          </svg>
          <div className="absolute flex items-center justify-center" style={{ width:"52px", height:"52px", borderRadius:"50%", background:"rgba(34,197,94,0.15)", border:"1px solid rgba(34,197,94,0.3)" }}>
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="2.5" strokeLinecap="round"><polyline points="20 6 9 17 4 12"/></svg>
          </div>
        </div>
        <div className="text-center">
          <h3 style={{ fontSize:"15px", fontWeight:800, color:"#22c55e", marginBottom:"4px" }}>Aktivacija uspješna!</h3>
          <p style={{ fontSize:"9px", color:"rgba(148,163,184,0.6)", lineHeight:1.5 }}>StreamMate je spreman.<br/>Dobrodošli na premium IPTV.</p>
        </div>
        {/* User info pill */}
        <div style={{ background:"rgba(34,197,94,0.1)", border:"1px solid rgba(34,197,94,0.25)", borderRadius:"12px", padding:"8px 16px", textAlign:"center" }}>
          <div style={{ fontSize:"8px", color:"rgba(148,163,184,0.6)", marginBottom:"2px" }}>Aktiviran kao</div>
          <div style={{ fontSize:"11px", fontWeight:700, color:"white" }}>korisnik123</div>
          <div style={{ fontSize:"8px", color:"rgba(34,197,94,0.8)", marginTop:"2px" }}>✓ Premium · Istječe 31.12.2025.</div>
        </div>
        <button style={{ padding:"10px 32px", borderRadius:"12px", background:"linear-gradient(135deg,#7c3aed,#4f46e5,#06b6d4)", color:"white", fontSize:"11px", fontWeight:800, border:"none", boxShadow:"0 0 20px rgba(99,102,241,0.5)", marginTop:"4px" }}>
          Idi na StreamMate →
        </button>
      </div>
    </div>
  );
}