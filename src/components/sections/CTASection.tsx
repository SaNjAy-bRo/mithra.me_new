import Link from "next/link";
import { ServiceData } from "@/lib/types";

interface CTASectionProps {
  cta: ServiceData["cta"];
}

export default function CTASection({ cta }: CTASectionProps) {
  return (
    <section className="py-16 bg-white border-t border-brand-line/50">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div
          className="rounded-3xl bg-brand-navy p-8 sm:p-12 text-center text-white relative overflow-hidden"
          data-aos="zoom-in"
        >
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10" />
          <div className="relative z-10">
            <i
              className={`ph-bold ${cta.icon} text-5xl text-brand-coral mb-6`}
            />
            <h3 className="text-2xl sm:text-3xl font-bold mb-4">{cta.title}</h3>
            <p className="text-white/80 mb-8 max-w-2xl mx-auto">
              {cta.description}
            </p>
            <Link
              href="/#contact"
              className="inline-flex items-center justify-center rounded-full bg-brand-coral px-8 py-4 text-sm font-bold text-white shadow-lg transition hover:bg-[#eb5f57]"
            >
              {cta.buttonText}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
