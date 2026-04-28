import React from "react";
import { offers, waLink, SITE } from "@/data/site";
import { Ornament } from "@/components/Ornaments";
import CountdownTimer from "@/components/CountdownTimer";
import { useReveal } from "@/hooks/useReveal";

const extraOffers = [
  { title: "Free Alteration", subtitle: "On every purchase above ₹5,000", icon: "fa-scissors" },
  { title: "Free Gift Wrap", subtitle: "Royal packaging on wedding orders", icon: "fa-gift" },
  { title: "Easy EMI Available", subtitle: "On all major credit cards", icon: "fa-credit-card" },
  { title: "Stylist Help Free", subtitle: "Personal style consultation", icon: "fa-user-graduate" },
];

const Offers = () => {
  useReveal();
  return (
    <div data-testid="offers-page">
      <section className="page-banner text-center" style={{ "--banner-img": "url('/assets/images/showroom.jpg')" }}>
        <span className="gold-chip">Limited Time</span>
        <h1 className="font-royal text-5xl md:text-7xl mt-4 hero-text-shadow">
          Showroom <span className="text-gold-grad">Offers</span>
        </h1>
        <p className="font-cormorant italic text-xl md:text-2xl mt-4 text-[var(--rm-cream)]/85">
          Aaj ke special — sirf hamare showroom par.
        </p>
        <div className="mt-8">
          <CountdownTimer />
        </div>
      </section>

      <section className="py-20" data-testid="primary-offers">
        <div className="container-rm">
          <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
            {offers.map((o, i) => (
              <div
                key={i}
                className="relative rounded-3xl overflow-hidden royal-card !p-0 reveal tilt-card"
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                <div className="aspect-[16/9] hover-zoom relative">
                  <img
                    src={o.image}
                    alt={o.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-tr from-[#1a1414cc] via-transparent to-transparent" />
                  <span className="absolute top-4 left-4 gold-chip">
                    {o.save}
                  </span>
                </div>
                <div className="p-6 md:p-8">
                  <i className={`fa-solid ${o.icon} text-[var(--rm-gold-deep)] text-2xl`} />
                  <h3 className="font-royal text-2xl text-[var(--rm-maroon)] mt-3">
                    {o.title}
                  </h3>
                  <p className="font-cormorant italic text-xl text-[var(--rm-mute)] mt-2">
                    {o.subtitle}
                  </p>
                  <div className="flex gap-3 mt-5">
                    <a
                      href={waLink(`Hi, I'm interested in: ${o.title}`)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-royal !py-3 !px-5 !text-[11px]"
                    >
                      <i className="fa-brands fa-whatsapp" /> Claim Offer
                    </a>
                    <a
                      href={`tel:${SITE.phone1}`}
                      className="btn-ghost-gold !text-[var(--rm-maroon)] !border-[var(--rm-maroon)]/40 !py-3 !px-5 !text-[11px]"
                    >
                      <i className="fa-solid fa-phone" /> Call
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        className="py-20 bg-[var(--rm-maroon-deep)] text-[var(--rm-cream)]"
        data-testid="extra-perks"
      >
        <div className="container-rm">
          <div className="text-center mb-12 reveal">
            <span className="section-eyebrow" style={{ color: "var(--rm-gold-light)" }}>
              Always Free
            </span>
            <Ornament className="w-44 mx-auto my-3" />
            <h2 className="font-royal text-4xl md:text-5xl">
              Extra Perks With Every Visit
            </h2>
          </div>
          <div className="grid md:grid-cols-4 gap-5">
            {extraOffers.map((p, i) => (
              <div
                key={i}
                className="rounded-2xl border border-[var(--rm-gold)]/30 bg-white/5 p-7 text-center reveal"
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                <span className="w-14 h-14 rounded-full bg-[var(--rm-gold)] text-[var(--rm-maroon-deep)] flex items-center justify-center mx-auto text-xl">
                  <i className={`fa-solid ${p.icon}`} />
                </span>
                <h4 className="font-display text-lg mt-4">{p.title}</h4>
                <p className="text-sm text-[var(--rm-cream)]/80 mt-2">{p.subtitle}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Offers;
