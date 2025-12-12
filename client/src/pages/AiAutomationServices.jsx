import React, { useState } from "react";

export const ServicesTabsSection = ({
  heading,
  introParagraphs,
  items,
  headingImageSrc,
  headingImageAlt,
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
        {/* Heading */}
        <div className="mb-10 text-left lg:mb-12">
          <div className="flex items-center justify-between">
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
            {introParagraphs.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
        </div>

        {/* Main Card */}
        <div className="relative overflow-hidden rounded-sm border border-[#D0D7E2] bg-white shadow-sm">
          <div className="grid gap-0 md:grid-cols-[280px_minmax(0,1fr)]">
            {/* Left Tab List (icons removed) */}
            <div className="bg-[#006E8F] text-white">
              {items.map((item) => {
                const isActive = item.id === activeId;
                return (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => setActiveId(item.id)}
                    className={[
                      "flex w-full items-center px-6 py-4 text-left text-[14px] font-semibold transition-colors",
                      isActive
                        ? "bg-[#FFB022] text-[#002844]"
                        : "bg-[#007FA0] hover:bg-[#005E78]",
                    ].join(" ")}
                  >
                    {item.label}
                  </button>
                );
              })}
            </div>

            {/* Right Content */}
            <div className="relative bg-[#002844] px-6 py-6 text-left text-white sm:px-8 sm:py-8 lg:pr-64">
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

              {/* Image */}
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

const AI_AUTOMATION_SERVICE_ITEMS = [
  {
    id: "ai",
    label: "Artificial Intelligence (AI)",
    title: "Artificial Intelligence (AI)",
    body: "We build intelligent AI solutions that convert raw data into actionable insights. Our AI systems automate decisions, streamline operations, and enhance productivity across your business.",
    imageUrl:
      "https://www.aditiconsulting.com/hubfs/Boxes_Application%20Development.png",
  },
  {
    id: "ml",
    label: "Machine Learning (ML)",
    title: "Machine Learning (ML)",
    body: "We develop custom machine learning models that analyze data patterns, deliver predictive insights, and continuously improve system accuracy. These models help optimize decision-making and enhance customer experiences.",
    imageUrl:
      "https://www.aditiconsulting.com/hubfs/Boxes_Software%20Project%20Engineering.png",
  },
  {
    id: "qa",
    label: "Q/A Test Automation",
    title: "Q/A Test Automation",
    body: "Our automated testing frameworks eliminate manual errors and speed up development cycles. We streamline functional, regression, and performance testing to ensure reliable, high-quality software releases.",
    imageUrl:
      "https://www.aditiconsulting.com/hubfs/Boxes_Solution%20Architecture.png",
  },
  {
    id: "perf",
    label: "Performance & Services Testing",
    title: "Performance & Services Testing",
    body: "We evaluate your systems under real-world conditions to identify bottlenecks and optimize speed, stability, and scalability so your applications remain dependable during heavy usage.",
    imageUrl: "https://www.aditiconsulting.com/hubfs/Boxes_DevOps.png",
  },
  {
    id: "rpa",
    label: "Robotic Process Automation (RPA)",
    title: "Robotic Process Automation (RPA)",
    body: "We automate repetitive back-office processes, reducing operational cost and improving consistency. RPA frees your team to focus on higher-value work.",
    imageUrl:
      "https://www.aditiconsulting.com/hubfs/Boxes_Software%20Testing.png",
  },
  {
    id: "iot",
    label: "Internet of Things (IoT)",
    title: "Internet of Things (IoT)",
    body: "We create IoT ecosystems that connect devices and systems to provide real-time insights, improve operational visibility, and unlock new efficiencies.",
    imageUrl:
      "https://www.aditiconsulting.com/hubfs/Boxes_Product_Project%20Management.png",
  },
  {
    id: "security",
    label: "Threat Modeling & AI Security Assessments",
    title: "Threat Modeling & AI Security Assessments",
    body: "We secure your AI systems by assessing risks across the entire model lifecycle. Our threat modeling and security evaluations protect your data and ensure trustworthy AI operations.",
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
      initialActiveId="ai"
      introParagraphs={[
        "Imagine your business running at maximum efficiency — advanced AI systems, machine learning models, and intelligent automation working seamlessly with your team to eliminate repetitive tasks and support critical decisions.",
        "While automation handles operational workload, your teams can focus on strategic initiatives that drive meaningful growth. This seamless blend of technology and expertise strengthens your operations and accelerates results.",
        "Whether your goal is workflow automation, process optimization, or AI integration, Aditi’s AI + Automation services support your digital transformation and long-term business objectives.",
      ]}
      items={AI_AUTOMATION_SERVICE_ITEMS}
    />
  );
};
