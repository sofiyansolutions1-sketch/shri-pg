import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Fullscreen, X, ChevronLeft, ChevronRight, Loader2 } from 'lucide-react';

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

// Preload images for faster viewing
const preloadImage = (src: string) => {
  const img = new Image();
  img.src = src;
};

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [loadedImages, setLoadedImages] = useState<Record<number, boolean>>({});

  useEffect(() => {
    // Preload the first few images
    galleryImages.slice(0, 4).forEach(preloadImage);
  }, []);

  const handleImageLoad = (index: number) => {
    setLoadedImages(prev => ({ ...prev, [index]: true }));
  };

  const nextImage = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (selectedImage !== null) {
      const nextIdx = (selectedImage + 1) % galleryImages.length;
      setSelectedImage(nextIdx);
      preloadImage(galleryImages[(nextIdx + 1) % galleryImages.length]);
    }
  };

  const prevImage = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (selectedImage !== null) {
      setSelectedImage((selectedImage - 1 + galleryImages.length) % galleryImages.length);
    }
  };

  return (
    <section className="py-12 bg-white min-h-screen px-4 md:px-8 max-w-7xl mx-auto">
      <div className="text-center mb-10">
        <motion.h2 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-3xl md:text-5xl font-display font-bold text-gray-900"
        >
          Our Visual Gallery
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-gray-500 mt-4 max-w-2xl mx-auto text-lg italic"
        >
          A glimpse into the comfort, hygiene, and amenities at Shri Sarvad PG Varanasi.
        </motion.p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {galleryImages.map((src, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: i * 0.05 }}
            onClick={() => setSelectedImage(i)}
            className="group relative aspect-square overflow-hidden rounded-2xl bg-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer border border-gray-100"
          >
            {!loadedImages[i] && (
              <div className="absolute inset-0 flex items-center justify-center bg-gray-50">
                <Loader2 className="w-6 h-6 text-blue-500 animate-spin" />
              </div>
            )}
            <img
              src={src}
              alt={`Gallery image ${i + 1}`}
              onLoad={() => handleImageLoad(i)}
              className={`h-full w-full object-cover transition-all duration-500 group-hover:scale-105 ${
                loadedImages[i] ? 'opacity-100' : 'opacity-0'
              }`}
              loading="lazy"
              onError={(e) => {
                // Fallback if URL is broken
                (e.target as HTMLImageElement).src = `https://picsum.photos/seed/pg${i}/800/800`;
              }}
            />
            
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                <div className="flex items-center gap-2 text-white">
                    <Fullscreen className="w-5 h-5" />
                    <span className="text-xs font-bold uppercase tracking-wider">View Room</span>
                </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-xl flex items-center justify-center p-4 md:p-12"
          >
            <button 
              className="absolute top-6 right-6 text-white/70 hover:text-white p-2 z-[110]"
              onClick={() => setSelectedImage(null)}
            >
              <X className="w-8 h-8" />
            </button>

            <button 
              className="absolute left-4 top-1/2 -translate-y-1/2 text-white/50 hover:text-white p-2 transition-colors z-[110]"
              onClick={prevImage}
            >
              <ChevronLeft className="w-10 h-10" />
            </button>

            <button 
              className="absolute right-4 top-1/2 -translate-y-1/2 text-white/50 hover:text-white p-2 transition-colors z-[110]"
              onClick={nextImage}
            >
              <ChevronRight className="w-10 h-10" />
            </button>

            <motion.div
              layoutId={`img-${selectedImage}`}
              className="relative max-w-5xl max-h-[80vh] w-full h-full flex items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={galleryImages[selectedImage]}
                alt="Room Full View"
                className="max-w-full max-h-full object-contain rounded-xl shadow-2xl"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = `https://picsum.photos/seed/pg-modal-${selectedImage}/1200/800`;
                }}
              />
              <div className="absolute -bottom-12 left-0 right-0 text-center text-white/80">
                <p className="text-sm font-medium">Image {selectedImage + 1} of {galleryImages.length}</p>
                <p className="text-xs mt-1 text-white/40">Shri Sarvad PG Varanasi - Premium Stay</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
