// HeroClone.jsx
import React from "react";

export default function HeroClone({ bgImage = "https://www.aditiconsulting.com/hubfs/App%20Modernization%20header.jpg" }) {
  return (
    <header className="relative w-full">
      {/* Background image container (you'll supply the image) */}
      <div
        className="absolute inset-0 bg-black/60 bg-cover bg-center"
        style={
          bgImage
            ? { backgroundImage: `url(${bgImage})` }
            : {
                background:
                  "linear-gradient(180deg, rgba(0,8,20,0.55), rgba(0,8,20,0.55))",
              }
        }
        aria-hidden="true"
      />

      {/* Overlay gradient for consistent legibility */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "linear-gradient(90deg, rgba(0,8,20,0.65) 0%, rgba(0,8,20,0.25) 45%, rgba(0,8,20,0.65) 100%)",
        }}
        aria-hidden="true"
      />

      {/* Content: left-aligned block that scales across breakpoints */}
      <div className="relative z-10 mx-auto max-w-7xl px-6 py-20 sm:py-28 md:py-32 lg:py-36">
        <div className="grid items-center gap-8 md:grid-cols-2">
          {/* LEFT CONTENT */}
          <div className="order-1 flex items-start">
            <div className="max-w-2xl">
              <p
                className="text-[11px] font-semibold uppercase tracking-wider"
                style={{ color: "#FFB022" }}
              >
                DIGITAL ENGINEERING SERVICES
              </p>

              <h1
                className="mt-4 font-extrabold leading-tight text-white"
                style={{
                  fontSize: "clamp(2rem, 5vw, 4.25rem)", // responsive scale
                }}
              >
                Cloud & Infrastructure — Built for Scale
              </h1>

              <p className="mt-6 text-base leading-relaxed text-[#E6EEF6] max-w-lg">
                Modernize your infrastructure to accelerate delivery, lower
                operational risk, and unlock cloud-native agility across the
                enterprise.
              </p>

              <div className="mt-8 flex items-center gap-4">
                <button
                  className="inline-flex items-center justify-center rounded px-6 py-2 text-sm font-semibold"
                  style={{
                    color: "#00A8C6",
                    border: "2px solid #00A8C6",
                    background: "transparent",
                  }}
                  aria-label="Connect with an expert"
                >
                  Connect with an Expert
                </button>

                {/* Optional secondary action */}
                <a
                  href="#contact"
                  className="text-sm font-medium text-white/90 underline"
                >
                  Talk to sales
                </a>
              </div>
            </div>
          </div>

          {/* RIGHT (visual space for your background image/visuals) */}
          <div className="order-2 hidden md:block">
            {/* This empty block intentionally mirrors composition from the screenshot.
                Keep it empty so you can later drop in decorative shapes or an image set. */}
            <div className="h-[320px] w-full" />
          </div>
        </div>
      </div>

      {/* Decorative bottom-right chat/cta placeholder (keeps visual parity) */}
      <div className="pointer-events-none absolute bottom-6 right-6 z-20 hidden sm:block">
        <div
          className="h-12 w-12 rounded-md"
          style={{
            background: "#00B67A",
            boxShadow: "0 6px 18px rgba(0,0,0,0.35)",
          }}
          aria-hidden="true"
        />
      </div>

      {/* Responsive height behaviour */}
      <style jsx>{`
        header {
          min-height: 60vh; /* mobile */
        }
        @media (min-width: 768px) {
          header {
            min-height: 75vh;
          }
        }
        @media (min-width: 1280px) {
          header {
            min-height: 88vh;
          }
        }
      `}</style>
    </header>
  );
}
