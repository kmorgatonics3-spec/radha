import React from "react";
import { SITE } from "@/data/site";
import { Ornament } from "@/components/Ornaments";
import { useReveal } from "@/hooks/useReveal";

const COLORS = [
  { name: "Royal Maroon", hex: "#6A1E2C", use: "Primary brand • headlines, buttons" },
  { name: "Deep Maroon", hex: "#4A121D", use: "Footer, dark backgrounds" },
  { name: "Rich Gold", hex: "#C9A646", use: "Accents, ornaments, taglines" },
  { name: "Light Gold", hex: "#E6CF86", use: "Highlights, gradient highlights" },
  { name: "Cream", hex: "#FBF8F1", use: "Background canvas, text on dark" },
  { name: "Ivory", hex: "#F3ECE0", use: "Secondary canvas, soft sections" },
];

const FONTS = [
  { face: "Cinzel", role: "Display / Headlines", note: "Use for product names, sale headlines" },
  { face: "Cormorant Garamond", role: "Body / Quotes", note: "Italic for testimonials & taglines" },
  { face: "Tangerine", role: "Hindi/Script Accent", note: 'Use for "Shubh Vivah" / "Aaiye"' },
  { face: "Inter", role: "Captions / UI", note: "Captions, prices, UI buttons" },
];

const HASHTAGS = [
  "#RadhaMadhavMart",
  "#GorakhpurFashion",
  "#WeddingShoppingGorakhpur",
  "#WholesaleFamilyMart",
  "#BridalLehenga",
  "#SherwaniGorakhpur",
  "#HarKhushiHarOccasion",
  "#ShaadiSeason2026",
  "#IndianBride",
  "#FestiveFashion",
  "#KundanJewellery",
  "#GorakhpurStore",
];

const CAPTION_TEMPLATE = `✨ {Headline in Hindi script} ✨

{1-2 emotional lines about the outfit / occasion}

📍 10 Park Road, Opp. Rangrezza, Gorakhpur
📞 9151687774 / 9151687775
🕒 10 AM – 8:30 PM • All Days

WhatsApp DM for price & availability ❤️

— Radha Madhav Wholesale Family Mart —`;

const DOS = [
  "Always include the gold lotus logo (top-left or bottom-right corner)",
  "Use Royal Maroon (#6A1E2C) as the primary frame/strip color",
  "Keep model/product as the hero — minimum 60% of frame",
  "Add a subtle gold ornament/border (Tailwind hsl gold)",
  "End with WhatsApp number + Park Road address",
  "Use Cinzel for English headline, Tangerine for Hindi accent",
];

const DONTS = [
  "No emoji in logo lockup or watermark",
  "Don't stretch or recolor the logo PNG",
  "Avoid neon/non-brand colors (pink, lime, electric blue) in static posts",
  "Don't use lowercase wordmark — it's always Radha Madhav (title case)",
  "No more than 2 fonts per post",
  "Don't crop the logo — keep clear-space ≥ 16px around it",
];

// ------- Mock-up Components -------
const InstagramPostMockup = () => (
  <div
    className="relative aspect-square w-full max-w-[420px] mx-auto rounded-2xl overflow-hidden ring-1 ring-black/5"
    style={{
      background:
        "linear-gradient(135deg,#6A1E2C 0%,#8A2A3A 55%,#4A121D 100%)",
    }}
    data-testid="ig-post-mockup"
  >
    {/* Gold ornament border */}
    <div
      className="absolute inset-3 rounded-xl pointer-events-none"
      style={{ border: "1px solid #C9A64688" }}
    />
    <div
      className="absolute inset-5 rounded-lg pointer-events-none"
      style={{ border: "1px dashed #C9A64655" }}
    />
    {/* Top brand bar */}
    <div className="absolute top-5 left-5 right-5 flex items-center justify-between">
      <img
        src="/assets/images/logo.png"
        alt=""
        className="h-9 w-auto"
        style={{ filter: "drop-shadow(0 0 12px rgba(230,207,134,0.55))" }}
      />
      <span
        className="text-[9px] tracking-[0.3em] uppercase text-[#e6cf86]"
        style={{ fontFamily: "Inter,sans-serif" }}
      >
        EST. 2024 • GORAKHPUR
      </span>
    </div>

    {/* Center content */}
    <div className="absolute inset-x-6 top-1/2 -translate-y-1/2 text-center">
      <div
        className="text-[28px] leading-none mb-1"
        style={{ fontFamily: "Tangerine, cursive", color: "#E6CF86" }}
      >
        Shubh Vivah
      </div>
      <div
        className="text-[20px] tracking-[0.08em]"
        style={{
          fontFamily: "Cinzel, serif",
          fontWeight: 700,
          color: "#FBF8F1",
        }}
      >
        BRIDAL COLLECTION
      </div>
      <div
        className="my-2 mx-auto h-px w-16"
        style={{
          background:
            "linear-gradient(90deg,transparent,#C9A646,transparent)",
        }}
      />
      <div
        className="text-[11px] italic"
        style={{ fontFamily: "Cormorant Garamond, serif", color: "#F3ECE0" }}
      >
        Lehengas • Sarees • Sherwanis • Jewellery
      </div>
      <div
        className="mt-3 inline-block px-3 py-1 rounded-full text-[10px] tracking-[0.2em] uppercase font-bold"
        style={{
          background:
            "linear-gradient(135deg,#C9A646 0%,#E6CF86 50%,#A78429 100%)",
          color: "#4A121D",
        }}
      >
        UP TO 35% OFF
      </div>
    </div>

    {/* Bottom CTA strip */}
    <div className="absolute bottom-5 left-5 right-5 flex items-center justify-between text-[#e6cf86]">
      <div
        className="text-[10px] tracking-wider"
        style={{ fontFamily: "Inter,sans-serif" }}
      >
        <i className="fa-solid fa-location-dot mr-1" /> 10 Park Road, Gorakhpur
      </div>
      <div
        className="text-[10px] tracking-wider"
        style={{ fontFamily: "Inter,sans-serif" }}
      >
        <i className="fa-brands fa-whatsapp mr-1" /> 9151687774
      </div>
    </div>

    {/* Aspect tag */}
    <span className="absolute -top-2 -right-2 bg-[#fbf8f1] text-[var(--rm-maroon)] text-[10px] font-bold tracking-wider px-2 py-1 rounded-full shadow">
      1:1 POST
    </span>
  </div>
);

const ReelCoverMockup = () => (
  <div
    className="relative w-full max-w-[260px] mx-auto rounded-2xl overflow-hidden ring-1 ring-black/5"
    style={{
      aspectRatio: "9 / 16",
      background:
        "linear-gradient(180deg,#4A121D 0%,#6A1E2C 50%,#8A2A3A 100%)",
    }}
    data-testid="reel-cover-mockup"
  >
    {/* Gold corner ornaments */}
    {["top-3 left-3", "top-3 right-3", "bottom-3 left-3", "bottom-3 right-3"].map(
      (pos) => (
        <span
          key={pos}
          aria-hidden="true"
          className={`absolute ${pos} w-5 h-5`}
          style={{
            border: "1px solid #C9A64699",
            borderRadius: "2px",
            ...(pos.includes("left") && pos.includes("top")
              ? { borderRight: "none", borderBottom: "none" }
              : {}),
            ...(pos.includes("right") && pos.includes("top")
              ? { borderLeft: "none", borderBottom: "none" }
              : {}),
            ...(pos.includes("left") && pos.includes("bottom")
              ? { borderRight: "none", borderTop: "none" }
              : {}),
            ...(pos.includes("right") && pos.includes("bottom")
              ? { borderLeft: "none", borderTop: "none" }
              : {}),
          }}
        />
      )
    )}

    {/* Logo top center */}
    <div className="absolute top-6 left-0 right-0 flex flex-col items-center">
      <img
        src="/assets/images/logo.png"
        alt=""
        className="h-9 w-auto"
        style={{ filter: "drop-shadow(0 0 12px rgba(230,207,134,0.55))" }}
      />
    </div>

    {/* Headline */}
    <div className="absolute inset-x-5 top-1/2 -translate-y-1/2 text-center">
      <div
        className="text-[36px] leading-[0.9]"
        style={{ fontFamily: "Tangerine, cursive", color: "#E6CF86" }}
      >
        Haldi Look
      </div>
      <div
        className="text-[14px] tracking-[0.18em] mt-1"
        style={{ fontFamily: "Cinzel, serif", color: "#FBF8F1", fontWeight: 700 }}
      >
        SUNLIT &amp; JOYFUL
      </div>
      <div
        className="mt-3 mx-auto h-px w-12"
        style={{
          background: "linear-gradient(90deg,transparent,#C9A646,transparent)",
        }}
      />
      <div
        className="text-[10px] italic mt-2 px-2"
        style={{ fontFamily: "Cormorant Garamond, serif", color: "#F3ECE0" }}
      >
        Find your perfect yellow saree at Radha Madhav.
      </div>
    </div>

    {/* CTA bottom */}
    <div className="absolute bottom-5 left-0 right-0 flex flex-col items-center gap-1">
      <span
        className="px-3 py-1 rounded-full text-[10px] font-bold tracking-[0.18em]"
        style={{
          background:
            "linear-gradient(135deg,#C9A646 0%,#E6CF86 50%,#A78429 100%)",
          color: "#4A121D",
        }}
      >
        TAP FOR PRICE
      </span>
      <span
        className="text-[9px] tracking-wider text-[#e6cf86]"
        style={{ fontFamily: "Inter,sans-serif" }}
      >
        <i className="fa-brands fa-whatsapp" /> 9151687774
      </span>
    </div>

    <span className="absolute -top-2 -right-2 bg-[#fbf8f1] text-[var(--rm-maroon)] text-[10px] font-bold tracking-wider px-2 py-1 rounded-full shadow">
      9:16 REEL
    </span>
  </div>
);

const StoryMockup = () => (
  <div
    className="relative w-full max-w-[240px] mx-auto rounded-2xl overflow-hidden ring-1 ring-black/5"
    style={{
      aspectRatio: "9 / 16",
      background:
        "linear-gradient(160deg,#FBF8F1 0%,#F3ECE0 60%,#E6CF8633 100%)",
    }}
    data-testid="story-mockup"
  >
    {/* Diagonal maroon ribbon */}
    <div
      className="absolute -left-4 top-10 px-12 py-2 text-[10px] tracking-[0.25em] uppercase font-bold rotate-[-8deg]"
      style={{
        background: "linear-gradient(90deg,#6A1E2C,#8A2A3A)",
        color: "#E6CF86",
        boxShadow: "0 6px 18px rgba(0,0,0,0.18)",
      }}
    >
      Sale Live ✦
    </div>

    {/* Logo top-right */}
    <img
      src="/assets/images/logo.png"
      alt=""
      className="absolute top-4 right-4 h-8 w-auto"
      style={{
        filter: "drop-shadow(0 2px 4px rgba(106,30,44,0.3))",
      }}
    />

    {/* Center number/amount */}
    <div className="absolute inset-x-4 top-1/2 -translate-y-1/2 text-center">
      <div
        className="text-[14px] tracking-[0.24em] uppercase font-bold"
        style={{ fontFamily: "Cinzel, serif", color: "#A78429" }}
      >
        Flat
      </div>
      <div
        className="text-[80px] leading-none my-1"
        style={{
          fontFamily: "Cinzel, serif",
          fontWeight: 700,
          background:
            "linear-gradient(135deg,#6A1E2C 0%,#8A2A3A 50%,#C9A646 100%)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          backgroundClip: "text",
        }}
      >
        20%
      </div>
      <div
        className="text-[14px] tracking-[0.18em] uppercase font-bold"
        style={{ fontFamily: "Cinzel, serif", color: "#A78429" }}
      >
        Off
      </div>
      <div
        className="mt-3 text-[11px] italic"
        style={{
          fontFamily: "Cormorant Garamond, serif",
          color: "#6A1E2C",
        }}
      >
        On all bridal sarees this week
      </div>
    </div>

    <div
      className="absolute bottom-5 left-0 right-0 text-center text-[9px] tracking-[0.22em] uppercase font-semibold"
      style={{ color: "#6A1E2C" }}
    >
      Swipe Up • DM for Details
    </div>

    <span className="absolute -top-2 -right-2 bg-[#6A1E2C] text-[#fbf8f1] text-[10px] font-bold tracking-wider px-2 py-1 rounded-full shadow">
      9:16 STORY
    </span>
  </div>
);

// ------- Main Page -------
const BrandKit = () => {
  useReveal();
  return (
    <div data-testid="brand-kit-page">
      {/* Banner */}
      <section
        className="page-banner text-center"
        style={{ "--banner-img": "url('/assets/images/showroom.jpg')" }}
      >
        <div className="relative z-10">
          <span className="gold-chip">Brand Kit</span>
          <h1 className="font-royal text-5xl md:text-7xl mt-4 hero-text-shadow">
            Social Media <span className="text-gold-grad">Brand Guide</span>
          </h1>
          <p className="font-cormorant italic text-xl md:text-2xl mt-4 text-[#f3ece0] max-w-2xl mx-auto">
            How to keep every Instagram post, reel & story unmistakably
            "Radha Madhav".
          </p>
        </div>
      </section>

      {/* Logo */}
      <section className="py-16 lg:py-20" data-testid="brand-logo">
        <div className="container-rm grid lg:grid-cols-2 gap-10 items-center">
          <div className="reveal">
            <span className="section-eyebrow">01 — Logo</span>
            <h2 className="section-title text-3xl md:text-4xl mt-2">
              The Lotus Wordmark
            </h2>
            <p className="text-[var(--rm-mute)] mt-3 leading-relaxed">
              Always use the original gold lotus + "Radha Madhav" wordmark on a
              dark or cream background. Keep clear-space of at least 16&nbsp;px
              on every side.
            </p>
            <Ornament className="w-44 mt-5" />
            <a
              href="/assets/images/logo.png"
              download
              className="btn-royal mt-6 inline-flex"
              data-testid="download-logo"
            >
              <i className="fa-solid fa-download" /> Download Logo PNG
            </a>
          </div>
          <div className="grid grid-cols-2 gap-4 reveal">
            <div
              className="rounded-2xl p-6 flex items-center justify-center aspect-square"
              style={{
                background:
                  "linear-gradient(135deg,#6A1E2C 0%,#4A121D 100%)",
              }}
            >
              <img
                src="/assets/images/logo.png"
                alt=""
                className="h-24 w-auto"
                style={{
                  filter:
                    "drop-shadow(0 0 18px rgba(230,207,134,0.55))",
                }}
              />
            </div>
            <div className="rounded-2xl p-6 flex items-center justify-center aspect-square bg-[var(--rm-cream)]">
              <img src="/assets/images/logo.png" alt="" className="h-24 w-auto" />
            </div>
          </div>
        </div>
      </section>

      {/* Colors */}
      <section
        className="py-16 lg:py-20 bg-[var(--rm-ivory)]"
        data-testid="brand-colors"
      >
        <div className="container-rm">
          <div className="text-center mb-10 reveal">
            <span className="section-eyebrow">02 — Colors</span>
            <h2 className="section-title text-3xl md:text-4xl mt-2">
              Brand Palette
            </h2>
            <p className="text-[var(--rm-mute)] mt-2 max-w-xl mx-auto text-sm">
              Royal Maroon + Gold + Cream. Keep it simple — no neon, no random
              accents.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {COLORS.map((c) => (
              <div
                key={c.hex}
                className="rounded-2xl overflow-hidden bg-white royal-card !p-0 reveal"
                data-testid={`brand-color-${c.name.toLowerCase().replace(/\s+/g, "-")}`}
              >
                <div
                  className="aspect-square relative"
                  style={{
                    background: c.hex,
                    boxShadow: "inset 0 -10px 30px rgba(0,0,0,0.18)",
                  }}
                >
                  <span className="absolute bottom-2 left-2 right-2 text-[10px] font-bold tracking-wider px-2 py-1 rounded bg-white/90 text-[var(--rm-ink)] text-center">
                    {c.hex}
                  </span>
                </div>
                <div className="p-3">
                  <div className="font-bold text-sm text-[var(--rm-maroon)]">
                    {c.name}
                  </div>
                  <div className="text-[11px] text-[var(--rm-mute)] mt-1 leading-snug">
                    {c.use}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Typography */}
      <section className="py-16 lg:py-20" data-testid="brand-typography">
        <div className="container-rm">
          <div className="text-center mb-10 reveal">
            <span className="section-eyebrow">03 — Typography</span>
            <h2 className="section-title text-3xl md:text-4xl mt-2">Fonts</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {FONTS.map((f) => (
              <div
                key={f.face}
                className="royal-card rounded-2xl p-6 reveal"
                data-testid={`brand-font-${f.face.toLowerCase().replace(/\s+/g, "-")}`}
              >
                <div
                  className="text-3xl text-[var(--rm-maroon)]"
                  style={{ fontFamily: `'${f.face}', serif` }}
                >
                  Aa Bb Cc
                </div>
                <div className="mt-3 font-bold text-[15px]">{f.face}</div>
                <div className="text-[11px] tracking-[0.2em] uppercase text-[var(--rm-gold-deep)] mt-1">
                  {f.role}
                </div>
                <p className="text-[12px] text-[var(--rm-mute)] mt-2 leading-relaxed">
                  {f.note}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mockups */}
      <section
        className="py-16 lg:py-20 bg-[var(--rm-ivory)]"
        data-testid="brand-mockups"
      >
        <div className="container-rm">
          <div className="text-center mb-10 reveal">
            <span className="section-eyebrow">04 — Templates</span>
            <h2 className="section-title text-3xl md:text-4xl mt-2">
              Post, Reel &amp; Story
            </h2>
            <p className="text-[var(--rm-mute)] mt-2 max-w-xl mx-auto text-sm">
              Ready-made layouts. Replace the headline + product photo, keep the
              frame &amp; logo &amp; CTA.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-10 items-start">
            <div className="reveal">
              <h3 className="font-royal text-lg text-center text-[var(--rm-maroon)] mb-4">
                Instagram Post
              </h3>
              <InstagramPostMockup />
              <p className="text-[11px] text-center text-[var(--rm-mute)] mt-3">
                1080×1080px — feed posts, sales, new arrivals
              </p>
            </div>
            <div className="reveal" style={{ transitionDelay: "120ms" }}>
              <h3 className="font-royal text-lg text-center text-[var(--rm-maroon)] mb-4">
                Reel Cover
              </h3>
              <ReelCoverMockup />
              <p className="text-[11px] text-center text-[var(--rm-mute)] mt-3">
                1080×1920px — reels, stories, occasion themes
              </p>
            </div>
            <div className="reveal" style={{ transitionDelay: "240ms" }}>
              <h3 className="font-royal text-lg text-center text-[var(--rm-maroon)] mb-4">
                Sale Story
              </h3>
              <StoryMockup />
              <p className="text-[11px] text-center text-[var(--rm-mute)] mt-3">
                1080×1920px — flash offers, % off, swipe-up CTA
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Do / Don't */}
      <section className="py-16 lg:py-20" data-testid="brand-rules">
        <div className="container-rm grid md:grid-cols-2 gap-6">
          <div
            className="rounded-2xl p-7 reveal"
            style={{
              background:
                "linear-gradient(135deg,#0c8a3e 0%,#0b6e4f 100%)",
              color: "#fbf8f1",
            }}
            data-testid="brand-dos"
          >
            <div className="flex items-center gap-2 mb-4">
              <span className="w-9 h-9 rounded-full bg-white/15 flex items-center justify-center">
                <i className="fa-solid fa-check text-base" />
              </span>
              <h3 className="font-royal text-2xl">DO</h3>
            </div>
            <ul className="space-y-2.5 text-sm leading-relaxed">
              {DOS.map((d, i) => (
                <li key={i} className="flex gap-2">
                  <i className="fa-solid fa-circle-check mt-1 text-[#e6cf86] shrink-0" />
                  <span>{d}</span>
                </li>
              ))}
            </ul>
          </div>
          <div
            className="rounded-2xl p-7 reveal"
            style={{
              background:
                "linear-gradient(135deg,#6A1E2C 0%,#4A121D 100%)",
              color: "#fbf8f1",
            }}
            data-testid="brand-donts"
          >
            <div className="flex items-center gap-2 mb-4">
              <span className="w-9 h-9 rounded-full bg-white/15 flex items-center justify-center">
                <i className="fa-solid fa-xmark text-base" />
              </span>
              <h3 className="font-royal text-2xl">DON'T</h3>
            </div>
            <ul className="space-y-2.5 text-sm leading-relaxed">
              {DONTS.map((d, i) => (
                <li key={i} className="flex gap-2">
                  <i className="fa-solid fa-circle-xmark mt-1 text-[#e6cf86] shrink-0" />
                  <span>{d}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Caption + Hashtags */}
      <section
        className="py-16 lg:py-20 bg-[var(--rm-ivory)]"
        data-testid="brand-caption"
      >
        <div className="container-rm grid lg:grid-cols-2 gap-8">
          <div className="royal-card rounded-2xl p-7 reveal">
            <span className="section-eyebrow">05 — Caption Template</span>
            <h3 className="font-royal text-2xl text-[var(--rm-maroon)] mt-2 mb-4">
              Copy &amp; Customize
            </h3>
            <pre
              className="whitespace-pre-wrap text-[13px] leading-relaxed bg-[var(--rm-cream)] p-5 rounded-xl border border-[var(--rm-gold)]/30"
              style={{ fontFamily: "Inter, sans-serif" }}
              data-testid="caption-template"
            >
              {CAPTION_TEMPLATE}
            </pre>
            <button
              onClick={() => {
                navigator.clipboard?.writeText(CAPTION_TEMPLATE);
              }}
              className="btn-ghost-gold !text-[var(--rm-maroon)] !border-[var(--rm-maroon)]/40 mt-4"
              data-testid="copy-caption-btn"
            >
              <i className="fa-solid fa-copy" /> Copy Template
            </button>
          </div>
          <div className="royal-card rounded-2xl p-7 reveal">
            <span className="section-eyebrow">06 — Hashtags</span>
            <h3 className="font-royal text-2xl text-[var(--rm-maroon)] mt-2 mb-4">
              Use 8 – 12 Per Post
            </h3>
            <div className="flex flex-wrap gap-2">
              {HASHTAGS.map((h) => (
                <span
                  key={h}
                  className="px-3 py-1.5 rounded-full text-[12px] font-semibold border border-[var(--rm-gold)]/40 text-[var(--rm-maroon)] bg-white"
                >
                  {h}
                </span>
              ))}
            </div>
            <button
              onClick={() => {
                navigator.clipboard?.writeText(HASHTAGS.join(" "));
              }}
              className="btn-ghost-gold !text-[var(--rm-maroon)] !border-[var(--rm-maroon)]/40 mt-5"
              data-testid="copy-hashtags-btn"
            >
              <i className="fa-solid fa-copy" /> Copy All Hashtags
            </button>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 text-center" data-testid="brand-cta">
        <div className="container-narrow reveal">
          <h2 className="font-royal text-3xl md:text-5xl text-[var(--rm-maroon)]">
            <span className="font-script text-5xl md:text-7xl text-[var(--rm-gold-deep)] block mb-2">
              Dhanyavaad,
            </span>
            for keeping the brand royal.
          </h2>
          <p className="font-cormorant italic text-xl text-[var(--rm-mute)] mt-4">
            Save this page or screenshot any template — share with your
            content team / freelancer / family member who handles socials.
          </p>
          <a
            href={`https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(
              "Hi! I want to share branded content for Radha Madhav. Please send me the official assets."
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-royal mt-7 inline-flex"
            data-testid="brand-wa-btn"
          >
            <i className="fa-brands fa-whatsapp" /> Request Official Assets
          </a>
        </div>
      </section>
    </div>
  );
};

export default BrandKit;
