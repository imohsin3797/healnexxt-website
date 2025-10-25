import PageHeading from '@/app/Components/PageHeading';
import Section from '@/app/Components/Section';
import MedicalSolution from '@/app/Components/MedicalSolutionSection/MedicalSolution2';
import OverlapGuard from '@/app/Components/OverlapGuard'; // client-only style injector
import ThreeIcon from '@/app/Components/ThreeIcon/ThreeIcon';
import React from 'react';

const headingData = { title: 'Services' };

const threeIconData = {
  sectionSubtitle: "OUR SERVICES",
  sectionTitle: "Comprehensive Wound & Dermatology Care",
  sectionDescription: "Healnexxt provides comprehensive wound assessment and advanced procedures, including compression therapy, debridement, wound cultures, imaging, and innovative modalities designed to accelerate healing and minimize pain.",
  icons: [
    {
      icon: "/assets/img/icons/service_icon_12.png",
      title: "Wound Care Specialties",
      description: "Surgical wounds, traumatic injuries, burns, diabetic wounds, pressure injuries, and venous & arterial wounds."
    },
    {
      icon: "/assets/img/icons/service_icon_10.png",
      title: "Connected Care Network", 
      description: "Strategic partnerships that bridge healthcare gaps, reduce readmissions, and prevent unnecessary amputations."
    },
    {
      icon: "/assets/img/icons/service_icon_11.png",
      title: "Continued Support",
      description: "Compassionate guidance through every step of healing with dedicated advocates who ensure you never feel alone."
    }
  ]
};

const medicalSolutionData = {
  subtitle: 'OUR SERVICES',
  title: 'Connected Care Through Strategic Partnerships',
  description:
    'Healnexxt leverages years of expertise in post-acute care to bridge gaps in fragmented healthcare, reducing hospital readmissions, improving wound healing, and preventing unnecessary amputations. Through a proactive, connected approach, we ensure patients receive seamless, high-quality care that drives better outcomes.',
  thumbnailSrc: '/assets/img/medical_solution_3.png',
  links: [
    {
      href: '/service/service-details',
      iconSrc: '/assets/img/icons/service_icon_19.png',
      text: 'Comprehensive Wound Assessment',
    },
    {
      href: '/service/service-details',
      iconSrc: '/assets/img/icons/service_icon_10.png',
      text: 'Dermatology Services',
    },
    {
      href: '/service/service-details',
      iconSrc: '/assets/img/icons/service_icon_11.png',
      text: 'Connected Care Network',
    },
  ],
};

const page = () => {
  return (
    <div style={{ backgroundColor: '#EADFD4' }}>
      {/* Optional: inject safe global fixes from a client component */}
      <OverlapGuard />

      <Section
        className={'cs_page_heading cs_bg_filed cs_center'}
        backgroundImage="/assets/img/page_heading_bg.jpg"
      >
        <PageHeading data={headingData} />
      </Section>

      {/* Three Icon Section */}
      <Section
        topSpaceLg="80"
        topSpaceMd="60"
        bottomSpaceLg="80"
        bottomSpaceMd="60"
        style={{
          backgroundColor: '#23343B',
          color: '#ffffff'
        }}
      >
        <ThreeIcon data={threeIconData} />
      </Section>

      {/* Contained services section that won't overlap footer */}
      <Section
        className="services-solution"
        topSpaceLg="80"
        topSpaceMd="60"
        bottomSpaceLg="80"
        bottomSpaceMd="60"
        style={{
          backgroundColor: '#23343B',
          paddingTop: '80px',
          paddingBottom: '140px', // extra breathing room above footer
          overflow: 'clip',        // block any decorative overflow
          position: 'relative',
          zIndex: 1,
        }}
      >
        <MedicalSolution data={medicalSolutionData} />
      </Section>
    </div>
  );
};

export default page;