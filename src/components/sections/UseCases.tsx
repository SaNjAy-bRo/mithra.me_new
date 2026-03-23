interface UseCase {
  title: string;
  description: string;
  icon: string;
}

interface UseCasesProps {
  pillarColor: string;
  title?: string;
  subtitle?: string;
  useCases?: UseCase[];
}

const defaultUseCases: UseCase[] = [
  {
    title: "Retail & Shop Fronts",
    description: "Print on shop shutters and adjacent walls to attract walk-in customers.",
    icon: "ph-storefront",
  },
  {
    title: "Healthcare & Clinics",
    description: "Promote doctors and health camps near hospitals and residential lanes.",
    icon: "ph-first-aid",
  },
  {
    title: "Education & Coaching",
    description: "Reach parents and students in key school zones during admission season.",
    icon: "ph-graduation-cap",
  },
  {
    title: "Real Estate & Housing",
    description: "Display project highlights on boundary walls near project sites.",
    icon: "ph-buildings",
  },
  {
    title: "Restaurants & Food",
    description: "Put your menu highlights in front of hungry eyes near busy streets.",
    icon: "ph-fork-knife",
  },
  {
    title: "Events & Launches",
    description: "Create pre-event buzz near venues and high-footfall intersections.",
    icon: "ph-ticket",
  },
];

export default function UseCases({
  pillarColor,
  title = "Ideal Use Cases",
  subtitle = "Strategic wall placements for high-impact ROI across diverse industries.",
  useCases = defaultUseCases,
}: UseCasesProps) {
  return (
    <section className="py-24 lg:py-32 bg-white overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-4xl lg:text-5xl font-black text-brand-navy mb-4">
            {title}
          </h2>
          <p className="text-lg text-brand-text/70 max-w-2xl mx-auto">
            {subtitle}
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {useCases.map((useCase, i) => (
            <div
              key={i}
              className="group p-8 rounded-3xl border border-brand-line bg-white hover:border-brand-navy shadow-soft-hover transition-all duration-300"
              data-aos="fade-up"
              data-aos-delay={i * 100}
            >
              <div
                className="w-14 h-14 rounded-2xl flex items-center justify-center text-3xl mb-6 transition-transform group-hover:scale-110 group-hover:rotate-3"
                style={{ backgroundColor: `${pillarColor}15`, color: pillarColor }}
              >
                <i className={`ph-bold ${useCase.icon}`} />
              </div>
              <h3 className="text-xl font-bold text-brand-navy mb-3 group-hover:text-brand-orange transition-colors">
                {useCase.title}
              </h3>
              <p className="text-brand-text/70 leading-relaxed text-sm">
                {useCase.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
