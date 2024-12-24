import React, { useState } from 'react';

const CaseStudyArea = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const caseStudyData = [
    {
      category: 'architecture',
      title: 'Mach Architecture Commerce Capabilities',
      subtitle: "Tier-8 Architecture Built to Scale Kashmir's Craftsmanship into US Market Leadership.",
      features: [
        'Microservices Architecture',
        'API-First Approach',
        'Cloud-Native Infrastructure',
        'Headless Functionality',
        'Advanced Database Management',
        'Geofencing Integration',
        'Event-Driven Architecture',
        'Security-First Design',
        'Progressive Web Application (PWA) Support',
        'AI-Driven Personalization',
        'Scalable Infrastructure for Growth',
        'Real-Time Analytics & Monitoring',
      ],
    },
    {
      category: 'integrations',
      title: 'API Integrations',
      subtitle: 'Seamlessly Integrating Kashmiri Artisanal Excellence with US Market Ecosystems.',
      features: [
        'Storefront & Customer Experience APIs',
        'Stripe Radar API',
        'Faceted Search & Voice Commerce APIs',
        'Shipping and Packaging APIs',
        'Order Management and Fulfillment APIs',
        'Advanced Chatbot Integration',
        'Payment Gateway APIs',
        'Social Media Integration APIs',
        'Marketing Automation APIs',
        'Customer Analytics APIs',
        'Return Management APIs',
        'Loyalty & Rewards APIs',
      ],
    },
    {
        category: "content",
        title: "Content Management System (CMS)",
        description:
          "Dynamic Content Tools to Showcase the Heritage of Kashmiri Crafts for Modern Audiences.",
        features: [
          "Advanced Content Authoring Features",
          "Centralized Content Repository",
          "Advanced Content Modeling",
          "Personalized Content Delivery",
          "A/B Testing",
          "Content Tagging & Categorization",
          "Omni-Channel Content Distribution",
          "Content Version Control",
          "Digital Asset Management (DAM)",
          "SEO-Optimized Content Management",
          "Multilingual Content Support",
          "Content Performance Analytics",
        ],
      },
      {
        category: "security",
        title: "Security Features",
        description:
          "Protecting Kashmiri Artistry and Customer Trust with Tier-8 Security Standards.",
        features: [
          "PCI Compliance",
          "Intrusion Detection",
          "Secure API Gateways",
          "Data Security & Encryption",
          "Identity & Access Management (IAM)",
          "Security Monitoring & Threat Detection",
          "Multi-Factor Authentication (MFA)",
          "Vulnerability Scanning & Penetration Testing",
          "Web Application Firewall (WAF)",
          "Runtime Application Self-Protection (RASP)",
          "Threat Intelligence Integration",
          "Cloud Security Posture Management",
        ],
      },
      {
        category: "marketing",
        title: "Marketing Features",
        description:
          "Empowering Kashmiri Handicrafts with US-Centric Marketing Precision.",
        features: [
          "Personalization & Customer Segmentation",
          "Multi-Channel Marketing Automation",
          "AI-Powered Content Marketing & Chatbots",
          "Geographic Segmentation Marketing",
          "Demographic Segmentation Marketing",
          "Return on Investment Tracking Marketing",
          "Behavioral Targeting",
          "Predictive Analytics for Marketing",
          "Campaign Attribution Modeling",
          "Social Media Listening & Engagement",
          "Email Campaign Automation",
          "Dynamic Content Optimization",
        ],
      },
      {
        category: "engagement",
        title: "Additional Customer Engagement Formats",
        description:
          "Innovative Formats to Connect US Buyers with Kashmir's Timeless Craftsmanship.",
        features: [
          "Digital Catalogs",
          "Digital Lookbooks",
          "Product Videos",
          "Virtual Try-Ons",
          "Mailing Catalogs",
          "3D Product Configurators",
          "Interactive Infographics",
          "Live Product Demos",
          "Augmented Reality Showrooms",
          "Customer Review Galleries",
          "User-Generated Content Integration",
          "Personalized Product Recommendations",
        ],
      },
      {
        category: "loyalty",
        title: "Customer Loyalty Programs",
        description:
          "Building Long-Term Relationships Through Rewarding Experiences for Kashmiri Craft Enthusiasts.",
        features: [
          "Points-Based Loyalty Programs",
          "Tiered Loyalty Programs",
          "Paid Membership Programs",
          "Referral Program",
          "Gamified Loyalty Programs",
          "Partnership Programs",
          "Exclusive Member Discounts",
          "Anniversary & Birthday Rewards",
          "Early Access to Sales",
          "Surprise & Delight Rewards",
          "VIP Customer Tiers",
          "Charity-Based Loyalty Programs",
        ],
      },
      {
        category: "financing",
        title: "Customer Financing Options",
        description:
          "Flexible Financing Tailored to Elevate Kashmir Handicrafts in the US Market.",
        features: [
          "DKC Store-Branded Credit Cards",
          "Installment Payment Plans",
          "Buy Now, Pay Later (BNPL)",
          "Lease-to-Own Programs",
          "Layaway Plans",
          "Deferred Interest Financing",
          "Flexible Payment Schedules",
          "No-Interest Promotional Financing",
          "Custom Financing for High-Value Purchases",
          "Reward-Linked Financing Options",
          "Seasonal Financing Promotions",
          "Pre-Approved Credit Options",
        ],
      },
  ];

  const categories = [
    { key: "all", label: "All" },
    { key: "architecture", label: "Architecture" },
    { key: "integrations", label: "Integrations" },
    { key: "content", label: "Content" },
    { key: "security", label: "Security" },
    { key: "marketing", label: "Marketing" },
    { key: "engagement", label: "Engagement" },
    { key: "loyalty", label: "Loyalty" },
    { key: "financing", label: "Financing" },
  ];

  const handleFilterClick = (category) => {
    setActiveCategory(category);
  };

  // Filtered data based on activeCategory
  const filteredData =
    activeCategory === 'all'
      ? caseStudyData
      : caseStudyData.filter((item) => item.category === activeCategory);

  return (
    <div className="case-study-area">
      <div className="container">
        {/* Section Title */}
        <div className="row case-study-bg">
          <div className="col-lg-12 col-sm-12">
            <div className="section-title">
              <h5 className="section-sub-title">Key features of our Ecommerce Platform</h5>
              <h6>
                Platform Engineered in San Francisco, US – Tailored to Empower Kashmiri Artisans for Success in US
                Digital Markets
              </h6>
            </div>
            {/* Menu Filtering */}
            <div className="case_study_nav">
              <div className="case_study_menu">
              <ul className="filter-buttons">
                {categories.map((category, index) => ( 

                    <li
                        key={category.key}
                        className={`mt-2 ${
                        activeCategory === category.key ? "current_menu_item" : ""
                        }`}
                        onClick={() => handleFilterClick(category.key)}
                    >
                        {category.label}
                    </li>
                ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
        {/* Case Study Content */}
        <div className="row image_load">
          {filteredData.map((item, index) => (
            <CaseStudyBox
              key={index}
              category={item.category}
              title={item.title}
              subtitle={item.subtitle}
              features={item.features}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

// Reusable Case Study Box Component
const CaseStudyBox = ({ title, subtitle, features }) => {
  return (
    <div className="col-lg-6 col-sm-6 grid-item">
      <div className="case-study-single-box">
        <div className="case-study-content case-sds mt-2">
          <div className="case-study-title">
            <h5>
              <b>{title}</b>
            </h5>
            <h3>{subtitle}</h3>
            <ul>
              {features.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CaseStudyArea;
