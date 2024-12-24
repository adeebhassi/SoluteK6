import React, { useEffect, useRef, useState } from "react";
import review_img from '../../assets/images/review.png';
import slide_shape from '../../assets/images/home-3/slide-shape.png';

const TestimonialSection = () => {
  const scrollableRef = useRef(null); // Reference to the scrollable container
  const [testimonials, setTestimonials] = useState([
    {
      title: "Free Access for Startups",
      description:
        "The platform removes financial barriers, offering free entry to struggling artisans or small businesses, focusing on empowerment and growth without onboarding fees, ensuring accessibility for startups with no initial capital.",
    },
    {
      title: "Dedicated Startup-Friendly Infrastructure",
      description:
        "Startups receive free professional marketing, branding, and digital tools, enabling their crafts to reach global audiences. They can showcase products via e-commerce, exhibitions, and consignment models at no cost, boosting visibility without financial investment.",
    },
    {
      title: "Dedicated Startup-Friendly Infrastructure",
      description:
        "Startups receive free professional marketing, branding, and digital tools, enabling their crafts to reach global audiences. They can showcase products via e-commerce, exhibitions, and consignment models at no cost, boosting visibility without financial investment.",
    },
    {
      title: "Dedicated Startup-Friendly Infrastructure",
      description:
        "Startups receive free professional marketing, branding, and digital tools, enabling their crafts to reach global audiences. They can showcase products via e-commerce, exhibitions, and consignment models at no cost, boosting visibility without financial investment.",
    },
    {
      title: "Dedicated Startup-Friendly Infrastructure",
      description:
        "Startups receive free professional marketing, branding, and digital tools, enabling their crafts to reach global audiences. They can showcase products via e-commerce, exhibitions, and consignment models at no cost, boosting visibility without financial investment.",
    },
    {
      title: "Dedicated Startup-Friendly Infrastructure",
      description:
        "Startups receive free professional marketing, branding, and digital tools, enabling their crafts to reach global audiences. They can showcase products via e-commerce, exhibitions, and consignment models at no cost, boosting visibility without financial investment.",
    },
    {
      title: "Dedicated Startup-Friendly Infrastructure",
      description:
        "Startups receive free professional marketing, branding, and digital tools, enabling their crafts to reach global audiences. They can showcase products via e-commerce, exhibitions, and consignment models at no cost, boosting visibility without financial investment.",
    },
    // More testimonials can be added here
  ]);

  const scrollUp = () => {
    const scrollContainer = scrollableRef.current; // Use scrollableRef directly
    if (scrollContainer) {
      scrollContainer.scrollBy({
        top: -200, // Scroll up by 100px
        behavior: "smooth",
      });
    }
  };
  
  
  const scrollDown = () => {
    const scrollContainer = scrollableRef.current; // Use scrollableRef directly
    if (scrollContainer) {
      scrollContainer.scrollBy({
        top: 200, // Scroll down by 100px
        behavior: "smooth",
      });
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      const scrollContainer = scrollableRef.current;
      if (scrollContainer) {
        scrollContainer.scrollBy({
          top: 200, // Scroll down by 200px automatically
          behavior: "smooth",
        });
      }
    }, 2000); // Interval of 2 seconds

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, []);
  

  useEffect(() => {
    // Ensure the scrollable element has enough height to display content
    if (scrollableRef.current) {
      scrollableRef.current.style.maxHeight = "400px"; // You can adjust this value based on your layout
      scrollableRef.current.style.overflowY = "auto"; // Ensure scrolling works
    }
  }, []);

  return (
    <div className="testimonial-area style-four">
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <div className="section-title text-left">
              <h6 className="section-sub-title">UNIQUE AMERICAN BUSINESS GIFT</h6>
              <h1 className="section-main-title">Supporting Kashmiri</h1>
              <h1 className="section-main-title">
                Artisans & <span>Crafts.</span>
              </h1>
              <p>
                Elevating Kashmiri craftsmanship through American business processes, consumer tastes, and technology
                innovation. We connect you at no cost with North America, representing 80% of the global handicraft
                market.
              </p>
            </div>
            <div className="testi-thumb">
              <div className="d-nonee-display">
                <button onClick={scrollUp} className="scrol-up-mobile d2">
                  <i className="bi bi-arrow-up-circle-fill"></i>
                </button>
                <img className="img-mobile-set" src={review_img} alt="thumb" />
                <button onClick={scrollDown} className="scrol-down-mobile d2">
                  <i className="bi bi-arrow-down-circle-fill"></i>
                </button>
              </div>
              <div className="testi-autor">
                <h4 className="testi-user-name">
                  <span>Platform Uniqueness</span>
                </h4>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="row">
              <section className="splide position-relative">
                <div className="splide__track">
                  <div
                    className="splide__list scrollable"
                    ref={scrollableRef} // Assign ref to the scrollable container
                  >
                    {testimonials.map((testimonial, index) => (
                      <div className="splide__slide" key={index}>
                        <div className="col-lg-12">
                          <div className="testi-box">
                            <div className="testimonial-single-box">
                              <div className="testi-user-rating">
                                <ul className="testi-rating">
                                  {/* You can add a dynamic star rating here */}
                                </ul>
                              </div>
                              <div className="testi-text">
                                <p className="testi-desc">
                                  <b>{testimonial.title}</b>
                                  <br />
                                  {testimonial.description}
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </section>
            </div>
          </div>
          <div className="col-md-1">
            <div className="slide-shape d1">
              <div className="slide-shape-inner slide-shape-inner1">
                <button onClick={scrollUp} className="scrol-up">
                  <i className="bi bi-arrow-up-circle-fill"></i>
                </button>
                <img src={slide_shape} alt="shape" />
                <button onClick={scrollDown} className="scrol-down">
                  <i className="bi bi-arrow-down-circle-fill"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialSection;
