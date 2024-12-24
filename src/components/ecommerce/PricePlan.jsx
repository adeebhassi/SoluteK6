import React, { useRef } from 'react';

const pricingPlans = [
  {
    name: 'Amazon',
    plans: [
      'Individual Plan',
      'Professional Plan',
    ]
  },
  {
    name: 'Etsy',
    plans: [
      'Standard Plan',
      'Plus Plan',
    ]
  },
  {
    name: 'Etsy',
    plans: [
      'Starter Store',
      'Basic Store',
      'Premium Store',
    ]
  },
  {
    name: 'Shopify',
    plans: [
      'Basic Plan',
      'Shopify Plan',
      'Advanced Plan',
    ]
  },
  {
    name: 'De Koshur Crafts',
    plans: [
      'Starter Plan',
      'Basic Plan',
      'Professional Plan',
      'Premium Plan',
    ]
  },
];

const keyFeatures = [
  "Ideal for low-volume sellers, no advanced tool",
  "Advanced tools, report access, buy box eligibility",
  "Basic selling tools, product listing capabilities",
  "Advanced tools, customizable storefronts, marketing",
  "For small-scale sellers, limited free listings",
  "Moderate sellers, more free listings, tools",
  "Large sellers, maximum listings, promotional tools",
  "Basic tools, inventory management, sales reports",
  "Advanced reporting, more staff accounts",
  "Advanced analytics, custom reports, lowest fees",
  "Entry-level access, limited product listings",
  "Enhanced visibility, unlimited listings, marketing",
  "Advanced analytics, premium placement, support",
  "Premium branding, curated storytelling, exhibition"
];

const additionalFees = [
  "Referral Fee: 8%-15%, Fulfillment Varies by Size/Weight",
  "Referral Fee: 8%-15%, Fulfillment Varies by Size/Weight",
  "Listing: $0.20/item, Transaction: 6.5%, Payment: 3%",
  "Listing: $0.20/item, Transaction: 6.5%, Payment: 3%",
  "Final Fee: 12.35% + $0.30, Insertion: $0.35/item",
  "Final Fee: 12.35% + $0.30, Insertion: $0.35/item",
  "Final Fee: 12.35% + $0.30, Insertion: $0.35/item",
  "Transaction Fee: 2.9% + $0.30 (unless Shopify Payments)",
  "Transaction Fee: 2.9% + $0.30 (unless Shopify Payments)",
  "Transaction Fee: 2.9% + $0.30 (unless Shopify Payments)",
  "Referral: 1%, Transaction: 1.5%, Final: ~3.25%",
  "Referral: 1%, Transaction: 1.5%, Final: ~3.25%",
  "Referral: 1%, Transaction: 1.5%, Final: ~3.25%",
  "Referral: 1%, Transaction: 1.5%, Final: ~3.25%"
];

const yearlyFee = [
  "N/A",
  "N/A",
  "Free",
  "$120",
  "$59.40/year ($4.95/month)",
  "$263.40/year ($21.95/month)",
  "$719.40/year ($59.95/month)",
  "$399",
  "$1,050",
  "$3,999",
  "$49.40",
  "$199.99",
  "$250",
  "$499.99"
];

const monthlyFee = [
  "$0.99/item sold",
  "$39.99",
  "Free",
  "$10",
  "$7.95 (monthly)",
  "$27.95 (monthly)",
  "$74.95 (monthly)",
  "$39",
  "$105",
  "$399",
  "$4.95",
  "$19.95",
  "$19.99",
  "$44.95"
];

const PricingPlan = () => {
  const scrollContainerRef = useRef(null);

  // Function to scroll the container left
  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: -300, // Adjust the scroll distance as needed
        behavior: 'smooth',
      });
    }
  };

  // Function to scroll the container right
  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: 300, // Adjust the scroll distance as needed
        behavior: 'smooth',
      });
    }
  };

  return (
    <section className="pricing-plan">
      <div className="container mt-5">
        <div className="cs_tabs">
          <div className="cs_slider_heading_1">
            <div className="cs_section_heading cs_style_1">
              <h3 className="cs_section_subtitle cs_accent_color text-uppercase cs_medium cs_fs_20 cs_mb_10">
                {/* <img src="assets/img/icons/fan.svg" alt="" className="cs_section_subheading_icon" /> */}
                Pricing Plan
              </h3>
              <h2 className="cs_section_title cs_fs_48 cs_semibold mb-0">Pricing Plan</h2>
            </div>
          </div>
          <div className="cs_height_45 cs_height_lg_45"></div>
          <div className="cs_tab_body">
            <div className="cs_tab">
              <div className="row cs_gap_y_30 cs_row_gap_30">
                <div className="col-lg-4">
                  <div className="cs_pricing_plan cs_pricing_planqwq cs_style_1">
                    {/* <img src="assets/img/shapes/price_shape.svg" alt="" className="cs_pricing_shape" /> */}
                    <div className="cs_pricing_plan_head">
                      <h2 className="cs_pricing_plan_heading mb-0 cs_fs_20 cs_medium">Plan Name</h2>
                    </div>
                    <table>
                      <tbody>
                        {pricingPlans.map((plan, index) => (
                          <React.Fragment key={index}>
                            <tr>
                              <td rowSpan={plan.plans.length}>{plan.name}</td>
                              <td>{plan.plans[0]}</td>
                            </tr>
                            {plan.plans.slice(1).map((subPlan, subIndex) => (
                              <tr key={subIndex}>
                                <td>{subPlan}</td>
                              </tr>
                            ))}
                          </React.Fragment>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
                <div className="col-lg-8">
                  <div className="last-sec pricing-section-2" 
                    style={{ display: 'flex', overflowX: 'auto', scrollSnapType: 'x mandatory', scrollbarWidth: 'none' }} 
                    ref={scrollContainerRef}>
                    <div className="cs_pricing_plan cs_style_1">
                      {/* <img src="assets/img/shapes/price_shape.svg" alt="" className="cs_pricing_shape" /> */}
                      <div className="cs_pricing_plan_head">
                        <h2 className="cs_pricing_plan_heading mb-0 cs_fs_20 cs_medium">Key Features</h2>
                      </div>
                      <table>
                        <tbody>
                          {keyFeatures.map((feature, index) => (
                            <tr key={index}>
                              <td>{feature}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>

                    <div className="cs_pricing_plan cs_style_1">
                      {/* <img src="assets/img/shapes/price_shape.svg" alt="" className="cs_pricing_shape" /> */}
                      <div className="cs_pricing_plan_head">
                        <h2 className="cs_pricing_plan_heading mb-0 cs_fs_20 cs_medium">Additional Fees</h2>
                      </div>
                      <table>
                        <tbody>
                          {additionalFees.map((fee, index) => (
                            <tr key={index}>
                              <td>{fee}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>

                    <div className="cs_pricing_plan cs_style_1">
                      {/* <img src="assets/img/shapes/price_shape.svg" alt="" className="cs_pricing_shape" /> */}
                      <div className="cs_pricing_plan_head">
                        <h2 className="cs_pricing_plan_heading mb-0 cs_fs_20 cs_medium">Yearly Fee</h2>
                      </div>
                      <table>
                        <tbody>
                          {yearlyFee.map((fee, index) => (
                            <tr key={index}>
                              <td>{fee}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>

                    <div className="cs_pricing_plan cs_style_1" style={{ marginRight: '0rem' }}>
                      {/* <img src="assets/img/shapes/price_shape.svg" alt="" className="cs_pricing_shape" /> */}
                      <div className="cs_pricing_plan_head">
                        <h2 className="cs_pricing_plan_heading mb-0 cs_fs_20 cs_medium">Monthly Fee</h2>
                      </div>
                      <table>
                        <tbody>
                          {monthlyFee.map((fee, index) => (
                            <tr key={index}>
                              <td>{fee}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="controls">
          <button className="scroll-btn scroll-btn-left" id="scroll-left-btn-2" onClick={scrollLeft}>
            <i className="bi bi-arrow-left-circle-fill"></i>
          </button>
          <button className="scroll-btn scroll-btn-right" id="scroll-right-btn-2" onClick={scrollRight}>
            <i className="bi bi-arrow-right-circle-fill"></i>
          </button>
        </div>
      </div>
      <div className="cs_height_120 cs_height_lg_80"></div>
    </section>
  );
}

export default PricingPlan;
