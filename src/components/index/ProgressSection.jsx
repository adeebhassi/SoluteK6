import React, { useEffect, useRef } from "react";
import pattern1 from '../../assets/images/pattern-1.png';
const ProgressSection = () => {
  const scrollContainerRef = useRef(null); // Reference to the scroll container

  const handleScrollLeft = () => {
    if (scrollContainerRef.current) {
      // Scroll left by 100px or a desired amount
      scrollContainerRef.current.scrollBy({ left: -100, behavior: 'smooth' });
    }
  };

  const handleScrollRight = () => {
    console.log('uzc')
    if (scrollContainerRef.current) {
      // Scroll right by 100px or a desired amount
      scrollContainerRef.current.scrollBy({ left: 100, behavior: 'smooth' });
    }
  };

  useEffect(() => {
    // Initialize all progress circles
    const progressCircles = document.querySelectorAll('.progress-circle');

    progressCircles.forEach(circle => {
      const progress = parseInt(circle.getAttribute('data-progress'), 10);
      const progressValue = circle.querySelector('.progress-value');
      
      let startValue = 0;
      const duration = 2000; // 2 seconds
      const targetValue = progress;
      
      const incrementRate = targetValue / (duration / 16); // Dividing by ~16ms (approximation of 60fps)
      
      let lastTime = performance.now();

      const animateProgress = (currentTime) => {
        const elapsedTime = currentTime - lastTime;
        
        if (elapsedTime >= 16) {
          lastTime = currentTime;

          // Increment the progress value
          startValue = Math.min(startValue + incrementRate, targetValue);
          progressValue.textContent = Math.round(startValue);

          if (startValue < targetValue) {
            requestAnimationFrame(animateProgress);
          } else {
            progressValue.textContent = targetValue;
          }
        } else {
          requestAnimationFrame(animateProgress);
        }
      };

      requestAnimationFrame(animateProgress);
    });
  }, []);

  return (
    <section
      className="progress-section mt-3 py-5 text-white"
    >
      <div className="container">
        <div className="row">
          <div className="section-title">
            <h5 className="section-sub-title1">
              Our Registered Buyer Network
            </h5>
          </div>
          <div className="text-center">
            <h3 className="text-white set-fon">
              Unlock New Business Opportunities with Our Platform's Registered
              Buyer Network
            </h3>
          </div>
        </div>
        
        <div className="last-sec" ref={scrollContainerRef}>
            {[
              { title: "Individual", progress: 1523 },
              { title: "Retailers", progress: 351 },
              { title: "Wholesalers", progress: 311 },
              { title: "E-commerce Platforms", progress: 18 },
              { title: "Interior Designers", progress: 68 },
              { title: "Corporate Buyers", progress: 8 },
              { title: "Art Collectors", progress: 205 },
              { title: "Importers/Exporters", progress: 52 },
              { title: "Museums and Galleries", progress: 7 },
              { title: "Hospitality Chains", progress: 21 },
              { title: "Fashion Designers", progress: 28 }
            ].map((item, index) => (
              <div className="progress-block item" key={index}>
                <div className="progress-circle" data-progress={item.progress}>
                  <div className="progress-value">0</div>
                </div>
                <p className="progress-title mt-3">{item.title}</p>
              </div>
            ))}
        </div>
        <div className="coutingsec scroll-section d-flex justify-content-center mb-2">
          <button className="scrol-left w-25" onClick={handleScrollLeft}>
            <i className="bi bi-arrow-left-circle-fill"></i>
          </button>
          <button className="scrol-right w-25" onClick={handleScrollRight}>
            <i className="bi bi-arrow-right-circle-fill"></i>
          </button>
        </div>
        </div>
      
    </section>
  );
};

export default ProgressSection;
