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
        icon: "/assets/img/icons/service_icon_2.png",
        title: "24/7 Support",
        description: "Round-the-clock medical assistance when you need it most.",
      },
      {
        icon: "/assets/img/icons/service_icon_3.png",
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
          {/* Section Heading */}
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <SectionHeading
                SectionSubtitle={componentData.sectionSubtitle}
                SectionTitle={componentData.sectionTitle}
                SectionDescription={componentData.sectionDescription}
                variant="text-center text-white"
              />
            </div>
          </div>

          {/* Three Icons */}
          <div className="row cs_gap_y_40">
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
          padding: 60px 0; /* vertical spacing */
          color: #ffffff;
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
          margin-bottom: 25px;
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
          margin-bottom: 15px;
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
          .cs_three_icon_item {
            padding: 30px 15px;
            margin-bottom: 30px;
          }
          .cs_three_icon_icon {
            width: 80px;
            height: 80px;
            margin-bottom: 20px;
          }
          .cs_three_icon_title {
            font-size: 20px;
            margin-bottom: 12px;
          }
          .cs_three_icon_description {
            font-size: 15px;
          }
        }

        @media (max-width: 767.98px) {
          .cs_three_icon_item {
            padding: 25px 10px;
          }
          .cs_three_icon_icon {
            width: 70px;
            height: 70px;
            margin-bottom: 18px;
          }
          .cs_three_icon_title {
            font-size: 18px;
            margin-bottom: 10px;
          }
          .cs_three_icon_description {
            font-size: 14px;
          }
        }
      `}</style>
    </>
  );
};

export default ThreeIcon;
