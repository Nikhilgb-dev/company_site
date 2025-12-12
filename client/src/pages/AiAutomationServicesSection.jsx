import React, { useState } from "react";

export const ServicesTabsSection = ({
  heading,
  introParagraphs,
  items,
  headingImageSrc,
  headingImageAlt,
  badgeText = "AI",
  sectionTagline = "Services",
  initialActiveId,
}) => {
  const [activeId, setActiveId] = useState(
    initialActiveId || (items[0]?.id ?? "")
  );

  const activeItem =
    items.find((item) => item.id === activeId) || items[0] || null;

  if (!activeItem) return null;

  return (
    <section className="bg-white py-16 lg:py-20">
      <div className="mx-auto max-w-5xl px-4 lg:px-0">
        {/* Heading + intro */}
        <div className="mb-10 text-left lg:mb-12">
          <div className="flex items-center gap-64">
            <h2 className="text-2xl font-bold tracking-tight text-[#002844] sm:text-[26px]">
              {heading}
            </h2>

            {headingImageSrc && (
              <img
                src={headingImageSrc}
                alt={headingImageAlt || ""}
                className="h-20 w-24"
              />
            )}
          </div>

          <div className="mt-4 space-y-3 text-[15px] leading-relaxed text-[#333333]">
            {introParagraphs.map((paragraph, idx) => (
              <p key={idx}>{paragraph}</p>
            ))}
          </div>
        </div>

        {/* Card */}
        <div className="relative overflow-hidden rounded-sm border border-[#D0D7E2] bg-white shadow-sm">
          {/* Decorative squares */}
          <div className="pointer-events-none absolute -right-10 -top-12 hidden h-28 w-28 border border-[#0079A8] lg:block" />
          <div className="pointer-events-none absolute -right-2 -top-4 hidden h-16 w-16 border border-[#FFB022] bg-white lg:block" />
          <div className="pointer-events-none absolute -bottom-10 -right-6 hidden h-24 w-24 border border-[#0079A8] lg:block" />
          <div className="pointer-events-none absolute -bottom-4 right-6 hidden h-14 w-14 border border-[#FFB022] bg-white lg:block" />

          <div className="grid gap-0 md:grid-cols-[280px_minmax(0,1fr)]">
            {/* Left tabs */}
            <div className="bg-[#006E8F] text-white">
              {items.map((item) => {
                const isActive = item.id === activeId;
                return (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => setActiveId(item.id)}
                    className={[
                      "flex w-full items-center gap-3 px-6 py-4 text-left text-[14px] leading-snug transition-colors",
                      isActive
                        ? "bg-[#FFB022] text-[#002844]"
                        : "bg-[#007FA0] hover:bg-[#005E78]",
                    ].join(" ")}
                  >
                    <span
                      className={[
                        "flex h-7 w-7 flex-none items-center justify-center rounded-full border text-[11px] font-bold",
                        isActive
                          ? "border-[#002844] text-[#002844]"
                          : "border-white/80 text-white",
                      ].join(" ")}
                    >
                      {badgeText}
                    </span>

                    <span className="flex-1 text-[13px] font-semibold leading-snug">
                      {item.label}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Right content */}
            <div className="relative bg-[#002844] px-6 py-6 text-left text-white sm:px-8 sm:py-8 lg:pr-64">
              <div className="mb-4 h-1 w-8 bg-[#FFB022]" />

              <h3 className="text-xl font-bold leading-tight">
                {activeItem.title}
              </h3>

              {sectionTagline && (
                <p className="mt-2 text-[12px] font-semibold uppercase tracking-[0.16em] text-[#FFB022]">
                  {sectionTagline}
                </p>
              )}

              <p className="mt-4 max-w-xl text-[13px] leading-relaxed text-[#E3F2FD]">
                {activeItem.body}
              </p>

              <div className="pointer-events-none absolute bottom-8 right-8 hidden h-24 w-24 lg:block">
                <img
                  src={activeItem.imageUrl}
                  alt={activeItem.title}
                  className="h-full w-full object-contain"
                />
              </div>

              <div className="mt-6 h-40 w-full lg:hidden">
                <img
                  src={activeItem.imageUrl}
                  alt={activeItem.title}
                  className="h-full w-full object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

/* ===== Rewritten items: same meaning, clearer text ===== */

const AI_AUTOMATION_SERVICE_ITEMS = [
  {
    id: "ai",
    label: "Artificial Intelligence (AI)",
    title: "Artificial Intelligence (AI)",
    body: "We deliver practical AI systems that transform raw data into reliable insights. These solutions automate routine decisions and boost operational efficiency across teams.",
    imageUrl:
      "https://www.aditiconsulting.com/hubfs/Boxes_Application%20Development.png",
  },
  {
    id: "ml",
    label: "Machine Learning (ML)",
    title: "Machine Learning (ML)",
    body: "We design custom ML models that detect patterns, forecast outcomes, and improve over time—helping you make smarter, data-driven decisions and enhance user experiences.",
    imageUrl:
      "https://www.aditiconsulting.com/hubfs/Boxes_Software%20Project%20Engineering.png",
  },
  {
    id: "qa",
    label: "Q/A Test Automation",
    title: "Q/A Test Automation",
    body: "Automated testing reduces manual errors and speeds up releases. We implement frameworks for functional, regression, and performance testing to keep releases stable and fast.",
    imageUrl:
      "https://www.aditiconsulting.com/hubfs/Boxes_Solution%20Architecture.png",
  },
  {
    id: "perf",
    label: "Performance & Services Testing",
    title: "Performance & Services Testing",
    body: "We run load, stress, and endurance tests to find bottlenecks and tune systems so your applications stay fast and reliable under heavy traffic.",
    imageUrl: "https://www.aditiconsulting.com/hubfs/Boxes_DevOps.png",
  },
  {
    id: "rpa",
    label: "Robotic Process Automation (RPA)",
    title: "Robotic Process Automation (RPA)",
    body: "We automate repetitive back-office tasks—data entry, reconciliations, and routine workflows—cutting costs and freeing teams for higher-value work.",
    imageUrl:
      "https://www.aditiconsulting.com/hubfs/Boxes_Software%20Testing.png",
  },
  {
    id: "iot",
    label: "Internet of Things (IoT)",
    title: "Internet of Things (IoT)",
    body: "We build IoT solutions that connect devices and sensors to deliver real-time data and improve operational visibility and decision-making.",
    imageUrl:
      "https://www.aditiconsulting.com/hubfs/Boxes_Product_Project%20Management.png",
  },
  {
    id: "security",
    label: "Threat Modeling & AI Security Assessments",
    title: "Threat Modeling & AI Security Assessments",
    body: "We assess risks throughout the AI lifecycle—threat modeling, security reviews, and protective controls—to keep models and data secure and compliant.",
    imageUrl:
      "https://www.aditiconsulting.com/hubfs/Boxes_Application%20Development.png",
  },
];

export const AiAutomationServicesSection = () => {
  return (
    <ServicesTabsSection
      heading="Automate Your Workflows & Your Success"
      headingImageSrc="https://www.aditiconsulting.com/hubfs/10OCT_Boxes%20NEW.png"
      headingImageAlt="AI and automation services"
      badgeText="AI"
      sectionTagline="Services"
      initialActiveId="ai"
      introParagraphs={[
        "Picture your operations running smoothly—AI, machine learning, and automation working together to remove repetitive work and surface actionable insights.",
        "With automation handling routine tasks, your people can focus on strategy and growth. Technology amplifies your team’s impact and speeds up outcomes.",
        "Whether you're automating workflows, improving processes, or integrating AI, Aditi’s AI + Automation offerings provide the foundation for measurable digital transformation.",
      ]}
      items={AI_AUTOMATION_SERVICE_ITEMS}
    />
  );
};
