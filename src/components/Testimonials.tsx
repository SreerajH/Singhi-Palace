"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { testimonials } from "@/lib/venue";
import Reveal from "./Reveal";

export default function Testimonials() {
  const [active, setActive] = useState(0);
  const total = testimonials.length;

  const prev = () => setActive((i) => (i - 1 + total) % total);
  const next = () => setActive((i) => (i + 1) % total);

  return (
    <section id="testimonials" className="bg-ivory py-28 lg:py-40">
      <div className="max-w-content mx-auto px-6 lg:px-12">
        <Reveal>
          <p className="text-eyebrow font-body font-medium tracking-[0.28em] uppercase text-brass mb-16 text-center">
            What guests say
          </p>
        </Reveal>

        <div className="relative min-h-[280px] flex flex-col items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              className="text-center max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
            >
              {/* Opening mark */}
              <span
                className="font-display fraunces-editorial text-brass text-7xl leading-none block mb-2 opacity-30"
                aria-hidden="true"
              >
                &ldquo;
              </span>

              <blockquote>
                <p className="font-display fraunces-editorial italic text-display-md text-ink leading-[1.35] mb-8">
                  {testimonials[active].quote}
                </p>

                <footer>
                  <cite className="not-italic">
                    <p className="font-body font-semibold text-sm text-ink tracking-wide mb-0.5">
                      {testimonials[active].author}
                    </p>
                    <p className="text-eyebrow font-body tracking-[0.2em] uppercase text-brass opacity-70">
                      {testimonials[active].occasion}
                    </p>
                  </cite>
                </footer>
              </blockquote>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Minimal navigation */}
        <div className="flex items-center justify-center gap-10 mt-14">
          <button
            onClick={prev}
            aria-label="Previous testimonial"
            className="font-body text-ink-muted hover:text-emerald transition-colors duration-200 text-2xl leading-none cta-link focus-visible:outline-brass"
          >
            ←
          </button>

          {/* Position indicators */}
          <div className="flex gap-3 items-center">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                aria-label={`Go to testimonial ${i + 1}`}
                className={`h-px transition-all duration-400 ${
                  i === active
                    ? "w-8 bg-brass"
                    : "w-4 bg-brass/30 hover:bg-brass/60"
                }`}
              />
            ))}
          </div>

          <button
            onClick={next}
            aria-label="Next testimonial"
            className="font-body text-ink-muted hover:text-emerald transition-colors duration-200 text-2xl leading-none cta-link focus-visible:outline-brass"
          >
            →
          </button>
        </div>
      </div>
    </section>
  );
}
