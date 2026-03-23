import React from "react";
import { ServiceData } from "@/lib/types";

interface ComparisonTableProps {
  comparison: NonNullable<ServiceData["comparison"]>;
  pillarColor: string;
}

export default function ComparisonTable({
  comparison,
  pillarColor,
}: ComparisonTableProps) {
  return (
    <section className="py-24 lg:py-32 bg-brand-pale">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-4xl lg:text-5xl font-black text-brand-navy mb-4">
            {comparison.title}
          </h2>
          <p className="text-lg text-brand-text/70 max-w-2xl mx-auto">
            {comparison.subtitle}
          </p>
        </div>

        <div
          className="overflow-x-auto rounded-3xl border border-brand-line bg-white shadow-soft"
          data-aos="fade-up"
        >
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-brand-navy text-white">
                {comparison.columns.map((col, i) => (
                  <th
                    key={i}
                    className="px-6 py-5 text-sm font-bold uppercase tracking-wider first:rounded-tl-3xl last:rounded-tr-3xl"
                  >
                    {col}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-brand-line">
              {comparison.features.map((feature, i) => (
                <tr key={i} className="hover:bg-brand-pale/30 transition-colors">
                  <td className="px-6 py-5 font-bold text-brand-navy">
                    {feature.name}
                  </td>
                  {feature.options.map((option, j) => (
                    <td key={j} className="px-6 py-5">
                      <div className="flex flex-col gap-1">
                        <span
                          className={`text-sm font-medium ${
                            option.highlight
                              ? "text-brand-navy font-bold"
                              : "text-brand-text/70"
                          }`}
                        >
                          {option.label}
                        </span>
                        <div className="flex items-center gap-2">
                          <div className="h-1.5 w-full bg-brand-line rounded-full overflow-hidden max-w-[80px]">
                            <div
                              className="h-full rounded-full"
                              style={{
                                width:
                                  option.value === "High"
                                    ? "100%"
                                    : option.value === "Medium"
                                    ? "60%"
                                    : "30%",
                                backgroundColor: option.highlight
                                  ? pillarColor
                                  : "#94a3b8",
                              }}
                            />
                          </div>
                          <span className="text-[10px] uppercase font-black text-brand-text/40">
                            {option.value}
                          </span>
                        </div>
                      </div>
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
