import Image from "next/image";

interface ShowcaseItem {
  title: string;
  subtitle: string;
  description: string;
  image: string;
  uses: string[];
  benefits: string[];
}

interface MediaShowcaseProps {
  showcase: {
    title: string;
    description: string;
    items: ShowcaseItem[];
  };
  pillarColor: string;
}

export default function MediaShowcase({
  showcase,
  pillarColor,
}: MediaShowcaseProps) {
  return (
    <section className="py-24 lg:py-32 bg-white overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20" data-aos="fade-up">
          <h2 className="text-4xl lg:text-5xl font-black text-brand-navy mb-4">
            {showcase.title}
          </h2>
          <p className="text-lg text-brand-text/70 max-w-2xl mx-auto">
            {showcase.description}
          </p>
        </div>

        <div className="space-y-32">
          {showcase.items.map((item, i) => (
            <div
              key={i}
              className={`flex flex-col lg:flex-row items-center gap-16 ${
                i % 2 === 1 ? "lg:flex-row-reverse" : ""
              }`}
            >
              {/* Image Side */}
              <div 
                className="w-full lg:w-1/2 relative"
                data-aos={i % 2 === 0 ? "fade-right" : "fade-left"}
              >
                <div 
                  className="absolute -inset-4 rounded-[3rem] opacity-20 blur-2xl"
                  style={{ backgroundColor: pillarColor }}
                />
                <div className="relative aspect-[4/3] rounded-[2.5rem] overflow-hidden shadow-2xl border-8 border-white">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
              </div>

              {/* Content Side */}
              <div 
                className="w-full lg:w-1/2"
                data-aos={i % 2 === 0 ? "fade-left" : "fade-right"}
              >
                <div className="inline-block px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-widest mb-4"
                     style={{ backgroundColor: `${pillarColor}15`, color: pillarColor }}>
                  {item.subtitle}
                </div>
                <h3 className="text-3xl lg:text-4xl font-black text-brand-navy mb-6">
                  {item.title}
                </h3>
                <p className="text-brand-text/80 text-lg mb-8 leading-relaxed">
                  {item.description}
                </p>

                <div className="grid sm:grid-cols-2 gap-8">
                  {/* How it's Used */}
                  <div>
                    <h4 className="text-sm font-black uppercase tracking-wider text-brand-navy/60 mb-4 flex items-center gap-2">
                       <i className="ph-bold ph-strategy" /> How It&apos;s Used
                    </h4>
                    <ul className="space-y-3">
                      {item.uses.map((use, j) => (
                        <li key={j} className="flex items-start gap-3 text-sm font-bold text-brand-navy">
                          <i className="ph-bold ph-check-circle mt-0.5" style={{ color: pillarColor }} />
                          {use}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Why it Works */}
                  <div>
                    <h4 className="text-sm font-black uppercase tracking-wider text-brand-navy/60 mb-4 flex items-center gap-2">
                       <i className="ph-bold ph-lightning" /> Why It Works
                    </h4>
                    <ul className="space-y-3">
                      {item.benefits.map((benefit, j) => (
                        <li key={j} className="flex items-start gap-3 text-sm font-bold text-brand-navy">
                          <i className="ph-bold ph-trend-up mt-0.5" style={{ color: pillarColor }} />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
