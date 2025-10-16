"use client";

import Image from "next/image";
import SectionHeading from "../SectionHeading";

const MedicalSolution = ({ data }) => {
  return (
    <>
      <div className="container">
        <SectionHeading
          variant={"cs_type_1"}
          textColor={"cs_white_color"}
          SectionSubtitle={data.sectionSubtitle}
          SectionTitle={data.sectionTitle}
          SectionDescription={data.sectionDescription}
        />

        <div className="cs_height_30 cs_height_lg_30" />

        <div className="cs_card cs_style_4 ms_card_fix">
          <div className="cs_card_thumbnail">
            <Image src={data.mainImage} alt="img" width={325} height={359} />
          </div>

          <div className="cs_iconbox_wrapper">
            {data.cards.map((card, index) => (
              <div className="cs_iconbox cs_style_6" key={index}>
                <div className="cs_iconbox_icon cs_center position-relative">
                  <Image src={card.icon} alt="img" width={28} height={28} />
                  <div className="cs_iconbox_index cs_center position-absolute">
                    {card.index}
                  </div>
                </div>
                <div className="cs_iconbox_text">
                  <h3 className="cs_iconbox_title cs_white_color">
                    {card.title}
                  </h3>
                  <p className="cs_iconbox_subtitle cs_white_color mb-0">
                    {card.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Local containment/spacing */}
      <style jsx>{`
        .ms_card_fix {
          position: relative;
          z-index: 1;
          margin-bottom: 0;
        }
        .cs_card_thumbnail :global(img) {
          display: block;
          max-width: 100%;
          height: auto;
        }
      `}</style>
    </>
  );
};

export default MedicalSolution;
