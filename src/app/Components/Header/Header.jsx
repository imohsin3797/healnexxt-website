"use client"
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { FaAnglesRight } from 'react-icons/fa6';

const Header = ({ variant }) => {
  const [isShowMobileMenu, setIsShowMobileMenu] = useState(false);
  const [openMobileSubmenuIndex, setOpenMobileSubmenuIndex] = useState([]);
  const [isSticky, setIsSticky] = useState('cs_gescout_sticky cs_gescout_show');
  const menu = {
    logoUrl: '/assets/img/healnexxt-logo.png',
    logoLink: '/',
    navItems: [
      { label: 'About', href: '/about' },
      { label: 'Services', href: '/service' },
      { label: 'Contact', href: '/contact' },
    ],
    btnUrl: '/referrals',
    btnText: 'Referrals',
  };

  const handleOpenMobileSubmenu = index => {
    if (openMobileSubmenuIndex.includes(index)) {
      setOpenMobileSubmenuIndex(prev => prev.filter(f => f !== index));
    } else {
      setOpenMobileSubmenuIndex(prev => [...prev, index]);
    }
  };

  return (
    <header
      className={`cs_site_header cs_style_1 ${
        variant ? variant : ''
      } cs_primary_color cs_sticky_header ${isSticky ? isSticky : ''}`}
    >
      <div className="cs_main_header">
        <div className="container">
          <div className="cs_main_header_in">
            <div className="cs_main_header_left">
              <Link className="cs_site_branding" href={menu.logoLink}>
                <Image 
                  src={menu.logoUrl} 
                  alt="Healnexxt Logo" 
                  width={180} 
                  height={50}
                  className="cs_logo_image"
                />
              </Link>
            </div>
            <div className="cs_main_header_right ">
              <div className="cs_nav cs_primary_color ">
                <ul
                  className={`cs_nav_list ${isShowMobileMenu && 'cs_active'}`}
                >
                  {menu.navItems.map((item, index) => (
                    <li
                      className={
                        item.subItems ? 'menu-item-has-children' : ''
                      }
                      key={index}
                    >
                      <Link
                        href={item.href}
                        onClick={() => setIsShowMobileMenu(!isShowMobileMenu)}
                      >
                        {item.label}
                      </Link>
                      {item.subItems && (
                        <ul
                          style={{
                            display: openMobileSubmenuIndex.includes(index)
                              ? 'block'
                              : 'none',
                          }}
                        >
                          {item.subItems.map((subItem, subIndex) => (
                            <li key={subIndex}>
                              <Link
                                href={subItem.href}
                                onClick={() =>
                                  setIsShowMobileMenu(!isShowMobileMenu)
                                }
                              >
                                {subItem.label}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      )}
                      {item.subItems?.length && (
                        <span
                          className={`cs_menu_dropdown_toggle ${
                            openMobileSubmenuIndex.includes(index)
                              ? 'active'
                              : ''
                          }`}
                          onClick={() => handleOpenMobileSubmenu(index)}
                        >
                          <span></span>
                        </span>
                      )}
                    </li>
                  ))}
                  
                  {/* Mobile Referrals Button */}
                  <li className="cs_mobile_button_item">
                    <Link
                      href={menu.btnUrl}
                      className="cs_btn cs_style_1 cs_color_1 cs_mobile_button"
                      onClick={() => setIsShowMobileMenu(!isShowMobileMenu)}
                    >
                      <span>{menu.btnText}</span>
                      <i>
                        <FaAnglesRight />
                      </i>
                    </Link>
                  </li>
                </ul>
                <span
                  className={`cs_menu_toggle ${
                    isShowMobileMenu && 'cs_toggle_active'
                  }`}
                  onClick={() => setIsShowMobileMenu(!isShowMobileMenu)}
                >
                  <span></span>
                </span>
              </div>
              <Link href={menu.btnUrl} className="cs_btn cs_style_1 cs_color_1 cs_desktop_button">
                <span>{menu.btnText}</span>
                <i>
                  <FaAnglesRight />
                </i>
              </Link>
            </div>
          </div>
        </div>
      </div>
      {variant == 'cs_type_1' && (
        <div className="cs_main_header_shape">
          <svg
            width={1679}
            height={112}
            viewBox="0 0 1679 112"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0 0L1679 0.014C1679 0.014 1639 23.128 1639 48.261V111.014H40V47.351C40 22.567 0 0 0 0Z"
              fill="#F26F62"
            />
            <path
              d="M10 0L1669 0.014C1669 0.014 1629 23.128 1629 48.261V111.014H50V47.351C50 22.567 10 0 10 0Z"
              fill="white"
            />
          </svg>
        </div>
      )}
    </header>
  );
};

export default Header;
