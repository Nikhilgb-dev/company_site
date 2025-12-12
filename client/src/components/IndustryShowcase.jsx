import React, { useState } from "react";

export default function IndustryShowcase({
  bgImage = "",
  eyebrow = "INDUSTRIES",
  title = "Default Title",
  description = "Default description text...",
  ctaLabel = "Start a Project",
  carouselTitle = "Carousel Heading",
  carouselDescription = "Carousel section description",
  items = [], // array of { title, icon, bgImage }
}) {
  const [index, setIndex] = useState(0);

  const prev = () => setIndex((i) => (i - 1 + items.length) % items.length);
  const next = () => setIndex((i) => (i + 1) % items.length);

  return (
    <section className="w-full flex flex-col">
      {/* ------------------------------- */}
      {/*            HERO SECTION         */}
      {/* ------------------------------- */}
      <div className="relative w-full min-h-[70vh]">
        {/* BG IMAGE */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: bgImage ? `url(${bgImage})` : "none",
          }}
        />

        {/* LEFT dark gradient for readability */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(90deg, rgba(0,8,20,0.82) 0%, rgba(0,8,20,0.55) 40%, rgba(0,8,20,0.1) 75%)",
          }}
        />

        {/* CONTENT */}
        <div className="relative z-10 max-w-6xl mx-auto px-6 py-16 sm:py-20 md:py-28">
          <p className="text-[#FFB022] text-sm tracking-widest font-semibold uppercase mb-4">
            {eyebrow}
          </p>

          <h1
            className="text-white font-bold leading-tight"
            style={{ fontSize: "clamp(2.4rem, 5vw, 4rem)" }}
          >
            {title}
          </h1>

          <p className="text-[#E6EEF6] mt-6 max-w-2xl leading-relaxed text-[15px]">
            {description}
          </p>

          <button className="mt-8 px-8 py-3 bg-[#00A8C6] text-white font-semibold text-sm">
            {ctaLabel}
          </button>
        </div>
      </div>

      {/* ------------------------------- */}
      {/*           CAROUSEL SECTION      */}
      {/* ------------------------------- */}
      <div className="w-full bg-[#002244] text-white py-20 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h2
            className="font-bold mb-4"
            style={{ color: "#FFB022", fontSize: "clamp(1.6rem, 3vw, 2.4rem)" }}
          >
            {carouselTitle}
          </h2>

          <p className="text-gray-200 max-w-3xl mx-auto leading-relaxed mb-12">
            {carouselDescription}
          </p>

          {/* CARDS */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {items.length > 0 ? (
              items.map((block, i) => (
                <div
                  key={i}
                  className="border border-white/70 p-6 flex flex-col justify-end bg-cover bg-center h-48"
                  style={{
                    backgroundImage: block.bgImage
                      ? `url(${block.bgImage})`
                      : "none",
                  }}
                >
                  <div className="text-white text-lg font-semibold">
                    {block.title}
                  </div>
                </div>
              ))
            ) : (
              <p className="col-span-full text-gray-400 text-sm">
                No carousel items provided.
              </p>
            )}
          </div>

          {/* ARROWS */}
          <div className="flex items-center justify-center gap-6 mt-10">
            <button
              onClick={prev}
              className="border border-white px-4 py-1 text-white"
            >
              {"<"}
            </button>
            <button
              onClick={next}
              className="border border-white px-4 py-1 text-white"
            >
              {">"}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
