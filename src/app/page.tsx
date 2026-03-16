import Link from "next/link";
import Image from "next/image";
import { homeServices } from "@/lib/data";

export default function HomePage() {
  return (
    <>
      {/* ── HERO ── */}
      <section id="home" className="hero-section relative overflow-hidden">
        <div className="hero-grid-lines absolute inset-0 opacity-90 pointer-events-none" style={{
          backgroundImage: "linear-gradient(rgba(255,255,255,0.045) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.045) 1px, transparent 1px)",
          backgroundSize: "44px 44px"
        }}></div>
        <div className="hero-blobs pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
          <span className="hero-blob hero-blob-one absolute left-[-6%] top-[8%] w-[320px] h-[320px] rounded-full bg-[rgba(19,184,198,0.28)] blur-[72px] opacity-[0.42] animate-blob-float"></span>
          <span className="hero-blob hero-blob-two absolute right-[-6%] top-[6%] w-[430px] h-[430px] rounded-full bg-[rgba(255,107,99,0.22)] blur-[72px] opacity-[0.42] animate-blob-float animation-delay-[-5s]"></span>
          <span className="hero-blob hero-blob-three absolute left-[36%] bottom-[-12%] w-[360px] h-[360px] rounded-full bg-[rgba(44,107,255,0.26)] blur-[72px] opacity-[0.42] animate-blob-float animation-delay-[-9s]"></span>
        </div>
        <div className="hero-particles absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
          {[...Array(6)].map((_, i) => (
            <span key={i} className="absolute block w-[5px] h-[5px] rounded-full bg-white/20 shadow-[0_0_14px_rgba(255,255,255,0.06)] animate-float-particle" style={{
              left: `${[15, 29, 43, 61, 77, 89][i]}%`,
              top: `${[21, 73, 18, 66, 26, 60][i]}%`,
              width: `${[6, 4, 5, 5, 5, 4][i]}px`,
              height: `${[6, 4, 5, 5, 5, 4][i]}px`,
              animationDuration: `${[18, 14, 16, 20, 15, 13][i]}s`
            }}></span>
          ))}
        </div>

        <div className="mx-auto max-w-7xl px-4 pb-10 pt-16 sm:px-6 lg:px-8 lg:pb-14 lg:pt-24 min-h-[70vh] flex flex-col justify-center">
          <div className="relative z-10 flex flex-col items-center text-center">
            <div className="relative z-10 max-w-5xl" data-aos="fade-up">
              <p className="inline-flex rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-white/90">
                Bengaluru based. Pan-India execution.
              </p>
              <h1 className="mt-7 text-[2.6rem] font-black uppercase leading-[0.95] tracking-[-0.04em] text-white sm:text-6xl lg:text-7xl">
                360° Advertising &amp;<br />
                Communication Solutions
              </h1>
              <div className="hero-service-strip mt-8 flex flex-wrap justify-center gap-x-3 gap-y-2 text-sm font-medium text-white sm:text-base">
                <span>Transit Media</span>
                <span className="before:content-['•'] before:mr-2 before:text-white/50">Digital Marketing</span>
                <span className="before:content-['•'] before:mr-2 before:text-white/50">Direct Communication</span>
                <span className="before:content-['•'] before:mr-2 before:text-white/50">Cinema &amp; OOH</span>
              </div>

              <div className="mx-auto mt-12 flex w-full max-w-2xl flex-col items-center justify-center gap-4 sm:flex-row">
                <Link
                  href="/#services"
                  className="btn-primary inline-flex min-w-[220px] items-center justify-center gap-2.5 rounded-full px-7 py-4 text-sm font-semibold text-white"
                >
                  <i className="ph-bold ph-squares-four text-lg"></i>
                  View Our Services
                </Link>
                <a
                  href="tel:+918792459245"
                  className="btn-outline-light btn-phone inline-flex min-w-[220px] items-center justify-center gap-2.5 rounded-full px-7 py-4 text-sm font-semibold text-white"
                >
                  <i className="ph-bold ph-phone-call text-lg"></i>
                  Ph: +91 87924 59245
                </a>
              </div>

              <div className="mx-auto mt-10 max-w-4xl pt-6 text-sm text-white/80">
                Powered by integrated media planning, direct response channels and local execution support.
              </div>
            </div>
          </div>

          <div className="relative z-10 mt-12 grid grid-cols-2 gap-4 sm:gap-8 pt-10 text-center xl:grid-cols-4" data-aos="fade-up" data-aos-delay="200">
            {[
              { value: "54K+", label: "Vehicles Available" },
              { value: "1000+", label: "Brands Served" },
              { value: "200+", label: "Countries Reached Through SMS" },
              { value: "360°", label: "Integrated Advertising Coverage" },
            ].map((stat, i) => (
              <article key={i} className="stat-card px-2 py-2">
                <p className="stat-number text-4xl font-extrabold text-white">{stat.value}</p>
                <p className="mt-3 text-base font-medium text-white">{stat.label}</p>
              </article>
            ))}
          </div>

          <div className="relative z-10 mt-8 flex justify-center">
            <Link
              href="/#services"
              className="hero-scroll-arrow inline-flex h-14 w-14 items-center justify-center rounded-full border border-white/18 bg-white/10 text-white animate-bounce-slow"
              aria-label="Scroll to next section"
            >
              <i className="ph-bold ph-arrow-down text-xl"></i>
            </Link>
          </div>
        </div>
      </section>

      {/* ── CLIENT MARQUEE ── */}
      <section className="border-b border-brand-line bg-white pb-8 pt-12 overflow-hidden" data-aos="fade-up">
        <div className="mx-auto mb-8 max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-text">Trusted by 100+ Leading Brands</p>
        </div>
        <div className="relative flex whitespace-nowrap">
          <div className="animate-ticker-scroll flex items-center gap-16 py-4">
            {["BrandOne", "GlobalCorp", "TechStart", "Nimbus", "ClientX", "AeroDynamics", "MarketFlow", "VentureCap", "Solaris", "Quantum"].map((brand, i) => (
              <div key={i} className="text-2xl font-black uppercase tracking-widest text-[#d9e3f0]">{brand}</div>
            ))}
            {["BrandOne", "GlobalCorp", "TechStart", "Nimbus", "ClientX", "AeroDynamics", "MarketFlow", "VentureCap", "Solaris", "Quantum"].map((brand, i) => (
              <div key={i+"-dup"} className="text-2xl font-black uppercase tracking-widest text-[#d9e3f0]">{brand}</div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SERVICES ── */}
      <section id="services" className="relative bg-white py-16 sm:py-24 lg:py-32 overflow-hidden">
        <div className="absolute top-0 right-0 -translate-y-12 translate-x-1/3 z-0">
          <div className="h-[600px] w-[600px] rounded-full bg-brand-mist/50 blur-[80px]"></div>
        </div>
        
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-20" data-aos="fade-up">
            <p className="section-label">Our Capabilities</p>
            <h2 className="mt-4 text-3xl font-black tracking-tight text-brand-navy sm:text-4xl lg:text-5xl uppercase">
              Integrated 360° Media Solutions
            </h2>
            <p className="mt-6 text-lg text-brand-text">
              We move beyond traditional formats. Delivering high-impact transit branding, direct telecom engagement, and premium OOH to maximize your reach.
            </p>
          </div>

          <div className="space-y-24">
            {homeServices.map((service, idx) => (
              <div
                key={service.number}
                className={`flex flex-col lg:flex-row items-center gap-8 sm:gap-12 lg:gap-20`}
                data-aos="fade-up"
              >
                <div
                  className={`w-full lg:w-1/2 relative ${
                    idx % 2 === 0
                      ? "order-2 lg:order-1"
                      : "order-2 lg:order-2"
                  }`}
                >
                  <div className="aspect-[4/3] rounded-[1.5rem] sm:rounded-[2rem] bg-brand-navy relative overflow-hidden group shadow-soft">
                    <Image
                      src={service.image}
                      alt={service.imageAlt}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110 opacity-90 mix-blend-luminosity hover:mix-blend-normal"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/80 to-transparent" />
                    <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-6 backdrop-blur-md bg-white/90 p-3 sm:p-4 rounded-xl shadow-sm flex items-center justify-between">
                      <span className="text-[10px] sm:text-sm font-bold text-brand-navy">
                        {service.stat}
                      </span>
                      <span
                        className="flex h-8 w-8 sm:h-10 sm:w-10 items-center justify-center rounded-full text-white"
                        style={{ backgroundColor: service.color }}
                      >
                        <i className={`ph-bold ${service.statIcon}`} />
                      </span>
                    </div>
                  </div>
                </div>

                <div
                  className={`w-full lg:w-1/2 ${
                    idx % 2 === 0
                      ? "order-1 lg:order-2"
                      : "order-1 lg:order-1"
                  }`}
                >
                  <div
                    className="inline-flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center rounded-2xl mb-5 sm:mb-6"
                    style={{
                      backgroundColor: `${service.color}15`,
                      color: service.color,
                    }}
                  >
                    <span className="text-xl sm:text-2xl font-black">
                      {service.number}
                    </span>
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-bold text-brand-navy mb-4 lg:text-4xl">
                    {service.title}
                  </h3>
                  <p className="text-brand-text text-base sm:text-lg mb-6 sm:mb-8 leading-relaxed">
                    {service.description}
                  </p>
                  <div className="flex flex-wrap gap-3">
                    {service.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-5 py-2.5 rounded-full border text-sm font-bold"
                        style={{
                          borderColor: `${service.color}30`,
                          backgroundColor: `${service.color}08`,
                          color: service.color,
                        }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="mt-8">
                    <Link
                      href={service.link}
                      className="inline-flex items-center gap-2 font-bold hover:underline"
                      style={{ color: service.color }}
                    >
                      {service.linkText}{" "}
                      <i className="ph-bold ph-arrow-right" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-center mt-24" data-aos="fade-up">
            <Link
              href="/#contact"
              className="inline-flex items-center justify-center rounded-full border border-brand-line bg-white px-8 py-4 text-sm font-bold text-brand-navy shadow-sm transition hover:border-brand-blue hover:text-brand-blue"
            >
              Download Full Media Deck
              <i className="ph-bold ph-download-simple ml-2 text-lg" />
            </Link>
          </div>
        </div>
      </section>

      {/* ── WHY CHOOSE ── */}
      <section id="about" className="bg-white py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-[1.5rem] sm:rounded-[1.75rem] bg-brand-mist px-6 py-10 sm:px-8 sm:py-12 lg:px-12">
            <div className="mx-auto max-w-4xl text-center">
              <p className="section-label">Why Choose Mithrah.ME</p>
              <h2 className="mt-4 text-3xl font-black tracking-tight text-brand-navy sm:text-4xl lg:text-5xl">
                Why Choose Mithrah.ME?
              </h2>
              <div className="mx-auto mt-6 h-1 w-24 sm:w-32 rounded-full bg-brand-orange" />
            </div>

            <div className="mt-12 grid gap-x-10 gap-y-10 md:grid-cols-2 xl:grid-cols-3">
              {[
                {
                  icon: "ph-globe-hemisphere-west",
                  color: "text-brand-blue",
                  title: "Pan-India Reach",
                  desc: "54,000+ vehicles and campaign execution support across major Indian cities.",
                },
                {
                  icon: "ph-broadcast",
                  color: "text-brand-cyan",
                  title: "Real-Time Tracking",
                  desc: "GPS fleet visibility and live campaign performance monitoring for active deployments.",
                },
                {
                  icon: "ph-robot",
                  color: "text-brand-orange",
                  title: "AI-Powered Communication",
                  desc: "AI voicebots, chatbots and automation-led communication built for faster engagement.",
                },
                {
                  icon: "ph-shield-check",
                  color: "text-brand-coral",
                  title: "True 360° Coverage",
                  desc: "Transit, digital, cinema, OOH, BTL and direct marketing under one campaign partner.",
                },
                {
                  icon: "ph-device-mobile",
                  color: "text-brand-blue",
                  title: "Global SMS Reach",
                  desc: "Reach audiences in 200+ countries through enterprise-grade SMS delivery networks.",
                },
                {
                  icon: "ph-trophy",
                  color: "text-brand-orange",
                  title: "100+ Client Trust",
                  desc: "Trusted by brands across industries for advertising execution and communication support.",
                },
              ].map((item, i) => (
                <article
                  key={i}
                  className="border-b border-brand-line/70 pb-6"
                  data-aos="fade-up"
                  data-aos-delay={i * 50}
                >
                  <div
                    className={`flex h-12 w-12 items-center justify-center rounded-full bg-white ${item.color} shadow-sm`}
                  >
                    <i className={`ph-bold ${item.icon} text-2xl`} />
                  </div>
                  <h3 className="mt-4 text-xl font-semibold text-brand-navy">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-brand-text">
                    {item.desc}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── INDUSTRIES ── */}
      <section id="solutions" className="bg-brand-mist py-24 sm:py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.03]" />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16" data-aos="fade-up">
            <p className="inline-flex rounded-full border border-brand-line bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-brand-navy/70 mb-5">
              Industries We Serve
            </p>
            <h2 className="text-[2.6rem] font-black uppercase leading-[0.95] tracking-[-0.04em] text-brand-navy sm:text-6xl lg:text-7xl">
              Precision Marketing For<br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-blue to-brand-cyan">High-Competition Categories</span>
            </h2>
            <p className="mt-6 text-lg text-brand-text">
              Messaging, market selection and campaign mix optimized specifically for your industry&apos;s buying cycles and local competitive pressure.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6">
            {[
              { icon: "ph-buildings", title: "Real Estate", desc: "Lead generation & premium hoarding placements for new launches.", color: "text-brand-blue", bg: "bg-brand-pale" },
              { icon: "ph-graduation-cap", title: "Education", desc: "Student acquisition campaigns via bulk SMS and transit media.", color: "text-[#d93e61]", bg: "bg-[#d93e61]/10" },
              { icon: "ph-first-aid-kit", title: "Healthcare", desc: "Localized brand awareness for hospitals and specialty clinics.", color: "text-[#db9318]", bg: "bg-[#db9318]/10" },
              { icon: "ph-shopping-bag", title: "Retail", desc: "Footfall-driving auto branding and hyper-local cinema ads.", color: "text-[#763d90]", bg: "bg-[#763d90]/10" },
              { icon: "ph-shopping-cart", title: "E-commerce", desc: "Performance digital marketing and retargeting automation.", color: "text-brand-orange", bg: "bg-brand-orange/10" },
              { icon: "ph-ticket", title: "Events", desc: "High-visibility mass messaging and rapid venue promotion.", color: "text-brand-cyan", bg: "bg-brand-cyan/10" },
              { icon: "ph-rocket-launch", title: "Startups", desc: "Cost-effective BTL campaigns and digital foundation building.", color: "text-[#2488c9]", bg: "bg-[#2488c9]/10" },
              { icon: "ph-storefront", title: "Local DBs", desc: "Targeted WhatsApp marketing and digital wall painting.", color: "text-[#d93e61]", bg: "bg-[#d93e61]/10" },
            ].map((ind, i) => (
              <div
                key={i}
                className="group relative overflow-hidden rounded-[1.5rem] bg-white p-6 sm:p-8 border border-brand-line/60 shadow-sm transition-all hover:shadow-lg hover:-translate-y-1"
                data-aos="fade-up"
                data-aos-delay={i * 50}
              >
                <div className="absolute top-0 right-0 p-4 opacity-0 transition-opacity group-hover:opacity-100">
                  <i className="ph-bold ph-arrow-up-right text-brand-blue"></i>
                </div>
                <div className={`mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl ${ind.bg} ${ind.color} group-hover:bg-brand-navy group-hover:text-white transition-colors`}>
                  <i className={`ph-bold ${ind.icon} text-2xl`}></i>
                </div>
                <h3 className="text-xl font-bold text-brand-navy">{ind.title}</h3>
                <p className="mt-2 text-sm text-brand-text">{ind.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section id="testimonials" className="bg-brand-pale py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center" data-aos="fade-up">
            <p className="section-label">Client Success</p>
            <h2 className="mt-4 text-3xl font-semibold text-brand-navy sm:text-4xl text-center">
              What Our Partners Say
            </h2>
          </div>
          <div className="mt-12 sm:mt-16 grid gap-6 sm:gap-8 md:grid-cols-3">
            {[
              { char: "A", name: "Arjun Patel", role: "Marketing Director, RetailPro", text: `"Mithrah.ME transformed our local reach. Their transit media campaign brought us a 40% increase in footfall within the first month. Incredible execution and reporting."`, color: "bg-brand-navy" },
              { char: "S", name: "Sneha Rao", role: "Admissions Head, EduTech", text: `"The SMS and WhatsApp marketing automation they set up for our education institute was a game-changer. We reached thousands of potential students instantly."`, color: "bg-brand-cyan" },
              { char: "K", name: "Karthik Iyer", role: "Founder, StartUp Hub", text: `"We tried multiple OOH agencies, but Mithrah stands out for their transparent tracking and premium hoarding locations. They truly understand Bangalore's landscape."`, color: "bg-brand-orange" }
            ].map((t, i) => (
              <div key={i} className="testimonial-card rounded-[1.5rem] sm:rounded-[1.75rem] border border-brand-line bg-white p-6 sm:p-8 relative" data-aos="fade-up" data-aos-delay={(i+1)*100}>
                <i className="ph-bold ph-quotes text-3xl sm:text-4xl text-brand-blue/20 absolute top-6 sm:top-8 right-6 sm:right-8"></i>
                <div className="flex gap-1 text-brand-orange text-sm mb-5 sm:mb-6">
                  {[...Array(5)].map((_, s) => <i key={s} className="ph-bold ph-star" />)}
                </div>
                <p className="text-brand-ink text-sm sm:text-base leading-6 sm:leading-7">{t.text}</p>
                <div className="mt-6 sm:mt-8 flex items-center gap-4">
                  <div className={`h-10 w-10 sm:h-12 sm:w-12 rounded-full ${t.color} flex items-center justify-center text-white font-bold text-base sm:text-lg`}>{t.char}</div>
                  <div>
                    <p className="font-bold text-brand-navy text-xs sm:text-sm">{t.name}</p>
                    <p className="text-[10px] sm:text-xs text-brand-text">{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PREMIUM CTA ── */}
      <section className="cta-section cta-shell relative overflow-hidden py-16 sm:py-24">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5"></div>
        <div className="hero-blobs pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
          <span className="hero-blob absolute left-[-10%] top-[50%] w-[320px] h-[320px] rounded-full bg-brand-blue/20 blur-[72px] opacity-[0.42] animate-blob-float"></span>
          <span className="hero-blob absolute right-[-10%] top-[-20%] w-[430px] h-[430px] rounded-full bg-brand-coral/20 blur-[72px] opacity-[0.42] animate-blob-float animation-delay-[-5s]"></span>
        </div>
        
        <div className="relative z-10 mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-black uppercase tracking-tight text-white lg:text-5xl xl:text-6xl" data-aos="fade-up">Ready To Scale Your Brand?</h2>
          <p className="mx-auto mt-4 sm:mt-6 max-w-2xl text-base sm:text-lg text-white/80" data-aos="fade-up" data-aos-delay="100">
            Let&apos;s build a highly targeted, multi-channel media plan that puts your brand in front of the right audience at the right time.
          </p>
          <div className="mt-8 sm:mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row" data-aos="fade-up" data-aos-delay="200">
            <Link href="/#contact" className="btn-primary inline-flex w-full sm:w-auto min-w-[220px] items-center justify-center gap-2.5 rounded-full px-8 py-4 text-sm sm:text-base font-bold text-white">
              Start Your Campaign
              <i className="ph-bold ph-arrow-right text-lg"></i>
            </Link>
            <a href="tel:+918792459245" className="inline-flex w-full sm:w-auto min-w-[220px] items-center justify-center gap-2.5 rounded-full border border-white/20 bg-white/5 backdrop-blur-sm px-8 py-4 text-sm sm:text-base font-bold text-white transition-all hover:bg-white/10 hover:border-white/40">
              <i className="ph-bold ph-phone-call text-lg"></i>
              Talk to an Expert
            </a>
          </div>
        </div>
      </section>


    </>
  );
}
