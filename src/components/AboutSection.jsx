import React from 'react';

const AboutSection = ({ title, color_title, subtitle, description, items, image, extraText }) => {
  return (
    <div className="about-section">
      <div className="container">
        <div className="row align-items-center">
          {/* Image Section */}
          <div className="col-lg-6">
            <div className="about-thumb">
              <img src={image} alt="thumb" />
            </div>
          </div>

          {/* Content Section */}
          <div className="col-lg-6">
            <div className="about-contact">
              <div className="section-title text-left">
                <h6 className="section-sub-title" style={{ fontSize: '15px' }}>
                  {subtitle} 
                </h6>
                <h1 className="section-main-title" style={{ fontSize: '20px' }}>
                  {title} <span>{color_title}</span>
                </h1>
                <p className="section-title-descr">{description}</p>
              </div>

              {/* List Section */}
              <div className="about-item-list">
                <ul>
                  {items.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>

              {/* Extra Text */}
              {extraText && (
                <div className="ec-text">
                  <h6 style={{ color: '#ff3d00' }}>{extraText.title}</h6>
                  <p>{extraText.description}</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
