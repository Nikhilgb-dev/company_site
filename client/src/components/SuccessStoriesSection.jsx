// SuccessStoriesSection.jsx
import React from "react";

export default function SuccessStoriesSection({
  bgImage = "", // main hero background
  eyebrow = "Success Stories",
  subtitle = "Case Studies & Insights",
  cards = [], // [{ image, label, title, ctaLabel }]
}) {
  return (
    <section className="w-full">
      {/* TOP HERO BANNER */}
      <div className="relative w-full min-h-[32vh] flex items-center">
        {/* Background */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: bgImage ? `url(${bgImage})` : "none",
          }}
        />

        {/* Dark overlay for readability */}
        <div className="absolute inset-0 bg-[#000A1A]/70" />

        {/* Text */}
        <div className="relative z-10 max-w-6xl mx-auto px-6 py-12 sm:py-16 md:py-20">
          <h2
            className="font-bold text-[#FFB022]"
            style={{ fontSize: "clamp(1.8rem, 4vw, 2.6rem)" }}
          >
            {eyebrow}
          </h2>
          <p className="text-white mt-2 text-lg">{subtitle}</p>
        </div>
      </div>

      {/* CARDS SECTION */}
      <div className="bg-[#F3F5F7] py-14 sm:py-16 md:py-20">
        <div className="max-w-6xl mx-auto px-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {cards?.map((c, i) => (
            <div
              key={i}
              className="bg-white shadow-sm hover:shadow-md transition rounded-sm overflow-hidden"
            >
              {/* Card Image */}
              <div className="h-40 bg-gray-300 w-full">
                {c.image && (
                  <img
                    src={c.image}
                    alt={c.title}
                    className="w-full h-full object-cover"
                  />
                )}
              </div>

              {/* Text */}
              <div className="px-6 py-5">
                <p className="text-[11px] font-semibold uppercase tracking-wide text-green-700 mb-2">
                  {c.label}
                </p>

                <h3 className="text-lg font-semibold text-[#002844] leading-snug">
                  {c.title}
                </h3>

                <button className="mt-5 border border-[#002844] px-6 py-2 text-sm font-semibold text-[#002844]">
                  {c.ctaLabel}
                </button>
              </div>
            </div>
          ))}

          {cards.length === 0 && (
            <p className="text-gray-500 col-span-full text-center">
              No case studies available.
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
