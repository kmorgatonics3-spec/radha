import React, { useState } from "react";
import { galleryImages, reels } from "@/data/site";
import { Ornament } from "@/components/Ornaments";
import { useReveal } from "@/hooks/useReveal";

const Gallery = () => {
  useReveal();
  const [open, setOpen] = useState(null);
  return (
    <div data-testid="gallery-page">
      <section className="page-banner text-center" style={{ "--banner-img": "url('/assets/images/showroom.jpg')" }}>
        <span className="gold-chip">Gallery</span>
        <h1 className="font-royal text-5xl md:text-7xl mt-4 hero-text-shadow">
          Moments &amp; <span className="text-gold-grad">Memories</span>
        </h1>
        <p className="font-cormorant italic text-xl md:text-2xl mt-4 text-[#f3ece0]">
          A glimpse inside our grand showroom — and the families that make it home.
        </p>
      </section>

      <section className="py-20" data-testid="gallery-videos">
        <div className="container-rm">
          <div className="text-center mb-10 reveal">
            <span className="section-eyebrow">Reels</span>
            <Ornament className="w-44 mx-auto my-3" />
            <h2 className="section-title text-3xl md:text-4xl">Live Showroom Vibes</h2>
          </div>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-5">
            {reels.map((r, i) => (
              <div key={i} className="reel-card royal-card !p-0 reveal" style={{ transitionDelay: `${i * 80}ms` }}>
                <video src={r} autoPlay loop muted playsInline className="w-full h-full object-cover" />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="pb-24" data-testid="gallery-photos">
        <div className="container-rm">
          <div className="text-center mb-10 reveal">
            <span className="section-eyebrow">Photos</span>
            <h2 className="section-title text-3xl md:text-4xl mt-2">Inside The Showroom</h2>
          </div>
          <div className="columns-2 md:columns-3 lg:columns-4 gap-4 [column-fill:_balance]">
            {galleryImages.map((g, i) => (
              <button
                key={i}
                onClick={() => setOpen(g)}
                className="block w-full mb-4 rounded-2xl overflow-hidden hover-zoom break-inside-avoid reveal"
                style={{ transitionDelay: `${i * 50}ms` }}
                data-testid={`gallery-img-${i}`}
              >
                <img
                  src={g}
                  alt=""
                  className="w-full h-auto"
                  loading="lazy"
                  style={{ aspectRatio: i % 3 === 0 ? "3/4" : i % 2 === 0 ? "4/5" : "1/1" }}
                />
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {open && (
        <div
          className="fixed inset-0 z-[80] bg-black/85 backdrop-blur-md flex items-center justify-center p-4"
          onClick={() => setOpen(null)}
          data-testid="lightbox"
        >
          <button className="absolute top-5 right-5 w-11 h-11 rounded-full bg-white/10 text-white" aria-label="Close">
            <i className="fa-solid fa-xmark text-xl" />
          </button>
          <img src={open} alt="" className="max-h-[90vh] max-w-[92vw] rounded-2xl shadow-2xl" />
        </div>
      )}
    </div>
  );
};

export default Gallery;
