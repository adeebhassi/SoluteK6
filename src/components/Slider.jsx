import React,{useRef} from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import bordershape from '../../src/assets/images/border-shape.png'
import projectBgShapr from "../../src/assets/images/project-bg-shape.png"
import { Link } from 'react-router-dom';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
const CarouselSlider = ({ title, subtitle, slides }) => {
        const sliderRef = useRef(null);
        const handlePrev = () => {
                console.log("Slider")
                if (sliderRef.current) {
                  sliderRef.current.slickPrev();
                }
              };
            
              const handleNext = () => {
                if (sliderRef.current) {
                  sliderRef.current.slickNext();
                }
              };
        
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows:false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
        <div className='project-area styl-two pt-5'>
                <div className='container-fluid'>
                        <div class="row project-section">
                                <div class="col-md-6">
                                <div class="section-title text-left">
                                <h5 class="section-sub-title">Featured Craft Categories</h5>
                                <h1 class="section-main-title">Technology's Evolution</h1>
                                <h1 class="section-main-title">Towards Brilliance</h1>
                                </div>
                                </div>
                                <div class="col-md-6 d-flex justify-content-center" style={{zIndex:100}}>
                                <button
        className="custom-prev custom-arrow"
        onClick={handlePrev}
        // style={{ position: 'absolute', top: '50%', left: '-40px', transform: 'translateY(-50%)' }}
      >
        <FaArrowLeft />
      </button>
      <button
        className="custom-next custom-arrow"
        onClick={() => sliderRef.current.slickNext()}
        // style={{ position: 'absolute', top: '50%', right: '-40px', transform: 'translateY(-50%)' }}
      >
        <FaArrowRight />
      </button>
                                </div>
                        </div>
                        <div class="row project-carousel">
                        <Slider ref={sliderRef} {...settings}>
        {slides.map((slide, index) => (
        
        <div className="project_item owl-carousel px-2">
        <div className="col-xl-12 col-lg-12">
          <div className="project-single-box">
            <div className="project-thumb">
              <img src={slide.image} alt="project-thumb" />
            </div>
            <div className="project-content">
              <h4 className="project-title">
                <Link href="project-details.html">{slide.title}</Link>
              </h4>
              <p className="project-des">{slide.description}</p>
            </div>
            <div className="project-icon">
              <span><i class="bi bi-arrow-right"></i></span>
            </div>
            <div className="project-shape">
              <img src={bordershape} alt="shape" />
            </div>
          </div>
        </div>
        </div>
        ))}
      </Slider>
                        </div>
                </div>

                <div class="project-bg-shape rotateme">
                        <img src={projectBgShapr} alt="shape" />
                </div>
        </div>
  );
};

export default CarouselSlider;




