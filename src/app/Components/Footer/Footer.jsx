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
        margin: 0,
        borderTop: '0 none',
      }}
    >
      <div
        style={{
          backgroundColor: bg,
          paddingTop: 0,
        }}
      >
        <div className="container" style={{ paddingTop: 40 }} ref={sectionRef}>
          <div
            className={`cs_footer_row footer-content ${isInView ? 'animate-in' : ''}`}
          >
            {/* Brand + Contact */}
            <div className="cs_footer_col">
              <div className="cs_footer_highlight_col" style={{ backgroundColor: bg }}>
                <div className="cs_footer_logo">
                  <Image src={data.logo} alt="Healnexxt" width={205} height={53} />
                </div>

                <ul className="cs_footer_contact">
                  <li>
                    <i style={{ color: fg }}>
                      <FaRegClock />
                    </i>
                    <span
                      style={{ color: fg }}
                      dangerouslySetInnerHTML={{ __html: data.contactText }}
                    />
                  </li>
                  <li>
                    <i style={{ color: fg }}>
                      <FaLocationDot />
                    </i>
                    <span
                      style={{ color: fg }}
                      dangerouslySetInnerHTML={{ __html: data.contactText2 }}
                    />
                  </li>
                  <li>
                    <i style={{ color: fg }}>
                      <FaPhoneAlt />
                    </i>
                    <span
                      style={{ color: fg }}
                      dangerouslySetInnerHTML={{ __html: data.contactText3 }}
                    />
                  </li>
                </ul>

                <div className="cs_social_btns">
                  <Link href={data.facebookHref} className="cs_center social-btn">
                    <i>
                      <FaFacebookF />
                    </i>
                  </Link>
                  <Link href={data.linkedinHref} className="cs_center social-btn">
                    <i>
                      <FaLinkedinIn />
                    </i>
                  </Link>
                  <Link href={data.twitterHref} className="cs_center social-btn">
                    <i>
                      <FaXTwitter />
                    </i>
                  </Link>
                  <Link href={data.instagramHref} className="cs_center social-btn">
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
                  <h2 className="cs_footer_widget_title">
                    {widget.title}
                  </h2>
                  <ul className="cs_footer_widget_nav_list">
                    {widget.links.map((link, idx) => (
                      <li key={idx}>
                        <Link href={link.href}>
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
          <div className={`cs_footer_bottom footer-bottom ${isInView ? 'animate-in' : ''}`}>
            <div className="container">
              <div className="cs_footer_bottom_in">
                <p className="cs_footer_copyright">
                  {data.copyrightText}
                </p>
                <ul className="cs_footer_menu">
                  {data.footerMenu.map((item, index) => (
                    <li key={index}>
                      <Link href={item.href}>{item.text}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

        </div>
      </div>

      <style jsx>{`
        .cs_footer_row {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 24px;
        }

        .cs_footer_logo {
          margin-bottom: 20px;
        }

        .cs_footer_contact {
          list-style: none;
          padding: 0;
          margin: 0;
        }

        .cs_footer_contact li {
          display: flex;
          gap: 12px;
          margin-bottom: 14px;
          align-items: flex-start;
        }

        .cs_social_btns {
          display: flex;
          gap: 10px;
          margin-top: 20px;
        }

        .social-btn {
          background-color: ${accent};
          color: ${fg};
          width: 40px;
          height: 40px;
          display: grid;
          place-items: center;
          border-radius: 6px;
        }

        .cs_footer_widget_title {
          color: ${fg};
          margin-bottom: 16px;
          font-size: 1.2rem;
        }

        .cs_footer_widget_nav_list {
          list-style: none;
          padding: 0;
          margin: 0;
        }

        .cs_footer_widget_nav_list li {
          margin-bottom: 10px;
        }

        .cs_footer_widget_nav_list a {
          color: ${fg};
          text-decoration: none;
        }

        .cs_footer_bottom {
          margin-top: 32px;
          border-top: 1px solid rgba(255,255,255,0.1);
        }

        .cs_footer_bottom .container {
          padding: 18px 0;
        }

        .cs_footer_bottom_in {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 16px;
          flex-wrap: wrap;
        }

        .cs_footer_copyright {
          margin: 0;
          color: ${fg};
        }

        .cs_footer_menu {
          list-style: none;
          padding: 0;
          margin: 0;
          display: flex;
          gap: 16px;
        }

        .cs_footer_menu a {
          color: ${fg};
          text-decoration: none;
        }

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

        /* Tablet Styles */
        @media (max-width: 991.98px) {
          .cs_footer_row {
            grid-template-columns: repeat(2, 1fr);
            gap: 32px;
          }

          .cs_footer_col {
            margin-bottom: 0;
          }

          .cs_footer_col:first-child {
            grid-column: 1 / -1;
          }

          .cs_footer_logo {
            text-align: center;
          }

          .cs_footer_contact li {
            justify-content: center;
          }

          .cs_social_btns {
            justify-content: center;
          }
        }

        /* Mobile Styles */
        @media (max-width: 767.98px) {
          .cs_footer_row {
            grid-template-columns: 1fr;
            gap: 24px;
          }

          .cs_footer_col {
            text-align: center;
          }

          .cs_footer_widget_title {
            font-size: 1.1rem;
          }

          .cs_footer_bottom_in {
            flex-direction: column;
            text-align: center;
          }

          .cs_footer_menu {
            justify-content: center;
            flex-wrap: wrap;
            gap: 12px;
          }

          .cs_footer_copyright {
            font-size: 0.9rem;
          }
        }

        /* Small Mobile Styles */
        @media (max-width: 575.98px) {
          .cs_footer_contact li {
            flex-direction: column;
            align-items: center;
            text-align: center;
            gap: 8px;
          }

          .cs_footer_widget_nav_list li {
            margin-bottom: 8px;
          }

          .cs_footer_menu {
            gap: 8px;
          }

          .cs_footer_menu li {
            font-size: 0.9rem;
          }

          .social-btn {
            width: 36px;
            height: 36px;
          }
        }
      `}</style>
    </footer>
  );
};

export default Footer;
