import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  // State to handle sticky class toggle
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    // Function to toggle sticky class based on scroll position
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    // Add scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      id="sticky-header"
      className={`solutek_nav_manu ${isSticky ? "sticky" : ""}`}
    >
      <div className="container-fluid">
        <div className="row d-flex align-items-center">
          <div className="col-lg-0"></div>
          <div className="col-lg-10">
            <nav className="solutek_menu">
              <ul className="nav_scroll">
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="#">
                    About Us<i className="bi bi-chevron-down"></i>
                  </Link>
                  <ul className="sub-menu">
                    <li>
                      <Link to="/mission-vision">Mission Vision & Value</Link>
                    </li>
                    <li>
                      <Link to="/brand-story">Brand Story</Link>
                    </li>
                    <li>
                      <Link to="/brand-credential">Brand Credentials</Link>
                    </li>
                    <li>
                      <Link to="/bussiness-location">Bussiness Location</Link>
                    </li>
                    <li>
                      <Link to="/bussiness-niche">Bussiness Niche</Link>
                    </li>
                    <li>
                      <Link to="/team">Team</Link>
                    </li>
                    <li>
                      <Link to="/contact">Contact Us</Link>
                    </li>
                  </ul>
                </li>
                <li>
                  <Link to="#">
                    Our Partnership<i className="bi bi-chevron-down"></i>
                  </Link>
                  <ul className="sub-menu">
                    <li>
                      <Link to="/ecommerce">E Commerce</Link>
                    </li>
                    <li>
                      <Link to="/brick-mortar">Brick & Mortar</Link>
                    </li>
                    <li>
                      <Link to="/import-export">Import Export</Link>
                    </li>
                    <li>
                      <Link to="/consignment">Consignment</Link>
                    </li>
                    <li>
                      <Link to="/exhibition">Exhibition</Link>
                    </li>
                    <li>
                      <Link to="/subsidary">Subsidary</Link>
                    </li>
                    <li>
                      <Link to="/franchise">Franchise</Link>
                    </li>
                  </ul>
                </li>
                <li>
                  <Link to="/process-framework">Partnership Process</Link>
                </li>
                <li>
                  <Link to="/contact">Partnership Registration</Link>
                </li>
                <li>
                  <Link to="/book-appointment">Book Appointment</Link>
                </li>
              </ul>
            </nav>
          </div>
          <div className="col-lg-2">
            <div className="header-btn">
              <Link to="/contact">Login</Link>
              <Link to="/contact">Register</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
