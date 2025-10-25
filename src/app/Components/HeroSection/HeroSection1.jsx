"use client";
import { BsFillCheckCircleFill } from "react-icons/bs";
import Button from "../Buttons";
import { FaAnglesRight } from "react-icons/fa6";
import { useState, useEffect, useMemo } from "react";
import VideoModal from "../VideoSection/Modal";
import Image from "next/image";

const SLIDE_MS = 5000; // time per slide
const TICK_MS = 50;    // progress cadence

const HeroSection1 = ({ data }) => {
  const [toggle, setToggle] = useState(false);
  const [iframeSrc, setIframeSrc] = useState("about:blank");
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [progress, setProgress] = useState(0); // 0..100 fill %
  const [isReady, setIsReady] = useState(false); // gate for first-load animations

  // Up to 3 images, with fallbacks
  const backgroundImages = useMemo(
    () =>
      [
        data.backgroundImage,
        data.backgroundImage2 || data.backgroundImage,
        data.backgroundImage3 || data.backgroundImage,
      ].filter(Boolean).slice(0, 3),
    [data.backgroundImage, data.backgroundImage2, data.backgroundImage3]
  );

  // Mark component "ready" on the next paint to avoid first-render flashes
  useEffect(() => {
    const id = requestAnimationFrame(() => setIsReady(true));
    return () => cancelAnimationFrame(id);
  }, []);

  // Auto-advance + progress (only when ready)
  useEffect(() => {
    if (!isReady || backgroundImages.length <= 1) return;
    setProgress(0);
    const id = setInterval(() => {
      setProgress((p) => {
        const next = p + (TICK_MS / SLIDE_MS) * 100;
        if (next >= 100) {
          setCurrentImageIndex((prev) => (prev + 1) % backgroundImages.length);
          return 0;
        }
        return next;
      });
    }, TICK_MS);
    return () => clearInterval(id);
  }, [isReady, currentImageIndex, backgroundImages.length]);

  const handelClick = () => {
    setIframeSrc(`${data.videoHref}`);
    setToggle(true);
  };
  const handelClose = () => {
    setIframeSrc("about:blank");
    setToggle(false);
  };
  const goToSlide = (idx) => {
    setCurrentImageIndex(idx);
    setProgress(0);
  };

  const secondsLeft = Math.ceil((SLIDE_MS * (1 - progress / 100)) / 1000);

  return (
    <>
      <section className={isReady ? "is-ready" : "not-ready"}>
        <div className="cs_hero cs_style_2 cs_center">
          {/* Backgrounds with fade (background is allowed to show even when not-ready) */}
          <div className="hero-bg-stack" aria-hidden="true">
            {backgroundImages.map((src, idx) => (
              <div
                key={idx}
                className={`bg-slide ${idx === 1 ? 'bg-slide-second' : ''} ${currentImageIndex === idx ? "active" : ""}`}
                style={{ backgroundImage: `url(${src})` }}
              />
            ))}
          </div>

          <div className="container">
            <div className="cs_hero_text">
              {isReady && (
                <div className="cs_hero_text_in">
                  <h1
                    className="cs_hero_title cs_white_color hero-title-animate"
                    dangerouslySetInnerHTML={{ __html: data.title }}
                  />
                  <p
                    className="cs_hero_subtitle cs_white_color hero-subtitle-animate"
                    dangerouslySetInnerHTML={{ __html: data.subtitle }}
                  />
                  <ul className="cs_list cs_style_2 cs_mp_0 cs_white_color hero-features-animate">
                    {data.features.map((feature, index) => (
                      <li key={index} className="hero-feature-item">
                        <i><BsFillCheckCircleFill /></i>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <div className="cs_hero_btns hero-buttons-animate">
                    <Button
                      btnText={data.btnText}
                      btnIcons={<FaAnglesRight />}
                      btnUrl={data.btnHref}
                      variant={"cs_btn cs_style_1 cs_color_1"}
                    />
                    <a className="cs_video_open" onClick={handelClick}>
                      <span className="cs_player_btn cs_center"><span /></span>
                      <span className="cs_play_btn_text">{data.BtnText1}</span>
                    </a>
                  </div>
                </div>
              )}

              {data.heroShape && (
                <div className="cs_hero_shape">
                  <Image src={data.heroShape} alt="img" width={135} height={202} />
                </div>
              )}
            </div>
          </div>

          {/* THEME-STYLED PROGRESS DOTS (exact look & colors), shown only when ready */}
          {isReady && backgroundImages.length > 0 && (
            <ul
              className="cs_pagination cs_style_2 cs_accent_color hero-dots"
              role="tablist"
              aria-label="Hero background slides"
            >
              {backgroundImages.map((_, idx) => {
                const isActive = currentImageIndex === idx;
                return (
                  <li
                    key={idx}
                    className={isActive ? "slick-active" : ""}
                    role="presentation"
                  >
                    <button
                      type="button"
                      aria-label={`Go to slide ${idx + 1}`}
                      aria-pressed={isActive}
                      onClick={() => goToSlide(idx)}
                    >
                      {/* Track + Fill (progress animates only on active) */}
                      <span className="dot-track">
                        <span
                          className={`dot-fill ${isActive && isReady ? "animate" : ""}`}
                          key={`fill-${currentImageIndex}-${idx}-${isReady}`}
                          style={{ animationDuration: `${SLIDE_MS}ms` }}
                        />
                      </span>
                    </button>
                  </li>
                );
              })}
            </ul>
          )}
        </div>

        {/* Icon boxes below hero - only render when ready */}
        {isReady && (
          <div className="cs_iconbox_4_wrap">
            <div className="container">
              <div className="row cs_gap_y_30">
                {data.iconBoxes.map((iconBox, index) => (
                  <div className="col-lg-6" key={index}>
                    <div className={`cs_iconbox cs_style_4 hero-iconbox-card ${index === 0 ? 'hero-iconbox-left' : 'hero-iconbox-right'}`}>
                      <div className="cs_iconbox_icon cs_center">
                        <Image src={iconBox.icon} alt="img" width={62} height={62} />
                      </div>
                      <div className="cs_iconbox_right">
                        <h3 className="cs_iconbox_title">{iconBox.title}</h3>
                        <p className="cs_iconbox_subtitle">{iconBox.subtitle}</p>
                        <Button
                          btnText={iconBox.buttonText}
                          variant={"cs_btn cs_style_1 cs_color_1"}
                          btnUrl={iconBox.buttonHref}
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </section>

      <VideoModal isTrue={toggle} iframeSrc={iframeSrc} handelClose={handelClose} />

      <style jsx>{`
        /* Hero layout */
        .cs_hero.cs_style_2 {
          position: relative;
          overflow: hidden;
          min-height: 850px;
          display: flex;
          align-items: center;
        }
        .hero-bg-stack {
          position: absolute; inset: 0; z-index: 0;
        }
        .bg-slide {
          position: absolute; inset: 0;
          background-size: cover;
          background-position: center 10%;
          background-repeat: no-repeat;
          opacity: 0;
          transition: opacity 0.8s ease-in-out;
          will-change: opacity;
        }
        .bg-slide.active { opacity: 1; }
        
        /* Specific positioning for the 2nd hero image */
        .bg-slide-second {
          background-position: center 5% !important;
        }

        .cs_hero_text, .container { position: relative; z-index: 1; }

        /* Overlay gradient to match hero look */
        .cs_hero::after {
          content: "";
          position: absolute; inset: 0;
          background: linear-gradient(
            to bottom,
            rgba(0,0,0,0.25) 0%,
            rgba(0,0,0,0.25) 40%,
            rgba(0,0,0,0.2) 100%
          );
          z-index: 0;
          pointer-events: none;
        }

         /* -----------------------
            FIRST-LOAD VISIBILITY
            Content is now conditionally rendered, no CSS hiding needed
            ----------------------- */

        /* -----------------------
           THEME-LIKE DOTS
           ----------------------- */
        .hero-dots {
          position: absolute !important;
          left: 50% !important;
          bottom: 24px !important;
          transform: translateX(-50%) !important;
          z-index: 10 !important;
          display: flex !important;
          gap: 10px !important;
          margin: 0 !important;
          padding: 0 !important;
          list-style: none !important;
          visibility: visible !important;
          opacity: 1 !important;
        }
        .cs_pagination.cs_style_2.cs_accent_color.hero-dots {
          display: flex !important;
          visibility: visible !important;
          opacity: 1 !important;
        }
        .hero-dots li { display: inline-block !important; }

        .hero-dots li.slick-active .dot-track {
          background: rgba(255, 255, 255, 0.6) !important;
        }
        .hero-dots li button {
          background: transparent; border: 0; padding: 0; cursor: pointer;
        }
        .hero-dots .dot-track {
          width: 28px !important;
          height: 8px !important;
          border-radius: 9999px !important;
          background: rgba(255,255,255,0.35) !important;
          overflow: hidden !important;
          display: inline-block !important;
          vertical-align: middle !important;
          position: relative !important;
        }
        .hero-dots .dot-fill {
          position: absolute !important;
          left: 0 !important; top: 0 !important; bottom: 0 !important;
          width: 0% !important;
          background: #ffffff !important;
        }
        @keyframes heroFill {
          from { width: 0%; }
          to   { width: 100%; }
        }
        /* Only animate fill when parent section is ready */
        .is-ready .hero-dots .dot-fill.animate {
          animation-name: heroFill;
          animation-timing-function: linear;
          animation-fill-mode: forwards;
        }

        /* Video button text color from your palette */
        .cs_play_btn_text { color: #23343B !important; }

         /* -----------------------
            ENTRANCE ANIMATIONS
            Trigger only when .is-ready is present
            ----------------------- */
         .hero-title-animate,
         .hero-subtitle-animate,
         .hero-features-animate,
         .hero-buttons-animate,
         .hero-feature-item,
         .hero-iconbox-card {
           opacity: 0;
           visibility: hidden;
           transform: translateY(50px);
           will-change: opacity, transform, visibility;
         }

        .is-ready .hero-title-animate {
          animation: heroTitleSlideUp 1.2s ease-out 0.2s forwards;
        }
        .is-ready .hero-subtitle-animate {
          animation: heroSubtitleSlideUp 1.2s ease-out 0.4s forwards;
        }
        .is-ready .hero-features-animate {
          animation: heroFeaturesSlideUp 1.2s ease-out 0.6s forwards;
        }
        .is-ready .hero-feature-item {
          transform: translateY(30px);
          animation: heroFeatureItemSlideUp 0.8s ease-out forwards;
        }
        .is-ready .hero-feature-item:nth-child(1) { animation-delay: 0.8s; }
        .is-ready .hero-feature-item:nth-child(2) { animation-delay: 0.9s; }
        .is-ready .hero-feature-item:nth-child(3) { animation-delay: 1.0s; }
        .is-ready .hero-buttons-animate {
          animation: heroButtonsSlideUp 1.2s ease-out 1.2s forwards;
        }

        /* Icon boxes (left & right) */
        .hero-iconbox-left { transform: translateX(-80px); }
        .hero-iconbox-right { transform: translateX(80px); }

        .is-ready .hero-iconbox-left {
          animation: heroIconboxSlideInFromLeft 1s ease-out 1.5s forwards;
        }
        .is-ready .hero-iconbox-right {
          animation: heroIconboxSlideInFromRight 1s ease-out 1.7s forwards;
        }

        /* Keyframes */
        @keyframes heroTitleSlideUp {
          from { opacity: 0; visibility: hidden; transform: translateY(50px); }
          to   { opacity: 1; visibility: visible; transform: translateY(0); }
        }
        @keyframes heroSubtitleSlideUp {
          from { opacity: 0; visibility: hidden; transform: translateY(50px); }
          to   { opacity: 1; visibility: visible; transform: translateY(0); }
        }
        @keyframes heroFeaturesSlideUp {
          from { opacity: 0; visibility: hidden; transform: translateY(50px); }
          to   { opacity: 1; visibility: visible; transform: translateY(0); }
        }
        @keyframes heroFeatureItemSlideUp {
          from { opacity: 0; visibility: hidden; transform: translateY(30px); }
          to   { opacity: 1; visibility: visible; transform: translateY(0); }
        }
        @keyframes heroButtonsSlideUp {
          from { opacity: 0; visibility: hidden; transform: translateY(50px); }
          to   { opacity: 1; visibility: visible; transform: translateY(0); }
        }
        @keyframes heroIconboxSlideInFromLeft {
          from { opacity: 0; visibility: hidden; transform: translateX(-80px); }
          to   { opacity: 1; visibility: visible; transform: translateX(0); }
        }
        @keyframes heroIconboxSlideInFromRight {
          from { opacity: 0; visibility: hidden; transform: translateX(80px); }
          to   { opacity: 1; visibility: visible; transform: translateX(0); }
        }

        @media (max-width: 575.98px) {
          .hero-dots .dot-track { width: 24px; height: 7px; }
          .hero-dots { bottom: 18px; gap: 10px; }
        }

        /* Additional Mobile Responsiveness */
        @media (max-width: 991.98px) {
          .cs_hero.cs_style_2 {
            min-height: 600px;
          }
          
          .cs_hero.cs_style_2 .cs_hero_content {
            padding: 2rem 0;
          }
          
          .cs_hero.cs_style_2 .cs_hero_title {
            font-size: 2.5rem;
            line-height: 1.2;
          }
          
          .cs_hero.cs_style_2 .cs_hero_subtitle {
            font-size: 1.1rem;
            margin-bottom: 1.5rem;
          }

          .cs_hero_text {
            display: flex;
            justify-content: center;
            align-items: center;
            text-align: center;
            height: 100%;
          }
        }

        @media (max-width: 767.98px) {
          .cs_hero.cs_style_2 {
            min-height: 500px;
          }
          
          .cs_hero.cs_style_2 .cs_hero_title {
            font-size: 2rem;
            line-height: 1.1;
          }
          
          .cs_hero.cs_style_2 .cs_hero_subtitle {
            font-size: 1rem;
            margin-bottom: 1rem;
          }
          
          .cs_hero.cs_style_2 .cs_hero_features {
            flex-direction: column;
            gap: 0.75rem;
            align-items: center;
          }
          
          .cs_hero.cs_style_2 .cs_hero_feature_item {
            font-size: 0.9rem;
          }
        }

        @media (max-width: 575.98px) {
          .cs_hero.cs_style_2 {
            min-height: 450px;
          }
          
          .cs_hero.cs_style_2 .cs_hero_title {
            font-size: 1.75rem;
          }
          
          .cs_hero.cs_style_2 .cs_hero_subtitle {
            font-size: 0.9rem;
          }
          
          .cs_hero.cs_style_2 .cs_hero_feature_item {
            font-size: 0.85rem;
          }
          
          .cs_hero.cs_style_2 .cs_hero_btns {
            flex-direction: column;
            gap: 0.75rem;
            align-items: center;
          }
          
          .cs_hero.cs_style_2 .cs_btn {
            width: 100%;
            justify-content: center;
          }
        }
      `}</style>
    </>
  );
};

export default HeroSection1;
