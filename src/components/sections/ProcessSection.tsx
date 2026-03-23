import React from "react";
import { ServiceData } from "@/lib/types";

interface ProcessSectionProps {
  process: NonNullable<ServiceData["process"]>;
  pillarColor: string;
}

export default function ProcessSection({
  process,
  pillarColor,
}: ProcessSectionProps) {
  return (
    <section className="py-24 lg:py-32 bg-white overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-4xl lg:text-5xl font-black text-brand-navy mb-4">
            {process.title}
          </h2>
          <p className="text-lg text-brand-text/70 max-w-2xl mx-auto">
            {process.subtitle}
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3 lg:grid-cols-5 relative">
          {/* Connector Line (Desktop) */}
          <div className="hidden lg:block absolute top-1/2 left-0 w-full h-0.5 bg-brand-line -translate-y-1/2 z-0" />

          {process.steps.map((step, i) => (
            <div
              key={i}
              className="relative z-10 flex flex-col items-center text-center group"
              data-aos="fade-up"
              data-aos-delay={i * 100}
            >
              <div
                className="w-16 h-16 rounded-full flex items-center justify-center text-xl font-black text-white mb-6 shadow-xl transition-transform group-hover:scale-110"
                style={{ backgroundColor: pillarColor }}
              >
                {step.number}
              </div>
              <h3 className="text-xl font-bold text-brand-navy mb-3">
                {step.title}
              </h3>
              <p className="text-sm text-brand-text/70 leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
