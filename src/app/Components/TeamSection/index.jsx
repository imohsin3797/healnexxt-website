'use client';
import {
  FaFacebookF,
  FaInstagram,
  FaPinterestP,
  FaTwitter,
} from "react-icons/fa";
import Slider from "react-slick";
import SectionHeading from "../SectionHeading";
import Spacing from "../Spacing";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";

const TeamSection = ({ data, bgColor, variant, hr }) => {
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
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 4,
    swipeToSlide: true,
    appendDots: (dots) => (
      <div>
        <ul>{dots}</ul>
      </div>
    ),
    dotsClass: `${variant}`,
    responsive: [
      {
        breakpoint: 1199,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="about-team" style={{ backgroundColor: '#EADFD4', paddingTop: 0 }}>
      <div className="container" ref={sectionRef}>
        <div className={`team-title-section ${isInView ? 'animate-in' : ''}`}>
          <SectionHeading
            SectionSubtitle={data.subtitle}
            SectionTitle={data.title}
            variant={"text-center"}
          />
        </div>

        <div className="cs_height_50 cs_height_lg_50" />
        <div className="cs_slider cs_style_1 cs_slider_gap_24">
          <div className="cs_slider_container">
            <div className="cs_slider_wrapper">
              <Slider {...settings}>
                {data?.sliderData.map((item, index) => (
                  <div className="cs_slide" key={index}>
                    <div
                      className={`cs_team cs_style_1 ${
                        bgColor ? "cs_accent_bg" : "cs_blue_bg"
                      } `}
                    >
                      <div
                        className={`cs_team_shape ${
                          bgColor ? "cs_blue_bg" : "cs_accent_bg "
                        }`}
                      />
                      <Link href={item.link} className="cs_team_thumbnail">
                      <Image src={item.imageUrl} alt="img" width={306} height={429}   />
                      </Link>
                      <div className="cs_team_bio">
                        <h3 className="cs_team_title cs_extra_bold mb-0">
                          <Link href={item.link}>{item.name}</Link>
                        </h3>
                        <p className="cs_team_subtitle">{item.profession}</p>
                        <div className="cs_social_btns cs_style_1">
                          <Link href={item.facebook} className="cs_center">
                            <i>
                              <FaFacebookF />
                            </i>
                          </Link>
                          <Link href={item.pinterest} className="cs_center">
                            <i>
                              <FaPinterestP />
                            </i>
                          </Link>
                          <Link href={item.twitter} className="cs_center">
                            <i>
                              <FaTwitter />
                            </i>
                          </Link>
                          <Link href={item.instagram} className="cs_center">
                            <i>
                              <FaInstagram />
                            </i>
                          </Link>
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
      {bgColor && (
        <div className="cs_team_bg_dark" style={{ backgroundColor: '#23343B' }}>
        <div className="cs_team_bg_white cs_white_bg" style={{ backgroundColor: '#EADFD4' }} />
        </div>
      )}
      <Spacing lg={80} md={120} />

      {hr && <hr style={{ borderColor: '#23343B', backgroundColor: '#23343B' }} />}

      <style jsx>{`
        /* Team Section Title Animation */
        .team-title-section {
          opacity: 0;
          transform: translateY(30px);
          transition: opacity 1s ease-out, transform 1s ease-out;
          will-change: opacity, transform;
        }

        .team-title-section.animate-in {
          opacity: 1;
          transform: translateY(0);
        }
      `}</style>
    </div>
  );
};

export default TeamSection;
