import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Menu, X, ChevronRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { AiAutomationServicesSection } from "./AiAutomationServices";
import { CaseStudiesAndBlogsSection } from "./CaseStudiesAndBlogsSection";
import { StartAiTransformationSection } from "./DownloadResource";

// Default slide content, can be swapped for other services while keeping the design.
const defaultSlides = [
  {
    id: 0,
    eyebrow: "On-Demand Webinar",
    titleLines: ["AI Model Training", "Made Practical"],
    subtitle:
      "Learn the strategies, structure, and clarity needed to turn AI goals into measurable business outcomes. Access anytime.",
    ctaPrimary: "Watch Now",
    ctaSecondary: "Explore AI + Automation Services",
    bgImage:
      "https://www.aditiconsulting.com/hubfs/aditi-mastering-ai-hero-slide-v2.jpg",
    showPartners: true,
  },
  {
    id: 1,
    eyebrow: "DIGITAL ENGINEERING SERVICES",
    titleLines: ["AI + Automation Solutions"],
    subtitle:
      "Improve operational efficiency and enhance productivity by integrating smart automation into your daily workflows.",
    ctaPrimary: "Download Overview",
    ctaSecondary: "Speak With an Expert",
    bgImage:
      "https://www.aditiconsulting.com/hubfs/10162024_AI%20+%20Automation%20Hero%20Banner%20Image%201.png",
    showPartners: false,
    extraCardText:
      "A practical roadmap for preparing your data and implementing AI effectively.",
  },
];

const contentVariants = {
  enter: { opacity: 0, x: -40 },
  center: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: 40 },
};

const TopNavbar = () => {
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [industriesOpen, setIndustriesOpen] = useState(false);
  const navigate = useNavigate();

  const servicesItems = [
    { label: "AI + AUTOMATION", path: "/services/ai-automation" },
    { label: "APPLICATION MODERNIZATION", path: "/services" },
    { label: "CLOUD + INFRASTRUCTURE", path: "/services/cloud-infrastructure" },
    { label: "DATA + ANALYTICS", path: "/services/data-analytics" },
    { label: "MANAGED SUPPORT", path: "/services/managed-support" },
    { label: "TALENT ON DEMAND", path: "/services/talent-on-demand" },
  ];

  const industriesItems = [
    { label: "FINANCIAL SERVICES", path: "/industries/financial-services" },
    { label: "HEALTHCARE", path: "/industries/healthcare" },
    { label: "HIGH TECH", path: "/industries/high-tech" },
    { label: "MANUFACTURING", path: "/industries/manufacturing" },
    { label: "RETAIL", path: "/industries/retail" },
    { label: "TELECOM & MEDIA", path: "/industries/telecom-media" },
  ];

  return (
    <header className="sticky top-0 z-30 border-b border-white/10 bg-[#00A3D9]/95 backdrop-blur-sm">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 lg:px-6">
        <div className="flex flex-col leading-tight">
          <span className="text-xs font-semibold tracking-[0.35em]">ADITI</span>
          <span className="text-[10px] tracking-[0.35em] opacity-80">
            CONSULTING
          </span>
        </div>

        <nav className="hidden items-center gap-8 text-sm font-medium md:flex">
          <div
            className="relative"
            onMouseEnter={() => setServicesOpen(true)}
            onMouseLeave={() => setServicesOpen(false)}
          >
            <button
              className="group inline-flex items-center gap-1 text-white/90 transition-colors hover:text-yellow-300"
              onClick={() => navigate("/services")}
            >
              <span className="text-[11px] uppercase tracking-[0.18em]">
                Services
              </span>
              <ChevronDown className="h-3 w-3 opacity-80 transition-transform group-hover:translate-y-0.5" />
            </button>

            {servicesOpen && (
              <div className="absolute left-0 mt-2 w-64 bg-[#002844] text-xs uppercase tracking-[0.16em] text-white shadow-lg">
                {servicesItems.map((item) => (
                  <button
                    key={item.label}
                    className="block w-full px-4 py-2 text-left hover:bg-[#00A3D9]"
                    onClick={() => navigate(item.path)}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            )}
          </div>

          <div
            className="relative"
            onMouseEnter={() => setIndustriesOpen(true)}
            onMouseLeave={() => setIndustriesOpen(false)}
          >
            <button
              className="group inline-flex items-center gap-1 text-white/90 transition-colors hover:text-yellow-300"
              onClick={() => navigate("/industries")}
            >
              <span className="text-[11px] uppercase tracking-[0.18em]">
                Industries
              </span>
              <ChevronDown className="h-3 w-3 opacity-80 transition-transform group-hover:translate-y-0.5" />
            </button>

            {industriesOpen && (
              <div className="absolute left-0 mt-2 w-64 bg-[#002844] text-xs uppercase tracking-[0.16em] text-white shadow-lg">
                {industriesItems.map((item) => (
                  <button
                    key={item.label}
                    className="block w-full px-4 py-2 text-left hover:bg-[#00A3D9]"
                    onClick={() => navigate(item.path)}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            )}
          </div>

          {["Delivery", "Insights", "About"].map((item) => (
            <button
              key={item}
              className="group inline-flex items-center gap-1 text-white/90 transition-colors hover:text-yellow-300"
            >
              <span className="text-[11px] uppercase tracking-[0.18em]">
                {item}
              </span>
              <ChevronDown className="h-3 w-3 opacity-80" />
            </button>
          ))}
        </nav>

        <button
          className="inline-flex items-center justify-center rounded-md border border-white/40 px-2 py-1 text-xs font-semibold md:hidden"
          onClick={() => setOpen(!open)}
        >
          {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="border-t border-white/10 bg-[#008FC0] md:hidden"
          >
            <div className="mx-auto flex max-w-6xl flex-col gap-1 px-4 py-3 text-sm font-medium">
              {["Services", "Delivery", "Industries", "Insights", "About"].map(
                (item) => (
                  <button
                    key={item}
                    className="w-full rounded-md px-2 py-2 text-left text-white/90 hover:bg:white/10"
                  >
                    {item}
                  </button>
                )
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export const HeroCarousel = ({
  slides = defaultSlides,
  autoIntervalMs = 8000,
  className = "",
}) => {
  const [active, setActive] = useState(0);
  const navigate = useNavigate();
  const hasSlides = slides && slides.length > 0;
  const currentSlide = hasSlides ? slides[active % slides.length] : null;

  const handleNavigation = (href, onClick) => () => {
    if (onClick) {
      onClick();
      return;
    }
    if (!href) return;
    if (href.startsWith("http")) {
      window.location.href = href;
    } else {
      navigate(href);
    }
  };

  useEffect(() => {
    if (!hasSlides || slides.length <= 1) return undefined;
    const id = setInterval(
      () => setActive((prev) => (prev + 1) % slides.length),
      autoIntervalMs
    );
    return () => clearInterval(id);
  }, [autoIntervalMs, hasSlides, slides.length]);

  if (!hasSlides || !currentSlide) {
    return null;
  }

  const goTo = (index) => setActive(index);
  const goNext = () => setActive((prev) => (prev + 1) % slides.length);

  return (
    <main
      className={`relative flex-1 overflow-hidden text-white min-h-screen ${className}`}
    >
      <div
        className="pointer-events-none absolute inset-0 -z-10 bg-cover bg-center"
        style={{ backgroundImage: `url(${currentSlide.bgImage})` }}
      />
      <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-b from-black/70 via-black/35 to-black/70" />

      <div className="relative mx-auto flex min-h-screen w-full max-w-6xl flex-col justify-center px-4 py-14 sm:py-16 lg:px-6 lg:py-20">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide.id ?? active}
            variants={contentVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="max-w-xl space-y-6"
          >
            {currentSlide.showPartners && (
              <div className="mb-4 flex flex-wrap items-center gap-6 text-sm font-semibold tracking-[0.25em]">
                <span className="text-white">SAS</span>
                <span className="text-white">ADITI CONSULTING</span>
              </div>
            )}

            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#FFB022]">
              {currentSlide.eyebrow}
            </p>

            <h1 className="text-[32px] leading-[1.1] font-bold text-white sm:text-[40px] md:text-[52px]">
              {currentSlide.titleLines.map((line) => (
                <span key={line} className="block">
                  {line}
                </span>
              ))}
            </h1>

            <p className="mt-4 max-w-xl text-base leading-relaxed text-[#E3F2FD] sm:text-[15px]">
              {currentSlide.subtitle}
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:flex-wrap">
              <motion.button
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="min-w-[210px] border border-[#00A4D9] bg-[#002844] px-8 py-3 text-sm font-semibold sm:w-auto w-full text-center"
                onClick={handleNavigation(
                  currentSlide.ctaPrimaryHref,
                  currentSlide.onPrimaryClick
                )}
              >
                {currentSlide.ctaPrimary}
              </motion.button>

              <motion.button
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="min-w-[260px] border border-[#00A4D9] bg-[#00A4D9] px-8 py-3 text-sm font-semibold sm:w-auto w-full text-center"
                onClick={handleNavigation(
                  currentSlide.ctaSecondaryHref,
                  currentSlide.onSecondaryClick
                )}
              >
                {currentSlide.ctaSecondary}
              </motion.button>
            </div>

            {currentSlide.extraCardText && (
              <div className="mt-8 inline-flex items-center gap-4 border border-[#FFB022] px-6 py-4 text-sm font-semibold text-[#FFB022]">
                <div className="flex h-10 w-10 items-center justify-center border border-[#FFB022]">
                  <div className="h-5 w-4 border border-[#FFB022]" />
                </div>
                <span>{currentSlide.extraCardText}</span>
              </div>
            )}
          </motion.div>
        </AnimatePresence>

        <div className="mt-10 flex flex-wrap items-center gap-3">
          {slides.map((slide, index) => (
            <button
              key={slide.id ?? index}
              onClick={() => goTo(index)}
              className={`flex h-7 w-7 items-center justify-center border text-xs font-semibold ${
                index === active
                  ? "border-[#FFB022] bg-[#FFB022] text-[#00152A]"
                  : "border-white/70 bg-transparent text-white"
              }`}
            >
              {index + 1}
            </button>
          ))}

          {slides.length > 1 && (
            <button
              onClick={goNext}
              className="flex h-7 w-7 items-center justify-center border border-white/80 bg-transparent text-white hover:bg-white/10"
            >
              <ChevronRight className="h-4 w-4" />
            </button>
          )}
        </div>
      </div>
    </main>
  );
};

export const AiHeroCarousel = () => {
  return (
    <div className="flex min-h-screen flex-col text-white">
      <TopNavbar />
      <HeroCarousel slides={defaultSlides} />
      <AiAutomationServicesSection />
      <CaseStudiesAndBlogsSection />
      <StartAiTransformationSection />
    </div>
  );
};
