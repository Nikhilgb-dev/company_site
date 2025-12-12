import React from "react";
import { Link } from "react-router-dom";
import { ServicesTabsSection } from "./AiAutomationServices";
import { CaseStudiesAndBlogs } from "./CaseStudiesAndBlogsSection";
import { ResourceHighlightSection } from "./DownloadResource";
export default function HeroDataAnalytics({
  bgImage = "https://www.aditiconsulting.com/hubfs/10162024_Data%20Analytics_Hero%20Banner%20Image%201.png",
}) {
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

  // Case studies and blog posts data

  const DEFAULT_CASE_STUDIES = [
    {
      id: "fleet",
      eyebrow: "CASE STUDY",
      title:
        "Predictive Fleet Intelligence: Cutting Downtime, Increasing Revenue",
      bullets: [
        "Built a predictive analytics pipeline to profile driver behavior, forecast failures, and schedule maintenance before breakdowns hit operations.",
        "Moving from reactive fixes to proactive services created new monetization avenues and strengthened client trust.",
      ],
      ctaLabel: "Read Now",
      rightBgImage: "",
    },
    {
      id: "media",
      eyebrow: "CASE STUDY",
      title: "AI-Driven Supply Chain: Faster Decisions for a Media Giant",
      bullets: [
        "Deployed real-time AI dashboards to monitor inventory, score suppliers, and predict supply interruptions.",
        "AI-enabled traceability and automation sped decision-making and reduced manual overhead across the supply chain.",
      ],
      ctaLabel: "Read Now",
      rightBgImage: "",
    },
  ];

  const DEFAULT_BLOG_POSTS = [
    {
      id: "blog1",
      label: "BLOG",
      title: "Top 5 Advantages of Nearshore AI Teams",
      excerpt:
        "High-quality AI engineering nearshore offers faster iteration, cultural alignment, and cost-efficient delivery for enterprise projects...",
      imageUrl:
        "https://www.aditiconsulting.com/hubfs/AI-Generated%20Media/Images/AIpowered%20tools%20to%20defend%20against%20cyber%20attacks.jpeg",
    },
    {
      id: "blog2",
      label: "BLOG",
      title: "The Role of AI in Next-Gen Telecom",
      excerpt:
        "Telecom is changing rapidly - AI is powering smarter networks, predictive maintenance, and improved customer experiences...",
      imageUrl:
        "https://www.aditiconsulting.com/hubfs/AI-Generated%20Media/Images/An%20image%20of%20a%20futuristic%20city%20skyline%20with%20selfdriving%20cars%20navigating%20the%20streets%2c%20integrated%20with%20AI%20technology.jpeg",
    },
    {
      id: "blog3",
      label: "BLOG",
      title: "Digital Engineering: What It Means Today",
      excerpt:
        "Digital engineering blends software, systems thinking and automation to build scalable products and platforms...",
      imageUrl:
        "https://www.aditiconsulting.com/hubfs/AI-Generated%20Media/Images/ai%20brain.jpeg",
    },
    {
      id: "blog4",
      label: "BLOG",
      title: "Safe, Scalable AI: Lessons for Enterprises",
      excerpt:
        "A pragmatic guide to rolling out AI across teams while keeping governance, controls and compliance intact...",
      imageUrl:
        "https://www.aditiconsulting.com/hubfs/AI-Generated%20Media/Images/A%20dark%20blue%20image%20of%20a%20network%20of%20interconnected%20devices%20collecting%20data%20for%20analysis%2c%20collection%20technologies%20feeding%20information%20into%20the%20internet%20t.jpeg",
    },
    {
      id: "blog5",
      label: "BLOG",
      title: "Architecting Data for AI at Scale",
      excerpt:
        "Design patterns and infrastructures that let teams build trustworthy, maintainable data platforms for AI...",
      imageUrl:
        "https://www.aditiconsulting.com/hubfs/Blog%20%231%20-%20Top%205%20Benefits%20of%20Nearshore%20AI%20Outsourcing.png",
    },
  ];

  return (
    <>
      <header className="relative flex w-full min-h-screen text-white">
        {/* Background image area (you can swap this image or leave blank) */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={
            bgImage
              ? { backgroundImage: `url(${bgImage})` }
              : {
                  background:
                    "linear-gradient(180deg, rgba(0,10,25,0.8), rgba(0,10,25,0.8))",
                }
          }
          aria-hidden="true"
        />

        {/* Dark left-side gradient for consistent legibility */}
        <div
          className="absolute inset-0 pointer-events-none bg-gradient-to-b from-black/75 via-black/35 to-black/75"
          aria-hidden="true"
        />
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "linear-gradient(90deg, rgba(0,8,20,0.80) 0%, rgba(0,8,20,0.45) 40%, rgba(0,8,20,0.10) 60%, rgba(0,8,20,0.80) 100%)",
          }}
          aria-hidden="true"
        />

        {/* Content container */}
        <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-1 items-center px-6 py-14 sm:py-16 md:py-20 lg:py-24">
          <div className="grid w-full items-start gap-10 md:grid-cols-2">
            {/* LEFT TEXT BLOCK */}
            <div className="order-1 flex items-start">
              <div className="max-w-2xl">
                <p
                  className="text-[11px] font-semibold uppercase tracking-wider"
                  style={{ color: "#FFB022" }}
                >
                  DIGITAL ENGINEERING SERVICES
                </p>

                {/* Heading: different wording as requested, same font color */}
                <h1
                  className="mt-4 font-extrabold leading-tight text-white"
                  style={{
                    fontSize: "clamp(2rem, 6.5vw, 4.25rem)", // responsive scaling
                  }}
                >
                  Data & Analytics
                </h1>

                <p className="mt-6 text-base leading-relaxed text-[#E6EEF6] max-w-xl">
                  Turn your raw data into decisive insights. Improve customer
                  outcomes, cut costs, and accelerate growth with intelligent
                  analytics and data engineering.
                </p>

                <div className="mt-8 flex flex-col items-start gap-3 sm:flex-row sm:items-center">
                  <Link
                    to="/contact"
                    className="inline-flex items-center justify-center rounded px-6 py-2 text-sm font-semibold"
                    style={{
                      color: "#00A8C6",
                      border: "2px solid #00A8C6",
                      background: "transparent",
                    }}
                    aria-label="Connect with an expert"
                  >
                    Connect with an Expert
                  </Link>

                  <a
                    href="/contact"
                    className="text-sm font-medium text-white/90 underline"
                  >
                    Talk to sales
                  </a>
                </div>
              </div>
            </div>

            {/* RIGHT VISUAL SPACER (keeps composition same as your screenshot) */}
            <div className="order-2 flex justify-end">
              {/* This block intentionally leaves space for the visual/graphics on the right.
                On small screens it's hidden to prioritize the text. */}
              <div
                className="hidden md:block"
                style={{ width: "min(48vw, 720px)" }}
              >
                {/* Decorative white outlined rectangles to match the reference composition */}
                <div className="relative h-[420px]">
                  {/* Top-right rectangles */}
                  <div className="absolute right-8 top-6 h-28 w-28 border-2 border-white/90" />
                  <div className="absolute right-20 top-20 h-20 w-20 border-2 border-white/90" />

                  {/* Middle rectangles */}
                  <div className="absolute right-6 top-40 h-32 w-32 border-2 border-white/90" />
                  <div className="absolute right-24 top-56 h-16 w-16 border-2 border-white/90" />

                  {/* Bottom accent square (green) */}
                  <div
                    className="absolute bottom-6 right-6 h-10 w-10"
                    style={{
                      background: "#00B67A",
                      boxShadow: "0 8px 20px rgba(0,0,0,0.4)",
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Floating chat CTA in bottom-right (visual parity) */}
        <div className="pointer-events-auto absolute bottom-6 right-6 z-20 hidden sm:block">
          <button
            className="flex h-12 w-12 items-center justify-center rounded-full bg-[#083247] text-white shadow-lg"
            aria-label="Open chat"
          >
            {/* simple chat icon (SVG) */}
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              aria-hidden="true"
            >
              <path
                d="M21 15a2 2 0 0 1-2 2H8l-5 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"
                stroke="white"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
      </header>

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
      <CaseStudiesAndBlogs
        caseStudies={DEFAULT_CASE_STUDIES}
        blogPosts={DEFAULT_BLOG_POSTS}
      />

      <ResourceHighlightSection
        title="Begin Your AI Journey"
        ctaLabel="Contact Us"
        ctaHref="/contact"
        resources={DEFAULT_RESOURCES}
      />
    </>
  );
}
