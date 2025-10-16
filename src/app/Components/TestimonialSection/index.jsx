"use client"
import { useState, useEffect, useRef } from "react";
import Slider from "react-slick";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import Image from "next/image";
const TestimonialSection = ({ data }) => {
  const [rating, setRating] = useState();
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

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    swipeToSlide: true,
    appendDots: (dots) => (
      <div>
        <ul>{dots}</ul>
      </div>
    ),
    dotsClass: `cs_pagination cs_style_2 cs_accent_color cs_flex_left`,
  };
  return (
    <>
      <div className="container" ref={sectionRef}>
        <div className="row cs_gap_y_50 align-items-center">
          <div className={`col-lg-5 testimonial-left ${isInView ? 'animate-in' : ''}`}>
            <div className="cs_testimonial_thumbnail">
            <Image src={data.thumbnail} alt="img" width={2000} height={1667} style={{width: '100%', height: 'auto'}}  />
            </div>
          </div>
          <div className={`col-lg-7 testimonial-right ${isInView ? 'animate-in' : ''}`}>
            <div className="cs_testimonial_content">
              <div className="cs_slider cs_style_1 cs_slider_gap_24 position-relative">
                <div className="cs_slider_container">
                  <div className="cs_slider_wrapper">
                    <Slider {...settings}>
                      {data.testimonials.map((testimonial, index) => (
                        <div key={index} className="cs_slide">
                          <div className="cs_testimonial cs_style_1">
                            <div className="cs_testimonial_info">
                              <div className="cs_rating_container">
                                <Rating
                                  style={{ maxWidth: 150 }}
                                  value={testimonial.rating}
                                  onChange={() => setRating(testimonial.rating)}
                                  isRequired
                                />
                              </div>
                              <p className="cs_testimonial_subtitle">
                                {testimonial.subtitle}
                              </p>
                            </div>
                            <div className="cs_avatar cs_style_1">
                              <div className="cs_avatar_thumbnail cs_center">
                              <Image src={testimonial.avatar} alt="img" width={73} height={73}   />
                              </div>
                              <div className="cs_avatar_info">
                                <h3 className="cs_avatar_title">
                                  {testimonial.name}
                                </h3>
                                <p className="cs_avatar_subtitle mb-0">
                                  {testimonial.position}
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </Slider>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        /* Testimonial Section Scroll Animations */
        .testimonial-left {
          opacity: 0;
          transform: translateX(-50px);
          transition: opacity 1.2s ease-out, transform 1.2s ease-out;
          will-change: opacity, transform;
        }

        .testimonial-right {
          opacity: 0;
          transform: translateX(50px);
          transition: opacity 1.2s ease-out, transform 1.2s ease-out;
          will-change: opacity, transform;
        }

        .testimonial-left.animate-in {
          opacity: 1;
          transform: translateX(0);
          transition-delay: 0.2s;
        }

        .testimonial-right.animate-in {
          opacity: 1;
          transform: translateX(0);
          transition-delay: 0.4s;
        }

        /* Mobile Responsiveness */
        @media (max-width: 991.98px) {
          .testimonial-left,
          .testimonial-right {
            margin-bottom: 2rem;
          }
          
          .cs_testimonial_thumbnail {
            text-align: center;
            margin-bottom: 2rem;
          }
          
          .cs_testimonial_thumbnail img {
            max-width: 100%;
            height: auto;
          }
        }

        @media (max-width: 767.98px) {
          .testimonial-left,
          .testimonial-right {
            margin-bottom: 1.5rem;
          }
          
          .cs_testimonial_thumbnail {
            margin-bottom: 1.5rem;
          }
          
          .cs_testimonial_thumbnail img {
            width: 100%;
            max-width: 400px;
          }
        }
      `}</style>
    </>
  );
};

export default TestimonialSection;
