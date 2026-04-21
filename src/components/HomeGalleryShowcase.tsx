import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const galleryImages = [
  "https://iili.io/BrEFXlj.png",
  "https://iili.io/BrE5dxa.png",
  "https://iili.io/BrEKmhP.png",
  "https://iili.io/BrEfsnt.png",
  "https://iili.io/BrEqyga.png",
  "https://iili.io/BrEBNrg.png",
  "https://iili.io/BrExr9s.png",
  "https://iili.io/BrECYjp.png",
  "https://iili.io/BrEn5le.png",
  "https://iili.io/BrEorQV.png",
  "https://iili.io/BrEAPGR.png"
];

const Row = ({ images, speed, reverse }: { images: string[], speed: number, reverse?: boolean }) => {
  return (
    <div className="flex overflow-hidden py-2 select-none group">
      <motion.div
        animate={{
          x: reverse ? [0, -1035] : [-1035, 0],
        }}
        transition={{
          x: {
            repeat: Infinity,
            repeatType: "loop",
            duration: speed,
            ease: "linear",
          },
        }}
        className="flex flex-nowrap gap-4 min-w-max"
      >
        {[...images, ...images, ...images].map((src, i) => (
          <div key={i} className="w-64 h-48 md:w-80 md:h-60 rounded-3xl overflow-hidden shadow-lg border border-gray-100 flex-shrink-0">
            <img 
              src={src} 
              alt="Gallery" 
              className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
              referrerPolicy="no-referrer"
            />
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default function HomeGalleryShowcase() {
  // Split images into 3 rows
  const row1 = galleryImages.slice(0, 4);
  const row2 = galleryImages.slice(4, 8);
  const row3 = galleryImages.slice(7, 11);

  return (
    <section className="py-16 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-8 mb-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <h2 className="text-3xl md:text-5xl font-display font-bold text-gray-900 tracking-tight">Our Living Showcase</h2>
            <p className="text-gray-500 mt-4 max-w-xl text-lg">
              Explore the real environment of Shri Sarvad PG. Every corner is designed for your comfort and peace of mind.
            </p>
          </div>
          <button 
            onClick={() => window.dispatchEvent(new CustomEvent('changeTab', { detail: 'gallery' }))}
            className="px-8 py-4 bg-gray-900 text-white rounded-2xl font-bold hover:bg-black transition-all shadow-xl shadow-gray-200 flex-shrink-0"
          >
            View Full Gallery
          </button>
        </div>
      </div>

      <div className="flex flex-col gap-4">
        <Row images={row1} speed={40} />
        <Row images={row2} speed={50} reverse={true} />
        <Row images={row3} speed={45} />
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 mt-12 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 text-blue-600 rounded-full text-sm font-bold animate-pulse">
            <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
            Swipe to explore our premium facilities
        </div>
      </div>
    </section>
  );
}
