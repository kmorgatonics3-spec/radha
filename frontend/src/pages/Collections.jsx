import React, { useState, useMemo } from "react";
import { collections, waLink, occasions } from "@/data/site";
import { Ornament } from "@/components/Ornaments";
import { useReveal } from "@/hooks/useReveal";

const FILTERS = [
  { id: "all", label: "All" },
  { id: "Bridal", label: "Bridal" },
  { id: "Reception", label: "Reception" },
  { id: "Heritage", label: "Heritage" },
  { id: "Wedding", label: "Wedding" },
  { id: "Suit", label: "Suits" },
  { id: "Festive", label: "Festive" },
  { id: "Ladies", label: "Ladies" },
  { id: "Kids", label: "Kids" },
  { id: "Daily", label: "Daily" },
  { id: "Jewellery", label: "Jewellery" },
];

const Collections = () => {
  useReveal();
  const [active, setActive] = useState("all");
  const [budget, setBudget] = useState("");
  const [gender, setGender] = useState("");
  const [occasion, setOccasion] = useState("");

  const all = useMemo(() => {
    const items = [];
    Object.values(collections).forEach((c) =>
      c.items.forEach((it) => items.push({ ...it, group: c.title }))
    );
    return items;
  }, []);

  const filtered = useMemo(() => {
    if (active === "all") return all;
    return all.filter((it) => it.tag === active);
  }, [active, all]);

  const stylistMsg = `Hi, I need a stylist suggestion. Gender: ${gender || "—"}, Occasion: ${occasion || "—"}, Budget: ${budget || "—"}`;

  return (
    <div data-testid="collections-page">
      {/* Banner */}
      <section className="page-banner text-center" style={{ "--banner-img": "url('/assets/images/showroom.jpg')" }}>
        <div className="relative z-10">
          <span className="gold-chip">Collections</span>
          <h1 className="font-royal text-5xl md:text-7xl mt-4 hero-text-shadow">
            Har Umar, Har Style,
            <span className="block text-gold-grad">Har Budget</span>
          </h1>
          <p className="font-cormorant italic text-xl md:text-2xl mt-4 text-[#f3ece0]">
            From bridal grandeur to everyday elegance — explore collections
            curated for every soul in your family.
          </p>
        </div>
      </section>

      {/* Style Suggestion Tool */}
      <section className="py-16 lg:py-20" data-testid="stylist-tool">
        <div className="container-narrow">
          <div className="royal-card rounded-3xl p-8 md:p-10 reveal">
            <div className="text-center mb-7">
              <span className="section-eyebrow">Innovation</span>
              <h2 className="section-title text-3xl md:text-4xl mt-2">
                Find Your Perfect Style
              </h2>
              <p className="text-sm text-[var(--rm-mute)] mt-2">
                Tell us a little about you & we'll recommend looks. Our personal
                stylist will WhatsApp you back in minutes.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-4">
              <select
                className="input-royal"
                value={gender}
                onChange={(e) => setGender(e.target.value)}
                data-testid="stylist-gender"
              >
                <option value="">Gender</option>
                <option>Bride</option>
                <option>Groom</option>
                <option>Lady</option>
                <option>Gentleman</option>
                <option>Kids</option>
              </select>
              <select
                className="input-royal"
                value={occasion}
                onChange={(e) => setOccasion(e.target.value)}
                data-testid="stylist-occasion"
              >
                <option value="">Occasion</option>
                {occasions.map((o) => (
                  <option key={o.id}>{o.name}</option>
                ))}
                <option>Reception</option>
                <option>Festive</option>
              </select>
              <select
                className="input-royal"
                value={budget}
                onChange={(e) => setBudget(e.target.value)}
                data-testid="stylist-budget"
              >
                <option value="">Budget</option>
                <option>Under ₹5,000</option>
                <option>₹5,000 – ₹15,000</option>
                <option>₹15,000 – ₹40,000</option>
                <option>₹40,000+</option>
              </select>
            </div>
            <div className="flex flex-wrap gap-3 justify-center mt-6">
              <a
                href={waLink(stylistMsg)}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-royal"
                data-testid="chat-stylist-btn"
              >
                <i className="fa-brands fa-whatsapp" /> Chat With Stylist
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Filters */}
      <section className="pb-8" data-testid="collections-filters">
        <div className="container-rm">
          <div className="flex flex-wrap gap-2 justify-center">
            {FILTERS.map((f) => (
              <button
                key={f.id}
                onClick={() => setActive(f.id)}
                className={`px-5 py-2.5 rounded-full text-xs tracking-[0.18em] uppercase border transition ${
                  active === f.id
                    ? "bg-[var(--rm-maroon)] text-[var(--rm-cream)] border-[var(--rm-maroon)]"
                    : "border-[var(--rm-maroon)]/25 text-[var(--rm-ink)] hover:border-[var(--rm-gold)]"
                }`}
                data-testid={`filter-${f.id}`}
              >
                {f.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Grid */}
      <section className="pb-24" data-testid="collections-grid">
        <div className="container-rm">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 lg:gap-6">
            {filtered.map((it, i) => (
              <a
                key={i}
                href={waLink(`Hi, I'm interested in: ${it.name}`)}
                target="_blank"
                rel="noopener noreferrer"
                className="group hover-zoom rounded-2xl overflow-hidden bg-white royal-card !p-0 tilt-card"
                data-testid={`product-${i}`}
              >
                <div className="aspect-[3/4] relative overflow-hidden">
                  <img src={it.img} alt={it.name} className="w-full h-full object-cover" loading="lazy" />
                  <span className="absolute top-3 left-3 maroon-chip">{it.tag}</span>
                  <div className="absolute inset-0 product-overlay opacity-0 group-hover:opacity-100 transition" />
                  <div className="absolute bottom-3 left-3 right-3 text-[var(--rm-cream)] opacity-0 group-hover:opacity-100 transition translate-y-2 group-hover:translate-y-0 duration-500">
                    <span className="text-[11px] tracking-[0.25em] uppercase">
                      Tap for details <i className="fa-brands fa-whatsapp" />
                    </span>
                  </div>
                </div>
                <div className="p-4">
                  <h4 className="font-display text-[15px] truncate">{it.name}</h4>
                  <p className="text-xs text-[var(--rm-gold-deep)] tracking-wider uppercase mt-1">
                    {it.price}
                  </p>
                </div>
              </a>
            ))}
          </div>
          {filtered.length === 0 && (
            <div className="text-center py-16">
              <Ornament className="w-44 mx-auto mb-3" />
              <p className="font-cormorant italic text-2xl text-[var(--rm-mute)]">
                Visit our showroom to explore many more designs in this category.
              </p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Collections;
