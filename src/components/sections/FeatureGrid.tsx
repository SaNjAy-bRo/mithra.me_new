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
    <section className="py-20 lg:py-32 bg-brand-pale">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-2">
          {features.map((feature, i) => {
            const featureContent = (
              <div className="flex items-start gap-4">
                <div
                  className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl"
                  style={{
                    backgroundColor: `${pillarColor}15`,
                    color: pillarColor,
                  }}
                >
                  <i className={`ph-bold ${feature.icon} text-2xl`} />
                </div>
                <div>
                  <div className="flex items-center justify-between gap-2">
                    <h3 className="text-xl font-bold text-brand-navy">
                      {feature.title}
                    </h3>
                    {feature.href && (
                      <i
                        className="ph-bold ph-arrow-up-right text-brand-text/50 group-hover:text-current transition-colors"
                        style={{ color: pillarColor }}
                      />
                    )}
                  </div>
                  <p className="mt-2 text-sm leading-7 text-brand-text">
                    {feature.description}
                  </p>
                  {feature.items && (
                    <div className="mt-4 flex flex-wrap gap-2">
                      {feature.items.map((item, j) => (
                        <span
                          key={j}
                          className="rounded-full border px-3 py-1 text-xs font-semibold"
                          style={{
                            borderColor: `${pillarColor}30`,
                            backgroundColor: `${pillarColor}08`,
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
