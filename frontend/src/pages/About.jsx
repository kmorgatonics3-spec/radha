import React from "react";
import { Link } from "react-router-dom";
import { Ornament, Mandala } from "@/components/Ornaments";
import { SITE } from "@/data/site";
import { useReveal } from "@/hooks/useReveal";

const VALUES = [
  { i: "fa-gem", t: "Premium Quality", d: "Every fabric, every stitch — handpicked for you." },
  { i: "fa-tags", t: "Wholesale Pricing", d: "Direct-from-mill prices, no middlemen markups." },
  { i: "fa-people-group", t: "Family-First", d: "From new-borns to grandparents — outfits for everyone." },
  { i: "fa-shield-halved", t: "Trusted Service", d: "Free alterations, warm staff & lifelong relationships." },
];

const About = () => {
  useReveal();
  return (
    <div data-testid="about-page">
      <section className="page-banner text-center" style={{ "--banner-img": "url('/assets/images/showroom.jpg')" }}>
        <span className="gold-chip">Our Story</span>
        <h1 className="font-royal text-5xl md:text-7xl mt-4 hero-text-shadow">
          Hamari <span className="text-gold-grad">Kahani</span>
        </h1>
      </section>

      <section className="py-20 lg:py-24" data-testid="about-story">
        <div className="container-rm grid lg:grid-cols-2 gap-14 items-center">
          <div className="reveal">
            <div className="rounded-3xl overflow-hidden hover-zoom relative">
              <img src="/assets/images/showroom.jpg" alt="" className="w-full aspect-[4/5] object-cover" />
              <div className="absolute inset-0 ring-1 ring-[var(--rm-gold)]/30 rounded-3xl pointer-events-none" />
            </div>
          </div>
          <div className="reveal">
            <span className="section-eyebrow">Established 2024</span>
            <h2 className="section-title text-4xl md:text-5xl mt-2">
              Born In Gorakhpur,
              <span className="block text-gold-grad">Built For Families</span>
            </h2>
            <p className="font-cormorant italic text-xl text-[var(--rm-mute)] mt-5 leading-relaxed">
              Radha Madhav Wholesale Family Mart LLP, established in April 2024
              in Gorakhpur, was born from a simple belief — that quality fashion
              should not be a luxury reserved for the few, but a celebration
              accessible to every Indian family.
            </p>
            <p className="text-base text-[var(--rm-ink)]/85 mt-4 leading-relaxed">
              Our 35,000 sqft grand showroom curates wedding wear, festive
              outfits, daily essentials, and timeless heritage pieces — all at
              wholesale prices for retailers and families alike. Inaugurated by
              Hon'ble CM Yogi Adityanath, Radha Madhav has quickly become
              Gorakhpur's most loved fashion destination.
            </p>
            <Ornament className="w-44 mt-7" />
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-24 bg-[var(--rm-ivory)]" data-testid="about-values">
        <div className="container-rm">
          <div className="text-center mb-12 reveal">
            <span className="section-eyebrow">What We Stand For</span>
            <h2 className="section-title text-4xl md:text-5xl mt-3">Our Promise To You</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {VALUES.map((v, i) => (
              <div
                key={i}
                className="royal-card rounded-2xl p-7 text-center relative reveal"
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                <Mandala className="absolute -right-10 -top-10 w-28 opacity-15" />
                <span className="w-14 h-14 rounded-full bg-[var(--rm-maroon)] text-[var(--rm-gold-light)] flex items-center justify-center mx-auto text-xl">
                  <i className={`fa-solid ${v.i}`} />
                </span>
                <h3 className="font-royal text-lg mt-4 text-[var(--rm-maroon)]">{v.t}</h3>
                <p className="text-sm text-[var(--rm-mute)] mt-2">{v.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20" data-testid="about-cta">
        <div className="container-narrow text-center reveal">
          <h2 className="font-royal text-3xl md:text-5xl">
            <span className="font-script text-5xl md:text-7xl text-[var(--rm-gold-deep)] block mb-2">
              Aaiye,
            </span>
            ek baar yahan visit kijiye —
          </h2>
          <p className="font-cormorant italic text-xl md:text-2xl text-[var(--rm-mute)] mt-4">
            Aapko khud mehsoos hoga ki yeh sirf showroom nahi, ek parivaar hai.
          </p>
          <div className="flex flex-wrap gap-3 justify-center mt-8">
            <Link to="/contact" className="btn-royal">
              <i className="fa-solid fa-location-dot" /> Find Us
            </Link>
            <a href={`tel:${SITE.phone1}`} className="btn-ghost-gold !text-[var(--rm-maroon)] !border-[var(--rm-maroon)]/40">
              <i className="fa-solid fa-phone" /> {SITE.phone1}
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
