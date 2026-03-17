"use client";

import { useState } from "react";
import ledData from "@/lib/led_data.json";
import { motion, AnimatePresence } from "framer-motion";
import EnquiryModal from "@/components/ui/EnquiryModal";

const zones = Object.keys(ledData);

interface LEDScreen {
  location: string;
  width: string;
  height: string;
  total_sqft: string;
  type: string;
  availability: string;
}

export default function LEDInventory({ pillarColor }: { pillarColor: string }) {
  const [selectedZone, setSelectedZone] = useState(zones[0] || "");
  const [enquiryTarget, setEnquiryTarget] = useState<string | null>(null);
  const screens = (ledData as Record<string, LEDScreen[]>)[selectedZone] || [];

  return (
    <section className="py-20 lg:py-32 bg-white relative overflow-hidden">
      {/* Background accents */}
      <div 
        className="absolute bottom-0 right-0 translate-y-1/2 translate-x-1/2 w-96 h-96 rounded-full blur-[120px] opacity-10 pointer-events-none"
        style={{ backgroundColor: pillarColor }}
      />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="mb-16 text-center" data-aos="fade-up">
          <h2 className="text-3xl font-bold text-brand-navy sm:text-5xl tracking-tight">
            Premium <span style={{ color: pillarColor }}>LED Screen Inventory</span>
          </h2>
          <p className="mt-6 text-lg text-brand-text max-w-2xl mx-auto leading-relaxed">
            High-impact digital billboards at strategic junctions. Select a zone to view precise technical specifications and availability.
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
                id="led-zone-select"
                value={selectedZone}
                onChange={(e) => setSelectedZone(e.target.value)}
                className="w-full appearance-none rounded-2xl border-2 border-brand-line bg-white px-8 py-5 text-xl font-bold text-brand-navy shadow-soft transition-all focus:outline-none cursor-pointer"
                style={{ borderColor: `${pillarColor}40` }}
              >
                {zones.map((zone) => (
                  <option key={zone} value={zone}>
                    {zone}
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
            {screens.map((screen, index) => (
              <motion.div
                key={`${selectedZone}-${screen.location}`}
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
                        <i className="ph-bold ph-monitor-play text-2xl" />
                      </div>
                      <span 
                        className="px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-wider bg-brand-navy text-white"
                      >
                        {screen.availability}
                      </span>
                    </div>
                    <h3 className="text-lg font-bold text-brand-navy leading-snug">
                      {screen.location}
                    </h3>

                    <button 
                      onClick={() => setEnquiryTarget(screen.location)}
                      className="mt-6 flex items-center gap-2 text-xs font-black uppercase tracking-widest transition-all hover:gap-3"
                      style={{ color: pillarColor }}
                    >
                      Enquiry Now
                      <i className="ph-bold ph-arrow-right" />
                    </button>
                  </div>
                  
                  <div className="mt-8 pt-6 border-t border-brand-line/40 grid grid-cols-2 gap-4">
                    <div className="flex flex-col">
                      <span className="text-[10px] font-bold text-brand-text/50 uppercase tracking-widest">Dimensions</span>
                      <span className="text-sm font-bold text-brand-navy">
                        {screen.width} x {screen.height} ft
                      </span>
                    </div>
                    <div className="flex flex-col text-right">
                      <span className="text-[10px] font-bold text-brand-text/50 uppercase tracking-widest">Total Area</span>
                      <span className="text-sm font-bold text-brand-navy">
                        {Math.round(parseFloat(screen.total_sqft))} <span className="text-[11px] font-medium text-brand-text/50">sqft</span>
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
        
        {screens.length === 0 && (
          <div className="text-center py-32 bg-brand-pale rounded-[40px] border-2 border-dashed border-brand-line/60" data-aos="zoom-in">
            <div className="flex h-20 w-20 items-center justify-center rounded-3xl bg-white shadow-sm mx-auto mb-6">
              <i className="ph-bold ph-magnifying-glass text-3xl text-brand-text/20" />
            </div>
            <h3 className="text-xl font-bold text-brand-navy">No inventory found for this zone</h3>
            <p className="mt-2 text-brand-text">Please select a different zone to view available LED screens.</p>
          </div>
        )}
      </div>

      <EnquiryModal 
        isOpen={!!enquiryTarget} 
        onClose={() => setEnquiryTarget(null)} 
        title={enquiryTarget || ""} 
        pillarColor={pillarColor} 
      />
    </section>
  );
}
