import React from 'react';

const LocationCard = ({ iconSrc, title, description }) => {
  return (
    <div className="col-xl-3 col-lg-4 col-md-6">
      <div className="project-single-box down box-4">
        <div className="project-icon">
          <img src={iconSrc} alt="icon" />
        </div>
        <div className="projects-content">
          <h4 className="project-title"><a href="project-details.html">{title}</a></h4>
          <p className="project-des">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default LocationCard;
