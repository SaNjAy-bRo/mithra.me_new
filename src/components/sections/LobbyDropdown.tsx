"use client";

import { useState } from "react";
import lobbyData from "@/lib/lobby_data.json";
import { motion, AnimatePresence } from "framer-motion";

const cities = Object.keys(lobbyData);

interface LobbyLocation {
  name: string;
  brand: string;
  format: string;
  units: string;
  address: string;
}

export default function LobbyDropdown({ pillarColor }: { pillarColor: string }) {
  const [selectedCity, setSelectedCity] = useState(cities[0] || "");
  const locations = (lobbyData as Record<string, LobbyLocation[]>)[selectedCity] || [];

  return (
    <section className="py-20 lg:py-32 bg-brand-pale relative overflow-hidden">
      {/* Background accents */}
      <div 
        className="absolute top-0 left-0 -translate-y-1/2 -translate-x-1/2 w-96 h-96 rounded-full blur-[120px] opacity-10 pointer-events-none"
        style={{ backgroundColor: pillarColor }}
      />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="mb-16 text-center" data-aos="fade-up">
          <h2 className="text-3xl font-bold text-brand-navy sm:text-5xl tracking-tight">
            Cinema <span style={{ color: pillarColor }}>Lobby Network</span>
          </h2>
          <p className="mt-6 text-lg text-brand-text max-w-2xl mx-auto leading-relaxed">
            High-dwell time digital displays positioned at box offices, concessions, and waiting areas for maximum brand absorption.
          </p>
        </div>

        <div className="flex justify-center mb-16" data-aos="fade-up" data-aos-delay="100">
          <div className="relative w-full max-w-md group">
            <div 
              className="absolute -inset-1 rounded-[22px] blur opacity-20 group-hover:opacity-40 transition duration-500"
              style={{ backgroundColor: pillarColor }}
            />
            <div className="relative">
              <select
                id="lobby-city-select"
                value={selectedCity}
                onChange={(e) => setSelectedCity(e.target.value)}
                className="w-full appearance-none rounded-2xl border-2 border-brand-line bg-white px-8 py-5 text-xl font-bold text-brand-navy shadow-soft transition-all focus:outline-none cursor-pointer"
                style={{ borderColor: `${pillarColor}40` }}
              >
                {cities.map((city) => (
                  <option key={city} value={city}>
                    {city}
                  </option>
                ))}
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-8">
                <i className="ph-bold ph-caret-down text-2xl text-brand-navy" />
              </div>
            </div>
          </div>
        </div>

        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {locations.map((loc, index) => (
              <motion.div
                key={`${selectedCity}-${loc.name}`}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ 
                  duration: 0.4, 
                  delay: Math.min(index * 0.05, 0.5),
                  ease: [0.23, 1, 0.32, 1]
                }}
                className="group relative h-full"
              >
                <div className="h-full rounded-3xl border border-brand-line bg-white p-8 shadow-sm hover:shadow-soft transition-all duration-300 flex flex-col justify-between hover:-translate-y-1">
                  <div>
                    <div className="flex items-start justify-between gap-4 mb-6">
                      <div 
                        className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl"
                        style={{ backgroundColor: `${pillarColor}12`, color: pillarColor }}
                      >
                        <i className="ph-bold ph-monitor text-2xl" />
                      </div>
                      <div className="flex flex-col items-end gap-1">
                        <span 
                          className="px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-wider bg-brand-navy text-white"
                        >
                          {loc.units} Units
                        </span>
                        <span className="text-[10px] font-bold text-brand-text/60">
                          {loc.brand} Screens
                        </span>
                      </div>
                    </div>
                    <h3 className="text-xl font-bold text-brand-navy leading-snug">
                      {loc.name}
                    </h3>
                    <p className="mt-3 text-sm text-brand-text/70 line-clamp-2 italic">
                      {loc.address}
                    </p>
                  </div>
                  
                  <div className="mt-8 pt-6 border-t border-brand-line/40 flex items-center justify-between">
                    <div className="flex items-center gap-2.5">
                      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-brand-pale">
                        <i className="ph-bold ph-monitor-play text-brand-navy/60" />
                      </div>
                      <span className="text-sm font-bold text-brand-navy">
                        Digital <span className="text-brand-text/50 font-medium">Network</span>
                      </span>
                    </div>
                    <div className="flex items-center gap-1.5 text-xs font-bold text-brand-text/40 uppercase tracking-widest">
                      <i className="ph-bold ph-map-pin" />
                      <span>{selectedCity}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
        
        {locations.length === 0 && (
          <div className="text-center py-32 bg-white rounded-[40px] border-2 border-dashed border-brand-line/60" data-aos="zoom-in">
            <div className="flex h-20 w-20 items-center justify-center rounded-3xl bg-brand-pale shadow-sm mx-auto mb-6">
              <i className="ph-bold ph-magnifying-glass text-3xl text-brand-text/20" />
            </div>
            <h3 className="text-xl font-bold text-brand-navy">No lobby displays found</h3>
            <p className="mt-2 text-brand-text">Check other cities for available lobby inventory.</p>
          </div>
        )}
      </div>
    </section>
  );
}
