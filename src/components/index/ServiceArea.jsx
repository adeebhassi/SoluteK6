import React from "react";
import service_icon from '../../assets/images/home-two/service-icon2.png';
const ServiceArea = () => {
  const services = [
    {
      title: "US Handicraft Market Access",
      challenge: "Kashmiri artisans face limited international reach due to inadequate logistics, and visibility, restricting global exposure for their craftsmanship.",
      benefit: "De Koshur Crafts empowers global visibility through e-commerce, exhibitions, and retail spaces, connecting artisans to American audiences.",
      icon: service_icon,
    },
    {
      title: "Infrastructure Challenges Solved",
      challenge: "Small businesses struggle with shipping, warehousing, and customs navigation, lacking resources and expertise to efficiently access international markets.",
      benefit: "De Koshur Crafts manages logistics, warehousing, and compliance, ensuring artisans seamlessly reach global customers while focusing on their craft.",
      icon: service_icon,
    },
    {
      title: "Ethical Standards Simplified",
      challenge: "Small vendors struggle to meet global compliance standards like fair trade and sustainability due to limited resources, knowledge, and capacity.",
      benefit: "De Koshur Crafts ensures products align with global standards, enhancing credibility and trust through expert guidance and managed compliance.",
      icon: service_icon,
    },
    {
      title: "Financial Risks Minimized",
      challenge: "High upfront costs for international marketing, storefronts, and large-scale operations create significant financial risks for artisans with minimal margins.",
      benefit: "De Koshur Crafts’ flexible models, like consignment and exhibitions, minimize risk while maximizing global exposure and opportunities.",
      icon: service_icon,
    },
    {
      title: "Branding and Marketing",
      challenge: "Small-scale vendors struggle to establish brand recognition and execute impactful marketing campaigns in foreign markets due to limited expertise and resources.",
      benefit: "De Koshur Crafts provides vendors access to an established brand, professional marketing platforms, and event promotions, ensuring visibility and trust.",
      icon: service_icon,
    },
    {
      title: "Quality Improvement Resources",
      challenge: "Small-scale artisans face difficulties meeting global quality standards, eco-friendly packaging requirements, and professional presentation due to resource constraints.",
      benefit: "De Koshur Crafts offers quality tools, expert photography, and eco-friendly packaging, empowering artisans to compete on a global scale.",
      icon: service_icon,
    },
    {
      title: "Industry Network Access",
      challenge: "Artisans struggle to access essential industry networks, limiting opportunities to connect with distributors, attend exhibitions, or reach high-value international buyers.",
      benefit: "De Koshur Crafts connects vendors to trade shows, exhibitions, and wholesale markets, unlocking access to critical industry contacts and opportunities.",
      icon: service_icon,
    },
    {
      title: "Sustainable Business Models",
      challenge: "Kashmiri artisans face unstable revenue due to seasonal demand, price pressures, and limited market diversification, hindering sustainable growth.",
      benefit: "De Koshur Crafts offers diverse models, from e-commerce to franchises, stabilizing revenue and fostering long-term business sustainability.",
      icon: service_icon,
    },
    {
      title: "Counterfeit Product Protection",
      challenge: "Counterfeit Kashmiri products devalue genuine craftsmanship, eroding artisan revenues and customer trust by misrepresenting authentic work as mass-produced replicas.",
      benefit: "De Koshur Crafts safeguards authenticity through strict verification, preserving artisans’ heritage and fostering trust with global customers.",
      icon: service_icon,
    },
  ];

  return (
    <div className="service-area style-two">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="section-title text-center">
              <h5 className="section-sub-title">
                Kashmir Handicrafts Bussiness Opportunities: Exclusively for the
                U.S. Market
              </h5>
              <h1 className="section-main-title">
                Why you need De Koshur Crafts
                <span style={{ color: "#ff3d00" }}>Partnerships ?</span>
              </h1>
            </div>
          </div>
        </div>
        <div className="row">
          {services.map((service, index) => (
            <div key={index} className="col-lg-4 col-md-6 my-4">
              <div className="single-service-box">
                <div className="service-box-inner">
                  <div className="service-content">
                    <h4 className="service-title">{service.title}</h4>
                    <p className="service-des">
                      <span style={{ color: "#ff7102" }}>
                        <b>Challenge</b>
                      </span>
                      : {service.challenge}
                      <br />
                      <br />
                      <span style={{ color: "#ff7102" }}>
                        <b>Benefit</b>
                      </span>
                      : {service.benefit}
                    </p>
                  </div>
                  <div className="service-icon">
                    <img src={service.icon} alt="icon" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServiceArea;
