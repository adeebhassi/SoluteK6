import React from 'react';
// import price_shape from '../../assets/img/shapes/price_shape.svg'
// Sample data for dynamic content rendering
const pricingData = [
  {
    platform: 'De Koshur Crafts',
    rows: [
      'Narrow but deep focus',
      'High (GI-tagged, heritage-rich crafts)',
      'Yes (complete Kashmiri handicrafts line)',
      'Rigorous (GI & quality checks)',
      'Workshops, consultations',
      'Prominent',
      'Detailed Blockchain Traceability',
      'High (fair-trade emphasis)',
      'Integrated in operations',
      'Extensive storytelling',
      'Artisan stories, videos, blogs',
      'Highly curated',
      'Seasonal/festival focus',
      'High (artisan-focused)',
      'Custom logistics & support',
      'High with artisan focus',
      'Artisan-oriented approach',
      'High (focused platform)',
      'Community forums planned',
      'High (blogs, guides)',
      'Tailored for artisan goods',
      'Emerging (high cultural focus)',
      'Cultural ambassadors planned',
    ],
  },
{
  platform: "Amazon",
  rows: [
    "High", "Limited", "No", "Moderate", "None", "No", "Minimal", "Minimal", "Moderate", "None", 
    "Limited", "Advanced", "Limited", "Moderate", "High", "Extensive", "Extensive", "Limited", 
    "None", "Limited", "Flexible", "Very High", "Extensive"
  ]
},
{
  platform: "Etsy",
  rows: [
    "Medium", "Moderate", "No", "Moderate", "Limited", "Limited", "Moderate", "Moderate", 
    "High (optional)", "Limited", "Moderate", "Moderate", "High", "High", "Limited", "Moderate", 
    "Moderate", "None", "Moderate", "Moderate", "Moderate", "High", "Limited"
  ]
},
{
  platform: "eBay",
  rows: [
    "High", "Limited", "No", "Low", "None", "No", "Minimal", "None", "Low", "None", "Limited", 
    "Limited", "None", "High", "Low", "Moderate", "Limited", "None", "None", "Limited", "Variable", 
    "Moderate", "None"
  ]
},
{
  platform: "Shopify",
  rows: [
    "Variable", "Low", "No", "Low", "None", "No", "Minimal", "None", "Low", "None", "Minimal", 
    "Variable", "Minimal", "Variable", "Variable", "Variable", "Variable", "Low", "None", "Limited", 
    "Variable", "Variable", "Limited"
  ]
},
];

function CompareToOther() {
  const scrollLeft = () => {
    document.getElementById('scroll-container').scrollBy({
      left: -200,
      behavior: 'smooth',
    });
  };

  const scrollRight = () => {
    document.getElementById('scroll-container').scrollBy({
      left: 200,
      behavior: 'smooth',
    });
  };

  const highlightedTexts = [
    "deep focus",
    "High",
    "Yes",
    "Rigorous",
    "Prominent",
    "Detailed",
    "High",
    "Integrated",
    "Extensive",
    "Highly",
    "High",
    "High",
    "High",
    "High",
    "Tailored",
    "Emerging",
    "Cultural",
    "High",
    "Advanced",
    "High",
    "Extensive",
    "Extensive",
    "High",
    "Extensive",
    "High"
  ];
  

  return (
    <section className="compare-to-other">
      <div className="container mt-5">
        <div className="cs_tabs">
          <div className="cs_slider_heading_1">
            <div className="cs_section_heading cs_style_1">
              <h3 className="cs_section_subtitle cs_accent_color text-uppercase cs_medium cs_fs_20 cs_mb_10">
                <img src="assets/img/icons/fan.svg" alt="" className="cs_section_subheading_icon" />
                De Kushur Craft USA Ecommerce Platform
              </h3>
              <h2 className="cs_section_title cs_fs_48 cs_semibold mb-0">
                Compare to Other Platforms
              </h2>
            </div>
          </div>
          <div className="cs_height_45 cs_height_lg_45"></div>
          <div className="cs_tab_body">
            <div className="cs_tab">
              <div className="row cs_gap_y_30 cs_row_gap_30">
                {/* Platform Parameter Section */}
                <div className="col-lg-4">
                  <div className="cs_pricing_plan cs_style_1" style={{ background: '#b8b7b74d',marginRight:'5rem' }}>
                    <img src="../../assets/img/shapes/price_shape.svg" alt="" className="cs_pricing_shape" />
                    <div className="cs_pricing_plan_head">
                      <h2 className="cs_pricing_plan_heading mb-0 cs_fs_20 cs_medium">Platform Parameter</h2>
                    </div>
                    <table className='table table-striped'>
                      <tbody>
                        <tr>
                          <td>Breadth of Global Handicraft Product</td>
                        </tr>
                        <tr>
                          <td>Kashmir Cultural/Heritage Focus</td>
                        </tr>
                        <tr>
                          <td>Kashmir Entire Handicraft Product Line</td>
                        </tr>
                        <tr>
                          <td>Seller Verification</td>
                        </tr>
                        <tr>
                          <td>Artisan Support & Training</td>
                        </tr>
                        <tr>
                          <td>GI Tags/Certifications</td>
                        </tr>
                        <tr>
                          <td>Origin Traceability</td>
                        </tr>
                        <tr>
                          <td>Fair Trade Policies</td>
                        </tr>
                        <tr>
                          <td>Eco-friendly Practices</td>
                        </tr>
                        <tr>
                          <td>Cultural Storytelling</td>
                        </tr>
                        <tr>
                          <td>Multimedia Content</td>
                        </tr>
                        <tr>
                          <td>Personalized Suggestions</td>
                        </tr>
                        <tr>
                          <td>Thematic Collections</td>
                        </tr>
                        <tr>
                          <td>Pricing Transparency</td>
                        </tr>
                        <tr>
                          <td>Value-Added Services</td>
                        </tr>
                        <tr>
                          <td>International Shipping</td>
                        </tr>
                        <tr>
                          <td>Localization</td>
                        </tr>
                        <tr>
                          <td>B2B Networking</td>
                        </tr>
                        <tr>
                          <td>Forums/Engagement</td>
                        </tr>
                        <tr>
                          <td>Customer Education</td>
                        </tr>
                        <tr>
                          <td>Return Policies</td>
                        </tr>
                        <tr>
                          <td>Brand Trust</td>
                        </tr>
                        <tr>
                          <td>Influencer Partnerships</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                {/* Platform Comparison Section (Scrollable) */}
                <div className="col-lg-8">
                  <div
                    id="scroll-container"
                    className="last-sec pricing-section-1"
                    style={{
                      display: 'flex',
                      overflowX: 'auto',
                      scrollSnapType: 'x mandatory',
                      scrollbarWidth: 'none',
                    }}
                  >
                    {pricingData.map((data, index) => (
                      <div key={index} className="cs_pricing_plan cs_style_1" style={{ minWidth: '300px', marginRight: '20px' }}>
                        <img src="assets/img/shapes/price_shape.svg" alt="" className="cs_pricing_shape" />
                        <div className="cs_pricing_plan_head">
                          <h2 className="cs_pricing_plan_heading mb-0 cs_fs_20 cs_medium">{data.platform}</h2>
                        </div>
                        <table className='table table-striped '>
                          <tbody>
                            {data.rows.map((row, i) => (
                              <tr key={i}>
                                <td>
          {row.split(" ").map((word, index) => (
            <span
              key={index}
              className={highlightedTexts.includes(word) ? "highlight-text" : ""}
            >
              {word}{" "}
            </span>
          ))}
        </td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    ))}
                  </div>

                  {/* Scroll Buttons */}
                  <div className="controls">
                    <button className="scroll-btn scroll-btn-left" onClick={scrollLeft}>
                      <i className="bi bi-arrow-left-circle-fill"></i>
                    </button>
                    <button className="scroll-btn scroll-btn-right" onClick={scrollRight}>
                      <i className="bi bi-arrow-right-circle-fill"></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="cs_height_120 cs_height_lg_80"></div>
    </section>
  );
}

export default CompareToOther;
