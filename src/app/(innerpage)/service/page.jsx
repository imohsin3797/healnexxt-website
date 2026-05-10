"use client";
import PageHeading from '@/app/Components/PageHeading';
import Section from '@/app/Components/Section';
import OverlapGuard from '@/app/Components/OverlapGuard';
import ThreeIcon from '@/app/Components/ThreeIcon/ThreeIcon';
import Image from 'next/image';
import Link from 'next/link';
import { FaAnglesRight } from 'react-icons/fa6';
import React from 'react';

const headingData = { title: 'Services', color: '#23343B' };

const threeIconData = {
  sectionSubtitle: "WHY CHOOSE US",
  sectionTitle: "The Healnexxt Advantage",
  sectionDescription: "Healnexxt redefines healthcare accessibility by bringing expert care directly to you. Our innovative approach ensures comprehensive, patient-centered treatment with seamless coordination and advanced technology.",
  icons: [
    {
      icon: "/assets/img/icons/about_icon_1.png",
      title: "Patient-Centered Care",
      description: "Every aspect of our service is designed around your unique needs, ensuring personalized treatment and compassionate support throughout your healing journey."
    },
    {
      icon: "/assets/img/icons/about_icon_2.png",
      title: "Connected Care Network",
      description: "Seamlessly connecting patients with specialized services through strategic partnerships that bridge healthcare gaps and reduce readmissions."
    },
    {
      icon: "/assets/img/icons/service_icon_11.png",
      title: "Advanced Technology",
      description: "Cutting-edge medical equipment and innovative treatment modalities delivered right to your location, ensuring you receive the highest quality care."
    }
  ]
};

const serviceHubs = [
  {
    href: '/service/advanced-wound-care',
    iconSrc: '/assets/img/icons/service_icon_15.png',
    imageSrc: '/assets/img/wound.jpg',
    title: 'Advanced Wound Care',
    description:
      'Comprehensive wound assessment and advanced procedures including skin grafts, ultrasound and shockwave therapy, debridement, ABI testing, and care management — engineered to accelerate healing and minimize pain.',
  },
  {
    href: '/service/behavioral-health-telehealth',
    iconSrc: '/assets/img/icons/service_icon_17.png',
    imageSrc: '/assets/img/pych-care.jpg',
    title: 'Behavioral Health Telehealth',
    description:
      'Compassionate, expert mental health care delivered virtually. Psychiatric evaluations, medication management, therapy and counseling, and dedicated treatment for depression and anxiety.',
  },
  {
    href: '/service/dermatology-services',
    iconSrc: '/assets/img/icons/service_icon_16.png',
    imageSrc: '/assets/img/derm.jpg',
    title: 'Dermatology Services',
    description:
      'Expert dermatologic care including skin lesion removal, biopsies, cryotherapy, and wound-related dermatologic care — delivered with the same convenience and quality you expect from Healnexxt.',
  },
];

const page = () => {
  return (
    <div style={{ backgroundColor: '#EADFD4' }}>
      <OverlapGuard />

      <Section
        className={'cs_page_heading cs_bg_filed cs_center services-page-banner'}
        backgroundImage="/assets/img/services.jpg.avif"
      >
        <PageHeading data={headingData} />
      </Section>

      <style jsx>{`
        :global(.services-page-banner .container) {
          display: flex;
          flex-direction: column;
          align-items: flex-end;
          text-align: right;
        }
        :global(.services-page-banner .cs_page_title) {
          text-align: right;
          color: #23343B;
        }
        :global(.services-page-banner .breadcrumb) {
          justify-content: flex-end;
        }
        :global(.services-page-banner .breadcrumb a),
        :global(.services-page-banner .breadcrumb span) {
          color: #23343B;
        }
      `}</style>

      {/* Three Icon Section */}
      <Section
        topSpaceLg="80"
        topSpaceMd="60"
        bottomSpaceLg="80"
        bottomSpaceMd="60"
        style={{ backgroundColor: '#23343B', color: '#ffffff' }}
      >
        <ThreeIcon data={threeIconData} />
      </Section>

      {/* Service hub showcase */}
      <Section
        topSpaceLg="80"
        topSpaceMd="60"
        bottomSpaceLg="120"
        bottomSpaceMd="80"
        className="services-showcase"
        style={{ backgroundColor: '#EADFD4' }}
      >
        <div className="container">
          <div className="services-showcase-heading">
            <p className="services-showcase-subtitle">
              <span className="cs_shape_left" />
              OUR SERVICES
              <span className="cs_shape_right" />
            </p>
            <h2 className="services-showcase-title">
              Comprehensive Healthcare, Delivered Where It’s Needed
            </h2>
            <p className="services-showcase-description">
              Healnexxt brings specialty care directly to patients across three
              core service lines. Explore each hub to see the conditions we
              treat and the procedures we perform.
            </p>
          </div>

          <div className="row cs_gap_y_30 services-grid">
            {serviceHubs.map((hub, index) => (
              <div className="col-lg-4 col-md-6" key={index}>
                <Link href={hub.href} className="hub-card-link">
                  <div className="hub-card">
                    <div className="hub-card-image">
                      <Image
                        src={hub.imageSrc}
                        alt={hub.title}
                        width={520}
                        height={320}
                      />
                    </div>
                    <div className="hub-card-body">
                      <div className="hub-card-icon">
                        <Image
                          src={hub.iconSrc}
                          alt=""
                          width={26}
                          height={26}
                        />
                      </div>
                      <h3 className="hub-card-title">{hub.title}</h3>
                      <p className="hub-card-description">{hub.description}</p>
                      <span className="hub-card-cta">
                        Read More <FaAnglesRight />
                      </span>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </Section>

      <style jsx>{`
        .services-showcase-heading {
          text-align: center;
          margin-bottom: 50px;
        }
        .services-showcase-subtitle {
          color: #23343B;
          font-size: 16px;
          font-weight: 500;
          letter-spacing: 1px;
          display: inline-flex;
          align-items: center;
          gap: 10px;
          margin-bottom: 12px;
        }
        :global(.services-showcase-subtitle .cs_shape_left),
        :global(.services-showcase-subtitle .cs_shape_right) {
          height: 5px;
          width: 32px;
          border-radius: 10px;
          background-color: #f26f62;
          display: inline-block;
        }
        .services-showcase-title {
          font-size: 36px;
          color: #23343B;
          font-weight: 600;
          margin-bottom: 14px;
          line-height: 1.25;
        }
        .services-showcase-description {
          color: #23343B;
          font-size: 16px;
          max-width: 720px;
          margin: 0 auto;
          line-height: 1.65;
        }

        :global(.hub-card-link) {
          text-decoration: none;
          color: inherit;
          display: block;
          height: 100%;
        }
        .hub-card {
          background-color: #2c4048;
          border-radius: 14px;
          overflow: hidden;
          height: 100%;
          display: flex;
          flex-direction: column;
          border: 1px solid rgba(242, 111, 98, 0.15);
          transition: transform 0.35s ease, box-shadow 0.35s ease,
            background-color 0.35s ease;
        }
        .hub-card:hover {
          transform: translateY(-8px);
          background-color: #34505b;
          box-shadow: 0 22px 50px rgba(0, 0, 0, 0.35);
        }
        .hub-card-image {
          position: relative;
          width: 100%;
          aspect-ratio: 16 / 10;
          overflow: hidden;
          background-color: #1a282e;
        }
        .hub-card-image :global(img) {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.5s ease;
        }
        .hub-card:hover .hub-card-image :global(img) {
          transform: scale(1.04);
        }
        .hub-card-body {
          padding: 32px 24px;
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          flex: 1;
        }
        .hub-card-icon {
          width: 64px;
          height: 64px;
          border-radius: 50%;
          background-color: #f26f62;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 18px;
        }
        .hub-card-title {
          font-size: 22px;
          font-weight: 600;
          color: #ffffff;
          margin-bottom: 10px;
          line-height: 1.3;
        }
        .hub-card-description {
          font-size: 15px;
          color: #d6dde0;
          line-height: 1.6;
          margin: 0 0 20px;
          flex: 1;
        }
        .hub-card-cta {
          color: #f26f62;
          font-weight: 600;
          font-size: 14px;
          letter-spacing: 0.5px;
          display: inline-flex;
          align-items: center;
          gap: 8px;
          text-transform: uppercase;
        }
        .hub-card:hover .hub-card-cta {
          color: #ffffff;
        }

        @media (max-width: 991.98px) {
          .services-showcase-title { font-size: 30px; }
        }
        @media (max-width: 767.98px) {
          .services-showcase-title { font-size: 26px; }
          .services-showcase-description { font-size: 15px; }
          .hub-card-title { font-size: 20px; }
        }
        @media (max-width: 575.98px) {
          .services-showcase-title { font-size: 22px; }
          .hub-card-title { font-size: 18px; }
          .hub-card-body { padding: 24px 20px 28px; }
        }
      `}</style>
    </div>
  );
};

export default page;
