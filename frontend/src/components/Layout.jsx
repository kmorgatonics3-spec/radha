import React, { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { SITE, waLink } from "@/data/site";
import { Ornament } from "@/components/Ornaments";

const NAV = [
  { to: "/", label: "Home", icon: "fa-house" },
  { to: "/collections", label: "Collections", icon: "fa-shirt" },
  { to: "/offers", label: "Offers", icon: "fa-tag" },
  { to: "/membership", label: "Membership", icon: "fa-crown" },
  { to: "/gallery", label: "Gallery", icon: "fa-images" },
  { to: "/about", label: "About", icon: "fa-circle-info" },
  { to: "/contact", label: "Contact", icon: "fa-location-dot" },
];

const MOBILE_NAV = [
  { to: "/", label: "Home", icon: "fa-house" },
  { to: "/collections", label: "Collections", icon: "fa-shirt" },
  { to: "/offers", label: "Offers", icon: "fa-tag" },
  { to: "/membership", label: "Member", icon: "fa-crown" },
  { to: "/contact", label: "Contact", icon: "fa-phone" },
];

const Layout = ({ children }) => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [popup, setPopup] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [location.pathname]);

  useEffect(() => {
    const timer = setTimeout(() => {
      const dismissed = sessionStorage.getItem("rm_popup_dismissed");
      if (!dismissed) setPopup(true);
    }, 5500);
    return () => clearTimeout(timer);
  }, []);

  const closePopup = () => {
    sessionStorage.setItem("rm_popup_dismissed", "1");
    setPopup(false);
  };

  return (
    <div className="App">
      {/* Top Strip Marquee */}
      <div className="strip" data-testid="top-marquee">
        <div className="marquee-track">
          {Array.from({ length: 2 }).map((_, k) => (
            <span key={k} className="inline-flex">
              {[
                "Inaugurated by Yogi Adityanath",
                "★",
                "Wholesale Prices • Premium Quality",
                "★",
                "Open 10 AM – 8:30 PM • All Days",
                "★",
                "Wedding Season Offers Live",
                "★",
                "Visit Our Grand Showroom — 10 Park Road, Gorakhpur",
                "★",
              ].map((t, i) => (
                <span key={i} className="px-6">
                  {t}
                </span>
              ))}
            </span>
          ))}
        </div>
      </div>

      {/* Top Nav */}
      <header
        className={`fixed left-0 right-0 z-50 transition-all duration-500 ${
          scrolled ? "glass-nav top-0" : "top-[40px] bg-transparent"
        }`}
        style={{ top: scrolled ? 0 : 40 }}
        data-testid="main-header"
      >
        <div className="container-rm flex items-center justify-between py-3 lg:py-4">
          <Link to="/" className="flex items-center gap-3" data-testid="logo-link">
            <span className="inline-flex items-center justify-center bg-white/95 rounded-full p-1.5 shadow-md ring-1 ring-[#c9a64655]">
              <img
                src="/assets/images/logo.png"
                alt="Radha Madhav"
                className="h-10 lg:h-12 w-auto"
              />
            </span>
            <div className="hidden sm:block leading-tight">
              <div
                className="font-royal text-[15px] lg:text-[17px] font-bold transition-colors"
                style={{ color: scrolled ? "#6a1e2c" : "#fbf8f1", textShadow: scrolled ? "none" : "0 2px 12px rgba(0,0,0,0.5)" }}
              >
                Radha Madhav
              </div>
              <div
                className="text-[10px] tracking-[0.3em] uppercase transition-colors"
                style={{ color: scrolled ? "#a78429" : "#e6cf86", textShadow: scrolled ? "none" : "0 2px 12px rgba(0,0,0,0.5)" }}
              >
                Wholesale Family Mart
              </div>
            </div>
          </Link>

          <nav className="hidden lg:flex items-center gap-8" data-testid="desktop-nav">
            {NAV.map((n) => (
              <NavLink
                key={n.to}
                to={n.to}
                end={n.to === "/"}
                className={({ isActive }) =>
                  `under-gold text-[13px] tracking-[0.18em] uppercase font-semibold transition-colors`
                }
                style={({ isActive }) => ({
                  color: scrolled
                    ? isActive ? "#6a1e2c" : "#1a1414"
                    : isActive ? "#e6cf86" : "#fbf8f1",
                  textShadow: scrolled ? "none" : "0 2px 10px rgba(0,0,0,0.55)",
                })}
                data-testid={`nav-${n.label.toLowerCase()}`}
              >
                {n.label}
              </NavLink>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <a
              href={`tel:${SITE.phone1}`}
              className="hidden md:inline-flex btn-royal !py-2.5 !px-5 !text-[11px]"
              data-testid="header-call-btn"
            >
              <i className="fa-solid fa-phone-volume" />
              <span>Call Store</span>
            </a>
            <button
              className="lg:hidden w-11 h-11 rounded-full border border-[#c9a64666] flex items-center justify-center bg-white shadow-md"
              style={{ color: "#6a1e2c" }}
              onClick={() => setOpen(!open)}
              aria-label="Toggle menu"
              data-testid="mobile-menu-btn"
            >
              <i className={`fa-solid ${open ? "fa-xmark" : "fa-bars"}`} />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile drawer */}
      <div
        className={`fixed inset-0 z-40 lg:hidden transition-opacity duration-300 ${
          open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        data-testid="mobile-drawer"
      >
        <div
          className="absolute inset-0 bg-[var(--rm-maroon-deep)]/70 backdrop-blur-sm"
          onClick={() => setOpen(false)}
        />
        <aside className="absolute top-0 right-0 w-[80%] max-w-[340px] h-full bg-[var(--rm-cream)] shadow-2xl pt-12 px-7 pb-7 flex flex-col">
          <div className="flex items-center justify-between mb-6 pt-4">
            <img src="/assets/images/logo.png" alt="" className="h-10" />
            <button
              onClick={() => setOpen(false)}
              className="w-9 h-9 rounded-full border border-[var(--rm-maroon)]/30"
              aria-label="Close"
            >
              <i className="fa-solid fa-xmark" />
            </button>
          </div>
          <Ornament className="w-32 mx-auto mb-6" />
          <nav className="flex flex-col gap-1">
            {NAV.map((n) => (
              <NavLink
                key={n.to}
                to={n.to}
                end={n.to === "/"}
                className={({ isActive }) =>
                  `flex items-center gap-4 px-4 py-3 rounded-xl text-[15px] font-display ${
                    isActive
                      ? "bg-[var(--rm-maroon)] text-[var(--rm-cream)]"
                      : "text-[var(--rm-ink)]"
                  }`
                }
              >
                <i className={`fa-solid ${n.icon} w-6`} />
                <span>{n.label}</span>
              </NavLink>
            ))}
          </nav>
          <div className="mt-auto pt-6">
            <a href={`tel:${SITE.phone1}`} className="btn-royal w-full justify-center">
              <i className="fa-solid fa-phone" /> {SITE.phone1}
            </a>
            <p className="text-center text-xs text-[var(--rm-mute)] mt-4">
              {SITE.hours}
            </p>
          </div>
        </aside>
      </div>

      {/* Page content */}
      <main className="page-enter min-h-[60vh]" key={location.pathname}>
        {children}
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating WhatsApp */}
      <a
        href={waLink("Hi Radha Madhav! I want to know about your collection.")}
        target="_blank"
        rel="noopener noreferrer"
        className="float-wa"
        aria-label="Chat on WhatsApp"
        data-testid="whatsapp-float"
      >
        <i className="fa-brands fa-whatsapp text-[28px]" />
      </a>

      {/* Sticky Visit Store (mobile only) */}
      <a
        href={SITE.mapUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="sticky-visit lg:hidden btn-royal !py-3 !px-4 !text-[11px]"
        data-testid="sticky-visit-store"
      >
        <i className="fa-solid fa-location-dot" /> Visit Store
      </a>

      {/* Mobile Bottom Nav */}
      <nav
        className="bottom-nav lg:hidden safe-bottom"
        data-testid="bottom-nav"
      >
        <div className="grid grid-cols-5">
          {MOBILE_NAV.map((n) => (
            <NavLink
              key={n.to}
              to={n.to}
              end={n.to === "/"}
              className={({ isActive }) =>
                `flex flex-col items-center justify-center py-2.5 text-[10px] tracking-wider uppercase ${
                  isActive ? "bn-active" : "text-[var(--rm-mute)]"
                }`
              }
              data-testid={`bottom-nav-${n.label.toLowerCase()}`}
            >
              <i className={`fa-solid ${n.icon} text-[16px] mb-1`} />
              <span>{n.label}</span>
            </NavLink>
          ))}
        </div>
      </nav>

      {/* Festive popup */}
      {popup && (
        <div className="fixed inset-0 z-[80] flex items-center justify-center px-5 bg-black/60 backdrop-blur-sm">
          <div
            className="popup-in royal-card rounded-[24px] p-8 max-w-md w-full text-center relative overflow-hidden"
            data-testid="festive-popup"
          >
            <span className="corner-orn tl" />
            <span className="corner-orn tr" />
            <span className="corner-orn bl" />
            <span className="corner-orn br" />
            <button
              onClick={closePopup}
              className="absolute top-3 right-3 w-9 h-9 rounded-full border border-[var(--rm-maroon)]/20 text-[var(--rm-maroon)] z-10 bg-white"
              aria-label="Close"
              data-testid="popup-close"
            >
              <i className="fa-solid fa-xmark" />
            </button>
            <div className="font-script text-5xl text-[var(--rm-gold-deep)] mb-1">
              Shubh Vivah
            </div>
            <Ornament className="w-44 mx-auto mb-2" />
            <h3 className="font-royal text-2xl text-[var(--rm-maroon)] mb-2">
              Shaadi Season Offers Live
            </h3>
            <p className="text-sm text-[var(--rm-mute)] mb-5 px-2">
              Bride, groom & family — combo deals, free alterations & festive
              gifts on every wedding shopping above ₹15,000.
            </p>
            <div className="flex gap-3 justify-center">
              <Link
                to="/offers"
                onClick={closePopup}
                className="btn-royal !py-3 !px-5 !text-[11px]"
              >
                View Offers
              </Link>
              <a
                href={waLink("I saw the Shaadi Season Offer. Tell me more!")}
                target="_blank"
                rel="noopener noreferrer"
                onClick={closePopup}
                className="btn-ghost-gold !text-[var(--rm-maroon)] !border-[var(--rm-maroon)]/40 !py-3 !px-5 !text-[11px]"
              >
                <i className="fa-brands fa-whatsapp" /> Chat
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

const Footer = () => (
  <footer
    className="bg-[#4a121d] pt-20 pb-32 lg:pb-20 relative overflow-hidden"
    style={{ color: "rgba(248, 245, 240, 0.88)" }}
    data-testid="footer"
  >
    <div
      className="absolute inset-0 pointer-events-none opacity-30"
      style={{
        backgroundImage:
          "radial-gradient(circle at 10% 20%, rgba(201,166,70,.3), transparent 35%), radial-gradient(circle at 90% 80%, rgba(201,166,70,.2), transparent 30%)",
      }}
    />
    <div className="container-rm relative">
      <div className="grid md:grid-cols-4 gap-12">
        <div className="md:col-span-2">
          <Link to="/" className="flex items-center gap-3 mb-5" style={{ color: "inherit" }}>
            <img src="/assets/images/logo.png" alt="" className="h-14 bg-white/95 rounded-full p-1.5 shadow-md" />
            <div>
              <div className="font-royal text-xl text-gold-grad">
                Radha Madhav
              </div>
              <div className="text-[11px] tracking-[0.3em] uppercase text-[#e6cf86]">
                Wholesale Family Mart
              </div>
            </div>
          </Link>
          <p className="font-cormorant text-xl italic leading-relaxed max-w-md" style={{ color: "rgba(248, 245, 240, 0.85)" }}>
            "Yahan sirf kapde nahi, yaadein milti hain — har khushi, har
            occasion, ek hi jagah."
          </p>
          <div className="flex gap-3 mt-6">
            <a
              href={SITE.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full border border-[#c9a64666] flex items-center justify-center hover:bg-[#c9a646] hover:text-[#4a121d] transition"
              style={{ color: "rgba(248, 245, 240, 0.88)" }}
              aria-label="Instagram"
            >
              <i className="fa-brands fa-instagram" />
            </a>
            <a
              href={SITE.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full border border-[#c9a64666] flex items-center justify-center hover:bg-[#c9a646] hover:text-[#4a121d] transition"
              style={{ color: "rgba(248, 245, 240, 0.88)" }}
              aria-label="Facebook"
            >
              <i className="fa-brands fa-facebook" />
            </a>
            <a
              href={waLink("Hi! I want to know more about your store.")}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full border border-[#c9a64666] flex items-center justify-center hover:bg-[#c9a646] hover:text-[#4a121d] transition"
              style={{ color: "rgba(248, 245, 240, 0.88)" }}
              aria-label="WhatsApp"
            >
              <i className="fa-brands fa-whatsapp" />
            </a>
          </div>
        </div>

        <div>
          <h4 className="font-royal text-lg text-[#e6cf86] mb-4">
            Explore
          </h4>
          <ul className="space-y-2 text-sm">
            {NAV.map((n) => (
              <li key={n.to}>
                <Link
                  to={n.to}
                  className="hover:text-[#e6cf86] transition"
                  style={{ color: "rgba(248, 245, 240, 0.85)" }}
                >
                  {n.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-royal text-lg text-[#e6cf86] mb-4">
            Visit Us
          </h4>
          <p className="text-sm leading-relaxed mb-3" style={{ color: "rgba(248, 245, 240, 0.85)" }}>
            <i className="fa-solid fa-location-dot mr-2 text-[#c9a646]" />
            {SITE.address}
          </p>
          <p className="text-sm mb-1" style={{ color: "rgba(248, 245, 240, 0.85)" }}>
            <i className="fa-solid fa-phone mr-2 text-[#c9a646]" />
            <a href={`tel:${SITE.phone1}`} style={{ color: "inherit" }}>{SITE.phone1}</a> /{" "}
            <a href={`tel:${SITE.phone2}`} style={{ color: "inherit" }}>{SITE.phone2}</a>
          </p>
          <p className="text-sm" style={{ color: "rgba(248, 245, 240, 0.85)" }}>
            <i className="fa-solid fa-clock mr-2 text-[#c9a646]" />
            {SITE.hours}
          </p>
        </div>
      </div>

      <div className="mt-14 pt-6 border-t border-[#c9a64633] flex flex-col md:flex-row items-center justify-between gap-3 text-xs" style={{ color: "rgba(248, 245, 240, 0.6)" }}>
        <span>
          © {new Date().getFullYear()} Radha Madhav Wholesale Family Mart LLP.
          All rights reserved.
        </span>
        <span>Made with ❤ in Gorakhpur</span>
      </div>
    </div>
  </footer>
);

export default Layout;
