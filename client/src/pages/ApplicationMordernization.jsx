import React from "react";
import HeroClone from "./ApplicationHeroClone";
import { ServicesTabsSection } from "./AiAutomationServices";
import { CaseStudiesAndBlogs } from "./CaseStudiesAndBlogsSection";
import { ResourceHighlightSection } from "./DownloadResource";

const ApplicationMordernization = () => {
  const APP_MOD_CASE_STUDIES = [
    {
      id: "appmod-case-1",
      eyebrow: "CASE STUDY",
      title:
        "Modernizing Precision Dispatch: Migrating Legacy Architecture to Scalable Microservices",
      bullets: [
        "Transformed a monolithic platform into a modular, scalable architecture.",
        "Accelerated delivery cycles through automation & standardized design systems",
      ],
      ctaLabel: "READ MORE",
      rightBgImage:
        "https://www.aditiconsulting.com/hubfs/AI-Generated%20Media/Images/abstract%20digital%20architecture.jpeg",
    },
    {
      id: "appmod-case-2",
      eyebrow: "CASE STUDY",
      title:
        "Reengineering the Delivery Experience: Modernizing a Legacy eCommerce Platform for Scale & Resilience",
      bullets: [
        "Replatformed legacy systems for global scalability & operational resilience.",
        "Enabled seamless scalability, faster delivery cycles & enterprise-wide agility.",
      ],
      ctaLabel: "READ MORE",
      rightBgImage:
        "https://www.aditiconsulting.com/hubfs/AI-Generated%20Media/Images/modern%20cloud%20infrastructure.jpeg",
    },
  ];

  const APP_MOD_BLOG_POSTS = [
    {
      id: "appmod-blog-1",
      label: "BLOG",
      title: "Modernization Playbook",
      excerpt:
        "Placeholder copy on sequencing modernization waves and measuring ROI.",
      imageUrl:
        "https://www.aditiconsulting.com/hubfs/AI-Generated%20Media/Images/modern%20engineering%20team.jpeg",
      ctaLabel: "READ",
    },
    {
      id: "appmod-blog-2",
      label: "BLOG",
      title: "Cloud-Ready Architectures",
      excerpt: "Placeholder copy on patterns for resilient, scalable systems.",
      imageUrl:
        "https://www.aditiconsulting.com/hubfs/AI-Generated%20Media/Images/cloud%20diagram.jpeg",
      ctaLabel: "READ",
    },
    {
      id: "appmod-blog-3",
      label: "BLOG",
      title: "De-Risking Migrations",
      excerpt: "Placeholder copy on testing, cutover plans, and observability.",
      imageUrl:
        "https://www.aditiconsulting.com/hubfs/AI-Generated%20Media/Images/data%20migration.jpeg",
      ctaLabel: "READ",
    },
  ];

  const AI_AUTOMATION_SERVICE_ITEMS = [
    {
      id: "ai",
      label: "End-to-End Engineering",
      title: "End-to-End Engineering",
      body: "We architect, engineer, and modernize digital applications and platforms built for scale, security, and measurable business outcomes. Our development methodology blends contemporary frameworks with cloud-native design principles to deliver solutions that are resilient, future-ready, and capable of adapting to evolving organizational needs. Whether mobile, web, or enterprise platforms, we build with precision—leveraging advanced technologies to enhance user experience, optimize operations, and integrate seamlessly with your existing ecosystem. The result is a robust digital infrastructure engineered to excel today and continuously evolve for tomorrow.",
      imageUrl:
        "https://www.aditiconsulting.com/hubfs/Boxes_Application%20Development.png",
    },
    {
      id: "ml",
      label: "Software Project Engineering",
      title: "Software Project Engineering",
      body: "Our engineering teams expertly manage projects from concept to deployment, ensuring a smooth development process that minimizes risks. We apply best practices in software development, agile methodologies, and project management to keep your project on time and within budget. From technical design to implementation, we focus on delivering high-quality software tailored to your business objectives, fostering collaboration across teams to ensure a seamless workflow.",
      imageUrl:
        "https://www.aditiconsulting.com/hubfs/Boxes_Software%20Project%20Engineering.png",
    },
    {
      id: "qa",
      label: "Software Testing",
      title: "Software Testing",
      body: "Our software testing services provide a comprehensive approach to quality assurance. We employ both manual and automated testing methods, covering functional, performance, security, and usability testing. By rigorously testing software at every stage of development, we ensure that applications perform flawlessly under various conditions, minimizing the risk of failures and enhancing the overall user experience. Our approach reduces post-launch defects and ensures stable, reliable releases.",
      imageUrl:
        "https://www.aditiconsulting.com/hubfs/Boxes_Solution%20Architecture.png",
    },
    {
      id: "perf",
      label: "Solution Architecture",
      title: "Solution Architecture",
      body: "We develop scalable, secure, and future-proof solution architectures that integrate seamlessly with your business infrastructure. Our architects design systems that can handle today’s demands while providing a foundation for future growth. With a focus on modularity, cloud adoption, and microservices, we ensure that your architecture is built for optimal performance and easy integration with new technologies. This holistic approach minimizes risks and supports continuous innovation.",
      imageUrl: "https://www.aditiconsulting.com/hubfs/Boxes_DevOps.png",
    },
    {
      id: "DevOps",
      label: "DevOps",
      title: "DevOps",
      body: "Our DevOps services streamline development and operations by automating the software delivery pipeline. Through continuous integration and continuous delivery (CI/CD), we accelerate release cycles while improving code quality and system reliability. DevOps fosters collaboration between development and IT operations, reducing manual intervention and allowing for quicker, more frequent deployments. This approach enhances agility, allowing your business to adapt swiftly to changing market demands.",
      imageUrl:
        "https://www.aditiconsulting.com/hubfs/Boxes_Software%20Testing.png",
    },
    {
      id: "Secure Software Design & Code",
      label: "Secure Software Design & Code",
      title: "Secure Software Design & Code",
      body: "We prioritize security at every stage of software development, ensuring secure software design and coding practices. Our development process incorporates security testing and best practices to identify and address vulnerabilities before deployment. By embedding security into the core of your applications, we minimize the risks of breaches, reduce the cost of remediation, and ensure that your software is built to protect sensitive data from the start.",
      imageUrl:
        "https://www.aditiconsulting.com/hubfs/Boxes_Product_Project%20Management.png",
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
    <div>
      <HeroClone />
      <ServicesTabsSection
        heading="Building & Optimizing What's Next for Enterprises"
        headingImageSrc="https://www.aditiconsulting.com/hubfs/10OCT_Boxes%20NEW.png"
        headingImageAlt="AI and automation services"
        initialActiveId="ai"
        introParagraphs={[
          "At Aditi, our teams engineer intelligent, future-ready applications and platforms that power business transformation. Our teams blend design thinking, deep technical expertise, and agile execution to build solutions that evolve with your enterprise. From idea to implementation, we deliver systems that drive performance, reduce complexity, and turn digital ambition into measurable outcomes. Every engagement is grounded in precision, transparency, and partnership—ensuring technology becomes not just an enabler, but a catalyst for growth:",
        ]}
        items={AI_AUTOMATION_SERVICE_ITEMS}
      />
      <CaseStudiesAndBlogs
        caseStudies={APP_MOD_CASE_STUDIES}
        blogPosts={APP_MOD_BLOG_POSTS}
      />
      <ResourceHighlightSection
        title="Begin Your AI Journey"
        ctaLabel="Contact Us"
        resources={DEFAULT_RESOURCES}
        
      />
    </div>
  );
};

export default ApplicationMordernization;
