import React, { useState } from "react";

const CASE_STUDIES = [
  {
    id: "fleet",
    eyebrow: "CASE STUDY",
    // reworded title but same idea
    title:
      "Predictive Fleet Intelligence: Cutting Downtime, Increasing Revenue",
    bullets: [
      "Built a predictive analytics pipeline to profile driver behavior, forecast failures, and schedule maintenance before breakdowns hit operations.",
      "Moving from reactive fixes to proactive services created new monetization avenues and strengthened client trust.",
    ],
    ctaLabel: "Read Now",
    rightBgImage: "", // placeholder for the right-side background image
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
    rightBgImage: "", // placeholder for the right-side background image
  },
];

const BLOG_POSTS = [
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
      "Telecom is changing rapidly — AI is powering smarter networks, predictive maintenance, and improved customer experiences...",
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

export const CaseStudiesAndBlogsSection = () => {
  const [blogStartIndex, setBlogStartIndex] = useState(0);

  const left = CASE_STUDIES[0];
  const right = CASE_STUDIES[1];

  const visibleBlogCards = (() => {
    const picked = [];
    const n = BLOG_POSTS.length;
    for (let offset = 0; offset < 3; offset += 1) {
      picked.push(BLOG_POSTS[(blogStartIndex + offset) % n]);
    }
    return picked;
  })();

  const handlePrev = () => {
    setBlogStartIndex(
      (prev) => (prev - 1 + BLOG_POSTS.length) % BLOG_POSTS.length
    );
  };

  const handleNext = () => {
    setBlogStartIndex((prev) => (prev + 1) % BLOG_POSTS.length);
  };

  return (
    <section className="bg-white">
      {/* Case study band */}
      <div className="bg-[#002844] text-white">
        <div className="grid min-h-[320px] w-full md:grid-cols-2">
          {/* Left column: solid color */}
          <div className="flex items-center justify-center bg-[#002844] px-6 py-10 sm:px-10 lg:px-16">
            <div className="max-w-md">
              <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#FFB022]">
                {left.eyebrow}
              </p>
              <h3 className="mt-3 text-xl font-bold leading-snug sm:text-[22px]">
                {left.title}
              </h3>
              <ul className="mt-4 space-y-3 text-[13px] leading-relaxed text-[#E3F2FD]">
                {left.bullets.map((b, i) => (
                  <li key={i} className="flex gap-3">
                    <span className="mt-[2px] text-sm text-[#FFB022]">✓</span>
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-6">
                <button className="border border-white px-6 py-2 text-sm font-semibold text-white">
                  {left.ctaLabel}
                </button>
              </div>
            </div>
          </div>

          {/* Right column: background image with overlay */}
          <div className="relative flex items-center justify-center px-6 py-10 sm:px-10 lg:px-16">
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={
                right.rightBgImage
                  ? { backgroundImage: `url(${right.rightBgImage})` }
                  : {}
              }
            />
            <div className="absolute inset-0 bg-black/55" />

            <div className="relative max-w-md">
              <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#FFB022]">
                {right.eyebrow}
              </p>
              <h3 className="mt-3 text-xl font-bold leading-snug sm:text-[22px]">
                {right.title}
              </h3>
              <ul className="mt-4 space-y-3 text-[13px] leading-relaxed text-[#E3F2FD]">
                {right.bullets.map((b, i) => (
                  <li key={i} className="flex gap-3">
                    <span className="mt-[2px] text-sm text-[#FFB022]">✓</span>
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-6">
                <button className="border border-white px-6 py-2 text-sm font-semibold text-white">
                  {right.ctaLabel}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Blog cards carousel */}
      <div className="bg-[#F2F2F2] py-12 sm:py-16">
        {/* Controls row */}
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 pb-6">
          <div /> {/* spacer */}
          <div className="flex gap-4">
            <button
              onClick={handlePrev}
              className="flex h-7 w-7 items-center justify-center border border-[#006E8F] bg-white text-xs font-semibold text-[#006E8F]"
            >
              {"<"}
            </button>
            <button
              onClick={handleNext}
              className="flex h-7 w-7 items-center justify-center border border-[#006E8F] bg-white text-xs font-semibold text-[#006E8F]"
            >
              {">"}
            </button>
          </div>
        </div>

        {/* Cards */}
        <div className="mx-auto max-w-6xl px-4">
          <div className="grid gap-6 md:grid-cols-3">
            {visibleBlogCards.map((post) => (
              <article
                key={post.id}
                className="flex flex-col bg-white shadow-sm"
              >
                <div className="h-40 w-full bg-gray-300">
                  {post.imageUrl && (
                    <img
                      src={post.imageUrl}
                      alt={post.title}
                      className="h-full w-full object-cover"
                    />
                  )}
                </div>

                <div className="flex flex-1 flex-col px-6 py-5 text-left">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-green-600">
                    {post.label}
                  </p>
                  <h4 className="mt-3 text-[15px] font-semibold leading-snug text-[#002844]">
                    {post.title}
                  </h4>
                  <p className="mt-3 flex-1 text-[13px] leading-relaxed text-[#4B5563]">
                    {post.excerpt}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
