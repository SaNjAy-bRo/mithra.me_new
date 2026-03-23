import { notFound } from "next/navigation";
import { getServiceBySlug, getAllServiceSlugs } from "@/lib/data";
import ServiceHero from "@/components/sections/ServiceHero";
import FeatureGrid from "@/components/sections/FeatureGrid";
import GalleryGrid from "@/components/sections/GalleryGrid";
import CTASection from "@/components/sections/CTASection";
import type { Metadata } from "next";
import CinemaTabs from "@/components/sections/CinemaTabs";
import MediaShowcase from "@/components/sections/MediaShowcase";
import LEDInventory from "@/components/sections/LEDInventory";
import ComparisonTable from "@/components/sections/ComparisonTable";
import ProcessSection from "@/components/sections/ProcessSection";
import UseCases from "@/components/sections/UseCases";

interface ServicePageProps {
  params: { slug: string };
}

export function generateStaticParams() {
  return getAllServiceSlugs().map((slug) => ({ slug }));
}

export function generateMetadata({ params }: ServicePageProps): Metadata {
  const service = getServiceBySlug(params.slug);
  if (!service) return { title: "Service Not Found" };

  return {
    title: `${service.title} — Mithrah.ME`,
    description: service.hero.description,
  };
}

export default function ServicePage({ params }: ServicePageProps) {
  const service = getServiceBySlug(params.slug);
  if (!service) notFound();

  return (
    <>
      <ServiceHero hero={service.hero} pillarColor={service.pillarColor} />
      {params.slug === "cinema-advertising" ? (
        <>
          {service.gallery && (
            <GalleryGrid
              images={service.gallery.images}
              title={service.gallery.title}
              subtitle={service.gallery.subtitle}
            />
          )}
          <CinemaTabs pillarColor={service.pillarColor} />
        </>
      ) : (
        <>
          <FeatureGrid
            features={service.features}
            pillarColor={service.pillarColor}
          />

          {service.useCases ? (
            <UseCases
              pillarColor={service.pillarColor}
              title={service.useCases.title}
              subtitle={service.useCases.subtitle}
              useCases={service.useCases.items}
            />
          ) : (
            params.slug === "digital-wall-printing" && (
              <UseCases pillarColor={service.pillarColor} />
            )
          )}

          {service.showcase && (
            <MediaShowcase
              showcase={service.showcase}
              pillarColor={service.pillarColor}
            />
          )}

          {service.comparison && (
            <ComparisonTable
              comparison={service.comparison}
              pillarColor={service.pillarColor}
            />
          )}

          {service.process && (
            <ProcessSection
              process={service.process}
              pillarColor={service.pillarColor}
            />
          )}

          {params.slug === "led-advertising" && (
            <LEDInventory pillarColor={service.pillarColor} />
          )}

          {service.gallery && (
            <GalleryGrid
              images={service.gallery.images}
              title={service.gallery.title}
              subtitle={service.gallery.subtitle}
            />
          )}
        </>
      )}
      <CTASection cta={service.cta} />
    </>
  );
}
