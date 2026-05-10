import ServiceHub from '@/app/Components/ServiceHub';
import React from 'react';

const data = {
  hero: {
    title: 'Behavioral Health Telehealth',
    bannerImage: '/assets/img/services.jpg.avif',
  },
  intro: {
    subtitle: 'BEHAVIORAL HEALTH TELEHEALTH',
    title: 'Compassionate Mental Health Care, Just a Connection Away',
    image: '/assets/img/pych-care.jpg',
    paragraphs: [
      'Healnexxt’s behavioral health telehealth services pair patients with experienced clinicians who deliver psychiatric and psychological care through a private, secure virtual visit. We meet patients where they are — emotionally and physically — without the barriers of travel, waiting rooms, or scheduling friction.',
      'Whether the goal is a comprehensive evaluation, ongoing medication management, or talk therapy, our care is personalized, evidence-based, and designed for continuity over time.',
    ],
    bullets: [
      'Private, HIPAA-compliant virtual visits',
      'Coordinated psychiatry and therapy in one network',
      'Continuity of care across primary and specialty providers',
    ],
  },
  conditionsTitle: 'Services We Offer',
  conditionsDescription:
    'A full continuum of behavioral health services, delivered virtually with the same depth and rigor patients would expect from an in-person specialty clinic.',
  conditions: [
    {
      title: 'Psychiatric Evaluations',
      description:
        'Comprehensive diagnostic assessments by experienced psychiatric clinicians to identify conditions and build a personalized treatment plan.',
      icon: '/assets/img/icons/service_icon_17.png',
    },
    {
      title: 'Medication Management',
      description:
        'Ongoing prescription oversight, dosage adjustment, and monitoring to ensure medications remain effective, safe, and aligned with goals.',
      icon: '/assets/img/icons/service_icon_10.png',
    },
    {
      title: 'Therapy / Counseling Services',
      description:
        'Individualized talk therapy with licensed clinicians for a wide range of behavioral, emotional, and life-stage challenges.',
      icon: '/assets/img/icons/about_icon_1.png',
    },
    {
      title: 'Depression & Anxiety Treatment',
      description:
        'Targeted, evidence-based treatment combining therapy and medication management to address depression, anxiety, and related conditions.',
      icon: '/assets/img/icons/service_icon_11.png',
    },
  ],
  cta: {
    title: 'Connect a patient with behavioral health support.',
    subtitle:
      'Refer a patient or get in touch to learn how Healnexxt’s telehealth model integrates with your care plan.',
    primaryHref: '/referrals',
    primaryText: 'Refer a Patient',
    secondaryHref: '/contact',
    secondaryText: 'Contact Us',
  },
};

const Page = () => <ServiceHub data={data} />;

export default Page;
