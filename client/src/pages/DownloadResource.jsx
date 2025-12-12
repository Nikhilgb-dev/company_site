import React from "react";

const DEFAULT_RESOURCES = [
  {
    id: "guide",
    title: "Practical Guide: Preparing Data for AI Projects",
    ctaLabel: "Download",
    bgImage: "",
  },
  {
    id: "nearshore",
    title: "2025 US Nearshore Insights",
    ctaLabel: "Download",
    bgImage: "",
  },
  {
    id: "telecom",
    title: "2025 Telecom & Media Trends",
    ctaLabel: "Download",
    bgImage: "",
  },
];

export const ResourceHighlightSection = ({
  title,
  ctaLabel = "Contact Us",
  ctaHref,
  onCtaClick,
  resources = [],
  className = "",
}) => {
  const items = resources.length ? resources : DEFAULT_RESOURCES;
  const handleCtaClick = (event) => {
    if (onCtaClick) {
      event.preventDefault();
      onCtaClick(event);
    }
  };

  return (
    <section className={`bg-[#002844] text-white ${className}`}>
      {/* Top CTA band */}
      <div className="relative mx-auto max-w-6xl px-4 py-12 text-center sm:py-16 lg:py-20">
        {/* LEFT decorative images */}
        <div className="pointer-events-none absolute left-6 top-10 hidden flex-col gap-3 sm:flex">
          <img
            src="https://www.aditiconsulting.com/hubfs/Connect%20Boxes%201.png"
            alt="decor"
            className="h-36 w-36 object-contain"
          />
        </div>

        {/* RIGHT decorative images */}
        <div className="pointer-events-none absolute right-6 top-8 hidden flex-col gap-4 sm:flex">
          <img
            src="https://www.aditiconsulting.com/hubfs/Connect%20Boxes%202.png"
            alt="decor"
            className="h-36 w-36 object-contain"
          />
        </div>

        <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl lg:text-[32px]">
          {title}
        </h2>

        <div className="mt-8 flex justify-center">
          {ctaHref ? (
            <a
              href={ctaHref}
              onClick={handleCtaClick}
              className="min-w-[160px] bg-[#FFB022] px-12 py-3 text-sm font-semibold uppercase tracking-wide text-[#002844]"
            >
              {ctaLabel}
            </a>
          ) : (
            <button
              className="min-w-[160px] bg-[#FFB022] px-12 py-3 text-sm font-semibold uppercase tracking-wide text-[#002844]"
              onClick={onCtaClick}
            >
              {ctaLabel}
            </button>
          )}
        </div>
      </div>

      {/* Divider line */}
      <div className="h-px w-full bg-white/30" />

      {/* Report cards */}
      <div className="mx-auto max-w-6xl">
        <div className="grid divide-y divide-white/20 md:grid-cols-3 md:divide-x md:divide-y-0">
          {items.map((item) => (
            <article key={item.id || item.title} className="relative min-h-[280px]">
              {/* Background image */}
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={item.bgImage ? { backgroundImage: `url(${item.bgImage})` } : {}}
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-black/45" />

              <div className="relative flex h-full flex-col justify-center px-6 py-10 sm:px-10">
                <h3 className="max-w-xs text-2xl font-bold leading-snug sm:text-[26px]">
                  {item.title}
                </h3>

                <div className="mt-10">
                  {item.onClick ? (
                    <button
                      className="inline-flex min-w-[150px] items-center justify-center border border-white px-8 py-2.5 text-sm font-semibold text-white"
                      onClick={() => item.onClick(item)}
                    >
                      {item.ctaLabel || "Download"}
                    </button>
                  ) : (
                    <a
                      href={item.ctaHref || "#"}
                      className="inline-flex min-w-[150px] items-center justify-center border border-white px-8 py-2.5 text-sm font-semibold text-white"
                    >
                      {item.ctaLabel || "Download"}
                    </a>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export const StartAiTransformationSection = (props) => {
  return (
    <ResourceHighlightSection
      title="Begin Your AI Journey"
      ctaLabel="Contact Us"
      resources={DEFAULT_RESOURCES}
      {...props}
    />
  );
};
