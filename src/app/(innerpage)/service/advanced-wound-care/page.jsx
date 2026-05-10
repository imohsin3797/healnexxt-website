import ServiceHub from '@/app/Components/ServiceHub';
import React from 'react';

const data = {
  hero: {
    title: 'Advanced Wound Care',
    bannerImage: '/assets/img/services.jpg.avif',
  },
  intro: {
    subtitle: 'ADVANCED WOUND CARE',
    title: 'Specialty Wound Care, Delivered Where Patients Live',
    image: '/assets/img/wound.jpg',
    paragraphs: [
      'Healnexxt provides comprehensive wound assessment and advanced procedures designed to accelerate healing and minimize pain. Our evidence-based approach ensures patients receive the highest level of care for optimal recovery — without the burden of repeated trips to a clinic.',
      'From skin substitutes and grafting to ultrasound and shockwave therapy, our clinicians bring hospital-grade modalities directly to patients in their homes and care facilities.',
    ],
    bullets: [
      'On-site evaluation and treatment by experienced clinicians',
      'Advanced modalities backed by clinical evidence',
      'Coordinated care that reduces hospital readmissions',
    ],
  },
  conditionsTitle: 'Procedures & Programs',
  conditionsDescription:
    'Each treatment is selected based on individualized assessment and the latest clinical evidence — chosen to give every wound the best path to healing.',
  conditions: [
    {
      title: 'Skin Substitutes / Grafts',
      description:
        'Bioengineered skin substitutes and graft applications that promote tissue regeneration in chronic and complex wounds resistant to standard care.',
      icon: '/assets/img/icons/service_icon_15.png',
    },
    {
      title: 'Ultramist (Ultrasound Therapy)',
      description:
        'Low-frequency, non-contact ultrasound therapy that helps remove barriers to healing and stimulates cellular activity at the wound bed.',
      icon: '/assets/img/icons/service_icon_11.png',
    },
    {
      title: 'Sanuwave (Shockwave Therapy)',
      description:
        'Extracorporeal shockwave therapy that promotes angiogenesis and tissue regeneration, supporting healing in chronic, recalcitrant wounds.',
      icon: '/assets/img/icons/service_icon_19.png',
    },
    {
      title: 'Debridement',
      description:
        'Selective removal of devitalized tissue to prepare a clean wound bed, reduce bioburden, and create the conditions for healing.',
      icon: '/assets/img/icons/service_icon_1.png',
    },
    {
      title: 'ABI Testing',
      description:
        'Ankle-Brachial Index testing to evaluate arterial perfusion, identify peripheral arterial disease, and guide appropriate treatment.',
      icon: '/assets/img/icons/service_icon_10.png',
    },
    {
      title: 'Transitional Care Management (TCM)',
      description:
        'Structured post-discharge support to bridge the gap between hospital and home, reducing the risk of complications and readmissions.',
      icon: '/assets/img/icons/service_icon_20.png',
    },
    {
      title: 'Chronic Care Management (CCM)',
      description:
        'Ongoing, coordinated care for patients managing chronic conditions — keeping treatment plans aligned across providers and over time.',
      icon: '/assets/img/icons/service_icon_21.png',
    },
  ],
  cta: {
    title: 'Need advanced wound care for a patient?',
    subtitle:
      'Submit a referral and our team will coordinate evaluation and treatment directly at the patient’s location.',
    primaryHref: '/referrals',
    primaryText: 'Refer a Patient',
    secondaryHref: '/contact',
    secondaryText: 'Contact Us',
  },
};

const Page = () => <ServiceHub data={data} />;

export default Page;
