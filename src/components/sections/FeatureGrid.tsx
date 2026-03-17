import Image from "next/image";
import Link from "next/link";
import { ServiceData } from "@/lib/types";

interface FeatureGridProps {
  features: ServiceData["features"];
  pillarColor: string;
}

export default function FeatureGrid({
  features,
  pillarColor,
}: FeatureGridProps) {
  return (
    <section className="py-24 lg:py-40 bg-brand-pale">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-2">
          {features.map((feature, i) => {
            const featureContent = (
              <div className="flex flex-col sm:flex-row items-center sm:items-start gap-8">
                <div
                  className="relative h-48 w-48 sm:h-40 sm:w-40 shrink-0 overflow-hidden rounded-[2.5rem] shadow-xl transition-transform duration-500 group-hover:scale-105"
                  style={{
                    backgroundColor: `${pillarColor}15`,
                  }}
                >
                  <Image 
                    src={feature.image}
                    alt={feature.title}
                    fill
                    className="object-cover"
                    sizes="400px"
                  />
                  <div className="absolute inset-0 bg-gradient-to-tr from-brand-navy/20 to-transparent" />
                </div>
                <div className="flex-1 text-center sm:text-left">
                  <div className="flex items-center justify-center sm:justify-between gap-4 mb-4">
                    <h3 className="text-2xl font-black text-brand-navy leading-tight">
                      {feature.title}
                    </h3>
                    {feature.href && (
                      <div 
                        className="hidden sm:flex h-10 w-10 items-center justify-center rounded-full bg-brand-pale text-brand-navy group-hover:bg-white group-hover:shadow-soft transition-all"
                        style={{ color: pillarColor }}
                      >
                        <i className="ph-bold ph-arrow-up-right text-xl" />
                      </div>
                    )}
                  </div>
                  <p className="text-brand-text/70 leading-relaxed font-medium mb-6">
                    {feature.description}
                  </p>
                  {feature.items && (
                    <div className="flex flex-wrap justify-center sm:justify-start gap-2">
                      {feature.items.map((item, j) => (
                        <span
                          key={j}
                          className="rounded-full border px-4 py-1.5 text-[10px] font-black uppercase tracking-wider"
                          style={{
                            borderColor: `${pillarColor}20`,
                            backgroundColor: `${pillarColor}05`,
                            color: pillarColor,
                          }}
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            );

            return feature.href ? (
              <Link
                key={i}
                href={feature.href}
                className="group rounded-2xl border border-brand-line bg-white p-8 card-hover transition-all block"
                data-aos="fade-up"
                data-aos-delay={i * 100}
              >
                {featureContent}
              </Link>
            ) : (
              <div
                key={i}
                className="rounded-2xl border border-brand-line bg-white p-8 card-hover"
                data-aos="fade-up"
                data-aos-delay={i * 100}
              >
                {featureContent}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
