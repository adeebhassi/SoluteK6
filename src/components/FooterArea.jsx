import React from "react";
import { Link } from "react-router-dom";
import footer_logo from '../assets/images/footer-logo.png'
const FooterArea = () => {
  const usefulLinks = [
    { label: "About Company", path: "/about-us" },
    { label: "Meet Our Team", path: "/team" },
    { label: "Latest Blog", path: "/blog-grid" },
    { label: "Contact Us", path: "/contact" },
    { label: "Testimonials", path: "/testimonial" },
  ];

  const servicesLinks = [
    { label: "About Company", path: "/about-us" },
    { label: "Meet Our Team", path: "/team" },
    { label: "Latest Blog", path: "/blog-grid" },
    { label: "Contact Us", path: "/contact" },
    { label: "FAQ", path: "/faq" },
  ];

  const footerLinks = [
    { label: "Privacy Policy", path: "/privacy-policy" },
    { label: "Supports", path: "/supports" },
  ];

  return (
    <div className="footer-area">
      <div className="container-fluid">
        <div className="row footer">
          {/* Footer Logo and Text */}
          <div className="col-lg-4 col-md-6 col-sm-6">
            <div className="footer-widget">
              <div className="footer-logo">
                <Link to="/">
                  <img src={footer_logo} alt="footer-logo" />
                </Link>
              </div>
              <p className="footer-widget-text">
                Globally monetize plug-and-play data it solu monotonectally disseminate oriented busine multifunctional mind design.
              </p>
              <div className="footer-social">
                <div className="footer-widget-social">
                  <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-facebook-f"></i>
                  </a>
                  <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-twitter"></i>
                  </a>
                  <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-linkedin-in"></i>
                  </a>
                  <a href="https://pinterest.com" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-pinterest-p"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Useful Links */}
          <div className="col-lg-2 col-md-6 col-sm-6">
            <div className="footer-widget left">
              <div className="widget-title">
                <h2>Useful Links</h2>
              </div>
              <ul>
                {usefulLinks.map((link, index) => (
                  <li key={index}>
                    <Link to={link.path}>{link.label}</Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Services Links */}
          <div className="col-lg-3 col-md-6 col-sm-6">
            <div className="footer-widget left">
              <div className="widget-title">
                <h2>Services</h2>
              </div>
              <ul>
                {servicesLinks.map((link, index) => (
                  <li key={index}>
                    <Link to={link.path}>{link.label}</Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Newsletter */}
          <div className="col-lg-3 col-md-6 col-sm-6">
            <div className="footer-widget-newsletter">
              <div className="widget-title">
                <h2>Newsletter</h2>
              </div>
              <p className="newsletter-text">
                Globally monetize plug-and-play data it solu monotonectally disseminate oriented busine multifunctional mind design.
              </p>
              <div className="Subscribe-form2">
                <form>
                  <div className="form-field2">
                    <input type="email" name="EMAIL" placeholder="Enter Your E-mail" required />
                    <button className="subscribe-button" type="submit">
                      <i className="bi bi-send"></i>
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom Links */}
        <div className="row copyright">
          <div className="col-lg-6 col-md-6 col-sm-6">
            <div className="copyright-text">
              <p>© Copyright 2024 By Solutek</p>
            </div>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-6">
            <div className="copyright-list">
              <ul>
                {footerLinks.map((link, index) => (
                  <li key={index}>
                    <Link to={link.path}>{link.label}</Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterArea;
