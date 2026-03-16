import { ServiceData } from "@/lib/types";

interface ServiceHeroProps {
  hero: ServiceData["hero"];
  pillarColor: string;
}

export default function ServiceHero({ hero, pillarColor }: ServiceHeroProps) {
  return (
    <section className="relative overflow-hidden bg-brand-navy py-20 lg:py-32">
      <div className="absolute inset-0">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={hero.bgImage}
          alt=""
          className="h-full w-full object-cover opacity-30 mix-blend-luminosity"
        />
        <div className={`absolute inset-0 ${hero.gradientOverlay}`} />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl">
          <div
            className="inline-flex items-center gap-2 rounded-full border px-4 py-2 text-xs font-bold uppercase tracking-widest backdrop-blur-md mb-6"
            style={{
              borderColor: `${pillarColor}50`,
              backgroundColor: `${pillarColor}30`,
              color: pillarColor,
            }}
          >
            <span
              className="h-2 w-2 rounded-full animate-pulse"
              style={{ backgroundColor: pillarColor }}
            />
            {hero.badge}
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-black text-white tracking-tight leading-[1.1] mb-6">
            {hero.heading}
            <br />
            <span
              className="text-transparent bg-clip-text"
              style={{
                backgroundImage: `linear-gradient(to right, ${pillarColor}, #ff8c42)`,
              }}
            >
              {hero.headingHighlight}
            </span>
          </h1>

          <p className="text-lg sm:text-xl text-white/80 leading-relaxed max-w-2xl mb-10">
            {hero.description}
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 pt-6 border-t border-white/10">
            {hero.stats.map((stat, i) => (
              <div key={i}>
                <p className="text-3xl font-black text-white">{stat.value}</p>
                <p className="text-sm font-medium text-white/60 mt-1">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
