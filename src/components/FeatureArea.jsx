import React from 'react';
import feature1 from '../assets/images/1.png'; // Import images
import feature2 from '../assets/images/2.png';
import feature3 from '../assets/images/3.png';
import feature4 from '../assets/images/4.png';
import feature5 from '../assets/images/5.png';
import feature6 from '../assets/images/6.png';
import feature7 from '../assets/images/7.png';

const features = [
  {
    img: feature1,
    title: 'E Commerce',
    text: 'Unleashing digital dominance for growth.'
  },
  {
    img: feature2,
    title: 'Brick & Mortar',
    text: 'Building physical trust, driving community connections.'
  },
  {
    img: feature3,
    title: 'Import Export',
    text: 'Global pathways for seamless trade evolution.'
  },
  {
    img: feature4,
    title: 'Consignment',
    text: 'Shared ambitions, amplified mutual prosperity.'
  },
  {
    img: feature5,
    title: 'Exhibition',
    text: 'Elevating brands on global pedestals.'
  },
  {
    img: feature6,
    title: 'Subsidary',
    text: 'Strategic empowerment through autonomous expansion.'
  },
  {
    img: feature7,
    title: 'Franchise',
    text: 'Strategic empowerment through autonomous expansion.'
  }
];

const FeatureArea = () => {
  return (
    <div className="feature-area">
  <div className="container">
    <div className="row about align-items-center">
      {features.map((feature, index) => (
        <div key={index} className="col-6 col-sm-6 col-md-4 col-lg-2">
          {/* Feature Box */}
          <div className="feature-sinble-single-box">
            <div className="feature-icon">
              <img src={feature.img} alt={`feature-${index + 1}`} className="img-fluid" />
            </div>
            <div className="feature-content">
              <h3 className="feature-title">{feature.title}</h3>
              <p className="feature-text">{feature.text}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
</div>

  );
};

export default FeatureArea;
