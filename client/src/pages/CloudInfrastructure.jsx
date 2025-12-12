import React from "react";
import { HeroCarousel } from "./AiHero";
import { ServicesTabsSection } from "./AiAutomationServices";
import { CaseStudiesAndBlogs } from "./CaseStudiesAndBlogsSection";

const CloudInfrastructure = () => {
  const defaultSlides = [
    {
      id: 0,
      eyebrow: "Comprehensive Cloud Solutions",
      titleLines: ["Comprehensive Cloud Solutions"],
      subtitle:
        "Learn the strategies, structure, and clarity needed to turn AI goals into measurable business outcomes. Access anytime.Learn the strategies, structure, and clarity needed to turn AI goals into measurable business outcomes. Access anytime.",
      ctaPrimary: "Connect with an Expert",
      ctaSecondary: "Cloud + Infrastructure Services",
      bgImage:
        "https://www.aditiconsulting.com/hubfs/aditi-mastering-ai-hero-slide-v2.jpg",
      showPartners: true,
    },
    {
      id: 1,
      eyebrow: "DIGITAL ENGINEERING SERVICES",
      titleLines: ["Cloud + Infrastructure"],
      subtitle:
        "Improve operational efficiency and enhance productivity by integrating smart automation into your daily workflows.",
      ctaPrimary: "Download Overview",
      ctaSecondary: "Speak With an Expert",
      bgImage:
        "https://www.aditiconsulting.com/hubfs/10162024_Cloud%20Infrastructure_Hero%20Banner%20Image%201.png",
      showPartners: false,
      extraCardText:
        "A comprehensive suite of cloud infrastructure services designed to optimize, secure, and scale your digital operations seamlessly.",
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
      <HeroCarousel slides={defaultSlides} />
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
    </>
  );
};

export default CloudInfrastructure;
