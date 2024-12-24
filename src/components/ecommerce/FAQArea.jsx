import React, { useState } from "react";
import faq2 from '../../assets/images/faq2.png';
import faq3 from '../../assets/images/faq3.png'
import elib from '../../assets/images/elib.png';
const FaqArea = () => {
  const [activeIndex, setActiveIndex] = useState(null); // Start with no active index

  const handleToggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index); // Toggle content visibility
  };

  const faqItems = [
    {
      title: "Business Registration",
      content: `- Vendors must have a valid business registration or artisan certification from an accredited body.
                - Must comply with local, regional, or international trade laws, depending on the target market.`,
    },
    {
      title: "Product Authenticity",
      content: `- Products must reflect authentic Kashmiri craftsmanship and sustainable practices.
                - Items must be handcrafted or incorporate significant artisanal techniques.
                - Vendors must provide proof of authenticity, such as Geographical Indication (GI) tags, if applicable.`,
    },
    {
      title: "Quality Standards",
      content: `- Products must meet the platform’s quality standards, including durability, design, and finishing.
                - Vendors must ensure items are defect-free and meet international export requirements.`,
    },
    {
      title: "Sustainability and Ethical Practices",
      content: `- Preference will be given to vendors using eco-friendly materials and processes.
                - Vendors must demonstrate fair labor practices and ethical treatment of artisans.`,
    },
    {
      title: "Inventory and Product Availability",
      content: `- Vendors must maintain a consistent inventory of listed products.
                - Ready-to-ship products should align with the platform’s logistics and shipping timelines.`,
    },
    {
      title: "Digital Readiness",
      content: `- Vendors need basic tools like computers or phones for management.
                - Vendors must provide high-quality product images, descriptions, and pricing for the platform.`,
    },
    {
      title: "Financial Stability",
      content: `- Vendors must demonstrate the ability to fulfill orders and manage financial transactions securely.
                - A valid bank account or payment gateway setup is required for receiving payments.`,
    },
    {
      title: "Compliance with Platform Policies",
      content: `- Vendors must comply with platform policies on returns and service.
                - Non-compliance may result in suspension or termination of the vendor account.`,
    },
    {
      title: "Participation in Training Programs",
      content: `- Vendors must engage in platform training to meet global market standards.`,
    },
    {
      title: "Commitment to Transparency",
      content: `- Vendors must disclose complete, transparent details about business and materials.`,
    },
  ];

  return (
    <div className="faq-area f0dsd">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6 col-md-12">
            <div className="section-title text-left">
              <h5 className="section-sub-title">Eligibility Criteria</h5>
              <h1 className="section-main-title" style={{ fontSize: "30px" }}>
                De Koshur Crafts E-Commerce
              </h1>
              <h1 className="section-main-title" style={{ fontSize: "30px" }}>
                Platform Eligibility <span>Criteria.</span>
              </h1>
            </div>
          </div>
        </div>

        <div className="row align-items-center">
          <div className="col-lg-6 col-md-12">
            <div className="faq-thumb">
              <img width="100%" src={elib} alt="faq1" />
            </div>
          </div>

          <div className="col-lg-6 col-md-12">
            <div className="tab_container">
              <div className="feq-content mb-3">
                <h3 className="faq-title">
                  Check Your Vendor <span>Eligibility .</span>
                </h3>
              </div>

              <div id="tab1" className="tab_content">
                <ul className="accordion ccordion">
                  {faqItems.map((item, index) => (
                    <li key={index}>
                      <a
                        onClick={() => handleToggle(index)}
                        className={activeIndex === index ? "active" : ""}
                      >
                        <span>{item.title}</span>
                        
                      </a>
                      <p
                        style={{
                          display: activeIndex === index ? "block" : "none",
                        }}
                      >
                        {item.content}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="faq-shape">
          <img src={faq2} alt="faq2" />
        </div>

        <div className="faq-shape2">
          <img src={faq3} alt="faq2" />
        </div>
      </div>
    </div>
  );
};

export default FaqArea;
