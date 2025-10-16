import React from 'react';
import HeroSection1 from '../Components/HeroSection/HeroSection1';
import Section from '../Components/Section';
import AboutSection1 from '../Components/About/AboutSection1';
import CounterSection2 from '../Components/FunSection/CounterSection2';
import ServiceSection2 from '../Components/Service/ServiceSection2';
import BrandsSlider from '../Components/BrandsSection';
import VideoSection from '../Components/VideoSection';
import MedicalSolution from '../Components/MedicalSolutionSection/MedicalSolution1';
import CtaSection2 from '../Components/CtaSection/CtaSection2';
import ProjectsSection1 from '../Components/ProjectSection/ProjectsSection1';
import TeamSection from '../Components/TeamSection';
import TestimonialSection from '../Components/TestimonialSection';
import ProcessSection from '../Components/ProcessSection';

const HeroData = {
  backgroundImage: '/assets/img/hero-image.png',
  backgroundImage2: '/assets/img/hero-3.jpg',
  backgroundImage3: '/assets/img/hero-2.jpg.webp',

  title: 'The Future of Connected Care',
  subtitle:
    'Advanced mobile wound and dermatology care from a team of experienced physician specialists you can trust.',
  features: [
    'Advanced, Intuitive Technology',
    'Personal Attention and Care',
  ],

  btnText: 'Services',
  btnHref: '/service',

  BtnText1: 'How We Work',
  videoHref: 'https://www.youtube.com/embed/rRid6GCJtgc',

  heroShape: '/assets/img/icons/hero_shape_1.png',
  supportText: {
    number: '24',
    unit: 'Hours',
    description: 'Support',
  },
  iconBoxes: [
    {
      icon: '/assets/img/icons/call_icon_1.png',
      title: 'Contact Us',
      subtitle: 'Contact us directly regarding our services.',
      buttonHref: '/contact',
      buttonText: 'Contact',
    },
    {
      icon: '/assets/img/icons/message_icon_1.png',
      title: 'Services',
      subtitle: 'A comprehensive overview of our services.',
      buttonHref: '/service',
      buttonText: 'Our Services',
    },
  ],
};

  
  const ctaData = {
    imageUrl: '/assets/img/cta_img_1.jpg',
    title: 'Meet The Team Support Medical Service.',
    subtitle: 'For us, there are no minor aspects, because a quality',
    buttonUrl: '/appointments',
    buttonText: 'Booking Now',
  };
  
  const aboutData = {
    sectionSubtitle: 'ABOUT US',
    sectionTitle: 'Advanced Care, Right at Your Doorstep.',
    aboutText:
      'Healnexxt is redefining healthcare accessibility by seamlessly connecting patients with specialized services—right where they need them. Through our innovative, on-demand model, we bring expert care directly to homes, ensuring primary care providers have a trusted network of specialists to support comprehensive treatment.',
    experienceYears: '26+',
    experienceTitle: 'Experience',
  
    iconUrl: '/assets/img/icons/about_icon_1.png',
    title: 'Patient-Centered Care',
    imgUrl: '/assets/img/about_img_4.jpg',
  
    iconUrl2: '/assets/img/icons/about_icon_2.png',
    title2: 'Specialist Network',
    imgUrl2: '/assets/img/about_img_5.jpg',
  
    aboutIconboxSubtitle:
      'With transparent communication and streamlined coordination, we work toward delivering high-quality, patient-centered care with efficiency and ease.',
    readMoreText: 'READ MORE +',
    readMoreLink: '/about',
    videoLink: 'https://www.youtube.com/embed/rRid6GCJtgc',
    videoText: 'How We Work',
    aboutMoreLink: '/about',
    aboutMoreText: 'About More',
    sectionImageUrl: '/assets/img/about_section_img_2.png',
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
  
  const serviceData = {
    subtitle: 'OUR SERVICES',
    title: 'Comprehensive Wound & Dermatology Care',
    description:
      'Healnexxt provides comprehensive wound assessment and advanced procedures, including compression therapy, debridement, wound cultures, imaging, and innovative modalities designed to accelerate healing and minimize pain.',
    services: [
      {
        iconSrc: '/assets/img/icons/service_icon_15.png',
        title: 'Wound Care Specialties',
        subtitle:
          'Surgical wounds, traumatic injuries, burns, diabetic wounds,<br> pressure injuries, and venous & arterial wounds',
        link: '/service/service-details',
        imageSrc: '/assets/img/service_1.png',
      },
      {
        iconSrc: '/assets/img/icons/service_icon_16.png',
        title: 'Dermatology Services',
        subtitle:
          'Expert dermatological care for skin conditions,<br> mole evaluations, and comprehensive skin health assessments',
        link: '/service/service-details',
        imageSrc: '/assets/img/service_1.png',
      },
      {
        iconSrc: '/assets/img/icons/service_icon_17.png',
        title: 'Connected Care Network',
        subtitle:
          'Strategic partnerships that bridge healthcare gaps,<br> reduce readmissions, and prevent unnecessary amputations',
        link: '/service/service-details',
        imageSrc: '/assets/img/service_1.png',
      },
      {
        iconSrc: '/assets/img/icons/service_icon_18.png',
        title: 'Continued Support',
        subtitle:
          'Compassionate guidance through every step of healing<br> with dedicated advocates who ensure you never feel alone',
        link: '/service/service-details',
        imageSrc: '/assets/img/service_1.png',
      },
    ],
  };
  
  const brandData = [
    { image: '/assets/img/envato-logo.png', altText: 'Brand 1' },
    { image: '/assets/img/envato-logo.png', altText: 'Brand 2' },
    { image: '/assets/img/envato-logo.png', altText: 'Brand 3' },
    { image: '/assets/img/envato-logo.png', altText: 'Brand 4' },
    { image: '/assets/img/envato-logo.png', altText: 'Brand 5' },
    { image: '/assets/img/envato-logo.png', altText: 'Brand 6' },
  ];
  
  const videoSectionData = {
    videoUrl: 'https://www.youtube.com/embed/rRid6GCJtgc',
    title: 'We Provide Medical This Services ',
    title2: '<br /> Who Generally Alone',
    highlightedText: 'Health',
    subtitle:
      'We are privileged to work with hundreds of future-thinking medial, including many of the world\'s top hardware, software',
    btnText: 'Contact Now',
    btnLink: '/contact',
    btnText1: 'Discover More',
    btnLink1: '/about',
  
    shapeImage: '/assets/img/medical_brand.png',
  };
  
  const medicalSolutionData = {
    sectionSubtitle: 'OUR CHOOSE US',
    sectionTitle: 'More Than Working Now<br> Solution Medical.',
    sectionDescription:
      'We are privileged to work with hundreds of future-thinking medial, including many of the world\'s top hardware, software, and brands, feel safe and comfortable in establishing.',
    cards: [
      {
        icon: '/assets/img/icons/service_icon_19.png',
        index: '01',
        title: 'Medical Service',
        description:
          "Lorem Ipsum is simply dummy text of the printing and Lorem been the industry's.",
      },
      {
        icon: '/assets/img/icons/service_icon_10.png',
        index: '02',
        title: 'Blood & Check',
        description:
          "Lorem Ipsum is simply dummy text of the printing and Lorem been the industry's.",
      },
      {
        icon: '/assets/img/icons/service_icon_11.png',
        index: '03',
        title: 'Heart-Beat',
        description:
          "Lorem Ipsum is simply dummy text of the printing and Lorem been the industry's.",
      },
    ],
    mainImage: '/assets/img/medical_solution_3.png',
  };
  
  const ctaSectionData = {
    title: 'Meet The Team Support',
    subtitle: 'For us, there are because a quality',
    buttonText: 'Contact Now',
    buttonLink: '/contact',
  };
  
  const projectsSectionData = {
    sectionTitle: 'All The Great Work That Medical Service',
    sectionSubtitle: 'OUR PORTFOLIO',
    sectionDescription:
      'We are privileged to work with hundreds of future-thinking medical, including many of the world\'s top hardware, software, and brands, feel safe and comfortable in establishing.',
    projects: [
      {
        id: 1,
        title: 'Medical Board',
        subtitle: 'Medical / Doctor',
        imageSrc: '/assets/img/project_4.jpg',
        link: '/',
      },
      {
        id: 2,
        title: 'Gynecology Project',
        subtitle: 'Medical / Doctor',
        imageSrc: '/assets/img/project_5.jpg',
        link: '/',
      },
      {
        id: 3,
        title: 'Dental Project',
        subtitle: 'Medical / Doctor',
        imageSrc: '/assets/img/project_6.jpg',
        link: '/',
      },
      {
        id: 4,
        title: 'Neurology Project',
        subtitle: 'Medical / Doctor',
        imageSrc: '/assets/img/project_7.jpg',
        link: '/',
      },
      {
        id: 5,
        title: 'Eye Care Project',
        subtitle: 'Medical / Doctor',
        imageSrc: '/assets/img/project_8.jpg',
        link: '/',
      },
      {
        id: 6,
        title: 'Surgery Project',
        subtitle: 'Medical / Doctor',
        imageSrc: '/assets/img/project_9.jpg',
        link: '/',
      },
    ],
  };
  
  const teamData = {
    subtitle: 'OUR TEAM',
    title: ' Meet Our Expert Team of <br />Physicians and Specialists',
    sliderData: [
      {
        name: 'Dr. Norma Pedric',
        profession: 'Neurologist',
        imageUrl: '/assets/img/team_1.jpg',
        link: '/doctors/doctor-details',
        facebook: '/',
        pinterest: '/',
        twitter: '/',
        instagram: '/',
      },
      {
        name: 'Dr. James Lewis',
        profession: 'Neurologist',
        imageUrl: '/assets/img/team_3.jpg',
        link: '/doctors/doctor-details',
        facebook: '/',
        pinterest: '/',
        twitter: '/',
        instagram: '/',
      },
      {
        name: 'Dr. Sophia Anderson',
        profession: 'Neurologist',
        imageUrl: '/assets/img/team_4.jpg',
        link: '/doctors/doctor-details',
        facebook: '/',
        pinterest: '/',
        twitter: '/',
        instagram: '/',
      },
      {
        name: 'Dr. Michael Thompson',
        profession: 'Neurologist',
        imageUrl: '/assets/img/team_5.jpg',
        link: '/doctors/doctor-details',
        facebook: '/',
        pinterest: '/',
        twitter: '/',
        instagram: '/',
      },
      {
        name: 'Dr. David Wilson',
        profession: 'Neurologist',
        imageUrl: '/assets/img/team_6.jpg',
        link: '/doctors/doctor-details',
        facebook: '/',
        pinterest: '/',
        twitter: '/',
        instagram: '/',
      },
    ],
  };
  
  const testimonialData = {
    thumbnail: '/assets/img/review.png',
    testimonials: [
      {
        rating: 2,
        subtitle:
          'We are privileged to work with hundreds of future-thinking medial, including many of the world\'s top hardware, dental, and brands , feel safe and comfortable in establishing.',
        avatar: '/assets/img/avatar_1.png',
        name: 'Dr. Mehara Bara',
        position: 'Dental Manager',
      },
      {
        rating: 4,
        subtitle:
          'We are privileged to work with hundreds of future-thinking medial, including many of the world\'s top hardware, dental, and brands , feel safe and comfortable in establishing.',
        avatar: '/assets/img/avatar_2.png',
        name: 'John Doe',
        position: 'Healthcare Professional',
      },
      {
        rating: 3,
        subtitle:
          'We are privileged to work with hundreds of future-thinking medial, including many of the world\'s top hardware, dental, and brands , feel safe and comfortable in establishing.',
        avatar: '/assets/img/avatar_2.png',
        name: 'John Doe',
        position: 'Healthcare Professional',
      },
    ],
  };
  
  const processData = {
    sectionSubtitle: 'OUR WORKING PROCESS',
    sectionTitle: 'This Doctor Supporting<br> This Patient Work',
    sectionDescription:
      'We are privileged to work with hundreds of future-thinking medial,including many of the world\'s top hardware, software, and brands,feel safe and comfortable in establishing.',
    processSlides: [
      {
        id: 1,
        imageUrl: '/assets/img/process_1.png',
        title: 'Make Appointment',
        subtitle: 'Medical dolor reprehender velit dolore fugiat',
        bgImageUrl: '/assets/img/overlay_bg_1.jpeg',
        link: '/service/service-details',
      },
      {
        id: 2,
        imageUrl: '/assets/img/process_2.png',
        title: 'Get Consultant',
        subtitle: 'Medical dolor reprehender velit dolore fugiat',
        bgImageUrl: '/assets/img/overlay_bg_1.jpeg',
        link: '/service/service-details',
      },
      {
        id: 3,
        imageUrl: '/assets/img/process_3.png',
        title: 'Take Treatment',
        subtitle: 'Medical dolor reprehender velit dolore fugiat',
        bgImageUrl: '/assets/img/overlay_bg_1.jpeg',
        link: '/service/service-details',
      },
      {
        id: 4,
        imageUrl: '/assets/img/process_4.png',
        title: 'Get Relief',
        subtitle: 'Medical dolor reprehender velit dolore fugiat',
        bgImageUrl: '/assets/img/overlay_bg_1.jpeg',
        link: '/service/service-details',
      },
    ],
  };
  
const page = () => {
    return (
        <div style={{ backgroundColor: '#EADFD4' }}>
            
      {/* Start Hero Section */}
      <HeroSection1 data={HeroData} />
      {/* End Hero Section */}

      {/* Start About Section */}
      <Section
        topSpaceLg="80"
        topSpaceMd="120"
        bottomSpaceLg="80"
        bottomSpaceMd="120"
        className="cs_about cs_style_1 cs_type_1 position-relative"
      >
        <AboutSection1 data={aboutData} />
      </Section>
      {/* End About Section */}

      {/* Start Counter Section */}
      {/* <Section
        bottomSpaceLg="80"
        bottomSpaceMd="120"
        className="cs_counter_area_2"
      >
        <CounterSection2 data={counterData} />
      </Section> */}
      {/* End Counter Section */}

      {/* Start Service Section */}
      <Section
        topSpaceLg="70"
        topSpaceMd="110"
        bottomSpaceLg="80"
        bottomSpaceMd="120"
        style={{ backgroundColor: '#23343B !important', padding: '60px 0', margin: '0', minHeight: '100%' }}
        className="cs_service_section_bg"
      >
        <ServiceSection2 data={serviceData} />
      </Section>
      {/* End Service Section */}

      {/* Start Brand Section */}
      {/* <Section topSpaceLg="70" topSpaceMd="90" className="cs_brands_section" style={{ backgroundColor: 'tan' }}>
        <BrandsSlider hr={false} data={brandData} />
      </Section> */}
      {/* End Brand Section */}

      {/* Start Video Section */}
      {/* <Section
        topSpaceLg="70"
        topSpaceMd="120"
        bottomSpaceLg="80"
        bottomSpaceMd="120"
        className="cs_video_area position-relative"
      >
        <VideoSection data={videoSectionData} />
      </Section> */}
      {/* End Video Section */}

      {/* Start Medical Solution Section */}
      {/* <Section
        className="cs_blue_bg position-relative"
        backgroundImage="/assets/img/medical_solution_bg_1.jpg"
      >
        <MedicalSolution data={medicalSolutionData} />
      </Section> */}
      {/* End Medical Solution Section */}

      {/* Start CTA Section */}
      {/* <Section className="cs_cta cs_style_3 cs_accent_bg">
        <CtaSection2 data={ctaSectionData} />
      </Section> */}
      {/* End CTA Section */}

      {/* Start Projects Section */}
      {/* <Section topSpaceLg="70" topSpaceMd="110">
        <ProjectsSection1 data={projectsSectionData} />
      </Section> */}
      {/* End Projects Section */}

      {/* Start Team Section */}
      <Section
        topSpaceLg="10"
        topSpaceMd="20"
        className="cs_team_section position-relative"
        style={{ backgroundColor: '#EADFD4' }}
      >
        <TeamSection
          variant={'cs_pagination cs_style_2 cs_accent_color'}
          bgColor={true}
          data={teamData}
        />
      </Section>
      {/* End Team Section */}

      {/* Start Testimonial Section */}
      <Section
        topSpaceLg="80"
        topSpaceMd="120"
        bottomSpaceLg="80"
        bottomSpaceMd="120"
        className="cs_testimonial_area"
        backgroundImage="/assets/img/testomonial_bg_1.png"
        style={{ 
          backgroundImage: 'linear-gradient(rgba(234, 223, 212, 0.3), rgba(234, 223, 212, 0.3)), url(/assets/img/testomonial_bg_1.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <TestimonialSection data={testimonialData} />
      </Section>
      {/* End Testimonial Section */}

      {/* Start Process Section */}
      {/* <Section
        topSpaceLg="70"
        topSpaceMd="110"
        bottomSpaceLg="80"
        bottomSpaceMd="120"
        className="cs_gray_bg_2"
      >
        <ProcessSection data={processData} />
      </Section> */}
      {/* End Process Section */}


        </div>
    );
};

export default page;