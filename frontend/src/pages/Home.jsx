import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import {
  SITE,
  waLink,
  occasions,
  collections,
  offers,
  testimonials,
  reels,
  galleryImages,
} from "@/data/site";
import { Ornament, Mandala, PaisleyCorner } from "@/components/Ornaments";
import CountdownTimer from "@/components/CountdownTimer";
import { useReveal } from "@/hooks/useReveal";

const Home = () => {
  useReveal();
  const heroRef = useRef(null);
  const [parallax, setParallax] = useState(0);

  useEffect(() => {
    const onScroll = () => setParallax(window.scrollY * 0.25);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div data-testid="home-page">
      {/* HERO */}
      <section
        ref={heroRef}
        className="relative min-h-[100svh] flex items-center justify-center overflow-hidden"
        data-testid="hero-section"
      >
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
          poster="/assets/images/showroom.jpg"
          style={{ transform: `translateY(${parallax}px) scale(1.06)` }}
        >
          <source src="/assets/videos/hero-main.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 hero-veil" />
        <Mandala
          className="absolute -top-20 -right-20 w-[420px] opacity-30 spin-slow"
          color="#E6CF86"
        />
        <Mandala
          className="absolute -bottom-32 -left-20 w-[360px] opacity-20 spin-slow"
          color="#E6CF86"
        />

        <div className="relative z-10 text-center text-[var(--rm-cream)] container-rm pt-20">
          <div className="gold-divider mb-6 fade-in" style={{ color: "#E6CF86" }}>
            <span style={{ color: "#E6CF86" }}>Est. 2024 • Gorakhpur</span>
          </div>
          <p className="font-script text-5xl md:text-7xl text-[#f3dd9c] hero-text-shadow mb-2 fade-in">
            Welcome to
          </p>
          <h1
            className="font-royal text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-700 hero-text-shadow leading-[1.05] fade-up"
            style={{ animationDelay: "0.2s" }}
          >
            <span className="block text-balance">Har Khushi,</span>
            <span className="block shimmer-text">Har Occasion</span>
            <span className="block text-balance">— Ek Hi Jagah</span>
          </h1>
          <p
            className="mt-7 max-w-2xl mx-auto text-base md:text-lg text-[#fbf8f1] font-cormorant italic text-xl md:text-2xl fade-up"
            style={{ animationDelay: "0.5s" }}
          >
            Radha Madhav Wholesale Family Mart — Gorakhpur ka trusted fashion
            destination for every generation.
          </p>
          <div
            className="mt-10 flex flex-wrap items-center justify-center gap-4 fade-up"
            style={{ animationDelay: "0.8s" }}
          >
            <Link to="/collections" className="btn-royal" data-testid="hero-explore-btn">
              <span>Explore Collection</span>
              <i className="fa-solid fa-arrow-right arrow" />
            </Link>
            <a
              href={SITE.mapUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-ghost-gold"
              data-testid="hero-visit-btn"
            >
              <i className="fa-solid fa-location-dot" />
              <span>Visit Store</span>
            </a>
          </div>

          <div className="mt-16 hidden md:flex items-center justify-center gap-10 text-[#f3ece0] fade-in" style={{ animationDelay: "1.1s" }}>
            <Stat n="50,000+" l="Happy Families" />
            <span className="w-[1px] h-10 bg-[var(--rm-gold)]/40" />
            <Stat n="10,000+" l="Wedding Outfits" />
            <span className="w-[1px] h-10 bg-[var(--rm-gold)]/40" />
            <Stat n="35,000 sqft" l="Grand Showroom" />
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-[#e1d4ba] text-xs tracking-[0.4em] uppercase animate-pulse">
          <i className="fa-solid fa-chevron-down mr-2" /> Scroll
        </div>
      </section>

      {/* EMOTIONAL CONNECT */}
      <section className="py-24 lg:py-32 relative mandala-bg" data-testid="emotional-section">
        <PaisleyCorner className="absolute top-10 left-6 w-24 hidden md:block" />
        <PaisleyCorner
          className="absolute bottom-10 right-6 w-24 rotate-180 hidden md:block"
        />
        <div className="container-narrow text-center reveal">
          <span className="section-eyebrow">— Yaadein —</span>
          <Ornament className="w-44 mx-auto my-5" />
          <h2 className="section-title text-4xl md:text-5xl lg:text-6xl">
            Yahan Sirf Kapde Nahi,
            <span className="block text-gold-grad font-script font-700 text-6xl md:text-8xl mt-2 leading-none">
              Yaadein Milti Hain
            </span>
          </h2>
          <p className="font-cormorant italic text-2xl md:text-3xl text-[var(--rm-mute)] mt-7 leading-relaxed">
            Shaadi ho ya chhoti si family gathering — har pal ke liye perfect
            outfit yahin milta hai. Kyunki yahan har kapde mein ek kahani hoti
            hai, ek emotion hota hai, aur ek yaad ban jaati hai.
          </p>
          <Ornament className="w-44 mx-auto mt-8" />
        </div>
      </section>

      {/* OCCASIONS */}
      <section className="py-20 lg:py-28 bg-[var(--rm-ivory)]" data-testid="occasions-section">
        <div className="container-rm">
          <div className="text-center mb-14 reveal">
            <span className="section-eyebrow">Shop By Occasion</span>
            <h2 className="section-title text-4xl md:text-5xl mt-3">
              Har Pal, Har Rasm — Perfect Look
            </h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 lg:gap-5">
            {occasions.map((o, i) => (
              <Link
                to="/collections"
                key={o.id}
                className="group relative aspect-[3/4] rounded-2xl overflow-hidden hover-zoom royal-card !p-0 reveal"
                style={{ transitionDelay: `${i * 90}ms` }}
                data-testid={`occasion-${o.id}`}
              >
                <img
                  src={o.image}
                  alt={o.name}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 product-overlay" />
                <div className="absolute inset-x-0 bottom-0 p-5 text-[var(--rm-cream)]">
                  <div
                    className="w-10 h-10 rounded-full mb-3 flex items-center justify-center text-sm border border-[var(--rm-gold)]/60 backdrop-blur-sm"
                    style={{ background: `${o.color}90` }}
                  >
                    <i className={`fa-solid ${o.icon}`} />
                  </div>
                  <h3 className="font-display text-lg lg:text-xl">{o.name}</h3>
                  <p className="text-[11px] tracking-[0.2em] uppercase text-[#ede4d3] mt-1">
                    {o.subtitle}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* COLLECTIONS SHOWCASE */}
      <section className="py-20 lg:py-28" data-testid="collections-section">
        <div className="container-rm">
          <div className="text-center mb-12 reveal">
            <span className="section-eyebrow">Collections</span>
            <h2 className="section-title text-4xl md:text-5xl mt-3">
              For Every Soul In The Family
            </h2>
            <p className="font-cormorant italic text-2xl text-[var(--rm-mute)] mt-3">
              Har Umar, Har Style, Har Budget
            </p>
          </div>

          <div className="space-y-16">
            {Object.values(collections).map((cat, idx) => (
              <div className="reveal" key={cat.title} data-testid={`collection-${idx}`}>
                <div className="flex items-end justify-between flex-wrap gap-3 mb-6">
                  <div>
                    <h3 className="font-royal text-2xl md:text-3xl text-[var(--rm-maroon)]">
                      {cat.title}
                    </h3>
                    <p className="text-sm text-[var(--rm-gold-deep)] tracking-[0.2em] uppercase mt-1">
                      {cat.accent}
                    </p>
                  </div>
                  <Link
                    to="/collections"
                    className="text-sm under-gold font-medium tracking-[0.2em] uppercase text-[var(--rm-maroon)]"
                  >
                    View All <i className="fa-solid fa-arrow-right ml-1" />
                  </Link>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 lg:gap-6">
                  {cat.items.map((it, i) => (
                    <div
                      key={i}
                      className="hover-zoom rounded-2xl overflow-hidden bg-white royal-card !p-0 tilt-card group"
                    >
                      <div className="aspect-[3/4] relative overflow-hidden">
                        <img src={it.img} alt={it.name} className="w-full h-full object-cover" loading="lazy" />
                        <span className="absolute top-3 left-3 maroon-chip">{it.tag}</span>
                      </div>
                      <div className="p-4">
                        <h4 className="font-display text-[15px] text-[var(--rm-ink)] truncate">
                          {it.name}
                        </h4>
                        <p className="text-xs text-[var(--rm-gold-deep)] tracking-wider uppercase mt-1">
                          {it.price}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* OFFERS WITH COUNTDOWN */}
      <section
        className="py-20 lg:py-28 relative grain"
        style={{
          background:
            "linear-gradient(180deg, #4a121d 0%, #6a1e2c 100%)",
        }}
        data-testid="offers-section"
      >
        <Mandala className="absolute -top-10 -right-10 w-[280px] opacity-15" />
        <div className="container-rm relative text-[var(--rm-cream)]">
          <div className="text-center mb-10 reveal">
            <span
              className="section-eyebrow"
              style={{ color: "var(--rm-gold-light)" }}
            >
              Limited Time
            </span>
            <Ornament className="w-44 mx-auto my-3" />
            <h2 className="font-royal text-4xl md:text-5xl">
              Aaj ke{" "}
              <span className="shimmer-text">Special Showroom Offers</span>
            </h2>
            <p className="font-cormorant italic text-2xl text-[#f3ece0] mt-3">
              Limited time offers — Visit today
            </p>
          </div>

          <div className="flex justify-center mb-10 reveal">
            <CountdownTimer />
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {offers.map((o, i) => (
              <div
                key={i}
                className="group relative rounded-2xl overflow-hidden bg-white/5 backdrop-blur-sm border border-[var(--rm-gold)]/30 hover:border-[var(--rm-gold)] transition-all reveal"
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                <div className="aspect-[4/3] overflow-hidden hover-zoom">
                  <img
                    src={o.image}
                    alt={o.title}
                    className="w-full h-full object-cover opacity-90"
                    loading="lazy"
                  />
                </div>
                <div className="p-5">
                  <i
                    className={`fa-solid ${o.icon} text-[var(--rm-gold-light)] mb-2`}
                  />
                  <h3 className="font-display text-lg">{o.title}</h3>
                  <p className="text-xs text-[#e7dcc6] mt-1">
                    {o.subtitle}
                  </p>
                  <p className="font-royal text-[var(--rm-gold-light)] mt-3 text-sm">
                    {o.save}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link
              to="/offers"
              className="btn-ghost-gold !text-[var(--rm-cream)]"
              data-testid="all-offers-btn"
            >
              See All Offers <i className="fa-solid fa-arrow-right" />
            </Link>
          </div>
        </div>
      </section>

      {/* MEMBERSHIP STRIP */}
      <section className="py-20 lg:py-28" data-testid="membership-section">
        <div className="container-narrow">
          <div className="royal-card rounded-[28px] p-10 md:p-14 text-center relative overflow-hidden reveal">
            <span className="corner-orn tl" />
            <span className="corner-orn tr" />
            <span className="corner-orn bl" />
            <span className="corner-orn br" />
            <Mandala className="absolute -right-16 -top-16 w-72 opacity-15" />
            <span className="gold-chip mb-4">
              <i className="fa-solid fa-crown" /> Family Club
            </span>
            <h2 className="font-royal text-4xl md:text-5xl text-[var(--rm-maroon)]">
              Radha Madhav <span className="text-gold-grad">Family Club</span>
            </h2>
            <p className="font-cormorant italic text-2xl text-[var(--rm-mute)] mt-3 mb-8 max-w-xl mx-auto">
              Special privileges for our regular customers — because aap sirf
              customer nahi, parivaar ho.
            </p>
            <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4 text-left max-w-3xl mx-auto mb-8">
              {[
                { i: "fa-percent", t: "Exclusive Discounts" },
                { i: "fa-bolt", t: "Early Access" },
                { i: "fa-gift", t: "Festival Offers" },
                { i: "fa-handshake", t: "Loyalty Rewards" },
              ].map((b, i) => (
                <div
                  key={i}
                  className="flex items-center gap-3 p-3 rounded-xl border border-[var(--rm-gold)]/30 bg-[var(--rm-cream)]"
                >
                  <span className="w-9 h-9 rounded-full bg-[var(--rm-maroon)] text-[var(--rm-gold-light)] flex items-center justify-center">
                    <i className={`fa-solid ${b.i}`} />
                  </span>
                  <span className="text-sm font-medium">{b.t}</span>
                </div>
              ))}
            </div>
            <Link
              to="/membership"
              className="btn-royal"
              data-testid="join-club-btn"
            >
              Join Now (Free)
              <i className="fa-solid fa-arrow-right arrow" />
            </Link>
          </div>
        </div>
      </section>

      {/* REELS / VERTICAL VIDEO */}
      <section
        className="py-20 lg:py-28 bg-[var(--rm-ivory)]"
        data-testid="reels-section"
      >
        <div className="container-rm">
          <div className="text-center mb-12 reveal">
            <span className="section-eyebrow">Live Moments</span>
            <h2 className="section-title text-4xl md:text-5xl mt-3">
              Inside Our Showroom
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
            {reels.map((r, i) => (
              <ReelCard key={i} src={r} idx={i} />
            ))}
          </div>
        </div>
      </section>

      {/* TRUST / INAUGURATED */}
      <section
        className="py-20 lg:py-28 relative overflow-hidden"
        data-testid="trust-section"
        style={{
          background:
            "linear-gradient(135deg, #f3ece0 0%, #f8f5f0 50%, #f3ece0 100%)",
        }}
      >
        <Mandala className="absolute -bottom-24 -left-24 w-[420px] opacity-15 spin-slow" />
        <div className="container-rm">
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            <div className="reveal">
              <div className="rounded-3xl overflow-hidden hover-zoom relative">
                <img
                  src="/assets/images/showroom.jpg"
                  alt="Radha Madhav Showroom"
                  className="w-full aspect-[4/5] object-cover"
                />
                <div className="absolute inset-0 ring-1 ring-[var(--rm-gold)]/30 rounded-3xl pointer-events-none" />
              </div>
            </div>
            <div className="reveal">
              <span className="gold-chip mb-4">
                <i className="fa-solid fa-medal" /> Trusted By Gorakhpur
              </span>
              <h2 className="section-title text-4xl md:text-5xl">
                Inaugurated By
                <span className="block text-gold-grad font-royal">
                  Yogi Adityanath
                </span>
              </h2>
              <p className="font-cormorant italic text-2xl text-[var(--rm-mute)] mt-4 leading-relaxed">
                Hon'ble Chief Minister of Uttar Pradesh inaugurated our grand
                showroom — a moment of pride for every Gorakhpur family.
              </p>
              <div className="grid grid-cols-2 gap-4 mt-8">
                {[
                  { i: "fa-store", t: "35,000 sqft Showroom" },
                  { i: "fa-tags", t: "Wholesale Pricing" },
                  { i: "fa-shirt", t: "Latest Trends" },
                  { i: "fa-heart", t: "Family-Friendly" },
                ].map((b, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-3 p-4 rounded-xl bg-white border border-[var(--rm-gold)]/30"
                  >
                    <span className="w-10 h-10 rounded-full bg-[var(--rm-maroon)] text-[var(--rm-gold-light)] flex items-center justify-center">
                      <i className={`fa-solid ${b.i}`} />
                    </span>
                    <span className="text-sm font-medium">{b.t}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* GALLERY PREVIEW */}
      <section className="py-20 lg:py-28" data-testid="gallery-preview">
        <div className="container-rm">
          <div className="text-center mb-12 reveal">
            <span className="section-eyebrow">Gallery</span>
            <h2 className="section-title text-4xl md:text-5xl mt-3">
              Moments From Our Showroom
            </h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 lg:gap-4">
            {galleryImages.slice(0, 8).map((g, i) => (
              <div
                key={i}
                className="hover-zoom rounded-2xl overflow-hidden aspect-square reveal"
                style={{ transitionDelay: `${i * 60}ms` }}
              >
                <img
                  src={g}
                  alt=""
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link to="/gallery" className="btn-royal">
              View Full Gallery <i className="fa-solid fa-arrow-right arrow" />
            </Link>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section
        className="py-20 lg:py-28 bg-[var(--rm-maroon-deep)] text-[var(--rm-cream)] grain"
        data-testid="testimonials-section"
      >
        <div className="container-rm">
          <div className="text-center mb-12 reveal">
            <span
              className="section-eyebrow"
              style={{ color: "var(--rm-gold-light)" }}
            >
              Customer Love
            </span>
            <h2 className="font-royal text-4xl md:text-5xl mt-3">
              Gorakhpur ki Pasand
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {testimonials.map((t, i) => (
              <div
                key={i}
                className="rounded-2xl border border-[var(--rm-gold)]/30 bg-white/5 backdrop-blur-sm p-6 reveal"
                style={{ transitionDelay: `${i * 90}ms` }}
              >
                <div className="text-[var(--rm-gold-light)] mb-3 text-sm">
                  {"★".repeat(t.rating)}
                </div>
                <p className="font-cormorant italic text-lg leading-relaxed">
                  "{t.text}"
                </p>
                <div className="mt-5 pt-5 border-t border-[var(--rm-gold)]/20">
                  <div className="font-display text-base">{t.name}</div>
                  <div className="text-xs text-[#d6bc6e] tracking-wider uppercase">
                    {t.place}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* VISIT STORE / CTA */}
      <section
        className="py-20 lg:py-32 relative"
        data-testid="visit-store-section"
      >
        <div className="container-narrow text-center">
          <div className="reveal">
            <span className="section-eyebrow">Visit Us</span>
            <Ornament className="w-44 mx-auto my-4" />
            <h2 className="section-title text-4xl md:text-6xl">
              Ek Baar Aaiye,
              <span className="block text-gold-grad font-script text-6xl md:text-8xl mt-2 leading-none">
                Farq Khud Mehsoos Kijiye
              </span>
            </h2>
            <div className="grid md:grid-cols-3 gap-6 mt-12 text-left">
              <div className="royal-card rounded-2xl p-6 relative">
                <i className="fa-solid fa-location-dot text-2xl text-[var(--rm-gold-deep)]" />
                <h4 className="font-display text-lg mt-3 text-[var(--rm-maroon)]">
                  Address
                </h4>
                <p className="text-sm text-[var(--rm-mute)] mt-2">
                  {SITE.address}
                </p>
              </div>
              <div className="royal-card rounded-2xl p-6">
                <i className="fa-solid fa-phone-volume text-2xl text-[var(--rm-gold-deep)]" />
                <h4 className="font-display text-lg mt-3 text-[var(--rm-maroon)]">
                  Call Us
                </h4>
                <p className="text-sm text-[var(--rm-mute)] mt-2">
                  <a href={`tel:${SITE.phone1}`}>{SITE.phone1}</a>
                  <br />
                  <a href={`tel:${SITE.phone2}`}>{SITE.phone2}</a>
                </p>
              </div>
              <div className="royal-card rounded-2xl p-6">
                <i className="fa-solid fa-clock text-2xl text-[var(--rm-gold-deep)]" />
                <h4 className="font-display text-lg mt-3 text-[var(--rm-maroon)]">
                  Open Hours
                </h4>
                <p className="text-sm text-[var(--rm-mute)] mt-2">
                  10:00 AM – 8:30 PM
                  <br />
                  Open All Days
                </p>
              </div>
            </div>
            <div className="flex flex-wrap justify-center gap-4 mt-10">
              <a
                href={SITE.mapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-royal"
                data-testid="get-directions-btn"
              >
                <i className="fa-solid fa-map-location-dot" /> Get Directions
              </a>
              <a
                href={`tel:${SITE.phone1}`}
                className="btn-ghost-gold !text-[var(--rm-maroon)] !border-[var(--rm-maroon)]/40"
                data-testid="call-now-btn"
              >
                <i className="fa-solid fa-phone" /> Call Now
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

const Stat = ({ n, l }) => (
  <div className="text-center">
    <div className="font-royal text-2xl md:text-3xl text-[#f3dd9c]">{n}</div>
    <div className="text-[10px] tracking-[0.3em] uppercase mt-1">{l}</div>
  </div>
);

const ReelCard = ({ src, idx }) => {
  const ref = useRef(null);
  const [muted, setMuted] = useState(true);
  return (
    <div
      className="reel-card royal-card !p-0 reveal"
      style={{ transitionDelay: `${idx * 100}ms` }}
      data-testid={`reel-${idx}`}
    >
      <video
        ref={ref}
        src={src}
        autoPlay
        loop
        muted={muted}
        playsInline
        className="w-full h-full object-cover"
      />
      <button
        onClick={() => setMuted((m) => !m)}
        className="absolute bottom-4 right-4 w-10 h-10 rounded-full bg-black/60 text-[var(--rm-gold-light)] backdrop-blur-sm flex items-center justify-center"
        aria-label={muted ? "Unmute" : "Mute"}
      >
        <i className={`fa-solid ${muted ? "fa-volume-xmark" : "fa-volume-high"}`} />
      </button>
      <div className="absolute top-3 left-3 maroon-chip !bg-black/40 !text-[var(--rm-gold-light)] !border-[var(--rm-gold)]/50">
        Reel {idx + 1}
      </div>
    </div>
  );
};

export default Home;
