import React, { useState } from "react";
import { SITE, waLink } from "@/data/site";
import { Ornament, Mandala } from "@/components/Ornaments";
import { useReveal } from "@/hooks/useReveal";

const BENEFITS = [
  { i: "fa-percent", t: "Exclusive Discounts", d: "Member-only prices on every visit" },
  { i: "fa-bolt", t: "Early Collection Access", d: "First look at new arrivals" },
  { i: "fa-gift", t: "Festival Surprises", d: "Free gifts on Diwali, Karwa Chauth & more" },
  { i: "fa-handshake", t: "Loyalty Rewards", d: "Earn points on every purchase" },
  { i: "fa-truck-fast", t: "Priority Service", d: "Faster alterations & priority billing" },
  { i: "fa-cake-candles", t: "Birthday Bonus", d: "Special discount on your birthday month" },
];

const Membership = () => {
  useReveal();
  const [form, setForm] = useState({ name: "", phone: "", city: "Gorakhpur" });
  const [done, setDone] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.phone) return;
    const msg = `🌟 Family Club Sign-up\nName: ${form.name}\nPhone: ${form.phone}\nCity: ${form.city}`;
    window.open(waLink(msg), "_blank", "noopener,noreferrer");
    setDone(true);
  };

  return (
    <div data-testid="membership-page">
      <section className="page-banner text-center" style={{ "--banner-img": "url('/assets/images/showroom.jpg')" }}>
        <span className="gold-chip"><i className="fa-solid fa-crown" /> Family Club</span>
        <h1 className="font-royal text-5xl md:text-7xl mt-4 hero-text-shadow">
          Radha Madhav <span className="text-gold-grad">Family Club</span>
        </h1>
        <p className="font-cormorant italic text-xl md:text-2xl mt-4 text-[#f3ece0]">
          Aap sirf customer nahi, parivaar ho — and parivaar ke liye kuch khaas hota hai.
        </p>
      </section>

      <section className="py-20 lg:py-24" data-testid="benefits-grid">
        <div className="container-rm">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {BENEFITS.map((b, i) => (
              <div
                key={i}
                className="royal-card rounded-2xl p-7 reveal relative overflow-hidden"
                style={{ transitionDelay: `${i * 70}ms` }}
              >
                <Mandala className="absolute -right-12 -top-12 w-40 opacity-15" />
                <span className="w-12 h-12 rounded-full bg-[var(--rm-maroon)] text-[var(--rm-gold-light)] flex items-center justify-center text-lg">
                  <i className={`fa-solid ${b.i}`} />
                </span>
                <h3 className="font-royal text-xl mt-4 text-[var(--rm-maroon)]">{b.t}</h3>
                <p className="text-sm text-[var(--rm-mute)] mt-2">{b.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="pb-24" data-testid="membership-form">
        <div className="container-narrow">
          <div className="royal-card rounded-3xl p-8 md:p-12 reveal relative overflow-hidden">
            <span className="corner-orn tl" />
            <span className="corner-orn tr" />
            <span className="corner-orn bl" />
            <span className="corner-orn br" />
            <Mandala className="absolute -right-20 -bottom-20 w-72 opacity-15" />
            <div className="text-center mb-8">
              <span className="section-eyebrow">Free Sign-up</span>
              <Ornament className="w-44 mx-auto my-3" />
              <h2 className="section-title text-3xl md:text-4xl">Join The Family Club</h2>
              <p className="text-sm text-[var(--rm-mute)] mt-2">
                Fill the form and get your member benefits via WhatsApp.
              </p>
            </div>

            {done ? (
              <div className="text-center py-10">
                <span className="w-16 h-16 rounded-full bg-[var(--rm-gold)] text-[var(--rm-maroon-deep)] flex items-center justify-center mx-auto text-2xl">
                  <i className="fa-solid fa-check" />
                </span>
                <h3 className="font-royal text-2xl text-[var(--rm-maroon)] mt-4">
                  Welcome to the Parivaar!
                </h3>
                <p className="text-sm text-[var(--rm-mute)] mt-2">
                  We've opened WhatsApp for you. Send the message and our team
                  will activate your membership shortly.
                </p>
                <button
                  className="btn-royal mt-6"
                  onClick={() => setDone(false)}
                  data-testid="signup-again"
                >
                  Sign Up Another
                </button>
              </div>
            ) : (
              <form onSubmit={onSubmit} className="grid gap-4 max-w-lg mx-auto">
                <input
                  type="text"
                  placeholder="Full Name"
                  className="input-royal"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  required
                  data-testid="member-name"
                />
                <input
                  type="tel"
                  placeholder="Phone Number"
                  className="input-royal"
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  required
                  data-testid="member-phone"
                />
                <input
                  type="text"
                  placeholder="City"
                  className="input-royal"
                  value={form.city}
                  onChange={(e) => setForm({ ...form, city: e.target.value })}
                  required
                  data-testid="member-city"
                />
                <button type="submit" className="btn-royal justify-center mt-2" data-testid="member-submit">
                  <i className="fa-solid fa-crown" /> Join Now (Free)
                </button>
                <p className="text-xs text-[var(--rm-mute)] text-center mt-2">
                  By signing up you agree to receive updates on WhatsApp from
                  Radha Madhav. No spam — only good offers.
                </p>
              </form>
            )}
          </div>

          <div className="text-center mt-10">
            <p className="font-cormorant italic text-xl text-[var(--rm-mute)]">
              Already a member? Visit the showroom or call{" "}
              <a className="text-[var(--rm-maroon)] under-gold" href={`tel:${SITE.phone1}`}>
                {SITE.phone1}
              </a>{" "}
              to redeem.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Membership;
