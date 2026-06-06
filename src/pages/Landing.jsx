import { useEffect, useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import IPhoneMockup from "@/components/streammate/IPhoneMockup";
import PhoneFlowSplash from "@/components/streammate/PhoneFlowSplash";
import PhoneFlowActivation from "@/components/streammate/PhoneFlowActivation";
import PhoneFlowSuccess from "@/components/streammate/PhoneFlowSuccess";
import PhoneFlowHome from "@/components/streammate/PhoneFlowHome";

const STEPS = [
  { id: 0, label: "Splash Screen", desc: "Uvodni ekran aplikacije pri pokretanju" },
  { id: 1, label: "Aktivacija", desc: "XC Codes ili M3U URL unos" },
  { id: 2, label: "Uspješna aktivacija", desc: "Potvrda i dobrodošlica" },
  { id: 3, label: "Glavni ekran", desc: "Live TV, Filmovi, Serije" },
];

const STEP_SCREENS = [
  <PhoneFlowSplash />,
  <PhoneFlowActivation />,
  <PhoneFlowSuccess />,
  <PhoneFlowHome />,
];

// Auto-advance intervals per step (ms)
const DURATIONS = [2800, 5000, 2800, 6000];

export default function Landing() {
  const navigate = useNavigate();
  const [visible, setVisible] = useState(false);
  const [step, setStep] = useState(0);
  const [transitioning, setTransitioning] = useState(false);

  useEffect(() => {
    setTimeout(() => setVisible(true), 100);
  }, []);

  const goToStep = useCallback((next) => {
    setTransitioning(true);
    setTimeout(() => {
      setStep(next);
      setTransitioning(false);
    }, 320);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      goToStep((step + 1) % STEPS.length);
    }, DURATIONS[step]);
    return () => clearTimeout(timer);
  }, [step, goToStep]);

  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center overflow-hidden relative px-4 sm:px-8"
      style={{ background: "linear-gradient(145deg, #06040f 0%, #0d0b28 40%, #080f24 70%, #050d1a 100%)" }}
    >
      {/* Background glows */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute" style={{ width:"700px", height:"700px", top:"50%", left:"35%", transform:"translate(-50%,-55%)", background:"radial-gradient(circle, rgba(124,58,237,0.16) 0%, rgba(6,182,212,0.07) 45%, transparent 70%)", borderRadius:"50%" }}/>
        <div className="absolute" style={{ width:"350px", height:"350px", bottom:"5%", right:"5%", background:"radial-gradient(circle, rgba(6,182,212,0.09) 0%, transparent 65%)", borderRadius:"50%" }}/>
      </div>

      {/* Grid */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ opacity: 0.03 }}>
        <defs><pattern id="lgrid" width="50" height="50" patternUnits="userSpaceOnUse"><path d="M 50 0 L 0 0 0 50" fill="none" stroke="white" strokeWidth="0.5"/></pattern></defs>
        <rect width="100%" height="100%" fill="url(#lgrid)"/>
      </svg>

      {/* Layout */}
      <div
        className="relative z-10 w-full max-w-6xl flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-20"
        style={{ opacity: visible ? 1 : 0, transform: visible ? "translateY(0)" : "translateY(30px)", transition: "opacity 0.8s ease, transform 0.8s ease" }}
      >
        {/* LEFT — Info */}
        <div className="flex-1 text-center lg:text-left max-w-xl order-2 lg:order-1">
          {/* Logo */}
          <div className="flex items-center justify-center lg:justify-start gap-3 mb-8">
            <svg width="48" height="48" viewBox="0 0 48 48" fill="none" style={{ filter:"drop-shadow(0 0 12px rgba(124,58,237,0.8)) drop-shadow(0 0 24px rgba(6,182,212,0.4))" }}>
              <defs>
                <linearGradient id="lIG" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stopColor="#7c3aed"/><stop offset="50%" stopColor="#4f46e5"/><stop offset="100%" stopColor="#06b6d4"/></linearGradient>
                <linearGradient id="lTG" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stopColor="#c4b5fd"/><stop offset="100%" stopColor="#67e8f9"/></linearGradient>
              </defs>
              <rect x="2" y="2" width="44" height="44" rx="13" fill="url(#lIG)" opacity="0.2"/>
              <rect x="2" y="2" width="44" height="44" rx="13" stroke="url(#lIG)" strokeWidth="1.5" fill="none" opacity="0.7"/>
              <text x="24" y="33" textAnchor="middle" fontSize="30" fontWeight="800" fontFamily="'Segoe UI',system-ui,sans-serif" letterSpacing="-1" fill="url(#lTG)">S</text>
            </svg>
            <div style={{ fontSize:"30px", lineHeight:1, letterSpacing:"-0.04em", fontFamily:"'Segoe UI',system-ui,sans-serif" }}>
              <span style={{ fontWeight:800, background:"linear-gradient(120deg,#c4b5fd 0%,#818cf8 50%,#67e8f9 100%)", WebkitBackgroundClip:"text", WebkitTextFillColor:"transparent", backgroundClip:"text" }}>Stream</span>
              <span style={{ fontWeight:300, color:"#cbd5e1" }}>Mate</span>
            </div>
          </div>

          <h1 className="font-black leading-tight mb-4"
            style={{ fontSize:"clamp(2rem, 4.5vw, 3.2rem)", fontFamily:"'Segoe UI',system-ui,sans-serif", letterSpacing:"-0.03em", background:"linear-gradient(135deg,#ffffff 0%,#c4b5fd 50%,#67e8f9 100%)", WebkitBackgroundClip:"text", WebkitTextFillColor:"transparent", backgroundClip:"text" }}>
            Gledaj više.<br />Živite zajedno.
          </h1>
          <p className="text-slate-400 text-base leading-relaxed mb-8 max-w-md mx-auto lg:mx-0">
            Premium IPTV iskustvo — tisućama live kanala, filmova i serija. Aktivacija u sekundi.
          </p>

          {/* Step tracker */}
          <div className="mb-8">
            <p className="text-xs text-slate-500 mb-3 uppercase tracking-widest font-semibold">Tijek aplikacije</p>
            <div className="flex flex-col gap-2.5">
              {STEPS.map((s) => (
                <button
                  key={s.id}
                  onClick={() => goToStep(s.id)}
                  className="flex items-center gap-3 text-left transition-all group"
                >
                  {/* Step dot */}
                  <div className="relative flex-shrink-0 flex items-center justify-center"
                    style={{ width:"32px", height:"32px", borderRadius:"50%",
                      background: step === s.id ? "linear-gradient(135deg,#7c3aed,#06b6d4)" : "rgba(255,255,255,0.06)",
                      border: step === s.id ? "none" : "1px solid rgba(255,255,255,0.1)",
                      boxShadow: step === s.id ? "0 0 16px rgba(99,102,241,0.5)" : "none",
                      transition:"all 0.3s ease" }}>
                    <span style={{ fontSize:"11px", fontWeight:800, color: step === s.id ? "white" : "rgba(148,163,184,0.5)" }}>{s.id + 1}</span>
                    {step === s.id && (
                      <div className="absolute" style={{ inset:"-4px", borderRadius:"50%", border:"2px solid rgba(99,102,241,0.3)", animation:"ping 1.5s ease infinite" }}/>
                    )}
                  </div>
                  <div>
                    <div style={{ fontSize:"13px", fontWeight:700, color: step === s.id ? "white" : "rgba(148,163,184,0.6)", transition:"color 0.3s ease" }}>{s.label}</div>
                    <div style={{ fontSize:"11px", color:"rgba(148,163,184,0.4)", lineHeight:1.3 }}>{s.desc}</div>
                  </div>
                  {/* Progress bar for active step */}
                  {step === s.id && (
                    <div className="flex-1 ml-1" style={{ height:"2px", background:"rgba(255,255,255,0.08)", borderRadius:"2px", overflow:"hidden" }}>
                      <div style={{ height:"100%", background:"linear-gradient(90deg,#7c3aed,#06b6d4)", borderRadius:"2px", animation:`progressBar ${DURATIONS[s.id]}ms linear forwards` }}/>
                    </div>
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">
            <button onClick={() => navigate("/home")}
              className="px-7 py-3 rounded-2xl font-bold text-sm transition-all hover:scale-105 active:scale-95"
              style={{ background:"linear-gradient(135deg,#7c3aed,#4f46e5,#06b6d4)", color:"white", boxShadow:"0 0 28px rgba(99,102,241,0.4)" }}>
              Pokreni StreamMate →
            </button>
            <button onClick={() => navigate("/activation")}
              className="px-7 py-3 rounded-2xl font-bold text-sm transition-all hover:scale-105 active:scale-95"
              style={{ background:"rgba(255,255,255,0.06)", border:"1px solid rgba(255,255,255,0.12)", color:"#e2e8f0" }}>
              Aktiviraj uređaj
            </button>
          </div>
        </div>

        {/* RIGHT — iPhone mockup */}
        <div className="flex-shrink-0 flex flex-col items-center gap-6 order-1 lg:order-2"
          style={{ opacity: visible ? 1 : 0, transform: visible ? "translateY(0)" : "translateY(40px)", transition:"opacity 1s ease 0.3s, transform 1s ease 0.3s",
            filter:"drop-shadow(0 40px 80px rgba(99,102,241,0.35)) drop-shadow(0 20px 40px rgba(6,182,212,0.2))" }}>
          <IPhoneMockup>
            <div style={{ opacity: transitioning ? 0 : 1, transition:"opacity 0.3s ease", width:"100%", height:"100%" }}>
              {STEP_SCREENS[step]}
            </div>
          </IPhoneMockup>

          {/* Dot indicators */}
          <div className="flex items-center gap-2">
            {STEPS.map((s) => (
              <button key={s.id} onClick={() => goToStep(s.id)}
                style={{ width: step === s.id ? "24px" : "8px", height:"8px", borderRadius:"4px",
                  background: step === s.id ? "linear-gradient(90deg,#7c3aed,#06b6d4)" : "rgba(255,255,255,0.2)",
                  transition:"all 0.35s ease", border:"none", cursor:"pointer" }}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Bottom tagline */}
      <div className="relative z-10 mt-10 text-center" style={{ opacity: visible ? 0.35 : 0, transition:"opacity 1s ease 0.6s" }}>
        <p className="text-slate-500 text-xs tracking-widest uppercase">Watch Together · Live Together · Stream Anywhere</p>
      </div>

      <style>{`
        @keyframes progressBar { from { width: 0% } to { width: 100% } }
        @keyframes ping { 0% { transform: scale(1); opacity: 0.6; } 70% { transform: scale(1.4); opacity: 0; } 100% { opacity: 0; } }
      `}</style>
    </div>
  );
}