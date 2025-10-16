import ContactSection from '@/app/Components/ContactSection';
import GoogleMap from '@/app/Components/GoogleMap/GoogleMap';
import PageHeading from '@/app/Components/PageHeading';
import Section from '@/app/Components/Section';
import React from 'react';

const headingData = {
    backgroundImage: '/assets/img/page_heading_bg.jpg',
    title: 'Contact Us',
  };
  
  const contactData = {
    sectionSubtitle: 'CONTACT US',
    SectionTitle: 'Contact Us Directly <br />For Whatever you Need',
    teethShapeImg: '/assets/img/icons/hero_shape_3.png',
    contactImg: '/assets/img/contact_2.png',
    iconBox: {
      style: 'cs_style_4',
      icon: '/assets/img/icons/call_icon_1.png',
      title: 'Direct Contact',
      subtitle: 'Contact a team of specialists who care.',
    },
  };
  
  const mapData = {
    sectionSubtitle: "OUR LOCATIONS",
    sectionTitle: "Find Us Near You",
    locations: [
      {
        title: "Main Office",
        address: "211 E Main St, Lakeland, FL 33801",
        phone: "(844) HEAL-4-ME"
      }
    ]
  };

const page = () => {
    return (
        <div style={{backgroundColor: '#EADFD4'}}>
      <Section
        className={'cs_page_heading cs_bg_filed cs_center'}
        backgroundImage="/assets/img/page_heading_bg.jpg"
      >
        <PageHeading data={headingData} />
      </Section>

      <Section
        topSpaceLg="70"
        topSpaceMd="110"
        bottomSpaceLg="80"
        bottomSpaceMd="120"
      >
        <ContactSection reverseOrder={true} data={contactData} />
      </Section>

      <Section bottomSpaceLg="0" bottomSpaceMd="30">
        <GoogleMap data={mapData} />
      </Section>

        </div>
    );
};

export default page;