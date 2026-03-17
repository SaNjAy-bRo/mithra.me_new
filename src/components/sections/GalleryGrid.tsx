"use client";
import Image from "next/image";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

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
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  return (
    <section className="py-24 lg:py-40 bg-white relative">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-20" data-aos="fade-up">
          <h2 className="text-4xl font-black tracking-tight text-brand-navy sm:text-5xl">
            {title}
          </h2>
          <p className="mt-6 text-xl text-brand-text/80 leading-relaxed font-medium">
            {subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {images.slice(0, 9).map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="relative overflow-hidden rounded-[2.5rem] group aspect-square cursor-pointer shadow-soft hover:shadow-2xl transition-all duration-500"
              onClick={() => setSelectedImage(i)}
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
                sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                loading={i < 4 ? "eager" : "lazy"}
                priority={i < 2}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col justify-end p-6">
                <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <p className="text-white font-bold text-sm uppercase tracking-widest mb-2">View Execution</p>
                  <div className="h-1 w-8 bg-white/50 rounded-full" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-brand-navy/95 backdrop-blur-xl p-4 md:p-10"
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative max-w-5xl w-full h-full flex items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative w-full h-[80vh]">
                <Image
                  src={images[selectedImage].src}
                  alt={images[selectedImage].alt}
                  fill
                  className="object-contain"
                  sizes="100vw"
                  priority
                />
              </div>
              
              {/* Navigation Controls */}
              <button 
                className="absolute top-4 right-4 text-white p-4 hover:scale-110 transition-transform"
                onClick={() => setSelectedImage(null)}
              >
                <i className="ph-bold ph-x text-3xl" />
              </button>

              <button 
                className="absolute left-0 text-white p-4 hover:translate-x-[-4px] transition-transform"
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedImage((selectedImage - 1 + images.length) % images.length);
                }}
              >
                <i className="ph-bold ph-caret-left text-4xl" />
              </button>

              <button 
                className="absolute right-0 text-white p-4 hover:translate-x-[4px] transition-transform"
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedImage((selectedImage + 1) % images.length);
                }}
              >
                <i className="ph-bold ph-caret-right text-4xl" />
              </button>

              <div className="absolute bottom-[-4rem] left-0 right-0 text-center">
                <p className="text-white/60 text-sm font-medium tracking-widest uppercase">
                  {selectedImage + 1} / {images.length} — {images[selectedImage].alt}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
