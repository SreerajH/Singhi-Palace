"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { venue } from "@/lib/venue";

const ease = [0.22, 1, 0.36, 1] as const;

export default function Hero() {
  const whatsappUrl = venue.whatsapp !== "[FILL]"
    ? `https://wa.me/${venue.whatsapp.replace(/\D/g, "")}?text=Hello%2C%20I%20am%20interested%20in%20enquiring%20about%20Singhi%20Palace.`
    : "#enquire";

  return (
    <section className="relative min-h-screen bg-ivory pt-24 pb-16 lg:pt-28 overflow-hidden">
      {/* Subtle background texture — vertical rule lines */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage:
            "repeating-linear-gradient(90deg, #1c1c1a 0px, #1c1c1a 1px, transparent 1px, transparent 80px)",
        }}
        aria-hidden="true"
      />

      <div className="relative max-w-content mx-auto px-6 lg:px-12 grid lg:grid-cols-[1fr_420px] gap-16 lg:gap-8 items-center min-h-[calc(100vh-7rem)]">
        {/* Text column */}
        <div className="flex flex-col justify-center max-w-2xl">
          {/* Kicker */}
          <motion.p
            className="text-eyebrow font-body font-medium tracking-[0.28em] uppercase text-brass mb-8"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease, delay: 0.1 }}
          >
            {venue.kicker}
          </motion.p>

          {/* Main headline */}
          <motion.h1
            className="font-display fraunces-soft text-display-xl text-ink leading-[1.04] mb-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease, delay: 0.2 }}
          >
            {venue.tagline}
          </motion.h1>

          {/* Brass divider */}
          <motion.div
            className="w-16 h-px bg-brass mb-10 opacity-60"
            initial={{ scaleX: 0, originX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.6, ease, delay: 0.55 }}
          />

          {/* Sub-copy */}
          <motion.p
            className="font-body text-ink-muted text-lg leading-relaxed max-w-md mb-12"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease, delay: 0.4 }}
          >
            A heritage mansion in the heart of Kolkata — marble floors, tall
            windows, and brass fittings — now available for weddings, receptions,
            and private celebrations of quiet distinction.
          </motion.p>

          {/* CTAs */}
          <motion.div
            className="flex flex-col sm:flex-row items-start gap-6"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease, delay: 0.55 }}
          >
            <a
              href="#enquire"
              className="font-body font-medium text-sm tracking-[0.12em] uppercase text-emerald cta-link pb-0.5"
            >
              Enquire about your date
            </a>
            <span className="text-brass-muted font-light hidden sm:block">·</span>
            <a
              href={whatsappUrl}
              target={venue.whatsapp !== "[FILL]" ? "_blank" : undefined}
              rel="noopener noreferrer"
              className="font-body font-medium text-sm tracking-[0.12em] uppercase text-ink-muted cta-link pb-0.5"
            >
              WhatsApp us directly
            </a>
          </motion.div>
        </div>

        {/* Portrait photo column */}
        <motion.div
          className="relative mx-auto lg:mx-0 lg:self-center"
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.1, ease, delay: 0.3 }}
        >
          {/* Brass frame decoration — offset square */}
          <div
            className="absolute -top-4 -right-4 w-full h-full border border-brass/30 rounded-none pointer-events-none"
            aria-hidden="true"
          />

          {/* Portrait container */}
          <div
            className="relative w-full max-w-[380px] lg:max-w-none"
            style={{ aspectRatio: "3/4" }}
          >
            <div className="relative w-full h-full brass-frame overflow-hidden">
              <Image
                src="/images/hero.jpg"
                alt="The grand interior of Singhi Palace, Kolkata — marble floors and brass fittings"
                fill
                className="object-cover"
                priority
                sizes="(max-width: 1024px) 380px, 420px"
              />
              {/* Ivory overlay for image-missing state */}
              <div className="absolute inset-0 bg-ivory/0 transition-opacity" />
            </div>

            {/* Brass caption plate */}
            <div className="absolute -bottom-px left-6 right-6 bg-ivory py-2 px-4 border-t border-brass/40">
              <p className="text-eyebrow font-body text-brass text-center tracking-[0.2em] uppercase opacity-80">
                Est. Heritage · Kolkata
              </p>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Bottom scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-40"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.4 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        aria-hidden="true"
      >
        <span className="text-eyebrow tracking-[0.2em] text-ink-muted font-body uppercase">
          Scroll
        </span>
        <motion.div
          className="w-px h-8 bg-brass"
          animate={{ scaleY: [0, 1, 0], originY: 0 }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut", delay: 1.4 }}
        />
      </motion.div>
    </section>
  );
}
