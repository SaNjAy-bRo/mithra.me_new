"use client";
import { siteConfig } from "@/lib/data";

export default function StickyContactBar() {
  return (
    <div className="sticky-contact-bar">
      <div className="flex items-center justify-between bg-brand-mist border border-brand-ink/15 rounded-full p-2 shadow-[0_12px_30px_rgba(34,48,74,0.2)] pointer-events-auto">
        <a
          href={siteConfig.phoneHref}
          className="flex-1 flex items-center justify-center gap-2.5 text-brand-ink font-bold text-sm py-2.5 px-2.5 rounded-xl transition-all hover:bg-brand-cyan/10 hover:-translate-y-0.5"
        >
          <i className="ph-bold ph-phone-call text-brand-cyan text-lg" />
          <span className="hidden sm:inline">Call Now</span>
        </a>

        <div className="w-px h-6 bg-brand-ink/10" />

        <a
          href={siteConfig.whatsapp}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 flex items-center justify-center gap-2.5 text-[#25d366] font-bold text-sm py-2.5 px-2.5 rounded-xl bg-[#25d366]/10 transition-all hover:bg-[#25d366]/15 hover:-translate-y-0.5"
        >
          <i className="ph-bold ph-whatsapp-logo text-lg" />
          <span className="hidden sm:inline">WhatsApp</span>
        </a>
      </div>
    </div>
  );
}
