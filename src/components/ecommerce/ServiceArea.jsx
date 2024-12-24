import React from 'react';

// Import images
import service1 from '../../assets/images/service1.png';
import service2 from '../../assets/images/service2.png';
import service3 from '../../assets/images/service3.png';
import service4 from '../../assets/images/service4.png';
import service5 from '../../assets/images/service5.png';
import service7 from '../../assets/images/service7.png';
import service8 from '../../assets/images/service8.png';

const servicesData = [
  {
    title: "Kashmiri Products",
    description: "Certified crafts with Geographical Indication (GI) tags and guaranteed authenticity.",
    image: service1
  },
  {
    title: "Shopping Experience",
    description: "Advanced search filters, curated collections, and tailored product recommendations.",
    image: service2
  },
  {
    title: "Immersive Visualization",
    description: "Augmented Reality (AR) and Virtual Reality (VR) showrooms for real-life product preview.",
    image: service3
  },
  {
    title: "Eco-Friendly Choices",
    description: "Sustainable packaging and ethically sourced products for conscious consumers.",
    image: service4
  },
  {
    title: "Global Market Access",
    description: "Showcase products to a worldwide audience through a high-traffic e-commerce platform.",
    image: service4
  },
  {
    title: "Enhanced Branding",
    description: "Dedicated vendor pages with storytelling and marketing support to build credibility.",
    image: service4
  },
  {
    title: "Operational Efficiency",
    description: "Tools for automated inventory management, packaging, and logistics support.",
    image: service4
  },
  {
    title: "Development Resources",
    description: "Training programs and workshops to align with global standards and customer expectations.",
    image: service4
  },
  {
    title: "Leadership",
    description: "Encourages eco-friendly production and reduces carbon footprint in the craft industry.",
    image: service4
  },
  {
    title: "Craftsmanship",
    description: "Ensures quality control and compliance with international standards for Kashmiri crafts.",
    image: service4
  },
  {
    title: "Heritage Promotion",
    description: "Preserves traditional craftsmanship and empowers artisan communities.",
    image: service4
  },
  {
    title: "Collaboration Opportunities",
    description: "Builds a strong ecosystem connecting artisans, businesses, and global buyers.",
    image: service4
  }
];

const ServiceArea = () => {
  return (
    <div className="sservice-area">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-12">
            <div className="section-title text-center">
              <h5 className="section-sub-title">Platform Benefits for Buyers / Vendors / Industry</h5>
              <h1 className="section-main-title" style={{ fontSize: '30px' }}>How Professional Services Drive</h1>
              <h1 className="section-main-title" style={{ fontSize: '30px' }}>
                Success for<span>All.</span>
              </h1>
            </div>
          </div>

          <div className="col-lg-12 mb-3">
            <div className="section-title">
              <h5 className="section-sub-title">Platform Benefits for Buyers</h5>
            </div>
          </div>

          {servicesData.slice(0, 4).map((service, index) => (
            <div className="col-xl-3 col-lg-4 col-md-6" key={index}>
              <div className="service-single-box servicesdseds">
                <div className="service-icon">
                  <img src={service.image} alt={service.title} />
                </div>
                <div className="service-content">
                  <h3 className="service-title">{service.title}</h3>
                  <p className="service-text">{service.description}</p>
                </div>
              </div>
            </div>
          ))}

          <div className="col-lg-12 mb-3">
            <div className="section-title">
              <h5 className="section-sub-title">Platform Benefits for Vendors</h5>
            </div>
          </div>

          {servicesData.slice(4, 8).map((service, index) => (
            <div className="col-xl-3 col-lg-4 col-md-6" key={index}>
              <div className="service-single-box servicesdseds">
                <div className="service-icon">
                  <img src={service.image} alt={service.title} />
                </div>
                <div className="service-content">
                  <h3 className="service-title">{service.title}</h3>
                  <p className="service-text">{service.description}</p>
                </div>
              </div>
            </div>
          ))}

          <div className="col-lg-12 mb-3">
            <div className="section-title">
              <h5 className="section-sub-title">Platform Benefits for Industry</h5>
            </div>
          </div>

          {servicesData.slice(8).map((service, index) => (
            <div className="col-xl-3 col-lg-4 col-md-6" key={index}>
              <div className="service-single-box servicesdseds">
                <div className="service-icon">
                  <img src={service.image} alt={service.title} />
                </div>
                <div className="service-content">
                  <h3 className="service-title">{service.title}</h3>
                  <p className="service-text">{service.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="service-shape bounce-animate3">
          <img src={service5} alt="service5" />
        </div>

        <div className="service-shape2">
          <img src={service7} alt="service7" />
        </div>

        <div className="service-shape3 bounce-animate4">
          <img src={service8} alt="service8" />
        </div>
      </div>
    </div>
  );
};

export default ServiceArea;
