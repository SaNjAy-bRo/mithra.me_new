"use client";
import { ServiceData } from "@/lib/types";
import { motion } from "framer-motion";

interface ServiceHeroProps {
  hero: ServiceData["hero"];
  pillarColor: string;
}

export default function ServiceHero({ hero, pillarColor }: ServiceHeroProps) {
  return (
    <section className="relative overflow-hidden bg-brand-navy py-24 lg:py-40">
      <div className="absolute inset-0">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={hero.bgImage}
          alt=""
          className="h-full w-full object-cover opacity-40 mix-blend-luminosity scale-105"
        />
        {/* Primary gradient overlay for depth */}
        <div className={`absolute inset-0 ${hero.gradientOverlay} opacity-90`} />
        {/* Secondary dark vignette for edge visibility */}
        <div className="absolute inset-0 bg-gradient-to-t from-brand-navy via-transparent to-transparent opacity-80" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 rounded-full border px-4 py-2 text-xs font-bold uppercase tracking-widest backdrop-blur-md mb-8 shadow-lg"
            style={{
              borderColor: `${pillarColor}80`,
              backgroundColor: `${pillarColor}20`,
              color: "white",
            }}
          >
            <span
              className="h-2 w-2 rounded-full animate-pulse"
              style={{ backgroundColor: pillarColor }}
            />
            {hero.badge}
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl sm:text-6xl lg:text-8xl font-black text-white tracking-tight leading-[1] mb-8 drop-shadow-2xl"
          >
            {hero.heading}
            <br />
            <span
              className="text-transparent bg-clip-text"
              style={{
                backgroundImage: `linear-gradient(to right, ${pillarColor}, #ffffff)`,
                filter: "drop-shadow(0 0 10px rgba(255,255,255,0.2))"
              }}
            >
              {hero.headingHighlight}
            </span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="text-xl sm:text-2xl text-white/90 leading-relaxed max-w-2xl mb-12 font-medium drop-shadow-md"
          >
            {hero.description}
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="grid grid-cols-2 sm:grid-cols-3 gap-8 pt-8 border-t border-white/20"
          >
            {hero.stats.map((stat, i) => (
              <div key={i} className="group">
                <p className="text-4xl font-black text-white group-hover:scale-105 transition-transform origin-left">{stat.value}</p>
                <p className="text-xs font-bold text-white/60 mt-1 uppercase tracking-widest">
                  {stat.label}
                </p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
