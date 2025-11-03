import PageHeading from '@/app/Components/PageHeading';
import Section from '@/app/Components/Section';
import MedicalSolution from '@/app/Components/MedicalSolutionSection/MedicalSolution2';
import OverlapGuard from '@/app/Components/OverlapGuard'; // client-only style injector
import ThreeIcon from '@/app/Components/ThreeIcon/ThreeIcon';
import React from 'react';

const headingData = { title: 'Services' };

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

const medicalSolutionData = {
  subtitle: 'OUR SERVICES',
  title: 'Comprehensive Healthcare Services',
  description:
    'Healnexxt provides expert care across four key service areas, delivering specialized medical attention right to your doorstep with advanced technology and compassionate support. Our comprehensive approach ensures patients receive seamless, high-quality care that drives better outcomes.',
  thumbnailSrc: '/assets/img/medical_solution_3.png',
  links: [
    {
      href: '/service/service-details',
      iconSrc: '/assets/img/icons/service_icon_16.png',
      text: 'Dermatology Care',
    },
    {
      href: '/service/service-details',
      iconSrc: '/assets/img/icons/service_icon_12.png',
      text: 'Wound Care',
    },
    {
      href: '/service/service-details',
      iconSrc: '/assets/img/icons/service_icon_17.png',
      text: 'Psych and Behavior Care',
    },
    {
      href: '/service/service-details',
      iconSrc: '/assets/img/icons/service_icon_18.png',
      text: 'Urgent Care',
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