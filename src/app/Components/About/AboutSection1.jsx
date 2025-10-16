"use client";
import { FaAnglesRight, FaRegCircleCheck } from "react-icons/fa6";
import { useState, useEffect, useRef } from "react";
import SectionHeading from "../SectionHeading";
import Button from "../Buttons";
import Image from "next/image";

const AboutSection1 = ({ data }) => {
  const [isInView, setIsInView] = useState(false);
  const sectionRef = useRef(null);

  // Intersection Observer to detect when section comes into view
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsInView(true);
      },
      {
        threshold: 0.2, // Trigger when 20% of the section is visible
        rootMargin: "0px 0px -50px 0px", // Start animation slightly before fully in view
      }
    );

    const el = sectionRef.current;
    if (el) observer.observe(el);

    return () => {
      if (el) observer.unobserve(el);
    };
  }, []);

  return (
    <>
      <div className="container" ref={sectionRef}>
        <div className="row cs_gap_y_40">
          <div className="col-lg-6">
            <div
              className={`cs_about_thumb about-left-card ${
                isInView ? "animate-in" : ""
              }`}
            >
              <Image
                src="/assets/img/about_img_3.png"
                alt="img"
                width={680}
                height={751}
              />
              <div
                className="cs_experience_box cs_center"
                data-aos="fade-down"
                /* force the circle color */
                style={{
                  backgroundColor: "#23343B",
                  color: "#ffffff",
                  borderColor: "#23343B",
                }}
              >
                <p
                  className="cs_experience_box_number"
                  style={{ color: "#ffffff" }}
                >
                  {data.experienceYears}
                </p>
                <p
                  className="cs_experience_box_title"
                  style={{ color: "#ffffff" }}
                >
                  {data.experienceTitle}
                </p>
              </div>
            </div>
          </div>

          <div className="col-lg-6">
            <div
              className={`cs_about_content about-right-card ${
                isInView ? "animate-in" : ""
              }`}
            >
              <SectionHeading
                SectionSubtitle={data.sectionSubtitle}
                SectionTitle={data.sectionTitle}
              />

              <p className="cs_about_text">{data.aboutText}</p>

              <div className="cs_iconbox_1_wrap">
                <div className="cs_iconbox cs_style_1">
                  <div className="cs_iconbox_head">
                    <div className="cs_iconbox_icon cs_center">
                      <Image
                        src={data.iconUrl}
                        alt="img"
                        width={26}
                        height={26}
                      />
                    </div>
                    <h3 className="cs_iconbox_title m-0">{data.title}</h3>
                  </div>
                  <div className="cs_iconbox_img">
                    <Image
                      src={data.imgUrl}
                      alt="img"
                      width={200}
                      height={81}
                    />
                  </div>
                </div>

                <div className="cs_iconbox cs_style_1">
                  <div className="cs_iconbox_img">
                    <Image
                      src={data.imgUrl2}
                      alt="img"
                      width={200}
                      height={81}
                    />
                  </div>
                  <div className="cs_iconbox_head">
                    <div className="cs_iconbox_icon cs_center">
                      <Image
                        src={data.iconUrl2}
                        alt="img"
                        width={25}
                        height={29}
                      />
                    </div>
                    <h3 className="cs_iconbox_title m-0">{data.title2}</h3>
                  </div>
                </div>
              </div>

              <div
                className="cs_about_iconbox"
                style={{ textAlign: "center" }}
              >
                <div className="cs_about_iconbox_icon cs_center">
                  <i>
                    <FaRegCircleCheck />
                  </i>
                </div>
                <p className="cs_about_iconbox_subtitle">
                  {data.aboutIconboxSubtitle}
                </p>
              </div>

              {/* BUTTON: centered on the text block above */}
              <div className="cs_about_btns">
                <div className="cs_about_btns_inner">
                  <Button
                    btnIcons={<FaAnglesRight />}
                    btnText={data.aboutMoreText}
                    variant={"cs_btn cs_style_1 cs_color_1"}
                    btnUrl={data.aboutMoreLink}
                  />
                </div>
              </div>
              {/* END BUTTON */}
            </div>
          </div>
        </div>
      </div>

      <div className="cs_section_img">
        <Image
          src={data.sectionImageUrl}
          alt="img"
          width={228}
          height={248}
        />
      </div>

      {/* safety net if theme applies pseudo elems */}
      <style jsx>{`
        :global(.cs_experience_box::before),
        :global(.cs_experience_box::after) {
          background: #23343b !important;
          border-color: #23343b !important;
        }

        /* About Section Scroll Animations */
        .about-left-card {
          opacity: 0;
          transform: translateX(-50px);
          transition: opacity 1s ease-out, transform 1s ease-out;
          will-change: opacity, transform;
        }

        .about-right-card {
          opacity: 0;
          transform: translateX(50px);
          transition: opacity 1s ease-out, transform 1s ease-out;
          will-change: opacity, transform;
        }

        .about-left-card.animate-in {
          opacity: 1;
          transform: translateX(0);
          transition-delay: 0.2s;
        }

        .about-right-card.animate-in {
          opacity: 1;
          transform: translateX(0);
          transition-delay: 0.4s;
        }

        /* Ensure button is centered relative to the text column above */
        .cs_about_btns {
          width: 100%;
          text-align: center; /* centers the inline-flex inner wrapper */
        }

        .cs_about_btns_inner {
          display: inline-flex; /* shrink-wrap to button's width */
          align-items: center;
          justify-content: center;
        }

        /* In case the theme applies flex/width styles to the button element */
        :global(.cs_about_btns .cs_btn),
        :global(.cs_about_btns a.cs_btn),
        :global(.cs_about_btns button.cs_btn) {
          display: inline-flex !important;
          margin: 0 auto !important; /* safety net */
        }

        /* Mobile Responsiveness */
        @media (max-width: 991.98px) {
          .about-left-card,
          .about-right-card {
            margin-bottom: 2rem;
          }
          
          .cs_about_iconbox {
            text-align: center;
            margin-bottom: 1.5rem;
          }
          
          .cs_about_btns {
            margin-top: 1.5rem;
          }
        }

        @media (max-width: 767.98px) {
          .about-left-card,
          .about-right-card {
            margin-bottom: 1.5rem;
          }
          
          .cs_about_iconbox {
            margin-bottom: 1rem;
          }
          
          .cs_about_btns {
            margin-top: 1rem;
          }
          
          .cs_about_iconbox_title {
            font-size: 1.5rem;
          }
          
          .cs_about_iconbox_subtitle {
            font-size: 0.9rem;
          }
        }
      `}</style>
    </>
  );
};

export default AboutSection1;
