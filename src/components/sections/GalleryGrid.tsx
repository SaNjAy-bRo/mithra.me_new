"use client";
import Image from "next/image";

interface GalleryGridProps {
  images: { src: string; alt: string }[];
  title: string;
  subtitle: string;
}

export default function GalleryGrid({
  images,
  title,
  subtitle,
}: GalleryGridProps) {
  return (
    <section className="py-20 lg:py-32 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16" data-aos="fade-up">
          <h2 className="text-3xl font-black tracking-tight text-brand-navy sm:text-4xl">
            {title}
          </h2>
          <p className="mt-4 text-lg text-brand-text">{subtitle}</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {images.slice(0, 9).map((img, i) => (
            <div
              key={i}
              className="relative overflow-hidden rounded-2xl group aspect-square"
              data-aos="zoom-in"
              data-aos-delay={50 + i * 50}
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
                sizes="(max-width: 768px) 50vw, 33vw"
              />
              <div className="absolute inset-0 bg-brand-navy/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <i className="ph-bold ph-magnifying-glass-plus text-3xl text-white" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
