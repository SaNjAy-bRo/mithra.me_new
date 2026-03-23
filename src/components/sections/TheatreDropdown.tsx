"use client";

import React, { useState } from "react";
import theatersData from "@/lib/theaters_data.json";
import { motion, AnimatePresence } from "framer-motion";
import EnquiryModal from "@/components/ui/EnquiryModal";

const cities = Object.keys(theatersData);

interface Theatre {
  id: number;
  name: string;
  address: string;
  category: string;
  capacity: number | string;
}

export default function TheatreDropdown({ pillarColor, isTabbed = false }: { pillarColor: string, isTabbed?: boolean }) {
  const [selectedCity, setSelectedCity] = useState(cities[0] || "");
  const [enquiryTarget, setEnquiryTarget] = useState<string | null>(null);
  const theaters = (theatersData as Record<string, Theatre[]>)[selectedCity] || [];

  const content = (
    <div className={`mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10 ${isTabbed ? 'py-12' : ''}`}>
      {!isTabbed && (
        <div className="mb-16 text-center" data-aos="fade-up">
          <h2 className="text-3xl font-bold text-brand-navy sm:text-5xl tracking-tight">
            Our Extensive <span style={{ color: pillarColor }}>Theatre Network</span>
          </h2>
          <p className="mt-6 text-lg text-brand-text max-w-2xl mx-auto leading-relaxed">
            Select your city to explore the wide range of premium multiplexes and high-impact single screens available for your campaign.
          </p>
        </div>
      )}

        <div className="flex justify-center mb-16" data-aos="fade-up" data-aos-delay="100">
          <div className="relative w-full max-w-md group">
            <div 
              className="absolute -inset-1 rounded-[22px] blur opacity-20 group-hover:opacity-40 transition duration-500"
              style={{ backgroundColor: pillarColor }}
            />
            <div className="relative">
              <select
                id="city-select"
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
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {theaters.map((theater, index) => (
              <motion.div
                key={`${selectedCity}-${theater.name}`}
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
                <div className="h-full rounded-2xl border border-brand-line bg-white p-6 shadow-sm hover:shadow-soft transition-all duration-300 flex flex-col justify-between hover:-translate-y-1">
                  <div>
                    <div className="flex items-start justify-between gap-3 mb-5">
                      <div 
                        className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl"
                        style={{ backgroundColor: `${pillarColor}12`, color: pillarColor }}
                      >
                        <i className="ph-bold ph-film-strip text-xl" />
                      </div>
                      <div className="flex flex-col items-end gap-1.5">
                        {theater.id && (
                          <span className="text-[9px] font-black px-2 py-0.5 bg-brand-pale text-brand-navy/40 rounded-full border border-brand-line/50">
                            ID: {theater.id}
                          </span>
                        )}
                        {theater.category && (
                          <span 
                            className="px-2 py-0.5 rounded-full text-[9px] font-black uppercase tracking-wider"
                            style={{ backgroundColor: `${pillarColor}10`, color: pillarColor, border: `1px solid ${pillarColor}20` }}
                          >
                            {theater.category}
                          </span>
                        )}
                      </div>
                    </div>
                    <h3 className="text-base font-bold text-brand-navy leading-snug group-hover:text-brand-coral transition-colors" style={{ '--hover-color': pillarColor } as React.CSSProperties}>
                      {theater.name}
                    </h3>
                    <p className="mt-2 text-xs text-brand-text/70 line-clamp-2 italic">
                      {theater.address}
                    </p>
                    
                    <button 
                      onClick={() => setEnquiryTarget(theater.name)}
                      className="mt-5 flex items-center gap-2 text-[10px] font-black uppercase tracking-widest transition-all hover:gap-3"
                      style={{ color: pillarColor }}
                    >
                      Enquiry Now
                      <i className="ph-bold ph-arrow-right" />
                    </button>
                  </div>
                  
                  <div className="mt-6 pt-5 border-t border-brand-line/40 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="flex h-7 w-7 items-center justify-center rounded-full bg-brand-pale">
                        <i className="ph-bold ph-users text-brand-navy/60 text-xs" />
                      </div>
                      <span className="text-xs font-bold text-brand-navy">
                        {theater.capacity || 'TBA'} <span className="text-brand-text/40 font-medium">Seats</span>
                      </span>
                    </div>
                    <div className="flex items-center gap-1 text-[9px] font-black text-brand-text/30 uppercase tracking-tighter">
                      <i className="ph-bold ph-map-pin" />
                      <span>{selectedCity}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
        
        {theaters.length === 0 && (
          <div className="text-center py-32 bg-brand-pale rounded-[40px] border-2 border-dashed border-brand-line/60" data-aos="zoom-in">
            <div className="flex h-20 w-20 items-center justify-center rounded-3xl bg-white shadow-sm mx-auto mb-6">
              <i className="ph-bold ph-magnifying-glass text-3xl text-brand-text/20" />
            </div>
            <h3 className="text-xl font-bold text-brand-navy">No theatres found</h3>
            <p className="mt-2 text-brand-text">We&apos;re constantly expanding our network. Check back soon!</p>
          </div>
        )}
      </div>
    );

  if (isTabbed) {
    return (
      <>
        {content}
        <EnquiryModal 
          isOpen={!!enquiryTarget} 
          onClose={() => setEnquiryTarget(null)} 
          title={enquiryTarget || ""} 
          pillarColor={pillarColor} 
        />
      </>
    );
  }

  return (
    <section className="py-20 lg:py-32 bg-white relative overflow-hidden">
      {/* Background accents */}
      <div 
        className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-96 h-96 rounded-full blur-[120px] opacity-10 pointer-events-none"
        style={{ backgroundColor: pillarColor }}
      />
      <div 
        className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/2 w-96 h-96 rounded-full blur-[120px] opacity-10 pointer-events-none"
        style={{ backgroundColor: pillarColor }}
      />
      
      {content}

      <EnquiryModal 
        isOpen={!!enquiryTarget} 
        onClose={() => setEnquiryTarget(null)} 
        title={enquiryTarget || ""} 
        pillarColor={pillarColor} 
      />
    </section>
  );
}
