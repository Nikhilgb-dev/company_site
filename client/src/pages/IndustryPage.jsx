import IndustryShowcase from "../components/IndustryShowcase";
import SuccessStoriesSection from "../components/SuccessStoriesSection";
import { ServicesTabsSection } from "./AiAutomationServices";
import { ResourceHighlightSection } from "./DownloadResource";

export default function IndustriesPage() {
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

  return (
    <>
      <IndustryShowcase
        bgImage="https://www.aditiconsulting.com/hubfs/Financial%20Banner-1.png"
        eyebrow="INDUSTRIES"
        title="Financial Services"
        description="In the dynamic world of financial services, staying ahead of the curve..."
        ctaLabel="Start a Project"
        carouselTitle="Innovate and Secure: Transforming Financial Services"
        carouselDescription="Whether it's enhancing customer experience, managing cybersecurity... "
        items={[
          {
            title: "Technological Obsolescence",
            bgImage: "/icons/bg-tech.png",
          },
          {
            title: "Downtime & Productivity Loss",
            bgImage: "/icons/bg-downtime.png",
          },
          {
            title: "Regulatory Changes",
            bgImage: "/icons/bg-regulation.png",
          },
          {
            title: "Cloud Complexity & Efficiency",
            bgImage: "/icons/bg-cloud.png",
          },
        ]}
      />

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

      <SuccessStoriesSection
        bgImage="/images/success-banner.jpg"
        eyebrow="Success Stories"
        subtitle="Case Studies & Insights"
        cards={[
          {
            image: "/images/study1.jpg",
            label: "Case Study",
            title: "Comprehensive Q/A Services",
            ctaLabel: "Read Now",
          },
          {
            image: "/images/study2.jpg",
            label: "Case Study",
            title: "Developing a Fintech Customer Data Warehouse",
            ctaLabel: "Read Now",
          },
          {
            image: "/images/study3.jpg",
            label: "Case Study",
            title: "Protecting Critical Financial Operations",
            ctaLabel: "Read Now",
          },
        ]}
      />
      <ResourceHighlightSection
        title="Start Your AI Transformation"
        ctaLabel="Contact Us"
        ctaHref="/contact"
        resources={DEFAULT_RESOURCES}
      />
    </>
  );
}
