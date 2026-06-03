import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Tv, Wifi, Shield, Zap, ChevronRight, Globe, Settings } from "lucide-react";
import StreamMateLogo from "@/components/streammate/StreamMateLogo";

const languages = [
  { code: "HR", flag: "🇭🇷", name: "Hrvatski" },
  { code: "SR", flag: "🇷🇸", name: "Srpski" },
  { code: "BS", flag: "🇧🇦", name: "Bosanski" },
  { code: "EN", flag: "🇬🇧", name: "English" },
];

const tabs = [
  { id: "code", label: "Aktivacijski kod" },
  { id: "iptv", label: "IPTV parametri" },
];

const features = [
  { icon: Shield, text: "Sigurna aktivacija" },
  { icon: Zap, text: "Trenutni pristup" },
  { icon: Wifi, text: "HD & 4K sadržaj" },
];

export default function Activation() {
  const navigate = useNavigate();
  const [lang, setLang] = useState("HR");
  const [activeTab, setActiveTab] = useState("code");
  const [code, setCode] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // IPTV params
  const [iptvUrl, setIptvUrl] = useState("");
  const [iptvUser, setIptvUser] = useState("");
  const [iptvPass, setIptvPass] = useState("");

  const testCode = "123456";

  const handleActivate = () => {
    if (!code.trim()) { setError("Unesite aktivacijski kod."); return; }
    if (code.length < 6) { setError("Kod mora imati najmanje 6 znakova."); return; }
    setError("");
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      navigate("/home");
    }, 1800);
  };

  const handleTestCode = () => {
    setCode(testCode);
    setError("");
  };

  return (
    <div
      className="min-h-screen flex flex-col overflow-hidden"
      style={{
        background: "radial-gradient(ellipse at 30% 20%, #0d1b3e 0%, #060a18 50%, #020408 100%)",
        position: "relative",
      }}
    >
      {/* Ambient glow orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute rounded-full" style={{ width: "700px", height: "700px", left: "-300px", top: "-200px", background: "radial-gradient(circle, rgba(59,130,246,0.08) 0%, transparent 70%)" }} />
        <div className="absolute rounded-full" style={{ width: "500px", height: "500px", right: "-200px", bottom: "-100px", background: "radial-gradient(circle, rgba(139,92,246,0.07) 0%, transparent 70%)" }} />
        <div className="absolute rounded-full" style={{ width: "300px", height: "300px", left: "40%", top: "30%", background: "radial-gradient(circle, rgba(99,102,241,0.05) 0%, transparent 70%)" }} />
      </div>

      {/* Header */}
      <div
        className="relative z-10 flex items-center justify-between px-6 py-4"
        style={{
          background: "rgba(6,10,24,0.7)",
          backdropFilter: "blur(20px)",
          borderBottom: "1px solid rgba(59,130,246,0.12)",
        }}
      >
        {/* Logo */}
        <div className="flex items-center gap-2">
          <StreamMateLogo size={32} showText={true} textSize="text-lg" glowColor="rgba(99,102,241,0.7)" />
          <span className="text-slate-500 text-xs font-medium">v4.2</span>
        </div>

        {/* Language switcher */}
        <div className="flex items-center gap-1.5">
          {languages.map(l => (
            <button
              key={l.code}
              onClick={() => setLang(l.code)}
              className="flex items-center gap-1 px-2.5 py-1.5 rounded-lg text-xs font-bold transition-all"
              style={{
                background: lang === l.code ? "rgba(59,130,246,0.2)" : "rgba(255,255,255,0.04)",
                border: lang === l.code ? "1px solid rgba(59,130,246,0.4)" : "1px solid rgba(255,255,255,0.06)",
                color: lang === l.code ? "#60a5fa" : "rgba(148,163,184,0.6)",
                boxShadow: lang === l.code ? "0 0 10px rgba(59,130,246,0.2)" : "none",
              }}
            >
              <span>{l.flag}</span>
              <span className="hidden sm:inline">{l.code}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Main content */}
      <div className="relative z-10 flex-1 flex items-center justify-center px-4 py-8">
        <div className="w-full max-w-4xl">

          {/* Top tagline */}
          <div className="text-center mb-8">
            <div
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-4 text-xs font-semibold"
              style={{
                background: "rgba(59,130,246,0.1)",
                border: "1px solid rgba(59,130,246,0.25)",
                color: "#60a5fa",
              }}
            >
              <div className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" />
              Aktivirajte vaš uređaj
            </div>
            <h1 className="text-3xl sm:text-4xl font-black text-white mb-2 leading-tight">
              Dobrodošli u{" "}
              <span style={{ background: "linear-gradient(135deg, #3b82f6, #8b5cf6)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
                StreamMate
              </span>
            </h1>
            <p className="text-slate-400 text-sm max-w-md mx-auto leading-relaxed">
              Unesite 6-znamenkasti aktivacijski kod koji ste primili od vašeg pružatelja usluge za trenutni pristup svim kanalima.
            </p>
          </div>

          {/* Cards row */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-6">

            {/* LEFT: Main activation card */}
            <div
              className="rounded-2xl p-6"
              style={{
                background: "rgba(13,27,62,0.6)",
                backdropFilter: "blur(24px)",
                WebkitBackdropFilter: "blur(24px)",
                border: "1px solid rgba(59,130,246,0.18)",
                boxShadow: "0 8px 40px rgba(59,130,246,0.08), inset 0 1px 0 rgba(255,255,255,0.06)",
              }}
            >
              {/* Card header */}
              <div className="flex items-center gap-3 mb-5">
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center"
                  style={{ background: "linear-gradient(135deg, #3b82f6, #6366f1)", boxShadow: "0 0 16px rgba(99,102,241,0.4)" }}
                >
                  <Tv size={18} className="text-white" />
                </div>
                <div>
                  <h2 className="text-white font-bold text-base">Aktivacija uređaja</h2>
                  <p className="text-slate-500 text-xs">Unos aktivacijskog koda</p>
                </div>
              </div>

              {/* Test code badge */}
              <button
                onClick={handleTestCode}
                className="w-full flex items-center justify-between p-3.5 rounded-xl mb-5 group transition-all"
                style={{
                  background: "rgba(59,130,246,0.08)",
                  border: "1px solid rgba(59,130,246,0.2)",
                }}
                onMouseEnter={e => e.currentTarget.style.background = "rgba(59,130,246,0.14)"}
                onMouseLeave={e => e.currentTarget.style.background = "rgba(59,130,246,0.08)"}
              >
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ background: "rgba(59,130,246,0.2)" }}>
                    <Zap size={14} className="text-blue-400" />
                  </div>
                  <div className="text-left">
                    <p className="text-xs text-slate-400 font-medium">Brzi testni pristup</p>
                    <p className="text-blue-400 font-black text-sm tracking-widest">KOD: {testCode}</p>
                  </div>
                </div>
                <div className="flex items-center gap-1 text-xs text-blue-400 font-medium">
                  Klikni za unos <ChevronRight size={12} />
                </div>
              </button>

              {/* Code input */}
              <div className="mb-4">
                <label className="text-slate-400 text-xs font-medium mb-2 block">Aktivacijski kod</label>
                <div
                  className="flex items-center gap-3 px-4 py-3.5 rounded-xl transition-all"
                  style={{
                    background: "rgba(6,10,24,0.8)",
                    border: error ? "1px solid rgba(239,68,68,0.5)" : "1px solid rgba(59,130,246,0.2)",
                    boxShadow: "inset 0 2px 8px rgba(0,0,0,0.3)",
                  }}
                >
                  <div
                    className="w-6 h-6 rounded-md flex items-center justify-center flex-shrink-0"
                    style={{ background: "rgba(59,130,246,0.15)" }}
                  >
                    <span className="text-blue-400 font-black text-xs">#</span>
                  </div>
                  <input
                    className="flex-1 bg-transparent text-white text-sm outline-none placeholder-slate-600 font-mono tracking-widest"
                    placeholder="npr. 123456"
                    value={code}
                    maxLength={12}
                    onChange={e => { setCode(e.target.value.toUpperCase()); setError(""); }}
                  />
                  {code && (
                    <button onClick={() => setCode("")} className="text-slate-600 hover:text-slate-400 text-xs transition-colors">✕</button>
                  )}
                </div>
                {error && <p className="text-red-400 text-xs mt-1.5">{error}</p>}
              </div>

              {/* Activate button */}
              <button
                onClick={handleActivate}
                disabled={loading}
                className="w-full py-3.5 rounded-xl font-bold text-sm text-white transition-all relative overflow-hidden"
                style={{
                  background: loading ? "rgba(59,130,246,0.3)" : "linear-gradient(135deg, #3b82f6, #6366f1)",
                  boxShadow: loading ? "none" : "0 0 24px rgba(99,102,241,0.45)",
                  opacity: loading ? 0.8 : 1,
                }}
              >
                {loading ? (
                  <div className="flex items-center justify-center gap-2">
                    <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    Aktivacija u tijeku...
                  </div>
                ) : (
                  <div className="flex items-center justify-center gap-2">
                    <Shield size={15} />
                    Aktiviraj uređaj
                  </div>
                )}
              </button>
            </div>

            {/* RIGHT: Alternative methods */}
            <div
              className="rounded-2xl p-6"
              style={{
                background: "rgba(13,27,62,0.4)",
                backdropFilter: "blur(24px)",
                WebkitBackdropFilter: "blur(24px)",
                border: "1px solid rgba(255,255,255,0.07)",
                boxShadow: "0 8px 40px rgba(0,0,0,0.2), inset 0 1px 0 rgba(255,255,255,0.04)",
              }}
            >
              <div className="flex items-center gap-3 mb-5">
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center"
                  style={{ background: "rgba(139,92,246,0.2)", border: "1px solid rgba(139,92,246,0.3)" }}
                >
                  <Settings size={18} className="text-purple-400" />
                </div>
                <div>
                  <h2 className="text-white font-bold text-base">Dodatne metode</h2>
                  <p className="text-slate-500 text-xs">Ručna konfiguracija</p>
                </div>
              </div>

              {/* Tabs */}
              <div
                className="flex mb-5 p-1 rounded-xl"
                style={{ background: "rgba(6,10,24,0.6)", border: "1px solid rgba(255,255,255,0.05)" }}
              >
                {tabs.map(t => (
                  <button
                    key={t.id}
                    onClick={() => setActiveTab(t.id)}
                    className="flex-1 py-2 rounded-lg text-xs font-semibold transition-all"
                    style={{
                      background: activeTab === t.id ? "linear-gradient(135deg, #8b5cf6, #6366f1)" : "transparent",
                      color: activeTab === t.id ? "white" : "rgba(148,163,184,0.6)",
                      boxShadow: activeTab === t.id ? "0 0 12px rgba(139,92,246,0.3)" : "none",
                    }}
                  >
                    {t.label}
                  </button>
                ))}
              </div>

              {activeTab === "code" ? (
                <div>
                  <p className="text-slate-400 text-xs leading-relaxed mb-4">
                    Upišite u polje aktivacijski kod koji ste primili od preprodavača ili unesite brzi testni kod kako biste učitali popis kanala u sekundi.
                  </p>
                  <div className="space-y-2.5">
                    {[
                      { step: "1", text: "Primite aktivacijski kod od pružatelja" },
                      { step: "2", text: "Unesite kod u polje s lijeve strane" },
                      { step: "3", text: "Kliknite 'Aktiviraj uređaj'" },
                      { step: "4", text: "Uživajte u streamanju!" },
                    ].map(s => (
                      <div key={s.step} className="flex items-center gap-3">
                        <div
                          className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 text-xs font-bold text-white"
                          style={{ background: "rgba(99,102,241,0.3)", border: "1px solid rgba(99,102,241,0.4)" }}
                        >
                          {s.step}
                        </div>
                        <p className="text-slate-300 text-xs">{s.text}</p>
                      </div>
                    ))}
                  </div>
                </div>
              ) : (
                <div className="space-y-3">
                  <div>
                    <label className="text-slate-400 text-xs font-medium mb-1.5 block">M3U / Portal URL</label>
                    <input
                      className="w-full px-3.5 py-2.5 rounded-xl text-xs text-white outline-none placeholder-slate-600"
                      style={{ background: "rgba(6,10,24,0.8)", border: "1px solid rgba(255,255,255,0.08)" }}
                      placeholder="http://server.example.com/..."
                      value={iptvUrl}
                      onChange={e => setIptvUrl(e.target.value)}
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-2.5">
                    <div>
                      <label className="text-slate-400 text-xs font-medium mb-1.5 block">Korisničko ime</label>
                      <input
                        className="w-full px-3.5 py-2.5 rounded-xl text-xs text-white outline-none placeholder-slate-600"
                        style={{ background: "rgba(6,10,24,0.8)", border: "1px solid rgba(255,255,255,0.08)" }}
                        placeholder="username"
                        value={iptvUser}
                        onChange={e => setIptvUser(e.target.value)}
                      />
                    </div>
                    <div>
                      <label className="text-slate-400 text-xs font-medium mb-1.5 block">Lozinka</label>
                      <input
                        type="password"
                        className="w-full px-3.5 py-2.5 rounded-xl text-xs text-white outline-none placeholder-slate-600"
                        style={{ background: "rgba(6,10,24,0.8)", border: "1px solid rgba(255,255,255,0.08)" }}
                        placeholder="••••••••"
                        value={iptvPass}
                        onChange={e => setIptvPass(e.target.value)}
                      />
                    </div>
                  </div>
                  <button
                    className="w-full py-3 rounded-xl font-bold text-xs text-white mt-1"
                    style={{ background: "rgba(139,92,246,0.25)", border: "1px solid rgba(139,92,246,0.4)" }}
                  >
                    <Globe size={13} className="inline mr-1.5 -mt-0.5" />
                    Spoji IPTV server
                  </button>
                </div>
              )}
            </div>
          </div>

          {/* Feature pills */}
          <div className="flex items-center justify-center gap-4 flex-wrap">
            {features.map(({ icon: Icon, text }) => (
              <div
                key={text}
                className="flex items-center gap-2 px-4 py-2 rounded-full text-xs font-medium"
                style={{
                  background: "rgba(255,255,255,0.03)",
                  border: "1px solid rgba(255,255,255,0.07)",
                  color: "rgba(148,163,184,0.7)",
                }}
              >
                <Icon size={12} className="text-blue-400" />
                {text}
              </div>
            ))}
          </div>

          {/* Footer */}
          <p className="text-center text-slate-600 text-xs mt-6">
            StreamMate © 2026 · Sva prava pridržana ·{" "}
            <span className="text-slate-500 cursor-pointer hover:text-slate-400 transition-colors">Podrška</span>
          </p>
        </div>
      </div>
    </div>
  );
}