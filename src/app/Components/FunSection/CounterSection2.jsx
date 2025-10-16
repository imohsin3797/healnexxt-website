"use client";

const CounterSection2 = ({ data }) => {
  return (
    <>
      <section className="counter2-bg">
        <div className="counter2-bleed">
          <div className="container">
            <div className="cs_counter_2_wrap counter2-grid">
              {data.map((item, index) => (
                <div className="cs_counter cs_style_2 counter2-item" key={index}>
                  <div className="cs_counter_icon cs_center">
                    <span
                      className="cs_counter_icon_mask"
                      style={{ "--icon-url": `url(${item.iconSrc})` }}
                      aria-hidden="true"
                    />
                  </div>

                  <div className="cs_counter_nmber">
                    {item.countTo}
                    {item.suffix}
                  </div>

                  <p className="cs_counter_title mb-0">{item.title}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
        :root { --accent: #F26F62; }

        /* Section background */
        .counter2-bg {
          background-color: #23343b;
          color: #ffffff;
          position: relative;
          isolation: isolate;
        }

        /* Full-bleed */
        .counter2-bleed { margin-left: calc(50% - 50vw); margin-right: calc(50% - 50vw); }
        :global(.counter2-bleed .container) { padding-left: 0 !important; padding-right: 0 !important; }

        /* Remove theme tiles/backgrounds/borders */
        :global(.cs_counter_area_2), :global(.cs_counter_area_2::before), :global(.cs_counter_area_2::after),
        :global(.cs_counter_2_wrap), :global(.cs_counter_2_wrap::before), :global(.cs_counter_2_wrap::after),
        :global(.cs_counter.cs_style_2), :global(.cs_counter.cs_style_2::before), :global(.cs_counter.cs_style_2::after) {
          background: transparent !important;
          background-image: none !important;
          box-shadow: none !important;
          border-radius: 0 !important;
        }

        /* Grid */
        .counter2-grid {
          display: grid;
          grid-template-columns: repeat(4, minmax(0, 1fr));
          gap: 0 !important;
        }

        /* Card base – keep a transparent border to avoid layout shift */
        .counter2-item {
          padding: 60px 24px;
          color: inherit !important;          /* white initially */
          border: 2px solid transparent;      /* invisible at rest */
          transition: color 160ms ease, border-color 160ms ease;
          cursor: pointer;
        }

        /* Ensure number/title inherit our hover color even if theme sets them */
        .counter2-item :global(.cs_counter_nmber),
        .counter2-item :global(.cs_counter_title) {
          color: inherit !important;
          transition: color 160ms ease;
        }

        /* Hover: text + icon turn salmon, and show salmon outline on this card only */
        .counter2-item:hover,
        .counter2-item:focus-within {
          color: var(--accent) !important;
          border-color: var(--accent) !important;
        }
        .counter2-item:hover :global(.cs_counter_nmber),
        .counter2-item:hover :global(.cs_counter_title),
        .counter2-item:focus-within :global(.cs_counter_nmber),
        .counter2-item:focus-within :global(.cs_counter_title) {
          color: var(--accent) !important;
        }

        /* Icon uses current text color (white -> salmon on hover) */
        .cs_counter_icon_mask {
          display: inline-block;
          width: 37px;
          height: 37px;
          background-color: currentColor !important;
          -webkit-mask-image: var(--icon-url);
          mask-image: var(--icon-url);
          -webkit-mask-size: contain; mask-size: contain;
          -webkit-mask-repeat: no-repeat; mask-repeat: no-repeat;
          -webkit-mask-position: center; mask-position: center;
          transition: background-color 160ms ease;
        }
      `}</style>
    </>
  );
};

export default CounterSection2;
