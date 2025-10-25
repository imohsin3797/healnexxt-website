"use client";
import Image from "next/image";
import SectionHeading from "../SectionHeading";

const ThreeIcon = ({ data = {} }) => {
  const defaultData = {
    sectionSubtitle: "OUR FEATURES",
    sectionTitle: "Why Choose Our Services",
    sectionDescription:
      "We provide comprehensive healthcare solutions with state-of-the-art facilities and experienced professionals.",
    icons: [
      {
        icon: "/assets/img/icons/service_icon_1.png",
        title: "Expert Care",
        description: "Professional medical care from experienced healthcare providers.",
      },
      {
        icon: "/assets/img/icons/service_icon_10.png",
        title: "24/7 Support",
        description: "Round-the-clock medical assistance when you need it most.",
      },
      {
        icon: "/assets/img/icons/service_icon_11.png",
        title: "Advanced Technology",
        description: "Cutting-edge medical equipment and innovative treatment methods.",
      },
    ],
  };

  const componentData = { ...defaultData, ...data };

  return (
    <>
      {/* Full-bleed wrapper provides the background across the entire page width */}
      <section className="three-icon-section">
        <div className="container">
          {/* Section Heading - Custom minimal spacing */}
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="custom-section-heading">
                <p className="custom-subtitle">
                  <span className="cs_shape_left" />
                  {componentData.sectionSubtitle}
                  <span className="cs_shape_right"></span>
                </p>
                <h2 className="custom-title" dangerouslySetInnerHTML={{ __html: componentData.sectionTitle }} />
                <div className="custom-description" dangerouslySetInnerHTML={{ __html: componentData.sectionDescription }} />
              </div>
            </div>
          </div>

          {/* Three Icons */}
          <div className="row cs_gap_y_40" style={{ marginTop: '16px' }}>
            {componentData.icons.map((item, index) => (
              <div key={index} className="col-lg-4 col-md-6">
                <div
                  className="cs_three_icon_item cs_center"
                  data-aos="fade-up"
                  data-aos-delay={index * 100}
                >
                  <div className="cs_three_icon_wrapper">
                    <div className="cs_three_icon_icon cs_center">
                      <Image src={item.icon} alt={item.title} width={60} height={60} />
                    </div>
                    <h3 className="cs_three_icon_title">{item.title}</h3>
                    <p className="cs_three_icon_description">{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <style jsx>{`
        /* Full-width, full-bleed background */
        .three-icon-section {
          width: 100%;
          background-color: #23343b; /* blue/grey */
          padding: 40px 0; /* reduced vertical spacing */
          color: #ffffff;
        }

        /* Mobile Responsive Padding */
        @media (max-width: 991.98px) {
          .three-icon-section {
            padding: 30px 0;
          }
        }

        @media (max-width: 767.98px) {
          .three-icon-section {
            padding: 25px 0;
          }
        }

        @media (max-width: 575.98px) {
          .three-icon-section {
            padding: 20px 0;
          }
        }

        /* Tighter gap below the heading block */
        .three-icon-section .row:first-child {
          margin-bottom: 0px !important;
        }

        /* Reduce spacing between heading and icons (inside SectionHeading) */
        .three-icon-section .cs_section_heading.cs_style_1 {
          margin-bottom: 0px !important;
        }

        /* Further reduce spacing for subtitle */
        .three-icon-section .cs_section_subtitle {
          margin-bottom: 8px !important;
        }

        /* Reduce spacing for title */
        .three-icon-section .cs_section_title {
          margin-bottom: 4px !important;
        }

        /* Reduce spacing for description */
        .three-icon-section .cs_section_heading_right {
          margin-bottom: 0px !important;
        }

        /* Bring icons closer to heading */
        .three-icon-section .row.cs_gap_y_40 {
          margin-top: 0px !important;
        }

        /* Custom heading with minimal spacing */
        .custom-section-heading {
          text-align: center;
          margin-bottom: 0px !important;
        }

        .custom-subtitle {
          font-size: 18px;
          font-weight: 500;
          display: inline-flex;
          gap: 10px;
          align-items: center;
          margin-bottom: 8px !important;
          color: #f26f62;
        }

        .custom-title {
          font-size: 40px;
          margin-bottom: 4px !important;
          color: #ffffff;
          font-weight: 600;
        }

        .custom-description {
          font-size: 16px;
          color: #ffffff;
          line-height: 1.6;
          margin-bottom: 0px !important;
        }

        .cs_shape_left,
        .cs_shape_right {
          height: 5px;
          width: 32px;
          border-radius: 10px;
          background-color: #f26f62;
        }

        .cs_three_icon_item {
          padding: 40px 20px;
          height: 100%;
        }

        .cs_three_icon_wrapper {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          height: 100%;
        }

        .cs_three_icon_icon {
          width: 100px;
          height: 100px;
          background-color: #f26f62;
          border-radius: 50%;
          margin-bottom: 20px;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.3s ease;
        }

        .cs_three_icon_item:hover .cs_three_icon_icon {
          transform: translateY(-5px);
        }

        .cs_three_icon_title {
          font-size: 22px;
          font-weight: 600;
          color: #ffffff;
          margin-bottom: 12px;
          line-height: 1.3;
        }

        .cs_three_icon_description {
          font-size: 16px;
          color: #ffffff;
          line-height: 1.6;
          margin: 0;
          max-width: 280px;
        }

        @media (max-width: 991.98px) {
          .custom-title {
            font-size: 32px;
          }
          
          .custom-description {
            font-size: 15px;
          }
          
          .cs_three_icon_item {
            padding: 30px 15px;
            margin-bottom: 30px;
          }
          .cs_three_icon_icon {
            width: 80px;
            height: 80px;
            margin-bottom: 18px;
          }
          .cs_three_icon_title {
            font-size: 20px;
            margin-bottom: 10px;
          }
          .cs_three_icon_description {
            font-size: 15px;
          }
        }

        @media (max-width: 767.98px) {
          .custom-title {
            font-size: 28px;
          }
          
          .custom-description {
            font-size: 14px;
          }
          
          .cs_three_icon_item {
            padding: 25px 10px;
          }
          .cs_three_icon_icon {
            width: 70px;
            height: 70px;
            margin-bottom: 16px;
          }
          .cs_three_icon_title {
            font-size: 18px;
            margin-bottom: 8px;
          }
          .cs_three_icon_description {
            font-size: 14px;
          }
        }

        @media (max-width: 575.98px) {
          .custom-title {
            font-size: 24px;
          }
          
          .custom-description {
            font-size: 13px;
            padding: 0 10px;
          }
          
          .cs_three_icon_item {
            padding: 20px 15px;
          }
          .cs_three_icon_icon {
            width: 60px;
            height: 60px;
            margin-bottom: 14px;
          }
          .cs_three_icon_title {
            font-size: 16px;
            margin-bottom: 6px;
          }
          .cs_three_icon_description {
            font-size: 13px;
            max-width: 100%;
          }
        }
      `}</style>
    </>
  );
};

export default ThreeIcon;
