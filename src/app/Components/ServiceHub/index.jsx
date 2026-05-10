"use client";

import Image from "next/image";
import Link from "next/link";
import { FaAnglesRight } from "react-icons/fa6";
import { FaCheckCircle } from "react-icons/fa";
import PageHeading from "../PageHeading";
import Section from "../Section";
import OverlapGuard from "../OverlapGuard";

const ServiceHub = ({ data }) => {
  const {
    hero,
    intro,
    conditions = [],
    cta,
  } = data;

  return (
    <div style={{ backgroundColor: "#EADFD4" }}>
      <OverlapGuard />

      {/* Page banner */}
      <Section
        className={"cs_page_heading cs_bg_filed cs_center service-hub-banner"}
        backgroundImage={hero.bannerImage || "/assets/img/services.jpg.avif"}
      >
        <PageHeading data={{ title: hero.title, color: "#23343B" }} />
      </Section>

      {/* Intro section: image left, copy right */}
      <Section
        topSpaceLg="80"
        topSpaceMd="60"
        bottomSpaceLg="60"
        bottomSpaceMd="40"
        className="service-hub-intro"
        style={{ backgroundColor: "#EADFD4" }}
      >
        <div className="container">
          <div className="row cs_gap_y_40 align-items-center">
            <div className="col-lg-6">
              <div className="hub-intro-thumbnail">
                <Image
                  src={intro.image || "/assets/img/about-3.webp"}
                  alt={hero.title}
                  width={640}
                  height={480}
                />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="hub-intro-content">
                <p className="hub-subtitle">
                  <span className="cs_shape_left" />
                  {intro.subtitle}
                </p>
                <h2 className="hub-title">{intro.title}</h2>
                {intro.paragraphs?.map((p, i) => (
                  <p key={i} className="hub-description">{p}</p>
                ))}
                {intro.bullets?.length > 0 && (
                  <ul className="hub-bullets">
                    {intro.bullets.map((b, i) => (
                      <li key={i}>
                        <FaCheckCircle className="hub-bullet-icon" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Conditions grid */}
      {conditions.length > 0 && (
        <Section
          topSpaceLg="60"
          topSpaceMd="40"
          bottomSpaceLg="80"
          bottomSpaceMd="60"
          className="service-hub-conditions"
          style={{ backgroundColor: "#EADFD4" }}
        >
          <div className="container">
            <div className="hub-conditions-heading">
              <p className="hub-subtitle hub-subtitle-center">
                <span className="cs_shape_left" />
                CONDITIONS &amp; TREATMENTS
                <span className="cs_shape_right" />
              </p>
              <h2 className="hub-section-title">
                {data.conditionsTitle || "What We Treat"}
              </h2>
              {data.conditionsDescription && (
                <p className="hub-section-description">
                  {data.conditionsDescription}
                </p>
              )}
            </div>

            <div className="row cs_gap_y_30 justify-content-center">
              {conditions.map((c, index) => (
                <div className="col-lg-4 col-md-6" key={index}>
                  <div className="hub-condition-card">
                    <div className="hub-condition-icon">
                      <Image
                        src={c.icon || "/assets/img/icons/service_icon_15.png"}
                        alt={c.title}
                        width={32}
                        height={32}
                      />
                    </div>
                    <h3 className="hub-condition-title">{c.title}</h3>
                    <p className="hub-condition-description">{c.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Section>
      )}

      {/* CTA */}
      <Section
        topSpaceLg="60"
        topSpaceMd="40"
        bottomSpaceLg="80"
        bottomSpaceMd="60"
        className="service-hub-cta"
        style={{ backgroundColor: "#EADFD4" }}
      >
        <div className="container">
          <div className="hub-cta-inner">
            <div className="hub-cta-text">
              <h2 className="hub-cta-title">
                {cta?.title || "Ready to bring this care to your patients?"}
              </h2>
              <p className="hub-cta-subtitle">
                {cta?.subtitle ||
                  "Connect with our team to learn how Healnexxt delivers specialty care directly where it's needed."}
              </p>
            </div>
            <div className="hub-cta-actions">
              <Link
                href={cta?.primaryHref || "/referrals"}
                className="cs_btn cs_style_1 cs_color_1"
              >
                <span>{cta?.primaryText || "Refer a Patient"}</span>
                <i><FaAnglesRight /></i>
              </Link>
              <Link
                href={cta?.secondaryHref || "/contact"}
                className="cs_btn cs_style_1 cs_color_1 hub-cta-secondary"
              >
                <span>{cta?.secondaryText || "Contact Us"}</span>
                <i><FaAnglesRight /></i>
              </Link>
            </div>
          </div>
        </div>
      </Section>

      <style jsx>{`
        :global(.service-hub-banner .container) {
          display: flex;
          flex-direction: column;
          align-items: flex-end;
          text-align: right;
        }
        :global(.service-hub-banner .cs_page_title) {
          text-align: right;
          color: #23343B;
        }
        :global(.service-hub-banner .breadcrumb) {
          justify-content: flex-end;
        }
        :global(.service-hub-banner .breadcrumb a),
        :global(.service-hub-banner .breadcrumb span) {
          color: #23343B;
        }

        .hub-intro-thumbnail {
          border-radius: 12px;
          overflow: hidden;
          display: flex;
          justify-content: center;
        }
        .hub-intro-thumbnail :global(img) {
          width: 100%;
          height: auto;
          max-width: 640px;
          object-fit: cover;
          border-radius: 12px;
        }

        .hub-subtitle {
          font-size: 16px;
          font-weight: 500;
          color: #23343B;
          display: inline-flex;
          align-items: center;
          gap: 10px;
          margin-bottom: 12px;
          letter-spacing: 1px;
        }
        .hub-subtitle-center {
          justify-content: center;
        }
        :global(.hub-subtitle .cs_shape_left),
        :global(.hub-subtitle .cs_shape_right) {
          height: 5px;
          width: 32px;
          border-radius: 10px;
          background-color: #f26f62;
          display: inline-block;
        }
        .hub-title {
          font-size: 36px;
          font-weight: 600;
          color: #23343B;
          margin-bottom: 16px;
          line-height: 1.25;
        }
        .hub-description {
          font-size: 16px;
          color: #23343B;
          line-height: 1.7;
          margin-bottom: 12px;
        }
        .hub-bullets {
          list-style: none;
          padding: 0;
          margin: 16px 0 0;
        }
        .hub-bullets li {
          display: flex;
          align-items: flex-start;
          gap: 10px;
          color: #23343B;
          margin-bottom: 8px;
          font-size: 15px;
        }
        :global(.hub-bullet-icon) {
          color: #f26f62;
          flex-shrink: 0;
          margin-top: 4px;
        }

        .hub-conditions-heading {
          text-align: center;
          margin-bottom: 40px;
        }
        .hub-section-title {
          font-size: 36px;
          font-weight: 600;
          color: #23343B;
          margin-bottom: 12px;
        }
        .hub-section-description {
          font-size: 16px;
          color: #23343B;
          max-width: 720px;
          margin: 0 auto;
          line-height: 1.6;
        }

        .hub-condition-card {
          background-color: #2c4048;
          border-radius: 12px;
          padding: 28px 24px;
          height: 100%;
          transition: transform 0.3s ease, box-shadow 0.3s ease,
            background-color 0.3s ease;
          border: 1px solid rgba(242, 111, 98, 0.15);
        }
        .hub-condition-card:hover {
          transform: translateY(-6px);
          background-color: #34505b;
          box-shadow: 0 18px 40px rgba(0, 0, 0, 0.3);
        }
        .hub-condition-icon {
          width: 60px;
          height: 60px;
          border-radius: 50%;
          background-color: #f26f62;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 18px;
        }
        .hub-condition-title {
          font-size: 20px;
          font-weight: 600;
          color: #ffffff;
          margin-bottom: 10px;
          line-height: 1.3;
        }
        .hub-condition-description {
          font-size: 15px;
          color: #d6dde0;
          line-height: 1.6;
          margin: 0;
        }

        .hub-cta-inner {
          background-color: #23343b;
          border-radius: 16px;
          padding: 48px 56px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 32px;
          flex-wrap: wrap;
        }
        .hub-cta-title {
          font-size: 30px;
          color: #ffffff;
          font-weight: 600;
          margin-bottom: 8px;
          line-height: 1.3;
        }
        .hub-cta-subtitle {
          font-size: 16px;
          color: #d6dde0;
          margin: 0;
          max-width: 560px;
          line-height: 1.6;
        }
        .hub-cta-actions {
          display: flex;
          gap: 12px;
          flex-wrap: wrap;
        }
        :global(.hub-cta-secondary) {
          background-color: transparent !important;
          border: 1px solid #f26f62 !important;
        }

        @media (max-width: 991.98px) {
          .hub-title { font-size: 30px; }
          .hub-section-title { font-size: 30px; }
          .hub-cta-inner {
            padding: 36px 28px;
            justify-content: center;
            text-align: center;
          }
          .hub-cta-actions { justify-content: center; }
        }
        @media (max-width: 767.98px) {
          .hub-title { font-size: 26px; }
          .hub-section-title { font-size: 26px; }
          .hub-cta-title { font-size: 24px; }
          .hub-condition-card { padding: 22px 20px; }
        }
        @media (max-width: 575.98px) {
          .hub-title { font-size: 22px; }
          .hub-description { font-size: 15px; }
          .hub-section-title { font-size: 22px; }
          .hub-cta-title { font-size: 20px; }
          .hub-cta-inner { padding: 28px 20px; }
        }
      `}</style>
    </div>
  );
};

export default ServiceHub;
