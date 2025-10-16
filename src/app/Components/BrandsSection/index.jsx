"use client"
import Slider from "react-slick";
import Spacing from "../Spacing";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";

const BrandsSlider = ({ data = [], hr }) => {
  const [isInView, setIsInView] = useState(false);
  const sectionRef = useRef(null);

  // Intersection Observer to detect when section comes into view
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
        }
      },
      {
        threshold: 0.3, // Trigger when 30% of the section is visible
        rootMargin: '0px 0px -50px 0px' // Start animation slightly before fully in view
      }
    );

    const currentRef = sectionRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 5,
    swipeToSlide: true,
    arrows: false,
  };

  return (
    <>
      <div className="container" ref={sectionRef}>
        <div className={`cs_slider cs_style_1 cs_slider_gap_24 brands-slider ${isInView ? 'animate-in' : ''}`}>
          <div className="cs_slider_wrapper">
            <Slider {...settings}>
              {data.map((brand, index) => (
                <div key={index} className="cs_slide">
                  <div 
                    className="cs_brand cs_style_1 text-center"
                    style={{
                      ':hover': {
                        color: '#F26F62'
                      }
                    }}
                  >
                    <Image src={brand.image} alt="img" width={122} height={23} />
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
      <Spacing lg={30} md={40} />
      {hr && <hr />}

      <style jsx>{`
        /* Brands Section Scroll Animations */
        .brands-slider {
          opacity: 0;
          transform: translateY(30px);
          transition: opacity 1s ease-out, transform 1s ease-out;
          will-change: opacity, transform;
        }

        .brands-slider.animate-in {
          opacity: 1;
          transform: translateY(0);
        }

        /* Mobile Responsiveness */
        @media (max-width: 767.98px) {
          .cs_brand img {
            max-width: 100%;
            height: auto;
          }
          
          .cs_brand {
            padding: 1rem 0.5rem;
          }
        }

        @media (max-width: 575.98px) {
          .cs_brand {
            padding: 0.75rem 0.25rem;
          }
          
          .cs_brand img {
            max-width: 80px;
            height: auto;
          }
        }
      `}</style>
    </>
  );
};

export default BrandsSlider;
