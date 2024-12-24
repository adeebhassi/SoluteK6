import React from 'react';

const WhyChooseUsSection = ({ title, subtitle, bgImage, items }) => {
  return (
    <section
      className="cs_why_chose_us cs_style_1 cs_bg_filed overflow-hidden"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="cs_height_115 cs_height_lg_70"></div>
      <div className="container">
        <div className="row">
          <div className="col-lg-5"></div>
          <div className="col-lg-7">
            <h3>{title}</h3>
            <h6>{subtitle}</h6>
            <div className="row">
              {items.map((item, index) => (
                <div className="col-lg-6 mt-2" key={index}>
                  <div className="bor-red">
                    <h4>{item.heading}</h4>
                    <p>{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="cs_height_115 cs_height_lg_70"></div>
    </section>
  );
};

export default WhyChooseUsSection;
