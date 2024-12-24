import React from 'react'
import Breadcrumb from "../../components/Breadcrumb";
import LocationCard from '../../components/About/LocationCrd';
import projectIcon from '../../assets/images/home-two/project-icon.png';
import projectIcon2 from '../../assets/images/home-two/project-icon2.png';
import projectIco3 from '../../assets/images/home-two/project-icon3.png';
import projectIcon4 from '../../assets/images/home-two/project-icon4.png';
import projectrs from '../../assets/images/home-two/project-rs.png';
import projectws from '../../assets/images/home-two/project-ws.png';
import FooterArea from '../../components/FooterArea';


export default function BussinessLocation() {
  const breadcrumbLinks = [
      { label: "Home", path: "/" },
      { label: "Bussines Location" },
    ];
    const locations = [
        {
          iconSrc: projectIcon,
          title: "Head Office",
          description: "USA, Virginia – Fairfax"
        },
        {
          iconSrc: projectIcon2,
          title: "Communications",
          description: "USA, Virginia Beach"
        },
        {
          iconSrc: projectIco3,
          title: "Regional USA",
          description: "USA, CA – Ridgecrest"
        },
        {
          iconSrc: projectIcon4,
          title: "Call Centre Office",
          description: "USA, Texas – Dallas"
        },
        {
          iconSrc: projectIcon4,
          title: "USA Warehouse",
          description: "Virginia – Front Royal"
        },
        {
          iconSrc: projectIcon4,
          title: "India Warehouse",
          description: "J & K – Srinagar"
        },
        {
          iconSrc: projectIcon4,
          title: "USA Logistics",
          description: "Illinois – Chicago"
        },
        {
          iconSrc: projectIcon4,
          title: "India Logistics",
          description: "Delhi – New Delhi"
        },
        {
          iconSrc: projectIcon4,
          title: "Design Studio",
          description: "J & K – Srinagar"
        },
        {
          iconSrc: projectIcon4,
          title: "Photo Studio",
          description: "J & K – Srinagar"
        }
      ];
    return (
      <div>
        <Breadcrumb title="Bussines Location" links={breadcrumbLinks} />
        <div className="project-area mt-3 mb-3 style-three">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-7">
            <div className="section-title text-left">
              <h5 className="section-sub-title">OUR BUSINESS LOCATION</h5>
              <h1 style={{ fontSize: "29px !important" }} className="section-main-title">Operational Infrastructure</h1>
              <h1 className="section-main-title">Seamless Connectivity, Strategic Reach, Global Excellence.</h1>
            </div>
          </div>
          <div className="col-lg-5">
            <div className="section-title text-left">
              <p className="section-des text-white">
                DKC B2B Connect Infrastructure reflects a robust and strategic approach to operations, enabling efficient logistics, global connectivity, and strong support for artisans, vendors, and customers worldwide.
              </p>
            </div>
          </div>
        </div>
        <div className="row project-bs">
          {locations.map((location, index) => (
            <LocationCard 
              key={index}
              iconSrc={location.iconSrc}
              title={location.title}
              description={location.description}
            />
          ))}
          <div className="col-xl-6 col-lg-6 col-md-6">
            <div className="mt-3 clskdsd">
              <p className="bullet-after">Fueling Expansion Through Operational Synergy Worldwide.</p>
              <p className="bullet-after">Logistics Streamlined for Maximum Efficiency and Impact.</p>
              <p className="bullet-after">Bridging Markets, Unlocking Potential, Delivering Growth.</p>
              <p className="bullet-after">Innovative Foundations for Limitless Global Connectivity.</p>
              <p className="bullet-after">Expanding Horizons, Strengthening Networks, Achieving Goals.</p>
            </div>
          </div>
        </div>
      </div>
      <div className="project-bg-shape1 moveLeftBounce">
        <img src={projectrs} alt="shape" />
      </div>
      <div className="project-bg-shape2 bounce-animate3">
        <img src={projectws} alt="shape" />
      </div>

        </div>
        <FooterArea/>
      </div>
    );
}
