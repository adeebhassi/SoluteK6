import React from "react";
import Breadcrumb from "../../components/Breadcrumb";
import AboutSection from "../../components/About/MissionVision/AboutSection";
import FooterArea from "../../components/FooterArea";
const MissionVisionPage = () => {
  const breadcrumbLinks = [
    { label: "Home", path: "/" },
    { label: "Mission & Vision" },
  ];
  const mission = {
    title: "MISSION",
    subtitle: "Empowering artisans, revolutionizing crafts, preserving heritage.",
    description:
      "Connecting Kashmiri craftsmanship to American Craft markets with transparency, innovation, and cultural integrity.",
    items: [
      "Scalability for craft businesses",
      "Empower Artisan Communities",
      "Omni-commerce integration",
      "Promote Ethical Commerce",
      "Redefine Business Standards",
    ],
    counterValue: 3826,
    counterText: "ARTISANS INTEGRATED",
    imageSrc: "/assets/images/about-us-thu.png",
    iconSrc: "/assets/1.png",
  };

  const vision = {
    title: "VISION",
    subtitle: "Redefining craftsmanship through innovation and sustainability.",
    description:
      "Leading Kashmir craft evolution with cultural authenticity, ethical practices, and technological excellence.",
    items: [
      "Expand Craft Partnerships",
      "Eliminate Trade Exploitation",
      "Simplify Trade Logistics",
      "Support Sustainable Trade",
      "Elevate Artisan Branding",
    ],
    counterValue: 123,
    counterText: "BUSINESS INTEGRATED",
    imageSrc: "/assets/images/about-us-thu.png",
    iconSrc: "/assets/2.png",
  };

  const coreValue = {
    title: "CORE VALUE",
    subtitle: "Integrity, innovation, sustainability, transparency, cultural excellence.",
    description:
      "Uplifting artisans by blending tradition, innovation, ethical trade, and environmental responsibility.",
    items: [
      "Commit to Transparency",
      "Build Consumer Confidence",
      "Empowerment through Equity",
      "Operational Integrity",
      "Scalable Artisan Growth",
    ],
    counterValue: 26,
    counterText: "INSTITUTIONS INTEGRATED",
    imageSrc: "/assets/images/about-us-thu.png",
    iconSrc: "/assets/3.png",
  };

  return (
    <div>
      <Breadcrumb title="Mission & Vision" links={breadcrumbLinks} />
      <AboutSection {...mission} />
      <AboutSection {...vision} />
      <AboutSection {...coreValue} />
      <FooterArea/>
    </div>
  );
};

export default MissionVisionPage;
