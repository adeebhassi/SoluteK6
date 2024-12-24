import React from 'react';
import aboutThumb from '../../assets/images/about-thumb.png';
import aboutShape from '../../assets/images/about1.png';
import aboutIcon from '../../assets/images/about4.png';

const AboutSection = () => {
  return (
    <div className="about-area mt-5">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <div className="about-thumb">
              <img src={aboutThumb} alt="about-thumb" />
              <div className="about-shape">
                <img src={aboutShape} alt="about1" />
              </div>
              <h4 className="about-title">Partnership Designed For You</h4>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="section-title text-left">
              <h5 className="section-sub-title">
                DKC e-commerce platform Partnership Overview
              </h5>
              <h1 className="section-main-title" style={{ fontSize: '30px' }}>
                Empowering Kashmir Handicraft
              </h1>
              <h1 className="section-main-title" style={{ fontSize: '30px' }}>
                Vendors for <span>US Digital Market.</span>
              </h1>
              <p className="section-title-descr">
                Transform your business with De Koshur Crafts’ E-Commerce Partnership program, designed to integrate
                Kashmiri artisans and businesses into a powerful digital ecosystem. With advanced tools, streamlined
                operations, and global outreach, we bridge the gap between traditional craftsmanship and modern consumer
                expectations.
              </p>
            </div>
            <div className="about-box d-flex align-items-center">
              <div className="about-icon">
                <img src={aboutIcon} alt="about4" />
              </div>
              <div className="about-tiltle">
                <h3>Cloud-Based Digital Handicraft Ecosystem</h3>
              </div>
            </div>
            <div className="about-text">
              <p>
                A platform that ensures immutable provenance, integrates digital GI tags, provides counterfeit
                protection, enables luxury product positioning, incorporates cultural storytelling, facilitates
                real-time inventory management, and offers dynamic price valuation for every product.
              </p>
            </div>
            <div className="solutek-btn">
              <a style={{ fontSize: '13px' }} href="#">
                The World’s Largest E-Commerce Platform for Kashmir Crafts <br />
                <span style={{ fontSize: '17px' }}>Plugging Gaps in the Kashmir Handicraft Sector</span>
                <div className="solutek-hover-btn hover-bx"></div>
                <div className="solutek-hover-btn hover-bx2"></div>
                <div className="solutek-hover-btn hover-bx3"></div>
                <div className="solutek-hover-btn hover-bx4"></div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
