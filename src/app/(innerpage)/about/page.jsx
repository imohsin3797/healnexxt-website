"use client";
import About from '@/app/Components/About';
import CtaSection1 from '@/app/Components/CtaSection/CtaSection1';
import CounterSection2 from '@/app/Components/FunSection/CounterSection2';
import PageHeading from '@/app/Components/PageHeading';
import Section from '@/app/Components/Section';
import TeamSection from '@/app/Components/TeamSection';
import Map from '@/app/Components/Map/Map';
import React from 'react';

const headingData = {
    title: 'About Page',
    color: '#ffffff'
  };
  
  const aboutData = {
    sectionSubtitle: 'OUR ABOUT US',
    sectionTitle: 'The Future of Connected Care',
    aboutText:
      'Healnexxt redefines healthcare accessibility by connecting patients with specialized services where they need them most. Our innovative, on-demand model brings expert care directly to homes, ensuring primary care providers have a trusted network of specialists for comprehensive treatment.',
    service:
      "Healnexxt is transforming healthcare culture by prioritizing proactive, patient-centered care over reactive treatment. We invest in our team members, fostering a supportive environment that reduces burnout and empowers providers to deliver exceptional care. Through transformational leadership, we cultivate innovation and collaboration—ensuring both patients and healthcare professionals thrive.",
    experienceYears: '26+',
    experienceTitle: 'Years of Experience',
    videoUrl: 'https://www.youtube.com/embed/rRid6GCJtgc',
    videoText: 'How We Work',
    iconboxes: [
      {
        imgUrl: '/assets/img/icons/about_icon_1.png',
        title: 'Patient-Centered Care',
        subtitle: 'An emerging connected care leader.',
      },
      {
        imgUrl: '/assets/img/icons/about_icon_2.png',
        title: 'Specialist Network',
        subtitle: 'Seamlessly connecting patients with specialized services.',
      },
    ],

    btnUrl: '/about',
    btnText: 'About More',
    sectionImgUrl: '/assets/img/about_section_img_1.png',
    headImgUrl: '/assets/img/about-3.webp',
  };
  
  const counterData = [
    {
      iconSrc: '/assets/img/icons/counter_icon_1.png',
      countTo: 567,
      suffix: '+',
      title: 'Active Clients',
    },
    {
      iconSrc: '/assets/img/icons/counter_icon_2.png',
      countTo: 23,
      suffix: 'K+',
      title: 'Team Support',
    },
    {
      iconSrc: '/assets/img/icons/counter_icon_3.png',
      countTo: 241,
      suffix: '+',
      title: 'Projects Completed',
    },
    {
      iconSrc: '/assets/img/icons/counter_icon_4.png',
      countTo: 16,
      suffix: 'K+',
      title: 'Award winner',
    },
  ];
  
  const teamData = {
    subtitle: 'OUR TEAM',
    title: ' Meet Our Expert Team of <br />Physicians and Specialists',
    sliderData: [
      {
        name: 'Dr. Norma Pedric',
        profession: 'Neurologist',
        imageUrl: '/assets/img/specialist-1.png',
        link: '/doctors/doctor-details',
        facebook: '/',
        pinterest: '/',
        twitter: '/',
        instagram: '/',
      },
      {
        name: 'Dr. James Lewis',
        profession: 'Neurologist',
        imageUrl: '/assets/img/specialist-2.png',
        link: '/doctors/doctor-details',
        facebook: '/',
        pinterest: '/',
        twitter: '/',
        instagram: '/',
      },
      {
        name: 'Dr. Sophia Anderson',
        profession: 'Neurologist',
        imageUrl: '/assets/img/specialist-4.png',
        link: '/doctors/doctor-details',
        facebook: '/',
        pinterest: '/',
        twitter: '/',
        instagram: '/',
      },
      {
        name: 'Dr. Michael Thompson',
        profession: 'Neurologist',
        imageUrl: '/assets/img/specialist-5.png',
        link: '/doctors/doctor-details',
        facebook: '/',
        pinterest: '/',
        twitter: '/',
        instagram: '/',
      },
      {
        name: 'Dr. David Wilson',
        profession: 'Neurologist',
        imageUrl: '/assets/img/specialist-6.png',
        link: '/doctors/doctor-details',
        facebook: '/',
        pinterest: '/',
        twitter: '/',
        instagram: '/',
      },
      {
        name: 'Dr. David Wilson',
        profession: 'Neurologist',
        imageUrl: '/assets/img/specialist-7.png',
        link: '/doctors/doctor-details',
        facebook: '/',
        pinterest: '/',
        twitter: '/',
        instagram: '/',
      },
      {
        name: 'Dr. David Wilson',
        profession: 'Neurologist',
        imageUrl: '/assets/img/specialist-8.png',
        link: '/doctors/doctor-details',
        facebook: '/',
        pinterest: '/',
        twitter: '/',
        instagram: '/',
      },
    ],
  };
  
  const ctaData = {
    videoLink: 'https://www.youtube.com/embed/rRid6GCJtgc',
    videoButtonText: 'WATCH VIDEO',
    subtitle: 'OUR WATCH VIDEO',
    title: 'Professional Medical Care Measure Medical.',
    description:
      'We are privileged to work with hundreds of future-thinking medial, including many of the world\'s top hardware, software, and brands , feel safe and comfortable in establishing.',
    buttonLink: '/contact',
    buttonText: 'Video More',
    brandImage: '/assets/img/medical_brand.png',
  };

  const mapData = {
    sectionSubtitle: "OUR LOCATIONS",
    sectionTitle: "Find Us Near You",
    mapText: "We are located in Lakeland, Florida, providing comprehensive wound care and dermatology services to the community.",
    mapImageUrl: "/assets/img/map.png.webp",
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
        <div className='about-page-area' style={{backgroundColor: '#EADFD4'}}>
        <Section
        className={'cs_page_heading cs_bg_filed cs_center about-page-banner'}
        backgroundImage="/assets/img/about-page.png"
        style={{
          backgroundSize: '110% auto',
          backgroundPosition: 'center 80%',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <PageHeading data={headingData} />
      </Section>
      
      <style jsx>{`
        .about-page-banner {
          position: relative;
          height: 750px !important;
          min-height: 750px !important;
        }
        
        .about-page-banner::after {
          content: "";
          position: absolute;
          inset: 0;
          background-color: rgba(255, 255, 255, 0.4);
          z-index: 0;
          pointer-events: none;
        }
        
        @media (max-width: 991px) {
          .about-page-banner {
            height: 550px !important;
            min-height: 550px !important;
          }
        }
        
        .about-page-banner::before {
          content: "";
          position: absolute;
          inset: 0;
          background: linear-gradient(
            to bottom,
            rgba(255, 255, 255, 0.25) 0%,
            rgba(255, 255, 255, 0.25) 40%,
            rgba(255, 255, 255, 0.2) 100%
          );
          z-index: 1;
          pointer-events: none;
        }
        
        .about-page-banner .container {
          position: relative;
          z-index: 2;
        }
      `}</style>
      {/* Start About Section */}

      {/* Start About Section */}
      <Section
        topSpaceLg="70"
        topSpaceMd="35"
        bottomSpaceLg="80"
        bottomSpaceMd="120"
        className={'cs_about cs_style_1 position-relative'}
      >
        <About data={aboutData} />
      </Section>
      {/* End About Section */}

      {/* Start Counter Section */}

      <Section
        topSpaceMd = "30"
        bottomSpaceLg="80"
        bottomSpaceMd="30"
        className="cs_counter_area_2"
        style={{
          backgroundColor: '#23343B',
          backgroundImage: 'none',   // 🔑 cancel any bg image from the theme
          color: '#ffffff',
          '--counterColor': '#ffffff' // make the counter text/icons white on dark bg
  }}
>
  <CounterSection2 data={counterData} />
</Section>

      {/* End Counter Section */}

      {/* Start CTA Section */}
      {/* <Section
        topSpaceLg="70"
        topSpaceMd="110"
        bottomSpaceLg="80"
        bottomSpaceMd="120"
        className={'cs_cta cs_style_2 cs_blue_bg cs_bg_filed cs_center'}
        backgroundImage="/assets/img/cta_bg_1.jpeg"
      >
        <CtaSection1 data={ctaData} />
      </Section> */}
      {/* End CTA Section */}

      {/* Start Team Section */}
      <Section
        topSpaceLg="70"
        topSpaceMd="35"
        bottomSpaceLg="80"
        bottomSpaceMd="0"
      >
        <TeamSection
          hr={true}
          variant={'cs_pagination cs_style_2'}
          data={teamData}
        />
      </Section>
      {/* End Team Section */}

      {/* Start Map Section */}
      <Section
        topSpaceLg="70"
        topSpaceMd="0"
        bottomSpaceLg="80"
        bottomSpaceMd="120"
      >
        <Map data={mapData} />
      </Section>
      {/* End Map Section */}

        </div>
    );
};

export default page;