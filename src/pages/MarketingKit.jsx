import { useState } from "react";
import { Download, Copy, Check, Palette, Layout, Type, Image as ImageIcon, Monitor, BarChart3 } from "lucide-react";
import BrandLogo from "@/components/streammate/BrandLogo";

const adCampaigns = [
  {
    id: 1,
    title: "Multi-Level Management",
    format: "1080x1080",
    platform: "Instagram Feed / Facebook Post",
    imageUrl: "https://media.base44.com/images/public/6a1fa590cdfcf0990345869c/b8da9c81d_generated_image.png",
    copy: {
      hr: {
        headline: "Upravljaj korisnicima na 3 razine",
        body: "Provider → Reseller → Krajnji korisnik. Potpuna kontrola uz hijerarhijski sustav.",
        cta: "Isprobaj besplatno"
      },
      en: {
        headline: "Multi-Level User Management",
        body: "Provider → Reseller → End User. Complete control with hierarchical system.",
        cta: "Try Free"
      }
    }
  },
  {
    id: 2,
    title: "Reseller Network",
    format: "1080x1350",
    platform: "Instagram Stories / LinkedIn",
    imageUrl: "https://media.base44.com/images/public/6a1fa590cdfcf0990345869c/43952a4fc_generated_image.png",
    copy: {
      hr: {
        headline: "Proširi mrežu putem reseller-a",
        body: "Automatski dodijeli limite, prati prodaju i naplaćuj provizije.",
        cta: "Saznaj više"
      },
      en: {
        headline: "Grow Your Reseller Network",
        body: "Auto-assign limits, track sales & collect commissions.",
        cta: "Learn More"
      }
    }
  },
  {
    id: 3,
    title: "Professional Platform",
    format: "1080x1080",
    platform: "Instagram Feed / Facebook Post",
    imageUrl: "https://media.base44.com/images/public/6a1fa590cdfcf0990345869c/f1e04b0c7_generated_image.png",
    copy: {
      hr: {
        headline: "Profesionalna platforma, savršeno iskustvo",
        body: "Tvoj tim upravlja sadržajem, korisnici gledaju bez prekida.",
        cta: "Zatraži demo"
      },
      en: {
        headline: "Professional Platform, Seamless Experience",
        body: "Your team manages content, users stream without interruptions.",
        cta: "Request Demo"
      }
    }
  },
  {
    id: 4,
    title: "All-in-One Features",
    format: "1080x1920",
    platform: "Instagram Stories",
    imageUrl: "https://media.base44.com/images/public/6a1fa590cdfcf0990345869c/33de2b5ba_generated_image.png",
    copy: {
      hr: {
        headline: "Sve za vođenje IPTV biznisa",
        bullets: ["Hijerarhija korisnika", "Bulk aktivacijski kodovi", "Subscription billing", "Content library"],
        cta: "Pokreni trial"
      },
      en: {
        headline: "Everything to Run Your IPTV Business",
        bullets: ["User hierarchy", "Bulk activation codes", "Subscription billing", "Content library"],
        cta: "Start Trial"
      }
    }
  },
  {
    id: 5,
    title: "Scale with Confidence",
    format: "1200x628",
    platform: "Facebook Cover / LinkedIn Banner",
    imageUrl: "https://media.base44.com/images/public/6a1fa590cdfcf0990345869c/f6a1b3a38_generated_image.png",
    copy: {
      hr: {
        headline: "Skaliraj IPTV biznis s povjerenjem",
        body: "StreamMate V4 — Platforma koja raste s tobom. Od 100 do 10,000+ korisnika.",
        cta: "Kontaktiraj nas"
      },
      en: {
        headline: "Scale Your IPTV Business with Confidence",
        body: "StreamMate V4 — The platform that grows with you. From 100 to 10,000+ users.",
        cta: "Contact Us"
      }
    }
  }
];

const brandColors = [
  { name: "Primary Purple", hex: "#7c3aed", rgb: "124, 58, 237" },
  { name: "Secondary Indigo", hex: "#4f46e5", rgb: "79, 70, 229" },
  { name: "Accent Cyan", hex: "#06b6d4", rgb: "6, 182, 212" },
  { name: "Light Purple", hex: "#c4b5fd", rgb: "196, 181, 253" },
  { name: "Light Cyan", hex: "#67e8f9", rgb: "103, 232, 249" },
  { name: "Dark Background", hex: "#060a18", rgb: "6, 10, 24" },
];

const typography = {
  heading: {
    name: "Heading Font",
    value: "ui-sans-serif, system-ui, sans-serif",
    usage: "Naslovi, headlini, CTA buttoni"
  },
  body: {
    name: "Body Font",
    value: "ui-sans-serif, system-ui, sans-serif",
    usage: "Tekst oglasa, opisi, body copy"
  },
  sizes: {
    headline: "32-48px (bold, 800 weight)",
    subheadline: "18-24px (medium, 500 weight)",
    body: "14-16px (regular, 400 weight)",
    cta: "16-18px (bold, 700 weight)"
  }
};

const usageGuidelines = {
  instagram: {
    feed: { format: "1080x1080", ratio: "1:1", ads: [1, 3] },
    stories: { format: "1080x1920", ratio: "9:16", ads: [2, 4] },
    portrait: { format: "1080x1350", ratio: "4:5", ads: [2] }
  },
  facebook: {
    post: { format: "1080x1080", ratio: "1:1", ads: [1, 3] },
    cover: { format: "1200x628", ratio: "1.91:1", ads: [5] }
  },
  linkedin: {
    sponsored: { format: "1080x1350", ratio: "4:5", ads: [2] },
    banner: { format: "1200x628", ratio: "1.91:1", ads: [5] }
  }
};

function CopyBlock({ text, label }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="relative">
      <div className="text-xs text-slate-400 mb-1">{label}</div>
      <div className="bg-slate-800/50 rounded-lg p-3 pr-10 border border-slate-700">
        <p className="text-sm text-slate-200">{text}</p>
      </div>
      <button
        onClick={handleCopy}
        className="absolute top-7 right-2 p-1.5 rounded-md text-slate-400 hover:text-white hover:bg-slate-700 transition-colors"
      >
        {copied ? <Check size={14} className="text-green-400" /> : <Copy size={14} />}
      </button>
    </div>
  );
}

function AdCard({ ad }) {
  const [lang, setLang] = useState("hr");

  return (
    <div className="bg-slate-900/50 rounded-2xl border border-slate-800 overflow-hidden">
      {/* Preview */}
      <div className="relative aspect-square bg-slate-800">
        <img src={ad.imageUrl} alt={ad.title} className="w-full h-full object-cover" />
        <div className="absolute top-3 right-3 px-2 py-1 rounded-md text-xs font-medium bg-slate-900/80 text-slate-300">
          {ad.format}
        </div>
      </div>

      {/* Content */}
      <div className="p-5">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-white font-bold text-lg">{ad.title}</h3>
          <div className="flex gap-1">
            <button
              onClick={() => setLang("hr")}
              className={`px-2 py-1 rounded text-xs font-medium transition-colors ${
                lang === "hr" ? "bg-blue-600 text-white" : "bg-slate-800 text-slate-400"
              }`}
            >
              HR
            </button>
            <button
              onClick={() => setLang("en")}
              className={`px-2 py-1 rounded text-xs font-medium transition-colors ${
                lang === "en" ? "bg-blue-600 text-white" : "bg-slate-800 text-slate-400"
              }`}
            >
              EN
            </button>
          </div>
        </div>

        <div className="space-y-3 mb-4">
          <CopyBlock label="HEADLINE" text={ad.copy[lang].headline} />
          {ad.copy[lang].body && <CopyBlock label="BODY" text={ad.copy[lang].body} />}
          {ad.copy[lang].bullets && (
            <div>
              <div className="text-xs text-slate-400 mb-1">BULLET POINTS</div>
              <div className="bg-slate-800/50 rounded-lg p-3 border border-slate-700 space-y-1">
                {ad.copy[lang].bullets.map((bullet, i) => (
                  <div key={i} className="text-sm text-slate-200 flex items-start gap-2">
                    <span className="text-blue-400 mt-0.5">•</span>
                    <span>{bullet}</span>
                  </div>
                ))}
              </div>
            </div>
          )}
          <CopyBlock label="CTA" text={ad.copy[lang].cta} />
        </div>

        <div className="pt-3 border-t border-slate-800">
          <div className="text-xs text-slate-400">Platform: <span className="text-slate-300">{ad.platform}</span></div>
        </div>
      </div>
    </div>
  );
}

function ColorSwatch({ color }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(color.hex);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="group">
      <div
        className="w-full aspect-square rounded-xl mb-2 cursor-pointer transition-transform group-hover:scale-105"
        style={{ backgroundColor: color.hex }}
        onClick={handleCopy}
      />
      <div className="text-sm font-semibold text-white">{color.name}</div>
      <div className="text-xs text-slate-400 font-mono">{color.hex}</div>
      <div className="text-xs text-slate-500">{color.rgb}</div>
    </div>
  );
}

export default function MarketingKit() {
  const [activeTab, setActiveTab] = useState("ads");

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
      {/* Header */}
      <div className="sticky top-0 z-50 bg-slate-950/80 backdrop-blur-xl border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <BrandLogo variant="full" height={40} />
              <div>
                <h1 className="text-white font-bold text-xl">Marketing & Brand Kit</h1>
                <p className="text-slate-400 text-sm">StreamMate V4 — B2B Campaign Assets</p>
              </div>
            </div>
            <button className="flex items-center gap-2 px-4 py-2 rounded-lg bg-blue-600 text-white text-sm font-medium hover:bg-blue-700 transition-colors">
              <Download size={16} />
              Export All Assets
            </button>
          </div>

          {/* Tabs */}
          <div className="flex gap-2 mt-4">
            {[
              { id: "ads", label: "Ad Campaigns", icon: ImageIcon },
              { id: "colors", label: "Brand Colors", icon: Palette },
              { id: "typography", label: "Typography", icon: Type },
              { id: "usage", label: "Usage Guide", icon: Monitor },
            ].map(({ id, label, icon: Icon }) => (
              <button
                key={id}
                onClick={() => setActiveTab(id)}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  activeTab === id
                    ? "bg-blue-600/20 text-blue-400 border border-blue-600/30"
                    : "bg-slate-800/50 text-slate-400 border border-slate-700 hover:border-slate-600"
                }`}
              >
                <Icon size={16} />
                {label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-6 py-8">
        {activeTab === "ads" && (
          <div>
            <div className="mb-6">
              <h2 className="text-2xl font-bold text-white mb-2">Ad Campaign Concepts</h2>
              <p className="text-slate-400">
                Complete B2B advertising campaign targeting IPTV service owners. All ads available in HR & EN versions.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {adCampaigns.map((ad) => (
                <AdCard key={ad.id} ad={ad} />
              ))}
            </div>
          </div>
        )}

        {activeTab === "colors" && (
          <div>
            <div className="mb-6">
              <h2 className="text-2xl font-bold text-white mb-2">Brand Colors</h2>
              <p className="text-slate-400">
                Official StreamMate color palette. Click any color to copy hex code.
              </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {brandColors.map((color) => (
                <ColorSwatch key={color.hex} color={color} />
              ))}
            </div>

            <div className="mt-8 bg-slate-900/50 rounded-2xl border border-slate-800 p-6">
              <h3 className="text-white font-bold mb-4">Gradient Usage</h3>
              <div className="space-y-4">
                <div>
                  <div className="text-sm text-slate-400 mb-2">Primary Gradient (Dark Backgrounds)</div>
                  <div className="h-12 rounded-lg" style={{ background: "linear-gradient(120deg, #7c3aed, #4f46e5, #06b6d4)" }} />
                  <code className="text-xs text-slate-400 mt-1 block">linear-gradient(120deg, #7c3aed, #4f46e5, #06b6d4)</code>
                </div>
                <div>
                  <div className="text-sm text-slate-400 mb-2">Text Gradient (Light on Dark)</div>
                  <div className="h-12 rounded-lg" style={{ background: "linear-gradient(120deg, #c4b5fd, #818cf8, #67e8f9)" }} />
                  <code className="text-xs text-slate-400 mt-1 block">linear-gradient(120deg, #c4b5fd, #818cf8, #67e8f9)</code>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === "typography" && (
          <div>
            <div className="mb-6">
              <h2 className="text-2xl font-bold text-white mb-2">Typography System</h2>
              <p className="text-slate-400">Font families and sizing for all marketing materials.</p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-slate-900/50 rounded-2xl border border-slate-800 p-6">
                <h3 className="text-white font-bold mb-4">Font Families</h3>
                <div className="space-y-4">
                  <div>
                    <div className="text-sm text-slate-400 mb-1">{typography.heading.name}</div>
                    <code className="text-xs text-blue-400 block bg-slate-800/50 rounded p-2">{typography.heading.value}</code>
                    <div className="text-xs text-slate-500 mt-1">{typography.heading.usage}</div>
                  </div>
                  <div>
                    <div className="text-sm text-slate-400 mb-1">{typography.body.name}</div>
                    <code className="text-xs text-blue-400 block bg-slate-800/50 rounded p-2">{typography.body.value}</code>
                    <div className="text-xs text-slate-500 mt-1">{typography.body.usage}</div>
                  </div>
                </div>
              </div>

              <div className="bg-slate-900/50 rounded-2xl border border-slate-800 p-6">
                <h3 className="text-white font-bold mb-4">Font Sizes</h3>
                <div className="space-y-3">
                  {Object.entries(typography.sizes).map(([key, value]) => (
                    <div key={key}>
                      <div className="text-sm font-medium text-white capitalize">{key}</div>
                      <div className="text-xs text-slate-400">{value}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === "usage" && (
          <div>
            <div className="mb-6">
              <h2 className="text-2xl font-bold text-white mb-2">Platform Usage Guide</h2>
              <p className="text-slate-400">Which ad formats to use for each social media platform.</p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {Object.entries(usageGuidelines).map(([platform, formats]) => (
                <div key={platform} className="bg-slate-900/50 rounded-2xl border border-slate-800 p-6">
                  <h3 className="text-white font-bold text-lg capitalize mb-4">{platform}</h3>
                  <div className="space-y-3">
                    {Object.entries(formats).map(([format, data]) => (
                      <div key={format} className="bg-slate-800/50 rounded-lg p-3 border border-slate-700">
                        <div className="text-sm font-medium text-white capitalize">{format}</div>
                        <div className="text-xs text-slate-400 mt-1">{data.format} ({data.ratio})</div>
                        <div className="text-xs text-blue-400 mt-2">Use: Ad {data.ads.join(", ")}</div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 bg-blue-600/10 rounded-2xl border border-blue-600/30 p-6">
              <h3 className="text-white font-bold mb-3">📋 Campaign Checklist</h3>
              <div className="grid md:grid-cols-2 gap-3">
                {[
                  "Export all ad images in correct formats",
                  "Prepare HR & EN copy variations",
                  "Schedule posts across platforms",
                  "Set up tracking pixels (Meta, LinkedIn)",
                  "A/B test different headlines",
                  "Monitor engagement metrics"
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-2 text-sm text-slate-300">
                    <div className="w-4 h-4 rounded-full border-2 border-blue-400" />
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}