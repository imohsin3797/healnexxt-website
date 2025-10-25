"use client";

import Link from "next/link";
import SectionHeading from "../SectionHeading";
import { FaChevronDown, FaChevronUp } from "react-icons/fa6";
import Image from "next/image";
import { useState } from "react";

const MedicalSolution2 = ({ data }) => {
  const [expandedId, setExpandedId] = useState(null);

  const toggleExpand = (id) => {
    setExpandedId((currentId) => (currentId === id ? null : id));
  };

  const allServices = [
    ...data.links.map((link, index) => ({
      id: `link-${index}`,
      key: (link.href ? `${link.href}-` : "service-") + index,
      icon: link.iconSrc,
      title: link.text,
      description: getServiceDescription(link.text),
    })),
    {
      id: "continued-care",
      key: "continued-care", 
      icon: "/assets/img/icons/service_icon_12.png",
      title: "Continued Care",
      description: "We will be there with you every step of the way. Our compassionate and knowledgeable staff guides you through every step of the healing process. You will never feel alone and will always have an advocate with us.",
    }
  ];

  function getServiceDescription(serviceTitle) {
    switch(serviceTitle) {
      case 'Comprehensive Wound Assessment':
        return "Healnexxt provides comprehensive wound assessment and advanced procedures, including compression therapy, debridement, wound cultures, imaging, and innovative modalities designed to accelerate healing and minimize pain. Our evidence-based approach ensures patients receive the highest level of care for optimal recovery.";
      case 'Dermatology Services':
        return "Expert dermatological care for skin conditions, mole evaluations, and comprehensive skin health assessments. Our experienced physicians do everything possible to relieve your pain and reduce healing time.";
      case 'Connected Care Network':
        return "Connected care that puts your unique needs first. When necessary we utilize our comprehensive network and refer you to expert doctors and surgeons who are ready to serve needs that require additional tests and procedures in a hospital or clinical setting.";
      default:
        return "Detailed information about our comprehensive medical services and specialized care options.";
    }
  }

  return (
    <>
      <div className="container">
        <div className="row cs_gap_y_40">
          <div className="col-lg-6">
            <div className="cs_solution_content_wrapper">
              <SectionHeading
                SectionTitle={data.title}
                SectionSubtitle={data.subtitle}
                SectionDescription={data.description}
                variant={"s_style_1"}
              />

              <ul className="cs_solution_links cs_style_1 cs_mp0">
                {allServices.map((service) => {
                  const isOpen = expandedId === service.id;
                  return (
                    <li key={service.key}>
                      <div
                        className={`cs_expandable_item ${isOpen ? "expanded" : ""}`}
                        onClick={() => toggleExpand(service.id)}
                        style={{ cursor: "pointer", backgroundColor: "#23343B" }}
                      >
                        <div className="cs_expandable_header">
                          <span className="cs_tab_link_icon_left cs_center">
                            <Image src={service.icon} alt="img" width={22} height={22} />
                          </span>
                          <span className="service-title">{service.title}</span>
                          <span className="cs_tab_link_icon_right cs_center">
                            <i className="dropdown-icon">
                              {isOpen ? <FaChevronUp /> : <FaChevronDown />}
                            </i>
                          </span>
                        </div>
                        {isOpen && (
                          <div className="cs_expandable_content">
                            <p>{service.description}</p>
                          </div>
                        )}
                      </div>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>

          <div className="col-lg-6">
            <div className="cs_solution_thumbnail">
              <Image src={data.thumbnailSrc} alt="img" width={686} height={649} />
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .cs_expandable_item {
          padding: 15px;
          border-radius: 5px;
          transition: all 0.3s ease;
          margin-bottom: 10px;
        }
        .cs_expandable_header {
          display: flex;
          align-items: center;
          gap: 15px;
        }
        .cs_expandable_content {
          margin-top: 15px;
          padding: 15px;
          color: white;
          background: #23343B;
          border-radius: 5px;
        }
        .cs_tab_link_icon_left {
          flex: 0 0 auto;
          width: 22px;
        }
        .cs_tab_link_icon_right {
          margin-left: auto;
          background-color: #F26F62 !important;
          width: 24px;
          height: 24px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 50%;
        }
        .service-title {
          color: white;
          font-weight: 500;
        }
        .dropdown-icon {
          color: white !important;
          font-size: 12px;
        }
        .cs_tab_link_icon_right i {
          color: white !important;
        }

        /* Mobile Responsiveness */
        @media (max-width: 991.98px) {
          .cs_solution_thumbnail {
            margin-top: 2rem;
            text-align: center;
          }
          
          .cs_solution_thumbnail img {
            max-width: 100%;
            height: auto;
          }
          
          .cs_expandable_item {
            padding: 14px;
          }
          
          .cs_expandable_header {
            gap: 14px;
          }
          
          .service-title {
            font-size: 1rem;
          }
        }

        @media (max-width: 767.98px) {
          .cs_solution_thumbnail {
            margin-top: 1.5rem;
          }
          
          .cs_solution_thumbnail img {
            width: 100%;
            max-width: 400px;
          }
          
          .cs_expandable_item {
            padding: 12px;
            margin-bottom: 8px;
          }
          
          .cs_expandable_header {
            gap: 12px;
          }
          
          .service-title {
            font-size: 0.9rem;
          }
          
          .cs_expandable_content {
            padding: 12px;
            font-size: 0.9rem;
          }
        }

        @media (max-width: 575.98px) {
          .cs_solution_thumbnail {
            margin-top: 1rem;
          }
          
          .cs_solution_thumbnail img {
            width: 100%;
            max-width: 350px;
          }
          
          .cs_expandable_item {
            padding: 10px;
            margin-bottom: 6px;
          }
          
          .cs_expandable_header {
            gap: 10px;
          }
          
          .service-title {
            font-size: 0.85rem;
            line-height: 1.3;
          }
          
          .cs_expandable_content {
            padding: 10px;
            font-size: 0.85rem;
            line-height: 1.4;
          }
          
          .cs_tab_link_icon_left {
            width: 20px;
          }
          
          .cs_tab_link_icon_right {
            width: 22px;
            height: 22px;
          }
        }
      `}</style>
    </>
  );
};

export default MedicalSolution2;
