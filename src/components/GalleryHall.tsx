"use client";
import { useRef } from "react";
import Image from "next/image";
import {
  motion,
  useScroll,
  useTransform,
  useReducedMotion,
} from "framer-motion";
import { galleryImages } from "@/lib/venue";
import Reveal from "./Reveal";

export default function GalleryHall() {
  const reduced = useReducedMotion();
  const sectionRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  // Total horizontal travel: roughly (n - 1.5) cards × card width (380px + gap 32px)
  const totalTravel = (galleryImages.length - 1.5) * 412;
  const x = useTransform(scrollYProgress, [0.05, 0.9], [0, -totalTravel]);

  return (
    <section id="gallery" ref={sectionRef} className="bg-ivory py-24 lg:py-0">
      {/* Section header — always visible */}
      <div className="max-w-content mx-auto px-6 lg:px-12 pb-12 lg:pb-0">
        <Reveal>
          <p className="text-eyebrow font-body font-medium tracking-[0.28em] uppercase text-brass mb-4">
            Gallery Hall
          </p>
          <h2 className="font-display fraunces-editorial text-display-md text-ink max-w-sm">
            Walk the rooms.
          </h2>
        </Reveal>
      </div>

      {/* Desktop: sticky horizontal-scroll gallery */}
      {!reduced ? (
        <div className="hidden lg:block" style={{ height: `${galleryImages.length * 50}vh` }}>
          <div className="sticky top-0 h-screen flex flex-col justify-center overflow-hidden">
            {/* Caption row */}
            <p className="text-eyebrow font-body tracking-[0.22em] uppercase text-ink-muted text-center mb-8 opacity-50">
              Scroll to tour the palace
            </p>

            {/* Horizontal strip */}
            <div className="relative overflow-hidden">
              <motion.div
                className="flex gap-8 px-[10vw]"
                style={{ x, willChange: "transform" }}
              >
                {galleryImages.map((img, i) => (
                  <div key={img.src} className="shrink-0 w-[380px]">
                    <div
                      className="relative brass-frame overflow-hidden"
                      style={{ height: "55vh", maxHeight: "500px" }}
                    >
                      <Image
                        src={img.src}
                        alt={img.caption}
                        fill
                        className="object-cover"
                        sizes="380px"
                      />
                    </div>
                    {/* Brass caption plate */}
                    <div className="bg-ivory border border-brass/30 border-t-0 px-4 py-2.5 flex items-center justify-between gap-4">
                      <span className="font-display fraunces-editorial italic text-sm text-ink-muted leading-none">
                        {img.caption}
                      </span>
                      <span className="text-eyebrow font-body text-brass/60 tracking-[0.18em] tabular-nums">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                    </div>
                  </div>
                ))}
              </motion.div>
            </div>
          </div>
        </div>
      ) : null}

      {/* Mobile / reduced-motion: normal grid */}
      <div
        className={`${
          !reduced ? "lg:hidden" : ""
        } max-w-content mx-auto px-6 lg:px-12 pb-24`}
      >
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6 mt-10">
          {galleryImages.map((img, i) => (
            <div key={img.src}>
              <div className="relative brass-frame overflow-hidden aspect-[3/4]">
                <Image
                  src={img.src}
                  alt={img.caption}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 50vw, 33vw"
                />
              </div>
              <div className="bg-ivory border border-brass/30 border-t-0 px-3 py-2 flex items-center justify-between gap-2">
                <span className="font-display fraunces-editorial italic text-xs text-ink-muted leading-none">
                  {img.caption}
                </span>
                <span className="text-eyebrow font-body text-brass/60 tracking-[0.18em] tabular-nums text-xs">
                  {String(i + 1).padStart(2, "0")}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
