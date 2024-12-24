import React, { useState } from 'react';

const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="mobile-menu-area sticky d-sm-block d-md-block d-lg-none w-100">
      <div className="menu-header" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '10px' }}>
        <h4 className="menu-name text-white">SoluteK</h4>
        <button className="menu-toggle-button" onClick={toggleMenu} style={{ border: 'none', background: 'none', fontSize: '24px', cursor: 'pointer' ,maxWidth:'30px'}}>
          {isOpen ? 'X' : '☰'}
        </button>
      </div>
      {isOpen && (
        <div className="mobile-menu open">
          <nav className="solutek_menu">
            <ul className="nav_scroll">
              <li>
                <a href="index.html">Home</a>
              </li>
              <li>
                <a href="#">
                  About Us<i className="bi bi-chevron-down"></i>
                </a>
                <ul className="sub-menu">
                  <li><a href="mission-vision.html">Mission Vision & Value</a></li>
                  <li><a href="brand-story.html">Brand Story</a></li>
                  <li><a href="brand-credential.html">Brand Credentials</a></li>
                  <li><a href="bussiness-location.html">Bussiness Location</a></li>
                  <li><a href="bussiness-niche.html">Bussiness Niche</a></li>
                  <li><a href="team.html">Team</a></li>
                  <li><a href="contact.html">Contact Us</a></li>
                </ul>
              </li>
              <li>
                <a href="#">
                  Our Partnership<i className="bi bi-chevron-down"></i>
                </a>
                <ul className="sub-menu">
                  <li><a href="ecommerce.html">E Commerce</a></li>
                  <li><a href="brick-mortar.html">Brick & Mortar</a></li>
                  <li><a href="import-export.html">Import Export</a></li>
                  <li><a href="consignment.html">Consignment</a></li>
                  <li><a href="exhibition.html">Exhibition</a></li>
                  <li><a href="subsidary.html">Subsidary</a></li>
                  <li><a href="franchise.html">Franchise</a></li>
                </ul>
              </li>
              <li>
                <a href="process-framework.html">Partnership Process</a>
              </li>
              <li>
                <a href="contact.html">Partnership Registration</a>
              </li>
              <li>
                <a href="book-appointment.html">Book Appointment</a>
              </li>
            </ul>
          </nav>
        </div>
      )}
    </div>
  );
};

export default MobileMenu;
