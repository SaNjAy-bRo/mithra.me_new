import { notFound } from "next/navigation";
import { getServiceBySlug, getAllServiceSlugs } from "@/lib/data";
import ServiceHero from "@/components/sections/ServiceHero";
import FeatureGrid from "@/components/sections/FeatureGrid";
import GalleryGrid from "@/components/sections/GalleryGrid";
import CTASection from "@/components/sections/CTASection";
import type { Metadata } from "next";

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

import TheatreDropdown from "@/components/sections/TheatreDropdown";
import LobbyDropdown from "@/components/sections/LobbyDropdown";
import LEDInventory from "@/components/sections/LEDInventory";

export default function ServicePage({ params }: ServicePageProps) {
  const service = getServiceBySlug(params.slug);
  if (!service) notFound();

  return (
    <>
      <ServiceHero hero={service.hero} pillarColor={service.pillarColor} />
      {params.slug === "cinema-advertising" && (
        <>
          <TheatreDropdown pillarColor={service.pillarColor} />
          <LobbyDropdown pillarColor={service.pillarColor} />
        </>
      )}
      {params.slug === "led-advertising" && (
        <LEDInventory pillarColor={service.pillarColor} />
      )}
      <FeatureGrid
        features={service.features}
        pillarColor={service.pillarColor}
      />
      <GalleryGrid
        images={service.gallery.images}
        title={service.gallery.title}
        subtitle={service.gallery.subtitle}
      />
      <CTASection cta={service.cta} />
    </>
  );
}
