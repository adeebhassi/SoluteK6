import React from 'react';
import { Link } from 'react-router-dom'; // Import Link for React Router
import heroImage from '../assets/images/sm.png'

const HeroSection = () => {
  return (
    <div className="hero-area d-flex align-items-center">
      <div className="container">
        <div className="row hero align-items-center">
          <div className="col-lg-6 mt-5">
            <div className="hero-contant">
              <h5>De K0SHUR CRAFTS B2B CONNECT</h5>
              <h1>Welcome to DKC Vendor</h1>
              <h1>Partnership Portal Hub</h1>
              <p>
                Join the largest offshore startup network revolutionizing Kashmiri crafts,
                preserving tradition, empowering artisans, redefining excellence, and shaping a global future.
              </p>
              <div className="solutek-btn">
                <Link to="/about-us">Register Now
                  <div className="solutek-hover-btn hover-bx"></div>
                  <div className="solutek-hover-btn hover-bx2"></div>
                  <div className="solutek-hover-btn hover-bx3"></div>
                  <div className="solutek-hover-btn hover-bx4"></div>
                </Link>
              </div>
              <div className="hero-video-icon">
                <a 
                  className="video-vemo-icon venobox vbox-item" 
                  data-vbtype="youtube" 
                  data-autoplay="true"
                  href="https://www.youtube.com/watch?v=Wx48y_fOfiY"
                >
                  <i className="bi bi-play"></i><span></span>
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="hero-thumb hero1">
              {/* Use the imported image here */}
              <img 
                className="hero-thumb-img" 
                src={heroImage} 
                alt="hero-thumb" 
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
