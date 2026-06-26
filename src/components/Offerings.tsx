"use client";
import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { offerings } from "@/lib/venue";
import Reveal from "./Reveal";

export default function Offerings() {
  const [hovered, setHovered] = useState<string | null>(null);

  return (
    <section id="offerings" className="bg-ivory py-24 lg:py-36">
      <div className="max-w-content mx-auto px-6 lg:px-12">
        {/* Section header */}
        <Reveal>
          <p className="text-eyebrow font-body font-medium tracking-[0.28em] uppercase text-brass mb-4">
            What we host
          </p>
          <h2 className="font-display fraunces-editorial text-display-md text-ink mb-16 lg:mb-20 max-w-sm">
            Every occasion, one address.
          </h2>
        </Reveal>

        {/* Offerings list */}
        <div className="relative">
          {offerings.map((item, i) => (
            <Reveal key={item.index} delay={i * 0.06}>
              <div
                className="relative group cursor-default"
                onMouseEnter={() => setHovered(item.index)}
                onMouseLeave={() => setHovered(null)}
              >
                <div className="brass-line mb-0" />
                <div className="flex items-baseline gap-6 lg:gap-12 py-6 lg:py-8">
                  {/* Index number */}
                  <span className="font-display fraunces-editorial text-3xl lg:text-5xl text-brass/40 font-light leading-none tabular-nums shrink-0 w-12 lg:w-16 transition-colors duration-300 group-hover:text-brass/70">
                    {item.index}
                  </span>

                  {/* Name */}
                  <h3 className="font-display fraunces-editorial text-display-md text-ink leading-none transition-colors duration-300 group-hover:text-emerald flex-1">
                    {item.name}
                  </h3>

                  {/* Description */}
                  <p className="hidden lg:block font-body text-sm text-ink-muted leading-relaxed max-w-xs flex-1 transition-opacity duration-300 opacity-60 group-hover:opacity-100">
                    {item.description}
                  </p>

                  {/* Arrow */}
                  <span className="text-brass/30 text-2xl font-light transition-all duration-300 group-hover:text-brass group-hover:translate-x-1 shrink-0 leading-none">
                    →
                  </span>
                </div>

                {/* Mobile description */}
                <p className="lg:hidden font-body text-sm text-ink-muted leading-relaxed pb-4 -mt-2 pl-[4.5rem]">
                  {item.description}
                </p>

                {/* Floating thumbnail on hover */}
                <AnimatePresence>
                  {hovered === item.index && (
                    <motion.div
                      className="hidden lg:block absolute right-24 top-1/2 -translate-y-1/2 w-32 h-20 overflow-hidden pointer-events-none z-10"
                      initial={{ opacity: 0, scale: 0.88, y: "-40%" }}
                      animate={{ opacity: 1, scale: 1, y: "-50%" }}
                      exit={{ opacity: 0, scale: 0.88, y: "-40%" }}
                      transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
                    >
                      <div className="relative w-full h-full brass-frame overflow-hidden">
                        <Image
                          src={item.image}
                          alt={item.name}
                          fill
                          className="object-cover"
                          sizes="128px"
                        />
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </Reveal>
          ))}
          <div className="brass-line" />
        </div>
      </div>
    </section>
  );
}
