"use client";
import { useState, FormEvent } from "react";
import { venue } from "@/lib/venue";
import Reveal from "./Reveal";

const eventTypes = [
  "Wedding",
  "Reception",
  "Engagement",
  "Corporate Gala",
  "Private Soirée",
  "Other",
];

export default function Enquire() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    event: "",
    date: "",
    guests: "",
    message: "",
  });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    const text = encodeURIComponent(
      `Hello, I would like to enquire about Singhi Palace.\n\n` +
        `Name: ${form.name}\n` +
        `Phone: ${form.phone}\n` +
        `Event type: ${form.event}\n` +
        `Date: ${form.date}\n` +
        `Guests: ${form.guests}\n` +
        `Message: ${form.message}`
    );

    if (venue.whatsapp !== "[FILL]") {
      window.open(
        `https://wa.me/${venue.whatsapp.replace(/\D/g, "")}?text=${text}`,
        "_blank",
        "noopener,noreferrer"
      );
    } else if (venue.email !== "[FILL]") {
      const subject = encodeURIComponent(`Enquiry — ${form.event} at Singhi Palace`);
      const body = encodeURIComponent(
        `Name: ${form.name}\nPhone: ${form.phone}\nEvent: ${form.event}\nDate: ${form.date}\nGuests: ${form.guests}\n\n${form.message}`
      );
      window.location.href = `mailto:${venue.email}?subject=${subject}&body=${body}`;
    }
  };

  const inputClass =
    "w-full bg-transparent border-b border-brass/30 py-3 font-body text-sm text-ink placeholder-ink-muted/50 focus:outline-none focus:border-brass transition-colors duration-200";

  const labelClass = "block text-eyebrow font-body tracking-[0.18em] uppercase text-ink-muted text-xs mb-2";

  return (
    <section id="enquire" className="bg-ivory py-24 lg:py-36">
      <div className="max-w-content mx-auto px-6 lg:px-12">
        {/* Section header */}
        <Reveal>
          <p className="text-eyebrow font-body font-medium tracking-[0.28em] uppercase text-brass mb-4">
            Reserve your date
          </p>
          <h2 className="font-display fraunces-editorial text-display-md text-ink mb-16 max-w-md">
            Begin the conversation.
          </h2>
        </Reveal>

        <div className="grid lg:grid-cols-[3fr_2fr] gap-16 lg:gap-24">
          {/* Left: form */}
          <Reveal delay={0.05}>
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="grid sm:grid-cols-2 gap-8">
                <div>
                  <label htmlFor="name" className={labelClass}>
                    Your name
                  </label>
                  <input
                    id="name"
                    type="text"
                    required
                    placeholder="Full name"
                    value={form.name}
                    onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
                    className={inputClass}
                  />
                </div>
                <div>
                  <label htmlFor="phone" className={labelClass}>
                    Phone number
                  </label>
                  <input
                    id="phone"
                    type="tel"
                    required
                    placeholder="+91"
                    value={form.phone}
                    onChange={(e) => setForm((f) => ({ ...f, phone: e.target.value }))}
                    className={inputClass}
                  />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-8">
                <div>
                  <label htmlFor="event" className={labelClass}>
                    Event type
                  </label>
                  <select
                    id="event"
                    required
                    value={form.event}
                    onChange={(e) => setForm((f) => ({ ...f, event: e.target.value }))}
                    className={`${inputClass} bg-ivory appearance-none cursor-pointer`}
                  >
                    <option value="" disabled>
                      Select occasion
                    </option>
                    {eventTypes.map((t) => (
                      <option key={t} value={t}>
                        {t}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label htmlFor="date" className={labelClass}>
                    Preferred date
                  </label>
                  <input
                    id="date"
                    type="text"
                    placeholder="DD / MM / YYYY"
                    value={form.date}
                    onChange={(e) => setForm((f) => ({ ...f, date: e.target.value }))}
                    className={inputClass}
                  />
                </div>
              </div>

              <div>
                <label htmlFor="guests" className={labelClass}>
                  Expected guests
                </label>
                <input
                  id="guests"
                  type="number"
                  min={1}
                  placeholder="Approximate count"
                  value={form.guests}
                  onChange={(e) => setForm((f) => ({ ...f, guests: e.target.value }))}
                  className={inputClass}
                />
              </div>

              <div>
                <label htmlFor="message" className={labelClass}>
                  Additional notes
                </label>
                <textarea
                  id="message"
                  rows={4}
                  placeholder="Tell us about your vision, any specific requirements…"
                  value={form.message}
                  onChange={(e) => setForm((f) => ({ ...f, message: e.target.value }))}
                  className={`${inputClass} resize-none`}
                />
              </div>

              <button
                type="submit"
                className="group flex items-center gap-4 font-body text-sm font-medium tracking-[0.14em] uppercase text-ivory bg-emerald px-10 py-4 transition-all duration-300 hover:bg-emerald-d focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald"
              >
                {venue.whatsapp !== "[FILL]" ? "Send via WhatsApp" : "Send enquiry"}
                <span className="transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </button>

              <p className="text-xs font-body text-ink-muted opacity-60">
                Your details are only used to respond to this enquiry. We do not share or retain them.
              </p>
            </form>
          </Reveal>

          {/* Right: contact + map */}
          <Reveal delay={0.1}>
            <div className="space-y-10">
              {/* Address */}
              <div>
                <p className="text-eyebrow font-body tracking-[0.2em] uppercase text-brass mb-4">
                  Find us
                </p>
                <address className="not-italic font-body text-ink-muted leading-[1.9] text-sm">
                  {venue.address.street !== "[FILL]" ? (
                    <>
                      {venue.address.street}
                      <br />
                    </>
                  ) : null}
                  {venue.address.locality}, {venue.address.region}
                  {venue.address.postalCode !== "[FILL]" ? (
                    <>
                      <br />
                      {venue.address.postalCode}
                    </>
                  ) : null}
                </address>
              </div>

              {/* Contact */}
              <div className="space-y-3">
                <p className="text-eyebrow font-body tracking-[0.2em] uppercase text-brass mb-4">
                  Contact
                </p>
                {venue.phone !== "[FILL]" && (
                  <a
                    href={`tel:${venue.phone}`}
                    className="block font-body text-sm text-ink-muted hover:text-emerald transition-colors duration-200 cta-link"
                  >
                    {venue.phone}
                  </a>
                )}
                {venue.email !== "[FILL]" && (
                  <a
                    href={`mailto:${venue.email}`}
                    className="block font-body text-sm text-ink-muted hover:text-emerald transition-colors duration-200 cta-link"
                  >
                    {venue.email}
                  </a>
                )}
                {venue.whatsapp !== "[FILL]" && (
                  <a
                    href={`https://wa.me/${venue.whatsapp.replace(/\D/g, "")}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block font-body text-sm text-emerald hover:text-emerald-d transition-colors duration-200 cta-link"
                  >
                    WhatsApp →
                  </a>
                )}
              </div>

              {/* Map embed */}
              <div className="brass-frame overflow-hidden aspect-[4/3]">
                <iframe
                  src={venue.mapEmbed}
                  title="Singhi Palace location on Google Maps"
                  width="100%"
                  height="100%"
                  style={{ border: 0, filter: "grayscale(0.3) sepia(0.1)" }}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  aria-label="Map showing Singhi Palace location in Kolkata"
                />
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
