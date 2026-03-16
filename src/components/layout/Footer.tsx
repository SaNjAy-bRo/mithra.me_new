import Link from "next/link";
import { siteConfig } from "@/lib/data";

export default function Footer() {
  return (
    <footer id="contact" className="bg-brand-navy py-16 text-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[1.2fr_0.7fr_0.8fr_0.7fr] lg:px-8">
        {/* Brand */}
        <div>
          <div className="logo-mark text-3xl font-extrabold tracking-tight">
            <span>Mithrah</span>
            <span className="mx-1 text-brand-coral">.</span>
            <span className="text-brand-orange">ME</span>
          </div>
          <p className="mt-6 max-w-sm text-sm leading-7 text-white/70">
            {siteConfig.description}
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-sm font-bold uppercase tracking-widest text-white/50">
            Quick Links
          </h4>
          <ul className="mt-6 space-y-3">
            {[
              { label: "Home", href: "/" },
              { label: "About", href: "/#about" },
              { label: "Services", href: "/#services" },
              { label: "Coverage", href: "/#solutions" },
              { label: "Contact", href: "/#contact" },
            ].map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="footer-link text-sm text-white/70 hover:text-white"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Services */}
        <div>
          <h4 className="text-sm font-bold uppercase tracking-widest text-white/50">
            Services
          </h4>
          <ul className="mt-6 space-y-3">
            {[
              { label: "Transit Media", href: "/services/transit-media" },
              { label: "Digital & Telecom", href: "/services/digital-telecom" },
              { label: "Premium OOH", href: "/services/premium-ooh" },
              {
                label: "Digital Marketing",
                href: "/services/digital-marketing",
              },
            ].map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="footer-link text-sm text-white/70 hover:text-white"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="text-sm font-bold uppercase tracking-widest text-white/50">
            Contact
          </h4>
          <div className="mt-6 space-y-4">
            <a
              href={siteConfig.phoneHref}
              className="flex items-center gap-3 text-sm text-white/70 hover:text-white transition-colors"
            >
              <i className="ph-bold ph-phone text-lg" />
              {siteConfig.phone}
            </a>
            <a
              href={siteConfig.whatsapp}
              className="flex items-center gap-3 text-sm text-white/70 hover:text-white transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="ph-bold ph-whatsapp-logo text-lg" />
              WhatsApp
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mt-12 pt-8 border-t border-white/10">
        <p className="text-center text-sm text-white/40">
          © {new Date().getFullYear()} Mithrah.ME — All rights reserved.
        </p>
      </div>
    </footer>
  );
}
