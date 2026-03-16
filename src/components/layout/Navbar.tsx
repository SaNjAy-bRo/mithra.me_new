"use client";
import { useState } from "react";
import Link from "next/link";
import { siteConfig, megaMenuItems } from "@/lib/data";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <>
      {/* Top Bar */}
      <div className="bg-brand-coral text-white overflow-hidden">
        <div className="relative h-9 flex items-center">
          <div className="animate-ticker-scroll flex w-max min-w-full gap-12 whitespace-nowrap">
            {[...siteConfig.topbarMessages, ...siteConfig.topbarMessages].map(
              (msg, i) => (
                <span
                  key={i}
                  className="text-sm font-semibold uppercase tracking-[0.16em] text-white"
                >
                  {msg}
                </span>
              )
            )}
          </div>
        </div>
      </div>

      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-white/70 bg-white/90 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-4 sm:px-6 lg:px-8">
          {/* Logo */}
          <Link
            href="/"
            className="logo-mark flex items-center text-2xl font-extrabold tracking-tight text-brand-navy"
          >
            <span>Mithrah</span>
            <span className="mx-1 text-brand-coral">.</span>
            <span className="text-brand-orange">ME</span>
          </Link>

          {/* Desktop Nav */}
          <nav className="ml-auto hidden items-center gap-7 text-sm font-semibold text-brand-ink lg:flex">
            <Link href="/" className="nav-link">
              Home
            </Link>
            <Link href="/#about" className="nav-link">
              About
            </Link>

            {/* Mega Menu */}
            <div className="mega-menu-group relative py-3">
              <Link
                href="/#services"
                className="nav-link inline-flex items-center gap-2"
              >
                <span>Services</span>
                <i className="ph-bold ph-caret-down text-base" />
              </Link>

              <div className="mega-menu-panel absolute right-0 top-full hidden w-[720px] rounded-[1.75rem] border border-brand-line bg-white p-7 shadow-soft">
                <div className="grid gap-8 md:grid-cols-[1.2fr_1fr_1fr]">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.22em] text-brand-text">
                      Media Solutions
                    </p>
                    <h3 className="mt-4 text-2xl font-semibold text-brand-navy">
                      Integrated advertising services for Bangalore and
                      pan-India campaigns
                    </h3>
                    <p className="mt-4 text-sm leading-7 text-brand-text">
                      Explore our specialized networks across transit, digital,
                      premium OOH, and full-funnel marketing.
                    </p>
                  </div>
                  <div className="space-y-4">
                    {megaMenuItems.slice(0, 2).map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        className={`mega-link block rounded-2xl border ${item.borderColor} ${item.bgColor} px-4 py-4 ${item.hoverBorderColor} ${item.hoverBgColor} transition-colors`}
                      >
                        <p className={`font-semibold ${item.textColor}`}>
                          {item.title}
                        </p>
                        <p
                          className={`mt-2 text-sm leading-6 ${item.textColor}/80`}
                        >
                          {item.description}
                        </p>
                      </Link>
                    ))}
                  </div>
                  <div className="space-y-4">
                    {megaMenuItems.slice(2, 4).map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        className={`mega-link block rounded-2xl border ${item.borderColor} ${item.bgColor} px-4 py-4 ${item.hoverBorderColor} ${item.hoverBgColor} transition-colors`}
                      >
                        <p className={`font-semibold ${item.textColor}`}>
                          {item.title}
                        </p>
                        <p
                          className={`mt-2 text-sm leading-6 ${item.textColor}/80`}
                        >
                          {item.description}
                        </p>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <Link href="/#solutions" className="nav-link">
              Solutions
            </Link>
            <Link href="/#solutions" className="nav-link">
              Coverage
            </Link>
            <Link href="/#contact" className="nav-link">
              Contact
            </Link>
          </nav>

          {/* Right Actions */}
          <div className="flex items-center gap-3">
            <a
              href={siteConfig.phoneHref}
              className="hidden lg:inline-flex rounded-full border border-brand-line px-4 py-3 text-sm font-semibold text-brand-ink transition hover:border-brand-blue hover:text-brand-blue"
            >
              {siteConfig.phone}
            </a>
            <a
              href={siteConfig.phoneHref}
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-brand-line text-brand-ink transition hover:border-brand-blue hover:text-brand-blue lg:hidden"
              aria-label="Call Now"
            >
              <i className="ph-bold ph-phone-call text-xl" />
            </a>
            <Link
              href="/#contact"
              className="btn-primary hidden sm:inline-flex rounded-full px-5 py-3 text-sm font-semibold text-white shadow-float"
            >
              Get Media Plan
            </Link>
            <button
              onClick={() => setMobileOpen(true)}
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-brand-line text-brand-ink transition hover:border-brand-blue hover:text-brand-blue lg:hidden"
              aria-label="Toggle Menu"
            >
              <i className="ph-bold ph-list text-xl" />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-[100] bg-brand-navy/95 backdrop-blur-md transition-opacity duration-300 ${
          mobileOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="flex h-full flex-col p-6">
          <div className="flex items-center justify-between border-b border-white/10 pb-4">
            <Link
              href="/"
              className="logo-mark flex items-center text-2xl font-extrabold tracking-tight text-white"
            >
              <span>Mithrah</span>
              <span className="mx-1 text-brand-coral">.</span>
              <span className="text-brand-orange">ME</span>
            </Link>
            <button
              onClick={() => setMobileOpen(false)}
              className="rounded-full bg-white/10 p-2 text-white transition hover:bg-white/20"
            >
              <i className="ph-bold ph-x text-xl" />
            </button>
          </div>
          <nav className="mt-8 flex flex-col gap-6 text-xl font-semibold text-white">
            <Link
              href="/"
              onClick={() => setMobileOpen(false)}
              className="mobile-nav-link"
            >
              Home
            </Link>
            <Link
              href="/#about"
              onClick={() => setMobileOpen(false)}
              className="mobile-nav-link"
            >
              About
            </Link>
            <div className="flex flex-col gap-2">
              <span className="mobile-nav-link">Services</span>
              <div className="ml-4 flex flex-col gap-3 pt-1">
                {megaMenuItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setMobileOpen(false)}
                    className="mobile-nav-link flex items-center gap-2 text-sm font-medium text-brand-orange"
                  >
                    <span className="h-1 w-1 rounded-full bg-brand-orange/40" />
                    {item.title}
                  </Link>
                ))}
              </div>
            </div>
            <Link
              href="/#solutions"
              onClick={() => setMobileOpen(false)}
              className="mobile-nav-link"
            >
              Coverage
            </Link>
            <Link
              href="/#contact"
              onClick={() => setMobileOpen(false)}
              className="mobile-nav-link text-brand-coral"
            >
              Get Media Plan
            </Link>
          </nav>
        </div>
      </div>
    </>
  );
}
