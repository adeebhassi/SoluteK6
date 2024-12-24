import React, { useState, useEffect } from 'react';

const CounterArea = () => {
  const counters = [
    { target: 36, range: "(1-100)" },
    { target: 72, range: "(101-150)" },
    { target: 108, range: "(151-199)" },
    { target: 144, range: "(200-249)" },
    { target: 180, range: "(250-299)" },
    { target: 360, range: "(300+)" },
  ];

  const [counterValues, setCounterValues] = useState(
    counters.map(() => 0)
  );

  useEffect(() => {
    // Function to animate the counter
    const animateCounter = (index, target) => {
      let current = 0;
      const increment = target / 200; // Target divided by 200ms (for smooth counting)
      const interval = setInterval(() => {
        current += increment;
        if (current >= target) {
          current = target;
          clearInterval(interval); // Stop the animation when the target is reached
        }
        setCounterValues(prevValues => {
          const newValues = [...prevValues];
          newValues[index] = Math.floor(current); // Update the specific counter
          return newValues;
        });
      }, 10); // Update every 10ms
    };

    counters.forEach((counter, index) => {
      animateCounter(index, counter.target);
    });
  }, []);

  return (
    <div className="counter-area">
      <div className="container">
        <div className="row counter-item">
          {counters.map((counter, index) => (
            <div className="col-lg-2 col-md-6 col-sm-6" key={index}>
              <div className="counter-single-box">
                <div className="counter-content">
                  <span>$</span>
                  <h4 className="counter">{counterValues[index]}</h4>
                  <p>Early Adopters</p>
                  <span className="mt-2 fs-3">{counter.range}</span>
                </div>
              </div>
            </div>
          ))}
          <div className="col-lg-12 col-md-12 mt-4 col-sm-12 col-xs-12">
            <div className="text-center font-weight-bold">
              <h4>Early Adopter Yearly De Koshur Crafts-USA Ecommerce Platform Fees</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CounterArea;
