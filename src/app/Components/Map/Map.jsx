"use client"
import SectionHeading from '../SectionHeading';
import Image from 'next/image';

const Map = ({ data }) => {
  return (
    <>
      <div className="container">
        <div className="row align-items-center cs_gap_y_40">
          <div className="col-lg-6" data-aos="fade-right">
            <div className="cs_map_content">
              <SectionHeading
                SectionSubtitle={data.sectionSubtitle}
                SectionTitle={data.sectionTitle}
              />

              <p className="cs_map_text">{data.mapText}</p>

              <div className="row cs_gap_y_30">
                {data.locations.map((location, index) => (
                  <div className="col-sm-6" key={index}>
                    <div className="cs_location_item">
                      <div className="cs_location_icon cs_center">
                        <i>
                          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12 2C8.13 2 5 5.13 5 9C5 14.25 12 22 12 22S19 14.25 19 9C19 5.13 15.87 2 12 2ZM12 11.5C10.62 11.5 9.5 10.38 9.5 9S10.62 6.5 12 6.5S14.5 7.62 14.5 9S13.38 11.5 12 11.5Z" fill="currentColor"/>
                          </svg>
                        </i>
                      </div>
                      <div className="cs_location_info">
                        <h3 className="cs_location_title m-0">{location.title}</h3>
                        <p className="cs_location_address mb-0">{location.address}</p>
                        <p className="cs_location_phone mb-0">{location.phone}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="col-lg-6" data-aos="fade-left">
            <div className="cs_map_thumb">
              <Image 
                src={data.mapImageUrl} 
                alt="Our Locations Map" 
                width={600} 
                height={400}
                className="cs_map_image"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Map;
