import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Tv, Wifi, Shield, Zap, ChevronRight, Globe, Settings } from "lucide-react";
import BrandLogo from "@/components/streammate/BrandLogo";

const languages = [
  { code: "HR", flag: "🇭🇷" },
  { code: "SR", flag: "🇷🇸" },
  { code: "BS", flag: "🇧🇦" },
  { code: "EN", flag: "🇬🇧" },
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
  const [focused, setFocused] = useState(false);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

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
      setSuccess(true);
      setTimeout(() => navigate("/home"), 1200);
    }, 1800);
  };

  const handleTestCode = () => {
    setCode(testCode);
    setError("");
  };

  // Neon glow color for input
  const neonColor = error ? "#ef4444" : focused || code ? "#6366f1" : "transparent";
  const neonShadow = error
    ? "0 0 0 1.5px rgba(239,68,68,0.6), 0 0 20px rgba(239,68,68,0.25)"
    : focused || code
    ? "0 0 0 1.5px rgba(99,102,241,0.7), 0 0 24px rgba(99,102,241,0.35), 0 0 48px rgba(59,130,246,0.15)"
    : "none";

  return (
    <div
      className="min-h-screen flex flex-col overflow-hidden"
      style={{
        background: "radial-gradient(ellipse at center, #0d1b3e 0%, #060a18 50%, #020408 100%)",
        position: "relative",
      }}
    >
      {/* Background image overlay (matching SplashScreen) */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `url(https://media.base44.com/images/public/6a1fa590cdfcf0990345869c/7197fb89d_generated_image.png)`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          opacity: 0.15,
        }}
      />

      {/* Animated glow orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute rounded-full"
          style={{
            width: "700px", height: "700px", left: "-250px", top: "-200px",
            background: "radial-gradient(circle, rgba(59,130,246,0.14) 0%, transparent 70%)",
            animation: "pulse 4s ease-in-out infinite",
          }}
        />
        <div
          className="absolute rounded-full"
          style={{
            width: "500px", height: "500px", right: "-150px", bottom: "-100px",
            background: "radial-gradient(circle, rgba(139,92,246,0.12) 0%, transparent 70%)",
            animation: "pulse 5s ease-in-out infinite reverse",
          }}
        />
      </div>

      {/* Header */}
      <div
        className="relative z-10 flex items-center justify-between px-5 sm:px-8 py-4"
        style={{
          background: "rgba(6,10,24,0.6)",
          backdropFilter: "blur(20px)",
          WebkitBackdropFilter: "blur(20px)",
          borderBottom: "1px solid rgba(99,102,241,0.15)",
        }}
      >
        <div className="flex items-center gap-2.5">
          <BrandLogo variant="full" height={34} />
          <span
            className="text-xs font-semibold px-2 py-0.5 rounded-md"
            style={{ background: "rgba(99,102,241,0.15)", color: "rgba(148,163,184,0.7)", border: "1px solid rgba(99,102,241,0.2)" }}
          >
            v4.2
          </span>
        </div>

        <div className="flex items-center gap-1.5">
          {languages.map(l => (
            <button
              key={l.code}
              onClick={() => setLang(l.code)}
              className="flex items-center gap-1 px-2.5 py-1.5 rounded-lg text-xs font-bold transition-all"
              style={{
                background: lang === l.code ? "rgba(99,102,241,0.2)" : "rgba(255,255,255,0.04)",
                border: lang === l.code ? "1px solid rgba(99,102,241,0.4)" : "1px solid rgba(255,255,255,0.06)",
                color: lang === l.code ? "#a5b4fc" : "rgba(148,163,184,0.5)",
                boxShadow: lang === l.code ? "0 0 12px rgba(99,102,241,0.25)" : "none",
              }}
            >
              <span>{l.flag}</span>
              <span className="hidden sm:inline ml-0.5">{l.code}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Main content */}
      <div className="relative z-10 flex-1 flex items-center justify-center px-4 py-10">
        <div className="w-full max-w-4xl">

          {/* Title */}
          <div className="text-center mb-10">
            <div
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-5 text-xs font-semibold"
              style={{
                background: "rgba(99,102,241,0.12)",
                border: "1px solid rgba(99,102,241,0.3)",
                color: "#a5b4fc",
                boxShadow: "0 0 16px rgba(99,102,241,0.15)",
              }}
            >
              <div className="w-1.5 h-1.5 rounded-full bg-indigo-400 animate-pulse" />
              Aktivirajte vaš uređaj
            </div>
            <h1 className="text-3xl sm:text-4xl font-black text-white mb-3 leading-tight">
              Dobrodošli u{" "}
              <span style={{ background: "linear-gradient(135deg, #3b82f6, #8b5cf6)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
                StreamMate
              </span>
            </h1>
            <p className="text-slate-400 text-sm max-w-md mx-auto leading-relaxed">
              Unesite aktivacijski kod koji ste primili od pružatelja usluge za trenutni pristup svim kanalima.
            </p>
          </div>

          {/* Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-8">

            {/* LEFT: Activation card */}
            <div
              className="rounded-3xl p-6 sm:p-7"
              style={{
                background: "rgba(13, 27, 62, 0.55)",
                backdropFilter: "blur(24px)",
                WebkitBackdropFilter: "blur(24px)",
                border: "1px solid rgba(99,102,241,0.2)",
                boxShadow: "0 8px 80px rgba(59,130,246,0.1), inset 0 1px 0 rgba(255,255,255,0.08)",
              }}
            >
              {/* Card header */}
              <div className="flex items-center gap-3 mb-6">
                <div
                  className="w-11 h-11 rounded-2xl flex items-center justify-center"
                  style={{ background: "linear-gradient(135deg, #3b82f6, #6366f1)", boxShadow: "0 0 20px rgba(99,102,241,0.5)" }}
                >
                  <Tv size={20} className="text-white" />
                </div>
                <div>
                  <h2 className="text-white font-bold text-base">Aktivacija uređaja</h2>
                  <p className="text-slate-500 text-xs">Unos aktivacijskog koda</p>
                </div>
              </div>

              {/* Test code badge */}
              <button
                onClick={handleTestCode}
                className="w-full flex items-center justify-between p-4 rounded-2xl mb-6 transition-all"
                style={{
                  background: "rgba(59,130,246,0.08)",
                  border: "1px solid rgba(59,130,246,0.2)",
                }}
                onMouseEnter={e => e.currentTarget.style.background = "rgba(59,130,246,0.14)"}
                onMouseLeave={e => e.currentTarget.style.background = "rgba(59,130,246,0.08)"}
              >
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-xl flex items-center justify-center" style={{ background: "rgba(59,130,246,0.2)" }}>
                    <Zap size={14} className="text-blue-400" />
                  </div>
                  <div className="text-left">
                    <p className="text-xs text-slate-400 font-medium">Brzi testni pristup</p>
                    <p className="text-blue-400 font-black text-sm tracking-widest">KOD: {testCode}</p>
                  </div>
                </div>
                <div className="flex items-center gap-1 text-xs text-blue-400 font-medium">
                  Klikni <ChevronRight size={12} />
                </div>
              </button>

              {/* Code input with neon effect */}
              <div className="mb-5">
                <label className="text-slate-400 text-xs font-semibold mb-2 block tracking-wider uppercase">
                  Aktivacijski kod
                </label>
                <div
                  className="flex items-center gap-3 px-4 py-4 rounded-2xl transition-all duration-300"
                  style={{
                    background: "rgba(6,10,24,0.75)",
                    backdropFilter: "blur(8px)",
                    WebkitBackdropFilter: "blur(8px)",
                    border: `1px solid ${error ? "rgba(239,68,68,0.5)" : focused || code ? "rgba(99,102,241,0.5)" : "rgba(255,255,255,0.07)"}`,
                    boxShadow: neonShadow,
                    transition: "box-shadow 0.3s ease, border-color 0.3s ease",
                  }}
                >
                  <div
                    className="w-7 h-7 rounded-lg flex items-center justify-center flex-shrink-0 transition-all duration-300"
                    style={{
                      background: focused || code ? "rgba(99,102,241,0.2)" : "rgba(255,255,255,0.06)",
                      boxShadow: focused || code ? "0 0 10px rgba(99,102,241,0.4)" : "none",
                    }}
                  >
                    <span
                      className="font-black text-xs transition-colors duration-300"
                      style={{ color: focused || code ? "#a5b4fc" : "rgba(148,163,184,0.5)" }}
                    >
                      #
                    </span>
                  </div>
                  <input
                    className="flex-1 bg-transparent text-white text-base outline-none placeholder-slate-600 font-mono tracking-[0.3em]"
                    placeholder="· · · · · ·"
                    value={code}
                    maxLength={12}
                    onFocus={() => setFocused(true)}
                    onBlur={() => setFocused(false)}
                    onChange={e => { setCode(e.target.value.toUpperCase()); setError(""); }}
                  />
                  {code && (
                    <button
                      onClick={() => setCode("")}
                      className="text-slate-600 hover:text-slate-300 text-sm transition-colors flex-shrink-0"
                    >
                      ✕
                    </button>
                  )}
                </div>
                {error && (
                  <p className="text-red-400 text-xs mt-2 flex items-center gap-1">
                    <span>⚠</span> {error}
                  </p>
                )}
              </div>

              {/* Activate button */}
              <button
                onClick={handleActivate}
                disabled={loading || success}
                className="w-full py-4 rounded-2xl font-bold text-sm text-white transition-all relative overflow-hidden"
                style={{
                  background: success
                    ? "linear-gradient(135deg, #10b981, #059669)"
                    : loading
                    ? "rgba(99,102,241,0.35)"
                    : "linear-gradient(135deg, #3b82f6, #6366f1, #8b5cf6)",
                  boxShadow: success
                    ? "0 0 28px rgba(16,185,129,0.5)"
                    : loading
                    ? "none"
                    : "0 0 32px rgba(99,102,241,0.5), 0 4px 16px rgba(59,130,246,0.3)",
                  opacity: loading ? 0.8 : 1,
                }}
              >
                {success ? (
                  <div className="flex items-center justify-center gap-2">
                    <span>✓</span> Aktivirano!
                  </div>
                ) : loading ? (
                  <div className="flex items-center justify-center gap-2">
                    <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    Aktivacija u tijeku...
                  </div>
                ) : (
                  <div className="flex items-center justify-center gap-2">
                    <Shield size={15} /> Aktiviraj uređaj
                  </div>
                )}
              </button>
            </div>

            {/* RIGHT: Additional methods */}
            <div
              className="rounded-3xl p-6 sm:p-7"
              style={{
                background: "rgba(13, 27, 62, 0.4)",
                backdropFilter: "blur(24px)",
                WebkitBackdropFilter: "blur(24px)",
                border: "1px solid rgba(255,255,255,0.07)",
                boxShadow: "0 8px 40px rgba(0,0,0,0.2), inset 0 1px 0 rgba(255,255,255,0.05)",
              }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div
                  className="w-11 h-11 rounded-2xl flex items-center justify-center"
                  style={{ background: "rgba(139,92,246,0.2)", border: "1px solid rgba(139,92,246,0.3)", boxShadow: "0 0 16px rgba(139,92,246,0.2)" }}
                >
                  <Settings size={20} className="text-purple-400" />
                </div>
                <div>
                  <h2 className="text-white font-bold text-base">Dodatne metode</h2>
                  <p className="text-slate-500 text-xs">Ručna konfiguracija</p>
                </div>
              </div>

              {/* Tabs */}
              <div
                className="flex mb-5 p-1 rounded-2xl"
                style={{ background: "rgba(6,10,24,0.5)", border: "1px solid rgba(255,255,255,0.05)" }}
              >
                {tabs.map(t => (
                  <button
                    key={t.id}
                    onClick={() => setActiveTab(t.id)}
                    className="flex-1 py-2 rounded-xl text-xs font-semibold transition-all"
                    style={{
                      background: activeTab === t.id ? "linear-gradient(135deg, #8b5cf6, #6366f1)" : "transparent",
                      color: activeTab === t.id ? "white" : "rgba(148,163,184,0.6)",
                      boxShadow: activeTab === t.id ? "0 0 14px rgba(139,92,246,0.35)" : "none",
                    }}
                  >
                    {t.label}
                  </button>
                ))}
              </div>

              {activeTab === "code" ? (
                <div>
                  <p className="text-slate-400 text-xs leading-relaxed mb-5">
                    Upišite aktivacijski kod koji ste primili od preprodavača ili unesite brzi testni kod kako biste učitali popis kanala.
                  </p>
                  <div className="space-y-3">
                    {[
                      { step: "1", text: "Primite aktivacijski kod od pružatelja" },
                      { step: "2", text: "Unesite kod u polje s lijeve strane" },
                      { step: "3", text: "Kliknite 'Aktiviraj uređaj'" },
                      { step: "4", text: "Uživajte u streamanju!" },
                    ].map(s => (
                      <div key={s.step} className="flex items-center gap-3">
                        <div
                          className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 text-xs font-bold text-white"
                          style={{ background: "rgba(99,102,241,0.25)", border: "1px solid rgba(99,102,241,0.4)", boxShadow: "0 0 8px rgba(99,102,241,0.2)" }}
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
                      className="w-full px-4 py-3 rounded-xl text-xs text-white outline-none placeholder-slate-600 transition-all"
                      style={{
                        background: "rgba(6,10,24,0.7)",
                        border: "1px solid rgba(255,255,255,0.07)",
                        backdropFilter: "blur(8px)",
                      }}
                      onFocus={e => { e.target.style.borderColor = "rgba(99,102,241,0.4)"; e.target.style.boxShadow = "0 0 16px rgba(99,102,241,0.2)"; }}
                      onBlur={e => { e.target.style.borderColor = "rgba(255,255,255,0.07)"; e.target.style.boxShadow = "none"; }}
                      placeholder="http://server.example.com/..."
                      value={iptvUrl}
                      onChange={e => setIptvUrl(e.target.value)}
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-2.5">
                    {[
                      { label: "Korisničko ime", value: iptvUser, setter: setIptvUser, ph: "username", type: "text" },
                      { label: "Lozinka", value: iptvPass, setter: setIptvPass, ph: "••••••••", type: "password" },
                    ].map(f => (
                      <div key={f.label}>
                        <label className="text-slate-400 text-xs font-medium mb-1.5 block">{f.label}</label>
                        <input
                          type={f.type}
                          className="w-full px-3.5 py-3 rounded-xl text-xs text-white outline-none placeholder-slate-600 transition-all"
                          style={{ background: "rgba(6,10,24,0.7)", border: "1px solid rgba(255,255,255,0.07)" }}
                          onFocus={e => { e.target.style.borderColor = "rgba(99,102,241,0.4)"; e.target.style.boxShadow = "0 0 12px rgba(99,102,241,0.15)"; }}
                          onBlur={e => { e.target.style.borderColor = "rgba(255,255,255,0.07)"; e.target.style.boxShadow = "none"; }}
                          placeholder={f.ph}
                          value={f.value}
                          onChange={e => f.setter(e.target.value)}
                        />
                      </div>
                    ))}
                  </div>
                  <button
                    className="w-full py-3 rounded-xl font-bold text-xs text-white mt-1 transition-all"
                    style={{ background: "rgba(139,92,246,0.2)", border: "1px solid rgba(139,92,246,0.35)", boxShadow: "0 0 16px rgba(139,92,246,0.15)" }}
                    onMouseEnter={e => e.currentTarget.style.boxShadow = "0 0 24px rgba(139,92,246,0.35)"}
                    onMouseLeave={e => e.currentTarget.style.boxShadow = "0 0 16px rgba(139,92,246,0.15)"}
                  >
                    <Globe size={13} className="inline mr-1.5 -mt-0.5" />
                    Spoji IPTV server
                  </button>
                </div>
              )}
            </div>
          </div>

          {/* Feature pills */}
          <div className="flex items-center justify-center gap-3 flex-wrap mb-6">
            {features.map(({ icon: Icon, text }) => (
              <div
                key={text}
                className="flex items-center gap-2 px-4 py-2 rounded-full text-xs font-medium"
                style={{
                  background: "rgba(13,27,62,0.6)",
                  backdropFilter: "blur(12px)",
                  border: "1px solid rgba(99,102,241,0.15)",
                  color: "rgba(148,163,184,0.7)",
                  boxShadow: "0 2px 12px rgba(0,0,0,0.2)",
                }}
              >
                <Icon size={12} className="text-indigo-400" />
                {text}
              </div>
            ))}
          </div>

          <p className="text-center text-slate-600 text-xs">
            StreamMate © 2026 · Sva prava pridržana ·{" "}
            <span className="text-slate-500 cursor-pointer hover:text-slate-300 transition-colors">Podrška</span>
          </p>
        </div>
      </div>

      <style>{`
        @keyframes pulse {
          0%, 100% { transform: scale(1); opacity: 0.5; }
          50% { transform: scale(1.08); opacity: 1; }
        }
      `}</style>
    </div>
  );
}