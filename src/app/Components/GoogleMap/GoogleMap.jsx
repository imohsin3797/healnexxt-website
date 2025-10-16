"use client";
import { useMemo } from "react";
import SectionHeading from "../SectionHeading";

const GoogleMap = ({ data = {} }) => {
  // Force the primary address you want
  const ADDRESS = "211 E Main St, Lakeland, FL 33801";

  // Default data (uses your address)
  const defaultData = {
    sectionSubtitle: "OUR LOCATIONS",
    sectionTitle: "Find Us Near You",
    locations: [
      {
        title: "Main Office",
        address: ADDRESS,
        phone: "(555) 123-4567",
      },
    ],
  };

  // Merge with provided data, but ensure the first location points to ADDRESS
  const mapData = { ...defaultData, ...data };
  if (!mapData.locations || mapData.locations.length === 0) {
    mapData.locations = defaultData.locations;
  } else {
    mapData.locations[0] = {
      ...mapData.locations[0],
      address: ADDRESS,
    };
  }
  const primaryLocation = mapData.locations[0];

  // Google Maps embed for the exact address (no API key)
  const embedSrc = useMemo(() => {
    return `https://www.google.com/maps?q=${encodeURIComponent(ADDRESS)}&output=embed`;
  }, []);

  return (
    <>
      <div className="container">
        <div className="row align-items-center cs_gap_y_40">
          <div className="col-lg-6" data-aos="fade-right">
            <div className="cs_map_content">
              <SectionHeading
                SectionSubtitle={mapData.sectionSubtitle}
                SectionTitle={mapData.sectionTitle}
              />

              <div className="cs_map_info">
                {mapData.locations.map((location, index) => (
                  <div key={index} className="cs_location_item mb-4">
                    <div className="cs_location_icon cs_center">
                      <i>
                        <svg
                          width="20"
                          height="20"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M12 2C8.13 2 5 5.13 5 9C5 14.25 12 22 12 22S19 14.25 19 9C19 5.13 15.87 2 12 2ZM12 11.5C10.62 11.5 9.5 10.38 9.5 9S10.62 6.5 12 6.5S14.5 7.62 14.5 9S13.38 11.5 12 11.5Z"
                            fill="currentColor"
                          />
                        </svg>
                      </i>
                    </div>
                    <div className="cs_location_info">
                      <h3 className="cs_location_title m-0">{location.title}</h3>
                      <p className="cs_location_address mb-0">{location.address}</p>
                      {location.phone && (
                        <p className="cs_location_phone mb-0">{location.phone}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="col-lg-6" data-aos="fade-left">
            <div className="cs_map_thumb">
              <iframe
                title={`Map for ${primaryLocation?.title || "Location"}`}
                src={embedSrc}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
                className="map-canvas"
              />
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .map-canvas {
          width: 100%;
          height: 500px;
          border: 4px solid #23343B;
          border-radius: 8px;
          overflow: hidden;
          background: #1e2b32; /* fallback while loading */
        }

        .cs_map_info {
          margin-top: 30px;
        }

        .cs_location_item {
          display: flex;
          align-items: flex-start;
          gap: 15px;
        }

        .cs_location_icon {
          width: 40px;
          height: 40px;
          background-color: var(--accent-color);
          border-radius: 50%;
          color: #eadfd4;
          flex-shrink: 0;
        }

        .cs_location_title {
          font-size: 18px;
          font-weight: 600;
          color: var(--heading-color);
          margin-bottom: 5px;
        }

        .cs_location_address,
        .cs_location_phone {
          color: var(--body-color);
          font-size: 14px;
          line-height: 1.5;
        }

        @media (max-width: 991.98px) {
          .map-canvas {
            height: 360px;
            margin-top: 30px;
          }
        }

        @media (max-width: 767.98px) {
          .map-canvas {
            height: 300px;
            margin-top: 20px;
          }
          
          .cs_map_info {
            margin-top: 20px;
          }
          
          .cs_location_item {
            flex-direction: column;
            text-align: center;
            gap: 10px;
          }
          
          .cs_location_icon {
            align-self: center;
          }
        }

        @media (max-width: 575.98px) {
          .map-canvas {
            height: 250px;
          }
          
          .cs_location_title {
            font-size: 16px;
          }
          
          .cs_location_address,
          .cs_location_phone {
            font-size: 13px;
          }
        }
      `}</style>
    </>
  );
};

export default GoogleMap;