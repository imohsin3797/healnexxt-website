"use client";

export default function OverlapGuard() {
  return (
    <style jsx global>{`
      /* Keep footer in normal flow below the section */
      footer.cs_footer {
        position: relative !important;
        z-index: 0 !important;
      }
      /* Defensive: ensure our service section creates a stacking context */
      .services-solution {
        position: relative !important;
        z-index: 1 !important;
        overflow: clip !important;
      }
    `}</style>
  );
}
