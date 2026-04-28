import React, { useState } from "react";
import { SITE, waLink } from "@/data/site";
import { Ornament, Mandala } from "@/components/Ornaments";
import { useReveal } from "@/hooks/useReveal";

const Contact = () => {
  useReveal();
  const [form, setForm] = useState({ name: "", phone: "", message: "" });
  const onSubmit = (e) => {
    e.preventDefault();
    const msg = `Hi Radha Madhav!\nName: ${form.name}\nPhone: ${form.phone}\n\n${form.message}`;
    window.open(waLink(msg), "_blank", "noopener,noreferrer");
  };

  return (
    <div data-testid="contact-page">
      <section className="page-banner text-center" style={{ "--banner-img": "url('/assets/images/showroom.jpg')" }}>
        <span className="gold-chip">Contact</span>
        <h1 className="font-royal text-5xl md:text-7xl mt-4 hero-text-shadow">
          Ek Baar <span className="text-gold-grad">Aaiye</span>
        </h1>
        <p className="font-cormorant italic text-xl md:text-2xl mt-4 text-[#f3ece0]">
          Farq khud mehsoos kijiye — hamari grand showroom mein.
        </p>
      </section>

      <section className="py-20" data-testid="contact-info">
        <div className="container-rm grid lg:grid-cols-3 gap-6">
          <div className="royal-card rounded-2xl p-7 reveal">
            <i className="fa-solid fa-location-dot text-2xl text-[var(--rm-gold-deep)]" />
            <h3 className="font-royal text-xl mt-3 text-[var(--rm-maroon)]">Address</h3>
            <p className="text-sm text-[var(--rm-mute)] mt-2 leading-relaxed">{SITE.address}</p>
            <a
              href={SITE.mapUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="under-gold text-sm tracking-[0.18em] uppercase text-[var(--rm-maroon)] inline-block mt-3"
              data-testid="get-directions-link"
            >
              Get Directions <i className="fa-solid fa-arrow-right" />
            </a>
          </div>
          <div className="royal-card rounded-2xl p-7 reveal" style={{ transitionDelay: "80ms" }}>
            <i className="fa-solid fa-phone-volume text-2xl text-[var(--rm-gold-deep)]" />
            <h3 className="font-royal text-xl mt-3 text-[var(--rm-maroon)]">Call & WhatsApp</h3>
            <p className="text-sm mt-2">
              <a className="under-gold" href={`tel:${SITE.phone1}`}>{SITE.phone1}</a>
              <br />
              <a className="under-gold" href={`tel:${SITE.phone2}`}>{SITE.phone2}</a>
            </p>
            <a
              href={waLink("Hi Radha Madhav! I have a query.")}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm tracking-[0.18em] uppercase text-[var(--rm-maroon)] inline-block mt-3 under-gold"
            >
              <i className="fa-brands fa-whatsapp" /> Chat on WhatsApp
            </a>
          </div>
          <div className="royal-card rounded-2xl p-7 reveal" style={{ transitionDelay: "160ms" }}>
            <i className="fa-solid fa-clock text-2xl text-[var(--rm-gold-deep)]" />
            <h3 className="font-royal text-xl mt-3 text-[var(--rm-maroon)]">Open Hours</h3>
            <p className="text-sm text-[var(--rm-mute)] mt-2">
              10:00 AM – 8:30 PM
              <br />
              Open All Days
            </p>
            <p className="text-xs text-[var(--rm-gold-deep)] tracking-[0.2em] uppercase mt-3">No Holidays</p>
          </div>
        </div>
      </section>

      <section className="pb-20" data-testid="contact-form-and-map">
        <div className="container-rm grid lg:grid-cols-2 gap-8">
          <div className="royal-card rounded-3xl p-8 md:p-10 reveal relative overflow-hidden">
            <span className="corner-orn tl" />
            <span className="corner-orn tr" />
            <span className="corner-orn bl" />
            <span className="corner-orn br" />
            <Mandala className="absolute -right-20 -bottom-20 w-72 opacity-15" />
            <span className="section-eyebrow">Send Message</span>
            <Ornament className="w-44 mt-3 mb-4" />
            <h2 className="section-title text-2xl md:text-3xl">
              Tell Us How We Can Help
            </h2>
            <form onSubmit={onSubmit} className="grid gap-4 mt-6" data-testid="contact-form">
              <input
                type="text"
                placeholder="Your Name"
                className="input-royal"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                required
                data-testid="contact-name"
              />
              <input
                type="tel"
                placeholder="Phone Number"
                className="input-royal"
                value={form.phone}
                onChange={(e) => setForm({ ...form, phone: e.target.value })}
                required
                data-testid="contact-phone"
              />
              <textarea
                placeholder="How can we help you? (occasion, budget, preferences...)"
                rows={5}
                className="input-royal"
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                required
                data-testid="contact-message"
              />
              <button type="submit" className="btn-royal justify-center" data-testid="contact-submit">
                <i className="fa-brands fa-whatsapp" /> Send via WhatsApp
              </button>
            </form>
          </div>
          <div className="rounded-3xl overflow-hidden royal-card !p-0 reveal min-h-[420px]" data-testid="map-embed">
            <iframe
              title="Radha Madhav Map"
              src={`https://www.google.com/maps?q=${encodeURIComponent(
                "Park Road Gorakhpur " + SITE.address
              )}&output=embed`}
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: 420 }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
