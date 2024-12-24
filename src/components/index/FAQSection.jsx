import React, { useState } from "react";
import { Link } from "react-router-dom";
import faq_thumb from '../../assets/images/faq-thumb.png'
const FaqSection = () => {
  const [activeIndex, setActiveIndex] = useState(0); // Default to the first item

  const faqItems = [
    {
      title: "Craftsmanship and Authenticity?",
      content: `Demonstrates mastery in traditional Kashmiri crafting techniques.
                Ensures products meet premium quality and authenticity standards.
                Holds relevant certifications (e.g., GI) to validate craft legitimacy.
                Ethically and sustainably sources raw materials.
                Commitment to preserving cultural heritage & artisanal traditions.`,
    },
    {
      title: "Business and Operational Readiness?",
      content: `Capable of fulfilling MOQs and handling large-scale demands.
                Manages inventory efficiently with scalable production capacity.
                Complies with international trade, packaging & labeling standards.
                Transparent pricing structure aligned with fair trade principles.
                Reliable operational systems for banking, payments, and logistics.`,
    },
    {
      title: "Platform Alignment and Values?",
      content: `Upholds sustainability in sourcing and production.
                Fair employment practices.
                Aligns with DKC’s core principles of diversity, equity, and inclusion.
                Commits to ethical business with measurable environmental impact.
                Open to adopting modern business practices.`,
    },
  ];

  const handleToggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index); // Toggle content
  };

  return (
    <div className="faq-area style-two">
      <div className="container">
        <div className="row pb-5 pt-5">
          <div className="col-lg-6 col-md-12">
            <div className="section-title text-left">
              <h6 className="section-sub-title">
                Ensuring Excellence, Authenticity, and Global Readiness for
                Every Partner
              </h6>
              <h1 className="section-main-title">
                Vendor Eligibility Checklist: <span>Elevating Standards</span>
              </h1>
            </div>
            <div className="tab_container">
              <ul className="accordion">
                {faqItems.map((item, index) => (
                  <li
                    key={index}
                    className={`accordion ${activeIndex === index ? "open" : ""}`}
                  >
                    <Link
                      to="#"
                      onClick={() => handleToggle(index)}
                      className={`accordion-link ${activeIndex === index ? "active" : ""}`}
                    >
                      <span>{item.title}</span>
                    </Link>
                    <p style={{ display: activeIndex === index ? "block" : "none" }}>
                      {item.content}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="col-lg-6 col-md-12">
            <div className="faq-thumb">
              <img src={faq_thumb} alt="thumb" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FaqSection;
