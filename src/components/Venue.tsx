import Image from "next/image";
import { venue } from "@/lib/venue";
import Reveal from "./Reveal";

const stats = [
  { value: venue.stats.area, label: "Total space" },
  { value: venue.stats.capacity, label: "Guest capacity" },
  { value: venue.stats.parking, label: "Parking" },
  { value: venue.stats.catering, label: "Dining" },
];

export default function Venue() {
  return (
    <section id="venue" className="bg-ivory py-24 lg:py-36 overflow-hidden">
      <div className="max-w-content mx-auto px-6 lg:px-12">
        {/* Kicker */}
        <Reveal>
          <p className="text-eyebrow font-body font-medium tracking-[0.28em] uppercase text-brass mb-4">
            The venue
          </p>
        </Reveal>

        {/* Two-column editorial */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start mb-16 lg:mb-20">
          {/* Left: image */}
          <Reveal delay={0.05}>
            <div className="grid grid-cols-2 gap-4 lg:gap-5">
              <div className="relative col-span-2 aspect-[4/3] brass-frame overflow-hidden">
                <Image
                  src="/images/venue-1.jpg"
                  alt="The grand ballroom at Singhi Palace"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 560px"
                />
              </div>
              <div className="relative aspect-square brass-frame overflow-hidden">
                <Image
                  src="/images/venue-2.jpg"
                  alt="Heritage architecture and marble detailing at Singhi Palace"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 50vw, 270px"
                />
              </div>
              <div className="relative aspect-square bg-emerald/5 border border-brass/20 flex items-center justify-center p-6">
                <p className="font-display fraunces-editorial italic text-emerald text-lg leading-snug text-center">
                  &ldquo;Where the walls remember every celebration.&rdquo;
                </p>
              </div>
            </div>
          </Reveal>

          {/* Right: editorial text */}
          <Reveal delay={0.1}>
            <h2 className="font-display fraunces-editorial text-display-md text-ink mb-8 leading-[1.1]">
              A mansion that earns its silence.
            </h2>

            <div className="space-y-5 font-body text-ink-muted leading-[1.85] text-[1.0625rem] mb-10">
              <p>
                Singhi Palace was built in an era when grandeur was measured not
                in square footage but in craftsmanship — when plasterwork was
                a conversation, not a finish.
              </p>
              <p>
                Today it receives guests the same way. The marble speaks. The
                brass catches the candlelight. The rooms, generous and unhurried,
                hold celebrations without effort.
              </p>
              <p>
                Whether a wedding for five hundred or a private dinner for
                thirty, the Palace adjusts — never shrinks, never overwhelms.
                That calibration is the rarest luxury.
              </p>
            </div>

            {/* Pull quote */}
            <blockquote className="border-l-2 border-brass pl-6 my-8">
              <p className="font-display fraunces-editorial italic text-xl lg:text-2xl text-ink leading-snug mb-3">
                &ldquo;It does not need to announce itself. The marble floors
                say everything before a word is spoken.&rdquo;
              </p>
              <cite className="text-eyebrow font-body text-ink-muted not-italic tracking-[0.16em] uppercase">
                — A guest, on their first visit
              </cite>
            </blockquote>
          </Reveal>
        </div>

        {/* Stat row */}
        <Reveal delay={0.12}>
          <div className="brass-line mb-0" />
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-brass/20">
            {stats.map((s) => (
              <div key={s.label} className="bg-ivory px-6 py-7 lg:py-8">
                <p className="font-display fraunces-editorial text-xl lg:text-2xl text-brass font-semibold leading-tight mb-1">
                  {s.value}
                </p>
                <p className="text-eyebrow font-body tracking-[0.18em] uppercase text-ink-muted">
                  {s.label}
                </p>
              </div>
            ))}
          </div>
          <div className="brass-line" />
        </Reveal>
      </div>
    </section>
  );
}
