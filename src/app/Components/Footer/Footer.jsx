"use client";
import Image from 'next/image';
import Link from 'next/link';
import { FaXTwitter } from 'react-icons/fa6';
import { FaPhoneAlt } from 'react-icons/fa';
import {
  FaFacebookF,
  FaInstagram,
  FaLocationDot,
  FaLinkedinIn,
  FaRegClock,
} from 'react-icons/fa6';
import { useState, useEffect, useRef } from 'react';

const Footer = () => {
  const [isInView, setIsInView] = useState(false);
  const sectionRef = useRef(null);

  // Intersection Observer to detect when footer comes into view
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
        }
      },
      {
        threshold: 0.2, // Trigger when 20% of the footer is visible
        rootMargin: '0px 0px -100px 0px' // Start animation when footer is closer to viewport
      }
    );

    const currentRef = sectionRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  const data = {
    logo: '/assets/img/word-logo.png',
    contactText:
      'Monday - Friday<br />8:00am - 5:00pm',
    contactText2: '211 E Main St,<br />Lakeland, FL 33801',
    contactText3: 'info@healnexxt.com<br />Phone: (844) HEAL-4-ME<br />Fax: (833) 812-1427',
    facebookHref: '/',
    linkedinHref: '/',
    twitterHref: '/',
    instagramHref: '/',
    widgets: [
      {
        title: 'Services',
        links: [
          { href: '/service', text: 'Wound Care Specialties' },
          { href: '/service', text: 'Dermatology Services' },
          { href: '/service', text: 'Connected Care Network' },
          { href: '/service', text: 'Continued Support' },
          { href: '/referrals', text: 'Referrals' },
        ],
      },
      {
        title: 'Quick Links',
        links: [
          { href: '/', text: 'Home' },
          { href: '/about', text: 'About Us' },
          { href: '/service', text: 'Our Services' },
          { href: '/contact', text: 'Contact' },
          { href: '/referrals', text: 'Referrals' },
        ],
      },
    ],
    copyrightText: 'Copyright © 2024 Healnexxt, All Rights Reserved.',
    footerMenu: [
      { href: '/about', text: 'About Us' },
      { href: '/service', text: 'Services' },
      { href: '/contact', text: 'Contact' },
      { href: '/referrals', text: 'Referrals' },
    ],
  };

  // brand palette
  const bg = '#23343B';
  const fg = '#ffffff';
  const accent = '#F26F62';

  return (
    <footer
      className="cs_footer"
      style={{
        backgroundColor: bg,
        color: fg,
        // kill any ghost gaps from parent styles
        margin: 0,
        borderTop: '0 none',
      }}
    >
      {/* force full-bleed background to the very top of the footer */}
      <div
        style={{
          backgroundColor: bg,
          paddingTop: 0,
        }}
      >
        <div className="container" style={{ paddingTop: 40 }} ref={sectionRef}>
          <div
            className={`cs_footer_row footer-content ${isInView ? 'animate-in' : ''}`}
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3, minmax(0,1fr))',
              gap: 24,
            }}
          >
            {/* Brand + Contact */}
            <div className="cs_footer_col">
              <div className="cs_footer_highlight_col" style={{ backgroundColor: bg }}>
                <div className="cs_footer_logo" style={{ marginBottom: 20 }}>
                  <Image src={data.logo} alt="Healnexxt" width={205} height={53} />
                </div>

                <ul className="cs_footer_contact cs_mp_0" style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                  <li style={{ display: 'flex', gap: 12, marginBottom: 14 }}>
                    <i style={{ color: fg, lineHeight: 1 }}>
                      <FaRegClock />
                    </i>
                    <span
                      style={{ color: fg }}
                      dangerouslySetInnerHTML={{ __html: data.contactText }}
                    />
                  </li>
                  <li style={{ display: 'flex', gap: 12, marginBottom: 14 }}>
                    <i style={{ color: fg, lineHeight: 1 }}>
                      <FaLocationDot />
                    </i>
                    <span
                      style={{ color: fg }}
                      dangerouslySetInnerHTML={{ __html: data.contactText2 }}
                    />
                  </li>
                  <li style={{ display: 'flex', gap: 12 }}>
                    <i style={{ color: fg, lineHeight: 1 }}>
                      <FaPhoneAlt />
                    </i>
                    <span
                      style={{ color: fg }}
                      dangerouslySetInnerHTML={{ __html: data.contactText3 }}
                    />
                  </li>
                </ul>

                <div className="cs_social_btns cs_style_1" style={{ display: 'flex', gap: 10, marginTop: 20 }}>
                  <Link href={data.facebookHref} className="cs_center" style={{ backgroundColor: accent, color: fg, width: 40, height: 40, display: 'grid', placeItems: 'center', borderRadius: 6 }}>
                    <i>
                      <FaFacebookF />
                    </i>
                  </Link>
                  <Link href={data.linkedinHref} className="cs_center" style={{ backgroundColor: accent, color: fg, width: 40, height: 40, display: 'grid', placeItems: 'center', borderRadius: 6 }}>
                    <i>
                      <FaLinkedinIn />
                    </i>
                  </Link>
                  <Link href={data.twitterHref} className="cs_center" style={{ backgroundColor: accent, color: fg, width: 40, height: 40, display: 'grid', placeItems: 'center', borderRadius: 6 }}>
                    <i>
                      <FaXTwitter />
                    </i>
                  </Link>
                  <Link href={data.instagramHref} className="cs_center" style={{ backgroundColor: accent, color: fg, width: 40, height: 40, display: 'grid', placeItems: 'center', borderRadius: 6 }}>
                    <i>
                      <FaInstagram />
                    </i>
                  </Link>
                </div>
              </div>
            </div>

            {/* Widgets */}
            {data.widgets.map((widget, index) => (
              <div className="cs_footer_col" key={index}>
                <div className="cs_footer_widget">
                  <h2 className="cs_footer_widget_title" style={{ color: fg, marginBottom: 16 }}>
                    {widget.title}
                  </h2>
                  <ul className="cs_footer_widget_nav_list cs_mp_0" style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                    {widget.links.map((link, idx) => (
                      <li key={idx} style={{ marginBottom: 10 }}>
                        <Link href={link.href} style={{ color: fg, textDecoration: 'none' }}>
                          {link.text}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}

          </div>

          {/* bottom */}
          <div className={`cs_footer_bottom footer-bottom ${isInView ? 'animate-in' : ''}`} style={{ backgroundColor: bg, marginTop: 32, borderTop: '1px solid rgba(255,255,255,0.1)' }}>
            <div className="container" style={{ paddingTop: 18, paddingBottom: 18 }}>
              <div className="cs_footer_bottom_in" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 16, flexWrap: 'wrap' }}>
                <p className="cs_footer_copyright mb-0" style={{ color: fg, margin: 0 }}>
                  {data.copyrightText}
                </p>
                <ul className="cs_footer_menu cs_mp_0" style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', gap: 16 }}>
                  {data.footerMenu.map((item, index) => (
                    <li key={index}>
                      <Link href={item.href} style={{ color: fg, textDecoration: 'none' }}>{item.text}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

        </div>
      </div>

      <style jsx>{`
        /* Footer Scroll Animations */
        .footer-content {
          opacity: 0;
          transform: translateY(30px);
          transition: opacity 1s ease-out, transform 1s ease-out;
          will-change: opacity, transform;
        }

        .footer-bottom {
          opacity: 0;
          transform: translateY(30px);
          transition: opacity 1s ease-out, transform 1s ease-out;
          will-change: opacity, transform;
        }

        .footer-content.animate-in {
          opacity: 1;
          transform: translateY(0);
          transition-delay: 0.2s;
        }

        .footer-bottom.animate-in {
          opacity: 1;
          transform: translateY(0);
          transition-delay: 0.4s;
        }

        /* Mobile Responsiveness */
        @media (max-width: 991.98px) {
          .footer-content {
            grid-template-columns: repeat(2, minmax(0,1fr));
            gap: 20px;
          }
          
          .cs_footer_col {
            margin-bottom: 2rem;
          }
          
          .cs_social_btns {
            justify-content: center;
            margin-top: 1.5rem;
          }
        }

        @media (max-width: 767.98px) {
          .footer-content {
            grid-template-columns: 1fr;
            gap: 16px;
          }
          
          .cs_footer_col {
            margin-bottom: 1.5rem;
            text-align: center;
          }
          
          .cs_footer_logo {
            text-align: center;
          }
          
          .cs_footer_contact {
            text-align: center;
          }
          
          .cs_footer_contact li {
            justify-content: center;
          }
          
          .cs_social_btns {
            justify-content: center;
            margin-top: 1rem;
          }
          
          .cs_footer_bottom_in {
            flex-direction: column;
            text-align: center;
            gap: 12px;
          }
          
          .cs_footer_menu {
            justify-content: center;
            flex-wrap: wrap;
          }
        }

        @media (max-width: 575.98px) {
          .cs_footer_widget_title {
            font-size: 1.1rem;
          }
          
          .cs_footer_widget_nav_list li {
            margin-bottom: 8px;
          }
          
          .cs_footer_copyright {
            font-size: 0.9rem;
          }
          
          .cs_footer_menu {
            gap: 12px;
          }
          
          .cs_footer_menu li {
            font-size: 0.9rem;
          }
        }
      `}</style>
    </footer>
  );
};

export default Footer;
