"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import TheatreDropdown from "./TheatreDropdown";
import LobbyDropdown from "./LobbyDropdown";

interface CinemaTabsProps {
  pillarColor: string;
}

export default function CinemaTabs({ pillarColor }: CinemaTabsProps) {
  const [activeTab, setActiveTab] = useState<"theatre" | "lobby">("theatre");

  const tabs = [
    {
      id: "theatre",
      label: "Theatre Network",
      icon: "ph-film-strip",
      description: "On-Screen & Premium Multiplex Ads"
    },
    {
      id: "lobby",
      label: "Lobby Network",
      icon: "ph-monitor",
      description: "Digital Displays & High-Dwell Zones"
    }
  ];

  return (
    <section className="py-20 lg:py-32 bg-white relative overflow-hidden">
      {/* Background accents */}
      <div 
        className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-[500px] h-[500px] rounded-full blur-[120px] opacity-[0.03] pointer-events-none"
        style={{ backgroundColor: pillarColor }}
      />
      <div 
        className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/2 w-[500px] h-[500px] rounded-full blur-[120px] opacity-[0.03] pointer-events-none"
        style={{ backgroundColor: pillarColor }}
      />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="mb-16 text-center" data-aos="fade-up">
          <h2 className="text-3xl font-bold text-brand-navy sm:text-5xl tracking-tight">
            Comprehensive <span style={{ color: pillarColor }}>Multiplex Coverage</span>
          </h2>
          <p className="mt-6 text-lg text-brand-text max-w-2xl mx-auto leading-relaxed">
            Switch between our massive on-screen theatre network and high-impact digital lobby displays to view available inventory.
          </p>
        </div>

        {/* Tab Switcher */}
        <div className="flex justify-center mb-12" data-aos="fade-up" data-aos-delay="100">
          <div className="inline-flex p-1.5 bg-brand-pale rounded-[2rem] border border-brand-line/50 shadow-sm relative">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as "theatre" | "lobby")}
                className={`relative flex flex-col sm:flex-row items-center gap-3 px-6 sm:px-10 py-4 sm:py-5 rounded-[1.75rem] transition-all duration-500 z-10 ${
                  activeTab === tab.id 
                    ? "text-white" 
                    : "text-brand-navy/60 hover:text-brand-navy"
                }`}
              >
                {activeTab === tab.id && (
                  <motion.div
                    layoutId="activeTabBackground"
                    className="absolute inset-0 rounded-[1.75rem] shadow-lg shadow-brand-navy/10"
                    style={{ backgroundColor: pillarColor }}
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
                <i className={`ph-bold ${tab.icon} text-xl sm:text-2xl relative z-10`} />
                <div className="text-left relative z-10">
                  <p className="font-bold text-sm sm:text-base leading-none">{tab.label}</p>
                  <p className={`hidden sm:block text-[10px] mt-1 font-medium uppercase tracking-wider ${activeTab === tab.id ? 'text-white/70' : 'text-brand-text/50'}`}>
                    {tab.description}
                  </p>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Tab Content */}
        <div className="mt-8">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
            >
              {activeTab === "theatre" ? (
                <TheatreDropdown pillarColor={pillarColor} isTabbed={true} />
              ) : (
                <LobbyDropdown pillarColor={pillarColor} isTabbed={true} />
              )}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
