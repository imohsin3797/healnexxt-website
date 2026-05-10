import ServiceHub from '@/app/Components/ServiceHub';
import React from 'react';

const data = {
  hero: {
    title: 'Dermatology Services',
    bannerImage: '/assets/img/services.jpg.avif',
  },
  intro: {
    subtitle: 'DERMATOLOGY SERVICES',
    title: 'Expert Skin Care, Delivered with Precision',
    image: '/assets/img/derm.jpg',
    paragraphs: [
      'Healnexxt provides specialty dermatology services for evaluation and treatment of a wide range of skin conditions. Our experienced clinicians combine careful clinical assessment with proven procedural techniques to deliver outcomes patients can see and feel.',
      'From routine lesion removal to biopsies and wound-related dermatologic care, we bring the right level of expertise — directly to where it’s needed.',
    ],
    bullets: [
      'Specialty dermatologic evaluation and treatment',
      'Procedural care performed with clinical precision',
      'Coordinated follow-up and pathology review',
    ],
  },
  conditionsTitle: 'Procedures We Perform',
  conditionsDescription:
    'A focused range of dermatologic procedures, performed by skilled clinicians and supported by full diagnostic workup when needed.',
  conditions: [
    {
      title: 'Skin Lesion Removal',
      description:
        'Removal of benign and suspicious skin lesions using techniques selected for the lesion type, location, and patient factors.',
      icon: '/assets/img/icons/service_icon_16.png',
    },
    {
      title: 'Biopsies (Skin Biopsy Procedures)',
      description:
        'Punch, shave, and excisional biopsies for accurate histologic diagnosis, with coordinated pathology review and clear follow-up.',
      icon: '/assets/img/icons/service_icon_1.png',
    },
    {
      title: 'Cryotherapy (Freezing Lesions)',
      description:
        'Cryotherapy for treatment of warts, actinic keratoses, and select benign lesions — a quick, effective in-visit procedure.',
      icon: '/assets/img/icons/service_icon_19.png',
    },
    {
      title: 'Wound-Related Dermatologic Care',
      description:
        'Specialty dermatologic management of skin conditions surrounding chronic wounds, integrated with our wound care program for cohesive treatment.',
      icon: '/assets/img/icons/service_icon_15.png',
    },
  ],
  cta: {
    title: 'Need a dermatology consult or procedure?',
    subtitle:
      'Submit a referral or contact our team to coordinate dermatologic evaluation and treatment for your patient.',
    primaryHref: '/referrals',
    primaryText: 'Refer a Patient',
    secondaryHref: '/contact',
    secondaryText: 'Contact Us',
  },
};

const Page = () => <ServiceHub data={data} />;

export default Page;
