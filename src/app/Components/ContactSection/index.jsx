"use client";
import Image from "next/image";
import SectionHeading from "../SectionHeading";

const ContactSection = ({ data, reverseOrder }) => {
  const panelBg = "#23343B"; // blue/grey

  const Shape = () => (
    <div className="cs_contact_bg_shape">
      {/* this is the rectangular panel behind the card */}
      <div
        className="cs_white_bg_shape"
        style={{ backgroundColor: panelBg, borderColor: panelBg }}
      />
      <div className={`cs_iconbox ${data.iconBox.style}`}>
        <div className="cs_iconbox_icon cs_center">
          <Image src={data.iconBox.icon} alt="img" width={62} height={62} />
        </div>
        <div className="cs_iconbox_right">
          <h3 className="cs_iconbox_title">{data.iconBox.title}</h3>
          <p className="cs_iconbox_subtitle mb-0">{data.iconBox.subtitle}</p>
        </div>
      </div>
    </div>
  );

  const Thumb = () => (
    <div className="cs_contact_thumbnail cs_pl-40">
      <div className="cs_contact_img">
        <Image src={data.contactImg} alt="img" width={319} height={497} />
      </div>
      <Shape />
    </div>
  );

  const formFieldStyle = {
    backgroundColor: "#EADFD4",
    border: "1px solid #23343B"
  };

  return (
    <div style={{ backgroundColor: "#EADFD4" }}>
      <div className="container">
        <div className="row cs_gap_y_30">
          {reverseOrder ? (
            <>
              <div className="col-lg-6"><Thumb /></div>
              <div className="col-lg-6">
                <SectionHeading
                  SectionSubtitle={data.sectionSubtitle}
                  SectionTitle={data.SectionTitle}
                />
                <div className="cs_height_25 cs_height_lg_25" />
                <form className="cs_contact_form row cs_gap_y_30">
                  <div className="col-md-6">
                    <input type="text" className="cs_form_field" placeholder="Your name" style={formFieldStyle} />
                  </div>
                  <div className="col-md-6">
                    <input type="email" className="cs_form_field" placeholder="Your email" style={formFieldStyle} />
                  </div>
                  <div className="col-md-6">
                    <input type="text" className="cs_form_field" placeholder="Your Subject" style={formFieldStyle} />
                  </div>
                  <div className="col-md-6">
                    <input type="text" className="cs_form_field" placeholder="Your phone" style={formFieldStyle} />
                  </div>
                  <div className="col-lg-12">
                    <textarea rows={5} className="cs_form_field" placeholder="Your comments" style={formFieldStyle} />
                  </div>
                  <div className="col-lg-12">
                    <button type="submit" className="cs_btn cs_style_1 cs_color_1">Send Request</button>
                  </div>
                </form>
              </div>
            </>
          ) : (
            <>
              <div className="col-lg-6">
                <SectionHeading
                  SectionSubtitle={data.sectionSubtitle}
                  SectionTitle={data.SectionTitle}
                />
                <div className="cs_height_25 cs_height_lg_25" />
                <form className="cs_contact_form row cs_gap_y_30">
                  <div className="col-md-6">
                    <input type="text" className="cs_form_field" placeholder="Your name" style={formFieldStyle} />
                  </div>
                  <div className="col-md-6">
                    <input type="email" className="cs_form_field" placeholder="Your email" style={formFieldStyle} />
                  </div>
                  <div className="col-md-6">
                    <input type="text" className="cs_form_field" placeholder="Your Subject" style={formFieldStyle} />
                  </div>
                  <div className="col-md-6">
                    <input type="text" className="cs_form_field" placeholder="Your phone" style={formFieldStyle} />
                  </div>
                  <div className="col-lg-12">
                    <textarea rows={5} className="cs_form_field" placeholder="Your comments" style={formFieldStyle} />
                  </div>
                  <div className="col-lg-12">
                    <button type="submit" className="cs_btn cs_style_1 cs_color_1">Send Request</button>
                  </div>
                </form>
              </div>
              <div className="col-lg-6"><Thumb /></div>
            </>
          )}
        </div>
      </div>

      <style jsx>{`
        /* Mobile Responsiveness */
        @media (max-width: 991.98px) {
          .cs_contact_form {
            margin-bottom: 2rem;
          }
          
          .cs_contact_thumbnail {
            text-align: center;
          }
          
          .cs_contact_img img {
            max-width: 100%;
            height: auto;
          }
        }

        @media (max-width: 767.98px) {
          .cs_contact_form {
            margin-bottom: 1.5rem;
          }
          
          .cs_contact_thumbnail {
            margin-bottom: 1.5rem;
          }
          
          .cs_contact_img img {
            width: 100%;
            max-width: 300px;
          }
          
          .cs_form_field {
            font-size: 16px; /* Prevents zoom on iOS */
          }
        }
      `}</style>
    </div>
  );
};

export default ContactSection;
