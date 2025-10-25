"use client";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";

const ServiceSection2 = ({ data }) => {
  const [visibleCards, setVisibleCards] = useState(new Set());
  const cardRefs = useRef([]);

  // Create individual intersection observers for each service card
  useEffect(() => {
    const observers = [];

    cardRefs.current.forEach((cardRef, index) => {
      if (cardRef) {
        const observer = new IntersectionObserver(
          ([entry]) => {
            if (entry.isIntersecting) {
              setVisibleCards((prev) => new Set([...prev, index]));
            }
          },
          {
            threshold: 0.3, // Trigger when 30% of the card is visible
            rootMargin: "0px 0px -20px 0px", // Start animation slightly before fully in view
          }
        );

        observer.observe(cardRef);
        observers.push(observer);
      }
    });

    return () => {
      observers.forEach((observer) => observer.disconnect());
    };
  }, [data.services.length]);

  return (
    <>
      <div className="container">
        <div className="cs_section_heading cs_style_1 cs_type_1">
          <div className="cs_section_heading_left">
            <p
              className="cs_section_subtitle cs_accent_color"
              data-aos="fade-left"
            >
              <span className="cs_shape_left" />
              {data.subtitle}
            </p>
            <h2 className="cs_section_title" style={{ color: "#ffffff" }}>
              {data.title}
            </h2>
          </div>
          <div
            className="cs_section_heading_right"
            style={{ color: "#ffffff" }}
          >
            {data.description}
          </div>
        </div>

        <div className="cs_height_50 cs_height_lg_50" />

        <div className="row cs_gap_y_30">
          {data.services.map((service, index) => (
            <div className="col-12" key={index}>
              <div
                ref={(el) => (cardRefs.current[index] = el)}
                className={`cs_iconbox cs_style_5 cs_radius_10 position-relative bg-slate-100 service-card ${
                  visibleCards.has(index) ? "animate-in" : ""
                }`}
              >
                <div className="cs_iconbox_icon cs_center">
                  <Image
                    src={service.iconSrc}
                    alt="img"
                    width={26}
                    height={26}
                  />
                </div>
                <h3
                  className="cs_iconbox_title mb-0"
                  style={{ color: "#ffffff" }}
                >
                  {service.title}
                </h3>
                <div className="cs_iconbox_line" />
                <p
                  className="cs_iconbox_subtitle mb-0"
                  style={{ color: "#ffffff" }}
                  dangerouslySetInnerHTML={{ __html: service.subtitle }}
                ></p>

                {/* Thumbnail is kept INSIDE the card on the right, 
                    and we reserve space with padding so it won't overlap text */}
                <div className="cs_iconbox_thumbnail">
                  <Image
                    src={service.imageSrc}
                    alt="img"
                    width={189}
                    height={174}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        /* Service Section Individual Card Animations */
        .service-card {
          opacity: 0;
          transform: translateY(50px);
          transition: opacity 1.2s ease-out, transform 1.2s ease-out;
          will-change: opacity, transform;

          /* Reserve room on the right so the thumbnail doesn't overlap text */
          padding-right: 240px;
          overflow: visible;
        }

        .service-card.animate-in {
          opacity: 1;
          transform: translateY(0);
        }

        /* Thumbnail: keep inside the card, pinned to the right */
        .service-card .cs_iconbox_thumbnail {
          position: absolute;
          top: 50%;
          right: 16px;
          transform: translateY(-50%) rotate(-12deg);
          opacity: 0;
          pointer-events: none; /* prevent hover flicker */
          transition: opacity 0.35s ease, transform 0.35s ease, right 0.35s ease;
          z-index: 2;
        }

        /* Reveal and nudge on hover */
        .service-card:hover .cs_iconbox_thumbnail {
          right: 8px;
          transform: translateY(-50%) rotate(-22deg);
          opacity: 1;
        }

        /* Responsive: reduce reserved space on narrower screens */
        @media (max-width: 1199px) {
          .service-card {
            padding-right: 200px;
          }
        }

        @media (max-width: 991px) {
          .service-card {
            padding-right: 160px;
          }
        }

        @media (max-width: 575px) {
          .service-card {
            padding-right: 24px; /* stack everything for small phones */
          }
          .service-card .cs_iconbox_thumbnail {
            position: static;      /* fall back to inline flow */
            display: flex;         /* enable centering */
            justify-content: center; /* center horizontally */
            margin: 12px 0 0;      /* reset margin */
            transform: none;
            opacity: 1;            /* always visible on tiny screens */
          }
          .service-card:hover .cs_iconbox_thumbnail {
            right: auto;
            transform: none;
            opacity: 1;
          }
        }
      `}</style>
    </>
  );
};

export default ServiceSection2;
