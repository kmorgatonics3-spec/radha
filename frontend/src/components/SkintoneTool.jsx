import React, { useState } from "react";
import { skintonePalettes, waLink } from "@/data/site";

const ORDER = ["fair", "wheatish", "dusky", "deep"];
const SWATCH = {
  fair: "#f3d9b8",
  wheatish: "#d4a373",
  dusky: "#a37a5b",
  deep: "#6e4530",
};

const SkintoneTool = () => {
  const [tone, setTone] = useState(null);
  const palette = tone ? skintonePalettes[tone] : null;

  return (
    <section className="py-16 lg:py-20" data-testid="skintone-tool">
      <div className="container-narrow">
        <div className="royal-card rounded-3xl p-8 md:p-10 reveal relative overflow-hidden">
          <div
            aria-hidden="true"
            className="absolute -top-20 -right-20 w-64 h-64 rounded-full opacity-20 pointer-events-none"
            style={{
              background:
                "radial-gradient(closest-side,#c9a64688 0%,transparent 70%)",
            }}
          />
          <div className="text-center mb-7 relative">
            <span className="section-eyebrow">
              <i className="fa-solid fa-palette mr-1" /> Color Match Tool
            </span>
            <h2 className="section-title text-3xl md:text-4xl mt-2">
              Which Color Suits <span className="text-gold-grad">Your Skintone?</span>
            </h2>
            <p className="text-sm text-[var(--rm-mute)] mt-2 max-w-lg mx-auto">
              Pick your skintone — we'll show the perfect saree, lehenga & suit
              shades that make you glow.
            </p>
          </div>

          {/* Skintone selector */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 md:gap-4 relative">
            {ORDER.map((t) => {
              const active = tone === t;
              return (
                <button
                  key={t}
                  onClick={() => setTone(t)}
                  data-testid={`skintone-${t}`}
                  className={`group relative rounded-2xl p-4 border-2 transition-all duration-300 ${
                    active
                      ? "border-[var(--rm-gold)] bg-[var(--rm-cream)]/70 -translate-y-1"
                      : "border-transparent bg-white hover:border-[var(--rm-gold)]/40"
                  }`}
                  style={{
                    boxShadow: active
                      ? "0 10px 30px -10px rgba(201,166,70,0.55)"
                      : "0 2px 10px rgba(0,0,0,0.04)",
                  }}
                >
                  <span
                    className="block w-full aspect-square rounded-xl mb-2"
                    style={{
                      background: `linear-gradient(135deg, ${SWATCH[t]} 0%, ${SWATCH[t]}cc 100%)`,
                      boxShadow: "inset 0 -8px 20px rgba(0,0,0,0.12)",
                    }}
                  />
                  <span className="text-[11px] sm:text-xs font-bold tracking-[0.18em] uppercase text-[var(--rm-maroon)] block">
                    {skintonePalettes[t].label}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Result */}
          {palette && (
            <div className="mt-8" data-testid="skintone-result">
              <div className="flex items-center gap-3 mb-4">
                <span className="h-px flex-1 bg-gradient-to-r from-transparent via-[var(--rm-gold)] to-transparent" />
                <span className="font-cormorant italic text-base md:text-lg text-[var(--rm-mute)]">
                  {palette.desc}
                </span>
                <span className="h-px flex-1 bg-gradient-to-r from-transparent via-[var(--rm-gold)] to-transparent" />
              </div>
              <div className="grid grid-cols-3 sm:grid-cols-6 gap-3">
                {palette.colors.map((c) => (
                  <div
                    key={c.name}
                    className="text-center"
                    data-testid={`color-${c.name.toLowerCase().replace(/\s+/g, "-")}`}
                  >
                    <span
                      className="block aspect-square rounded-xl shadow-md ring-1 ring-black/5 hover:scale-105 transition-transform duration-300"
                      style={{
                        background: c.hex,
                        boxShadow:
                          "inset 0 -10px 24px rgba(0,0,0,0.18), 0 4px 14px rgba(0,0,0,0.12)",
                      }}
                    />
                    <p className="mt-2 text-[11px] font-semibold text-[var(--rm-ink)]">
                      {c.name}
                    </p>
                  </div>
                ))}
              </div>
              <div className="flex flex-wrap gap-3 justify-center mt-7">
                <a
                  href={waLink(
                    `Hi! My skintone is ${palette.label}. Recommended colors: ${palette.colors.map((c) => c.name).join(", ")}. Please show me sarees/lehengas in these shades.`
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-royal"
                  data-testid="skintone-chat-btn"
                >
                  <i className="fa-brands fa-whatsapp" /> Show Me These Outfits
                </a>
                <button
                  onClick={() => setTone(null)}
                  className="btn-ghost-gold !text-[var(--rm-maroon)] !border-[var(--rm-maroon)]/40"
                  data-testid="skintone-reset"
                >
                  <i className="fa-solid fa-rotate-left" /> Try Again
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default SkintoneTool;
