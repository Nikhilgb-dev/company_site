import React, { useEffect, useState } from "react";

const DEFAULT_CASE_STUDIES = [
  {
    id: "fleet",
    eyebrow: "CASE STUDY",
    title: "Predictive Fleet Intelligence: Cutting Downtime, Increasing Revenue",
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

const CaseStudyColumn = ({ item, isImageSide = false }) => {
  const backgroundStyle =
    isImageSide && item?.rightBgImage
      ? { backgroundImage: `url(${item.rightBgImage})` }
      : {};

  const CtaComponent = item?.ctaHref ? "a" : "button";

  return (
    <div
      className={`${
        isImageSide ? "relative" : "bg-[#002844]"
      } flex items-center justify-center px-6 py-10 sm:px-10 lg:px-16`}
    >
      {isImageSide && (
        <>
          <div className="absolute inset-0 bg-cover bg-center" style={backgroundStyle} />
          <div className="absolute inset-0 bg-black/55" />
        </>
      )}

      <div className="relative max-w-md">
        {item?.eyebrow && (
          <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#FFB022]">
            {item.eyebrow}
          </p>
        )}
        {item?.title && (
          <h3 className="mt-3 text-xl font-bold leading-snug sm:text-[22px]">{item.title}</h3>
        )}
        {item?.bullets?.length ? (
          <ul className="mt-4 space-y-3 text-[13px] leading-relaxed text-[#E3F2FD]">
            {item.bullets.map((b, i) => (
              <li key={i} className="flex gap-3">
                <span className="mt-[2px] text-sm text-[#FFB022]">-</span>
                <span>{b}</span>
              </li>
            ))}
          </ul>
        ) : null}
        {item?.ctaLabel && (
          <div className="mt-6">
            <CtaComponent
              {...(item?.ctaHref ? { href: item.ctaHref } : {})}
              onClick={item.onCtaClick}
              className="border border-white px-6 py-2 text-sm font-semibold text-white"
            >
              {item.ctaLabel}
            </CtaComponent>
          </div>
        )}
      </div>
    </div>
  );
};

export const CaseStudiesAndBlogs = ({
  caseStudies = DEFAULT_CASE_STUDIES,
  blogPosts = DEFAULT_BLOG_POSTS,
  className = "",
}) => {
  const [blogStartIndex, setBlogStartIndex] = useState(0);

  const left = caseStudies[0] || {};
  const right = caseStudies[1] || caseStudies[0] || {};
  const hasBlogs = blogPosts.length > 0;

  const visibleBlogCards = (() => {
    if (!hasBlogs) return [];
    const picked = [];
    const n = blogPosts.length;
    const maxCards = Math.min(3, n);
    for (let offset = 0; offset < maxCards; offset += 1) {
      picked.push(blogPosts[(blogStartIndex + offset) % n]);
    }
    return picked;
  })();

  useEffect(() => {
    setBlogStartIndex(0);
  }, [blogPosts.length]);

  const handlePrev = () => {
    if (!hasBlogs) return;
    setBlogStartIndex((prev) => (prev - 1 + blogPosts.length) % blogPosts.length);
  };

  const handleNext = () => {
    if (!hasBlogs) return;
    setBlogStartIndex((prev) => (prev + 1) % blogPosts.length);
  };

  return (
    <section className={`bg-white ${className}`}>
      {/* Case study band */}
      <div className="bg-[#002844] text-white">
        <div className="grid min-h-[320px] w-full md:grid-cols-2">
          <CaseStudyColumn item={left} />
          <CaseStudyColumn item={right} isImageSide />
        </div>
      </div>

      {/* Blog cards carousel */}
      <div className="bg-[#F2F2F2] py-12 sm:py-16">
        {/* Controls row */}
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 pb-6">
          <div />
          <div className="flex gap-4">
            <button
              onClick={handlePrev}
              className="flex h-7 w-7 items-center justify-center border border-[#006E8F] bg-white text-xs font-semibold text-[#006E8F]"
              disabled={!hasBlogs || blogPosts.length === 1}
            >
              {"<"}
            </button>
            <button
              onClick={handleNext}
              className="flex h-7 w-7 items-center justify-center border border-[#006E8F] bg-white text-xs font-semibold text-[#006E8F]"
              disabled={!hasBlogs || blogPosts.length === 1}
            >
              {">"}
            </button>
          </div>
        </div>

        {/* Cards */}
        <div className="mx-auto max-w-6xl px-4">
          <div className="grid gap-6 md:grid-cols-3">
            {visibleBlogCards.map((post) => (
              <article key={post.id || post.title} className="flex flex-col bg-white shadow-sm">
                <div className="h-40 w-full bg-gray-300">
                  {post.imageUrl && (
                    <img src={post.imageUrl} alt={post.title} className="h-full w-full object-cover" />
                  )}
                </div>

                <div className="flex flex-1 flex-col px-6 py-5 text-left">
                  {post.label && (
                    <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-green-600">
                      {post.label}
                    </p>
                  )}
                  {post.title && (
                    <h4 className="mt-3 text-[15px] font-semibold leading-snug text-[#002844]">
                      {post.title}
                    </h4>
                  )}
                  {post.excerpt && (
                    <p className="mt-3 flex-1 text-[13px] leading-relaxed text-[#4B5563]">
                      {post.excerpt}
                    </p>
                  )}
                  {post.ctaLabel && (
                    <div className="mt-4">
                      {post.ctaHref ? (
                        <a
                          href={post.ctaHref}
                          className="text-[13px] font-semibold uppercase tracking-[0.1em] text-[#006E8F]"
                        >
                          {post.ctaLabel}
                        </a>
                      ) : (
                        <button
                          onClick={post.onClick}
                          className="text-[13px] font-semibold uppercase tracking-[0.1em] text-[#006E8F]"
                        >
                          {post.ctaLabel}
                        </button>
                      )}
                    </div>
                  )}
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export const CaseStudiesAndBlogsSection = (props) => <CaseStudiesAndBlogs {...props} />;
