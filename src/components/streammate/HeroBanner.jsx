import { useState, useEffect } from "react";
import { Play, Info, Volume2, VolumeX } from "lucide-react";

const heroContent = [
  {
    id: 1,
    title: "Vijesti uživo",
    subtitle: "Live · HRT 1",
    description: "Pratite najnovije vijesti u realnom vremenu. Direktan prijenos iz studija.",
    tag: "LIVE",
    tagColor: "#ef4444",
    channel: "HRT 1",
    bg: "https://media.base44.com/images/public/6a1fa590cdfcf0990345869c/50ec2b75a_generated_image.png",
  },
  {
    id: 2,
    title: "Akcijski film večeri",
    subtitle: "Filmovi · 21:00",
    description: "Vrhunski holivudski blockbuster. Adrenalinska akcija i neizvjesnost do samog kraja.",
    tag: "HD",
    tagColor: "#3b82f6",
    channel: "Nova TV",
    bg: "https://media.base44.com/images/public/6a1fa590cdfcf0990345869c/50ec2b75a_generated_image.png",
  },
  {
    id: 3,
    title: "Sportski specijal",
    subtitle: "Sport · Uživo",
    description: "Pratite sve sportske događaje iz regije i svijeta u HD kvaliteti.",
    tag: "SPORT",
    tagColor: "#10b981",
    channel: "Sport Klub",
    bg: "https://media.base44.com/images/public/6a1fa590cdfcf0990345869c/50ec2b75a_generated_image.png",
  },
];

export default function HeroBanner() {
  const [current, setCurrent] = useState(0);
  const [muted, setMuted] = useState(true);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const timer = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setCurrent(prev => (prev + 1) % heroContent.length);
        setFade(true);
      }, 400);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const item = heroContent[current];

  return (
    <div
      className="relative w-full overflow-hidden"
      style={{ height: "480px", borderRadius: "0 0 0 0" }}
    >
      {/* Background image */}
      <div
        className="absolute inset-0 transition-all duration-500"
        style={{
          backgroundImage: `url(${item.bg})`,
          backgroundSize: "cover",
          backgroundPosition: "center top",
          opacity: fade ? 1 : 0,
          transition: "opacity 0.4s ease",
        }}
      />

      {/* Gradient overlays */}
      <div
        className="absolute inset-0"
        style={{
          background: "linear-gradient(to right, rgba(6,10,24,0.95) 0%, rgba(6,10,24,0.6) 50%, rgba(6,10,24,0.1) 100%)",
        }}
      />
      <div
        className="absolute inset-0"
        style={{
          background: "linear-gradient(to top, rgba(6,10,24,1) 0%, transparent 60%)",
        }}
      />

      {/* Content */}
      <div
        className="absolute inset-0 flex flex-col justify-end p-8"
        style={{ opacity: fade ? 1 : 0, transition: "opacity 0.4s ease" }}
      >
        {/* Tag */}
        <div className="flex items-center gap-3 mb-3">
          <span
            className="text-xs font-bold px-2 py-1 rounded"
            style={{ background: item.tagColor, color: "white", letterSpacing: "0.1em" }}
          >
            {item.tag}
          </span>
          <span className="text-xs text-slate-400">{item.channel}</span>
        </div>

        {/* Title */}
        <h1
          className="text-5xl font-bold text-white mb-2"
          style={{ textShadow: "0 2px 20px rgba(0,0,0,0.8)", lineHeight: 1.1 }}
        >
          {item.title}
        </h1>
        <p className="text-sm text-blue-400 mb-3 font-medium">{item.subtitle}</p>
        <p className="text-sm text-slate-300 mb-6 max-w-md leading-relaxed">{item.description}</p>

        {/* Buttons */}
        <div className="flex items-center gap-3">
          <button
            className="flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-sm transition-all"
            style={{
              background: "linear-gradient(135deg, #3b82f6, #6366f1)",
              color: "white",
              boxShadow: "0 0 20px rgba(99,102,241,0.4)",
            }}
          >
            <Play size={16} fill="white" /> Gledaj
          </button>
          <button
            className="flex items-center gap-2 px-5 py-3 rounded-xl font-semibold text-sm text-white transition-all"
            style={{
              background: "rgba(255,255,255,0.1)",
              border: "1px solid rgba(255,255,255,0.15)",
              backdropFilter: "blur(8px)",
            }}
          >
            <Info size={16} /> Više info
          </button>
          <button
            className="ml-auto p-3 rounded-xl text-slate-400 transition-all"
            style={{
              background: "rgba(255,255,255,0.08)",
              border: "1px solid rgba(255,255,255,0.1)",
            }}
            onClick={() => setMuted(!muted)}
          >
            {muted ? <VolumeX size={18} /> : <Volume2 size={18} />}
          </button>
        </div>
      </div>

      {/* Dot indicators */}
      <div className="absolute bottom-6 right-8 flex gap-2">
        {heroContent.map((_, i) => (
          <button
            key={i}
            onClick={() => { setFade(false); setTimeout(() => { setCurrent(i); setFade(true); }, 300); }}
            className="rounded-full transition-all"
            style={{
              width: i === current ? "24px" : "6px",
              height: "6px",
              background: i === current ? "#3b82f6" : "rgba(255,255,255,0.3)",
            }}
          />
        ))}
      </div>
    </div>
  );
}