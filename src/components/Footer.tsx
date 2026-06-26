import { navLinks, venue } from "@/lib/venue";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-ivory pt-16 pb-24 lg:pb-12">
      <div className="max-w-content mx-auto px-6 lg:px-12">
        {/* Brass divider */}
        <div className="brass-line mb-12" />

        <div className="grid lg:grid-cols-3 gap-10 lg:gap-8 mb-12">
          {/* Wordmark */}
          <div className="flex flex-col gap-1">
            <span className="font-display fraunces-editorial text-[0.6rem] tracking-[0.55em] uppercase text-brass font-medium">
              SINGHI
            </span>
            <span className="font-display fraunces-editorial text-sm tracking-[0.35em] uppercase text-emerald font-semibold">
              PALACE
            </span>
            <p className="font-body text-xs text-ink-muted mt-3 leading-relaxed max-w-xs opacity-70">
              Heritage event venue · Kolkata
            </p>
          </div>

          {/* Navigation */}
          <nav aria-label="Footer navigation">
            <p className="text-eyebrow font-body tracking-[0.22em] uppercase text-brass mb-4 text-xs">
              Navigate
            </p>
            <ul className="space-y-2.5">
              {[...navLinks.left, ...navLinks.right].map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="font-body text-sm text-ink-muted hover:text-emerald transition-colors duration-200 cta-link"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Contact */}
          <div>
            <p className="text-eyebrow font-body tracking-[0.22em] uppercase text-brass mb-4 text-xs">
              Contact
            </p>
            <address className="not-italic space-y-2">
              {venue.address.street !== "[FILL]" && (
                <p className="font-body text-sm text-ink-muted leading-relaxed">
                  {venue.address.street}, {venue.address.locality}
                </p>
              )}
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
            </address>
          </div>
        </div>

        {/* Bottom row */}
        <div className="brass-line mb-6" />
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
          <p className="font-body text-xs text-ink-muted opacity-50">
            © {year} Singhi Palace. All rights reserved.
          </p>
          <p className="font-body text-xs text-ink-muted opacity-40">
            Designed with care.
          </p>
        </div>
      </div>
    </footer>
  );
}
