import React from 'react';
import heroShape from '../../assets/images/home-two/hero-btn-shape.png';
import ecommerceHero from '../../assets/images/ecommercehero.png';

const HeroSection = () => {
  return (
    <div className="hero-area style-two d-flex align-items-center">
      <div className="container">
        <div className="row hero align-items-center">
          <div className="col-lg-6">
            <div className="hero-contant asfasd">
              <h5>DKC ECOMMERCE VENDOR PARTNERSHIP</h5>
              <h4>Supporting Kashmir's Struggling Artisans,</h4>
              <h4>Businesses, and Startups</h4>
              <p>Empowering the Heart of Kashmir: Reviving Craft, Innovation, and Opportunity</p>
              <div className="solutek-btn">
                <a href="#" className="btn-2">Kashmir Handicraft Sector Exclusively</a>
              </div>
              <div className="hero-btn-shape bounce-animate-3">
                <img src={heroShape} alt="shape" />
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="hero-thumb">
              <img src={ecommerceHero} alt="hero-thumb" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
